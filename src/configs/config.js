const config = () => {
  return {
    extName: DEV_MODE ? '[DEV] LZT Upgrade' : 'LZT Upgrade UNRELEASED',
    cacheTime: 86_400 * 3, // 3 day
    defaultUserGroup: 'style2'
  }
}

export default config();