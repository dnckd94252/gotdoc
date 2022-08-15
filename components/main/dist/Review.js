"use strict";
exports.__esModule = true;
var ReviewStyle_1 = require("../../styles/ReviewStyle");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var image_1 = require("next/image");
var Review = function () {
    return (React.createElement("section", { id: "review", className: "pageItem" },
        React.createElement("div", { className: "head container d-flex align-items-end mb-5 justify-content-between" },
            React.createElement("div", { className: "title" },
                React.createElement("h3", null,
                    "What do ",
                    React.createElement("b", null, "people say")),
                React.createElement("h3", null, "about us?")),
            React.createElement("div", { className: "pageBtn d-flex align-items-center" },
                React.createElement("button", { className: "btn btn-dark m-3 p-3" },
                    React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faArrowLeft, size: "2x" })),
                React.createElement("button", { className: "btn btn-dark m-3 p-3" },
                    React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faArrowRight, size: "2x" })))),
        React.createElement("div", { className: "contents d-flex container align-items-center pt-5 mt-5" },
            React.createElement("div", { className: "item" },
                React.createElement("p", { className: "itemText" }, "\"\uB2E4\uB978 \uCE58\uACFC\uC5D0\uC11C \uBC1B\uC740 \uAD50\uC815\uC774 \uB9C8\uBB34\uB9AC\uAC00 \uC798 \uC548\uB418\uC5B4\uC11C \uC774\uBC88\uC5D0 \uD55C\uADF8\uB8E8\uCE58\uACFC\uBCD1\uC6D0\uC5D0\uC11C \uD074\uB9AC\uD53C\uC528\uB85C \uBD80\uBD84\uAD50\uC815\uC744 \uC2DC\uC791\uD588\uC5B4\uC694. \uBE44\uC6A9\uB3C4 \uC0DD\uAC01\uD55C \uBC94\uC704\uC5D0\uC11C \uD06C\uAC8C \uBC97\uC5B4\uB098\uC9C0 \uC54A\uC558\uACE0 \uCE5C\uC808\uD558\uACE0 \uAF3C\uAF3C\uD558\uAC8C \uC0C1\uB2F4\uD574\uC8FC\uC168\uC2B5\uB2C8\uB2E4. \uAD50\uC815\uC7A5\uCE58 \uCC29\uC6A9 \uB2E4\uC74C\uB0A0\uC740 \uD655\uC778 \uC804\uD654\uAE4C\uC9C0 \uD574\uC8FC\uC2DC\uB124\uC694!\""),
                React.createElement("div", { className: "profile d-flex mt-5 align-items-center" },
                    React.createElement("div", { className: "img" },
                        React.createElement(image_1["default"], { src: "/api/review/profile1.jpg", objectFit: "cover", width: 70, height: 70 })),
                    React.createElement("div", { className: "introduce ml-3" },
                        React.createElement("h5", { className: "m-0" }, "\uAE40\uD558\uC900"),
                        React.createElement("span", null, "Product Designer")))),
            React.createElement("div", { className: "item" },
                React.createElement("p", { className: "itemText" }, "\"\uCDA9\uCE58\uCE58\uB8CC \uD560 \uAC8C \uB9CE\uB2E4\uACE0\uD574\uC11C \uC778\uB808\uC774 \uD589\uC0AC\uD558\uAE38\uB798 \uBC29\uBB38\uD588\uC5B4\uC694 \uADFC\uB370 \uCE58\uB8CC\uAC00 \uB531\uD788 \uD544\uC694\uD55C \uAC8C \uC5C6\uB2E4\uACE0 \uD574\uC11C \uB3CC\uC544\uC654\uC5B4\uC694 \uC5BC\uB9C8\uB098 \uAE68\uC9C8\uAE4C \uAC71\uC815\uD588\uB294\uB370.\uC774\uB807\uAC8C \uC591\uC2EC\uC801\uC77C\uC218\uAC00... \uC55E\uC73C\uB85C \uC5EC\uAE30\uB9CC \uBC29\uBB38 \uD560 \uC608\uC815\uC785\uB2C8\uB2F9\""),
                React.createElement("div", { className: "profile d-flex mt-5 align-items-center" },
                    React.createElement("div", { className: "img" },
                        React.createElement(image_1["default"], { src: "/api/review/profile2.jpg", objectFit: "cover", width: 70, height: 70 })),
                    React.createElement("div", { className: "introduce ml-3" },
                        React.createElement("h5", { className: "m-0" }, "\uC815\uB3C4\uD604"),
                        React.createElement("span", null, "Product Designer")))),
            React.createElement("div", { className: "item" },
                React.createElement("p", { className: "itemText" }, "\"\uC774\uB9C8 \uB9CE\uC774 \uC2DC\uB824\uC11C \uAC14\uB294\uB370 \uC798 \uCE58\uB8CC\uAC00 \uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uCCAB\uBC88\uC9F8 \uCE58\uB8CC \uB54C \uC774\uAC00 \uACC4\uC18D \uC2DC\uB838\uB294\uB370 \uB2E4\uC74C\uC5D0 \uBC29\uBB38\uD560 \uB54C \uB2E4\uC2DC \uD55C\uBC88 \uBCF4\uC2DC\uACE0 \uB354 \uCE58\uB8CC\uD574\uC8FC\uC0F8\uC5B4\uC694. \uCD94\uAC00\uBE44\uC6A9\uC774 \uBC1C\uC0DD\uD558\uB294\uC904 \uC54C\uC558\uB294\uB370 \uCD94\uAC00\uBE44\uC6A9\uC5C6\uC774 \uC798 \uB05D\uB0AC\uC2B5\uB2C8\uB2E4. \uAC10\uC0AC\uD569\uB2C8\uB2E4.\""),
                React.createElement("div", { className: "profile d-flex mt-5 align-items-center" },
                    React.createElement("div", { className: "img" },
                        React.createElement(image_1["default"], { src: "/api/review/profile3.jpg", objectFit: "cover", width: 70, height: 70 })),
                    React.createElement("div", { className: "introduce ml-3" },
                        React.createElement("h5", { className: "m-0" }, "\uC774\uC11C\uC900"),
                        React.createElement("span", null, "Product Designer"))))),
        React.createElement("style", { jsx: true }, ReviewStyle_1["default"])));
};
exports["default"] = Review;
