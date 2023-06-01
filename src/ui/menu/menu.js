import { MenuSection } from 'UI/kit/menuSection';
import { addMenuSectionItem } from 'UI/menu/sectionItem';
import { Comment } from 'UI/menu/comment';
import { addMenuSectionContainer } from 'UI/menu/sectionContainer';
import { Logger } from 'Utils/logger';
import getContestsItems from 'UI/menu/items/contests';
import getUsersItems from 'UI/menu/items/users';
import 'Styles/menu.scss';


async function generateMenu(tabs) {
  const mainItems = [
    addMenuSectionItem('Локальный Уник', 'Максимальная кастомизация', 'far fa-palette', 'LZTUpUniqItem', 'LZTUpUniqContainer'),
    addMenuSectionItem('Розыгрыши', 'Комфорт для розыгрышей', 'far fa-gift', 'LZTUpContestsItem', 'LZTUpContestsContainer'),
    addMenuSectionItem('Пользователи', 'Штучки для пользователей', 'far fa-user', 'LZTUpUsersItem', 'LZTUpUsersContainer'),
    addMenuSectionItem('Внешний вид', 'Темы, логотипы и другое', 'far fa-drafting-compass', 'LZTUpAppearItem', 'LZTUpUniqContainer'),
  ];

  Logger.debug('Generated menu main items: ', mainItems)

  const settingsItems = [
    addMenuSectionItem('Настройки', 'Настройки расширения', 'far fa-cog', 'LZTUpSettingsItem', 'LZTUpUniqContainer'),
    addMenuSectionItem('Обновления', 'Установка и проверка обновлений расширения', 'far fa-cloud-download', 'LZTUpUpdateItem', 'LZTUpUpdateContainer'),
    addMenuSectionItem('Информация', `Версия: ${GM_info?.script?.version}`, 'far fa-info-circle', 'LZTUpInformationItem', 'LZTUpUniqContainer'),
  ];

  Logger.debug('Generated menu settings items: ', settingsItems)
  const sections = [
    new MenuSection('LZTUpMainSection', mainItems).create(),
    new MenuSection('LZTUpSettingsSection', settingsItems).create(),
  ];

  Logger.debug('Generated menu sections: ', sections)

  const uniqueText = document.createElement('div')
  uniqueText.innerText = 'Страница локального уника';

  const uniqueItems = [
    new Comment(`Это оформление видно только вам. Мы рекомендуем вам <a href="https://${window.location.hostname}/account/upgrades?upgrade_id=14" target="_blank">приобрести настоящий Уник</a>, чтобы все пользователи смогли увидеть ваше настоящее оформление профиля.`)
      .createElement(),
    uniqueText,
  ];

  const updateText = document.createElement('div')
  updateText.innerText = 'Страница обновлений';

  const updateItems = [
    updateText,
  ];

  Logger.debug('Generated menu unique section items: ', uniqueItems)

  const sectionContainers = [
    addMenuSectionContainer('LZTUpUniqContainer', uniqueItems),
    addMenuSectionContainer('LZTUpContestsContainer', await getContestsItems()),
    addMenuSectionContainer('LZTUpUsersContainer', await getUsersItems()),
    addMenuSectionContainer('LZTUpUpdateContainer', updateItems),
  ];

  Logger.debug('Generated menu section containers: ', sectionContainers)

  const menuContent = document.createElement('div')
  menuContent.classList.add('LZTUpModalContent');

  const tabsContainer = document.createElement('ul');
  tabsContainer.classList.add('tabs', 'LZTUpTabs');
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