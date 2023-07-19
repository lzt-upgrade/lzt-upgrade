import { applyStyle } from "Utils/utils";
import { getUsername, getUserId } from 'Utils/users';
import { isProfilePage } from 'Utils/checkers';
import { UserBanner } from 'UI/kit/userBanner';
import { AvatarUserBadges } from 'UI/avatarUserBadges';

function updateUserStyle(style) {
  const username = getUsername('me');
  const usersEl = document.querySelectorAll('.username span');
  const myUsersEl = usersEl
                    .values()
                    .filter(user => user.innerText === username);
  for (const userEl of myUsersEl) {
    userEl.className = ''
    userEl.style = '';

    applyStyle(userEl, style);
  }
}

function updateUserBanner(style, text) {
  if (isProfilePage() && getUserId('profile') === getUserId('me')) {
    const userBannerEl = document.querySelector('em.userBanner#LZTUpCustomBanner');
    if (userBannerEl) {
      // if exists remove extra styles / classes
      userBannerEl.className = 'userBanner wrapped';
      userBannerEl.style = '';
      userBannerEl.innerText = text;
      return applyStyle(userBannerEl, style);
    }

    // add user banner
    const avatarScaler = document.querySelector('.avatarScaler');
    if (!avatarScaler) {
      return;
    }

    const userBanner = new UserBanner('LZTUpCustomBanner', text).createElement();
    applyStyle(userBanner, style);
    return avatarScaler.insertAdjacentElement('afterend', userBanner);
  }
}

function updateUserBadges(badgeIconsData) {
  const userid = getUserId('me');
  const badges = new AvatarUserBadges(badgeIconsData, false);
  const avatarsMedium = document.querySelectorAll(`.avatar.Av${userid}m`);
  const avatarsSmall = document.querySelectorAll(`.avatar.Av${userid}s`);
  const avatars = [...avatarsMedium, ...avatarsSmall]
                  .filter(el => el !== undefined)
                  .filter(el => el.parentElement?.classList.contains('avatarHolder'));
  console.log(avatars) // TODO: remove after tests
  for (const avatar of avatars) {
    console.log(avatar) // TODO: remove after tests
    const avatarHolder = avatar.parentElement;
    const badgesEl = badges.createElement();

    console.log(avatarHolder) // TODO: remove after tests
    avatarHolder.querySelector('.avatarUserBadges')?.remove(); // remove if exists
    console.log(badgesEl) // TODO: remove after tests
    // avatarHolder.insertAdjacentElement('afterbegin', badgesEl);
    avatarHolder.prepend(badgesEl)
    badges.updateBadges()
  }
}

export {
  updateUserStyle,
  updateUserBanner,
  updateUserBadges
}