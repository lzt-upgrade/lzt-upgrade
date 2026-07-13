function setSvgAttr(el, type, color) {
  return el.setAttribute(type, color);
}

function changeSVGColor(el, type, color, replaceAll = false) {
  if (!["stroke", "fill"].includes(type)) {
    return;
  }

  if (!replaceAll) {
    return setSvgAttr(el, type, color);
  }

  setSvgAttr(el, type, color);
  const elements = el.querySelectorAll("*");
  for (const element of elements) {
    setSvgAttr(element, type, color);
  }
}

export { changeSVGColor };
