"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaFile } from "react-icons/fa6";
import { ThemeSwitch } from "./theme-switch";

export default function Header() {
  return (
    <div className="w-full px-6 py-10 flex flex-wrap items-center justify-center gap-6 text-center max-w-7xl mx-auto">
      {/* Profile Image */}
      <Image
        src="/photos/13.jpg"
        alt="Profile"
        width={90}
        height={90}
        className="rounded-lg grayscale hover:grayscale-0 transition duration-300 object-cover border border-neutral-400 shadow-md"
      />

      {/* Name + Subtitle */}
      <div className="text-left">
        <Link href="/" className="block text-left">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            Aarushi Daksh <span className="text-pink-500 animate-pulse">▶</span>
          </h1>
          <p className="text-base text-neutral-500 dark:text-neutral-400">
            Turning caffeine into code.
          </p>
        </Link>
      </div>

      {/* Social + Utility Icons */}
      <div className="flex gap-3 items-center">
        {/* GitHub */}
        <Link
          href="https://github.com/AarushiDaksh"
          target="_blank"
          className="w-11 h-11 p-2.5 flex items-center justify-center rounded-md bg-pink-500 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
        >
          <FaGithub size={22} />
        </Link>

        {/* LeetCode */}
        <Link
          href="https://leetcode.com/u/aarushidaksh05/"
          target="_blank"
          className="w-11 h-11 p-2.5 flex items-center justify-center rounded-md bg-amber-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 50 50"
            className="w-[22px] h-[22px]"
          >
            <path d="M38.12 18.45c-2.47-2.47-6.3-2.6-8.9-.42l-3.25 3.22 2.4 2.42 3.25-3.23c1.2-1.08 3.01-1.03 4.2.16 1.17 1.17 1.22 2.98.15 4.2L22.6 38.7c-1.16 1.15-3.03 1.15-4.18 0l-9.11-9.12c-1.15-1.16-1.15-3.03 0-4.18l7.96-7.95a2.91 2.91 0 014.13.02l1.8 1.8 2.4-2.42-1.8-1.8c-2.5-2.49-6.56-2.52-9.05-.02L7.3 25.4a6 6 0 000 8.47l9.12 9.11a6 6 0 008.47 0l13.23-13.23a6.3 6.3 0 000-8.89z" />
          </svg>
        </Link>

        {/* Theme Switch */}
        <div className="w-11 h-11 p-2.5 flex items-center justify-center rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-700 transition">
          <div className="ml-1 mt-2 w-[22px] h-[22px]">
            <ThemeSwitch />
          </div>
        </div>
      </div>

      {/* Resume Button */}
      <Link
        href="https://drive.google.com/file/d/1a3S8XO-hWdEBGD8Lo8gv_kPRd8XYdshT/view?usp=sharing"
        target="_blank"
        className="flex items-center gap-2 text-base font-semibold px-4 py-2 rounded-md border border-neutral-400 dark:border-neutral-700 bg-white dark:bg-black hover:bg-pink-600 hover:text-white transition"
      >
        <FaFile className="inline" size={20} /> Resume
      </Link>
    </div>
  );
}
