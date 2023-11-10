import Logger from "Utils/logger";

async function requestJSON(endpoint, errText, reqOptions = {}) {
  try {
    const res = await fetch(endpoint, reqOptions).catch(err => {
      console.error(err);
      throw `Failed to fetch from ${endpoint}`;
    });

    return await res.json().catch(err => {
      console.log(err);
      throw `Failed to parse response JSON`;
    });
  } catch (err) {
    Logger.log(errText);
    return false;
  }
}

export default requestJSON;
