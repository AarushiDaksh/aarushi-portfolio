"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var link_1 = require("next/link");
var project_data_1 = require("../projects/project-data");
var featured = project_data_1.projects.filter(function (p) {
    return [
        "SkillSlack – Developers Collaboration Platform",
        "StuGig – Marketplace for Students",
        "miniATS",
    ].includes(p.title);
});
function BestWorks() {
    return (React.createElement("section", null,
        React.createElement("h2", { className: "mb-6 text-xl font-medium" }, "Best Works"),
        React.createElement("div", { className: "space-y-10 sm:space-y-16" }, featured.map(function (project, index) { return (React.createElement("article", { key: index, className: "bwCard group relative rounded-2xl p-[2.5px] transition-transform duration-300 hover:scale-[1.005]" },
            React.createElement("div", { className: "rounded-[12px] sm:rounded-[14px] overflow-hidden bg-[#0b0b0b] ring-1 ring-white/5 shadow-lg" },
                React.createElement("div", { className: "flex items-center justify-between px-3 py-1.5 sm:px-4 sm:py-2 border-b border-white/10 bg-[#121212]" },
                    React.createElement("div", { className: "flex items-center gap-1.5 sm:gap-2" },
                        React.createElement("span", { className: "h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full", style: { background: "var(--c1)" } }),
                        React.createElement("span", { className: "h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full", style: { background: "var(--c2)" } }),
                        React.createElement("span", { className: "h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full", style: { background: "var(--c3)" } })),
                    React.createElement("div", { className: "max-w-[40%] truncate rounded px-2 sm:px-3 py-0.5 sm:py-1 text-[11px] sm:text-xs tracking-tight text-neutral-400 bg-black/30 ring-1 ring-white/10" }, project.url.replace(/^https?:\/\//, "").replace("www.", "").split("/")[0]),
                    React.createElement(link_1["default"], { href: project.url, target: "_blank", className: "relative inline-flex items-center gap-1 rounded-md p-px sm:p-[1px] text-[11px] sm:text-xs font-semibold", style: {
                            background: "linear-gradient(120deg, var(--c1b), var(--c2b), var(--c3b))"
                        } },
                        React.createElement("span", { className: "rounded-[6px] bg-[#131313] px-2 py-0.5 sm:px-2.5 sm:py-1 text-white ring-1 ring-white/10 transition-colors group-hover:bg-[#151515]" }, "Live\u00A0Preview"))),
                React.createElement(link_1["default"], { href: project.url, target: "_blank", className: "block" },
                    React.createElement("div", { className: "relative w-full h-[200px] sm:h-[340px] overflow-hidden" },
                        React.createElement(image_1["default"], { src: project.image, alt: project.title, fill: true, className: "object-cover transition-transform duration-500 group-hover:scale-[1.015]", sizes: "100vw", priority: index === 0 }))),
                React.createElement("div", { className: "flex items-center justify-between px-3 sm:px-4 py-2 border-t border-white/10 text-xs sm:text-sm" },
                    React.createElement("span", { className: " text-pink-600 dark:text-[#c5d725]" }, project.title),
                    React.createElement("span", { className: "text-white/80" },
                        "\u2197 ",
                        project.year))),
            React.createElement("span", { "aria-hidden": true, className: "hidden sm:block pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-[var(--glow-op)]", style: {
                    filter: "blur(14px)",
                    background: "linear-gradient(120deg, var(--c1b) 25%, transparent 50%, var(--c3b) 75%)"
                } }))); })),
        React.createElement("style", { jsx: true, global: true }, "\n        :root {\n          --c1: #ff52bf;\n          --c2: #ffb900;\n          --c3: #38bdf8;\n\n          /* softer borders for light theme */\n          --c1b: #ff52bf33;\n          --c2b: #ffb90033;\n          --c3b: #38bdf833;\n          --glow-op: 0.18;\n\n          --text: #111111;\n        }\n       \n       \n\n        /* Border gradient by default... */\n        .bwCard {\n          background: linear-gradient(120deg, var(--c1b), var(--c2b), var(--c3b));\n        }\n        /* ...solid dark border on hover */\n        .bwCard:hover {\n          background: #1a1a1a !important;\n        }\n      ")));
}
exports["default"] = BestWorks;
