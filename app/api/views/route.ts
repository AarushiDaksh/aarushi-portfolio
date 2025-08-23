import { NextRequest, NextResponse } from "next/server";
import { redis, PROFILE_VIEWS_KEY } from "../../lib/redis";

export const runtime = "edge"; // fast & cheap

export async function GET() {
  const count = (await redis.get<number>(PROFILE_VIEWS_KEY)) ?? 0;
  return NextResponse.json({ count });
}

export async function POST(req: NextRequest) {
  // Increment total views
  const newCount = await redis.incr(PROFILE_VIEWS_KEY);
  return NextResponse.json({ count: newCount });
}
