class ErrorPageButton {
  /**
   *
   *  @constructor
   *  @param {string} buttonContent - content of the button
   *  @param {string} buttonHref - link of the button (https://...)
   *  @param {string} className - class name of the button
   */

  constructor(buttonContent, buttonHref = "#", className = "button") {
    this.buttonContent = buttonContent;
    this.buttonHref = buttonHref;
    this.className = className;
  }

  createElement() {
    const button = document.createElement("a");
    button.href = this.buttonHref;
    button.className = this.className;
    button.innerHTML = this.buttonContent;

    return button;
  }
}

export default ErrorPageButton;
