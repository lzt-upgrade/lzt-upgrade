import { Logger } from 'Utils/logger'

async function requestJSON(endpoint, errText) {
  return $.ajax({
    url: endpoint,
    dataType: 'json',
    success: (value) => {
      return value
    },
    error: (err) => {
      Logger.log(`${errText}. Ошибка: ${err}`);
      return false;
    }
  });
}

export { requestJSON };