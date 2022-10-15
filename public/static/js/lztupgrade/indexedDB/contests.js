// --- IndexedDB Contests functions start:
function openDB (name) {
    try {
      var openRequest = indexedDB.open(name, 1);
      return openRequest
    } catch (e) {
      console.error(e)
      return openRequest
    }
}

async function initContestsDB () {
    return new Promise((resolve, reject) => {
      var openRequest = openDB("LZTUpContests")

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

        var objectStore = db.createObjectStore('contests', {keyPath: 'key'});

        objectStore.createIndex('contestsTen', 'contestsTen', { unique: false })
        objectStore.createIndex('contestsAll', 'contestsAll', { unique: false })
        objectStore.createIndex('contestsInfoTop', 'contestsInfoTop', { unique: false })
        objectStore.createIndex('contestsBtnTopInBlock', 'contestsBtnTopInBlock', { unique: false })
        objectStore.createIndex('contestsHideTags', 'contestsHideTags', { unique: false })
        objectStore.createIndex('contestsAutoClose', 'contestsAutoClose', { unique: false })
        objectStore.createIndex('contestsRmContent', 'contestsRmContent', { unique: false })

        console.log('LZTUp: База Данных создана')

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
            console.log("LZTUp: Стандартные настройки розыгрышей добавлены в Базу Данных: ", request.result);
            resolve(true);
          };
          request.onerror = () => {
            console.log("LZTUp: Ошибка при добавление стандартных настроек розыгрышей в Базу Данных: ", request.error);
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

async function updateContestsDB({contestsTen, contestsAll, contestsInfoTop, contestsBtnTopInBlock, contestsHideTags, contestsAutoClose, contestsRmContent}) {
    return new Promise((resolve, reject) => {
      if (typeof(contestsTen) === 'number' || typeof(contestsAll) === 'number' || typeof(contestsInfoTop) === 'number' || typeof(contestsBtnTopInBlock) === 'number' || typeof(contestsHideTags) === 'number' || typeof(contestsAutoClose) === 'number' || typeof(contestsRmContent) === 'number') {
        var openRequest = openDB("LZTUpContests");

        openRequest.onerror = () => {
          alert('LZTUp: Произошла ошибка');
          console.error("LZTUp: Ошибка Базы Данных: " + openRequest.errorCode);
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
            alert("LZTUp: База данных устарела, пожалуста, перезагрузите страницу.");
            reject(false);
          }

          var objectStore = db.transaction('contests', 'readwrite').objectStore('contests');
          var request = objectStore.get('contests');

          request.onerror = (event) => {
            console.error("LZTUp: Не удалось получить данные из Базы Данных: ", event.error);
            reject(false);
          }

          request.onsuccess = () => {
            console.log('LZTUp: Получены данные из Базы Данных: ', request.result);
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

function readContestsDB() {
    return new Promise((resolve, reject) => {
      var openRequest = openDB("LZTUpContests");

      openRequest.onerror = () => {
        alert('LZTUp: Произошла ошибка');
        console.error("LZTUp: Ошибка Базы Данных: " + openRequest.errorCode);
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
          alert("LZTUp: База данных устарела, пожалуста, перезагрузите страницу.");
          reject(false);
        }

        var objectStore = db.transaction('contests').objectStore('contests');
        var request = objectStore.get('contests');

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

async function deleteContestsDB() {
    indexedDB.deleteDatabase('LZTUpContests');
}
// --- IndexedDB Contests functions end