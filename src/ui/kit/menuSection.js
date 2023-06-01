class MenuSection {
  /**
   *
   *  @constructor
   *  @param {string} className - class name of the section
   *  @param {object} sectionItems - array of section items
   */

  constructor(id, sectionItems) {
    this.id = id;
    this.sectionItems = sectionItems;
  }

  create() {
    const section = document.createElement('div');
    section.id = this.id;
    section.className = 'LZTUpSection';

    for (const sectionItem of this.sectionItems) {
      section.appendChild(sectionItem);
    }

    section.style.display = 'none';
    return section;
  }
}

export { MenuSection };