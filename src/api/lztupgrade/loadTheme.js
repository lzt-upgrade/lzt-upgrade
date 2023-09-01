import endpoints from 'Configs/endpoints.json' assert {type: 'json'};

function loadTheme(themeName) {
  const link = document.createElement('link');
  link.href = `${endpoints['staticThemes']}/${themeName}.css`;
  link.type = 'text/css';
  link.rel = 'stylesheet';
  document
    .querySelector('head')
    .appendChild(link);
}

export { loadTheme };