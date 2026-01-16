"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var fa6_1 = require("react-icons/fa6");
var tb_1 = require("react-icons/tb");
var config_1 = require("app/lib/config");
var YEAR = new Date().getFullYear();
function SocialLink(_a) {
    var href = _a.href, Icon = _a.icon;
    return (react_1["default"].createElement("a", { href: href, target: "_blank", rel: "noopener noreferrer", className: "transition-colors duration-200 hover:text-primary" },
        react_1["default"].createElement(Icon, null)));
}
function SocialLinks() {
    return (react_1["default"].createElement("div", { className: "flex text-lg gap-3.5 float-right transition-opacity duration-300 hover:opacity-90" },
        react_1["default"].createElement(SocialLink, { href: config_1.socialLinks.medium, icon: fa6_1.FaMedium }),
        react_1["default"].createElement(SocialLink, { href: config_1.socialLinks.linkedin, icon: fa6_1.FaLinkedinIn }),
        react_1["default"].createElement(SocialLink, { href: config_1.socialLinks.email, icon: tb_1.TbMailFilled })));
}
function Footer() {
    return (react_1["default"].createElement("small", { className: "block lg:mt-24 mt-16 light:text-neutral-800 dark:text-neutral-200 dracula:text-neutral-200" },
        react_1["default"].createElement("time", null,
            "\u00A9 ",
            YEAR),
        " ",
        react_1["default"].createElement("a", { className: "no-underline hover:underline", href: config_1.socialLinks.twitter, target: "_blank", rel: "noopener noreferrer" }, config_1.metaData.title),
        react_1["default"].createElement("style", { jsx: true }, "\n        @media screen and (max-width: 480px) {\n          article {\n            padding-top: 2rem;\n            padding-bottom: 4rem;\n          }\n        }\n      "),
        react_1["default"].createElement(SocialLinks, null)));
}
exports["default"] = Footer;
