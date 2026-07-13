class Description {
  /**
   *
   *  @constructor
   *  @param {string} text - text of the description
   */

  constructor(text) {
    this.text = text;
  }

  createElement() {
    const desc = document.createElement("p");
    desc.classList.add("LZTUpModalDescription", "muted");
    desc.innerText = this.text;

    return desc;
  }
}

export default Description;
