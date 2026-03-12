import { NextResponse } from "next/server";

interface CoinPrice {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  price_change_percentage_24h: number;
  price_change_percentage_7d: number;
  sparkline_in_7d: { price: number[] };
  total_volume: number;
}

interface PriceResponse {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number | null;
  market_cap_rank: number | null;
  price_change_percentage_24h: number | null;
  price_change_percentage_7d: number | null;
  sparkline_in_7d: number[];
  total_volume: number | null;
}

// In-memory cache for 60 seconds
let cachedData: { data: PriceResponse[]; timestamp: number } | null = null;
const CACHE_TTL = 60_000;

export const revalidate = 60; // Next.js ISR revalidation

export async function GET() {
  const now = Date.now();

  // Return cached data if still valid
  if (cachedData && now - cachedData.timestamp < CACHE_TTL) {
    return NextResponse.json(cachedData.data, {
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
        "Content-Type": "application/json",
      },
    });
  }

  try {
    const url = new URL(
      "https://api.coingecko.com/api/v3/coins/markets"
    );
    url.searchParams.append("vs_currency", "usd");
    url.searchParams.append("order", "market_cap_desc");
    url.searchParams.append("per_page", "20");
    url.searchParams.append("page", "1");
    url.searchParams.append("sparkline", "true");
    url.searchParams.append("price_change_percentage", "1h,24h,7d");

    const res = await fetch(url.toString(), {
      headers: { Accept: "application/json" },
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error(`CoinGecko API returned ${res.status}`);
    }

    const raw: CoinPrice[] = await res.json();

    // Transform the data to match the required response format
    const data: PriceResponse[] = raw.map((coin) => ({
      id: coin.id || "",
      symbol: (coin.symbol || "").toUpperCase(),
      name: coin.name || "",
      image: coin.image || "",
      current_price: coin.current_price ?? 0,
      market_cap: coin.market_cap ?? null,
      market_cap_rank: coin.market_cap_rank ?? null,
      price_change_percentage_24h: coin.price_change_percentage_24h ?? null,
      price_change_percentage_7d: coin.price_change_percentage_7d ?? null,
      sparkline_in_7d: (coin.sparkline_in_7d?.price || []).slice(-168), // Last 7 days hourly
      total_volume: coin.total_volume ?? null,
    }));

    // Update cache
    cachedData = { data, timestamp: now };

    return NextResponse.json(data, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("CoinGecko API error:", error);

    // Return stale cache if available as fallback
    if (cachedData) {
      return NextResponse.json(cachedData.data, {
        status: 200,
        headers: {
          "Cache-Control": "public, s-maxage=30",
          "Content-Type": "application/json",
          "X-Cache-Source": "stale",
        },
      });
    }

    // Return error response if no cache available
    return NextResponse.json(
      { error: "Failed to fetch crypto prices from CoinGecko" },
      { status: 502 }
    );
  }
}
