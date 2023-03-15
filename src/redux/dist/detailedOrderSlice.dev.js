"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.setDetailedOrder = exports.detailedOrderSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

var initialState = {
  value: {}
};
var detailedOrderSlice = (0, _toolkit.createSlice)({
  name: 'detailedOrder',
  initialState: initialState,
  reducers: {
    setDetailedOrder: function setDetailedOrder(state, action) {
      state.value = action.payload.data;
    }
  }
});
exports.detailedOrderSlice = detailedOrderSlice;
var setDetailedOrder = detailedOrderSlice.actions.setDetailedOrder;
exports.setDetailedOrder = setDetailedOrder;
var _default = detailedOrderSlice.reducer;
exports["default"] = _default;