"use client";

import { createPortal } from "react-dom";
import Image from "next/image";

// change this to "orbit" for an oval path
const PATTERN: "eight" | "orbit" = "eight";
// slower/faster: higher = slower
const DURATION_SEC = 28; // was 15

export default function DraculaOverlay() {
  if (typeof document === "undefined") return null;

  // randomize start position so paths don't sync with hot reloads
  const delay = -Math.random() * DURATION_SEC;

  return createPortal(
    <>
      <div
        data-dracula-fab
        aria-hidden="true"
        data-pattern={PATTERN}
        style={{ animationDelay: `${delay}s` }}
      >
        <Image
          src="/photos/d.png"
          alt="Dracula"
          width={60}
          height={60}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          priority
        />
      </div>

      <style jsx global>{`
        html:not(.dracula) [data-dracula-fab] { display: none !important; }

        [data-dracula-fab] {
          position: fixed;
          width: 60px;
          height: 60px;
          z-index: 2147483647;
          border: 2px solid #fff;
          border-radius: 50%;
          overflow: hidden;
          pointer-events: none;
          /* slow + smooth */
          animation-duration: ${DURATION_SEC}s;
          animation-timing-function: cubic-bezier(.4, 0, .2, 1);
          animation-iteration-count: infinite;
          will-change: transform, top, left;
        }

        /* Pattern selectors */
        [data-dracula-fab][data-pattern="eight"] {
          animation-name: drac-figure-eight;
        }
        [data-dracula-fab][data-pattern="orbit"] {
          animation-name: drac-orbit;
        }

        /* neutralize global img rules inside badge only */
        [data-dracula-fab] img {
          all: unset;
          display: block;
          width: 100% !important;
          height: 100% !important;
          object-fit: cover;
        }

        /* Figure-eight path across the screen */
        @keyframes drac-figure-eight {
          0%   { top: 20vh; left: 20vw; transform: translate(0, 0) rotate(0deg); }
          12.5%{ top: 10vh; left: 55vw; transform: translate(0, 0) rotate(15deg); }
          25%  { top: 20vh; left: 80vw; transform: translate(0, 0) rotate(30deg); }
          37.5%{ top: 45vh; left: 55vw; transform: translate(0, 0) rotate(15deg); }
          50%  { top: 70vh; left: 20vw; transform: translate(0, 0) rotate(0deg); }
          62.5%{ top: 45vh; left: -5vw; transform: translate(0, 0) rotate(-15deg); }
          75%  { top: 20vh; left: 20vw; transform: translate(0, 0) rotate(-30deg); }
          87.5%{ top: 45vh; left: 55vw; transform: translate(0, 0) rotate(-15deg); }
          100% { top: 20vh; left: 20vw; transform: translate(0, 0) rotate(0deg); }
        }

        /* Soft oval orbit that drifts around */
        @keyframes drac-orbit {
          0%   { top: 25vh; left: 65vw; transform: translate(-50%, -50%) }
          25%  { top: 60vh; left: 75vw; transform: translate(-50%, -50%) }
          50%  { top: 75vh; left: 35vw; transform: translate(-50%, -50%) }
          75%  { top: 40vh; left: 15vw; transform: translate(-50%, -50%) }
          100% { top: 25vh; left: 65vw; transform: translate(-50%, -50%) }
        }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          [data-dracula-fab] { animation: none; bottom: 20px; right: 20px; }
        }
      `}</style>
    </>,
    document.body
  );
}
