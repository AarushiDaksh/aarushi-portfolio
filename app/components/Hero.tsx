"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f4ef] dark:bg-neutral-900">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 py-16 md:grid-cols-12 md:py-20">
        {/* Big Headline */}
        <div className="order-2 md:order-1 md:col-span-7">
          <p className="mb-2 text-xs font-semibold tracking-[.25em] text-neutral-500">HELLO</p>
          <h1 className="leading-[0.9] text-5xl sm:text-6xl md:text-7xl font-extrabold text-black dark:text-white">
            I’M A UI/UX
            <br />
            <span className="relative inline-block">
              DESIGNER
              {/* outline style like reference */}
              <span className="absolute inset-0 -z-10 select-none text-transparent [text-stroke:1.5px_black] dark:[text-stroke:1.5px_white]">
                DESIGNER
              </span>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
            Passionate UI/UX & Frontend dev crafting fast, accessible interfaces with
            React/Next.js, Tailwind, and React Native. I turn ideas into delightful,
            production-ready experiences.
          </p>
        </div>

        {/* Photo / Accent */}
        <div className="order-1 md:order-2 md:col-span-5">
          <div className="relative mx-auto aspect-[3/4] w-64 sm:w-72 md:w-80">
            {/* Accent shape */}
            <div className="absolute -left-6 top-6 h-24 w-24 rotate-12 rounded-lg bg-orange-400/90 blur-[1px]" />
            {/* Replace with your headshot */}
            <Image
              src="/photos/aa.png"
              alt="Aarushi portrait"
              fill
              className="rounded-xl object-cover grayscale"
              priority
            />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="group absolute left-1/2 top-full z-10 -mt-6 -translate-x-1/2"
        aria-label="Scroll down"
      >
        <div className="grid h-14 w-14 place-items-center rounded-full border bg-white/90 text-xs font-semibold
                        border-black/10 shadow-sm backdrop-blur
                        dark:bg-neutral-900/80 dark:border-white/15">
          0
          <span className="absolute text-[10px] tracking-widest text-neutral-500 group-hover:animate-spin-slow">
            SCROLL • DOWN • SCROLL • DOWN •
          </span>
        </div>
      </a>
    </section>
  );
}
