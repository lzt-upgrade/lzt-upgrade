async function loadTheme(themeName) {
  return GM_xmlhttpRequest({
    url: `http://127.0.0.1:5000/static/themes/${themeName}.css`,
    method: "GET",
    onload: (http) => {
      if (http.status === 200) {
        let theme = http.response;
        GM_addStyle(theme);
      }
    },
    onerror: (error) => {
      console.error(`Error loading ${themeName} theme`, error);
    },
  });
}