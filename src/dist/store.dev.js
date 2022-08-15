"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapper = exports.store = void 0;

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reduxDevtoolsExtension = require("redux-devtools-extension");

var _nextReduxWrapper = require("next-redux-wrapper");

var _reducers = _interopRequireDefault(require("./reducers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// initial states here
var initalState = {}; // middleware

var middleware = [_reduxThunk["default"]]; // creating store

var store = (0, _redux.createStore)(_reducers["default"], initalState, (0, _reduxDevtoolsExtension.composeWithDevTools)(_redux.applyMiddleware.apply(void 0, middleware))); // assigning store to next wrapper

exports.store = store;

var makeStore = function makeStore() {
  return store;
};

var wrapper = (0, _nextReduxWrapper.createWrapper)(makeStore);
exports.wrapper = wrapper;