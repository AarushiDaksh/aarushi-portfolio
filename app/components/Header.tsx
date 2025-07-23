"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaXTwitter, FaTelegram, FaFile } from "react-icons/fa6";

export default function Header() {
  return (
    <div className="w-full px-4 py-6 flex flex-wrap items-center justify-center gap-4 text-center max-w-8xl mx-auto">
      {/* Profile Image */}
      <Image
        src="/photos/13.jpg"
        alt="Profile"
        width={70}
        height={60}
        className="rounded-md grayscale hover:grayscale-0 transition duration-300 object-cover border border-neutral-400"
      />


            <div className="text-left">
              <Link href="/" className="block text-left">
        <h1 className="text-lg font-semibold flex items-center gap-1">
          Aarushi Daksh <span className="text-pink-500 animate-pulse">▶</span>
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Turning caffeine into code.
        </p>
</Link>

      </div>


      {/* Icons */}
      <div className="flex gap-2 items-center">
        <Link
          href="https://github.com/AarushiDaksh"
          target="_blank"
          className="p-2 rounded-md bg-pink-500 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
        >
          <FaGithub size={18} />
        </Link>
        <Link
          href="https://x.com/aaxxshi"
          target="_blank"
          className="p-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
        >
          <FaXTwitter size={18} />
        </Link>
        <Link
          href="https://t.me/aaxxshi"
          target="_blank"
          className="p-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
        >
          <FaTelegram size={18} />
        </Link>
      </div>

      {/* Resume Button */}
      <Link
        href="https://drive.google.com/file/d/1a3S8XO-hWdEBGD8Lo8gv_kPRd8XYdshT/view?usp=sharing"
        target="_blank"
        className="flex items-center gap-1 text-sm font-medium px-3 py-1.5 rounded-md border border-neutral-400 dark:border-neutral-700 bg-white dark:bg-black hover:bg-pink-600 hover:text-white transition"
      >
        <FaFile className="inline" /> Resume
      </Link>
    </div>
  );
}
