import { getUserId } from 'Utils/users';
import { isProfilePage } from 'Utils/checkers';
import { addBackgroundImage } from 'Visuals/universal';


function addBackgroundImageInProfile(imageUrl) {
  if (isProfilePage() && getUserId('profile') === getUserId('me')) {
    return addBackgroundImage(imageUrl)
  }
}

export {
  addBackgroundImageInProfile
}