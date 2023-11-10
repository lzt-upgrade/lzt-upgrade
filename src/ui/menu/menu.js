import { Section } from "UI/components/menu/section";
import Logger from "Utils/logger";
import getContestsItems from "UI/menu/items/contests";
import getUsersItems from "UI/menu/items/users";
import getProfileItems from "UI/menu/items/profile";
import getInfoItems from "UI/menu/items/info";
import getSettingsItems from "UI/menu/items/settings";
import { openSubMenu } from "UI/menu/utils.js";
import "Styles/menu.scss";
import getAppearItems from "UI/menu/items/appear";
import getUpdateItems from "UI/menu/items/update";

async function generateMenu(tabs) {
  const menuSection = new Section("LZTUpMainSection")
    .addSectionItem(
      "Локальный Уник",
      "Максимальная кастомизация",
      "far fa-palette",
      "LZTUpUniqItem",
      { onClick: (_, title) => openSubMenu("LZTUpUniqContainer", title) },
    )
    .addSectionItem(
      "Розыгрыши",
      "Комфорт для розыгрышей",
      "far fa-gift",
      "LZTUpContestsItem",
      { onClick: (_, title) => openSubMenu("LZTUpContestsContainer", title) },
    )
    .addSectionItem(
      "Пользователи",
      "Штучки для пользователей",
      "far fa-user",
      "LZTUpUsersItem",
      { onClick: (_, title) => openSubMenu("LZTUpUsersContainer", title) },
    )
    .addSectionItem(
      "Внешний вид",
      "Темы, логотипы и другое",
      "far fa-drafting-compass",
      "LZTUpAppearItem",
      { onClick: (_, title) => openSubMenu("LZTUpAppearContainer", title) },
    )
    .addSectionContainer("LZTUpUniqContainer", await getProfileItems())
    .addSectionContainer("LZTUpContestsContainer", await getContestsItems())
    .addSectionContainer("LZTUpUsersContainer", await getUsersItems())
    .addSectionContainer("LZTUpAppearContainer", await getAppearItems());

  const settingsSection = new Section("LZTUpSettingsSection")
    .addSectionItem(
      "Настройки",
      "Настройки расширения",
      "far fa-cog",
      "LZTUpSettingsItem",
      { onClick: (_, title) => openSubMenu("LZTUpSettingsContainer", title) },
    )
    .addSectionItem(
      "Обновления",
      "Установка и проверка обновлений расширения",
      "far fa-cloud-download",
      "LZTUpUpdateItem",
      { onClick: (_, title) => openSubMenu("LZTUpUpdateContainer", title) },
    )
    .addSectionItem(
      "Информация",
      `Версия: ${GM_info?.script?.version}`,
      "far fa-info-circle",
      "LZTUpInformationItem",
      {
        onClick: (_, title) => openSubMenu("LZTUpInformationContainer", title),
      },
    )
    .addSectionContainer("LZTUpSettingsContainer", await getSettingsItems())
    .addSectionContainer("LZTUpUpdateContainer", await getUpdateItems())
    .addSectionContainer("LZTUpInformationContainer", await getInfoItems());

  const sections = [menuSection, settingsSection];

  const menuContent = document.createElement("div");
  menuContent.classList.add("LZTUpModalContent");

  const tabsContainer = document.createElement("ul");
  tabsContainer.classList.add("LZTUpTabs");
  menuContent.appendChild(tabsContainer);

  for (const section of sections) {
    const sectionEl = section.createElement();
    menuContent.appendChild(sectionEl);
    for (const container of section.sectionContainers) {
      menuContent.append(container);
      container
        .querySelectorAll(".Tooltip")
        .forEach(el => XenForo.Tooltip($(el))); // load all tooltips in menu container
    }
  }

  Logger.debug("Generated menu tabs: ", tabs);

  for (const tab of tabs) {
    menuContent.querySelector(".LZTUpTabs").appendChild(tab.createElement());
  }

  return menuContent;
}

export { generateMenu };
