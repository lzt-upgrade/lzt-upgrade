import { setMenuTitle, addGoBackBtn } from 'UI/menu/utils';
import extData from 'Configs/extData';

const tempSubMenuId = extData.uiElementsId.lztupTempSubMenu;
const tempSubMenuSelector = extData.uiElementsSelectors.lztupTempSubMenu;


function openTempMenu(sectionName, fromSectionName, subMenuToShow, onCloseCallback) {
  const subMenus = document.querySelectorAll('.LZTUpSubMenu');
  subMenus.forEach(subMenu => subMenu.style.display = 'none');
  document.querySelector(tempSubMenuSelector).style.display = '';
  setMenuTitle(sectionName);
  addGoBackBtn('tempmenu', fromSectionName, subMenuToShow, onCloseCallback);
}

function addTemporaryMenuSection(items) {
  const oldTempMenu = document.querySelector(tempSubMenuSelector);
  if (oldTempMenu) {
    oldTempMenu.remove();
  }

  const container = document.createElement('div');
  container.id = tempSubMenuId;
  container.classList.add('LZTUpSubMenu');

  for (const item of items) {
    container.appendChild(item);
  }

  container.style.display = 'none';

  return container;
}

export { addTemporaryMenuSection, openTempMenu };