"use strict";
exports.__esModule = true;
exports.CaptionComponent = void 0;
var react_wrap_balancer_1 = require("react-wrap-balancer");
function CaptionComponent(_a) {
    var children = _a.children;
    return (React.createElement("span", { className: "block w-full text-xs my-3 font-mono text-gray-500 text-center leading-normal" },
        React.createElement(react_wrap_balancer_1["default"], null,
            React.createElement("span", { className: "[&>a]:post-link" }, children))));
}
exports.CaptionComponent = CaptionComponent;
