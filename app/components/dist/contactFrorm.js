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
var react_hook_form_1 = require("react-hook-form");
var zod_1 = require("@hookform/resolvers/zod");
var zod_2 = require("zod");
var schema = zod_2.z.object({
    name: zod_2.z.string().min(2, "Name must be at least 2 characters"),
    email: zod_2.z.string().email("Please enter a valid email address"),
    message: zod_2.z.string().min(10, "Message must be at least 10 characters")
});
function ContactForm() {
    var _this = this;
    var _a = react_1.useState(false), isSubmitting = _a[0], setIsSubmitting = _a[1];
    var _b = react_1.useState("idle"), formStatus = _b[0], setFormStatus = _b[1];
    var _c = react_hook_form_1.useForm({
        resolver: zod_1.zodResolver(schema)
    }), register = _c.register, handleSubmit = _c.handleSubmit, reset = _c.reset, errors = _c.formState.errors;
    var onSubmit = function (data) { return __awaiter(_this, void 0, void 0, function () {
        var res, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    setIsSubmitting(true);
                    setFormStatus("idle");
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, fetch("/api/contact", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(data)
                        })];
                case 2:
                    res = _b.sent();
                    if (res.ok) {
                        setFormStatus("success");
                        reset();
                    }
                    else {
                        setFormStatus("error");
                    }
                    return [3 /*break*/, 5];
                case 3:
                    _a = _b.sent();
                    setFormStatus("error");
                    return [3 /*break*/, 5];
                case 4:
                    setIsSubmitting(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: "mt-14" },
        React.createElement("h2", { className: "text-xl mb-6 text-center text-neutral-800 dark:text-neutral-200" }, "\uD83E\uDD1D Let's Connect"),
        formStatus !== "idle" && (React.createElement("div", { className: "text-center mb-4 px-4 py-2 text-sm rounded max-w-xl mx-auto border " + (formStatus === "success"
                ? "bg-white text-black border-black dark:bg-zinc-900 dark:text-white dark:border-white"
                : "bg-white text-black border-black dark:bg-zinc-900 dark:text-white dark:border-white") }, formStatus === "success"
            ? "Your message has been sent!"
            : "Failed to send message. Please try again.")),
        React.createElement("form", { onSubmit: handleSubmit(onSubmit), className: "max-w-xl mx-auto space-y-4" },
            React.createElement("input", __assign({ type: "text", placeholder: "Your Name" }, register("name"), { className: "w-full px-4 py-2 text-sm border rounded bg-white dark:bg-zinc-900 text-black dark:text-white" })),
            errors.name && (React.createElement("p", { className: "text-red-500 text-sm" }, errors.name.message)),
            React.createElement("input", __assign({ type: "email", placeholder: "Your Email" }, register("email"), { className: "w-full px-4 py-2 text-sm border rounded bg-white dark:bg-zinc-900 text-black dark:text-white" })),
            errors.email && (React.createElement("p", { className: "text-red-500 text-sm" }, errors.email.message)),
            React.createElement("textarea", __assign({ placeholder: "Your Message - lets connect and  work together", rows: 4 }, register("message"), { className: "w-full px-4 py-2 text-sm border rounded bg-white dark:bg-zinc-900 text-black dark:text-white" })),
            errors.message && (React.createElement("p", { className: "text-red-500 text-sm" }, errors.message.message)),
            React.createElement("button", { type: "submit", disabled: isSubmitting, className: "w-full text-sm px-4 py-2 rounded bg-gradient-to-r from-orange-400 to-orange-500 text-white hover:shadow-md hover:shadow-orange-300/30 transition" }, isSubmitting ? "Sending..." : "Send Message"))));
}
exports["default"] = ContactForm;
