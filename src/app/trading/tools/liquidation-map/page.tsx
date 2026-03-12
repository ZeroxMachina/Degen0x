'use client';

"use client";

import { useState, useEffect, useRef } from "react";
import Breadcrumb from "@/components/Breadcrumb";

/* ────────────────────────────────────────────────────────────
   Types
──────────────────────────────────────────────────────────── */
interface LiquidationBucket {
  price: number;
  longLiqUsd: number;   // USD value of long positions that liquidate at this price
  shortLiqUsd: number;  // USD value of short positions that liquidate at this price
}

interface CoinConfig {
  id: string;
  symbol: string;
  name: string;
  price: number;
  color: string;
  icon: string;
}

/* ────────────────────────────────────────────────────────────
   Data
──────────────────────────────────────────────────────────── */
const COINS: CoinConfig[] = [
  { id: "btc",  symbol: "BTC",  name: "Bitcoin",   price: 97_843,  color: "#F7931A", icon: "₿"  },
  { id: "eth",  symbol: "ETH",  name: "Ethereum",  price: 3_281,   color: "#627EEA", icon: "⟠"  },
  { id: "sol",  symbol: "SOL",  name: "Solana",    price: 185.4,   color: "#9945FF", icon: "◎"  },
  { id: "bnb",  symbol: "BNB",  name: "BNB",       price: 679,     color: "#F0B90B", icon: "💛" },
  { id: "avax", symbol: "AVAX", name: "Avalanche", price: 38.7,    color: "#E84142", icon: "🔺" },
];

/* ────────────────────────────────────────────────────────────
   Liquidation generator — simulates realistic cluster patterns
──────────────────────────────────────────────────────────── */
function generateLiqMap(spotPrice: number, buckets = 60): LiquidationBucket[] {
  const result: LiquidationBucket[] = [];
  const range = 0.18; // ±18% from spot
  const step = (spotPrice * range * 2) / buckets;
  const priceMin = spotPrice * (1 - range);

  // Key psychological levels tend to have big clusters
  const keyLevels = [
    spotPrice * 0.88, spotPrice * 0.92, spotPrice * 0.95,
    spotPrice * 0.97, spotPrice * 1.03, spotPrice * 1.05,
    spotPrice * 1.08, spotPrice * 1.12, spotPrice * 1.15,
  ];

  for (let i = 0; i < buckets; i++) {
    const price = priceMin + i * step;
    const dist = Math.abs(price - spotPrice) / spotPrice;

    // Base: more liquidity near spot
    const baseIntensity = Math.exp(-dist * 8) + 0.05;

    // Key level bonus
    const keyBonus = keyLevels.reduce((sum, kl) => {
      const d = Math.abs(price - kl) / spotPrice;
      return sum + Math.exp(-d * 80) * 2;
    }, 0);

    const intensity = (baseIntensity + keyBonus) * (0.6 + Math.random() * 0.8);

    // Longs liquidate BELOW spot; shorts liquidate ABOVE spot
    const longLiqUsd  = price < spotPrice ? intensity * spotPrice * 8_000_000  * (1 + Math.random()) : intensity * spotPrice * 800_000  * Math.random();
    const shortLiqUsd = price > spotPrice ? intensity * spotPrice * 7_500_000  * (1 + Math.random()) : intensity * spotPrice * 750_000  * Math.random();

    result.push({ price, longLiqUsd, shortLiqUsd });
  }
  return result;
}

/* ────────────────────────────────────────────────────────────
   Format helpers
──────────────────────────────────────────────────────────── */
function fmtUsd(n: number) {
  if (n >= 1_000_000_000) return `$${(n / 1_000_000_000).toFixed(2)}B`;
  if (n >= 1_000_000)     return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000)         return `$${(n / 1_000).toFixed(0)}K`;
  return `$${n.toFixed(0)}`;
}

function fmtPrice(n: number) {
  if (n >= 10_000) return n.toLocaleString("en-US", { maximumFractionDigits: 0 });
  if (n >= 100)    return n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return n.toFixed(3);
}

/* ────────────────────────────────────────────────────────────
   Heatmap row component
──────────────────────────────────────────────────────────── */
function HeatmapRow({
  bucket, maxVal, spotPrice, coinColor,
}: { bucket: LiquidationBucket; maxVal: number; spotPrice: number; coinColor: string }) {
  const longPct  = (bucket.longLiqUsd  / maxVal) * 100;
  const shortPct = (bucket.shortLiqUsd / maxVal) * 100;
  const isSpot   = Math.abs(bucket.price - spotPrice) / spotPrice < 0.005;
  const isBelow  = bucket.price < spotPrice;
  const isAbove  = bucket.price > spotPrice;
  const intensity = (bucket.longLiqUsd + bucket.shortLiqUsd) / (2 * maxVal);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "110px 1fr 40px 1fr 110px",
        alignItems: "center",
        gap: "4px",
        padding: "2px 0",
        background: isSpot ? "rgba(245,158,11,0.08)" : "transparent",
        borderTop: isSpot ? "1px solid rgba(245,158,11,0.4)" : "none",
        borderBottom: isSpot ? "1px solid rgba(245,158,11,0.4)" : "none",
      }}
    >
      {/* Long liq value */}
      <div style={{ textAlign: "right", fontSize: "11px", color: isBelow ? "#22c55e" : "rgba(34,197,94,0.4)", fontVariantNumeric: "tabular-nums" }}>
        {isBelow && bucket.longLiqUsd > 1_000_000 ? fmtUsd(bucket.longLiqUsd) : ""}
      </div>

      {/* Long bar */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div style={{
          height: "14px",
          width: `${longPct}%`,
          background: `rgba(34,197,94,${0.3 + intensity * 0.7})`,
          borderRadius: "2px 0 0 2px",
          minWidth: longPct > 0.5 ? "2px" : "0",
          transition: "width 0.4s ease",
        }} />
      </div>

      {/* Price label */}
      <div style={{
        textAlign: "center",
        fontSize: isSpot ? "12px" : "10px",
        fontWeight: isSpot ? 800 : 400,
        color: isSpot ? "#f59e0b" : "var(--color-text-secondary)",
        fontVariantNumeric: "tabular-nums",
        whiteSpace: "nowrap",
      }}>
        {isSpot ? "▶" : ""}{fmtPrice(bucket.price)}
      </div>

      {/* Short bar */}
      <div>
        <div style={{
          height: "14px",
          width: `${shortPct}%`,
          background: `rgba(239,68,68,${0.3 + intensity * 0.7})`,
          borderRadius: "0 2px 2px 0",
          minWidth: shortPct > 0.5 ? "2px" : "0",
          transition: "width 0.4s ease",
        }} />
      </div>

      {/* Short liq value */}
      <div style={{ textAlign: "left", fontSize: "11px", color: isAbove ? "#ef4444" : "rgba(239,68,68,0.4)", fontVariantNumeric: "tabular-nums" }}>
        {isAbove && bucket.shortLiqUsd > 1_000_000 ? fmtUsd(bucket.shortLiqUsd) : ""}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   Main Page
──────────────────────────────────────────────────────────── */
export default function LiquidationMapPage() {
  const [selectedCoin, setSelectedCoin] = useState<CoinConfig>(COINS[0]);
  const [liqMap, setLiqMap]             = useState<LiquidationBucket[]>([]);
  const [spotPrice, setSpotPrice]       = useState(COINS[0].price);
  const [timeframe, setTimeframe]       = useState("24h");

  useEffect(() => {
    const coin = COINS.find((c) => c.id === selectedCoin.id) || COINS[0];
    setSpotPrice(coin.price);
    setLiqMap(generateLiqMap(coin.price));
  }, [selectedCoin]);

  // Simulate price movement
  useEffect(() => {
    const interval = setInterval(() => {
      setSpotPrice((p) => p * (1 + (Math.random() - 0.5) * 0.001));
    }, 2_000);
    return () => clearInterval(interval);
  }, []);

  const maxVal = Math.max(...liqMap.map((b) => Math.max(b.longLiqUsd, b.shortLiqUsd)));
  const totalLongs  = liqMap.filter((b) => b.price < spotPrice).reduce((s, b) => s + b.longLiqUsd, 0);
  const totalShorts = liqMap.filter((b) => b.price > spotPrice).reduce((s, b) => s + b.shortLiqUsd, 0);
  const dominance   = totalLongs / (totalLongs + totalShorts) * 100;

  // Find biggest clusters
  const top3Longs  = [...liqMap].filter((b) => b.price < spotPrice).sort((a, b) => b.longLiqUsd  - a.longLiqUsd).slice(0, 3);
  const top3Shorts = [...liqMap].filter((b) => b.price > spotPrice).sort((a, b) => b.shortLiqUsd - a.shortLiqUsd).slice(0, 3);

  return (
    <div className="min-h-screen" style={{ background: "var(--color-bg)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={[
          { label: "Trading", href: "/trading" },
          { label: "Tools", href: "/trading/tools" },
          { label: "Liquidation Heatmap", href: "/trading/tools/liquidation-map" },
        ]} />

        {/* Header */}
        <div className="mt-6 mb-6">
          <h1 className="text-3xl font-bold text-[var(--color-text)] mb-2 flex items-center gap-3">
            🔥 Liquidation Heatmap
            <span style={{
              background: "rgba(239,68,68,0.12)", color: "#ef4444",
              fontSize: "12px", fontWeight: 700, padding: "2px 10px",
              borderRadius: "999px", border: "1px solid rgba(239,68,68,0.3)",
            }}>
              ● LIVE
            </span>
          </h1>
          <p className="text-[var(--color-text-secondary)]">
            Visualize where leveraged positions will be liquidated — find key price levels where mass liquidations could trigger cascades.
          </p>
        </div>

        {/* Controls */}
        <div className="glass rounded-2xl p-4 mb-6 flex flex-wrap gap-4 items-center">
          {COINS.map((coin) => (
            <button
              key={coin.id}
              onClick={() => setSelectedCoin(coin)}
              style={{
                background: selectedCoin.id === coin.id ? `${coin.color}22` : "var(--color-bg)",
                color: selectedCoin.id === coin.id ? coin.color : "var(--color-text-secondary)",
                border: `1px solid ${selectedCoin.id === coin.id ? coin.color + "44" : "var(--color-border)"}`,
                borderRadius: "10px", padding: "6px 14px",
                fontWeight: 700, fontSize: "13px", cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {coin.icon} {coin.symbol}
            </button>
          ))}
          <div style={{ marginLeft: "auto", display: "flex", gap: "8px" }}>
            {["24h", "4h", "1h"].map((tf) => (
              <button
                key={tf}
                onClick={() => { setTimeframe(tf); setLiqMap(generateLiqMap(spotPrice)); }}
                style={{
                  background: timeframe === tf ? "var(--color-primary)" : "var(--color-bg)",
                  color: timeframe === tf ? "#fff" : "var(--color-text-secondary)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px", padding: "5px 12px",
                  fontSize: "12px", fontWeight: 600, cursor: "pointer",
                }}
              >
                {tf}
              </button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          <div className="glass rounded-2xl p-4 col-span-2 md:col-span-1">
            <div style={{ fontSize: "11px", color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Spot Price</div>
            <div style={{ fontWeight: 800, fontSize: "20px", color: selectedCoin.color, fontVariantNumeric: "tabular-nums", marginTop: "4px" }}>
              ${fmtPrice(spotPrice)}
            </div>
          </div>
          <div className="glass rounded-2xl p-4">
            <div style={{ fontSize: "11px", color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Long Liq (↓)</div>
            <div style={{ fontWeight: 700, fontSize: "18px", color: "#22c55e", marginTop: "4px" }}>{fmtUsd(totalLongs)}</div>
          </div>
          <div className="glass rounded-2xl p-4">
            <div style={{ fontSize: "11px", color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Short Liq (↑)</div>
            <div style={{ fontWeight: 700, fontSize: "18px", color: "#ef4444", marginTop: "4px" }}>{fmtUsd(totalShorts)}</div>
          </div>
          <div className="glass rounded-2xl p-4">
            <div style={{ fontSize: "11px", color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Long Dominance</div>
            <div style={{ fontWeight: 700, fontSize: "18px", color: dominance > 50 ? "#22c55e" : "#ef4444", marginTop: "4px" }}>
              {dominance.toFixed(1)}%
            </div>
            <div style={{
              height: "4px", background: "var(--color-border)", borderRadius: "2px", marginTop: "6px", overflow: "hidden",
            }}>
              <div style={{
                width: `${dominance}%`, height: "100%",
                background: "linear-gradient(90deg, #22c55e, #ef4444)",
                borderRadius: "2px",
              }} />
            </div>
          </div>
          <div className="glass rounded-2xl p-4">
            <div style={{ fontSize: "11px", color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Total at Risk</div>
            <div style={{ fontWeight: 700, fontSize: "18px", color: "var(--color-text)", marginTop: "4px" }}>
              {fmtUsd(totalLongs + totalShorts)}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* ── Main Heatmap ── */}
          <div className="lg:col-span-2 glass rounded-2xl p-5">
            {/* Column headers */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "110px 1fr 40px 1fr 110px",
              marginBottom: "8px",
              fontSize: "11px", fontWeight: 700, color: "var(--color-text-secondary)",
              textTransform: "uppercase", letterSpacing: "0.06em",
            }}>
              <span style={{ textAlign: "right", color: "#22c55e" }}>Long Liq $</span>
              <span style={{ textAlign: "right", paddingRight: "4px", color: "#22c55e" }}>Longs ←</span>
              <span style={{ textAlign: "center" }}>Price</span>
              <span style={{ color: "#ef4444" }}>→ Shorts</span>
              <span style={{ color: "#ef4444" }}>Short Liq $</span>
            </div>

            <div style={{ maxHeight: "600px", overflowY: "auto" }}>
              {[...liqMap].reverse().map((bucket, i) => (
                <HeatmapRow
                  key={i}
                  bucket={bucket}
                  maxVal={maxVal}
                  spotPrice={spotPrice}
                  coinColor={selectedCoin.color}
                />
              ))}
            </div>
          </div>

          {/* ── Side Panel ── */}
          <div className="space-y-4">
            {/* Top Long Clusters */}
            <div className="glass rounded-2xl p-4">
              <h3 style={{ fontSize: "13px", fontWeight: 700, color: "#22c55e", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                🟢 Biggest Long Clusters
              </h3>
              {top3Longs.map((b, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", padding: "8px", background: "rgba(34,197,94,0.06)", borderRadius: "8px" }}>
                  <div>
                    <div style={{ fontWeight: 700, color: "var(--color-text)", fontSize: "14px" }}>${fmtPrice(b.price)}</div>
                    <div style={{ fontSize: "11px", color: "var(--color-text-secondary)" }}>
                      {((spotPrice - b.price) / spotPrice * 100).toFixed(1)}% below spot
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontWeight: 700, color: "#22c55e" }}>{fmtUsd(b.longLiqUsd)}</div>
                    <div style={{ fontSize: "11px", color: "var(--color-text-secondary)" }}>at risk</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Top Short Clusters */}
            <div className="glass rounded-2xl p-4">
              <h3 style={{ fontSize: "13px", fontWeight: 700, color: "#ef4444", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                🔴 Biggest Short Clusters
              </h3>
              {top3Shorts.map((b, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", padding: "8px", background: "rgba(239,68,68,0.06)", borderRadius: "8px" }}>
                  <div>
                    <div style={{ fontWeight: 700, color: "var(--color-text)", fontSize: "14px" }}>${fmtPrice(b.price)}</div>
                    <div style={{ fontSize: "11px", color: "var(--color-text-secondary)" }}>
                      {((b.price - spotPrice) / spotPrice * 100).toFixed(1)}% above spot
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontWeight: 700, color: "#ef4444" }}>{fmtUsd(b.shortLiqUsd)}</div>
                    <div style={{ fontSize: "11px", color: "var(--color-text-secondary)" }}>at risk</div>
                  </div>
                </div>
              ))}
            </div>

            {/* How to read */}
            <div className="glass rounded-2xl p-4">
              <h3 style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-text)", marginBottom: "10px" }}>📖 How to Read</h3>
              <div style={{ fontSize: "12px", color: "var(--color-text-secondary)", lineHeight: "1.7" }}>
                <p style={{ marginBottom: "6px" }}>
                  <span style={{ color: "#22c55e", fontWeight: 600 }}>Green bars (left)</span> — long positions that liquidate if price drops to that level.
                </p>
                <p style={{ marginBottom: "6px" }}>
                  <span style={{ color: "#ef4444", fontWeight: 600 }}>Red bars (right)</span> — short positions that liquidate if price rises to that level.
                </p>
                <p>Large clusters can act as <span style={{ color: "var(--color-text)", fontWeight: 600 }}>magnet levels</span> — price often gravitates toward high liquidity zones before reversing.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 glass rounded-xl p-4 text-center">
          <p style={{ fontSize: "12px", color: "var(--color-text-secondary)" }}>
            Liquidation data is simulated for demonstration. Production feed connects to Coinglass API and exchange WebSocket streams. Not financial advice — use this as one of many analysis tools.
          </p>
        </div>
      </div>
    </div>
  );
}
