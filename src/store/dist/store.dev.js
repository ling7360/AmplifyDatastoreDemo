"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _restaurantSlice = _interopRequireDefault(require("../redux/restaurantSlice"));

var _userSlice = _interopRequireDefault(require("../redux/userSlice"));

var _orderSlice = _interopRequireDefault(require("../redux/orderSlice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import orderHistorySlice from '../redux/orderHistorySlice';
var store = (0, _toolkit.configureStore)({
  reducer: {
    restaurant: _restaurantSlice["default"],
    user: _userSlice["default"],
    order: _orderSlice["default"] // orderHistory: orderHistorySlice,

  }
});
exports.store = store;