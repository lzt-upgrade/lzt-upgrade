import SiteType from "Configs/SiteType";
import logoAPI from "API/lztupgrade/logoAPI";
import LZTUp from "Utils/gmWrapper";
import { ucFirst } from "Utils/utils";
import themeAPI from "API/lztupgrade/themeAPI";
import CacheKeys from "Configs/CacheKeys";

async function updateCachedLogos(logoType) {
  const cacheItemName = `availabled${ucFirst(logoType)}Logos`;
  const cacheKey = CacheKeys.getKeyByName(cacheItemName);
  const logoTargetInt = logoType === SiteType.Forum ? 1 : 2;
  const logos = (await logoAPI.getLogos(logoTargetInt)) || cacheKey.value;
  return await LZTUp.setCache(cacheKey.name, logos);
}

async function updateCachedThemes() {
  const themes = (await themeAPI.getThemes()) || [];
  return await LZTUp.setCache(CacheKeys.availabledThemes.name, themes);
}

export { updateCachedLogos, updateCachedThemes };
