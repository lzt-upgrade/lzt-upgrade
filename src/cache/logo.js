import SiteType from 'Configs/SiteType';
import StorageName from 'Configs/StorageName';
import config from "Configs/config";
import logoAPI from 'API/lztupgrade/logoAPI';
import Logger from "Utils/logger";

import { getTimestamp } from 'Utils/utils';
import { setLogo } from 'Visuals/universal';


async function setLogoFromCache(logoType, logoUID) {
  const timestampOnStart = getTimestamp();
  const cacheName = logoType === SiteType.Forum ? 'forumLogo' : 'marketLogo';
  let logo = await GM_getValue(StorageName.Cache, {})?.[cacheName];
  let logoCSS = logo?.css ?? '';
  let logoCacheTime = logo?.cacheTime ?? 0;
  if (
    logo?.uid !== logoUID ||
    !logoCSS ||
    logoCacheTime < timestampOnStart
  ) {
    Logger.debug(`Requesting logo with id ${logoUID}...`);
    const newForumLogo = await logoAPI.getLogoByUID(logoUID)
      .catch(err => console.error(err));

    console.log(newForumLogo)
    if (newForumLogo?.css) {
      const newCacheLogo = {
        uid: newForumLogo.uid,
        css: newForumLogo.css,
        cacheTime: getTimestamp() + config.cacheTime
      }

      logoCSS = newCacheLogo.css;
      let cacheData = await GM_getValue(StorageName.Cache, {});
      cacheData[cacheName] = newCacheLogo;
      await GM_setValue(StorageName.Cache, cacheData);
    }
  }

  setLogo(logoCSS, logoType);
}

export {
  setLogoFromCache
}