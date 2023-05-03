import endpoints from 'Configs/endpoints.json';
import { requestJSON } from 'API/requestJSON';

async function getThemes() {
  return await requestJSON(endpoints['getThemes'], `Не удалось получить список тем (${endpoints['getThemes']})`);
}

export { getThemes };