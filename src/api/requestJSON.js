import { Logger } from 'Utils/logger'

async function requestJSON(endpoint, errText) {
  try {
    return await $.ajax({
      url: endpoint,
      dataType: 'json'
    });
  } catch (err) {
    Logger.log(`${errText}. Ошибка:`, err);
    return false;
  }
}

export { requestJSON };