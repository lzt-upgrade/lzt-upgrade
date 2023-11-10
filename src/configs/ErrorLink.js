export default class ErrorLink {
  // Displayed on the modified page with an error
  static TelegramChannel = new ErrorLink("https://t.me/lzt_upgrade").src;
  static Github = new ErrorLink("https://github.com/lzt-upgrade/lzt-upgrade")
    .src;

  constructor(src) {
    this.src = src;
  }
}
