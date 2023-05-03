import endpoints from 'Configs/endpoints.json' assert {type: 'json'};
import { Logger } from 'Utils/logger';

async function loadTheme(themeName) {
  return $.ajax({
    url: `${endpoints['staticThemes']}/${themeName}.css`,
    dataType: 'text',
    success: (value, boolStatus, req) => {
      if (req.status === 200) {
        GM_addStyle(value); // ! Maybe need to add polyfills
        return true;
      }
      return false;
    },
    error: (err) => {
      Logger.error(`Не удалось загрузить тему ${themeName} (${endpoints['staticThemes']}/${themeName}.css). Ошибка: ${err}`);
      return false;
    }
  });
}

export { loadTheme };