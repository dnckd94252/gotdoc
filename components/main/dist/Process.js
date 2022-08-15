"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var ProcessStyle_1 = require("../../styles/ProcessStyle");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var Process = function () {
    return (React.createElement("section", { id: "process", className: "container" },
        React.createElement("div", { style: {
                opacity: 0,
                transform: "translateY(-50px)",
                transition: ".5s"
            }, className: "title d-flex align-items-center pageItem justify-content-center flex-column" },
            React.createElement("h3", null,
                "How to Grow Your ",
                React.createElement("b", null, "Business")),
            React.createElement("h3", null,
                React.createElement("b", null, "Experience"),
                " With Estima")),
        React.createElement("div", { className: "contents pb-5" },
            React.createElement("div", { className: "item item1 d-flex align-items-center pageItem justify-content-between" },
                React.createElement("div", { className: "text col-6", style: {
                        opacity: 0,
                        transform: "translateY(-50px)",
                        transition: ".5s"
                    } },
                    React.createElement("h4", { className: "d-flex align-items-center justify-content-center" }, "01"),
                    React.createElement("h3", { className: "mt-5 mb-4" }, "Log in and contact your special Doctor."),
                    React.createElement("p", { className: "mt-5 mb-5" }, "If you try to contact me, I'll get a call a little later. After that, adjust each other's schedule and get treatment."),
                    React.createElement("div", { className: "more d-flex align-items-center" },
                        React.createElement("span", { className: "mr-3" }, "Learn More"),
                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faArrowRight, size: "2x" }))),
                React.createElement("div", { className: "img col-6 d-flex align-items-center justify-content-center", style: {
                        opacity: 0,
                        transform: "translateY(-50px)",
                        transition: "1.5s"
                    } },
                    React.createElement(image_1["default"], { src: "/api/process/user.png", width: 500, height: 400 }))),
            React.createElement("div", { className: "item item2 d-flex align-items-center pageItem justify-content-between" },
                React.createElement("div", { className: "img col-6 d-flex align-items-center justify-content-center", style: {
                        opacity: 0,
                        transform: "translateY(-50px)",
                        transition: "1.5s"
                    } },
                    React.createElement(image_1["default"], { src: "/api/process/list.png", width: 500, height: 400 })),
                React.createElement("div", { className: "text col-6 ml-5", style: {
                        opacity: 0,
                        transform: "translateY(-50px)",
                        transition: ".5s"
                    } },
                    React.createElement("h4", { className: "d-flex align-items-center justify-content-center" }, "02"),
                    React.createElement("h3", { className: "mt-5 mb-4" }, "Search all Hospital you want in your location"),
                    React.createElement("p", { className: "mt-5 mb-5" }, "Search your location and recommend it based on the score. Make a quick to the location you want."),
                    React.createElement("div", { className: "more d-flex align-items-center" },
                        React.createElement("span", { className: "mr-3" }, "Learn More"),
                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faArrowRight, size: "2x" })))),
            React.createElement("div", { className: "item item3 d-flex align-items-center pageItem justify-content-between" },
                React.createElement("div", { className: "text col-6", style: {
                        opacity: 0,
                        transform: "translateY(-50px)",
                        transition: ".5s"
                    } },
                    React.createElement("h4", { className: "d-flex align-items-center justify-content-center" }, "03"),
                    React.createElement("h3", { className: "mt-5 mb-4" }, "Choose and Doctor you want real disease"),
                    React.createElement("p", { className: "mt-5 mb-5" }, "It's not just location selection. I recommend which doctor to see in the hospital through the score."),
                    React.createElement("div", { className: "more d-flex align-items-center" },
                        React.createElement("span", { className: "mr-3" }, "Learn More"),
                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faArrowRight, size: "2x" }))),
                React.createElement("div", { className: "img col-6 d-flex align-items-center justify-content-center", style: {
                        opacity: 0,
                        transform: "translateY(-50px)",
                        transition: "1.5s"
                    } },
                    React.createElement(image_1["default"], { src: "/api/process/point.png", width: 500, height: 400 })))),
        React.createElement("style", { jsx: true }, ProcessStyle_1["default"])));
};
exports["default"] = Process;
