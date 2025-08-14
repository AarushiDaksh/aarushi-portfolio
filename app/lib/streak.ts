// lib/streak.ts
export type Day = { date: string; count: number };

export function streaks(days: Day[]) {
  // days should be continuous daily sequence (may include 0s)
  const sorted = [...days].sort((a,b)=>a.date.localeCompare(b.date));
  let longest = 0, current = 0;
  for (let i = 0; i < sorted.length; i++) {
    const contributed = sorted[i].count > 0;
    if (i === 0) {
      current = contributed ? 1 : 0;
      longest = Math.max(longest, current);
      continue;
    }
    const dPrev = new Date(sorted[i-1].date);
    const dCur  = new Date(sorted[i].date);
    const diff = Math.round((+dCur - +dPrev)/86400000);

    if (diff === 1) current = contributed ? current + 1 : 0;
    else current = contributed ? 1 : 0;

    longest = Math.max(longest, current);
  }
  return { current, longest };
}

// build last 53 weeks (371 days) window ending today
export function last53WeeksFromMap(map: Record<string, number>): Day[] {
  const out: Day[] = [];
  const today = new Date();
  today.setUTCHours(0,0,0,0);
  for (let i = 370; i >= 0; i--) {
    const d = new Date(+today - i*86400000);
    const key = d.toISOString().slice(0,10);
    out.push({ date: key, count: map[key] ?? 0 });
  }
  return out;
}
