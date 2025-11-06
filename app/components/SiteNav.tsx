"use client";

import Link from "next/link";

export default function SiteNavbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-neutral-900/80 backdrop-blur border-b border-black/5 dark:border-white/10">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-3">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <div className="h-7 w-7 rounded-full grid place-items-center bg-black text-white dark:bg-white dark:text-black text-xs">
            AD
          </div>
          <span className="text-sm">AarushiFolio</span>
        </Link>

        {/* Links */}
        <ul className="hidden gap-6 md:flex text-[13px] font-medium text-neutral-600 dark:text-neutral-300">
          <li><Link href="#about" className="hover:text-black dark:hover:text-white">About</Link></li>
          <li><Link href="#services" className="hover:text-black dark:hover:text-white">Services</Link></li>
          <li><Link href="#works" className="hover:text-black dark:hover:text-white">Projects</Link></li>
          <li><Link href="#blog" className="hover:text-black dark:hover:text-white">Blog</Link></li>
          <li><Link href="#contact" className="hover:text-black dark:hover:text-white">Contact</Link></li>
        </ul>

        {/* CTA */}
        <Link
          href="/Aarushi_Daksh_CV.pdf"
          className="rounded-md border px-3 py-1.5 text-xs font-semibold tracking-wide hover:shadow-sm transition
                     border-black/10 text-black hover:bg-black hover:text-white
                     dark:border-white/20 dark:text-white dark:hover:bg-white dark:hover:text-black"
        >
          DOWNLOAD CV
        </Link>
      </nav>
    </header>
  );
}
