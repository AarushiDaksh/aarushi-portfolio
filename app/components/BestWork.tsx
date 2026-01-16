"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "../projects/project-data";

const featured = projects.filter((p) =>
  [
    "SkillSlack – Developers Collaboration Platform",
    "StuGig – Marketplace for Students",
    "Maniac – AI Productivity Agent",
    "miniATS",
  ].includes(p.title)
);

export default function BestWorks() {
  return (
    <section className="relative">
      {/* header */}
      <div className="mb-8 sm:mb-10">
        <p className="text-xs font-bold tracking-[0.28em] text-neutral-500 dark:text-neutral-400">
          SELECTED WORK
        </p>
        <h2 className="mt-2 text-3xl font-extrabold text-neutral-900 dark:text-white">
          Featured Projects
        </h2>
      </div>

      {/* grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featured.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            whileHover={{ y: -4 }}
            className={`
              group relative overflow-hidden rounded-2xl
              border border-white/10 bg-[#0b0b0b] shadow-lg
              h-[320px] sm:h-[360px]
              ${index < 2 ? "md:h-[420px]" : "md:h-[360px]"}
            `}
          >
            {/* image layer */}
            <Link href={project.url} target="_blank" className="absolute inset-0">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </Link>

            {/* content */}
            <div className="absolute bottom-0 w-full p-5">
              <h3 className="text-base sm:text-lg font-semibold text-white">
                {project.title}
              </h3>

              {/* {project.description && (
                <p className="mt-1 text-sm text-neutral-300 line-clamp-2">
                  {project.description}
                </p>
              )} */}

              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-neutral-400">{project.year}</span>

                <span className="text-sm font-semibold text-[#c5d725]">
                  View Project →
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
