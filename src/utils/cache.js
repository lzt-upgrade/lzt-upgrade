class Cache {
  /**
   *
   *  @constructor
   *  @param {string} name - cache name
   */

  constructor(name) {
    this.cachePrefix = 'lztup-';
    this.name = name;
    this.fullName = `${this.cachePrefix}${this.name}`;
  }

  async get() {
    return GM_getValue(this.fullName);
  }

  async set(value) {
    return GM_setValue(this.fullName, value);
  }

  async remove() {
    return GM_deleteValue(this.fullName);
  }

  async list() {
    return GM_listValue(this.fullName);
  }

  async clearAll() {
    for (const val of this.list()) {
      this.remove(val);
    }
  }
}

export default Cache;