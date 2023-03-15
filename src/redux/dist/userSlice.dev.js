"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.setCurrentUser = exports.userSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

var initialState = {
  value: {}
};
var userSlice = (0, _toolkit.createSlice)({
  name: 'user',
  initialState: initialState,
  reducers: {
    setCurrentUser: function setCurrentUser(state, action) {
      state.value = action.payload;
    }
  }
});
exports.userSlice = userSlice;
var setCurrentUser = userSlice.actions.setCurrentUser;
exports.setCurrentUser = setCurrentUser;
var _default = userSlice.reducer;
exports["default"] = _default;