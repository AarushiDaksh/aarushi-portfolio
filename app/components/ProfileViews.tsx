"use client";

import { useEffect, useRef, useState } from "react";

export default function ProfileViews() {
  const [count, setCount] = useState<number | null>(null);
  const didRun = useRef(false); // prevents double-run in React 18 dev

  useEffect(() => {
    if (didRun.current) return;
    didRun.current = true;

    async function bump() {
      try {
        const res = await fetch("/api/views", {
          method: "POST",
          cache: "no-store",
          keepalive: true, // safe for tab close/mobile
        });
        const data = await res.json();
        setCount(data?.count ?? 0);
      } catch {
        const res = await fetch("/api/views", { cache: "no-store" });
        const data = await res.json();
        setCount(data?.count ?? 0);
      }
    }
    bump();
  }, []);

  return (
    <div
      className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm
                 bg-neutral-100/80 dark:bg-neutral-800/60 backdrop-blur border
                 border-neutral-200 dark:border-neutral-700"
      title="Total profile views"
    >
      <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
      <span className="font-medium">Profile views</span>
      <span className="tabular-nums font-semibold">
        {count === null ? "…" : count}
      </span>
    </div>
  );
}
