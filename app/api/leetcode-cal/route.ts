// app/api/leetcode-calendar/route.ts
import { NextResponse } from "next/server";

async function fetchYear(username: string, year: number) {
  const url = `https://leetcode.com/api/calendar?username=${encodeURIComponent(username)}&year=${year}`;
  const r = await fetch(url, { cache: "no-store", headers: { "User-Agent": "Mozilla/5.0" } });
  if (!r.ok) throw new Error("LeetCode calendar failed");
  return (await r.json()) as Record<string, number>;
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username");
  if (!username) return NextResponse.json({ error: "username required" }, { status: 400 });

  const now = new Date();
  const year = now.getUTCFullYear();
  const [prev, cur] = await Promise.all([
    fetchYear(username, year - 1).catch(() => ({})),
    fetchYear(username, year).catch(() => ({})),
  ]);

  return NextResponse.json({ days: { ...prev, ...cur } });
}
