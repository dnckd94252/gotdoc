"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userLogout = exports.getUsers = void 0;

var _types = require("../types");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getUsers = function getUsers() {
  return function _callee(dispatch) {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(_axios["default"].post("/user/login/check").then(function (res) {
              dispatch({
                type: _types.GET_LOGIN,
                payload: res.data
              });
            }));

          case 3:
            _context.next = 8;
            break;

          case 5:
            _context.prev = 5;
            _context.t0 = _context["catch"](0);
            dispatch({
              type: _types.LOGIN_ERROR,
              payload: _context.t0
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 5]]);
  };
};

exports.getUsers = getUsers;

var userLogout = function userLogout() {
  return function _callee2(dispatch) {
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _axios["default"].post("/user/logout").then(function (res) {
              dispatch({
                type: _types.LOGOUT,
                payload: {}
              });
            });

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    });
  };
};

exports.userLogout = userLogout;