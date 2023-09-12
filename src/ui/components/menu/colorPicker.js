import { Description } from 'UI/components/menu/description';

class ColorPicker {
  /**
   *
   *  @constructor
   *  @param {string} id - id of the color picker
   *  @param {string} value - value of the color picker
   */

  constructor(id, value, description = '') {
    this.id = id
    this.value = value;
    this.description = description;
  }

  createElement(callback) {
    const wrap = document.createElement('div');
    wrap.classList.add('LZTUpColorPickerWrap');

    const input = document.createElement('input');
    input.id = this.id;
    input.classList.add('LZTUpColorPicker');
    input.value = this.value;
    input.type = 'text';
    input.dataset.coloris = '';
    input.oninput = callback;

    if (this.description !== '') {
      const description = new Description(this.description).createElement();
      wrap.appendChild(description);
    }

    wrap.appendChild(input);
    return wrap;
  }
}

export { ColorPicker };