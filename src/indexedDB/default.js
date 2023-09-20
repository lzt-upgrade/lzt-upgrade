import { Logger } from 'Utils/logger';

/**
 *
 * @author Toil
 * @license MIT
 * @copyright Toil
 * @created 2023-02-17
 *
 * @description base LZTUpgradeDB class implementation (based on IndexedDB)
 *
 */

class LZTUpgradeDB {
  /**
   *
   *  @constructor
   *  @param {string} name - name of the database
   *  @param {string} objectKey - name of the future indexedDB object
   *  @param {number} version - version of the database
   *  @param {object} indexes - array of keys to indexes with types ({})
   *  @param {object} defaultData - array of default values to store ({})
   */

  constructor(name, objectKey, version = 1, indexes = {}, defaultData = {}) {
    this.name = name;
    this.objectKey = objectKey;
    this.version = version;
    this.indexes = indexes;
    this.defaultData = defaultData;
  }

  checker(indexes, ...args) {
    let response = false;
    if (typeof arguments[1] !== 'object') return response;

    for (const arg of Object.entries(arguments[1])) {
      if (!arg[0].toString() in indexes) continue;
      if (typeof(arg[1]) === indexes[arg[0].toString()]) response = true;
    }
    return response;
  }

  callback(indexes, data, args) {
    if (typeof args !== 'object') return response;

    for (const arg of Object.entries(args)) {
      if (!arg[0].toString() in indexes) continue;
      if (typeof(arg[1]) === indexes[arg[0].toString()]) data[arg[0].toString()] = arg[1];
    }
    return data;
  }

  /**
   * Open DB connection
   */
  open() {
    return indexedDB.open(this.name, this.version);
  }

  /**
   * Delete DB
   */
  async delete() {
    return indexedDB.deleteDatabase(this.name);
  }

  /**
   * Initialize the database
   */
  async init() {
    return new Promise((resolve, reject) => {
      const openRequest = this.open();
      openRequest.onerror = () => {
        console.log(openRequest)
        alert(`LZT Upgrade: Произошла ошибка при инициализации Базы Данных ${this.name}`);
        Logger.error(`Ошибка инициализации Базы Данных ${this.name}: `, openRequest.errorCode);
        reject(false);
      };

      openRequest.onupgradeneeded = () => {
        const db = openRequest.result;

        db.onerror = () => {
          alert(`LZT Upgrade: Не удалось загрузить базу данных ${this.name}`);
          Logger.error(`Не удалось загрузить базу данных ${this.name}: `, openRequest.error);
          reject(false);
        };

        const objectStore = db.createObjectStore(this.objectKey, {
          keyPath: "key",
        });

        for (const key in this.indexes) {
          if (key === undefined) continue;
          objectStore.createIndex(key, key, { unique: false });
        }

        Logger.log(`База Данных ${this.name} создана`);

        objectStore.transaction.oncomplete = () => {
          const objectStore = db
            .transaction(this.objectKey, "readwrite")
            .objectStore(this.objectKey);

          const request = objectStore.add(this.defaultData);

          request.onsuccess = () => {
            Logger.log(`Стандартные настройки "${this.name}" добавлены в Базу Данных: `, request.result);
            resolve(true);
          };
          request.onerror = () => {
            Logger.error(`Ошибка при добавление стандартных настроек "${this.name}" в Базу Данных: `, request.error);
            reject(false);
          };
        };
      };

      openRequest.onsuccess = () => {
        Logger.log(`База данных ${this.name} инициализована`);
        const db = openRequest.result;
        db.onversionchange = () => {
          db.close();
          alert(`LZT Upgrade: Базе данных ${this.name} необходимо обновление, пожалуйста, перезагрузите страницу.`);
          Logger.log(`Базе данных ${this.name} необходимо обновление, пожалуйста, перезагрузите страницу`);
          reject(false);
        };
        resolve(true);
      };

      openRequest.onblocked = () => {
        const db = openRequest.result;
        Logger.error(`База Данных ${this.name} временно заблокирована из-за ошибки: `, db);
        alert(`LZT Upgrade отключен из-за ошибки при обновление Базы Данных ${this.name}. Закройте все открытые вкладки с Lolzteam и попробуйте снова.`);
        reject(false);
      };
    });
  }

  /**
   * Read data from database
   */
  async read() {
    return new Promise((resolve, reject) => {
      const openRequest = this.open(this.name, this.version);

      openRequest.onerror = () => {
        alert(`LZT Upgrade: Произошла ошибка при чтение Базы Данных ${this.name}`);
        Logger.error(`Ошибка чтения Базы Данных ${this.name}: `, openRequest.errorCode);
        reject(false);
      };

      openRequest.onupgradeneeded = () => {
        const db = openRequest.result;
        db.close();
        this.init();
        resolve(true);
      };

      openRequest.onsuccess = () => {
        const db = openRequest.result;
        db.onversionchange = () => {
          db.close();
          alert(`LZT Upgrade: Базе данных ${this.name} необходимо обновление, пожалуйста, перезагрузите страницу.`);
          Logger.log(`Базе данных ${this.name} необходимо обновление, пожалуйста, перезагрузите страницу`);
          reject(false);
        };

        const objectStore = db
          .transaction(this.objectKey)
          .objectStore(this.objectKey);

        const request = objectStore.get(this.objectKey);

        request.onerror = (event) => {
          Logger.error(`Не удалось получить данные из Базы Данных ${this.name}: `, event.error);
          reject(false);
        };

        request.onsuccess = () => {
          // Logger.log(`Получены данные из Базы Данных ${this.name}: `, request.result
          // );
          const data = request.result;
          resolve(data);
        };
      };

      openRequest.onblocked = () => {
        const db = openRequest.result;
        Logger.error(`База Данных ${this.name} временно заблокирована из-за ошибки: `, db);
        alert(`LZT Upgrade отключен из-за ошибки при обновление Базы Данных ${this.name}. Закройте все открытые вкладки с Lolzteam и попробуйте снова.`);
        reject(false);
      };
    });
  }

  /**
    * Update data in Database
    @param {object} indexes - array of keys to indexes to storing data in an indexedDB object ([key])
    @param {function} checker - function to check for typeof (required argument - argsIndexes object)
    @param {function} callback - callback function (required argument - data object)
    */
  async update(args) {
    return new Promise((resolve, reject) => {
      if (this.checker(this.indexes, args)) {
        const openRequest = this.open(this.name);

        openRequest.onerror = () => {
          alert(`LZT Upgrade: Произошла ошибка при обновление Базы Данных ${this.name}`);
          Logger.error(`Ошибка при обновление Базы Данных ${this.name}: `, openRequest.errorCode)
          reject(false);
        };

        openRequest.onupgradeneeded = () => {
          const db = openRequest.result;
          db.close();
          this.init();
          resolve(true);
        };

        openRequest.onsuccess = () => {
          const db = openRequest.result;
          db.onversionchange = () => {
            db.close();
            alert(`LZT Upgrade: Базе данных ${this.name} необходимо обновление, пожалуйста, перезагрузите страницу.`);
            Logger.log(`Базе данных ${this.name} необходимо обновление, пожалуйста, перезагрузите страницу`);
            reject(false);
          };

          var objectStore = db
            .transaction(this.objectKey, "readwrite")
            .objectStore(this.objectKey);
          var request = objectStore.get(this.objectKey);

          request.onerror = (event) => {
            Logger.error(`Не удалось получить данные из Базы Данных ${this.name}: `, event.error);
            reject(false);
          };

          request.onsuccess = () => {
            // Logger.log(`Получены данные из Базы Данных ${this.name}: `, request.result);
            let data = request.result;
            data = this.callback(this.indexes, data, args);

            const requestUpdate = objectStore.put(data);

            requestUpdate.onerror = (event) => {
              Logger.error(`Не удалось обновить данные в Базе Данных ${this.name}: `, event.error);
              reject(false);
            };

            requestUpdate.onsuccess = () => {
              Logger.log("Данные в Базе Данных обновлены, вы великолепны!");
              resolve(true);
            };
          };
        };

        openRequest.onblocked = () => {
          const db = openRequest.result;
          Logger.error(`База Данных ${this.name} временно заблокирована из-за ошибки: `, db);
          alert(`LZT Upgrade отключен из-за ошибки при обновление Базы Данных ${this.name}. Закройте все открытые вкладки с Lolzteam и попробуйте снова.`);
          reject(false);
        };
      } else {
        Logger.error("В чём смысл делать функцию добавления, которая ничего не добавляет?! wut");
        reject(false);
      }
    });
  }
}

export { LZTUpgradeDB };