class Tab {
  /**
   *
   *  @constructor
   *  @param {string} name - name of the tab
   *  @param {string} className - class name of the tab
   *  @param {string} sectionClassName - class name of the section
   *  @param {boolean} active - status of tab
   */

  constructor(name, className, sectionClassName, active) {
    this.name = name;
    this.className = className;
    this.sectionClassName = sectionClassName;
    this.active = active;
  }

  createElement() {
    const tab = document.createElement('li');
    tab.id = 'LZTUpTab';
    tab.className = this.className;
    const span = document.createElement('span');
    span.innerText = this.name;
    tab.appendChild(span);

    tab.addEventListener('click', () => this.setActive());
    return tab;
  }

  setActive() {
    document.querySelectorAll('#LZTUpTab').forEach(tab => tab.classList.remove('active'));

    document.querySelector(`.${this.className}`).classList.add('active');

    document.querySelectorAll('.LZTUpSection').forEach(section => section.style.display = 'none');

    document.querySelector(`#${this.sectionClassName}`).style.display = '';
  }
}

export { Tab };