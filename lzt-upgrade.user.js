// ==UserScript==
// @name         LZT Upgrade
// @version      1.0.7.1
// @description  Some useful utilities for Lolzteam
// @description:ru  Полезные улучшения для Lolzteam
// @author       Toil
// @match        *://*.lolz.guru/*
// @match        *://*.zelenka.guru/*
// @icon         https://zelenka.guru/public/2017/zelenka.png
// @resource     styles https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/css/style.css
// @resource     nano https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/css/nano.min.css
// @require      https://cdn.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min.js
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
// @run-at       document-start
// ==/UserScript==

(async function() {
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

  var isUniqueDBInited = await initUniqueStyleDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
  var isContestsDBInited = await initContestsDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
  var isUsersDBInited = await initUsersDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
  var isAppearDBInited = await initAppearDB().then(value => {return(value)}).catch(err => {console.error(err); return false});

  document.addEventListener("DOMContentLoaded", async () => {

    // Error page
    if (/^Error\s[0-9]{3}$/.test($('head title').text())) {
      let body = $('body');
      body.attr('id', 'LZTUPErrorPage');
      body.find('article > div').append('<img src="https://i.imgur.com/iVmKDr7.gif" alt="utya_duck_rain" loading="lazy">')
      return;
    }

    const blockAds = '(Native/\\.NET файлов|threads\\/|easyliker\\.ru|niccord\\.ru|vpromotions\\.ru|skysmm\\.ru|VerifTeam|SmmPanelUS\\.com|t\\.me/lztnext|axxishop\\.ru|LIGHTSHOP\\.SU)';

    const username = $('.accountUsername span').text();

    const getUserid = () => {
      return XenForo._csrfToken.split(',')[0]
    }

    const sleep = m => new Promise(r => setTimeout(r, m))

    const menuBtn = $('<li><a id="LZTUpButton">LZT Upgrade</a></li>');
    // Перенести в бд
    const logoList = [
      {
        id: 0,
        name: 'По умолчанию',
        author: 'Lolzteam',
        short: 'default',
        preview: 'https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/static/img/logos/forum/default.svg'
      },
      {
        id: 1,
        name: 'Старый',
        author: 'Lolzteam',
        short: 'old_lolz',
        css: "background-size:100%;margin-top:auto;width:87px;height:44px;float:left;margin-left: -5px;background:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Слой_2' x='0px' y='0px' viewBox='0 0 90 40' style='enable-background:new 0 0 90 40;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill-rule:evenodd;clip-rule:evenodd;fill:%2323A86D;%7D%0A%3C/style%3E%3Cpath class='st0' d='M49,31V13h15.1l4-4H16v4h17L21,32h-8V9H9v27h59l-4-4H49V31 M26,32h19v-1V13h-7L26,32z'/%3E%3C/svg%3E\")",
        preview: "https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/static/img/logos/forum/old.svg"
      },
      {
        id: 2,
        name: 'Анимированный старый',
        author: 'Lolzteam',
        short: 'old_animated_lolz',
        css: "width: 78px;height: 43px;float: left;margin-left: -5px;background-size: 95%;background-image: url(https://i.imgur.com/AClYTdp.gif);",
        preview: "https://i.imgur.com/AClYTdp.gif"
      },
      {
        id: 3,
        name: 'Мамонт',
        author: 'Nordea',
        authorID: '242713',
        short: 'mamont_nordea',
        css: "background-repeat: no-repeat;width: 36px;height: 36px;float: left;margin: 4px 10px 0 0;background-size: 110%;background-image: url(https://imgur.com/IBoICGv.png);",
        preview: "https://imgur.com/IBoICGv.png",
      },
      {
        id: 4,
        name: 'Новогодний 2022',
        author: 'Lolzteam',
        short: 'newyear22_lolz',
        css: "width: 78px;height: 43px;float: left;margin-left: -5px;background-size: 105%;background-image: url(https://i.imgur.com/dqzURj5.gif);background-repeat: no-repeat;",
        preview: "https://i.imgur.com/dqzURj5.gif",
      },
      {
        id: 5,
        name: 'Редизайн',
        author: 'WebFox',
        authorID: '3833287',
        short: 'redisign_webfox',
        css: "width: 48px;height: 36px;float: left;margin: 5px 10px;background-size: 100%;background-image: url(https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/static/img/logos/forum/webfox.png);background-repeat: no-repeat;",
        preview: "https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/static/img/logos/forum/webfox.png",
      },
    ]

    // Перенести в бд
    const marketLogoList = [
      {
        id: 0,
        name: 'По умолчанию',
        author: 'Lolzteam',
        short: 'default',
        preview: 'https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/static/img/logos/market/default.svg'
      },
      {
        id: 1,
        name: 'Старый логотип',
        author: 'Lolzteam',
        short: 'old_lolz',
        css: 'background: url(https://svgshare.com/i/nNC.svg) no-repeat;margin: 10px 10px 0 0;',
        preview: 'https://svgshare.com/i/nNC.svg',
      },
      {
        id: 2,
        name: 'Классический',
        author: 'Lolzteam',
        short: 'classic_lolz',
        css: 'background: url(https://i.imgur.com/GJrquyz.png) no-repeat;background-size:85%;margin: 5px -10px 0 4px;',
        preview: 'https://i.imgur.com/GJrquyz.png',
      },
      {
        id: 3,
        name: 'Редизайн',
        author: 'WebFox',
        authorID: '3833287',
        short: 'redisign_webfox',
        css: 'background: url(https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/static/img/logos/market/webfox.png) no-repeat;background-size:85%;margin: 5px -10px 0 4px;',
        preview: 'https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/static/img/logos/market/webfox.png',
      },
    ]

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
      var changeLogo = appearData.changeLogo;
      var marketLogo = appearData.marketLogo;
      var hideCounterAlerts = appearData.hideCounterAlerts;
      var hideCounterConversations = appearData.hideCounterConversations;
      var reportButtonsInPost = appearData.reportButtonsInPost;

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
            <img alt="Image" id="LZTUpListIcon" src="https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/static/img/color.svg" loading="lazy">
            <div>
              <span id="LZTUpListText">Локальный Уник</span>
              <span id="LZTUpListSubText">Представь, ты, мог не платить...</span>
            </div>
          </div>
          <div id="LZTUpListItem" class="LZTUpContestsItem">
            <img alt="Image" id="LZTUpListIcon" src="https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/static/img/gift.svg" loading="lazy">
            <div>
              <span id="LZTUpListText">Розыгрыши</span>
              <span id="LZTUpListSubText">Комфорт для розыгрышей</span>
            </div>
          </div>
          <div id="LZTUpListItem" class="LZTUpUsersItem">
            <img alt="Image" id="LZTUpListIcon" src="https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/static/img/user.svg" loading="lazy">
            <div>
              <span id="LZTUpListText">Пользователи</span>
              <span id="LZTUpListSubText">Штучки для пользователей</span>
            </div>
          </div>
          <div id="LZTUpListItem" class="LZTUpAppearItem">
            <img alt="Image" id="LZTUpListIcon" src="https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/static/img/color.svg" loading="lazy">
            <div>
              <span id="LZTUpListText">Внешний вид</span>
              <span id="LZTUpListSubText">Темы, логотипы и другое</span>
            </div>
          </div>
        </div>
        <div id="LZTUpList" class="LZTUpSettingsList">
          <div id="LZTUpListItem">
            <img alt="Image" id="LZTUpListIcon" src="https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/static/img/more.svg" loading="lazy">
            <span id="LZTUpListText">Lorem Ipsum</span>
          </div>
          <div id="LZTUpListItem">
            <img alt="Image" id="LZTUpListIcon" src="https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/static/img/more.svg" loading="lazy">
            <span id="LZTUpListText">Lorem Ipsum</span>
          </div>
          <div id="LZTUpListItem">
            <img alt="Image" id="LZTUpListIcon" src="https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/static/img/more.svg" loading="lazy">
            <span id="LZTUpListText">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.</span>
          </div>
        </div>
        <div id="LZTUpUniqContainer" class="LZTUpSubMenu">
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
          <div id="LZTUpModalChecksContainer">
            <input type="checkbox" name="auto_close" value="1" id="contests_auto_close" ${contestsAutoClose === 1 ? "checked" : ''}>
            <label for="contests_auto_close">Автозакрытие страницы при нажатие на кнопку "Участвовать"</label>
          </div>
          <div id="LZTUpModalChecksContainer">
            <input type="checkbox" name="rm_content" value="1" id="contests_rm_content" ${contestsRmContent === 1 ? "checked" : ''}>
            <label for="contests_rm_content">Скрытие содержимого + голосований в теме розыгрыша</label>
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
          <div id="LZTUpModalChecksContainer">
            <input type="checkbox" name="hide_unread_article_circle" value="1" id="hide_unread_article_circle" ${hideUnreadArticleCircle === 1 ? "checked" : ''}>
            <label for="hide_unread_article_circle">Скрыть значок не прочитанных статей в шапке сайта</label>
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
          <div id="LZTUpModalCell">
            <div class="bold title">Логотип:</div>
            <div class="LZTUpModalMesh" id="LZTUpModalLogoContainer">
            </div>
          </div>
          <div id="LZTUpModalCell">
            <div class="bold title">Логотип маркета:</div>
            <div class="LZTUpModalMesh" id="LZTUpModalMarketLogoContainer">
            </div>
          </div>
          <div id="LZTUpModalReportButtonsContainer">
            <div class="bold title">Кнопки быстрого репорта в посте:</div>
            <ul>
            </ul>
          </div>
          <input id="LZTUpResetAppearDB" type="button" value="Сбросить настройки" class="button primary"></input>
        </div>
        `
      );

      const lztUpgradeModalMain = $('#LZTUpList').parent().parent();
      const lztUpgradeMainTitle = lztUpgradeModalMain.find('h2.heading');
      lztUpgradeMainTitle.attr('id', 'LZTUpModalMainTitle');

      // Загрузка логотипов
      let $logoSelect = $('#LZTUpModalLogoContainer');
      for (const logo of logoList) {
        $logoSelect.append(`
        <div class="LZTUpModalMeshItem ${changeLogo === logo.id ? "active" : ''}" id="set_${logo.short}_logo" data-checked="${changeLogo === logo.id ? "true" : 'false'}">
          <img src="${logo.preview}" alt="logo" loading="lazy">
          <span class="LZTUpModalMeshItemName" data-shortname="${logo.short}">${XenForo.htmlspecialchars(logo.name)}</span>
          <span class="LZTUpModalMeshItemAuthor">${logo.authorID ? `<a href="https://${window.location.hostname}/members/${logo.authorID}">` : ''}${XenForo.htmlspecialchars(logo.author)}${logo.authorID ? '</a>' : ''}</span>
        </div>`);
      };

      let $marketLogoSelect = $('#LZTUpModalMarketLogoContainer');
      for (const logoMarket of marketLogoList) {
        $marketLogoSelect.append(`
        <div class="LZTUpModalMeshItem ${marketLogo === logoMarket.id ? "active" : ''}" id="set_${logoMarket.short}_marketlogo" data-checked="${marketLogo === logoMarket.id ? "true" : 'false'}">
          <img src="${logoMarket.preview}" alt="logo" loading="lazy">
          <span class="LZTUpModalMeshItemName" data-shortname="${logoMarket.short}">${XenForo.htmlspecialchars(logoMarket.name)}</span>
          <span class="LZTUpModalMeshItemAuthor">${logoMarket.authorID ? `<a href="https://${window.location.hostname}/members/${logoMarket.authorID}">` : ''}${XenForo.htmlspecialchars(logoMarket.author)}${logoMarket.authorID ? '</a>' : ''}</span>
        </div>`);
      };

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
      $settingsList.hide();
      $contestsContainer.hide();
      $usersContainer.hide();
      $uniqContainer.hide();
      $appearContainer.hide();

      async function addGoBackBtn() {
        lztUpgradeModalMain.prepend($('<button id="LZTUpModalBackButton"><img src="https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/static/img/arrow-left.svg" alt="back" style="height: 1em;vertical-align: -.125em;"></button>'));
        $('#LZTUpModalBackButton').on('click', () => {
          console.log('clicked')
          $('div.LZTUpSubMenu').hide();
          $mainList.show();
          $LZTUpTabs.show();
          removeElement($('button#LZTUpModalBackButton'));
          lztUpgradeMainTitle.text('LZT Upgrade');
          $('.pcr-app').length ? $('.pcr-app').remove() : null;
        });
      }

      $('ul#LZTUpTabs').parent().css("white-space", "unset"); // fixes so big free space in overlay
      var $menuTab = $('#LZTUpTabs > #LZTUpTab');
      var $mainTab, $settingsTab;
      $menuTab.toArray().forEach(element => {
        $(element)[0].innerText === 'Настройки' ? $settingsTab = $(element) : $mainTab = $(element);
      });

      if ($menuTab.length) {
        $mainTab.on('click', async () => {
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
          $mainList.hide();
          $LZTUpTabs.hide();
          $uniqContainer.show();
          lztUpgradeMainTitle.text('Локальный уник');
          await addGoBackBtn();

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
          $mainList.hide();
          $LZTUpTabs.hide();
          $contestsContainer.show();
          lztUpgradeMainTitle.text('Розыгрыши');
          await addGoBackBtn();
        });

        $('div#LZTUpListItem.LZTUpUsersItem').on('click', async () => {
          $mainList.hide();
          $LZTUpTabs.hide();
          $usersContainer.show();
          lztUpgradeMainTitle.text('Пользователи');
          await addGoBackBtn();
        });

        $('div#LZTUpListItem.LZTUpAppearItem').on('click', async () => {
          $mainList.hide();
          $LZTUpTabs.hide();
          $appearContainer.show();
          lztUpgradeMainTitle.text('Внешний вид');
          await addGoBackBtn();
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
      if ($(element).length) {
        $(element).remove();
      }
    }

    function registerModal(modalName, elementMain = '') {
      return XenForo.alert(elementMain, modalName, null, (elem) => {
        $('div.modal.fade').remove()
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
        var uniqueData = await readUniqueStyleDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
        if (typeof(uniqueData) === 'object') {
          if (uniqueData.nickStyle !== '') {
            updateNickStyle(uniqueData.nickStyle);
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
        var uniqueData = await readUniqueStyleDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
        if (typeof(uniqueData) === 'object') {
          if (uniqueData.bannerText !== '') {
            updateBannerStyle(uniqueData.bannerStyle, uniqueData.bannerText);
          }
        }
      } catch (err) {
        console.error('LZTUp: Не удалось обновить стиль баннера ', err);
      }
    }

    async function forceReloadBannerStyle() {
      try {
        var uniqueData = await readUniqueStyleDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
        if (typeof(uniqueData) === 'object') {
          updateBannerStyle(uniqueData.bannerStyle, uniqueData.bannerText);
          if (uniqueData.bannerText === '') {
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
        var uniqueData = await readUniqueStyleDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
        if (typeof(uniqueData) === 'object' && uniqueData.badgeText !== '') {
          var isUserBadgesLoaded = $('#LZTUpUserBadges');
          if (isUserBadgesLoaded.length) {
            $(isUserBadgesLoaded).remove()
          }
          registerUserBadges(uniqueData.bannerStyle, uniqueData.badgeText, uniqueData.badgeIcon);
          await setUniqIconColor(uniqueData.badgeFill, uniqueData.badgeStroke)
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
      var $pollContainer = $('div.PollContainer');
      await changeVisibility($pollContainer, isHidden)
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
              await sleep(600)
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
              XenForo.alert('Жалоба отправлена', '', 5000);
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
      if (dbAppearData.changeLogo > 0) {
        let logo = logoList.find(logo => logo.id === dbAppearData.changeLogo);
        typeof(logo) === "object" ? updateSiteLogo('main', logo.css) : undefined;
      }
      if (dbAppearData.marketLogo > 0) {
        let logo = marketLogoList.find(logo => logo.id === dbAppearData.marketLogo);
        typeof(logo) === "object" ? updateSiteLogo('market', logo.css) : undefined;
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
    }

    await updateUniqueStyles();

    await sendMessageHandler();

    await messageClickUsernameHandler();

    await commentMoreHandler();

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
            console.log('LZTUp: Не удалось сохранить стиль ника. Стиль ника не должен превышать 1500 символов!')
        }
      });

      $(document).on('click', '#LZTUpSaveBannerStyle', async function () {
        let bannerStyleNew = $('#LZTUpBannerStyle').val();
        if (bannerStyleNew.length < 1501) {
          await updateUniqueStyleDB({bannerStyle: bannerStyleNew});
          await updateUniqueStyles();
        } else {
          alert('Стиль лычки не должен превышать 1500 символов!')
          console.log('LZTUp: Не удалось сохранить стиль лычки. Стиль лычки не должен превышать 1500 символов!')
        }
      });

      $(document).on('click', '#LZTUpSaveBannerText', async function () {
        let bannerTextNew = $('#LZTUpBannerText').val();
        if (bannerTextNew.length < 25) {
          await updateUniqueStyleDB({bannerText: bannerTextNew});
          await forceReloadBannerStyle();
        } else {
          alert('Текст в лычке не должен превышать 24 символов!')
          console.log('LZTUp: Не удалось сохранить текст в лычке. Текст в лычке не должен превышать 24 символов!')
        }
      });

      $(document).on('click', '#LZTUpSaveBadgeIcon', async function () {
        let badgeIconNew = $('#LZTUpBadgeIcon').val();
        if (badgeIconNew.length < 3001) {
          await updateUniqueStyleDB({badgeIcon: badgeIconNew});
          await reloadUserBadges();
        } else {
          alert('Иконка на аватарке не должна превышать 3000 символов!')
          console.log('LZTUp: Не удалось сохранить иконку на аватарке. Иконка на аватарке не должен превышать 3000 символов!')
        }
      });

      $(document).on('click', '#LZTUpSaveBadgeText', async function () {
        let badgeTextNew  = $('#LZTUpBadgeText').val();
        if (badgeTextNew .length < 25) {
          await updateUniqueStyleDB({badgeText: badgeTextNew});
          await reloadUserBadges();
        } else {
          alert('Текст в иконке аватарки не должен превышать 24 символов!')
          console.log('LZTUp: Не удалось сохранить текст в иконке аватарки. Текст в иконке аватарки не должен превышать 24 символов!')
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

      logoList.forEach(logo => {
        $(document).on('click', `#set_${logo.short}_logo`, async function (event) {
          let logoContainerChildrens = $('#LZTUpModalLogoContainer').children();
          $(logoContainerChildrens).attr('data-checked', 'false');
          $(logoContainerChildrens).removeClass('active');
          let currentLogoElement = $(event.target)[0].tagName.toLowerCase() === 'div' ? $(event.target) : $(event.target).parent();
          $(currentLogoElement).attr('data-checked', 'true');
          $(currentLogoElement).addClass('active');
          await updateAppearDB({changeLogo: logo.id});
          updateSiteLogo('main', logo.css);
        });
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

      marketLogoList.forEach(logo => {
        $(document).on('click', `#set_${logo.short}_marketlogo`, async function (event) {
          let logoContainerChildrens = $('#LZTUpModalMarketLogoContainer').children();
          $(logoContainerChildrens).attr('data-checked', 'false');
          $(logoContainerChildrens).removeClass('active');
          let currentLogoElement = $(event.target)[0].tagName.toLowerCase() === 'div' ? $(event.target) : $(event.target).parent();
          $(currentLogoElement).attr('data-checked', 'true');
          $(currentLogoElement).addClass('active');
          await updateAppearDB({marketLogo: logo.id});
          updateSiteLogo('market', logo.css);
        });
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
  });
})();