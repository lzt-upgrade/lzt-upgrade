import StorageName from "Configs/StorageName";
import Checkbox from "UI/components/menu/checkbox";
import { registerAlert } from "Utils/registers";
import Container from "UI/components/menu/container";
import { Section, SectionDirection } from "UI/components/menu/section";
import {
  openTempMenu,
  addTemporaryMenuSection,
} from "UI/menu/temporarySection";
import { Grid } from "UI/components/menu/grid";
import { setLogo } from "Visuals/universal";
import Logger from "Utils/logger";
import SiteType from "Configs/SiteType";
import { getAuthors, getTimestamp } from "Utils/utils";
import { sleep, ucFirst } from "Utils/utils";
import config from "Configs/config";
import { hideBalloonById, hideUnreadArticlesStatus } from "Visuals/navbar";
import NavbarBalloon from "Configs/NavbarBalloon";
import { summarizeThreadBlock } from "Utils/threads";
import LZTUp from "Utils/gmWrapper";
import NewStorageName from "Configs/NewStorageName";
import CacheKeys from "Configs/CacheKeys";
import Separator from "UI/components/menu/separator";
import SortableContainer from "UI/components/menu/sortableContainer";
import Button from "UI/components/button";
import SortableItem from "UI/components/menu/sortableItem";
import Input from "UI/components/menu/input";
import { clearHTML } from "Utils/purify";
import { updateReportButtons } from "Visuals/threads";
import { v4 as uuidv4 } from "uuid";

const MAX_BUTTONS_COUNT = 4;

async function createLogoManagerTempMenu(logoType) {
  const cacheItemName = `availabled${ucFirst(logoType)}Logos`;
  const cacheKey = CacheKeys.getKeyByName(cacheItemName);
  const storageItemName = `${logoType.toLowerCase()}Logo`;
  const appearData = await LZTUp.getValue(NewStorageName.Appear);
  const activeLogo = appearData?.[storageItemName] ?? 0;
  const logos = await LZTUp.getCache(cacheKey);
  const defaultLogoPreview =
    logoType === SiteType.Forum
      ? "https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/static/img/logos/forum/default.svg"
      : "https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/static/img/logos/market/default.svg";
  logos.unshift({
    uid: 0,
    name: "По умолчанию",
    preview: defaultLogoPreview,
    target: 1,
    css: "",
    author: "Lolzteam",
    author_userid: "",
    active: 1,
    created_at: 1696777530,
  });

  const modalContent = document.querySelector(".LZTUpModalContent");
  const mainMenu = document.getElementById("LZTUpAppearContainer");

  const logoGrid = new Grid("LZTUpLogoGrid");
  // TODO: add logo filters for the market and forum in the API (TO BACKEND) (?target=market or ?target=forum)
  for (const logo of logos) {
    const authors = getAuthors(logo.author, logo.author_userid);
    logoGrid.addGridItem(logo.name, `LZTUpLogo${logo.uid}`, {
      onClick: async () => {
        setLogo(logo.css, logoType);
        appearData[storageItemName] = logo.uid;
        await LZTUp.setValue(NewStorageName.Appear, appearData);
        Logger.debug(`Change logo to ${logo.name} (by ${logo.author})`);
        await LZTUp.setCache(storageItemName, {
          uid: logo.uid,
          css: logo.css,
          cacheTime: getTimestamp() + config.cacheTime,
        });
      },
      imageLink: logo.preview,
      altText: logo.name,
      active: logo.uid === activeLogo,
      authors,
    });
  }

  const el = addTemporaryMenuSection([
    new Container(
      [logoGrid.createElement()],
      "Выберите логотип",
      `Выберите логотип, который у вас будет отображаться как логотип ${
        logoType === SiteType.Forum ? "форума" : "маркета"
      }.`,
    ).createElement(),
  ]);

  modalContent.appendChild(el);
  openTempMenu("Выбор логотипа", "Внешний вид", mainMenu, () => {});
}

async function createThemeManagerTempMenu() {
  const appearData = await LZTUp.getValue(NewStorageName.Appear);
  const selectedTheme = appearData?.selectedTheme ?? 0;
  const themes = await LZTUp.getCache(CacheKeys.availabledThemes);
  themes.unshift({
    uid: 0,
    name: "Обычная",
    file: "",
    author: "Lolzteam",
    author_userid: null,
    accent_color: "",
    text_color: "",
    active: 1,
  });

  const modalContent = document.querySelector(".LZTUpModalContent");
  const mainMenu = document.getElementById("LZTUpAppearContainer");

  const themeGrid = new Grid("LZTUpThemeGrid");
  for (const theme of themes) {
    const authors = getAuthors(theme.author, theme.author_userid);
    themeGrid.addGridItem(theme.name, `LZTUpTheme${theme.uid}`, {
      onClick: async () => {
        appearData.selectedTheme = theme.uid;
        await LZTUp.setValue(NewStorageName.Appear, appearData);
        Logger.debug(`Change theme to ${theme.name} (by ${theme.author})`);
        registerAlert(`Тема изменена на ${theme.name}`, 5000);
        await LZTUp.setCache(CacheKeys.themeName.name, theme.file);
        await sleep(500);
        window.location.reload();
      },
      active: theme.uid === selectedTheme,
      authors,
      backgroundColor: theme.accent_color,
      textColor: theme.text_color,
      additionalClass: "theme",
    });
  }

  const el = addTemporaryMenuSection([
    new Container(
      [themeGrid.createElement()],
      "Выберите тему",
      `Выберите тему, которая у вас будет отображаться как тема сайта.`,
    ).createElement(),
  ]);

  modalContent.appendChild(el);
  openTempMenu("Выбор темы", "Внешний вид", mainMenu, () => {});
}

async function generateReportButtonsItems() {
  console.log("Generating buttons items");
  const items = [];

  const reportButtonsData = await LZTUp.getValue(NewStorageName.ReportButtons);

  console.log(reportButtonsData.sort((a, b) => a.position - b.position));

  for (const button of reportButtonsData.sort(
    (a, b) => a.position - b.position,
  )) {
    console.log(button.text, button.position);
    const item = new SortableItem(button.text, button.position).createElement(
      sortableItemOnEditCallback,
      sortableItemOnRemoveCallback,
    );
    item.dataset.uuid = button.uuid;
    items.push(item);
  }

  console.log(items);

  return items;
}

async function sortableItemOnEditCallback(e, sortableItem) {
  const buttonUUID = sortableItem.dataset.uuid;
  const modalContent = document.querySelector(".LZTUpModalContent");
  const appearSubMenu = document.querySelector("#LZTUpAppearContainer");
  const reportButtonsData = await LZTUp.getValue(NewStorageName.ReportButtons);
  let buttonData =
    reportButtonsData.find(button => button.uuid === buttonUUID) || [];

  async function updateButtonData(buttonData) {
    // buttonData its current button (which we are editing)
    const actualReportButtonsData = await LZTUp.getValue(
      NewStorageName.ReportButtons,
    );
    const currentReportButton = actualReportButtonsData.find(
      button => button.uuid === buttonUUID,
    );
    const currentBadgeId = actualReportButtonsData.indexOf(currentReportButton);
    actualReportButtonsData[currentBadgeId] = buttonData;
    return actualReportButtonsData;
  }

  const el = addTemporaryMenuSection([
    new Container(
      [
        new Input(buttonData.text, "Неправильный отзыв", 1, 12).createElement(
          async event => {
            let val = XenForo.htmlspecialchars(event.target.value.trim());

            if (val.length < 1) {
              return registerAlert(
                "Минимальная длина текста 1 символ. Увеличьте введенный текст для сохранения.",
              );
            } else if (val.length > 12) {
              return registerAlert(
                "Максимальная длина текста 12 символов. Уменьшите введенный текст для сохранения.",
              );
            }

            buttonData.text = val;
          },
        ),
      ],
      "Текст кнопки",
      "Этот текст видите только вы. Минимальная длина - 1 символ, максимальная - 12 символов.",
    ).createElement(),

    new Container(
      [
        new Input(buttonData.reason, "Нарушение 3.15", 1, 120).createElement(
          async event => {
            let val = XenForo.htmlspecialchars(event.target.value.trim());

            if (val.length < 1) {
              return registerAlert(
                "Минимальная длина причины репорта 1 символ. Увеличьте введенный текст для сохранения.",
              );
            } else if (val.length > 120) {
              return registerAlert(
                "Максимальная длина причины репорта 120 символов. Уменьшите введенный текст для сохранения.",
              );
            }

            buttonData.reason = val;
          },
        ),
      ],
      "Причина репорта",
      "Внимание! Причина репорта видна ВСЕМ. Не используйте в ней какие-либо оскорбления. Минимальная длина - 1 символ, максимальная - 120 символов.",
    ).createElement(),

    new Container([
      new Button(
        "Сохранить",
        "button primary LZTUpIconButton fit",
        "far fa-save",
      ).createElement(async () => {
        const buttons = await updateButtonData(buttonData);
        await LZTUp.setValue(NewStorageName.ReportButtons, buttons);
        updateReportButtons(buttons);
        registerAlert("Кнопка быстрого репорта успешно сохранена.");
      }),
    ]).createElement(),
  ]);

  modalContent.appendChild(el);
  openTempMenu(
    "Управление быстрыми репортами",
    "Внешний вид",
    appearSubMenu,
    async () => {
      const sortable = appearSubMenu.querySelectorAll(
        ".LZTUpSortableContainer > .LZTUpSortableItem",
      );

      const actualReportButtonsData = await LZTUp.getValue(
        NewStorageName.ReportButtons,
      );

      for (let i = 0; i < actualReportButtonsData.length; i++) {
        const content = sortable[i].querySelector(".LZTUpSortableContent");
        content.innerHTML = clearHTML(actualReportButtonsData[i].text);
      }
    },
  );
}

async function sortableItemOnRemoveCallback(e, sortableItemEl) {
  const appearSubMenu = document.querySelector("#LZTUpAppearContainer");
  let reportButtonsData = await LZTUp.getValue(NewStorageName.ReportButtons);
  let newReportButtons = [];
  let counter = 1;

  for (let i = 0; i < reportButtonsData.length; i++) {
    const button = reportButtonsData[i];
    if (button.uuid === sortableItemEl.dataset.uuid) {
      continue;
    }

    const item = appearSubMenu.querySelector(
      ".LZTUpSortableContainer > .LZTUpSortableItem",
    );
    if (item) {
      item.dataset.id = counter;
    }

    button.position = counter;
    newReportButtons.push(button);
    counter++;
  }

  await LZTUp.setValue(NewStorageName.ReportButtons, newReportButtons);
  updateReportButtons(newReportButtons);
}

const getAppearItems = async () => {
  const appearData = await GM_getValue(StorageName.Appear, {});

  const appearSection = new Section("LZTUpInfoSection", {
    direction: SectionDirection.Column,
    hidden: false,
  })
    .addSectionItem(
      "Логотип",
      "Выберите логотип для форума из списка",
      "far fa-comments",
      "LZTUpLogoManager",
      {
        onClick: async () => await createLogoManagerTempMenu(SiteType.Forum),
        rightArrow: true,
      },
    )
    .addSectionItem(
      "Логотип маркета",
      "Выберите логотип для маркета из списка",
      "far fa-shopping-cart",
      "LZTUpMarketLogoManager",
      {
        onClick: async () => await createLogoManagerTempMenu(SiteType.Market),
        rightArrow: true,
      },
    )
    .addSectionItem(
      "Менеджер тем",
      "Выберите тему для форума из списка",
      "far fa-paint-brush",
      "LZTUpThemeManager",
      { onClick: createThemeManagerTempMenu, rightArrow: true },
    );

  return [
    appearSection.createElement(),

    new Separator().createElement(),

    new Container(
      [
        new SortableContainer(await generateReportButtonsItems()).createElement(
          async e => {
            console.log("target", e, e.target);
            const items = e.target.children;
            console.log("items", items);
            const actualReportButtonsData = await LZTUp.getValue(
              NewStorageName.ReportButtons,
            );
            const newReportButtonsData = [];

            console.log(actualReportButtonsData);
            // actualReportButtonsData.reverse();

            for (let i = 0; i < items.length; i++) {
              const item = items[i];
              const button = actualReportButtonsData.find(
                b => b.uuid === item.dataset.uuid,
              );
              console.log("moving items", item, button);

              item.dataset.id = i + 1;
              button.position = i + 1;
              newReportButtonsData.push(button);
            }

            console.log("Finish", newReportButtonsData);

            await LZTUp.setValue(
              NewStorageName.ReportButtons,
              newReportButtonsData,
            );
            updateReportButtons(newReportButtonsData);
          },
        ),
        new Button(
          "Добавить кнопку",
          "button LZTUpIconButton",
          "far fa-plus",
        ).createElement(async e => {
          const sortableContainer = e.target.parentElement?.querySelector(
            ".LZTUpSortableContainer",
          );

          if (!sortableContainer) {
            return registerAlert("Не найден контейнер для добавления!");
          }

          if (sortableContainer.children.length === MAX_BUTTONS_COUNT) {
            return registerAlert("Вы не можете добавить больше 2 иконок!");
          }

          const actualReportButtons = await LZTUp.getValue(
            NewStorageName.ReportButtons,
          );

          const defaultReportButton = {
            position: sortableContainer.children.length + 1,
            text: "Новая кнопка",
            reason: "Флуд / Оффтоп / Спам / Бесполезная тема",
            uuid: uuidv4(), // uniq value
          };

          actualReportButtons.push(defaultReportButton);

          const newItem = new SortableItem(
            defaultReportButton.text,
            defaultReportButton.position,
          ).createElement(
            sortableItemOnEditCallback,
            sortableItemOnRemoveCallback,
          );
          newItem.dataset.uuid = defaultReportButton.uuid;

          sortableContainer.appendChild(newItem);

          await LZTUp.setValue(
            NewStorageName.ReportButtons,
            actualReportButtons,
          );

          updateReportButtons(actualReportButtons);
        }),
      ],
      "Управление быстрыми репортами",
      "Ниже вы можете легко настроить порядок, причины и названия для кнопок быстрого репорта.",
    ).createElement(),

    new Separator().createElement(),

    new Container(
      [
        new Checkbox(
          "hide_alert_counter",
          `Скрыть счётчик уведомлений в навбаре`,
        ).createElement(
          appearData.hideAlertCounter,
          () => {},
          () => {},
          async event => {
            appearData.hideAlertCounter = event.target.checked;
            await GM_setValue(StorageName.Appear, appearData);
            hideBalloonById(
              NavbarBalloon.AlertCounter.getName(),
              event.target.checked,
            );
            registerAlert(
              `${
                event.target.checked ? "Включено" : "Выключено"
              } скрытие счетчика уведомлений в навбаре`,
              5000,
            );
          },
        ),
        new Checkbox(
          "hide_message_counter",
          `Скрыть счётчик сообщений в навбаре`,
        ).createElement(
          appearData.hideMessageCounter,
          () => {},
          () => {},
          async event => {
            appearData.hideMessageCounter = event.target.checked;
            await GM_setValue(StorageName.Appear, appearData);
            hideBalloonById(
              NavbarBalloon.MessageCounter.getName(),
              event.target.checked,
            );
            registerAlert(
              `${
                event.target.checked ? "Включено" : "Выключено"
              } скрытие счетчика сообщений в навбаре`,
              5000,
            );
          },
        ),
        new Checkbox(
          "hide_unread_articles_status",
          `Скрыть статус непрочитанных статей`,
        ).createElement(
          appearData.hideUnreadArticlesStatus,
          () => {},
          () => {},
          async event => {
            appearData.hideUnreadArticlesStatus = event.target.checked;
            await GM_setValue(StorageName.Appear, appearData);
            hideUnreadArticlesStatus(event.target.checked);
            registerAlert(
              `${
                event.target.checked ? "Включено" : "Выключено"
              } скрытие статуса непрочитанных статей`,
              5000,
            );
          },
        ),
      ],
      "Скрытие элементов",
      "Скройте лишние элементы сайта",
    ).createElement("display: block;"),
    new Container(
      [
        new Checkbox(
          "new_error_page",
          `Небольшое изменение страницы "тех. работ" и "ошибок"`,
        ).createElement(
          appearData.newErrorPage,
          () => {},
          () => {},
          async event => {
            appearData.newErrorPage = event.target.checked;
            await GM_setValue(StorageName.Appear, appearData);
            registerAlert(
              `${
                event.target.checked ? "Включено" : "Выключено"
              } Небольшое изменение страницы "тех. работ" и "ошибок"`,
              5000,
            );
          },
        ),
        new Checkbox(
          "disable_self_ad_error",
          `Убрать саморекламу на измененной странице "тех. работ" и "ошибок"`,
        ).createElement(
          appearData.disableSelfAdOnNewErrorPage,
          () => {},
          () => {},
          async event => {
            appearData.disableSelfAdOnNewErrorPage = event.target.checked;
            await GM_setValue(StorageName.Appear, appearData);
            registerAlert(
              `${
                event.target.checked ? "Включена" : "Выключена"
              } самореклама на изменнной странице "тех. работ" и "ошибок"`,
              5000,
            );
          },
        ),
      ],
      "Страницы тех. работ и ошибок",
      "Измените оформление страницы тех. работ и ошибки",
    ).createElement("display: block;"),
    new Container(
      [
        new Checkbox(
          "summarize_threads",
          `
          Суммаризатор тем
          <span class="far fa-info-circle Tooltip" title="Собирает все самое важное из темы, если содержимое темы более 300 символов"></span>
          `,
        ).createElement(
          appearData.summarizeThreads,
          () => {},
          () => {},
          async event => {
            appearData.summarizeThreads = event.target.checked;
            await GM_setValue(StorageName.Appear, appearData);
            await summarizeThreadBlock(event.target.checked);
            registerAlert(
              `${
                event.target.checked ? "Включен" : "Выключен"
              } суммаризатор тем`,
              5000,
            );
          },
        ),
      ],
      "Другое",
      "Другие функции связанные с внешним видом",
    ).createElement("display: block;"),
  ];
};

export default getAppearItems;
