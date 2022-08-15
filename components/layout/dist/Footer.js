"use strict";
exports.__esModule = true;
var FooterStyle_1 = require("../../styles/FooterStyle");
var image_1 = require("next/image");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var Footer = function () {
    return (React.createElement("footer", { className: "d-flex align-items-center flex-column justify-content-center" },
        React.createElement("div", { className: "contents container d-flex align-items-center justify-content-between" },
            React.createElement("div", { className: "left" },
                React.createElement("div", { className: "d-flex align-items-center logo" },
                    React.createElement(image_1["default"], { src: "/api/logo.png", width: 50, height: 50 }),
                    React.createElement("h5", { className: "m-0 ml-3" }, "GotDoc")),
                React.createElement("p", { className: "mt-5" }, "Enjoy our services in your dream real estate search, Thank you!")),
            React.createElement("div", { className: "right d-flex align-items-center justify-content-between" },
                React.createElement("div", { className: "item" },
                    React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faBlog, size: "2x" })),
                React.createElement("div", { className: "item" },
                    React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faMessage, size: "2x" })),
                React.createElement("div", { className: "item" },
                    React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faPhone, size: "2x" })))),
        React.createElement("div", { className: "copyright container mt-5 pt-5 border-top d-flex align-items-center justify-content-between" },
            React.createElement("p", null, "Created Choi Woo Chang Copyright all Right."),
            React.createElement("div", { className: "d-flex align-items-center last justify-content-between" },
                React.createElement("p", null, "Legal doc"),
                React.createElement("div", { className: "bar" }),
                React.createElement("p", null, "Privacy Policy"),
                React.createElement("div", { className: "bar" }),
                React.createElement("p", null, "Terms of Use"))),
        React.createElement("style", { jsx: true }, FooterStyle_1["default"])));
};
exports["default"] = Footer;
