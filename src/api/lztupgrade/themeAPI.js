import endpoints from 'Configs/endpoints.json';
import { requestJSON } from 'API/requestJSON';

async function getThemes() {
  return await requestJSON(endpoints['getThemes'], `Не удалось получить список тем (${endpoints['getThemes']})`);
}

function loadTheme(themeName) {
  // load theme by theme name

  return GM_addStyle(`
    @import url(${endpoints['staticThemes']}/${themeName}.css);
  `);
}

async function smartLoadTheme(themeName) {
  // Waiting for the body to load to overwrite lolz styles
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
      subtree: true
    });
  }).then(() => {
    console.log("wait for elm")
    return loadTheme(themeName)
  });
}

export default {
  getThemes,
  loadTheme,
  smartLoadTheme
};