class Icon {
  /**
   *
   *  @constructor
   *  @param {string} className - class name of icon
   *  @param {string} iconClassName - id of icon
   */

  constructor(className, id = "LZTUpIcon") {
    this.className = className;
    this.id = id;
  }

  createElement() {
    const icon = document.createElement("i");
    icon.id = this.id;
    icon.className = this.className;
    return icon;
  }
}

export default Icon;
