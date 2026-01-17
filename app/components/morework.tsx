"use client";

import Link from "next/link";

export default function MoreProjects() {
  return (
    <section className="mt-16 sm:mt-20 flex justify-center">
      <Link
        href="https://github.com/AarushiDaksh"
        target="_blank"
        className="
          inline-flex items-center gap-2
          rounded-full px-7 py-3
          border border-neutral-300/20
          text-sm font-medium text-neutral-700 dark:text-neutral-300
          transition-all duration-300
          hover:border-neutral-400/40
          hover:bg-neutral-100/60 dark:hover:bg-white/5
          hover:-translate-y-[1px]
        "
      >
        View more projects on GitHub →
      </Link>
    </section>
  );
}
