"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo, useEffect } from "react";
import { projects } from "./project-data";
import {
  FaFolder,
  FaExternalLinkAlt,
  FaTimes,
  FaRegImage,
} from "react-icons/fa";

// hide featured
const SKIP = [
  "SkillSlack – Developers Collaboration Platform",
  "StuGig – Marketplace for Students",
  "Maniac – AI Productivity Agent",
];

type P = (typeof projects)[number];

const fmtDate = (y?: number) => {
  // fake a modified date from the year (or use a real field if you have it)
  const d = new Date(`${y ?? new Date().getFullYear()}-07-01`);
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
};

export default function Projects() {
  const [preview, setPreview] = useState<null | { src: string; title: string }>(
    null
  );

  const rows = useMemo<P[]>(
    () => projects.filter((p) => !SKIP.includes(p.title)),
    []
  );

  // esc to close preview
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPreview(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section>
      <h1 className="mb-6 text-xl font-medium">All Projects</h1>

      {/* Explorer shell */}
      <div className="rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur">
        {/* Header bar */}
        <div className="flex items-center gap-2 px-4 py-2 border-b border-black/10 dark:border-white/10 text-sm">
          <FaFolder className="opacity-80" />
          <span className="font-semibold">Aarushi</span>
          <span className="text-neutral-500 dark:text-neutral-400">/</span>
          <span className="font-mono">Projects</span>
        </div>

        {/* Column headers */}
        <div className="grid grid-cols-12 px-4 py-2 text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400 border-b border-black/10 dark:border-white/10">
          <div className="col-span-6">Name</div>
          <div className="col-span-3">Date modified</div>
          <div className="col-span-2">Type</div>
          <div className="col-span-1 text-right">Size</div>
        </div>

    <ul className="divide-y divide-black/5 dark:divide-white/10">
  {rows.map((p, i) => (
    <li
      key={p.title}
      className="grid grid-cols-12 items-center px-4 py-2 hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition"
    >
      {/* Name */}
      <div className="col-span-6 flex items-center gap-3 overflow-hidden">
        <FaFolder className="text-yellow-500 shrink-0" />
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs opacity-60">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="truncate">{p.title}</span>

            {/* open external link */}
            <Link
              href={p.url}
              target="_blank"
              className="inline-flex items-center gap-1 text-[11px] text-pink-600 hover:text-pink-500 dark:text-lime-400 dark:hover:text-lime-300"
              title="Open project"
            >
              <FaExternalLinkAlt />
              open
            </Link>
          </div>
          <div className="text-xs text-neutral-500 dark:text-neutral-400 truncate">
            {p.url.replace(/^https?:\/\//, "").replace(/^www\./, "")}
          </div>
        </div>
      </div>

      {/* Date modified */}
      <div className="col-span-3 text-sm">{fmtDate(p.year)}</div>

      {/* Type — ONLY this opens the preview */}
      <div className="col-span-2">
        <button
          type="button"
          onClick={() => setPreview({ src: p.image, title: p.title })}
          className="inline-flex items-center gap-2 text-sm px-2 py-1 rounded-md
                     hover:bg-black/[0.06] dark:hover:bg-white/[0.06] transition
                     text-neutral-800 dark:text-neutral-100"
          title="Open PNG preview"
          aria-label={`Preview image for ${p.title}`}
        >
          <FaRegImage className="opacity-80" />
          <span>PNG Preview</span>
        </button>
      </div>

      {/* Size (placeholder) */}
      <div className="col-span-1 text-right text-sm">—</div>
    </li>
  ))}
</ul>

      </div>

      {/* Fullscreen image preview */}
      {preview && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setPreview(null)}
        >
          <div
            className="relative w-[92vw] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={preview.src}
              alt={preview.title}
              width={1600}
              height={900}
              className="w-full h-auto rounded-lg shadow-2xl"
              priority
            />
            <button
              onClick={() => setPreview(null)}
              className="absolute -top-3 -right-3 bg-white/90 dark:bg-neutral-800 text-neutral-900 dark:text-white rounded-full p-2 shadow ring-1 ring-black/10 dark:ring-white/10"
              aria-label="Close preview"
              title="Close"
            >
              <FaTimes />
            </button>
            <div className="mt-2 text-center text-sm text-white/90">
              {preview.title}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
