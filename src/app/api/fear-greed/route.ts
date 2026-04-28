import { NextResponse } from "next/server";

let cached: { data: unknown; timestamp: number } | null = null;
const CACHE_TTL = 600_000; // 10 minutes

export async function GET() {
  const now = Date.now();

  if (cached && now - cached.timestamp < CACHE_TTL) {
    return NextResponse.json(cached.data, {
      headers: { "Cache-Control": "public, s-maxage=600, stale-while-revalidate=1200" },
    });
  }

  try {
    const res = await fetch("https://api.alternative.me/fng/?limit=30&format=json", {
      next: { revalidate: 600 },
    });

    if (!res.ok) throw new Error(`Fear & Greed API returned ${res.status}`);

    const raw = await res.json();
    const entries = (raw.data ?? []).map((entry: Record<string, string>) => ({
      value: parseInt(entry.value, 10),
      classification: entry.value_classification,
      timestamp: new Date(parseInt(entry.timestamp, 10) * 1000).toISOString(),
    }));

    const result = {
      current: entries[0] ?? null,
      history: entries,
      updatedAt: new Date().toISOString(),
    };

    cached = { data: result, timestamp: now };

    return NextResponse.json(result, {
      headers: { "Cache-Control": "public, s-maxage=600, stale-while-revalidate=1200" },
    });
  } catch (error) {
    console.error("Fear & Greed API error:", error);
    if (cached) {
      return NextResponse.json(cached.data);
    }
    return NextResponse.json({ error: "Failed to fetch fear & greed index" }, { status: 502 });
  }
}
