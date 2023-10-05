// ==UserScript==
// @name [Development Build] LZT Upgrade
// @description A free extension for Lolzteam with many useful features
// @description:ru Бесплатное расширение для Lolzteam с множеством полезных функций
// @version 2.0.0dev
// @author Toil
// @supportURL https://github.com/lzt-upgrade/lzt-upgrade/issues
// @match *://lolz.guru/*
// @match *://lolz.live/*
// @match *://zelenka.guru/*
// @match *://lzt.market/*
// @match *://lolz.market/*
// @connect lztupgrade.toiloff.ru
// @connect greasyfork.org
// @downloadURL https://github.com/lzt-upgrade/lzt-upgrade/raw/master/dist/lzt-upgrade.user.js
// @grant GM_xmlhttpRequest
// @grant GM_info
// @grant GM_addStyle
// @grant GM_setValue
// @grant GM_getValue
// @grant GM_deleteValue
// @grant GM_listValues
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
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#LZTUpButton{color:#0daf77;font-weight:600}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/errorPage.scss":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.LZTUpErrorPage{background-color:#272727}.LZTUpErrorPage article{color:#d6d6d6}.LZTUpErrorPage article div{display:flex;flex-direction:column;justify-content:center;align-items:center}.LZTUpErrorPage article div .LZTUpErrorPageSelfAd{border-top:1px solid #363636}.LZTUpErrorPage article div .LZTUpErrorPageSelfAd .selfAd{font-size:18px;color:#949494;max-width:75%;text-align:center}.LZTUpErrorPage article div .LZTUpErrorPageSelfAd .buttons{display:flex;flex-direction:row}.LZTUpErrorPage article div .LZTUpErrorPageSelfAd .buttons .button{display:flex;align-items:center;background:#0daf77;border-radius:6px;color:#fff;padding:0px 15px;margin:10px;line-height:34px;font-size:18px;transition:.5s background ease}.LZTUpErrorPage article div .LZTUpErrorPageSelfAd .buttons .button:hover{background:rgba(13,175,119,.8) !important}.LZTUpErrorPage article div .LZTUpErrorPageSelfAd .buttons .button svg{width:24px;height:24px;margin-right:5px;fill:#fff}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/menu.scss":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://cdn.jsdelivr.net/gh/lzt-upgrade/coloris-lzt-theme@latest/dist/coloris.min.css);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.clr-picker{display:none}.LZTUpColorPickerWrap{display:flex;align-items:center}.LZTUpColorPickerWrap:not(:first-of-type){margin-top:10px}.LZTUpColorPickerWrap .LZTUpModalDescription{margin-right:10px !important}.LZTUpColorPickerWrap .clr-field input{width:24px;height:24px}.LZTUpColorPickerWrap .clr-field button{width:28px;height:28px}.LZTUpColorPickerWrap .clr-field input,.LZTUpColorPickerWrap .clr-field button{border-radius:4px}.LZTUpSelect option{background:#272727;padding:10px 15px;font-weight:600;border-radius:6px}.LZTUpSelect option:hover{background:#2d2d2d}.LZTUpIconButton{display:flex;flex-direction:row-reverse;align-items:center;justify-content:center}.LZTUpIconButton.fit{max-width:fit-content}.LZTUpIconButton i{margin:0 8px;margin-top:3.5px}.LZTUpRefreshButton{min-width:32px !important;margin-left:32px !important}.LZTUpSortableItem{display:flex;align-items:center;padding:16px;margin:8px 0;border-radius:8px;background:rgba(54,54,54,.75)}.LZTUpSortableItem .LZTUpSortableDraggable{color:#8c8c8c;margin-right:10px;cursor:move}.LZTUpSortableItem .LZTUpSortableContent p{margin:0 !important}.LZTUpSortableItem .LZTUpSortableUtility{display:flex;margin-left:auto}.LZTUpSortableItem .LZTUpSortableUtility div{margin-left:10px;cursor:pointer;transition:.5s color ease}.LZTUpSortableItem .LZTUpSortableUtility .LZTUpSortableEditButton{color:#6a6a6a}.LZTUpSortableItem .LZTUpSortableUtility .LZTUpSortableEditButton:hover{color:#0daf77}.LZTUpSortableItem .LZTUpSortableUtility .LZTUpSortableRemoveButton{color:#964448}.LZTUpSortableItem .LZTUpSortableUtility .LZTUpSortableRemoveButton:hover{color:#f13838}#LZTUpModalMainTitle{text-align:center;padding:16px;font-size:20px;font-weight:bold}.LZTUpModalBackButton{position:absolute;top:18px;left:25px;padding:0px 5px;margin:-4px -5px;cursor:pointer;line-height:25px;height:26px;width:26px;border:0 !important;background:rgba(0,0,0,0);color:#d6d6d6;font-size:18px}.LZTUpModalBackButton:hover{background:rgba(18,76,50,.4);border-radius:8px}.LZTUpTabs{width:100%;box-sizing:border-box;padding:0 10px;border:none !important;margin:15px auto !important;display:flex;align-items:center;justify-content:center}.LZTUpTabs #LZTUpTab{position:relative;padding:10px;margin:0 4px;float:left;font-weight:600;list-style:none;font-size:14px}.LZTUpTabs #LZTUpTab:hover{cursor:pointer}.LZTUpTabs #LZTUpTab.active{box-shadow:inset 0px -2px 0px 0px #0daf77;transform:translateY(-1px);transition:.2s}.LZTUpTabs #LZTUpTab:not(.active):hover{box-shadow:inset 0px -2px 0px 0px #363636}.LZTUpSection{display:flex;flex-wrap:wrap;margin:20px 15px}.LZTUpSection.row{flex-direction:row}.LZTUpSection.row .LZTUpSectionItem{max-width:284px}.LZTUpSection.row .LZTUpSectionTitle,.LZTUpSection.row .LZTUpSectionDesc{max-width:200px}.LZTUpSection.column{flex-direction:column}.LZTUpSection.column .LZTUpSectionTitle,.LZTUpSection.column .LZTUpSectionDesc{max-width:440px}.LZTUpSection.column .LZTUpSectionDesc{white-space:break-spaces}.LZTUpSection.column .LZTUpSectionItem{max-width:580px}.LZTUpSection .LZTUpSectionItem{flex-basis:50%;flex-grow:1;height:64px;display:flex;align-items:center;transition:all .5s ease}.LZTUpSection .LZTUpSectionItem:hover{background:rgba(54,54,54,.75);border-radius:8px;cursor:pointer}.LZTUpSectionTextContainer{display:flex;flex-direction:column;justify-content:center;flex:1 1 auto;max-width:100%}#LZTUpIcon{width:28px;height:28px;margin:20px;font-size:28px;color:#0daf77}#LZTUpIcon.gray{color:#949494}#LZTUpIcon.right{text-align:right}#LZTUpModalContainer{margin:15px;max-width:400px}#LZTUpModalChecksContainer,#LZTUpModalReportButtonsContainer,#LZTUpModalCell,.LZTUpModalMesh,.LZTUpModalSeparator{margin:15px;max-width:95%}.LZTUpContainer{display:flex;flex-direction:column;margin:15px;max-width:95%}.LZTUpModalHeading{margin:10px 0 5px 0 !important}.LZTUpModalDescription{margin:0 !important;margin-bottom:5px !important}.LZTUpTextArea{min-height:40px}.LZTUpModalSeparator{border-bottom:1px solid #363636}#LZTUpModalChecksText{margin:0px 25px 5px}.LZTUpSectionTitle,.LZTUpSectionDesc{display:block;margin-right:20px;font-size:15px;font-weight:bold;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.LZTUpSectionDesc{font-size:13px;font-weight:normal;color:#949494}.LZTUpSectionDesc .mceSmilie{max-height:18px !important}.LZTUpModalSectionTexts{display:flex;flex-direction:column;justify-content:center;flex:1 1 auto}.LZTUpModalSectionTexts .LZTUpSubText{max-width:450px}#LZTUpModalComment{background:#363636;margin:5px 15px;padding:10px 15px;border-radius:10px}#LZTUpModalComment a{color:#00ba78}.LZTUpModalBlock{display:flex}.LZTUpModalBlockButtons{display:flex;flex-wrap:wrap;justify-content:center;margin-top:25px}.LZTUpModalBlockButtons .button{margin:5px;width:250px}.LZTUpSubMenu .previewContainer{display:flex;float:right;margin:25px 15px;padding:10px 10px 15px 10px;background-size:cover;background-position:center;background-attachment:fixed;background-repeat:no-repeat;border-radius:10px;width:92%;max-width:92%}.LZTUpSubMenu .previewContainer .avatar img{width:66px;height:66px}.LZTUpSubMenu .previewContainer .info{padding:0 0 0 20px}.LZTUpSubMenu .previewContainer .info .username{font-weight:600}.LZTUpSubMenu .previewContainer .bannerOrStatus{min-width:150px;margin:10px 0 0;color:#949494}.LZTUpSubMenu .previewContainer .bannerOrStatus em{font-style:inherit}.LZTUpSubMenu .previewContainer #LZTUpPreviewBadge .customUniqIcon{padding:2px 0;text-align:center}.LZTUpSubMenu .previewContainer #LZTUpPreviewBadge .customUniqIcon svg{width:16px !important;height:16px !important}.LZTUpSubMenu .previewContainer #LZTUpPreviewBadge::before{font-family:"Font Awesome 5 Pro";font-weight:600;display:inline-block;font-size:12.32px}.LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.admin{background:#964448}.LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.admin::before,.LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.bot::before{content:""}.LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.Designer::before{content:""}.LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.headDesigner::before{content:""}.LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.editor::before{content:""}.LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.sponsor::before{content:""}.LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.coder::before{content:""}.LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.uniq_default::before,.LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.Legend::before,.LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.Ikarus::before{content:""}.LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.moder{background:#3d6b39}.LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.curator{background:rgba(8,156,122,.8509803922)}.LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.moder::before,.LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.main_moder::before,.LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.curator::before{content:""}.LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.arbitr::before,.LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.main_arbitr::before{content:""}.LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.telegramBot::before{content:""}.LZTUpSubMenu .previewContainer .UsernameStyle.style18,.LZTUpSubMenu .previewContainer .UsernameStyle.style360{text-decoration:line-through;color:#aaa}.LZTUpSubMenu .previewContainer .UsernameStyle.style3{color:#f13838}.LZTUpSubMenu .previewContainer .UsernameStyle.style30{color:#ff9afc}.LZTUpSubMenu .previewContainer .UsernameStyle.style353{background:linear-gradient(98.26deg, #FF42F7 2.08%, #FF24CF 100%);-webkit-background-clip:text;-webkit-text-fill-color:rgba(0,0,0,0)}.LZTUpSubMenu .previewContainer .UsernameStyle.style350{background:linear-gradient(90deg, #5c45ff, #feb5f2 100%);-webkit-background-clip:text;-webkit-text-fill-color:rgba(0,0,0,0)}.LZTUpSubMenu .previewContainer .UsernameStyle.style12{color:#01f73c}.LZTUpSubMenu .previewContainer .UsernameStyle.style1,.LZTUpSubMenu .previewContainer .UsernameStyle.style41,.LZTUpSubMenu .previewContainer .UsernameStyle.style142,.LZTUpSubMenu .previewContainer .UsernameStyle.style144{color:#aaa}.LZTUpSubMenu .previewContainer .UsernameStyle.style32,.LZTUpSubMenu .previewContainer .UsernameStyle.style93,.LZTUpSubMenu .previewContainer .UsernameStyle.style21,.LZTUpSubMenu .previewContainer .UsernameStyle.style2{color:#949494}.LZTUpSubMenu .previewContainer .UsernameStyle.style60{color:#ffa8af}.LZTUpSubMenu .previewContainer .UsernameStyle.style9{color:#0075ad}.LZTUpSubMenu .previewContainer .UsernameStyle.style65{color:#a5e3ff}.LZTUpSubMenu .previewContainer .UsernameStyle.style351{color:#ff0076}.LZTUpSubMenu .previewContainer .UsernameStyle.style29{color:#0acc9e}.LZTUpSubMenu .previewContainer .UsernameStyle.style26{background:linear-gradient(90deg, #0095dd 0%, #f1094b 100%, #0095dd);-webkit-background-clip:text;-webkit-text-fill-color:rgba(0,0,0,0)}.LZTUpSubMenu .previewContainer .UsernameStyle.style4{color:#0e9100}.LZTUpSubMenu .previewContainer .UsernameStyle.style22{color:#eee}.LZTUpSubMenu .previewContainer .UsernameStyle.style11{color:#56b5e0}.LZTUpSubMenu .previewContainer .UsernameStyle.style7{color:#ff9304}.LZTUpSubMenu .previewContainer .UsernameStyle.style349,.LZTUpSubMenu .previewContainer .UsernameStyle.style365{color:#0087ff}.LZTUpSubMenu .previewContainer .UsernameStyle.style354{color:aqua}.LZTUpSubMenu .previewContainer .UsernameStyle.style218{color:#f13838}.LZTUpSubMenu .previewContainer .UsernameStyle.style359{color:#e5d9a3}.LZTUpSubMenu .previewContainer .UsernameStyle.style8{color:gold}.LZTUpSubMenu .previewContainer .UsernameStyle.style265{background:linear-gradient(35deg, #006eff, #00ff81 52%, #fff 50%, #93cbff);-webkit-background-clip:text;-webkit-text-fill-color:rgba(0,0,0,0);text-shadow:0 0 7px rgba(0,255,207,.5019607843)}.LZTUpSubMenu .previewContainer .UsernameStyle.style23{color:#b35ede}.LZTUpSubMenu .previewContainer .UsernameStyle.banned,.LZTUpSubMenu .previewContainer .UsernameStyle.is_banned{text-decoration:line-through;background:inherit;-webkit-text-fill-color:inherit;text-shadow:inherit !important;color:#aaa !important}.LZTUpSubMenu .previewContainer .avatarBox{position:relative}.LZTUpSubMenu .previewContainer .avatarBox .avatarUserBadges .badgeDefaultBackground{background:#363636}.LZTUpSubMenu .previewContainer .avatarBox .avatarUserBadges .avatarUserBadge{position:absolute;bottom:-12px;left:20px;border:2px solid #272727;font-size:0;width:22px;height:22px;margin:0;line-height:22px;border-radius:50%;text-align:center;text-shadow:none !important;box-shadow:none !important;border-radius:50% !important;-webkit-background-clip:unset !important;-webkit-text-fill-color:unset !important;overflow:hidden}.LZTUpSubMenu .previewContainer .avatarBox .avatarUserBadges .avatarUserBadge:only-child{left:35px}.LZTUpSubMenu .previewContainer .avatarBox .avatarUserBadges .avatarUserBadge.avatarUserBadge--1{left:20px}.LZTUpSubMenu .previewContainer .avatarBox .avatarUserBadges .avatarUserBadge.avatarUserBadge--2{left:40px}.LZTUpSubMenu .previewContainer .avatarBox,.LZTUpSubMenu .previewContainer .info{display:table-cell;vertical-align:top}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/universal.scss":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#LZTUpCustomBackground{background-size:cover;background-position:center;background-attachment:fixed;background-repeat:no-repeat}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/xenforo.scss":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.copyButton{cursor:pointer;font-size:16px;font-weight:400;padding:1px 4px;margin:-5px 0 0 6px;display:inline-block;color:#505050}.copyButton:hover{color:#949494}`, ""]);
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

/***/ "./src/styles/errorPage.scss":
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_errorPage_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/errorPage.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "html");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_errorPage_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_errorPage_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_errorPage_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_errorPage_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.locals : undefined);


/***/ }),

/***/ "./src/styles/universal.scss":
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_universal_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/universal.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "html");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_universal_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_universal_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_universal_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_universal_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.locals : undefined);


/***/ }),

/***/ "./src/styles/xenforo.scss":
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_xenforo_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/xenforo.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "html");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_xenforo_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_xenforo_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_xenforo_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_xenforo_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.locals : undefined);


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

/***/ }),

/***/ "./src/api/lztupgrade/themeAPI.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ themeAPI)
});

;// CONCATENATED MODULE: ./src/configs/endpoints.json
const endpoints_namespaceObject = JSON.parse('{"RC":"https://lztupgrade.toiloff.ru/api/themes","I1":"https://lztupgrade.toiloff.ru/static/themes"}');
// EXTERNAL MODULE: ./src/utils/logger.js
var logger = __webpack_require__("./src/utils/logger.js");
;// CONCATENATED MODULE: ./src/api/requestJSON.js


async function requestJSON(endpoint, errText) {
  try {
    return await $.ajax({
      url: endpoint,
      dataType: 'json'
    });
  } catch (err) {
    logger/* default */.Z.log(errText);
    return false;
  }
}


;// CONCATENATED MODULE: ./src/api/lztupgrade/themeAPI.js



async function getThemes() {
  return await requestJSON(endpoints_namespaceObject.RC, `Не удалось получить список тем (${endpoints_namespaceObject.RC})`);
}

function loadTheme(themeName) {
  // load theme by theme name
  const link = document.createElement('link');
  link.href = `${endpoints_namespaceObject.I1}/${themeName}.css`;
  link.type = 'text/css';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
}

/* harmony default export */ const themeAPI = ({
  getThemes,
  loadTheme
});

/***/ }),

/***/ "./src/callbacks/contestsParticipate.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  p: () => (/* binding */ contestsAutoCloseHandler),
  m: () => (/* binding */ participateByBtnCallback)
});

// EXTERNAL MODULE: ./src/utils/utils.js
var utils = __webpack_require__("./src/utils/utils.js");
// EXTERNAL MODULE: ./src/utils/logger.js
var logger = __webpack_require__("./src/utils/logger.js");
;// CONCATENATED MODULE: ./src/events/participate.js



function onParticipateHandler(callback, sleepTime = 1000) {
  return (0,utils/* waitForElm */.Nc)('.LztContest--Participate')
    .then(el => {
      logger/* default */.Z.debug('onParticipateHandler: Participate button finded');
      el.addEventListener('click', async () => {
        logger/* default */.Z.debug('onParticipateHandler: click contest button');
        if (el.classList.contains('disabled')) {
          logger/* default */.Z.debug('onParticipateHandler: clicked on disabled contest button');
          return;
        }

        logger/* default */.Z.debug('onParticipateHandler: waiting for alreadyParticipate button');
        const elem = await (0,utils/* waitForElm */.Nc)('span.alreadyParticipate');
        if (!elem) {
          logger/* default */.Z.debug('onParticipateHandler: no alreadyParticipate button');
          return;
        }

        logger/* default */.Z.debug('onParticipateHandler: alreadyParticipate button finded');
        await (0,utils/* sleep */._v)(sleepTime);
        callback();
      })
    })
    .catch(el => {
      logger/* default */.Z.debug('onParticipateHandler: no contest button');
    });
}


;// CONCATENATED MODULE: ./src/callbacks/contestsParticipate.js


function contestsAutoCloseHandler(toggle) {
  if (toggle) {
    onParticipateHandler(() => {
      window.close();
    })
  };
}

function participateByBtnCallback(event) {
  console.log("participateOnBtn", event);
  if (event.key === 'Tab') {
    event.preventDefault();
    if (document.querySelector('.alreadyParticipate.hidden')) {
      document.querySelector('.LztContest--Participate:not(.disabled)')?.click();
    }
  }
}



/***/ }),

/***/ "./src/callbacks/extensionStart.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ getThemeByID)
/* harmony export */ });
/* harmony import */ var API_lztupgrade_themeAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/api/lztupgrade/themeAPI.js");
/* harmony import */ var Utils_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/utils/logger.js");



function getThemeByID(themeId) {
  // Loading theme by ID
  return new Promise(async (resolve, reject) => {
    Utils_logger__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.debug(`onExtensionStart: Start loading theme with id ${themeId}`);
    const availabledThemes = await API_lztupgrade_themeAPI__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.getThemes();
    if (availabledThemes?.length) {
      Utils_logger__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.debug('onExtensionStart: Themes arrray getted: ', availabledThemes);
      const findedTheme = availabledThemes.find(theme => theme.uid === themeId && theme.active === 1);
      return resolve(findedTheme?.file)
    }

    Utils_logger__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.debug(`onExtensionStart: Not finded active theme`);
    reject(false)
  });
}



/***/ }),

/***/ "./src/configs/StorageName.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ StorageName)
/* harmony export */ });
class StorageName {
  static UserGroup = new StorageName('LZTUserGroup').name;
  static Cache = new StorageName('cache').name;
  static Appear = new StorageName('appearData').name;
  static Contests = new StorageName('contestsData').name;
  static Users = new StorageName('usersData').name;
  static Settings = new StorageName('settingsData').name;

  constructor(name) {
    this.name = name
  }
}

/***/ }),

/***/ "./src/configs/config.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const config = () => {
  return {
    extName:  false ? 0 : 'LZT Upgrade UNRELEASED',
    cacheTime: 604_800, // 1 week
    defaultUserGroup: 'style2'
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config());

/***/ }),

/***/ "./src/configs/extData.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const extData = () => {
  return {
    nodes: {
      // nodes of the forum
      contests: '.node766',
    },
    selectors: {
      // elements of the forum
      memberCard: '.xenOverlay.memberCard',
    },
    uiElementsId: {
      // id of the element for extension UI
      lztupTempSubMenu: 'LZTUpTempSubMenu'
    },
    uiElementsSelectors: {
      // selectors of the element for extension UI
      lztupTempSubMenu: '#LZTUpTempSubMenu'
    },
    links: {
      // for self-ad on site Maintenance page
      telegramChannel: 'https://t.me/lzt_upgrade',
      githubPage: 'https://github.com/lzt-upgrade/lzt-upgrade',
    },
    infoLinks: [
      // for info section in menu
      {
        icon: 'far fa-donate',
        title: 'Поддержать разработку',
        desc: 'Можете немного закинуть, если хотите <img src="/styles/default/xenforo/smilies/ok_lol.png" class="mceSmilie" alt=":ok_lol:" title="Lol">',
        href: 'https://lzt.market/balance/transfer?redirect=https%3A%2F%2Fzelenka.guru&username=Toil',
        sectionId: 'LZTUpInfoDonateItem'
      },
      {
        icon: 'far fa-comments',
        title: 'Тема на форуме',
        desc: 'Новости об обновлениях и отзывы других пользователей',
        href: 'https://zelenka.guru/threads/1', // TODO: add link to forum theme after release
        sectionId: 'LZTUpInfoThreadItem'
      },
      {
        icon: 'fab fa-telegram-plane',
        title: 'Telegram канал',
        desc: 'Все новости расширения и анонсы новых функций',
        href: 'https://t.me/lzt_upgrade',
        sectionId: 'LZTUpInfoTGChannelItem'
      },
      {
        icon: 'fab fa-telegram-plane',
        title: 'Telegram чат',
        desc: 'Чатик для общения с другими пользователями расширения',
        href: 'https://t.me/lzt_upgrade_chat',
        sectionId: 'LZTUpInfoTGChatItem'
      },
      {
        icon: 'fab fa-github',
        title: 'Github',
        desc: 'Исходники расширения + все версии расширения',
        href: 'https://github.com/lzt-upgrade/lzt-upgrade',
        sectionId: 'LZTUpInfoGithubItem'
      },
      {
        icon: 'far fa-code-branch',
        title: 'Greasy Fork',
        desc: 'Альтернативный источник для установки расширения',
        href: 'https://github.com/lzt-upgrade/lzt-upgrade',
        sectionId: 'LZTUpInfoGreasyForkItem'
      },
      {
        icon: 'far fa-tasks',
        title: 'Следить за разработкой',
        desc: 'Доска задач нашего расширения',
        href: 'https://app.weeek.net/ws/438227/shared/board/4prKcWJhKKxLuKNm0CiP7qJEZUH3quST',
        sectionId: 'LZTUpInfoFollowDevItem'
      },
    ]
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extData());

/***/ }),

/***/ "./src/events/categories.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var Utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/utils/utils.js");


// TODO: rework with clear JS
function onClickCategory(nodeSelector, callback) {
  const node = $(`li.node${nodeSelector}.forum.level-n`);
  $(node).on('click', async () => {
    await (0,Utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .sleep */ ._v)(750);
    const el = await (0,Utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .waitForElm */ .Nc)('div.pageNavLinkGroup');
    if (el) callback();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (onClickCategory);

/***/ }),

/***/ "./src/index.js":
/***/ ((__webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var API_lztupgrade_themeAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/api/lztupgrade/themeAPI.js");
/* harmony import */ var Configs_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/configs/config.js");
/* harmony import */ var Configs_extData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/configs/extData.js");
/* harmony import */ var Configs_StorageName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/configs/StorageName.js");
/* harmony import */ var Callbacks_contestsParticipate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/callbacks/contestsParticipate.js");
/* harmony import */ var Callbacks_extensionStart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/callbacks/extensionStart.js");
/* harmony import */ var IndexedDB_profile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/indexedDB/profile.js");
/* harmony import */ var UI_components_buttons_contestsButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/ui/components/buttons/contestsButton.js");
/* harmony import */ var UI_components_buttons_menuButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/ui/components/buttons/menuButton.js");
/* harmony import */ var UI_components_buttons_errorPageButton__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./src/ui/components/buttons/errorPageButton.js");
/* harmony import */ var Events_categories__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./src/events/categories.js");
/* harmony import */ var Utils_logger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/utils/logger.js");
/* harmony import */ var Utils_registers__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./src/utils/registers.js");
/* harmony import */ var Utils_contests__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/utils/contests.js");
/* harmony import */ var Utils_users__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/utils/users.js");
/* harmony import */ var Xenforo_bypass__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/xenforo/bypass.js");
/* harmony import */ var Visuals_users__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/visuals/users.js");
/* harmony import */ var Visuals_universal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/visuals/universal.js");
/* harmony import */ var Visuals_profile__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/visuals/profile.js");
/* harmony import */ var Utils_checkers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./src/utils/checkers.js");
/* harmony import */ var Styles_errorPage_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./src/styles/errorPage.scss");
/* harmony import */ var Styles_universal_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./src/styles/universal.scss");
/* harmony import */ var Styles_xenforo_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./src/styles/xenforo.scss");




























// import 'Styles/main.css';






async function initTheme() {
  // exec time: 50-200ms
  console.time("init-theme");

  console.timeLog("init-theme", "getting appearData...")
  const appearData = await GM_getValue(Configs_StorageName__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.Appear, {});
  console.timeLog("init-theme", "loading name from cache...")
  let themeName = await GM_getValue(Configs_StorageName__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.Cache, {}).themeName;
  console.timeLog("init-theme", "Check themeName valid...")
  if (!themeName && appearData.theme > 0) {
    Utils_logger__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.debug(`Requesting theme with id ${appearData.theme}...`);
    themeName = await (0,Callbacks_extensionStart__WEBPACK_IMPORTED_MODULE_5__/* .getThemeByID */ .P)(appearData.theme)
      .catch(err => console.error(err));
    let cacheData = await GM_getValue(Configs_StorageName__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.Cache, {});
    cacheData.themeName = themeName;
    await GM_setValue(Configs_StorageName__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.Cache, cacheData);
  }
  console.timeLog("Loading theme...");
  API_lztupgrade_themeAPI__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.loadTheme(themeName);
  console.timeEnd("init-theme");
}

async function main() {
  console.time("lztup-start")

  if (GM_info?.script?.version) Utils_logger__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.log(`${Configs_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.extName} version: ${GM_info?.script?.version}`);

  const appearData = await GM_getValue(Configs_StorageName__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.Appear, {});
  console.timeLog("lztup-start", "Waiting body...")
  document.addEventListener('DOMContentLoaded', async () => {
    console.timeLog("lztup-start", "Body loaded successfully")
    if (/^(Error\s[0-9]{3}|Site\sMaintenance|429\sToo\sMany\sRequests)$/.test(document.head.querySelector('title').innerText)) {
      if (!appearData.newErrorPage) {
        return;
      }

      // custom error page
      document.body.classList.add('LZTUpErrorPage');
      const container = document.body.querySelector('article > div');
      const duckRain = document.createElement('img');
      duckRain.src = "https://i.imgur.com/iVmKDr7.gif";
      duckRain.alt = "Duck rain";
      container.appendChild(duckRain);

      if (!appearData.selfAdOnNewErrorPage) {
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

      const selfAdTelegram = new UI_components_buttons_errorPageButton__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z(
        `
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path d="M9.78 18.65l.28-4.23l7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3L3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/>
          </svg>
          Telegram
        `,
        Configs_extData__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.links.telegramChannel
      ).createElement();

      const selfAdGithub = new UI_components_buttons_errorPageButton__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z(
        `
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/>
          </svg>
          Github
        `,
        Configs_extData__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.links.githubPage
      ).createElement();

      selfAdButtonBlock.appendChild(selfAdTelegram);
      selfAdButtonBlock.appendChild(selfAdGithub);

      selfAdBlock.appendChild(selfAdText);
      selfAdBlock.appendChild(selfAdButtonBlock);
      container.appendChild(selfAdBlock);

      return;
    }

    console.timeLog("lztup-start", "GET DEBUG INFO")
    const username = (0,Utils_users__WEBPACK_IMPORTED_MODULE_11__/* .getUsername */ .Ms)('me');
    const userid = (0,Utils_users__WEBPACK_IMPORTED_MODULE_11__/* .getUserId */ .n5)('me');
    const userGroup = (0,Utils_users__WEBPACK_IMPORTED_MODULE_11__/* .getUserGroup */ .xc)('me');
    const userAvatar = $('img.navTab--visitorAvatar').attr('src');

    Utils_logger__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.debug('┏━━━━━━━━ DEBUG INFO ━━━━━━━━━━┓');
    Utils_logger__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.debug(`Script version: ${GM_info?.script?.version}`);
    Utils_logger__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.debug(`Account username: ${username}`);
    Utils_logger__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.debug(`Account userid: ${userid}`);
    Utils_logger__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.debug(`Account userGroup: ${userGroup}`);
    Utils_logger__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.debug(`Account userAvatar: ${userAvatar}`);
    Utils_logger__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.debug('┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┚');

    console.timeLog("lztup-start", "Register menu button")
    ;(0,Utils_registers__WEBPACK_IMPORTED_MODULE_21__/* .registerMenuButton */ .e7)(UI_components_buttons_menuButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z);

    console.timeLog("lztup-start", "Add user group to cache")
    await GM_setValue(Configs_StorageName__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.UserGroup, userGroup);

    console.timeLog("lztup-start", "Loading Profile DB...")
    const profileDB = new IndexedDB_profile__WEBPACK_IMPORTED_MODULE_6__/* .LZTProfileDB */ .M();
    // await profileDB.init();
    const dbProfileData = await profileDB.read();

    console.timeLog("lztup-start", "Checking Profile data...")
    if (dbProfileData) {
      console.timeLog("lztup-start", "Check Profile User or Badge style")
      if (dbProfileData.usernameStyle || dbProfileData.badgeIcons.length) {
        console.timeLog("lztup-start", "Check Profile User style")
        if (dbProfileData.usernameStyle) {
          (0,Visuals_users__WEBPACK_IMPORTED_MODULE_13__/* .updateUserStyle */ .bR)(dbProfileData.usernameStyle);
        }

        console.timeLog("lztup-start", "Check Profile badge style")
        if (dbProfileData.badgeIcons.length) {
          (0,Visuals_users__WEBPACK_IMPORTED_MODULE_13__/* .updateUserBadges */ .Az)(dbProfileData.badgeIcons);
        }

        console.timeLog("lztup-start", "Reg profile observer")
        ;(0,Utils_registers__WEBPACK_IMPORTED_MODULE_21__/* .registerObserver */ .O0)(async (mutation) => {
          Utils_logger__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.debug(mutation)
          if (
            mutation.target.classList.contains('messageList') ||
            mutation.target.classList.contains('messageSimpleList') ||
            mutation.target.classList.contains('messageResponse') ||
            mutation.target.classList.contains('CommentPostList') ||
            mutation.target.classList.contains('discussionList') ||
            mutation.target.classList.contains('chat2-messages') ||
            mutation.target.classList.contains('fe-ac-user') ||
            mutation.target.classList.contains('latestThreads') ||
            mutation.target.parentElement?.classList.contains('conversationMessages') ||
            mutation.nextSibling?.classList?.contains('modal') ||
            mutation.previousSibling?.classList?.contains('Alert') ||
            mutation.previousSibling?.nextSibling?.classList?.contains('Alert') ||
            mutation.removedNodes?.[0]?.id === 'AjaxProgress' ||
            mutation.target.id === 'AlertsDestinationWrapper' ||
            mutation.target.id === 'StackAlerts'
          ) {
            const updatedProfileData = await profileDB.read();
            if (updatedProfileData.usernameStyle) {
              (0,Visuals_users__WEBPACK_IMPORTED_MODULE_13__/* .updateUserStyle */ .bR)(updatedProfileData.usernameStyle)
            }

            if (updatedProfileData.badgeIcons.length) {
              (0,Visuals_users__WEBPACK_IMPORTED_MODULE_13__/* .updateUserBadges */ .Az)(updatedProfileData.badgeIcons);
            }
          }
        });
      }

      console.timeLog("lztup-start", "Check Profile banner")
      if (dbProfileData.bannerStyle && dbProfileData.bannerText) {
        (0,Visuals_users__WEBPACK_IMPORTED_MODULE_13__/* .updateUserBanner */ .$)(dbProfileData.bannerStyle, dbProfileData.bannerText);
      }

      console.timeLog("lztup-start", "Check Profile bg")
      if (dbProfileData.backgroundImage) {
        // update background image of page
        if (dbProfileData.backgroundImageEverywhere) {
          (0,Visuals_universal__WEBPACK_IMPORTED_MODULE_14__/* .addBackgroundImage */ .j)(dbProfileData.backgroundImage);
        } else {
          (0,Visuals_profile__WEBPACK_IMPORTED_MODULE_15__/* .addBackgroundImageInProfile */ .m)(dbProfileData.backgroundImage);
        }
      }
      console.timeLog("lztup-start", "Profile bg loaded")
    }

    console.timeLog("lztup-start", "Loading Contests DB...")
    const dbContestsData = await GM_getValue(Configs_StorageName__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.Contests, {});

    console.timeLog("lztup-start", "Add reg 10 btn")
    dbContestsData.openTenContestsBtn ? (0,UI_components_buttons_contestsButton__WEBPACK_IMPORTED_MODULE_7__/* .regOpenContestsBtn */ .u)(10) : null;

    console.timeLog("lztup-start", "Add onclick contests category")
    ;(0,Events_categories__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z)(Configs_extData__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.nodes.contests, async () => {
      const newContestsData = await GM_getValue(Configs_StorageName__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.Contests, {});
      newContestsData.openTenContestsBtn ? (0,UI_components_buttons_contestsButton__WEBPACK_IMPORTED_MODULE_7__/* .regOpenContestsBtn */ .u)(10) : null;
    });

    console.timeLog("lztup-start", "hideTagsInThread")
    dbContestsData.hideTagsInThread ? (0,Utils_contests__WEBPACK_IMPORTED_MODULE_10__/* .contestsTagsVisibility */ .s$)(true) : null;
    console.timeLog("lztup-start", "autoCloseOnParticipate")
    dbContestsData.autoCloseOnParticipate ? (0,Callbacks_contestsParticipate__WEBPACK_IMPORTED_MODULE_4__/* .contestsAutoCloseHandler */ .p)(true) : null;
    console.timeLog("lztup-start", "infoTopInThread")
    dbContestsData.infoTopInThread ? (0,Utils_contests__WEBPACK_IMPORTED_MODULE_10__/* .contestThreadBlockMove */ .Q6)(true) : null;
    console.timeLog("lztup-start", "removeContent")
    dbContestsData.removeContent ? (0,Utils_contests__WEBPACK_IMPORTED_MODULE_10__/* .contestsHideContent */ .Q9)(true) : null;
    console.timeLog("lztup-start", "removePoll")
    dbContestsData.removePoll ? (0,Utils_contests__WEBPACK_IMPORTED_MODULE_10__/* .contestsHidePoll */ .Rf)(true) : null;
    console.timeLog("lztup-start", "updateCaptchaButton")
    dbContestsData.updateCaptchaButton? (0,Utils_contests__WEBPACK_IMPORTED_MODULE_10__/* .contestsUpdateCapctha */ .g4)() : null;
    console.timeLog("lztup-start", "autoFixCaptcha")
    dbContestsData.autoFixCaptcha ? (0,Utils_contests__WEBPACK_IMPORTED_MODULE_10__/* .contestsAutoFixCaptcha */ .gu)() : null;
    console.timeLog("lztup-start", "participateByKey")
    dbContestsData.participateByKey ? (0,Utils_contests__WEBPACK_IMPORTED_MODULE_10__/* .contestsParticipateByBtn */ .sO)(true) : null;

    console.timeLog("lztup-start", "Loading Users DB...")
    const dbUsersData = await GM_getValue(Configs_StorageName__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.Users, {});

    console.timeLog("lztup-start", "showUserIdInMemberCard")
    if (dbUsersData.showUserIdInMemberCard) {
      (0,Utils_users__WEBPACK_IMPORTED_MODULE_11__/* .addUserIdToMemberCard */ .SL)();
      (0,Utils_registers__WEBPACK_IMPORTED_MODULE_21__/* .registerObserver */ .O0)((mutation) => {
        if (mutation.nextSibling) {
          if (mutation.nextSibling?.classList?.contains('modal')) {
            (0,Utils_users__WEBPACK_IMPORTED_MODULE_11__/* .addUserIdToMemberCard */ .SL)()
          }
        }
      });
    }
    console.timeLog("lztup-start", "disableShareTyping")
    dbUsersData.disableShareTyping ? (0,Xenforo_bypass__WEBPACK_IMPORTED_MODULE_12__/* .bypassShareTyping */ .$)() : null;
    if ((0,Utils_checkers__WEBPACK_IMPORTED_MODULE_16__/* .isProfilePage */ .cD)()) {
      console.timeLog("lztup-start", "showUserIdInProfile")
      dbUsersData.showUserIdInProfile ? (0,Utils_users__WEBPACK_IMPORTED_MODULE_11__/* .addUserIdToProfile */ .Rj)() : null;
      console.timeLog("lztup-start", "showFullRegInProfile")
      dbUsersData.showFullRegInProfile? (0,Utils_users__WEBPACK_IMPORTED_MODULE_11__/* .showFullRegDateInProfile */ .M1)(true) : null;
    }

    console.timeEnd("lztup-start")
  })
}

try {
  await Promise.allSettled([initTheme() , main()]);
} catch {
  console.error(e);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/indexedDB/default.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ LZTUpgradeDB)
/* harmony export */ });
/* harmony import */ var Utils_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/utils/logger.js");


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
        Utils_logger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.error(`Ошибка инициализации Базы Данных ${this.name}: `, openRequest.errorCode);
        reject(false);
      };

      openRequest.onupgradeneeded = () => {
        const db = openRequest.result;

        db.onerror = () => {
          alert(`LZT Upgrade: Не удалось загрузить базу данных ${this.name}`);
          Utils_logger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.error(`Не удалось загрузить базу данных ${this.name}: `, openRequest.error);
          reject(false);
        };

        const objectStore = db.createObjectStore(this.objectKey, {
          keyPath: "key",
        });

        for (const key in this.indexes) {
          if (key === undefined) continue;
          objectStore.createIndex(key, key, { unique: false });
        }

        Utils_logger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.log(`База Данных ${this.name} создана`);

        objectStore.transaction.oncomplete = () => {
          const objectStore = db
            .transaction(this.objectKey, "readwrite")
            .objectStore(this.objectKey);

          const request = objectStore.add(this.defaultData);

          request.onsuccess = () => {
            Utils_logger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.log(`Стандартные настройки "${this.name}" добавлены в Базу Данных: `, request.result);
            resolve(true);
          };
          request.onerror = () => {
            Utils_logger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.error(`Ошибка при добавление стандартных настроек "${this.name}" в Базу Данных: `, request.error);
            reject(false);
          };
        };
      };

      openRequest.onsuccess = () => {
        Utils_logger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.log(`База данных ${this.name} инициализована`);
        const db = openRequest.result;
        db.onversionchange = () => {
          db.close();
          alert(`LZT Upgrade: Базе данных ${this.name} необходимо обновление, пожалуйста, перезагрузите страницу.`);
          Utils_logger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.log(`Базе данных ${this.name} необходимо обновление, пожалуйста, перезагрузите страницу`);
          reject(false);
        };
        resolve(true);
      };

      openRequest.onblocked = () => {
        const db = openRequest.result;
        Utils_logger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.error(`База Данных ${this.name} временно заблокирована из-за ошибки: `, db);
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
        Utils_logger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.error(`Ошибка чтения Базы Данных ${this.name}: `, openRequest.errorCode);
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
          Utils_logger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.log(`Базе данных ${this.name} необходимо обновление, пожалуйста, перезагрузите страницу`);
          reject(false);
        };

        const objectStore = db
          .transaction(this.objectKey)
          .objectStore(this.objectKey);

        const request = objectStore.get(this.objectKey);

        request.onerror = (event) => {
          Utils_logger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.error(`Не удалось получить данные из Базы Данных ${this.name}: `, event.error);
          reject(false);
        };

        request.onsuccess = () => {
          // Logger.log(`Получены данные из Базы Данных ${this.name}: `, request.result
          // );
          const data = request.result;
          resolve(data);
        };
      };

      openRequest.onblocked = () => {
        const db = openRequest.result;
        Utils_logger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.error(`База Данных ${this.name} временно заблокирована из-за ошибки: `, db);
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
          Utils_logger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.error(`Ошибка при обновление Базы Данных ${this.name}: `, openRequest.errorCode)
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
            Utils_logger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.log(`Базе данных ${this.name} необходимо обновление, пожалуйста, перезагрузите страницу`);
            reject(false);
          };

          var objectStore = db
            .transaction(this.objectKey, "readwrite")
            .objectStore(this.objectKey);
          var request = objectStore.get(this.objectKey);

          request.onerror = (event) => {
            Utils_logger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.error(`Не удалось получить данные из Базы Данных ${this.name}: `, event.error);
            reject(false);
          };

          request.onsuccess = () => {
            // Logger.log(`Получены данные из Базы Данных ${this.name}: `, request.result);
            let data = request.result;
            data = this.callback(this.indexes, data, args);

            const requestUpdate = objectStore.put(data);

            requestUpdate.onerror = (event) => {
              Utils_logger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.error(`Не удалось обновить данные в Базе Данных ${this.name}: `, event.error);
              reject(false);
            };

            requestUpdate.onsuccess = () => {
              Utils_logger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.log("Данные в Базе Данных обновлены, вы великолепны!");
              resolve(true);
            };
          };
        };

        openRequest.onblocked = () => {
          const db = openRequest.result;
          Utils_logger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.error(`База Данных ${this.name} временно заблокирована из-за ошибки: `, db);
          alert(`LZT Upgrade отключен из-за ошибки при обновление Базы Данных ${this.name}. Закройте все открытые вкладки с Lolzteam и попробуйте снова.`);
          reject(false);
        };
      } else {
        Utils_logger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.error("В чём смысл делать функцию добавления, которая ничего не добавляет?! wut");
        reject(false);
      }
    });
  }
}



/***/ }),

/***/ "./src/indexedDB/profile.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ LZTProfileDB)
/* harmony export */ });
/* harmony import */ var IndexedDB_default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/indexedDB/default.js");



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

class LZTProfileDB extends IndexedDB_default__WEBPACK_IMPORTED_MODULE_0__/* .LZTUpgradeDB */ .c {
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
        'backgroundImage': 'string',
        'backgroundImageEverywhere': 'number',
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
        backgroundImage: '',
        backgroundImageEverywhere: 0,
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
    backgroundImage,
    backgroundImageEverywhere,
    badgeIcons
  }) {
    super.update(...arguments);
  }
}



/***/ }),

/***/ "./src/ui/avatarUserBadges.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ avatarUserBadges)
});

// EXTERNAL MODULE: ./src/utils/purify.js
var purify = __webpack_require__("./src/utils/purify.js");
// EXTERNAL MODULE: ./src/xenforo/tooltips.js
var tooltips = __webpack_require__("./src/xenforo/tooltips.js");
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


// EXTERNAL MODULE: ./src/utils/logger.js
var logger = __webpack_require__("./src/utils/logger.js");
// EXTERNAL MODULE: ./src/utils/utils.js
var utils = __webpack_require__("./src/utils/utils.js");
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

  findAllBadgeElement(selector, position) {
    return document.querySelectorAll(selector + `[data-position="${position}"]`);
  }

  applyBadge(el, icon) {
    if (icon?.length > 1 && icon?.startsWith('.')) {
      icon = icon.replace('.', '');
      return el.classList.add('userBanner', icon);
    } else if (icon.startsWith('<svg') && icon.endsWith('svg>')) {
      el.innerHTML = (0,purify/* clearSVG */.bw)(icon);
      return el.classList.add('badgeDefaultBackground');
    } else {
      return el.classList.add('uniq_default', 'badgeDefaultBackground');
    }
  }

  updateIcon(badgeEl, badge) {
    if (!badgeEl) {
      return;
    }

    (0,utils/* removeStylesByEl */.Bw)(badgeEl);

    badgeEl.classList.add('avatarUserBadge', 'Tooltip');

    // set position of badge
    if (badgeEl.dataset.multiple === "true") {
      badgeEl.classList.add(`avatarUserBadge--${badge.position}`);
    }

    return this.applyBadge(badgeEl, badge.svg);
  }

  updateText(badgeEl, badge) {
    if (!badgeEl) {
      return;
    }

    if (badgeEl._tippy) {
      return (0,tooltips/* setTooltip */.w)(badgeEl, XenForo.htmlspecialchars(badge.text));
    }

    return XenForo.Tooltip($(badgeEl)); // ! "$"" needed in XenForo.Tooltip
  }

  updateColor(badgeEl, badge) {
    if (!badgeEl) {
      return;
    }

    const svg = badgeEl.querySelector('svg');
    if (!svg) {
      return;
    }

    changeSVGColor(svg, 'stroke', badge.strokeColor, true);
    changeSVGColor(svg, 'fill', badge.fillColor, true);
  }

  updateStyle(badgeEl, badge) {
    if (!badgeEl || !badge.style || badge.style?.startsWith('.')) {
      return;
    }

    return badgeEl.style = badge.style;
  }

  updateBadge(badge) {
    const badgeElements = this.findAllBadgeElement(this.badgeQuery, badge.position);
    if (!badgeElements.length) {
      return;
    }

    for (const badgeEl of badgeElements) {
      this.updateIcon(badgeEl, badge);
      this.updateText(badgeEl, badge);
      this.updateColor(badgeEl, badge);
      this.updateStyle(badgeEl, badge);
    }
  }

  updateBadges() {
    logger/* default */.Z.debug('updateBadges');
    for (const badge of this.badges) {
      if (typeof badge !== 'object') {
        logger/* default */.Z.error('Invalid badge in array');
        continue
      }

      logger/* default */.Z.debug(badge);
      this.updateBadge(badge);
    }
  }
}

/* harmony default export */ const avatarUserBadges = (AvatarUserBadges);

/***/ }),

/***/ "./src/ui/components/button.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var UI_components_icon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/ui/components/icon.js");


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
      const icon = new UI_components_icon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(this.iconClassName).createElement();
      icon.id = '';
      button.appendChild(icon);
    }

    button.onclick = callback;

    return button;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ "./src/ui/components/buttons/contestsButton.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ removeOpenContestsBtn),
/* harmony export */   u: () => (/* binding */ regOpenContestsBtn)
/* harmony export */ });
/* harmony import */ var Utils_checkers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/utils/checkers.js");
/* harmony import */ var Utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/utils/utils.js");




// TODO: Rework with clear js
// TODO: move to utils/contests.js
function regOpenContestsBtn(amount = 10) {
  if ((0,Utils_checkers__WEBPACK_IMPORTED_MODULE_0__/* .isContestsNode */ .IM)() && !$(`#openContestsButton${XenForo.htmlspecialchars(amount)}`).length) {
    const updateButton = $('span.UpdateFeedButton.UpdateFeedButtonIcon');
    const openContestsButton = $(`
      <a class="button" id="openContestsButton${XenForo.htmlspecialchars(amount)}">
        Открыть ${XenForo.htmlspecialchars(amount)}
      </a>
    `);

    openContestsButton.on('click', async () => {
      updateButton.click();
      const el = await (0,Utils_utils__WEBPACK_IMPORTED_MODULE_1__/* .waitForElm */ .Nc)('div.forumImprovements--mask.hidden');
      if (!el) return;

      const links = (0,Utils_utils__WEBPACK_IMPORTED_MODULE_1__/* .getThreadLinks */ .Eq)();
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
  if ((0,Utils_checkers__WEBPACK_IMPORTED_MODULE_0__/* .isContestsNode */ .IM)()) {
    const openContestsButton = $(`#openContestsButton${XenForo.htmlspecialchars(amount)}`);
    openContestsButton.length ? openContestsButton.remove() : null;
  }
}



/***/ }),

/***/ "./src/ui/components/buttons/errorPageButton.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ErrorPageButton {
  /**
   *
   *  @constructor
   *  @param {string} buttonContent - content of the button
   *  @param {string} buttonHref - link of the button (https://...)
   *  @param {string} className - class name of the button
   */

  constructor(buttonContent, buttonHref = '#', className = 'button') {
    this.buttonContent = buttonContent;
    this.buttonHref = buttonHref;
    this.className = className;
  }

  createElement() {
    const button = document.createElement('a');
    button.href = this.buttonHref;
    button.className = this.className;
    button.innerHTML = this.buttonContent;

    return button;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorPageButton);

/***/ }),

/***/ "./src/ui/components/buttons/menuButton.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ buttons_menuButton)
});

// EXTERNAL MODULE: ./src/utils/registers.js
var registers = __webpack_require__("./src/utils/registers.js");
// EXTERNAL MODULE: ./src/ui/components/icon.js
var components_icon = __webpack_require__("./src/ui/components/icon.js");
// EXTERNAL MODULE: ./src/utils/purify.js
var purify = __webpack_require__("./src/utils/purify.js");
;// CONCATENATED MODULE: ./src/ui/components/menu/section.js




class SectionDirection {
  static Row = new SectionDirection('row');
  static Column = new SectionDirection('column');

  constructor(name) {
    this.name = name
  }
}


class SectionText {
  /**
   *
   *  @constructor
   *  @param {string} text - text of the heading
   */

  constructor(text) {
    this.text = text;
    this.className = 'LZTUpSectionTitle';
  }

  createElement() {
    const el = document.createElement('span');
    el.classList.add(this.className);
    el.innerText = this.text;

    return el;
  }
}


class SectionSubText extends SectionText {
  /**
   *
   *  @constructor
   *  @param {string} text - text of the heading (html allowed!!!)
   */

  constructor(text) {
    super(text)
    this.className = 'LZTUpSectionDesc';
  }

  createElement() {
    const el = document.createElement('span');
    el.classList.add(this.className);
    el.innerHTML = (0,purify/* clearHTML */.G6)(this.text);

    return el;
  }
}


class Section {
  /**
   *
   *  @constructor
   *  @param {string} id - id of the section
   *  @param {object} options - additional options (read description below)
   *
   *  options params:
   *  @param {object} [sectionItems] - array of section items
   *  @param {SectionDirection} [direction] - direction of elements in the section
   *  @param {boolean} [hidden] - state of visibility section. If true, the section is hidden by default.
   */

  // constructor(options) {
  //   this.doors = options.doors || 4;
  //   this.state = options.state || 'brand new';
  //   this.color = options.color || 'white';
  // }

  constructor(id, options = {}) {
    this.id = id;
    this.sectionItems = options.sectionItems || [];
    this.sectionContainers = options.sectionContainers || [];
    this.direction = options.direction || SectionDirection.Row;
    this.hidden = options.hidden ?? true;
  }

  createElement() {
    const section = document.createElement('div');
    section.id = this.id;
    section.classList.add('LZTUpSection', this.direction === SectionDirection.Row ? 'row' : 'column');

    for (const sectionItem of this.sectionItems) {
      section.appendChild(sectionItem);
    }

    console.log(this)
    if (this.hidden) {
      console.log(this.id, this.hidden)
      section.style.display = 'none';
    }

    return section;
  }

  /**
   *
   *  @param {string} name - title of the item
   *  @param {string} desc - description of the item
   *  @param {string} iconClasses - font awesome icon classes
   *  @param {string} sectionId - id of the section item
   *  @param {string} containerId - id of the container element (open on click)
   *  @param {boolean} rightArrow - add a icon of the right arrow in the right side (only for column direction)
   */
  addSectionItem(title, desc, iconClasses, sectionId, callback = () => {}, rightArrow = false) {
    const sectionItem = document.createElement('div');
    sectionItem.id = sectionId;
    sectionItem.classList.add('LZTUpSectionItem');

    const sectionIcon = new components_icon/* default */.Z(iconClasses).createElement();
    const textContainer = document.createElement('div');
    textContainer.classList.add('LZTUpSectionTextContainer')
    const textEl = new SectionText(title).createElement();
    const subTextEl = new SectionSubText(desc).createElement();

    textContainer.append(textEl, subTextEl);
    sectionItem.append(sectionIcon, textContainer);
    if (this.direction === SectionDirection.Column && rightArrow) {
      const sectionArrowIcon = new components_icon/* default */.Z('far fa-angle-right gray right').createElement();
      sectionItem.append(sectionArrowIcon)
    }

    sectionItem.onclick = async (e) => await callback(e, title);

    this.sectionItems.push(sectionItem);
    return this;
  }

  /**
   *
   *  @param {string} containerId - name of the container id (open menu on click)
   *  @param {object} items - list of dom elements for add to container
   */
  addSectionContainer(containerId, items) {
    const container = document.createElement('div');
    container.id = containerId;
    container.classList.add('LZTUpSubMenu');
    container.style.display = 'none';

    for (const item of items) {
      container.appendChild(item);
    }


    this.sectionContainers.push(container);
    return this;
  }
}


// EXTERNAL MODULE: ./src/utils/logger.js
var logger = __webpack_require__("./src/utils/logger.js");
// EXTERNAL MODULE: ./src/configs/StorageName.js
var StorageName = __webpack_require__("./src/configs/StorageName.js");
// EXTERNAL MODULE: ./src/callbacks/contestsParticipate.js + 1 modules
var contestsParticipate = __webpack_require__("./src/callbacks/contestsParticipate.js");
// EXTERNAL MODULE: ./src/ui/components/buttons/contestsButton.js
var contestsButton = __webpack_require__("./src/ui/components/buttons/contestsButton.js");
;// CONCATENATED MODULE: ./src/ui/components/menu/checkbox.js



class Checkbox {
  /**
   *
   *  @constructor
   *  @param {string} elementId - id of the element
   *  @param {string} content - content of the element
   */

  constructor(elementId, content) {
    this.elementId = elementId;
    this.content = (0,purify/* clearHTML */.G6)(content);
  }

  createElement(valueToCheck, callbackChecked = () => {}, callbackUnChecked = () => {}, defaultCallback = () => {}) {
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

    checkbox.addEventListener('click', async (event) => {
      await defaultCallback(event)
      event.target.checked ? await callbackChecked(event) : await callbackUnChecked(event);
    });

    return checkboxContainer;
  }
}

/* harmony default export */ const menu_checkbox = (Checkbox);
// EXTERNAL MODULE: ./src/utils/contests.js + 2 modules
var contests = __webpack_require__("./src/utils/contests.js");
// EXTERNAL MODULE: ./src/utils/utils.js
var utils = __webpack_require__("./src/utils/utils.js");
;// CONCATENATED MODULE: ./src/ui/menu/items/contests.js









const getContestsItems = async () => {
  const contestsData = await GM_getValue(StorageName/* default */.Z.Contests, {});

  return [
    new menu_checkbox('open_ten_contests', 'Кнопка "Открыть 10"')
    .createElement(
      contestsData.openTenContestsBtn,
      () => {
        (0,contestsButton/* regOpenContestsBtn */.u)(10);
      },
      () => {
        (0,contestsButton/* removeOpenContestsBtn */.c)(10);
      },
      async (event) => {
        contestsData.openTenContestsBtn = event.target.checked;
        await GM_setValue(StorageName/* default */.Z.Contests, contestsData);
      }),

    new menu_checkbox('auto_close_on_participate',
      `Автозакрытие страницы при нажатие на кнопку "Участвовать"
      <span class="fa fa-exclamation-triangle Tooltip" title="При отключение этой функции страница будет перезагружена"></span>
      `)
    .createElement(
      contestsData.autoCloseOnParticipate,
      async () => {
        (0,registers/* registerAlert */.de)('Включено Автозакрытие страницы при нажатие на кнопку "Участвовать"', 5000);
        (0,contestsParticipate/* contestsAutoCloseHandler */.p)(true);
      },
      async () => {
        (0,registers/* registerAlert */.de)('Выключено Автозакрытие страницы при нажатие на кнопку "Участвовать"', 5000);
        await (0,utils/* sleep */._v)(500);
        window.location.reload();
      },
      async (event) => {
        contestsData.autoCloseOnParticipate = event.target.checked;
        await GM_setValue(StorageName/* default */.Z.Contests, contestsData);
      }),

    new menu_checkbox('info_top_in_contests', `Отображение информации о розыгрыше вверху темы`)
    .createElement(
      contestsData.infoTopInThread,
      () => {},
      () => {},
      async (event) => {
        contestsData.infoTopInThread = event.target.checked;
        await GM_setValue(StorageName/* default */.Z.Contests, contestsData);
        (0,contests/* contestThreadBlockMove */.Q6)(event.target.checked)
      }),

    new menu_checkbox('hide_tags_in_contests', `Скрытие тегов в теме розыгрыша`)
    .createElement(
      contestsData.hideTagsInThread,
      () => {},
      () => {},
      async (event) => {
        contestsData.hideTagsInThread = event.target.checked;
        await GM_setValue(StorageName/* default */.Z.Contests, contestsData);
        (0,contests/* contestsTagsVisibility */.s$)(event.target.checked);
      }),

    new menu_checkbox('remove_content_in_contests', `Скрытие содержимого темы розыгрыша`)
    .createElement(
      contestsData.removeContent,
      () => {},
      () => {},
      async (event) => {
        contestsData.removeContent = event.target.checked;
        await GM_setValue(StorageName/* default */.Z.Contests, contestsData);
        (0,contests/* contestsHideContent */.Q9)(event.target.checked)
      }),

    new menu_checkbox('remove_poll_in_contests', `Скрытие голосования в теме розыгрыша`)
    .createElement(
      contestsData.removePoll,
      () => {},
      () => {},
      async (event) => {
        contestsData.removePoll = event.target.checked;
        await GM_setValue(StorageName/* default */.Z.Contests, contestsData);
        (0,contests/* contestsHidePoll */.Rf)(event.target.checked)
      }),

    new menu_checkbox('update_captcha_button_in_contests', `Кнопка "Обновление капчи"`)
    .createElement(
      contestsData.updateCaptchaButton,
      async () => {
        (0,contests/* contestsUpdateCapctha */.g4)();
      },
      async () => {
        document.querySelector('.LZTUpRefreshButton')?.remove();
      },
      async (event) => {
        contestsData.updateCaptchaButton = event.target.checked;
        await GM_setValue(StorageName/* default */.Z.Contests, contestsData);
      }),

    new menu_checkbox('auto_fix_captcha_in_contests',
    `Автофикс капчи
      <span class="fa fa-question Tooltip" title="Автоматически обновляет капчу, если она не появилась"></span>
      <span class="fa fa-exclamation-triangle Tooltip" title="При отключение этой функции страница будет перезагружена"></span>
    `)
    .createElement(
      contestsData.autoFixCaptcha,
      async () => {
        (0,registers/* registerAlert */.de)('Включен Автофикс капчи', 5000);
        (0,contests/* contestsAutoFixCaptcha */.gu)();
      },
      async () => {
        (0,registers/* registerAlert */.de)('Выключен Автофикс капчи', 5000);
        await (0,utils/* sleep */._v)(500);
        window.location.reload();
      },
      async (event) => {
        contestsData.autoFixCaptcha = event.target.checked;
        await GM_setValue(StorageName/* default */.Z.Contests, contestsData);
      }),

    new menu_checkbox('participate_by_key', `Участие по кнопке Tab`)
    .createElement(
      contestsData.participateByKey,
      () => {},
      () => {},
      async (event) => {
        (0,registers/* registerAlert */.de)(`Участие по кнопке ${event.target.checked ? 'включено' : 'выключено'}` , 5000);
        contestsData.participateByKey = event.target.checked;
        await GM_setValue(StorageName/* default */.Z.Contests, contestsData);
        (0,contests/* contestsParticipateByBtn */.sO)(event.target.checked);
      }),
  ];
}

/* harmony default export */ const items_contests = (getContestsItems);
// EXTERNAL MODULE: ./src/utils/users.js + 2 modules
var users = __webpack_require__("./src/utils/users.js");
;// CONCATENATED MODULE: ./src/ui/menu/items/users.js







const getUsersItems = async () => {
  const usersData = await GM_getValue(StorageName/* default */.Z.Users, {});

  return [
    new menu_checkbox('show_userid_in_profile', 'Показывать ID в профиле пользователя')
    .createElement(
      usersData.showUserIdInProfile,
      () => {
        (0,users/* addUserIdToProfile */.Rj)();
      },
      () => {
        (0,users/* removeUserIdFromProfile */.UD)();
      },
      async (event) => {
        usersData.showUserIdInProfile = event.target.checked;
        await GM_setValue(StorageName/* default */.Z.Users, usersData);
      }),
    new menu_checkbox('show_userid_in_member_card',
      `Показывать ID в карточке пользователя
      <span class="fa fa-exclamation-triangle Tooltip" title="При включение/отключение этой функции страница будет перезагружена"></span>
      `)
    .createElement(
      usersData.showUserIdInMemberCard,
      () => {},
      () => {},
      async (event) => {
        usersData.showUserIdInMemberCard = event.target.checked;
        await GM_setValue(StorageName/* default */.Z.Users, usersData);
        (0,registers/* registerAlert */.de)(`Показывать ID в карточке пользователя ${event.target.checked ? 'включено' : 'выключено'}` , 5000);
        await (0,utils/* sleep */._v)(500);
        window.location.reload();
      }),
    new menu_checkbox('show_fullreg_in_profile', 'Показывать полную дату регистрации в профиле пользователя')
    .createElement(
      usersData.showFullRegInProfile,
      () => {},
      () => {},
      async (event) => {
        usersData.showFullRegInProfile = event.target.checked;
        await GM_setValue(StorageName/* default */.Z.Users, usersData);
        (0,users/* showFullRegDateInProfile */.M1)(event.target.checked);
      }),
    new menu_checkbox('disable_share_typing',
      `Неписалка в темах
      <span class="fa fa-exclamation-triangle Tooltip" title="При включение/отключение этой функции страница будет перезагружена"></span>
      `)
    .createElement(
      usersData.disableShareTyping,
      () => {},
      () => {},
      async (event) => {
        usersData.disableShareTyping = event.target.checked;
        await GM_setValue(StorageName/* default */.Z.Users, usersData);
        (0,registers/* registerAlert */.de)(`Неписалка в темах ${event.target.checked ? 'включена' : 'выключена'}` , 5000);
        await (0,utils/* sleep */._v)(500);
        window.location.reload();
      }),
  ];
}

/* harmony default export */ const items_users = (getUsersItems);
// EXTERNAL MODULE: ./src/configs/config.js
var config = __webpack_require__("./src/configs/config.js");
// EXTERNAL MODULE: ./src/indexedDB/profile.js
var profile = __webpack_require__("./src/indexedDB/profile.js");
;// CONCATENATED MODULE: ./src/ui/components/menu/comment.js



class Comment {
  /**
   *
   *  @constructor
   *  @param {string} content - content of the element
   */

  constructor(content) {
    this.content = (0,purify/* clearHTML */.G6)(content);
  }

  createElement() {
    const container = document.createElement('div');
    container.id = 'LZTUpModalComment';
    container.innerHTML = this.content;

    return container;
  }
}

/* harmony default export */ const comment = (Comment);
// EXTERNAL MODULE: ./src/ui/avatarUserBadges.js + 1 modules
var ui_avatarUserBadges = __webpack_require__("./src/ui/avatarUserBadges.js");
;// CONCATENATED MODULE: ./src/ui/components/menu/previewProfile.js









class PreviewProfile {
  /**
   *
   *  @constructor
   *  @param {string|number} userid - user id
   *  @param {string} username - username
   *  @param {object} data - data for show preview (ex. data from profileDB)
   */

  constructor(userid, username, data, profileElId = null) {
    this.userid = userid;
    this.username = username;
    this.data = data;
    this.profileElId = profileElId || 'LZTUpPreviewContainer';
    this.badges = new ui_avatarUserBadges/* default */.Z(data.badgeIcons, true);
  }

  createElement() {
    const previewContainer = document.createElement('div');
    previewContainer.id = this.profileElId;
    previewContainer.classList.add('previewContainer');

    const avatarUserBadges = this.badges.createElement();

    const avatarBox = document.createElement('div');
    avatarBox.classList.add('avatarBox');
    avatarBox.appendChild(avatarUserBadges);
    avatarBox.innerHTML += `
      <a href="members/${encodeURIComponent(this.userid)}/" class="avatar Av${XenForo.htmlspecialchars(this.userid)}m" data-avatarhtml="true">
        <span class="img m" style="background-image: url(${(0,users/* getUserAvatar */.Dm)(this.userid)})"></span>
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

  async updateUsernameStyle(style) {
    const usernameEl = this.clearStyle(`#${this.profileElId} #LZTUpUsernameStyle`);
    if (!usernameEl) {
      return;
    }

    if (style === '') {
      const userGroup = await GM_getValue(StorageName/* default */.Z.UserGroup, config/* default */.Z.defaultUserGroup); // current user group (newbie, resident, expert and etc)
      style = `.${userGroup}`;
    }
    usernameEl.classList.add('UsernameStyle', 'bold');
    (0,utils/* applyStyle */.bg)(usernameEl, style);
  }

  updateBannerStyle(style) {
    const userBannerEl = this.clearStyle(`#${this.profileElId} #LZTUpUserBannerStyle`);
    if (!userBannerEl) {
      return;
    }

    userBannerEl.classList.add('UserBannerStyle', 'userBanner');
    (0,utils/* applyStyle */.bg)(userBannerEl, style);
  }

  updateBannerText(text) {
    const userBannerEl = document.querySelector(`#${this.profileElId} #LZTUpUserBannerStyle`);
    if (!userBannerEl) {
      return;
    }

    userBannerEl.innerText = XenForo.htmlspecialchars(text);
  }

  updateBanner(data) {
    const userBannerEl = this.clearStyle(`#${this.profileElId} #LZTUpUserBannerStyle`);
    if (!userBannerEl) {
      logger/* default */.Z.error('Failed to get element by userBanner in PreviewProfile!');
      return;
    }

    if (!(data.bannerStyle && data.bannerText)) {
      return userBannerEl.style.display = 'none';
    }

    userBannerEl.style.display = '';
    this.updateBannerStyle(data.bannerStyle);
    this.updateBannerText(data.bannerText);
  }

  updateBackground(imageUrl) {
    const previewContainer = document.querySelector(`#${this.profileElId}`);
    console.log(`#${this.profileElId}`, previewContainer)
    if (!previewContainer) {
      logger/* default */.Z.error('Failed to get previewContainer in PreviewProfile!');
      return;
    }

    if (imageUrl.length) {
      console.log("add imageURL")
      imageUrl = `linear-gradient(rgba(54, 54, 54, 0.85), rgba(54, 54, 54, 0.85)), url(${imageUrl})`;
    }

    previewContainer.style.backgroundImage = imageUrl;
  }

  updateBadges() {
    return this.badges.updateBadges();
  }

  async updateAll() {
    await this.updateUsernameStyle(this.data.usernameStyle);
    this.updateBanner(this.data);
    this.updateBackground(this.data.backgroundImage);
    this.badges.badges = this.data.badgeIcons;
    this.updateBadges();
  }
}

/* harmony default export */ const menu_previewProfile = (PreviewProfile);
;// CONCATENATED MODULE: ./src/ui/components/menu/textArea.js
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

/* harmony default export */ const textArea = (TextArea);
;// CONCATENATED MODULE: ./src/ui/components/menu/input.js
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

/* harmony default export */ const input = (Input);
// EXTERNAL MODULE: ./src/ui/components/button.js
var components_button = __webpack_require__("./src/ui/components/button.js");
;// CONCATENATED MODULE: ./src/ui/components/menu/description.js
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

/* harmony default export */ const menu_description = (Description);
;// CONCATENATED MODULE: ./src/ui/components/menu/colorPicker.js



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
      const description = new menu_description(this.description).createElement();
      wrap.appendChild(description);
    }

    wrap.appendChild(input);
    return wrap;
  }
}

/* harmony default export */ const colorPicker = (ColorPicker);
;// CONCATENATED MODULE: ./src/ui/components/menu/heading.js
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

/* harmony default export */ const menu_heading = (Heading);
;// CONCATENATED MODULE: ./src/ui/components/menu/container.js



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
      const heading = new menu_heading(this.heading).createElement();
      container.appendChild(heading);
    }

    if (this.description) {
      const description = new menu_description(this.description).createElement();
      container.appendChild(description);
    }

    for (const element of this.elements) {
      container.appendChild(element);
    }

    return container;
  }
}

/* harmony default export */ const container = (Container);
;// CONCATENATED MODULE: ./src/ui/components/menu/separator.js
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

/* harmony default export */ const separator = (Separator);
;// CONCATENATED MODULE: ./src/ui/components/menu/sortableContainer.js
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

/* harmony default export */ const sortableContainer = (SortableContainer);
;// CONCATENATED MODULE: ./src/ui/components/menu/sortableItem.js



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
    const icon = new components_icon/* default */.Z('far fa-grip-vertical', '').createElement();
    draggableZone.appendChild(icon);

    const contentContainer = document.createElement('div');
    contentContainer.classList.add('LZTUpSortableContent');

    const containerDesc = document.createElement('p');
    containerDesc.innerText = this.content;
    contentContainer.append(containerDesc);

    const utilityContainer = document.createElement('div');
    utilityContainer.classList.add('LZTUpSortableUtility');

    const editButton = document.createElement('div');
    editButton.classList.add('LZTUpSortableEditButton');
    const editIcon = new components_icon/* default */.Z('far fa-edit', '').createElement();
    editButton.appendChild(editIcon);
    editButton.onclick = async (e) => {
      console.log('Edit button clicked');
      await onClickEdit(e, sortableItem);
    }

    const removeButton = document.createElement('div');
    removeButton.classList.add('LZTUpSortableRemoveButton');
    const removeIcon = new components_icon/* default */.Z('far fa-trash', '').createElement();
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
    sortableItem.appendChild(contentContainer);
    sortableItem.appendChild(utilityContainer);
    return sortableItem;
  }
}

/* harmony default export */ const sortableItem = (SortableItem);
// EXTERNAL MODULE: ./src/configs/extData.js
var extData = __webpack_require__("./src/configs/extData.js");
;// CONCATENATED MODULE: ./src/ui/menu/utils.js





function setMenuTitle(title) {
  const modalOverlay = document.querySelector('.xenOverlay > .errorOverlay#LZTUpModalOverlay')
  const modalTitle = modalOverlay.querySelector('h2.heading');
  modalTitle.id = 'LZTUpModalMainTitle';
  modalTitle.innerText = title;
}

function createGoBackBtn(callback) {
  const modalOverlay = document.querySelector('.xenOverlay > .errorOverlay#LZTUpModalOverlay');

  const backButton = new components_button/* default */.Z('', 'LZTUpModalBackButton', 'fas fa-long-arrow-left').createElement();

  backButton.onclick = () => {
    document.querySelectorAll('div.LZTUpSubMenu').forEach(submenu => submenu.style.display = 'none');
    callback();
  }

  modalOverlay.insertAdjacentElement('afterbegin', backButton);
}

function addGoBackBtn(target = '', text = config/* default */.Z.extName, subMenuToShow = null, onCloseCallback = () => {}) {
  const backButtonSelector = 'button.LZTUpModalBackButton';

  if (document.querySelector(backButtonSelector) !== null) {
    document.querySelector(backButtonSelector).remove();
  }

  return createGoBackBtn(() => {
    document.querySelector(backButtonSelector).remove();
    setMenuTitle(text);
    switch (target) {
      case 'tempmenu':
        document.querySelector(extData/* default */.Z.uiElementsSelectors.lztupTempSubMenu).style.display = 'none';
        subMenuToShow.style.display = '';
        addGoBackBtn();
        onCloseCallback();
        break;
      default:
        document.querySelector('.LZTUpModalContent > .LZTUpSection').style.display = '';
        const tabs = document.querySelector('.LZTUpTabs');
        tabs.style.display = '';

        const tab = tabs.querySelectorAll('#LZTUpTab');
        tab.forEach(element => element.classList.remove('active'));
        tab[0].classList.add('active');
        onCloseCallback()
    }
  });
}

function openSubMenu(containerId, sectionName) {
  document.querySelector('.LZTUpTabs').style.display = 'none';

  const subMenus = document.querySelectorAll('.LZTUpSubMenu');
  subMenus.forEach(subMenu => subMenu.style.display = 'none');

  const sections = document.querySelectorAll('.LZTUpModalContent > .LZTUpSection');
  sections.forEach(section => section.style.display = 'none');

  document.getElementById(containerId).style.display = '';
  setMenuTitle(sectionName);
  return addGoBackBtn();
}


;// CONCATENATED MODULE: ./src/ui/menu/temporarySection.js



const tempSubMenuId = extData/* default */.Z.uiElementsId.lztupTempSubMenu;
const tempSubMenuSelector = extData/* default */.Z.uiElementsSelectors.lztupTempSubMenu;


function openTempMenu(sectionName, fromSectionName, subMenuToShow, onCloseCallback) {
  const subMenus = document.querySelectorAll('.LZTUpSubMenu');
  subMenus.forEach(subMenu => subMenu.style.display = 'none');
  document.querySelector(tempSubMenuSelector).style.display = '';
  setMenuTitle(sectionName);
  addGoBackBtn('tempmenu', fromSectionName, subMenuToShow, onCloseCallback);
}

function addTemporaryMenuSection(items) {
  const oldTempMenu = document.querySelector(tempSubMenuSelector);
  if (oldTempMenu) {
    oldTempMenu.remove();
  }

  const container = document.createElement('div');
  container.id = tempSubMenuId;
  container.classList.add('LZTUpSubMenu');

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


// EXTERNAL MODULE: ./src/visuals/users.js + 1 modules
var visuals_users = __webpack_require__("./src/visuals/users.js");
// EXTERNAL MODULE: ./src/visuals/universal.js
var universal = __webpack_require__("./src/visuals/universal.js");
// EXTERNAL MODULE: ./src/visuals/profile.js
var visuals_profile = __webpack_require__("./src/visuals/profile.js");
;// CONCATENATED MODULE: ./src/ui/menu/items/profile.js



























const profileDB = new profile/* LZTProfileDB */.M();

async function sortableItemOnEditCallback(e, sortableItem, previewProfile) {
  const badgeId = Number(sortableItem.dataset.id);
  const modalContent = document.querySelector('.LZTUpModalContent');
  const uniqSubMenu = document.querySelector('#LZTUpUniqContainer');
  const profileData = await profileDB.read();
  const thisBadgeArray = profileData.badgeIcons.filter(icon => icon.position === badgeId);
  let badgeData = thisBadgeArray[0];
  console.log(badgeId, '==>', profileData.badgeIcons, '==>', thisBadgeArray, '==>', badgeData); // TODO: delete after tests

  const tempPreviewProfile = createPreviewProfile(profileData, 'LZTUpTempPreviewContainer');

  async function updateBadgesData(badgeData) {
    // badgeData its current badge (which we are editing)
    const profData = await profileDB.read();
    // const badges = profData.badgeIcons.filter(icon => icon.position !== badgeId);
    // badges.push(badgeData);
    let badges = profData.badgeIcons;
    const currentBadge = badges.find(badge => badge.position === badgeId);
    const currentBadgeId = badges.indexOf(currentBadge)
    badges[currentBadgeId] = badgeData;
    return badges;
  }

  const el = addTemporaryMenuSection(
    [
      tempPreviewProfile.createElement(),

      new container(
        [
          new textArea(badgeData.svg, '<svg>...</svg>', 0, 3000)
          .createElement(
            async (event) => {
              let val = (0,purify/* clearSVG */.bw)(event.target.value.trim());

              if (val.length > 3000) {
                return (0,registers/* registerAlert */.de)('Максимальная длина иконки 3000 символов. Уменьшите введенный текст для сохранения.')
              }

              badgeData.svg = val;
              tempPreviewProfile.badges.badges = await updateBadgesData(badgeData);
              tempPreviewProfile.updateBadges();
            }
          ),
        ],
        'Иконка на аватарке',
        'Максимум 3000 символов.',
      ).createElement(),

      new container(
        [
          new textArea(badgeData.style, 'background: #fff', 0, 1500)
          .createElement(
            async (event) => {
              let val = (0,purify/* clearCSS */.zB)(event.target.value.trim());

              if (val.length > 1500) {
                return (0,registers/* registerAlert */.de)('Максимальная длина стиля иконки 1500 символов. Уменьшите введенный текст для сохранения.')
              }

              if (val.length > 1 && val.startsWith('.')) {
                event.target.value = val.replace(/\s/g, '');
                val = event.target.value;
              }

              badgeData.style = val;
              tempPreviewProfile.badges.badges = await updateBadgesData(badgeData);
              tempPreviewProfile.updateBadges();
            }
          ),
        ],
        'Стиль иконки',
        'Максимум 1500 символов.',
      ).createElement(),

      new container(
        [
          new input(badgeData.text, 'Идут два сталкера', 0, 24)
          .createElement(
            async (event) => {
              let val = event.target.value;

              if (val.length > 24) {
                return (0,registers/* registerAlert */.de)('Максимальная длина текста в лычке 24 символа. Уменьшите введенный текст для сохранения.')
              }

              badgeData.text = val;
              tempPreviewProfile.badges.badges = await updateBadgesData(badgeData);
              tempPreviewProfile.updateBadges();
            }
          ),
        ],
        'Текст при наведение на иконку',
        'Максимум 24 символа.',
      ).createElement(),

      new container(
        [
          new colorPicker('LZTUpColorPickerFill', badgeData.fillColor, 'Цвет иконки (fill):')
          .createElement(
            async (event) => {
              let val = event.target.value;

              badgeData.fillColor = val;
              tempPreviewProfile.badges.badges = await updateBadgesData(badgeData);
              tempPreviewProfile.updateBadges();
            }
          ),
          new colorPicker('LZTUpColorPickerStroke', badgeData.strokeColor, 'Цвет иконки (stroke):')
          .createElement(
            async (event) => {
              let val = event.target.value;

              badgeData.strokeColor = val;
              tempPreviewProfile.badges.badges = await updateBadgesData(badgeData);
              tempPreviewProfile.updateBadges();
            }
          ),
        ],
        'Изменение цвета иконки'
      ).createElement(),

      new container([
        new components_button/* default */.Z('Сохранить', 'button primary LZTUpIconButton fit', 'far fa-save').createElement(async () => {
          (0,registers/* registerAlert */.de)('Иконка успешно сохранена.')
          const badges = await updateBadgesData(badgeData);
          await profileDB.update({ badgeIcons: badges });
          (0,visuals_users/* updateUserBadges */.Az)(badges);
          tempPreviewProfile.badges.badges = badges;
          tempPreviewProfile.updateBadges();
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
      const content = sortable[i].querySelector('.LZTUpSortableContent');
      content.innerHTML = (0,purify/* clearHTML */.G6)(profileData.badgeIcons[i].text);
    }

    previewProfile.badges.badges = profileData.badgeIcons;
    previewProfile.updateBadges();
  });
  await tempPreviewProfile.updateAll(profileData); // update temp preview profile menu after init
}

function createPreviewProfile(profileData, profileElId = null) {
  const userid = (0,users/* getUserId */.n5)('me');
  const username = (0,users/* getUsername */.Ms)('me');
  return new menu_previewProfile(userid, username, profileData, profileElId);
}

const getProfileItems = async () => {
  function generateBadgeItems(previewProfile, profileData) {
    console.log('Generating badge items')
    const items = [];
    for (const badge of profileData.badgeIcons.sort((a, b) => a.position - b.position)) {
      console.log(badge.text, badge.position)
      items.push(new sortableItem(badge.text, badge.position).createElement((e, sortableItem) => sortableItemOnEditCallback(e, sortableItem, previewProfile), sortableItemOnRemoveCallback));
    }

    console.log(items);

    return items;
  }

  async function reloadUserBadges(updatedProfileData, profileElId = 'LZTUpPreviewContainer') {
    const avatarUserBadgesParent = document.querySelector(`#${profileElId} > .avatarBox > .avatarUserBadges`);
    if (avatarUserBadgesParent) {
      for (const userBadge of avatarUserBadgesParent.children) {
        userBadge.remove();
      }

      const avatarUserBadges = new ui_avatarUserBadges/* default */.Z(updatedProfileData.badgeIcons, true).createElement();
      avatarUserBadgesParent.innerHTML = avatarUserBadges.innerHTML;

      previewProfile.data = updatedProfileData;
      await previewProfile.updateAll();
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
    await previewProfile.updateAll();
    (0,visuals_users/* updateUserBadges */.Az)(newBadgeIcons);
  }

  const profileData = await profileDB.read();
  const userGroup = await GM_getValue(StorageName/* default */.Z.UserGroup, config/* default */.Z.defaultUserGroup);
  const currentDomain = window.location.hostname;

  const previewProfile = createPreviewProfile(profileData);

  return [
    new comment(`На этой вкладке вы можете выбрать стиль вашего ника и лычки. Этот стиль виден только вам.
      Чтобы уник был виден всем, рекомендуем <a href="https://${currentDomain}/account/upgrades?upgrade_id=14" target="_blank">купить</a> настоящий уник.`)
      .createElement(),

    previewProfile.createElement(),

    new container(
      [
        new textArea(profileData.usernameStyle, 'color: #0daf77', 0, 1500)
        .createElement(
          (event) => {
            let val = event.target.value.trim();
            if (val.length > 1500) {
              return (0,registers/* registerAlert */.de)('Максимальная длина стиля ника 1500 символов. Уменьшите введенный текст для сохранения.')
            }

            if (val.length > 1 && val.startsWith('.')) {
              event.target.value = val.replace(/\s/g, '');
              val = event.target.value;
            } else {
              val = (0,purify/* clearCSS */.zB)(val);
            }

            previewProfile.updateUsernameStyle(val);
            profileData.usernameStyle = val;
          }
        ),
      ],
      'Стиль ника',
      'Максимум 1500 символов. При отсутствии кода используется цвет вашей группы с форума.',
    ).createElement(),

    new container(
      [
        new textArea(profileData.bannerStyle, 'background: #fff', 0, 1500)
        .createElement(
          (event) => {
            let val = event.target.value.trim();
            if (val.length > 1500) {
              return (0,registers/* registerAlert */.de)('Максимальная длина стиля лычки 1500 символов. Уменьшите введенный текст для сохранения.')
            }

            if (val.length > 1 && val.startsWith('.')) {
              event.target.value = val.replace(/\s/g, '');
              val = event.target.value;
            } else {
              val = (0,purify/* clearCSS */.zB)(val);
            }

            profileData.bannerStyle = val;
            previewProfile.updateBanner(profileData);
          }
        ),
      ],
      'Стиль лычки',
      'Максимум 1500 символов. При отсутствии текста или стиля лычка отключается.',
    ).createElement(),

    new container(
      [
        new input(profileData.bannerText, 'Внимание анекдот', 0, 24)
        .createElement(
          (event) => {
            let val = event.target.value;
            if (val.length > 24) {
              return (0,registers/* registerAlert */.de)('Максимальная длина текста в лычке 24 символа. Уменьшите введенный текст для сохранения.')
            }

            profileData.bannerText = val;
            previewProfile.updateBanner(profileData);
          }
        ),
      ],
      'Текст в лычке',
      'Максимум 24 символа. При отсутствии текста или стиля лычка отключается.',
    ).createElement(),


    new separator().createElement(), // * ADD SEPARATOR

    new container(
      [
        new sortableContainer(
          generateBadgeItems(previewProfile, profileData)
        ).createElement(async (e) => {
          // move items
          const items = e.target.children;
          const newProfileData = await profileDB.read();
          newProfileData.badgeIcons.reverse();
          for (let i = 0; i < items.length; i++) {
            logger/* default */.Z.debug('moving items');
            items[i].dataset.id = i + 1;
            newProfileData.badgeIcons[i].position = i + 1;
          }

          profileData.badgeIcons = newProfileData.badgeIcons;
          await profileDB.update({ badgeIcons: newProfileData.badgeIcons });
          await reloadUserBadges(profileData);
          (0,visuals_users/* updateUserBadges */.Az)(newProfileData.badgeIcons);
        }),

        new components_button/* default */.Z('Добавить иконку', 'button LZTUpIconButton', 'far fa-plus')
        .createElement(async (e) => {
          const sortableContainer = e.target.parentElement?.querySelector('.LZTUpSortableContainer');

          if (!sortableContainer) {
            return (0,registers/* registerAlert */.de)('Не найден контейнер для добавления!')
          }

          if (sortableContainer.children.length === 2) {
            return (0,registers/* registerAlert */.de)('Вы не можете добавить больше 2 иконок!')
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

          const newItem = new sortableItem(defaultIcon.text, defaultIcon.position).createElement((e, sortableItem) => sortableItemOnEditCallback(e, sortableItem, previewProfile), sortableItemOnRemoveCallback);

          sortableContainer.appendChild(newItem);
          await profileDB.update({ badgeIcons: badgeIcons });

          profileData.badgeIcons = badgeIcons;

          await reloadUserBadges(profileData);
          (0,visuals_users/* updateUserBadges */.Az)(badgeIcons);
        }),
      ],
      'Управление иконками',
      'Ниже вы можете легко настроить иконки уника и их порядок (изменения автоматически применяются)'
    ).createElement(),

    new separator().createElement(), // * ADD SEPARATOR

    new container(
      [
        new input(profileData.backgroundImage, 'Ссылка на изображение', 0, 2048)
        .createElement(
          (event) => {
            let val = XenForo.htmlspecialchars(event.target.value);
            if (val.length > 2048) {
              return (0,registers/* registerAlert */.de)('Максимальная длина ссылки на фон 2048 символов. Введите другую ссылку для сохранения.')
            }

            console.log('execute background');
            profileData.backgroundImage = val;
            previewProfile.updateBackground(profileData.backgroundImage);
          }
        ),
      ],
      'Фон профиля',
      'Поддерживаются только прямые ссылки на изображения.',
    ).createElement(),

    new menu_checkbox('profile_background_everywhere', `Заменить фон на всех страницах форума`)
    .createElement(
      profileData.backgroundImageEverywhere,
      async () => {
        await profileDB.update({backgroundImageEverywhere: 1});
        (0,universal/* addBackgroundImage */.j)(profileData.backgroundImage);
      },
      async () => {
        await profileDB.update({backgroundImageEverywhere: 0});
        (0,universal/* addBackgroundImage */.j)('');
        (0,visuals_profile/* addBackgroundImageInProfile */.m)(profileData.backgroundImage);
      }),

    new container([
      new components_button/* default */.Z('Сохранить', 'button primary LZTUpIconButton fit', 'far fa-save').createElement(async () => {
        // save settings in IndexedDB
        const oldProfileData = await profileDB.read();

        await profileDB.update({
          usernameStyle: profileData.usernameStyle,
          bannerStyle: profileData.bannerStyle,
          bannerText: profileData.bannerText,
          backgroundImage: profileData.backgroundImage
        });

        (0,registers/* registerAlert */.de)('Настройки локального уника успешно сохранены.');

        if (profileData.usernameStyle) {
          // update all user styles in page
          (0,visuals_users/* updateUserStyle */.bR)(profileData.usernameStyle);
        } else if (oldProfileData.usernameStyle !== '' && profileData.usernameStyle == '') {
          (0,visuals_users/* updateUserStyle */.bR)(`.${userGroup}`);
        }

        if (profileData.bannerStyle && profileData.bannerText) {
          // update banner in profile
          (0,visuals_users/* updateUserBanner */.$)(profileData.bannerStyle, profileData.bannerText);
        }

        if (profileData.backgroundImage) {
          // update background image of page
          if (profileData.backgroundImageEverywhere) {
            (0,universal/* addBackgroundImage */.j)(profileData.backgroundImage);
          } else {
            (0,visuals_profile/* addBackgroundImageInProfile */.m)(profileData.backgroundImage);
          }
        }
        previewProfile.data = profileData;
        await previewProfile.updateAll()
      }),
    ]).createElement()
  ];
}

/* harmony default export */ const items_profile = (getProfileItems);
;// CONCATENATED MODULE: ./src/ui/menu/items/info.js




const getInfoItems = async () => {
  const infoSection = new Section('LZTUpInfoSection', { direction: SectionDirection.Column , hidden: false})
  for (const infoLink of extData/* default */.Z.infoLinks) {
    infoSection.addSectionItem(infoLink.title, infoLink.desc, infoLink.icon, infoLink.sectionId, () => window.open(infoLink.href))
  }

  return [
    infoSection.createElement()
  ];
}

/* harmony default export */ const info = (getInfoItems);
// EXTERNAL MODULE: ./src/indexedDB/default.js
var indexedDB_default = __webpack_require__("./src/indexedDB/default.js");
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

class LZTAppearDB extends indexedDB_default/* LZTUpgradeDB */.c {
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


;// CONCATENATED MODULE: ./src/utils/files.js


function downloadJSONFile(data, name) {
  const blob = new Blob([data], {
    type: 'application/json'
  });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.download = `${name}.json`;
  link.click();
  return link;
}

async function uploadJSONFile() {
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

  return await new Promise(resolve => {
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = (e) => {
      logger/* default */.Z.error('Ошибка загрузки файла настроек', e);
      resolve(false);
    };
  });
}


;// CONCATENATED MODULE: ./src/ui/menu/items/settings.js











const appearDB = new LZTAppearDB()
const settings_profileDB = new profile/* LZTProfileDB */.M()

async function saveSettings() {
  const appearData = await appearDB.read();
  const contestsData = await GM_getValue(StorageName/* default */.Z.Contests, {});
  const profileData = await settings_profileDB.read();
  const settingsData = await GM_getValue(Storage.Settings, {})
  const usersData = await GM_getValue(StorageName/* default */.Z.Users, {});

  const config = JSON.stringify({
    appear: appearData,
    contests: contestsData,
    profile: profileData,
    settings: settingsData,
    users: usersData
  });

  downloadJSONFile(config, 'LZTUpgradeConfig');
  (0,registers/* registerAlert */.de)('Файл настроек выгружен', 5000);
}

async function uploadSettings() {
  const config = await uploadJSONFile(); // upload json config file from user pc

  if (!config) {
    (0,registers/* registerAlert */.de)('Ошибка загрузки файла настроек', 5000);
    return;
  }

  try {
    const configObj = JSON.parse(config); // read text as json

    // load data to dbs
    await appearDB.update(configObj?.appear);
    await GM_setValue(StorageName/* default */.Z.Contests, configObj?.contests);
    await settings_profileDB.update(configObj?.profile)
    await GM_setValue(StorageName/* default */.Z.Settings, configObj?.settings);
    await GM_setValue(StorageName/* default */.Z.Users, configObj?.users);
    (0,registers/* registerAlert */.de)('Настройки загружены. Выполняю перезагрузку страницы...', 5000);
    await (0,utils/* sleep */._v)(500);
    window.location.reload();
  } catch (err) {
    logger/* default */.Z.error('Ошибка загрузки файла настроек', err)
    ;(0,registers/* registerAlert */.de)('Ошибка загрузки файла настроек', 5000);
  }
}

async function clearCache() {
  await GM_setValue(StorageName/* default */.Z.Cache, {});
  (0,registers/* registerAlert */.de)('Кеш успешно очищен', 5000);
  await (0,utils/* sleep */._v)(1000);
  window.location.reload();
}

const getSettingsItems = async () => {
  const settingsSection = new Section('LZTUpInfoSection', { direction: SectionDirection.Column , hidden: false})
    .addSectionItem('Сохранить настройки в файл', '', 'far fa-file-download', 'LZTUpSaveSettingsItem', saveSettings)
    .addSectionItem('Загрузить настройки из файла', '', 'far fa-upload', 'LZTUpUploadSettingsItem', uploadSettings)
    .addSectionItem('Очистить кеш', '', 'far fa-database', 'LZTUpClearCacheItem', clearCache)

  return [
    settingsSection.createElement()
  ];
}

/* harmony default export */ const settings = (getSettingsItems);
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




       /* harmony default export */ const styles_menu = (menu/* default */.Z && menu/* default */.Z.locals ? menu/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/ui/menu/items/appear.js





const getAppearItems = async () => {
  const appearData = await GM_getValue(StorageName/* default */.Z.Appear, {});

  return [
    new comment("Раздел настроек внешнего вида").createElement()
  ];
}

/* harmony default export */ const appear = (getAppearItems);
;// CONCATENATED MODULE: ./src/ui/menu/items/update.js



const getUpdateItems = async () => {
  return [
    new comment("Раздел обновления расширения").createElement()
  ];
}

/* harmony default export */ const items_update = (getUpdateItems);
;// CONCATENATED MODULE: ./src/ui/menu/menu.js













async function generateMenu(tabs) {
  const menuSection = new Section('LZTUpMainSection')
    .addSectionItem('Локальный Уник', 'Максимальная кастомизация', 'far fa-palette', 'LZTUpUniqItem', (_, title) => openSubMenu('LZTUpUniqContainer', title))
    .addSectionItem('Розыгрыши', 'Комфорт для розыгрышей', 'far fa-gift', 'LZTUpContestsItem', (_, title) => openSubMenu('LZTUpContestsContainer', title))
    .addSectionItem('Пользователи', 'Штучки для пользователей', 'far fa-user', 'LZTUpUsersItem', (_, title) => openSubMenu('LZTUpUsersContainer', title))
    .addSectionItem('Внешний вид', 'Темы, логотипы и другое', 'far fa-drafting-compass', 'LZTUpAppearItem', (_, title) => openSubMenu('LZTUpAppearContainer', title))
    .addSectionContainer('LZTUpUniqContainer', await items_profile())
    .addSectionContainer('LZTUpContestsContainer', await items_contests())
    .addSectionContainer('LZTUpUsersContainer', await items_users())
    .addSectionContainer('LZTUpAppearContainer', await appear())

  const settingsSection = new Section('LZTUpSettingsSection')
    .addSectionItem('Настройки', 'Настройки расширения', 'far fa-cog', 'LZTUpSettingsItem', (_, title) => openSubMenu('LZTUpSettingsContainer', title))
    .addSectionItem('Обновления', 'Установка и проверка обновлений расширения', 'far fa-cloud-download', 'LZTUpUpdateItem', (_, title) => openSubMenu('LZTUpUpdateContainer', title))
    .addSectionItem('Информация', `Версия: ${GM_info?.script?.version}`, 'far fa-info-circle', 'LZTUpInformationItem', (_, title) => openSubMenu('LZTUpInformationContainer', title))
    .addSectionContainer('LZTUpSettingsContainer', await settings())
    .addSectionContainer('LZTUpUpdateContainer', await items_update())
    .addSectionContainer('LZTUpInformationContainer', await info())

  const sections = [
    menuSection,
    settingsSection
  ]

  const menuContent = document.createElement('div')
  menuContent.classList.add('LZTUpModalContent');

  const tabsContainer = document.createElement('ul');
  tabsContainer.classList.add('LZTUpTabs');
  menuContent.appendChild(tabsContainer);

  for (const section of sections) {
    const sectionEl = section.createElement();
    menuContent.appendChild(sectionEl);
    for (const container of section.sectionContainers) {
      menuContent.append(container)
      container.querySelectorAll('.Tooltip').forEach(el => XenForo.Tooltip($(el))); // load all tooltips in menu container
    }
  }

  logger/* default */.Z.debug('Generated menu tabs: ', tabs);

  for (const tab of tabs) {
    menuContent.querySelector('.LZTUpTabs')
      .appendChild(tab.createElement());
  }

  return menuContent;
}


;// CONCATENATED MODULE: ./src/ui/components/menu/tab.js
class Tab {
  /**
   *
   *  @constructor
   *  @param {string} name - name of the tab
   *  @param {string} className - class name of the tab
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

    document.querySelectorAll('.LZTUpModalContent > .LZTUpSection').forEach(section => section.style.display = 'none');

    document.getElementById(this.sectionClassName).style.display = '';
  }
}


// EXTERNAL MODULE: ./src/xenforo/tooltips.js
var tooltips = __webpack_require__("./src/xenforo/tooltips.js");
;// CONCATENATED MODULE: ./src/callbacks/menuButton.js












async function menuButtonCallback() {
  const tabs = [
    new Tab('Главная', 'LZTUpMainTab', 'LZTUpMainSection', true),
    new Tab('Настройки', 'LZTUpSettingsTab', 'LZTUpSettingsSection', false),
  ];

  const menuContent = await generateMenu(tabs);

  const overlay = (0,registers/* registerModal */.Y3)(
    config/* default */.Z.extName,
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

  setMenuTitle(config/* default */.Z.extName);
  (0,tooltips/* updateTooltips */.W)();
  initColorPickers();

  // Update Profile Preview
  const profileDB = new profile/* LZTProfileDB */.M();
  const profileData = await profileDB.read();
  const userid = (0,users/* getUserId */.n5)('me');
  const username = (0,users/* getUsername */.Ms)('me');
  const previewProfile = new menu_previewProfile(userid, username, profileData);
  await previewProfile.updateAll();
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




       /* harmony default export */ const styles_buttons = (buttons/* default */.Z && buttons/* default */.Z.locals ? buttons/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/ui/components/buttons/menuButton.js





const menuButton = document.createElement('li');
const menuButton_link = document.createElement('a');
menuButton_link.id = 'LZTUpButton';
menuButton_link.innerText = config/* default */.Z.extName;

menuButton.appendChild(menuButton_link);
menuButton.onclick = menuButtonCallback;

/* harmony default export */ const buttons_menuButton = (menuButton);

/***/ }),

/***/ "./src/ui/components/icon.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Icon {
  /**
   *
   *  @constructor
   *  @param {string} className - class name of icon
   *  @param {string} iconClassName - id of icon
   */

  constructor(className, id = 'LZTUpIcon') {
    this.className = className;
    this.id = id;
  }

  createElement() {
    const icon = document.createElement('i');
    icon.id = this.id;
    icon.className = this.className;
    return icon;
  }
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ }),

/***/ "./src/utils/checkers.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HI: () => (/* binding */ isContestThread),
/* harmony export */   IM: () => (/* binding */ isContestsNode),
/* harmony export */   Ji: () => (/* binding */ isOpenMemberCard),
/* harmony export */   cD: () => (/* binding */ isProfilePage),
/* harmony export */   kK: () => (/* binding */ isElement)
/* harmony export */ });
/* unused harmony export isThreadPage */
/* harmony import */ var Configs_extData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/configs/extData.js");


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
  const currentPath = window.location.pathname;
  return currentPath.includes('/forums/contests/');
}

function isProfilePage() {
  // exec time: 0ms (faster than check meta)
  return document.querySelector('ol#ProfilePostList') !== null;
}

function isThreadPage() {
  // exec time: 0ms (faster than check meta)
  return document.querySelector('div#content.thread_view') !== null;
}

function isOpenMemberCard() {
  return document.querySelector(Configs_extData__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.selectors.memberCard) !== null;
}



/***/ }),

/***/ "./src/utils/contests.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Q6: () => (/* binding */ contestThreadBlockMove),
  gu: () => (/* binding */ contestsAutoFixCaptcha),
  Q9: () => (/* binding */ contestsHideContent),
  Rf: () => (/* binding */ contestsHidePoll),
  sO: () => (/* binding */ contestsParticipateByBtn),
  s$: () => (/* binding */ contestsTagsVisibility),
  g4: () => (/* binding */ contestsUpdateCapctha)
});

// EXTERNAL MODULE: ./src/callbacks/contestsParticipate.js + 1 modules
var contestsParticipate = __webpack_require__("./src/callbacks/contestsParticipate.js");
// EXTERNAL MODULE: ./src/utils/checkers.js
var checkers = __webpack_require__("./src/utils/checkers.js");
;// CONCATENATED MODULE: ./src/visuals/threads.js
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


// EXTERNAL MODULE: ./src/ui/components/button.js
var components_button = __webpack_require__("./src/ui/components/button.js");
// EXTERNAL MODULE: ./src/utils/logger.js
var logger = __webpack_require__("./src/utils/logger.js");
;// CONCATENATED MODULE: ./src/utils/contests.js







function contestThreadBlockMove(toTop = true) {
  if ((0,checkers/* isContestThread */.HI)()) {
    const contestsThreadBlock = document.querySelector('div.contestThreadBlock');
    const messageContent = document.querySelector('li.firstPost > div.messageInfo > div.messageContent > article > blockquote.messageText');
    if (toTop) {
      contestsThreadBlock.parentElement.append(messageContent)
      contestsThreadBlock.style.borderTop = 'none';
      contestsThreadBlock.style.borderBottom = '1px solid rgb(45, 45, 45)';
    } else {
      contestsThreadBlock.parentElement.prepend(messageContent)
      contestsThreadBlock.style.borderTop = '1px solid rgb(45, 45, 45)';
      contestsThreadBlock.style.borderBottom = 'none';
    }
  }
}

function contestsHideContent(isHidden = true) {
  if ((0,checkers/* isContestThread */.HI)()) {
    return hideThreadContent(isHidden);
  }
}

function contestsTagsVisibility(isHidden = true) {
  if ((0,checkers/* isContestThread */.HI)()) {
    tagsVisibility(isHidden);
  };
}

function contestsHidePoll(isHidden = true) {
  if ((0,checkers/* isContestThread */.HI)()) {
    return hideThreadPoll(isHidden);
  }
}

function contestsUpdateCapctha() {
  if ((0,checkers/* isContestThread */.HI)()) {
    const participateBtn = document.querySelector('.LztContest--Participate');
    if (!participateBtn) {
      return;
    }

    const updateButton = new components_button/* default */.Z('', 'button LZTUpRefreshButton', 'far fa-sync').createElement((e) => {
      e.preventDefault();
      reRenderCaptcha();
    });

    participateBtn.insertAdjacentElement('afterend', updateButton);
  }
}

function contestsAutoFixCaptcha() {
  if ((0,checkers/* isContestThread */.HI)()) {
    const captchaControl = document.querySelector('.captchaBlock > div');
    if (captchaControl?.childElementCount > 0) {
      return logger/* default */.Z.debug('Captcha exists');
    }

    return reRenderCaptcha();
  }
}

function reRenderCaptcha() {
  const captchaControl = document.querySelector('.captchaBlock > div');
  if (!captchaControl) {
    return logger/* default */.Z.error("CAPTCHA BLOCK MISSING");
  }

  // Rerender captcha
  turnstile.render(`#${captchaControl.id}`, {
    sitekey: '0x4AAAAAAADMHhlDN2zO9nrC',
    theme: 'dark',
    size: 'compact',
    callback: function(token) {
      console.log(`Challenge Success ${token}`);
      $('.Captcha--XenForo_ControllerPublic_Thread').prepend('<input type="hidden" name="cf-turnstile-response" value="' + token + '">');
      let $participateButton = $('.LztContest--Participate');
      if ($participateButton.length) {
        $participateButton.attr('href', $participateButton.attr('href') + '?cf-turnstile-response=' + token);
        $participateButton.removeAttr('disabled').removeClass('disabled');
      }
    },
  });
}

function contestsParticipateByBtn(status) {
  const contestBlock = document.querySelector('div.contestThreadBlock');
  if (!contestBlock) {
    return;
  }

  if (status) {
    document.addEventListener('keydown', contestsParticipate/* participateByBtnCallback */.m);
  } else {
    document.removeEventListener('keydown', contestsParticipate/* participateByBtnCallback */.m);
  }
}



/***/ }),

/***/ "./src/utils/logger.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logger);

/***/ }),

/***/ "./src/utils/purify.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G6: () => (/* binding */ clearHTML),
/* harmony export */   bw: () => (/* binding */ clearSVG),
/* harmony export */   zB: () => (/* binding */ clearCSS)
/* harmony export */ });
/* harmony import */ var Utils_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/utils/logger.js");


const defaultAvailabledStyles = [
  'color',
  'text-shadow',
  'border-radius',
  'background',
  'background-color',
  'background-image',
  '-webkit-background-clip',
  '-webkit-text-fill-color'
]

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

// removes all prohibited styles from the string
function clearCSS(css, availabledStyles = defaultAvailabledStyles) {
  let pairs = css.split(';');
  const goodCSS = [];
  Utils_logger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.debug(pairs);
  for (const pair of pairs) {
    const values = pair.split(':');
    const key = values[0].replace(/\s/, '');
    Utils_logger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.debug(pair, values, key)
    if (availabledStyles.includes(key)) {;
      Utils_logger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.debug('DETECTED AVAILABLED STYLES');
      goodCSS.push(pair);
    }
  }

  const cssString = goodCSS.length ? goodCSS.join(';') : '';
  Utils_logger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.debug(`CLEARED FINAL STRING: ${cssString}`);
  return cssString;
}



/***/ }),

/***/ "./src/utils/registers.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O0: () => (/* binding */ registerObserver),
/* harmony export */   Y3: () => (/* binding */ registerModal),
/* harmony export */   de: () => (/* binding */ registerAlert),
/* harmony export */   e7: () => (/* binding */ registerMenuButton)
/* harmony export */ });
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



/***/ }),

/***/ "./src/utils/users.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  SL: () => (/* binding */ addUserIdToMemberCard),
  Rj: () => (/* binding */ addUserIdToProfile),
  Dm: () => (/* binding */ getUserAvatar),
  xc: () => (/* binding */ getUserGroup),
  n5: () => (/* binding */ getUserId),
  Ms: () => (/* binding */ getUsername),
  UD: () => (/* binding */ removeUserIdFromProfile),
  M1: () => (/* binding */ showFullRegDateInProfile)
});

// UNUSED EXPORTS: removeUserIdFromMemberCard

// EXTERNAL MODULE: ./src/utils/checkers.js
var checkers = __webpack_require__("./src/utils/checkers.js");
// EXTERNAL MODULE: ./src/utils/purify.js
var purify = __webpack_require__("./src/utils/purify.js");
// EXTERNAL MODULE: ./src/ui/components/icon.js
var components_icon = __webpack_require__("./src/ui/components/icon.js");
;// CONCATENATED MODULE: ./src/ui/components/buttons/copyButton.js



class CopyButton {
  constructor(content, tooltipMessage = null, messageOnCopy = null) {
    this.content = XenForo.htmlspecialchars(content); // Clipboard.copy works strangely with numbers so we do this
    this.tooltipMessage = tooltipMessage || '';
    this.messageOnCopy = messageOnCopy || 'Успешно скопировано в буфер обмена';
  }

  createElement() {
    const button = document.createElement('span');
    button.classList.add('copyButton', 'Tooltip');
    button.title = this.tooltipMessage;

    button.onclick = async (e) => {
      // We use Clipboard.copy instead to avoid errors when the function is not found and to prevent XSS
      // navigator.clipboard.writeText XSS-safe unlike ClipBoard.copy
      await navigator.clipboard.writeText(this.content);

      // from Clipboard.copy function
      e.target.classList.add('animated');
      animateCSS(e.target, [
        'heartBeat',
        'mainc'
      ]);
      XenForo.alert(this.messageOnCopy, '', 5000);
    }
    button.tabIndex = 0;

    const icon = new components_icon/* default */.Z('far fa-clone', '').createElement();
    button.appendChild(icon);
    return button;
  }
}

/* harmony default export */ const copyButton = (CopyButton);
;// CONCATENATED MODULE: ./src/ui/components/profileInfoRow.js





class ProfileInfoRow {
  /**
   *
   *  @constructor
   *  @param {string} elementId - id of the row
   *  @param {string} label - label of row
   *  @param {string} content - content of row
   */

  constructor(elementId, label, content, copyButton) {
    this.elementId = elementId;
    this.label = label;
    this.content = (0,purify/* clearHTML */.G6)(content);
    this.copyButton = copyButton;
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
    if ((0,checkers/* isElement */.kK)(this.content)) {
      labeled.appendChild(this.content)
    } else {
      labeled.innerHTML = this.content;
    }

    if (this.copyButton instanceof copyButton) {
      const copyButtonEl = this.copyButton.createElement();
      labeled.appendChild(copyButtonEl)
    }

    row.appendChild(label)
    row.appendChild(labeled)

    return row;
  }
}

/* harmony default export */ const profileInfoRow = (ProfileInfoRow);
// EXTERNAL MODULE: ./src/configs/extData.js
var extData = __webpack_require__("./src/configs/extData.js");
;// CONCATENATED MODULE: ./src/utils/users.js





const userIdRowElementId = 'LZTUpUserIDRow';
const userIdMemberCardElementId = 'LZTUpUserIDMemberCard';

function getUserId(target) {
  switch (target) {
    case "profile":
      // in any profile
      if ((0,checkers/* isProfilePage */.cD)()) {
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
      if ((0,checkers/* isOpenMemberCard */.Ji)()) {
        const memberCard = document.querySelectorAll(extData/* default */.Z.selectors.memberCard);
        const userThreadsButton = memberCard[memberCard.length - 1].querySelector('.memberCardInner > .bottom > .userContentLinks > a:nth-child(1)');
        if (!userThreadsButton || userThreadsButton.href === '') {
          return null;
        }

        const url = new URL(userThreadsButton.href);
        return url.searchParams.get('user_id');
      }
    case "self":
    case "me":
      return XenForo?.visitor?.user_id;
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

function getUserGroup(target) {
  switch (target) {
    case "self":
    case "me":
      const userEl = document.querySelector('.accountUsername.username span');
      return userEl.className;
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
  if ((0,checkers/* isProfilePage */.cD)() && document.querySelector(`#${userIdRowElementId}`) === null) {
    const userId = getUserId('profile') ?? 'Не найден';
    const profileInfo = document.querySelector('#profile_short > .pairsJustified');

    const copyBtn = new copyButton(userId, 'Скопировать ID пользователя', 'ID пользователя успешно скопирован в буфер обмена');
    const userIdRow = new profileInfoRow(userIdRowElementId, 'ID', userId, copyBtn).createElement();
    const firstRow = profileInfo.querySelector('.profile_info_row');
    const insertPlace = firstRow ? 'afterend' : 'afterbegin';

    firstRow.insertAdjacentElement(insertPlace, userIdRow);
  }
}

function addUserIdToMemberCard() {
  if ((0,checkers/* isOpenMemberCard */.Ji)()) {
    const memberCards = document.querySelectorAll(extData/* default */.Z.selectors.memberCard);
    const userId = getUserId('membercard') ?? 'Не найден';
    const userContentLinks = memberCards[memberCards.length - 1].querySelector(`#memberCard${userId}.memberCardInner > .bottom > .userContentLinks`);
    const userIdElement = document.createElement('div');
    userIdElement.classList.add('title');
    userIdElement.id = userIdMemberCardElementId;
    userIdElement.innerText = `ID: ${userId}`;
    const copyBtn = new copyButton(userId, 'Скопировать ID пользователя', 'ID пользователя успешно скопирован в буфер обмена').createElement();
    userIdElement.appendChild(copyBtn);
    userContentLinks?.insertAdjacentElement('afterbegin', userIdElement);
  }
}

function removeUserIdFromProfile() {
  if ((0,checkers/* isProfilePage */.cD)()) {
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
  if ((0,checkers/* isProfilePage */.cD)()) {
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



/***/ }),

/***/ "./src/utils/utils.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bw: () => (/* binding */ removeStylesByEl),
/* harmony export */   Eq: () => (/* binding */ getThreadLinks),
/* harmony export */   Nc: () => (/* binding */ waitForElm),
/* harmony export */   _v: () => (/* binding */ sleep),
/* harmony export */   bg: () => (/* binding */ applyStyle)
/* harmony export */ });
/* unused harmony exports getNodeLinks, removeStyles, getTimestamp */
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

const sleep = m => new Promise(r => setTimeout(r, m))

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
  return removeStylesByEl(el)
}

function removeStylesByEl(el) {
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

function getTimestamp() {
  return Math.floor(Date.now() / 1000);
}



/***/ }),

/***/ "./src/visuals/profile.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ addBackgroundImageInProfile)
/* harmony export */ });
/* harmony import */ var Utils_checkers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/utils/checkers.js");
/* harmony import */ var Visuals_universal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/visuals/universal.js");




function addBackgroundImageInProfile(imageUrl) {
  if ((0,Utils_checkers__WEBPACK_IMPORTED_MODULE_0__/* .isProfilePage */ .cD)()) {
    return (0,Visuals_universal__WEBPACK_IMPORTED_MODULE_1__/* .addBackgroundImage */ .j)(imageUrl)
  }
}



/***/ }),

/***/ "./src/visuals/universal.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ addBackgroundImage)
/* harmony export */ });
/* harmony import */ var Utils_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/utils/users.js");
/* harmony import */ var Utils_checkers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/utils/checkers.js");



const customBackgroundID = 'LZTUpCustomBackground';


function addBackgroundImage(imageUrl, skipUserCheck = false) {
  // exec time: 0-1ms (1ms in profile)

  if (!skipUserCheck && ((0,Utils_checkers__WEBPACK_IMPORTED_MODULE_1__/* .isProfilePage */ .cD)() && (0,Utils_users__WEBPACK_IMPORTED_MODULE_0__/* .getUserId */ .n5)('profile') !== (0,Utils_users__WEBPACK_IMPORTED_MODULE_0__/* .getUserId */ .n5)('me'))) {
    // check that this is the profile of the current user
    // don't show background in other users profiles
    return false;
  }

  const body = document.querySelector('body');
  if (!imageUrl) {
    body.id = '';
    body.style.backgroundImage = '';
    return;
  }

  body.id = customBackgroundID;
  body.style.backgroundImage = `linear-gradient(rgba(54, 54, 54, 0.85), rgba(54, 54, 54, 0.85)), url(${imageUrl})`;
}



/***/ }),

/***/ "./src/visuals/users.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Az: () => (/* binding */ updateUserBadges),
  $: () => (/* binding */ updateUserBanner),
  bR: () => (/* binding */ updateUserStyle)
});

// EXTERNAL MODULE: ./src/utils/utils.js
var utils = __webpack_require__("./src/utils/utils.js");
// EXTERNAL MODULE: ./src/utils/users.js + 2 modules
var users = __webpack_require__("./src/utils/users.js");
// EXTERNAL MODULE: ./src/utils/checkers.js
var checkers = __webpack_require__("./src/utils/checkers.js");
;// CONCATENATED MODULE: ./src/ui/components/userBanner.js
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


// EXTERNAL MODULE: ./src/ui/avatarUserBadges.js + 1 modules
var avatarUserBadges = __webpack_require__("./src/ui/avatarUserBadges.js");
;// CONCATENATED MODULE: ./src/visuals/users.js







function updateUserStyle(style) {
  const username = (0,users/* getUsername */.Ms)('me');
  const usersEl = document.querySelectorAll('.username span');
  const myUsersEl = usersEl
                    .values()
                    .filter(user => user.innerText === username);
  for (const userEl of myUsersEl) {
    userEl.className = ''
    userEl.style = '';

    (0,utils/* applyStyle */.bg)(userEl, style);
  }
}

function updateUserBanner(style, text) {
  if ((0,checkers/* isProfilePage */.cD)() && (0,users/* getUserId */.n5)('profile') === (0,users/* getUserId */.n5)('me')) {
    const userBannerEl = document.querySelector('em.userBanner#LZTUpCustomBanner');
    if (userBannerEl) {
      // if exists remove extra styles / classes
      userBannerEl.className = 'userBanner wrapped';
      userBannerEl.style = '';
      userBannerEl.innerText = text;
      return (0,utils/* applyStyle */.bg)(userBannerEl, style);
    }

    // add user banner
    const avatarScaler = document.querySelector('.avatarScaler');
    if (!avatarScaler) {
      return;
    }

    const userBanner = new UserBanner('LZTUpCustomBanner', text).createElement();
    (0,utils/* applyStyle */.bg)(userBanner, style);
    return avatarScaler.insertAdjacentElement('afterend', userBanner);
  }
}

function updateUserBadges(badgeIconsData) {
  const userid = (0,users/* getUserId */.n5)('me');
  const badges = new avatarUserBadges/* default */.Z(badgeIconsData, false);
  const avatarsMedium = document.querySelectorAll(`.avatar.Av${userid}m`);
  const avatarsSmall = document.querySelectorAll(`.avatar.Av${userid}s`);
  const avatars = [...avatarsMedium, ...avatarsSmall]
                  .filter(el => el !== undefined)
                  .filter(el => el.parentElement?.classList.contains('avatarHolder'));
  console.log(avatars) // TODO: remove after tests
  for (const avatar of avatars) {
    console.log(avatar) // TODO: remove after tests
    const avatarHolder = avatar.parentElement;
    const badgesEl = badges.createElement();

    console.log(avatarHolder) // TODO: remove after tests
    avatarHolder.querySelector('.avatarUserBadges')?.remove(); // remove if exists
    console.log(badgesEl) // TODO: remove after tests
    // avatarHolder.insertAdjacentElement('afterbegin', badgesEl);
    avatarHolder.prepend(badgesEl)
    badges.updateBadges()
  }
}



/***/ }),

/***/ "./src/xenforo/bypass.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ bypassShareTyping)
/* harmony export */ });
/* harmony import */ var Utils_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/utils/logger.js");


function bypassShareTyping() {
  if (Object.hasOwn(XenForo, 'threadNotify') && Object.hasOwn(XenForo.threadNotify, 'shareTypingActivity')) {
    Utils_logger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.debug('bypassShareTyping thread: true');
    XenForo.threadNotify.shareTypingActivity = 0;
  }
}



/***/ }),

/***/ "./src/xenforo/tooltips.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ updateTooltips),
/* harmony export */   w: () => (/* binding */ setTooltip)
/* harmony export */ });
function updateTooltips() {
  let lztUpTooltips = $('#LZTUpTooltip.Tooltip');
  return XenForo.Tooltip(lztUpTooltips);
}

function setTooltip(el, text) {
  el.setAttribute('title', '');
  el.setAttribute('data-cachedtitle', text);

  return el._tippy.setContent(text);
}



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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;