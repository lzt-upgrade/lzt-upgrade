// --- IndexedDB Users functions start:
function openDB (name) {
    try {
      var openRequest = indexedDB.open(name, 1);
      return openRequest
    } catch (e) {
      Logger.error(e)
      return openRequest
    }
}

async function initUsersDB () {
    return new Promise((resolve, reject) => {
      var openRequest = openDB("LZTUpUsers")

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

        var objectStore = db.createObjectStore('users', {keyPath: 'key'});

        objectStore.createIndex('showUseridInProfile', 'showUseridInProfile', { unique: false })
        objectStore.createIndex('showFullRegInProfile', 'showFullRegInProfile', { unique: false })

        Logger.log('База Данных создана')

        objectStore.transaction.oncomplete = event => {
          var objectStore = db.transaction('users', 'readwrite').objectStore('users');
          var usersDefault = {
            key: 'users',
            showUseridInProfile: 0,
            showFullRegInProfile: 0,
          }
          var request = objectStore.add(usersDefault);

          request.onsuccess = () => {
            Logger.log("Стандартные настройки пользователей добавлены в Базу Данных: ", request.result);
            resolve(true);
          };
          request.onerror = () => {
            Logger.log("Ошибка при добавление стандартных настроек пользователей в Базу Данных: ", request.error);
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
        alert("LZTUp отключен из-за ошибки при обновление Базы Данных. Закройте все открытые вкладки с lolz.guru и попробуйте снова.");
        reject(false);
      }
    })
}

async function updateUsersDB({showUseridInProfile, showFullRegInProfile}) {
    return new Promise((resolve, reject) => {
      if (typeof(showUseridInProfile) === 'number' || typeof(showFullRegInProfile) === 'number') {
        var openRequest = openDB("LZTUpUsers");

        openRequest.onerror = () => {
          alert('LZT Upgrade: Произошла ошибка');
          Logger.error("Ошибка Базы Данных: " + openRequest.errorCode);
          reject(false);
        }

        openRequest.onupgradeneeded = () => {
          var db = openRequest.result;
          db.close();
          initUsersDB();
          resolve(true);
        }

        openRequest.onsuccess = () => {
          var db = openRequest.result;
          db.onversionchange = () => {
            db.close();
            alert("База данных устарела, пожалуста, перезагрузите страницу.");
            reject(false);
          }

          var objectStore = db.transaction('users', 'readwrite').objectStore('users');
          var request = objectStore.get('users');

          request.onerror = (event) => {
            Logger.error("Не удалось получить данные из Базы Данных: ", event.error);
            reject(false);
          }

          request.onsuccess = () => {
            Logger.log('Получены данные из Базы Данных: ', request.result);
            var data = request.result;

            if (typeof(showUseridInProfile) === 'number') {
              data.showUseridInProfile = showUseridInProfile;
            }

            if (typeof(showFullRegInProfile) === 'number') {
              data.showFullRegInProfile = showFullRegInProfile;
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
          alert("LZTUp отключен из-за ошибки при обновление Базы Данных. Закройте все открытые вкладки с lolz.guru и попробуйте снова.");
          reject(false);
        }
      } else {
        Logger.error('В чём смысл делать функцию добавления, которая ничего не добавляет?! wut');
        reject(false);
      }
    })
}

function readUsersDB() {
    return new Promise((resolve, reject) => {
      var openRequest = openDB("LZTUpUsers");

      openRequest.onerror = () => {
        alert('LZT Upgrade: Произошла ошибка');
        Logger.error("Ошибка Базы Данных: " + openRequest.errorCode);
        reject(false);
      }

      openRequest.onupgradeneeded = () => {
        var db = openRequest.result;
        db.close();
        initUsersDB();
        resolve(true);
      }

      openRequest.onsuccess = () => {
        var db = openRequest.result;
        db.onversionchange = () => {
          db.close();
          alert("База данных устарела, пожалуста, перезагрузите страницу.");
          reject(false);
        }

        var objectStore = db.transaction('users').objectStore('users');
        var request = objectStore.get('users');

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
        alert("LZTUp отключен из-за ошибки при обновление Базы Данных. Закройте все открытые вкладки с lolz.guru и попробуйте снова.");
        reject(false);
      }
    })
}

async function deleteUsersDB() {
    indexedDB.deleteDatabase('LZTUpUsers');
}
// --- IndexedDB Users functions start: