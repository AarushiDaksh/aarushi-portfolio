"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var stats = [
    { value: "55,000+", label: "Impressions", sub: "LinkedIn · last 60 days" },
    { value: "10+", label: "Projects", sub: "End-to-end builds" },
];
function AboutBoard() {
    return (React.createElement("section", { className: "w-full" },
        React.createElement("div", { className: "relative rounded-3xl border border-black/10 bg-white p-4 sm:p-6 overflow-hidden" },
            React.createElement("div", { className: "pointer-events-none absolute inset-0 opacity-[0.55]", style: {
                    backgroundImage: "radial-gradient(rgba(0,0,0,0.10) 1px, transparent 1px)",
                    backgroundSize: "16px 16px"
                } }),
            React.createElement("div", { className: "pointer-events-none absolute -left-24 top-0 h-full w-24 opacity-[0.06] [background-image:repeating-linear-gradient(135deg,black_0px,black_2px,transparent_2px,transparent_12px)]" }),
            React.createElement("div", { className: "pointer-events-none absolute -right-24 top-0 h-full w-24 opacity-[0.06] [background-image:repeating-linear-gradient(135deg,black_0px,black_2px,transparent_2px,transparent_12px)]" }),
            React.createElement("div", { className: "relative grid gap-4 lg:gap-6 lg:grid-cols-12" },
                React.createElement("div", { className: "lg:col-span-4 space-y-4 lg:space-y-6" },
                    React.createElement(Card, { title: "Recent Favorite" },
                        React.createElement("p", { className: "text-sm leading-6 text-black/70" },
                            "I'm listening to",
                            " ",
                            React.createElement("span", { className: "font-medium text-black" }, "That'll Be The Day"),
                            " ",
                            "by Shawn Mendes from the album",
                            " ",
                            React.createElement("span", { className: "font-medium text-black" }, "Shawn"),
                            "."),
                        React.createElement("div", { className: "mt-4 relative h-[200px] w-full overflow-hidden rounded-2xl border border-black/10 bg-black/[0.03]" },
                            React.createElement(image_1["default"], { src: "/placeholder/album.jpg", alt: "Recent favorite", fill: true, className: "object-cover", sizes: "(max-width: 1024px) 100vw, 33vw" }))),
                    React.createElement(Card, { title: "Stats" },
                        React.createElement("div", { className: "grid grid-cols-2 gap-3" }, stats.map(function (s) { return (React.createElement("div", { key: s.label, className: "rounded-2xl border border-black/10 bg-white p-4 shadow-[0_1px_0_rgba(0,0,0,0.04)]" },
                            React.createElement("div", { className: "text-2xl font-semibold text-black" }, s.value),
                            React.createElement("div", { className: "mt-2 text-xs font-medium text-black/70" }, s.label),
                            React.createElement("div", { className: "mt-1 text-[11px] text-black/50" }, s.sub))); })))),
                React.createElement("div", { className: "lg:col-span-5 space-y-4 lg:space-y-6" },
                    React.createElement(Card, { title: "Hackathons \uD83C\uDFC6" },
                        React.createElement("div", { className: "flex flex-wrap items-center gap-3" },
                            React.createElement(PillLogo, { text: "Nexify Hackathon 2025" }),
                            React.createElement(PillLogo, { text: "HK" }),
                            React.createElement(PillLogo, { text: "Code K Manipal" }))),
                    React.createElement(Card, { title: "", className: "min-h-[320px]" },
                        React.createElement("div", { className: "flex h-full flex-col items-center justify-center py-6" },
                            React.createElement("div", { className: "relative w-full max-w-[520px]" },
                                React.createElement("div", { className: "flex items-center justify-between gap-3 px-2" }, Array.from({ length: 5 }).map(function (_, i) { return (React.createElement("div", { key: i, className: "h-[86px] w-[86px] rounded-full border border-black/10 bg-white shadow-[0_6px_20px_rgba(0,0,0,0.06)]" })); })),
                                React.createElement("div", { className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" },
                                    React.createElement("div", { className: "relative h-[84px] w-[84px] overflow-hidden rounded-full border-[6px] border-white shadow-[0_10px_30px_rgba(0,0,0,0.12)]" },
                                        React.createElement(image_1["default"], { src: "/placeholder/me.jpg", alt: "You", fill: true, className: "object-cover", sizes: "84px" })),
                                    React.createElement("div", { className: "mt-5 text-center" },
                                        React.createElement("div", { className: "text-sm font-semibold text-black" }, "Connections"),
                                        React.createElement("p", { className: "mt-2 max-w-[360px] text-xs leading-5 text-black/60" }, "An evolving list of people I've met and those I wish to meet."))))))),
                React.createElement("div", { className: "lg:col-span-3" },
                    React.createElement(Card, { title: "Currently Watching", className: "h-full" },
                        React.createElement("div", { className: "relative mt-2 h-[420px] w-full overflow-hidden rounded-2xl border border-black/10 bg-black/[0.03]" },
                            React.createElement(image_1["default"], { src: "/placeholder/anime.jpg", alt: "Currently watching", fill: true, className: "object-cover", sizes: "(max-width: 1024px) 100vw, 25vw" }))))))));
}
exports["default"] = AboutBoard;
/* ---------- small UI helpers ---------- */
function Card(_a) {
    var title = _a.title, children = _a.children, _b = _a.className, className = _b === void 0 ? "" : _b;
    return (React.createElement("div", { className: [
            "relative rounded-3xl border border-black/10 bg-white/90",
            "shadow-[0_1px_0_rgba(0,0,0,0.04)]",
            "backdrop-blur-sm",
            className,
        ].join(" ") },
        title ? (React.createElement("div", { className: "px-5 pt-5 text-sm font-semibold text-black" }, title)) : null,
        React.createElement("div", { className: title ? "px-5 pb-5 pt-4" : "p-5" }, children)));
}
function PillLogo(_a) {
    var text = _a.text;
    return (React.createElement("div", { className: "rounded-2xl border border-black/10 bg-white px-4 py-2 text-sm font-medium text-black shadow-[0_6px_18px_rgba(0,0,0,0.06)]" }, text));
}
