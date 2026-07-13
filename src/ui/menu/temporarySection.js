import { setMenuTitle, addGoBackBtn } from "UI/menu/utils";
import MenuElement from "Configs/MenuElement";

function openTempMenu(
  sectionName,
  fromSectionName,
  subMenuToShow,
  onCloseCallback,
) {
  const subMenus = document.querySelectorAll(".LZTUpSubMenu");
  subMenus.forEach(subMenu => (subMenu.style.display = "none"));
  document.querySelector(MenuElement.TempSubMenu.selector).style.display = "";
  setMenuTitle(sectionName);
  addGoBackBtn("tempmenu", fromSectionName, subMenuToShow, onCloseCallback);
}

function addTemporaryMenuSection(items) {
  const oldTempMenu = document.querySelector(MenuElement.TempSubMenu.selector);
  if (oldTempMenu) {
    oldTempMenu.remove();
  }

  const container = document.createElement("div");
  container.id = MenuElement.TempSubMenu.getName();
  container.classList.add("LZTUpSubMenu");

  for (const item of items) {
    container.appendChild(item);
  }

  container.style.display = "none";

  return container;
}

export { addTemporaryMenuSection, openTempMenu };
