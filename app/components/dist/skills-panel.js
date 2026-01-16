"use client";
"use strict";
exports.__esModule = true;
var lu_1 = require("react-icons/lu");
var GROUPS = [
    {
        title: "Frontend",
        icon: React.createElement(lu_1.LuCode, { className: "h-4 w-4" }),
        items: [
            { name: "React", level: 4 },
            { name: "Next.js", level: 4 },
            { name: "TailwindCSS", level: 5 },
        ]
    },
    {
        title: "Backend",
        icon: React.createElement(lu_1.LuServer, { className: "h-4 w-4" }),
        items: [
            { name: "Node.js", level: 4 },
            { name: "Express", level: 4 },
            { name: "Stripe (basic)", level: 3 },
            { name: "WebSockets / Socket.IO", level: 3 },
        ]
    },
    {
        title: "Data",
        icon: React.createElement(lu_1.LuDatabase, { className: "h-4 w-4" }),
        items: [
            { name: "MongoDB", level: 4 },
            { name: "Mongoose", level: 4 },
        ]
    },
    {
        title: "Cloud & Dev",
        icon: React.createElement(lu_1.LuCloud, { className: "h-4 w-4" }),
        items: [
            { name: "Azure (AZ-204)", level: 3 },
            { name: "Docker (basics)", level: 3 },
            { name: "Git/GitHub", level: 4 },
        ]
    },
    {
        title: "Mobile",
        icon: React.createElement(lu_1.LuSmartphone, { className: "h-4 w-4" }),
        items: [{ name: "React Native", level: 3 }]
    },
    {
        title: "DX & UI",
        icon: React.createElement(lu_1.LuSparkles, { className: "h-4 w-4" }),
        items: [
            { name: "Clerk/Auth", level: 3 },
            { name: "Design systems", level: 3 },
            { name: "Accessibility", level: 3 },
        ]
    },
];
function Bar(_a) {
    var level = _a.level;
    var pct = (level / 5) * 100;
    return (React.createElement("div", { className: "mt-2 h-1.5 w-full rounded-full bg-black/10 dark:bg-white/10" },
        React.createElement("div", { className: "h-full rounded-full", style: {
                width: pct + "%",
                background: "linear-gradient(90deg, rgba(125,82,250,.75), rgba(56,189,248,.75))"
            } })));
}
function SkillsPanel(_a) {
    var onClose = _a.onClose;
    return (React.createElement("section", { className: "with-accent glass rounded-2xl border p-4 sm:p-5", style: { color: "var(--text)" }, "aria-labelledby": "skills-heading" },
        React.createElement("div", { className: "mb-3 flex items-center justify-between" },
            React.createElement("h2", { id: "skills-heading", className: "text-base sm:text-lg font-semibold" }, "Skills snapshot"),
            onClose && (React.createElement("button", { onClick: onClose, className: "rounded-full border px-2.5 py-1 text-xs opacity-80 hover:opacity-100", style: { borderColor: "var(--ring)", background: "var(--card)" } }, "Close"))),
        React.createElement("div", { className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3" }, GROUPS.map(function (g) { return (React.createElement("div", { key: g.title, className: "rounded-xl border p-3 glass", style: { borderColor: "var(--ring)" } },
            React.createElement("div", { className: "flex items-center gap-2 text-sm font-medium" },
                g.icon,
                g.title),
            React.createElement("ul", { className: "mt-2 space-y-2" }, g.items.map(function (s) { return (React.createElement("li", { key: s.name },
                React.createElement("div", { className: "flex items-center justify-between text-sm" },
                    React.createElement("span", { className: "opacity-90" }, s.name),
                    React.createElement("span", { className: "text-[11px] opacity-60" },
                        s.level,
                        "/5")),
                React.createElement(Bar, { level: s.level }))); })))); }))));
}
exports["default"] = SkillsPanel;
