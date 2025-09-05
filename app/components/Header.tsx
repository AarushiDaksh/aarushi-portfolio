"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaFile } from "react-icons/fa6";
// import { ThemeSwitch } from "./theme-switch"; // uncomment if you use it

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
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all",
        scrolled
          ? "bg-white/80 dark:bg-neutral-900/60 supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/40 backdrop-blur-md ring-1 ring-black/10 dark:ring-white/10 shadow-[0_6px_20px_-10px_rgba(0,0,0,0.6)]"
          : "bg-transparent",
      ].join(" ")}
      role="banner"
    >
      {/* Theme accent line */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, var(--c1, #ff52bf), var(--c2, #ffb900), var(--c3, #38bdf8))",
        }}
      />

      <div className="mx-auto max-w-7xl px-6">
        <div
          className={[
            "flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-center",
            scrolled ? "py-3" : "py-4 sm:py-5",
            "transition-[padding]",
          ].join(" ")}
        >
          {/* Brand: avatar + name */}
          <Link href="/" className="flex items-center gap-3">
            {/* Avatar gradient ring uses theme tokens */}
            <div
              className={[
                "relative rounded-lg p-[2px]",
                scrolled ? "w-[64px] h-[64px]" : "w-[72px] h-[72px] sm:w-[84px] sm:h-[84px]",
              ].join(" ")}
              style={{
                background:
                  "conic-gradient(var(--c1, #ff52bf), var(--c2, #ffb900), var(--c3, #38bdf8), var(--c1, #ff52bf))",
              }}
              aria-hidden
            >
              <div className="relative h-full w-full overflow-hidden rounded-[10px] bg-neutral-950">
                <Image
                  src="/photos/13.jpg"
                  alt="Aarushi Daksh"
                  fill
                  className="object-cover select-none"
                  sizes="84px"
                  priority
                />
              </div>
            </div>

            <div className="min-w-[220px]">
              <h1 className="text-2xl font-bold dark:text-white flex items-center justify-center gap-2">
                Aarushi Daksh{" "}
                <span style={{ color: "var(--c1, #ff52bf)" }}>▶</span>
              </h1>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Turning caffeine into code.
              </p>
            </div>
          </Link>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* <ThemeSwitch /> */}

            {/* GitHub */}
            <Link
              href="https://github.com/AarushiDaksh"
              target="_blank"
              aria-label="GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg
                         ring-1 ring-neutral-300 dark:ring-white/10
                         bg-neutral-100 text-neutral-900 hover:bg-neutral-200
                         dark:bg-white/5 dark:text-white dark:hover:bg-white/10
                         transition-colors duration-200
                         hover:-translate-y-0.5 active:translate-y-0 transform
                         focus:outline-none focus-visible:ring-2"
              style={{ boxShadow: "0 0 0 0 rgba(0,0,0,0)", // no extra shadow
                       // theme focus ring
                       // Tailwind arbitrary value fallback:
                       // @ts-ignore
                       ["--tw-ring-color" as any]: "rgb(var(--ring-focus, 255 82 191) / 0.5)" }}
            >
              <FaGithub size={18} />
            </Link>

            {/* LeetCode (tinted with theme color 2) */}
            <Link
              href="https://leetcode.com/u/aarushidaksh05/"
              target="_blank"
              aria-label="LeetCode"
              title="LeetCode"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg
                         ring-1 ring-neutral-300 dark:ring-white/10
                         bg-neutral-100 hover:bg-neutral-200
                         dark:bg-white/5 dark:hover:bg-white/10
                         transition-colors duration-200
                         hover:-translate-y-0.5 active:translate-y-0 transform
                         focus:outline-none focus-visible:ring-2"
              style={{
                color: "var(--c2, #ffb900)",
                // @ts-ignore
                ["--tw-ring-color" as any]: "rgb(var(--ring-focus, 255 82 191) / 0.5)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 50 50"
                className="h-[18px] w-[18px]"
              >
                <path d="M38.12 18.45c-2.47-2.47-6.3-2.6-8.9-.42l-3.25 3.22 2.4 2.42 3.25-3.23c1.2-1.08 3.01-1.03 4.2.16 1.17 1.17 1.22 2.98.15 4.2L22.6 38.7c-1.16 1.15-3.03 1.15-4.18 0l-9.11-9.12c-1.15-1.16-1.15-3.03 0-4.18l7.96-7.95a2.91 2.91 0 014.13.02l1.8 1.8 2.4-2.42-1.8-1.8c-2.5-2.49-6.56-2.52-9.05-.02L7.3 25.4a6 6 0 000 8.47l9.12 9.11a6 6 0 008.47 0l13.23-13.23a6.3 6.3 0 000-8.89z" />
              </svg>
            </Link>

            {/* Resume CTA with theme gradient */}
            <Link
              href="https://drive.google.com/file/d/1pF-kAe8BXIsKgUyti3nHPXKceynd89WR/view?usp=sharing"
              target="_blank"
              className="relative hidden sm:inline-flex items-center gap-2 rounded-lg p-[1.5px]
                         focus:outline-none focus-visible:ring-2"
              style={{
                background:
                  "linear-gradient(120deg, var(--c1, #ff52bf), var(--c2, #ffb900), var(--c3, #38bdf8))",
                // @ts-ignore
                ["--tw-ring-color" as any]: "rgb(var(--ring-focus, 255 82 191) / 0.6)",
              }}
            >
              <span className="inline-flex items-center gap-2 rounded-[10px]
                               bg-white text-neutral-900
                               dark:bg-neutral-950 dark:text-white
                               px-3.5 py-2 text-sm font-semibold
                               ring-1 ring-neutral-300 dark:ring-white/10
                               hover:bg-neutral-100 dark:hover:bg-neutral-900
                               transition-colors duration-200
                               hover:-translate-y-0.5 active:translate-y-0 transform">
                <FaFile size={16} /> Resume
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
