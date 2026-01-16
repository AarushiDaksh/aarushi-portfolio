"use client";

import React from "react";
import { FaGithub, FaLinkedinIn, FaMedium } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { TbMailFilled } from "react-icons/tb";
import { metaData, socialLinks } from "app/lib/config";

const YEAR = new Date().getFullYear();

function SocialIcon({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        text-neutral-500 dark:text-neutral-400
        hover:text-neutral-900 dark:hover:text-white
        transition
      "
    >
      <Icon size={18} />
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="mt-16 sm:mt-24 pb-8">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
        {/* Title */}
        <p className="text-sm font-semibold text-neutral-900 dark:text-white">
          Contact
        </p>

        {/* Sub */}
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
          Open to opportunities, collaboration, and conversations.
        </p>

        {/* Icons */}
        <div className="mt-4 flex items-center justify-center gap-5">
          <SocialIcon href={socialLinks.github} icon={FaGithub} label="GitHub" />
          <SocialIcon href={socialLinks.leetcode} icon={SiLeetcode} label="LeetCode" />
          <SocialIcon href={socialLinks.linkedin} icon={FaLinkedinIn} label="LinkedIn" />
          <SocialIcon href={socialLinks.medium} icon={FaMedium} label="Medium" />
          <SocialIcon href={socialLinks.email} icon={TbMailFilled} label="Email" />
        </div>

        {/* Divider */}
        <div className="mx-auto mt-6 h-px w-20 bg-black/10 dark:bg-white/10" />

        {/* Copyright */}
        <p className="mt-4 text-xs text-neutral-500 dark:text-neutral-400">
          © {YEAR} {metaData.title}
        </p>
      </div>
    </footer>
  );
}
