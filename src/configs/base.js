class BaseSelectorEnum {
  constructor(selector) {
    this.selector = selector;
  }

  getName() {
    // remove selector designation
    return this.selector.replace('.', '').replace('#', '');
  }
}


class BaseEnum {
  constructor(name) {
    this.name = name;
  }
}


export {
  BaseSelectorEnum,
  BaseEnum
}
