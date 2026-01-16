"use strict";
exports.__esModule = true;
exports.ImageGrid = void 0;
var react_1 = require("react");
var image_1 = require("next/image");
exports.ImageGrid = function (_a) {
    var images = _a.images, _b = _a.columns, columns = _b === void 0 ? 3 : _b;
    var gridClass = {
        2: "grid-cols-2 sm:grid-cols-2",
        3: "grid-cols-2 sm:grid-cols-3",
        4: "grid-cols-2 sm:grid-cols-4"
    }[columns];
    return (react_1["default"].createElement("section", null,
        react_1["default"].createElement("div", { className: "grid " + gridClass + " gap-4 my-8" }, images.map(function (image, index) { return (react_1["default"].createElement("div", { key: index, className: "relative aspect-square" }, image.href ? (react_1["default"].createElement("a", { target: "_blank", rel: "noopener noreferrer", href: image.href, className: "block w-full h-full" },
            react_1["default"].createElement(image_1["default"], { alt: image.alt, src: image.src, fill: true, sizes: "(max-width: 768px) 50vw, 33vw", priority: true, className: "rounded-lg object-cover" }))) : (react_1["default"].createElement(image_1["default"], { alt: image.alt, src: image.src, fill: true, sizes: "(max-width: 768px) 50vw, 33vw", priority: true, className: "rounded-lg object-cover" })))); }))));
};
