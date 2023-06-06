import { createMenuIcon } from "UI/kit/icons.js";

class Button {
  /**
   *
   *  @constructor
   *  @param {string} buttonText - text of the button
   *  @param {string} className - class name of the button
   *  @param {string} iconClassName - class name of the icon (if undefined icon is not added)
   */

  constructor(buttonText, className = 'button', iconClassName = undefined) {
    this.buttonText = buttonText;
    this.className = className;
    this.iconClassName = iconClassName;
  }

  createElement(callback = () => {}) {
    const button = document.createElement('button');
    button.className = this.className;
    button.innerText = this.buttonText;

    if (this.iconClassName) {
      const icon = createMenuIcon(this.iconClassName);
      icon.id = '';
      button.appendChild(icon);
    }

    button.onclick = callback;

    return button;
  }
}

export { Button };