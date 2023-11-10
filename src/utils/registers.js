function registerModal(modalName, elementMain = "") {
  return XenForo.alert(elementMain, modalName, null, () => {
    document.querySelector("div.modal.fade").remove();
  });
}

function registerAlert(text, timeout = 5000) {
  return XenForo.alert(text, "", timeout);
}

function registerMenuButton(el) {
  const menu = document.querySelector(
    "#AccountMenu > ul:nth-child(1) > li:nth-child(10)",
  );
  menu.insertAdjacentElement("afterend", el);
  return true;
}

function registerNavButton(el) {
  const nav = document.querySelector(".pageNavLinkGroup > .linkGroup");
  el.style.marginRight = "10px";
  nav.prepend(el);
  return true;
}

function registerObserver(callback) {
  const observer = new MutationObserver(mutationsList => {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList") {
        callback(mutation);
      }
    }
  });

  const config = { childList: true, subtree: true };
  observer.observe(document.body, config);
  return observer;
}

export {
  registerMenuButton,
  registerNavButton,
  registerModal,
  registerAlert,
  registerObserver,
};
