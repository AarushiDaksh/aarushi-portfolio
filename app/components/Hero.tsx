"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative overflow-hidden
        pt-28 pb-14
        sm:pt-32 sm:pb-16
        md:pt-10 md:pb-10
        md:min-h-[95vh] md:flex md:items-center
      "
    >
   

      {/* subtle grid/lines */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.16]">
        <div className="absolute left-1/2 top-16 h-px w-[1100px] -translate-x-1/2 bg-neutral-200 dark:bg-white/10" />
        <div className="absolute left-1/2 top-44 h-px w-[1100px] -translate-x-1/2 bg-neutral-200 dark:bg-white/10" />
        <div className="absolute left-1/2 top-72 h-px w-[1100px] -translate-x-1/2 bg-neutral-200 dark:bg-white/10" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="mx-auto max-w-5xl px-6 text-center"
      >
        {/* badge */}
        <div className="mb-5 flex justify-center">
          <span
            className="
              rounded-full px-4 py-1.5 text-[11px] sm:text-xs font-semibold tracking-wide
              bg-white/70 dark:bg-white/10
              ring-1 ring-black/10 dark:ring-white/15
              text-neutral-700 dark:text-neutral-200
              backdrop-blur
            "
          >
            Software • Full-Stack • GenAI
          </span>
        </div>

        {/* NAME (fixed for mobile) */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          𝘈𝘢𝘳𝘶𝘴𝘩𝘪
        </h1>

        {/* TAGLINE (cleaner mobile layout) */}
        <p className="mt-3 text-lg sm:text-2xl md:text-3xl font-semibold leading-snug text-neutral-900 dark:text-white">
          Developer · Build, design &amp; scale
        </p>

      

        {/* PARA */}
        <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base font-medium leading-relaxed text-neutral-600 dark:text-neutral-300">
          This space is my sandbox for refining ideas, breaking things, and shipping
          better solutions each time.
        </p>

        {/* CTAs (stack on mobile) */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://drive.google.com/file/d/1lzTdyZWCzQ2K5TEghLFpn8M-uIQbPH33/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-full sm:w-auto
              rounded-full px-6 py-3 text-sm font-semibold
              bg-neutral-900 text-white hover:bg-neutral-800
              dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200
              transition
            "
          >
            View Resume
          </a>

          <Link
            href="/#works"
            className="
              w-full sm:w-auto
              rounded-full px-6 py-3 text-sm font-semibold
              ring-1 ring-neutral-300 text-neutral-900 hover:bg-neutral-100
              dark:ring-white/15 dark:text-white dark:hover:bg-white/5
              transition
            "
          >
            See Projects
          </Link>
        </div>

        {/* scroll hint */}
        <a
          href="#about"
          className="mt-10 inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition"
        >
          SCROLL <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
