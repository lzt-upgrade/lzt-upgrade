function createMenuIcon(className, id = 'LZTUpIcon') {
  const icon = document.createElement('i');
  icon.id = id;
  icon.className = className;
  return icon;
}

export { createMenuIcon };