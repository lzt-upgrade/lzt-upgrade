import { BaseEnum } from "Configs/base";
import config from "Configs/config";

export default class NewStorageName extends BaseEnum {
  static UserGroup = new NewStorageName(
    "LZTUserGroup",
    config.defaultUserGroup,
  );
  static Cache = new NewStorageName("cache", {});
  static Appear = new NewStorageName("appearData", {});
  static Contests = new NewStorageName("contestsData", {});
  static Profile = new NewStorageName("profileData", {});
  static ProfileBadges = new NewStorageName("profileBadges", []);
  static Users = new NewStorageName("usersData", {});
  static Settings = new NewStorageName("settingsData", {});

  constructor(name, value) {
    super(name);
    this.value = value;
  }
}
