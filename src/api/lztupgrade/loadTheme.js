import endpoints from 'Configs/endpoints.json' assert {type: 'json'};

function loadTheme(themeName) {
  // load theme by theme name
  const link = document.createElement('link');
  link.href = `${endpoints['staticThemes']}/${themeName}.css`;
  link.type = 'text/css';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
}

export { loadTheme };