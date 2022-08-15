"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var ChatListStyle_1 = require("../../styles/message/ChatListStyle");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var react_1 = require("react");
var chat_1 = require("../../fnc/chat");
var ChatRoomItem = function (props) {
    var itemData = props.itemData, item = props.item, setActive = props.setActive, setActiveUser = props.setActiveUser;
    var _a = react_1.useState(), msg = _a[0], setMsg = _a[1];
    var clickActive = function () {
        setActive(item.id);
        setActiveUser(itemData);
    };
    react_1.useEffect(function () {
        var room = "room" + item.id;
        chat_1.getComment({ room: room }, setMsg);
    }, []);
    var last = !msg || msg.length <= 0 ? null : msg[msg.length - 1];
    return (React.createElement("div", { onClick: clickActive, className: "item pointer border-bottom d-flex justify-content-between align-items-center" },
        React.createElement("div", { className: "img" },
            React.createElement(image_1["default"], { src: "/api/profile/" + itemData.photo, width: 70, height: 70, objectFit: "cover" })),
        React.createElement("div", { className: "text" },
            React.createElement("div", { className: "name d-flex align-items-center justify-content-between" },
                React.createElement("span", null, itemData.name),
                React.createElement("p", null, !last
                    ? "Not yet"
                    : new Date(last["created_at"]).getMonth() +
                        1 +
                        "-" +
                        new Date(last["created_at"]).getDate() +
                        " " +
                        new Date(last["created_at"]).getHours() +
                        ":" +
                        new Date(last["created_at"]).getMinutes())),
            React.createElement("div", { className: "content d-flex align-items-center mt-3 justify-content-between" },
                React.createElement("span", null, !last ? "채팅을 시작해주세요." : last["content"]),
                React.createElement("div", { className: "notice d-flex align-items-center justify-content-center" },
                    React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faArrowRight })))),
        React.createElement("style", { jsx: true }, ChatListStyle_1["default"])));
};
exports["default"] = ChatRoomItem;
