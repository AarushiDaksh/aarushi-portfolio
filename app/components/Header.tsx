"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaFile } from "react-icons/fa6";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      role="banner"
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all",
        scrolled
          ? "bg-white/80 dark:bg-neutral-900/60 supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/40 backdrop-blur-md ring-1 ring-black/10 dark:ring-white/10 shadow-[0_6px_20px_-10px_rgba(0,0,0,0.6)]"
          : "bg-transparent",
      ].join(" ")}
    >
      {/* Theme accent line */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, var(--c1, #ff52bf), var(--c2, #ffb900), var(--c3, #38bdf8))",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-5">
        {/* Mobile compact, Desktop like before */}
        <div
          className={[
            "flex items-center justify-center gap-3 sm:gap-6 text-center",
            "h-12 sm:h-20 transition-[height,padding]",
          ].join(" ")}
        >
          {/* Brand (centered) */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 min-w-0">
            {/* Avatar: small on mobile, large (like before) on desktop */}
            <div
              aria-hidden
              className={[
                "relative rounded-lg p-[1px] sm:p-[2px] shrink-0",
                scrolled
                  ? "w-8 h-8 sm:w-12 sm:h-12"         // shrink on scroll
                  : "w-9 h-9 sm:w-[84px] sm:h-[84px]", // desktop = previous large size
              ].join(" ")}
              style={{
                background:
                  "conic-gradient(var(--c1, #ff52bf), var(--c2, #ffb900), var(--c3, #38bdf8), var(--c1, #ff52bf))",
              }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-[7px] sm:rounded-[10px] bg-neutral-950">
                <Image
                  src="/photos/13.jpg"
                  alt="Aarushi Daksh"
                  fill
                  className="object-cover select-none"
                  sizes="(max-width: 640px) 36px, 84px"
                  priority
                />
              </div>
            </div>

            <div className="min-w-0 leading-none">
              <h1 className="flex items-center justify-center gap-1.5 sm:gap-2 text-sm sm:text-2xl font-semibold text-neutral-900 dark:text-white">
                <span className="truncate">Aarushi Daksh</span>
                <span className="leading-none" style={{ color: "var(--c1, #ff52bf)" }}>
                  ▶
                </span>
              </h1>
              {/* hide tagline on mobile, show on desktop */}
              <p className="hidden sm:block text-sm text-neutral-600 dark:text-neutral-400">
                Turning caffeine into code.
              </p>
            </div>
          </Link>

          {/* Actions: small on mobile, full size on desktop */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="https://github.com/AarushiDaksh"
              target="_blank"
              aria-label="GitHub"
              className="inline-flex h-8 w-8 sm:h-11 sm:w-11 items-center justify-center rounded-lg
                         ring-1 ring-neutral-300 dark:ring-white/10
                         bg-neutral-100 text-neutral-900 hover:bg-neutral-200
                         dark:bg-white/5 dark:text-white dark:hover:bg-white/10
                         transition-colors duration-200"
            >
              <FaGithub className="h-[16px] w-[16px] sm:h-[20px] sm:w-[20px]" />
            </Link>

            <Link
              href="https://leetcode.com/u/aarushidaksh05/"
              target="_blank"
              aria-label="LeetCode"
              title="LeetCode"
              className="inline-flex h-8 w-8 sm:h-11 sm:w-11 items-center justify-center rounded-lg
                         ring-1 ring-neutral-300 dark:ring-white/10
                         bg-neutral-100 hover:bg-neutral-200
                         dark:bg-white/5 dark:hover:bg-white/10
                         transition-colors duration-200"
              style={{ color: "var(--c2, #ffb900)" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 50 50"
                className="h-[16px] w-[16px] sm:h-[20px] sm:w-[20px]"
              >
                <path d="M38.12 18.45c-2.47-2.47-6.3-2.6-8.9-.42l-3.25 3.22 2.4 2.42 3.25-3.23c1.2-1.08 3.01-1.03 4.2.16 1.17 1.17 1.22 2.98.15 4.2L22.6 38.7c-1.16 1.15-3.03 1.15-4.18 0l-9.11-9.12c-1.15-1.16-1.15-3.03 0-4.18l7.96-7.95a2.91 2.91 0 014.13.02l1.8 1.8 2.4-2.42-1.8-1.8c-2.5-2.49-6.56-2.52-9.05-.02L7.3 25.4a6 6 0 000 8.47l9.12 9.11a6 6 0 008.47 0l13.23-13.23a6.3 6.3 0 000-8.89z" />
              </svg>
            </Link>

            {/* Desktop-only Resume button (as before) */}
            <Link
              href="https://drive.google.com/file/d/1pF-kAe8BXIsKgUyti3nHPXKceynd89WR/view?usp=sharing"
              target="_blank"
              className="relative hidden sm:inline-flex items-center gap-2 rounded-lg p-[1.5px]"
              style={{
                background:
                  "linear-gradient(120deg, var(--c1, #ff52bf), var(--c2, #ffb900), var(--c3, #38bdf8))",
              }}
            >
              <span className="inline-flex items-center gap-2 rounded-[10px]
                               bg-white text-neutral-900
                               dark:bg-neutral-950 dark:text-white
                               px-3.5 py-2 text-sm font-semibold
                               ring-1 ring-neutral-300 dark:ring-white/10
                               hover:bg-neutral-100 dark:hover:bg-neutral-900
                               transition-colors duration-200">
                <FaFile className="h-4 w-4" /> Resume
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
