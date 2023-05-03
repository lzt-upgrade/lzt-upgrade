import config from 'Configs/config';

function setMenuTitle(title) {
  const modalOverlay = $('.xenOverlay > .errorOverlay#LZTUpModalOverlay')
  const modalTitle = modalOverlay.find('h2.heading');
  modalTitle.attr('id', 'LZTUpModalMainTitle');
  modalTitle.text(title);
}

function createGoBackBtn(callback) {
  const modalOverlay = $('.xenOverlay > .errorOverlay#LZTUpModalOverlay');
  modalOverlay.prepend($(`
    <button id="LZTUpModalBackButton">
      <i class="fas fa-long-arrow-left"></i>
    </button>
  `));

  $('#LZTUpModalBackButton').on('click', () => {
    $('div#LZTUpSubMenu').hide();
    callback();
    // $('.pcr-app').length ? $('.pcr-app').remove() : null;
  });
}

function addGoBackBtn(target = '', text = config.extName, elementToHide = undefined, elementToShow = undefined) {
  $('button#LZTUpModalBackButton').remove();
  return createGoBackBtn(() => {
    $('button#LZTUpModalBackButton').remove();
    setMenuTitle(text);
    switch (target) {
      case 'submenu':
        elementToHide.hide();
        elementToShow.show();
        addGoBackBtn();
        break;
      default:
        $('#LZTUpSection').first().show();
        $('#LZTUpTabs').show();
        const tabs = $('#LZTUpTabs > #LZTUpTab');
        tabs.removeClass('active');
        tabs.first().addClass('active');
    }
  });
}

export { setMenuTitle, addGoBackBtn };