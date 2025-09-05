"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "../projects/project-data";

const featured = projects.filter((p) =>
  [
    "SkillSlack – Developers Collaboration Platform",
    "Album",
    "StuGig – Marketplace for Students",
    "Maniac – AI Productivity Agent",
  ].includes(p.title)
);

export default function BestWorks() {
  return (
    <section>
      <h2 className="mb-6 text-xl font-medium">Best Works</h2>

      <div className="space-y-16">
        {featured.map((project, index) => (
          <article
            key={index}
            className="group relative rounded-2xl p-[1.5px]"
            style={{
              background:
                "linear-gradient(120deg, var(--c1, #ff52bf), var(--c2, #ffb900), var(--c3, #38bdf8))",
            }}
          >
            {/* Card surface */}
            <div className="rounded-[14px] overflow-hidden bg-[#0b0b0b] ring-1 ring-white/5 shadow-lg">
              {/* Browser bar */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-[#121212]">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--c1, #ff52bf)" }} />
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--c2, #ffb900)" }} />
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--c3, #38bdf8)" }} />
                </div>

                <div className="rounded px-3 py-1 text-xs tracking-tight text-neutral-400 bg-black/30 ring-1 ring-white/10">
                  {project.url.replace(/^https?:\/\//, "").replace("www.", "").split("/")[0]}
                </div>

                <Link
                  href={project.url}
                  target="_blank"
                  className="relative inline-flex items-center gap-1 rounded-md p-[1px] text-xs font-semibold"
                  style={{
                    background:
                      "linear-gradient(120deg, var(--c1, #ff52bf), var(--c2, #ffb900), var(--c3, #38bdf8))",
                  }}
                >
                  <span className="rounded-[6px] bg-[#131313] px-2.5 py-1 text-white ring-1 ring-white/10 transition-colors group-hover:bg-[#151515]">
                    Live&nbsp;Preview
                  </span>
                </Link>
              </div>

              {/* Screenshot: fixed height like before */}
              <Link href={project.url} target="_blank" className="block">
                <div className="relative w-full h-[300px] sm:h-[340px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-400 group-hover:scale-[1.01]"
                    sizes="100vw"
                    priority={index === 0}
                  />
                </div>
              </Link>

              {/* Footer */}
              <div className="flex items-center justify-between px-4 py-2 border-t border-white/10 text-sm">
                <span className="truncate text-neutral-400">{project.title}</span>
                <span className="text-white/80">↗ {project.year}</span>
              </div>
            </div>

            {/* Subtle hover glow (reduced) */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-35"
              style={{
                // smaller blur + lighter gradient = softer glow
                filter: "blur(12px)",
                background:
                  "linear-gradient(120deg, color-mix(in oklab, var(--c1, #ff52bf) 35%, transparent), transparent 45%, color-mix(in oklab, var(--c3, #38bdf8) 35%, transparent))",
              }}
            />
          </article>
        ))}
      </div>
    </section>
  );
}
