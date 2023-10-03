import { clearHTML } from 'Utils/purify';


class Checkbox {
  /**
   *
   *  @constructor
   *  @param {string} elementId - id of the element
   *  @param {string} content - content of the element
   */

  constructor(elementId, content) {
    this.elementId = elementId;
    this.content = clearHTML(content);
  }

  createElement(valueToCheck, callbackChecked = () => {}, callbackUnChecked = () => {}, defaultCallback = () => {}) {
    const checkboxContainer = document.createElement('div');
    const checkbox = document.createElement('input');
    const checkboxLabel = document.createElement('label');

    checkbox.type = 'checkbox';
    checkbox.id = this.elementId;
    checkbox.checked = Boolean(valueToCheck);

    checkboxLabel.htmlFor = this.elementId;
    checkboxLabel.innerHTML = this.content;

    checkboxContainer.id = 'LZTUpModalChecksContainer';
    checkboxContainer.appendChild(checkbox);
    checkboxContainer.appendChild(checkboxLabel);

    checkbox.addEventListener('click', async (event) => {
      await defaultCallback(event)
      event.target.checked ? await callbackChecked(event) : await callbackUnChecked(event);
    });

    return checkboxContainer;
  }
}

export { Checkbox };