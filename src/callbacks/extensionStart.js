import { getThemes } from "API/lztupgrade/getThemes";
import { Logger } from "Utils/logger";

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
    }

    Logger.debug(`onExtensionStart: Not finded active theme`);
    reject(false)
  });
}

export { getThemeByID };