class Cache {
  /**
   *
   *  @constructor
   *  @param {string} name - cache name
   */

  constructor(name, cachePrefix) {
    this.cachePrefix = cachePrefix ?? 'lztup-';
    this.name = name;
    this.fullName = `${this.cachePrefix}${this.name}`;
  }

  async get() {
    return await GM_getValue(this.fullName);
  }

  async set(value) {
    return await GM_setValue(this.fullName, value);
  }

  async remove() {
    return await GM_deleteValue(this.fullName);
  }

  async list() {
    return await GM_listValues(this.fullName);
  }

  async clearAll() {
    for (const val of await this.list()) {
      await new Cache(val).remove();
    }
  }
}

export default Cache;