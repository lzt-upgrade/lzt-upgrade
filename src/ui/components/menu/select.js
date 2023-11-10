class Select {
  /**
   *
   *  @constructor
   *  @param {string} defaultText - default text of option selected
   *  @param {Object} selectOptions - selectOptions structure
   */

  // selectOptions structure:
  // [
  //     {
  //         label: string,
  //         value: string,
  //         selected: boolean,
  //         disabled: boolean
  //     }
  // ]

  constructor(defaultText, selectOptions) {
    this.defaultText = defaultText;
    this.selectOptions = selectOptions;
  }

  createElement() {
    const select = document.createElement("select");
    select.classList.add("LZTUpSelect", "button");

    for (const selectOption of this.selectOptions) {
      // TODO: ДОДЕЛАТЬ
      select.appendChild(selectOption);
    }

    return select;
  }
}

export default Select;
