function addMenuSectionContainer(className, items) {
  const sectionContainer = $(`
    <div id="LZTUpSubMenu" class="${className}"></div>
  `);

  for (const item of items) {
    sectionContainer.append(item);
  }

  sectionContainer.hide();

  return sectionContainer;
}

export { addMenuSectionContainer };