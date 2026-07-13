function registerModal(modalName, elementMain = "") {
  return unsafeWindow.XenForo.alert(elementMain, modalName);
}

function registerAlert(text, timeout = 5000) {
  return unsafeWindow.XenForo.alert(text, "", timeout);
}

function registerMenuButton(el) {
  const menu = document.querySelector(
    "#AccountMenu .menuScrollBlock > .manageItems",
  );
  menu.insertAdjacentElement("beforeend", el);
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
