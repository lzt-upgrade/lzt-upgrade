function updateTooltips() {
  // let lztUpTooltips = $("#LZTUpTooltip.Tooltip");
  // return unsafeWindow.XenForo.Tooltip(lztUpTooltips);
}

function setTooltip(el, text) {
  el.setAttribute("title", "");
  el.setAttribute("data-cachedtitle", text);

  return el._tippy.setContent(text);
}

export { updateTooltips, setTooltip };
