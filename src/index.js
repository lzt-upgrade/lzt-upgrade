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
import ErrorPageButton from "UI/buttons/errorPageButton";

import onClickCategory from "Events/categories";

import { waitForElement, waitForCSRFToken } from "Utils/utils";
import { Logger } from "Utils/logger";
import { registerMenuButton, registerObserver } from "Utils/registers";
import { contestsTagsVisibility, contestThreadBlockMove, contestsHideContent, contestsHidePoll } from 'Utils/contests';
import { addUserIdToProfile, addUserIdToMemberCard, showFullRegDateInProfile } from 'Utils/users';
import { bypassShareTyping } from "Xenforo/bypass";
import { getUserId, getUsername } from 'Utils/users';
import { updateUserStyle, updateUserBanner, updateUserBadges } from 'Visuals/users';


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

      const selfAdTelegram = new ErrorPageButton(
        `
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path d="M9.78 18.65l.28-4.23l7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3L3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/>
          </svg>
          Telegram
        `,
        extData.links.telegramChannel
      ).createElement();

      const selfAdGithub = new ErrorPageButton(
        `
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/>
          </svg>
          Github
        `,
        extData.links.githubPage
      ).createElement();

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
      if (dbProfileData.usernameStyle || dbProfileData.badgeIcons.length) {
        if (dbProfileData.usernameStyle) {
          updateUserStyle(dbProfileData.usernameStyle);
        }

        if (dbProfileData.badgeIcons.length) {
          updateUserBadges(dbProfileData.badgeIcons);
        }

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
            if (updatedProfileData.usernameStyle) {
              updateUserStyle(updatedProfileData.usernameStyle)
            }

            if (updatedProfileData.badgeIcons.length) {
              updateUserBadges(updatedProfileData.badgeIcons);
            }
          }
        });
      }

      if (dbProfileData.bannerStyle && dbProfileData.bannerText) {
        updateUserBanner(dbProfileData.bannerStyle, dbProfileData.bannerText);
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