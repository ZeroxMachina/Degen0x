import { NextResponse } from "next/server";
import briefing from "@/data/news-briefing.json";

// Re-evaluate on the edge every 5 minutes; the underlying JSON is refreshed
// hourly by the scheduled "crypto-news-briefing" task.
export const revalidate = 300;

export async function GET() {
  return NextResponse.json(briefing, {
    headers: {
      "Cache-Control": "public, s-maxage=300, stale-while-revalidate=3600",
    },
  });
}
