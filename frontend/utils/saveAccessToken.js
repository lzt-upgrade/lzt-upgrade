import config from '~/config/config.js';


async function saveAccessToken(TOKEN) {
  return await $fetch(`${config.siteDomain}/api/auth`, {
    method: 'POST',
    parseResponse: JSON.parse,
    headers: {
      'Authorization': `BASIC ${TOKEN}`
    }
  });
}

export { saveAccessToken }