import { isProfilePage } from "Utils/checkers";
import { addBackgroundImage } from "Visuals/universal";

function addBackgroundImageInProfile(imageUrl) {
  if (isProfilePage()) {
    return addBackgroundImage(imageUrl);
  }
}

export { addBackgroundImageInProfile };
