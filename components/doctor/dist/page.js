"use strict";
exports.__esModule = true;
var DoctorStyle_1 = require("../../styles/DoctorStyle");
var Page = function (props) {
    var num = props.num;
    var setPage = function () {
        props.setPage(num);
    };
    return props.page === num ? (React.createElement("li", { className: "page-item ", onClick: setPage },
        React.createElement("span", { className: "pageItem active" }, props.num),
        React.createElement("style", { jsx: true }, DoctorStyle_1["default"]))) : (React.createElement("li", { className: "page-item ", onClick: setPage },
        React.createElement("span", { className: "pageItem" }, props.num),
        React.createElement("style", { jsx: true }, DoctorStyle_1["default"])));
};
exports["default"] = Page;
