// --- IndexedDB Contests functions start:
function openDB (name) {
    try {
      var openRequest = indexedDB.open(name, 1);
      return openRequest
    } catch (e) {
      Logger.error(e)
      return openRequest
    }
}

async function initContestsDB () {
    return new Promise((resolve, reject) => {
      var openRequest = openDB("LZTUpContests")

      openRequest.onerror = () => {
        alert('LZT Upgrade: Произошла ошибка')
        Logger.error("Ошибка Базы Данных: " + openRequest.errorCode);
        reject(false);
      }

      openRequest.onupgradeneeded = event => {
        var db = openRequest.result;

        db.onerror = () => {
          alert('LZT Upgrade: Не удалось загрузить базу данных')
          Logger.error("Не удалось загрузить базу данных: " + openRequest.error);
          reject(false);
        }

        var objectStore = db.createObjectStore('contests', {keyPath: 'key'});

        objectStore.createIndex('contestsTen', 'contestsTen', { unique: false })
        objectStore.createIndex('contestsAll', 'contestsAll', { unique: false })
        objectStore.createIndex('contestsInfoTop', 'contestsInfoTop', { unique: false })
        objectStore.createIndex('contestsBtnTopInBlock', 'contestsBtnTopInBlock', { unique: false })
        objectStore.createIndex('contestsHideTags', 'contestsHideTags', { unique: false })
        objectStore.createIndex('contestsAutoClose', 'contestsAutoClose', { unique: false })
        objectStore.createIndex('contestsRmContent', 'contestsRmContent', { unique: false })

        Logger.log('LZT Upgrade: База Данных создана')

        objectStore.transaction.oncomplete = event => {
          var objectStore = db.transaction('contests', 'readwrite').objectStore('contests');
          var contestsDefault = {
            key: 'contests',
            contestsTen: 0,
            contestsAll: 0,
            contestsInfoTop: 0,
            contestsBtnTopInBlock: 0,
            contestsHideTags: 0,
            contestsAutoClose: 0,
            contestsRmContent: 0,
          }
          var request = objectStore.add(contestsDefault);

          request.onsuccess = () => {
            Logger.log("Стандартные настройки розыгрышей добавлены в Базу Данных: ", request.result);
            resolve(true);
          };
          request.onerror = () => {
            Logger.log("Ошибка при добавление стандартных настроек розыгрышей в Базу Данных: ", request.error);
            reject(false);
          };
        }
      }

      openRequest.onsuccess = () => {
        Logger.log("База данных инициализована")
        var db = openRequest.result;
        db.onversionchange = () => {
          db.close();
          alert("Базе данных нужно обновление, пожалуста, перезагрузите страницу.");
          Logger.log("Базе данных нужно обновление, пожалуста, перезагрузите страницу");
          reject(false);
        }
        resolve(true);
      }

      openRequest.onblocked = () => {
        var db = openRequest.result;
        Logger.error('База Данных временно заблокирована из-за ошибки: ', db)
        alert("LZT Upgrade отключен из-за ошибки при обновление Базы Данных. Закройте все открытые вкладки с lolz.guru и попробуйте снова.");
        reject(false);
      }
    })
}

async function updateContestsDB({contestsTen, contestsAll, contestsInfoTop, contestsBtnTopInBlock, contestsHideTags, contestsAutoClose, contestsRmContent}) {
    return new Promise((resolve, reject) => {
      if (typeof(contestsTen) === 'number' || typeof(contestsAll) === 'number' || typeof(contestsInfoTop) === 'number' || typeof(contestsBtnTopInBlock) === 'number' || typeof(contestsHideTags) === 'number' || typeof(contestsAutoClose) === 'number' || typeof(contestsRmContent) === 'number') {
        var openRequest = openDB("LZTUpContests");

        openRequest.onerror = () => {
          alert('LZT Upgrade: Произошла ошибка');
          Logger.error("Ошибка Базы Данных: " + openRequest.errorCode);
          reject(false);
        }

        openRequest.onupgradeneeded = () => {
          var db = openRequest.result;
          db.close();
          initContestsDB();
          resolve(true);
        }

        openRequest.onsuccess = () => {
          var db = openRequest.result;
          db.onversionchange = () => {
            db.close();
            alert("База данных устарела, пожалуста, перезагрузите страницу.");
            reject(false);
          }

          var objectStore = db.transaction('contests', 'readwrite').objectStore('contests');
          var request = objectStore.get('contests');

          request.onerror = (event) => {
            Logger.error("Не удалось получить данные из Базы Данных: ", event.error);
            reject(false);
          }

          request.onsuccess = () => {
            Logger.log('Получены данные из Базы Данных: ', request.result);
            var data = request.result;

            if (typeof(contestsTen) === 'number') {
              data.contestsTen = contestsTen;
            }

            if (typeof(contestsAll) === 'number') {
              data.contestsAll = contestsAll;
            }

            if (typeof(contestsInfoTop) === 'number') {
              data.contestsInfoTop = contestsInfoTop;
            }

            if (typeof(contestsBtnTopInBlock) === 'number') {
              data.contestsBtnTopInBlock = contestsBtnTopInBlock;
            }

            if (typeof(contestsHideTags) === 'number') {
              data.contestsHideTags = contestsHideTags;
            }

            if (typeof(contestsAutoClose) === 'number') {
              data.contestsAutoClose = contestsAutoClose;
            }

            if (typeof(contestsRmContent) === 'number') {
              data.contestsRmContent = contestsRmContent;
            }

            var requestUpdate = objectStore.put(data);

            requestUpdate.onerror = (event) =>{
              Logger.error("Не удалось обновить данные в Базе Данных: ", event.error);
              reject(false);
            }

            requestUpdate.onsuccess = () => {
              Logger.log('Данные в Базе Данных обновлены, вы великолепны!');
              resolve(true);
            }
          }
        }

        openRequest.onblocked = () => {
          var db = openRequest.result;
          Logger.error('База Данных временно заблокирована из-за ошибки: ', db);
          alert("LZT Upgrade отключен из-за ошибки при обновление Базы Данных. Закройте все открытые вкладки с lolz.guru и попробуйте снова.");
          reject(false);
        }
      } else {
        Logger.error('В чём смысл делать функцию добавления, которая ничего не добавляет?! wut');
        reject(false);
      }
    })
}

function readContestsDB() {
    return new Promise((resolve, reject) => {
      var openRequest = openDB("LZTUpContests");

      openRequest.onerror = () => {
        alert('LZT Upgrade: Произошла ошибка');
        Logger.error("Ошибка Базы Данных: " + openRequest.errorCode);
        reject(false);
      }

      openRequest.onupgradeneeded = () => {
        var db = openRequest.result;
        db.close();
        initContestsDB();
        resolve(true);
      }

      openRequest.onsuccess = () => {
        var db = openRequest.result;
        db.onversionchange = () => {
          db.close();
          alert("База данных устарела, пожалуста, перезагрузите страницу.");
          reject(false);
        }

        var objectStore = db.transaction('contests').objectStore('contests');
        var request = objectStore.get('contests');

        request.onerror = (event) => {
          Logger.error("Не удалось получить данные из Базы Данных: ", event.error);
          reject(false);
        }

        request.onsuccess = () => {
          Logger.log('Получены данные из Базы Данных: ', request.result);
          var data = request.result;
          resolve(data);
        }
      }

      openRequest.onblocked = () => {
        var db = openRequest.result;
        Logger.error('База Данных временно заблокирована из-за ошибки: ', db);
        alert("LZT Upgrade отключен из-за ошибки при обновление Базы Данных. Закройте все открытые вкладки с lolz.guru и попробуйте снова.");
        reject(false);
      }
    })
}

async function deleteContestsDB() {
    indexedDB.deleteDatabase('LZTUpContests');
}
// --- IndexedDB Contests functions end