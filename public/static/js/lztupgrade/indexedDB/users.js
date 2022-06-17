// --- IndexedDB Users functions start:
function openDB (name) {
    try {
      var openRequest = indexedDB.open(name, 1);
      return openRequest
    } catch (e) {
      console.error(e)
      return openRequest
    }
}

async function initUsersDB () {
    return new Promise((resolve, reject) => {
      var openRequest = openDB("LZTUpUsers")

      openRequest.onerror = () => {
        alert('LZTUp: Произошла ошибка')
        console.error("LZTUp: Ошибка Базы Данных: " + openRequest.errorCode);
        reject(false);
      }

      openRequest.onupgradeneeded = event => {
        var db = openRequest.result;

        db.onerror = () => {
          alert('LZTUp: Не удалось загрузить базу данных')
          console.error("LZTUp: Не удалось загрузить базу данных: " + openRequest.error);
          reject(false);
        }

        var objectStore = db.createObjectStore('users', {keyPath: 'key'});

        objectStore.createIndex('showUseridInProfile', 'showUseridInProfile', { unique: false })
        objectStore.createIndex('showFullRegInProfile', 'showFullRegInProfile', { unique: false })

        console.log('LZTUp: База Данных создана')

        objectStore.transaction.oncomplete = event => {
          var objectStore = db.transaction('users', 'readwrite').objectStore('users');
          var usersDefault = {
            key: 'users',
            showUseridInProfile: 0,
            showFullRegInProfile: 0,
          }
          var request = objectStore.add(usersDefault);

          request.onsuccess = () => {
            console.log("LZTUp: Стандартные настройки пользователей добавлены в Базу Данных: ", request.result);
            resolve(true);
          };
          request.onerror = () => {
            console.log("LZTUp: Ошибка при добавление стандартных настроек пользователей в Базу Данных: ", request.error);
            reject(false);
          };
        }
      }

      openRequest.onsuccess = () => {
        console.log("LZTUp: База данных инициализована")
        var db = openRequest.result;
        db.onversionchange = () => {
          db.close();
          alert("Базе данных нужно обновление, пожалуста, перезагрузите страницу.");
          console.log("LZTUp: Базе данных нужно обновление, пожалуста, перезагрузите страницу");
          reject(false);
        }
        resolve(true);
      }

      openRequest.onblocked = () => {
        var db = openRequest.result;
        console.error('LZTUp: База Данных временно заблокирована из-за ошибки: ', db)
        alert("LZTUp отключен из-за ошибки при обновление Базы Данных. Закройте все открытые вкладки с lolz.guru и попробуйте снова.");
        reject(false);
      }
    })
}

async function updateUsersDB(showUseridInProfile = null, showFullRegInProfile = null) {
    return new Promise((resolve, reject) => {
      if (showUseridInProfile !== null || showFullRegInProfile !== null) {
        var openRequest = openDB("LZTUpUsers");

        openRequest.onerror = () => {
          alert('LZTUp: Произошла ошибка');
          console.error("LZTUp: Ошибка Базы Данных: " + openRequest.errorCode);
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
            alert("LZTUp: База данных устарела, пожалуста, перезагрузите страницу.");
            reject(false);
          }

          var objectStore = db.transaction('users', 'readwrite').objectStore('users');
          var request = objectStore.get('users');

          request.onerror = (event) => {
            console.error("LZTUp: Не удалось получить данные из Базы Данных: ", event.error);
            reject(false);
          }

          request.onsuccess = () => {
            console.log('LZTUp: Получены данные из Базы Данных: ', request.result);
            var data = request.result;

            if (typeof(showUseridInProfile) === 'number') {
              data.showUseridInProfile = showUseridInProfile;
            }

            if (typeof(showFullRegInProfile) === 'number') {
              data.showFullRegInProfile = showFullRegInProfile;
            }

            var requestUpdate = objectStore.put(data);

            requestUpdate.onerror = (event) =>{
              console.error("LZTUp: Не удалось обновить данные в Базе Данных: ", event.error);
              reject(false);
            }

            requestUpdate.onsuccess = () => {
              console.log('LZTUp: Данные в Базе Данных обновлены, вы великолепны!');
              resolve(true);
            }
          }
        }

        openRequest.onblocked = () => {
          var db = openRequest.result;
          console.error('LZTUp: База Данных временно заблокирована из-за ошибки: ', db);
          alert("LZTUp отключен из-за ошибки при обновление Базы Данных. Закройте все открытые вкладки с lolz.guru и попробуйте снова.");
          reject(false);
        }
      } else {
        console.error('LZTUp: В чём смысл делать функцию добавления, которая ничего не добавляет?! wut');
        reject(false);
      }
    })
}

function readUsersDB() {
    return new Promise((resolve, reject) => {
      var openRequest = openDB("LZTUpUsers");

      openRequest.onerror = () => {
        alert('LZTUp: Произошла ошибка');
        console.error("LZTUp: Ошибка Базы Данных: " + openRequest.errorCode);
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
          alert("LZTUp: База данных устарела, пожалуста, перезагрузите страницу.");
          reject(false);
        }

        var objectStore = db.transaction('users').objectStore('users');
        var request = objectStore.get('users');

        request.onerror = (event) => {
          console.error("LZTUp: Не удалось получить данные из Базы Данных: ", event.error);
          reject(false);
        }

        request.onsuccess = () => {
          console.log('LZTUp: Получены данные из Базы Данных: ', request.result);
          var data = request.result;
          resolve(data);
        }
      }

      openRequest.onblocked = () => {
        var db = openRequest.result;
        console.error('LZTUp: База Данных временно заблокирована из-за ошибки: ', db);
        alert("LZTUp отключен из-за ошибки при обновление Базы Данных. Закройте все открытые вкладки с lolz.guru и попробуйте снова.");
        reject(false);
      }
    })
}

async function deleteUsersDB() {
    indexedDB.deleteDatabase('LZTUpUsers');
}
// --- IndexedDB Users functions start: