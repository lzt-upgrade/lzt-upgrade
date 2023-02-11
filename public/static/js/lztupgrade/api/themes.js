async function loadTheme(themeName) {
  return GM_xmlhttpRequest({
    url: `https://lztupgrade.toiloff.ru/static/themes/${themeName}.css`,
    method: "GET",
    onload: (http) => {
      if (http.status === 200) {
        let theme = http.response;
        GM_addStyle(theme);
      }
    },
    onerror: (error) => {
      Logger.error(`Ошибка загрузки темы ${themeName}`, error);
    },
  });
}