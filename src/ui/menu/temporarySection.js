import { setMenuTitle, addGoBackBtn } from 'UI/menu/utils';

const tempId = 'LZTUpTempSubMenu';

function openTempMenu(sectionName, fromSectionName, subMenuToShow, onCloseCallback) {
  const subMenus = document.querySelectorAll('.LZTUpSubMenu');
  subMenus.forEach(subMenu => subMenu.style.display = 'none');
  document.querySelector('.LZTUpTempSubMenu').style.display = '';
  setMenuTitle(sectionName);
  addGoBackBtn('tempmenu', fromSectionName, subMenuToShow, onCloseCallback);
}

function addTemporaryMenuSection(items) {
  const oldTempMenu = document.querySelector(`.${tempClass}`);
  if (oldTempMenu) {
    oldTempMenu.remove();
  }

  const container = document.createElement('div');
  container.id = tempId;
  container.classList.add('LZTUpSubMenu');

  for (const item of items) {
    container.appendChild(item);
  }

  container.style.display = 'none';

  return container;
}

export { addTemporaryMenuSection, openTempMenu };