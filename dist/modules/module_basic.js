"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var fig = _interopRequireWildcard(require("../libs/Figure.js"));

var _Figure2 = _interopRequireDefault(require("../libs/Figure2.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//モジュール  ES Modules [2015]
console.log('========= モジュール  ES Modules [2015] =========');
{
  console.log((0, fig.triangle)(10, 5)); //結果 25

  console.log((0, fig.circle)(2)); //結果 12.566
}
console.log('========= モジュール  ES Modules [2015] =========');
{
  console.log((0, fig.triangle)(10, 5)); //結果 25

  console.log((0, fig.circle)(2)); //結果 12.566
}
console.log('========= モジュール  ES Modules [2015] =========');
{
  console.log((0, _Figure2["default"])(10, 5)); //結果 25
}