import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// Read the briefing JSON from disk at request time so hourly updates from
// the "crypto-news-briefing" scheduled task are reflected without a rebuild.
// A static `import` would snapshot the file at build time — which is why the
// homepage was serving stale news until the next deploy.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

const BRIEFING_PATH = path.join(process.cwd(), "src", "data", "news-briefing.json");

export async function GET() {
  try {
    const raw = await fs.readFile(BRIEFING_PATH, "utf8");
    const briefing = JSON.parse(raw);
    return NextResponse.json(briefing, {
      headers: {
        // CDN cache for 60s so we don't hammer disk, but browsers always
        // hit the edge fresh. The hourly cron refreshes the JSON on disk.
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
      },
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to load news briefing", detail: String(err) },
      { status: 500 },
    );
  }
}
