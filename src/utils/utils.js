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
      subtree: true,
    });
  });
}

function waitForBody() {
  return new Promise(resolve => {
    if (document.body) {
      return resolve(document.body);
    }

    const observer = new MutationObserver(() => {
      if (document.body) {
        resolve(document.body);
        observer.disconnect();
      }
    });

    observer.observe(document, {
      childList: true,
      subtree: true,
    });
  });
}

const sleep = m => new Promise(r => setTimeout(r, m));

function getNodeLinks() {
  return document.querySelectorAll(".discussionListItem--Wrapper");
}

function getThreadLinks() {
  return Array.from(getNodeLinks()).map(
    el => el.querySelector(".listBlock.main")?.href,
  );
}

function removeStyles(selector) {
  const el = document.querySelector(selector);
  return removeStylesByEl(el);
}

function removeStylesByEl(el) {
  if (!el) {
    return;
  }

  el.className = "";
  el.style = "";

  return el;
}

function applyStyle(el, style) {
  if (style?.length > 1 && style?.startsWith(".")) {
    style = style.replace(".", "");
    return el.classList.add(style);
  } else {
    return (el.style = style);
  }
}

function getTimestamp() {
  return Math.floor(Date.now() / 1000);
}

function getAuthors(authorNames, authorUserIds) {
  if (authorUserIds === "") {
    authorUserIds = null;
  }

  switch (typeof authorUserIds) {
    case "string": {
      const authorsUserIDs = authorUserIds.split(",");
      const authorsNames = authorNames.split(",");
      const authors = [];
      authorsUserIDs.map((val, idx) => {
        authors.push({
          name: XenForo.htmlspecialchars(authorsNames?.[idx]),
          userId: Number(val),
        });
      });
      return authors;
    }
    case "number":
      return [
        {
          name: XenForo.htmlspecialchars(authorNames),
          userId: XenForo.htmlspecialchars(authorUserIds),
        },
      ];
    default:
      return [
        {
          name: XenForo.htmlspecialchars(authorNames),
          userId: null,
        },
      ];
  }
}

function getHTMLFromString(HTMLString) {
  const parser = new DOMParser();
  return parser.parseFromString(HTMLString, "text/html");
}

function updateFeed() {
  document.querySelector(".UpdateFeedButton")?.click();
}

export {
  waitForElm,
  waitForBody,
  sleep,
  getNodeLinks,
  getThreadLinks,
  removeStyles,
  removeStylesByEl,
  applyStyle,
  getTimestamp,
  getAuthors,
  getHTMLFromString,
  updateFeed,
};
