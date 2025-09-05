"use client";

import Link from "next/link";
import {
  LuSparkles as Sparkles,
  LuCalendarDays as CalendarDays,
  LuBriefcaseBusiness as BriefcaseBusiness,
  LuExternalLink as ExternalLink,
} from "react-icons/lu";
import RockContactForm from "../components/RockContactForm";

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
  { title: "Contributor and Mentor - GSSoC'25 (GirlScript Summer Of Code)", year: 2025 },
];

export default function ExperiencePage() {
  return (
    <section className="mx-auto max-w-4xl px-1 sm:px-1 lg:px-1 pb-16 mt-3">
      {/* Page heading */}
      <header className="mb-10 text-center">
        <div className="mx-auto mb-4 h-px w-28 bg-gradient-to-r from-pink-500 via-amber-400 to-sky-400" />
        <h2
              className="mb-6 text-xl font-bold"
              style={{ color: "var(--text)" }}
            >
            Experiences & Achievements
            </h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          A quick look at my recent work, certifications, and how to reach me.
        </p>

        {/* Header CTA */}
        <div className="mt-6 flex items-center justify-center">
          <a
            href="https://medium.com/@aarushi312004"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 rounded-xl p-[1.5px] focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500/60"
            style={{
              background:
                "linear-gradient(120deg, rgba(255,82,191,.7), rgba(255,185,0,.55), rgba(56,189,248,.6))",
            }}
          >
            <span className="inline-flex items-center gap-2 rounded-[10px] bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white px-4 py-2 text-sm font-semibold ring-1 ring-neutral-300 dark:ring-white/10 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors">
              {/* Medium Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1043.63 592.71"
                className="h-5 w-5 fill-current"
                aria-hidden
              >
                <path d="M588.67 296.59a296.59 296.59 0 1 1-593.18 0 296.59 296.59 0 0 1 593.18 0ZM812.5 296.59a105.07 105.07 0 1 1-210.14 0 105.07 105.07 0 0 1 210.14 0Zm231.13 0a52.54 52.54 0 1 1-105.08 0 52.54 52.54 0 0 1 105.08 0Z" />
              </svg>
              Visit my Medium
            </span>
          </a>
        </div>
      </header>

      {/* Work Experience */}
      <section aria-labelledby="work-heading" className="mb-12">
        <h2
              className="mb-6 text-xl font-medium"
              style={{ color: "var(--text)" }}
            >
              Work Experience
            </h2>

        <ol className="relative ml-3 space-y-8 border-l border-neutral-300/70 dark:border-neutral-700/70">
          {experiences.map((exp, i) => (
            <li key={i} className="pl-6">
              {/* Node dot */}
              <span className="absolute -left-[7px] mt-2 h-3.5 w-3.5 rounded-full bg-gradient-to-b from-neutral-900 to-neutral-600 ring-4 ring-white dark:from-white dark:to-neutral-300 dark:ring-black" />
              <div className="rounded-2xl border border-neutral-200/70 bg-white/70 p-5 backdrop-blur-sm transition-shadow hover:shadow-lg dark:border-neutral-800/70 dark:bg-black/40">
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
      </section>

      {/* Certificates */}
      <section aria-labelledby="certs-heading" className="mb-12">
        <h2 id="certs-heading" className="mb-6 text-xl font-semibold  dark:text-neutral-100">
          Certificates & Learnings
        </h2>

        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {certificates.map((cert, i) => (
            <li
              key={i}
              className="group inline-flex items-start gap-2 rounded-xl border border-neutral-200/80 bg-white/70 px-3 py-2 text-sm backdrop-blur-sm dark:border-neutral-800/80 dark:bg-black/40"
            >
              <Sparkles className="mt-0.5 h-4 w-4 opacity-80" />
              <div className="min-w-0">
                <div className="font-medium text-neutral-900 dark:text-neutral-100">{cert.title}</div>
                <div className="mt-0.5 flex flex-wrap items-center gap-2">
                  {cert.year && (
                    <span className="text-neutral-500 dark:text-neutral-400">({cert.year})</span>
                  )}
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sky-700 underline-offset-4 hover:underline dark:text-sky-400"
                    >
                      View <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <section aria-labelledby="contact-heading" className="mt-14">
        <h2 id="contact-heading" className="mb-4 text-xl font-semibold  dark:text-neutral-100">
          Contact
        </h2>
        <RockContactForm />
      </section>
    </section>
  );
}
