function createMenuIcon(className, id = 'LZTUpIcon') {
  // TODO: чет с этим сделать, мне не нравится как оно выглядит
  const icon = document.createElement('i');
  icon.id = id;
  icon.className = className;
  return icon;
}

export { createMenuIcon };