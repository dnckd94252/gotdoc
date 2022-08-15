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
var ReservationModalStyle_1 = require("../../styles/mypage/ReservationModalStyle");
var axios_1 = require("axios");
var ReservationModalItem = function (props) {
    var item = props.item;
    var selectStateReservation = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var val;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    val = e.target.value;
                    return [4 /*yield*/, axios_1["default"].post("/api/reservation/update", { val: val, id: item.id }).then(function (res) {
                            console.log(res.data);
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: "item pointer d-flex align-items-center justify-content-between" },
        React.createElement("div", { className: "img" },
            React.createElement(image_1["default"], { src: "/api/profile/" + item.photo, width: 60, height: 60, objectFit: "cover" })),
        React.createElement("div", { className: "text" },
            React.createElement("h5", null, item.name),
            React.createElement("span", null, item.main_address)),
        React.createElement("div", { className: "select" },
            React.createElement("select", { onChange: selectStateReservation, defaultValue: "" + item.check_val },
                React.createElement("option", { value: "none" }, "\uC2E0\uCCAD\uB300\uAE30\uC911"),
                React.createElement("option", { value: "wait" }, "\uC9C4\uB8CC\uB300\uAE30\uC911"),
                React.createElement("option", { value: "success" }, "\uC9C4\uB8CC\uC644\uB8CC"))),
        React.createElement("style", { jsx: true }, ReservationModalStyle_1["default"])));
};
exports["default"] = ReservationModalItem;
