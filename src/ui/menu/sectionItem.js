import { setMenuTitle, addGoBackBtn } from 'UI/menu/utils';
import { createMenuIcon } from 'UI/kit/icons.js'

function openSubMenu(containerClassName, sectionName) {
  document.querySelector('.LZTUpTabs').style.display = 'none';

  const subMenus = document.querySelectorAll('#LZTUpSubMenu');
  subMenus.forEach(subMenu => subMenu.style.display = 'none');

  const sections = document.querySelectorAll('.LZTUpSection');
  sections.forEach(section => section.style.display = 'none');

  document.querySelector(`.${containerClassName}`).style.display = '';
  setMenuTitle(sectionName);
  addGoBackBtn();
}

/**
 *
 *  @param {string} sectionName - name of the section
 *  @param {string} sectionDesc - desc of the section
 *  @param {string} sectionIconClasses - font awesome icon classes
 *  @param {string} className - name of the section class
 *  @param {string} containerClassName - name of the container class
 */
function addMenuSectionItem(sectionName, sectionDesc, sectionIconClasses, className, containerClassName) {
  const sectionItem = document.createElement('div');
  sectionItem.id = 'LZTUpSectionItem';
  sectionItem.className = className;

  const sectionIcon = createMenuIcon(sectionIconClasses);
  const textContainer = document.createElement('div');
  textContainer.innerHTML = `
    <span id="LZTUpText">${sectionName}</span>
    <span id="LZTUpSubText">${sectionDesc}</span>
  `;

  sectionItem.appendChild(sectionIcon);
  sectionItem.appendChild(textContainer);

  sectionItem.addEventListener('click', () => openSubMenu(containerClassName, sectionName));

  return sectionItem;
}

export { addMenuSectionItem };