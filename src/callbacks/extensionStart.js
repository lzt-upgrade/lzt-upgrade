import { getThemes } from "API/lztupgrade/getThemes";
import { Logger } from "Utils/logger";
import Cache from "Utils/cache";

function getThemeByID(themeId) {
  // Loading theme by ID
  return new Promise(async (resolve, reject) => {
    console.log('Loading theme start... ' + new Date());
    Logger.debug(`onExtensionStart: Start loading theme with id ${themeId}`);
    const availabledThemes = await getThemes();
    if (availabledThemes?.length) {
      Logger.debug('onExtensionStart: Themes arrray getted: ', availabledThemes);
      const findedTheme = availabledThemes.find(theme => theme.uid === themeId && theme.active === 1);
      return resolve(findedTheme?.file)
      // Logger.debug(findedTheme);
      // if (findedTheme) {
      //   Logger.debug(`onExtensionStart: Finded active theme with id ${findedTheme.uid}`);
      //   loadTheme(findedTheme.file);
      //   return resolve(true);
      // }
    }

    Logger.debug(`onExtensionStart: Not finded active theme`);
    reject(false)
  });
}

export { getThemeByID };