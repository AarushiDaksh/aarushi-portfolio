"use client";
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var fa_1 = require("react-icons/fa");
function RockContactForm() {
    var _a = react_1.useState(false), loading = _a[0], setLoading = _a[1];
    var _b = react_1.useState(null), msg = _b[0], setMsg = _b[1];
    function onSubmit(e) {
        return __awaiter(this, void 0, void 0, function () {
            var form, fd, payload, res, data, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e.preventDefault();
                        form = e.currentTarget;
                        setLoading(true);
                        setMsg(null);
                        fd = new FormData(form);
                        payload = {
                            name: String(fd.get("name") || ""),
                            email: String(fd.get("email") || ""),
                            subject: String(fd.get("subject") || ""),
                            message: String(fd.get("message") || "")
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, 5, 6]);
                        return [4 /*yield*/, fetch("/api/contact", {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify(payload)
                            })];
                    case 2:
                        res = _a.sent();
                        return [4 /*yield*/, res.json()];
                    case 3:
                        data = _a.sent();
                        if (!res.ok || !(data === null || data === void 0 ? void 0 : data.success)) {
                            throw new Error((data === null || data === void 0 ? void 0 : data.error) || "Failed to send message.");
                        }
                        form.reset();
                        setMsg({ type: "ok", text: "Thanks! Your message has been sent." });
                        return [3 /*break*/, 6];
                    case 4:
                        err_1 = _a.sent();
                        setMsg({ type: "err", text: (err_1 === null || err_1 === void 0 ? void 0 : err_1.message) || "Something went wrong." });
                        return [3 /*break*/, 6];
                    case 5:
                        setLoading(false);
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    }
    return (React.createElement("div", { className: "\r\n        relative overflow-hidden rounded-3xl border\r\n        border-neutral-200/80 dark:border-neutral-800/80\r\n        bg-gradient-to-br from-white/80 via-white/60 to-white/80\r\n        dark:from-black/40 dark:via-black/30 dark:to-black/40\r\n        backdrop-blur-md p-6 sm:p-8\r\n      " },
        React.createElement("div", { className: "pointer-events-none absolute -top-24 -left-16 h-56 w-56 rounded-full blur-3xl", style: { background: "radial-gradient(closest-side, var(--c1), transparent 70%)", opacity: 0.18 } }),
        React.createElement("div", { className: "pointer-events-none absolute -bottom-20 -right-16 h-56 w-56 rounded-full blur-3xl", style: { background: "radial-gradient(closest-side, var(--c3), transparent 70%)", opacity: 0.18 } }),
        React.createElement("div", { className: "mb-6" },
            React.createElement("h3", { className: "text-2xl font-semibold tracking-tight  dark:text-white" }, "Contact Me"),
            React.createElement("p", { className: "mt-1 text-sm text-neutral-600 dark:text-neutral-400" }, "I\u2019m available to discuss collaborations, freelance work, or any project ideas you have in mind.")),
        React.createElement("form", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2", onSubmit: onSubmit },
            React.createElement("label", { className: "\r\n            group col-span-1 flex items-center gap-2 rounded-2xl border\r\n            border-neutral-200/70 dark:border-neutral-800/70\r\n            bg-white/70 dark:bg-neutral-900/40 px-3 py-3\r\n            focus-within:ring-2 focus-within:ring-[rgb(var(--ring-focus))]/50\r\n          " },
                React.createElement(fa_1.FaUser, { className: "h-5 w-5 opacity-80" }),
                React.createElement("input", { name: "name", required: true, placeholder: "Your name", className: "w-full bg-transparent text-sm outline-none placeholder:text-neutral-400 dark:placeholder:text-neutral-500" })),
            React.createElement("label", { className: "\r\n            group col-span-1 flex items-center gap-2 rounded-2xl border\r\n            border-neutral-200/70 dark:border-neutral-800/70\r\n            bg-white/70 dark:bg-neutral-900/40 px-3 py-3\r\n            focus-within:ring-2 focus-within:ring-[rgb(var(--ring-focus))]/50\r\n          " },
                React.createElement(fa_1.FaEnvelope, { className: "h-5 w-5 opacity-80" }),
                React.createElement("input", { type: "email", name: "email", required: true, placeholder: "Email address", className: "w-full bg-transparent text-sm outline-none placeholder:text-neutral-400 dark:placeholder:text-neutral-500" })),
            React.createElement("label", { className: "\r\n            group col-span-1 sm:col-span-2 flex items-center gap-2 rounded-2xl border\r\n            border-neutral-200/70 dark:border-neutral-800/70\r\n            bg-white/70 dark:bg-neutral-900/40 px-3 py-3\r\n            focus-within:ring-2 focus-within:ring-[rgb(var(--ring-focus))]/50\r\n          " },
                React.createElement(fa_1.FaRegCommentDots, { className: "h-5 w-5 opacity-80" }),
                React.createElement("input", { name: "subject", placeholder: "Project or Subject", className: "w-full bg-transparent text-sm outline-none placeholder:text-neutral-400 dark:placeholder:text-neutral-500" })),
            React.createElement("div", { className: "col-span-1 sm:col-span-2" },
                React.createElement("textarea", { name: "message", required: true, rows: 5, placeholder: "Tell me about the idea, timeline, and scope\u2026", className: "\r\n              w-full rounded-2xl border border-neutral-200/70 dark:border-neutral-800/70\r\n              bg-white/70 dark:bg-neutral-900/40 px-3 py-3 text-sm outline-none\r\n              placeholder:text-neutral-400 dark:placeholder:text-neutral-500\r\n              focus:ring-2 focus:ring-[rgb(var(--ring-focus))]/50\r\n            " }),
                React.createElement("p", { className: "mt-2 text-xs text-neutral-500 dark:text-neutral-400" }, "I usually respond within 24 hours.")),
            React.createElement("div", { className: "col-span-1 sm:col-span-2 flex items-center justify-between" },
                React.createElement("div", { "aria-live": "polite", className: "text-xs" }, msg && (React.createElement("span", { className: msg.type === "ok" ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400" }, msg.text))),
                React.createElement("button", { type: "submit", disabled: loading, className: "\r\n              relative inline-flex items-center gap-2 rounded-2xl p-[1.5px]\r\n              focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--ring-focus))]/60\r\n              disabled:cursor-not-allowed disabled:opacity-60\r\n              hover:-translate-y-0.5 transition-all\r\n            ", style: { background: "linear-gradient(120deg, var(--c1), var(--c2), var(--c3))" } },
                    React.createElement("span", { className: "\r\n                inline-flex items-center gap-2 rounded-[14px]\r\n                bg-neutral-900 text-white dark:bg-white dark:text-neutral-900\r\n                px-4 py-2 text-sm font-medium\r\n                ring-1 ring-white/10 dark:ring-black/10\r\n                hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors\r\n              " },
                        React.createElement(fa_1.FaPaperPlane, { className: loading ? "h-4 w-4 animate-pulse" : "h-4 w-4" }),
                        loading ? "Sending…" : "Send Message"))))));
}
exports["default"] = RockContactForm;
