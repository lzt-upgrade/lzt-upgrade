export default class NavbarBalloon {
  static AlertCounter = new NavbarBalloon('AlertsMenu_Counter').name;
  static MessageCounter = new NavbarBalloon('ConversationsMenu_Counter').name;

  constructor(name) {
    // id of ballon without #
    this.name = name;
  }
}