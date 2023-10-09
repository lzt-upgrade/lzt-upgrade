import endpoints from 'Configs/endpoints.json';
import requestJSON from 'API/requestJSON';

async function getLogos(intTarget = null) {
  // 1 - forum, 2 - market
  const target = intTarget ?? '';
  return await requestJSON(`${endpoints['getLogos']}?target=${target}`, `Не удалось получить список логотипов (${endpoints['getLogos']})`);
}

async function getLogoByUID(logoUID) {
  return await requestJSON(`${endpoints['getLogoByUID']}?uid=${logoUID}`, `Не удалось получить логотип по айди (${endpoints['getLogoByUID']})`);
}


export default {
  getLogos,
  getLogoByUID,
};