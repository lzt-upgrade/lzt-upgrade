import { Section } from 'UI/components/menu/section';
import { Logger } from 'Utils/logger';
import getContestsItems from 'UI/menu/items/contests';
import getUsersItems from 'UI/menu/items/users';
import getProfileItems from 'UI/menu/items/profile';
import getInfoItems from 'UI/menu/items/info';
import { openSubMenu } from 'UI/menu/utils.js'
import 'Styles/menu.scss';


async function generateMenu(tabs) {
  const appearText = document.createElement('div')
  appearText.innerText = 'Страница Внешнего вида';

  const appearItems = [
    appearText,
  ];

  const settingsText = document.createElement('div')
  settingsText.innerText = 'Страница настроек';

  const settingItems = [
    settingsText,
  ];

  const updateText = document.createElement('div')
  updateText.innerText = 'Страница обновлений';

  const updateItems = [
    updateText,
  ];

  const menuSection = new Section('LZTUpMainSection')
    .addSectionItem('Локальный Уник', 'Максимальная кастомизация', 'far fa-palette', 'LZTUpUniqItem', (_, title) => openSubMenu('LZTUpUniqContainer', title))
    .addSectionItem('Розыгрыши', 'Комфорт для розыгрышей', 'far fa-gift', 'LZTUpContestsItem', (_, title) => openSubMenu('LZTUpContestsContainer', title))
    .addSectionItem('Пользователи', 'Штучки для пользователей', 'far fa-user', 'LZTUpUsersItem', (_, title) => openSubMenu('LZTUpUsersContainer', title))
    .addSectionItem('Внешний вид', 'Темы, логотипы и другое', 'far fa-drafting-compass', 'LZTUpAppearItem', (_, title) => openSubMenu('LZTUpAppearContainer', title))
    .addSectionContainer('LZTUpUniqContainer', await getProfileItems())
    .addSectionContainer('LZTUpContestsContainer', await getContestsItems())
    .addSectionContainer('LZTUpUsersContainer', await getUsersItems())
    .addSectionContainer('LZTUpAppearContainer', appearItems)

  const settingsSection = new Section('LZTUpSettingsSection')
    .addSectionItem('Настройки', 'Настройки расширения', 'far fa-cog', 'LZTUpSettingsItem', (_, title) => openSubMenu('LZTUpSettingsContainer', title))
    .addSectionItem('Обновления', 'Установка и проверка обновлений расширения', 'far fa-cloud-download', 'LZTUpUpdateItem', (_, title) => openSubMenu('LZTUpUpdateContainer', title))
    .addSectionItem('Информация', `Версия: ${GM_info?.script?.version}`, 'far fa-info-circle', 'LZTUpInformationItem', (_, title) => openSubMenu('LZTUpInformationContainer', title))
    .addSectionContainer('LZTUpSettingsContainer', settingItems)
    .addSectionContainer('LZTUpUpdateContainer', updateItems)
    .addSectionContainer('LZTUpInformationContainer', await getInfoItems())

  const sections = [
    menuSection,
    settingsSection
  ]

  const menuContent = document.createElement('div')
  menuContent.classList.add('LZTUpModalContent');

  const tabsContainer = document.createElement('ul');
  tabsContainer.classList.add('LZTUpTabs');
  menuContent.appendChild(tabsContainer);

  for (const section of sections) {
    const sectionEl = section.createElement();
    menuContent.appendChild(sectionEl);
    for (const container of section.sectionContainers) {
      menuContent.append(container)
      container.querySelectorAll('.Tooltip').forEach(el => XenForo.Tooltip($(el))); // load all tooltips in menu container
    }
  }

  Logger.debug('Generated menu tabs: ', tabs);

  for (const tab of tabs) {
    menuContent.querySelector('.LZTUpTabs')
      .appendChild(tab.createElement());
  }

  return menuContent;
}

export { generateMenu };