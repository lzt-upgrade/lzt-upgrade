import { createMenuIcon } from "UI/components/icons.js";


class CopyButton {
  constructor(content, tooltipMessage, messageOnCopy) {
    this.content = content;
    this.tooltipMessage = tooltipMessage || '';
    this.messageOnCopy = messageOnCopy || 'Успешно скопировано в буфер обмена';
  }

  createElement() {
    const button = document.createElement('span');
    button.classList.add('copyButton', 'Tooltip');
    button.dataset.phr = this.messageOnCopy;
    button.title = this.tooltipMessage;
    button.onclick = new Function('event', `Clipboard.copy(${this.content}, this)`); // superior fix of "Clipboard.copy is not a function". !!! htmlspecialchars not needed here !!!
    button.tabIndex = 0;

    const icon = createMenuIcon('far fa-clone', '');
    button.appendChild(icon);
    return button;
  }
}

export default CopyButton;