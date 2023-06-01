class Checkbox {
  /**
   *
   *  @constructor
   *  @param {string} elementId - id of the element
   *  @param {string} content - content of the element
   */

  constructor(elementId, content) {
    this.elementId = elementId;
    this.content = content;
  }

  createElement(valueToCheck, callbackChecked = () => {}, callbackUnChecked = () => {}) {
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

    checkboxContainer.addEventListener('click', async (event) => {
      event.target.checked ? await callbackChecked() : await callbackUnChecked();
    });

    return checkboxContainer;
  }
}

export { Checkbox };