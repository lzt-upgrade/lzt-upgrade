import { LZTUsersDB } from "IndexedDB/users";
import { Checkbox } from 'UI/menu/checkbox';
import { addUserId, removeUserId, showFullRegDateInProfile } from 'Utils/users';
import { bypassShareTyping } from "Utils/xenforo";
import { registerAlert } from "Utils/registers";
import { sleep } from "Utils/utils";

const getUsersItems = async () => {
  const usersDB = new LZTUsersDB();
  const usersData = await usersDB.read();

  return [
    new Checkbox('show_userid', 'Показывать UserID пользователей')
    .createElement(
      usersData.showUserId,
      async () => {
        await usersDB.update({ showUserId: 1 });
        addUserId();
      },
      async () => {
        await usersDB.update({ showUserId: 0 });
        removeUserId();
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
        registerAlert('Отправка информации о наборе сообщения отключена', 5000);
        await sleep(500);
        window.location.reload();
      },
      async () => {
        await usersDB.update({ disableShareTyping: 0 });
        registerAlert('Отправка информации о наборе сообщения включена', 5000);
        await sleep(500);
        window.location.reload();
      }),
  ];
}

export default getUsersItems;