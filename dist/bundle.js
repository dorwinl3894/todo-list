/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    font-family: 'Inter', sans-serif;\\r\\n}\\r\\n\\r\\n.grid-container {\\r\\n    height: 100vh;\\r\\n    display: grid;\\r\\n    grid-template-columns: 1fr 6fr;\\r\\n    grid-template-rows: auto 1fr auto;\\r\\n    grid-template-areas:\\r\\n      \\\"header header\\\"\\r\\n      \\\"left-column right-column\\\"\\r\\n      \\\"footer footer\\\";\\r\\n  }\\r\\n  \\r\\n.header {\\r\\n    grid-area: header;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n\\r\\n    background-color: #00799D;\\r\\n    color: white;\\r\\n    \\r\\n}\\r\\n\\r\\n.left-column {\\r\\n    grid-area: left-column;\\r\\n    background-color: #FFD569;\\r\\n}\\r\\n\\r\\n.right-column {\\r\\n    grid-area: right-column;\\r\\n    position: relative;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n    grid-area: footer;\\r\\n    background-color: #00799D;\\r\\n}\\r\\n.footer a {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    gap: 0.5rem;\\r\\n    padding: 1rem;\\r\\n    text-decoration: none;\\r\\n    color: white;\\r\\n    font-size: 1.25rem;\\r\\n    transition: all 0.25s;\\r\\n}\\r\\n.footer a:hover {\\r\\n    text-decoration: underline;\\r\\n    background-color: #00607e;\\r\\n}\\r\\n#svg-mailbox {\\r\\n    position: absolute;\\r\\n    left: 10%;\\r\\n    bottom: 0px;\\r\\n    z-index: -1;\\r\\n    \\r\\n}\\r\\n\\r\\n#header-logo {\\r\\n    height: 3.125rem;\\r\\n    margin: 1rem;\\r\\n}\\r\\n.inbox {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: flex-start;\\r\\n    gap: 1rem;\\r\\n    margin-top: 2rem;\\r\\n}\\r\\n\\r\\n.left-column-div {\\r\\n    width: 100%;\\r\\n}\\r\\n.left-column-item {\\r\\n    display: flex;\\r\\n    align-items: flex-end;\\r\\n\\r\\n    padding: 0.5rem 0.5rem 0.5rem 1.5rem;\\r\\n    gap: 0.5rem;\\r\\n\\r\\n    text-decoration: none;\\r\\n    color: black;\\r\\n    font-weight: 400;\\r\\n    \\r\\n}\\r\\n.left-column-item:hover {\\r\\n    background-color: #FFEDBF;\\r\\n}\\r\\n.left-column-header-title {\\r\\n    font-size: 1.5rem;\\r\\n    padding: 1.5rem;\\r\\n}\\r\\n\\r\\n\\r\\n.right-column {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    gap: 1.5rem;\\r\\n}\\r\\n#right-column-title {\\r\\n    font-size: 1.75rem;\\r\\n    margin-top: 2rem;\\r\\n    font-weight: 200;\\r\\n}\\r\\n\\r\\n#btn-add-task {\\r\\n    padding: 0.25rem 1rem;\\r\\n    background-color: #FFD569;\\r\\n    border-radius: 10rem;\\r\\n}\\r\\n#btn-add-task:hover {\\r\\n    cursor: pointer;\\r\\n}\\r\\n#btn-add-task:active {\\r\\n    background-color: #FFEDBF;\\r\\n    color: black;\\r\\n}\\r\\n.task{\\r\\n    width: 60%;\\r\\n    display: flex;\\r\\n    gap: 1rem;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.task-due-date {\\r\\n    margin-left: auto;\\r\\n}\\r\\n\\r\\nsummary {\\r\\n    display: flex;\\r\\n    gap: 1rem;\\r\\n    align-items: center;\\r\\n}\\r\\ndetails {\\r\\n    transition: all 0.25s;\\r\\n    padding: 0.5rem;\\r\\n    width: 100%;\\r\\n}\\r\\ndetails:hover {\\r\\n    background-color: #ffeec3;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.checklist {\\r\\n    width: 30px;\\r\\n    height: 30px;\\r\\n    border: 1px solid black;\\r\\n}\\r\\n.priority {\\r\\n    width: 20px;\\r\\n    height: 20px;\\r\\n    border-radius: 100px;\\r\\n}\\r\\n#new-task-prio-low { background-color: green; }\\r\\n#new-task-prio-med { background-color: yellow;}\\r\\n#new-task-prio-high { background-color: red; }\\r\\n\\r\\n.addTaskPopup {\\r\\n    position: absolute;\\r\\n    top: -35rem;\\r\\n    width: 18rem;\\r\\n    padding: 0.5rem;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    gap: 10px;\\r\\n    background-color: #FFD569;\\r\\n    transition: all 0.5s;\\r\\n}\\r\\n.addTaskPopup > * {\\r\\n    width: 100%;\\r\\n    text-align: center;\\r\\n}\\r\\n.addTaskPopup > input {\\r\\n    background-color: #FFEDBF;\\r\\n    border: none;\\r\\n    font-size: 1rem;\\r\\n    padding: 0.25rem 0rem;\\r\\n}\\r\\n#new-task-create {\\r\\n    margin-top: 1rem;\\r\\n    background-color: #00607e;\\r\\n    color: white;\\r\\n    border: none;\\r\\n    border-radius: 5px;\\r\\n\\r\\n    padding: 0.5rem 0rem;\\r\\n}\\r\\n#new-task-create:hover {\\r\\n    cursor: pointer;\\r\\n}\\r\\n#new-task-create:active {\\r\\n    background-color: #00799D;\\r\\n    color: white;\\r\\n}\\r\\n\\r\\n#new-task-header {\\r\\n    position: relative;\\r\\n}\\r\\n#new-task-close {\\r\\n    position: absolute;\\r\\n    padding: 0.5rem;\\r\\n    background-color: black;\\r\\n    color: white;\\r\\n    width: 1rem;\\r\\n    height: 1rem;\\r\\n    right: -0.5rem;\\r\\n    top: -0.5rem;\\r\\n}\\r\\n#new-task-close:hover {\\r\\n    background-color: #00607e;\\r\\n    cursor: pointer;\\r\\n}\\r\\nfieldset {\\r\\n    display: flex;\\r\\n}\\r\\nfieldset > div {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    flex: 1;\\r\\n    margin: 0.75rem;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/addTask.js":
/*!************************!*\
  !*** ./src/addTask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask)\n/* harmony export */ });\nconst rightColumn = document.getElementById('right-column');\r\nconst new_task_title = document.getElementById('new-task-title');\r\nconst new_task_description = document.getElementById('new-task-description');\r\nconst new_task_duedate = document.getElementById('new-task-duedate');\r\nconst new_task_create = document.getElementById('new-task-create');\r\n//radios\r\nconst radioButtons = document.querySelectorAll(`input[name=\"priority-level\"]`);\r\nconst new_task_prio_low = document.getElementById('new-task-prio-low');\r\nconst new_task_prio_mid = document.getElementById('new-task-prio-med');\r\nconst new_task_prio_high = document.getElementById('new-task-prio-high');\r\n\r\n\r\nconst addTask = () => {\r\n    const divTask = document.createElement('div');\r\n    divTask.classList.add('task');\r\n\r\n    const details = document.createElement('details');\r\n    const summary = document.createElement('summary');\r\n\r\n    //checklist\r\n    const checklistBox = document.createElement('div');\r\n    checklistBox.classList.add('checklist');\r\n\r\n    //title\r\n    const taskTitle = document.createElement('p');\r\n    taskTitle.innerHTML = new_task_title.value;\r\n    \r\n    //priority\r\n    const priority = document.createElement('div');\r\n    priority.classList.add('priority');\r\n    for (const radioButton of radioButtons) {\r\n        if (radioButton.checked) {\r\n            priority.id = radioButton.id;\r\n        }\r\n    }\r\n    //findSelectedPriority();\r\n\r\n    //calendar date\r\n    const dueDate = document.createElement('p');\r\n    dueDate.classList.add('task-due-date');\r\n    console.log(new_task_duedate.value);\r\n    dueDate.innerHTML = `Due ${new_task_duedate.value}`;\r\n\r\n    //descriptions\r\n    const taskDetails = document.createElement('p');\r\n    taskDetails.classList.add('task-details');\r\n    taskDetails.innerHTML = new_task_description.value;\r\n\r\n    divTask.appendChild(details);\r\n        details.appendChild(summary);\r\n        details.appendChild(taskDetails);\r\n            summary.appendChild(checklistBox);\r\n            summary.appendChild(taskTitle);\r\n            summary.appendChild(priority);\r\n            summary.appendChild(dueDate)\r\n\r\n    rightColumn.appendChild(divTask);\r\n}\r\n//problem\r\n// \r\n/* new_task_create.addEventListener('click', () => {\r\n    console.log(\"Yooo\");\r\n    let selectedPriority;\r\n    for (const radioButton of radioButtons) {\r\n        if (radioButton.checked) {\r\n            selectedPriority = radioButton.id;\r\n        }\r\n    }\r\n    if (selectedPriority === 'new-task-prio-low') {\r\n        priority.classList.add('prio-low')\r\n    }\r\n    if (selectedPriority === 'new-task-prio-med') {\r\n        priority.classList.add('prio-med')\r\n    }\r\n    if (selectedPriority === 'new-task-prio-high') {\r\n        priority.classList.add('prio-high')\r\n    }\r\n\r\n}) */\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/addTask.js?");

/***/ }),

/***/ "./src/createTask.js":
/*!***************************!*\
  !*** ./src/createTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeTask\": () => (/* binding */ closeTask),\n/* harmony export */   \"createTask\": () => (/* binding */ createTask),\n/* harmony export */   \"finishTask\": () => (/* binding */ finishTask)\n/* harmony export */ });\n/* harmony import */ var _addTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTask */ \"./src/addTask.js\");\n\r\n\r\n\r\nconst btn_add_task = document.getElementById('btn-add-task');\r\nconst addTaskPopup = document.getElementById('addTaskPopup');\r\nconst new_task_close = document.getElementById('new-task-close');\r\nconst new_task_create = document.getElementById('new-task-create');\r\n\r\nconst new_task_title = document.getElementById('new-task-title');\r\nconst new_task_description = document.getElementById('new-task-description');\r\nconst new_task_duedate = document.getElementById('new-task-duedate');\r\n\r\nconsole.log(\"hiii\");\r\n\r\nconst createTask = () => {\r\n    btn_add_task.addEventListener('click', () => {\r\n        addTaskPopup.style.top = '3rem';\r\n    })\r\n}\r\n\r\nconst closeTask = () => {\r\n    new_task_close.addEventListener('click', () => {\r\n        addTaskPopup.style.top = '-35rem';\r\n    })\r\n}\r\n\r\nconst finishTask = () => {\r\n    new_task_create.addEventListener('click', () => {\r\n        addTaskPopup.style.top = '-35rem';\r\n        (0,_addTask__WEBPACK_IMPORTED_MODULE_0__.addTask)();\r\n\r\n        deleteInputsFromTask();\r\n    })\r\n}\r\nconst deleteInputsFromTask = () => {\r\n    new_task_title.value = '';\r\n    new_task_description.value = '';\r\n    new_task_duedate.value = '';\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/createTask.js?");

/***/ }),

/***/ "./src/inboxBackend.js":
/*!*****************************!*\
  !*** ./src/inboxBackend.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"inboxBackend\": () => (/* binding */ inboxBackend)\n/* harmony export */ });\nconst inboxBackend = () => {\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/inboxBackend.js?");

/***/ }),

/***/ "./src/inboxDOM.js":
/*!*************************!*\
  !*** ./src/inboxDOM.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ShowInboxDOM\": () => (/* binding */ ShowInboxDOM)\n/* harmony export */ });\nconst ShowInboxDOM = () => {\r\n    \r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/inboxDOM.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/style.css */ \"./src/style.css\");\n/* harmony import */ var _inboxBackend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inboxBackend */ \"./src/inboxBackend.js\");\n/* harmony import */ var _inboxDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inboxDOM */ \"./src/inboxDOM.js\");\n/* harmony import */ var _addTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addTask */ \"./src/addTask.js\");\n/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createTask */ \"./src/createTask.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n//slides in task\r\n(0,_createTask__WEBPACK_IMPORTED_MODULE_4__.createTask)();\r\n//slides out task\r\n(0,_createTask__WEBPACK_IMPORTED_MODULE_4__.closeTask)();\r\n//finishes task by sliding it up\r\n(0,_createTask__WEBPACK_IMPORTED_MODULE_4__.finishTask)();\r\n\r\n//make tasks transparent or crossed out after checkmark is pressed\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;