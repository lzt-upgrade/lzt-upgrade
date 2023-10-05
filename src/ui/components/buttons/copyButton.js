import Icon from "UI/components/icon.js";


class CopyButton {
  constructor(content, tooltipMessage = null, messageOnCopy = null) {
    this.content = XenForo.htmlspecialchars(content); // Clipboard.copy works strangely with numbers so we do this
    this.tooltipMessage = tooltipMessage || '';
    this.messageOnCopy = messageOnCopy || 'Успешно скопировано в буфер обмена';
  }

  createElement() {
    const button = document.createElement('span');
    button.classList.add('copyButton', 'Tooltip');
    button.title = this.tooltipMessage;

    button.onclick = async (e) => {
      // We use Clipboard.copy instead to avoid errors when the function is not found and to prevent XSS
      // navigator.clipboard.writeText XSS-safe unlike ClipBoard.copy
      await navigator.clipboard.writeText(this.content);

      // from Clipboard.copy function
      e.target.classList.add('animated');
      animateCSS(e.target, [
        'heartBeat',
        'mainc'
      ]);
      XenForo.alert(this.messageOnCopy, '', 5000);
    }
    button.tabIndex = 0;

    const icon = new Icon('far fa-clone', '').createElement();
    button.appendChild(icon);
    return button;
  }
}

export default CopyButton;