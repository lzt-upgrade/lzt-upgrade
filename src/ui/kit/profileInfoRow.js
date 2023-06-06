import { isElement } from 'Utils/checkers';
import { clearHTML } from 'Utils/utils';

class ProfileInfoRow {
  /**
   *
   *  @constructor
   *  @param {string} elementId - id of the row
   *  @param {string} label - label of row
   *  @param {string} content - content of row
   */

  constructor(elementId, label, content) {
    this.elementId = elementId;
    this.label = label;
    this.content = clearHTML(content);
  }

  createElement() {
    const row = document.createElement('div');
    const label = document.createElement('div');
    const labeled = document.createElement('div');
    row.classList.add('clear_fix', 'profile_info_row');
    row.id = this.elementId;

    label.classList.add('label', 'fl_l');
    labeled.classList.add('labeled');

    label.innerText = this.label + ':';
    if (isElement(this.content)) {
      labeled.appendChild(this.content)
    } else {
      labeled.innerHTML = this.content;
    }

    row.appendChild(label)
    row.appendChild(labeled)

    return row;
  }
}

export { ProfileInfoRow };