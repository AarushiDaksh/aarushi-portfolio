"use client";

import { T } from "app/components/top-nav";
import { useEffect, useRef, useState, useMemo } from "react";
import { LuSend, LuBot, LuUser, LuChevronDown, LuChevronUp, LuTrash2 } from "react-icons/lu";

type Msg = { id: string; role: "user" | "assistant"; content: string };

const TITLE = "I'm AD Aarushi's digital twin";
const SUBTITLE = "Begin your interview with me.";
const GREETING =
  "Hi! I’m AD digital twin. Ask me anything about projects, skills, internships, or my resume. 😊";

function initialMessage(): Msg {
  return { id: crypto.randomUUID(), role: "assistant", content: GREETING };
}

// —— set this to your actual bottom floating navbar height (px) ——
const BOTTOM_NAV_H = 64;
// ————————————————————————————————————————————————————————

export default function DigitalTwinPage() {
  const [messages, setMessages] = useState<Msg[]>([initialMessage()]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [facts, setFacts] = useState<string[]>([]);
  const [errText, setErrText] = useState<string | null>(null);
  const [showQuick, setShowQuick] = useState(true);

  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const composerRef = useRef<HTMLDivElement | null>(null);

  const [composerH, setComposerH] = useState<number>(96);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Load saved facts
  useEffect(() => {
    try {
      const raw = localStorage.getItem("twinFacts");
      if (raw) setFacts(JSON.parse(raw));
    } catch {}
  }, []);

  // Auto-scroll on new messages
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
    el.scrollTo({ top: el.scrollHeight, behavior });
  }, [messages, loading]);

  // Detect mobile (<= 767px)
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Track composer height precisely (for perfect bottom padding on mobile)
  useEffect(() => {
    const el = composerRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver((entries) => {
      const h = entries[0]?.contentRect?.height ?? 96;
      setComposerH(h);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

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
        { id: crypto.randomUUID(), role: "assistant", content: `Got it. I’ll remember: “${fact}”.` },
      ]);
      return true;
    }
    if (t.toLowerCase() === "/facts") {
      const list = facts.length ? facts.map((f, i) => `${i + 1}. ${f}`).join("\n") : "(no saved facts yet)";
      setMessages((m) => [...m, { id: crypto.randomUUID(), role: "assistant", content: `Saved facts:\n${list}` }]);
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

  const padBottom = useMemo(() => {
    if (!isMobile) return undefined;
    // room for composer + safe-area + bottom navbar + a tiny breathing-space
    return `calc(${composerH}px + env(safe-area-inset-bottom, 0px) + ${BOTTOM_NAV_H}px + 12px)`;
  }, [isMobile, composerH]);

  return (
    <main
      className="relative mx-auto w-full mt-25 max-w-5xl px-3 sm:px-4 pt-12 sm:pt-[35px] min-h-[100svh] flex flex-col"
         >
      {/* soft hero glow */}
      <span className="accent-line" aria-hidden />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="mx-auto mt-24 h-[70vw] max-h-[540px] w-[90vw] max-w-[900px] rounded-full blur-3xl"
          // style={{
          //   background:
          //     "radial-gradient(closest-side, rgba(236,72,153,.16), rgba(168,85,247,.14), rgba(56,189,248,.12), transparent 70%)",
          // }}
        />
      </div>

      {/* Header */}
      <section className="mb-4 sm:mb-6 text-center">
        <T />
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
<h1
  className="mt-4 text-[20px] sm:text-2xl font-semibold 
             bg-gradient-to-r from-[#8be9fd] via-[#6272a4] to-[#bd93f9] 
             bg-clip-text text-transparent"
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
            aria-expanded={showQuick}
            aria-controls="quick-questions"
          >
            {showQuick ? <LuChevronUp className="h-3.5 w-3.5" /> : <LuChevronDown className="h-3.5 w-3.5" />}
            {showQuick ? "Hide quick questions" : "Show quick questions"}
          </button>

          {showQuick && (
            <div
              id="quick-questions"
              className="flex flex-wrap items-center justify-center gap-2 px-2 max-w-3xl mx-auto"
            >
              {quickPrompts.map((qp) => (
                <button
                  key={qp.text}
                  onClick={() => setInput(qp.text)}
                  className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs transition hover:-translate-y-0.5 hover:shadow-sm"
                  style={{ borderColor: "var(--ring)", color: "var(--text)", background: "var(--card)" }}
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
          style={{ borderColor: "var(--ring)", background: "rgba(244,63,94,0.08)", color: "var(--text)" }}
          role="alert"
        >
          {errText}
        </div>
      )}

      {/* Toolbar */}
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

      {/* Chat scroller */}
      <div
        ref={scrollerRef}
        className="flex-1 min-h-0 w-full overflow-y-auto rounded-3xl border p-3 sm:p-4 backdrop-blur-md bg-white/40 dark:bg-black/25"
        style={{ borderColor: "var(--ring)", paddingBottom: padBottom }}
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
                    aria-hidden
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
              <div className="rounded-2xl border px-3.5 py-2.5 text-sm" style={{ borderColor: "var(--ring)", color: "var(--text)" }}>
                typing…
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Fixed composer on mobile, inline on desktop */}
      <div
        ref={composerRef}
        className="fixed inset-x-0 bottom-0 z-40 md:static"
        style={{
          background: "color-mix(in oklab, var(--app-bg, transparent) 70%, transparent)",
          backdropFilter: "saturate(120%) blur(8px)",
          WebkitBackdropFilter: "saturate(120%) blur(4px)",
        }}
      >
        {/* spacer so composer sits above bottom floating navbar on mobile */}
        <div className="md:hidden" style={{ height:"" }} />

        <div className="mx-auto w-full max-w-2xl px-3 sm:px-0 pb-[max(env(safe-area-inset-bottom),0px)] pt-2 sm:pt-3">
          <form onSubmit={onSend} className="flex items-center gap-2" role="search">
            <label htmlFor="chat-input" className="sr-only">
              Chat input
            </label>
            <div
              className="flex-1 rounded-full border pl-4 pr-2 bg-[var(--card)] shadow-sm transition
                         focus-within:ring-2 focus-within:ring-inset focus-within:ring-[rgba(130,90,231,1)]"
              style={{ borderColor: "var(--ring)" }}
            >
              <input
                id="chat-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything…"
                className="w-full rounded-full bg-transparent py-3 text-sm outline-none placeholder:opacity-60"
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
        </div>
      </div>

      {/* Footer helper (desktop) */}
      <div
        className="hidden md:flex mx-auto mt-6 max-w-2xl flex-wrap items-center justify-center gap-3 text-[11px] opacity-80"
        style={{ color: "var(--text)" }}
      >
        <span>I keep answers short and simple.</span>
        <span>•</span>
        <span>This is dramatic just like me — I love to create. Do we?</span>
      </div>
    </main>
  );
}

