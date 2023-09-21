const config = () => {
  return {
    extName: DEV_MODE ? '[DEV] LZT Upgrade' : 'LZT Upgrade UNRELEASED',
    cacheTime: 604_800, // 1 week
    defaultUserGroup: 'style2'
  }
}

export default config();