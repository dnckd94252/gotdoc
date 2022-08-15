"use strict";
exports.__esModule = true;
var ChatHeadStyle_1 = require("../../styles/message/ChatHeadStyle");
var image_1 = require("next/image");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var ChatHead = function (props) {
    var activeUser = props.activeUser;
    return (React.createElement("div", { className: "d-flex justify-content-between m-3 align-items-center chat-head" },
        React.createElement("div", { className: "info d-flex align-items-center ml-4 mr-4" },
            React.createElement("div", { className: "img" },
                React.createElement(image_1["default"], { src: "/api/profile/" + activeUser.photo, width: 50, height: 50, objectFit: "cover" })),
            React.createElement("div", { className: "text ml-4" },
                React.createElement("h5", { className: "m-0" }, activeUser.name),
                React.createElement("span", null, activeUser.email))),
        React.createElement("div", { className: "buttons d-flex align-items-center mr-4" },
            React.createElement("button", { className: "btn btn-dark d-flex align-items-center justify-content-center" },
                React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faBook, size: "2x" })),
            React.createElement("button", { className: "btn ml-3 btn-dark d-flex align-items-center justify-content-center" },
                React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faArrowPointer, size: "2x" }))),
        React.createElement("style", { jsx: true }, ChatHeadStyle_1["default"])));
};
exports["default"] = ChatHead;
