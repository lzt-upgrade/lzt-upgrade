// ==UserScript==
// @name [Development Build] LZT Upgrade
// @description A free extension for Lolzteam with many useful features
// @description:ru Бесплатное расширение для Lolzteam с множеством полезных функций
// @version 2.0.0dev
// @author Toil
// @supportURL https://github.com/lzt-upgrade/lzt-upgrade/issues
// @match *://*.lolz.guru/*
// @match *://*.lolz.live/*
// @match *://*.zelenka.guru/*
// @match *://*.lzt.market/*
// @match *://*.lolz.market/*
// @connect lztupgrade.toiloff.ru
// @connect greasyfork.org
// @downloadURL https://github.com/lzt-upgrade/lzt-upgrade/raw/master/dist/lzt-upgrade.user.js
// @grant GM_xmlhttpRequest
// @grant GM_info
// @grant GM_addStyle
// @homepageURL https://github.com/lzt-upgrade/lzt-upgrade
// @icon https://cdn.jsdelivr.net/gh/lzt-upgrade/lzt-upgrade@latest/src/images/logo-mini.png
// @license MIT
// @namespace lztupgrade
// @require https://cdn.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min.js
// @require https://raw.githubusercontent.com/lzt-upgrade/coloris-lzt-theme/main/dist/coloris.js
// @require https://raw.githubusercontent.com/lzt-upgrade/lzt-upgrade/2.0.0/libs/purify3.0.3.min.js
// @require https://raw.githubusercontent.com/lzt-upgrade/lzt-upgrade/2.0.0/libs/Sortable1.15.0.min.js
// @run-at document-start
// @updateURL https://github.com/lzt-upgrade/lzt-upgrade/raw/master/dist/lzt-upgrade.user.js
// ==/UserScript==

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/buttons.scss":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#LZTUpButton{color:#0daf77;font-weight:600}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/errorPage.scss":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".LZTUpErrorPage{background-color:#272727}.LZTUpErrorPage article{color:#d6d6d6}.LZTUpErrorPage article div{display:flex;flex-direction:column;justify-content:center;align-items:center}.LZTUpErrorPage article div .LZTUpErrorPageSelfAd{border-top:1px solid #363636}.LZTUpErrorPage article div .LZTUpErrorPageSelfAd .selfAd{font-size:18px;color:#949494;max-width:75%;text-align:center}.LZTUpErrorPage article div .LZTUpErrorPageSelfAd .buttons{display:flex;flex-direction:row}.LZTUpErrorPage article div .LZTUpErrorPageSelfAd .buttons .button{background:#0daf77;border-radius:6px;color:#fff;padding:0px 15px;margin:10px;line-height:34px;font-size:18px;transition:.5s background ease}.LZTUpErrorPage article div .LZTUpErrorPageSelfAd .buttons .button:hover{background:rgba(13,175,119,.8) !important}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/menu.scss":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://cdn.jsdelivr.net/gh/lzt-upgrade/coloris-lzt-theme@latest/dist/coloris.min.css);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".LZTUpColorPickerWrap{display:flex;align-items:center}.LZTUpColorPickerWrap:not(:first-of-type){margin-top:10px}.LZTUpColorPickerWrap .LZTUpModalDescription{margin-right:10px !important}.LZTUpColorPickerWrap .clr-field input{width:24px;height:24px}.LZTUpColorPickerWrap .clr-field button{width:28px;height:28px}.LZTUpColorPickerWrap .clr-field input,.LZTUpColorPickerWrap .clr-field button{border-radius:4px}.LZTUpIconButton{display:flex;flex-direction:row-reverse;align-items:center;justify-content:center}.LZTUpIconButton.fit{max-width:fit-content}.LZTUpIconButton i{margin:0 8px;margin-top:3.5px}.LZTUpSortableItem{display:flex;align-items:center;padding:16px;margin:8px 0;border-radius:8px;background:rgba(54,54,54,.75)}.LZTUpSortableItem .LZTUpSortableDraggable{color:#8c8c8c;margin-right:10px;cursor:move}.LZTUpSortableItem .LZTUPSortableContent p{margin:0 !important}.LZTUpSortableItem .LZTUpSortableUtility{display:flex;margin-left:auto}.LZTUpSortableItem .LZTUpSortableUtility div{margin-left:10px;cursor:pointer;transition:.5s color ease}.LZTUpSortableItem .LZTUpSortableUtility .LZTUpSortableEditButton{color:#6a6a6a}.LZTUpSortableItem .LZTUpSortableUtility .LZTUpSortableEditButton:hover{color:#0daf77}.LZTUpSortableItem .LZTUpSortableUtility .LZTUpSortableRemoveButton{color:#964448}.LZTUpSortableItem .LZTUpSortableUtility .LZTUpSortableRemoveButton:hover{color:#f13838}#LZTUpModalMainTitle{text-align:center;padding:16px;font-size:20px;font-weight:bold}.LZTUpModalBackButton{position:absolute;top:18px;left:25px;padding:0px 5px;margin:-4px -5px;cursor:pointer;line-height:25px;height:26px;width:26px;border:0 !important;background:rgba(0,0,0,0);color:#d6d6d6;font-size:18px}.LZTUpModalBackButton:hover{background:rgba(18,76,50,.4);border-radius:8px}.LZTUpTabs{width:100%;box-sizing:border-box;padding:0 10px;border:none !important;margin:15px auto !important;display:flex;align-items:center;justify-content:center}.LZTUpTabs #LZTUpTab{position:relative;padding:10px;margin:0 4px;float:left;font-weight:600;list-style:none;font-size:14px}.LZTUpTabs #LZTUpTab:hover{cursor:pointer}.LZTUpTabs #LZTUpTab.active{box-shadow:inset 0px -2px 0px 0px #0daf77;transform:translateY(-1px);transition:.2s}.LZTUpTabs #LZTUpTab:not(.active):hover{box-shadow:inset 0px -2px 0px 0px #363636}.LZTUpSection{display:flex;flex-wrap:wrap;margin:20px 15px}.LZTUpSection #LZTUpSectionItem{max-width:284px;flex-basis:50%;flex-grow:1;height:64px;display:flex;align-items:center;transition:all .5s ease}.LZTUpSection #LZTUpSectionItem:hover{background:rgba(54,54,54,.75);border-radius:8px;cursor:pointer}#LZTUpIcon{width:28px;height:28px;margin:20px;font-size:28px;color:#0daf77}#LZTUpIcon .gray{color:#949494}#LZTUpIcon .right{text-align:right}#LZTUpSubText{display:block;margin-right:20px;font-size:13px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;width:200px;color:#949494}#LZTUpModalContainer{margin:15px;max-width:400px}#LZTUpModalChecksContainer,#LZTUpModalReportButtonsContainer,#LZTUpModalCell,.LZTUpModalMesh,.LZTUpModalSeparator{margin:15px;max-width:95%}.LZTUpContainer{display:flex;flex-direction:column;margin:15px;max-width:95%}.LZTUpModalHeading{margin:10px 0 5px 0 !important}.LZTUpModalDescription{margin:0 !important;margin-bottom:5px !important}.LZTUpTextArea{min-height:40px}.LZTUpModalSeparator{border-bottom:1px solid #363636}#LZTUpModalChecksText{margin:0px 25px 5px}#LZTUpText{display:block;margin-right:20px;font-size:15px;font-weight:bold;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;width:200px}.LZTUpModalSectionTexts{display:flex;flex-direction:column;justify-content:center;flex:1 1 auto}.LZTUpModalSectionTexts #LZTUpSubText{max-width:450px}#LZTUpModalComment{background:#363636;margin:5px 15px;padding:10px 15px;border-radius:10px}#LZTUpModalComment a{color:#00ba78}.LZTUpModalBlock{display:flex}.LZTUpModalBlockButtons{display:flex;flex-wrap:wrap;justify-content:center;margin-top:25px}.LZTUpModalBlockButtons .button{margin:5px;width:250px}#LZTUpPreviewContainer{display:flex}#LZTUpSubMenu .previewContainer{float:right;margin-left:15px;margin-top:25px;padding:10px 10px 15px 10px;background-size:cover;background-position:center;background-attachment:fixed;background-repeat:no-repeat;border-radius:10px;width:92%;max-width:92%}#LZTUpSubMenu .previewContainer .avatar img{width:66px;height:66px}#LZTUpSubMenu .previewContainer .info{padding:0 0 0 20px}#LZTUpSubMenu .previewContainer .info .username{font-weight:600}#LZTUpSubMenu .previewContainer .bannerOrStatus{min-width:150px;margin:10px 0 0;color:#949494}#LZTUpSubMenu .previewContainer .bannerOrStatus em{font-style:inherit}#LZTUpSubMenu .previewContainer #LZTUpPreviewBadge .customUniqIcon{padding:2px 0;text-align:center}#LZTUpSubMenu .previewContainer #LZTUpPreviewBadge .customUniqIcon svg{width:16px !important;height:16px !important}#LZTUpSubMenu .previewContainer #LZTUpPreviewBadge::before{font-family:\"Font Awesome 5 Pro\";font-weight:600;display:inline-block;font-size:12.32px}#LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.admin{background:#964448}#LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.admin::before,#LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.bot::before{content:\"\"}#LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.Designer::before{content:\"\"}#LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.headDesigner::before{content:\"\"}#LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.editor::before{content:\"\"}#LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.sponsor::before{content:\"\"}#LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.coder::before{content:\"\"}#LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.uniq_default::before,#LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.Legend::before,#LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.Ikarus::before{content:\"\"}#LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.moder{background:#3d6b39}#LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.curator{background:rgba(8,156,122,.8509803922)}#LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.moder::before,#LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.main_moder::before,#LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.curator::before{content:\"\"}#LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.arbitr::before,#LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.main_arbitr::before{content:\"\"}#LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.telegramBot::before{content:\"\"}#LZTUpSubMenu .previewContainer .UsernameStyle.style18,#LZTUpSubMenu .previewContainer .UsernameStyle.style360{text-decoration:line-through;color:#aaa}#LZTUpSubMenu .previewContainer .UsernameStyle.style3{color:#f13838}#LZTUpSubMenu .previewContainer .UsernameStyle.style30{color:#ff9afc}#LZTUpSubMenu .previewContainer .UsernameStyle.style353{background:linear-gradient(98.26deg, #FF42F7 2.08%, #FF24CF 100%);-webkit-background-clip:text;-webkit-text-fill-color:rgba(0,0,0,0)}#LZTUpSubMenu .previewContainer .UsernameStyle.style350{background:linear-gradient(90deg, #5c45ff, #feb5f2 100%);-webkit-background-clip:text;-webkit-text-fill-color:rgba(0,0,0,0)}#LZTUpSubMenu .previewContainer .UsernameStyle.style12{color:#01f73c}#LZTUpSubMenu .previewContainer .UsernameStyle.style1,#LZTUpSubMenu .previewContainer .UsernameStyle.style41,#LZTUpSubMenu .previewContainer .UsernameStyle.style142,#LZTUpSubMenu .previewContainer .UsernameStyle.style144{color:#aaa}#LZTUpSubMenu .previewContainer .UsernameStyle.style32,#LZTUpSubMenu .previewContainer .UsernameStyle.style93,#LZTUpSubMenu .previewContainer .UsernameStyle.style21,#LZTUpSubMenu .previewContainer .UsernameStyle.style2{color:#949494}#LZTUpSubMenu .previewContainer .UsernameStyle.style60{color:#ffa8af}#LZTUpSubMenu .previewContainer .UsernameStyle.style9{color:#0075ad}#LZTUpSubMenu .previewContainer .UsernameStyle.style65{color:#a5e3ff}#LZTUpSubMenu .previewContainer .UsernameStyle.style351{color:#ff0076}#LZTUpSubMenu .previewContainer .UsernameStyle.style29{color:#0acc9e}#LZTUpSubMenu .previewContainer .UsernameStyle.style26{background:linear-gradient(90deg, #0095dd 0%, #f1094b 100%, #0095dd);-webkit-background-clip:text;-webkit-text-fill-color:rgba(0,0,0,0)}#LZTUpSubMenu .previewContainer .UsernameStyle.style4{color:#0e9100}#LZTUpSubMenu .previewContainer .UsernameStyle.style22{color:#eee}#LZTUpSubMenu .previewContainer .UsernameStyle.style11{color:#56b5e0}#LZTUpSubMenu .previewContainer .UsernameStyle.style7{color:#ff9304}#LZTUpSubMenu .previewContainer .UsernameStyle.style349,#LZTUpSubMenu .previewContainer .UsernameStyle.style365{color:#0087ff}#LZTUpSubMenu .previewContainer .UsernameStyle.style354{color:aqua}#LZTUpSubMenu .previewContainer .UsernameStyle.style218{color:#f13838}#LZTUpSubMenu .previewContainer .UsernameStyle.style359{color:#e5d9a3}#LZTUpSubMenu .previewContainer .UsernameStyle.style8{color:gold}#LZTUpSubMenu .previewContainer .UsernameStyle.style265{background:linear-gradient(35deg, #006eff, #00ff81 52%, #fff 50%, #93cbff);-webkit-background-clip:text;-webkit-text-fill-color:rgba(0,0,0,0);text-shadow:0 0 7px rgba(0,255,207,.5019607843)}#LZTUpSubMenu .previewContainer .UsernameStyle.style23{color:#b35ede}#LZTUpSubMenu .previewContainer .UsernameStyle.banned,#LZTUpSubMenu .previewContainer .UsernameStyle.is_banned{text-decoration:line-through;background:inherit;-webkit-text-fill-color:inherit;text-shadow:inherit !important;color:#aaa !important}#LZTUpSubMenu .previewContainer .avatarBox{position:relative}#LZTUpSubMenu .previewContainer .avatarBox .avatarUserBadges .badgeDefaultBackground{background:#363636}#LZTUpSubMenu .previewContainer .avatarBox .avatarUserBadges .avatarUserBadge{position:absolute;bottom:-12px;left:20px;border:2px solid #272727;font-size:0;width:22px;height:22px;margin:0;line-height:22px;border-radius:50%;text-align:center;text-shadow:none !important;box-shadow:none !important;border-radius:50% !important;-webkit-background-clip:unset !important;-webkit-text-fill-color:unset !important;overflow:hidden}#LZTUpSubMenu .previewContainer .avatarBox .avatarUserBadges .avatarUserBadge:only-child{left:35px}#LZTUpSubMenu .previewContainer .avatarBox .avatarUserBadges .avatarUserBadge.avatarUserBadge--1{left:20px}#LZTUpSubMenu .previewContainer .avatarBox .avatarUserBadges .avatarUserBadge.avatarUserBadge--2{left:40px}#LZTUpSubMenu .previewContainer .avatarBox,#LZTUpSubMenu .previewContainer .info{display:table-cell;vertical-align:top}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

;// CONCATENATED MODULE: ./src/configs/config.js
const config = () => {
  return {
    'extName':  false ? 0 : 'LZT Upgrade Development Build',
  }
}

/* harmony default export */ const configs_config = (config());
;// CONCATENATED MODULE: ./src/configs/extData.js
const extData = () => {
  return {
    nodes: {
      contests: '.node766'
    },
    elements: {
      memberCard: '.xenOverlay.memberCard'
    },
  }
}

/* harmony default export */ const configs_extData = (extData());
;// CONCATENATED MODULE: ./src/utils/utils.js
function waitForElm(selector) {
  // https://stackoverflow.com/questions/5525071/how-to-wait-until-an-element-exists
  return new Promise(resolve => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver(() => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
}

async function waitForElement(selector, timeout = 15000) {
  const start = Date.now();

  while (Date.now() - start < timeout) {
    const el = $(selector);
    if ((el && el.length) || Date.now() - start > timeout) {
      return el;
    }
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  return null;
}

async function waitForCSRFToken(timeout = 15000) {
  const start = Date.now();

  while (Date.now() - start < timeout) {
    const _csrfToken = XenForo._csrfToken;
    if ((_csrfToken && _csrfToken.length) || Date.now() - start > timeout) {
      return _csrfToken;
    }
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  return null;
}

const sleep = m => new Promise(r => setTimeout(r, m))

function hasOwn(element, property) {
  return Object.prototype.hasOwnProperty.call(element, property);
}

function getNodeLinks() {
  let latestsThreads = $('div.latestThreads');
  const stickyThreads = $('div.stickyThreads');
  latestsThreads = stickyThreads.is(':visible') ? $.merge(latestsThreads, stickyThreads) : latestsThreads;
  return latestsThreads.find('div.discussionListItem--Wrapper');
}

function getThreadLinks() {
  let links = getNodeLinks()
  .find('a.listBlock.main')
  .toArray()
  .map(element => $(element).attr('href'));
  return links;
}

function removeStyles(selector) {
  const el = document.querySelector(selector);
  if (!el) {
    return;
  }

  el.className = ''
  el.style = '';

  return el;
}

function applyStyle(el, style) {
  if (style?.length > 1 && style?.startsWith('.')) {
    style = style.replace('.', '');
    return el.classList.add(style);
  } else {
    return el.style = style;
  }
}


;// CONCATENATED MODULE: ./src/utils/logger.js
const Logger = {};
Logger.log = (...text) => {
  return console.log("%c[LZT Upgrade]", "background: #0daf77; color: #fff; padding: 5px;", ...text);
}

Logger.error = (...text) => {
  return console.error("%c[LZT Upgrade]", "background: #0daf77; color: #fff; padding: 5px;", ...text);
}

Logger.warn = (...text) => {
  return console.warn("%c[LZT Upgrade]", "background: #0daf77; color: #fff; padding: 5px;", ...text);
}

Logger.info = (...text) => {
  return console.info("%c[LZT Upgrade]", "background: #0daf77; color: #fff; padding: 5px;", ...text);
}

Logger.debug = (...text) => {
  if (false) {}
}


;// CONCATENATED MODULE: ./src/events/participate.js



function onParticipateHandler(callback, sleepTime = 1000) {
  return waitForElm('.LztContest--Participate')
    .then(el => {
      Logger.debug('onParticipateHandler: Participate button finded');
      el.addEventListener('click', async () => {
        Logger.debug('onParticipateHandler: click contest button');
        if (!el.classList.contains('disabled')) {
          Logger.debug('onParticipateHandler: waiting for alreadyParticipate button');
          const elem = await waitForElm('span.alreadyParticipate');
          if (!elem) {
            Logger.debug('onParticipateHandler: no alreadyParticipate button');
            return;
          }

          Logger.debug('onParticipateHandler: alreadyParticipate button finded');
          await sleep(sleepTime);
          callback();
        } else {
          Logger.debug('onParticipateHandler: clicked on disabled contest button');
        }
      })
    })
    .catch(el => {
      Logger.debug('onParticipateHandler: no contest button');
    });
}


;// CONCATENATED MODULE: ./src/callbacks/contestsAutoClose.js


function contestsAutoCloseHandler(toggle) {
  if (toggle) {
    onParticipateHandler(() => {
      window.close();
    })
  };
}


;// CONCATENATED MODULE: ./src/configs/endpoints.json
const endpoints_namespaceObject = JSON.parse('{"RC":"https://lztupgrade.toiloff.ru/api/themes","I1":"https://lztupgrade.toiloff.ru/static/themes"}');
;// CONCATENATED MODULE: ./src/api/requestJSON.js


async function requestJSON(endpoint, errText) {
  try {
    return await $.ajax({
      url: endpoint,
      dataType: 'json'
    });
  } catch (err) {
    Logger.log(errText);
    return false;
  }
}


;// CONCATENATED MODULE: ./src/api/lztupgrade/getThemes.js



async function getThemes() {
  return await requestJSON(endpoints_namespaceObject.RC, `Не удалось получить список тем (${endpoints_namespaceObject.RC})`);
}


;// CONCATENATED MODULE: ./src/api/lztupgrade/loadTheme.js



async function loadTheme(themeName) {
  try {
    let res = await fetch(`${endpoints_namespaceObject.I1}/${themeName}.css`)

    if (res.status === 200) {
      Logger.debug("LoadTheme: Status code 200. Adding theme styles...");
      const styles = await res.text();
      GM_addStyle(styles); // ! Maybe need to add polyfills
      return true;
    }

    Logger.debug(`LoadTheme: Failed to load theme. Status code: ${res.status}, Status message: ${res.statusText}`);
    return false;
  } catch (err) {
    Logger.error(`Failed to load theme ${themeName} (${endpoints_namespaceObject.I1}/${themeName}.css). Error: `, err);
    return false;
  }
}


;// CONCATENATED MODULE: ./src/callbacks/extensionStart.js




function loadThemeByID(themeId) {
  // Loading theme by ID
  return new Promise(async (resolve, reject) => {
    Logger.debug(`onExtensionStart: Start loading theme with id ${themeId}`);
    const availabledThemes = await getThemes();
    if (availabledThemes?.length) {
      Logger.debug('onExtensionStart: Themes arrray getted: ', availabledThemes);
      const findedTheme = availabledThemes.find(theme => theme.uid === themeId && theme.active === 1);
      Logger.debug(findedTheme);
      if (findedTheme) {
        Logger.debug(`onExtensionStart: Finded active theme with id ${findedTheme.uid}`);
        const status = await loadTheme(findedTheme.file);
        Logger.debug(`onExtensionStart: Theme loading status: ${status}`);
        return resolve(status);
      }
    }

    Logger.debug(`onExtensionStart: Not finded active theme`);
    reject(false)
  });
}


;// CONCATENATED MODULE: ./src/indexedDB/default.js


/**
 *
 * @author Toil
 * @license MIT
 * @copyright Toil
 * @created 2023-02-17
 *
 * @description base LZTUpgradeDB class implementation (based on IndexedDB)
 *
 */

class LZTUpgradeDB {
  /**
   *
   *  @constructor
   *  @param {string} name - name of the database
   *  @param {string} objectKey - name of the future indexedDB object
   *  @param {number} version - version of the database
   *  @param {object} indexes - array of keys to indexes with types ({})
   *  @param {object} defaultData - array of default values to store ({})
   */

  constructor(name, objectKey, version = 1, indexes = {}, defaultData = {}) {
    this.name = name;
    this.objectKey = objectKey;
    this.version = version;
    this.indexes = indexes;
    this.defaultData = defaultData;
  }

  checker(indexes, ...args) {
    let response = false;
    if (typeof arguments[1] !== 'object') return response;

    for (const arg of Object.entries(arguments[1])) {
      if (!arg[0].toString() in indexes) continue;
      if (typeof(arg[1]) === indexes[arg[0].toString()]) response = true;
    }
    return response;
  }

  callback(indexes, data, args) {
    if (typeof args !== 'object') return response;

    for (const arg of Object.entries(args)) {
      if (!arg[0].toString() in indexes) continue;
      if (typeof(arg[1]) === indexes[arg[0].toString()]) data[arg[0].toString()] = arg[1];
    }
    return data;
  }

  /**
   * Open DB connection
   */
  open() {
    return indexedDB.open(this.name, this.version);
  }

  /**
   * Delete DB
   */
  async delete() {
    return indexedDB.deleteDatabase(this.name);
  }

  /**
   * Initialize the database
   */
  async init() {
    return new Promise((resolve, reject) => {
      const openRequest = this.open();
      openRequest.onerror = () => {
        console.log(openRequest)
        alert(`LZT Upgrade: Произошла ошибка при инициализации Базы Данных ${this.name}`);
        Logger.error(`Ошибка инициализации Базы Данных ${this.name}: `, openRequest.errorCode);
        reject(false);
      };

      openRequest.onupgradeneeded = () => {
        const db = openRequest.result;

        db.onerror = () => {
          alert(`LZT Upgrade: Не удалось загрузить базу данных ${this.name}`);
          Logger.error(`Не удалось загрузить базу данных ${this.name}: `, openRequest.error);
          reject(false);
        };

        const objectStore = db.createObjectStore(this.objectKey, {
          keyPath: "key",
        });

        for (const key in this.indexes) {
          if (key === undefined) continue;
          objectStore.createIndex(key, key, { unique: false });
        }

        Logger.log(`База Данных ${this.name} создана`);

        objectStore.transaction.oncomplete = () => {
          const objectStore = db
            .transaction(this.objectKey, "readwrite")
            .objectStore(this.objectKey);

          const request = objectStore.add(this.defaultData);

          request.onsuccess = () => {
            Logger.log(`Стандартные настройки "${this.name}" добавлены в Базу Данных: `, request.result);
            resolve(true);
          };
          request.onerror = () => {
            Logger.error(`Ошибка при добавление стандартных настроек "${this.name}" в Базу Данных: `, request.error);
            reject(false);
          };
        };
      };

      openRequest.onsuccess = () => {
        Logger.log(`База данных ${this.name} инициализована`);
        const db = openRequest.result;
        db.onversionchange = () => {
          db.close();
          alert(`LZT Upgrade: Базе данных ${this.name} необходимо обновление, пожалуйста, перезагрузите страницу.`);
          Logger.log(`Базе данных ${this.name} необходимо обновление, пожалуйста, перезагрузите страницу`);
          reject(false);
        };
        resolve(true);
      };

      openRequest.onblocked = () => {
        const db = openRequest.result;
        Logger.error(`База Данных ${this.name} временно заблокирована из-за ошибки: `, db);
        alert(`LZT Upgrade отключен из-за ошибки при обновление Базы Данных ${this.name}. Закройте все открытые вкладки с Lolzteam и попробуйте снова.`);
        reject(false);
      };
    });
  }

  /**
   * Read data from database
   */
  async read() {
    return new Promise((resolve, reject) => {
      const openRequest = this.open(this.name, this.version);

      openRequest.onerror = () => {
        alert(`LZT Upgrade: Произошла ошибка при чтение Базы Данных ${this.name}`);
        Logger.error(`Ошибка чтения Базы Данных ${this.name}: `, openRequest.errorCode);
        reject(false);
      };

      openRequest.onupgradeneeded = () => {
        const db = openRequest.result;
        db.close();
        this.init();
        resolve(true);
      };

      openRequest.onsuccess = () => {
        const db = openRequest.result;
        db.onversionchange = () => {
          db.close();
          alert(`LZT Upgrade: Базе данных ${this.name} необходимо обновление, пожалуйста, перезагрузите страницу.`);
          Logger.log(`Базе данных ${this.name} необходимо обновление, пожалуйста, перезагрузите страницу`);
          reject(false);
        };

        const objectStore = db
          .transaction(this.objectKey)
          .objectStore(this.objectKey);

        const request = objectStore.get(this.objectKey);

        request.onerror = (event) => {
          Logger.error(`Не удалось получить данные из Базы Данных ${this.name}: `, event.error);
          reject(false);
        };

        request.onsuccess = () => {
          Logger.log(`Получены данные из Базы Данных ${this.name}: `, request.result
          );
          const data = request.result;
          resolve(data);
        };
      };

      openRequest.onblocked = () => {
        const db = openRequest.result;
        Logger.error(`База Данных ${this.name} временно заблокирована из-за ошибки: `, db);
        alert(`LZT Upgrade отключен из-за ошибки при обновление Базы Данных ${this.name}. Закройте все открытые вкладки с Lolzteam и попробуйте снова.`);
        reject(false);
      };
    });
  }

  /**
    * Update data in Database
    @param {object} indexes - array of keys to indexes to storing data in an indexedDB object ([key])
    @param {function} checker - function to check for typeof (required argument - argsIndexes object)
    @param {function} callback - callback function (required argument - data object)
    */
  async update(args) {
    return new Promise((resolve, reject) => {
      if (this.checker(this.indexes, args)) {
        const openRequest = this.open(this.name);

        openRequest.onerror = () => {
          alert(`LZT Upgrade: Произошла ошибка при обновление Базы Данных ${this.name}`);
          Logger.error(`Ошибка при обновление Базы Данных ${this.name}: `, openRequest.errorCode)
          reject(false);
        };

        openRequest.onupgradeneeded = () => {
          const db = openRequest.result;
          db.close();
          this.init();
          resolve(true);
        };

        openRequest.onsuccess = () => {
          const db = openRequest.result;
          db.onversionchange = () => {
            db.close();
            alert(`LZT Upgrade: Базе данных ${this.name} необходимо обновление, пожалуйста, перезагрузите страницу.`);
            Logger.log(`Базе данных ${this.name} необходимо обновление, пожалуйста, перезагрузите страницу`);
            reject(false);
          };

          var objectStore = db
            .transaction(this.objectKey, "readwrite")
            .objectStore(this.objectKey);
          var request = objectStore.get(this.objectKey);

          request.onerror = (event) => {
            Logger.error(`Не удалось получить данные из Базы Данных ${this.name}: `, event.error);
            reject(false);
          };

          request.onsuccess = () => {
            Logger.log(`Получены данные из Базы Данных ${this.name}: `, request.result);
            let data = request.result;
            data = this.callback(this.indexes, data, args);

            const requestUpdate = objectStore.put(data);

            requestUpdate.onerror = (event) => {
              Logger.error(`Не удалось обновить данные в Базе Данных ${this.name}: `, event.error);
              reject(false);
            };

            requestUpdate.onsuccess = () => {
              Logger.log("Данные в Базе Данных обновлены, вы великолепны!");
              resolve(true);
            };
          };
        };

        openRequest.onblocked = () => {
          const db = openRequest.result;
          Logger.error(`База Данных ${this.name} временно заблокирована из-за ошибки: `, db);
          alert(`LZT Upgrade отключен из-за ошибки при обновление Базы Данных ${this.name}. Закройте все открытые вкладки с Lolzteam и попробуйте снова.`);
          reject(false);
        };
      } else {
        Logger.error("В чём смысл делать функцию добавления, которая ничего не добавляет?! wut");
        reject(false);
      }
    });
  }
}


;// CONCATENATED MODULE: ./src/indexedDB/appear.js



/**
 *
 * @author Toil
 * @license MIT
 * @copyright Toil
 * @created 2023-02-17
 *
 * @description LZTAppearDB class implementation
 *
 */

class LZTAppearDB extends LZTUpgradeDB {
  /**
   *
   *  @constructor
   *  @param {string} name - name of the database
   *  @param {string} objectKey - name of the future indexedDB object
   *  @param {number} version - version of the database
   */

  constructor(name = 'LZTUpAppear', objectKey = 'appear', version = 1) {
    super(
      name,
      objectKey,
      version,
      { // indexes
        'hideUnreadArticleCircle': 'number',
        'hideTagsInThreads': 'number',
        'forumLogo': 'number',
        'hideCounterAlerts': 'number',
        'hideCounterConversations': 'number',
        'marketLogo': 'number',
        'reportButtonsInPost': 'string',
        'selectedTheme': 'number',
        'themeAutoReload': 'number',
        'backgroundEffect': 'number',
        'hideOnlyfans': 'number',
        'showPollResults': 'number',
        'newErrorPage': 'number',
        'selfAdOnNewErrorPage': 'number',
      },
      { // defaultData
        key: objectKey,
        hideUnreadArticleCircle: 0,
        hideTagsInThreads: 0,
        forumLogo: 0,
        hideCounterAlerts: 0,
        hideCounterConversations: 0,
        marketLogo: 0,
        reportButtonsInPost: '',
        selectedTheme: 0,
        themeAutoReload: 0,
        backgroundEffect: 0,
        hideOnlyfans: 0,
        showPollResults: 0,
        newErrorPage: 1,
        selfAdOnNewErrorPage: 1
      }
    );
  };

  async update({
    hideUnreadArticleCircle,
    hideTagsInThreads,
    forumLogo,
    hideCounterAlerts,
    hideCounterConversations,
    marketLogo,
    reportButtonsInPost,
    selectedTheme,
    themeAutoReload,
    backgroundEffect,
    hideOnlyfans,
    showPollResults,
    newErrorPage,
    selfAdOnNewErrorPage,
  }) {
    super.update(...arguments);
  }
}


;// CONCATENATED MODULE: ./src/indexedDB/contests.js



/**
 *
 * @author Toil
 * @license MIT
 * @copyright Toil
 * @created 2023-02-17
 *
 * @description LZTContestsDB class implementation
 *
 */

class LZTContestsDB extends LZTUpgradeDB {
  /**
   *
   *  @constructor
   *  @param {string} name - name of the database
   *  @param {string} objectKey - name of the future indexedDB object
   *  @param {number} version - version of the database
   */

  constructor(name = 'LZTUpContests', objectKey = 'contests', version = 1) {
    super(
      name,
      objectKey,
      version,
      { // indexes
        'openTenContestsBtn': 'number',
        'infoTopInThread': 'number',
        'hideTagsInThread': 'number',
        'autoCloseOnParticipate': 'number',
        'removeContent': 'number',
        'removePoll': 'number',
      },
      { // defaultData
        key: objectKey,
        openTenContestsBtn: 0,
        infoTopInThread: 0,
        hideTagsInThread: 0,
        autoCloseOnParticipate: 0,
        removeContent: 0,
        removePoll: 0,
      }
    );
  };

  async update({
    openTenContestsBtn,
    infoTopInThread,
    hideTagsInThread,
    autoCloseOnParticipate,
    removeContent,
    removePoll,
  }) {
    super.update(...arguments);
  }
}


;// CONCATENATED MODULE: ./src/indexedDB/users.js



/**
 *
 * @author Toil
 * @license MIT
 * @copyright Toil
 * @created 2023-02-17
 *
 * @description LZTUsersDB class implementation
 *
 */

class LZTUsersDB extends LZTUpgradeDB {
  /**
   *
   *  @constructor
   *  @param {string} name - name of the database
   *  @param {string} objectKey - name of the future indexedDB object
   *  @param {number} version - version of the database
   */

  constructor(name = 'LZTUpUsers', objectKey = 'users', version = 1) {
    super(
      name,
      objectKey,
      version,
      { // indexes
        'showUserIdInProfile': 'number',
        'showUserIdInMemberCard': 'number',
        'showFullRegInProfile': 'number',
        'disableShareTyping': 'number',
      },
      { // defaultData
        key: objectKey,
        showUserIdInProfile: 0,
        showUserIdInMemberCard: 0,
        showFullRegInProfile: 0,
        disableShareTyping: 0,
      }
    );
  };

  async update({
    showUserIdInProfile,
    showUserIdInMemberCard,
    showFullRegInProfile,
    disableShareTyping,
  }) {
    super.update(...arguments);
  }
}


;// CONCATENATED MODULE: ./src/indexedDB/profile.js



/**
 *
 * @author Toil
 * @license MIT
 * @copyright Toil
 * @created 2023-02-17
 *
 * @description LZTProfileDB class implementation
 *
 */

class LZTProfileDB extends LZTUpgradeDB {
  /**
   *
   *  @constructor
   *  @param {string} name - name of the database
   *  @param {string} objectKey - name of the future indexedDB object
   *  @param {number} version - version of the database
   */

  constructor(name = 'LZTUpProfile', objectKey = 'uniqueStyle', version = 1) {
    super(
      name,
      objectKey,
      version,
      { // indexes
        'usernameStyle': 'string',
        'bannerStyle': 'string',
        'bannerText': 'string',
        'badgeIcon': 'string',
        'badgeText': 'string',
        'badgeFill': 'string',
        'badgeStroke': 'string',
        'noticesMarks': 'string',
        'profileBackground': 'string',
        'profileBackgroundEverywhere': 'number',
        'badgeIcons': 'object'
      },
      { // defaultData
        key: objectKey,
        usernameStyle: '',
        bannerStyle: '',
        bannerText: '',
        badgeIcon: '',
        badgeText: '',
        badgeFill: '',
        badgeStroke: '',
        noticesMarks: '',
        profileBackground: '',
        profileBackgroundEverywhere: 0,
        badgeIcons: []
      }
    );
  };

  async update({
    usernameStyle,
    bannerStyle,
    bannerText,
    badgeIcon,
    badgeText,
    badgeFill,
    badgeStroke,
    noticesMarks,
    profileBackground,
    profileBackgroundEverywhere,
    badgeIcons
  }) {
    super.update(...arguments);
  }
}


;// CONCATENATED MODULE: ./src/indexedDB/settings.js



/**
 *
 * @author Toil
 * @license MIT
 * @copyright Toil
 * @created 2023-02-17
 *
 * @description LZTSettingsDB class implementation
 *
 */

class LZTSettingsDB extends LZTUpgradeDB {
  /**
   *
   *  @constructor
   *  @param {string} name - name of the database
   *  @param {string} objectKey - name of the future indexedDB object
   *  @param {number} version - version of the database
   */

  constructor(name = 'LZTUpSettings', objectKey = 'settings', version = 1) {
    super(
      name,
      objectKey,
      version,
      { // indexes
        'checkUpdatesOnLoad': 'number',
      },
      { // defaultData
        key: objectKey,
        checkUpdatesOnLoad: 1,
      }
    );
  };

  async update({
    checkUpdatesOnLoad,
  }) {
    super.update(...arguments);
  }
}


;// CONCATENATED MODULE: ./src/utils/checkers.js


// Returns true if it is a DOM element
// https://stackoverflow.com/questions/384286/how-do-you-check-if-a-javascript-object-is-a-dom-object
function isElement(o){
  return (
    typeof HTMLElement === 'object' ? o instanceof HTMLElement : //DOM2
    o && typeof o === 'object' && o !== null && o.nodeType === 1 && typeof o.nodeName === 'string'
  );
}

function isContestThread() {
  return document.querySelector('div.contestThreadBlock') !== null;
}

function isContestsNode() {
  const currentPage = window.location.pathname;
  return currentPage.includes('/forums/contests/');
}

function isProfilePage() {
  return document.querySelector('ol#ProfilePostList') !== null;
}

function isThreadPage() {
  return document.querySelector('div#content.thread_view') !== null;
}

function checkers_isOpenMemberCard() {
  return document.querySelector(configs_extData.elements.memberCard) !== null;
}


;// CONCATENATED MODULE: ./src/ui/buttons/contestsButton.js




function regOpenContestsBtn(amount = 10) {
  if (isContestsNode() && !$(`#openContestsButton${XenForo.htmlspecialchars(amount)}`).length) {
    const updateButton = $('span.UpdateFeedButton.UpdateFeedButtonIcon');
    const openContestsButton = $(`
      <a class="button" id="openContestsButton${XenForo.htmlspecialchars(amount)}">
        Открыть ${XenForo.htmlspecialchars(amount)}
      </a>
    `);

    openContestsButton.on('click', async () => {
      updateButton.click();
      const el = await waitForElement('div.forumImprovements--mask.hidden');
      if (!el) return;

      const links = getThreadLinks();
      if (links.length) {
        $(links).map((element, value) => {
          if (element <= amount) {
            const win = window.open(`https://${window.location.hostname}/${value}`);
            win ? win.focus() : alert('Разрешите доступ к всплывающим окнам для этого сайта');
          } else {
            return;
          }
        })
      }
    });

    updateButton.length ? updateButton.parent().prepend(openContestsButton) : undefined;
  }
}

function removeOpenContestsBtn(amount = 10) {
  if (isContestsNode()) {
    const openContestsButton = $(`#openContestsButton${XenForo.htmlspecialchars(amount)}`);
    openContestsButton.length ? openContestsButton.remove() : null;
  }
}


;// CONCATENATED MODULE: ./src/utils/registers.js
function registerModal(modalName, elementMain = '') {
  return XenForo.alert(elementMain, modalName, null, (elem) => {
    document.querySelector('div.modal.fade').remove();
  })
}

function registerAlert(text, timeout = 5000) {
  return XenForo.alert(text, '', timeout);
}

function registerMenuButton(el) {
  const menu = document.querySelector('#AccountMenu > ul:nth-child(1) > li:nth-child(10)');
  menu.insertAdjacentElement('afterend', el);
  return true;
}

function registerObserver(callback) {
  const observer = new MutationObserver((mutationsList, observer) => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        callback(mutation);
      }
    }
  });

  const config = { childList: true, subtree: true };
  observer.observe(document.body, config);
  return observer;
}


;// CONCATENATED MODULE: ./src/ui/kit/menuSection.js
class MenuSection {
  /**
   *
   *  @constructor
   *  @param {string} className - class name of the section
   *  @param {object} sectionItems - array of section items
   */

  constructor(id, sectionItems) {
    this.id = id;
    this.sectionItems = sectionItems;
  }

  create() {
    const section = document.createElement('div');
    section.id = this.id;
    section.className = 'LZTUpSection';

    for (const sectionItem of this.sectionItems) {
      section.appendChild(sectionItem);
    }

    section.style.display = 'none';
    return section;
  }
}


;// CONCATENATED MODULE: ./src/ui/kit/icons.js
function createMenuIcon(className, id = 'LZTUpIcon') {
  const icon = document.createElement('i');
  icon.id = id;
  icon.className = className;
  return icon;
}


;// CONCATENATED MODULE: ./src/ui/kit/button.js


class Button {
  /**
   *
   *  @constructor
   *  @param {string} buttonText - text of the button
   *  @param {string} className - class name of the button
   *  @param {string} iconClassName - class name of the icon (if undefined icon is not added)
   */

  constructor(buttonText, className = 'button', iconClassName = undefined) {
    this.buttonText = buttonText;
    this.className = className;
    this.iconClassName = iconClassName;
  }

  createElement(callback = () => {}) {
    const button = document.createElement('button');
    button.className = this.className;
    button.innerText = this.buttonText;

    if (this.iconClassName) {
      const icon = createMenuIcon(this.iconClassName);
      icon.id = '';
      button.appendChild(icon);
    }

    button.onclick = callback;

    return button;
  }
}


;// CONCATENATED MODULE: ./src/ui/menu/utils.js




function setMenuTitle(title) {
  const modalOverlay = document.querySelector('.xenOverlay > .errorOverlay#LZTUpModalOverlay')
  const modalTitle = modalOverlay.querySelector('h2.heading');
  modalTitle.id = 'LZTUpModalMainTitle';
  modalTitle.innerText = title;
}

function createGoBackBtn(callback) {
  const modalOverlay = document.querySelector('.xenOverlay > .errorOverlay#LZTUpModalOverlay');

  const backButton = new Button('', 'LZTUpModalBackButton', 'fas fa-long-arrow-left').createElement();

  backButton.onclick = () => {
    document.querySelectorAll('div#LZTUpSubMenu').forEach(submenu => submenu.style.display = 'none'); // TODO replace LZTUpSubMenu to class
    callback();
  }

  modalOverlay.insertAdjacentElement('afterbegin', backButton);
}

function addGoBackBtn(target = '', text = configs_config.extName, subMenuToShow = null, onCloseCallback = () => {}) {
  const backButtonSelector = 'button.LZTUpModalBackButton';

  if (document.querySelector(backButtonSelector) !== null) {
    document.querySelector(backButtonSelector).remove();
  }

  return createGoBackBtn(() => {
    document.querySelector(backButtonSelector).remove();
    setMenuTitle(text);
    switch (target) {
      case 'tempmenu':
        document.querySelector('.LZTUpTempSubMenu').style.display = 'none';
        subMenuToShow.style.display = '';
        addGoBackBtn();
        onCloseCallback();
        break;
      default:
        document.querySelector('.LZTUpSection').style.display = '';
        const tabs = document.querySelector('.LZTUpTabs');
        tabs.style.display = '';

        const tab = tabs.querySelectorAll('#LZTUpTab');
        tab.forEach(element => element.classList.remove('active'));
        tab[0].classList.add('active');
        onCloseCallback()
    }
  });
}


;// CONCATENATED MODULE: ./src/ui/menu/sectionItem.js



function openSubMenu(containerClassName, sectionName) {
  document.querySelector('.LZTUpTabs').style.display = 'none';

  const subMenus = document.querySelectorAll('#LZTUpSubMenu'); // TODO replace LZTUpSubMenu to class
  subMenus.forEach(subMenu => subMenu.style.display = 'none');

  const sections = document.querySelectorAll('.LZTUpSection');
  sections.forEach(section => section.style.display = 'none');

  document.querySelector(`.${containerClassName}`).style.display = '';
  setMenuTitle(sectionName);
  return addGoBackBtn();
}

/**
 *
 *  @param {string} sectionName - name of the section
 *  @param {string} sectionDesc - desc of the section
 *  @param {string} sectionIconClasses - font awesome icon classes
 *  @param {string} className - name of the section class
 *  @param {string} containerClassName - name of the container class
 */
function addMenuSectionItem(sectionName, sectionDesc, sectionIconClasses, className, containerClassName) {
  const sectionItem = document.createElement('div');
  sectionItem.id = 'LZTUpSectionItem';
  sectionItem.className = className;

  const sectionIcon = createMenuIcon(sectionIconClasses);
  const textContainer = document.createElement('div');
  textContainer.innerHTML = `
    <span id="LZTUpText">${XenForo.htmlspecialchars(sectionName)}</span>
    <span id="LZTUpSubText">${XenForo.htmlspecialchars(sectionDesc)}</span>
  `;

  sectionItem.appendChild(sectionIcon);
  sectionItem.appendChild(textContainer);

  sectionItem.addEventListener('click', () => openSubMenu(containerClassName, sectionName));

  return sectionItem;
}


;// CONCATENATED MODULE: ./src/ui/menu/sectionContainer.js
function addMenuSectionContainer(className, items) {
  const container = document.createElement('div');
  container.id = 'LZTUpSubMenu'; // TODO replace LZTUpSubMenu to class
  container.className = className;

  for (const item of items) {
    container.appendChild(item);
  }

  container.style.display = 'none';

  return container;
}


;// CONCATENATED MODULE: ./src/utils/purify.js
function clearHTML(element) {
  return DOMPurify.sanitize(element, {
    USE_PROFILES: {
        svg: true,
        html: true
    },
    FORBID_TAGS: [
        "style"
    ]
  });
}

function clearSVG(element) {
  return DOMPurify.sanitize(element, {
    USE_PROFILES: {
        svg: true
    },
    FORBID_TAGS: [
        "style"
    ]
  });
}


;// CONCATENATED MODULE: ./src/ui/menu/checkbox.js



class Checkbox {
  /**
   *
   *  @constructor
   *  @param {string} elementId - id of the element
   *  @param {string} content - content of the element
   */

  constructor(elementId, content) {
    this.elementId = elementId;
    this.content = clearHTML(content);
  }

  createElement(valueToCheck, callbackChecked = () => {}, callbackUnChecked = () => {}) {
    const checkboxContainer = document.createElement('div');
    const checkbox = document.createElement('input');
    const checkboxLabel = document.createElement('label');

    checkbox.type = 'checkbox';
    checkbox.id = this.elementId;
    checkbox.checked = Boolean(valueToCheck);

    checkboxLabel.htmlFor = this.elementId;
    checkboxLabel.innerHTML = this.content;

    checkboxContainer.id = 'LZTUpModalChecksContainer';
    checkboxContainer.appendChild(checkbox);
    checkboxContainer.appendChild(checkboxLabel);

    checkboxContainer.addEventListener('click', async (event) => {
      event.target.checked ? await callbackChecked() : await callbackUnChecked();
    });

    return checkboxContainer;
  }
}


;// CONCATENATED MODULE: ./src/utils/threads.js
// СОЗДАТЬ ОТДЕЛЬНУЮ ФУНКЦИЮ ДЛЯ ЭТОГО А ТО АХУЕТЬ СКОК ДУБЛИРУЕТСЯ
function hideThreadContent(isHidden) {
  const messageContent = document.querySelector('.message.firstPost > .messageInfo > .messageContent > article > blockquote.messageText');
  if (messageContent !== null) {
    return messageContent.style.display = isHidden ? 'none' : '';
  }
}

function hideThreadPoll(isHidden) {
  const pollContainer = document.querySelector('div.PollContainer');
  if (pollContainer !== null) {
    return pollContainer.style.display = isHidden ? 'none' : '';
  }
}


;// CONCATENATED MODULE: ./src/utils/tags.js
function tagsVisibility(isHidden = true) {
  const tagList = document.querySelector('div.tagBlock');
  if (tagList !== null) {
    return tagList.style.display = isHidden ? 'none' : '';
  };
}


;// CONCATENATED MODULE: ./src/utils/contests.js




function contestThreadBlockMove(toTop = true) {
  if (isContestThread()) {
    const contestsThreadBlock = document.querySelector('div.contestThreadBlock');
    const messageContent = document.querySelector('li.firstPost > div.messageInfo > div.messageContent > article > blockquote.messageText');
    if (toTop) {
      contestsThreadBlock.insertAdjacentElement('afterEnd', messageContent)
      contestsThreadBlock.style.borderTop = 'none';
      contestsThreadBlock.style.borderBottom = '1px solid rgb(45, 45, 45)';
    } else {
      contestsThreadBlock.insertAdjacentElement('beforeBegin', messageContent)
      contestsThreadBlock.style.borderTop = '1px solid rgb(45, 45, 45)';
      contestsThreadBlock.style.borderBottom = 'none';
    }
  }
}

function contestsHideContent(isHidden = true) {
  if (isContestThread()) {
    return hideThreadContent(isHidden);
  }
}

function contestsTagsVisibility(isHidden = true) {
  if (isContestThread()) {
    tagsVisibility(isHidden);
  };
}

function contestsHidePoll(isHidden = true) {
  if (isContestThread()) {
    return hideThreadPoll(isHidden);
  }
}


;// CONCATENATED MODULE: ./src/ui/menu/items/contests.js






const getContestsItems = async () => {
  const contestsDB = new LZTContestsDB();
  const contestsData = await contestsDB.read();

  return [
    new Checkbox('open_ten_contests', 'Кнопка "Открыть 10"')
    .createElement(
      contestsData.openTenContestsBtn,
      async () => {
        await contestsDB.update({openTenContestsBtn: 1});
        regOpenContestsBtn(10);
      },
      async () => {
        await contestsDB.update({openTenContestsBtn: 0});
        removeOpenContestsBtn(10);
      }),

    new Checkbox('hide_tags_in_contests', `Скрытие тегов в теме розыгрыша`)
    .createElement(
      contestsData.hideTagsInThread,
      async () => {
        await contestsDB.update({hideTagsInThread: 1});
        contestsTagsVisibility(true);
      },
      async () => {
        await contestsDB.update({hideTagsInThread: 0});
        contestsTagsVisibility(false);
      }),

    new Checkbox('auto_close_on_participate',
      `Автозакрытие страницы при нажатие на кнопку "Участвовать"
      <span class="fa fa-exclamation-triangle Tooltip" title="При отключение этой функции страница будет перезагружена"></span>
      `)
    .createElement(
      contestsData.autoCloseOnParticipate,
      async () => {
        await contestsDB.update({autoCloseOnParticipate: 1});
        contestsAutoCloseHandler(true);
      },
      async () => {
        await contestsDB.update({autoCloseOnParticipate: 0});
        contestsAutoCloseHandler(false);
      }),

    new Checkbox('info_top_in_contests', `Отображение информации о розыгрыше вверху темы`)
    .createElement(
      contestsData.infoTopInThread,
      async () => {
        await contestsDB.update({infoTopInThread: 1});
        contestThreadBlockMove(true);
      },
      async () => {
        await contestsDB.update({infoTopInThread: 0});
        contestThreadBlockMove(false);
      }),

    new Checkbox('remove_content_in_contests', `Скрытие содержимого темы розыгрыша`)
    .createElement(
      contestsData.removeContent,
      async () => {
        await contestsDB.update({removeContent: 1});
        contestsHideContent(true);
      },
      async () => {
        await contestsDB.update({removeContent: 0});
        contestsHideContent(false);
      }),

    new Checkbox('remove_poll_in_contests', `Скрытие голосования в теме розыгрыша`)
    .createElement(
      contestsData.removePoll,
      async () => {
        await contestsDB.update({removePoll: 1});
        contestsHidePoll(true);
      },
      async () => {
        await contestsDB.update({removePoll: 0});
        contestsHidePoll(false);
      }),
  ];
}

/* harmony default export */ const contests = (getContestsItems);
;// CONCATENATED MODULE: ./src/ui/kit/profileInfoRow.js



class ProfileInfoRow {
  /**
   *
   *  @constructor
   *  @param {string} elementId - id of the row
   *  @param {string} label - label of row
   *  @param {string} content - content of row
   */

  constructor(elementId, label, content) {
    this.elementId = elementId;
    this.label = label;
    this.content = clearHTML(content);
  }

  createElement() {
    const row = document.createElement('div');
    const label = document.createElement('div');
    const labeled = document.createElement('div');
    row.classList.add('clear_fix', 'profile_info_row');
    row.id = this.elementId;

    label.classList.add('label', 'fl_l');
    labeled.classList.add('labeled');

    label.innerText = this.label + ':';
    if (isElement(this.content)) {
      labeled.appendChild(this.content)
    } else {
      labeled.innerHTML = this.content;
    }

    row.appendChild(label)
    row.appendChild(labeled)

    return row;
  }
}


;// CONCATENATED MODULE: ./src/utils/users.js




const userIdRowElementId = 'LZTUpUserIDRow';
const userIdMemberCardElementId = 'LZTUpUserIDMemberCard';

function getUserId(target) {
  switch (target) {
    case "profile":
      // in any profile
      if (isProfilePage()) {
        const userThreadsButton = document.querySelector('#profile_short > .userContentLinks > a:nth-child(1)');
        if (!userThreadsButton || userThreadsButton.href === '') {
          return null;
        }

        if (!userThreadsButton.href.endsWith('?tab=mythreads')) {
          const url = new URL(userThreadsButton.href);
          return url.searchParams.get('user_id');
        }

        return getUserId('me');
      }
    case "membercard":
      // in any membercard
      if (checkers_isOpenMemberCard()) {
        const memberCard = document.querySelectorAll(configs_extData.elements.memberCard);
        const userThreadsButton = memberCard[memberCard.length - 1].querySelector('.memberCardInner > .bottom > .userContentLinks > a:nth-child(1)');
        if (!userThreadsButton || userThreadsButton.href === '') {
          return null;
        }

        const url = new URL(userThreadsButton.href);
        return url.searchParams.get('user_id');
      }
    case "self":
    case "me":
      return XenForo.visitor.user_id;
    default:
      return null;
  }
}

function getUsername(target) {
  switch (target) {
    // TODO: add get by userid
    case "self":
    case "me":
      return document.querySelector('.accountUsername span')?.innerText;
    default:
      return null;
  }
}

function getUserAvatar(userId) {
  if (userId === getUserId('me')) {
    return document.querySelector('img.navTab--visitorAvatar').src;
  }

  const avatars = document.querySelectorAll('a.avatar');
  const avatar = Array.from(avatars)
    .find(avatar => avatar.classList?.contains(`Av${userId}s`) || avatar.classList?.contains(`Av${userId}m`));

  return avatar ? avatars.src : null;
}

function addUserIdToProfile() {
  if (isProfilePage() && document.querySelector(`#${userIdRowElementId}`) === null) {
    const userId = getUserId('profile') ?? 'Не найден';
    const profileInfo = document.querySelector('#profile_short > .pairsJustified');
    const userIdRow = new ProfileInfoRow(userIdRowElementId, 'ID', userId).createElement();
    const firstRow = profileInfo.querySelector('.profile_info_row');
    if (!firstRow) {
      return profileInfo.insertAdjacentElement('afterbegin', userIdRow);
    }

    return firstRow.insertAdjacentElement('afterend', userIdRow);
  }
}

function addUserIdToMemberCard() {
  if (checkers_isOpenMemberCard()) {
    const memberCards = document.querySelectorAll(configs_extData.elements.memberCard);
    const userId = getUserId('membercard') ?? 'Не найден';
    const userContentLinks = memberCards[memberCards.length - 1].querySelector(`#memberCard${userId}.memberCardInner > .bottom > .userContentLinks`);
    const userIdElement = document.createElement('div');
    userIdElement.classList.add('title');
    userIdElement.id = userIdMemberCardElementId;
    userIdElement.innerText = `ID: ${userId}`;
    userContentLinks.insertAdjacentElement('afterbegin', userIdElement);
  }
}

function removeUserIdFromProfile() {
  if (isProfilePage()) {
    const el = document.querySelector(`.profile_info_row#${userIdRowElementId}`);
    if (el) {
      el.remove();
    }
  }
}

function removeUserIdFromMemberCard() {
  if (isOpenMemberCard()) {
    const el = document.querySelector(`.title#${userIdMemberCardElementId}`);
    if (el) {
      el.remove();
    }
  }
}

function showFullRegDateInProfile(full = false) {
  if (isProfilePage()) {
    const dateTime = document.querySelector('.profile_info_row > .labeled > span.DateTime');
    if (!dateTime) {
      return;
    }

    const fullDate = dateTime.getAttribute('title')
    if (!fullDate) {
      return;
    }

    if (!full) {
      let spaceCounts = -2;
      if (XenForo?.visitor?.language_id === 1) {
        // lang === english
        spaceCounts = -3;
      }

      const oldDate = fullDate.split(' ').slice(0, spaceCounts).join(' ');
      return dateTime.innerText = oldDate;
    }

    return dateTime.innerText = fullDate;
  }
}


;// CONCATENATED MODULE: ./src/ui/menu/items/users.js






const getUsersItems = async () => {
  const usersDB = new LZTUsersDB();
  const usersData = await usersDB.read();

  return [
    new Checkbox('show_userid_in_profile', 'Показывать ID в профиле пользователя')
    .createElement(
      usersData.showUserIdInProfile,
      async () => {
        await usersDB.update({ showUserIdInProfile: 1 });
        addUserIdToProfile();
      },
      async () => {
        await usersDB.update({ showUserIdInProfile: 0 });
        removeUserIdFromProfile();
      }),
    new Checkbox('show_userid_in_member_card',
      `Показывать ID в карточке пользователя
      <span class="fa fa-exclamation-triangle Tooltip" title="При включение/отключение этой функции страница будет перезагружена"></span>
      `)
    .createElement(
      usersData.showUserIdInMemberCard,
      async () => {
        await usersDB.update({ showUserIdInMemberCard: 1 });
        registerAlert('Показывать ID в карточке пользователя включено', 5000);
        await sleep(500);
        window.location.reload();
      },
      async () => {
        await usersDB.update({ showUserIdInMemberCard: 0 });
        registerAlert('Показывать ID в карточке пользователя выключено', 5000);
        await sleep(500);
        window.location.reload();
      }),
    new Checkbox('show_fullreg_in_profile', 'Показывать полную дату регистрации в профиле пользователя')
    .createElement(
      usersData.showFullRegInProfile,
      async () => {
        await usersDB.update({ showFullRegInProfile: 1 });
        showFullRegDateInProfile(true);
      },
      async () => {
        await usersDB.update({ showFullRegInProfile: 0 });
        showFullRegDateInProfile(false);
      }),
    new Checkbox('disable_share_typing',
      `Неписалка в темах
      <span class="fa fa-exclamation-triangle Tooltip" title="При включение/отключение этой функции страница будет перезагружена"></span>
      `)
    .createElement(
      usersData.disableShareTyping,
      async () => {
        await usersDB.update({ disableShareTyping: 1 });
        registerAlert('Неписалка в темах включена', 5000);
        await sleep(500);
        window.location.reload();
      },
      async () => {
        await usersDB.update({ disableShareTyping: 0 });
        registerAlert('Неписалка в темах выключена', 5000);
        await sleep(500);
        window.location.reload();
      }),
  ];
}

/* harmony default export */ const users = (getUsersItems);
;// CONCATENATED MODULE: ./src/ui/menu/comment.js



class Comment {
  /**
   *
   *  @constructor
   *  @param {string} content - content of the element
   */

  constructor(content) {
    this.content = clearHTML(content);
  }

  createElement() {
    const container = document.createElement('div');
    container.id = 'LZTUpModalComment';
    container.innerHTML = this.content;

    return container;
  }
}


;// CONCATENATED MODULE: ./src/xenforo/tooltips.js
function updateTooltips() {
  let lztUpTooltips = $('#LZTUpTooltip.Tooltip');
  return XenForo.Tooltip(lztUpTooltips);
}

function setTooltip(el, text) {
  el.setAttribute('title', '');
  el.setAttribute('data-cachedtitle', text);

  return el._tippy.setContent(text);
}


;// CONCATENATED MODULE: ./src/utils/svg.js
function setSvgAttr(el, type, color) {
  return el.setAttribute(type, color);
}

function changeSVGColor(el, type, color, replaceAll = false) {
  if (!['stroke', 'fill'].includes(type)) {
    return;
  }

  if (!replaceAll) {
    return setSvgAttr(el, type, color);
  }

  setSvgAttr(el, type, color);
  const elements = el.querySelectorAll('*');
  for (const element of elements) {
    setSvgAttr(element, type, color);
  }
}


;// CONCATENATED MODULE: ./src/ui/avatarUserBadges.js






class AvatarUserBadges {
  /**
   *
   *  @constructor
   *  @param {object} badges - array of badges. For more information about badge struct check ui/menu/items/profile.js -> DefaultIcon
   *  @param {boolean} isPreview - add preview id to badges
   */

  constructor(badges, isPreview = false) {
    this.previewId = 'LZTUpPreviewBadge';
    this.customBadgeId = 'LZTUpUserBadge';
    this.badgeQuery = isPreview ? `#${this.previewId}` : `#${this.customBadgeId}`;
    this.badges = badges;
    this.isPreview = isPreview;
  }

  createElement() {
    const avatarUserBadges = document.createElement('div');
    avatarUserBadges.classList.add('avatarUserBadges');

    for (let i = 0; i < this.badges.length; i++) {
      const avatarUserBadge = document.createElement('span');
      avatarUserBadge.classList.add('avatarUserBadge', 'Tooltip');
      avatarUserBadge.tabIndex = 0;
      avatarUserBadge.title = XenForo.htmlspecialchars(this.badges[i].text);

      if (this.isPreview) {
        avatarUserBadge.id = this.previewId;
      } else {
        avatarUserBadge.id = this.customBadgeId;
      }

      if (this.badges.length > 1) {
        avatarUserBadge.classList.add(`avatarUserBadge--${i + 1}`)
      }

      avatarUserBadge.dataset.position = i + 1;
      if (this.badges.length > 1) {
        avatarUserBadge.dataset.multiple = true;
      }

      avatarUserBadges.appendChild(avatarUserBadge);
    }

    return avatarUserBadges;
  }

  findBadgeElement(selector, position) {
    return document.querySelector(selector + `[data-position="${position}"]`);
  }

  clearBadge(selector, position) {
    const el = this.findBadgeElement(selector, position);
    if (!el) {
      return { el: undefined, position: undefined };
    }

    el.className = ''
    el.style = '';

    return { el, position };
  }

  applyBadge(el, icon) {
    if (icon?.length > 1 && icon?.startsWith('.')) {
      icon = icon.replace('.', '');
      return el.classList.add('userBanner', icon);
    } else if (icon.startsWith('<svg') && icon.endsWith('svg>')) {
      el.innerHTML = clearSVG(icon);
      return el.classList.add('badgeDefaultBackground');
    } else {
      return el.classList.add('uniq_default', 'badgeDefaultBackground');
    }
  }

  updateIcon(badge) {
    const { el, position } = this.clearBadge(
      this.badgeQuery,
      badge.position
    );

    if (!el) {
      return;
    }

    el.classList.add('avatarUserBadge', 'Tooltip');

    // set position of badge
    if (el.dataset.multiple === "true") {
      el.classList.add(`avatarUserBadge--${position}`);
    }

    return this.applyBadge(el, badge.svg);
  }

  updateText(badge) {
    const userBadgeEl = this.findBadgeElement(
      this.badgeQuery,
      badge.position
    );
    if (!userBadgeEl) {
      return;
    }

    if (userBadgeEl._tippy) {
      setTooltip(userBadgeEl, XenForo.htmlspecialchars(badge.text));
    } else {
      XenForo.Tooltip($(userBadgeEl));
    }

  }

  updateColor(badge) {
    const userBadgeEl = this.findBadgeElement(
      this.badgeQuery,
      badge.position
    );
    if (!userBadgeEl) {
      return;
    }

    const svg = userBadgeEl.querySelector('svg');
    if (!svg) {
      return;
    }

    changeSVGColor(svg, 'stroke', badge.strokeColor, true);
    changeSVGColor(svg, 'fill', badge.fillColor, true);
  }

  updateStyle(badge) {
    if (!badge.style || badge.style?.startsWith('.')) {
      return;
    }

    const userBadgeEl = this.findBadgeElement(
      this.badgeQuery,
      badge.position
    );
    if (!userBadgeEl) {
      return;
    }

    userBadgeEl.style = badge.style;
  }

  updateBadge(badge) {
    this.updateIcon(badge);
    this.updateText(badge);
    this.updateColor(badge);
    this.updateStyle(badge);
  }

  updateBadges() {
    Logger.debug('updateBadges');
    for (const badge of this.badges) {
      if (typeof badge !== 'object') {
        Logger.error('Invalid badge in array');
        continue
      }

      Logger.debug(badge);
      this.updateBadge(badge);
    }
  }
}


;// CONCATENATED MODULE: ./src/ui/kit/menu/previewProfile.js






class PreviewProfile {
  /**
   *
   *  @constructor
   *  @param {string|number} userid - user id
   *  @param {string} username - username
   *  @param {object} data - data for show preview (ex. data from profileDB)
   */

  constructor(userid, username, data) {
    this.userid = userid;
    this.username = username;
    this.data = data;
    this.badges = new AvatarUserBadges(data.badgeIcons, true);
  }

  createElement() {
    const previewContainer = document.createElement('div');
    previewContainer.id = 'LZTUpPreviewContainer';
    previewContainer.classList.add('previewContainer');

    const avatarUserBadges = this.badges.createElement();

    const avatarBox = document.createElement('div');
    avatarBox.classList.add('avatarBox');
    avatarBox.appendChild(avatarUserBadges);
    avatarBox.innerHTML += `
      <a href="members/${encodeURIComponent(this.userid)}/" class="avatar Av${XenForo.htmlspecialchars(this.userid)}m" data-avatarhtml="true">
        <span class="img m" style="background-image: url(${getUserAvatar(this.userid)})"></span>
      </a>
    `;

    const info = document.createElement('div');
    info.classList.add('info');
    info.innerHTML = `
      <span id="LZTUpUsernameStyle" class="UsernameStyle bold">${XenForo.htmlspecialchars(this.username)}</span>
      <div class="bannerOrStatus">
        <em id="LZTUpUserBannerStyle" class="UserBannerStyle userBanner"></em>
      </div>
    `;

    previewContainer.appendChild(avatarBox);
    previewContainer.appendChild(info);
    return previewContainer;
  }

  clearStyle(selector) {
    const el = document.querySelector(selector);
    if (!el) {
      return;
    }

    el.className = ''
    el.style = '';

    return el;
  }

  updateUsernameStyle(style) {
    const usernameEl = this.clearStyle('#LZTUpUsernameStyle');
    if (!usernameEl) {
      return;
    }

    usernameEl.classList.add('UsernameStyle', 'bold');
    applyStyle(usernameEl, style);
  }

  updateBannerStyle(style) {
    const userBannerEl = this.clearStyle('#LZTUpUserBannerStyle');
    if (!userBannerEl) {
      return;
    }

    userBannerEl.classList.add('UserBannerStyle', 'userBanner');
    applyStyle(userBannerEl, style);
  }

  updateBannerText(text) {
    const userBannerEl = document.querySelector('#LZTUpUserBannerStyle');
    if (!userBannerEl) {
      return;
    }

    userBannerEl.innerText = XenForo.htmlspecialchars(text);
  }

  updateBanner(data) {
    const userBannerEl = this.clearStyle('#LZTUpUserBannerStyle');
    if (!userBannerEl) {
      Logger.error('Failed to get element by #LZTUpUserBannerStyle in PreviewProfile!');
      return;
    }

    if (!(data.bannerStyle && data.bannerText)) {
      return userBannerEl.style.display = 'none';
    }

    userBannerEl.style.display = '';
    this.updateBannerStyle(data.bannerStyle);
    this.updateBannerText(data.bannerText);
  }

  updateAll() {
    this.updateUsernameStyle(this.data.usernameStyle);
    this.updateBanner(this.data);
    this.badges.badges = this.data.badgeIcons;
    this.badges.updateBadges();
  }
}


;// CONCATENATED MODULE: ./src/ui/kit/menu/textArea.js


class TextArea {
  /**
   *
   *  @constructor
   *  @param {string} text - default text of the text area
   *  @param {string} placeholder - placeholder for the text area
   *  @param {number} minLength - min length for the text area
   *  @param {number} maxLength - max length for the text area
   */

  constructor(text = '', placeholder = '', minLength = 0, maxLength = 0) {
    this.text = text;
    this.placeholder = placeholder;
    this.minLength = minLength;
    this.maxLength = maxLength;
  }

  createElement(callback) {
    const textarea = document.createElement('textarea');
    textarea.classList.add('LZTUpTextArea', 'textCtrl');
    textarea.innerText = this.text;
    textarea.placeholder = this.placeholder;
    textarea.minLength = this.minLength;
    if (this.maxLength > 0)
      textarea.maxLength = this.maxLength;

    textarea.onkeyup = callback;
    textarea.onchange = callback;
    return textarea;
  }
}


;// CONCATENATED MODULE: ./src/ui/kit/menu/input.js
class Input {
  /**
   *
   *  @constructor
   *  @param {string} text - default text of the input
   *  @param {string} placeholder - placeholder for the input
   *  @param {number} minLength - min length for the input
   *  @param {number} maxLength - max length for the input
   */

  constructor(text = '', placeholder = '', minLength = 0, maxLength = 0) {
    this.text = text;
    this.placeholder = placeholder;
    this.minLength = minLength;
    this.maxLength = maxLength;
  }

  createElement(callback) {
    const input = document.createElement('input');
    input.classList.add('textCtrl');
    input.value = this.text;
    input.placeholder = this.placeholder;
    input.minLength = this.minLength;
    if (this.maxLength > 0)
      input.maxLength = this.maxLength;

    input.onkeyup = callback;
    input.onchange = callback;
    return input;
  }
}


;// CONCATENATED MODULE: ./src/ui/kit/menu/description.js
class Description {
  /**
   *
   *  @constructor
   *  @param {string} text - text of the description
   */

  constructor(text) {
    this.text = text;
  }

  createElement() {
    const desc = document.createElement('p');
    desc.classList.add('LZTUpModalDescription', 'muted');
    desc.innerText = this.text;

    return desc;
  }
}


;// CONCATENATED MODULE: ./src/ui/kit/menu/colorPicker.js


class ColorPicker {
  /**
   *
   *  @constructor
   *  @param {string} id - id of the color picker
   *  @param {string} value - value of the color picker
   */

  constructor(id, value, description = '') {
    this.id = id
    this.value = value;
    this.description = description;
  }

  createElement(callback) {
    const wrap = document.createElement('div');
    wrap.classList.add('LZTUpColorPickerWrap');

    const input = document.createElement('input');
    input.id = this.id;
    input.classList.add('LZTUpColorPicker');
    input.value = this.value;
    input.type = 'text';
    input.dataset.coloris = '';
    input.oninput = callback;

    if (this.description !== '') {
      const description = new Description(this.description).createElement();
      wrap.appendChild(description);
    }

    wrap.appendChild(input);
    return wrap;
  }
}


;// CONCATENATED MODULE: ./src/ui/kit/menu/heading.js
class Heading {
  /**
   *
   *  @constructor
   *  @param {string} text - text of the heading
   */

  constructor(text) {
    this.text = text;
  }

  createElement() {
    const heading = document.createElement('h2');
    heading.classList.add('LZTUpModalHeading');
    heading.innerText = this.text;

    return heading;
  }
}


;// CONCATENATED MODULE: ./src/ui/kit/menu/container.js



class Container {
  /**
   *
   *  @constructor
   *  @param {string} heading - heading of the container
   *  @param {string} description - description of the container
   *  @param {object} elements - elements to add to container
   */

  constructor(elements, heading = '', description = '') {
    this.elements = elements;
    this.heading = heading;
    this.description = description;
  }

  createElement() {
    const container = document.createElement('div');
    container.classList.add('LZTUpContainer');

    if (this.heading) {
      const heading = new Heading(this.heading).createElement();
      container.appendChild(heading);
    }

    if (this.description) {
      const description = new Description(this.description).createElement();
      container.appendChild(description);
    }

    for (const element of this.elements) {
      container.appendChild(element);
    }

    return container;
  }
}


;// CONCATENATED MODULE: ./src/ui/kit/menu/separator.js
class Separator {
  /**
   *
   *  @constructor
   *  @param {string} customStyle - custom style for border-bottom
   */

  constructor(customStyle = '') {
    this.customStyle = customStyle;
  }

  createElement() {
    const sepator = document.createElement('div');
    sepator.classList.add('LZTUpModalSeparator')
    if (this.customStyle !== '') {
      sepator.style.borderBottom = this.customStyle;
    }
    return sepator;
  }
}


;// CONCATENATED MODULE: ./src/ui/kit/menu/sortableContainer.js
class SortableContainer {
  /**
   *
   *  @constructor
   *  @param {object} elements - elements to add to container
   */

  constructor(elements) {
    this.elements = elements;
  }

  createElement(onMoveCallback = (e) => {}) {
    const sortableContainer = document.createElement('div');
    sortableContainer.classList.add('LZTUpSortableContainer');

    for (const element of this.elements) {
      sortableContainer.appendChild(element);
    }

    Sortable.create(sortableContainer, {
      handle: '.LZTUpSortableDraggable',
      animation: 150,
      onMove: onMoveCallback
    })

    return sortableContainer;
  }
}


;// CONCATENATED MODULE: ./src/ui/kit/menu/sortableItem.js


class SortableItem {
  /**
   *
   *  @constructor
   *  @param {HTMLElement} content - element to add to container
   *  @param {number} dataId - data attribute id
   */

  constructor(content, dataId = null) {
    this.content = content;
    this.dataId = dataId;
  }

  createElement(
    onClickEdit = () => {},
    onClickRemove = () => {}
  ) {
    const sortableItem = document.createElement('div');
    sortableItem.classList.add('LZTUpSortableItem');
    if (this.dataId) {
      sortableItem.dataset.id = this.dataId;
    }

    const draggableZone = document.createElement('div');
    draggableZone.classList.add('LZTUpSortableDraggable');
    const icon = createMenuIcon('far fa-grip-vertical', '');
    draggableZone.appendChild(icon);

    const contentContaner = document.createElement('div');
    contentContaner.classList.add('LZTUPSortableContent');
    // contentContaner.appendChild(this.content);
    contentContaner.innerHTML = `
      <p>${this.content}</p>
    `;

    const utilityContainer = document.createElement('div');
    utilityContainer.classList.add('LZTUpSortableUtility');

    const editButton = document.createElement('div');
    editButton.classList.add('LZTUpSortableEditButton');
    const editIcon = createMenuIcon('far fa-edit', '');
    editButton.appendChild(editIcon);
    editButton.onclick = async (e) => {
      console.log('Edit button clicked');
      await onClickEdit(e);
    }

    const removeButton = document.createElement('div');
    removeButton.classList.add('LZTUpSortableRemoveButton');
    const removeIcon = createMenuIcon('far fa-trash', '');
    removeButton.appendChild(removeIcon);
    removeButton.onclick = async (e) => {
      const result = confirm('Вы точно хотите удалить иконку?')
      if (result) {
        sortableItem.remove();
        await onClickRemove(e, sortableItem);
      }
    }

    utilityContainer.appendChild(editButton);
    utilityContainer.appendChild(removeButton);

    sortableItem.appendChild(draggableZone);
    sortableItem.appendChild(contentContaner);
    sortableItem.appendChild(utilityContainer);
    return sortableItem;
  }
}


;// CONCATENATED MODULE: ./src/ui/menu/temporarySection.js


const tempClass = 'LZTUpTempSubMenu';

function openTempMenu(sectionName, fromSectionName, subMenuToShow, onCloseCallback) {
  const subMenus = document.querySelectorAll('#LZTUpSubMenu'); // TODO replace LZTUpSubMenu to class
  subMenus.forEach(subMenu => subMenu.style.display = 'none');
  document.querySelector('.LZTUpTempSubMenu').style.display = '';
  setMenuTitle(sectionName);
  addGoBackBtn('tempmenu', fromSectionName, subMenuToShow, onCloseCallback);
}

function addTemporaryMenuSection(items) {
  const oldTempMenu = document.querySelector(`.${tempClass}`);
  if (oldTempMenu) {
    oldTempMenu.remove();
  }

  const container = document.createElement('div');
  container.id = 'LZTUpSubMenu'; // TODO replace LZTUpSubMenu to class
  container.classList.add(tempClass);

  for (const item of items) {
    container.appendChild(item);
  }

  container.style.display = 'none';

  return container;
}


;// CONCATENATED MODULE: ./src/utils/colorPicker.js
// https://github.com/lzt-upgrade/coloris-lzt-theme/blob/47e2a9ebabfc7172bf188cbc06eba73c88b46b09/src/coloris.js#L14
const colorPickerOptions = {
  theme: 'lzt', // theme
  themeMode: 'dark', // theme mode
  formatToggle: true, // change the format (RGB, HEX, HSV)
  closeButton: true, // button to close color picker
  clearButton: true, // button to clear color picker
  alpha: true, // alpha channel
  swatches: [] // colors for select
}

// use .xenOverlay for modals
function initColorPickers(parent = '.xenOverlay') {
  const colorPickers = document.querySelectorAll('.LZTUpColorPicker');
  for (const colorPicker of colorPickers) {
    // fix for reopen modal
    if (!document.querySelector('.clr-picker')) {
      try {
        // ! read coloris-lzt-theme init description
        Coloris.init(parent);
      } catch (e) {
        console.error(e);
      }
    }
    try {
      Coloris(Object.assign(colorPickerOptions, { el: `#${colorPicker.id}`, parent: parent }));
    } catch (e) {
      console.error(e);
    }
  }
}


;// CONCATENATED MODULE: ./src/ui/kit/userBanner.js
class UserBanner {
  /**
   *
   *  @constructor
   *  @param {string} elementId - id of the row
   *  @param {string} label - label of user banner
   */

  constructor(elementId, label) {
    this.elementId = elementId;
    this.label = label;
  }

  createElement() {
    const userBanner = document.createElement('em');
    userBanner.id = this.elementId;
    userBanner.classList.add('userBanner', 'wrapped');
    userBanner.itemprop = 'title';

    const beforeAfterEl = document.createElement('div');
    beforeAfterEl.className = 'before';
    userBanner.appendChild(beforeAfterEl);

    const bannerContent = document.createElement('strong');
    bannerContent.innerText = XenForo.htmlspecialchars(this.label);
    userBanner.appendChild(bannerContent)

    beforeAfterEl.className = 'after';
    userBanner.appendChild(beforeAfterEl)
    return userBanner;
  }
}


;// CONCATENATED MODULE: ./src/visuals/users.js





function updateUserStyle(style) {
  const username = getUsername('me');
  const usersEl = document.querySelectorAll('.username span');
  const myUsersEl = usersEl
                    .values()
                    .filter(user => user.innerText === username);
  for (const userEl of myUsersEl) {
    userEl.className = ''
    userEl.style = '';

    applyStyle(userEl, style);
  }
}

function updateUserBanner(style, text) {
  if (isProfilePage() && getUserId('profile') === getUserId('me')) {
    const userBannerEl = document.querySelector('em.userBanner#LZTUpCustomBanner');
    if (userBannerEl) {
      // if exists remove extra styles / classes
      userBannerEl.className = 'userBanner wrapped';
      userBannerEl.style = '';
      userBannerEl.innerText = text;
      return applyStyle(userBannerEl, style);
    }

    // add user banner
    const avatarScaler = document.querySelector('.avatarScaler');
    if (!avatarScaler) {
      return;
    }

    const userBanner = new UserBanner('LZTUpCustomBanner', text).createElement();
    applyStyle(userBanner, style);
    return avatarScaler.insertAdjacentElement('afterend', userBanner);
  }
}


;// CONCATENATED MODULE: ./src/ui/menu/items/profile.js

// import { Checkbox } from 'UI/menu/checkbox';


















const profileDB = new LZTProfileDB();

async function sortableItemOnEditCallback(e, previewProfile) {
  const badgeId = Number(e.target.parentElement.parentElement.parentElement.dataset?.id);
  const modalContent = document.querySelector('.LZTUpModalContent');
  const uniqSubMenu = document.querySelector('.LZTUpUniqContainer');
  const profileData = await profileDB.read();
  const thisBadgeArray = profileData.badgeIcons.filter(icon => icon.position === badgeId);
  let badgeData = thisBadgeArray[0];

  async function updateBadgesData(badgeData) {
    // badgeData its current badge (which we are editing)
    const profData = await profileDB.read();
    const badges = profData.badgeIcons.filter(icon => icon.position !== badgeId);
    badges.push(badgeData);
    return badges;
  }

  const el = addTemporaryMenuSection(
    [
      new Container(
        [
          new TextArea(badgeData.svg, '<svg>...</svg>', 0, 3000)
          .createElement(
            async (event) => {
              // event.target.value = clearSVG(event.target.value); // ! add to save button
              let val = clearSVG(event.target.value.trim());

              if (val.length > 3000) {
                return registerAlert('Максимальная длина иконки 3000 символов. Уменьшите введенный текст для сохранения.')
              }

              badgeData.svg = val;
            }
          ),
        ],
        'Иконка на аватарке',
        'Максимум 3000 символов.',
      ).createElement(),

      new Container(
        [
          new TextArea(badgeData.style, 'background: #fff', 0, 1500)
          .createElement(
            async (event) => {
              // event.target.value = clearSVG(event.target.value); // ! add to save button
              let val = event.target.value;

              if (val.length > 1500) {
                return registerAlert('Максимальная длина стиля иконки 1500 символов. Уменьшите введенный текст для сохранения.')
              }

              if (val.length > 1 && val.startsWith('.')) {
                event.target.value = val.replace(/\s/g, '');
                val = event.target.value;
              }

              badgeData.style = val;
            }
          ),
        ],
        'Стиль иконки',
        'Максимум 1500 символов.',
      ).createElement(),

      new Container(
        [
          new Input(badgeData.text, 'Идут два сталкера', 0, 24)
          .createElement(
            async (event) => {
              let val = event.target.value;

              if (val.length > 24) {
                return registerAlert('Максимальная длина текста в лычке 24 символа. Уменьшите введенный текст для сохранения.')
              }

              badgeData.text = val;
            }
          ),
        ],
        'Текст при наведение на иконку',
        'Максимум 24 символа.',
      ).createElement(),

      new Container(
        [
          new ColorPicker('LZTUpColorPickerFill', badgeData.fillColor, 'Цвет иконки (fill):')
          .createElement(
            async (event) => {
              let val = event.target.value;

              badgeData.fillColor = val;
            }
          ),
          new ColorPicker('LZTUpColorPickerStroke', badgeData.strokeColor, 'Цвет иконки (stroke):')
          .createElement(
            (event) => {
              let val = event.target.value;

              badgeData.strokeColor = val;
            }
          ),
        ],
        'Изменение цвета иконки'
      ).createElement(),

      new Container([
        new Button('Сохранить', 'button primary LZTUpIconButton fit', 'far fa-save').createElement(async () => {
          registerAlert('Иконка успешно сохранена.')
          const badges = await updateBadgesData(badgeData);
          await profileDB.update({ badgeIcons: badges });
        }),
      ]).createElement()
    ]
  )

  modalContent.appendChild(el);
  initColorPickers();
  openTempMenu('Управление иконкой', 'Локальный Уник', uniqSubMenu, async () => {
    const sortable = document.querySelectorAll('.LZTUpSortableContainer > .LZTUpSortableItem');
    const profileData = await profileDB.read();
    for (let i = 0; i < profileData.badgeIcons.length; i++) {
      const content = sortable[i].querySelector('.LZTUPSortableContent');
      content.innerHTML = clearHTML(profileData.badgeIcons[i].text);
    }

    previewProfile.data = profileData;
    previewProfile.updateAll();
  });
}

function createPreviewProfile(profileData) {
  const userid = getUserId('me');
  const username = getUsername('me');
  return new PreviewProfile(userid, username, profileData);
}

const getProfileItems = async () => {
  function generateBadgeItems(previewProfile, profileData) {
    const items = [];
    for (const badge of profileData.badgeIcons) {
      items.push(new SortableItem(badge.text, badge.position).createElement((e) => sortableItemOnEditCallback(e, previewProfile), sortableItemOnRemoveCallback));
    }

    return items;
  }

  function reloadUserBadges(updatedProfileData) {
    const avatarUserBadgesParent = document.querySelector('#LZTUpPreviewContainer > .avatarBox > .avatarUserBadges');
    if (avatarUserBadgesParent) {
      for (const userBadge of avatarUserBadgesParent.children) {
        userBadge.remove();
      }

      const avatarUserBadges = new AvatarUserBadges(updatedProfileData.badgeIcons, true).createElement();
      avatarUserBadgesParent.innerHTML = avatarUserBadges.innerHTML;

      previewProfile.data = updatedProfileData;
      previewProfile.updateAll();
    }
  }

  async function sortableItemOnRemoveCallback(e, sortableItemEl) {
    const profileData = await profileDB.read();
    let badgeIcons = profileData.badgeIcons;
    let newBadgeIcons = [];

    const badgeEl = document.querySelector(`#LZTUpPreviewBadge[data-position="${sortableItemEl.dataset.id}"]`)
    if (badgeEl) {
      badgeEl.remove();
    }

    const remainBadgeEl = document.querySelector('#LZTUpPreviewBadge')
    if (remainBadgeEl) {
      remainBadgeEl.dataset.position = 1;
      remainBadgeEl.dataset.multiple = "false";
      if (remainBadgeEl?.classList.contains('avatarUserBadge--1')) {
        remainBadgeEl.classList.remove('avatarUserBadge--1');
      }

      if (remainBadgeEl?.classList.contains('avatarUserBadge--2')) {
        remainBadgeEl.classList.remove('avatarUserBadge--2');
      }
    }

    for (const badge of badgeIcons) {
      if (String(badge.position) === sortableItemEl.dataset.id) {
        continue;
      }

      // if removed 1st badge set 2nd badge to 1st position
      const item = document.querySelector('.LZTUpSortableContainer > .LZTUpSortableItem');
      if (item) {
        item.dataset.id = 1;
      }

      badge.position = 1;
      newBadgeIcons.push(badge)
    }

    await profileDB.update({ badgeIcons: newBadgeIcons });
    previewProfile.data = profileData;
    previewProfile.updateAll();
  }

  const profileData = await profileDB.read();
  const currentDomain = window.location.hostname;

  const previewProfile = createPreviewProfile(profileData);

  return [
    new Comment(`На этой вкладке вы можете выбрать стиль вашего ника и лычки. Этот стиль виден только вам.
      Чтобы уник был виден всем, рекомендуем <a href="https://${currentDomain}/account/upgrades?upgrade_id=14" target="_blank">купить</a> настоящий уник.`)
      .createElement(),

    previewProfile.createElement(),

    new Container(
      [
        new TextArea(profileData.usernameStyle, 'color: #0daf77', 0, 1500)
        .createElement(
          (event) => {
            let val = event.target.value;
            if (val.length > 1500) {
              return registerAlert('Максимальная длина стиля ника 1500 символов. Уменьшите введенный текст для сохранения.')
            }

            if (val.length > 1 && val.startsWith('.')) {
              event.target.value = val.replace(/\s/g, '');
              val = event.target.value;
            }

            previewProfile.updateUsernameStyle(val);
            profileData.usernameStyle = val;
          }
        ),
      ],
      'Стиль ника',
      'Максимум 1500 символов. При отсутствии кода используется цвет вашей группы с форума.',
    ).createElement(),

    new Container(
      [
        new TextArea(profileData.bannerStyle, 'background: #fff', 0, 1500)
        .createElement(
          (event) => {
            let val = event.target.value;
            if (val.length > 1500) {
              return registerAlert('Максимальная длина стиля лычки 1500 символов. Уменьшите введенный текст для сохранения.')
            }

            if (val.length > 1 && val.startsWith('.')) {
              event.target.value = val.replace(/\s/g, '');
              val = event.target.value;
            }

            // previewProfile.updateBannerStyle(val);
            // previewProfile.updateBadgeStyle(val);

            profileData.bannerStyle = val;
            previewProfile.updateBanner(profileData);
          }
        ),
      ],
      'Стиль лычки',
      'Максимум 1500 символов. При отсутствии текста и стиля лычка отключается.',
    ).createElement(),

    new Container(
      [
        new Input(profileData.bannerText, 'Внимание анекдот', 0, 24)
        .createElement(
          (event) => {
            let val = event.target.value;
            if (val.length > 24) {
              return registerAlert('Максимальная длина текста в лычке 24 символа. Уменьшите введенный текст для сохранения.')
            }

            profileData.bannerText = val;
            previewProfile.updateBanner(profileData);
          }
        ),
      ],
      'Текст в лычке',
      'Максимум 24 символа. При отсутствии текста и стиля лычка отключается.',
    ).createElement(),


    new Separator().createElement(), // * ADD SEPARATOR

    new Container(
      [
        new SortableContainer(
          generateBadgeItems(previewProfile, profileData)
        ).createElement(async (e) => {
          // move items
          const items = e.target.children;
          const newProfileData = await profileDB.read();
          newProfileData.badgeIcons.reverse();
          for (let i = 0; i < items.length; i++) {
            items[i].dataset.id = i + 1;
            newProfileData.badgeIcons[i].position = i + 1;
          }

          profileData.badgeIcons = newProfileData.badgeIcons;
          await profileDB.update({ badgeIcons: newProfileData.badgeIcons });
          reloadUserBadges(profileData);
        }),

        new Button('Добавить иконку', 'button LZTUpIconButton', 'far fa-plus')
        .createElement(async (e) => {
          const sortableContainer = e.target.parentElement?.querySelector('.LZTUpSortableContainer');

          if (!sortableContainer) {
            return registerAlert('Не найден контейнер для добавления!')
          }

          if (sortableContainer.children.length === 2) {
            return registerAlert('Вы не можете добавить больше 2 иконок!')
          }

          const newProfileData = await profileDB.read();
          const badgeIcons = newProfileData.badgeIcons;

          const defaultIcon = {
            'position': sortableContainer.children.length + 1,
            'style': '',
            'text': 'Новая иконка',
            'svg': '',
            'fillColor': '',
            'StrokeColor': '',
          }

          badgeIcons.push(defaultIcon)

          const newItem = new SortableItem(defaultIcon.text, defaultIcon.position).createElement((e) => sortableItemOnEditCallback(e, previewProfile), sortableItemOnRemoveCallback);

          sortableContainer.appendChild(newItem);
          await profileDB.update({ badgeIcons: badgeIcons });

          profileData.badgeIcons = badgeIcons;

          reloadUserBadges(profileData);
        }),
      ],
      'Управление иконками',
      'Ниже вы можете легко настроить иконки уника и их порядок (изменения автоматически применяются)'
    ).createElement(),

    new Container([
      new Button('Сохранить', 'button primary LZTUpIconButton fit', 'far fa-save').createElement(async () => {
        registerAlert('Настройки локального уника успешно сохранены.');
        await profileDB.update({ usernameStyle: profileData.usernameStyle });
        await profileDB.update({ bannerStyle: profileData.bannerStyle });
        await profileDB.update({ bannerText: profileData.bannerText });
        if (profileData.usernameStyle) {
          updateUserStyle(profileData.usernameStyle);
        }

        if (profileData.bannerStyle && profileData.bannerText) {
          updateUserBanner(profileData.bannerStyle, profileData.bannerText);
        }
      }),
    ]).createElement()

    // new Checkbox('open_ten_contests', 'Кнопка "Открыть 10"')
    // .createElement(
    //   profileData.openTenContestsBtn,
    //   async () => {
    //     await profileData.update({openTenContestsBtn: 1});
    //     regOpenContestsBtn(10);
    //   },
    //   async () => {
    //     await profileData.update({openTenContestsBtn: 0});
    //     removeOpenContestsBtn(10);
    //   }),
  ];
}

/* harmony default export */ const profile = (getProfileItems);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js");
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js");
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js");
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js");
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/menu.scss
var menu = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/menu.scss");
;// CONCATENATED MODULE: ./src/styles/menu.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "html");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(menu/* default */.Z, options);




       /* harmony default export */ const styles_menu = (menu/* default */.Z && menu/* default.locals */.Z.locals ? menu/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/ui/menu/menu.js










async function generateMenu(tabs) {
  const mainItems = [
    addMenuSectionItem('Локальный Уник', 'Максимальная кастомизация', 'far fa-palette', 'LZTUpUniqItem', 'LZTUpUniqContainer'),
    addMenuSectionItem('Розыгрыши', 'Комфорт для розыгрышей', 'far fa-gift', 'LZTUpContestsItem', 'LZTUpContestsContainer'),
    addMenuSectionItem('Пользователи', 'Штучки для пользователей', 'far fa-user', 'LZTUpUsersItem', 'LZTUpUsersContainer'),
    addMenuSectionItem('Внешний вид', 'Темы, логотипы и другое', 'far fa-drafting-compass', 'LZTUpAppearItem', 'LZTUpUniqContainer'),
  ];

  const settingsItems = [
    addMenuSectionItem('Настройки', 'Настройки расширения', 'far fa-cog', 'LZTUpSettingsItem', 'LZTUpUniqContainer'),
    addMenuSectionItem('Обновления', 'Установка и проверка обновлений расширения', 'far fa-cloud-download', 'LZTUpUpdateItem', 'LZTUpUpdateContainer'),
    addMenuSectionItem('Информация', `Версия: ${GM_info?.script?.version}`, 'far fa-info-circle', 'LZTUpInformationItem', 'LZTUpUniqContainer'),
  ];

  const sections = [
    new MenuSection('LZTUpMainSection', mainItems).create(),
    new MenuSection('LZTUpSettingsSection', settingsItems).create(),
  ];

  const updateText = document.createElement('div')
  updateText.innerText = 'Страница обновлений';

  const updateItems = [
    updateText,
  ];

  const sectionContainers = [
    addMenuSectionContainer('LZTUpUniqContainer', await profile()),
    addMenuSectionContainer('LZTUpContestsContainer', await contests()),
    addMenuSectionContainer('LZTUpUsersContainer', await users()),
    addMenuSectionContainer('LZTUpUpdateContainer', updateItems),
  ];

  Logger.debug('Generated menu section containers: ', sectionContainers)

  const menuContent = document.createElement('div')
  menuContent.classList.add('LZTUpModalContent');

  const tabsContainer = document.createElement('ul');
  tabsContainer.classList.add('LZTUpTabs');
  menuContent.appendChild(tabsContainer);

  for (const section of sections) {
    menuContent.appendChild(section);
  }

  for (const sectionContainer of sectionContainers) {
    menuContent.appendChild(sectionContainer);
    sectionContainer.querySelectorAll('.Tooltip').forEach(el => XenForo.Tooltip($(el)));
  }

  Logger.debug('Generated menu tabs: ', tabs);

  for (const tab of tabs) {
    menuContent.querySelector('.LZTUpTabs')
      .appendChild(tab.createElement());
  }

  return menuContent;
}


;// CONCATENATED MODULE: ./src/ui/menu/tab.js
class Tab {
  /**
   *
   *  @constructor
   *  @param {string} name - name of the tab
   *  @param {string} sectionClassName - class name of the tab
   *  @param {string} sectionClassName - class name of the section
   *  @param {boolean} active - status of tab
   */

  constructor(name, className, sectionClassName, active) {
    this.name = name;
    this.className = className;
    this.sectionClassName = sectionClassName;
    this.active = active;
  }

  createElement() {
    const tab = document.createElement('li');
    tab.id = 'LZTUpTab';
    tab.className = this.className;
    const span = document.createElement('span');
    span.innerText = this.name;
    tab.appendChild(span);

    tab.addEventListener('click', () => this.setActive());
    return tab;
  }

  setActive() {
    document.querySelectorAll('#LZTUpTab').forEach(tab => tab.classList.remove('active'));

    document.querySelector(`.${this.className}`).classList.add('active');

    document.querySelectorAll('.LZTUpSection').forEach(section => section.style.display = 'none');

    document.querySelector(`#${this.sectionClassName}`).style.display = '';
  }
}


;// CONCATENATED MODULE: ./src/callbacks/menuButton.js












async function menuButtonCallback() {
  const tabs = [
    new Tab('Главная', 'LZTUpMainTab', 'LZTUpMainSection', true),
    new Tab('Настройки', 'LZTUpSettingsTab', 'LZTUpSettingsSection', false),
  ];

  const menuContent = await generateMenu(tabs);

  const overlay = registerModal(
    configs_config.extName,
    '<div id="LZTUpModalBase"></div>'
  );

  const modal = document.querySelector('#LZTUpModalBase');
  modal.appendChild(menuContent);
  for (const tab of tabs) {
    tab.active ? tab.setActive() : null;
  }

  const baseModal = modal.parentElement;
  baseModal.style.whiteSpace = 'unset';
  baseModal.parentElement.id = 'LZTUpModalOverlay';
  baseModal.parentElement.style = 'margin-bottom: 15px;';

  setMenuTitle(configs_config.extName);
  updateTooltips();
  initColorPickers();

  // Update Profile Preview
  const profileDB = new LZTProfileDB();
  const profileData = await profileDB.read();
  const userid = getUserId('me');
  const username = getUsername('me');
  const previewProfile = new PreviewProfile(userid, username, profileData);
  previewProfile.updateAll();
}


// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/buttons.scss
var buttons = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/buttons.scss");
;// CONCATENATED MODULE: ./src/styles/buttons.scss

      
      
      
      
      
      
      
      
      

var buttons_options = {};

buttons_options.styleTagTransform = (styleTagTransform_default());
buttons_options.setAttributes = (setAttributesWithoutAttributes_default());

      buttons_options.insert = insertBySelector_default().bind(null, "html");
    
buttons_options.domAPI = (styleDomAPI_default());
buttons_options.insertStyleElement = (insertStyleElement_default());

var buttons_update = injectStylesIntoStyleTag_default()(buttons/* default */.Z, buttons_options);




       /* harmony default export */ const styles_buttons = (buttons/* default */.Z && buttons/* default.locals */.Z.locals ? buttons/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/ui/buttons/menuButton.js





const menuButton = document.createElement('li');
const menuButton_link = document.createElement('a');
menuButton_link.id = 'LZTUpButton';
menuButton_link.innerText = configs_config.extName;

menuButton.appendChild(menuButton_link);
menuButton.onclick = menuButtonCallback;

/* harmony default export */ const buttons_menuButton = (menuButton);
;// CONCATENATED MODULE: ./src/events/categories.js


function onClickCategory(nodeSelector, callback) {
  const node = $(`li.node${nodeSelector}.forum.level-n`);
  $(node).on('click', async () => {
    await sleep(750);
    const el = await waitForElm('div.pageNavLinkGroup');
    if (el) callback();
  });
}

/* harmony default export */ const categories = (onClickCategory);
;// CONCATENATED MODULE: ./src/xenforo/bypass.js



function bypassShareTyping() {
  if (hasOwn(XenForo, 'threadNotify') && hasOwn(XenForo.threadNotify, 'shareTypingActivity')) {
    Logger.debug('bypassShareTyping thread: true');
    XenForo.threadNotify.shareTypingActivity = 0;
  }

  // if (hasOwn(XenForo, 'ChatboxRTC') && hasOwn(XenForo.chatboxRTC, 'Start')) {
  //   console.log('bypassShareTyping chat: true');
  //   XenForo.ChatboxRTC.Start.prototype.sendTypingMessage = () => {return};
  // }
}


// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/errorPage.scss
var errorPage = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/errorPage.scss");
;// CONCATENATED MODULE: ./src/styles/errorPage.scss

      
      
      
      
      
      
      
      
      

var errorPage_options = {};

errorPage_options.styleTagTransform = (styleTagTransform_default());
errorPage_options.setAttributes = (setAttributesWithoutAttributes_default());

      errorPage_options.insert = insertBySelector_default().bind(null, "html");
    
errorPage_options.domAPI = (styleDomAPI_default());
errorPage_options.insertStyleElement = (insertStyleElement_default());

var errorPage_update = injectStylesIntoStyleTag_default()(errorPage/* default */.Z, errorPage_options);




       /* harmony default export */ const styles_errorPage = (errorPage/* default */.Z && errorPage/* default.locals */.Z.locals ? errorPage/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/index.js



























// import 'Styles/main.css';


// import 'Styles/coloris.css';

async function main() {
  const settingsDB = new LZTSettingsDB();

  if (GM_info?.script?.version) Logger.log(`${configs_config.extName} version: ${GM_info?.script?.version}`);

  const SCRIPT_LOADED = await waitForElement('body', 120000);
  if (!SCRIPT_LOADED) {
    Logger.error('Не удалось запустить расширение.');
    return;
  }

  if (SCRIPT_LOADED.length) {
    const appearDB = new LZTAppearDB();
    await appearDB.init();
    const dbAppearData = await appearDB.read();

    if (/^(Error\s[0-9]{3}|Site\sMaintenance)$/.test(document.head.querySelector('title').innerText)) {
      if (!dbAppearData || dbAppearData?.newErrorPage === 0) {
        return;
      }

      document.body.classList.add('LZTUpErrorPage');
      const container = document.body.querySelector('article > div');
      const duckRain = document.createElement('img');
      duckRain.src = "https://i.imgur.com/iVmKDr7.gif";
      duckRain.alt = "Duck rain";
      container.appendChild(duckRain);

      if (dbAppearData?.selfAdOnNewErrorPage === 0) {
        return;
      }

      // self ad don't delete me please :(
      const selfAdBlock = document.createElement('div');
      selfAdBlock.classList.add('LZTUpErrorPageSelfAd')
      const selfAdText = document.createElement('p');
      selfAdText.innerText = 'Пока форум недоступен, рекомендуем ознакомиться с нашими соц. сетями'
      selfAdText.classList.add('selfAd');

      const selfAdButtonBlock = document.createElement('div');
      selfAdButtonBlock.classList.add('buttons');

      const selfAdTelegram = document.createElement('a');
      selfAdTelegram.classList.add('button');
      selfAdTelegram.innerText = 'Telegram';
      selfAdTelegram.href = 'https://t.me/lzt_upgrade';

      const selfAdGithub = document.createElement('a');
      selfAdGithub.classList.add('button');
      selfAdGithub.innerText = 'Github';
      selfAdGithub.href = 'https://github.com/lzt-upgrade/lzt-upgrade';

      selfAdButtonBlock.appendChild(selfAdTelegram);
      selfAdButtonBlock.appendChild(selfAdGithub);

      selfAdBlock.appendChild(selfAdText);
      selfAdBlock.appendChild(selfAdButtonBlock);
      container.appendChild(selfAdBlock);

      return;
    }

    await waitForCSRFToken(120000);
    const username = getUsername('me');
    const userid = getUserId('me');
    const userAvatar = $('img.navTab--visitorAvatar').attr('src');

    Logger.debug('┏━━━━━━━━ DEBUG INFO ━━━━━━━━━━┓');
    Logger.debug(`Script version: ${GM_info?.script?.version}`);
    Logger.debug(`Account username: ${username}`);
    Logger.debug(`Account userid: ${userid}`);
    Logger.debug(`Account userAvatar: ${userAvatar}`);
    Logger.debug('┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┚');

    registerMenuButton(buttons_menuButton);

    const contestsDB = new LZTContestsDB();
    await contestsDB.init();
    const dbContestsData = await contestsDB.read();

    const usersDB = new LZTUsersDB();
    await usersDB.init();
    const dbUsersData = await usersDB.read();

    const profileDB = new LZTProfileDB();
    await profileDB.init();
    const dbProfileData = await profileDB.read();

    if (dbAppearData) {
      if (dbAppearData?.theme > 0) {
        Logger.debug(`Requesting theme with id ${dbAppearData.theme}...`);
        loadThemeByID(dbAppearData.theme)
        .catch(err => console.error(err));
      }
    }

    if (dbProfileData) {
      if (dbProfileData.usernameStyle) {
        updateUserStyle(dbProfileData.usernameStyle);
        registerObserver(async (mutation) => {
          Logger.debug(mutation)
          if (
            mutation.target.classList.contains('ProfilePostList') ||
            mutation.target.classList.contains('messageList') ||
            mutation.target.classList.contains('CommentPostList') ||
            mutation.target.classList.contains('discussionList') ||
            mutation.nextSibling?.classList?.contains('modal') ||
            mutation.previousSibling?.classList?.contains('Alert') ||
            mutation.previousSibling?.nextSibling?.classList?.contains('Alert') ||
            mutation.target.id === 'AlertsDestinationWrapper' ||
            mutation.target.id === 'StackAlerts'
          ) {
            const updatedProfileData = await profileDB.read();
            updateUserStyle(updatedProfileData.usernameStyle)
          }
        });
      }

      if (dbProfileData.bannerStyle && dbProfileData.bannerText) {
        updateUserBanner(dbProfileData.bannerStyle, dbProfileData.bannerText);
      }
    }

    if (dbContestsData) {
      dbContestsData.openTenContestsBtn === 1 ? regOpenContestsBtn(10) : null;

      categories(configs_extData.nodes.contests, async () => {
        const contestsDB = new LZTContestsDB();
        const dbContestsData = await contestsDB.read();
        dbContestsData.openTenContestsBtn === 1 ? regOpenContestsBtn(10) : null;
      });

      dbContestsData.hideTagsInThread === 1 ? contestsTagsVisibility(true) : null;
      dbContestsData.autoCloseOnParticipate === 1 ? contestsAutoCloseHandler(true) : null;
      dbContestsData.infoTopInThread === 1 ? contestThreadBlockMove(true) : null;
      dbContestsData.removeContent === 1 ? contestsHideContent(true) : null;
      dbContestsData.removePoll === 1 ? contestsHidePoll(true) : null;
    }

    if (dbUsersData) {
      dbUsersData.showUserIdInProfile === 1 ? addUserIdToProfile() : null;
      if (dbUsersData.showUserIdInMemberCard === 1) {
        addUserIdToMemberCard();
        registerObserver((mutation) => {
          if (mutation.nextSibling) {
            if (mutation.nextSibling?.classList?.contains('modal')) {
              addUserIdToMemberCard()
            }
          }
        });
      }
      dbUsersData.showFullRegInProfile === 1 ? showFullRegDateInProfile(true) : null;
      dbUsersData.disableShareTyping === 1 ? bypassShareTyping() : null;
    }
  }
}

main().catch((e) => {
  console.error(e);
});
})();

/******/ })()
;