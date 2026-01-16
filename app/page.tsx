"use client";

import Link from "next/link";
import RetroGrid from "./components/RetroGrid";
import { Navbar } from "./components/nav";
import BestWorks from "./components/BestWork";
import { FaMousePointer } from "react-icons/fa";
import Header from "./components/Header";
import Footer from "./components/footer";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion"; // ⬅️ update
import { ArrowDown } from "lucide-react";
import { ReactTyped } from "react-typed";
import Hero from "./components/Hero";

import BotLauncher from "./components/bot";

import About from "./components/about";
import Highlights from "./components/highlights";
import ScrollToTop from "./components/scrolltotop";


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
   
      <div className="">
      <Hero />
      </div>

      <main className="relative z-10 ">
        <section className="container mx-auto px-1 sm:px-1 ">
          <div className="grid grid-cols-1 md:grid-cols-[72px,1fr,420px] gap-6 md:gap-10 items-start">
            {/* spacer */}
            <div className="hidden md:block" />
           

          
            <div>
             
              
            </div>

            {/* Decorative spiral card */}
            <div className="flex justify-center items-center w-full">
              <div className="group relative w-[min(92vw,420px)] h-[300px] [perspective:1200px]">
                <SpiralAura className="pointer-events-none absolute inset-0 -z-10" />
                <Sparkles className="pointer-events-none absolute inset-0 -z-10" />
              </div>
            </div>
          </div>
          <div className="about" id="about">
          <About />
          </div>
          {/* Works */}
          <div id="works" className="scroll-mt-28 mt-16 sm:mt-20">
            <BestWorks />
          </div>
          <Highlights />
          {/* Navbar */}
          <section className="mb-20 mt-16 sm:mt-20">

          <div className="mt-12">
            <Navbar />
          </div>
        </section>
      </section>
      </main>

      <div className="mb-15">
             <Footer />
             <BotLauncher />
             <ScrollToTop />
      </div>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

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
