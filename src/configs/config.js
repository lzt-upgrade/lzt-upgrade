const config = () => {
  return {
    'extName': DEV_MODE ? '[DEV] LZT Upgrade' : 'LZT Upgrade Development Build',
    'nodeSelectors': {
      'contests': '.node766'
    }
  }
}

export default config();