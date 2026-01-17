"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LuSend,
  LuBot,
  LuUser,
  LuTrash2,
  LuChevronUp,
  LuChevronDown,
} from "react-icons/lu";

type Msg = { id: string; role: "user" | "assistant"; content: string };

const SUBTITLE = "Ask about Aarushi’s skills, projects, and experience.";
const GREETING =
  "Hi, I’m AD — Aarushi’s digital twin. Ask me about her journey, projects, and skills.";

function initialMessage(): Msg {
  return { id: crypto.randomUUID(), role: "assistant", content: GREETING };
}

export default function DigitalTwinChat() {
  const [messages, setMessages] = useState<Msg[]>([initialMessage()]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showQuick, setShowQuick] = useState(true);

  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const quickPrompts = useMemo(
    () => [
      { text: "Who are you?" },
      { text: "Summarize Aarushi’s projects." },
      { text: "What stack does she use?" },
      { text: "Where has she interned?" },
      { text: "Give me a short intro for my resume." },
    ],
    []
  );

  useEffect(() => {
    const el = scrollerRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function onSend(e?: React.FormEvent) {
    e?.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    const userMsg: Msg = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmed,
    };

    // IMPORTANT: build payload from prev state to avoid stale closure
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const payloadMessages = [...messages, userMsg];

      const res = await fetch("/api/twin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: payloadMessages }),
      });

      if (!res.ok || !res.body) throw new Error("Network error");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      let acc = "";
      const id = crypto.randomUUID();

      setMessages((prev) => [...prev, { id, role: "assistant", content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });

        setMessages((prev) =>
          prev.map((m) => (m.id === id ? { ...m, content: acc } : m))
        );
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: "⚠️ Connection error. Try again.",
        },
      ]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  }

  function handleClear() {
    setMessages([initialMessage()]);
    setInput("");
    inputRef.current?.focus();
  }

  return (
    <div className="h-full w-full flex flex-col">
      {/* Header (inside widget) */}
      <div className="px-4 py-3 border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl border border-white/10 bg-white/5 grid place-items-center">
                <LuBot size={14} className="text-white/90" />
              </div>
              <div className="leading-tight">
                <div className="font-medium text-white">AD — Digital Twin</div>
                <div className="text-xs text-white/60">{SUBTITLE}</div>
              </div>
            </div>
          </div>

          {/* <button
            onClick={handleClear}
            type="button"
            className="shrink-0 inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-2.5 py-2 text-xs text-white/70 hover:text-white hover:bg-white/10 transition"
            title="Clear"
          >
            <LuTrash2 size={14} />
          </button> */}
        </div>

        {/* Quick prompts */}
        <div className="mt-3">
          <button
            onClick={() => setShowQuick((s) => !s)}
            className="text-xs inline-flex items-center gap-1.5 text-white/60 hover:text-white transition"
            type="button"
          >
            {showQuick ? <LuChevronUp size={14} /> : <LuChevronDown size={14} />}
            {showQuick ? "Hide quick prompts" : "Show quick prompts"}
          </button>

          <AnimatePresence>
            {showQuick && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.22 }}
                className="overflow-hidden"
              >
                <div className="mt-2 flex flex-wrap gap-2">
                  {quickPrompts.map((p) => (
                    <button
                      key={p.text}
                      onClick={() => {
                        setInput(p.text);
                        inputRef.current?.focus();
                      }}
                      type="button"
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-white/80 hover:bg-white/10 transition"
                    >
                      {p.text}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Messages */}
      <div
        ref={scrollerRef}
        className="flex-1 overflow-y-auto px-4 py-4 space-y-3 scrollbar-thin"
      >
        {messages.map((m) => {
          const isUser = m.role === "user";
          return (
            <div key={m.id} className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
              <div className={`flex items-end gap-2 max-w-[92%] ${isUser ? "flex-row-reverse" : ""}`}>
                <div
                  className={`h-8 w-8 rounded-xl border border-white/10 grid place-items-center ${
                    isUser ? "bg-white text-black" : "bg-white/5 text-white"
                  }`}
                >
                  {isUser ? <LuUser size={14} /> : <LuBot size={14} />}
                </div>

                <div
                  className="rounded-2xl px-4 py-2.5 text-sm leading-relaxed border border-white/10 shadow-sm"
                  style={{
                    background: isUser ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.06)",
                    color: "rgba(255,255,255,0.92)",
                  }}
                >
                  {m.content}
                </div>
              </div>
            </div>
          );
        })}

        {loading && (
          <div className="flex items-center gap-2 text-white/60">
            <div className="h-8 w-8 rounded-xl border border-white/10 bg-white/5 grid place-items-center">
              <LuBot className="animate-pulse" size={14} />
            </div>
            <div className="text-sm opacity-80">thinking…</div>
          </div>
        )}
      </div>

      {/* Input */}
      <form
        onSubmit={onSend}
        className="border-t border-white/10 bg-black/20 backdrop-blur-xl p-3"
      >
        <div className="flex items-center gap-2">
          <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5 focus-within:ring-2 ring-white/10 transition">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message…"
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/50"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="rounded-2xl border border-white/10 bg-white/10 px-4 py-2.5 text-white hover:bg-white/15 transition disabled:opacity-60"
            aria-label="Send"
            title="Send"
          >
            <LuSend size={16} />
          </button>
        </div>
      </form>
    </div>
  );
}
