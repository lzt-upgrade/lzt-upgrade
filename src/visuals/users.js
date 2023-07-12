import { applyStyle } from "Utils/utils";
import { getUsername, getUserId } from 'Utils/users';
import { isProfilePage } from 'Utils/checkers';
import { UserBanner } from 'UI/kit/userBanner';

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

export {
  updateUserStyle,
  updateUserBanner
}