import { isElement } from "Utils/checkers";
import { clearHTML } from "Utils/purify";
import CopyButton from "UI/components/buttons/copyButton";

class ProfileInfoRow {
  /**
   *
   *  @constructor
   *  @param {string} elementId - id of the row
   *  @param {string} label - label of row
   *  @param {string} content - content of row
   */

  constructor(elementId, label, content, copyButton) {
    this.elementId = elementId;
    this.label = label;
    this.content = clearHTML(content);
    this.copyButton = copyButton;
  }

  createElement() {
    const row = document.createElement("div");
    const label = document.createElement("div");
    const labeled = document.createElement("div");
    row.classList.add("clear_fix", "profile_info_row");
    row.id = this.elementId;

    label.classList.add("label", "fl_l");
    labeled.classList.add("labeled");

    label.innerText = this.label + ":";
    if (isElement(this.content)) {
      labeled.appendChild(this.content);
    } else {
      labeled.innerHTML = this.content;
    }

    if (this.copyButton instanceof CopyButton) {
      const copyButtonEl = this.copyButton.createElement();
      labeled.appendChild(copyButtonEl);
    }

    row.appendChild(label);
    row.appendChild(labeled);

    return row;
  }
}

export default ProfileInfoRow;
