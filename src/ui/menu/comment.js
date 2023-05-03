class Comment {
  /**
   *
   *  @constructor
   *  @param {string} content - content of the element
   */

  constructor(content) {
    this.content = content;
  }

  createElement() {
    return $(`
      <div id="LZTUpModalComment">
        ${this.content}
      </div>
    `)
  }
}

export { Comment };