/**
 * CoinGecko Free API utilities and helpers
 * Fetches live crypto prices and market data with graceful fallback
 * No API key required - uses CoinGecko's free tier
 * Uses API caching layer to handle rate limits and improve performance
 */

import { getGlobalCache, withCache } from "./api-cache";

// ── TypeScript Types ──────────────────────────────────────────────────────────

/**
 * Response format from /api/prices endpoint
 */
export interface MarketPrice {
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

/**
 * Error response structure
 */
export interface ApiError {
  error: string;
}

// ── Constants ─────────────────────────────────────────────────────────────────

export const COINGECKO_IDS = [
  "bitcoin",
  "ethereum",
  "tether",
  "binancecoin",
  "solana",
  "usd-coin",
  "xrp",
  "staked-ether",
  "cardano",
  "avalanche-2",
  "dogecoin",
  "chainlink",
  "polkadot",
  "matic-network",
  "uniswap",
  "aave",
  "arbitrum",
  "optimism",
  "sui",
  "near",
  "aptos",
  "injective-protocol",
  "pepe",
  "dai",
  "frax",
  "true-usd",
  "pax-dollar",
  "gemini-dollar",
  "ethena-usde",
  "first-digital-usd",
] as const;

export type CoinGeckoId = (typeof COINGECKO_IDS)[number];

export interface LivePrice {
  usd: number;
  usd_24h_change?: number;
  usd_7d_change?: number;
  usd_market_cap?: number;
  usd_24h_vol?: number;
}

export interface LivePrices {
  [coinId: string]: LivePrice;
}

// Fallback prices (March 2026 estimates)
export const FALLBACK_PRICES: Record<string, number> = {
  bitcoin: 85000,
  ethereum: 2200,
  tether: 1.00,
  binancecoin: 580,
  solana: 135,
  "usd-coin": 1.00,
  xrp: 2.25,
  "staked-ether": 2200,
  cardano: 0.68,
  "avalanche-2": 22,
  dogecoin: 0.18,
  chainlink: 13.5,
  polkadot: 5.0,
  "matic-network": 0.35,
  uniswap: 7.8,
  aave: 165,
  arbitrum: 0.62,
  optimism: 1.18,
  sui: 2.85,
  near: 3.44,
  aptos: 5.2,
  "injective-protocol": 17.4,
  pepe: 0.0000085,
  dai: 1.00,
  frax: 1.00,
  "true-usd": 1.00,
  "pax-dollar": 1.00,
  "gemini-dollar": 1.00,
  "ethena-usde": 1.00,
  "first-digital-usd": 1.00,
};

/**
 * Fetch live prices from CoinGecko free API
 * Falls back to static prices if the request fails
 * Uses caching layer to reduce API calls and handle rate limiting
 */
export async function fetchLivePrices(
  ids: string[] = Object.keys(FALLBACK_PRICES)
): Promise<LivePrices> {
  const cache = getGlobalCache();
  const cacheKey = `coingecko:prices:${ids.sort().join(",")}`;

  return await withCache(
    cacheKey,
    async () => {
      try {
        const idList = ids.join(",");
        const url =
          `https://api.coingecko.com/api/v3/simple/price` +
          `?ids=${encodeURIComponent(idList)}` +
          `&vs_currencies=usd` +
          `&include_24hr_change=true` +
          `&include_market_cap=true` +
          `&include_24hr_vol=true`;

        const res = await fetch(url, {
          next: { revalidate: 60 }, // ISR: revalidate every 60s in Next.js
          signal: AbortSignal.timeout(5000),
        });

        if (!res.ok) throw new Error(`CoinGecko API error: ${res.status}`);

        const data: LivePrices = await res.json();
        return data;
      } catch {
        // Graceful fallback to static prices with simulated 24h change
        const fallback: LivePrices = {};
        for (const id of ids) {
          if (FALLBACK_PRICES[id] !== undefined) {
            fallback[id] = {
              usd: FALLBACK_PRICES[id],
              usd_24h_change: parseFloat(((Math.random() - 0.48) * 6).toFixed(2)),
            };
          }
        }
        return fallback;
      }
    },
    cache
  );
}

/**
 * Fetch top N coins by market cap with full market data
 * Uses caching layer to reduce API calls and handle rate limiting
 */
export async function fetchTopCoins(limit = 50): Promise<CoinMarketData[]> {
  const cache = getGlobalCache();
  const cacheKey = `coingecko:topcoins:${limit}`;

  return await withCache(
    cacheKey,
    async () => {
      try {
        const url =
          `https://api.coingecko.com/api/v3/coins/markets` +
          `?vs_currency=usd` +
          `&order=market_cap_desc` +
          `&per_page=${limit}` +
          `&page=1` +
          `&sparkline=false` +
          `&price_change_percentage=1h%2C24h%2C7d`;

        const res = await fetch(url, {
          next: { revalidate: 120 },
          signal: AbortSignal.timeout(8000),
        });

        if (!res.ok) throw new Error(`CoinGecko API error: ${res.status}`);
        return await res.json();
      } catch {
        return MOCK_TOP_COINS;
      }
    },
    cache
  );
}

/**
 * Fetch global market stats (total cap, volume, BTC dominance, etc.)
 * Uses caching layer to reduce API calls and handle rate limiting
 */
export async function fetchGlobalStats(): Promise<GlobalStats | null> {
  const cache = getGlobalCache();
  const cacheKey = "coingecko:globalstats";

  return await withCache(
    cacheKey,
    async () => {
      try {
        const res = await fetch(`https://api.coingecko.com/api/v3/global`, {
          next: { revalidate: 300 },
          signal: AbortSignal.timeout(5000),
        });
        if (!res.ok) throw new Error();
        const json = await res.json();
        return json.data;
      } catch {
        return null;
      }
    },
    cache
  );
}

export interface CoinMarketData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number | null;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  price_change_percentage_1h_in_currency?: number;
  price_change_percentage_7d_in_currency?: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number | null;
  max_supply: number | null;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  last_updated: string;
}

export interface GlobalStats {
  active_cryptocurrencies: number;
  markets: number;
  total_market_cap: { usd: number };
  total_volume: { usd: number };
  market_cap_percentage: { btc: number; eth: number };
  market_cap_change_percentage_24h_usd: number;
}

// ── Mock fallback data ────────────────────────────────────────────────────────
const MOCK_TOP_COINS: CoinMarketData[] = [
  {
    id: "bitcoin", symbol: "btc", name: "Bitcoin", image: "",
    current_price: 85000, market_cap: 1680000000000, market_cap_rank: 1,
    fully_diluted_valuation: 1785000000000, total_volume: 42000000000,
    high_24h: 86200, low_24h: 83800, price_change_24h: 1200,
    price_change_percentage_24h: 1.43, price_change_percentage_1h_in_currency: 0.22,
    price_change_percentage_7d_in_currency: 5.8,
    market_cap_change_24h: 24000000000, market_cap_change_percentage_24h: 1.43,
    circulating_supply: 19780000, total_supply: 21000000, max_supply: 21000000,
    ath: 108000, ath_change_percentage: -21.3, ath_date: "2024-12-17T00:00:00.000Z",
    atl: 67.81, atl_change_percentage: 125230, atl_date: "2013-07-06T00:00:00.000Z",
    last_updated: new Date().toISOString(),
  },
  {
    id: "ethereum", symbol: "eth", name: "Ethereum", image: "",
    current_price: 2200, market_cap: 264000000000, market_cap_rank: 2,
    fully_diluted_valuation: 264000000000, total_volume: 18000000000,
    high_24h: 2260, low_24h: 2150, price_change_24h: -45,
    price_change_percentage_24h: -2.0, price_change_percentage_1h_in_currency: -0.4,
    price_change_percentage_7d_in_currency: -3.2,
    market_cap_change_24h: -5400000000, market_cap_change_percentage_24h: -2.0,
    circulating_supply: 120350000, total_supply: null, max_supply: null,
    ath: 4878, ath_change_percentage: -54.9, ath_date: "2021-11-10T00:00:00.000Z",
    atl: 0.432979, atl_change_percentage: 507690, atl_date: "2015-10-20T00:00:00.000Z",
    last_updated: new Date().toISOString(),
  },
  {
    id: "tether", symbol: "usdt", name: "Tether", image: "",
    current_price: 1.00, market_cap: 142000000000, market_cap_rank: 3,
    fully_diluted_valuation: 142000000000, total_volume: 95000000000,
    high_24h: 1.001, low_24h: 0.999, price_change_24h: 0.0001,
    price_change_percentage_24h: 0.01, price_change_percentage_1h_in_currency: 0.0,
    price_change_percentage_7d_in_currency: 0.0,
    market_cap_change_24h: 100000000, market_cap_change_percentage_24h: 0.07,
    circulating_supply: 142000000000, total_supply: 142000000000, max_supply: null,
    ath: 1.32, ath_change_percentage: -24.2, ath_date: "2018-07-24T00:00:00.000Z",
    atl: 0.572521, atl_change_percentage: 74.7, atl_date: "2015-03-02T00:00:00.000Z",
    last_updated: new Date().toISOString(),
  },
  {
    id: "solana", symbol: "sol", name: "Solana", image: "",
    current_price: 135, market_cap: 70000000000, market_cap_rank: 5,
    fully_diluted_valuation: 83000000000, total_volume: 4800000000,
    high_24h: 138, low_24h: 131, price_change_24h: 2.4,
    price_change_percentage_24h: 1.8, price_change_percentage_1h_in_currency: 0.3,
    price_change_percentage_7d_in_currency: 4.2,
    market_cap_change_24h: 1200000000, market_cap_change_percentage_24h: 1.75,
    circulating_supply: 518000000, total_supply: 573000000, max_supply: null,
    ath: 263, ath_change_percentage: -48.7, ath_date: "2021-11-06T00:00:00.000Z",
    atl: 0.500801, atl_change_percentage: 26851, atl_date: "2020-05-11T00:00:00.000Z",
    last_updated: new Date().toISOString(),
  },
  {
    id: "binancecoin", symbol: "bnb", name: "BNB", image: "",
    current_price: 580, market_cap: 84000000000, market_cap_rank: 4,
    fully_diluted_valuation: 84000000000, total_volume: 2200000000,
    high_24h: 592, low_24h: 574, price_change_24h: 8.5,
    price_change_percentage_24h: 1.49, price_change_percentage_1h_in_currency: 0.1,
    price_change_percentage_7d_in_currency: 2.1,
    market_cap_change_24h: 1200000000, market_cap_change_percentage_24h: 1.45,
    circulating_supply: 144850000, total_supply: 144850000, max_supply: 200000000,
    ath: 717, ath_change_percentage: -19.1, ath_date: "2021-05-10T00:00:00.000Z",
    atl: 0.0398177, atl_change_percentage: 1456870, atl_date: "2017-10-19T00:00:00.000Z",
    last_updated: new Date().toISOString(),
  },
];

// ── Client Helper Functions ───────────────────────────────────────────────────

/**
 * Fetch top 20 crypto prices from the /api/prices endpoint
 * Returns live market data with caching and fallback support
 *
 * @returns Promise resolving to array of MarketPrice objects or error
 *
 * @example
 * const prices = await fetchPrices();
 * if ('error' in prices) {
 *   console.error(prices.error);
 * } else {
 *   prices.forEach(coin => {
 *     console.log(`${coin.name}: $${coin.current_price}`);
 *   });
 * }
 */
export async function fetchPrices(): Promise<MarketPrice[] | ApiError> {
  try {
    const res = await fetch(
      `${typeof window !== "undefined" ? "" : ""}${process.env.NEXT_PUBLIC_API_URL || ""}/api/prices`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        // Revalidate cache every 60 seconds for server-side calls
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      throw new Error(`API returned ${res.status}`);
    }

    const data = await res.json();

    // Check if response is an error
    if (data.error) {
      console.warn("Prices API error:", data.error);
      return data;
    }

    // Validate that we got an array
    if (!Array.isArray(data)) {
      throw new Error("Invalid response format from prices API");
    }

    return data as MarketPrice[];
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unknown error fetching prices";

    console.error("Failed to fetch prices:", message);

    return {
      error: `Failed to fetch crypto prices: ${message}`,
    };
  }
}
