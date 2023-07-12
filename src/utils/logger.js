const Logger = {};
Logger.log = (...text) => {
  return console.log("%c[LZT Upgrade]", "background: #0daf77; color: #fff; padding: 5px;", ...text);
}

Logger.error = (...text) => {
  return console.error("%c[LZT Upgrade]", "background: #0daf77; color: #fff; padding: 5px;", ...text);
}

Logger.warn = (...text) => {
  return console.warn("%c[LZT Upgrade]", "background: #0daf77; color: #fff; padding: 5px;", ...text);
}

Logger.info = (...text) => {
  return console.info("%c[LZT Upgrade]", "background: #0daf77; color: #fff; padding: 5px;", ...text);
}

Logger.debug = (...text) => {
  if (DEV_MODE) return console.debug("%c[DEBUG | LZT Upgrade]", "line-height: 1em;display:inline-block;font-size: 11px;background: #0daf77;padding: 4px 9px;border-radius: 30px;border: 1px solid rgba(56, 138, 229, 0.16);margin: 4px 5px 4px 0;color: #fff;", ...text);
}

export { Logger };