"use strict";
exports.__esModule = true;
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var image_1 = require("next/image");
var HeadLineStyle_1 = require("../../../styles/information/HeadLineStyle");
var link_1 = require("next/link");
var HeadLine = function (props) {
    var info = props.info;
    return (React.createElement("div", { className: "headLine d-flex pb-3 border-bottom align-items-center justify-content-between pt-3 mt-5" },
        React.createElement(link_1["default"], { href: "/doctor" },
            React.createElement("a", { style: { textDecoration: "none", color: "inherit" } },
                React.createElement("div", { className: "d-flex align-items-center back" },
                    React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faArrowLeft, size: "2x" }),
                    React.createElement("div", { className: "d-flex align-items-center ml-3" },
                        React.createElement("div", { className: "img" },
                            React.createElement(image_1["default"], { src: "/api/profile/" + info.photo, width: 60, height: 60, objectFit: "cover" })),
                        React.createElement("h5", { className: "ml-2" }, info.name))))),
        React.createElement(link_1["default"], { href: "/" },
            React.createElement("a", null,
                React.createElement("div", { className: "button" },
                    React.createElement("button", { className: "btn btn-danger pr-3 pl-3 d-flex align-items-center pt-3 pb-3" },
                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faHouse, className: "mr-3" }),
                        "MAIN")))),
        React.createElement("style", { jsx: true }, HeadLineStyle_1["default"])));
};
exports["default"] = HeadLine;
