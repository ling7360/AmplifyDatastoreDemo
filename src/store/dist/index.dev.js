"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.setOrders = exports.setName = void 0;

var _toolkit = require("@redux.js/toolkit");

var _models = require("../models");

var restaurantSlice = (0, _toolkit.createSlice)({
  name: 'restaurant',
  // Auto action type
  initialState: {
    name: 'Kabob Boys'
  },
  reducers: {
    setName: function setName(state, action) {
      state.name = 'Burger Kids';
    },
    setAge: setAge
  }
});
var _restaurantSlice$acti = restaurantSlice.actions,
    setName = _restaurantSlice$acti.setName,
    setOrders = _restaurantSlice$acti.setOrders;
exports.setOrders = setOrders;
exports.setName = setName;
var store = configureStore({
  reducer: {
    restaurants: restaurantSlice.reducer
  }
});
var _default = store;
exports["default"] = _default;