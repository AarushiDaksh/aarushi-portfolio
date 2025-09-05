"use client";

import { LuCode, LuServer, LuDatabase, LuCloud, LuSmartphone, LuSparkles } from "react-icons/lu";

type Skill = { name: string; level: 1 | 2 | 3 | 4 | 5 };
type Group = { title: string; icon: React.ReactNode; items: Skill[] };

const GROUPS: Group[] = [
  {
    title: "Frontend",
    icon: <LuCode className="h-4 w-4" />,
    items: [
      { name: "React", level: 4 },
      { name: "Next.js", level: 4 },
      { name: "TailwindCSS", level: 5 },
    ],
  },
  {
    title: "Backend",
    icon: <LuServer className="h-4 w-4" />,
    items: [
      { name: "Node.js", level: 4 },
      { name: "Express", level: 4 },
      { name: "Stripe (basic)", level: 3 },
      { name: "WebSockets / Socket.IO", level: 3 },
    ],
  },
  {
    title: "Data",
    icon: <LuDatabase className="h-4 w-4" />,
    items: [
      { name: "MongoDB", level: 4 },
      { name: "Mongoose", level: 4 },
    ],
  },
  {
    title: "Cloud & Dev",
    icon: <LuCloud className="h-4 w-4" />,
    items: [
      { name: "Azure (AZ-204)", level: 3 },
      { name: "Docker (basics)", level: 3 },
      { name: "Git/GitHub", level: 4 },
    ],
  },
  {
    title: "Mobile",
    icon: <LuSmartphone className="h-4 w-4" />,
    items: [{ name: "React Native", level: 3 }],
  },
  {
    title: "DX & UI",
    icon: <LuSparkles className="h-4 w-4" />,
    items: [
      { name: "Clerk/Auth", level: 3 },
      { name: "Design systems", level: 3 },
      { name: "Accessibility", level: 3 },
    ],
  },
];

function Bar({ level }: { level: Skill["level"] }) {
  const pct = (level / 5) * 100;
  return (
    <div className="mt-2 h-1.5 w-full rounded-full bg-black/10 dark:bg-white/10">
      <div
        className="h-full rounded-full"
        style={{
          width: `${pct}%`,
          background:
            "linear-gradient(90deg, rgba(125,82,250,.75), rgba(56,189,248,.75))",
        }}
      />
    </div>
  );
}

export default function SkillsPanel({ onClose }: { onClose?: () => void }) {
  return (
    <section
      className="with-accent glass rounded-2xl border p-4 sm:p-5"
      style={{ color: "var(--text)" }}
      aria-labelledby="skills-heading"
    >
      <div className="mb-3 flex items-center justify-between">
        <h2 id="skills-heading" className="text-base sm:text-lg font-semibold">
          Skills snapshot
        </h2>
        {onClose && (
          <button
            onClick={onClose}
            className="rounded-full border px-2.5 py-1 text-xs opacity-80 hover:opacity-100"
            style={{ borderColor: "var(--ring)", background: "var(--card)" }}
          >
            Close
          </button>
        )}
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {GROUPS.map((g) => (
          <div key={g.title} className="rounded-xl border p-3 glass" style={{ borderColor: "var(--ring)" }}>
            <div className="flex items-center gap-2 text-sm font-medium">
              {g.icon}
              {g.title}
            </div>
            <ul className="mt-2 space-y-2">
              {g.items.map((s) => (
                <li key={s.name}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="opacity-90">{s.name}</span>
                    <span className="text-[11px] opacity-60">{s.level}/5</span>
                  </div>
                  <Bar level={s.level} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
