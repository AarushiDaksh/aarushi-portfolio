'use client';

import Link from "next/link";
// switched from lucide-react to react-icons (lucide set)
import {
  LuSparkles as Sparkles,
  LuCalendarDays as CalendarDays,
  LuBriefcaseBusiness as BriefcaseBusiness,
  LuExternalLink as ExternalLink,
} from "react-icons/lu";
import  RockContactForm from "../components/RockContactForm";
import RockCard from "../components/RockCard";


const experiences = [
  {
    company: "Xebia",
    role: "Intern Trainee",
    duration: "May 2025 – July 2025",
    description:
      "Contributed to MERN applications, including a marketplace module under mentor guidance. Built visual editors and gained hands-on exposure to Microsoft Azure (AZ-204).",
  },
  {
    company: "EatOnTime",
    role: "Application Developer Intern",
    duration: "Oct 2024 – Jan 2025",
    description:
      "Worked on a food-delivery product at an early-stage startup. Helped design core flows, refine UI/UX, and ship key app features with the team.",
  },
];

const certificates = [
  {
    title: "Developer Solutions for Microsoft Azure (AZ-204)",
    year: 2025,
    link:
      "https://learn.microsoft.com/api/achievements/share/en-us/AarushiDaksh-3115/W24BWLZN?sharingId=5832313FE374D7BA",
  },
  {
    title: "Microsoft Azure Administrator",
    year: 2025,
    link:
      "https://learn.microsoft.com/api/achievements/share/en-us/AarushiDaksh-3115/8ZBG46GW?sharingId=5832313FE374D7BA",
  },
  {
    title: "Developer AI Solutions for Microsoft Azure",
    year: 2025,
    link:
      "https://learn.microsoft.com/api/achievements/share/en-us/AarushiDaksh-3115/NVJXYCZF?sharingId=5832313FE374D7BA",
  },
  { title: "ICPCT-2025 IEEE Paper Presentation – A MCDM Approach for E-Commerce", year: 2025 },
  { title: "Google Cloud Arcade Facilitator", year: 2025 },
  { title: "Member – Women in Tech (HerKey)", year: 2025 },
];

export default function ExperiencePage() {
  return (
    <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      {/* Header CTA */}
      <div className="mb-10 flex items-center justify-center">
        <a
          href="https://medium.com/@aarushi312004"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-black/70 dark:border-white/70 px-4 py-2 text-sm font-medium transition-colors hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
        >
          {/* Medium Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1043.63 592.71"
            className="h-5 w-5 fill-current"
            aria-hidden
          >
            <path d="M588.67 296.59a296.59 296.59 0 1 1-593.18 0 296.59 296.59 0 0 1 593.18 0ZM812.5 296.59a105.07 105.07 0 1 1-210.14 0 105.07 105.07 0 0 1 210.14 0Zm231.13 0a52.54 52.54 0 1 1-105.08 0 52.54 52.54 0 0 1 105.08 0Z" />
          </svg>
          Visit My Medium Profile
        </a>
      </div>

      {/* Work Experience */}
      <h1 className="mb-6 text-xl font-medium">
        Work Experience
      </h1>

      <ol className="relative ml-3 space-y-8 border-l border-neutral-300/70 dark:border-neutral-700/70">
        {experiences.map((exp, i) => (
          <li key={i} className="pl-6">
            {/* Node dot */}
            <span className="absolute -left-[7px] mt-2 h-3.5 w-3.5 rounded-full bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-300 ring-4 ring-white dark:ring-black" />
            <div className="rounded-2xl border border-neutral-200/70 dark:border-neutral-800/70 bg-white/70 dark:bg-black/40 backdrop-blur-sm p-5 transition-shadow hover:shadow-lg">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <div className="inline-flex items-center gap-2 text-base font-semibold">
                  <BriefcaseBusiness className="h-4 w-4 opacity-80" />
                  {exp.role}
                </div>
                <span className="text-neutral-500">•</span>
                <div className="text-base font-medium">{exp.company}</div>
              </div>

              <div className="mt-1 flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <CalendarDays className="h-4 w-4" />
                <span>{exp.duration}</span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
                {exp.description}
              </p>
            </div>
          </li>
        ))}
      </ol>

      {/* Certificates */}
      <h2 className="mb-6 mt-6 text-xl font-medium">
        Certificates & Learnings
      </h2>

      <ul className="flex flex-wrap gap-3">
        {certificates.map((cert, i) => (
          <li
            key={i}
            className="group inline-flex items-center gap-2 rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white/70 dark:bg-black/40 backdrop-blur-sm px-3 py-2 text-sm"
          >
            <Sparkles className="h-4 w-4 opacity-80" />
            <span className="font-medium">{cert.title}</span>
            {cert.year && (
              <span className="text-neutral-500 dark:text-neutral-400">({cert.year})</span>
            )}
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-700 dark:text-blue-400 hover:underline ml-1"
              >
                View <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </li>
        ))}
      </ul>

      {/* Contact (Rock, but tasteful) */}
      <div className="mt-14">
        <RockContactForm />
      </div>

      
    </section>
  );
}
