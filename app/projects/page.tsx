"use client";

import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { projects } from "./project-data";



// Exclude featured projects
const skipTitles = [
  "SkillSlack – Developers Collaboration Platform",
  "StuGig – Marketplace for Students",
  "Maniac – AI Productivity Agent",
];

export default function Projects() {
  const filteredProjects = projects.filter(
    (project) => !skipTitles.includes(project.title)
  );

  return (
    <section>
      <h1 className="mb-6 text-xl font-medium">All Projects</h1>

      <div className="space-y-16">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="relative rounded-[20px] p-[3px]"
            style={{
              background:
                "linear-gradient(to right bottom, rgba(255,255,255,0.05), rgba(255,255,255,0.01))",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <div className="bg-[#111] rounded-[18px] overflow-hidden">
              {/* Fake browser bar */}
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
                  View Project
                </Link>
              </div>

              {/* Project Image */}
              <Link href={project.url} target="_blank">
                        <div className="relative w-full h-[300px] sm:h-[340px] overflow-hidden group">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.015] transition duration-300 ease-in-out"
        />

                </div>
              </Link>

              {/* Footer */}
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
