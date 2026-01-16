"use strict";
exports.__esModule = true;
function StatsBand() {
    var items = [
        { k: "10+", v: "Years Experience" },
        { k: "64+", v: "Completed Project" },
        { k: "151+", v: "Happy Client" },
    ];
    return (React.createElement("section", { id: "about", className: "bg-neutral-900 text-white" },
        React.createElement("div", { className: "mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-14 md:grid-cols-12" },
            React.createElement("div", { className: "md:col-span-7" },
                React.createElement("h2", { className: "text-3xl font-bold" }, "I\u2019M AARUSHI"),
                React.createElement("p", { className: "mt-4 max-w-xl text-sm leading-relaxed text-neutral-300" }, "UI/UX designer and full-stack developer focused on clean design systems, micro-interactions, and performance. I blend product thinking with code to ship polished web & mobile apps.")),
            React.createElement("ul", { className: "grid grid-cols-3 gap-4 md:col-span-5" }, items.map(function (it) { return (React.createElement("li", { key: it.v, className: "rounded-lg bg-white/5 p-4 ring-1 ring-white/10" },
                React.createElement("div", { className: "text-2xl font-extrabold" }, it.k),
                React.createElement("div", { className: "text-xs text-neutral-300" }, it.v))); })))));
}
exports["default"] = StatsBand;
