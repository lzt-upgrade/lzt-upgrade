import { contestsAutoCloseHandler } from "Callbacks/contestsAutoClose";
import { LZTContestsDB } from "IndexedDB/contests";
import { regOpenContestsBtn, removeOpenContestsBtn } from 'UI/buttons/contestsButton';
import { addMenuSection } from 'UI/menu/section';
import { addMenuSectionItem } from 'UI/menu/sectionItem';
import { Checkbox } from 'UI/menu/checkbox';
import { Comment } from 'UI/menu/comment';
import { addMenuSectionContainer } from 'UI/menu/sectionContainer';
import { Logger } from 'Utils/logger';
import { contestsTagsVisibility } from "Utils/contests";
import { contestThreadBlockMove, contestsBtnInBlockMove } from 'Utils/contests';

import 'Styles/menu.scss';


async function generateMenu(tabs) {
  const mainItems = [
    addMenuSectionItem('Локальный Уник', 'Максимальная кастомизация', 'far fa-palette', 'LZTUpUniqItem', 'LZTUpUniqContainer'),
    addMenuSectionItem('Розыгрыши', 'Комфорт для розыгрышей', 'far fa-gift', 'LZTUpContestsItem', 'LZTUpContestsContainer'),
    addMenuSectionItem('Пользователи', 'Штучки для пользователей', 'far fa-user', 'LZTUpUsersItem', 'LZTUpUniqContainer'),
    addMenuSectionItem('Внешний вид', 'Темы, логотипы и другое', 'far fa-drafting-compass', 'LZTUpAppearItem', 'LZTUpUniqContainer'),
  ];

  Logger.info('Generated menu main items: ', mainItems)

  const settingsItems = [
    addMenuSectionItem('Настройки', 'Настройки расширения', 'far fa-cog', 'LZTUpSettingsItem', 'LZTUpUniqContainer'),
    addMenuSectionItem('Обновления', 'Установка и проверка обновлений расширения', 'far fa-cloud-download', 'LZTUpUpdateItem', 'LZTUpUpdateContainer'),
    addMenuSectionItem('Информация', `Версия: ${GM_info?.script?.version}`, 'far fa-info-circle', 'LZTUpInformationItem', 'LZTUpUniqContainer'),
  ];

  Logger.info('Generated menu settings items: ', settingsItems)
  const sections = [
    addMenuSection('LZTUpMainSection', mainItems),
    addMenuSection('LZTUpSettingsSection', settingsItems),
  ];

  Logger.info('Generated menu sections: ', sections)

  const uniqueItems = [
    new Comment(`Это оформление видно только вам. Мы рекомендуем вам <a href="https://${window.location.hostname}/account/upgrades?upgrade_id=14" target="_blank">приобрести настоящий Уник</a>, чтобы все пользователи смогли увидеть ваше настоящее оформление профиля.`)
    .createElement(),
    $('<div>Тестовый предмет</div>'),
  ];

  const contestsDB = new LZTContestsDB();
  const contestsData = await contestsDB.read();

  const contestsItems = [
    new Checkbox('contests_open_ten', 'Кнопка "Открыть 10"')
    .createElement(
      contestsData.contestsTen,
      async () => {
        await contestsDB.update({contestsTen: 1})
        regOpenContestsBtn(10)
      },
      async () => {
        await contestsDB.update({contestsTen: 0})
        removeOpenContestsBtn(10)
      }),
    new Checkbox('contests_open_uploaded',
      `Кнопка "Открыть прогруженные"
      <span class="fa fa-exclamation-triangle Tooltip" id="LZTUpTooltip" title="При частом использование данной кнопки вы можете получить временную блокировку участия в розыгрышах"></span>`)
    .createElement(
      contestsData.contestsAll,
      async () => {
        await contestsDB.update({contestsAll: 1})
        regOpenContestsBtn(100)
      },
      async () => {
        await contestsDB.update({contestsAll: 0})
        removeOpenContestsBtn(100)
      }),
    new Checkbox('contests_hide_tags',
      `Скрытие тегов в теме розыгрыша`)
    .createElement(
      contestsData.contestsHideTags,
      async () => {
        await contestsDB.update({contestsHideTags: 1})
        contestsTagsVisibility(true)
      },
      async () => {
        await contestsDB.update({contestsHideTags: 0})
        contestsTagsVisibility(false)
      }),
    new Checkbox('contests_auto_close',
      `Автозакрытие страницы при нажатие на кнопку "Участвовать"
      <span class="fa fa-exclamation-triangle Tooltip" title="При отключение этой функции страница будет перезагружена"></span>
      `)
    .createElement(
      contestsData.contestsAutoClose,
      async () => {
        await contestsDB.update({contestsAutoClose: 1})
        contestsAutoCloseHandler(true)
      },
      async () => {
        await contestsDB.update({contestsAutoClose: 0})
        contestsAutoCloseHandler(false)
      }),
    new Checkbox('contests_info_top', `Отображение информации о розыгрыше вверху темы`)
    .createElement(
      contestsData.contestsInfoTop,
      async () => {
        await contestsDB.update({contestsInfoTop: 1})
        contestThreadBlockMove(true)
      },
      async () => {
        await contestsDB.update({contestsInfoTop: 0})
        contestThreadBlockMove(false)
      }),
    new Checkbox('contests_btn_top_in_block', `Отображение кнопки "Участвовать" выше блока с информацией о розыгрыше`)
    .createElement(
      contestsData.contestsBtnTopInBlock,
      async () => {
        await contestsDB.update({contestsBtnTopInBlock: 1})
        contestsBtnInBlockMove(true)
      },
      async () => {
        await contestsDB.update({contestsBtnTopInBlock: 0})
        contestsBtnInBlockMove(false)
      }),
  ];


  const updateItems = [
    $('<div>Тестовый предмет</div>'),
  ];

  Logger.debug('Generated menu unique section items: ', uniqueItems)

  const sectionContainers = [
    addMenuSectionContainer('LZTUpUniqContainer', uniqueItems),
    addMenuSectionContainer('LZTUpContestsContainer', contestsItems),
    addMenuSectionContainer('LZTUpUpdateContainer', updateItems),
  ];

  Logger.debug('Generated menu section containers: ', sectionContainers)

  const menuContent = $(`
    <div id="LZTUpModalContent">
      <ul class="tabs" id="LZTUpTabs"></ul>
    </div>
  `);

  for (const section of sections) {
    menuContent.append(section);
  }

  for (const sectionContainer of sectionContainers) {
    menuContent.append(sectionContainer);
  }

  Logger.debug('Generated menu tabs: ', tabs);

  for (const tab of tabs) {
    const tabsEl = menuContent.find('#LZTUpTabs');
    const tabEl = tab.createElement();
    tabsEl.append(tabEl);
  }

  return menuContent;
}

export { generateMenu };