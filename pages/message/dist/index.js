"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var socket_io_client_1 = require("socket.io-client");
var react_redux_1 = require("react-redux");
var ChatList_1 = require("../../components/message/ChatList");
var Chat_1 = require("../../components/message/Chat");
var MessageStyle_1 = require("../../styles/message/MessageStyle");
var chat_1 = require("../../fnc/chat");
var Message = function () {
    var userList = react_redux_1.useSelector(function (state) { return state.usersList; });
    var url = "https://gotdoc-server.herokuapp.com";
    var _a = react_1.useState(), follow = _a[0], setFollow = _a[1];
    var _b = react_1.useState(null), active = _b[0], setActive = _b[1];
    var _c = react_1.useState(null), activeUser = _c[0], setActiveUser = _c[1];
    var _d = react_1.useState(null), from = _d[0], setFrom = _d[1];
    var _e = react_1.useState(socket_io_client_1.io(url, { transports: ["websocket"] })), socket = _e[0], setSocket = _e[1];
    var _f = react_1.useState([]), msg = _f[0], setMsg = _f[1];
    react_1.useEffect(function () {
        if (!userList.users)
            return;
        var val = {
            user: userList.users
        };
        chat_1.getList(val, setFollow);
        socket.on("join", function (req) { return __awaiter(void 0, void 0, void 0, function () {
            var val;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        val = {
                            room: req.room,
                            user: userList.users
                        };
                        return [4 /*yield*/, chat_1.getComment(val, setMsg)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    }, [userList]);
    react_1.useEffect(function () {
        if (!active)
            return;
        socket.emit("join", { active: active, from: from });
        setFrom(active);
    }, [active]);
    return (React.createElement("section", { id: "message", className: " container " },
        React.createElement("div", { className: "contents d-flex " },
            React.createElement(ChatList_1["default"], { setActive: setActive, setActiveUser: setActiveUser, follow: follow, user: userList.users }),
            React.createElement(Chat_1["default"], { active: active, activeUser: activeUser, msg: msg, setMsg: setMsg, socket: socket })),
        React.createElement("style", { jsx: true }, MessageStyle_1["default"])));
};
exports["default"] = Message;
