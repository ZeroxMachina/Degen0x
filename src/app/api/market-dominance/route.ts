import { NextResponse } from "next/server";

interface TopCoin {
  name: string;
  symbol: string;
  dominance_pct: number;
}

interface MarketDominanceResponse {
  btc_dominance: number;
  eth_dominance: number;
  total_market_cap: number;
  market_cap_change_24h: number;
  active_cryptocurrencies: number;
  top_coins: TopCoin[];
}

// In-memory cache for 5 minutes
let cachedData: { data: MarketDominanceResponse; timestamp: number } | null =
  null;
const CACHE_TTL = 300_000;

export const revalidate = 300; // Next.js ISR revalidation: 5 minutes

// Fallback simulated data when API is unavailable
const FALLBACK_DATA: MarketDominanceResponse = {
  btc_dominance: 52.45,
  eth_dominance: 17.23,
  total_market_cap: 1240000000000,
  market_cap_change_24h: 2.15,
  active_cryptocurrencies: 14850,
  top_coins: [
    { name: "Bitcoin", symbol: "BTC", dominance_pct: 52.45 },
    { name: "Ethereum", symbol: "ETH", dominance_pct: 17.23 },
    { name: "BNB", symbol: "BNB", dominance_pct: 5.12 },
    { name: "Solana", symbol: "SOL", dominance_pct: 3.89 },
    { name: "XRP", symbol: "XRP", dominance_pct: 3.45 },
    { name: "Cardano", symbol: "ADA", dominance_pct: 2.67 },
    { name: "Dogecoin", symbol: "DOGE", dominance_pct: 1.98 },
    { name: "Polygon", symbol: "MATIC", dominance_pct: 1.56 },
    { name: "Polkadot", symbol: "DOT", dominance_pct: 1.23 },
    { name: "Litecoin", symbol: "LTC", dominance_pct: 0.97 },
  ],
};

export async function GET() {
  const now = Date.now();

  // Return cached data if still valid
  if (cachedData && now - cachedData.timestamp < CACHE_TTL) {
    return NextResponse.json(cachedData.data, {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
        "Content-Type": "application/json",
      },
    });
  }

  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/global",
      {
        headers: { Accept: "application/json" },
        next: { revalidate: 300 },
      }
    );

    if (!res.ok) {
      throw new Error(`CoinGecko API returned ${res.status}`);
    }

    const globalData = await res.json();

    // Parse market dominance data from CoinGecko response
    const btc_dominance =
      globalData?.data?.market_cap_percentage?.btc ?? 0;
    const eth_dominance =
      globalData?.data?.market_cap_percentage?.eth ?? 0;
    const total_market_cap =
      globalData?.data?.total_market_cap?.usd ?? 0;
    const market_cap_change_24h =
      globalData?.data?.market_cap_change_percentage_24h_usd ?? 0;
    const active_cryptocurrencies =
      globalData?.data?.active_cryptocurrencies ?? 0;

    // Extract top coins by market cap dominance
    const marketCapPercentage = globalData?.data?.market_cap_percentage || {};
    const top_coins: TopCoin[] = Object.entries(marketCapPercentage)
      .slice(0, 10)
      .map(([symbol, percentage]) => ({
        name: symbol.toUpperCase(),
        symbol: symbol.toUpperCase(),
        dominance_pct: Number(percentage) || 0,
      }));

    const data: MarketDominanceResponse = {
      btc_dominance,
      eth_dominance,
      total_market_cap,
      market_cap_change_24h,
      active_cryptocurrencies,
      top_coins,
    };

    // Update cache
    cachedData = { data, timestamp: now };

    return NextResponse.json(data, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("CoinGecko global API error:", error);

    // Return stale cache if available as fallback
    if (cachedData) {
      return NextResponse.json(cachedData.data, {
        status: 200,
        headers: {
          "Cache-Control": "public, s-maxage=60",
          "Content-Type": "application/json",
          "X-Cache-Source": "stale",
        },
      });
    }

    // Return simulated data as final fallback
    return NextResponse.json(FALLBACK_DATA, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=60",
        "Content-Type": "application/json",
        "X-Cache-Source": "simulated",
      },
    });
  }
}
