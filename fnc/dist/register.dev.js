"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerAction = exports.pickPicture = exports.phoneChange = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _router = _interopRequireDefault(require("next/router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var readFile = function readFile(file) {
  return new Promise(function (res) {
    var reader = new FileReader();

    reader.onload = function () {
      res(reader);
    };

    reader.readAsDataURL(file);
  });
};

var registerPost = function registerPost(val) {
  return regeneratorRuntime.async(function registerPost$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].post("/api/user/register", val).then(function (res) {
            var data = res.data;

            if (data === "success") {
              _router["default"].push("/register/success");
            } else {
              return alert("아이디가 중복입니다. 다른 아이디를 입력해주세요.");
            }
          }));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};

var phoneChange = function phoneChange(ref) {
  ref.current.value = ref.current.value.replace(/[^0-9]/g, "").replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3").replace(/(\-{1,2})$/g, "");
};

exports.phoneChange = phoneChange;

var pickPicture = function pickPicture() {
  var handle, getFile, reader;
  return regeneratorRuntime.async(function pickPicture$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(window.showOpenFilePicker());

        case 3:
          handle = _context2.sent;
          _context2.next = 6;
          return regeneratorRuntime.awrap(handle[0].getFile());

        case 6:
          getFile = _context2.sent;
          _context2.next = 9;
          return regeneratorRuntime.awrap(readFile(getFile));

        case 9:
          reader = _context2.sent;
          return _context2.abrupt("return", reader.result);

        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", false);

        case 16:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 13]]);
};

exports.pickPicture = pickPicture;

var registerAction = function registerAction(profile) {
  var input, val, i, item, regex;
  return regeneratorRuntime.async(function registerAction$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          input = document.getElementsByTagName("input");
          val = {
            name: input.name.value,
            id: input.id.value,
            pw: input.pw.value,
            pwCheck: input.pwCheck.value,
            email: input.email.value,
            type: input.type.value,
            phone: input.phone.value,
            profile: profile
          };
          _context3.t0 = regeneratorRuntime.keys(val);

        case 3:
          if ((_context3.t1 = _context3.t0()).done) {
            _context3.next = 10;
            break;
          }

          i = _context3.t1.value;
          item = val[i];

          if (!(!item || item.length <= 0)) {
            _context3.next = 8;
            break;
          }

          return _context3.abrupt("return", alert("모든 값을 입력해주세요."));

        case 8:
          _context3.next = 3;
          break;

        case 10:
          regex = {
            name: /^[ㄱ-ㅎ|가-힣|a-z|A-Z|]+$/,
            id: /^[A-Za-z0-9]+$/,
            pw: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
            email: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
          };

          if (regex.name.test(val.name)) {
            _context3.next = 13;
            break;
          }

          return _context3.abrupt("return", alert("이름은 영문 및 한글로 이루어집니다."));

        case 13:
          if (!(!regex.id.test(val.id) || val.id.length < 8)) {
            _context3.next = 15;
            break;
          }

          return _context3.abrupt("return", alert("아이디는 8자 이상 영문 , 숫자로만 이루어집니다."));

        case 15:
          if (!(!regex.pw.test(val.pw) || val.pw.length < 10)) {
            _context3.next = 17;
            break;
          }

          return _context3.abrupt("return", alert("비밀번호는 10자 이상 영문 , 숫자 , 특수문자로 이루어집니다."));

        case 17:
          if (regex.email.test(val.email)) {
            _context3.next = 19;
            break;
          }

          return _context3.abrupt("return", alert("이메일 형식으로 작성해주세요."));

        case 19:
          if (!(val.pw !== val.pwCheck)) {
            _context3.next = 21;
            break;
          }

          return _context3.abrupt("return", alert("비밀번호와 확인이 틀렸습니다."));

        case 21:
          _context3.next = 23;
          return regeneratorRuntime.awrap(registerPost(val));

        case 23:
          return _context3.abrupt("return", _context3.sent);

        case 24:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.registerAction = registerAction;