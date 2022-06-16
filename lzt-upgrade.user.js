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
// @require      https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/static/js/lztupgrade/indexedDB/UniqueStyle.js
// @require      https://raw.githubusercontent.com/ilyhalight/lzt-upgrade/master/public/static/js/lztupgrade/indexedDB/settings.js
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

const menuBtn = $('<a id="LZTUpButton">LZT Upgrade</a>');
const lztUpIcon = $('<img id="LZTUpBtnIcon" title="love" alt=":love2:" data-smilie="yes" data-src="https://i.imgur.com/ucm5U7v.gif" src="https://i.imgur.com/ucm5U7v.gif">');
$(menuBtn).prepend(lztUpIcon).on('click', async function () {
  var dbData = await readUniqueStyleDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
  var settingsData = await readSettingsDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
  var nickStyle = dbData.nickStyle || '';
  var bannerStyle = dbData.bannerStyle || '';
  var bannerText = dbData.bannerText || '';
  var badgeText = dbData.badgeText || '';
  var badgeIcon = dbData.badgeIcon || '';
  var badgeFill = dbData.badgeFill || '';
  var badgeStroke = dbData.badgeStroke || '';
  var contestsTen = settingsData.contestsTen || 0;
  var contestsAll = settingsData.contestsAll || 0;
  var contestsInfoTop = settingsData.contestsInfoTop || 0;
  var contestsBtnTopInBlock = settingsData.contestsBtnTopInBlock || 0;

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
        <img alt="Image" id="LZTUpListIcon" src="http:/localhost:3000/static/img/color.svg" loading=lazy>
        <span id="LZTUpListText">Локальный Уник</span>
      </div>
      <div id="LZTUpListItem" class="LZTUpContestsItem">
        <img alt="Image" id="LZTUpListIcon" src="http:/localhost:3000/static/img/gift.svg" loading=lazy>
        <span id="LZTUpListText">Розыгрыши</span>
      </div>
    </div>
    <div id="LZTUpList" class="LZTUpSettingsList">
      <div id="LZTUpListItem">
        <img alt="Image" id="LZTUpListIcon" src="http:/localhost:3000/static/img/more.svg" loading=lazy>
        <span id="LZTUpListText">Lorem Ipsum</span>
      </div>
      <div id="LZTUpListItem">
        <img alt="Image" id="LZTUpListIcon" src="http:/localhost:3000/static/img/more.svg" loading=lazy>
        <span id="LZTUpListText">Lorem Ipsum</span>
      </div>
      <div id="LZTUpListItem">
        <img alt="Image" id="LZTUpListIcon" src="http:/localhost:3000/static/img/more.svg" loading=lazy>
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
        <input type="checkbox" name="open_all" value="1" id="contests_info_top" ${contestsInfoTop === 1 ? "checked" : ''}>
        <label for="contests_info_top">Отображение информации о розыгрыше сверху темы</label>
      </div>
      <div id="LZTUpModalChecksContainer">
        <input type="checkbox" name="open_all" value="1" id="contests_btn_top_in_block" ${contestsBtnTopInBlock === 1 ? "checked" : ''}>
        <label for="contests_btn_top_in_block">Отображение кнопки "Участвовать" сверху блока с информацией о розыгрыше</label>
      </div>
      <input id="LZTUpResetSettingsDB" type="button" value="Сбросить настройки" class="button primary"></input>
    </div>
    `
  );

  var $LZTUpTabs = $('ul#LZTUpTabs');
  var $mainList = $('div.LZTUpMainList');
  var $settingsList = $('div.LZTUpSettingsList');
  var $uniqContainer = $('div#LZTUpUniqContainer');
  var $contestsContainer = $('div#LZTUpContestsContainer');
  $settingsList.hide();
  $contestsContainer.hide();
  $uniqContainer.hide();
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
      $mainList.remove();
      $LZTUpTabs.remove();
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
      $mainList.remove();
      $LZTUpTabs.remove();
      $contestsContainer.show();
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

function registerMenuBtn(element) {
  var menuForAdd = $('#AccountMenu > a:nth-child(10)');
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
  var links = $('div.discussionListItem--Wrapper')
  .find('a.listBlock.main')
  .toArray()
  .map(element => $(element).attr('href'));
  return links
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
      console.log(marginToFind)
      var $lastMarginBlock = $contestsThreadBlock.find(marginToFind)
      $participateButton.attr("style", "margin: 15px 0 0");
      $contestsThreadBlock.css('padding', "5px");
      $lastMarginBlock.after($participateButton);
      $contestCaptcha === undefined ? null : $participateButton.before($contestCaptcha);
    }
  }
}

if (getUserid() === '') return;

var MenuResult = registerMenuBtn(menuBtn);
var isUniqueDBInited = await initUniqueStyleDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
var isSettingsDBInited = await initSettingsDB().then(value => {return(value)}).catch(err => {console.error(err); return false});

if (isSettingsDBInited) {
  var dbData = await readSettingsDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
  if (dbData.contestsTen === 1 || dbData.contestsAll === 1) {
    await onClickCategoryContestsHandler();
    dbData.contestsTen === 1 ? await regOpenContestsBtn(10) : null;
    dbData.contestsAll === 1 ? await regOpenContestsBtn(100) : null;
  }
  dbData.contestsInfoTop === 1 ? await contestThreadBlockMove(true) : null;
  dbData.contestsBtnTopInBlock === 1 ? await contestsBtnInBlockMove(true) : null;
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

  $(document).on('click', '#LZTUpResetSettingsDB', async function () {
    await deleteSettingsDB();
    await initSettingsDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
    alert('Настройки LZTUp сброшены');
    await sleep(500);
    window.location.reload();
  });

  $(document).on('click', '#contests_open_ten', async function () {
    $('#contests_open_ten')[0].checked ? (
      await updateSettingsDB(1),
      await regOpenContestsBtn(10)
      ): (
        await updateSettingsDB(0),
        await removeOpenContestsBtn(10)
      );
  })
  $(document).on('click', '#contests_open_all', async function () {
    $('#contests_open_all')[0].checked ? (
      await updateSettingsDB(null, 1),
      await regOpenContestsBtn(100)
      ): (
        await updateSettingsDB(null, 0),
        await removeOpenContestsBtn(100)
      );
  })
  $(document).on('click', '#contests_info_top', async function () {
    $('#contests_info_top')[0].checked ? (
      await updateSettingsDB(null, null, 1),
      await contestThreadBlockMove(true)
      ): (
        await updateSettingsDB(null, null, 0),
        await contestThreadBlockMove(false)
      );
  })
  $(document).on('click', '#contests_btn_top_in_block', async function () {
    $('#contests_btn_top_in_block')[0].checked ? (
      await updateSettingsDB(null, null, null, 1),
      await contestsBtnInBlockMove(true)
      ): (
        await updateSettingsDB(null, null, null, 0),
        await contestsBtnInBlockMove(false)
      );
  })
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