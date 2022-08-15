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
var ModalStyle_1 = require("../../styles/hospital/ModalStyle");
var DivisionModalStyle_1 = require("../../styles/mypage/DivisionModalStyle");
var react_1 = require("react");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var react_2 = require("react");
var image_1 = require("next/image");
var axios_1 = require("axios");
var react_redux_1 = require("react-redux");
var Modal = function (props) {
    var open = props.open, close = props.close, header = props.header, setUserList = props.setUserList;
    var inputRef = react_2.useRef();
    var _a = react_2.useState(), list = _a[0], setList = _a[1];
    var users = react_redux_1.useSelector(function (state) { return state.usersList; }).users;
    var searchAction = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var search, val;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    search = inputRef.current.value;
                    val = {
                        page: 1,
                        search: search
                    };
                    return [4 /*yield*/, axios_1["default"].post("/api/hospital/list", val).then(function (res) {
                            setList(res.data);
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var divisionAction = function (division) { return __awaiter(void 0, void 0, void 0, function () {
        var val;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    val = {
                        division: division,
                        id: users.id
                    };
                    return [4 /*yield*/, axios_1["default"].post("/api/user/division", val).then(function (res) {
                            var data = res.data;
                            if (data === "success") {
                                var userList = {
                                    users: {
                                        id: users.id,
                                        pw: users.pw,
                                        email: users.email,
                                        phone: users.phone,
                                        division: division,
                                        type: users.type,
                                        photo: users.photo
                                    }
                                };
                                setUserList(userList);
                                close();
                            }
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement("div", { className: open ? "openModal modal" : "modal" },
        open ? (react_1["default"].createElement("section", null,
            react_1["default"].createElement("header", null,
                header,
                react_1["default"].createElement("button", { className: "close", onClick: close }, "\u00D7")),
            react_1["default"].createElement("main", null,
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("form", { className: "d-flex  align-items-center justify-content-between overflow-hidden border", onSubmit: searchAction, style: { borderRadius: "100px", height: 50 } },
                        react_1["default"].createElement("input", { type: "text", style: { width: "100%", height: "100%", border: "none" }, className: "ml-2", placeholder: "\uC608) \uC11C\uC6B8\uC544\uC0B0\uBCD1\uC6D0 or \uC8FC\uC18C", ref: inputRef }),
                        react_1["default"].createElement("button", { type: "submit", className: "p-3", style: { backgroundColor: "rgba(0,0,0,0)" } },
                            react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faMagnifyingGlass }))),
                    react_1["default"].createElement("div", { className: "contents mt-3" }, !list
                        ? null
                        : list.map(function (item, i) { return (react_1["default"].createElement("div", { key: i, onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, divisionAction(item.id)];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); }, className: "item pointer justify-content-between d-flex align-items-center" },
                            react_1["default"].createElement("div", { className: "img" },
                                react_1["default"].createElement(image_1["default"], { src: "/api/hospital/" + item.photo, width: 100, height: 80, objectFit: "cover" })),
                            react_1["default"].createElement("div", { className: "text" },
                                react_1["default"].createElement("h4", null, item.name),
                                react_1["default"].createElement("span", null, item.address)))); })))))) : null,
        react_1["default"].createElement("style", { jsx: true }, ModalStyle_1["default"]),
        react_1["default"].createElement("style", { jsx: true }, DivisionModalStyle_1["default"])));
};
exports["default"] = Modal;
