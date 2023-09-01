import endpoints from 'Configs/endpoints.json' assert {type: 'json'};
import { waitForElement } from "Utils/utils";

function loadTheme(themeName) {
  const link = document.createElement('link');
  link.href = `${endpoints['staticThemes']}/${themeName}.css`;
  link.type = 'text/css';
  link.rel = 'stylesheet';
  waitForElement('head', 3000).then(() => {
    document
      .querySelector('head')
      .appendChild(link);
  });
}

export { loadTheme };