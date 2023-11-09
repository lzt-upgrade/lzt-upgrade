import StorageName from "Configs/StorageName";
import Checkbox from "UI/components/menu/checkbox";
import { registerAlert } from "Utils/registers";
import Container from "UI/components/menu/container";
import { Section, SectionDirection } from "UI/components/menu/section";
import {
  openTempMenu,
  addTemporaryMenuSection,
} from "UI/menu/temporarySection";
import logoAPI from "API/lztupgrade/logoAPI";
import { Grid } from "UI/components/menu/grid";
import { setLogo } from "Visuals/universal";
import Logger from "Utils/logger";
import SiteType from "Configs/SiteType";
import { getAuthors, getTimestamp } from "Utils/utils";
import themeAPI from "API/lztupgrade/themeAPI";
import { sleep } from "Utils/utils";
import config from "Configs/config";
import { hideBalloonById, hideUnreadArticlesStatus } from "Visuals/navbar";
import NavbarBalloon from "Configs/NavbarBalloon";
import { summarizeThreadBlock } from "Utils/threads";

async function createLogoManagerTempMenu(logoType) {
  const storageItemName = `${logoType.toLowerCase()}Logo`;
  const appearData = await GM_getValue(StorageName.Appear, {});
  const activeLogo = appearData?.[storageItemName] ?? 0;
  const logoTargetInt = logoType === SiteType.Forum ? 1 : 2;
  const logos = (await logoAPI.getLogos(logoTargetInt)) || [];
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
  // TODO: ADD cache, add update cache logo button
  for (const logo of logos) {
    const authors = getAuthors(logo.author, logo.author_userid);
    logoGrid.addGridItem(logo.name, `LZTUpLogo${logo.uid}`, {
      onClick: async () => {
        setLogo(logo.css, logoType);
        appearData[storageItemName] = logo.uid;
        await GM_setValue(StorageName.Appear, appearData);
        Logger.debug(`Change logo to ${logo.name} (by ${logo.author})`);
        const cacheData = await GM_getValue(StorageName.Cache, {});
        cacheData[storageItemName] = {
          uid: logo.uid,
          css: logo.css,
          cacheTime: getTimestamp() + config.cacheTime,
        };
        await GM_setValue(StorageName.Cache, cacheData);
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
  const appearData = await GM_getValue(StorageName.Appear, {});
  const selectedTheme = appearData?.selectedTheme ?? 0;
  const themes = (await themeAPI.getThemes()) || [];
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
  // TODO: ADD cache, add update cache logo button
  for (const theme of themes) {
    const authors = getAuthors(theme.author, theme.author_userid);
    themeGrid.addGridItem(theme.name, `LZTUpTheme${theme.uid}`, {
      onClick: async () => {
        appearData.selectedTheme = theme.uid;
        await GM_setValue(StorageName.Appear, appearData);
        Logger.debug(`Change theme to ${theme.name} (by ${theme.author})`);
        registerAlert(`Тема изменена на ${theme.name}`, 5000);
        const cacheData = await GM_getValue(StorageName.Cache, {});
        cacheData.themeName = theme.file;
        await GM_setValue(StorageName.Cache, cacheData);
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
