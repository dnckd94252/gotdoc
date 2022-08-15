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
var ProfileStyle_1 = require("../../../styles/information/ProfileStyle");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var doctor_1 = require("../../../fnc/doctor");
var react_1 = require("react");
var link_1 = require("next/link");
var follow_1 = require("../../../fnc/follow");
var react_redux_1 = require("react-redux");
var Profile = function (props) {
    var info = props.info;
    var _a = react_1.useState([]), heart = _a[0], setHeart = _a[1];
    var _b = react_1.useState(false), follow = _b[0], setFollow = _b[1];
    var userList = react_redux_1.useSelector(function (state) { return state.usersList; });
    var users = userList.users;
    react_1.useEffect(function () {
        doctor_1.getHeartList(info.id, setHeart);
        follow_1.followCheck(info, users, setFollow);
    }, []);
    return (React.createElement("div", { className: "profile d-flex ml-3 mr-3 align-items-center flex-column justify-content-center col-4 pr-3 pl-3" },
        React.createElement("div", { className: "introduce  d-flex align-items-center justify-content-center flex-column" },
            React.createElement("div", { className: "image d-flex align-items-center justify-content-center flex-column" },
                React.createElement("div", { className: "img" },
                    React.createElement(image_1["default"], { src: "/api/profile/" + info.photo, width: 250, height: 250, objectFit: "cover" })),
                React.createElement("h5", { className: "mt-3" }, info.name),
                React.createElement("span", null, info.email))),
        React.createElement("div", { className: "item d-flex align-items-center  justify-content-between pl-5 pr-5 pt-2 pb-2" },
            React.createElement("span", null, "Hearts Received"),
            React.createElement("div", { className: "d-flex align-items-center heart" },
                React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faHeart, size: "2x" }),
                React.createElement("p", { className: "ml-2 mb-0" }, heart.length))),
        React.createElement("div", { className: "item d-flex align-items-center  justify-content-between pl-5 pr-5 pt-2 pb-2" },
            React.createElement("span", null, "Reviews Received"),
            React.createElement("div", { className: "d-flex align-items-center review" },
                React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faBook, size: "2x" }),
                React.createElement("p", { className: "ml-2 mb-0" }, "0"))),
        !follow ? (React.createElement("div", { className: "item d-flex align-items-center follow pointer justify-content-center pl-5 pr-5 pt-2 pb-2", onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!users)
                                return [2 /*return*/, alert("로그인 후 이용가능합니다.")];
                            return [4 /*yield*/, follow_1.followClick(info, users, setFollow)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); } },
            React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faPlusSquare, size: "2x" }),
            React.createElement("span", { className: "ml-3" }, "Follow Doctor"))) : (React.createElement("div", { className: "item d-flex align-items-center red follow justify-content-center pointer pl-5 pr-5 pt-2 pb-2", onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!users)
                                return [2 /*return*/, alert("로그인 후 이용가능합니다.")];
                            return [4 /*yield*/, follow_1.followClick(info, users, setFollow)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); } },
            React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faMinusSquare, size: "2x" }),
            React.createElement("span", { className: "ml-3" }, "Follow Cancel"))),
        React.createElement("div", { className: "item d-flex align-items-center other justify-content-center flex-column pl-5 pr-5 pt-2 pb-2" },
            React.createElement(link_1["default"], { href: "/message" },
                React.createElement("a", null,
                    React.createElement("button", { className: "btn btn-dark m-2" }, "\uD1A1 \uBB38\uC758"))),
            React.createElement(link_1["default"], { href: "/doctor/" + info.id + "/reservation" },
                React.createElement("a", null,
                    React.createElement("button", { className: "btn btn-dark m-2 otherBtn" }, "\uC9C4\uB8CC \uC608\uC57D")))),
        React.createElement("style", { jsx: true }, ProfileStyle_1["default"])));
};
exports["default"] = Profile;
