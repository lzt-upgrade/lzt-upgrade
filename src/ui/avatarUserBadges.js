import { clearSVG } from 'Utils/purify';
import { setTooltip } from "Xenforo/tooltips";
import { changeSVGColor } from 'Utils/svg';
import { Logger } from 'Utils/logger'
import { removeStylesByEl } from 'Utils/utils'


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

  findAllBadgeElement(selector, position) {
    return document.querySelectorAll(selector + `[data-position="${position}"]`);
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

  updateIcon(badgeEl, badge) {
    if (!badgeEl) {
      return;
    }

    removeStylesByEl(badgeEl);

    badgeEl.classList.add('avatarUserBadge', 'Tooltip');

    // set position of badge
    if (badgeEl.dataset.multiple === "true") {
      badgeEl.classList.add(`avatarUserBadge--${badge.position}`);
    }

    return this.applyBadge(badgeEl, badge.svg);
  }

  updateText(badgeEl, badge) {
    if (!badgeEl) {
      return;
    }

    if (badgeEl._tippy) {
      return setTooltip(badgeEl, XenForo.htmlspecialchars(badge.text));
    }

    return XenForo.Tooltip($(badgeEl)); // ! "$"" needed in XenForo.Tooltip
  }

  updateColor(badgeEl, badge) {
    if (!badgeEl) {
      return;
    }

    const svg = badgeEl.querySelector('svg');
    if (!svg) {
      return;
    }

    changeSVGColor(svg, 'stroke', badge.strokeColor, true);
    changeSVGColor(svg, 'fill', badge.fillColor, true);
  }

  updateStyle(badgeEl, badge) {
    if (!badgeEl || !badge.style || badge.style?.startsWith('.')) {
      return;
    }

    return badgeEl.style = badge.style;
  }

  updateBadge(badge) {
    const badgeElements = this.findAllBadgeElement(this.badgeQuery, badge.position);
    if (!badgeElements.length) {
      return;
    }

    for (const badgeEl of badgeElements) {
      this.updateIcon(badgeEl, badge);
      this.updateText(badgeEl, badge);
      this.updateColor(badgeEl, badge);
      this.updateStyle(badgeEl, badge);
    }
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