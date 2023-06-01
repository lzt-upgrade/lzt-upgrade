function tagsVisibility(isHidden = true) {
  const tagList = document.querySelector('div.tagBlock');
  if (tagList !== null) {
    return tagList.style.display = isHidden ? 'none' : '';
  };
}

export { tagsVisibility };