"use client";

import { useEffect, useRef, useState } from "react";
import { Navbar } from "app/components/nav";
import Footer from "app/components/footer";
import { motion } from "framer-motion";
import { LuSend, LuBot, LuUser, LuTrash2, LuChevronUp, LuChevronDown } from "react-icons/lu";
import { T } from "app/components/top-nav";

type Msg = { id: string; role: "user" | "assistant"; content: string };

const TITLE = "AD — Aarushi’s Digital Twin";
const SUBTITLE = "Ask anything about Aarushi’s skills, projects, or experience.";
const GREETING =
  "Hi, I’m AD — Aarushi’s digital twin. Let’s talk about her journey, projects, and skills.";

function initialMessage(): Msg {
  return { id: crypto.randomUUID(), role: "assistant", content: GREETING };
}

export default function DigitalTwinPage() {
  const [messages, setMessages] = useState<Msg[]>([initialMessage()]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showQuick, setShowQuick] = useState(true);
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const quickPrompts = [
    { text: "Who are you?" },
    { text: "Summarize Aarushi’s projects." },
    { text: "What stack does she use?" },
    { text: "Where has she interned?" },
  ];

  useEffect(() => {
    const el = scrollerRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages]);

  async function onSend(e?: React.FormEvent) {
    e?.preventDefault();
    if (!input.trim() || loading) return;
    const userMsg = { id: crypto.randomUUID(), role: "user" as const, content: input.trim() };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/twin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });
      if (!res.ok || !res.body) throw new Error("Network error");

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
      setMessages((m) => [
        ...m,
        { id: crypto.randomUUID(), role: "assistant", content: "⚠️ Connection error. Try again." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleClear() {
    setMessages([initialMessage()]);
  }

  return (
    <main className="relative flex flex-col min-h-screen transition-colors bg-[var(--bg)] text-[var(--text)] font-[Inter]">
      {/* ====== TOP NAV ====== */}
      <div className="fixed top-0 inset-x-0 z-50 border-b border-[var(--border)] bg-[var(--nav-bg)]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 h-14">
          <T />
        </div>
      </div>
      <div className="pt-20" />

      {/* ====== HERO ====== */}
      <section className="text-center pb-6 border-b border-[var(--border)]">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-3"
        >
          <div className="relative">
            <img
              src="/photos/aa.png"
              alt="Aarushi Daksh"
              className="h-20 w-20 rounded-xl object-cover grayscale"
            />
            <div className="absolute inset-0 rounded-xl bg-[var(--border)] blur-md" />
          </div>
          <h1 className="text-2xl font-semibold">{TITLE}</h1>
          <p className="text-sm text-[var(--text-muted)]">{SUBTITLE}</p>

          {/* Quick Prompts */}
          <div className="mt-4">
            <button
              onClick={() => setShowQuick((s) => !s)}
              className="text-xs flex items-center gap-1 text-[var(--text-muted)] hover:text-[var(--text)] transition"
            >
              {showQuick ? <LuChevronUp size={12} /> : <LuChevronDown size={12} />}
              {showQuick ? "Hide quick prompts" : "Show quick prompts"}
            </button>

            {showQuick && (
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {quickPrompts.map((p) => (
                  <button
                    key={p.text}
                    onClick={() => setInput(p.text)}
                    className="border border-[var(--border)] px-3 py-1.5 text-xs rounded-full hover:bg-[var(--control-hover)] transition"
                  >
                    {p.text}
                  </button>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </section>

      {/* ====== CHAT ====== */}
      <section
        ref={scrollerRef}
        className="flex-1 overflow-y-auto px-4 py-8 scrollbar-thin scrollbar-thumb-[var(--scroll)]"
      >
        <div className="mx-auto max-w-2xl flex flex-col gap-4">
          {messages.map((m) => {
            const isUser = m.role === "user";
            return (
              <div key={m.id} className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
                <div
                  className={`flex items-end gap-2 ${isUser ? "flex-row-reverse" : ""} max-w-[90%]`}
                >
                  <div
                    className={`h-8 w-8 rounded-md border border-[var(--border)] flex items-center justify-center ${
                      isUser ? "bg-[var(--text)] text-[var(--bg)]" : "bg-[var(--bubble-bg)] text-[var(--text)]"
                    }`}
                  >
                    {isUser ? <LuUser size={14} /> : <LuBot size={14} />}
                  </div>

                  <div
                    className={`rounded-2xl px-4 py-2 text-sm leading-relaxed border border-[var(--border)]`}
                    style={{
                      background: isUser
                        ? "var(--bubble-user)"
                        : "var(--bubble-assistant)",
                    }}
                  >
                    {m.content}
                  </div>
                </div>
              </div>
            );
          })}

          {loading && (
            <div className="flex items-center gap-2 text-[var(--text-muted)]">
              <div className="h-8 w-8 flex items-center justify-center border border-[var(--border)] rounded-md">
                <LuBot className="animate-pulse" size={14} />
              </div>
              <div className="text-sm opacity-70">thinking…</div>
            </div>
          )}
        </div>
      </section>

      {/* ====== INPUT ====== */}
      <form
        onSubmit={onSend}
        className="sticky bottom-0 w-full border-t border-[var(--border)] bg-[var(--nav-bg)]/80 backdrop-blur-sm"
      >
        <div className="mx-auto max-w-2xl flex items-center gap-2 px-4 py-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-transparent text-sm text-[var(--text)] placeholder:text-[var(--text-muted)] outline-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-md border border-[var(--border)] px-3 py-2 text-sm hover:bg-[var(--text)] hover:text-[var(--bg)] transition"
          >
            <LuSend size={16} />
          </button>
          <button
            onClick={handleClear}
            type="button"
            className="rounded-md border border-[var(--border)] px-2.5 py-2 text-[var(--text-muted)] hover:text-[var(--text)] transition"
          >
            <LuTrash2 size={15} />
          </button>
        </div>
      </form>

      <Footer />

      <style jsx global>{`
        :root {
          --bg: #f9f9fb;
          --nav-bg: #ffffff;
          --text: #111111;
          --text-muted: #666;
          --border: rgba(0, 0, 0, 0.12);
          --bubble-bg: #f1f1f3;
          --bubble-user: rgba(0, 0, 0, 0.05);
          --bubble-assistant: rgba(0, 0, 0, 0.03);
          --control-hover: rgba(0, 0, 0, 0.04);
          --scroll: rgba(0, 0, 0, 0.15);
        }

        .dark {
          --bg: #0e0e10;
          --nav-bg: #101012;
          --text: #fafafa;
          --text-muted: #a1a1aa;
          --border: rgba(255, 255, 255, 0.1);
          --bubble-bg: #141416;
          --bubble-user: rgba(255, 255, 255, 0.1);
          --bubble-assistant: rgba(255, 255, 255, 0.05);
          --control-hover: rgba(255, 255, 255, 0.08);
          --scroll: rgba(255, 255, 255, 0.15);
        }

        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-thumb {
          background-color: var(--scroll);
          border-radius: 6px;
        }
      `}</style>
    </main>
  );
}
