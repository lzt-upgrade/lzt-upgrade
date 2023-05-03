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
    const checkbox = $(`
      <div id="LZTUpModalChecksContainer">
        <input type="checkbox" id="${this.elementId}" ${valueToCheck === 1 ? "checked" : ''}>
        <label for="${this.elementId}">
          ${this.content}
        </label>
      </div>
    `);

    checkbox[0].addEventListener('click', async (event) => {
      if (event.target.checked) {
        await callbackChecked();
      } else {
        await callbackUnChecked();
      }
    });
    return checkbox;
  }
}

export { Checkbox };