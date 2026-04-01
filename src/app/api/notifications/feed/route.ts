import { NextResponse } from "next/server";
import feedData from "@/data/notifications-feed.json";

/**
 * GET /api/notifications/feed
 *
 * Returns the current notification feed from notifications-feed.json.
 * This file is updated automatically by the publish-queue agent whenever
 * new content ships, so the bell dropdown always shows fresh items.
 *
 * Each entry in the JSON has: id, type, title, message, actionUrl, date.
 * The client converts `date` → a real timestamp for "time ago" display.
 *
 * Cache: 5 min at edge, stale-while-revalidate for 10 min.
 */
export async function GET() {
  return NextResponse.json(feedData, {
    headers: {
      "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
    },
  });
}
