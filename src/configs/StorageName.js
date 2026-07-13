import { BaseEnum } from "Configs/base";

export default class StorageName extends BaseEnum {
  static UserGroup = new StorageName("LZTUserGroup").name;
  static Cache = new StorageName("cache").name;
  static Appear = new StorageName("appearData").name;
  static Contests = new StorageName("contestsData").name;
  static Profile = new StorageName("profileData").name;
  static ProfileBadges = new StorageName("profileBadges").name;
  static Users = new StorageName("usersData").name;
  static Settings = new StorageName("settingsData").name;
}
