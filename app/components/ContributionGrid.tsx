// app/components/ContributionGrid.tsx
"use client";

import React from "react";
import type { Day } from "../lib/streak";
import { streaks } from "../lib/streak";

type Props = { title: string; days: Day[] };

export default function ContributionGrid({ title, days }: Props) {
  const { current, longest } = streaks(days);
  // color steps like GitHub (0..4)
  const level = (n: number) => (n === 0 ? 0 : n >= 8 ? 4 : n >= 4 ? 3 : n >= 2 ? 2 : 1);

  return (
    <div className="rounded-2xl border p-4 bg-white/70 dark:bg-neutral-900/70 backdrop-blur">
      <div className="mb-3 flex items-baseline justify-between">
        <h3 className="font-semibold">{title}</h3>
        <div className="text-xs opacity-70">
          Current: <b>{current}</b>d · Longest: <b>{longest}</b>d
        </div>
      </div>

      {/* 7 rows x 53 cols */}
      <div
        className="grid gap-1"
        style={{ gridTemplateColumns: `repeat(53, 10px)`, gridTemplateRows: `repeat(7, 10px)` }}
        aria-label={`${title} contribution graph`}
      >
        {Array.from({ length: 7 }).map((_, row) =>
          Array.from({ length: 53 }).map((__, col) => {
            const i = row + col * 7; // column-major like GitHub
            const d = days[i];
            const lv = level(d?.count ?? 0);
            return (
              <div
                key={`${row}-${col}`}
                title={`${d?.date ?? ""}: ${d?.count ?? 0} contributions`}
                className={[
                  "rounded-[2px] border border-black/5 dark:border-white/5",
                  lv === 0 && "bg-neutral-200 dark:bg-neutral-800",
                  lv === 1 && "bg-emerald-200 dark:bg-emerald-900",
                  lv === 2 && "bg-emerald-300 dark:bg-emerald-800",
                  lv === 3 && "bg-emerald-400 dark:bg-emerald-700",
                  lv === 4 && "bg-emerald-500 dark:bg-emerald-600",
                ].join(" ")}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
