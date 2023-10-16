import { BaseEnum } from "Configs/base";


export default class SiteType extends BaseEnum {
  static Forum = new SiteType('Forum').name;
  static Market = new SiteType('Market').name;
}