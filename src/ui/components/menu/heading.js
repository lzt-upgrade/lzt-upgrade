class Heading {
  /**
   *
   *  @constructor
   *  @param {string} text - text of the heading
   */

  constructor(text) {
    this.text = text;
  }

  createElement() {
    const heading = document.createElement('h2');
    heading.classList.add('LZTUpModalHeading');
    heading.innerText = this.text;

    return heading;
  }
}

export default Heading;