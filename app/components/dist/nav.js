"use strict";
exports.__esModule = true;
exports.Navbar = void 0;
var link_1 = require("next/link");
var theme_switch_1 = require("./theme-switch");
var fa_1 = require("react-icons/fa");
var fa6_1 = require("react-icons/fa6");
var navItems = {
    "/twin": { name: "", icon: fa6_1.FaA },
    "/projects": { name: "", icon: fa_1.FaFolderOpen },
    "/highlights": { name: "", icon: fa_1.FaStar }
};
function Navbar() {
    return (React.createElement("nav", { className: "fixed top-7 left-1/2 -translate-x-1/2 z-50\r\n                 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md\r\n                 border border-black/5 dark:border-white/10\r\n                 rounded-full shadow-lg px-6 py-3" },
        React.createElement("div", { className: "flex items-center gap-6" },
            Object.entries(navItems).map(function (_a) {
                var path = _a[0], _b = _a[1], name = _b.name, Icon = _b.icon;
                return (React.createElement(link_1["default"], { key: path, href: path, className: "flex flex-col items-center gap-1 text-xs font-medium\r\n                       transition-all duration-300 text-[#c5d725] hover:text-pink-600 \r\n                       dark:text-neutral-300 dark:hover:text-lime-400" },
                    React.createElement(Icon, { size: 20 }),
                    React.createElement("span", null, name)));
            }),
            React.createElement(theme_switch_1.ThemeSwitch, null))));
}
exports.Navbar = Navbar;
