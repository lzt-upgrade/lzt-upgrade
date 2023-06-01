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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#LZTUpModalMainTitle{text-align:center;padding:16px;font-size:20px;font-weight:bold}.LZTUpModalBackButton{position:absolute;top:18px;left:25px;padding:0px 5px;margin:-4px -5px;cursor:pointer;line-height:25px;height:26px;width:26px;border:0 !important;background:rgba(0,0,0,0);color:#d6d6d6;font-size:18px}.LZTUpModalBackButton:hover{background:rgba(18,76,50,.4);border-radius:8px}.LZTUpTabs{border:none;margin:15px auto !important;display:flex;align-items:center;justify-content:center}.LZTUpTabs #LZTUpTab{position:relative;padding:10px;list-style:none;font-size:14px}.LZTUpSection{display:flex;flex-wrap:wrap;margin:20px 15px}.LZTUpSection #LZTUpSectionItem{max-width:284px;flex-basis:50%;flex-grow:1;height:64px;display:flex;align-items:center;transition:all .5s ease}.LZTUpSection #LZTUpSectionItem:hover{background:rgba(54,54,54,.75);border-radius:8px;cursor:pointer}#LZTUpIcon{width:28px;height:28px;margin:20px;font-size:28px;color:#0daf77}#LZTUpIcon .gray{color:#949494}#LZTUpIcon .right{text-align:right}#LZTUpSubText{display:block;margin-right:20px;font-size:13px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;width:200px;color:#949494}#LZTUpModalContainer{margin:15px;width:400px}#LZTUpModalChecksContainer,#LZTUpModalReportButtonsContainer,#LZTUpModalCell,.LZTUpModalMesh{margin:15px;width:550px}#LZTUpModalChecksText{margin:0px 25px 5px}#LZTUpText{display:block;margin-right:20px;font-size:15px;font-weight:bold;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;width:200px}.LZTUpModalSectionTexts{display:flex;flex-direction:column;justify-content:center;flex:1 1 auto}.LZTUpModalSectionTexts #LZTUpSubText{width:450px}#LZTUpModalComment{background:#363636;margin:5px 15px;padding:10px 15px;border-radius:10px}#LZTUpModalComment a{color:#00ba78}#LZTUpSubMenu .previewContainer{float:right;margin-left:15px;margin-top:25px;padding:10px 10px 15px 10px;background-size:cover;background-position:center;background-attachment:fixed;background-repeat:no-repeat;border-radius:10px;width:92%;max-width:92%}#LZTUpSubMenu .previewContainer .avatar img{width:66px;height:66px}#LZTUpSubMenu .previewContainer .info{padding:0 0 0 20px}#LZTUpSubMenu .previewContainer .info .username{font-weight:600}#LZTUpSubMenu .previewContainer .bannerOrStatus{min-width:150px;margin:10px 0 0;color:#949494}#LZTUpSubMenu .previewContainer .bannerOrStatus em{font-style:inherit}#LZTUpSubMenu .previewContainer #LZTUpPreviewBadge .customUniqIcon{padding:2px 0;text-align:center}#LZTUpSubMenu .previewContainer #LZTUpPreviewBadge .customUniqIcon svg{width:16px !important;height:16px !important}#LZTUpSubMenu .previewContainer #LZTUpPreviewBadge::before{font-family:\"Font Awesome 5 Pro\";font-weight:600;display:inline-block;font-size:12.32px}#LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.admin{background:#964448}#LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.admin::before,#LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.bot::before{content:\"\"}#LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.Designer::before{content:\"\"}#LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.headDesigner::before{content:\"\"}#LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.editor::before{content:\"\"}#LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.sponsor::before{content:\"\"}#LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.coder::before{content:\"\"}#LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.uniq_default::before,#LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.Legend::before,#LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.Ikarus::before{content:\"\"}#LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.moder{background:#3d6b39}#LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.curator{background:rgba(8,156,122,.8509803922)}#LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.moder::before,#LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.main_moder::before,#LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.curator::before{content:\"\"}#LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.arbitr::before,#LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.main_arbitr::before{content:\"\"}#LZTUpSubMenu .previewContainer #LZTUpPreviewBadge.telegramBot::before{content:\"\"}#LZTUpSubMenu .previewContainer .UsernameStyle.style18,#LZTUpSubMenu .previewContainer .UsernameStyle.style360{text-decoration:line-through;color:#aaa}#LZTUpSubMenu .previewContainer .UsernameStyle.style3{color:#f13838}#LZTUpSubMenu .previewContainer .UsernameStyle.style30{color:#ff9afc}#LZTUpSubMenu .previewContainer .UsernameStyle.style353{background:linear-gradient(98.26deg, #FF42F7 2.08%, #FF24CF 100%);-webkit-background-clip:text;-webkit-text-fill-color:rgba(0,0,0,0)}#LZTUpSubMenu .previewContainer .UsernameStyle.style350{background:linear-gradient(90deg, #5c45ff, #feb5f2 100%);-webkit-background-clip:text;-webkit-text-fill-color:rgba(0,0,0,0)}#LZTUpSubMenu .previewContainer .UsernameStyle.style12{color:#01f73c}#LZTUpSubMenu .previewContainer .UsernameStyle.style1,#LZTUpSubMenu .previewContainer .UsernameStyle.style41,#LZTUpSubMenu .previewContainer .UsernameStyle.style142,#LZTUpSubMenu .previewContainer .UsernameStyle.style144{color:#aaa}#LZTUpSubMenu .previewContainer .UsernameStyle.style32,#LZTUpSubMenu .previewContainer .UsernameStyle.style93,#LZTUpSubMenu .previewContainer .UsernameStyle.style21,#LZTUpSubMenu .previewContainer .UsernameStyle.style2{color:#949494}#LZTUpSubMenu .previewContainer .UsernameStyle.style60{color:#ffa8af}#LZTUpSubMenu .previewContainer .UsernameStyle.style9{color:#0075ad}#LZTUpSubMenu .previewContainer .UsernameStyle.style65{color:#a5e3ff}#LZTUpSubMenu .previewContainer .UsernameStyle.style351{color:#ff0076}#LZTUpSubMenu .previewContainer .UsernameStyle.style29{color:#0acc9e}#LZTUpSubMenu .previewContainer .UsernameStyle.style26{background:linear-gradient(90deg, #0095dd 0%, #f1094b 100%, #0095dd);-webkit-background-clip:text;-webkit-text-fill-color:rgba(0,0,0,0)}#LZTUpSubMenu .previewContainer .UsernameStyle.style4{color:#0e9100}#LZTUpSubMenu .previewContainer .UsernameStyle.style22{color:#eee}#LZTUpSubMenu .previewContainer .UsernameStyle.style11{color:#56b5e0}#LZTUpSubMenu .previewContainer .UsernameStyle.style7{color:#ff9304}#LZTUpSubMenu .previewContainer .UsernameStyle.style349,#LZTUpSubMenu .previewContainer .UsernameStyle.style365{color:#0087ff}#LZTUpSubMenu .previewContainer .UsernameStyle.style354{color:aqua}#LZTUpSubMenu .previewContainer .UsernameStyle.style218{color:#f13838}#LZTUpSubMenu .previewContainer .UsernameStyle.style359{color:#e5d9a3}#LZTUpSubMenu .previewContainer .UsernameStyle.style8{color:gold}#LZTUpSubMenu .previewContainer .UsernameStyle.style265{background:linear-gradient(35deg, #006eff, #00ff81 52%, #fff 50%, #93cbff);-webkit-background-clip:text;-webkit-text-fill-color:rgba(0,0,0,0);text-shadow:0 0 7px rgba(0,255,207,.5019607843)}#LZTUpSubMenu .previewContainer .UsernameStyle.style23{color:#b35ede}#LZTUpSubMenu .previewContainer .UsernameStyle.banned,#LZTUpSubMenu .previewContainer .UsernameStyle.is_banned{text-decoration:line-through;background:inherit;-webkit-text-fill-color:inherit;text-shadow:inherit !important;color:#aaa !important}#LZTUpSubMenu .previewContainer .avatarBox{position:relative}#LZTUpSubMenu .previewContainer .avatarBox .avatarUserBadges .badgeDefaultBackground{background:#363636}#LZTUpSubMenu .previewContainer .avatarBox .avatarUserBadges .avatarUserBadge{position:absolute;bottom:-12px;left:20px;border:2px solid #272727;font-size:0;width:22px;height:22px;margin:0;line-height:22px;border-radius:50%;text-align:center;text-shadow:none !important;box-shadow:none !important;border-radius:50% !important;-webkit-background-clip:unset !important;-webkit-text-fill-color:unset !important;overflow:hidden}#LZTUpSubMenu .previewContainer .avatarBox .avatarUserBadges .avatarUserBadge:only-child{left:35px}#LZTUpSubMenu .previewContainer .avatarBox .avatarUserBadges .avatarUserBadge.avatarUserBadge--1{bottom:-10px;left:10px}#LZTUpSubMenu .previewContainer .avatarBox .avatarUserBadges .avatarUserBadge.avatarUserBadge--2{bottom:-10px;left:30px}#LZTUpSubMenu .previewContainer .avatarBox,#LZTUpSubMenu .previewContainer .info{display:table-cell;vertical-align:top}", ""]);
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
    'nodeSelectors': {
      'contests': '.node766'
    }
  }
}

/* harmony default export */ const configs_config = (config());
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

function updateTooltips() {
  let lztUpTooltips = $('#LZTUpTooltip.Tooltip');
  return XenForo.Tooltip(lztUpTooltips);
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



;// CONCATENATED MODULE: ./src/utils/handlers.js



function onParticipateHandler(callback) {
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
          await sleep(1000);
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
        showPollResults: 0
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
        'showUserId': 'number',
        'showFullRegInProfile': 'number',
        'disableShareTyping': 'number',
      },
      { // defaultData
        key: objectKey,
        showUserId: 0,
        showFullRegInProfile: 0,
        disableShareTyping: 0,
      }
    );
  };

  async update({
    showUserId,
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
        'nickStyle': 'string',
        'bannerStyle': 'string',
        'bannerText': 'string',
        'badgeIcon': 'string',
        'badgeText': 'string',
        'badgeFill': 'string',
        'badgeStroke': 'string',
        'noticesMarks': 'string',
        'profileBackground': 'string',
        'profileBackgroundEverywhere': 'number',
      },
      { // defaultData
        key: objectKey,
        nickStyle: '',
        bannerStyle: '',
        bannerText: '',
        badgeIcon: '',
        badgeText: '',
        badgeFill: '',
        badgeStroke: '',
        noticesMarks: '',
        profileBackground: '',
        profileBackgroundEverywhere: 0,
      }
    );
  };

  async update({
    nickStyle,
    bannerStyle,
    bannerText,
    badgeIcon,
    badgeText,
    badgeFill,
    badgeStroke,
    noticesMarks,
    profileBackground,
    profileBackgroundEverywhere,
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
//Returns true if it is a DOM element 
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
      $('div.modal.fade').remove()
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


;// CONCATENATED MODULE: ./src/ui/kit/MenuSection.js
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

  createElement() {
    const button = document.createElement('button');
    button.className = this.className;
    button.innerText = this.buttonText;

    if (this.iconClassName) {
      const icon = createMenuIcon(this.iconClassName);
      icon.id = '';
      button.appendChild(icon);
    }

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
    document.querySelectorAll('div#LZTUpSubMenu').forEach(submenu => submenu.style.display = 'none');
    callback();
  }

  modalOverlay.insertAdjacentElement('afterbegin', backButton);
}

function addGoBackBtn(target = '', text = configs_config.extName, elementToHide = undefined, elementToShow = undefined) {
  const backButtonSelector = 'button.LZTUpModalBackButton';

  if (document.querySelector(backButtonSelector) !== null) {
    document.querySelector(backButtonSelector).remove();
  }

  return createGoBackBtn(() => {
    document.querySelector(backButtonSelector).remove();
    setMenuTitle(text);
    switch (target) {
      case 'submenu':
        elementToHide.style.display = 'none';
        elementToShow.style.display = '';
        addGoBackBtn();
        break;
      default:
        document.querySelector('.LZTUpSection').style.display = '';
        const tabs = document.querySelector('.LZTUpTabs');
        tabs.style.display = '';

        const tab = tabs.querySelectorAll('#LZTUpTab');
        tab.forEach(element => element.classList.remove('active'));
        tab[0].classList.add('active');
    }
  });
}


;// CONCATENATED MODULE: ./src/ui/menu/sectionItem.js



function openSubMenu(containerClassName, sectionName) {
  document.querySelector('.LZTUpTabs').style.display = 'none';

  const subMenus = document.querySelectorAll('#LZTUpSubMenu');
  subMenus.forEach(subMenu => subMenu.style.display = 'none');

  const sections = document.querySelectorAll('.LZTUpSection');
  sections.forEach(section => section.style.display = 'none');

  document.querySelector(`.${containerClassName}`).style.display = '';
  setMenuTitle(sectionName);
  addGoBackBtn();
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
    <span id="LZTUpText">${sectionName}</span>
    <span id="LZTUpSubText">${sectionDesc}</span>
  `;

  sectionItem.appendChild(sectionIcon);
  sectionItem.appendChild(textContainer);

  sectionItem.addEventListener('click', () => openSubMenu(containerClassName, sectionName));

  return sectionItem;
}


;// CONCATENATED MODULE: ./src/ui/menu/comment.js
class Comment {
  /**
   *
   *  @constructor
   *  @param {string} content - content of the element
   */

  constructor(content) {
    this.content = content;
  }

  createElement() {
    const container = document.createElement('div');
    container.id = 'LZTUpModalComment';
    container.innerHTML = this.content;

    return container;
  }
}


;// CONCATENATED MODULE: ./src/ui/menu/sectionContainer.js
function addMenuSectionContainer(className, items) {
  const container = document.createElement('div');
  container.id = 'LZTUpSubMenu';
  container.className = className;

  for (const item of items) {
    container.appendChild(item);
  }

  container.style.display = 'none';

  return container;
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
    this.content = content;
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
    this.content = content;
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

function getUserIdInProfile() {
  if (isProfilePage()) {
    const userThreadsButton = document.querySelector('#profile_short > .userContentLinks > a:nth-child(1)');
    if (!userThreadsButton || userThreadsButton.href === '') {
      return null;
    }

    if (!userThreadsButton.href.endsWith('?tab=mythreads')) {
      const url = new URL(userThreadsButton.href);
      return url.searchParams.get('user_id');
    }

    return XenForo?._csrfToken?.split(',')[0];
  }
}

function addUserId() {
  if (isProfilePage()) {
    const userId = getUserIdInProfile() ?? 'Не найден';
    const profileInfo = document.querySelector('#profile_short > .pairsJustified');
    const userIdRow = new ProfileInfoRow(userIdRowElementId, 'ID', userId).createElement();
    const firstRow = profileInfo.querySelector('.profile_info_row');
    if (!firstRow) {
      return profileInfo.insertAdjacentElement('afterbegin', userIdRow);
    }

    return firstRow.insertAdjacentElement('afterend', userIdRow);
  }
}

function removeUserId() {
  if (isProfilePage()) {
    const el = document.querySelector(`.profile_info_row#${userIdRowElementId}`);
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


;// CONCATENATED MODULE: ./src/utils/xenforo.js


function bypassShareTyping() {
  if (hasOwn(XenForo, 'threadNotify') && hasOwn(XenForo.threadNotify, 'shareTypingActivity')) {
    console.log('bypassShareTyping thread: true');
    XenForo.threadNotify.shareTypingActivity = 0;
  }

  // if (hasOwn(XenForo, 'ChatboxRTC') && hasOwn(XenForo.chatboxRTC, 'Start')) {
  //   console.log('bypassShareTyping chat: true');
  //   XenForo.ChatboxRTC.Start.prototype.sendTypingMessage = () => {return};
  // }
}


;// CONCATENATED MODULE: ./src/ui/menu/items/users.js







const getUsersItems = async () => {
  const usersDB = new LZTUsersDB();
  const usersData = await usersDB.read();

  return [
    new Checkbox('show_userid', 'Показывать UserID пользователей')
    .createElement(
      usersData.showUserId,
      async () => {
        await usersDB.update({ showUserId: 1 });
        addUserId();
      },
      async () => {
        await usersDB.update({ showUserId: 0 });
        removeUserId();
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
        registerAlert('Отправка информации о наборе сообщения отключена', 5000);
        await sleep(500);
        window.location.reload();
      },
      async () => {
        await usersDB.update({ disableShareTyping: 0 });
        registerAlert('Отправка информации о наборе сообщения включена', 5000);
        await sleep(500);
        window.location.reload();
      }),
  ];
}

/* harmony default export */ const users = (getUsersItems);
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

  Logger.debug('Generated menu main items: ', mainItems)

  const settingsItems = [
    addMenuSectionItem('Настройки', 'Настройки расширения', 'far fa-cog', 'LZTUpSettingsItem', 'LZTUpUniqContainer'),
    addMenuSectionItem('Обновления', 'Установка и проверка обновлений расширения', 'far fa-cloud-download', 'LZTUpUpdateItem', 'LZTUpUpdateContainer'),
    addMenuSectionItem('Информация', `Версия: ${GM_info?.script?.version}`, 'far fa-info-circle', 'LZTUpInformationItem', 'LZTUpUniqContainer'),
  ];

  Logger.debug('Generated menu settings items: ', settingsItems)
  const sections = [
    new MenuSection('LZTUpMainSection', mainItems).create(),
    new MenuSection('LZTUpSettingsSection', settingsItems).create(),
  ];

  Logger.debug('Generated menu sections: ', sections)

  const uniqueText = document.createElement('div')
  uniqueText.innerText = 'Страница локального уника';

  const uniqueItems = [
    new Comment(`Это оформление видно только вам. Мы рекомендуем вам <a href="https://${window.location.hostname}/account/upgrades?upgrade_id=14" target="_blank">приобрести настоящий Уник</a>, чтобы все пользователи смогли увидеть ваше настоящее оформление профиля.`)
      .createElement(),
    uniqueText,
  ];

  const updateText = document.createElement('div')
  updateText.innerText = 'Страница обновлений';

  const updateItems = [
    updateText,
  ];

  Logger.debug('Generated menu unique section items: ', uniqueItems)

  const sectionContainers = [
    addMenuSectionContainer('LZTUpUniqContainer', uniqueItems),
    addMenuSectionContainer('LZTUpContestsContainer', await contests()),
    addMenuSectionContainer('LZTUpUsersContainer', await users()),
    addMenuSectionContainer('LZTUpUpdateContainer', updateItems),
  ];

  Logger.debug('Generated menu section containers: ', sectionContainers)

  const menuContent = document.createElement('div')
  menuContent.classList.add('LZTUpModalContent');

  const tabsContainer = document.createElement('ul');
  tabsContainer.classList.add('tabs', 'LZTUpTabs');
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


;// CONCATENATED MODULE: ./src/callbacks/MenuButton.js








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

  const modal = $('#LZTUpModalBase');
  modal.append(menuContent);
  for (const tab of tabs) {
    tab.active ? tab.setActive() : null;
  }

  modal.parent().css("white-space", "unset");
  const modalErrorOverlay = modal.parent().parent()
  modalErrorOverlay.attr('id', 'LZTUpModalOverlay');
  setMenuTitle(configs_config.extName);
  updateTooltips();
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
menuButton.innerHTML = `<a id="LZTUpButton">${configs_config.extName}</a>`;

menuButton.onclick = menuButtonCallback;

/* harmony default export */ const buttons_menuButton = (menuButton);
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
    Logger.log(`${errText}. Ошибка:`, err);
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


;// CONCATENATED MODULE: ./src/events/extension.js




async function onExtensionStart(themeId) {
  // ПРОЧИТАЙ ЭТО И ПЕРЕПИШИ ЭТУ ЗАЛУПУ https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Using_promises
  return new Promise(async (resolve, reject) => {
    Logger.debug(`onExtensionStart: Start loading theme with id ${themeId}`);
    const availabledThemes = await getThemes();
    if (availabledThemes?.length) {
      Logger.debug(`onExtensionStart: Themes arrray getted: `, availabledThemes);
      const findedTheme = availabledThemes.find(theme => theme.uid === themeId && theme.active === 1);
      Logger.debug(findedTheme);
      if (findedTheme) {
        Logger.debug(`onExtensionStart: Finded active theme with id ${findedTheme.uid}`);
        const status = await loadTheme(findedTheme.file);
        Logger.debug(`onExtensionStart: Theme loading status: ${status}`);
        resolve(status);
      } else {
        Logger.debug(`onExtensionStart: Not finded active theme in array`);
        reject(false)
      }
    } else {
      Logger.debug(`onExtensionStart: Failed to get array with all themes`);
      reject(false)
    }
  });
}

/* harmony default export */ const extension = (onExtensionStart);
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
;// CONCATENATED MODULE: ./src/index.js























// import 'Styles/main.css';

// import 'Styles/sign.css';
// import 'Styles/coloris.css';

async function main() {
  const profileDB = new LZTProfileDB();
  const settingsDB = new LZTSettingsDB();

  if (GM_info?.script?.version) Logger.log(`${configs_config.extName} version: ${GM_info?.script?.version}`);

  const SCRIPT_LOADED = await waitForElement('body', 120000);
  if (!SCRIPT_LOADED) {
    Logger.error('Не удалось запустить расширение.');
    return;
  }

  if (SCRIPT_LOADED.length) {
    const _csrfToken = await waitForCSRFToken(120000);
    const username = $('.accountUsername span').text();
    const userid = _csrfToken.split(',')[0];
    const userAvatar = $('img.navTab--visitorAvatar').attr('src');

    Logger.debug('┏━━━━━━━━ DEBUG INFO ━━━━━━━━━━┓');
    Logger.debug(`Script version: ${GM_info?.script?.version}`);
    Logger.debug(`Account username: ${username}`);
    Logger.debug(`Account userid: ${userid}`);
    Logger.debug(`Account userAvatar: ${userAvatar}`);
    Logger.debug('┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┚');

    registerMenuButton(buttons_menuButton);

    const appearDB = new LZTAppearDB();
    await appearDB.init();
    const dbAppearData = await appearDB.read();

    const contestsDB = new LZTContestsDB();
    await contestsDB.init();
    const dbContestsData = await contestsDB.read();

    const usersDB = new LZTUsersDB();
    await usersDB.init();
    const dbUsersData = await usersDB.read();

    if (dbContestsData) {
      dbContestsData.openTenContestsBtn === 1 ? regOpenContestsBtn(10) : null;

      categories(configs_config.nodeSelectors.contests, async () => {
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
      dbUsersData.showUserId === 1 ? addUserId() : null;
      dbUsersData.showFullRegInProfile === 1 ? showFullRegDateInProfile(true) : null;
      dbUsersData.disableShareTyping === 1 ? bypassShareTyping() : null;
    }

    // Loading selected theme
    if (dbAppearData?.theme > 0) {
      try {
        Logger.debug(`Requesting theme with id ${dbAppearData.theme}...`);
        const status = await extension(dbAppearData.theme);
        Logger.debug(`Theme status: ${status}`);
      } catch (e) {
        Logger.error(`Failed to request theme with id ${dbAppearData.theme}`, e);
      }
    }
  }
}

main().catch((e) => {
  console.error(e);
});
})();

/******/ })()
;