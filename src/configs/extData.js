const extData = () => {
  return {
    nodes: {
      // nodes of the forum
      contests: '.node766',
    },
    selectors: {
      // elements of the forum
      memberCard: '.xenOverlay.memberCard',
    },
    uiElementsId: {
      // id of the element for extension UI
      lztupTempSubMenu: 'LZTUpTempSubMenu'
    },
    uiElementsSelectors: {
      // selectors of the element for extension UI
      lztupTempSubMenu: '#LZTUpTempSubMenu'
    },
    links: {
      telegramChannel: 'https://t.me/lzt_upgrade',
      githubPage: 'https://github.com/lzt-upgrade/lzt-upgrade',
    }
  }
}

export default extData();