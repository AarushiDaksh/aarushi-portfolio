"use client";

import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20"
    >
      {/* soft background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-6 top-10 h-28 w-28 opacity-[0.08] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:12px_12px] dark:opacity-[0.14]" />
        <div className="absolute left-10 bottom-8 h-24 w-24 opacity-[0.08] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:12px_12px] dark:opacity-[0.14]" />
      </div>

      <div className="grid items-center gap-10 lg:grid-cols-2">
        {/* LEFT: image card */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 shadow-lg">
            {/* ✅ controlled height so mobile doesn't become huge */}
            <div className="relative w-full h-[220px] sm:h-[300px] md:h-[320px]">
              <Image
                src="/photos/me2.jpeg"
                alt="About Aarushi"
                fill
                priority
              
                className="object-cover [object-position:center_18%] sm:object-center"

              />
            </div>

            {/* caption strip */}
            <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4">
              <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                Aarushi Daksh
              </p>
              <span className="text-xs font-medium text-neutral-600 dark:text-neutral-300">
                Software • Full-Stack
              </span>
            </div>
          </div>

          {/* ✅ Decorations cause overlap on small screens -> hide on mobile */}
          <div className="hidden sm:block absolute -right-2 -top-2 h-6 w-6 rounded-full bg-[#c5d725] shadow-md" />
          <div className="hidden sm:block absolute -right-8 top-8 h-3 w-3 rounded-full bg-[#c5d725]/90" />
          <div className="hidden sm:block absolute -left-3 -bottom-3 h-10 w-10 rounded-2xl bg-neutral-900/90 dark:bg-white/10" />
        </div>

        {/* RIGHT: text */}
        <div className="relative">
          <div className="inline-flex items-center gap-3">
            <span className="h-[10px] w-[10px] rounded-full bg-[#c5d725]" />
            <p className="text-xs font-bold tracking-[0.28em] text-neutral-500 dark:text-neutral-400">
              WHO AM I
            </p>
          </div>

          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            HELLO
            <span className="ml-3 inline-block align-middle h-[10px] w-12 bg-[#c5d725]" />
          </h2>

          {/* zig-zag decoration */}
          <div className="mt-4 h-[10px] w-44 opacity-60 dark:opacity-40 bg-[linear-gradient(135deg,transparent_75%,#000_0),linear-gradient(225deg,transparent_75%,#000_0)] [background-size:10px_10px] [background-position:0_0,0_5px] dark:[background-image:linear-gradient(135deg,transparent_75%,#fff_0),linear-gradient(225deg,transparent_75%,#fff_0)]" />

          <p className="mt-5 text-sm sm:text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
            I’m a{" "}
            <span className="font-semibold text-neutral-900 dark:text-white">
              software-focused full-stack developer
            </span>{" "}
            who enjoys building clean interfaces and reliable backend systems. I
            treat this portfolio like a lab—experimenting, iterating fast, and
            shipping better solutions every time.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#c5d725] px-4 py-2 text-sm font-extrabold text-neutral-900">
            I BUILD END-TO-END PRODUCTS
          </div>

          <ul className="mt-6 space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
            <li className="flex gap-3">
              <span className="mt-[6px] h-2 w-2 rounded-full bg-neutral-900 dark:bg-white" />
              Frontend that feels smooth and intentional
            </li>
            <li className="flex gap-3">
              <span className="mt-[6px] h-2 w-2 rounded-full bg-neutral-900 dark:bg-white" />
              Backend APIs that are clean, scalable, and testable
            </li>
            <li className="flex gap-3">
              <span className="mt-[6px] h-2 w-2 rounded-full bg-neutral-900 dark:bg-white" />
              Exploring GenAI workflows for smarter product experiences
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/#works"
              className="rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 transition"
            >
              View Work
            </a>
            <a
              href="/twin"
              className="rounded-full px-5 py-2.5 text-sm font-semibold ring-1 ring-black/15 hover:bg-black/5 dark:ring-white/15 dark:hover:bg-white/5 text-neutral-900 dark:text-white transition"
            >
              Meet My Twin
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
