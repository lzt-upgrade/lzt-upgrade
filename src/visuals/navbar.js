/**
 *
 * @param {str} balloonId - id of balloon element. Ex: #AlertsMenu_Counter
 * @param {boolean} isHidden - status of balloon (true - hidden, false - visible)
 */
function hideBalloonById(balloonId, isHidden) {
  const balloon = document.getElementById(balloonId);
  if (balloon) {
    balloon.style.opacity = Number(!isHidden);
  }
}


export {
  hideBalloonById
}


