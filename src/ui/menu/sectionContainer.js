function addMenuSectionContainer(className, items) {
  const container = document.createElement('div');
  container.id = 'LZTUpSubMenu';
  container.className = className;

  for (const item of items) {
    container.appendChild(item);
  }

  container.style.display = 'none';

  return container;
}

export { addMenuSectionContainer };