import { clearSVG } from 'Utils/purify';
import { setTooltip } from "Xenforo/tooltips";
import { changeSVGColor } from 'Utils/svg';
import { Logger } from 'Utils/logger'


class AvatarUserBadges {
  /**
   *
   *  @constructor
   *  @param {object} badges - array of badges. For more information about badge struct check ui/menu/items/profile.js -> DefaultIcon
   *  @param {boolean} isPreview - add preview id to badges
   */

  constructor(badges, isPreview = false) {
    this.previewId = 'LZTUpPreviewBadge';
    this.customBadgeId = 'LZTUpUserBadge';
    this.badgeQuery = isPreview ? `#${this.previewId}` : `#${this.customBadgeId}`;
    this.badges = badges;
    this.isPreview = isPreview;
  }

  createElement() {
    const avatarUserBadges = document.createElement('div');
    avatarUserBadges.classList.add('avatarUserBadges');

    for (let i = 0; i < this.badges.length; i++) {
      const avatarUserBadge = document.createElement('span');
      avatarUserBadge.classList.add('avatarUserBadge', 'Tooltip');
      avatarUserBadge.tabIndex = 0;
      avatarUserBadge.title = XenForo.htmlspecialchars(this.badges[i].text);

      if (this.isPreview) {
        avatarUserBadge.id = this.previewId;
      } else {
        avatarUserBadge.id = this.customBadgeId;
      }

      if (this.badges.length > 1) {
        avatarUserBadge.classList.add(`avatarUserBadge--${i + 1}`)
      }

      avatarUserBadge.dataset.position = i + 1;
      if (this.badges.length > 1) {
        avatarUserBadge.dataset.multiple = true;
      }

      avatarUserBadges.appendChild(avatarUserBadge);
    }

    return avatarUserBadges;
  }

  findBadgeElement(selector, position) {
    return document.querySelector(selector + `[data-position="${position}"]`);
  }

  clearBadge(selector, position) {
    const el = this.findBadgeElement(selector, position);
    if (!el) {
      return { el: undefined, position: undefined };
    }

    el.className = ''
    el.style = '';

    return { el, position };
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

  updateIcon(badge) {
    const { el, position } = this.clearBadge(
      this.badgeQuery,
      badge.position
    );

    if (!el) {
      return;
    }

    el.classList.add('avatarUserBadge', 'Tooltip');

    // set position of badge
    if (el.dataset.multiple === "true") {
      el.classList.add(`avatarUserBadge--${position}`);
    }

    return this.applyBadge(el, badge.svg);
  }

  updateText(badge) {
    const userBadgeEl = this.findBadgeElement(
      this.badgeQuery,
      badge.position
    );
    if (!userBadgeEl) {
      return;
    }

    if (userBadgeEl._tippy) {
      setTooltip(userBadgeEl, XenForo.htmlspecialchars(badge.text));
    } else {
      XenForo.Tooltip($(userBadgeEl));
    }

  }

  updateColor(badge) {
    const userBadgeEl = this.findBadgeElement(
      this.badgeQuery,
      badge.position
    );
    if (!userBadgeEl) {
      return;
    }

    const svg = userBadgeEl.querySelector('svg');
    if (!svg) {
      return;
    }

    changeSVGColor(svg, 'stroke', badge.strokeColor, true);
    changeSVGColor(svg, 'fill', badge.fillColor, true);
  }

  updateStyle(badge) {
    if (!badge.style || badge.style?.startsWith('.')) {
      return;
    }

    const userBadgeEl = this.findBadgeElement(
      this.badgeQuery,
      badge.position
    );
    if (!userBadgeEl) {
      return;
    }

    userBadgeEl.style = badge.style;
  }

  updateBadge(badge) {
    this.updateIcon(badge);
    this.updateText(badge);
    this.updateColor(badge);
    this.updateStyle(badge);
  }

  updateBadges() {
    Logger.debug('updateBadges');
    for (const badge of this.badges) {
      if (typeof badge !== 'object') {
        Logger.error('Invalid badge in array');
        continue
      }

      Logger.debug(badge);
      this.updateBadge(badge);
    }
  }
}

export { AvatarUserBadges }