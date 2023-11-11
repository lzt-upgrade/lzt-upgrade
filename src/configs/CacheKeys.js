import { BaseEnum } from "Configs/base";

export default class CacheKeys extends BaseEnum {
  static availabledForumLogos = new CacheKeys("availabledForumLogos", []);
  static availabledMarketLogos = new CacheKeys("availabledMarketLogos", []);
  static availabledThemes = new CacheKeys("availabledThemes", []);
  static themeName = new CacheKeys("themeName", "");

  constructor(name, value) {
    super(name);
    this.value = value;
  }

  static getKeys() {
    return [
      this.availabledForumLogos,
      this.availabledMarketLogos,
      this.availabledThemes,
    ];
  }

  static getKeyByName(name) {
    return this.getKeys().find(k => k.name === name);
  }
}
