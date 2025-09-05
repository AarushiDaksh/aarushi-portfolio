"use client";

import { useState } from "react";
import { FaUser, FaEnvelope, FaRegCommentDots, FaPaperPlane } from "react-icons/fa";

export default function RockContactForm() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<{ type: "ok" | "err"; text: string } | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;

    setLoading(true);
    setMsg(null);

    // Build payload
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      subject: String(fd.get("subject") || ""),
      message: String(fd.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok || !data?.success) {
        throw new Error(data?.error || "Failed to send message.");
      }

      form.reset();
      setMsg({ type: "ok", text: "Thanks! Your message has been sent." });
    } catch (err: any) {
      setMsg({ type: "err", text: err?.message || "Something went wrong." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="
        relative overflow-hidden rounded-3xl border
        border-neutral-200/80 dark:border-neutral-800/80
        bg-gradient-to-br from-white/80 via-white/60 to-white/80
        dark:from-black/40 dark:via-black/30 dark:to-black/40
        backdrop-blur-md p-6 sm:p-8
      "
    >
      {/* soft theme lights using --c1/--c3 */}
      <div
        className="pointer-events-none absolute -top-24 -left-16 h-56 w-56 rounded-full blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--c1), transparent 70%)", opacity: 0.18 }}
      />
      <div
        className="pointer-events-none absolute -bottom-20 -right-16 h-56 w-56 rounded-full blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--c3), transparent 70%)", opacity: 0.18 }}
      />

      <div className="mb-6">
        <h3 className="text-2xl font-semibold tracking-tight  dark:text-white">Contact Me</h3>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
          I’m available to discuss collaborations, freelance work, or any project ideas you have in mind.
        </p>
      </div>

      <form className="grid grid-cols-1 gap-4 sm:grid-cols-2" onSubmit={onSubmit}>
        {/* Name */}
        <label
          className="
            group col-span-1 flex items-center gap-2 rounded-2xl border
            border-neutral-200/70 dark:border-neutral-800/70
            bg-white/70 dark:bg-neutral-900/40 px-3 py-3
            focus-within:ring-2 focus-within:ring-[rgb(var(--ring-focus))]/50
          "
        >
          <FaUser className="h-5 w-5 opacity-80" />
          <input
            name="name"
            required
            placeholder="Your name"
            className="w-full bg-transparent text-sm outline-none placeholder:text-neutral-400 dark:placeholder:text-neutral-500"
          />
        </label>

        {/* Email */}
        <label
          className="
            group col-span-1 flex items-center gap-2 rounded-2xl border
            border-neutral-200/70 dark:border-neutral-800/70
            bg-white/70 dark:bg-neutral-900/40 px-3 py-3
            focus-within:ring-2 focus-within:ring-[rgb(var(--ring-focus))]/50
          "
        >
          <FaEnvelope className="h-5 w-5 opacity-80" />
          <input
            type="email"
            name="email"
            required
            placeholder="Email address"
            className="w-full bg-transparent text-sm outline-none placeholder:text-neutral-400 dark:placeholder:text-neutral-500"
          />
        </label>

        {/* Subject */}
        <label
          className="
            group col-span-1 sm:col-span-2 flex items-center gap-2 rounded-2xl border
            border-neutral-200/70 dark:border-neutral-800/70
            bg-white/70 dark:bg-neutral-900/40 px-3 py-3
            focus-within:ring-2 focus-within:ring-[rgb(var(--ring-focus))]/50
          "
        >
          <FaRegCommentDots className="h-5 w-5 opacity-80" />
          <input
            name="subject"
            placeholder="Project or Subject"
            className="w-full bg-transparent text-sm outline-none placeholder:text-neutral-400 dark:placeholder:text-neutral-500"
          />
        </label>

        {/* Message */}
        <div className="col-span-1 sm:col-span-2">
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Tell me about the idea, timeline, and scope…"
            className="
              w-full rounded-2xl border border-neutral-200/70 dark:border-neutral-800/70
              bg-white/70 dark:bg-neutral-900/40 px-3 py-3 text-sm outline-none
              placeholder:text-neutral-400 dark:placeholder:text-neutral-500
              focus:ring-2 focus:ring-[rgb(var(--ring-focus))]/50
            "
          />
          <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">I usually respond within 24 hours.</p>
        </div>

        {/* Submit */}
        <div className="col-span-1 sm:col-span-2 flex items-center justify-between">
          <div aria-live="polite" className="text-xs">
            {msg && (
              <span
                className={msg.type === "ok" ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}
              >
                {msg.text}
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="
              relative inline-flex items-center gap-2 rounded-2xl p-[1.5px]
              focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--ring-focus))]/60
              disabled:cursor-not-allowed disabled:opacity-60
              hover:-translate-y-0.5 transition-all
            "
            style={{ background: "linear-gradient(120deg, var(--c1), var(--c2), var(--c3))" }}
          >
            <span
              className="
                inline-flex items-center gap-2 rounded-[14px]
                bg-neutral-900 text-white dark:bg-white dark:text-neutral-900
                px-4 py-2 text-sm font-medium
                ring-1 ring-white/10 dark:ring-black/10
                hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors
              "
            >
              <FaPaperPlane className={loading ? "h-4 w-4 animate-pulse" : "h-4 w-4"} />
              {loading ? "Sending…" : "Send Message"}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
