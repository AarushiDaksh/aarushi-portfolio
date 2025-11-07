"use client";

import Link from "next/link";
import RetroGrid from "./components/RetroGrid";
import { Navbar } from "./components/nav";
import BestWorks from "./components/BestWork";
import { FaMousePointer } from "react-icons/fa";
import Header from "./components/Header";
import Footer from "./components/footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import {ReactTyped} from "react-typed";

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

// export default function HeroTitle() {
//   return (
//     <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-neutral-900 dark:text-white">
//       <span>Full-Stack </span>
//       <span className="inline-block align-baseline rounded-md px-2 bg-[#c5d725] dark:bg-pink-600 text-white dark:text-black">
//         <Typed
//           strings={[
//             "Developer",
//             "Engineer",
//             "Creator",
//             "Innovator",
//           ]}
//           typeSpeed={70}
//           backSpeed={40}
//           loop
//         />
//       </span>
//     </h1>
//   );
// }

 function Hero() {
  return (
    <section className="relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-5xl px-6 py-24 text-center"
      >
        <p className="mb-3 text-[11px] uppercase tracking-[.35em] text-neutral-500 dark:text-neutral-400">
          Hello, I’m <span className="bg-pink-600 dark:bg-[#c5d725] text-white dark:text-black ">Aarushi Daksh</span>
        </p>
        <h1 className="mt-10">
          <span className="text-5xl  sm:text-6xl md:text-7xl font-extrabold leading-tight text-neutral-900 dark:text-white bg-[#c5d725] dark:bg-pink-600 text-white dark:text-black"> 
           Developer
          </span>
        </h1>
            
    <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-neutral-900 dark:text-white">
          <ReactTyped
            strings={["Full-Stack", "Software"]}
            typeSpeed={150}
            backSpeed={60}
            backDelay={1200}
            startDelay={300}
            smartBackspace
            loop
            showCursor
            cursorChar="🖊"
          />{" "}
          
        </h1>

        <div className="mx-auto mt-4 h-px w-24 bg-neutral-200 dark:bg-neutral-800" />
       
        <p className="mt-6 mx-auto max-w-2xl text-sm md:text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          As a fresher, I’m focused on learning the fundamentals of{" "}
          <span className="font-medium">Full-Stack Development</span> and{" "}
          <span className="font-medium">DSA</span>. I enjoy working in teams, learning from mentors,
          and building simple, working projects that strengthen my technical foundation.
        </p>

     <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
  {/* Rectangular Resume Button */}
  <a
    href="https://drive.google.com/file/d/1mQ8fJgmyw4VqTS0xgz8KeSe6I9Z_rQu7/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-md border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-800 hover:bg-neutral-100 
               dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800 transition-all hover:scale-[1.02]"
  >
    View Resume
  </a>

  {/* Rounded Twin Button */}
  <a
    href="/twin"
    className="group inline-flex items-center gap-2 sm:gap-3 rounded-full ring-1 ring-neutral-300 dark:ring-neutral-700 
               px-4 py-2 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-900 
               transition-all hover:scale-[1.03]"
  >
    <span className="relative flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full ring-1 
                     ring-neutral-300 dark:ring-neutral-700 bg-neutral-50 dark:bg-neutral-800">
      <FaMousePointer className="h-3 w-3 sm:h-4 sm:w-4 animate-pulse" />
    </span>
    <span>Meet My Twin</span>
  </a>
</div>

        <div className="mt-6 text-sm text-neutral-500 dark:text-neutral-400">
        </div>
      </motion.div>

      <a
        href="#works"
        className="group absolute left-1/2 bottom-6 -translate-x-1/2 flex flex-col items-center text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
        <span className="text-xs tracking-widest mt-1">Scroll</span>
      </a>
    </section>
  );
}


export default function Page() {
  return (
    <>
      <RetroGrid z={0} strength="subtle" />
      {/* ✅ Hero Section goes on top */}
      <Hero />

      <main className="relative z-10">
        <section className="container mx-auto px-1 sm:px-1 ">
          <div className="grid grid-cols-1 md:grid-cols-[72px,1fr,420px] gap-6 md:gap-10 items-start">
            {/* spacer */}
            <div className="hidden md:block" />
            <Header />

            {/* About */}
            <div>
              {/* <h2 className="text-xl font-bold" style={{ color: "var(--text)" }}>
                About
              </h2>

              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                From prototype to production: I build fast, elegant apps with
                <span style={{ color: "var(--accent-pink)" }}> React/Next.js</span>,
                <span style={{ color: "var(--accent-cyan)" }}> Tailwind</span> and
                <span style={{ color: "var(--accent-green)" }}> React Native</span>.
              </p> */}

              
            </div>

            {/* Decorative spiral card */}
            <div className="flex justify-center items-center w-full">
              <div className="group relative w-[min(92vw,420px)] h-[300px] [perspective:1200px]">
                <SpiralAura className="pointer-events-none absolute inset-0 -z-10" />
                <Sparkles className="pointer-events-none absolute inset-0 -z-10" />
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

      <Footer />
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
