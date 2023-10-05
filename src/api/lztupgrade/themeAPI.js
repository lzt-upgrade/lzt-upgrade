import endpoints from 'Configs/endpoints.json';
import { requestJSON } from 'API/requestJSON';

async function getThemes() {
  return await requestJSON(endpoints['getThemes'], `Не удалось получить список тем (${endpoints['getThemes']})`);
}

function loadTheme(themeName) {
  // load theme by theme name
  const link = document.createElement('link');
  link.href = `${endpoints['staticThemes']}/${themeName}.css`;
  link.type = 'text/css';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
}

export default {
  getThemes,
  loadTheme
};