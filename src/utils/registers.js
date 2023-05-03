function registerModal(modalName, elementMain = '') {
  return XenForo.alert(elementMain, modalName, null, (elem) => {
      $('div.modal.fade').remove()
  })
}

function registerAlert(text, timeout = 5000) {
  return XenForo.alert(text, '', timeout);
}

function registerMenuButton(el) {
  const menu = $('#AccountMenu > ul:nth-child(1) > li:nth-child(10)');
  menu.after(el);
  return true;
}

export { registerMenuButton, registerModal, registerAlert };