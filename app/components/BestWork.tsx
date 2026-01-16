"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { projects } from "../projects/project-data";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function BestWorks() {
  return (
    <section className="relative">
      {/* header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="mb-10"
      >
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#c5d725]" />
          <p className="text-xs font-bold tracking-[0.28em] text-neutral-500 dark:text-neutral-400">
            PROJECTS
          </p>
        </div>

        <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          Selected Work
        </h2>

        
      </motion.div>

      {/* GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            variants={item}
            whileHover={{ y: -6, scale: 1.02 }}
            className="bwCard group relative rounded-2xl p-[2.5px]"
          >
            <div className="rounded-[14px] overflow-hidden bg-[#0b0b0b] ring-1 ring-white/5 shadow-lg">
              {/* IMAGE */}
              <Link href={project.url} target="_blank">
                <div className="relative h-[190px] sm:h-[220px] overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                    <div className="absolute -left-1/3 top-0 h-full w-1/2 rotate-12 bg-white/10 blur-2xl" />
                  </div>

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    priority={index < 2}
                  />
                </div>
              </Link>

              {/* CONTENT */}
              <div className="px-4 py-4 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-white">
                    {project.title}
                  </h3>
                  {project.year && (
                    <span className="text-xs text-white/60">
                      {project.year}
                    </span>
                  )}
                </div>

                {project.description && (
                  <p className="mt-2 text-xs leading-relaxed text-white/70 line-clamp-2">
                    {project.description}
                  </p>
                )}

                <Link
                  href={project.url}
                  target="_blank"
                  className="mt-3 inline-flex text-xs font-semibold text-[#c5d725] hover:underline"
                >
                  View Project →
                </Link>
              </div>
            </div>

            {/* glow */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-[0.18] transition"
              style={{
                filter: "blur(18px)",
                background:
                  "linear-gradient(120deg, #ff52bf33, transparent, #38bdf833)",
              }}
            />
          </motion.article>
        ))}
      </motion.div>

      <style jsx global>{`
        .bwCard {
          background: linear-gradient(
            120deg,
            #ff52bf33,
            #ffb90033,
            #38bdf833
          );
        }
        .bwCard:hover {
          background: #1a1a1a !important;
        }
      `}</style>
    </section>
  );
}
