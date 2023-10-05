import themeAPI from "API/lztupgrade/themeAPI";
import Logger from "Utils/logger";

function getThemeByID(themeId) {
  // Loading theme by ID
  return new Promise(async (resolve, reject) => {
    Logger.debug(`onExtensionStart: Start loading theme with id ${themeId}`);
    const availabledThemes = await themeAPI.getThemes();
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