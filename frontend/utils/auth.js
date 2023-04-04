import { LZTAuthDB } from '~/utils/indexedDB/auth.js';
import { saveAccessToken } from '~/utils/saveAccessToken.js';
import { base64Encode } from '~/utils/base64.js';

/**
 *  @return {object} - { state: 'WAITING' | 'SUCCESS' | 'FAILURE', accessToken: string }
 */
async function checkAndAuth() {
  const LZTAuthIDB = new LZTAuthDB();
  await LZTAuthIDB.init();
  const data = await LZTAuthIDB.read();
  if (data && data.accessToken !== '') {
    return {
      state: 'SUCCESS',
      accessToken: data.accessToken
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
      await LZTAuthIDB.update({ accessToken: res.token});
      return {
        state: 'SUCCESS',
        accessToken: access_token
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
  const LZTAuthIDB = new LZTAuthDB();
  await LZTAuthIDB.update({ accessToken: '' });
  return {
    state: 'WAITING',
    accessToken: ''
  };
}

export { checkAndAuth, logout }