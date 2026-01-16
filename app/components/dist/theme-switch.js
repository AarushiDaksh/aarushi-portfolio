"use client";
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.ThemeSwitch = exports.ThemeProvider = void 0;
var React = require("react");
var next_themes_1 = require("next-themes");
var next_themes_2 = require("next-themes");
var fa6_1 = require("react-icons/fa6");
var themes = ["light", "dark"];
var LABELS = {
    light: "Dark",
    dark: "Light"
    // dracula: "Dracula",
};
function ThemeProvider(_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React.createElement(next_themes_2.ThemeProvider, __assign({ attribute: "class", defaultTheme: "system", enableSystem: true, themes: themes }, props), children));
}
exports.ThemeProvider = ThemeProvider;
exports.ThemeSwitch = function () {
    var _a;
    var _b = next_themes_1.useTheme(), setTheme = _b.setTheme, theme = _b.theme, resolvedTheme = _b.resolvedTheme;
    var _c = React.useState(false), mounted = _c[0], setMounted = _c[1];
    React.useEffect(function () { return setMounted(true); }, []);
    var currentTheme = ((_a = theme !== null && theme !== void 0 ? theme : resolvedTheme) !== null && _a !== void 0 ? _a : "light");
    var safeIndex = Math.max(0, themes.indexOf(currentTheme));
    var cycleTheme = function () {
        var nextTheme = themes[(safeIndex + 1) % themes.length];
        setTheme(nextTheme);
    };
    if (!mounted) {
        return React.createElement(fa6_1.FaCircleHalfStroke, { className: "h-[14px] w-[14px]", "aria-hidden": "true" });
    }
    return (React.createElement("button", { id: "theme-toggle", "aria-label": "Switch theme (current: " + LABELS[currentTheme] + ")", onClick: cycleTheme, className: "flex items-center justify-center px-2 py-1 rounded hover:opacity-80 transition", type: "button" },
        React.createElement(fa6_1.FaCircleHalfStroke, { className: "h-[14px] w-[14px]" }),
        React.createElement("span", { className: "ml-2" }, LABELS[currentTheme])));
};
