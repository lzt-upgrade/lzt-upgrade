import config from '~/config/config.js';

/**
 * 
 * @param {string} name - cookie name
 * @returns {ref} - cookie instance 
 */
function getCookie(name) {
  const expirationTime = config.expirationTime;
  const productionStatus = config.productionStatus
  const cookie = useCookie(name, {
    maxAge: expirationTime,
    httpOnly: false,
    secure: productionStatus,
    sameSite: true
  });
  return cookie;
}

export { getCookie }