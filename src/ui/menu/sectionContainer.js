function addMenuSectionContainer(className, items) {
  const container = document.createElement('div');
  container.id = 'LZTUpSubMenu'; // TODO replace LZTUpSubMenu to class
  container.className = className;

  for (const item of items) {
    container.appendChild(item);
  }

  container.style.display = 'none';

  return container;
}

export { addMenuSectionContainer };