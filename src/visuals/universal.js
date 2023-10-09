import { getUserId } from 'Utils/users';
import { isProfilePage } from 'Utils/checkers';
import SiteType from 'Configs/SiteType';


const customBackgroundID = 'LZTUpCustomBackground';

function addBackgroundImage(imageUrl, skipUserCheck = false) {
  // exec time: 0-1ms (1ms in profile)

  if (!skipUserCheck && (isProfilePage() && getUserId('profile') !== getUserId('me'))) {
    // check that this is the profile of the current user
    // don't show background in other users profiles
    return false;
  }

  const body = document.querySelector('body');
  if (!imageUrl) {
    body.id = '';
    body.style.backgroundImage = '';
    return;
  }

  body.id = customBackgroundID;
  body.style.backgroundImage = `linear-gradient(rgba(54, 54, 54, 0.85), rgba(54, 54, 54, 0.85)), url(${imageUrl})`;
}

function setLogo(newStyles, site = SiteType.Forum) {
  let logo;
  switch (site) {
    case SiteType.Forum:
      logo = document.getElementById('lzt-logo');
      break;
    case SiteType.Market:
      logo = document.getElementById('lzt-market-logo');
      break;
    default:
      return false;
  }

  if (!logo) {
    return false;
  }

  logo.style = newStyles;
  return true;
}


export {
  addBackgroundImage,
  setLogo
}