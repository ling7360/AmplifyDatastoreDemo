"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.setCurrentRestaurant = exports.restaurantSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

var initialState = {
  value: {}
};
var restaurantSlice = (0, _toolkit.createSlice)({
  name: 'restaurant',
  initialState: initialState,
  reducers: {
    setCurrentRestaurant: function setCurrentRestaurant(state, action) {
      state.value = action.payload;
    }
  }
});
exports.restaurantSlice = restaurantSlice;
var setCurrentRestaurant = restaurantSlice.actions.setCurrentRestaurant;
exports.setCurrentRestaurant = setCurrentRestaurant;
var _default = restaurantSlice.reducer;
exports["default"] = _default;