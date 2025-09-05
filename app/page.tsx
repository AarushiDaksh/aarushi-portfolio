"use client";

import Image from "next/image";
import { socialLinks } from "./lib/config";
import "./globals.css";
import RetroGrid from "./components/RetroGrid";
import { Navbar } from "./components/nav";
import BestWorks from "./components/BestWork";

export default function Page() {
  return (
    <>
      {/* Put the grid first, and not behind the body (z >= 0) */}
     <RetroGrid z={0} strength="subtle" />
<main className="relative z-10">…</main>



      {/* Lift your content above the grid */}
      <main className="relative z-10">
        <section className="container mx-auto px-6 pt-12">
          <div className="mt-12">
            <h1 className="mb-6 text-xl font-medium">About</h1>
            <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
              I’m a <strong>Full-Stack Developer</strong> passionate about building
              <strong> scalable web apps</strong> and <strong>modern UI experiences</strong>.
              I specialize in <span className="text-pink-500">React, Next.js</span>,
              and <span className="text-blue-500">Tailwind CSS</span>, while creating
              powerful mobile apps with <span className="text-green-500">React Native</span>.
            </p>
          </div>

          <div className="mt-12">
            <BestWorks />
          </div>

          <div className="mt-12">
            <Navbar />
          </div>
        </section>
      </main>

      {/* Bug link */}
      <a
        href="https://maniac-ten.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        title="Go to Maniac App"
        className="bug-wave text-3xl mr-2 fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-black text-white p-3 rounded-full shadow-lg transition duration-300 hover:bg-pink-600 hover:scale-110"
      >
        🐞
      </a>
    </>
  );
}
