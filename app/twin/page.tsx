"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  LuSend,
  LuBot,
  LuUser,
  LuMessageSquare,
  LuChevronDown,
  LuChevronUp,
  LuFileText,
  LuBriefcase,
  LuGraduationCap,
  LuTrash2,
  LuExternalLink,
} from "react-icons/lu";

type Msg = { id: string; role: "user" | "assistant"; content: string };

const TITLE = "I'm Aarushi's digital twin";
const SUBTITLE = "Begin your interview with me.";
const RESUME_LINK =
  "https://drive.google.com/file/d/1pF-kAe8BXIsKgUyti3nHPXKceynd89WR/view";
const GREETING =
  "Hi! I’m Aarushi’s digital twin. Ask me anything about projects, skills, internships, or my resume. 😊";

// Internships
const INTERNSHIPS: Array<{
  company: string;
  role: string;
  duration: string;
  blurb: string;
}> = [
  {
    company: "Xebia",
    role: "Intern Trainee",
    duration: "May 2025 – July 2025",
    blurb:
      "MERN features (marketplace), visual editors, and hands-on Microsoft Azure (AZ-204).",
  },
  {
    company: "EatOnTime",
    role: "Application Developer Intern",
    duration: "Oct 2024 – Jan 2025",
    blurb:
      "Food-delivery product; core flows, UI/UX polishing, and shipping features with the team.",
  },
];

// Certificates
const CERTS: Array<{ title: string; year: string; href?: string }> = [
  { title: "Developer Solutions for Microsoft Azure (AZ-204)", year: "2025" },
  { title: "Microsoft Azure Administrator", year: "2025" },
  { title: "Developer AI Solutions for Microsoft Azure", year: "2025" },
  {
    title: "ICPCT-2025 IEEE Paper – A MCDM Approach for E-Commerce (Presentation)",
    year: "2025",
  },
  { title: "Google Cloud Arcade Facilitator", year: "2025" },
  { title: "Member – Women in Tech (HerKey)", year: "2025" },
  { title: "Contributor & Mentor – GSSoC’25 (GirlScript Summer Of Code)", year: "2025" },
];

// Projects
const PROJECTS: Array<{
  title: string;
  year: number;
  description: string;
  image: string;
  url: string;
}> = [
  {
    title: "SkillSlack – Developers Collaboration Platform",
    year: 2025,
    description:
      "Real-time Slack-style workspace for developers featuring channel-based chat, GitHub PR sync, voice rooms, and an AI chatbot. Built with Clerk auth, Socket.IO, GitHub API, and LiveKit.",
    image: "/photos/slack.png",
    url: "https://skill-slack.vercel.app",
  },
  {
    title: "StuGig – Marketplace for Students",
    year: 2025,
    description:
      "A freelance gig platform built for students. Includes role-based dashboards, Stripe payments, SkillSwap matching, real-time chat, and admin tools.",
    image: "/photos/StuGig.png",
    url: "https://stu-gig.vercel.app",
  },
  {
    title: "Maniac – AI Productivity Agent",
    year: 2025,
    description:
      "AI agent to manage tasks, notes, and reminders with a retro-style animated timer and motivational feedback. Supports session logs, alerts, and smooth UX.",
    image: "/photos/maniac.png",
    url: "https://maniac-ten.vercel.app",
  },
  {
    title: "LinkPilot",
    year: 2025,
    description:
      "LinkedIn automation bot for students to connect and find job opportunities - Backend Application with Express and MongoDB.",
    url: "https://github.com/AarushiDaksh/LinkPilot.git",
    image: "/photos/LinkPilot.jpeg",
  },
  {
    title: "Flare",
    year: 2025,
    description: "Dating App - Backend Application with Express and MongoDB.",
    url: "https://github.com/AarushiDaksh/DatingApp.git",
    image: "/photos/Flare.jpeg",
  },
  {
    title: "Voqit-Ai",
    year: 2025,
    description:
      "AI-ChatBot designed to interact with real-time users using Clerk Authentication.",
    url: "https://voqit-ai.vercel.app/",
    image: "/photos/Voqit-Ai.png",
  },
  {
    title: "CURD-App",
    year: 2025,
    description:
      "Express CRUD Application using MVC structure with Docker support.",
    url: "https://github.com/AarushiDaksh/express-curd-app.git",
    image: "/photos/Docker.jpeg",
  },
  {
    title: "Voqit-ecom",
    year: 2025,
    description:
      "A responsive and modern e-commerce web app built with Next.js 14, TailwindCSS, and Clerk authentication. Includes product listing, cart, and protected routes.",
    url: "https://superb-squirrel-63.accounts.dev/sign-in?redirect_url=https%3A%2F%2Fe-com-nextjs-voqit.vercel.app%2F",
    image: "/photos/ecom.png",
  },
  {
    title: "3Js-Portfolio",
    year: 2025,
    description:
      "Excited to learn more in Three.js, so I started by building my own personal 3D portfolio room.",
    url: "https://3-js-portfolio-aarushi-dakshs-projects.vercel.app/",
    image: "/photos/3Js.png",
  },
  {
    title: "Album",
    year: 2025,
    description: "",
    url: "",
    image: "/photos/music.jpeg",
  },
];

function initialMessage(): Msg {
  return { id: crypto.randomUUID(), role: "assistant", content: GREETING };
}

export default function DigitalTwinPage() {
  const [messages, setMessages] = useState<Msg[]>([initialMessage()]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [facts, setFacts] = useState<string[]>([]);
  const [errText, setErrText] = useState<string | null>(null);
  const [showQuick, setShowQuick] = useState(true);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [showSkills, setShowSkills] = useState(false);
  
  useEffect(() => {
    try {
      const raw = localStorage.getItem("twinFacts");
      if (raw) setFacts(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    scrollerRef.current?.scrollTo({
      top: scrollerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  function saveFacts(next: string[]) {
    setFacts(next);
    try {
      localStorage.setItem("twinFacts", JSON.stringify(next));
    } catch {}
  }

  function handleClear() {
    setMessages([initialMessage()]);
    setErrText(null);
  }

  function maybeHandleCommand(text: string) {
    const t = text.trim();
    if (t.toLowerCase().startsWith("/remember ")) {
      const fact = t.slice(10).trim();
      if (!fact) return false;
      const next = [...facts, fact];
      saveFacts(next);
      setMessages((m) => [
        ...m,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: `Got it. I’ll remember: “${fact}”.`,
        },
      ]);
      return true;
    }
    if (t.toLowerCase() === "/facts") {
      const list = facts.length
        ? facts.map((f, i) => `${i + 1}. ${f}`).join("\n")
        : "(no saved facts yet)";
      setMessages((m) => [
        ...m,
        { id: crypto.randomUUID(), role: "assistant", content: `Saved facts:\n${list}` },
      ]);
      return true;
    }
    if (t.toLowerCase().startsWith("/forget ")) {
      const idx = Number(t.slice(8).trim()) - 1;
      if (!Number.isFinite(idx)) return false;
      const next = facts.filter((_, i) => i !== idx);
      saveFacts(next);
      setMessages((m) => [
        ...m,
        { id: crypto.randomUUID(), role: "assistant", content: `Removed fact #${idx + 1}.` },
      ]);
      return true;
    }
    return false;
  }

  async function onSend(e?: React.FormEvent) {
    e?.preventDefault();
    setErrText(null);
    const text = input.trim();
    if (!text || loading) return;

    if (maybeHandleCommand(text)) {
      setInput("");
      return;
    }

    const userMsg: Msg = { id: crypto.randomUUID(), role: "user", content: text };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/twin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg], facts }),
      });

      if (!res.ok || !res.body) {
        const t = await res.text().catch(() => "");
        setErrText(t || `Request failed (${res.status})`);
        setMessages((m) => [
          ...m,
          { id: crypto.randomUUID(), role: "assistant", content: "Sorry, I can’t reply right now. Please try again." },
        ]);
        setLoading(false);
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      const id = crypto.randomUUID();
      setMessages((m) => [...m, { id, role: "assistant", content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages((m) => m.map((msg) => (msg.id === id ? { ...msg, content: acc } : msg)));
      }
    } catch {
      setErrText("Network error. Check your API key / internet.");
      setMessages((m) => [
        ...m,
        { id: crypto.randomUUID(), role: "assistant", content: "Network error. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  const quickPrompts = [
    { text: "Who are you?" },
    { text: "What are your main skills as a fresher?" },
    { text: "Write a 2-line summary for your resume." },
    { text: "How can people contact you?" },

  ];

  return (
  <main
  className="relative mx-auto max-w-4xl md:max-w-5xl px-3 sm:px-4 pt-6 sm:pt-8 pb-10 md:pb-12"
  style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
>

    {/* accent line (global helper if you added it) */}
    <span className="accent-line" aria-hidden />

    {/* soft hero glow behind header */}
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div
        className="mx-auto mt-24 h-[70vw] max-h-[540px] w-[90vw] max-w-[900px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(236,72,153,.16), rgba(168,85,247,.14), rgba(56,189,248,.12), transparent 70%)",
        }}
      />
    </div>

    {/* Header */}
    <section className="mb-6 text-center">
      <div
        className="mx-auto flex h-20 w-20 sm:h-[96px] sm:w-[96px] items-center justify-center rounded-2xl border shadow-sm"
        style={{ borderColor: "var(--ring1)", background: "var(--card)" }}
      >
        <img
          src="/photos/aa.png"
          alt="Avatar"
          className="h-[72px] w-[72px] sm:h-[84px] sm:w-[84px] rounded-xl object-cover"
        />
      </div>

      {/* gradient title text for a bit of pop */}
      <h1
        className="mt-4 text-[20px] sm:text-2xl font-semibold"
        style={{
          background: "linear-gradient(90deg, var(--c1), var(--c2))",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        {TITLE}
      </h1>

      <p className="mt-1 text-sm opacity-80" style={{ color: "var(--text)" }}>
        {SUBTITLE}
      </p>

      {/* Quick chips */}
      <div className="mt-5">
        <button
          onClick={() => setShowQuick((s) => !s)}
          className="mx-auto mb-3 flex items-center justify-center gap-1 text-xs opacity-90 hover:opacity-100"
          style={{ color: "var(--text)" }}
          type="button"
        >
          {showQuick ? <LuChevronUp className="h-3.5 w-3.5" /> : <LuChevronDown className="h-3.5 w-3.5" />}
          {showQuick ? "Hide quick questions" : "Show quick questions"}
        </button>

        {showQuick && (
          <div className="flex flex-wrap items-center justify-center gap-2">
            {quickPrompts.map((qp) => (
              <button
                key={qp.text}
                onClick={() => setInput(qp.text)}
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs transition hover:-translate-y-0.5 hover:shadow-sm"
                style={{
                  borderColor: "var(--ring)",
                  color: "var(--text)",
                  background: "var(--card)",
                }}
                type="button"
              >
                {qp.text}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>

    {/* Error banner */}
    {errText && (
      <div
        className="mb-3 rounded-2xl border px-4 py-3 text-sm"
        style={{
          borderColor: "var(--ring)",
          background: "rgba(244,63,94,0.08)",
          color: "var(--text)",
        }}
      >
        {errText}
      </div>
    )}

    {/* ONE clear chat button */}
    <div className="mx-auto mb-2 flex w-full max-w-2xl justify-end">
      <button
        onClick={handleClear}
        title="Clear chat"
        className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] transition hover:-translate-y-0.5 hover:shadow-sm"
        style={{ borderColor: "var(--ring)", color: "var(--text)", background: "var(--card)" }}
        type="button"
        aria-label="Clear chat"
      >
        <LuTrash2 className="h-4 w-4" />
        Clear chat
      </button>
    </div>

    {/* Chat (glassy + fixed heights per breakpoint so it scrolls nicely everywhere) */}
    <div
      ref={scrollerRef}
      className="h-[56svh] sm:h-[58vh] md:h-[60vh] w-full overflow-y-auto rounded-3xl border p-3 sm:p-4 backdrop-blur-md bg-white/40 dark:bg-black/25"
      style={{ borderColor: "var(--ring)" }}
      role="log"
      aria-live="polite"
    >
      <div className="mx-auto flex max-w-2xl flex-col gap-3">
        {messages.map((m) => {
          const isUser = m.role === "user";
          return (
            <div key={m.id} className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
              <div className={`flex max-w-[92%] sm:max-w-[85%] items-end gap-2 ${isUser ? "flex-row-reverse" : ""}`}>
                <span
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs"
                  style={{ borderColor: "var(--ring)", color: "var(--text)" }}
                >
                  {isUser ? <LuUser className="h-4 w-4" /> : <LuBot className="h-4 w-4" />}
                </span>
                <div
                  className="rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed shadow-sm"
                  style={{
                    border: "1px solid var(--ring)",
                    background: isUser
                      ? "linear-gradient(135deg, rgba(125,82,250,.18), rgba(56,189,248,.18))"
                      : "var(--card)",
                    color: "var(--text)",
                  }}
                >
                  {m.content}
                </div>
              </div>
            </div>
          );
        })}

        {loading && (
          <div className="flex items-center gap-2 opacity-80" role="status" aria-live="polite">
            <span
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs"
              style={{ borderColor: "var(--ring)", color: "var(--text)" }}
            >
              <LuBot className="h-4 w-4 animate-pulse" />
            </span>
            <div
              className="rounded-2xl border px-3.5 py-2.5 text-sm"
              style={{ borderColor: "var(--ring)", color: "var(--text)" }}
            >
              typing…
            </div>
          </div>
        )}
      </div>
    </div>
{/* Composer: fixed on mobile, static on ≥sm; single ring, sleek */}
<div
  className="
    fixed inset-x-0 bottom-0 z-50 sm:static sm:z-auto
    bg-white/75 dark:bg-black/50 backdrop-blur-md
    border-t sm:border-0
  "
  style={{ borderColor: "var(--ring)" }}
>
  <div className="mx-auto w-full max-w-2xl px-3 py-3 sm:px-0 sm:py-0">
    <form onSubmit={onSend} className="flex items-center gap-2">
      <div
        className="
          flex-1 rounded-full border pl-4 pr-2 bg-[var(--card)] shadow-sm
          transition
          focus-within:border-transparent
          focus-within:ring-2 focus-within:ring-inset
          focus-within:ring-[rgba(130,90,231,1)] focus-within:ring-offset-0
        "
        style={{ borderColor: "var(--ring)" }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything…"
          className="w-full rounded-full bg-transparent py-3 px-3 text-sm outline-none focus:outline-none focus-visible:outline-none placeholder:opacity-60"
          style={{ color: "var(--text)" }}
          aria-label="Chat input"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center justify-center rounded-full border p-2.5 shadow-sm transition hover:-translate-y-0.5 disabled:opacity-60"
        style={{ borderColor: "var(--ring)", color: "var(--text)", background: "var(--card)" }}
        aria-label="Send message"
      >
        <LuSend className="h-5 w-5" />
      </button>
    </form>

    {/* safe-area shim for iOS home bar */}
    <div className="h-[env(safe-area-inset-bottom)] sm:hidden" />
  </div>
</div>


    {/* Footer helper */}
    <div
      className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-3 text-[11px] opacity-80"
      style={{ color: "var(--text)" }}
    >
      <span>I keep answers short and simple.</span>
      <span>•</span>
      <span>This is dramatic just like me I love to create so do we ?</span>
    </div>
  </main>
);
}