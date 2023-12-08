import { setTooltip } from "Xenforo/tooltips";
import Logger from "Utils/logger";
import { registerAlert } from "Utils/registers";

class ReportButtons {
  /**
   *
   *  @constructor
   *  @param {object} buttons - array of buttons. For more information about badge struct check ui/menu/items/appear.js -> DefaultButton
   */

  constructor(buttons) {
    this.buttonsClass = ".LZTUpReportButtons";
    this.buttonsQuery = `.${this.buttonsClass}`;
    this.buttons = buttons;
  }

  createElement(postId) {
    const reportButtons = document.createElement("div");
    reportButtons.classList.add("LZTUpReportButtons");

    for (let i = 0; i < this.buttons.length; i++) {
      const reportButton = document.createElement("span");
      reportButton.classList.add("LZTUpReportButton");
      reportButton.tabIndex = 0;
      reportButton.innerText = XenForo.htmlspecialchars(this.buttons[i].text);
      reportButton.title = XenForo.htmlspecialchars(this.buttons[i].reason);
      reportButton.dataset.position = i + 1;
      reportButton.onclick = async () => {
        if (!confirm("Вы уверены, что хотите отправить репорт?")) return;
        // I'm sure it can be done somehow through XenForo.ajax, but I didn't understand how
        let formData = new FormData();
        formData.append("message", this.buttons[i].reason);
        formData.append("is_common_reason", 0);
        formData.append("_xfToken", XenForo._csrfToken);
        formData.append("_xfNoRedirect", 1);
        formData.append("_xfToken", XenForo._csrfToken);
        formData.append("redirect", window.location.href);
        await fetch(`posts/${postId}/report`, {
          method: "POST",
          body: formData,
        });
        registerAlert("Жалоба отправлена", 5000);
      };

      reportButtons.appendChild(reportButton);
    }

    return reportButtons;
  }

  findBadgeElement(selector, position) {
    return document.querySelector(selector + `[data-position="${position}"]`);
  }

  findAllBadgeElement(selector, position) {
    return document.querySelectorAll(
      selector + `[data-position="${position}"]`,
    );
  }

  updateText(buttonEl, button) {
    if (!buttonEl) {
      return;
    }

    buttonEl.innerText = XenForo.htmlspecialchars(button.text);

    if (buttonEl._tippy) {
      return setTooltip(buttonEl, XenForo.htmlspecialchars(button.reason));
    }

    return XenForo.Tooltip($(buttonEl)); // ! "$"" needed in XenForo.Tooltip
  }

  updateButton(button) {
    const buttonElements = this.findAllBadgeElement(
      this.buttonsQuery,
      button.position,
    );
    if (!buttonElements.length) {
      return;
    }

    for (const buttonEl of buttonElements) {
      this.updateText(buttonEl, button);
    }
  }

  updateButtons() {
    Logger.debug("updateButtons");
    for (const button of this.buttons) {
      if (typeof button !== "object") {
        Logger.error("Invalid button in array");
        continue;
      }

      Logger.debug(button);
      this.updateButton(button);
    }
  }
}

export default ReportButtons;
