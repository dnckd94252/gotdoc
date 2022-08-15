"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var ContentsStyle_1 = require("../../styles/Review/ContentsStyle");
var ContentsItem = function (props) {
    var item = props.item;
    var date = new Date(item.created_at);
    var starIconArr = [1, 2, 3, 4, 5];
    return (React.createElement("div", { className: "item position-relative m-4 p-4" },
        React.createElement("div", { className: "img position-absolute" },
            React.createElement(image_1["default"], { src: "/api/profile/" + item.photo, width: 80, height: 80, objectFit: "cover", style: { borderRadius: "10px" } })),
        React.createElement("div", { className: "text p-3" },
            React.createElement("div", { className: "user d-flex align-items-center justify-content-between" },
                React.createElement("h3", null, item.name),
                React.createElement("div", { className: "star d-flex align-items-center" }, starIconArr.map(function (stars, i) {
                    return (React.createElement(react_fontawesome_1.FontAwesomeIcon, { key: i, icon: free_solid_svg_icons_1.faStar, style: { color: item.star >= stars ? "#ffaf13" : "#e0e0e0" } }));
                }))),
            React.createElement("div", { className: "d-flex align-items-center date mb-3" },
                React.createElement("span", null,
                    date.getFullYear(),
                    ".",
                    date.getMonth() + 1,
                    ".",
                    date.getDate()),
                React.createElement("div", { className: "bar w-100" })),
            React.createElement("div", { className: "content" },
                React.createElement("h5", null, item.title),
                React.createElement("span", null, item.content))),
        React.createElement("style", { jsx: true }, ContentsStyle_1["default"])));
};
exports["default"] = ContentsItem;
