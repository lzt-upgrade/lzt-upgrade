import { clearHTML } from "Utils/purify";

class ThreadBar {
  /**
   *
   *  @constructor
   *  @param {string} title - title of the bar
   *  @param {string} content - content of the element
   */

  constructor(title, content, customId = "") {
    this.title = clearHTML(title);
    this.content = clearHTML(content);
    this.customId = customId;
  }

  createElement() {
    const container = document.createElement("div");
    container.classList.add("LZTUpThreadBar");
    container.id = this.customId;

    const title = document.createElement("h2");
    title.classList.add("LZTUpThreadBarTitle");
    title.innerHTML = this.title;
    container.appendChild(title);

    const content = document.createElement("p");
    content.classList.add("LZTUpThreadBarContent", "muted");
    content.innerHTML = this.content;
    container.appendChild(content);

    return {
      container,
      title,
      content,
    };
  }
}

export default ThreadBar;
