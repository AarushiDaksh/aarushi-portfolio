// lib/leetcode-calendar.ts
export type LCDay = { date: string; count: number };

// ---- internal: normalize the "timestamp -> count" map to ISO date keys
function tsMapToISO(map: Record<string, number>) {
  const out: Record<string, number> = {};
  for (const [k, v] of Object.entries(map ?? {})) {
    let key = k;
    if (!k.includes("-")) {
      // numeric timestamp in seconds (common) or ms (rare)
      const num = Number(k);
      if (!Number.isNaN(num)) {
        const tsMs = num > 10_000_000_000 ? num : num * 1000;
        key = new Date(tsMs).toISOString().slice(0, 10);
      } else {
        continue;
      }
    }
    out[key] = v ?? 0;
  }
  return out;
}

// ---- attempt 1: GraphQL (preferred)
async function fetchViaGraphQL(username: string, year?: number) {
  // This query exists on LeetCode; submissionCalendar is a JSON string.
  const query = `
    query userCalendar($username:String!, $year:Int) {
      userCalendar(username:$username, year:$year) {
        submissionCalendar
      }
    }
  `;
  const r = await fetch("https://leetcode.com/graphql", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "User-Agent": "Mozilla/5.0",
      "Referer": `https://leetcode.com/u/${username}/`,
    },
    body: JSON.stringify({ query, variables: { username, year } }),
    cache: "no-store",
  });

  if (!r.ok) throw new Error(`LC GraphQL ${r.status}`);
  const j = await r.json();

  const str =
    j?.data?.userCalendar?.submissionCalendar ??
    j?.data?.matchedUser?.userCalendar?.submissionCalendar; // some clusters nest under matchedUser

  if (typeof str !== "string") throw new Error("No submissionCalendar");
  let parsed: Record<string, number> = {};
  try {
    parsed = JSON.parse(str); // {"1691712000":3,...}
  } catch {
    // occasionally it's already an object
    parsed = str as unknown as Record<string, number>;
  }
  return tsMapToISO(parsed);
}

// ---- attempt 2: REST fallback
async function fetchViaREST(username: string, year: number) {
  const url = `https://leetcode.com/api/calendar?username=${encodeURIComponent(
    username
  )}&year=${year}`;
  const r = await fetch(url, {
    cache: "no-store",
    headers: {
      "User-Agent": "Mozilla/5.0",
      "Accept": "application/json",
      "Referer": `https://leetcode.com/${username}/`,
      "Accept-Language": "en-US,en;q=0.9",
    },
  });
  if (!r.ok) throw new Error(`LC REST ${r.status}`);
  const raw = (await r.json()) as Record<string, number>;
  return tsMapToISO(raw);
}

export async function getLeetCodeCalendarDays(username: string): Promise<LCDay[]> {
  // 1) try GraphQL for the whole range
  let map: Record<string, number> | null = null;
  try {
    map = await fetchViaGraphQL(username).catch(() => null);
  } catch {
    map = null;
  }

  // 2) if GraphQL was blocked/empty, stitch REST for current + previous year
  if (!map || Object.keys(map).length === 0) {
    const now = new Date();
    const yr = now.getUTCFullYear();
    const [prev, cur] = await Promise.all([
      fetchViaREST(username, yr - 1).catch(() => ({})),
      fetchViaREST(username, yr).catch(() => ({})),
    ]);
    map = { ...prev, ...cur };
  }

  // ---- final: build dense last-53-weeks window (UTC)
  const out: LCDay[] = [];
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);

  for (let i = 370; i >= 0; i--) {
    const d = new Date(+today - i * 86400000);
    const key = d.toISOString().slice(0, 10);
    out.push({ date: key, count: map[key] ?? 0 });
  }

  // Debug (server logs)
  const sample = Object.entries(map).slice(0, 3);
  console.log("[LeetCode] days in map:", Object.keys(map).length, "sample:", sample);

  return out;
}
