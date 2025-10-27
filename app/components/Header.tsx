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
    <>
      <header
        role="banner"
        className={[
          "transition-all",
          "",
          ,
        ].join(" ")}
        style={{
          background: scrolled ? "" : "transparent",
          borderColor: "var(--ring)",
        }}
      >
        

        <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-6">
          {/* ===== MOBILE (3 lines) ===== */}
          <div className="sm:hidden flex flex-col items-center text-center gap-3 pb-3">
            {/* Line 1: Avatar */}
            <Link href="/" className="block">
              <div
                aria-hidden
                className={[
                  "relative rounded-xl p-[1px] mx-auto shadow-sm",
                  scrolled ? "w-14 h-14" : "w-20 h-20",
                ].join(" ")}
                              >
                <div className="relative h-full w-full overflow-hidden rounded-[10px] bg-black/90">
                  <Image
                    src="/photos/13.jpg"
                    alt="Aarushi Daksh"
                    fill
                    className="object-cover select-none"
                    sizes="70px"
                    priority
                  />
                </div>
              </div>
            </Link>

            {/* Line 2: Name */}
            <Link href="/" className="block">
              <h1
                className="flex items-center justify-center gap-1.5 text-[22px] font-semibold leading-none"
                style={{ color: "var(--text)" }}
              >
                <span className="truncate">Aarushi Daksh</span>
                <span className="leading-none" style={{ color: "var(--c1)" }}>▶</span>
              </h1>
            </Link>

          {/* Line 3: Buttons — equal width, icons + labels */}
<div className="w-full flex justify-center">
  <div className="grid grid-cols-3 gap-2 w-full max-w-xs">
    {/* LeetCode */}
    <Link
      href="https://leetcode.com/u/aarushidaksh05/"
      target="_blank"
      aria-label="LeetCode"
      className="flex h-10 items-center justify-center rounded-lg ring-1 transition-all active:scale-[0.98]"
      style={{ background: "var(--control)", borderColor: "var(--ring)", color: "var(--text)" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 50 50"
        className="h-[18px] w-[18px]"
        style={{ color: "var(--c2)" }}
        aria-hidden="true"
      >
        <path d="M38.12 18.45c-2.47-2.47-6.3-2.6-8.9-.42l-3.25 3.22 2.4 2.42 3.25-3.23c1.2-1.08 3.01-1.03 4.2.16 1.17 1.17 1.22 2.98.15 4.2L22.6 38.7c-1.16 1.15-3.03 1.15-4.18 0l-9.11-9.12c-1.15-1.16-1.15-3.03 0-4.18l7.96-7.95a2.91 2.91 0 014.13.02l1.8 1.8 2.4-2.42-1.8-1.8c-2.5-2.49-6.56-2.52-9.05-.02L7.3 25.4a6 6 0 000 8.47l9.12 9.11a6 6 0 008.47 0l13.23-13.23a6.3 6.3 0 000-8.89z" />
      </svg>
    </Link>

    {/* GitHub */}
    <Link
      href="https://github.com/AarushiDaksh"
      target="_blank"
      aria-label="GitHub"
      className="flex h-10 items-center justify-center rounded-lg ring-1 transition-all active:scale-[0.98]"
      style={{ background: "var(--control)", borderColor: "var(--ring)", color: "var(--text)" }}
    >
      <FaGithub className="h-[18px] w-[18px]" aria-hidden="true" />
    </Link>

    {/* Resume */}
    <Link
      href="https://drive.google.com/file/d/1rpQhCT0-4PUqnEBn-3GQdfV2ACa-TCBE/view?usp=sharing"
      target="_blank"
      aria-label="Resume"
      className="inline-flex h-10 items-center justify-center gap-1.5 rounded-lg ring-1 text-[13px] font-semibold transition-all active:scale-[0.98] pb-[2px]"
      style={{ background: "var(--control)", borderColor: "var(--ring)", color: "var(--text)" }}
    >
      <FaFile className="h-[18px] w-[18px]" aria-hidden="true" />
      Resume
    </Link>
  </div>
</div>

          </div>

          {/* ===== DESKTOP (centered row) ===== */}
          <div className={["hidden sm:flex items-center justify-center text-center gap-6", scrolled ? "h-16" : "h-20"].join(" ")}>
            {/* Brand */}
            <Link href="/" className="flex items-center min-w-0 gap-3">
              <div
                aria-hidden
                className={["relative rounded-xl ring-2  p-[2px] shrink-0", scrolled ? "w-16 h-16" : "w-[84px] h-[84px]"].join(" ")}
                              >
                <div className="relative  h-full w-full overflow-hidden rounded-[10px] bg-black/90">
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
                <h1 className="flex items-center justify-center gap-2 text-2xl font-semibold" style={{ color: "var(--text)" }}>
                  <span className="truncate">Aarushi Daksh</span>
                  <span className="leading-none" style={{ color: "var(--c1)" }}>▶</span>
                </h1>
                <p className="hidden sm:block text-sm" style={{ color: "var(--text-muted)" }}>
                  Turning caffeine into code.
                </p>
              </div>
            </Link>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <Link
                href="https://leetcode.com/u/aarushidaksh05/"
                target="_blank"
                className="inline-flex h-11 px-4 items-center justify-center gap-2 rounded-lg ring-1 text-sm font-medium hover:bg-amber-200"
                style={{ background: "var(--control)", borderColor: "var(--ring)", color: "var(--text)" }}
              >
                {/* LeetCode icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 50 50" className="h-[18px] w-[18px]" style={{ color: "var(--c2)" }} aria-hidden="true">
                  <path d="M38.12 18.45c-2.47-2.47-6.3-2.6-8.9-.42l-3.25 3.22 2.4 2.42 3.25-3.23c1.2-1.08 3.01-1.03 4.2.16 1.17 1.17 1.22 2.98.15 4.2L22.6 38.7c-1.16 1.15-3.03 1.15-4.18 0l-9.11-9.12c-1.15-1.16-1.15-3.03 0-4.18l7.96-7.95a2.91 2.91 0 014.13.02l1.8 1.8 2.4-2.42-1.8-1.8c-2.5-2.49-6.56-2.52-9.05-.02L7.3 25.4a6 6 0 000 8.47l9.12 9.11a6 6 0 008.47 0l13.23-13.23a6.3 6.3 0 000-8.89z" />
                </svg>
                
              </Link>

              <Link
                href="https://github.com/AarushiDaksh"
                target="_blank"
                className="inline-flex h-11 px-4 items-center justify-center gap-2 rounded-lg ring-1 text-sm font-medium"
                style={{ background: "var(--control)", borderColor: "var(--ring)", color: "var(--text)" }}
              >
                <FaGithub className="h-[18px] w-[18px]" aria-hidden="true" />
                
              </Link>

              <Link
                href="https://drive.google.com/file/d/1rpQhCT0-4PUqnEBn-3GQdfV2ACa-TCBE/view?usp=sharing"
                target="_blank"
                className="inline-flex h-11 px-4 items-center justify-center gap-2 rounded-lg ring-1 text-sm font-semibold"
                style={{ background: "var(--control)", borderColor: "var(--ring)", color: "var(--text)" }}
              >
                <FaFile className="h-[18px] w-[18px]" aria-hidden="true" />
                Resume
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
          --c3: #8538f8

          --header-bg: rgba(255, 255, 255, 0.85);
          --control: #f7f7f8;
          --control-hover: #eeeeef;
          --text: #111111;
          --text-muted: #5e5e5e;
          --ring: rgba(0, 0, 0, 0);
          --ring1: rgba(255, 255, 255, 0.1);
        }
      .dark {
          --c1: #ff52bf;
          --c2: #ffb900;
          --c3: #8538f8

          --header-bg: rgba(14, 13, 13, 0.2);
          --control: rgba(14, 13, 13, 0.2);
          --control-hover: rgba(0, 0, 0, 0.1);
          --text: #ffffff;
          --text-muted: #b3b3b3;
          --ring: rgba(255, 255, 255, 0.12);
        }
        .dracula {
          --c1: #ff79c6;
          --c2: #bd93f9;
          --c3: #825ae7

          --header-bg: rgba(40, 42, 54, 0.75);
          --control: rgba(68, 71, 90, 0.6);
          --control-hover: rgba(68, 71, 90, 0.75);
          --text: #f8f8f2;
          --text-muted: #cfcfe6;
          --ring: rgba(255, 255,255,0);
        }

        a[aria-label] { background: var(--control); }
        a[aria-label]:hover { background: var(--control-hover); }
      `}</style>
    </>
  );
}
