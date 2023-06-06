import { Heading } from 'UI/kit/menu/heading';
import { Description } from 'UI/kit/menu/description';

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
    const textareaContainer = document.createElement('div');
    textareaContainer.classList.add('LZTUpContainer');

    if (this.heading) {
      const heading = new Heading(this.heading).createElement();
      textareaContainer.appendChild(heading);
    }

    if (this.description) {
      const description = new Description(this.description).createElement();
      textareaContainer.appendChild(description);
    }

    for (const element of this.elements) {
      textareaContainer.appendChild(element);
    }

    return textareaContainer;
  }
}

export { Container };