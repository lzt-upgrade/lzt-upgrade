import { clearHTML } from 'Utils/purify';


class Comment {
  /**
   *
   *  @constructor
   *  @param {string} content - content of the element
   */

  constructor(content) {
    this.content = clearHTML(content);
  }

  createElement() {
    const container = document.createElement('div');
    container.id = 'LZTUpModalComment';
    container.innerHTML = this.content;

    return container;
  }
}

export default Comment;