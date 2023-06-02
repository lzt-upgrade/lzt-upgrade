import { LZTUsersDB } from "IndexedDB/users";
import { Checkbox } from 'UI/menu/checkbox';
import { addUserIdToProfile, removeUserIdFromProfile, showFullRegDateInProfile } from 'Utils/users';
import { registerAlert } from "Utils/registers";
import { sleep } from "Utils/utils";

const getUsersItems = async () => {
  const usersDB = new LZTUsersDB();
  const usersData = await usersDB.read();

  return [
    new Checkbox('show_userid_in_profile', 'Показывать ID в профиле пользователя')
    .createElement(
      usersData.showUserIdInProfile,
      async () => {
        await usersDB.update({ showUserIdInProfile: 1 });
        addUserIdToProfile();
      },
      async () => {
        await usersDB.update({ showUserIdInProfile: 0 });
        removeUserIdFromProfile();
      }),
    new Checkbox('show_userid_in_member_card',
      `Показывать ID в карточке пользователя
      <span class="fa fa-exclamation-triangle Tooltip" title="При включение/отключение этой функции страница будет перезагружена"></span>
      `)
    .createElement(
      usersData.showUserIdInMemberCard,
      async () => {
        await usersDB.update({ showUserIdInMemberCard: 1 });
        registerAlert('Показывать ID в карточке пользователя включено', 5000);
        await sleep(500);
        window.location.reload();
      },
      async () => {
        await usersDB.update({ showUserIdInMemberCard: 0 });
        registerAlert('Показывать ID в карточке пользователя выключено', 5000);
        await sleep(500);
        window.location.reload();
      }),
    new Checkbox('show_fullreg_in_profile', 'Показывать полную дату регистрации в профиле пользователя')
    .createElement(
      usersData.showFullRegInProfile,
      async () => {
        await usersDB.update({ showFullRegInProfile: 1 });
        showFullRegDateInProfile(true);
      },
      async () => {
        await usersDB.update({ showFullRegInProfile: 0 });
        showFullRegDateInProfile(false);
      }),
    new Checkbox('disable_share_typing',
      `Неписалка в темах
      <span class="fa fa-exclamation-triangle Tooltip" title="При включение/отключение этой функции страница будет перезагружена"></span>
      `)
    .createElement(
      usersData.disableShareTyping,
      async () => {
        await usersDB.update({ disableShareTyping: 1 });
        registerAlert('Неписалка в темах включена', 5000);
        await sleep(500);
        window.location.reload();
      },
      async () => {
        await usersDB.update({ disableShareTyping: 0 });
        registerAlert('Неписалка в темах выключена', 5000);
        await sleep(500);
        window.location.reload();
      }),
  ];
}

export default getUsersItems;