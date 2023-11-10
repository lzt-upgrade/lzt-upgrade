class UserBanner {
  /**
   *
   *  @constructor
   *  @param {string} elementId - id of the row
   *  @param {string} label - label of user banner
   */

  constructor(elementId, label) {
    this.elementId = elementId;
    this.label = label;
  }

  createElement() {
    const userBanner = document.createElement("em");
    userBanner.id = this.elementId;
    userBanner.classList.add("userBanner", "wrapped");
    userBanner.itemprop = "title";

    const beforeAfterEl = document.createElement("div");
    beforeAfterEl.className = "before";
    userBanner.appendChild(beforeAfterEl);

    const bannerContent = document.createElement("strong");
    bannerContent.innerText = XenForo.htmlspecialchars(this.label);
    userBanner.appendChild(bannerContent);

    beforeAfterEl.className = "after";
    userBanner.appendChild(beforeAfterEl);
    return userBanner;
  }
}

export { UserBanner };
