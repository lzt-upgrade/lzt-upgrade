import { getThemes } from "API/lztupgrade/getThemes";
import { loadTheme } from "API/lztupgrade/loadTheme";
import { Logger } from "Utils/logger";

async function onExtensionStart(themeId) {
  // ПРОЧИТАЙ ЭТО И ПЕРЕПИШИ ЭТУ ЗАЛУПУ https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Using_promises
  return new Promise(async (resolve, reject) => {
    Logger.debug(`onExtensionStart: Start loading theme with id ${themeId}`);
    const availabledThemes = await getThemes();
    if (availabledThemes?.length) {
      Logger.debug(`onExtensionStart: Themes arrray getted: `, availabledThemes);
      const findedTheme = availabledThemes.find(theme => theme.uid === themeId && theme.active === 1);
      Logger.debug(findedTheme);
      if (findedTheme) {
        Logger.debug(`onExtensionStart: Finded active theme with id ${findedTheme.uid}`);
        const status = await loadTheme(findedTheme.file);
        Logger.debug(`onExtensionStart: Theme loading status: ${status}`);
        resolve(status);
      } else {
        Logger.debug(`onExtensionStart: Not finded active theme in array`);
        reject(false)
      }
    } else {
      Logger.debug(`onExtensionStart: Failed to get array with all themes`);
      reject(false)
    }
  });
}

export default onExtensionStart;