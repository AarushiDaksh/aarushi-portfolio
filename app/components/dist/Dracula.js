"use client";
"use strict";
exports.__esModule = true;
var react_dom_1 = require("react-dom");
var image_1 = require("next/image");
// change this to "orbit" for an oval path
var PATTERN = "eight";
// slower/faster: higher = slower
var DURATION_SEC = 28; // was 15
function DraculaOverlay() {
    if (typeof document === "undefined")
        return null;
    // randomize start position so paths don't sync with hot reloads
    var delay = -Math.random() * DURATION_SEC;
    return react_dom_1.createPortal(React.createElement(React.Fragment, null,
        React.createElement("div", { "data-dracula-fab": true, "aria-hidden": "true", "data-pattern": PATTERN, style: { animationDelay: delay + "s" } },
            React.createElement(image_1["default"], { src: "/photos/d.png", alt: "Dracula", width: 60, height: 60, style: { width: "100%", height: "100%", objectFit: "cover", display: "block" }, priority: true })),
        React.createElement("style", { jsx: true, global: true }, "\n        html:not(.dracula) [data-dracula-fab] { display: none !important; }\n\n        [data-dracula-fab] {\n          position: fixed;\n          width: 60px;\n          height: 60px;\n          z-index: 2147483647;\n          border: 2px solid #fff;\n          border-radius: 50%;\n          overflow: hidden;\n          pointer-events: none;\n          /* slow + smooth */\n          animation-duration: " + DURATION_SEC + "s;\n          animation-timing-function: cubic-bezier(.4, 0, .2, 1);\n          animation-iteration-count: infinite;\n          will-change: transform, top, left;\n        }\n\n        /* Pattern selectors */\n        [data-dracula-fab][data-pattern=\"eight\"] {\n          animation-name: drac-figure-eight;\n        }\n        [data-dracula-fab][data-pattern=\"orbit\"] {\n          animation-name: drac-orbit;\n        }\n\n        /* neutralize global img rules inside badge only */\n        [data-dracula-fab] img {\n          all: unset;\n          display: block;\n          width: 100% !important;\n          height: 100% !important;\n          object-fit: cover;\n        }\n\n        /* Figure-eight path across the screen */\n        @keyframes drac-figure-eight {\n          0%   { top: 20vh; left: 20vw; transform: translate(0, 0) rotate(0deg); }\n          12.5%{ top: 10vh; left: 55vw; transform: translate(0, 0) rotate(15deg); }\n          25%  { top: 20vh; left: 80vw; transform: translate(0, 0) rotate(30deg); }\n          37.5%{ top: 45vh; left: 55vw; transform: translate(0, 0) rotate(15deg); }\n          50%  { top: 70vh; left: 20vw; transform: translate(0, 0) rotate(0deg); }\n          62.5%{ top: 45vh; left: -5vw; transform: translate(0, 0) rotate(-15deg); }\n          75%  { top: 20vh; left: 20vw; transform: translate(0, 0) rotate(-30deg); }\n          87.5%{ top: 45vh; left: 55vw; transform: translate(0, 0) rotate(-15deg); }\n          100% { top: 20vh; left: 20vw; transform: translate(0, 0) rotate(0deg); }\n        }\n\n        /* Soft oval orbit that drifts around */\n        @keyframes drac-orbit {\n          0%   { top: 25vh; left: 65vw; transform: translate(-50%, -50%) }\n          25%  { top: 60vh; left: 75vw; transform: translate(-50%, -50%) }\n          50%  { top: 75vh; left: 35vw; transform: translate(-50%, -50%) }\n          75%  { top: 40vh; left: 15vw; transform: translate(-50%, -50%) }\n          100% { top: 25vh; left: 65vw; transform: translate(-50%, -50%) }\n        }\n\n        /* Respect reduced motion */\n        @media (prefers-reduced-motion: reduce) {\n          [data-dracula-fab] { animation: none; bottom: 20px; right: 20px; }\n        }\n      ")), document.body);
}
exports["default"] = DraculaOverlay;
