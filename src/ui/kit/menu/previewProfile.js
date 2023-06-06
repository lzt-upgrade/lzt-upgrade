import { getUserAvatar } from 'Utils/users';
import { setTooltip } from "Xenforo/tooltips";
import { changeSVGColor } from 'Utils/svg';
import { clearSVG } from 'Utils/utils';

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
  }

  createElement() {
    const previewContainer = document.createElement('div');
    previewContainer.id = 'LZTUpPreviewContainer';
    previewContainer.classList.add('previewContainer');

    const avatarBox = document.createElement('div');
    avatarBox.classList.add('avatarBox');
    avatarBox.innerHTML = `
      <div class="avatarUserBadges">
        <span id="LZTUpPreviewBadge" class="avatarUserBadge Tooltip" tabindex="0" title="${XenForo.htmlspecialchars(this.data.badgeText)}"></span>
      </div>
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

  applyStyle(el, style) {
    if (style?.length > 1 && style?.startsWith('.')) {
      style = style.replace('.', '');
      return el.classList.add(style);
    } else {
      return el.style = style;
    }
  }

  applyBadge(el, icon) {
    if (icon?.length > 1 && icon?.startsWith('.')) {
      icon = icon.replace('.', '');
      return el.classList.add('userBanner', icon);
    } else if (icon.startsWith('<svg') && icon.endsWith('svg>')) {
      el.innerHTML = clearSVG(icon);
      return el.classList.add('badgeDefaultBackground');
    } else {
      return el.classList.add('uniq_default', 'badgeDefaultBackground');
    }
  }

  updateUsernameStyle(style) {
    const usernameEl = this.clearStyle('#LZTUpUsernameStyle');
    if (!usernameEl) {
      return;
    }

    usernameEl.classList.add('UsernameStyle', 'bold');
    this.applyStyle(usernameEl, style);
  }

  updateBannerStyle(style) {
    const userBannerEl = this.clearStyle('#LZTUpUserBannerStyle');
    if (!userBannerEl) {
      return;
    }

    userBannerEl.classList.add('UserBannerStyle', 'userBanner');
    this.applyStyle(userBannerEl, style);
  }

  updateBannerText(text) {
    const userBannerEl = document.querySelector('#LZTUpUserBannerStyle');
    if (!userBannerEl) {
      return;
    }

    userBannerEl.innerText = XenForo.htmlspecialchars(text);
  }

  updateBadgeIcon(icon) {
    const userBadgeEl = this.clearStyle('#LZTUpPreviewBadge');
    if (!userBadgeEl) {
      return;
    }

    userBadgeEl.classList.add('avatarUserBadge', 'Tooltip');
    return this.applyBadge(userBadgeEl, icon);
  }

  updateBadgeText(text) {
    const userBadgeEl = document.querySelector('#LZTUpPreviewBadge');
    if (!userBadgeEl) {
      return;
    }

    setTooltip(userBadgeEl, XenForo.htmlspecialchars(text));
  }

  updateBadgeColor(color, type) {
    const svg = document.querySelector('#LZTUpPreviewBadge > svg');
    if (!svg) {
      return;
    }

    changeSVGColor(svg, type, color, true);
  }

  updateBadgeStyle(style) {
    if (!style || style?.startsWith('.')) {
      return;
    }

    const userBadgeEl = document.querySelector('#LZTUpPreviewBadge');
    if (!userBadgeEl) {
      return;
    }

    userBadgeEl.style = style;
  }

  updateBannerAll(data) {
    this.updateBannerStyle(data.bannerStyle);
    this.updateBannerText(data.bannerText);
  }

  updateBadgeAll(data) {
    this.updateBadgeIcon(data.badgeIcon);
    this.updateBadgeText(data.badgeText);
    this.updateBadgeStyle(data.bannerStyle);
    this.updateBadgeColor(data.badgeFill, 'fill');
    this.updateBadgeColor(data.badgeStroke, 'stroke');
  }

  updateAll(data) {
    this.updateUsernameStyle(data.usernameStyle);
    this.updateBannerAll(data);
    this.updateBadgeAll(data);
  }
}

export { PreviewProfile };