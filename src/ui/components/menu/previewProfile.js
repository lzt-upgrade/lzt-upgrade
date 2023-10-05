import StorageName from 'Configs/StorageName';
import config from "Configs/config";

import { getUserAvatar } from 'Utils/users';
import { applyStyle } from 'Utils/utils';
import AvatarUserBadges from 'UI/avatarUserBadges';
import Logger from "Utils/logger";


class PreviewProfile {
  /**
   *
   *  @constructor
   *  @param {string|number} userid - user id
   *  @param {string} username - username
   *  @param {object} data - data for show preview (ex. data from profileDB)
   */

  constructor(userid, username, data, profileElId = null) {
    this.userid = userid;
    this.username = username;
    this.data = data;
    this.profileElId = profileElId || 'LZTUpPreviewContainer';
    this.badges = new AvatarUserBadges(data.badgeIcons, true);
  }

  createElement() {
    const previewContainer = document.createElement('div');
    previewContainer.id = this.profileElId;
    previewContainer.classList.add('previewContainer');

    const avatarUserBadges = this.badges.createElement();

    const avatarBox = document.createElement('div');
    avatarBox.classList.add('avatarBox');
    avatarBox.appendChild(avatarUserBadges);
    avatarBox.innerHTML += `
      <a href="members/${encodeURIComponent(this.userid)}/" class="avatar Av${XenForo.htmlspecialchars(this.userid)}m" data-avatarhtml="true">
        <span class="img m" style="background-image: url(${getUserAvatar(this.userid)})"></span>
      </a>
    `;

    const info = document.createElement('div');
    info.classList.add('info');
    info.innerHTML = `
      <span id="LZTUpUsernameStyle" class="UsernameStyle bold">${XenForo.htmlspecialchars(this.username)}</span>
      <div class="bannerOrStatus">
        <em id="LZTUpUserBannerStyle" class="UserBannerStyle userBanner"></em>
      </div>
    `;

    previewContainer.appendChild(avatarBox);
    previewContainer.appendChild(info);
    return previewContainer;
  }

  clearStyle(selector) {
    const el = document.querySelector(selector);
    if (!el) {
      return;
    }

    el.className = ''
    el.style = '';

    return el;
  }

  async updateUsernameStyle(style) {
    const usernameEl = this.clearStyle(`#${this.profileElId} #LZTUpUsernameStyle`);
    if (!usernameEl) {
      return;
    }

    if (style === '') {
      const userGroup = await GM_getValue(StorageName.UserGroup, config.defaultUserGroup); // current user group (newbie, resident, expert and etc)
      style = `.${userGroup}`;
    }
    usernameEl.classList.add('UsernameStyle', 'bold');
    applyStyle(usernameEl, style);
  }

  updateBannerStyle(style) {
    const userBannerEl = this.clearStyle(`#${this.profileElId} #LZTUpUserBannerStyle`);
    if (!userBannerEl) {
      return;
    }

    userBannerEl.classList.add('UserBannerStyle', 'userBanner');
    applyStyle(userBannerEl, style);
  }

  updateBannerText(text) {
    const userBannerEl = document.querySelector(`#${this.profileElId} #LZTUpUserBannerStyle`);
    if (!userBannerEl) {
      return;
    }

    userBannerEl.innerText = XenForo.htmlspecialchars(text);
  }

  updateBanner(data) {
    const userBannerEl = this.clearStyle(`#${this.profileElId} #LZTUpUserBannerStyle`);
    if (!userBannerEl) {
      Logger.error('Failed to get element by userBanner in PreviewProfile!');
      return;
    }

    if (!(data.bannerStyle && data.bannerText)) {
      return userBannerEl.style.display = 'none';
    }

    userBannerEl.style.display = '';
    this.updateBannerStyle(data.bannerStyle);
    this.updateBannerText(data.bannerText);
  }

  updateBackground(imageUrl) {
    const previewContainer = document.querySelector(`#${this.profileElId}`);
    console.log(`#${this.profileElId}`, previewContainer)
    if (!previewContainer) {
      Logger.error('Failed to get previewContainer in PreviewProfile!');
      return;
    }

    if (imageUrl.length) {
      console.log("add imageURL")
      imageUrl = `linear-gradient(rgba(54, 54, 54, 0.85), rgba(54, 54, 54, 0.85)), url(${imageUrl})`;
    }

    previewContainer.style.backgroundImage = imageUrl;
  }

  updateBadges() {
    return this.badges.updateBadges();
  }

  async updateAll() {
    await this.updateUsernameStyle(this.data.usernameStyle);
    this.updateBanner(this.data);
    this.updateBackground(this.data.backgroundImage);
    this.badges.badges = this.data.badgeIcons;
    this.updateBadges();
  }
}

export default PreviewProfile;