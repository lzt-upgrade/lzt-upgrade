import config from "Configs/config";

import { contestsAutoCloseHandler } from "Callbacks/contestsAutoClose";

import { LZTAppearDB } from "IndexedDB/appear";
import { LZTContestsDB } from "IndexedDB/contests";
import { LZTUsersDB } from "IndexedDB/users";
import { LZTProfileDB } from "IndexedDB/profile";
import { LZTSettingsDB } from "IndexedDB/settings";

import { regOpenContestsBtn } from "UI/buttons/contestsButton";
import menuButton from "UI/buttons/menuButton";

import onExtensionStart from "Events/extension";
import onClickCategory from "Events/categories";

import { waitForElement, waitForCSRFToken } from "Utils/utils";
import { Logger } from "Utils/logger";
import { registerMenuButton } from "Utils/registers";
import { contestsTagsVisibility, contestThreadBlockMove, contestsHideContent, contestsHidePoll } from 'Utils/contests';
import { addUserId, showFullRegDateInProfile } from 'Utils/users';
import { bypassShareTyping } from "Xenforo/bypass";

// import 'Styles/main.css';

// import 'Styles/sign.css';
// import 'Styles/coloris.css';

async function main() {
  const profileDB = new LZTProfileDB();
  const settingsDB = new LZTSettingsDB();

  if (GM_info?.script?.version) Logger.log(`${config.extName} version: ${GM_info?.script?.version}`);

  const SCRIPT_LOADED = await waitForElement('body', 120000);
  if (!SCRIPT_LOADED) {
    Logger.error('Не удалось запустить расширение.');
    return;
  }

  if (SCRIPT_LOADED.length) {
    const _csrfToken = await waitForCSRFToken(120000);
    const username = $('.accountUsername span').text();
    const userid = _csrfToken.split(',')[0];
    const userAvatar = $('img.navTab--visitorAvatar').attr('src');

    Logger.debug('┏━━━━━━━━ DEBUG INFO ━━━━━━━━━━┓');
    Logger.debug(`Script version: ${GM_info?.script?.version}`);
    Logger.debug(`Account username: ${username}`);
    Logger.debug(`Account userid: ${userid}`);
    Logger.debug(`Account userAvatar: ${userAvatar}`);
    Logger.debug('┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┚');

    registerMenuButton(menuButton);

    const appearDB = new LZTAppearDB();
    await appearDB.init();
    const dbAppearData = await appearDB.read();

    const contestsDB = new LZTContestsDB();
    await contestsDB.init();
    const dbContestsData = await contestsDB.read();

    const usersDB = new LZTUsersDB();
    await usersDB.init();
    const dbUsersData = await usersDB.read();

    if (dbContestsData) {
      dbContestsData.openTenContestsBtn === 1 ? regOpenContestsBtn(10) : null;

      onClickCategory(config.nodeSelectors.contests, async () => {
        const contestsDB = new LZTContestsDB();
        const dbContestsData = await contestsDB.read();
        dbContestsData.openTenContestsBtn === 1 ? regOpenContestsBtn(10) : null;
      });

      dbContestsData.hideTagsInThread === 1 ? contestsTagsVisibility(true) : null;
      dbContestsData.autoCloseOnParticipate === 1 ? contestsAutoCloseHandler(true) : null;
      dbContestsData.infoTopInThread === 1 ? contestThreadBlockMove(true) : null;
      dbContestsData.removeContent === 1 ? contestsHideContent(true) : null;
      dbContestsData.removePoll === 1 ? contestsHidePoll(true) : null;
    }

    if (dbUsersData) {
      dbUsersData.showUserId === 1 ? addUserId() : null;
      dbUsersData.showFullRegInProfile === 1 ? showFullRegDateInProfile(true) : null;
      dbUsersData.disableShareTyping === 1 ? bypassShareTyping() : null;
    }

    // Loading selected theme
    if (dbAppearData?.theme > 0) {
      try {
        Logger.debug(`Requesting theme with id ${dbAppearData.theme}...`);
        const status = await onExtensionStart(dbAppearData.theme);
        Logger.debug(`Theme status: ${status}`);
      } catch (e) {
        Logger.error(`Failed to request theme with id ${dbAppearData.theme}`, e);
      }
    }
  }
}

main().catch((e) => {
  console.error(e);
});