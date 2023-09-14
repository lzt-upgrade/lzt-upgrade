import { getUserId } from 'Utils/users';
import { isProfilePage } from 'Utils/checkers';

const customBackgroundID = 'LZTUpCustomBackground';


function addBackgroundImage(imageUrl, skipUserCheck = false) {
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

export {
  addBackgroundImage
}