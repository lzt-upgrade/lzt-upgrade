function addMenuSection(className, sectionItems) {
  const section = $(`
    <div id="LZTUpSection" class="${className}"></div>
  `);

  for (const sectionItem of sectionItems) {
    section.append(sectionItem)
  }

  section.hide();
  return section;
}

export { addMenuSection };