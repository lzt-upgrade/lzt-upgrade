// --- IndexedDB Appear functions start:
function openDB (name) {
    try {
      var openRequest = indexedDB.open(name, 1);
      return openRequest
    } catch (e) {
      console.error(e)
      return openRequest
    }
}

async function initAppearDB () {
    return new Promise((resolve, reject) => {
      var openRequest = openDB("LZTUpAppear")

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

        var objectStore = db.createObjectStore('appear', {keyPath: 'key'});

        objectStore.createIndex('hideUnreadArticleCircle', 'hideUnreadArticleCircle', { unique: false })
        objectStore.createIndex('hideTagsInThreads', 'hideTagsInThreads', { unique: false })
        objectStore.createIndex('changeLogo', 'changeLogo', { unique: false })

        console.log('LZTUp: База Данных создана')

        objectStore.transaction.oncomplete = event => {
          var objectStore = db.transaction('appear', 'readwrite').objectStore('appear');
          var appearDefault = {
            key: 'appear',
            hideUnreadArticleCircle: 0,
            hideTagsInThreads: 0,
            changeLogo: 0,
            hideCounterAlerts: 0,
            hideCounterConversations: 0,
          }
          var request = objectStore.add(appearDefault);

          request.onsuccess = () => {
            console.log("LZTUp: Стандартные настройки \"Внешнего вида\" добавлены в Базу Данных: ", request.result);
            resolve(true);
          };
          request.onerror = () => {
            console.log("LZTUp: Ошибка при добавление стандартных настроек \"Внешнего вида\" в Базу Данных: ", request.error);
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

async function updateAppearDB({hideUnreadArticleCircle, hideTagsInThreads, changeLogo, hideCounterAlerts, hideCounterConversations}) {
    return new Promise((resolve, reject) => {
      if (typeof (hideUnreadArticleCircle) === 'number' || typeof(hideTagsInThreads) === 'number' || typeof(changeLogo) === 'number' || typeof(hideCounterAlerts) === 'number' || typeof(hideCounterConversations) === 'number') {
        var openRequest = openDB("LZTUpAppear");

        openRequest.onerror = () => {
          alert('LZTUp: Произошла ошибка');
          console.error("LZTUp: Ошибка Базы Данных: " + openRequest.errorCode);
          reject(false);
        }

        openRequest.onupgradeneeded = () => {
          var db = openRequest.result;
          db.close();
          initAppearDB();
          resolve(true);
        }

        openRequest.onsuccess = () => {
          var db = openRequest.result;
          db.onversionchange = () => {
            db.close();
            alert("LZTUp: База данных устарела, пожалуста, перезагрузите страницу.");
            reject(false);
          }

          var objectStore = db.transaction('appear', 'readwrite').objectStore('appear');
          var request = objectStore.get('appear');

          request.onerror = (event) => {
            console.error("LZTUp: Не удалось получить данные из Базы Данных: ", event.error);
            reject(false);
          }

          request.onsuccess = () => {
            console.log('LZTUp: Получены данные из Базы Данных: ', request.result);
            var data = request.result;

            if (typeof(hideUnreadArticleCircle) === 'number') {
              data.hideUnreadArticleCircle = hideUnreadArticleCircle;
            }

            if (typeof(hideTagsInThreads) === 'number') {
              data.hideTagsInThreads = hideTagsInThreads;
            }

            if (typeof(changeLogo) === 'number') {
              data.changeLogo = changeLogo;
            }

            if (typeof(hideCounterAlerts) === 'number') {
              data.hideCounterAlerts = hideCounterAlerts;
            }

            if (typeof(hideCounterConversations) === 'number') {
              data.hideCounterConversations = hideCounterConversations;
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

function readAppearDB() {
    return new Promise((resolve, reject) => {
      var openRequest = openDB("LZTUpAppear");

      openRequest.onerror = () => {
        alert('LZTUp: Произошла ошибка');
        console.error("LZTUp: Ошибка Базы Данных: " + openRequest.errorCode);
        reject(false);
      }

      openRequest.onupgradeneeded = () => {
        var db = openRequest.result;
        db.close();
        initAppearDB();
        resolve(true);
      }

      openRequest.onsuccess = () => {
        var db = openRequest.result;
        db.onversionchange = () => {
          db.close();
          alert("LZTUp: База данных устарела, пожалуста, перезагрузите страницу.");
          reject(false);
        }

        var objectStore = db.transaction('appear').objectStore('appear');
        var request = objectStore.get('appear');

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

async function deleteAppearDB() {
    indexedDB.deleteDatabase('LZTUpAppear');
}
// --- IndexedDB Appear functions end