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
var chat_1 = require("../../fnc/chat");
var image_1 = require("next/image");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var ChatListStyle_1 = require("../../styles/message/ChatListStyle");
var ChatFollowItem = function (props) {
    var item = props.item;
    var user = props.user;
    var setRoom = props.setRoom;
    var check = props.check;
    return (React.createElement("div", { className: "item pointer border-bottom d-flex justify-content-between align-items-center" },
        React.createElement("div", { className: "img" },
            React.createElement(image_1["default"], { src: "/api/profile/" + item.photo, width: 70, height: 70, objectFit: "cover" })),
        React.createElement("div", { className: "text" },
            React.createElement("div", { className: "name d-flex align-items-center justify-content-between" },
                React.createElement("span", null, item.name),
                !check ? (React.createElement("button", { className: "btn btn-info", onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, chat_1.addChat({ item: item, user: user })];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, chat_1.getRoom(user, setRoom)];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); } },
                    "\uCC44\uD305 \uCD94\uAC00",
                    React.createElement(react_fontawesome_1.FontAwesomeIcon, { className: "ml-2", icon: free_solid_svg_icons_1.faCirclePlus }))) : (React.createElement("button", { className: "btn btn-info", disabled: true }, "\uCC44\uD305 \uCD94\uAC00\uD568"))),
            React.createElement("div", { className: "content d-flex align-items-center mt-3 justify-content-between" },
                React.createElement("span", null, "Doctor"))),
        React.createElement("style", { jsx: true }, ChatListStyle_1["default"])));
};
exports["default"] = ChatFollowItem;
