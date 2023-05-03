class Tab {
  /**
   *
   *  @constructor
   *  @param {string} name - name of the database
   *  @param {string} sectionClassName - class name of the section
   *  @param {boolean} active - status of tab
   */

  constructor(name, className, sectionClassName, active = false) {
    this.name = name;
    this.className = className;
    this.sectionClassName = sectionClassName;
    this.active = active;
  }

  createElement() {
    const tab = $(`
      <li id="LZTUpTab" class="${this.className}">
        <span>${this.name}</span>
      </li>
    `);

    tab[0].addEventListener('click', () => this.setActive());
    return tab;
  }

  setActive() {
    const tabs = $('#LZTUpTabs > #LZTUpTab');
    tabs.toArray().forEach(tab => $(tab).removeClass('active'));
    $(`.${this.className}`).addClass('active');

    const sections = $('#LZTUpModalContent > #LZTUpSection');
    sections.toArray().forEach(section => $(section).hide());
    $(`.${this.sectionClassName}`).show();
  }
}

export { Tab };