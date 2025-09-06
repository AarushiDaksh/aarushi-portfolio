"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo, useEffect } from "react";
import { projects } from "./project-data";
import { FaFolder, FaExternalLinkAlt, FaTimes, FaRegImage } from "react-icons/fa";
import Header from "app/components/Header";
import { Navbar } from "app/components/nav";
import Footer from "app/components/footer";

const SKIP = [
  "SkillSlack – Developers Collaboration Platform",
  "StuGig – Marketplace for Students",
  "Maniac – AI Productivity Agent",
];

type P = (typeof projects)[number];

const fmtDate = (y?: number) => {
  const d = new Date(`${y ?? new Date().getFullYear()}-07-01`);
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
};

export default function Projects() {
  const [preview, setPreview] = useState<null | { src: string; title: string }>(null);

  const rows = useMemo<P[]>(() => projects.filter((p) => !SKIP.includes(p.title)), []);

  // esc to close preview
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPreview(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="px-3 sm:px-0 ">
      <Header />
      <Navbar />
      <h1 className="mb-4 mt-12 sm:mb-6 text-lg sm:text-xl font-medium">All Projects</h1>

      {/* Explorer shell */}
      <div className="rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur overflow-hidden">
        {/* Header bar */}
        <div className="flex items-center gap-2 px-3 sm:px-4 py-2 border-b border-black/10 dark:border-white/10 text-sm">
          <FaFolder className="opacity-80 shrink-0" />
          <span className="font-semibold">Aarushi</span>
          <span className="text-neutral-500 dark:text-neutral-400">/</span>
          <span className="font-mono">Projects</span>
        </div>

        {/* Column headers (hidden on small screens) */}
        <div className="hidden sm:grid grid-cols-12 px-4 py-2 text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400 border-b border-black/10 dark:border-white/10">
          <div className="col-span-6">Name</div>
          <div className="col-span-3">Date modified</div>
          <div className="col-span-2">Type</div>
          <div className="col-span-1 text-right">Size</div>
        </div>

        <ul className="divide-y divide-black/5 dark:divide-white/10">
          {rows.map((p, i) => (
            <li
              key={p.title}
              className="
                grid grid-cols-6 sm:grid-cols-12 items-center
                px-3 sm:px-4 py-2
                hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition
              "
            >
              {/* Name (spans more on desktop) */}
              <div className="col-span-4 sm:col-span-6 flex items-start sm:items-center gap-2.5 sm:gap-3 overflow-hidden">
                <FaFolder className="text-yellow-500 shrink-0 mt-0.5 sm:mt-0" />
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] sm:text-xs opacity-60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="truncate text-sm sm:text-base">{p.title}</span>

                    {/* external link (hide label on very small screens) */}
                    <Link
                      href={p.url}
                      target="_blank"
                      className="inline-flex items-center gap-1 text-[11px] text-pink-600 hover:text-pink-500 dark:text-lime-400 dark:hover:text-lime-300"
                      title="Open project"
                    >
                      <FaExternalLinkAlt />
                      <span className="hidden sm:inline">open</span>
                    </Link>
                  </div>

                  {/* Compact meta under name on mobile */}
                  <div className="sm:hidden mt-0.5 text-[11px] text-neutral-600 dark:text-neutral-400 truncate">
                    {fmtDate(p.year)} • {p.url.replace(/^https?:\/\//, "").replace(/^www\./, "")}
                  </div>

                  {/* Full URL on desktop */}
                  <div className="hidden sm:block text-xs text-neutral-500 dark:text-neutral-400 truncate">
                    {p.url.replace(/^https?:\/\//, "").replace(/^www\./, "")}
                  </div>
                </div>
              </div>

              {/* Date modified (desktop only) */}
              <div className="hidden sm:block col-span-3 text-sm">{fmtDate(p.year)}</div>

              {/* Type — this opens the preview */}
              <div className="col-span-2 sm:col-span-2 mt-1 sm:mt-0">
                <button
                  type="button"
                  onClick={() => setPreview({ src: p.image, title: p.title })}
                  className="
                    inline-flex items-center justify-center gap-2 text-xs sm:text-sm
                    px-2.5 py-1.5 rounded-md
                    hover:bg-black/[0.06] dark:hover:bg-white/[0.06] transition
                    text-neutral-800 dark:text-neutral-100
                    w-full sm:w-auto
                  "
                  title="Open PNG preview"
                  aria-label={`Preview image for ${p.title}`}
                >
                  <FaRegImage className="opacity-80" />
                  <span className="hidden xs:inline">PNG Preview</span>
                  <span className="xs:hidden">Preview</span>
                </button>
              </div>

              {/* Size (placeholder, desktop only) */}
              <div className="hidden sm:block col-span-1 text-right text-sm">—</div>
            </li>
          ))}
        </ul>
      </div>

      {/* Fullscreen image preview */}
      {preview && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-3 sm:p-4"
          onClick={() => setPreview(null)}
        >
          <div
            className="relative w-[96vw] sm:w-[92vw] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={preview.src}
              alt={preview.title}
              width={1600}
              height={900}
              sizes="(max-width: 640px) 96vw, (max-width: 1024px) 92vw, 1024px"
              className="w-full h-auto rounded-lg shadow-2xl"
              priority
            />
            <button
              onClick={() => setPreview(null)}
              className="
                absolute -top-3 -right-3
                bg-white/90 dark:bg-neutral-800
                text-neutral-900 dark:text-white
                rounded-full p-2 shadow
                ring-1 ring-black/10 dark:ring-white/10
              "
              aria-label="Close preview"
              title="Close"
            >
              <FaTimes />
            </button>
            <div className="mt-2 text-center text-xs sm:text-sm text-white/90">
              {preview.title}
            </div>
          </div>
        </div>
      )}
      <div className="mt-20">
       <Footer />
       </div>
    </section>
    
  );
}
