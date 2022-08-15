"use strict";
exports.__esModule = true;
var IntroduceStyle_1 = require("../../styles/IntroduceStyle");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var image_1 = require("next/image");
var Introduce = function () {
    return (React.createElement("section", { id: "introduce", className: "vh-100 vw-100 d-flex align-items-center pageItem justify-content-center" },
        React.createElement("div", { className: "container d-flex align-items-center justify-content-between" },
            React.createElement("div", { className: "option" },
                React.createElement("div", { className: "optionItem actionItem1 mb-5 p-4", style: {
                        transition: ".3s",
                        opacity: 0,
                        transform: "translateY(50px)"
                    } },
                    React.createElement("div", { className: "icon d-flex align-items-center justify-content-center" },
                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faShield, size: "3x" })),
                    React.createElement("h5", null, "Trusted Agency"),
                    React.createElement("span", null, "Agents make life like simple for you and your clients.")),
                React.createElement("div", { className: "optionItem actionItem2 mb-5 p-4", style: {
                        transition: ".7s",
                        opacity: 0,
                        transform: "translateY(50px)"
                    } },
                    React.createElement("div", { className: "icon d-flex align-items-center justify-content-center" },
                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faClock, size: "3x" })),
                    React.createElement("h5", null, "24 Hour Consul"),
                    React.createElement("span", null, "Our contact person is always ready to serve you."))),
            React.createElement("div", { className: "content legend actionItem3", style: {
                    transition: "1.1s",
                    opacity: 0,
                    transform: "translateY(50px)"
                } },
                React.createElement("div", { className: "locationItem p-3 mb-5 pb-5" },
                    React.createElement("div", { className: "imgBox" },
                        React.createElement(image_1["default"], { src: "/api/visual/hospital2.jpg", style: { borderRadius: "10px" }, height: 450, width: 600, objectFit: "cover" }),
                        React.createElement("h5", { className: "pt-4" }, "St Colin Louwis 287"),
                        React.createElement("p", null,
                            React.createElement("b", null, "3,000"),
                            " Views"),
                        React.createElement("div", { className: "options d-flex align-items-center pt-4 pb-2 border-top justify-content-between" },
                            React.createElement("div", { className: "item d-flex align-items-center justify-content-center" },
                                React.createElement(react_fontawesome_1.FontAwesomeIcon, { size: "2x", icon: free_solid_svg_icons_1.faBriefcase }),
                                React.createElement("span", { className: "ml-4" }, "4 Worker")),
                            React.createElement("div", { className: "item d-flex align-items-center justify-content-center" },
                                React.createElement(react_fontawesome_1.FontAwesomeIcon, { size: "2x", icon: free_solid_svg_icons_1.faBed }),
                                React.createElement("span", { className: "ml-4" }, "102 Rooms")),
                            React.createElement("div", { className: "item d-flex align-items-center justify-content-center" },
                                React.createElement(react_fontawesome_1.FontAwesomeIcon, { size: "2x", icon: free_solid_svg_icons_1.faSackDollar }),
                                React.createElement("span", { className: "ml-4" }, "Low Money")))))),
            React.createElement("div", { className: "option" },
                React.createElement("div", { className: "optionItem actionItem4 mb-5 p-4", style: {
                        transition: "1.4s",
                        opacity: 0,
                        transform: "translateY(50px)"
                    } },
                    React.createElement("div", { className: "icon d-flex align-items-center justify-content-center" },
                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faLocationDot, size: "3x" })),
                    React.createElement("h5", null, "It's Everywhere"),
                    React.createElement("span", null, "Wherever you are, we are here for you.")),
                React.createElement("div", { className: "optionItem  actionItem5 mb-5 p-4", style: {
                        transition: "1.7s",
                        opacity: 0,
                        transform: "translateY(50px)"
                    } },
                    React.createElement("div", { className: "icon d-flex align-items-center justify-content-center" },
                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCreditCard, size: "3x" })),
                    React.createElement("h5", null, "Easy Payment"),
                    React.createElement("span", null, "We offer easy payment method for you.")))),
        React.createElement("style", { jsx: true }, IntroduceStyle_1["default"])));
};
exports["default"] = Introduce;
