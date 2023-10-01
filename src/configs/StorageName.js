export default class StorageName {
  static UserGroup = new StorageName('LZTUserGroup').name;
  static Cache = new StorageName('cache').name;
  static Contests = new StorageName('contestsData').name;
  static Users = new StorageName('usersData').name;
  static Settings = new StorageName('settingsData').name;

  constructor(name) {
    this.name = name
  }
}