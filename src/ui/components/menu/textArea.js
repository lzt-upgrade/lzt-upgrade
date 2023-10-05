class TextArea {
  /**
   *
   *  @constructor
   *  @param {string} text - default text of the text area
   *  @param {string} placeholder - placeholder for the text area
   *  @param {number} minLength - min length for the text area
   *  @param {number} maxLength - max length for the text area
   */

  constructor(text = '', placeholder = '', minLength = 0, maxLength = 0) {
    this.text = text;
    this.placeholder = placeholder;
    this.minLength = minLength;
    this.maxLength = maxLength;
  }

  createElement(callback) {
    const textarea = document.createElement('textarea');
    textarea.classList.add('LZTUpTextArea', 'textCtrl');
    textarea.innerText = this.text;
    textarea.placeholder = this.placeholder;
    textarea.minLength = this.minLength;
    if (this.maxLength > 0)
      textarea.maxLength = this.maxLength;

    textarea.onkeyup = callback;
    textarea.onchange = callback;
    return textarea;
  }
}

export default TextArea;