function addMenuSectionContainer(sectionId, items) {
  const container = document.createElement('div');
  container.id = sectionId;
  container.classList.add('LZTUpSubMenu');

  for (const item of items) {
    container.appendChild(item);
  }

  container.style.display = 'none';

  return container;
}

export { addMenuSectionContainer };