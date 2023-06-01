import { ProfileInfoRow } from 'UI/kit/profileInfoRow';
import { isProfilePage } from 'Utils/checkers';

const userIdRowElementId = 'LZTUpUserIDRow';

function getUserIdInProfile() {
  if (isProfilePage()) {
    const userThreadsButton = document.querySelector('#profile_short > .userContentLinks > a:nth-child(1)');
    if (!userThreadsButton || userThreadsButton.href === '') {
      return null;
    }

    if (!userThreadsButton.href.endsWith('?tab=mythreads')) {
      const url = new URL(userThreadsButton.href);
      return url.searchParams.get('user_id');
    }

    return XenForo?._csrfToken?.split(',')[0];
  }
}

function addUserId() {
  if (isProfilePage()) {
    const userId = getUserIdInProfile() ?? 'Не найден';
    const profileInfo = document.querySelector('#profile_short > .pairsJustified');
    const userIdRow = new ProfileInfoRow(userIdRowElementId, 'ID', userId).createElement();
    const firstRow = profileInfo.querySelector('.profile_info_row');
    if (!firstRow) {
      return profileInfo.insertAdjacentElement('afterbegin', userIdRow);
    }

    return firstRow.insertAdjacentElement('afterend', userIdRow);
  }
}

function removeUserId() {
  if (isProfilePage()) {
    const el = document.querySelector(`.profile_info_row#${userIdRowElementId}`);
    if (el) {
      el.remove();
    }
  }
}

function showFullRegDateInProfile(full = false) {
  if (isProfilePage()) {
    const dateTime = document.querySelector('.profile_info_row > .labeled > span.DateTime');
    if (!dateTime) {
      return;
    }

    const fullDate = dateTime.getAttribute('title')
    if (!fullDate) {
      return;
    }

    if (!full) {
      let spaceCounts = -2;
      if (XenForo?.visitor?.language_id === 1) {
        // lang === english
        spaceCounts = -3;
      }

      const oldDate = fullDate.split(' ').slice(0, spaceCounts).join(' ');
      return dateTime.innerText = oldDate;
    }

    return dateTime.innerText = fullDate;
  }
}

export { getUserIdInProfile, addUserId, removeUserId, showFullRegDateInProfile }