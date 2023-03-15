"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.setOrderHistory = exports.orderHistorySlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

var initialState = {
  value: {}
};
var orderHistorySlice = (0, _toolkit.createSlice)({
  name: 'orderHistory',
  initialState: initialState,
  reducers: {
    setOrderHistory: function setOrderHistory(state, action) {
      state.value = action.payload.data;
    }
  }
});
exports.orderHistorySlice = orderHistorySlice;
var setOrderHistory = orderHistorySlice.actions.setOrderHistory;
exports.setOrderHistory = setOrderHistory;
var _default = orderHistorySlice.reducer;
exports["default"] = _default;