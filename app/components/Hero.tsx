"use client";

import { FaMousePointer } from "react-icons/fa";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { ReactTyped } from "react-typed";

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
          Hello, I’m{" "}
          <span className="bg-pink-600 dark:bg-[#c5d725] text-white dark:text-black ">
            Aarushi Daksh
          </span>
        </p>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-neutral-900 dark:text-white">
          <ReactTyped
            strings={["Full-Stack", "Software"]}
            typeSpeed={200}
            backSpeed={90}
            backDelay={1200}
            startDelay={300}
            smartBackspace
            loop
            showCursor
            cursorChar="|"
          />{" "}
        </h1>

        <h1>
          <span className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-neutral-900 dark:text-white bg-[#c5d725] dark:bg-pink-600 text-white dark:text-black">
            Developer
          </span>
        </h1>

        <div className="mx-auto mt-4 h-px w-24 bg-neutral-200 dark:bg-neutral-800" />

        <p className="mt-6 mx-auto max-w-2xl text-sm md:text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          As a fresher, I’m focused on learning the fundamentals of{" "}
          <span className="font-medium">Full-Stack Development</span> and{" "}
          <span className="font-medium">DSA</span>. I enjoy working in teams,
          learning from mentors, and building simple, working projects that
          strengthen my technical foundation.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {/* Resume button */}
          <a
            href="https://drive.google.com/file/d/1mQ8fJgmyw4VqTS0xgz8KeSe6I9Z_rQu7/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-800 hover:bg-neutral-100 
               dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800 transition-all hover:scale-[1.02]"
          >
            View Resume
          </a>

          {/* Twin button */}
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

export default Hero;
