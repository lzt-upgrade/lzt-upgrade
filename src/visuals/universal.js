const customBackgroundID = 'LZTUpCustomBackground';


function addBackgroundImage(imageUrl) {
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