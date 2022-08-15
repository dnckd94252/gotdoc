"use strict";
exports.__esModule = true;
var ChatRoomStyle_1 = require("../../styles/message/ChatRoomStyle");
var image_1 = require("next/image");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var ChatRoom = function (props) {
    var msg = props.msg, socket = props.socket, activeUser = props.activeUser;
    var userList = react_redux_1.useSelector(function (state) { return state.usersList; });
    var chatRef = react_1.useRef();
    react_1.useEffect(function () {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }, [msg]);
    var image = (React.createElement(image_1["default"], { src: "/api/profile/" + activeUser.photo, width: 60, height: 60, objectFit: "cover" }));
    return (React.createElement("div", { ref: chatRef, className: "chat-room ml-3 mr-3 d-flex flex-column" },
        msg.map(function (item, i) {
            return item.user_id !== userList.users.id ? (React.createElement("div", { key: i, className: "item mt-3" },
                React.createElement("div", { className: "text d-flex align-items-end" },
                    React.createElement("div", { className: "img" }, image),
                    React.createElement("div", { className: "content" },
                        React.createElement("p", { className: "m-0" }, item.content))),
                React.createElement("p", { className: "ml-5 mt-2 mb-0 time" }, new Date(item["created_at"]).getHours() +
                    ":" +
                    new Date(item["created_at"]).getMinutes()))) : (React.createElement("div", { key: i, className: "item me mt-3 d-flex flex-column align-items-end" },
                React.createElement("div", { className: "text d-flex align-items-end" },
                    React.createElement("div", { className: "content" },
                        React.createElement("p", { className: "m-0" }, item.content))),
                React.createElement("p", { className: "ml-5 mt-2 mb-0 time" }, new Date(item["created_at"]).getHours() +
                    ":" +
                    new Date(item["created_at"]).getMinutes())));
        }),
        React.createElement("style", { jsx: true }, ChatRoomStyle_1["default"])));
};
exports["default"] = ChatRoom;
