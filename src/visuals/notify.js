function hideAdsFromNotify() {
  return GM_addStyle(`
    li.Alert[data-author="Реклама"] {
      display: none !important;
    }
  `);
}

export { hideAdsFromNotify };
