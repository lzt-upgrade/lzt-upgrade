import config from "Configs/config";
import { getThemes } from "API/lztupgrade/getThemes";
import { loadTheme } from "API/lztupgrade/loadTheme";

import { contestsAutoCloseHandler } from "Callbacks/contestsAutoClose";

import { LZTAppearDB } from "IndexedDB/appear";
import { LZTContestsDB } from "IndexedDB/contests";
import { LZTUsersDB } from "IndexedDB/users";
import { LZTProfileDB } from "IndexedDB/profile";
import { LZTSettingsDB } from "IndexedDB/settings";

import { regOpenContestsBtn } from "UI/buttons/contestsButton";
import menuButton from "UI/buttons/menuButton";

import { waitForElement } from "Utils/utils";
import { Logger } from "Utils/logger";
import { registerMenuButton } from "Utils/registers";
import { onClickCategoryContestsHandler } from "Utils/handlers"
import { contestsTagsVisibility } from "Utils/contests";
import { contestThreadBlockMove, contestsBtnInBlockMove } from 'Utils/contests';

// import 'Styles/main.css';

// import 'Styles/sign.css';
// import 'Styles/coloris.css';

async function main() {
  const profileDB = new LZTProfileDB();
  const usersDB = new LZTUsersDB();
  const settingsDB = new LZTSettingsDB();

  if (GM_info?.script?.version) Logger.log(`${config.extName} version: ${GM_info?.script?.version}`);

  // Loading selected theme
  const appearDB = new LZTAppearDB();
  await appearDB.init();
  const dbAppearData = await appearDB.read();

  if (dbAppearData?.theme > 0) {
    const availabledThemes = await getThemes();
    if (availabledThemes && availabledThemes.length) {
      availabledThemes.forEach(async(theme) => {
        if (theme.active === 1 && theme.uid === dbAppearData?.theme) {
          await loadTheme(theme.file);
        };
      });
    }
  }

  const SCRIPT_LOADED = await waitForElement('body', 120000);
  if (!SCRIPT_LOADED) {
    Logger.error('Не удалось запустить расширение.');
    return;
  }

  const username = $('.accountUsername span').text();
  const userid = XenForo._csrfToken.split(',')[0];
  const userAvatar = $('img.navTab--visitorAvatar').attr('src');

  Logger.debug('┏━━━━━━━━ DEBUG INFO ━━━━━━━━━━┓');
  Logger.debug(`Script version: ${GM_info?.script?.version}`);
  Logger.debug(`Account username: ${username}`);
  Logger.debug(`Account userid: ${userid}`);
  Logger.debug(`Account userAvatar: ${userAvatar}`);
  Logger.debug('┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┚');

  registerMenuButton(menuButton);

  const contestsDB = new LZTContestsDB();
  await contestsDB.init();
  const dbContestsData = await contestsDB.read();

  if (dbContestsData.contestsTen === 1 || dbContestsData.contestsAll === 1) {
    dbContestsData.contestsTen === 1 ? regOpenContestsBtn(10) : null;
    dbContestsData.contestsAll === 1 ? regOpenContestsBtn(100) : null;

    onClickCategoryContestsHandler(() => {
      dbContestsData.contestsTen === 1 ? regOpenContestsBtn(10) : null;
      dbContestsData.contestsAll === 1 ? regOpenContestsBtn(100) : null;
    });

    dbContestsData.contestsHideTags === 1 ? contestsTagsVisibility(true) : null;
    dbContestsData.contestsAutoClose === 1 ? contestsAutoCloseHandler(true) : null;
    dbContestsData.contestsInfoTop === 1 ? contestThreadBlockMove(true) : null;
    dbContestsData.contestsBtnTopInBlock === 1 ? contestsBtnInBlockMove(true) : null;
  }



  // let uniqueStyleDBInited = profileDB.init();
  // Logger.log(uniqueStyleDBInited)

  // if (uniqueStyleDBInited) {
  //   const dbUniqueStyleData = await profileDB.read()
  //   console.log(dbUniqueStyleData.nickStyle)
  //   if (dbUniqueStyleData.nickStyle === '.style7') {
  //     Logger.log(`LZT Unique Style loaded (1): ${dbUniqueStyleData}`)
  //     Logger.log(`LZT Unique Style loaded (2): ${dbUniqueStyleData.nickStyle}`)
  //   } else {
  //     await profileDB.update({nickStyle: '.style7'});
  //     Logger.error(`LZT Unique Style not loaded (1): ${dbUniqueStyleData}`)
  //     Logger.error(`LZT Unique Style not loaded (2): ${dbUniqueStyleData.nickStyle}`)
  //   }
  // }
}

main().catch((e) => {
  console.log(e);
});