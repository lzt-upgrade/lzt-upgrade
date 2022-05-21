// ==UserScript==
// @name         LZT Upgrade
// @version      1.0.3
// @description  Some useful utilities for lolz.guru
// @author       Toil
// @match        *://*.lolz.guru/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=lolz.guru
// @resource     styles https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/css/style.css
// @resource     styles2 https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/css/nano.min.css
// @require      https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/static/js/pickr/pickr.es5.min.js
// @updateURL    https://github.com/ilyhalight/lzt-upgrade/raw/master/lzt-upgrade.user.js
// @downloadURL  https://github.com/ilyhalight/lzt-upgrade/raw/master/lzt-upgrade.user.js
// @supportURL   https://github.com/ilyhalight/lzt-upgrade/issues
// @homepageURL  https://github.com/ilyhalight/lzt-upgrade
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

const styles = GM_getResourceText("styles");
const styles2 = GM_getResourceText("styles2");
GM_addStyle(styles);
GM_addStyle(styles2);


const username = $('.accountUsername span').text();

const userid = () => {
  return XenForo._csrfToken.split(',')[0]
}

const sleep = m => new Promise(r => setTimeout(r, m))

const menuBtn = $('<a id="LZTUpButton">LZT Upgrade</a>');
const lztUpIcon = $('<img id="LZTUpBtnIcon" title="love" alt=":love2:" data-smilie="yes" data-src="https://i.imgur.com/ucm5U7v.gif" src="https://i.imgur.com/ucm5U7v.gif">');
$(menuBtn).prepend(lztUpIcon).on('click', async function () {
  var dbData = await readUniqueStyleDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
  if (typeof(dbData) === 'object') {
    var nickStyle = dbData.nickStyle;
    var bannerStyle = dbData.bannerStyle;
    var bannerText = dbData.bannerText;
    var badgeText = dbData.badgeText;
    var badgeIcon = dbData.badgeIcon;
    var badgeFill = dbData.badgeFill;
    var badgeStroke = dbData.badgeStroke;
  } else {
    var nickStyle = '';
    var bannerStyle = '';
    var bannerText = '';
    var badgeText = '';
    var badgeIcon = '<svg width="60" height="27" viewBox="0 0 60 27" fill="none" xmlns="http://www.w3.org/2000/svg"> \
    <path fill-rule="evenodd" clip-rule="evenodd" d="M40 22V4H55.1L59.1 0H7V4H24L12 23H4V0H0V27H59L55 23H40V22ZM17 23H36V22V4H29L17 23Z" fill="#23A86D"/> \
    </svg>';
    var badgeFill = '';
    var badgeStroke = '';
  }

  const overlay = registerModal(
    'Локальный Уник',
    `<div id="LZTUpModalComment">
      На этой странице можно выбрать стиль вашего ника и лычки. Этот стиль виден только вам. После <a href="https://lolz.guru/account/upgrades?upgrade_id=14" target="_blank">покупки</a> оф. уника его увидят все.
    </div>

    <div id="LZTUpModalHeading" class="textHeading">Стиль ника:</div>
    <div id="LZTUpModalText" class="muted explain">Максимум 1500 символов. При отсутствии кода используется цвет вашей группы с форума.</div>
    <nobr>
      <textarea id="LZTUpUniqueStyle" name="username_css" class="UsernameCss textCtrl" maxlength="1500">${nickStyle}</textarea>
      <input id="LZTUpSaveUniqueStyle" type="button" value="Сохранить" class="button primary"></input>
    </nobr>

    <div id="LZTUpModalHeading" class="textHeading">Стиль лычки:</div>
    <div id="LZTUpModalText" class="muted explain">Максимум 1500 символов.</div>
    <nobr>
      <textarea id="LZTUpBannerStyle" name="banner_css" class="BannerCss textCtrl" maxlength="1500">${bannerStyle}</textarea>
      <input id="LZTUpSaveBannerStyle" type="button" value="Сохранить" class="button primary"></input>
    </nobr>

    <div id="LZTUpModalHeading" class="textHeading">Текст в лычке:</div>
    <div id="LZTUpModalText" class="muted explain">Максимум 24 символа. При отсутствии текста лычка не будет видна.</div>
    <nobr>
      <input id="LZTUpBannerText" name="banner_text" maxlength="24" class="textCtrl" value=${bannerText}>
      <input id="LZTUpSaveBannerText" type="button" value="Сохранить" class="button primary"></input>
    </nobr>

    <div id="LZTUpModalHeading" class="textHeading">Иконка на аватарке:</div>
    <div id="LZTUpModalText" class="muted explain">
      <a href="/threads/3405752/" class="mainc">[Гайд] Как правильно устанавливать свои иконки в уник</a>
      <br>
      <br>
      Максимумальная длина SVG - 3000 символов. При отсутствии значения будет установлено стандартная иконка.
    </div>
    <nobr>
      <textarea id="LZTUpBadgeIcon" name="banner_icon" maxlength="3000" class="BadgeCss textCtrl">${badgeIcon}</textarea>
      <input id="LZTUpSaveBadgeIcon" type="button" value="Сохранить" class="button primary"></input>
    </nobr>

    <div id="LZTUpModalHeading" class="textHeading">Цвета иконок на аватарке:</div>
    <div id="LZTUpModalText" class="muted explain">Убедитесь, что в SVG нету заранее установленных значений 'fill' и 'stroke'.</div>
    <nobr>
      <div id="LZTUpBadgeFillContainer">
        <div id="LZTUpModalText" class="muted explain">Цвет иконки (fill):</div>
        <div id="LZTUpBadgeFill" class="badge-fill-picker"></div>
      </div>
    </nobr>
    <nobr>
      <div id="LZTUpBadgeStrokeContainer" style="padding-top: 12px;">
        <div id="LZTUpModalText" class="muted explain" style="">Цвет иконки (stroke):</div>
        <div id="LZTUpStrokeFill" class="badge-stroke-picker"></div>
      </div>
    </nobr>

    <div id="LZTUpModalHeading" class="textHeading">Текст иконки на аватарке:</div>
    <div id="LZTUpModalText" class="muted explain">Максимум 24 символа. При отсутствии текста иконка не будет видна.</div>
    <nobr>
      <input id="LZTUpBadgeText" name="badge_text" maxlength="24" class="textCtrl" value=${badgeText}>
      <input id="LZTUpSaveBadgeText" type="button" value="Сохранить" class="button primary"></input>
    </nobr>

    <input id="LZTUpResetSettings" type="button" value="Сбросить настройки" class="button primary"></input>`
  )

  const pickrFill = Pickr.create({
    el: '.badge-fill-picker',
    container: overlay[0],
    theme: 'nano', // or 'monolith', or 'nano'
    default: '#ffffff',

    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {
        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            input: true,
            clear: true,
            cancel: true,
            save: true
        }
    }
  })

  pickrFill.on('init', async (instance) => {
    instance.setColor(badgeFill === '' ? null : badgeFill)
    instance.on('save', async (color, instance) => {
      if (color !== null) {
        var rgbaColor = color.toRGBA().toString(0)
      } else {
        var rgbaColor = ""
      }
      await updateUniqueStyleDB(nickSt = null, bannerSt = null, bannerTxt = null, badgeIcn = null, badgeTxt = null, badgeFll = rgbaColor, badgeStrk = null).then(value => {return(value)}).catch(err => {console.error(err); return false});
      await setUniqIconColor(rgbaColor)
    });
  });

  const pickrStroke = Pickr.create({
    el: '.badge-stroke-picker',
    container: overlay[0],
    theme: 'nano', // or 'monolith', or 'nano'
    default: '#ffffff',

    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {
        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            input: true,
            clear: true,
            cancel: true,
            save: true
        }
    }
  })

  pickrStroke.on('init', async (instance) => {
    instance.setColor(badgeStroke === '' ? null : badgeStroke)
    instance.on('save', async (color, instance) => {
      if (color !== null) {
        var rgbaColor = color.toRGBA().toString(0)
      } else {
        var rgbaColor = ""
      }
      await updateUniqueStyleDB(nickSt = null, bannerSt = null, bannerTxt = null, badgeIcn = null, badgeTxt = null, badgeFll = null, badgeStrk = rgbaColor).then(value => {return(value)}).catch(err => {console.error(err); return false});
      await setUniqIconColor('', rgbaColor)
    });
  });
});


function registerMenuBtn(element) {
  const fragment = new DocumentFragment();
  var menuForAdd = $('#AccountMenu > a:nth-child(10)');
  fragment.appendChild(element[0]);
  menuForAdd.after(fragment);
  return true;
}

function registerProfileBtn(element) {
  Array.from($('.secondaryContent > .button.block')).forEach(item => {
    if ($(item).text() === 'Редактировать') {
      const fragment = new DocumentFragment();
      var placeForAdd = $('.secondaryContent > .avatarScaler')
      fragment.appendChild(element[0]);
      placeForAdd.append(fragment);
      return true;
    }
  })
}

function removeProfileBtn(element) {
  if ($(element).length > 0) {
    $(element).remove();
  }
}

function registerModal(modalName, elementMain = '') {
  return XenForo.alert(elementMain, modalName, null, () => {
    console.log('LZTUp: Модальное окно закрыто')
  })
}


// --- IndexedDB functions start:
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
      objectStore.createIndex('bannerText', 'bannerText', { unique: false })
      objectStore.createIndex('badgeIcon', 'badgeIcon', { unique: false })
      objectStore.createIndex('badgeText', 'badgeText', { unique: false })
      objectStore.createIndex('badgeFill', 'badgeFill', { unique: false })
      objectStore.createIndex('badgeStroke', 'badgeStroke', { unique: false })

      console.log('LZTUp: База Данных создана')

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

async function updateUniqueStyleDB(nickSt = null, bannerSt = null, bannerTxt = null, badgeIcn = null, badgeTxt = null, badgeFll = null, badgeStrk = null) {
  return new Promise((resolve, reject) => {
    if (nickSt !== null || bannerSt !== null || bannerTxt !== null || badgeIcn !== null || badgeTxt !== null || badgeFll !== null || badgeStrk !== null) {
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

          if (bannerTxt !== null) {
            data.bannerText = String(bannerTxt);
          }

          if (badgeIcn !== null) {
            data.badgeIcon = String(badgeIcn);
          }

          if (badgeTxt !== null) {
            data.badgeText = String(badgeTxt);
          }

          if (badgeFll !== null) {
            data.badgeFill = String(badgeFll);
          }

          if (badgeStrk !== null) {
            data.badgeStroke = String(badgeStrk);
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
      alert("LZTUp отключен из-за ошибки при обновление Базы Данных. Закройте все открытые вкладки с lolz.guru и попробуйте снова.");
      reject(false);
    }
  })
}

async function deleteUniqueStylesDB() {
  indexedDB.deleteDatabase('LZTUpProfile');
}
// --- IndexedDB functions end


function updateNickStyle(style) {
  Array.from($('.username span')).forEach(item => {
    if ($(item).text() === username) {
      $(item).removeAttr('class');
      $(item).attr('style', style);
    }
  })
}

async function reloadNickStyle() {
  try {
    var dbData = await readUniqueStyleDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
    if (typeof(dbData) === 'object') {
      if (dbData.nickStyle !== '') {
        updateNickStyle(String(dbData.nickStyle));
      }
    }
  } catch (err) {
    console.error('LZTUp: Не удалось обновить стиль ника ', err);
  }
}

async function sendMessageHandler() {
  var sendButton = $('.sendMessageContainer > .simpleRedactor--button.sendMessageButton');

  if (sendButton.length > 0) {
    $(sendButton).on('click', async function() {
      await sleep(850);
      await reloadNickStyle();
      await reloadUserBadges();
    })
  }

  var sendProfileButton = $('#ProfilePoster > .submitUnit > .button.primary');

  if (sendProfileButton.length > 0) {
    $(sendProfileButton).on('click', async function() {
      await sleep(850);
      await reloadNickStyle();
      await reloadUserBadges();
    })
  }
}

function updateBannerStyle(style, text) {
  var bannerBtn = $(`<em style="${style}" class="userBanner wrapped" id="LZTUpCustomBanner" itemprop="title"> \
  <span class="before"></span> \
  <strong>${text}</strong> \
  <span class="after"></span>\
  </em>`);
  removeProfileBtn('#LZTUpCustomBanner');
  registerProfileBtn(bannerBtn);
}

async function reloadBannerStyle() {
  try {
    var dbData = await readUniqueStyleDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
    if (typeof(dbData) === 'object') {
      if (dbData.bannerText !== '') {
        updateBannerStyle(String(dbData.bannerStyle), String(dbData.bannerText));
      }
    }
  } catch (err) {
    console.error('LZTUp: Не удалось обновить стиль баннера ', err);
  }
}

async function forceReloadBannerStyle() {
  try {
    var dbData = await readUniqueStyleDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
    if (typeof(dbData) === 'object') {
      updateBannerStyle(String(dbData.bannerStyle), String(dbData.bannerText));
      if (dbData.bannerText === '') {
        removeProfileBtn('#LZTUpCustomBanner');
      }
    }
  } catch (err) {
    console.error('LZTUp: Не удалось обновить стиль баннера ', err);
  }
}

function registerUserBadges(bannerStyle = '', badgeText = '', badgeIcon = '') {
  for(const el of $(`.avatarHolder > a.Av${userid()}m`)) {
    const $avatarHolder = $(el).parent()
    let $userBadges = $avatarHolder.find('.avatarUserBadges')
    let badgeId = null
    
    if(!$userBadges.length)
      $userBadges = $('<div class="avatarUserBadges"></div>').prependTo($avatarHolder)
    
    const oldBadge = $userBadges.find('.customUniqIcon').parent().remove()
    if(oldBadge.length)
      for(const className of oldBadge.attr('class').split(/\s+/))
        if(/^avatarUserBadge--(\d+)$/.test(className))
          badgeId = className.match(/^avatarUserBadge--(\d+)$/)[1]

    $(`<span style="${XenForo.htmlspecialchars(bannerStyle)}" class="avatarUserBadge Tooltip ${badgeIcon === '' ? 'uniq_default' : ''} ${badgeId ? `avatarUserBadge--${badgeId}` : ''}" title="${XenForo.htmlspecialchars(badgeText)}" tabindex="0">
			<div class="customUniqIcon">
				${badgeIcon.replaceAll(/<[script|style]*>/gi, '<!--').replaceAll(/<\/[script|style]*>/gi, '-->')}
			</div>
		</span>`
	).appendTo($avatarHolder.find('.avatarUserBadges')).parent().xfActivate()
	// TODO: fix self-xss for customUniqIcon
  // * trash fix, but it works (better than nothing)
  }

  return true;
}

async function reloadUserBadges() {
  try {
    var dbData = await readUniqueStyleDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
    if (typeof(dbData) === 'object') {
      if (dbData.badgeText !== '') {
        var isUserBadgesLoaded = $('#LZTUpUserBadges');
        if (isUserBadgesLoaded.length) {
          $(isUserBadgesLoaded).remove()
        }
        registerUserBadges(String(dbData.bannerStyle), String(dbData.badgeText), dbData.badgeIcon);
        await setUniqIconColor(dbData.badgeFill, dbData.badgeStroke)
      }
    }
  } catch (err) {
    console.error('LZTUp: Не удалось обновить стиль значка аватара юзера ', err);
  }
}

async function messageClickUsernameHandler() {
  var message = $('li.message');

  if (message.attr('data-author') === username) {
    var usernameBtn = $(message).find('.messageInfo > .userText > .item > .username span');
    if (usernameBtn.length > 0) {
      Array.from($(usernameBtn)).forEach(item => {
        $(item).on('click', async function() {
          await sleep(600);
          await reloadNickStyle();
          await reloadUserBadges();
        })
      });
    };
  }
}

async function commentMoreHandler() {
  var commentMoreBtn = $('.commentMore.CommentLoader');

  if (commentMoreBtn.length > 0) {
    $(commentMoreBtn).on('click', async function() {
      await sleep(450);
      await reloadNickStyle();
      await reloadUserBadges();
    })
  }
}

async function setUniqIconColor(badgeFill = '', badgeStroke = '') {
  var elements = $('div#LZTUpCustomUniqIcon > svg')
  if (elements.length && (badgeFill !== '' || badgeStroke !== '')) {
    $(elements).each((i, el) => {
      badgeFill !== '' ? $(el).attr('fill', badgeFill) : undefined;
      badgeStroke !== '' ? $(el).attr('stroke', badgeStroke) : undefined;
    })
  }
}

async function redactorSendHandler() {
  var element = $('iframe.redactor_textCtrl.redactor_SubmitOnEnter > html > body')
  element.addEventListener('keyup', async (e) => {
    if (e.ctrlKey && e.keyCode == 13) {
      await sleep(450);
      await reloadNickStyle();
      await reloadUserBadges();
    }
  })
}

async function getContestsLinks() {
  var links = $('div.discussionListItem--Wrapper')
  .find('a.listBlock.main')
  .toArray()
  .map(element => $(element).attr('href'));
  return links
}

async function regOpenContestsButton(amount = 10) {
  var updateButton = $('div.pageNavLinkGroup > div.linkGroup.SelectionCountContainer > span.UpdateFeedButton.UpdateFeedButtonIcon');
  var getContestsButton = $(`<a class="button OverlayTrigger" data-cacheoverlay="false">Открыть ${amount < 100 ? amount : 'все (ОЗУ 12+ Гб)'}</a>`).on('click', async () => {
    updateButton.click();
    await sleep(1000);
    var links = await getContestsLinks()
    if (links.length) {
      $(links).map((element, value) => {
        if (element <= amount) {
          var win = window.open(`https://lolz.guru/${value}`)
          win ? win.focus() : alert('Разрешите доступ к всплывающим окнам для этого сайта')
        } else {
          return;
        }
      })
    }
  });

  updateButton.length ? updateButton.parent().prepend(getContestsButton) : undefined;
}

async function onClickCategoryContestsHandler() {
  var categories = $('ol#forums.nodeList');
  var mainSection = $(categories).find('li.node.category.level_1');
  var giveaways = $(mainSection).find('ol.nodeList > li.list.node.node9.forum.level_2 > div.nodeInfo > ol.subForumList > li.node.node766.forum.level-n');
  $(giveaways).on('click', async () => {
    await sleep(1500);
    await regOpenContestsButton(10);
    await regOpenContestsButton(100);
  });
}


var MenuResult = registerMenuBtn(menuBtn);
var isDBInited = await initUniqueStyleDB().then(value => {return(value)}).catch(err => {console.error(err); return false});

await reloadNickStyle();

await sendMessageHandler();

await reloadBannerStyle();

await reloadUserBadges();

await messageClickUsernameHandler();

await commentMoreHandler();

await regOpenContestsButton(10);
await regOpenContestsButton(100);
await onClickCategoryContestsHandler()

if (MenuResult === true) {
  $(document).on('click', '#LZTUpSaveUniqueStyle', async function () {
    let nickStNew = $('#LZTUpUniqueStyle').val();
    if (nickStNew.length < 1501) {
      await updateUniqueStyleDB(nickSt = nickStNew, bannerSt = null, bannerTxt = null, badgeIcn = null, badgeTxt = null, badgeFll = null, badgeStrk = null).then(value => {return(value)}).catch(err => {console.error(err); return false});
    } else {
        alert('Стиль ника не должен превышать 1500 символов!')
        console.log('LZTUp: Не удалось сохранить стиль ника. Стиль ника не должен превышать 1500 символов!')
    }
    updateNickStyle(nickStNew);
  });

  $(document).on('click', '#LZTUpResetSettings', async function () {
    await deleteUniqueStylesDB();
    await initUniqueStyleDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
    alert('Настройки LZTUp сброшены. Рекомендуем обновить страницу');
  });

  $(document).on('click', '#LZTUpSaveBannerStyle', async function () {
    let bannerStNew = $('#LZTUpBannerStyle').val();
    if (bannerStNew.length < 1501) {
      await updateUniqueStyleDB(nickSt = null, bannerSt = bannerStNew, bannerTxt = null, badgeIcn = null, badgeTxt = null, badgeFll = null, badgeStrk = null).then(value => {return(value)}).catch(err => {console.error(err); return false});
    } else {
      alert('Стиль лычки не должен превышать 1500 символов!')
      console.log('LZTUp: Не удалось сохранить стиль лычки. Стиль лычки не должен превышать 1500 символов!')
    }
    await reloadBannerStyle();
  });

  $(document).on('click', '#LZTUpSaveBannerText', async function () {
    let bannerTxtNew = $('#LZTUpBannerText').val();
    if (bannerTxtNew.length < 25) {
      await updateUniqueStyleDB(nickSt = null, bannerSt = null, bannerTxt = bannerTxtNew, badgeIcn = null, badgeTxt = null, badgeFll = null, badgeStrk = null).then(value => {return(value)}).catch(err => {console.error(err); return false});
    } else {
      alert('Текст в лычке не должен превышать 24 символов!')
      console.log('LZTUp: Не удалось сохранить текст в лычке. Текст в лычке не должен превышать 24 символов!')
    }
    await forceReloadBannerStyle();
  });

  $(document).on('click', '#LZTUpSaveBadgeIcon', async function () {
    let badgeIconNew = $('#LZTUpBadgeIcon').val();
    if (badgeIconNew.length < 3001) {
      await updateUniqueStyleDB(nickSt = null, bannerSt = null, bannerTxt = null, badgeIcn = badgeIconNew, badgeTxt = null, badgeFll = null, badgeStrk = null).then(value => {return(value)}).catch(err => {console.error(err); return false});
    } else {
      alert('Иконка на аватарке не должен превышать 3000 символов!')
      console.log('LZTUp: Не удалось сохранить иконку на аватарке. Иконка на аватарке не должен превышать 3000 символов!')
    }
    await reloadUserBadges();
  });

  $(document).on('click', '#LZTUpSaveBadgeText', async function () {
    let badgeTxtNew = $('#LZTUpBadgeText').val();
    if (badgeTxtNew.length < 25) {
      await updateUniqueStyleDB(nickSt = null, bannerSt = null, bannerTxt = null, badgeIcn = null, badgeTxt = badgeTxtNew, badgeFll = null, badgeStrk = null).then(value => {return(value)}).catch(err => {console.error(err); return false});
    } else {
      alert('Текст в иконке аватарки не должен превышать 24 символов!')
      console.log('LZTUp: Не удалось сохранить текст в иконке аватарки. Текст в иконке аватарки не должен превышать 24 символов!')
    }
    await reloadUserBadges();
  });
}

var hasPageNav = $('.PageNav > nav > a')
var isProfile = $('ol#ProfilePostList')
if (hasPageNav.length > 0 && isProfile.length > 0) {
  var mutationObserver = new MutationObserver(async function(mutations) {
    mutations.forEach(async function(mutation) {
      if (mutation.target === $(isProfile)[0]) {
        await reloadNickStyle();
        await reloadBannerStyle();
        await reloadUserBadges();
      }
    });
  });

  mutationObserver.observe(document.documentElement, {
    attributes: true,
    childList: true,
    subtree: true,
    attributeOldValue: true,
  });
}