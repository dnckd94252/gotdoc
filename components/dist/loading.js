"use strict";
exports.__esModule = true;
var LoadingStyle_1 = require("../styles/LoadingStyle");
var Loading = function () {
    return (React.createElement("section", { id: "loading", className: "vw-100 vh-100 position-absolute" },
        React.createElement("div", { className: "wrapper" },
            React.createElement("div", { className: "box-wrap" },
                React.createElement("div", { className: "box one" }),
                React.createElement("div", { className: "box two" }),
                React.createElement("div", { className: "box three" }),
                React.createElement("div", { className: "box four" }),
                React.createElement("div", { className: "box five" }),
                React.createElement("div", { className: "box six" }))),
        React.createElement("style", { jsx: true }, LoadingStyle_1["default"])));
};
exports["default"] = Loading;
