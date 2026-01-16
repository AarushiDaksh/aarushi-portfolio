"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
// components/RetroGrid.tsx
function RetroGrid(_a) {
    var _b;
    var _c = _a.size, size = _c === void 0 ? 48 : _c, // px per cell
    _d = _a.line, // px per cell
    line = _d === void 0 ? 1 : _d, // px line thickness
    _e = _a.strength, // px line thickness
    strength = _e === void 0 ? "subtle" : _e, // "subtle" | "medium" | "bold"
    _f = _a.z, // "subtle" | "medium" | "bold"
    z = _f === void 0 ? 0 : _f;
    var alpha = strength === "bold" ? 0.16 : strength === "medium" ? 0.10 : 0.06;
    // Pass grid vars to CSS; themes will set --grid-rgba/--grid-alpha defaults
    var vars = (_b = {},
        // sizing
        _b["--grid-size"] = size + "px",
        _b["--grid-line"] = line + "px",
        // base alpha from prop; theme can override by redefining --grid-alpha
        _b["--grid-alpha"] = alpha,
        _b);
    var layer = {
        backgroundImage: "linear-gradient(to right, rgba(var(--grid-rgba, 0,0,0), var(--grid-alpha)) var(--grid-line), transparent var(--grid-line))," +
            "linear-gradient(to bottom, rgba(var(--grid-rgba, 0,0,0), var(--grid-alpha)) var(--grid-line), transparent var(--grid-line))",
        backgroundSize: "var(--grid-size) var(--grid-size)",
        backgroundPosition: "0 0"
    };
    return (React.createElement("div", { className: "retro-grid fixed inset-0 pointer-events-none", style: __assign({ zIndex: z }, vars), "aria-hidden": true },
        React.createElement("div", { className: "absolute inset-0", style: layer })));
}
exports["default"] = RetroGrid;
