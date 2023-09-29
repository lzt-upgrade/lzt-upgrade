import { createMenuIcon } from "UI/components/icons.js";


class CopyButton {
  constructor(content, tooltipMessage, messageOnCopy) {
    this.content = XenForo.htmlspecialchars(content); // Clipboard.copy works strangely with numbers so we do this
    this.tooltipMessage = tooltipMessage || '';
    this.messageOnCopy = messageOnCopy || 'Успешно скопировано в буфер обмена';
  }

  createElement() {
    const button = document.createElement('span');
    button.classList.add('copyButton', 'Tooltip');
    button.dataset.phr = this.messageOnCopy;
    button.title = this.tooltipMessage;
    // FIXME: REWORK THIS https://github.com/airbnb/javascript#functions--constructor
    button.onclick = new Function('event', `Clipboard.copy('${this.content}', this)`); // superior fix of "Clipboard.copy is not a function"
    button.tabIndex = 0;

    const icon = createMenuIcon('far fa-clone', '');
    button.appendChild(icon);
    return button;
  }
}

export default CopyButton;