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
var image_1 = require("next/image");
var HeaderStyle_1 = require("../../styles/HeaderStyle");
var link_1 = require("next/link");
var login_1 = require("../../fnc/login");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var Header = function () {
    var dispatch = react_redux_1.useDispatch();
    var userList = react_redux_1.useSelector(function (state) { return state.usersList; });
    var logoutAction = function (dis) {
        if (dis === void 0) { dis = dispatch; }
        return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, login_1.logout(dispatch)];
                    case 1:
                        _a.sent();
                        alert('로그아웃 되었습니다.');
                        return [2 /*return*/, login_1.loginCheck(dispatch)];
                }
            });
        });
    };
    react_1.useEffect(function () {
        login_1.loginCheck(dispatch);
    }, [dispatch]);
    return (React.createElement("header", null,
        React.createElement("div", { className: "d-flex align-items-center justify-content-between container pt-4 pb-4" },
            React.createElement(link_1["default"], { href: "/" },
                React.createElement("a", null,
                    React.createElement("div", { className: "d-flex logo align-items-center" },
                        React.createElement(image_1["default"], { src: "/api/logo.png", width: 40, height: 40 }),
                        React.createElement("h4", { className: "m-0 ml-2 font-weight-bold" }, "GotDoc")))),
            React.createElement("div", { className: "d-flex align-items-center justify-content-between menu" },
                React.createElement(link_1["default"], { href: "/doctor" },
                    React.createElement("a", { className: " font-weight-bold m-0" }, "DOCTOR")),
                React.createElement(link_1["default"], { href: "/review" },
                    React.createElement("a", { className: " font-weight-bold m-0" }, "REVIEW")),
                React.createElement(link_1["default"], { href: "/hospital" },
                    React.createElement("a", { className: " font-weight-bold m-0" }, "HOSPITAL"))),
            !userList.users || userList.users.length <= 0 ? (React.createElement("div", { className: "d-flex align-items-center unLogin util" },
                React.createElement(link_1["default"], { href: "/login" },
                    React.createElement("a", null,
                        React.createElement("button", { className: "btn btn-info pl-3 pr-3 button" }, "\uB85C\uADF8\uC778"))),
                React.createElement(link_1["default"], { href: "/register" },
                    React.createElement("a", null,
                        React.createElement("button", { className: "btn btn-info pl-3 pr-3 button-border button ml-3" }, "\uD68C\uC6D0\uAC00\uC785"))))) : (React.createElement("div", { className: "d-flex afterLogin align-items-center util" },
                React.createElement(link_1["default"], { href: "/mypage" },
                    React.createElement("a", null,
                        React.createElement("button", { className: "btn btn-info button icon" },
                            React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faUser })))),
                React.createElement(link_1["default"], { href: "/message" },
                    React.createElement("a", null,
                        React.createElement("button", { className: "btn btn-info ml-3 button icon" },
                            React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faMessage })))),
                React.createElement("button", { className: "btn btn-info pl-3 pr-3 button-border button ml-3", onClick: logoutAction }, "\uB85C\uADF8\uC544\uC6C3")))),
        React.createElement("style", { jsx: true }, HeaderStyle_1["default"])));
};
exports["default"] = Header;
