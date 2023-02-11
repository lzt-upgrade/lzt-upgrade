// --- IndexedDB Appear functions start:
function openDB(name) {
  try {
    var openRequest = indexedDB.open(name, 1);
    return openRequest;
  } catch (e) {
    Logger.error(e);
    return openRequest;
  }
}

async function initAppearDB() {
  return new Promise((resolve, reject) => {
    var openRequest = openDB("LZTUpAppear");

    openRequest.onerror = () => {
      alert("LZT Upgrade: Произошла ошибка");
      Logger.error("Ошибка Базы Данных: " + openRequest.errorCode);
      reject(false);
      1;
    };

    openRequest.onupgradeneeded = (event) => {
      var db = openRequest.result;

      db.onerror = () => {
        alert("LZT Upgrade: Не удалось загрузить базу данных");
        Logger.error("Не удалось загрузить базу данных: " + openRequest.error);
        reject(false);
      };

      var objectStore = db.createObjectStore("appear", { keyPath: "key" });

      objectStore.createIndex(
        "hideUnreadArticleCircle",
        "hideUnreadArticleCircle",
        { unique: false }
      );
      objectStore.createIndex("hideTagsInThreads", "hideTagsInThreads", {
        unique: false,
      });
      objectStore.createIndex("forumLogo", "forumLogo", { unique: false });
      objectStore.createIndex("hideCounterAlerts", "hideCounterAlerts", {
        unique: false,
      });
      objectStore.createIndex(
        "hideCounterConversations",
        "hideCounterConversations",
        { unique: false }
      );
      objectStore.createIndex("marketLogo", "marketLogo", { unique: false });
      objectStore.createIndex("reportButtonsInPost", "reportButtonsInPost", {
        unique: false,
      });
      objectStore.createIndex("theme", "theme", { unique: false });
      objectStore.createIndex("themeAutoReload", "themeAutoReload", {
        unique: false,
      });
      objectStore.createIndex("backgroundEffect", "backgroundEffect", {
        unique: false,
      });

      Logger.log("База Данных создана");

      objectStore.transaction.oncomplete = (event) => {
        var objectStore = db
          .transaction("appear", "readwrite")
          .objectStore("appear");
        var appearDefault = {
          key: "appear",
          hideUnreadArticleCircle: 0,
          hideTagsInThreads: 0,
          forumLogo: 0,
          hideCounterAlerts: 0,
          hideCounterConversations: 0,
          marketLogo: 0,
          reportButtonsInPost: "",
          theme: 0,
          themeAutoReload: 0,
          backgroundEffect: 0,
          hideOnlyfans: 0,
          showPollsResults: 0
        };
        var request = objectStore.add(appearDefault);

        request.onsuccess = () => {
          Logger.log('Стандартные настройки "Внешнего вида" добавлены в Базу Данных: ', request.result);
          resolve(true);
        };
        request.onerror = () => {
          Logger.log('Ошибка при добавление стандартных настроек "Внешнего вида" в Базу Данных: ', request.error);
          reject(false);
        };
      };
    };

    openRequest.onsuccess = () => {
      Logger.log("База данных инициализована");
      var db = openRequest.result;
      db.onversionchange = () => {
        db.close();
        alert("LZT Upgrade: Базе данных нужно обновление, пожалуста, перезагрузите страницу.");
        Logger.log("Базе данных нужно обновление, пожалуста, перезагрузите страницу");
        reject(false);
      };
      resolve(true);
    };

    openRequest.onblocked = () => {
      var db = openRequest.result;
      Logger.error("База Данных временно заблокирована из-за ошибки: ", db);
      alert("LZT Upgrade отключен из-за ошибки при обновление Базы Данных. Закройте все открытые вкладки с lolz.guru и попробуйте снова.");
      reject(false);
    };
  });
}

async function updateAppearDB({
  hideUnreadArticleCircle,
  hideTagsInThreads,
  forumLogo,
  hideCounterAlerts,
  hideCounterConversations,
  marketLogo,
  reportButtonsInPost,
  theme,
  themeAutoReload,
  backgroundEffect,
  hideOnlyfans,
  showPollsResults,
}) {
  return new Promise((resolve, reject) => {
    if (
      typeof hideUnreadArticleCircle === "number" ||
      typeof hideTagsInThreads === "number" ||
      typeof forumLogo === "number" ||
      typeof hideCounterAlerts === "number" ||
      typeof hideCounterConversations === "number" ||
      typeof marketLogo === "number" ||
      typeof reportButtonsInPost === "string" ||
      typeof theme === "number" ||
      typeof themeAutoReload === "number" ||
      typeof backgroundEffect === "number" ||
      typeof hideOnlyfans === "number" ||
      typeof showPollsResults === "number"
    ) {
      var openRequest = openDB("LZTUpAppear");

      openRequest.onerror = () => {
        alert("LZT Upgrade: Произошла ошибка");
        Logger.error("Ошибка Базы Данных: " + openRequest.errorCode);
        reject(false);
      };

      openRequest.onupgradeneeded = () => {
        var db = openRequest.result;
        db.close();
        initAppearDB();
        resolve(true);
      };

      openRequest.onsuccess = () => {
        var db = openRequest.result;
        db.onversionchange = () => {
          db.close();
          alert("LZT Upgrade: База данных устарела, пожалуста, перезагрузите страницу.");
          reject(false);
        };

        var objectStore = db
          .transaction("appear", "readwrite")
          .objectStore("appear");
        var request = objectStore.get("appear");

        request.onerror = (event) => {
          Logger.error("Не удалось получить данные из Базы Данных: ", event.error);
          reject(false);
        };

        request.onsuccess = () => {
          Logger.log("Получены данные из Базы Данных: ", request.result);
          var data = request.result;

          if (typeof hideUnreadArticleCircle === "number") {
            data.hideUnreadArticleCircle = hideUnreadArticleCircle;
          }

          if (typeof hideTagsInThreads === "number") {
            data.hideTagsInThreads = hideTagsInThreads;
          }

          if (typeof forumLogo === "number") {
            data.forumLogo = forumLogo;
          }

          if (typeof hideCounterAlerts === "number") {
            data.hideCounterAlerts = hideCounterAlerts;
          }

          if (typeof hideCounterConversations === "number") {
            data.hideCounterConversations = hideCounterConversations;
          }

          if (typeof marketLogo === "number") {
            data.marketLogo = marketLogo;
          }

          if (typeof reportButtonsInPost === "string") {
            data.reportButtonsInPost = reportButtonsInPost;
          }

          if (typeof theme === "number") {
            data.theme = theme;
          }

          if (typeof themeAutoReload === "number") {
            data.themeAutoReload = themeAutoReload;
          }

          if (typeof backgroundEffect === "number") {
            data.backgroundEffect = backgroundEffect;
          }

          if (typeof hideOnlyfans === "number") {
            data.hideOnlyfans = hideOnlyfans;
          }

          if (typeof showPollsResults === "number") {
            data.showPollsResults = showPollsResults;
          }

          var requestUpdate = objectStore.put(data);

          requestUpdate.onerror = (event) => {
            Logger.error("Не удалось обновить данные в Базе Данных: ", event.error);
            reject(false);
          };

          requestUpdate.onsuccess = () => {
            Logger.log("Данные в Базе Данных обновлены, вы великолепны!");
            resolve(true);
          };
        };
      };

      openRequest.onblocked = () => {
        var db = openRequest.result;
        Logger.error("База Данных временно заблокирована из-за ошибки: ", db);
        alert("LZT Upgrade отключен из-за ошибки при обновление Базы Данных. Закройте все открытые вкладки с lolz.guru и попробуйте снова.");
        reject(false);
      };
    } else {
      Logger.error("В чём смысл делать функцию добавления, которая ничего не добавляет?! wut");
      reject(false);
    }
  });
}

function readAppearDB() {
  return new Promise((resolve, reject) => {
    var openRequest = openDB("LZTUpAppear");

    openRequest.onerror = () => {
      alert("LZT Upgrade: Произошла ошибка");
      Logger.error("Ошибка Базы Данных: " + openRequest.errorCode);
      reject(false);
    };

    openRequest.onupgradeneeded = () => {
      var db = openRequest.result;
      db.close();
      initAppearDB();
      resolve(true);
    };

    openRequest.onsuccess = () => {
      var db = openRequest.result;
      db.onversionchange = () => {
        db.close();
        alert("LZT Upgrade: База данных устарела, пожалуста, перезагрузите страницу.");
        reject(false);
      };

      var objectStore = db.transaction("appear").objectStore("appear");
      var request = objectStore.get("appear");

      request.onerror = (event) => {
        Logger.error("Не удалось получить данные из Базы Данных: ", event.error);
        reject(false);
      };

      request.onsuccess = () => {
        Logger.log("Получены данные из Базы Данных: ", request.result);
        var data = request.result;
        resolve(data);
      };
    };

    openRequest.onblocked = () => {
      var db = openRequest.result;
      Logger.error("База Данных временно заблокирована из-за ошибки: ", db );
      alert("LZT Upgrade отключен из-за ошибки при обновление Базы Данных. Закройте все открытые вкладки с lolz.guru и попробуйте снова.");
      reject(false);
    };
  });
}

async function deleteAppearDB() {
  indexedDB.deleteDatabase("LZTUpAppear");
}
// --- IndexedDB Appear functions end
