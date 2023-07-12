import { getUserAvatar } from 'Utils/users';
import { applyStyle } from 'Utils/utils';
import { AvatarUserBadges } from 'UI/avatarUserBadges';
import { Logger } from "Utils/logger";


class PreviewProfile {
  /**
   *
   *  @constructor
   *  @param {string|number} userid - user id
   *  @param {string} username - username
   *  @param {object} data - data for show preview (ex. data from profileDB)
   */

  constructor(userid, username, data) {
    this.userid = userid;
    this.username = username;
    this.data = data;
    this.badges = new AvatarUserBadges(data.badgeIcons, true);
  }

  createElement() {
    const previewContainer = document.createElement('div');
    previewContainer.id = 'LZTUpPreviewContainer';
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

  updateUsernameStyle(style) {
    const usernameEl = this.clearStyle('#LZTUpUsernameStyle');
    if (!usernameEl) {
      return;
    }

    usernameEl.classList.add('UsernameStyle', 'bold');
    applyStyle(usernameEl, style);
  }

  updateBannerStyle(style) {
    const userBannerEl = this.clearStyle('#LZTUpUserBannerStyle');
    if (!userBannerEl) {
      return;
    }

    userBannerEl.classList.add('UserBannerStyle', 'userBanner');
    applyStyle(userBannerEl, style);
  }

  updateBannerText(text) {
    const userBannerEl = document.querySelector('#LZTUpUserBannerStyle');
    if (!userBannerEl) {
      return;
    }

    userBannerEl.innerText = XenForo.htmlspecialchars(text);
  }

  updateBanner(data) {
    const userBannerEl = this.clearStyle('#LZTUpUserBannerStyle');
    if (!userBannerEl) {
      Logger.error('Failed to get element by #LZTUpUserBannerStyle in PreviewProfile!');
      return;
    }

    if (!(data.bannerStyle && data.bannerText)) {
      return userBannerEl.style.display = 'none';
    }

    userBannerEl.style.display = '';
    this.updateBannerStyle(data.bannerStyle);
    this.updateBannerText(data.bannerText);
  }

  updateAll() {
    this.updateUsernameStyle(this.data.usernameStyle);
    this.updateBanner(this.data);
    this.badges.badges = this.data.badgeIcons;
    this.badges.updateBadges();
  }
}

export { PreviewProfile };