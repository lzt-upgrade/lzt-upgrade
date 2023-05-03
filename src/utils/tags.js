function tagsVisibility(isHidden = true) {
  const tagList = $('ul.tagList');
  if (tagList.length) {
    isHidden ? tagList.hide() : tagList.show();
  };
}

export { tagsVisibility };