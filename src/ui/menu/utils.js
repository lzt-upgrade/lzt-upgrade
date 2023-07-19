import config from 'Configs/config';
import extData from 'Configs/extData';
import { Button } from 'UI/kit/button.js';


function setMenuTitle(title) {
  const modalOverlay = document.querySelector('.xenOverlay > .errorOverlay#LZTUpModalOverlay')
  const modalTitle = modalOverlay.querySelector('h2.heading');
  modalTitle.id = 'LZTUpModalMainTitle';
  modalTitle.innerText = title;
}

function createGoBackBtn(callback) {
  const modalOverlay = document.querySelector('.xenOverlay > .errorOverlay#LZTUpModalOverlay');

  const backButton = new Button('', 'LZTUpModalBackButton', 'fas fa-long-arrow-left').createElement();

  backButton.onclick = () => {
    document.querySelectorAll('div.LZTUpSubMenu').forEach(submenu => submenu.style.display = 'none');
    callback();
  }

  modalOverlay.insertAdjacentElement('afterbegin', backButton);
}

function addGoBackBtn(target = '', text = config.extName, subMenuToShow = null, onCloseCallback = () => {}) {
  const backButtonSelector = 'button.LZTUpModalBackButton';

  if (document.querySelector(backButtonSelector) !== null) {
    document.querySelector(backButtonSelector).remove();
  }

  return createGoBackBtn(() => {
    document.querySelector(backButtonSelector).remove();
    setMenuTitle(text);
    switch (target) {
      case 'tempmenu':
        document.querySelector(extData.uiElementsSelectors.lztupTempSubMenu).style.display = 'none';
        subMenuToShow.style.display = '';
        addGoBackBtn();
        onCloseCallback();
        break;
      default:
        document.querySelector('.LZTUpSection').style.display = '';
        const tabs = document.querySelector('.LZTUpTabs');
        tabs.style.display = '';

        const tab = tabs.querySelectorAll('#LZTUpTab');
        tab.forEach(element => element.classList.remove('active'));
        tab[0].classList.add('active');
        onCloseCallback()
    }
  });
}

export { setMenuTitle, addGoBackBtn };