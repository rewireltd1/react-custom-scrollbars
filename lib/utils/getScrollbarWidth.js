'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getScrollbarWidth;

var _domCss = require('dom-css');

var _domCss2 = _interopRequireDefault(_domCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scrollbarWidth = false;

function getScrollbarWidth() {
    return 15;
}