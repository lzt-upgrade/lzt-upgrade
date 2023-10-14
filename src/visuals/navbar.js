/**
 *
 * @param {str} balloonId - id of balloon element. Ex: #AlertsMenu_Counter
 * @param {boolean} isHidden - status of visibility (true - hidden, false - visible)
 */
function hideBalloonById(balloonId, isHidden) {
  const balloon = document.getElementById(balloonId);
  if (balloon) {
    balloon.style.opacity = Number(!isHidden);
  }
}

/**
 *
 * @param {boolean} isHidden - status of visibility (true - hidden, false - visible)
 */
function hideUnreadArticlesStatus(isHidden) {
  const statusEl = document.querySelector('.hasUnreadArticles');
  if (statusEl) {
    statusEl.style.display = isHidden ? 'none' : '';
  }
}


export {
  hideBalloonById,
  hideUnreadArticlesStatus,
}


