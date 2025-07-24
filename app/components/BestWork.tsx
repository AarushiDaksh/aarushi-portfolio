"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "../projects/project-data";

const featured = projects.filter((p) =>
  ["SkillSlack – Developers Collaboration Platform", "StuGig – Marketplace for Students", "Maniac – AI Productivity Agent"].includes(p.title)
);

export default function BestWorks() {
  return (
    <section>
      <h2 className="mb-6 text-xl font-medium">Best Works</h2>

      <div className="space-y-16">
        {featured.map((project, index) => (
          <div
            key={index}
            className="relative rounded-[20px] p-[3px] bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 animate-border transition-transform hover:scale-[1.01]"
          >
            <div className="bg-[#111] rounded-[18px] overflow-hidden shadow-xl">
              {/* Fake browser tab bar */}
              <div className="flex justify-between items-center px-4 py-2 border-b border-neutral-800 bg-[#1a1a1a] text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-pink-500 rounded-full" />
                  <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full" />
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full" />
                </div>
                <div className="bg-neutral-900 px-4 py-1 rounded text-neutral-400 text-xs tracking-tight">
                  {project.url.replace("https://", "").replace("www.", "").split("/")[0]}
                </div>
                <Link
                  href={project.url}
                  target="_blank"
                  className="text-xs text-pink-500 font-semibold hover:underline hover:text-pink-400 transition"
                >
                  Live Preview
                </Link>
              </div>

              {/* Screenshot section */}
              <Link href={project.url} target="_blank">
                <div className="relative w-full h-[300px] sm:h-[340px] overflow-hidden group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-[1.015] transition duration-300 ease-in-out"
                  />
                </div>
              </Link>

              {/* Footer info */}
              <div className="flex justify-between items-center px-4 py-2 border-t border-neutral-800 text-sm text-neutral-400">
                <span className="text-xs opacity-60">{project.title}</span>
                <span className="text-xs font-medium text-white/80">↗ {project.year}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
