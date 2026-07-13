import endpoints from "Configs/endpoints.json";
import requestJSON from "API/requestJSON";
import { getTimestamp, waitForBody } from "Utils/utils";

async function getThemes() {
  return await requestJSON(
    endpoints["getThemes"],
    `Не удалось получить список тем (${endpoints["getThemes"]})`,
  );
}

function loadTheme(themeName) {
  // load theme by theme name
  const timestamp = getTimestamp();

  return GM_addStyle(`
    @import url(${endpoints["staticThemes"]}/${themeName}.css?id=${timestamp});
  `);
}

async function smartLoadTheme(themeName) {
  // Waiting for the body to load to overwrite lolz styles
  return waitForBody().then(() => {
    console.log("wait for elm");
    return loadTheme(themeName);
  });
}

export default {
  getThemes,
  loadTheme,
  smartLoadTheme,
};
