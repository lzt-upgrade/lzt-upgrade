import { saveAccessToken } from '~/utils/saveAccessToken.js';
import { base64Encode } from '~/utils/base64.js';
import config from '~/config/config.js';
import { getCookie } from '~/utils/cookie.js';


function checkAuth() {
  const accessToken = getCookie('accessToken');

  if (accessToken.value && accessToken.value !== '') {
    return {
      state: 'SUCCESS',
      accessToken: accessToken.value
    }
  }

  return {
    state: 'WAITING',
    accessToken: ''
  }
}

/**
 *  @return {object} - { state: 'WAITING' | 'SUCCESS' | 'FAILURE', accessToken: string }
 */
async function checkAndAuth() {
  const accessToken = getCookie('accessToken');

  if (accessToken.value && accessToken.value !== '') {
    return {
      state: 'SUCCESS',
      accessToken: accessToken.value
    }
  }

  const route = useRoute();
  const hashes = route.hash.split('&');
  if (!hashes || hashes.length <= 1) {
    return {
      state: 'WAITING',
      accessToken: ''
    }
  }

  const access_token = hashes[0].split('=')[1];
  const expires_in = hashes[1].split('=')[1];
  const scope = hashes[3].split('=')[1];
  const userid = hashes[4].split('=')[1]; 
  if (!access_token || !expires_in) {
    return {
      state: 'WAITING',
      accessToken: ''
    }
  }

  const encodedQuery = base64Encode(`accessToken=${access_token}&expires_in=${expires_in}&scope=${scope}&userid=${userid}`);
  try {
    const res = await saveAccessToken(encodedQuery);
    if (res.status === 'success' && res.hasOwnProperty('token')) {
      accessToken.value = res.token;
      return {
        state: 'SUCCESS',
        accessToken: res.token
      }
    } else {
      return {
        state: 'FAILURE',
        accessToken: ''
      }
    }
  } catch (error) {
    return {
      state: 'FAILURE',
      accessToken: ''
    }
  }
}

async function logout() {
  const accessToken = getCookie('accessToken');

  accessToken.value = null;
  return {
    state: 'WAITING',
    accessToken: ''
  };
}

export { checkAndAuth, logout }