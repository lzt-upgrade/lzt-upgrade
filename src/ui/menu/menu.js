import { Section } from 'UI/kit/menu/section';
import { Logger } from 'Utils/logger';
import getContestsItems from 'UI/menu/items/contests';
import getUsersItems from 'UI/menu/items/users';
import getProfileItems from 'UI/menu/items/profile';
import getInfoItems from 'UI/menu/items/info';
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
    .addSectionItem('Локальный Уник', 'Максимальная кастомизация', 'far fa-palette', 'LZTUpUniqItem', 'LZTUpUniqContainer')
    .addSectionItem('Розыгрыши', 'Комфорт для розыгрышей', 'far fa-gift', 'LZTUpContestsItem', 'LZTUpContestsContainer')
    .addSectionItem('Пользователи', 'Штучки для пользователей', 'far fa-user', 'LZTUpUsersItem', 'LZTUpUsersContainer')
    .addSectionItem('Внешний вид', 'Темы, логотипы и другое', 'far fa-drafting-compass', 'LZTUpAppearItem', 'LZTUpAppearContainer')
    .addSectionContainer('LZTUpUniqContainer', await getProfileItems())
    .addSectionContainer('LZTUpContestsContainer', await getContestsItems())
    .addSectionContainer('LZTUpUsersContainer', await getUsersItems())
    .addSectionContainer('LZTUpAppearContainer', appearItems)

  const settingsSection = new Section('LZTUpSettingsSection')
    .addSectionItem('Настройки', 'Настройки расширения', 'far fa-cog', 'LZTUpSettingsItem', 'LZTUpSettingsContainer')
    .addSectionItem('Обновления', 'Установка и проверка обновлений расширения', 'far fa-cloud-download', 'LZTUpUpdateItem', 'LZTUpUpdateContainer')
    .addSectionItem('Информация', `Версия: ${GM_info?.script?.version}`, 'far fa-info-circle', 'LZTUpInformationItem', 'LZTUpInformationContainer')
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
    const sectionEl = section.create();
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