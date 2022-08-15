"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var ProfileStyle_1 = require("../../styles/mypage/ProfileStyle");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var Modal_1 = require("./Modal");
var react_1 = require("react");
var axios_1 = require("axios");
var MajorModal_1 = require("./MajorModal");
var ReservationModal_1 = require("./ReservationModal");
var Profile = function (props) {
    var userList = props.userList, setUserList = props.setUserList;
    var _a = react_1.useState(null), division = _a[0], setDivison = _a[1];
    var _b = react_1.useState(false), modalOpen = _b[0], setModalOpen = _b[1];
    var _c = react_1.useState(false), majorModalOpen = _c[0], setMajorModalOpen = _c[1];
    var _d = react_1.useState(false), reservationModalOpen = _d[0], setReservationModalOpen = _d[1];
    react_1.useEffect(function () {
        var userDivision = userList.users.division;
        if (!userDivision)
            return;
        axios_1["default"].post("/api/hospital/show", { pid: userDivision }).then(function (res) {
            setDivison(res.data);
        });
    }, [userList]);
    var openModal = function () {
        setModalOpen(true);
    };
    var closeModal = function () {
        setModalOpen(false);
    };
    var openMajorModal = function () {
        setMajorModalOpen(true);
    };
    var closeMajorModal = function () {
        setMajorModalOpen(false);
    };
    var openReservationModal = function () {
        setReservationModalOpen(true);
    };
    var closeReservationModal = function () {
        setReservationModalOpen(false);
    };
    return (React.createElement("div", { className: "profile p-4 col-4 " },
        React.createElement("div", { className: "name d-flex justify-content-center align-items-center flex-column" },
            React.createElement("div", { className: "img mt-5" },
                React.createElement(image_1["default"], { src: "/api/profile/" + userList.users.photo, width: 160, height: 160, objectFit: "cover" })),
            React.createElement("h5", null, userList.users.name),
            React.createElement("span", { className: "tag" }, userList.users.type === "doctor" ? "DOCTOR" : "USER"),
            React.createElement("button", { onClick: openReservationModal, className: "btn btn-info mt-4 massegeBtn" }, "View My Reservations"),
            React.createElement(ReservationModal_1["default"], { open: reservationModalOpen, close: closeReservationModal, header: "\uC608\uC57D \uD655\uC778 : \uB9AC\uC2A4\uD2B8 \uD074\uB9AD\uC2DC \uC0C1\uC138\uBCF4\uAE30 / \uC0C1\uD0DC \uBC14\uAFB8\uAE30" }),
            React.createElement("div", { className: "item mt-4" },
                React.createElement("span", null, "Email"),
                React.createElement("p", { className: "m-0" }, userList.users.email)),
            React.createElement("div", { className: "item mt-3" },
                React.createElement("span", null, "Phone Number"),
                React.createElement("p", { className: "m-0" }, userList.users.phone)),
            React.createElement("div", { className: "item mt-3" },
                React.createElement("span", null, "ID"),
                React.createElement("p", { className: "m-0" }, userList.users.id)),
            userList.users.type === "doctor" ? (!userList.users.division ? (React.createElement(React.Fragment, null,
                React.createElement("div", { className: "item pointer empty mt-3", onClick: function () {
                        openModal();
                    } },
                    React.createElement("span", null, "\uC18C\uC18D"),
                    React.createElement("p", { className: "m-0 d-flex align-items-center" },
                        "\uC18C\uC18D \uB4F1\uB85D \uD558\uAE30",
                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { className: "ml-2", icon: free_solid_svg_icons_1.faPlusCircle }))),
                React.createElement(Modal_1["default"], { setModalOpen: setModalOpen, open: modalOpen, close: closeModal, header: "\uC18C\uC18D \uB4F1\uB85D", setUserList: setUserList }))) : (React.createElement("div", { className: "item mt-3" },
                React.createElement("span", { className: "d-flex align-items-center" },
                    "\uC18C\uC18D",
                    React.createElement("button", { className: "ml-3 badge badge-dark", onClick: function () {
                            openModal();
                        } }, "\uC18C\uC18D\uBCC0\uACBD")),
                React.createElement("p", { className: "m-0 d-flex align-items-center" }, !division ? null : division.name),
                React.createElement(Modal_1["default"], { setModalOpen: setModalOpen, open: modalOpen, close: closeModal, header: "\uC18C\uC18D \uB4F1\uB85D", setUserList: setUserList })))) : null,
            userList.users.type === "doctor" ? (!userList.users.major ? (React.createElement(React.Fragment, null,
                React.createElement("div", { className: "item mt-3 empty pointer", onClick: openMajorModal },
                    React.createElement("span", null, "\uC804\uACF5 "),
                    React.createElement("p", { className: "m-0" },
                        "\uC804\uACF5 \uB4F1\uB85D \uD558\uAE30",
                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { className: "ml-2", icon: free_solid_svg_icons_1.faPlusCircle }))),
                React.createElement(MajorModal_1["default"], { setUserList: setUserList, open: majorModalOpen, close: closeMajorModal, header: "\uC804\uACF5 \uB4F1\uB85D" }))) : (React.createElement("div", { className: "item mt-3" },
                React.createElement("span", null,
                    "\uC804\uACF5",
                    " ",
                    React.createElement("button", { className: "ml-3 badge badge-dark", onClick: function () {
                            openMajorModal();
                        } }, "\uC18C\uC18D\uBCC0\uACBD")),
                React.createElement("p", { className: "m-0" }, userList.users.major),
                React.createElement(MajorModal_1["default"], { setUserList: setUserList, open: majorModalOpen, close: closeMajorModal, header: "\uC804\uACF5 \uB4F1\uB85D" })))) : null),
        React.createElement("style", { jsx: true }, ProfileStyle_1["default"])));
};
exports["default"] = Profile;
