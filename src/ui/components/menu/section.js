import { createMenuIcon } from 'UI/components/icons.js'
import { clearHTML } from 'Utils/purify';


class SectionDirection {
  static Row = new SectionDirection('row');
  static Column = new SectionDirection('column');

  constructor(name) {
    this.name = name
  }
}


class SectionText {
  /**
   *
   *  @constructor
   *  @param {string} text - text of the heading
   */

  constructor(text) {
    this.text = text;
    this.className = 'LZTUpSectionTitle';
  }

  createElement() {
    const el = document.createElement('span');
    el.classList.add(this.className);
    el.innerText = this.text;

    return el;
  }
}


class SectionSubText extends SectionText {
  /**
   *
   *  @constructor
   *  @param {string} text - text of the heading (html allowed!!!)
   */

  constructor(text) {
    super(text)
    this.className = 'LZTUpSectionDesc';
  }

  createElement() {
    const el = document.createElement('span');
    el.classList.add(this.className);
    el.innerHTML = clearHTML(this.text);

    return el;
  }
}


class Section {
  /**
   *
   *  @constructor
   *  @param {string} id - id of the section
   *  @param {object} options - additional options (read description below)
   *
   *  options params:
   *  @param {object} [sectionItems] - array of section items
   *  @param {SectionDirection} [direction] - direction of elements in the section
   *  @param {boolean} [hidden] - state of visibility section. If true, the section is hidden by default.
   */

  // constructor(options) {
  //   this.doors = options.doors || 4;
  //   this.state = options.state || 'brand new';
  //   this.color = options.color || 'white';
  // }

  constructor(id, options = {}) {
    this.id = id;
    this.sectionItems = options.sectionItems || [];
    this.sectionContainers = options.sectionContainers || [];
    this.direction = options.direction || SectionDirection.Row;
    this.hidden = options.hidden ?? true;
  }

  createElement() {
    const section = document.createElement('div');
    section.id = this.id;
    section.classList.add('LZTUpSection', this.direction === SectionDirection.Row ? 'row' : 'column');

    for (const sectionItem of this.sectionItems) {
      section.appendChild(sectionItem);
    }

    console.log(this)
    if (this.hidden) {
      console.log(this.id, this.hidden)
      section.style.display = 'none';
    }

    return section;
  }

  /**
   *
   *  @param {string} name - title of the item
   *  @param {string} desc - description of the item
   *  @param {string} iconClasses - font awesome icon classes
   *  @param {string} sectionId - id of the section item
   *  @param {string} containerId - id of the container element (open on click)
   *  @param {boolean} rightArrow - add a icon of the right arrow in the right side (only for column direction)
   */
  addSectionItem(title, desc, iconClasses, sectionId, callback = () => {}, rightArrow = false) {
    const sectionItem = document.createElement('div');
    sectionItem.id = sectionId;
    sectionItem.classList.add('LZTUpSectionItem');

    const sectionIcon = createMenuIcon(iconClasses);
    const textContainer = document.createElement('div');
    textContainer.classList.add('LZTUpSectionTextContainer')
    const textEl = new SectionText(title).createElement();
    const subTextEl = new SectionSubText(desc).createElement();

    textContainer.append(textEl, subTextEl);
    sectionItem.append(sectionIcon, textContainer);
    if (this.direction === SectionDirection.Column && rightArrow) {
      const sectionArrowIcon = createMenuIcon('far fa-angle-right gray right');
      sectionItem.append(sectionArrowIcon)
    }

    sectionItem.onclick = (e) => callback(e, title);

    this.sectionItems.push(sectionItem);
    return this;
  }

  /**
   *
   *  @param {string} containerId - name of the container id (open menu on click)
   *  @param {object} items - list of dom elements for add to container
   */
  addSectionContainer(containerId, items) {
    const container = document.createElement('div');
    container.id = containerId;
    container.classList.add('LZTUpSubMenu');
    container.style.display = 'none';

    for (const item of items) {
      container.appendChild(item);
    }


    this.sectionContainers.push(container);
    return this;
  }
}

export {
  SectionDirection,
  SectionText,
  SectionSubText,
  Section,
};