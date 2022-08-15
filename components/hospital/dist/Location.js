"use strict";
exports.__esModule = true;
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var image_1 = require("next/image");
var HospitalStyle_1 = require("../../styles/hospital/HospitalStyle");
var link_1 = require("next/link");
var Location = function (props) {
    var _a = props.item, id = _a.id, address = _a.address, created_at = _a.created_at, name = _a.name, rooms = _a.rooms, photo = _a.photo, user_id = _a.user_id;
    return (React.createElement(link_1["default"], { href: "/hospital/" + id },
        React.createElement("a", null,
            React.createElement("div", { className: "locationItem pointer p-3 m-4" },
                React.createElement("div", { className: "imgBox" },
                    React.createElement(image_1["default"], { src: encodeURI("/api/hospital/" + photo), style: { borderRadius: "10px" }, height: 250, width: 400, objectFit: "cover" }),
                    React.createElement("h5", { className: "pt-4" }, name),
                    React.createElement("p", null, address),
                    React.createElement("div", { className: "option d-flex align-items-center pt-4 pb-2 border-top justify-content-between" },
                        React.createElement("div", { className: "item d-flex align-items-center justify-content-center" },
                            React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faBriefcase }),
                            React.createElement("span", { className: "ml-2" }, "0 Worker")),
                        React.createElement("div", { className: "item d-flex align-items-center justify-content-center" },
                            React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faBed }),
                            React.createElement("span", { className: "ml-2" },
                                rooms,
                                " Rooms")),
                        React.createElement("div", { className: "item d-flex align-items-center justify-content-center" },
                            React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faSackDollar }),
                            React.createElement("span", { className: "ml-2" }, "Low Money")))),
                React.createElement("style", { jsx: true }, HospitalStyle_1["default"])))));
};
exports["default"] = Location;
