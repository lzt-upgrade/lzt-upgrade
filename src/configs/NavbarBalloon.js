import { BaseSelectorEnum } from "Configs/base";


export default class NavbarBalloon extends BaseSelectorEnum {
  static AlertCounter = new NavbarBalloon('#AlertsMenu_Counter');
  static MessageCounter = new NavbarBalloon('#ConversationsMenu_Counter');
}