"use client";

import Link from "next/link";
import RetroGrid from "./components/RetroGrid";
import { Navbar } from "./components/nav";
import BestWorks from "./components/BestWork";
import { FaMousePointer } from "react-icons/fa";

/* Spiral Aura */
function SpiralAura({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden>
      <defs>
        <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.6" />
        </filter>
        <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--accent-pink)" />
          <stop offset="100%" stopColor="var(--accent-cyan)" />
        </linearGradient>
        <linearGradient id="g2" x1="1" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--accent-green)" />
          <stop offset="100%" stopColor="var(--accent-pink)" />
        </linearGradient>
      </defs>

      <g className="animate-spin-slower" style={{ transformOrigin: "50% 50%" }}>
        <path
          d={genSpiralPath(48, 5.2)}
          fill="none"
          stroke="url(#g1)"
          strokeOpacity="0.38"
          strokeWidth="0.8"
          filter="url(#soft)"
        />
      </g>
      <g className="animate-spin-slower-rev" style={{ transformOrigin: "50% 50%" }}>
        <path
          d={genSpiralPath(36, 6.5)}
          fill="none"
          stroke="url(#g2)"
          strokeOpacity="0.35"
          strokeWidth="0.7"
          filter="url(#soft)"
        />
      </g>
    </svg>
  );
}

/* Spiral path generator */
function genSpiralPath(radius: number, turns: number) {
  const pts: string[] = [];
  const steps = 420;
  const b = radius / (turns * 2 * Math.PI);
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * (turns * 2 * Math.PI);
    const r = b * t;
    const x = 50 + r * Math.cos(t);
    const y = 50 + r * Math.sin(t);
    pts.push(`${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`);
  }
  return pts.join(" ");
}

/* Sparkles */
function Sparkles({ className = "" }: { className?: string }) {
  return <div className={`twinkles ${className}`} aria-hidden />;
}

export default function Page() {
  return (
    <>
      <RetroGrid z={0} strength="subtle" />

      <main className="relative z-10">
        <section className="container mx-auto px-1 sm:px-1 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-[72px,1fr,420px] gap-6 md:gap-10 items-start">
            {/* spacer */}
            <div className="hidden md:block" />

            {/* About copy */}
            <div>
                <h2
              className=" text-xl font-bold"
              style={{ color: "var(--text)" }}
            >
            About
            </h2>

              <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                From prototype to production: I build fast, elegant apps with
                <span style={{ color: "var(--accent-pink)" }}> React/Next.js</span>,
                <span style={{ color: "var(--accent-cyan)" }}> Tailwind</span> and
                <span style={{ color: "var(--accent-green)" }}> React Native</span>.
              </p>

              {/* Scroll button */}
<div className="mt-8">
  <a
    href="#works"
    className="group inline-flex items-center gap-2 sm:gap-3 rounded-full ring-1 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium transition-all hover:scale-[1.02]"
    style={{
      borderColor: "var(--ring)",
      color: "var(--text)",
      background: "var(--control, transparent)",
    }}
  >
    <span
      className="relative flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full ring-1"
      style={{ borderColor: "var(--ring)", background: "var(--control)" }}
    >
      <FaMousePointer className="h-3 w-3 sm:h-4 sm:w-4 animate-pulse" />
    </span>
    <span>Scroll to Best Works</span>
  </a>
</div>



            </div>

            {/* Decorative spiral card (no image) */}
<div className="flex justify-center items-center w-full">
  <div className="group relative w-[min(92vw,420px)] h-[300px] [perspective:1200px]">
    <SpiralAura className="pointer-events-none absolute inset-0 -z-10" />
    <Sparkles className="pointer-events-none absolute inset-0 -z-10" />

    {/* CLI message */}
    <div>
     
    </div>
  </div>
</div>

          </div>

          {/* Works */}
          <div id="works" className="scroll-mt-28 mt-16 sm:mt-20">
            <BestWorks />
          </div>

          <div className="mt-12">
            <Navbar />
          </div>
        </section>
      </main>

      <a
        href="https://maniac-ten.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        title="Go to Maniac App"
        className="bug-wave text-3xl mr-2 fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-black text-white p-3 rounded-full shadow-lg transition duration-300 hover:bg-pink-600 hover:scale-110"
      >
        🐞
      </a>

      {/* Theme variables */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        /* Light theme */
        :root {
          --text: #1f2328;
          --text-muted: #57606a;

          --accent-pink: #ff52bf;
          --accent-cyan: #38bdf8;
          --accent-green: #22c55e;

          --ring: rgba(0, 0, 0, 0.12);
          --control: #f6f8fa;
          --rail: rgba(0, 0, 0, 0.04);
        }

        /* Dark theme */
        .dark {
          --text: #e6edf3;
          --text-muted: #9da7b1;

          --accent-pink: #ff79c6;
          --accent-cyan: #8be9fd;
          --accent-green: #50fa7b;

          --ring: rgba(255, 255, 255, 0.14);
          --control: rgba(255, 255, 255, 0.06);
          --rail: rgba(255, 255, 255, 0.06);
        }

        /* Dracula theme */
        .dracula {
          --text: #f8f8f2;
          --text-muted: #cfcfe6;

          --accent-pink: #ff79c6;
          --accent-cyan: #8be9fd;
          --accent-green: #50fa7b;

          --ring: rgba(189, 147, 249, 0.45);
          --control: rgba(68, 71, 90, 0.6);
          --rail: rgba(68, 71, 90, 0.6);
        }

        /* Animations */
        @keyframes spin-slower {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-slower-rev {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
        .animate-spin-slower {
          animation: spin-slower 18s linear infinite;
        }
        .animate-spin-slower-rev {
          animation: spin-slower-rev 22s linear infinite;
        }

        .twinkles {
          --twinkle: radial-gradient(circle, #fff 0 1px, transparent 1.5px);
          background-image: var(--twinkle), var(--twinkle), var(--twinkle),
            var(--twinkle), var(--twinkle);
          background-repeat: no-repeat;
          background-position: 12% 22%, 78% 18%, 86% 72%, 28% 84%, 50% 50%;
          background-size: 3px 3px, 2.5px 2.5px, 3px 3px, 2px 2px, 2.5px 2.5px;
          opacity: 0.7;
          animation: twinkle-move 8s ease-in-out infinite alternate;
        }
        @keyframes twinkle-move {
          from {
            transform: translateY(-2px);
            opacity: 0.55;
          }
          to {
            transform: translateY(2px);
            opacity: 0.85;
          }
        }
      `}</style>
    </>
  );
}
