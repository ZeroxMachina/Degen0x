import { NextResponse } from "next/server";

const COINGECKO_BASE = "https://api.coingecko.com/api/v3";

let cachedTrending: { data: unknown; timestamp: number } | null = null;
const CACHE_TTL = 300_000; // 5 minutes

export async function GET() {
  const now = Date.now();

  if (cachedTrending && now - cachedTrending.timestamp < CACHE_TTL) {
    return NextResponse.json(cachedTrending.data, {
      headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600" },
    });
  }

  try {
    const res = await fetch(`${COINGECKO_BASE}/search/trending`, {
      headers: { Accept: "application/json" },
      next: { revalidate: 300 },
    });

    if (!res.ok) throw new Error(`CoinGecko trending returned ${res.status}`);

    const raw = await res.json();

    const coins = (raw.coins ?? []).slice(0, 10).map((item: Record<string, unknown>) => {
      const coin = item.item as Record<string, unknown>;
      const data = coin.data as Record<string, unknown> | undefined;
      return {
        id: coin.id,
        symbol: coin.symbol,
        name: coin.name,
        thumb: coin.thumb,
        rank: coin.market_cap_rank,
        price: data?.price ?? null,
        priceBtc: coin.price_btc,
        change24h: data?.price_change_percentage_24h?.usd ?? null,
        marketCap: data?.market_cap ?? null,
        sparkline: data?.sparkline ?? null,
      };
    });

    const result = { coins, updatedAt: new Date().toISOString() };
    cachedTrending = { data: result, timestamp: now };

    return NextResponse.json(result, {
      headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600" },
    });
  } catch (error) {
    console.error("Trending API error:", error);

    if (cachedTrending) {
      return NextResponse.json(cachedTrending.data, {
        headers: { "Cache-Control": "public, s-maxage=60" },
      });
    }

    return NextResponse.json({ error: "Failed to fetch trending" }, { status: 502 });
  }
}
