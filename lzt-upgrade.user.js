// ==UserScript==
// @name         LZT Upgrade
// @version      1.0.5
// @description  Some useful utilities for lolz.guru
// @author       Toil
// @match        *://*.lolz.guru/*
// @icon         https://lolz.guru/public/2017/og.png
// @resource     styles https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/css/style.css
// @resource     styles2 https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/css/nano.min.css
// @require      https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/static/js/pickr/pickr.es5.min.js
// @require      https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/static/js/lztupgrade/indexedDB/UniqueStyle.js
// @require      https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/static/js/lztupgrade/indexedDB/contests.js
// @require      https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/static/js/lztupgrade/indexedDB/users.js
// @require      https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/static/js/lztupgrade/indexedDB/appear.js
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

const getUserid = () => {
  return XenForo._csrfToken.split(',')[0]
}

const sleep = m => new Promise(r => setTimeout(r, m))

const menuBtn = $('<li><a id="LZTUpButton">LZT Upgrade</a></li>');

$(menuBtn).on('click', async function () {
  var dbData = await readUniqueStyleDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
  var contestsData = await readContestsDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
  var usersData = await readUsersDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
  var appearData = await readAppearDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
  var nickStyle = dbData.nickStyle || '';
  var bannerStyle = dbData.bannerStyle || '';
  var bannerText = dbData.bannerText || '';
  var badgeText = dbData.badgeText || '';
  var badgeIcon = dbData.badgeIcon || '';
  var badgeFill = dbData.badgeFill || '';
  var badgeStroke = dbData.badgeStroke || '';
  var contestsTen = contestsData.contestsTen || 0;
  var contestsAll = contestsData.contestsAll || 0;
  var contestsInfoTop = contestsData.contestsInfoTop || 0;
  var contestsBtnTopInBlock = contestsData.contestsBtnTopInBlock || 0;
  var contestsHideTags = contestsData.contestsHideTags || 0;
  var showUseridInProfile = usersData.showUseridInProfile || 0;
  var showFullRegInProfile = usersData.showFullRegInProfile || 0;
  var showComplaintBtnToProfile = usersData.showComplaintBtnToProfile || 0;
  var hideUnreadArticleCircle = appearData.hideUnreadArticleCircle || 0;
  var hideTagsInThreads = appearData.hideTagsInThreads || 0;

  const overlay = registerModal(
    'LZT Upgrade',
    `
    <ul class="tabs" id="LZTUpTabs">
      <li class="active" id="LZTUpTab">
        <span>Главная</span>
      </li>
      <li id="LZTUpTab">
        <span>Настройки</span>
      </li>
    </ul>
    <div id="LZTUpList" class="LZTUpMainList">
      <div id="LZTUpListItem" class="LZTUpUniqItem">
        <img alt="Image" id="LZTUpListIcon" src="https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/static/img/color.svg" loading=lazy>
        <span id="LZTUpListText">Локальный Уник</span>
      </div>
      <div id="LZTUpListItem" class="LZTUpContestsItem">
        <img alt="Image" id="LZTUpListIcon" src="https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/static/img/gift.svg" loading=lazy>
        <span id="LZTUpListText">Розыгрыши</span>
      </div>
      <div id="LZTUpListItem" class="LZTUpUsersItem">
        <img alt="Image" id="LZTUpListIcon" src="https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/static/img/user.svg" loading=lazy>
        <span id="LZTUpListText">Пользователи</span>
      </div>
      <div id="LZTUpListItem" class="LZTUpAppearItem">
        <img alt="Image" id="LZTUpListIcon" src="https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/static/img/color.svg" loading=lazy>
        <span id="LZTUpListText">Внешний вид</span>
      </div>
    </div>
    <div id="LZTUpList" class="LZTUpSettingsList">
      <div id="LZTUpListItem">
        <img alt="Image" id="LZTUpListIcon" src="https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/static/img/more.svg" loading=lazy>
        <span id="LZTUpListText">Lorem Ipsum</span>
      </div>
      <div id="LZTUpListItem">
        <img alt="Image" id="LZTUpListIcon" src="https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/static/img/more.svg" loading=lazy>
        <span id="LZTUpListText">Lorem Ipsum</span>
      </div>
      <div id="LZTUpListItem">
        <img alt="Image" id="LZTUpListIcon" src="https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/static/img/more.svg" loading=lazy>
        <span id="LZTUpListText">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.</span>
      </div>
    </div>
    <div id="LZTUpUniqContainer">
      <div id="LZTUpModalComment">
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

      <div id="LZTUpModalHeading" class="textHeading">Цвета иконки на аватарке:</div>
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

      <input id="LZTUpResetUniqueDB" type="button" value="Сбросить настройки" class="button primary"></input>
    </div>
    <div id="LZTUpContestsContainer">
      <div id="LZTUpModalChecksContainer">
        <input type="checkbox" name="open_ten" value="1" id="contests_open_ten" ${contestsTen === 1 ? "checked" : ''}>
        <label for="contests_open_ten">Кнопка "Открыть 10"</label>
      </div>
      <div id="LZTUpModalChecksContainer">
        <input type="checkbox" name="open_all" value="1" id="contests_open_all" ${contestsAll === 1 ? "checked" : ''}>
        <label for="contests_open_all">Кнопка "Открыть прогруженные"</label>
      </div>
      <div id="LZTUpModalChecksContainer">
        <input type="checkbox" name="info_top" value="1" id="contests_info_top" ${contestsInfoTop === 1 ? "checked" : ''}>
        <label for="contests_info_top">Отображение информации о розыгрыше сверху темы</label>
      </div>
      <div id="LZTUpModalChecksContainer">
        <input type="checkbox" name="btn_top_in_block" value="1" id="contests_btn_top_in_block" ${contestsBtnTopInBlock === 1 ? "checked" : ''}>
        <label for="contests_btn_top_in_block">Отображение кнопки "Участвовать" сверху блока с информацией о розыгрыше</label>
      </div>
      <div id="LZTUpModalChecksContainer">
        <input type="checkbox" name="hide_tags" value="1" id="contests_hide_tags" ${contestsHideTags === 1 ? "checked" : ''}>
        <label for="contests_hide_tags">Скрытие тегов в теме розыгрыша</label>
      </div>
      <input id="LZTUpResetContestsDB" type="button" value="Сбросить настройки" class="button primary"></input>
    </div>
    <div id="LZTUpUsersContainer">
      <div id="LZTUpModalChecksContainer">
        <input type="checkbox" name="open_ten" value="1" id="show_userid_in_profile" ${showUseridInProfile === 1 ? "checked" : ''}>
        <label for="show_userid_in_profile">Показывать UserID в профиле пользователя</label>
      </div>
      <div id="LZTUpModalChecksContainer">
        <input type="checkbox" name="open_all" value="1" id="show_fullreg_in_profile" ${showFullRegInProfile === 1 ? "checked" : ''}>
        <label for="show_fullreg_in_profile">Показывать полную дату регистрации в профиле пользователя</label>
      </div>
      <div id="LZTUpModalChecksContainer">
        <input type="checkbox" name="open_all" value="1" id="show_complaint_btn_in_profile" ${showComplaintBtnToProfile === 1 ? "checked" : ''}>
        <label for="show_complaint_btn_in_profile">Показывать кнопку "Подать жалобу" в профиле пользователя</label>
      </div>
      <input id="LZTUpResetUsersDB" type="button" value="Сбросить настройки" class="button primary"></input>
    </div>
    <div id="LZTUpAppearContainer">
      <div id="LZTUpModalChecksContainer">
        <input type="checkbox" name="hide_unread_article_circle" value="1" id="hide_unread_article_circle" ${hideUnreadArticleCircle === 1 ? "checked" : ''}>
        <label for="hide_unread_article_circle">Скрыть значок не прочитанных статей в шапке сайта</label>
      </div>
      <div id="LZTUpModalChecksContainer">
        <input type="checkbox" name="hide_tags_in_threads" value="1" id="hide_tags_in_threads" ${hideTagsInThreads === 1 ? "checked" : ''}>
        <label for="hide_tags_in_threads">Скрыть теги в темах</label>
      </div>
      <input id="LZTUpResetAppearDB" type="button" value="Сбросить настройки" class="button primary"></input>
    </div>
    `
  );

  var $LZTUpTabs = $('ul#LZTUpTabs');
  var $mainList = $('div.LZTUpMainList');
  var $settingsList = $('div.LZTUpSettingsList');
  var $uniqContainer = $('div#LZTUpUniqContainer');
  var $contestsContainer = $('div#LZTUpContestsContainer');
  var $usersContainer = $('div#LZTUpUsersContainer');
  var $appearContainer = $('div#LZTUpAppearContainer');
  $settingsList.hide();
  $contestsContainer.hide();
  $usersContainer.hide();
  $uniqContainer.hide();
  $appearContainer.hide();
  $('ul#LZTUpTabs').parent().css("white-space", "unset"); // fixes so big free space in overlay
  var $menuTab = $('#LZTUpTabs > #LZTUpTab');
  var $mainTab, $settingsTab;
  $menuTab.toArray().forEach(element => {
    $(element)[0].innerText === 'Настройки' ? $settingsTab = $(element) : $mainTab = $(element);
  });

  if ($menuTab.length) {
    $mainTab.on('click', () => {
      $($mainTab)[0].innerText === 'Главная' && !$mainTab.hasClass('active') ? (
        $settingsTab.removeClass('active'),
        $mainTab.addClass('active'),
        $settingsList.hide(),
        $mainList.show()
      ) : undefined;
    });

    $settingsTab.on('click', () => {
      $($settingsTab)[0].innerText === 'Настройки' && !$settingsTab.hasClass('active') ? (
        $mainTab.removeClass('active'),
        $settingsTab.addClass('active'),
        $mainList.hide(),
        $settingsList.show()
      ) : undefined;
    });

    $('div#LZTUpListItem.LZTUpUniqItem').on('click', async () => {
      removeElement($mainList)
      removeElement($LZTUpTabs)
      // $mainList.remove();
      // $LZTUpTabs.remove();
      $uniqContainer.show();

      const pickrFill = createColorPicker('.badge-fill-picker', overlay[0]);
      pickrFill.on('init', async (instance) => {
        instance.setColor(badgeFill === '' ? null : badgeFill);
        instance.on('save', async (color, instance) => {
          color !== null ? rgbaColor = color.toRGBA().toString(0) : rgbaColor = "";
          await updateUniqueStyleDB(null, null, null, null, null, rgbaColor, null).then(value => {return(value)}).catch(err => {console.error(err); return false});
          await setUniqIconColor(rgbaColor);
        });
      });

      const pickrStroke = createColorPicker('.badge-stroke-picker', overlay[0]);
      pickrStroke.on('init', async (instance) => {
        instance.setColor(badgeStroke === '' ? null : badgeStroke);
        instance.on('save', async (color, instance) => {
          color !== null ? rgbaColor = color.toRGBA().toString(0) : rgbaColor = "";
          await updateUniqueStyleDB(null, null, null, null, null, null, rgbaColor).then(value => {return(value)}).catch(err => {console.error(err); return false});
          await setUniqIconColor('', rgbaColor);
        });
      });
    });

    $('div#LZTUpListItem.LZTUpContestsItem').on('click', async () => {
      removeElement($mainList)
      removeElement($LZTUpTabs)
      $contestsContainer.show();
    });

    $('div#LZTUpListItem.LZTUpUsersItem').on('click', async () => {
      removeElement($mainList)
      removeElement($LZTUpTabs)
      $usersContainer.show();
    });

    $('div#LZTUpListItem.LZTUpAppearItem').on('click', async () => {
      removeElement($mainList)
      removeElement($LZTUpTabs)
      $appearContainer.show();
    });
  };
});

function createColorPicker(element, elementCont) {
  return Pickr.create({
    el: element,
    container: elementCont,
    theme: 'nano',
    default: '#ffffff',

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
}

async function registerMenuBtn(element) {
  var menuForAdd = $('#AccountMenu > ul:nth-child(1) > li:nth-child(10)');
  menuForAdd.after(element);
  return true;
}

function registerProfileBtn(element) {
  Array.from($('.secondaryContent > .button.block')).forEach(item => {
    if ($(item).text() === 'Редактировать') {
      var placeForAdd = $('.secondaryContent > .avatarScaler')
      placeForAdd.append(element);
      return true;
    }
  })
}

function removeElement(element) {
  if ($(element).length > 0) {
    $(element).remove();
  }
}

function registerModal(modalName, elementMain = '') {
  return XenForo.alert(elementMain, modalName, null, () => {
    console.log('LZTUp: Модальное окно закрыто')
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
      await updateUniqueStyles();
    })
  }

  var sendProfileButton = $('#ProfilePoster > .submitUnit > .button.primary');

  if (sendProfileButton.length > 0) {
    $(sendProfileButton).on('click', async function() {
      await sleep(850);
      await updateUniqueStyles();
    })
  }
}

function updateBannerStyle(style, text) {
  var bannerBtn = $(`<em style="${style}" class="userBanner wrapped" id="LZTUpCustomBanner" itemprop="title"> \
  <span class="before"></span> \
  <strong>${text}</strong> \
  <span class="after"></span>\
  </em>`);
  removeElement('#LZTUpCustomBanner');
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
        removeElement('#LZTUpCustomBanner');
      }
    }
  } catch (err) {
    console.error('LZTUp: Не удалось обновить стиль баннера ', err);
  }
}

function registerUserBadges(bannerStyle = '', badgeText = '', badgeIcon = '') {
  for(const el of $.merge($(`.avatarHolder > a.Av${getUserid()}m`), $(`.avatarHolder > a.Av${getUserid()}s`))) {
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
    if (typeof(dbData) === 'object' && dbData.badgeText !== '') {
      var isUserBadgesLoaded = $('#LZTUpUserBadges');
      if (isUserBadgesLoaded.length) {
        $(isUserBadgesLoaded).remove()
      }
      registerUserBadges(String(dbData.bannerStyle), String(dbData.badgeText), dbData.badgeIcon);
      await setUniqIconColor(dbData.badgeFill, dbData.badgeStroke)
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
          await updateUniqueStyles();
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
      await updateUniqueStyles();
    })
  }
}

async function setUniqIconColor(badgeFill = '', badgeStroke = '') {
  for(const el of $.merge($(`.avatarHolder > a.Av${getUserid()}m`), $(`.avatarHolder > a.Av${getUserid()}s`))) {
    const $avatarHolder = $(el).parent();
    var $userBadge = $avatarHolder.find('.avatarUserBadges > .avatarUserBadge');
    var $svg = $userBadge.find('.customUniqIcon > svg');
    if ($svg.length && (badgeFill !== '' || badgeStroke !== '')) {
      badgeFill !== '' ? $svg.attr('fill', badgeFill) : undefined;
      badgeStroke !== '' ? $svg.attr('stroke', badgeStroke) : undefined;
    }
  }
}

async function redactorSendHandler() {
  var element = $('iframe.redactor_textCtrl.redactor_SubmitOnEnter > html > body')
  element.addEventListener('keyup', async (e) => {
    if (e.ctrlKey && e.keyCode == 13) {
      await sleep(450);
      await updateUniqueStyles();
    }
  })
}

async function getContestsLinks() {
  var $latestsThreads = $('div.latestThreads');
  var $stickyThreads = $('div.stickyThreads');
  $stickyThreads.is(':visible') ? $latestsThreads.add($stickyThreads) : undefined;
  var links = $latestsThreads.find('div.discussionListItem--Wrapper')
  .find('a.listBlock.main')
  .toArray()
  .map(element => $(element).attr('href'));
  return links;
}

async function regOpenContestsBtn(amount = 10) {
  if (await isContestsNode()) {
    await removeOpenContestsBtn(amount);
    var updateButton = $('div.pageNavLinkGroup > div.linkGroup.SelectionCountContainer > span.UpdateFeedButton.UpdateFeedButtonIcon');
    var getContestsButton = $(`<a class="button" id="openContestsButton${XenForo.htmlspecialchars(amount)}">Открыть ${amount < 100 ? XenForo.htmlspecialchars(amount) : 'прогруженные'}</a>`).on('click', async () => {
      updateButton.click();
      await sleep(1000);
      var links = await getContestsLinks();
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
}

async function removeOpenContestsBtn(amount = 10) {
  if (await isContestsNode()) {
    var $oldOpenContestsButton = $(`#openContestsButton${XenForo.htmlspecialchars(amount)}`);
    $oldOpenContestsButton.length > 0 ? $oldOpenContestsButton.remove() : null;
  }
}

async function onClickCategoryContestsHandler() {
  var categories = $('ol#forums.nodeList');
  var mainSection = $(categories).find('li.node.category.level_1');
  var giveaways = $(mainSection).find('ol.nodeList > li.list.node.node9.forum.level_2 > div.nodeInfo > ol.subForumList > li.node.node766.forum.level-n');
  $(giveaways).on('click', async () => {
    await sleep(1500);
    await regOpenContestsBtn(10);
    await regOpenContestsBtn(100);
  });
}

async function updateUniqueStyles() {
  await reloadNickStyle();
  await reloadBannerStyle();
  await reloadUserBadges();
}

async function isContestThread() {
  var $contestsThreadBlock = $('div.contestThreadBlock');
  return $contestsThreadBlock.length > 0 ? true : false
}

async function isContestsNode() {
  var $contestsTitleBar = $('div.titleBar > h1');
  return ($contestsTitleBar.length > 0 && $contestsTitleBar.attr('title') === 'Розыгрыши') ? true : false
}

async function isContestThread() {
  var $contestsThreadBlock = $('div.contestThreadBlock');
  return $contestsThreadBlock.length > 0 ? true : false
}

async function isProfilePage() {
  var $ProfilePostList = $('ol#ProfilePostList');
  return $ProfilePostList.length > 0 ? true : false
}

async function contestThreadBlockMove(toTop = true) {
  if (await isContestThread()) {
    var $contestsThreadBlock = $('div.contestThreadBlock');
    var $messageContent = $('li.firstPost > div.messageInfo > div.messageContent > article > blockquote.messageText');
    if (toTop) {
      $contestsThreadBlock.after($messageContent);
      $contestsThreadBlock.css("border-top", "none").css("border-bottom", "1px solid rgb(45, 45, 45)");
    } else {
      $contestsThreadBlock.before($messageContent);
      $contestsThreadBlock.css("border-top", "1px solid rgb(45, 45, 45)").css("border-bottom", "none");
    }
  }
}

async function contestsBtnInBlockMove(toTop = true) {
  if (isContestThread()) {
    var $contestsThreadBlock = $('div.contestThreadBlock');
    var $participateButton = $contestsThreadBlock.find('a.LztContest--Participate');
    var contestEnded = $contestsThreadBlock.find('span.button.contestIsFinished').length > 0 ? true : false;

    if (!$participateButton.length > 0) {
      $participateButton = $contestsThreadBlock.find('span.LztContest--alreadyParticipating');
      if (!$participateButton.length > 0) {
        $participateButton = $contestsThreadBlock.find('span.button.contestIsFinished');
      }
      $contestCaptcha = undefined;
    } else {
      $contestCaptcha = $contestsThreadBlock.find('div.ContestCaptcha');
    }
    if (toTop) { // to top
      var $contestsInfoHeading = $contestsThreadBlock.find('div.textHeading');
      $participateButton.attr("style", "margin: 0 0 15px"); // fixes big interval between infoHeader and participateButton
      $contestsThreadBlock.css('padding', "0");
      $contestsInfoHeading.after($participateButton);
      $contestCaptcha === undefined ? null : $participateButton.after($contestCaptcha);
    } else { // to default (bottom)
      var marginToFind = (contestEnded === true) ? 'div.marginBlock:nth-child(7)' : 'div.marginBlock:nth-child(9)'
      var $lastMarginBlock = $contestsThreadBlock.find(marginToFind)
      $participateButton.attr("style", "margin: 15px 0 0");
      $contestsThreadBlock.css('padding', "5px");
      $lastMarginBlock.after($participateButton);
      $contestCaptcha === undefined ? null : $participateButton.before($contestCaptcha);
    }
  }
}

async function getProfileUserid() {
  if (await isProfilePage()) {
    var marketLink = $('div#page_info_wrap > div.profile_info > div.userContentLinks > a:nth-child(2)').attr('href');
    var userid = marketLink.replace('market/user/', '').replace('/items', '')
    return userid
  }
}

async function getProfileUrl() {
  if (await isProfilePage()) {
    var username = $('meta[property="og:url"]').attr('content');
    return username
  }
}

async function getProfileUsername() {
  if (await isProfilePage()) {
    var username = XenForo.htmlspecialchars($('meta[property="og:title"]').attr('content'));
    return username
  }
}

async function addUserIdInProfileInfo() {
  if (await isProfilePage()) {
    var userid = await getProfileUserid()
    var profileInfoRow1 = $('div#page_info_wrap > div.profile_info > div.pairsJustified > div.clear_fix:nth-child(1)')
    var row = `
    <div class="clear_fix profile_info_row" id="LZTUpUserIDRow">
      <div class="label fl_l">ID:</div>
      <div class="labeled">${userid}</div>
    </div>`
    profileInfoRow1.after(row)
  }
}

async function removeUserIdInProfileInfo() {
  if (await isProfilePage()) {
    var profileUserIdRow = $('div.clear_fix#LZTUpUserIDRow');
    profileUserIdRow.remove()
  }
}

async function editUserRegInProfileInfo(full = false) {
  if (await isProfilePage()) {
    var $DateTime = $('div#page_info_wrap > div.profile_info > div.pairsJustified > div.clear_fix:nth-child(1) > div.labeled > span.DateTime');
    var FullReg = $DateTime.attr('title');
    if (full) {
      $DateTime.text(FullReg);
    } else {
      var RegDate = $DateTime.attr('title').split('в');
      $DateTime.text(RegDate[0]);
    }
  }
}

async function showComplaintBtnToProfile() {
  if (await isProfilePage()) {
    var userid = await getProfileUserid();
    var localUserid = getUserid();
    if (userid !== localUserid) {
      var username = await getProfileUsername();
      var url = await getProfileUrl();
      var text = encodeURIComponent(`1. Никнейм нарушителя и ссылка на профиль: ${url}\n2. Краткое описание жалобы:\n3. Доказательства:`);
      var title = encodeURIComponent(`Жалоба на ${username}`);
      var btn = $(`<a class="OverlayTrigger followContainer button red full" href="forums/801/create-thread?title=${title}&message=${text}" id="LZTUpComplaintBtn">Подать жалобу</a>`);
      removeElement('#LZTUpComplaintBtn');
      var $arbBtn = $('div.secondaryContent > div.avatarScaler').parent();
      $arbBtn.append(btn);
    };
  };
};

async function changeVisibility(elem, isHidden = true) {
  if (elem.length > 0) {
    isHidden ? elem.hide() : elem.show();
  };
}

async function tagsVisibility(isHidden = true) {
  var $tagList = $('div.titleBar > div.tagBlock > ul.tagList');
  await changeVisibility($tagList, isHidden)
}

async function contestsTagsVisibility(isHidden = true) {
  if (isContestThread()) {
    await tagsVisibility(isHidden);
  };
}

async function unreadArticleCircleVisibility(isHidden = true) {
  $hasUnreadArticles = $('span.hasUnreadArticles')
  await changeVisibility($hasUnreadArticles, isHidden)
}


// script start
if (getUserid() === '') return; // superior auth check

var MenuResult = await registerMenuBtn(menuBtn);
var isUniqueDBInited = await initUniqueStyleDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
var isContestsDBInited = await initContestsDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
var isUsersDBInited = await initUsersDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
var isAppearDBInited = await initAppearDB().then(value => {return(value)}).catch(err => {console.error(err); return false});

if (isContestsDBInited) {
  var dbContestsData = await readContestsDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
  if (dbContestsData.contestsTen === 1 || dbContestsData.contestsAll === 1) {
    await onClickCategoryContestsHandler();
    dbContestsData.contestsTen === 1 ? await regOpenContestsBtn(10) : null;
    dbContestsData.contestsAll === 1 ? await regOpenContestsBtn(100) : null;
  }
  dbContestsData.contestsInfoTop === 1 ? await contestThreadBlockMove(true) : null;
  dbContestsData.contestsBtnTopInBlock === 1 ? await contestsBtnInBlockMove(true) : null;
  dbContestsData.contestsHideTags === 1 ? await contestsTagsVisibility(true) : null;
}

if (isUsersDBInited) {
  var dbUsersData = await readUsersDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
  dbUsersData.showUseridInProfile === 1 ? await addUserIdInProfileInfo() : null;
  dbUsersData.showFullRegInProfile === 1 ? await editUserRegInProfileInfo(true) : null;
  dbUsersData.showСomplaintBtnInProfile === 1 ? await showComplaintBtnToProfile() : null;
}

if (isAppearDBInited) {
  var dbAppearData = await readAppearDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
  dbAppearData.hideUnreadArticleCircle === 1 ? await unreadArticleCircleVisibility(true) : null;
  dbAppearData.hideTagsInThreads === 1 ? await tagsVisibility(true) : null;
}

await updateUniqueStyles();

await sendMessageHandler();

await messageClickUsernameHandler();

await commentMoreHandler();

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

  $(document).on('click', '#LZTUpResetUniqueDB', async function () {
    await deleteUniqueStylesDB();
    await initUniqueStyleDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
    alert('Кастомные стили сброшены. Рекомендуем обновить страницу');
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

  $(document).on('click', '#LZTUpResetContestsDB', async function () {
    await deleteContestsDB();
    await initContestsDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
    alert('Настройки розыгрышей LZT Upgrade сброшены');
    await sleep(500);
    window.location.reload();
  });

  $(document).on('click', '#contests_open_ten', async function () {
    $('#contests_open_ten')[0].checked ? (
      await updateContestsDB(1),
      await regOpenContestsBtn(10)
      ): (
        await updateContestsDB(0),
        await removeOpenContestsBtn(10)
      );
  });

  $(document).on('click', '#contests_open_all', async function () {
    $('#contests_open_all')[0].checked ? (
      await updateContestsDB(null, 1),
      await regOpenContestsBtn(100)
      ): (
        await updateContestsDB(null, 0),
        await removeOpenContestsBtn(100)
      );
  });

  $(document).on('click', '#contests_info_top', async function () {
    $('#contests_info_top')[0].checked ? (
      await updateContestsDB(null, null, 1),
      await contestThreadBlockMove(true)
      ): (
        await updateContestsDB(null, null, 0),
        await contestThreadBlockMove(false)
      );
  });

  $(document).on('click', '#contests_btn_top_in_block', async function () {
    $('#contests_btn_top_in_block')[0].checked ? (
      await updateContestsDB(null, null, null, 1),
      await contestsBtnInBlockMove(true)
      ): (
        await updateContestsDB(null, null, null, 0),
        await contestsBtnInBlockMove(false)
      );
  });

  $(document).on('click', '#contests_hide_tags', async function () {
    $('#contests_hide_tags')[0].checked ? (
      await updateContestsDB(null, null, null, null, 1),
      await contestsTagsVisibility(true)
      ): (
        await updateContestsDB(null, null, null, null, 0),
        await contestsTagsVisibility(false)
      );
  });

  $(document).on('click', '#LZTUpResetUsersDB', async function () {
    await deleteUsersDB();
    await initUsersDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
    alert('Настройки пользователей LZT Upgrade сброшены');
    await sleep(500);
    window.location.reload();
  });

  $(document).on('click', '#show_userid_in_profile', async function () {
    $('#show_userid_in_profile')[0].checked ? (
      await updateUsersDB(1),
      await addUserIdInProfileInfo()
      ): (
        await updateUsersDB(0),
        await removeUserIdInProfileInfo()
      );
  });

  $(document).on('click', '#show_fullreg_in_profile', async function () {
    $('#show_fullreg_in_profile')[0].checked ? (
      await updateUsersDB(null, 1),
      await editUserRegInProfileInfo(true)
      ): (
        await updateUsersDB(null, 0),
        await editUserRegInProfileInfo(false)
      );
  });

  $(document).on('click', '#show_complaint_btn_in_profile', async function () {
    $('#show_complaint_btn_in_profile')[0].checked ? (
      await updateUsersDB(null, null, 1),
      await showComplaintBtnToProfile()
      ): (
        await updateUsersDB(null, null, 0),
        removeElement('#LZTUpComplaintBtn')
      );
  });

  $(document).on('click', '#LZTUpResetAppearDB', async function () {
    await deleteAppearDB();
    await initAppearDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
    alert('Настройки "Внешнего вида" LZT Upgrade сброшены');
    await sleep(500);
    window.location.reload();
  });

  $(document).on('click', '#hide_unread_article_circle', async function () {
    $('#hide_unread_article_circle')[0].checked ? (
      await updateAppearDB(1),
      await unreadArticleCircleVisibility(true)
      ): (
        await updateAppearDB(0),
        await unreadArticleCircleVisibility(false)
      );
  });

  $(document).on('click', '#hide_tags_in_threads', async function () {
    $('#hide_tags_in_threads')[0].checked ? (
      await updateAppearDB(1),
      await tagsVisibility(true)
      ): (
        await updateAppearDB(0),
        await tagsVisibility(false)
      );
  });
}

var hasPageNav = $('.PageNav > nav > a')
var isProfile = $('ol#ProfilePostList')
if (hasPageNav.length > 0 && isProfile.length > 0) {
  var mutationObserver = new MutationObserver(async function(mutations) {
    mutations.forEach(async function(mutation) {
      if (mutation.target === $(isProfile)[0]) {
        await updateUniqueStyles();
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