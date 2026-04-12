'use client';

"use client";

import { useState, useEffect, useRef } from "react";
import Breadcrumb from "@/components/Breadcrumb";

/* ────────────────────────────────────────────────────────────
   Types & Data
──────────────────────────────────────────────────────────── */
interface CoinData {
  id: string;
  symbol: string;
  name: string;
  icon: string;
  color: string;
  price: number;
  change24h: number;
  change7d: number;
  volume24h: number;
  marketCap: number;
  ath: number;
  sparkline: number[]; // 24 points
  category: "large" | "mid" | "defi" | "layer2" | "stable";
}

const BASE_COINS: Omit<CoinData, "price" | "change24h" | "change7d" | "volume24h" | "marketCap" | "ath" | "sparkline">[] = [
  { id: "bitcoin",   symbol: "BTC",  name: "Bitcoin",       icon: "₿",  color: "#F7931A", category: "large"  },
  { id: "ethereum",  symbol: "ETH",  name: "Ethereum",      icon: "⟠",  color: "#627EEA", category: "large"  },
  { id: "solana",    symbol: "SOL",  name: "Solana",        icon: "◎",  color: "#9945FF", category: "large"  },
  { id: "bnb",       symbol: "BNB",  name: "BNB",           icon: "💛", color: "#F0B90B", category: "large"  },
  { id: "xrp",       symbol: "XRP",  name: "XRP",           icon: "◆",  color: "#00AAE4", category: "large"  },
  { id: "cardano",   symbol: "ADA",  name: "Cardano",       icon: "🔵", color: "#0033AD", category: "large"  },
  { id: "avalanche", symbol: "AVAX", name: "Avalanche",     icon: "🔺", color: "#E84142", category: "large"  },
  { id: "polkadot",  symbol: "DOT",  name: "Polkadot",      icon: "⬤",  color: "#E6007A", category: "mid"    },
  { id: "chainlink", symbol: "LINK", name: "Chainlink",     icon: "🔗", color: "#375BD2", category: "defi"   },
  { id: "uniswap",   symbol: "UNI",  name: "Uniswap",       icon: "🦄", color: "#FF007A", category: "defi"   },
  { id: "aave",      symbol: "AAVE", name: "Aave",          icon: "👻", color: "#B6509E", category: "defi"   },
  { id: "arbitrum",  symbol: "ARB",  name: "Arbitrum",      icon: "◉",  color: "#28A0F0", category: "layer2" },
  { id: "optimism",  symbol: "OP",   name: "Optimism",      icon: "🔴", color: "#FF0420", category: "layer2" },
  { id: "polygon",   symbol: "MATIC",name: "Polygon",       icon: "⬡",  color: "#8247E5", category: "layer2" },
  { id: "usdt",      symbol: "USDT", name: "Tether",        icon: "₮",  color: "#26A17B", category: "stable" },
  { id: "usdc",      symbol: "USDC", name: "USD Coin",      icon: "◎",  color: "#2775CA", category: "stable" },
];

const INITIAL_PRICES: Record<string, { price: number; mcap: number; vol: number; ath: number }> = {
  bitcoin:   { price: 97_843,  mcap: 1_932_000_000_000, vol: 48_200_000_000,  ath: 109_000 },
  ethereum:  { price: 3_281,   mcap: 394_000_000_000,   vol: 22_100_000_000,  ath: 4_868 },
  solana:    { price: 185.4,   mcap: 85_200_000_000,    vol: 6_840_000_000,   ath: 260 },
  bnb:       { price: 679,     mcap: 98_700_000_000,    vol: 2_100_000_000,   ath: 690 },
  xrp:       { price: 2.45,    mcap: 140_000_000_000,   vol: 8_900_000_000,   ath: 3.84 },
  cardano:   { price: 0.91,    mcap: 32_300_000_000,    vol: 980_000_000,     ath: 3.10 },
  avalanche: { price: 38.7,    mcap: 16_100_000_000,    vol: 760_000_000,     ath: 146 },
  polkadot:  { price: 9.12,    mcap: 13_600_000_000,    vol: 520_000_000,     ath: 55 },
  chainlink: { price: 18.7,    mcap: 11_200_000_000,    vol: 890_000_000,     ath: 52.7 },
  uniswap:   { price: 9.85,    mcap: 5_900_000_000,     vol: 380_000_000,     ath: 44.9 },
  aave:      { price: 242,     mcap: 3_600_000_000,     vol: 310_000_000,     ath: 661 },
  arbitrum:  { price: 1.12,    mcap: 4_500_000_000,     vol: 450_000_000,     ath: 2.40 },
  optimism:  { price: 2.18,    mcap: 3_200_000_000,     vol: 340_000_000,     ath: 4.84 },
  polygon:   { price: 0.48,    mcap: 4_700_000_000,     vol: 420_000_000,     ath: 2.92 },
  usdt:      { price: 1.0,     mcap: 145_000_000_000,   vol: 88_000_000_000,  ath: 1.32 },
  usdc:      { price: 1.0,     mcap: 49_000_000_000,    vol: 12_000_000_000,  ath: 1.17 },
};

function buildSparkline(basePrice: number, volatility = 0.04): number[] {
  const pts: number[] = [];
  let p = basePrice * (0.93 + Math.random() * 0.08);
  for (let i = 0; i < 24; i++) {
    p = p * (1 + (Math.random() - 0.5) * volatility);
    pts.push(p);
  }
  pts[pts.length - 1] = basePrice;
  return pts;
}

function initCoins(): CoinData[] {
  return BASE_COINS.map((c) => {
    const base = INITIAL_PRICES[c.id];
    const change24h = (Math.random() - 0.45) * 14;
    const change7d  = (Math.random() - 0.45) * 24;
    return {
      ...c,
      price:     base.price,
      change24h,
      change7d,
      volume24h: base.vol,
      marketCap: base.mcap,
      ath:       base.ath,
      sparkline: buildSparkline(base.price, c.category === "stable" ? 0.001 : 0.04),
    };
  });
}

/* ────────────────────────────────────────────────────────────
   Sparkline SVG
──────────────────────────────────────────────────────────── */
function Sparkline({ data, color, positive }: { data: number[]; color: string; positive: boolean }) {
  const w = 80, h = 32;
  const min = Math.min(...data), max = Math.max(...data);
  const range = max - min || 1;
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - ((v - min) / range) * h;
    return `${x},${y}`;
  }).join(" ");
  const fillPts = `0,${h} ${pts} ${w},${h}`;

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ overflow: "visible" }}>
      <defs>
        <linearGradient id={`sg-${color.replace("#", "")}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={positive ? "#22c55e" : "#ef4444"} stopOpacity="0.3" />
          <stop offset="100%" stopColor={positive ? "#22c55e" : "#ef4444"} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={fillPts} fill={`url(#sg-${color.replace("#", "")})`} />
      <polyline points={pts} fill="none" stroke={positive ? "#22c55e" : "#ef4444"} strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

/* ────────────────────────────────────────────────────────────
   Format helpers
──────────────────────────────────────────────────────────── */
function fmt(n: number) {
  if (n >= 1_000_000_000_000) return `$${(n / 1_000_000_000_000).toFixed(2)}T`;
  if (n >= 1_000_000_000)     return `$${(n / 1_000_000_000).toFixed(2)}B`;
  if (n >= 1_000_000)         return `$${(n / 1_000_000).toFixed(2)}M`;
  return `$${n.toFixed(2)}`;
}

function fmtPrice(n: number) {
  if (n >= 10_000) return n.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  if (n >= 100)    return n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  if (n >= 1)      return n.toFixed(4);
  return n.toPrecision(4);
}

/* ────────────────────────────────────────────────────────────
   Main Component
──────────────────────────────────────────────────────────── */
export default function PriceTickerPage() {
  const [coins, setCoins]           = useState<CoinData[]>([]);
  const [category, setCategory]     = useState("all");
  const [sortBy, setSortBy]         = useState<"marketCap" | "price" | "change24h" | "volume24h">("marketCap");
  const [sortDir, setSortDir]       = useState<"asc" | "desc">("desc");
  const [search, setSearch]         = useState("");
  const [flashing, setFlashing]     = useState<Record<string, "up" | "down">>({});
  const prevPrices                  = useRef<Record<string, number>>({});

  // Init
  useEffect(() => { setCoins(initCoins()); }, []);

  // Simulate live price updates every 3s
  useEffect(() => {
    if (coins.length === 0) return;
    const interval = setInterval(() => {
      setCoins((prev) => {
        const newFlash: Record<string, "up" | "down"> = {};
        const updated = prev.map((c) => {
          if (c.category === "stable") return c;
          const move = (Math.random() - 0.495) * 0.004; // ±0.4%
          const newPrice = c.price * (1 + move);
          const dir: "up" | "down" = newPrice > c.price ? "up" : "down";
          if (Math.abs(move) > 0.001) newFlash[c.id] = dir;
          return {
            ...c,
            price:     newPrice,
            change24h: c.change24h + (Math.random() - 0.5) * 0.1,
            sparkline: [...c.sparkline.slice(1), newPrice],
          };
        });
        setFlashing(newFlash);
        setTimeout(() => setFlashing({}), 800);
        return updated;
      });
    }, 3_000);
    return () => clearInterval(interval);
  }, [coins.length]);

  // Filter + Sort
  const displayed = coins
    .filter((c) => {
      if (category !== "all" && c.category !== category) return false;
      if (search && !c.name.toLowerCase().includes(search.toLowerCase()) && !c.symbol.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    })
    .sort((a, b) => {
      const av = a[sortBy], bv = b[sortBy];
      return sortDir === "desc" ? bv - av : av - bv;
    });

  const CATEGORIES = [
    { key: "all",    label: "All Assets" },
    { key: "large",  label: "Large Cap" },
    { key: "defi",   label: "DeFi" },
    { key: "layer2", label: "Layer 2" },
    { key: "stable", label: "Stablecoins" },
    { key: "mid",    label: "Mid Cap" },
  ];

  const totalMcap = coins.reduce((a, c) => a + c.marketCap, 0);
  const totalVol  = coins.reduce((a, c) => a + c.volume24h, 0);
  const gainers   = coins.filter((c) => c.change24h > 0).length;

  function toggleSort(col: typeof sortBy) {
    if (sortBy === col) setSortDir((d) => d === "desc" ? "asc" : "desc");
    else { setSortBy(col); setSortDir("desc"); }
  }

  return (
    <div className="min-h-screen" style={{ background: "var(--color-bg)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={[{ label: "Tools", href: "/tools" }, { label: "Live Price Ticker", href: "/tools/price-ticker" }]} />

        {/* Header */}
        <div className="mt-6 mb-8">
          <h1 className="text-3xl font-bold text-[var(--color-text)] flex items-center gap-3 mb-2">
            📈 Live Crypto Prices
            <span style={{
              background: "rgba(34,197,94,0.12)", color: "#22c55e",
              fontSize: "12px", fontWeight: 700, padding: "2px 10px",
              borderRadius: "999px", border: "1px solid rgba(34,197,94,0.3)",
            }}>
              ● LIVE
            </span>
          </h1>
          <p className="text-[var(--color-text-secondary)]">
            Real-time prices, market caps, and 24h charts for top cryptocurrencies. Updates every 3 seconds.
          </p>
        </div>

        {/* Market Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { label: "Total Market Cap", value: fmt(totalMcap), icon: "🌐", color: "#6366f1" },
            { label: "24h Volume",        value: fmt(totalVol),  icon: "📊", color: "#06b6d4" },
            { label: "Gainers",           value: `${gainers}/${coins.length}`, icon: "📈", color: "#22c55e" },
            { label: "Losers",            value: `${coins.length - gainers}/${coins.length}`, icon: "📉", color: "#ef4444" },
          ].map((s) => (
            <div key={s.label} className="glass rounded-2xl p-4">
              <div style={{ fontSize: "22px", marginBottom: "4px" }}>{s.icon}</div>
              <div style={{ fontWeight: 800, fontSize: "18px", color: s.color }}>{s.value}</div>
              <div style={{ fontSize: "12px", color: "var(--color-text-secondary)" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="glass rounded-2xl p-4 mb-4 flex flex-wrap gap-3 items-center">
          {/* Search */}
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search coin…"
            style={{
              background: "var(--color-bg)", border: "1px solid var(--color-border)",
              borderRadius: "8px", padding: "7px 12px", color: "var(--color-text)",
              fontSize: "13px", width: "160px",
            }}
          />

          {/* Category Filter */}
          <div className="flex gap-2 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setCategory(cat.key)}
                style={{
                  background: category === cat.key ? "var(--color-primary)" : "var(--color-bg)",
                  color: category === cat.key ? "#fff" : "var(--color-text-secondary)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px", padding: "5px 12px",
                  fontSize: "12px", fontWeight: 600, cursor: "pointer",
                  transition: "all 0.15s",
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="glass rounded-2xl overflow-hidden">
          {/* Table Header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "40px 1fr 130px 120px 120px 110px 90px",
              padding: "10px 16px",
              borderBottom: "1px solid var(--color-border)",
              fontSize: "11px", fontWeight: 700, color: "var(--color-text-secondary)",
              textTransform: "uppercase", letterSpacing: "0.06em",
              alignItems: "center",
            }}
          >
            <span>#</span>
            <span>Asset</span>
            {[
              { key: "price" as const,     label: "Price" },
              { key: "change24h" as const, label: "24h %" },
              { key: "marketCap" as const, label: "Market Cap" },
              { key: "volume24h" as const, label: "24h Volume" },
            ].map((col) => (
              <button
                key={col.key}
                onClick={() => toggleSort(col.key)}
                style={{
                  background: "none", border: "none", color: sortBy === col.key ? "var(--color-primary)" : "var(--color-text-secondary)",
                  fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em",
                  cursor: "pointer", textAlign: "right", padding: 0,
                }}
              >
                {col.label} {sortBy === col.key ? (sortDir === "desc" ? "↓" : "↑") : ""}
              </button>
            ))}
            <span style={{ textAlign: "center" }}>7d Chart</span>
          </div>

          {/* Rows */}
          {displayed.map((coin, idx) => {
            const flash = flashing[coin.id];
            const pos = coin.change24h >= 0;
            const fromAth = ((coin.price - coin.ath) / coin.ath) * 100;

            return (
              <div
                key={coin.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "40px 1fr 130px 120px 120px 110px 90px",
                  padding: "12px 16px",
                  borderBottom: "1px solid var(--color-border)",
                  alignItems: "center",
                  background: flash
                    ? flash === "up" ? "rgba(34,197,94,0.06)" : "rgba(239,68,68,0.06)"
                    : "transparent",
                  transition: "background 0.8s ease",
                  cursor: "default",
                }}
              >
                {/* Rank */}
                <span style={{ fontSize: "13px", color: "var(--color-text-secondary)" }}>{idx + 1}</span>

                {/* Asset */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{
                    width: "36px", height: "36px", borderRadius: "50%",
                    background: `${coin.color}22`, border: `1px solid ${coin.color}44`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "16px", flexShrink: 0,
                  }}>
                    {coin.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "14px", color: "var(--color-text)" }}>{coin.name}</div>
                    <div style={{ fontSize: "11px", color: "var(--color-text-secondary)" }}>
                      {coin.symbol}
                      {fromAth < -5 && (
                        <span style={{ marginLeft: "4px", color: "#ef4444", fontSize: "10px" }}>
                          {fromAth.toFixed(1)}% ATH
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div style={{
                  textAlign: "right", fontWeight: 700, fontSize: "14px",
                  color: flash === "up" ? "#22c55e" : flash === "down" ? "#ef4444" : "var(--color-text)",
                  transition: "color 0.3s",
                  fontVariantNumeric: "tabular-nums",
                }}>
                  ${fmtPrice(coin.price)}
                </div>

                {/* 24h % */}
                <div style={{
                  textAlign: "right", fontWeight: 700, fontSize: "13px",
                  color: pos ? "#22c55e" : "#ef4444",
                }}>
                  {pos ? "+" : ""}{coin.change24h.toFixed(2)}%
                </div>

                {/* Market Cap */}
                <div style={{ textAlign: "right", fontSize: "13px", color: "var(--color-text)" }}>{fmt(coin.marketCap)}</div>

                {/* Volume */}
                <div style={{ textAlign: "right", fontSize: "13px", color: "var(--color-text-secondary)" }}>{fmt(coin.volume24h)}</div>

                {/* Sparkline */}
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Sparkline data={coin.sparkline} color={coin.color} positive={pos} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <div className="mt-6 glass rounded-xl p-4 text-center">
          <p style={{ fontSize: "12px", color: "var(--color-text-secondary)" }}>
            Prices are simulated for demonstration and update every 3 seconds. In production, this connects to CoinGecko or Binance WebSocket APIs. Not financial advice.
          </p>
        </div>
      </div>
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Price Ticker",
              "url": "https://degen0x.com/tools/price-ticker",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            })
          }}
        />
      </div>
  );
}
