// --- IndexedDB UniqueStyle functions start:
function openDB (name) {
    try {
      var openRequest = indexedDB.open(name, 1);
      return openRequest
    } catch (e) {
      Logger.error(e)
      return openRequest
    }
}

async function initUniqueStyleDB () {
    return new Promise((resolve, reject) => {
      var openRequest = openDB("LZTUpProfile")

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

        var objectStore = db.createObjectStore('uniqueStyle', {keyPath: 'key'});

        objectStore.createIndex('nickStyle', 'nickStyle', { unique: false })
        objectStore.createIndex('bannerStyle', 'bannerStyle', { unique: false })
        objectStore.createIndex('bannerText', 'bannerText', { unique: false })
        objectStore.createIndex('badgeIcon', 'badgeIcon', { unique: false })
        objectStore.createIndex('badgeText', 'badgeText', { unique: false })
        objectStore.createIndex('badgeFill', 'badgeFill', { unique: false })
        objectStore.createIndex('badgeStroke', 'badgeStroke', { unique: false })

        Logger.log('База Данных создана')

        objectStore.transaction.oncomplete = event => {
          var objectStore = db.transaction('uniqueStyle', 'readwrite').objectStore('uniqueStyle');
          var uniqueStyleDefault = {
            key: 'uniqueStyle',
            nickStyle: '',
            bannerStyle: '',
            bannerText: '',
            badgeIcon: '',
            badgeText: '',
            badgeFill: '',
            badgeStroke: ''
          }
          var request = objectStore.add(uniqueStyleDefault);

          request.onsuccess = () => {
            Logger.log("Стандартные стили добавлены в Базу Данных: ", request.result);
            resolve(true);
          };
          request.onerror = () => {
            Logger.log("Ошибка при добавление стандартных стилей в Базу Данных: ", request.error);
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

async function updateUniqueStyleDB({nickStyle, bannerStyle, bannerText, badgeIcon, badgeText, badgeFill, badgeStroke}) {
    return new Promise((resolve, reject) => {
      if (typeof(nickStyle) === 'string' || typeof(bannerStyle) === 'string' || typeof(bannerText) === 'string' || typeof(badgeIcon) === 'string' || typeof(badgeText) === 'string' || typeof(badgeFill) === 'string' || typeof(badgeStroke) === 'string') {
        var openRequest = openDB("LZTUpProfile");

        openRequest.onerror = () => {
          alert('LZT Upgrade: Произошла ошибка');
          Logger.error("Ошибка Базы Данных: " + openRequest.errorCode);
          reject(false);
        }

        openRequest.onupgradeneeded = () => {
          var db = openRequest.result;
          db.close();
          initUniqueStyleDB();
          resolve(true);
        }

        openRequest.onsuccess = () => {
          var db = openRequest.result;
          db.onversionchange = () => {
            db.close();
            alert("База данных устарела, пожалуста, перезагрузите страницу.");
            reject(false);
          }

          var objectStore = db.transaction('uniqueStyle', 'readwrite').objectStore('uniqueStyle');
          var request = objectStore.get('uniqueStyle');

          request.onerror = (event) => {
            Logger.error("Не удалось получить данные из Базы Данных: ", event.error);
            reject(false);
          }

          request.onsuccess = () => {
            Logger.log('Получены данные из Базы Данных: ', request.result);
            var data = request.result;

            if (typeof(nickStyle) === 'string') {
              data.nickStyle = nickStyle;
            }

            if (typeof(bannerStyle) === 'string') {
              data.bannerStyle = bannerStyle;
            }

            if (typeof(bannerText) === 'string') {
              data.bannerText = bannerText;
            }

            if (typeof(badgeIcon) === 'string') {
              data.badgeIcon = badgeIcon;
            }

            if (typeof(badgeText) === 'string') {
              data.badgeText = badgeText;
            }

            if (typeof(badgeFill) === 'string') {
              data.badgeFill = badgeFill;
            }

            if (typeof(badgeStroke) === 'string') {
              data.badgeStroke = badgeStroke;
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

function readUniqueStyleDB() {
    return new Promise((resolve, reject) => {
      var openRequest = openDB("LZTUpProfile");

      openRequest.onerror = () => {
        alert('LZT Upgrade: Произошла ошибка');
        Logger.error("Ошибка Базы Данных: " + openRequest.errorCode);
        reject(false);
      }

      openRequest.onupgradeneeded = () => {
        var db = openRequest.result;
        db.close();
        initUniqueStyleDB();
        resolve(true);
      }

      openRequest.onsuccess = () => {
        var db = openRequest.result;
        db.onversionchange = () => {
          db.close();
          alert("База данных устарела, пожалуста, перезагрузите страницу.");
          reject(false);
        }

        var objectStore = db.transaction('uniqueStyle').objectStore('uniqueStyle');
        var request = objectStore.get('uniqueStyle');

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

async function deleteUniqueStylesDB() {
    indexedDB.deleteDatabase('LZTUpProfile');
}
// --- IndexedDB UniqueStyle functions end
