"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.setOrder = exports.orderSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

var initialState = {
  value: {}
};
var orderSlice = (0, _toolkit.createSlice)({
  name: 'order',
  initialState: initialState,
  reducers: {
    setOrder: function setOrder(state, action) {
      state.value = action.payload;
    }
  }
});
exports.orderSlice = orderSlice;
var setOrder = orderSlice.actions.setOrder;
exports.setOrder = setOrder;
var _default = orderSlice.reducer;
exports["default"] = _default;