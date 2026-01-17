"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className=""
    >
      {/* neutral, premium background (no color) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(0,0,0,0.06),transparent_60%)] dark:bg-[radial-gradient(60%_40%_at_50%_0%,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="absolute left-6 top-10 h-28 w-28 opacity-[0.06] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:12px_12px] dark:opacity-[0.12]" />
        <div className="absolute right-8 bottom-10 h-24 w-24 opacity-[0.06] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:12px_12px] dark:opacity-[0.12]" />
      </div>

      <div className="grid items-start gap-10 lg:grid-cols-2">
        {/* LEFT: image card */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
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

              {/* subtle vignette for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent" />
            </div>

            {/* caption */}
            <div className="flex items-center justify-between px-5 py-4">
              <div className="flex flex-col">
                <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                  Aarushi Daksh
                </p>
                <p className="text-xs text-neutral-600 dark:text-neutral-300">
                  Full-Stack • Product UI • GenAI
                </p>
              </div>

              <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold bg-black/5 dark:bg-white/10 text-neutral-700 dark:text-neutral-200 ring-1 ring-black/10 dark:ring-white/10">
                Available
                <span className="h-2 w-2 rounded-full bg-neutral-900/60 dark:bg-white/70" />
              </span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: text */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
          className="relative"
        >
          {/* label */}
          <div className="inline-flex items-center gap-3">
            <span className="h-[9px] w-[9px] rounded-full bg-neutral-900/60 dark:bg-white/70" />
            <p className="text-xs font-bold tracking-[0.28em] text-neutral-500 dark:text-neutral-400">
              ABOUT
            </p>
          </div>

          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white">
            I build clean, reliable products — not just pages.
          </h2>

          {/* neutral divider */}
          <div className="mt-4 h-px w-16 bg-black/20 dark:bg-white/20" />

          <p className="mt-5 text-sm sm:text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
  I’m a <span className="font-semibold text-neutral-900 dark:text-white">full-stack developer</span> focused on
  building interfaces that feel smooth and backends that are easy to maintain.
  I care about writing clear code and keeping things practical.
</p>

<p className="mt-3 text-sm sm:text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
  Lately, I’ve been working on real-time features, dashboards, and a few GenAI-based tools as part of my projects.
</p>


          {/* chips */}
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Modern UI (React / Next.js)",
              "APIs & realtime (Node / WebSockets)",
              "GenAI features (RAG / tooling)",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full px-3 py-1 text-xs font-semibold bg-white/70 dark:bg-white/10 text-neutral-700 dark:text-neutral-200 ring-1 ring-black/10 dark:ring-white/10"
              >
                {t}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/#works"
              className="rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-neutral-800 transition dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              View Work
            </a>

          
          </div>
        </motion.div>
      </div>
    </section>
  );
}
