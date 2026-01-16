"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20"
    >
      {/* soft background wash */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-120px] h-[420px] w-[420px] -translate-x-1/2 rounded-full blur-3xl opacity-15 bg-[#c5d725]" />
        <div className="absolute left-[10%] top-[40%] h-[360px] w-[360px] rounded-full blur-3xl opacity-10 bg-pink-500" />
        <div className="absolute right-[8%] top-[25%] h-[360px] w-[360px] rounded-full blur-3xl opacity-10 bg-sky-400" />
      </div>

      <div className="grid items-start gap-10 lg:grid-cols-2">
        {/* LEFT: image */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur shadow-xl">
            <div className="relative w-full h-[240px] sm:h-[320px] md:h-[360px]">
              <Image
                src="/photos/me2.jpeg"
                alt="About Aarushi"
                fill
                priority
                className="object-cover [object-position:center_18%] sm:object-center"
              />
              {/* subtle gradient for premium depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>

            {/* caption bar */}
            <div className="flex items-center justify-between px-5 py-4">
              <div className="flex flex-col">
                <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                  Aarushi Daksh
                </p>
                <p className="text-xs text-neutral-600 dark:text-neutral-300">
                  Software • Full-Stack • GenAI
                </p>
              </div>

              <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold
                               bg-black/5 dark:bg-white/10 text-neutral-700 dark:text-neutral-200
                               ring-1 ring-black/10 dark:ring-white/10">
                Available
                <span className="h-2 w-2 rounded-full bg-[#c5d725]" />
              </span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: text */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="relative"
        >
          {/* section label */}
          <div className="inline-flex items-center gap-3">
            <span className="h-[10px] w-[10px] rounded-full bg-[#c5d725]" />
            <p className="text-xs font-bold tracking-[0.28em] text-neutral-500 dark:text-neutral-400">
              ABOUT
            </p>
          </div>

          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Building software that feels good to use.
          </h2>

          {/* classy accent line */}
          <div className="mt-4 h-[2px] w-16 rounded-full bg-[#c5d725]" />

          <p className="mt-5 text-sm sm:text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
            I’m a <span className="font-semibold text-neutral-900 dark:text-white">full-stack developer</span> who mixes
            clean UI with reliable backend engineering. I treat this portfolio like a product lab—iterate fast,
            refine details, and ship better every time.
          </p>

          {/* chips */}
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Frontend that feels smooth",
              "Backend APIs that scale",
              "GenAI-powered experiences",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full px-3 py-1 text-xs font-semibold
                           bg-white/70 dark:bg-white/10
                           text-neutral-700 dark:text-neutral-200
                           ring-1 ring-black/10 dark:ring-white/10"
              >
                {t}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/#works"
              className="rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white
                         hover:bg-neutral-800 transition
                         dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              View Work
            </a>
            <a
              href="/twin"
              className="rounded-full px-5 py-2.5 text-sm font-semibold
                         ring-1 ring-black/15 hover:bg-black/5
                         dark:ring-white/15 dark:hover:bg-white/5
                         text-neutral-900 dark:text-white transition"
            >
              Meet My Twin
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
