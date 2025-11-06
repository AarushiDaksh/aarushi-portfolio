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
        className="hidden sm:flex fixed top-0 right-0 z-40 h-screen w-28 flex-col items-center justify-between py-8 ring-1 backdrop-blur-md transition-all"
        style={{
          background: "var(--header-bg)",
          borderColor: "var(--ring)",
          boxShadow: "var(--shadow)",
          backdropFilter: "saturate(160%) blur(18px)",
        }}
      >
        <div className="flex flex-col items-center gap-3">
          <Link href="/" aria-label="Home">
            <div
              className={[
                "relative rounded-xl p-[3px] ring-2 shadow-sm transition-all",
                scrolled ? "w-14 h-14" : "w-20 h-20",
              ].join(" ")}
              style={{ borderColor: "var(--ring)" }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-[10px]">
                <Image
                  src="/photos/10.jpg"
                  alt="Aarushi Daksh"
                  fill
                  className="object-cover select-none"
                  sizes="80px"
                  priority
                />
              </div>
            </div>
          </Link>

          <div className="text-center leading-tight">
            <h1 className="text-[14px] font-semibold">Aarushi</h1>
            <p className="text-[11px]" style={{ color: "var(--text-muted)" }}>
              Daksh
            </p>
          </div>
        </div>

        <nav className="flex flex-col items-center gap-5">
          <Link
            href="https://leetcode.com/u/aarushidaksh05/"
            target="_blank"
            aria-label="LeetCode"
            title="LeetCode"
            className="p-2 rounded-lg ring-1 hover:scale-105 active:scale-95 transition-all"
            style={{
              background: "var(--control)",
              borderColor: "var(--ring)",
              color: "var(--c2)",
              boxShadow: "var(--shadow)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 50 50"
              className="h-6 w-6"
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
            className="p-2 rounded-lg ring-1 hover:scale-105 active:scale-95 transition-all"
            style={{
              background: "var(--control)",
              borderColor: "var(--ring)",
              color: "var(--text)",
              boxShadow: "var(--shadow)",
            }}
          >
            <FaGithub className="h-6 w-6" aria-hidden="true" />
          </Link>
        </nav>

        <div className="px-2 text-center">
          <p className="text-[11px]" style={{ color: "var(--text-muted)" }}>
            © AD’25
          </p>
        </div>
      </header>

      {/* Mobile app bar */}
      <div
        className={[
          "sm:hidden fixed z-50 left-1/2 -translate-x-1/2 transition-all",
          scrolled ? "top-2" : "top-3",
          "w-[min(94%,480px)]",
        ].join(" ")}
      >
        <div
          className={[
            "flex items-center justify-between gap-3 rounded-2xl ring-1 px-3 py-2 backdrop-blur-md",
            "transition-all",
            scrolled ? "shadow-xl" : "shadow-md",
          ].join(" ")}
          style={{
            background: "var(--header-bg)",
            borderColor: "var(--ring)",
            boxShadow: "var(--shadow)",
          }}
        >
          <Link href="/" className="flex items-center gap-2" aria-label="Home">
            <div
              className={[
                "relative rounded-xl ring-1 p-[2px] transition-all",
                scrolled ? "w-9 h-9" : "w-10 h-10",
              ].join(" ")}
              style={{ borderColor: "var(--ring)" }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-[10px]">
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
              <p className="text-[13px] font-semibold" style={{ color: "var(--text)" }}>
                Aarushi Daksh
              </p>
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
              title="LeetCode"
              className="p-2 rounded-full ring-1 active:scale-95 hover:scale-105 transition-all"
              style={{
                background: "var(--control)",
                borderColor: "var(--ring)",
                color: "var(--c2)",
                boxShadow: "var(--shadow)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 50 50"
                className="h-5 w-5"
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
              className="p-2 rounded-full ring-1 active:scale-95 hover:scale-105 transition-all"
              style={{
                background: "var(--control)",
                borderColor: "var(--ring)",
                color: "var(--text)",
                boxShadow: "var(--shadow)",
              }}
            >
              <FaGithub className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      <style jsx global>{`
        :root {
          --c1: #ff52bf;
          --c2: #ffb900;
          --c3: #8538f8;

          --header-bg: rgba(255, 255, 255, 0.75);
          --control: rgba(245, 245, 246, 0.85);
          --control-hover: rgba(238, 238, 239, 0.9);
          --text: #111111;
          --text-muted: #5e5e5e;
          --ring: rgba(0, 0, 0, 0.08);
          --shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        }

        .dark {
          --c1: #ff52bf;
          --c2: #ffb900;
          --c3: #8538f8;

          --header-bg: rgba(255, 255, 255, 0.06);
          --control: rgba(255, 255, 255, 0.08);
          --control-hover: rgba(255, 255, 255, 0.12);
          --text: #ffffff;
          --text-muted: #c9c9c9;
          --ring: rgba(255, 255, 255, 0.16);
          --shadow: 0 8px 30px rgba(0, 0, 0, 0.45);
        }

        body {
          margin-right: 0;
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        @media (min-width: 640px) {
          body {
            margin-right: 7rem;
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
