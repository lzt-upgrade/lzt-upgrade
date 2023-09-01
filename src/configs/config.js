const config = () => {
  return {
    extName: DEV_MODE ? '[DEV] LZT Upgrade' : 'LZT Upgrade Development Build',
    cacheTime: 604_800,
  }
}

export default config();