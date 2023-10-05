import Heading from 'UI/components/menu/heading';
import Description from 'UI/components/menu/description';

class Container {
  /**
   *
   *  @constructor
   *  @param {string} heading - heading of the container
   *  @param {string} description - description of the container
   *  @param {object} elements - elements to add to container
   */

  constructor(elements, heading = '', description = '') {
    this.elements = elements;
    this.heading = heading;
    this.description = description;
  }

  createElement() {
    const container = document.createElement('div');
    container.classList.add('LZTUpContainer');

    if (this.heading) {
      const heading = new Heading(this.heading).createElement();
      container.appendChild(heading);
    }

    if (this.description) {
      const description = new Description(this.description).createElement();
      container.appendChild(description);
    }

    for (const element of this.elements) {
      container.appendChild(element);
    }

    return container;
  }
}

export default Container;