import { clearHTML } from "Utils/purify";

class GridText {
  /**
   *
   *  @constructor
   *  @param {string} text - text of the heading
   */

  constructor(text) {
    this.text = text;
    this.className = "LZTUpGridTitle";
  }

  createElement() {
    const el = document.createElement("span");
    el.classList.add(this.className);
    el.innerText = this.text;

    return el;
  }
}

class GridSubText extends GridText {
  /**
   *
   *  @constructor
   *  @param {string} text - text of the desc (html allowed!!!)
   */

  constructor(text, className = null) {
    super(text);
    this.className = className ?? "LZTUpGridDesc";
  }

  createElement() {
    const el = document.createElement("span");
    el.classList.add(this.className);
    el.innerHTML = clearHTML(this.text);

    return el;
  }
}

class GridAuthorLink {
  /**
   *
   *  @constructor
   *  @param {string} text - link text (html allowed!!!)
   *  @param {string} userId - userId of user to link
   */

  constructor(text, userId) {
    this.text = text;
    this.userId = Number(userId) > 0 ? Number(userId) : "";
    this.className = "LZTUpGridAuthor";
  }

  createElement() {
    const currentDomain = window.location.hostname;

    const el = document.createElement("a");
    el.classList.add(this.className);
    el.href = `https://${currentDomain}/members/${this.userId}`;
    el.innerHTML = clearHTML(this.text);

    return el;
  }
}

class GridImage {
  /**
   *
   *  @constructor
   *  @param {string} imageLink - raw link to image
   *  @param {string} altText - alt text if image isn't loaded
   */

  constructor(imageLink, altText = null) {
    this.imageLink = imageLink;
    this.altText = altText ?? "[IMG]";
    this.className = "LZTUpGridImage";
  }

  createElement() {
    const el = document.createElement("img");
    el.classList.add(this.className);
    el.alt = this.altText;
    el.src = this.imageLink;

    return el;
  }
}

class Grid {
  /**
   *
   *  @constructor
   *  @param {string} id - id of the grid
   *  @param {object} options - additional options (read description below)
   *
   *  options params:
   *  @param {object} [gridItems] - array of grid items
   */

  constructor(id, options = {}) {
    this.id = id;
    this.gridItems = options.gridItems || [];
  }

  createElement() {
    const grid = document.createElement("div");
    grid.id = this.id;
    grid.classList.add("LZTUpGrid");

    for (const gridItem of this.gridItems) {
      grid.appendChild(gridItem);
    }

    return grid;
  }

  /**
   *
   *  @param {string} name - title of the item
   *  @param {string} imageLink - image of the item
   *  @param {string} gridId - id of the grid item
   *  @param {object} options - additional options (read description below)
   *
   *  Options:
   *  @param {function} onClick - callback on click event
   *  @param {string} imageLink - image of the item
   *  @param {string} altText - alt text if image isn't loaded
   *  @param {boolean} activeState - status of item
   *  @param {object} authors - author info ([{}, {}...])
   *  @param {string} backgroundColor - color of background
   *  @param {string} textColor - color of text
   *  @param {string} additionalClass - additional class of grid item
   *
   *  Authors:
   *  @param {string} name - username of the author
   *  @param {string} userId - link to the author
   */
  addGridItem(title, gridId, options = {}) {
    const onClickCallback = options.onClick || function () {};
    const imageLink = options.imageLink ?? "";
    const imageAlt = options.altText;
    const activeState = options.active ?? false;
    const authors = options.authors ?? [];
    const backgroundColor = options.backgroundColor ?? "";
    const textColor = options.textColor ?? "";
    const additionalClass = options.additionalClass ?? "";

    const gridItem = document.createElement("div");
    gridItem.id = gridId;
    gridItem.classList.add("LZTUpGridItem");
    if (activeState) {
      gridItem.classList.add("active");
    }
    if (additionalClass) {
      gridItem.classList.add(additionalClass);
    }

    gridItem.style.background = backgroundColor;
    gridItem.style.color = textColor;

    if (imageLink) {
      const gridImage = new GridImage(imageLink, imageAlt).createElement();
      gridItem.append(gridImage);
    }

    const textContainer = document.createElement("div");
    textContainer.classList.add("LZTUpGridTextContainer");
    const textEl = new GridText(title).createElement();

    const authorsEl = authors.map(author => {
      return new GridAuthorLink(author.name, author.userId).createElement()
        .outerHTML;
    });

    const authorsInfoEl = new GridSubText(authorsEl.join(", ")).createElement();

    textContainer.append(textEl, authorsInfoEl);
    gridItem.append(textContainer);
    gridItem.onclick = async e => {
      this.setActive(gridItem);
      await onClickCallback(e, gridItem);
    };

    this.gridItems.push(gridItem);
    return this;
  }

  setActive(item) {
    for (const gridItem of this.gridItems) {
      gridItem.classList.remove("active");
    }

    item.classList.add("active");
    return this;
  }
}

export { GridText, GridAuthorLink, GridImage, Grid };
