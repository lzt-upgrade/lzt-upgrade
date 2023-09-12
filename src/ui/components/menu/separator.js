class Separator {
  /**
   *
   *  @constructor
   *  @param {string} customStyle - custom style for border-bottom
   */

  constructor(customStyle = '') {
    this.customStyle = customStyle;
  }

  createElement() {
    const sepator = document.createElement('div');
    sepator.classList.add('LZTUpModalSeparator')
    if (this.customStyle !== '') {
      sepator.style.borderBottom = this.customStyle;
    }
    return sepator;
  }
}

export { Separator };