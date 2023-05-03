import { setMenuTitle, addGoBackBtn } from 'UI/menu/utils';

function openSubMenu(containerClassName, sectionName) {
  $('#LZTUpTabs').hide();

  // $('#LZTUpSubMenu');
  const subMenus = document.querySelectorAll('#LZTUpSubMenu');
  $(subMenus).hide()

  const sections = document.querySelectorAll('#LZTUpSection');
  $(sections).hide();

  $(`.${containerClassName}`).show();
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
  const sectionItem = $(`
    <div id="LZTUpSectionItem" class="${className}">
      <i id="LZTUpIcon" class="${sectionIconClasses}"></i>
      <div>
        <span id="LZTUpText">${sectionName}</span>
        <span id="LZTUpSubText">${sectionDesc}</span>
      </div>
    </div>
  `);

  sectionItem[0].addEventListener('click', () => openSubMenu(containerClassName, sectionName));

  return sectionItem;
}

export { addMenuSectionItem };