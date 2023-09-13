import { Logger } from 'Utils/logger';

function downloadJSONFile(data, name) {
  const blob = new Blob([data], {
    type: 'application/json'
  });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.download = `${name}.json`;
  link.click();
  return link;
}

async function uploadJSONFile() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'application/json';
  input.click();

  const file = await new Promise(resolve => {
    input.onchange = () => {
      resolve(input.files[0]);
    };
  });

  const reader = new FileReader();
  reader.readAsText(file);

  return await new Promise(resolve => {
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = (e) => {
      Logger.error('Ошибка загрузки файла настроек', e);
      resolve(false);
    };
  });
}

export {
  downloadJSONFile,
  uploadJSONFile
}