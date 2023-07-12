import { getThemes } from "API/lztupgrade/getThemes";
import { loadTheme } from "API/lztupgrade/loadTheme";
import { Logger } from "Utils/logger";

function loadThemeByID(themeId) {
  // Loading theme by ID
  return new Promise(async (resolve, reject) => {
    Logger.debug(`onExtensionStart: Start loading theme with id ${themeId}`);
    const availabledThemes = await getThemes();
    if (availabledThemes?.length) {
      Logger.debug('onExtensionStart: Themes arrray getted: ', availabledThemes);
      const findedTheme = availabledThemes.find(theme => theme.uid === themeId && theme.active === 1);
      Logger.debug(findedTheme);
      if (findedTheme) {
        Logger.debug(`onExtensionStart: Finded active theme with id ${findedTheme.uid}`);
        const status = await loadTheme(findedTheme.file);
        Logger.debug(`onExtensionStart: Theme loading status: ${status}`);
        return resolve(status);
      }
    }

    Logger.debug(`onExtensionStart: Not finded active theme`);
    reject(false)
  });
}

export { loadThemeByID };