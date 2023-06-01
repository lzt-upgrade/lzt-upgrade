import endpoints from 'Configs/endpoints.json' assert {type: 'json'};
import { Logger } from 'Utils/logger';

async function loadTheme(themeName) {
  try {
    let res = await fetch(`${endpoints['staticThemes']}/${themeName}.css`)

    if (res.status === 200) {
      Logger.debug("LoadTheme: Status code 200. Adding theme styles...");
      const styles = await res.text();
      GM_addStyle(styles); // ! Maybe need to add polyfills
      return true;
    }

    Logger.debug(`LoadTheme: Failed to load theme. Status code: ${res.status}, Status message: ${res.statusText}`);
    return false;
  } catch (err) {
    Logger.error(`Failed to load theme ${themeName} (${endpoints['staticThemes']}/${themeName}.css). Error: `, err);
    return false;
  }
}

export { loadTheme };