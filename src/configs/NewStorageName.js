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

  static generateConfigStruct() {
    const configKeys = [
      this.Appear,
      this.Contests,
      this.Profile,
      this.ProfileBadges,
      this.Users,
      this.Settings,
    ];

    const data = [];

    for (const configKey of configKeys) {
      data.push({
        original: configKey,
        name: configKey.name.split("Data")[0],
        default: configKey.value,
      });
    }

    return data;
  }
}
