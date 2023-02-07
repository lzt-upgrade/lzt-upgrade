// ==UserScript==
// @name         LZT Upgrade
// @version      1.0.17
// @description  Some useful utilities for Lolzteam
// @description:ru  Полезные улучшения для Lolzteam
// @icon         https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/static/img/lzt-upgrade-mini.png
// @author       Toil
// @license      MIT
// @namespace    lztupgrade
// @match        *://*.lolz.guru/*
// @match        *://*.lolz.live/*
// @match        *://*.zelenka.guru/*
// @match        *://*.lzt.market/*
// @match        *://*.lolz.market/*
// @connect      lztupgrade.toiloff.ru
// @grant        GM_getResourceText
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest 
// @resource     styles https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/css/style.css
// @resource     nano https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/css/nano.min.css
// @require      https://cdn.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min.js
// @require      https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/static/js/pickr/pickr.es5.min.js
// @require      https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/static/js/lztupgrade/indexedDB/UniqueStyle.js
// @require      https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/static/js/lztupgrade/indexedDB/contests.js
// @require      https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/static/js/lztupgrade/indexedDB/users.js
// @require      https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/static/js/lztupgrade/indexedDB/appear.js
// @require      https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/static/js/lztupgrade/api/themes.js
// @updateURL    https://github.com/ilyhalight/lzt-upgrade/raw/master/lzt-upgrade.user.js
// @downloadURL  https://github.com/ilyhalight/lzt-upgrade/raw/master/lzt-upgrade.user.js
// @supportURL   https://github.com/ilyhalight/lzt-upgrade/issues
// @homepageURL  https://github.com/ilyhalight/lzt-upgrade
// @run-at       document-start
// ==/UserScript==

(async function() {
  let SCRIPT_STATUS = false;
  const api_endpoints = {
    'getThemes': 'https://lztupgrade.toiloff.ru/api/themes',
    'getLogos': 'https://lztupgrade.toiloff.ru/api/logos',
    'getLogoByUID': 'https://lztupgrade.toiloff.ru/api/logo',
  }

  if (typeof GM_addStyle === 'undefined') {
    GM_addStyle = (aCss) => {
      'use strict';
      let head = document.getElementsByTagName('head')[0];
      if (head) {
        let style = document.createElement('style');
        style.setAttribute('type', 'text/css');
        style.textContent = aCss;
        head.appendChild(style);
        return style;
      }
      return null;
    };
  };

  if (typeof GM_getResourceText === 'undefined') {
    fetch('https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/css/style.css')
    .then((response) => response.text().then(styles => GM_addStyle(styles)));
    fetch('https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/css/nano.min.css')
    .then((response) => response.text().then(nano => GM_addStyle(nano)));
  } else {
    const styles = GM_getResourceText("styles");
    const nano = GM_getResourceText("nano");
    GM_addStyle(styles);
    GM_addStyle(nano);
  }

  let isUniqueDBInited = await initUniqueStyleDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
  let isContestsDBInited = await initContestsDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
  let isUsersDBInited = await initUsersDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
  let isAppearDBInited = await initAppearDB().then(value => {return(value)}).catch(err => {console.error(err); return false});

  if (isAppearDBInited) {
    var dbAppearData = await readAppearDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
    if (dbAppearData.theme > 0) {
      $.ajax({
        url: api_endpoints['getThemes'],
        dataType: 'json',
        success: (value) => {
          if (value && value.length) {
            value.forEach(async(theme) => {
              if (theme.active === 1 && theme.uid === dbAppearData.theme) {
                  await loadTheme(theme.file);
              };
            });
          };
        },
        error: (err) => console.log('LZT Upgrade: Не удалось получить список тем ', err)
      });
    }
  }

  const SCRIPT_LOADER = setInterval(async () => {
    if ($('body').length) {
      if (!SCRIPT_STATUS) {
        console.log('LZT Upgrade: Пытаемся запустить скрипт...');
        START_SCRIPT();
      } else if ($('#LZTUpButton').length){
        console.log('LZT Upgrade: Скрипт уже запущен. Удаление проверки на запуск...');
        clearInterval(SCRIPT_LOADER);
      } else {
        console.log('LZT Upgrade: Скрипт не был запущен. Повторяем попытку...');
        START_SCRIPT();
      }
    } else {
      console.log('LZT Upgrade: Скрипт не был запущен. Ожидание загрузки страницы...');
    }
  }, 5)

  const START_SCRIPT = async () => {
    console.log('LZT Upgrade: Скрипт был запущен');
    SCRIPT_STATUS = true;
    // Error page
    if (/^(Error\s[0-9]{3}|Site\sMaintenance)$/.test($('head title').text())) {
      let body = $('body');
      body.attr('id', 'LZTUPErrorPage');
      body.find('article > div').append('<img src="https://i.imgur.com/iVmKDr7.gif" alt="utya_duck_rain" loading="lazy">')
      return;
    }

    function getHeight() {
      let height = Math.max( document.body.scrollHeight, document.body.offsetHeight,
        document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
      console.log('Page height: ' + height);
      return height;
    }

    let heightOnLoad;

    const blockAds = '(Native/\\.NET файлов|threads\\/|easyliker\\.ru|niccord\\.ru|vpromotions\\.ru|skysmm\\.ru|VerifTeam|SmmPanelUS\\.com|t\\.me/lztnext|axxishop\\.ru|LIGHTSHOP\\.SU)';

    const username = $('.accountUsername span').text();

    const getUserid = () => {
      return XenForo._csrfToken.split(',')[0]
    }

    const sleep = m => new Promise(r => setTimeout(r, m))

    const menuBtn = $('<li><a id="LZTUpButton">LZT Upgrade</a></li>');

    const reportButtonsList = [
      {
        id: 1,
        name: 'Оффтоп',
        alternativeName: '1.1',
        reason: 'Флуд / Оффтоп / Спам / Бесполезная тема'
      },
      {
        id: 2,
        name: 'Раздел',
        alternativeName: '2.12',
        reason: 'Создание темы не в соответствующем разделе'
      },
      {
        id: 3,
        name: 'Оформление',
        alternativeName: '3.2',
        reason: 'Неправильное оформление темы'
      },
    ]

    function validateAuthors(authorID, authorName) {
      if (typeof (authorID) === 'string') {
        if (authorID.includes(',') && authorName.includes(',')) {
          let authorIDArray = authorID.split(',');
          let authorNameArray = authorName.split(',');
          let res = '';
          for (i = 0; i < authorIDArray.length; i++) {
            res += `<a href="https://${window.location.hostname}/members/${authorIDArray[i]}">${XenForo.htmlspecialchars(authorNameArray[i])}</a>${i === authorIDArray.length - 1 ? '' : ', '}`;
          }
          return res;
        } else {
          return `<a href="https://${window.location.hostname}/members/${authorID}">${XenForo.htmlspecialchars(authorName)}</a>`;
        }
      } else if (typeof (authorID) === 'number') {
        return `<a href="https://${window.location.hostname}/members/${authorID}">${XenForo.htmlspecialchars(authorName)}</a>`;
      } else {
        return `${XenForo.htmlspecialchars(authorName)}`;
      }
    }

    $(menuBtn).on('click', async function () {
      var uniqueData = await readUniqueStyleDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
      var contestsData = await readContestsDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
      var usersData = await readUsersDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
      var appearData = await readAppearDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
      var nickStyle = uniqueData.nickStyle;
      var bannerStyle = uniqueData.bannerStyle;
      var bannerText = uniqueData.bannerText;
      var badgeText = uniqueData.badgeText;
      var badgeIcon = uniqueData.badgeIcon;
      var badgeFill = uniqueData.badgeFill;
      var badgeStroke = uniqueData.badgeStroke;
      var contestsTen = contestsData.contestsTen;
      var contestsAll = contestsData.contestsAll;
      var contestsInfoTop = contestsData.contestsInfoTop;
      var contestsBtnTopInBlock = contestsData.contestsBtnTopInBlock;
      var contestsHideTags = contestsData.contestsHideTags;
      var contestsAutoClose = contestsData.contestsAutoClose;
      var contestsRmContent = contestsData.contestsRmContent;
      var showUseridInProfile = usersData.showUseridInProfile;
      var showFullRegInProfile = usersData.showFullRegInProfile;
      var hideUnreadArticleCircle = appearData.hideUnreadArticleCircle;
      var hideTagsInThreads = appearData.hideTagsInThreads;
      var forumLogo = appearData.forumLogo;
      var marketLogo = appearData.marketLogo;
      var hideCounterAlerts = appearData.hideCounterAlerts;
      var hideCounterConversations = appearData.hideCounterConversations;
      var reportButtonsInPost = appearData.reportButtonsInPost;
      var themeID = appearData.theme;
      var themeAutoReload = appearData.themeAutoReload;
      var backgroundEffect = appearData.backgroundEffect;
      var hideOnlyfans = appearData.hideOnlyfans;
      var showPollsResults = appearData.showPollsResults;

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
            <i id="LZTUpIcon" class="far fa-palette"></i>
            <div>
              <span id="LZTUpText">Локальный Уник</span>
              <span id="LZTUpSubText">Представь, можно не платить...</span>
            </div>
          </div>
          <div id="LZTUpListItem" class="LZTUpContestsItem">
            <i id="LZTUpIcon" class="far fa-gift"></i>
            <div>
              <span id="LZTUpText">Розыгрыши</span>
              <span id="LZTUpSubText">Комфорт для розыгрышей</span>
            </div>
          </div>
          <div id="LZTUpListItem" class="LZTUpUsersItem">
            <i id="LZTUpIcon" class="far fa-user"></i>
            <div>
              <span id="LZTUpText">Пользователи</span>
              <span id="LZTUpSubText">Штучки для пользователей</span>
            </div>
          </div>
          <div id="LZTUpListItem" class="LZTUpAppearItem">
            <i id="LZTUpIcon" class="far fa-drafting-compass"></i>
            <div>
              <span id="LZTUpText">Внешний вид</span>
              <span id="LZTUpSubText">Темы, логотипы и другое</span>
            </div>
          </div>
        </div>
        <div id="LZTUpList" class="LZTUpSettingsList">
          <div id="LZTUpListItem" class="LZTUpSettingsItem">
            <i id="LZTUpIcon" class="far fa-cog"></i>
            <div>
              <span id="LZTUpText">Настройки</span>
              <span id="LZTUpSubText">Настройки расширения</span>
            </div>
          </div>
          <div id="LZTUpListItem">
            <i id="LZTUpIcon" class="far fa-ellipsis-h"></i>
            <div>
              <span id="LZTUpText">Lorem</span>
              <span id="LZTUpSubText">lorem ipsum</span>
            </div>
          </div>
          <div id="LZTUpListItem">
            <i id="LZTUpIcon" class="far fa-ellipsis-h"></i>
            <div>
              <span id="LZTUpText">Lorem</span>
              <span id="LZTUpSubText">lorem ipsum</span>
            </div>
          </div>
        </div>
        <div id="LZTUpUniqContainer" class="LZTUpSubMenu">
          <div id="LZTUpModalComment">
            На этой странице можно выбрать стиль вашего ника и лычки. Этот стиль виден только вам. После <a href="https://lolz.guru/account/upgrades?upgrade_id=14" target="_blank">покупки</a> настоящего уника его увидят все.
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
            <input id="LZTUpBannerText" name="banner_text" maxlength="24" class="textCtrl" value="${XenForo.htmlspecialchars(bannerText)}">
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
            <input id="LZTUpBadgeText" name="badge_text" maxlength="24" class="textCtrl" value="${XenForo.htmlspecialchars(badgeText)}">
            <input id="LZTUpSaveBadgeText" type="button" value="Сохранить" class="button primary"></input>
          </nobr>

          <input id="LZTUpResetUniqueDB" type="button" value="Сбросить настройки" class="button primary"></input>
        </div>
        <div id="LZTUpContestsContainer" class="LZTUpSubMenu">
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
            <label for="contests_info_top">Отображение информации о розыгрыше вверху темы</label>
          </div>
          <div id="LZTUpModalChecksContainer">
            <input type="checkbox" name="btn_top_in_block" value="1" id="contests_btn_top_in_block" ${contestsBtnTopInBlock === 1 ? "checked" : ''}>
            <label for="contests_btn_top_in_block">Отображение кнопки "Участвовать" выше блока с информацией о розыгрыше</label>
          </div>
          <div id="LZTUpModalChecksContainer">
            <input type="checkbox" name="hide_tags" value="1" id="contests_hide_tags" ${contestsHideTags === 1 ? "checked" : ''}>
            <label for="contests_hide_tags">Скрытие тегов в теме розыгрыша</label>
          </div>
          <div id="LZTUpModalChecksContainer">
            <input type="checkbox" name="auto_close" value="1" id="contests_auto_close" ${contestsAutoClose === 1 ? "checked" : ''}>
            <label for="contests_auto_close">Автозакрытие страницы при нажатие на кнопку "Участвовать"</label>
          </div>
          <div id="LZTUpModalChecksContainer">
            <input type="checkbox" name="rm_content" value="1" id="contests_rm_content" ${contestsRmContent === 1 ? "checked" : ''}>
            <label for="contests_rm_content">Скрытие содержимого и голосований в теме розыгрыша</label>
          </div>
          <input id="LZTUpResetContestsDB" type="button" value="Сбросить настройки" class="button primary"></input>
        </div>
        <div id="LZTUpUsersContainer" class="LZTUpSubMenu">
          <div id="LZTUpModalChecksContainer">
            <input type="checkbox" name="open_ten" value="1" id="show_userid_in_profile" ${showUseridInProfile === 1 ? "checked" : ''}>
            <label for="show_userid_in_profile">Показывать UserID в профиле пользователя</label>
          </div>
          <div id="LZTUpModalChecksContainer">
            <input type="checkbox" name="open_all" value="1" id="show_fullreg_in_profile" ${showFullRegInProfile === 1 ? "checked" : ''}>
            <label for="show_fullreg_in_profile">Показывать полную дату регистрации в профиле пользователя</label>
          </div>
          <input id="LZTUpResetUsersDB" type="button" value="Сбросить настройки" class="button primary"></input>
        </div>
        <div id="LZTUpAppearContainer" class="LZTUpSubMenu">
          <div id="LZTUpLogoSection" class="LZTUpModalSection">
            <div class="LZTUpModalSectionContent">
              <i id="LZTUpIcon" class="far fa-comments"></i>
              <div class="LZTUpModalSectionTexts">
                <span id="LZTUpText">Логотип</span>
                <span id="LZTUpSubText">Выберите логотип для форума из списка</span>
              </div>
              <i id="LZTUpIcon" class="far fa-angle-right gray right"></i>
            </div>
          </div>
          <div id="LZTUpMarketLogoSection" class="LZTUpModalSection">
            <div class="LZTUpModalSectionContent">
              <i id="LZTUpIcon" class="far fa-shopping-cart"></i>
              <div class="LZTUpModalSectionTexts">
                <span id="LZTUpText">Логотип маркета</span>
                <span id="LZTUpSubText">Выберите логотип для маркета из списка</span>
              </div>
              <i id="LZTUpIcon" class="far fa-angle-right gray right"></i>
            </div>
          </div>
          <div id="LZTUpThemesSection" class="LZTUpModalSection">
            <div class="LZTUpModalSectionContent">
              <i id="LZTUpIcon" class="far fa-paint-brush"></i>
              <div class="LZTUpModalSectionTexts">
                <span id="LZTUpText">Менеджер тем</span>
                <span id="LZTUpSubText">Выберите тему для форума из списка</span>
              </div>
              <i id="LZTUpIcon" class="far fa-angle-right gray right"></i>
            </div>
          </div>
          <div id="LZTUpModalChecksContainer">
            <input type="checkbox" name="hide_unread_article_circle" value="1" id="hide_unread_article_circle" ${hideUnreadArticleCircle === 1 ? "checked" : ''}>
            <label for="hide_unread_article_circle">Скрыть значок непрочитанных статей в шапке сайта</label>
          </div>
          <div id="LZTUpModalChecksContainer">
            <input type="checkbox" name="hide_tags_in_threads" value="1" id="hide_tags_in_threads" ${hideTagsInThreads === 1 ? "checked" : ''}>
            <label for="hide_tags_in_threads">Скрыть теги в темах</label>
          </div>
          <div id="LZTUpModalChecksContainer">
            <input type="checkbox" name="hide_counter_alerts" value="1" id="hide_counter_alerts" ${hideCounterAlerts === 1 ? "checked" : ''}>
            <label for="hide_counter_alerts">Скрыть счётчик уведомлений в навбаре</label>
          </div>
          <div id="LZTUpModalChecksContainer">
            <input type="checkbox" name="hide_counter_conversations" value="1" id="hide_counter_conversations" ${hideCounterConversations === 1 ? "checked" : ''}>
            <label for="hide_counter_conversations">Скрыть счётчик сообщений в навбаре</label>
          </div>
          <div id="LZTUpModalChecksContainer">
            <input type="checkbox" name="enable_background_effect" value="1" id="enable_background_effect" ${backgroundEffect === 1 ? "checked" : ''}>
            <label for="enable_background_effect">Включить снег (by <a href="/members/576497/" class="muted">Karasu_</a>)</label>
          </div>
          <div id="LZTUpModalChecksContainer">
            <input type="checkbox" name="hide_onlyfans" value="1" id="hide_onlyfans" ${hideOnlyfans === 1 ? "checked" : ''}>
            <label for="hide_onlyfans">
              Спрятать все темы с тегом Onlyfans
              <span class="fa fa-exclamation-triangle Tooltip" title="При включение/отключение этой функции страница будет перезагружена"></span>
            </label>
          </div>
          <div id="LZTUpModalChecksContainer">
            <input type="checkbox" name="show_polls_results" value="1" id="show_polls_results" ${showPollsResults === 1 ? "checked" : ''}>
            <label for="show_polls_results">
              Показывать результаты голосований
              <span class="fa fa-exclamation-triangle Tooltip" title="Доступно, только, в голосованиях, в которых разрешено видеть результаты заранее"></span>
            </label>
          </div>
          <div id="LZTUpModalReportButtonsContainer">
            <div class="bold title">Кнопки быстрого репорта в посте:</div>
            <ul>
            </ul>
          </div>
          <input id="LZTUpResetAppearDB" type="button" value="Сбросить настройки" class="button primary"></input>
        </div>
        <div id="LZTUpLogoSubContainer" class="LZTUpSubMenu">
          <div id="LZTUpModalCell">
            <div class="bold title">Логотип:</div>
            <div class="LZTUpModalMesh" id="LZTUpModalLogosContainer">
              <div class="LZTUpModalMeshItem ${forumLogo === 0 ? 'active' : ''}" id="set_default_logo" data-checked="${forumLogo === 0 ? 'true' : 'false'}">
                <img src="https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/static/img/logos/forum/default.svg" alt="logo">
                <span class="LZTUpModalMeshItemName" data-shortname="default">По умолчанию</span>
                <span class="LZTUpModalMeshItemAuthor">Lolzteam</span>
              </div>
            </div>
          </div>
        </div>
        <div id="LZTUpMarketLogoSubContainer" class="LZTUpSubMenu">
          <div id="LZTUpModalCell">
            <div class="bold title">Логотип маркета:</div>
            <div class="LZTUpModalMesh" id="LZTUpModalMarketLogosContainer">
              <div class="LZTUpModalMeshItem ${marketLogo === 0 ? 'active' : ''}" id="set_default_marketlogo" data-checked="${marketLogo === 0 ? 'true' : 'false'}">
                <img src="https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/static/img/logos/market/default.svg" alt="logo">
                <span class="LZTUpModalMeshItemName" data-shortname="default">По умолчанию</span>
                <span class="LZTUpModalMeshItemAuthor">Lolzteam</span>
              </div>
            </div>
          </div>
        </div>
        <div id="LZTUpThemesSubContainer" class="LZTUpSubMenu">
          <div id="LZTUpModalCell">
            <div id="LZTUpModalChecksContainer">
              <input type="checkbox" name="theme_auto_reload" value="1" id="theme_auto_reload" ${themeAutoReload === 1 ? "checked" : ''}>
              <label for="theme_auto_reload">
                Автоматически обновлять страницу после смены темы
                <span class="fa fa-exclamation-triangle Tooltip" title="При включение/отключение этой функции страница будет перезагружена"></span>
              </label>
            </div>
            <div id="LZTUpModalCell">
              <div class="bold title">Темы:</div>
              <div class="LZTUpModalMesh" id="LZTUpModalThemesContainer">
                <div class="LZTUpModalMeshItem theme ${themeID === 0 ? 'active' : 'none'}" id="set_default_theme" data-checked="${themeID === 0 ? 'true' : 'false'}">
                  <span class="LZTUpModalMeshItemName" data-shortname="default">Обычная</span>
                  <span class="LZTUpModalMeshItemAuthor">Lolzteam</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="LZTUpSettingsContainer" class="LZTUpSubMenu">
          <div id="LZTUpIconButton" class="LZTUpSaveSettings">
            <i id="LZTUpIcon" class="far fa-file-download"></i>
            <span id="LZTUpText">Сохранить настройки в файл</span>
          </div>
          <div id="LZTUpIconButton" class="LZTUpUploadSettings">
            <i id="LZTUpIcon" class="far fa-upload"></i>
            <span id="LZTUpText">Загрузить настройки из файла</span>
          </div>
        </div>
        `
      );

      const lztUpgradeModalMain = $('#LZTUpList').parent().parent();
      const lztUpgradeMainTitle = lztUpgradeModalMain.find('h2.heading');
      lztUpgradeMainTitle.attr('id', 'LZTUpModalMainTitle');

      async function setValueInMesh(target, container) {
        let containerChildrens = $(container).children();
        $(containerChildrens).attr('data-checked', 'false');
        $(containerChildrens).removeClass('active');
        let currentElement = $(target)[0].tagName.toLowerCase() === 'div' ? $(target) : $(target).parent();
        $(currentElement).attr('data-checked', 'true');
        $(currentElement).addClass('active');
      }
      
      function setDefaultInMesh(container) {
        let $logoSelect = $(container);
        if ($logoSelect.length === 1) {
          $logoSelect.children().addClass('active');
        }
      }

      // Загрузка логотипов форума
      $.ajax({
        url: api_endpoints['getLogos'],
        dataType: 'json',
        data: {
          target: 1,
        },
        success: (value) => {
          if (value && value.length) {
            let $logoSelect = $('#LZTUpModalLogosContainer');
            value.forEach((logo) => {
              if (logo.active === 1) {
                let authorElem = validateAuthors(logo.author_userid, logo.author);
                let shortName = logo.name.replace(/ /g, '_').toLowerCase();
                $logoSelect.append(`
                <div class="LZTUpModalMeshItem ${forumLogo === logo.uid ? 'active' : ''}" id="set_${shortName}_logo" data-checked="${forumLogo === logo.uid ? 'true' : 'false'}">
                  <img src="${logo.preview}" alt="logo">
                  <span class="LZTUpModalMeshItemName" data-shortname="${shortName}">${XenForo.htmlspecialchars(logo.name)}</span>
                  <span class="LZTUpModalMeshItemAuthor">${authorElem}</span>
                </div>`);
                $(document).on('click', `#set_${shortName}_logo`, async function (event) {
                  await setValueInMesh(event.target, '#LZTUpModalLogosContainer');
                  await updateAppearDB({forumLogo: logo.uid});
                  updateSiteLogo('main', logo.css);
                });
              }
            });
          }
        },
        error: (err) => {
          setDefaultInMesh('#LZTUpModalLogosContainer');
          console.log('LZT Upgrade: Не удалось получить список логотипов форума ', err)
        }
      });

      $(document).on('click', `#set_default_logo`, async function (event) {
        await setValueInMesh(event.target, '#LZTUpModalLogosContainer');
        await updateAppearDB({forumLogo: 0});
        updateSiteLogo('main', null);
      });

      // Загрузка логотипов маркета
      $.ajax({
        url: api_endpoints['getLogos'],
        dataType: 'json',
        data: {
          target: 2,
        },
        success: (value) => {
          if (value && value.length) {
            let $logoSelect = $('#LZTUpModalMarketLogosContainer');
            value.forEach((logo) => {
              if (logo.active === 1) {
                let authorElem = validateAuthors(logo.author_userid, logo.author);
                let shortName = logo.name.replace(/ /g, '_').toLowerCase();
                $logoSelect.append(`
                <div class="LZTUpModalMeshItem ${marketLogo === logo.uid ? 'active' : ''}" id="set_${shortName}_marketlogo" data-checked="${marketLogo === logo.uid ? 'true' : 'false'}">
                  <img src="${logo.preview}" alt="logo">
                  <span class="LZTUpModalMeshItemName" data-shortname="${shortName}">${XenForo.htmlspecialchars(logo.name)}</span>
                  <span class="LZTUpModalMeshItemAuthor">${authorElem}</span>
                </div>`);
                $(document).on('click', `#set_${shortName}_marketlogo`, async function (event) {
                  await setValueInMesh(event.target, '#LZTUpModalMarketLogosContainer');
                  await updateAppearDB({marketLogo: logo.uid});
                  updateSiteLogo('market', logo.css);
                });
              }
            });
          };
        },
        error: (err) => {
          setDefaultInMesh('#LZTUpModalMarketLogosContainer');
          console.log('LZT Upgrade: Не удалось получить список логотипов маркета ', err)
        }
      });

      $(document).on('click', `#set_default_marketlogo`, async function (event) {
        await setValueInMesh(event.target, '#LZTUpModalMarketLogosContainer');
        await updateAppearDB({marketLogo: 0});
        updateSiteLogo('market', null);
      });

      // Загрузка тем
      $.ajax({
        url: api_endpoints['getThemes'],
        dataType: 'json',
        success: (value) => {
          if (value && value.length) {
            let $themeSelect = $('#LZTUpModalThemesContainer');
            value.forEach((theme) => {
              if (theme.active === 1) {
                let authorElem = validateAuthors(theme.author_userid, theme.author);
                let shortName = theme.name.replace(/ /g, '_').toLowerCase();
                $themeSelect.append(`
                <div class="LZTUpModalMeshItem theme ${themeID === theme.uid ? "active" : ''}" id="set_${shortName}_theme" data-checked="${themeID === theme.uid ? "true" : 'false'}" style="background:${theme.accent_color}">
                  <span class="LZTUpModalMeshItemName" data-shortname="${shortName}" style="color:${theme.text_color}">${XenForo.htmlspecialchars(theme.name)}</span>
                  <span class="LZTUpModalMeshItemAuthor">${authorElem}</span>
                </div>`);
                $(document).on('click', `#set_${shortName}_theme`, async function (event) {
                  await setValueInMesh(event.target, '#LZTUpModalThemesContainer');
                  await updateAppearDB({theme: theme.uid});
                  registerAlert('Тема изменена. Обновите страницу, чтобы избежать багов с некорректным отображением стилей', 5000)
                  await loadTheme(theme.file);
                  if (themeAutoReload) {
                    await sleep(500);
                    window.location.reload()
                  }
                });
              }
            });
          };
        },
        error: (err) => {
          setDefaultInMesh('#LZTUpModalThemesContainer');
          console.error('LZT Upgrade: Не удалось получить список тем ', err)
        }
      });

      $(document).on('click', `#set_default_theme`, async function (event) {
        await setValueInMesh(event.target, '#LZTUpModalThemesContainer');
        await updateAppearDB({theme: 0});
        registerAlert('Устанаволена стандарная тема. Выполняю перезагрузку страницы...', 5000)
        await sleep(800);
        window.location.reload();
      });

      // Загрузка кнопок быстрого репорта
      let $reportButtonsSelect = $('#LZTUpModalReportButtonsContainer > ul');
      for (const reportButton of reportButtonsList) {
        let btnStatus = '';
        if (typeof (reportButtonsInPost) === 'string') {
          let btns = reportButtonsInPost.split(',');
          if (btns.find(letter => Number(letter) === reportButton.id)) {
            btnStatus = 'checked';
          }
        }
        $reportButtonsSelect.append(`
          <li style = "list-style: none;">
            <label for="set_${reportButton.id}_reportbtn">
              <input type="checkbox" name="reportButton" id="set_${reportButton.id}_reportbtn" value="${reportButton.name} (${reportButton.reason})" ${btnStatus}>
              ${reportButton.name} (${reportButton.reason})
            </label>
          </li>`);
      };

      var $LZTUpTabs = $('ul#LZTUpTabs');
      var $mainList = $('div.LZTUpMainList');
      var $settingsList = $('div.LZTUpSettingsList');
      var $uniqContainer = $('div#LZTUpUniqContainer');
      var $contestsContainer = $('div#LZTUpContestsContainer');
      var $usersContainer = $('div#LZTUpUsersContainer');
      var $appearContainer = $('div#LZTUpAppearContainer');
      var $logoSubContainer = $('div#LZTUpLogoSubContainer');
      var $marketLogoSubContainer = $('div#LZTUpMarketLogoSubContainer');
      var $themesSubContainer = $('div#LZTUpThemesSubContainer');
      var $settingsContainer = $('div#LZTUpSettingsContainer');
      $settingsList.hide();
      $contestsContainer.hide();
      $usersContainer.hide();
      $uniqContainer.hide();
      $appearContainer.hide();
      $logoSubContainer.hide();
      $marketLogoSubContainer.hide();
      $themesSubContainer.hide();
      $settingsContainer.hide();

      async function createGoBackBtn(callback) {
        lztUpgradeModalMain.prepend($('<button id="LZTUpModalBackButton"><i class="fas fa-long-arrow-left"></i></button>'));
        $('#LZTUpModalBackButton').on('click', async () => {
          $('div.LZTUpSubMenu').hide();
          callback();
          $('.pcr-app').length ? $('.pcr-app').remove() : null;
        });
      }

      async function addGoBackBtn(target = '', elementToHide = undefined) {
        $('button#LZTUpModalBackButton').remove();
        return await createGoBackBtn(async () => {
          $('button#LZTUpModalBackButton').remove();
          if (target === 'appear' && typeof(elementToHide) !== 'undefined') {
            elementToHide.hide();
            $appearContainer.show();
            await addGoBackBtn();
            lztUpgradeMainTitle.text('Внешний вид');
          } else {
            $mainList.show();
            $LZTUpTabs.show();
            $settingsTab.removeClass('active');
            $mainTab.addClass('active');
            lztUpgradeMainTitle.text('LZT Upgrade');
          }
        });
      }

        /**
          @param {object} tab - tab object
          @param {string} text - text to show in title
        */
          async function updateMenu(tab, categoryContainer, text) {
            $(tab).hide();
            $LZTUpTabs.hide();
            $(categoryContainer).show();
            lztUpgradeMainTitle.text(text);
            await addGoBackBtn();
          }

        /**
          @param {object} category - category name (appear, ...)
          @param {string} categoryContainer - main category container to hide
          @param {string} subContainer - sub container to show
          @param {string} text - text to show in title
        */
          async function updateSubMenu(category, categoryContainer, subContainer, text) {
            $(categoryContainer).hide();
            $(subContainer).show();
            lztUpgradeMainTitle.text(text);
            await addGoBackBtn(category, subContainer);
          }

      $('ul#LZTUpTabs').parent().css("white-space", "unset"); // fixes so big free space in overlay
      var $menuTab = $('#LZTUpTabs > #LZTUpTab');
      var $mainTab, $settingsTab;
      $menuTab.toArray().forEach(element => {
        $(element).find('span').text() === 'Настройки' ? $settingsTab = $(element) : $mainTab = $(element);
      });

      if ($menuTab.length) {
        $mainTab.on('click', async () => {
          $($mainTab).find('span').text() === 'Главная' && !$mainTab.hasClass('active') ? (
            $settingsTab.removeClass('active'),
            $mainTab.addClass('active'),
            $settingsList.hide(),
            $mainList.show()
          ) : undefined;
        });

        $settingsTab.on('click', () => {
          $($settingsTab).find('span').text() === 'Настройки' && !$settingsTab.hasClass('active') ? (
            $mainTab.removeClass('active'),
            $settingsTab.addClass('active'),
            $mainList.hide(),
            $settingsList.show()
          ) : undefined;
        });

        $('div#LZTUpListItem.LZTUpUniqItem').on('click', async () => {
          await updateMenu($mainList, $uniqContainer, 'Розыгрыши');

          const pickrFill = createColorPicker('.badge-fill-picker', overlay[0]);
          pickrFill.on('init', async (instance) => {
            instance.setColor(badgeFill === '' ? null : badgeFill);
            instance.on('save', async (color, instance) => {
              color !== null ? rgbaColor = color.toRGBA().toString(0) : rgbaColor = "";
              await updateUniqueStyles({badgeFill: rgbaColor});
              await setUniqIconColor(rgbaColor);
            });
          });

          const pickrStroke = createColorPicker('.badge-stroke-picker', overlay[0]);
          pickrStroke.on('init', async (instance) => {
            instance.setColor(badgeStroke === '' ? null : badgeStroke);
            instance.on('save', async (color, instance) => {
              color !== null ? rgbaColor = color.toRGBA().toString(0) : rgbaColor = "";
              await updateUniqueStyles({badgeStroke: rgbaColor});
              await setUniqIconColor('', rgbaColor);
            });
          });
        });

        $('div#LZTUpListItem.LZTUpContestsItem').on('click', async () => {
          await updateMenu($mainList, $contestsContainer, 'Розыгрыши');
        });

        $('div#LZTUpListItem.LZTUpUsersItem').on('click', async () => {
          await updateMenu($mainList, $usersContainer, 'Пользователи');
        });

        $('div#LZTUpListItem.LZTUpAppearItem').on('click', async () => {
          await updateMenu($mainList, $appearContainer, 'Внешний вид');
        });

        $('div.LZTUpSubMenu#LZTUpAppearContainer > div.LZTUpModalSection#LZTUpLogoSection').on('click', async () => {
          await updateSubMenu('appear', $appearContainer, $logoSubContainer, 'Внешний вид — Логотип');
        });

        $('div.LZTUpSubMenu#LZTUpAppearContainer > div.LZTUpModalSection#LZTUpMarketLogoSection').on('click', async () => {
          await updateSubMenu('appear', $appearContainer, $marketLogoSubContainer, 'Внешний вид — Логотип маркета');
        });

        $('div.LZTUpSubMenu#LZTUpAppearContainer > div.LZTUpModalSection#LZTUpThemesSection').on('click', async () => {
          await updateSubMenu('appear', $appearContainer, $themesSubContainer, 'Внешний вид — Менеджер тем');
        });

        $('div#LZTUpListItem.LZTUpSettingsItem').on('click', async () => {
          await updateMenu($settingsList, $settingsContainer, 'Настройки');
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

    async function updateTooltips() {
      let $lztUpTooltips = $('#LZTUpTooltip.Tooltip');
      XenForo.Tooltip($lztUpTooltips);
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

    function registerModal(modalName, elementMain = '') {
      return XenForo.alert(elementMain, modalName, null, (elem) => {
        $('div.modal.fade').remove()
      })
    }

    function registerAlert(text, timeout = 5000) {
      return XenForo.alert(text, '', timeout);
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
        var uniqueData = await readUniqueStyleDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
        if (typeof(uniqueData) === 'object') {
          if (uniqueData.nickStyle !== '') {
            updateNickStyle(uniqueData.nickStyle);
          }
        }
      } catch (err) {
        console.error('LZT Upgrade: Не удалось обновить стиль ника ', err);
      }
    }

    async function sendMessageHandler() {
      var sendButton = $('.sendMessageContainer > button.lzt-fe-se-sendMessageButton');

      if (sendButton.length > 0) {
        $(sendButton).on('click', async function() {
          await sleep(850);
          await updateUniqueStyles();
          await reloadReportButtons();
        })
      }

      var sendProfileButton = $('#ProfilePoster > .submitUnit > .button.primary');

      if (sendProfileButton.length > 0) {
        $(sendProfileButton).on('click', async function() {
          await sleep(850);
          await updateUniqueStyles();
        })
      }

      let element = $('#QuickReply.simpleRedactor');
      element.on('keyup', async (e) => {
        await sleep(1000);
        await updateUniqueStyles();
      });
    }

    function updateBannerStyle(style, text) {
      var bannerBtn = $(`<em style="${style}" class="userBanner wrapped" id="LZTUpCustomBanner" itemprop="title"> \
      <span class="before"></span> \
      <strong>${text}</strong> \
      <span class="after"></span>\
      </em>`);
      $('#LZTUpCustomBanner').remove();
      registerProfileBtn(bannerBtn);
    }

    async function reloadBannerStyle() {
      try {
        var uniqueData = await readUniqueStyleDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
        if (typeof(uniqueData) === 'object') {
          if (uniqueData.bannerText !== '') {
            updateBannerStyle(uniqueData.bannerStyle, uniqueData.bannerText);
          }
        }
      } catch (err) {
        console.error('LZT Upgrade: Не удалось обновить стиль баннера ', err);
      }
    }

    async function forceReloadBannerStyle() {
      try {
        var uniqueData = await readUniqueStyleDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
        if (typeof(uniqueData) === 'object') {
          updateBannerStyle(uniqueData.bannerStyle, uniqueData.bannerText);
          if (uniqueData.bannerText === '') {
            $('#LZTUpCustomBanner').remove();
          }
        }
      } catch (err) {
        console.error('LZT Upgrade: Не удалось обновить стиль баннера ', err);
      }
    }

    async function registerUserBadges(bannerStyle = '', badgeText = '', badgeIcon = '') {
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

        $(`<span style="${XenForo.htmlspecialchars(bannerStyle)}" id="LZTUpTooltip" class="avatarUserBadge Tooltip ${badgeIcon === '' ? 'uniq_default' : ''} ${badgeId ? `avatarUserBadge--${badgeId}` : ''}" title="${XenForo.htmlspecialchars(badgeText)}" tabindex="0">
          <div class="customUniqIcon">
            ${badgeIcon.replaceAll(/<[script|style]*>/gi, '<!--').replaceAll(/<\/[script|style]*>/gi, '-->')}
          </div>
        </span>`
        ).appendTo($avatarHolder.find('.avatarUserBadges'));
      // TODO: fix self-xss for customUniqIcon
      // * trash fix, but it works (better than nothing)
      }
      return true;
    }

    async function reloadUserBadges() {
      try {
        var uniqueData = await readUniqueStyleDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
        if (typeof(uniqueData) === 'object' && uniqueData.badgeText !== '') {
          var isUserBadgesLoaded = $('#LZTUpUserBadges');
          if (isUserBadgesLoaded.length) {
            $(isUserBadgesLoaded).remove()
          }
          await registerUserBadges(uniqueData.bannerStyle, uniqueData.badgeText, uniqueData.badgeIcon);
          await setUniqIconColor(uniqueData.badgeFill, uniqueData.badgeStroke)
        }
      } catch (err) {
        console.error('LZT Upgrade: Не удалось обновить стиль значка аватара юзера ', err);
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
      let sendBtn = $('.simpleRedactor--button.sendMessageButton');
      if (sendBtn.length) {
        $(sendBtn).on('click', async function() {
          await sleep(550);
          await updateUniqueStyles();
        })
      }
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

    async function hideThreadsByTag(name = 'OnlyFans') {
      var $latestsThreads = $('div.latestThreads');
      var $stickyThreads = $('div.stickyThreads');
      $stickyThreads.is(':visible') ? $latestsThreads.add($stickyThreads) : undefined;
      var threads = $latestsThreads.find('div.discussionListItem--Wrapper').toArray()
      threads.forEach(thread => {
        var threadTags = $(thread).find('a.listBlock.main').find('span.secondRow').find('.threadTitle--prefixGroup').find('.prefix').toArray().map(element => $(element).text());
        if (threadTags.includes(name)) {
          $(thread).hide();
        }
      })
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
                var win = window.open(`https://${window.location.hostname}/${value}`)
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
      var giveaways = $('li.node.node766.forum.level-n');
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
      await updateTooltips();
    }

    async function isContestThread() {
      var $contestsThreadBlock = $('div.contestThreadBlock');
      return $contestsThreadBlock.length > 0 ? true : false
    }

    async function isContestsNode() {
      var $contestsTitleBar = $('div.titleBar > h1');
      return ($contestsTitleBar.length > 0 && $contestsTitleBar.attr('title') === 'Розыгрыши') ? true : false
    }

    async function isProfilePage() {
      var $ProfilePostList = $('ol#ProfilePostList');
      return $ProfilePostList.length > 0 ? true : false
    }

    async function isThreadPage() {
      let content = $('div#content.thread_view');
      return content.length > 0 ? true : false
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
      if (await isContestThread()) {
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

    async function havePoll() {
      let $pollContainer = $('div.PollContainer');
      return $pollContainer.length ? true : false;
    }

    async function changeVisibility(elem, isHidden = true) {
      if (elem.length > 0) {
        isHidden ? elem.hide() : elem.show();
      };
    }

    async function tagsVisibility(isHidden = true) {
      var $tagList = $('div.titleBar > div.tagBlock > ul.tagList');
      await changeVisibility($tagList, isHidden)
    }

    async function contentVisibility(isHidden = true) {
      var $content = $('div.messageContent > article > blockquote');
      await changeVisibility($content, isHidden)
    }

    async function pollVisibility(isHidden = true) {
      if (await havePoll()) {
        var $pollContainer = $('div.PollContainer');
        await changeVisibility($pollContainer, isHidden)
      }
    }

    async function contestsTagsVisibility(isHidden = true) {
      if (await isContestThread()) {
        await tagsVisibility(isHidden);
      };
    }

    async function contestsContentVisibility(isHidden = true) {
      if (await isContestThread()) {
        await contentVisibility(isHidden);
        await pollVisibility(isHidden);
      };
    }

    async function unreadArticleCircleVisibility(isHidden = true) {
      $hasUnreadArticles = $('span.hasUnreadArticles')
      await changeVisibility($hasUnreadArticles, isHidden)
    }

    function updateSiteLogo(site, newStyles) {
      switch (site) {
        case 'main' || 'forum':
          $('#lzt-logo').length ? $('#lzt-logo')[0].style = newStyles : null;
          break;
        case 'market' || 'shop':
          $('#lzt-market-logo').length ? $('#lzt-market-logo')[0].style = newStyles : null;
          break;
        default:
          return false;
      }
      return true;
    }

    async function counterVisibility(type, toggle) {
      if (type === 'conversations') {
        var $conversations = $('div#ConversationsMenu_Counter');
        if ($conversations.find('.Total').text() === '0') {
          await changeVisibility($conversations, true);
        } else {
          await changeVisibility($conversations, toggle);
        }
      } else if (type === 'alerts') {
        var $alerts = $('div#AlertsMenu_Counter');
        if ($alerts.find('.Total').text() === '0') {
          await changeVisibility($alerts, true);
        } else {
          await changeVisibility($alerts, toggle);
        }
      };
    }

    async function contestsAutoCloseFunc(toggle) {
      if (toggle) {
        var btn = $('.LztContest--Participate')
        if (btn.length > 0) {
          $(btn).on('click', async () => {
              await sleep(1000)
              window.close()
          })
        }
      }
    }

    let $ConversationsCounter = $('div#ConversationsMenu_Counter')
    let $AlertsCounter = $('div#AlertsMenu_Counter')
    const counterMutationObserver = new MutationObserver(async function(mutations) {
      mutations.forEach(async function(mutation) {
        if (mutation.target === $AlertsCounter[0] || mutation.target === $ConversationsCounter[0]) {
          var dbAppearData = await readAppearDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
          if (dbAppearData.hideCounterAlerts === 1) {
            await counterVisibility('alerts', true);
          };
          if (dbAppearData.hideCounterConversations === 1) {
            await counterVisibility('conversations', true)
          };
        }
      });
    });

    async function addReportBtnInPosts(name, reason) {
      const $messageList = $('#messageList > li');
      for (let block of $messageList) {
        if ($(block).find('.publicControls').length) {
          if ($(block).find(`.publicControls > #LZTUPReportButton[name$=${name}]`).length === 0) {
            let $reportButton = $(`<span id = "LZTUPReportButton" name = "${name}">${XenForo.htmlspecialchars(name)}</span>`)
            $reportButton.on('click', async () => {
              let formData = new FormData();
              formData.append("message", reason)
              formData.append("is_common_reason", 1)
              formData.append("_xfToken", XenForo._csrfToken);
              formData.append("_xfNoRedirect", 1)
              formData.append("_xfToken", XenForo._csrfToken);
              formData.append("redirect", window.location.href);
              await fetch('posts/' + block.id.split('-')[1] +'/report', { method: 'POST', body: formData });
              registerAlert('Жалоба отправлена', 5000);
            })
            $(block).find('.publicControls').prepend($reportButton)
          }
        }
      }
    }

    async function removeReportBtnInPosts(name) {
      const $messageList = $('#messageList > li');
      for (let block in $messageList) {
        const $reportBtn = $(block).find(`.publicControls > #LZTUPReportButton[name$=${name}]`)
        if ($reportBtn.length > 0) {
          $reportBtn.remove();
        }
      }
    }

    async function reloadReportButtons() {
      let dbAppearData = await readAppearDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
      if (dbAppearData && dbAppearData.reportButtonsInPost.length > 0) {
        if (typeof (dbAppearData.reportButtonsInPost) === 'string') {
          let buttons = dbAppearData.reportButtonsInPost.split(',');
          for (const button of buttons) {
            let reportBtn = reportButtonsList.find(btn => btn.id === Number(button));
            typeof(reportBtn) === "object" ? await addReportBtnInPosts(reportBtn.name, reportBtn.reason) : undefined;
          }
        }
      }
    }

    async function addBackgroundEffect() {
      let height = getHeight();
      if (heightOnLoad !== height) {
        heightOnLoad = height;
        $('.backgroundEffect').css('height', `${height}px`);
      }
    }

    async function getPollResults() {
      let url = window.location;
      let polls = [];
      response = await fetch(`https://${url.hostname}/${url.pathname}poll/results?=&_xfRequestUri=${url.pathname}&_xfNoRedirect=1&_xfToken=${XenForo._csrfToken}&_xfResponseType=json`)
      if (response.status === 200) {
        let result = await response.json();
        if (result.templateHtml) {
          let $pollHtml = $(result.templateHtml);
          let pollPercentage = $pollHtml.find('.pollResults > .pollResult > .percentage').toArray().map(el => el.innerText.trim());
          let pollCounts = $pollHtml.find('.pollResults > .pollResult > .barCell > .barContainer > .count').toArray().map(el => el.innerText.trim())
          for (let i = 0; i < pollPercentage.length && i < pollCounts.length; i++) {
            polls.push(`${pollPercentage[i]} (${pollCounts[i]} чел.)`)
          }
        } else {
          console.error(`LZT Upgrade: Не удалось найти тело результатов голосования. Статус: ${response.status}`);
        }
      } else {
        console.error(`LZT Upgrade: Не удалось загрузить результаты голосования. Статус: ${response.status}`);
      }
      console.log('LZT Upgrade: Результаты голосования: ', polls);
      return polls;
    }

    async function checkAndAddPollsResults() {
      if (await isThreadPage() && await havePoll()) {
        $pollOptions = $('.pollOptions');
        if ($pollOptions.length === 0) return;
        let polls = await getPollResults();
        if (polls.length > 0) {
          let $polls = $pollOptions.find('.pollOption').toArray();
          for (let i = 0; i < $polls.length && i < polls.length; i++) {
            let poll = $($polls[i]);
            poll.addClass('LZTUpPollResult');
            poll.append(`<span>${polls[i]}</span>`)
          }
        }
      }
    }

    async function removePollsResults() {
      if (await isThreadPage() && await havePoll()) {
        $pollOptions = $('.pollOptions');
        let $polls = $pollOptions.find('.pollOption').toArray();
        for (let i = 0; i < $polls.length; i++) {
          let poll = $($polls[i]);
          poll.addClass('LZTUpPollResult');
          poll.find('span').remove()
        }
      }
    }

    // script start
    if (getUserid() === '') return; // superior auth check

    var MenuResult = await registerMenuBtn(menuBtn);

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
      dbContestsData.contestsAutoClose === 1 ? await contestsAutoCloseFunc(true) : null;
      dbContestsData.contestsRmContent === 1 ? await contestsContentVisibility(true) : null;
    }

    if (isUsersDBInited) {
      var dbUsersData = await readUsersDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
      dbUsersData.showUseridInProfile === 1 ? await addUserIdInProfileInfo() : null;
      dbUsersData.showFullRegInProfile === 1 ? await editUserRegInProfileInfo(true) : null;
    }

    if (isAppearDBInited) {
      var dbAppearData = await readAppearDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
      dbAppearData.hideUnreadArticleCircle === 1 ? await unreadArticleCircleVisibility(true) : null;
      dbAppearData.hideTagsInThreads === 1 ? await tagsVisibility(true) : null;
      if (dbAppearData.forumLogo > 0) {
        $.ajax({
          url: api_endpoints['getLogoByUID'],
          dataType: 'json',
          data: {
            uid: dbAppearData.forumLogo
          }, 
          success: logo => typeof(logo) === 'object' && logo.hasOwnProperty('uid') && logo.hasOwnProperty('css') ? updateSiteLogo('main', logo.css) : undefined,
          error: err => console.error(`LZT Upgrade: Не удалось загрузить логотип форума `, err)
        });
      }
      if (dbAppearData.marketLogo > 0) {
        $.ajax({
          url: api_endpoints['getLogoByUID'],
          dataType: 'json',
          data: {
            uid: dbAppearData.marketLogo
          }, 
          success: logo => typeof(logo) === 'object' && logo.hasOwnProperty('uid') && logo.hasOwnProperty('css') ? updateSiteLogo('market', logo.css) : undefined,
          error: err => console.error(`LZT Upgrade: Не удалось загрузить логотип маркета `, err)
        });
      }
      if (dbAppearData.reportButtonsInPost.length > 0) {
        if (typeof (dbAppearData.reportButtonsInPost) === 'string') {
          let buttons = dbAppearData.reportButtonsInPost.split(',');
          for (const button of buttons) {
            let reportBtn = reportButtonsList.find(btn => btn.id === Number(button));
            typeof(reportBtn) === "object" ? await addReportBtnInPosts(reportBtn.name, reportBtn.reason) : undefined;
          }
        }
      }
      dbAppearData.hideCounterAlerts === 1 ? await counterVisibility('alerts', true) : null;
      dbAppearData.hideCounterConversations === 1 ? await counterVisibility('conversations', true) : null;
      dbAppearData.hideCounterAlerts === 1 || dbAppearData.hideCounterConversations === 1 ? counterMutation(true) : counterMutation(false);
      if (dbAppearData.backgroundEffect === 1) {
        $('body').prepend($('<div class="backgroundEffect"></div>'))
        await addBackgroundEffect();
        $(window).on('scroll', async () => {
          await addBackgroundEffect();
        })
      }
      if (dbAppearData.hideOnlyfans === 1) {
        await hideThreadsByTag('OnlyFans');
        $(window).on('scroll', async () => {
          await hideThreadsByTag('OnlyFans');
        })
      }
      dbAppearData.showPollsResults === 1 ? await checkAndAddPollsResults() : null;
    }

    await updateUniqueStyles();

    await sendMessageHandler();

    await messageClickUsernameHandler();

    await commentMoreHandler();

    await updateTooltips();

    if (MenuResult === true) {
      // UNIQUE
      $(document).on('click', '#LZTUpResetUniqueDB', async function () {
        await deleteUniqueStylesDB();
        await initUniqueStyleDB();
        alert('Кастомные стили сброшены. Рекомендуем обновить страницу');
      });

      $(document).on('click', '#LZTUpSaveUniqueStyle', async function () {
        let nickStyleNew = $('#LZTUpUniqueStyle').val();
        if (nickStyleNew.length < 1501) {
          await updateUniqueStyleDB({nickStyle: nickStyleNew});
          updateNickStyle(nickStyleNew);
        } else {
            alert('Стиль ника не должен превышать 1500 символов!')
            console.log('LZT Upgrade: Не удалось сохранить стиль ника. Стиль ника не должен превышать 1500 символов!')
        }
      });

      $(document).on('click', '#LZTUpSaveBannerStyle', async function () {
        let bannerStyleNew = $('#LZTUpBannerStyle').val();
        if (bannerStyleNew.length < 1501) {
          await updateUniqueStyleDB({bannerStyle: bannerStyleNew});
          await updateUniqueStyles();
        } else {
          alert('Стиль лычки не должен превышать 1500 символов!')
          console.log('LZT Upgrade: Не удалось сохранить стиль лычки. Стиль лычки не должен превышать 1500 символов!')
        }
      });

      $(document).on('click', '#LZTUpSaveBannerText', async function () {
        let bannerTextNew = $('#LZTUpBannerText').val();
        if (bannerTextNew.length < 25) {
          await updateUniqueStyleDB({bannerText: bannerTextNew});
          await forceReloadBannerStyle();
        } else {
          alert('Текст в лычке не должен превышать 24 символов!')
          console.log('LZT Upgrade: Не удалось сохранить текст в лычке. Текст в лычке не должен превышать 24 символов!')
        }
      });

      $(document).on('click', '#LZTUpSaveBadgeIcon', async function () {
        let badgeIconNew = $('#LZTUpBadgeIcon').val();
        if (badgeIconNew.length < 3001) {
          await updateUniqueStyleDB({badgeIcon: badgeIconNew});
          await updateUniqueStyles();
        } else {
          alert('Иконка на аватарке не должна превышать 3000 символов!')
          console.log('LZT Upgrade: Не удалось сохранить иконку на аватарке. Иконка на аватарке не должен превышать 3000 символов!')
        }
      });

      $(document).on('click', '#LZTUpSaveBadgeText', async function () {
        let badgeTextNew  = $('#LZTUpBadgeText').val();
        if (badgeTextNew .length < 25) {
          await updateUniqueStyleDB({badgeText: badgeTextNew});
          await updateUniqueStyles();
          
        } else {
          alert('Текст в иконке аватарки не должен превышать 24 символов!')
          console.log('LZT Upgrade: Не удалось сохранить текст в иконке аватарки. Текст в иконке аватарки не должен превышать 24 символов!')
        }
      });

      // CONTESTS
      $(document).on('click', '#LZTUpResetContestsDB', async function () {
        await deleteContestsDB();
        await initContestsDB();
        alert('Настройки розыгрышей LZT Upgrade сброшены');
        await sleep(500);
        window.location.reload();
      });

      $(document).on('click', '#contests_open_ten', async function () {
        $('#contests_open_ten')[0].checked ? (
          await updateContestsDB({contestsTen: 1}),
          await regOpenContestsBtn(10)
          ): (
            await updateContestsDB({contestsTen: 0}),
            await removeOpenContestsBtn(10)
          );
      });

      $(document).on('click', '#contests_open_all', async function () {
        $('#contests_open_all')[0].checked ? (
          await updateContestsDB({contestsAll: 1}),
          await regOpenContestsBtn(100)
          ): (
            await updateContestsDB({contestsAll: 0}),
            await removeOpenContestsBtn(100)
          );
      });

      $(document).on('click', '#contests_info_top', async function () {
        $('#contests_info_top')[0].checked ? (
          await updateContestsDB({contestsInfoTop: 1}),
          await contestThreadBlockMove(true)
          ): (
            await updateContestsDB({contestsInfoTop: 0}),
            await contestThreadBlockMove(false)
          );
      });

      $(document).on('click', '#contests_btn_top_in_block', async function () {
        $('#contests_btn_top_in_block')[0].checked ? (
          await updateContestsDB({contestsBtnTopInBlock: 1}),
          await contestsBtnInBlockMove(true)
          ): (
            await updateContestsDB({contestsBtnTopInBlock: 0}),
            await contestsBtnInBlockMove(false)
          );
      });

      $(document).on('click', '#contests_hide_tags', async function () {
        $('#contests_hide_tags')[0].checked ? (
          await updateContestsDB({contestsHideTags: 1}),
          await contestsTagsVisibility(true)
          ): (
            await updateContestsDB({contestsHideTags: 0}),
            await contestsTagsVisibility(false)
          );
      });

      $(document).on('click', '#contests_auto_close', async function () {
        $('#contests_auto_close')[0].checked ? (
          await updateContestsDB({contestsAutoClose: 1}),
          await contestsAutoCloseFunc(true)
          ): (
            await updateContestsDB({contestsAutoClose: 0}),
            await contestsAutoCloseFunc(false)
          );
      });

      $(document).on('click', '#contests_rm_content', async function () {
        $('#contests_rm_content')[0].checked ? (
          await updateContestsDB({contestsRmContent: 1}),
          await contestsContentVisibility(true)
          ): (
            await updateContestsDB({contestsRmContent: 0}),
            await contestsContentVisibility(false)
          );
      });

      // USERS
      $(document).on('click', '#LZTUpResetUsersDB', async function () {
        await deleteUsersDB();
        await initUsersDB();
        alert('Настройки пользователей LZT Upgrade сброшены');
        await sleep(500);
        window.location.reload();
      });

      $(document).on('click', '#show_userid_in_profile', async function () {
        $('#show_userid_in_profile')[0].checked ? (
          await updateUsersDB({showUseridInProfile: 1}),
          await addUserIdInProfileInfo()
          ): (
            await updateUsersDB({showUseridInProfile: 0}),
            await removeUserIdInProfileInfo()
          );
      });

      $(document).on('click', '#show_fullreg_in_profile', async function () {
        $('#show_fullreg_in_profile')[0].checked ? (
          await updateUsersDB({showFullRegInProfile: 1}),
          await editUserRegInProfileInfo(true)
          ): (
            await updateUsersDB({showFullRegInProfile: 0}),
            await editUserRegInProfileInfo(false)
          );
      });

      // APPEAR
      $(document).on('click', '#LZTUpResetAppearDB', async function () {
        await deleteAppearDB();
        await initAppearDB();
        alert('Настройки "Внешнего вида" LZT Upgrade сброшены');
        await sleep(500);
        window.location.reload();
      });

      $(document).on('click', '#hide_unread_article_circle', async function () {
        $('#hide_unread_article_circle')[0].checked ? (
          await updateAppearDB({hideUnreadArticleCircle: 1}),
          await unreadArticleCircleVisibility(true)
          ): (
            await updateAppearDB({hideUnreadArticleCircle: 0}),
            await unreadArticleCircleVisibility(false)
          );
      });

      $(document).on('click', '#hide_tags_in_threads', async function () {
        $('#hide_tags_in_threads')[0].checked ? (
          await updateAppearDB({hideTagsInThreads: 1}),
          await tagsVisibility(true)
          ): (
            await updateAppearDB({hideTagsInThreads: 0}),
            await tagsVisibility(false)
          );
      });

      $(document).on('click', '#hide_counter_alerts', async function () {
        $('#hide_counter_alerts')[0].checked ? (
          await updateAppearDB({hideCounterAlerts: 1}),
          await counterVisibility('alerts', true),
          counterMutation(true)
          ): (
            dbAppearData = await readAppearDB().then(value => {return(value)}).catch(err => {console.error(err); return false}),
            await updateAppearDB({hideCounterAlerts: 0}),
            dbAppearData.hideCounterAlerts === 0 && dbAppearData.hideCounterConversations === 0 ? counterMutation(false) : null,
            await counterVisibility('alerts', false)
          );
      });

      $(document).on('click', '#hide_counter_conversations', async function () {
        $('#hide_counter_conversations')[0].checked ? (
          await updateAppearDB({hideCounterConversations: 1}),
          await counterVisibility('conversations', true),
          counterMutation(true)
          ): (
            dbAppearData = await readAppearDB().then(value => {return(value)}).catch(err => {console.error(err); return false}),
            await updateAppearDB({hideCounterConversations: 0}),
            dbAppearData.hideCounterAlerts === 0 && dbAppearData.hideCounterConversations === 0 ? counterMutation(false) : null,
            await counterVisibility('conversations', false)
          );
      });

      $(document).on('click', '#theme_auto_reload', async function () {
        $('#theme_auto_reload')[0].checked ? (
          await updateAppearDB({themeAutoReload: 1}),
          await sleep(500),
          window.location.reload()
          ): (
            await updateAppearDB({themeAutoReload: 0}),
            await sleep(500),
            window.location.reload()
          );
      });

      $(document).on('click', '#enable_background_effect', async function () {
        $('#enable_background_effect')[0].checked ? (
          await updateAppearDB({backgroundEffect: 1}),
          $('body').prepend($('<div class="backgroundEffect"></div>')),
          await addBackgroundEffect()
          ): (
            await updateAppearDB({backgroundEffect: 0}),
            $('.backgroundEffect').remove()
          );
      });

      $(document).on('click', '#hide_onlyfans', async function () {
        $('#hide_onlyfans')[0].checked ? (
          await updateAppearDB({hideOnlyfans: 1}),
          registerAlert('Включено скрытие тега Onlyfans. Выполняю перезагрузку страницы...', 5000),
          await sleep(500),
          window.location.reload()
          ): (
            await updateAppearDB({hideOnlyfans: 0}),
            registerAlert('Скрытие тега Onlyfans отключено. Выполняю перезагрузку страницы...', 5000),
            await sleep(500),
            window.location.reload()
          );
      });

      $(document).on('click', '#show_polls_results', async function () {
        $('#show_polls_results')[0].checked ? (
          await updateAppearDB({showPollsResults: 1}),
          registerAlert('Включен показ результатов голосования', 5000),
          await checkAndAddPollsResults()
          ): (
            await updateAppearDB({showPollsResults: 0}),
            registerAlert('Выключен показ результатов голосования', 5000),
            await removePollsResults()
          );
      });

      $(document).on('click', '.LZTUpSaveSettings', async function () {
        const uniqueStylesSettings = await readUniqueStyleDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
        const contestsSettings = await readContestsDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
        const usersSettings = await readUsersDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
        const appearSettings = await readAppearDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
        const config = JSON.stringify({
          uniqueStyle: uniqueStylesSettings,
          contests: contestsSettings,
          users: usersSettings,
          appear: appearSettings
        });

        const blob = new Blob([config], {
          type: 'application/json'
        });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'LZTUpConfig.json';
        link.click();
        registerAlert('Файл настроек выгружен', 5000);
      });

      $(document).on('click', '.LZTUpUploadSettings', async function () {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'application/json';
        input.click();

        const file = await new Promise(resolve => {
          input.onchange = () => {
            resolve(input.files[0]);
          };
        });

        const reader = new FileReader();
        reader.readAsText(file);
        const config = await new Promise(resolve => {
          reader.onload = () => {
            resolve(reader.result);
          };
          reader.error = () => {
            console.error('LZT Upgrade: Ошибка загрузки файла настроек', reader.error);
            resolve(false);
          };
        });

        if (!config) {
          registerAlert('Ошибка загрузки файла настроек', 5000);
          return;
        }

        const configObj = JSON.parse(config);
        try {
          await updateUniqueStyleDB(configObj.uniqueStyle);
          await updateContestsDB(configObj.contests);
          await updateUsersDB(configObj.users);
          await updateAppearDB(configObj.appear);
          registerAlert('Настройки загружены. Выполняю перезагрузку страницы...', 5000);
          await sleep(500);
          window.location.reload();
        } catch (err) {
          console.error('LZT Upgrade: Ошибка загрузки файла настроек', err)
          registerAlert('Ошибка загрузки файла настроек', 5000);
        }

      });

      reportButtonsList.forEach(btn => {
        $(document).on('click', `#set_${btn.id}_reportbtn`, async function () {
          let appearData = await readAppearDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
          let usedBtns;
          if (typeof (appearData.reportButtonsInPost) === 'string') {
            usedBtns = appearData.reportButtonsInPost.split(',');
            let emptyCell = usedBtns.indexOf('')
            emptyCell !== -1 ? usedBtns.splice(emptyCell, 1) : null;
            if (usedBtns.find(btnId => btnId === String(btn.id))) {
              let btnIndex = usedBtns.indexOf(String(btn.id));
              btnIndex !== -1 ? usedBtns.splice(btnIndex, 1) : null;
            } else {
              usedBtns.push(String(btn.id));
            }
          } else {
            usedBtns = [String(btn.id)];
          }
          await updateAppearDB({reportButtonsInPost: usedBtns.join()}),
          $(`#set_${btn.id}_reportbtn`)[0].checked ? await addReportBtnInPosts(btn.name, btn.reason) : await removeReportBtnInPosts(btn.name);
        });
      });
    }

    var hasPageNav = $('.PageNav > nav > a');
    var isProfile = $('ol#ProfilePostList');
    var $messageList = $('ol.messageList');
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

    if ($messageList.length) {
      var mutationObserver = new MutationObserver(async function(mutations) {
        mutations.forEach(async function(mutation) {
          if (mutation.target === $($messageList)[0]) {
            await reloadReportButtons();
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

    function counterMutation(toggle) {
      if (toggle) {
        counterMutationObserver.observe(document.documentElement, {
          attributes: true,
          childList: true,
          subtree: true,
          attributeOldValue: true,
        });
      } else {
        counterMutationObserver.disconnect();
      }
    }
  };
})();