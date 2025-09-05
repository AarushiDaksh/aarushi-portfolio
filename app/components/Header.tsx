"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaFile } from "react-icons/fa6";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // keep content below fixed header
  useEffect(() => {
    const el = headerRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const setVar = () =>
      document.documentElement.style.setProperty("--header-h", `${el.offsetHeight}px`);
    setVar();
    const ro = new ResizeObserver(setVar);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        role="banner"
        className={[
          "fixed inset-x-0 top-0 z-50 transition-all",
          "pt-[max(env(safe-area-inset-top),0px)]",
          "backdrop-blur-md supports-[backdrop-filter]:backdrop-blur-md ",
          scrolled ? "" : "ring-0",
        ].join(" ")}
        style={{
          background: scrolled ? "var(--header-bg)" : "transparent",
          borderColor: "var(--ring)",
        }}
      >
        {/* thin accent line */}
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{
            background: "linear-gradient(90deg, var(--c1), var(--c2), var(--c3))",
            opacity: 0.9,
          }}
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-6">
          {/* ===== MOBILE (3 lines) ===== */}
          <div className="sm:hidden flex flex-col items-center justify-center text-center gap-3 pb-3">
            {/* Line 1: Avatar */}
            <Link href="/" className="block">
              <div
                aria-hidden
                className={[
                  "relative rounded-lg p-[1px] shrink-0 mx-auto",
                  scrolled ? "w-12 h-12" : "w-14 h-14",
                ].join(" ")}
                style={{
                  background:
                    "conic-gradient(var(--c1), var(--c2), var(--c3), var(--c1))",
                }}
              >
                <div className="relative h-full w-full overflow-hidden rounded-[10px] bg-black/90">
                  <Image
                    src="/photos/13.jpg"
                    alt="Aarushi Daksh"
                    fill
                    className="object-cover select-none"
                    sizes="56px"
                    priority
                  />
                </div>
              </div>
            </Link>

            {/* Line 2: Name */}
            <Link href="/" className="block">
              <h1
                className="flex items-center justify-center gap-1.5 text-[20px] font-semibold"
                style={{ color: "var(--text)" }}
              >
                <span className="truncate">Aarushi Daksh</span>
                <span className="leading-none" style={{ color: "var(--c1)" }}>
                  ▶
                </span>
              </h1>
            </Link>

            {/* Line 3: Icons (LeetCode, GitHub, Resume) */}
            <div className="flex items-center justify-center gap-3">
              {/* LeetCode */}
              <Link
                href="https://leetcode.com/u/aarushidaksh05/"
                target="_blank"
                aria-label="LeetCode"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg ring-1 transition-all"
                style={{ background: "var(--control)", borderColor: "var(--ring)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 50 50"
                  className="h-[20px] w-[20px]"
                  style={{ color: "var(--c2)" }}
                >
                  <path d="M38.12 18.45c-2.47-2.47-6.3-2.6-8.9-.42l-3.25 3.22 2.4 2.42 3.25-3.23c1.2-1.08 3.01-1.03 4.2.16 1.17 1.17 1.22 2.98.15 4.2L22.6 38.7c-1.16 1.15-3.03 1.15-4.18 0l-9.11-9.12c-1.15-1.16-1.15-3.03 0-4.18l7.96-7.95a2.91 2.91 0 014.13.02l1.8 1.8 2.4-2.42-1.8-1.8c-2.5-2.49-6.56-2.52-9.05-.02L7.3 25.4a6 6 0 000 8.47l9.12 9.11a6 6 0 008.47 0l13.23-13.23a6.3 6.3 0 000-8.89z" />
                </svg>
              </Link>

              {/* GitHub */}
              <Link
                href="https://github.com/AarushiDaksh"
                target="_blank"
                aria-label="GitHub"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg ring-1 transition-all"
                style={{
                  background: "var(--control)",
                  color: "var(--text)",
                  borderColor: "var(--ring)",
                }}
              >
                <FaGithub className="h-[20px] w-[20px]" />
              </Link>

              {/* Resume (icon-only on mobile) */}
              <Link
                href="https://drive.google.com/file/d/1pF-kAe8BXIsKgUyti3nHPXKceynd89WR/view?usp=sharing"
                target="_blank"
                aria-label="Resume"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg ring-1 transition-all"
                style={{
                  background: "var(--control)",
                  color: "var(--text)",
                  borderColor: "var(--ring)",
                }}
              >
                <FaFile className="h-4 w-4" /> Resume
              </Link>
            </div>
          </div>

          {/* ===== DESKTOP (unchanged, single row centered) ===== */}
          <div
            className={[
              "hidden sm:flex items-center justify-center text-center gap-6",
              scrolled ? "h-16" : "h-20",
            ].join(" ")}
          >
            {/* Brand */}
            <Link href="/" className="flex items-center min-w-0 gap-3">
              <div
                aria-hidden
                className={[
                  "relative rounded-lg p-[2px] shrink-0",
                  scrolled ? "w-12 h-12" : "w-[84px] h-[84px]",
                ].join(" ")}
                style={{
                  background:
                    "conic-gradient(var(--c1), var(--c2), var(--c3), var(--c1))",
                }}
              >
                <div className="relative h-full w-full overflow-hidden rounded-[10px] bg-black/90">
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

              <div className="min-w-0 leading-none">
                <h1
                  className="flex items-center justify-center gap-2 text-2xl font-semibold"
                  style={{ color: "var(--text)" }}
                >
                  <span className="truncate">Aarushi Daksh</span>
                  <span className="leading-none" style={{ color: "var(--c1)" }}>
                    ▶
                  </span>
                </h1>
                <p className="hidden sm:block text-sm" style={{ color: "var(--text-muted)" }}>
                  Turning caffeine into code.
                </p>
              </div>
            </Link>

            {/* Actions (desktop) */}
            <div className="flex items-center gap-3">
              <Link
                href="https://leetcode.com/u/aarushidaksh05/"
                target="_blank"
                aria-label="LeetCode"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg ring-1"
                style={{ background: "var(--control)", borderColor: "var(--ring)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 50 50"
                  className="h-[20px] w-[20px]"
                  style={{ color: "var(--c2)" }}
                >
                  <path d="M38.12 18.45c-2.47-2.47-6.3-2.6-8.9-.42l-3.25 3.22 2.4 2.42 3.25-3.23c1.2-1.08 3.01-1.03 4.2.16 1.17 1.17 1.22 2.98.15 4.2L22.6 38.7c-1.16 1.15-3.03 1.15-4.18 0l-9.11-9.12c-1.15-1.16-1.15-3.03 0-4.18l7.96-7.95a2.91 2.91 0 014.13.02l1.8 1.8 2.4-2.42-1.8-1.8c-2.5-2.49-6.56-2.52-9.05-.02L7.3 25.4a6 6 0 000 8.47l9.12 9.11a6 6 0 008.47 0l13.23-13.23a6.3 6.3 0 000-8.89z" />
                </svg>
              </Link>

              <Link
                href="https://github.com/AarushiDaksh"
                target="_blank"
                aria-label="GitHub"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg ring-1"
                style={{
                  background:"conic-gradient(var(--c1), var(--c2), var(--c3), var(--c1))",
                  color: "var(--text)",
                  borderColor: "var(--ring)",
                }}
              >
                <FaGithub className="h-[20px] w-[20px]" />
              </Link>

              <Link
                href="https://drive.google.com/file/d/1pF-kAe8BXIsKgUyti3nHPXKceynd89WR/view?usp=sharing"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-lg ring-1 px-3.5 py-2 text-sm font-semibold transition-colors"
                style={{
                  background: "var(--control)",
                  color: "var(--text)",
                  borderColor: "var(--ring)",
                }}
              >
                <FaFile className="h-4 w-4" /> Resume
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* theme variables */}
      <style jsx global>{`
        :root {
          --c1: #ff52bf;
          --c2: #ffb900;
          --c3: #38bdf8;

          --header-bg: rgba(255, 255, 255, 0.85);
          --control: #f7f7f8;
          --control-hover: #eeeeef;
          --text: #111111;
          --text-muted: #5e5e5e;
          --ring: rgba(0, 0, 0, 0.12);

          --header-h: 64px; /* fallback */
        }

        .dark {
          --c1: #ff52bf;
          --c2: #ffb900;
          --c3: #38bdf8;

          --header-bg: rgba(18, 18, 18, 0.6);
          --control: rgba(255, 255, 255, 0.06);
          --control-hover: rgba(255, 255, 255, 0.1);
          --text: #ffffff;
          --text-muted: #b3b3b3;
          --ring: rgba(255, 255, 255, 0.12);
        }

        .dracula {
          --c1: #ff79c6;
          --c2: #bd93f9;
          --c3: #8be9fd;

          --header-bg: rgba(40, 42, 54, 0.75);
          --control: rgba(68, 71, 90, 0.6);
          --control-hover: rgba(68, 71, 90, 0.75);
          --text: #f8f8f2;
          --text-muted: #cfcfe6;
          --ring: rgba(189, 147, 249, 0.45);
        }

        a[aria-label="GitHub"],
        a[aria-label="LeetCode"],
        a[aria-label="Resume"] {
          background: var(--control);
        }
        a[aria-label="GitHub"]:hover,
        a[aria-label="LeetCode"]:hover,
        a[aria-label="Resume"]:hover {
          background: var(--control-hover);
        }

        body {
          padding-top: var(--header-h);
        }
      `}</style>
    </>
  );
}
