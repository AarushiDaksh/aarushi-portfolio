import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Nextfolio Projects",
};

export default function Projects() {
  return (
    <section className="px-4 sm:px-8  max-w-5xl mx-auto">
<h1 className="mb-8 text-2xl font-medium">My Work</h1>

      <div className="space-y-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-6 group border-b pb-8 border-neutral-200 dark:border-neutral-700"
          >
            <div className="w-full md:w-1/2 h-56 relative rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition duration-300 ease-in-out"
                priority
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-xl font-semibold text-black dark:text-white mb-2 group-hover:text-orange-500 transition">
                {project.title}
              </h2>
              <p className="text-sm text-neutral-700 dark:text-neutral-400 mb-4">
                {project.description}
              </p>
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white shadow-md hover:shadow-orange-500/50 transition-all"
              >
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
