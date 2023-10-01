import { loadTheme } from "API/lztupgrade/loadTheme";

import config from "Configs/config";
import extData from 'Configs/extData';
import StorageName from 'Configs/StorageName';

import { contestsAutoCloseHandler } from "Callbacks/contestsAutoClose";
import { getThemeByID } from 'Callbacks/extensionStart';

import { LZTAppearDB } from "IndexedDB/appear";
import { LZTProfileDB } from "IndexedDB/profile";

import { regOpenContestsBtn } from "UI/buttons/contestsButton";
import menuButton from "UI/buttons/menuButton";
import ErrorPageButton from "UI/buttons/errorPageButton";

import onClickCategory from "Events/categories";

import { Logger } from "Utils/logger";
import { registerMenuButton, registerObserver } from "Utils/registers";
import {
  contestsTagsVisibility,
  contestThreadBlockMove,
  contestsHideContent,
  contestsHidePoll,
  contestsUpdateCapctha,
  contestsAutoFixCaptcha
} from 'Utils/contests';
import { addUserIdToProfile, addUserIdToMemberCard, showFullRegDateInProfile } from 'Utils/users';
import { bypassShareTyping } from "Xenforo/bypass";
import { getUserId, getUsername, getUserGroup } from 'Utils/users';
import { updateUserStyle, updateUserBanner, updateUserBadges } from 'Visuals/users';
import { addBackgroundImage } from 'Visuals/universal';
import { addBackgroundImageInProfile } from 'Visuals/profile';
import { isProfilePage } from 'Utils/checkers';


// import 'Styles/main.css';

import 'Styles/errorPage.scss';
import 'Styles/universal.scss';
import 'Styles/xenforo.scss';


async function initTheme() {
  // exec time: 50-200ms
  console.time("init-theme");

  console.timeLog("init-theme", "loading appearDB...")
  const appearDB = new LZTAppearDB();
  console.timeLog("init-theme", "getting dbAppearData...")
  const dbAppearData = await appearDB.read();
  console.timeLog("init-theme", "loading name from cache...")
  let themeName = await GM_getValue(StorageName.Cache, {}).themeName;
  console.timeLog("init-theme", "Check themeName valid...")
  if (!themeName && dbAppearData?.theme > 0) {
    Logger.debug(`Requesting theme with id ${dbAppearData.theme}...`);
    themeName = await getThemeByID(dbAppearData.theme)
      .catch(err => console.error(err));
    let cacheData = await GM_getValue(StorageName.Cache, {});
    cacheData.themeName = themeName;
    await GM_setValue(StorageName.Cache, cacheData);
  }
  console.timeLog("Loading theme...");
  loadTheme(themeName);
  console.timeEnd("init-theme");
}

async function main() {
  console.time("lztup-start")

  if (GM_info?.script?.version) Logger.log(`${config.extName} version: ${GM_info?.script?.version}`);

  console.timeLog("lztup-start", "Waiting body...")
  document.addEventListener('DOMContentLoaded', async () => {
    console.timeLog("lztup-start", "Body loaded successfully")
    if (/^(Error\s[0-9]{3}|Site\sMaintenance)$/.test(document.head.querySelector('title').innerText)) {
      if (!dbAppearData || dbAppearData?.newErrorPage === 0) {
        return;
      }

      // custom error page
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

    console.timeLog("lztup-start", "GET DEBUG INFO")
    const username = getUsername('me');
    const userid = getUserId('me');
    const userGroup = getUserGroup('me');
    const userAvatar = $('img.navTab--visitorAvatar').attr('src');

    Logger.debug('┏━━━━━━━━ DEBUG INFO ━━━━━━━━━━┓');
    Logger.debug(`Script version: ${GM_info?.script?.version}`);
    Logger.debug(`Account username: ${username}`);
    Logger.debug(`Account userid: ${userid}`);
    Logger.debug(`Account userGroup: ${userGroup}`);
    Logger.debug(`Account userAvatar: ${userAvatar}`);
    Logger.debug('┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┚');

    console.timeLog("lztup-start", "Register menu button")
    registerMenuButton(menuButton);

    console.timeLog("lztup-start", "Add user group to cache")
    await GM_setValue(StorageName.UserGroup, userGroup);

    console.timeLog("lztup-start", "Loading Profile DB...")
    const profileDB = new LZTProfileDB();
    // await profileDB.init();
    const dbProfileData = await profileDB.read();

    console.timeLog("lztup-start", "Checking Profile data...")
    if (dbProfileData) {
      console.timeLog("lztup-start", "Check Profile User or Badge style")
      if (dbProfileData.usernameStyle || dbProfileData.badgeIcons.length) {
        console.timeLog("lztup-start", "Check Profile User style")
        if (dbProfileData.usernameStyle) {
          updateUserStyle(dbProfileData.usernameStyle);
        }

        console.timeLog("lztup-start", "Check Profile badge style")
        if (dbProfileData.badgeIcons.length) {
          updateUserBadges(dbProfileData.badgeIcons);
        }

        console.timeLog("lztup-start", "Reg profile observer")
        registerObserver(async (mutation) => {
          Logger.debug(mutation)
          if (
            mutation.target.classList.contains('messageList') ||
            mutation.target.classList.contains('messageSimpleList') ||
            mutation.target.classList.contains('messageResponse') ||
            mutation.target.classList.contains('CommentPostList') ||
            mutation.target.classList.contains('discussionList') ||
            mutation.target.classList.contains('chat2-messages') ||
            mutation.target.classList.contains('fe-ac-user') ||
            mutation.target.classList.contains('latestThreads') ||
            mutation.target.parentElement?.classList.contains('conversationMessages') ||
            mutation.nextSibling?.classList?.contains('modal') ||
            mutation.previousSibling?.classList?.contains('Alert') ||
            mutation.previousSibling?.nextSibling?.classList?.contains('Alert') ||
            mutation.removedNodes?.[0]?.id === 'AjaxProgress' ||
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

      console.timeLog("lztup-start", "Check Profile banner")
      if (dbProfileData.bannerStyle && dbProfileData.bannerText) {
        updateUserBanner(dbProfileData.bannerStyle, dbProfileData.bannerText);
      }

      console.timeLog("lztup-start", "Check Profile bg")
      if (dbProfileData.backgroundImage) {
        // update background image of page
        if (dbProfileData.backgroundImageEverywhere) {
          addBackgroundImage(dbProfileData.backgroundImage);
        } else {
          addBackgroundImageInProfile(dbProfileData.backgroundImage);
        }
      }
      console.timeLog("lztup-start", "Profile bg loaded")
    }

    console.timeLog("lztup-start", "Loading Contests DB...")
    const dbContestsData = await GM_getValue(StorageName.Contests, {});

    console.timeLog("lztup-start", "Add reg 10 btn")
    dbContestsData.openTenContestsBtn ? regOpenContestsBtn(10) : null;

    console.timeLog("lztup-start", "Add onclick contests category")
    onClickCategory(extData.nodes.contests, async () => {
      const newContestsData = await GM_getValue(StorageName.Contests, {});
      newContestsData.openTenContestsBtn ? regOpenContestsBtn(10) : null;
    });

    console.timeLog("lztup-start", "hideTagsInThread")
    dbContestsData.hideTagsInThread ? contestsTagsVisibility(true) : null;
    console.timeLog("lztup-start", "autoCloseOnParticipate")
    dbContestsData.autoCloseOnParticipate ? contestsAutoCloseHandler(true) : null;
    console.timeLog("lztup-start", "infoTopInThread")
    dbContestsData.infoTopInThread ? contestThreadBlockMove(true) : null;
    console.timeLog("lztup-start", "removeContent")
    dbContestsData.removeContent ? contestsHideContent(true) : null;
    console.timeLog("lztup-start", "removePoll")
    dbContestsData.removePoll ? contestsHidePoll(true) : null;
    console.timeLog("lztup-start", "updateCaptchaButton")
    dbContestsData.updateCaptchaButton? contestsUpdateCapctha() : null;
    console.timeLog("lztup-start", "autoFixCaptcha")
    dbContestsData.autoFixCaptcha ? contestsAutoFixCaptcha() : null;

    console.timeLog("lztup-start", "Loading Users DB...")
    const dbUsersData = await GM_getValue(StorageName.Users, {});

    console.timeLog("lztup-start", "showUserIdInMemberCard")
    if (dbUsersData.showUserIdInMemberCard) {
      addUserIdToMemberCard();
      registerObserver((mutation) => {
        if (mutation.nextSibling) {
          if (mutation.nextSibling?.classList?.contains('modal')) {
            addUserIdToMemberCard()
          }
        }
      });
    }
    console.timeLog("lztup-start", "disableShareTyping")
    dbUsersData.disableShareTyping ? bypassShareTyping() : null;
    if (isProfilePage()) {
      console.timeLog("lztup-start", "showUserIdInProfile")
      dbUsersData.showUserIdInProfile ? addUserIdToProfile() : null;
      console.timeLog("lztup-start", "showFullRegInProfile")
      dbUsersData.showFullRegInProfile? showFullRegDateInProfile(true) : null;
    }

    console.timeEnd("lztup-start")
  })
}

try {
  await Promise.allSettled([initTheme() , main()]);
} catch {
  console.error(e);
}