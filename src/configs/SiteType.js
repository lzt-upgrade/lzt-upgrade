export default class SiteType {
  static Forum = new SiteType('Forum').name;
  static Market = new SiteType('Market').name;

  constructor(name) {
    this.name = name
  }
}