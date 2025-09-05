"use client";

import Image from "next/image";
import RetroGrid from "./components/RetroGrid";
import { Navbar } from "./components/nav";
import BestWorks from "./components/BestWork";

export default function Page() {
  return (
    <>
      {/* Grid sits below content */}
      <RetroGrid z={0} strength="subtle" />

      {/* Content above grid */}
      <main className="relative z-10">
        <section className="container mx-auto px-6 pt-12">
          <div>
            <h2
              className="mb-6 text-xl font-medium"
              style={{ color: "var(--text)" }}
            >
              About
            </h2>

           <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
  From prototype to production: I build fast, elegant apps with
  <span style={{ color: "var(--accent-pink)" }}> React/Next.js</span>,
  <span style={{ color: "var(--accent-cyan)" }}> Tailwind</span> and
  <span style={{ color: "var(--accent-green)" }}> React Native</span>.
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
