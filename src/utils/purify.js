import { Logger } from "Utils/logger";

const defaultAvailabledStyles = [
  'color',
  'text-shadow',
  'border-radius',
  'background',
  'background-color',
  'background-image',
  '-webkit-background-clip',
  '-webkit-text-fill-color'
]

function clearHTML(element) {
  return DOMPurify.sanitize(element, {
    USE_PROFILES: {
        svg: true,
        html: true
    },
    FORBID_TAGS: [
        "style"
    ]
  });
}

function clearSVG(element) {
  return DOMPurify.sanitize(element, {
    USE_PROFILES: {
        svg: true
    },
    FORBID_TAGS: [
        "style"
    ]
  });
}

// removes all prohibited styles from the string
function clearCSS(css, availabledStyles = defaultAvailabledStyles) {
  let pairs = css.split(';');
  const goodCSS = [];
  Logger.debug(pairs);
  for (const pair of pairs) {
    const values = pair.split(':');
    const key = values[0].replace(/\s/, '');
    Logger.debug(pair, values, key)
    if (availabledStyles.includes(key)) {;
      Logger.debug('DETECTED AVAILABLED STYLES');
      goodCSS.push(pair);
    }
  }

  const cssString = goodCSS.length ? goodCSS.join(';') : '';
  Logger.debug(`CLEARED FINAL STRING: ${cssString}`);
  return cssString;
}

export {
  clearHTML,
  clearSVG,
  clearCSS
}