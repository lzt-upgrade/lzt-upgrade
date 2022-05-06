// ==UserScript==
// @name         LztUp
// @version      1.0
// @description  Some useful utilities for lolz.guru
// @author       Toil
// @match        *://*.lolz.guru/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=lolz.guru
// @grant        none
// ==/UserScript==
var username = $('.accountUsername span').text();

const menuBtn = $('<a>');
const lztUpIcon = '<img title="love" alt=":love2:" data-smilie="yes" data-src="https://i.imgur.com/ucm5U7v.gif" src="https://i.imgur.com/ucm5U7v.gif" style="width: 14px; hight: auto; padding-right: 4px">';
$(menuBtn).attr('id', 'LztUpButton').text('LZTUp').prepend(lztUpIcon).on('click', () => registerModal(
              'Локальный Уник.',
              `<div style="background: rgb(54, 54, 54); margin: 5px 15px; padding: 10px 15px; border-radius: 10px;"> \
                На этой странице можно выбрать стиль вашего ника и лычки. Этот стиль виден только вам. После <a href="https://lolz.guru/account/upgrades?upgrade_id=14" target="_blank" style="color: rgb(0, 186, 120)">покупки</a> оф. уника его увидят все. \
              </div> \
              <div class="textHeading" style="margin-top: 10px">Стиль ника:</div> \
              <nobr> \
              <textarea id="LztUpUniqueStyle" name="username_css" class="UsernameCss textCtrl" style="min-heght: 75px; width: 400px">color: none</textarea> \
              <input type="button" value="Сохранить" class="button primary" id="LztUpSaveUniqueStyle" style="width:100px;margin:15px"></input>`
            ));

var menu = $('#AccountMenu');

function registerMenuBtn(element) {
  const fragment = new DocumentFragment();
  var menuForAdd = $('#AccountMenu > a:nth-child(10)');
  fragment.appendChild(element[0]);
  menuForAdd.after(fragment);
  return true;
}

function registerModal(modalName, elementMain = '') {
  const fragment = new DocumentFragment();
  var modalBackdrop = $('<div class="modal-backdrop fade in" id="LztUpModalBackdrop" style="z-index: 10001;"></div>');
  var modalWindow = $(`<div class="modal fade in" id="LztUpModal" style="z-index: 10002; padding-right: 17px; outline: currentcolor none medium;" data-z-index="0" tabindex="-1"> \
      <div class="xenOverlay" id="LztUpOverlay" style="top: 10%;"> \
        <a class="close OverlayCloser" id="LztUpOverlayCloser"></a> \
        <div class="sectionMain"> \
          <h2 class="heading h1">${modalName}</h2> \
          <div class="primaryContent"> \
            <form class="xenForm formOverlay" id="LztUpFormOverlay"> \
              <dd id="LztUpOverlayCtrldd"> \
                ${elementMain} \
              </dd> \
              <dl class="ctrlUnit submitUnit"> \
                <dt></dt> \
                <dd> \
                  <input type='button' value="Закрыть" class="button primary" id="LztUpModalExitButton"></input> \
                </dd> \
              </dl> \
            </form> \
          </div> \
        </div> \
      </div> \
    </div>`);
  var htmlPre = document.body;
  fragment.appendChild(modalBackdrop[0]);
  fragment.appendChild(modalWindow[0]);
  htmlPre.appendChild(fragment);
  $('#LztUpOverlayCloser').on('click', () => {
    $('#LztUpModalBackdrop').remove();
    $('#LztUpModal').remove();
    console.info('LZTUp: Модальное окно закрыто')
  })
  $('#LztUpModalExitButton').on('click', () => {
    $('#LztUpModalBackdrop').remove();
    $('#LztUpModal').remove();
    console.info('LZTUp: Модальное окно закрыто')
  })
}

function openDB (name) {
  try {
    var openRequest = indexedDB.open(name, 1);
    return openRequest
  } catch (e) {
    console.error(e)
    return openRequest
  }
}

async function initUniqueStyleDB () {
  return new Promise((resolve, reject) => {
    var openRequest = openDB("LZTUpProfile")

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

      var objectStore = db.createObjectStore('uniqueStyle', {keyPath: 'key'});

      objectStore.createIndex('nickStyle', 'nickStyle', { unique: false })
      objectStore.createIndex('bannerStyle', 'bannerStyle', { unique: false })
      objectStore.createIndex('badgeStyle', 'badgeStyle', { unique: false })
      objectStore.createIndex('badgeText', 'badgeText', { unique: false })

      console.log('LZTUp: База Данных создана')

      objectStore.transaction.oncomplete = event => {
        var objectStore = db.transaction('uniqueStyle', 'readwrite').objectStore('uniqueStyle');
        var uniqueStyleDefault = {
          key: 'uniqueStyle',
          nickStyle: 'none',
          bannerStyle: 'none',
          badgeStyle: 'none',
          badgeText: 'none'
        }
        var request = objectStore.add(uniqueStyleDefault);

        request.onsuccess = () => {
          console.log("LZTUp: Стандартные стили добавлены в Базу Данных: ", request.result);
          resolve(true);
        };
        request.onerror = () => {
          console.log("LZTUp: Ошибка при добавление стандартных стилей в Базу Данных: ", request.error);
          reject(false);
        };
      }
    }

    openRequest.onsuccess = () => {
      console.log("LZTUp: База данных инициализована")
      var db = openRequest.result;
      db.onversionchange = () => {
        db.close();
        alert("База данных устарела, пожалуста, перезагрузите страницу.");
        console.log("LZTUp: База данных устарела, пожалуста, перезагрузите страницу");
        reject(false);
      }
      resolve(true);
    }

    openRequest.onblocked = () => {
      var db = openRequest.result;
      console.error('LZTUp: База Данных временно заблокирована из-за ошибки: ', db)
      alert("LZTUp отключен из-за ошибки при обновление базы данных. Закройте все открытые вкладки с lolz.guru и попробуйте снова.")
      reject(false);
    }
  })
}

async function updateUniqueStyleDB(nickSt = null, bannerSt = null, badgeSt = null, badgeTxt = null) {
  return new Promise((resolve, reject) => {
    if (nickSt !== null || bannerSt !== null || badgeSt !== null || badgeTxt !== null) {
      var openRequest = openDB("LZTUpProfile");

      openRequest.onerror = () => {
        alert('LZTUp: Произошла ошибка');
        console.error("LZTUp: Ошибка Базы Данных: " + openRequest.errorCode);
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
          alert("LZTUp: База данных устарела, пожалуста, перезагрузите страницу.");
          reject(false);
        }

        var objectStore = db.transaction('uniqueStyle', 'readwrite').objectStore('uniqueStyle');
        var request = objectStore.get('uniqueStyle');

        request.onerror = (event) => {
          console.error("LZTUp: Не удалось получить данные из Базы Данных: ", event.error);
          reject(false);
        }

        request.onsuccess = () => {
          console.log('LZTUp: Получены данные из Базы Данных: ', request.result);
          var data = request.result;

          if (nickSt !== null) {
            data.nickStyle = String(nickSt);
          }

          if (bannerSt !== null) {
            data.bannerStyle = String(bannerSt);
          }

          if (badgeSt !== null) {
            data.bannerStyle = String(badgeSt);
          }

          if (badgeTxt !== null) {
            data.bannerStyle = String(badgeTxt);
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
        alert("LZTUp отключен из-за ошибки при обновление базы данных. Закройте все открытые вкладки с lolz.guru и попробуйте снова.");
        reject(false);
      }
    } else {
      console.error('LZTUp: В чём смысл делать функцию добавления, которая ничего не добавляет?! wut');
      reject(false);
    }
  })
}

function readUniqueStyleDB() {
  return new Promise((resolve, reject) => {
    var openRequest = openDB("LZTUpProfile");

    openRequest.onerror = () => {
      alert('LZTUp: Произошла ошибка');
      console.error("LZTUp: Ошибка Базы Данных: " + openRequest.errorCode);
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
        alert("LZTUp: База данных устарела, пожалуста, перезагрузите страницу.");
        reject(false);
      }

      var objectStore = db.transaction('uniqueStyle').objectStore('uniqueStyle');
      var request = objectStore.get('uniqueStyle');

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
      alert("LZTUp отключен из-за ошибки при обновление базы данных. Закройте все открытые вкладки с lolz.guru и попробуйте снова.");
      reject(false);
    }
  })
}

function updateNickStyle(style) {
  Array.from($('.username span')).forEach(item => {
    if ($(item).text() === username) {
      $(item).removeAttr('class');
      $(item).attr('style', style);
    }
  })
}


var MenuResult = registerMenuBtn(menuBtn);
var isDBInited = await initUniqueStyleDB().then(value => {return(value)}).catch(err => {console.error(err); return false});


if (isDBInited === true) {
  let dbData = await readUniqueStyleDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
  if (typeof(dbData) === 'object') {
    updateNickStyle(dbData.nickStyle);
  }
}

if (MenuResult === true) {
  $(document).on('click', '#LztUpSaveUniqueStyle', async function () {
    let nickStNew = $('#LztUpUniqueStyle').val();
    await updateUniqueStyleDB(nickSt = nickStNew).then(value => {return(value)}).catch(err => {console.error(err); return false});
    updateNickStyle(nickStNew);
  })
}




// random realizations
// updateNickStyle(style);
// registerMenuBtn(menuBtn);
// registerModal(
//               'Тестик <3',
//               'Lorem Ipsum',
//               '<input type="submit" value="Тест" accesskey="s" class="button primary"></input>'
//             );
// await updateUniqueStyleDB(nickSt = 'color: #000000').then(value => {return(value)}).catch(err => {console.error(err); return false});
// await readUniqueStyleDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
// await initUniqueStyleDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
