"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

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
        className="hidden sm:flex fixed top-3 bottom-3 right-3 z-40 w-[92px] flex-col items-center justify-between rounded-3xl ring-1 backdrop-blur-xl transition-all"
        style={{
          background: "var(--sb-bg)",
          borderColor: "var(--ring)",
          boxShadow: "var(--sb-shadow)",
          backdropFilter: "saturate(160%) blur(18px)",
        }}
      >
        <div className="flex flex-col items-center gap-3 pt-4">
          <Link href="/" aria-label="Home" className="relative">
            <span
              className="absolute inset-0 -z-10 rounded-2xl glow"
              aria-hidden="true"
            />
            <div
              className={[
                "relative rounded-2xl p-[4px] ring-1 transition-all",
                scrolled ? "h-14 w-14" : "h-16 w-16",
              ].join(" ")}
              style={{ borderColor: "var(--ring)", background: "var(--avatar-bg)" }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <Image
                  src="/photos/10.jpg"
                  alt="Aarushi Daksh"
                  fill
                  className="object-cover select-none"
                  sizes="64px"
                  priority
                />
              </div>
            </div>
          </Link>

          <div className="text-center leading-tight px-2">
            <h1 className="text-[13px] font-semibold tracking-tight">Aarushi</h1>
            <p className="text-[11px]" style={{ color: "var(--text-muted)" }}>
              Daksh
            </p>
          </div>
        </div>

        <nav className="flex flex-col items-center gap-3">
          <Link
            href="https://leetcode.com/u/aarushidaksh05/"
            target="_blank"
            aria-label="LeetCode"
            title="LeetCode"
            className="h-12 w-12 grid place-items-center rounded-2xl ring-1 transition-all hover:translate-y-[-1px] active:scale-95"
            style={{
              background: "grey",
              borderColor: "var(--ring)",
              color: "yellow",
              boxShadow: "var(--chip-shadow)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 50 50"
              className="h-[22px] w-[22px]"
              aria-hidden="true"
            >
              <path d="M38.12 18.45c-2.47-2.47-6.3-2.6-8.9-.42l-3.25 3.22 2.4 2.42 3.25-3.23c1.2-1.08 3.01-1.03 4.2.16 1.17 1.17 1.22 2.98.15 4.2L22.6 38.7c-1.16 1.15-3.03 1.15-4.18 0l-9.11-9.12c-1.15-1.16-1.15-3.03 0-4.18l7.96-7.95a2.91 2.91 0 014.13.02l1.8 1.8 2.4-2.42-1.8-1.8c-2.5-2.49-6.56-2.52-9.05-.02L7.3 25.4a6 6 0 000 8.47l9.12 9.11a6 6 0 008.47 0l13.23-13.23a6.3 6.3 0 000-8.89z" />
            </svg>
          </Link>

          <Link
            href="https://github.com/AarushiDaksh"
            target="_blank"
            aria-label="GitHub"
            title="GitHub"
            className="h-12 w-12 grid place-items-center rounded-2xl ring-1 transition-all hover:translate-y-[-1px] active:scale-95"
            style={{
              background: "grey",
              borderColor: "var(--ring)",
              color: "var(--text)",
              boxShadow: "var(--chip-shadow)",
            }}
          >
            <FaGithub className="h-[20px] w-[20px]" aria-hidden="true" />
          </Link>
        </nav>

        <div className="pb-3 px-2 text-center">
          <p className="text-[11px]" style={{ color: "var(--text-muted)" }}>
            © AD’25
          </p>
        </div>
      </header>

      <div
        className={[
          "sm:hidden fixed z-50 left-1/2 -translate-x-1/2 transition-all",
          scrolled ? "top-2" : "top-3",
          "w-[min(94%,480px)]",
        ].join(" ")}
      >
        <div
          className={[
            "flex items-center justify-between gap-3 rounded-2xl ring-1 px-3 py-2 backdrop-blur-xl",
            scrolled ? "shadow-xl" : "shadow-md",
          ].join(" ")}
          style={{
            background: "var(--sb-bg)",
            borderColor: "var(--ring)",
            boxShadow: "var(--sb-shadow)",
          }}
        >
          <Link href="/" className="flex items-center gap-2" aria-label="Home">
            <div
              className="relative rounded-2xl ring-1 p-[3px] w-10 h-10"
              style={{ borderColor: "var(--ring)", background: "var(--avatar-bg)" }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <Image
                  src="/photos/10.jpg"
                  alt="Aarushi Daksh"
                  fill
                  className="object-cover select-none"
                  sizes="40px"
                  priority
                />
              </div>
            </div>
            <div className="leading-tight">
              <p className="text-[13px] font-semibold">Aarushi Daksh</p>
              <span className="text-[11px]" style={{ color: "var(--text-muted)" }}>
                Full-Stack Developer
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href="https://leetcode.com/u/aarushidaksh05/"
              target="_blank"
              aria-label="LeetCode"
              className="h-10 w-10 grid place-items-center rounded-2xl ring-1 active:scale-95 hover:translate-y-[-1px] transition-all"
              style={{
                background: "grey",
                borderColor: "var(--ring)",
                color: "yellow",
                boxShadow: "var(--chip-shadow)",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 50 50" className="h-[16px] w-[16px]">
                <path d="M38.12 18.45c-2.47-2.47-6.3-2.6-8.9-.42l-3.25 3.22 2.4 2.42 3.25-3.23c1.2-1.08 3.01-1.03 4.2.16 1.17 1.17 1.22 2.98.15 4.2L22.6 38.7c-1.16 1.15-3.03 1.15-4.18 0l-9.11-9.12c-1.15-1.16-1.15-3.03 0-4.18l7.96-7.95a2.91 2.91 0 014.13.02l1.8 1.8 2.4-2.42-1.8-1.8c-2.5-2.49-6.56-2.52-9.05-.02L7.3 25.4a6 6 0 000 8.47l9.12 9.11a6 6 0 008.47 0l13.23-13.23a6.3 6.3 0 000-8.89z" />
              </svg>
            </Link>

            <Link
              href="https://github.com/AarushiDaksh"
              target="_blank"
              aria-label="GitHub"
              className="h-10 w-10 grid place-items-center rounded-2xl ring-1 active:scale-95 hover:translate-y-[-1px] transition-all"
              style={{
                background: "grey",
                borderColor: "var(--ring)",
                color: "var(--text)",
                boxShadow: "var(--chip-shadow)",
              }}
            >
              <FaGithub className="h-[16px] w-[16px]" />
            </Link>
          </div>
        </div>
      </div>

      <style jsx global>{`
        :root {
          --accent-1: #7c3aed;
          --accent-2: #8f8ff8;

          --sb-bg: rgba(255, 255, 255, 0.82);
          --avatar-bg: linear-gradient(180deg, rgba(124,58,237,0.10), rgba(124,58,237,0.05));
          --chip-bg: rgba(245, 245, 246, 0.9);

          --text: #111111;
          --text-muted: #5e5e5e;
          --ring: rgba(0, 0, 0, 0.08);

          --sb-shadow: 0 16px 40px rgba(0,0,0,0.04);
          --chip-shadow: 0 8px 20px rgba(0,0,,0.08);
        }

        .dark {
          --sb-bg: rgba(16, 16, 18, 0.6);
          --avatar-bg: linear-gradient(180deg, rgba(124,58,237,0.20), rgba(124,58,237,0.10));
          --chip-bg: rgba(255, 255, 255, 0.06);

          --text: #fafafa;
          --text-muted: #b4b4b7;
          --ring: rgba(255, 255, 255, 0.12);

          --sb-shadow: 0 16px 50px rgba(0, 0, 0, 0.5);
          --chip-shadow: 0 10px 28px rgba(0, 0, 0, 0.35);
        }

        .glow {
          background: radial-gradient(40% 40% at 50% 10%, rgba(124,58,237,0.18), transparent 60%);
          filter: blur(16px);
        }

        body {
          margin-right: 0;
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        @media (min-width: 640px) {
          body {
            margin-right: 7.5rem;
          }
        }
        @media (max-width: 639px) {
          body {
            padding-top: 72px;
          }
        }
      `}</style>
    </>
  );
}
``
