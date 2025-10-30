"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "../projects/project-data";

const featured = projects.filter((p) =>
  [
    "SkillSlack – Developers Collaboration Platform",
    "Album",
    "StuGig – Marketplace for Students",
    "miniATS",
  ].includes(p.title)
);

export default function BestWorks() {
  return (
    <section>
      <h2
        className="mb-6 text-xl font-medium"
        style={{ color: "var(--text)" }}
      >
        Best Works
      </h2>

      <div className="space-y-10 sm:space-y-16">
        {featured.map((project, index) => (
          <article
            key={index}
            className="group relative rounded-2xl p-px sm:p-[1.5px] transition-transform duration-300 hover:scale-[1.005]"
            style={{
              background:
                "linear-gradient(120deg, var(--c1b), var(--c2b), var(--c3b))",
            }}
          >
            {/* Card surface */}
            <div className="rounded-[12px] sm:rounded-[14px] overflow-hidden bg-[#0b0b0b] ring-1 ring-white/5 shadow-lg">
              {/* Browser bar */}
              <div className="flex items-center justify-between px-3 py-1.5 sm:px-4 sm:py-2 border-b border-white/10 bg-[#121212]">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span
                    className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full"
                    style={{ background: "var(--c1)" }}
                  />
                  <span
                    className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full"
                    style={{ background: "var(--c2)" }}
                  />
                  <span
                    className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full"
                    style={{ background: "var(--c3)" }}
                  />
                </div>

                <div className="max-w-[40%] truncate rounded px-2 sm:px-3 py-0.5 sm:py-1 text-[11px] sm:text-xs tracking-tight text-neutral-400 bg-black/30 ring-1 ring-white/10">
                  {project.url
                    .replace(/^https?:\/\//, "")
                    .replace("www.", "")
                    .split("/")[0]}
                </div>

                <Link
                  href={project.url}
                  target="_blank"
                  className="relative inline-flex items-center gap-1 rounded-md p-px sm:p-[1px] text-[11px] sm:text-xs font-semibold"
                  style={{
                    background:
                      "linear-gradient(120deg, var(--c1b), var(--c2b), var(--c3b))",
                  }}
                >
                  <span className="rounded-[6px] bg-[#131313] px-2 py-0.5 sm:px-2.5 sm:py-1 text-white ring-1 ring-white/10 transition-colors group-hover:bg-[#151515]">
                    Live&nbsp;Preview
                  </span>
                </Link>
              </div>

              {/* Screenshot */}
              <Link href={project.url} target="_blank" className="block">
                <div className="relative w-full h-[200px] sm:h-[340px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.015]"
                    sizes="100vw"
                    priority={index === 0}
                  />
                </div>
              </Link>

              {/* Footer */}
              <div className="flex items-center justify-between px-3 sm:px-4 py-2 border-t border-white/10 text-xs sm:text-sm">
                <span className="truncate text-neutral-400">
                  {project.title}
                </span>
                <span className="text-white/80">↗ {project.year}</span>
              </div>
            </div>

            {/* Subtle glow */}
            <span
              aria-hidden
              className="hidden sm:block pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-[var(--glow-op)]"
              style={{
                filter: "blur(14px)",
                background:
                  "linear-gradient(120deg, var(--c1b) 25%, transparent 50%, var(--c3b) 75%)",
              }}
            />
          </article>
        ))}
      </div>

      {/* theme variables */}
      <style jsx global>{`
        :root {
          --c1: #ff52bf;
          --c2: #ffb900;
          --c3: #38bdf8;

          /* softer borders for light theme */
          --c1b: #ff52bf33;
          --c2b: #ffb90033;
          --c3b: #38bdf833;
          --glow-op: 0.18;

          --text: #111111;
        }
        .dark {
          --c1b: #ff52bf66;
          --c2b: #ffb90066;
          --c3b: #38bdf866;
          --glow-op: 0.35;
        }
        .dracula {
          --c1b: #ff79c655;
          --c2b: #bd93f955;
          --c3b: #8be9fd55;
          --glow-op: 0.32;
        }
      `}</style>
    </section>
  );
}
