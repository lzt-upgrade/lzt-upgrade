import { MenuSection } from 'UI/kit/menuSection';
import { addMenuSectionItem } from 'UI/menu/sectionItem';
import { addMenuSectionContainer } from 'UI/menu/sectionContainer';
import { Logger } from 'Utils/logger';
import getContestsItems from 'UI/menu/items/contests';
import getUsersItems from 'UI/menu/items/users';
import getProfileItems from 'UI/menu/items/profile';
import 'Styles/menu.scss';


async function generateMenu(tabs) {
  const mainItems = [
    addMenuSectionItem('Локальный Уник', 'Максимальная кастомизация', 'far fa-palette', 'LZTUpUniqItem', 'LZTUpUniqContainer'),
    addMenuSectionItem('Розыгрыши', 'Комфорт для розыгрышей', 'far fa-gift', 'LZTUpContestsItem', 'LZTUpContestsContainer'),
    addMenuSectionItem('Пользователи', 'Штучки для пользователей', 'far fa-user', 'LZTUpUsersItem', 'LZTUpUsersContainer'),
    addMenuSectionItem('Внешний вид', 'Темы, логотипы и другое', 'far fa-drafting-compass', 'LZTUpAppearItem', 'LZTUpUniqContainer'),
  ];

  const settingsItems = [
    addMenuSectionItem('Настройки', 'Настройки расширения', 'far fa-cog', 'LZTUpSettingsItem', 'LZTUpUniqContainer'),
    addMenuSectionItem('Обновления', 'Установка и проверка обновлений расширения', 'far fa-cloud-download', 'LZTUpUpdateItem', 'LZTUpUpdateContainer'),
    addMenuSectionItem('Информация', `Версия: ${GM_info?.script?.version}`, 'far fa-info-circle', 'LZTUpInformationItem', 'LZTUpUniqContainer'),
  ];

  const sections = [
    new MenuSection('LZTUpMainSection', mainItems).create(),
    new MenuSection('LZTUpSettingsSection', settingsItems).create(),
  ];

  const updateText = document.createElement('div')
  updateText.innerText = 'Страница обновлений';

  const updateItems = [
    updateText,
  ];

  const sectionContainers = [
    addMenuSectionContainer('LZTUpUniqContainer', await getProfileItems()),
    addMenuSectionContainer('LZTUpContestsContainer', await getContestsItems()),
    addMenuSectionContainer('LZTUpUsersContainer', await getUsersItems()),
    addMenuSectionContainer('LZTUpUpdateContainer', updateItems),
  ];

  Logger.debug('Generated menu section containers: ', sectionContainers)

  const menuContent = document.createElement('div')
  menuContent.classList.add('LZTUpModalContent');

  const tabsContainer = document.createElement('ul');
  tabsContainer.classList.add('LZTUpTabs');
  menuContent.appendChild(tabsContainer);

  for (const section of sections) {
    menuContent.appendChild(section);
  }

  for (const sectionContainer of sectionContainers) {
    menuContent.appendChild(sectionContainer);
    sectionContainer.querySelectorAll('.Tooltip').forEach(el => XenForo.Tooltip($(el)));
  }

  Logger.debug('Generated menu tabs: ', tabs);

  for (const tab of tabs) {
    menuContent.querySelector('.LZTUpTabs')
      .appendChild(tab.createElement());
  }

  return menuContent;
}

export { generateMenu };