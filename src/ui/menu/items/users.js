import StorageName from "Configs/StorageName";
import { Checkbox } from 'UI/menu/checkbox';
import { addUserIdToProfile, removeUserIdFromProfile, showFullRegDateInProfile } from 'Utils/users';
import { registerAlert } from "Utils/registers";
import { sleep } from "Utils/utils";

const getUsersItems = async () => {
  const usersData = await GM_getValue(StorageName.Users, {});

  return [
    new Checkbox('show_userid_in_profile', 'Показывать ID в профиле пользователя')
    .createElement(
      usersData.showUserIdInProfile,
      () => {
        addUserIdToProfile();
      },
      () => {
        removeUserIdFromProfile();
      },
      async (event) => {
        usersData.showUserIdInProfile = event.target.checked;
        await GM_setValue(StorageName.Users, usersData);
      }),
    new Checkbox('show_userid_in_member_card',
      `Показывать ID в карточке пользователя
      <span class="fa fa-exclamation-triangle Tooltip" title="При включение/отключение этой функции страница будет перезагружена"></span>
      `)
    .createElement(
      usersData.showUserIdInMemberCard,
      () => {},
      () => {},
      async (event) => {
        usersData.showUserIdInMemberCard = event.target.checked;
        await GM_setValue(StorageName.Users, usersData);
        registerAlert(`Показывать ID в карточке пользователя ${event.target.checked ? 'включено' : 'выключено'}` , 5000);
        await sleep(500);
        window.location.reload();
      }),
    new Checkbox('show_fullreg_in_profile', 'Показывать полную дату регистрации в профиле пользователя')
    .createElement(
      usersData.showFullRegInProfile,
      () => {},
      () => {},
      async (event) => {
        usersData.showFullRegInProfile = event.target.checked;
        await GM_setValue(StorageName.Users, usersData);
        showFullRegDateInProfile(event.target.checked);
      }),
    new Checkbox('disable_share_typing',
      `Неписалка в темах
      <span class="fa fa-exclamation-triangle Tooltip" title="При включение/отключение этой функции страница будет перезагружена"></span>
      `)
    .createElement(
      usersData.disableShareTyping,
      () => {},
      () => {},
      async (event) => {
        usersData.disableShareTyping = event.target.checked;
        await GM_setValue(StorageName.Users, usersData);
        registerAlert(`Неписалка в темах ${event.target.checked ? 'включена' : 'выключена'}` , 5000);
        await sleep(500);
        window.location.reload();
      }),
  ];
}

export default getUsersItems;