import config from "Configs/config";
import extData from 'Configs/extData';

import { contestsAutoCloseHandler } from "Callbacks/contestsAutoClose";
import { loadThemeByID } from 'Callbacks/extensionStart';

import { LZTAppearDB } from "IndexedDB/appear";
import { LZTContestsDB } from "IndexedDB/contests";
import { LZTUsersDB } from "IndexedDB/users";
import { LZTProfileDB } from "IndexedDB/profile";
import { LZTSettingsDB } from "IndexedDB/settings";

import { regOpenContestsBtn } from "UI/buttons/contestsButton";
import menuButton from "UI/buttons/menuButton";

import onClickCategory from "Events/categories";

import { waitForElement, waitForCSRFToken } from "Utils/utils";
import { Logger } from "Utils/logger";
import { registerMenuButton, registerObserver } from "Utils/registers";
import { contestsTagsVisibility, contestThreadBlockMove, contestsHideContent, contestsHidePoll } from 'Utils/contests';
import { addUserIdToProfile, addUserIdToMemberCard, showFullRegDateInProfile } from 'Utils/users';
import { bypassShareTyping } from "Xenforo/bypass";
import { getUserId, getUsername } from 'Utils/users';
import { updateUserStyle, updateUserBanner } from 'Visuals/users';


// import 'Styles/main.css';

import 'Styles/errorPage.scss';
// import 'Styles/coloris.css';

async function main() {
  const settingsDB = new LZTSettingsDB();

  if (GM_info?.script?.version) Logger.log(`${config.extName} version: ${GM_info?.script?.version}`);

  const SCRIPT_LOADED = await waitForElement('body', 120000);
  if (!SCRIPT_LOADED) {
    Logger.error('Не удалось запустить расширение.');
    return;
  }

  if (SCRIPT_LOADED.length) {
    const appearDB = new LZTAppearDB();
    await appearDB.init();
    const dbAppearData = await appearDB.read();

    if (/^(Error\s[0-9]{3}|Site\sMaintenance)$/.test(document.head.querySelector('title').innerText)) {
      if (!dbAppearData || dbAppearData?.newErrorPage === 0) {
        return;
      }

      document.body.classList.add('LZTUpErrorPage');
      const container = document.body.querySelector('article > div');
      const duckRain = document.createElement('img');
      duckRain.src = "https://i.imgur.com/iVmKDr7.gif";
      duckRain.alt = "Duck rain";
      container.appendChild(duckRain);

      if (dbAppearData?.selfAdOnNewErrorPage === 0) {
        return;
      }

      // self ad don't delete me please :(
      const selfAdBlock = document.createElement('div');
      selfAdBlock.classList.add('LZTUpErrorPageSelfAd')
      const selfAdText = document.createElement('p');
      selfAdText.innerText = 'Пока форум недоступен, рекомендуем ознакомиться с нашими соц. сетями'
      selfAdText.classList.add('selfAd');

      const selfAdButtonBlock = document.createElement('div');
      selfAdButtonBlock.classList.add('buttons');

      const selfAdTelegram = document.createElement('a');
      selfAdTelegram.classList.add('button');
      selfAdTelegram.innerText = 'Telegram';
      selfAdTelegram.href = 'https://t.me/lzt_upgrade';

      const selfAdGithub = document.createElement('a');
      selfAdGithub.classList.add('button');
      selfAdGithub.innerText = 'Github';
      selfAdGithub.href = 'https://github.com/lzt-upgrade/lzt-upgrade';

      selfAdButtonBlock.appendChild(selfAdTelegram);
      selfAdButtonBlock.appendChild(selfAdGithub);

      selfAdBlock.appendChild(selfAdText);
      selfAdBlock.appendChild(selfAdButtonBlock);
      container.appendChild(selfAdBlock);

      return;
    }

    await waitForCSRFToken(120000);
    const username = getUsername('me');
    const userid = getUserId('me');
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

    const usersDB = new LZTUsersDB();
    await usersDB.init();
    const dbUsersData = await usersDB.read();

    const profileDB = new LZTProfileDB();
    await profileDB.init();
    const dbProfileData = await profileDB.read();

    if (dbAppearData) {
      if (dbAppearData?.theme > 0) {
        Logger.debug(`Requesting theme with id ${dbAppearData.theme}...`);
        loadThemeByID(dbAppearData.theme)
        .catch(err => console.error(err));
      }
    }

    if (dbProfileData) {
      if (dbProfileData.usernameStyle) {
        updateUserStyle(dbProfileData.usernameStyle);
        registerObserver(async (mutation) => {
          Logger.debug(mutation)
          if (
            mutation.target.classList.contains('ProfilePostList') ||
            mutation.target.classList.contains('messageList') ||
            mutation.target.classList.contains('CommentPostList') ||
            mutation.target.classList.contains('discussionList') ||
            mutation.target.classList.contains('chat2-messages') ||
            mutation.target.classList.contains('fe-ac-user') ||
            mutation.target.parentElement?.classList.contains('conversationMessages') ||
            mutation.nextSibling?.classList?.contains('modal') ||
            mutation.previousSibling?.classList?.contains('Alert') ||
            mutation.previousSibling?.nextSibling?.classList?.contains('Alert') ||
            mutation.target.id === 'AlertsDestinationWrapper' ||
            mutation.target.id === 'StackAlerts'
          ) {
            const updatedProfileData = await profileDB.read();
            updateUserStyle(updatedProfileData.usernameStyle)
          }
        });
      }

      if (dbProfileData.bannerStyle && dbProfileData.bannerText) {
        updateUserBanner(dbProfileData.bannerStyle, dbProfileData.bannerText);
      }

      if (dbProfileData.badges) {
        console.log('test')
      }
    }

    if (dbContestsData) {
      dbContestsData.openTenContestsBtn === 1 ? regOpenContestsBtn(10) : null;

      onClickCategory(extData.nodes.contests, async () => {
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
      dbUsersData.showUserIdInProfile === 1 ? addUserIdToProfile() : null;
      if (dbUsersData.showUserIdInMemberCard === 1) {
        addUserIdToMemberCard();
        registerObserver((mutation) => {
          if (mutation.nextSibling) {
            if (mutation.nextSibling?.classList?.contains('modal')) {
              addUserIdToMemberCard()
            }
          }
        });
      }
      dbUsersData.showFullRegInProfile === 1 ? showFullRegDateInProfile(true) : null;
      dbUsersData.disableShareTyping === 1 ? bypassShareTyping() : null;
    }
  }
}

main().catch((e) => {
  console.error(e);
});