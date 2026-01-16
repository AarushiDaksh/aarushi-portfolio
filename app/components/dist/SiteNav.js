"use client";
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
function SiteNavbar() {
    return (React.createElement("header", { className: "sticky top-0 z-40 bg-white/90 dark:bg-neutral-900/80 backdrop-blur border-b border-black/5 dark:border-white/10" },
        React.createElement("nav", { className: "mx-auto flex h-14 max-w-6xl items-center justify-between px-3" },
            React.createElement(link_1["default"], { href: "/", className: "flex items-center gap-2 font-semibold tracking-tight" },
                React.createElement("div", { className: "h-7 w-7 rounded-full grid place-items-center bg-black text-white dark:bg-white dark:text-black text-xs" }, "AD"),
                React.createElement("span", { className: "text-sm" }, "AarushiFolio")),
            React.createElement("ul", { className: "hidden gap-6 md:flex text-[13px] font-medium text-neutral-600 dark:text-neutral-300" },
                React.createElement("li", null,
                    React.createElement(link_1["default"], { href: "#about", className: "hover:text-black dark:hover:text-white" }, "About")),
                React.createElement("li", null,
                    React.createElement(link_1["default"], { href: "#services", className: "hover:text-black dark:hover:text-white" }, "Services")),
                React.createElement("li", null,
                    React.createElement(link_1["default"], { href: "#works", className: "hover:text-black dark:hover:text-white" }, "Projects")),
                React.createElement("li", null,
                    React.createElement(link_1["default"], { href: "#blog", className: "hover:text-black dark:hover:text-white" }, "Blog")),
                React.createElement("li", null,
                    React.createElement(link_1["default"], { href: "#contact", className: "hover:text-black dark:hover:text-white" }, "Contact"))),
            React.createElement(link_1["default"], { href: "/Aarushi_Daksh_CV.pdf", className: "rounded-md border px-3 py-1.5 text-xs font-semibold tracking-wide hover:shadow-sm transition\r\n                     border-black/10 text-black hover:bg-black hover:text-white\r\n                     dark:border-white/20 dark:text-white dark:hover:bg-white dark:hover:text-black" }, "DOWNLOAD CV"))));
}
exports["default"] = SiteNavbar;
