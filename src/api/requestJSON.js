import Logger from 'Utils/logger'

async function requestJSON(endpoint, errText) {
  try {
    const res = await fetch(endpoint);

    return await res.json()
  } catch (err) {
    Logger.log(errText);
    return false;
  }
}

export default requestJSON;