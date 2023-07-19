function waitForElm(selector) {
  // https://stackoverflow.com/questions/5525071/how-to-wait-until-an-element-exists
  return new Promise(resolve => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver(() => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
}

async function waitForElement(selector, timeout = 15000) {
  const start = Date.now();

  while (Date.now() - start < timeout) {
    const el = $(selector);
    if ((el && el.length) || Date.now() - start > timeout) {
      return el;
    }
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  return null;
}

async function waitForCSRFToken(timeout = 15000) {
  const start = Date.now();

  while (Date.now() - start < timeout) {
    const _csrfToken = XenForo._csrfToken;
    if ((_csrfToken && _csrfToken.length) || Date.now() - start > timeout) {
      return _csrfToken;
    }
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  return null;
}

const sleep = m => new Promise(r => setTimeout(r, m))

function hasOwn(element, property) {
  return Object.prototype.hasOwnProperty.call(element, property);
}

function getNodeLinks() {
  let latestsThreads = $('div.latestThreads');
  const stickyThreads = $('div.stickyThreads');
  latestsThreads = stickyThreads.is(':visible') ? $.merge(latestsThreads, stickyThreads) : latestsThreads;
  return latestsThreads.find('div.discussionListItem--Wrapper');
}

function getThreadLinks() {
  let links = getNodeLinks()
  .find('a.listBlock.main')
  .toArray()
  .map(element => $(element).attr('href'));
  return links;
}

function removeStyles(selector) {
  const el = document.querySelector(selector);
  return removeStylesByEl(el)
}

function removeStylesByEl(el) {
  if (!el) {
    return;
  }

  el.className = ''
  el.style = '';

  return el;
}

function applyStyle(el, style) {
  if (style?.length > 1 && style?.startsWith('.')) {
    style = style.replace('.', '');
    return el.classList.add(style);
  } else {
    return el.style = style;
  }
}

export {
  waitForElm,
  waitForElement,
  sleep,
  hasOwn,
  getNodeLinks,
  getThreadLinks,
  waitForCSRFToken,
  removeStyles,
  removeStylesByEl,
  applyStyle
};