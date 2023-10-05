import ProfileInfoRow from 'UI/components/profileInfoRow';
import { isProfilePage, isOpenMemberCard } from 'Utils/checkers';
import extData from "Configs/extData";
import CopyButton from 'UI/components/buttons/copyButton';

const userIdRowElementId = 'LZTUpUserIDRow';
const userIdMemberCardElementId = 'LZTUpUserIDMemberCard';

function getUserId(target) {
  switch (target) {
    case "profile":
      // in any profile
      if (isProfilePage()) {
        const userThreadsButton = document.querySelector('#profile_short > .userContentLinks > a:nth-child(1)');
        if (!userThreadsButton || userThreadsButton.href === '') {
          return null;
        }

        if (!userThreadsButton.href.endsWith('?tab=mythreads')) {
          const url = new URL(userThreadsButton.href);
          return url.searchParams.get('user_id');
        }

        return getUserId('me');
      }
    case "membercard":
      // in any membercard
      if (isOpenMemberCard()) {
        const memberCard = document.querySelectorAll(extData.selectors.memberCard);
        const userThreadsButton = memberCard[memberCard.length - 1].querySelector('.memberCardInner > .bottom > .userContentLinks > a:nth-child(1)');
        if (!userThreadsButton || userThreadsButton.href === '') {
          return null;
        }

        const url = new URL(userThreadsButton.href);
        return url.searchParams.get('user_id');
      }
    case "self":
    case "me":
      return XenForo?.visitor?.user_id;
    default:
      return null;
  }
}

function getUsername(target) {
  switch (target) {
    // TODO: add get by userid
    case "self":
    case "me":
      return document.querySelector('.accountUsername span')?.innerText;
    default:
      return null;
  }
}

function getUserGroup(target) {
  switch (target) {
    case "self":
    case "me":
      const userEl = document.querySelector('.accountUsername.username span');
      return userEl.className;
    default:
      return null;
  }
}


function getUserAvatar(userId) {
  if (userId === getUserId('me')) {
    return document.querySelector('img.navTab--visitorAvatar').src;
  }

  const avatars = document.querySelectorAll('a.avatar');
  const avatar = Array.from(avatars)
    .find(avatar => avatar.classList?.contains(`Av${userId}s`) || avatar.classList?.contains(`Av${userId}m`));

  return avatar ? avatars.src : null;
}

function addUserIdToProfile() {
  if (isProfilePage() && document.querySelector(`#${userIdRowElementId}`) === null) {
    const userId = getUserId('profile') ?? 'Не найден';
    const profileInfo = document.querySelector('#profile_short > .pairsJustified');

    const copyBtn = new CopyButton(userId, 'Скопировать ID пользователя', 'ID пользователя успешно скопирован в буфер обмена');
    const userIdRow = new ProfileInfoRow(userIdRowElementId, 'ID', userId, copyBtn).createElement();
    const firstRow = profileInfo.querySelector('.profile_info_row');
    const insertPlace = firstRow ? 'afterend' : 'afterbegin';

    firstRow.insertAdjacentElement(insertPlace, userIdRow);
  }
}

function addUserIdToMemberCard() {
  if (isOpenMemberCard()) {
    const memberCards = document.querySelectorAll(extData.selectors.memberCard);
    const userId = getUserId('membercard') ?? 'Не найден';
    const userContentLinks = memberCards[memberCards.length - 1].querySelector(`#memberCard${userId}.memberCardInner > .bottom > .userContentLinks`);
    const userIdElement = document.createElement('div');
    userIdElement.classList.add('title');
    userIdElement.id = userIdMemberCardElementId;
    userIdElement.innerText = `ID: ${userId}`;
    const copyBtn = new CopyButton(userId, 'Скопировать ID пользователя', 'ID пользователя успешно скопирован в буфер обмена').createElement();
    userIdElement.appendChild(copyBtn);
    userContentLinks?.insertAdjacentElement('afterbegin', userIdElement);
  }
}

function removeUserIdFromProfile() {
  if (isProfilePage()) {
    const el = document.querySelector(`.profile_info_row#${userIdRowElementId}`);
    if (el) {
      el.remove();
    }
  }
}

function removeUserIdFromMemberCard() {
  if (isOpenMemberCard()) {
    const el = document.querySelector(`.title#${userIdMemberCardElementId}`);
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

export {
  getUserId,
  getUsername,
  getUserAvatar,
  getUserGroup,
  addUserIdToProfile,
  addUserIdToMemberCard,
  removeUserIdFromProfile,
  removeUserIdFromMemberCard,
  showFullRegDateInProfile
}