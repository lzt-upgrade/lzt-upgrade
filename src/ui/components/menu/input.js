class Input {
  /**
   *
   *  @constructor
   *  @param {string} text - default text of the input
   *  @param {string} placeholder - placeholder for the input
   *  @param {number} minLength - min length for the input
   *  @param {number} maxLength - max length for the input
   */

  constructor(text = '', placeholder = '', minLength = 0, maxLength = 0) {
    this.text = text;
    this.placeholder = placeholder;
    this.minLength = minLength;
    this.maxLength = maxLength;
  }

  createElement(callback) {
    const input = document.createElement('input');
    input.classList.add('textCtrl');
    input.value = this.text;
    input.placeholder = this.placeholder;
    input.minLength = this.minLength;
    if (this.maxLength > 0)
      input.maxLength = this.maxLength;

    input.onkeyup = callback;
    input.onchange = callback;
    return input;
  }
}

export default Input;