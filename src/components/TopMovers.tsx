"use client";
import { useState, useEffect, useCallback } from "react";

interface CoinMover {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  volume24h: number;
  marketCap: number;
  sparkline: number[];
}

// Simulated data — replace with CoinGecko API in production
const MOCK_GAINERS: CoinMover[] = [
  { id: "render", symbol: "RNDR", name: "Render", price: 11.42, change24h: 18.7, volume24h: 892_000_000, marketCap: 5_900_000_000, sparkline: [8.2, 8.5, 9.1, 9.8, 10.2, 10.9, 11.42] },
  { id: "injective", symbol: "INJ", name: "Injective", price: 38.91, change24h: 14.3, volume24h: 456_000_000, marketCap: 3_600_000_000, sparkline: [31, 32.5, 34, 35.2, 36.8, 37.9, 38.91] },
  { id: "sui", symbol: "SUI", name: "Sui", price: 2.18, change24h: 12.1, volume24h: 1_200_000_000, marketCap: 6_800_000_000, sparkline: [1.82, 1.88, 1.94, 2.01, 2.08, 2.14, 2.18] },
  { id: "arweave", symbol: "AR", name: "Arweave", price: 42.56, change24h: 11.8, volume24h: 320_000_000, marketCap: 2_800_000_000, sparkline: [35, 36.5, 38, 39.2, 40.5, 41.8, 42.56] },
  { id: "pyth", symbol: "PYTH", name: "Pyth Network", price: 0.68, change24h: 10.2, volume24h: 210_000_000, marketCap: 2_400_000_000, sparkline: [0.58, 0.6, 0.62, 0.64, 0.65, 0.67, 0.68] },
];

const MOCK_LOSERS: CoinMover[] = [
  { id: "pepe", symbol: "PEPE", name: "Pepe", price: 0.0000089, change24h: -15.2, volume24h: 1_800_000_000, marketCap: 3_700_000_000, sparkline: [0.0000112, 0.0000105, 0.0000098, 0.0000094, 0.0000091, 0.000009, 0.0000089] },
  { id: "bonk", symbol: "BONK", name: "Bonk", price: 0.0000214, change24h: -12.8, volume24h: 620_000_000, marketCap: 1_400_000_000, sparkline: [0.0000268, 0.0000255, 0.0000242, 0.0000231, 0.0000224, 0.0000218, 0.0000214] },
  { id: "worldcoin", symbol: "WLD", name: "Worldcoin", price: 3.12, change24h: -9.4, volume24h: 380_000_000, marketCap: 2_100_000_000, sparkline: [3.65, 3.52, 3.41, 3.32, 3.24, 3.18, 3.12] },
  { id: "aptos", symbol: "APT", name: "Aptos", price: 11.84, change24h: -7.6, volume24h: 290_000_000, marketCap: 4_900_000_000, sparkline: [13.5, 13.1, 12.7, 12.4, 12.1, 11.95, 11.84] },
  { id: "sei", symbol: "SEI", name: "Sei", price: 0.52, change24h: -6.9, volume24h: 175_000_000, marketCap: 1_800_000_000, sparkline: [0.59, 0.57, 0.56, 0.55, 0.54, 0.53, 0.52] },
];

function MiniSparkline({ data, color }: { data: number[]; color: string }) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const w = 80;
  const h = 28;
  const points = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - ((v - min) / range) * h;
    return `${x},${y}`;
  }).join(" ");

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ display: "block" }}>
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function formatPrice(p: number): string {
  if (p < 0.0001) return `$${p.toFixed(7)}`;
  if (p < 1) return `$${p.toFixed(4)}`;
  if (p < 100) return `$${p.toFixed(2)}`;
  return `$${p.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
}

function formatVolume(v: number): string {
  if (v >= 1e9) return `$${(v / 1e9).toFixed(1)}B`;
  if (v >= 1e6) return `$${(v / 1e6).toFixed(0)}M`;
  return `$${v.toLocaleString()}`;
}

export default function TopMovers() {
  const [tab, setTab] = useState<"gainers" | "losers">("gainers");
  const [data, setData] = useState<CoinMover[]>(MOCK_GAINERS);
  const [isLive, setIsLive] = useState(true);

  // Simulate live price jitter
  useEffect(() => {
    if (!isLive) return;
    const interval = setInterval(() => {
      setData((prev) =>
        prev.map((coin) => ({
          ...coin,
          price: coin.price * (1 + (Math.random() - 0.5) * 0.002),
          change24h: coin.change24h + (Math.random() - 0.5) * 0.3,
        }))
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [isLive, tab]);

  const switchTab = useCallback((t: "gainers" | "losers") => {
    setTab(t);
    setData(t === "gainers" ? MOCK_GAINERS : MOCK_LOSERS);
  }, []);

  return (
    <section className="glass rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--glass-border)]">
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-bold text-[var(--color-text)]">Top Movers</h2>
          <div className="flex rounded-lg overflow-hidden border border-[var(--glass-border)]">
            <button
              onClick={() => switchTab("gainers")}
              className={`px-3 py-1 text-xs font-semibold transition-all ${
                tab === "gainers"
                  ? "bg-green-500/20 text-green-400"
                  : "text-[var(--color-text-secondary)] hover:bg-[var(--glass-bg)]"
              }`}
            >
              Gainers
            </button>
            <button
              onClick={() => switchTab("losers")}
              className={`px-3 py-1 text-xs font-semibold transition-all ${
                tab === "losers"
                  ? "bg-red-500/20 text-red-400"
                  : "text-[var(--color-text-secondary)] hover:bg-[var(--glass-bg)]"
              }`}
            >
              Losers
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {isLive && (
            <span className="flex items-center gap-1.5 text-xs text-green-400">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Live
            </span>
          )}
          <button
            onClick={() => setIsLive(!isLive)}
            className="text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition"
          >
            {isLive ? "Pause" : "Resume"}
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-xs text-[var(--color-text-secondary)] border-b border-[var(--glass-border)]">
              <th className="text-left py-2.5 px-5 font-semibold">#</th>
              <th className="text-left py-2.5 px-3 font-semibold">Token</th>
              <th className="text-right py-2.5 px-3 font-semibold">Price</th>
              <th className="text-right py-2.5 px-3 font-semibold">24h %</th>
              <th className="text-right py-2.5 px-3 font-semibold hidden sm:table-cell">Volume</th>
              <th className="text-right py-2.5 px-5 font-semibold hidden md:table-cell">7d Chart</th>
            </tr>
          </thead>
          <tbody>
            {data.map((coin, i) => (
              <tr
                key={coin.id}
                className="border-b border-[var(--glass-border)] last:border-0 hover:bg-[var(--glass-bg)] transition-colors"
              >
                <td className="py-3 px-5 text-sm text-[var(--color-text-secondary)]">{i + 1}</td>
                <td className="py-3 px-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-[var(--color-text)]">{coin.symbol}</span>
                    <span className="text-xs text-[var(--color-text-secondary)] hidden sm:inline">{coin.name}</span>
                  </div>
                </td>
                <td className="py-3 px-3 text-right text-sm font-mono font-semibold text-[var(--color-text)]">
                  {formatPrice(coin.price)}
                </td>
                <td className={`py-3 px-3 text-right text-sm font-bold ${
                  coin.change24h >= 0 ? "text-green-400" : "text-red-400"
                }`}>
                  {coin.change24h >= 0 ? "+" : ""}{coin.change24h.toFixed(1)}%
                </td>
                <td className="py-3 px-3 text-right text-xs text-[var(--color-text-secondary)] hidden sm:table-cell">
                  {formatVolume(coin.volume24h)}
                </td>
                <td className="py-3 px-5 text-right hidden md:table-cell">
                  <div className="flex justify-end">
                    <MiniSparkline
                      data={coin.sparkline}
                      color={coin.change24h >= 0 ? "#4ade80" : "#f87171"}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="px-5 py-3 border-t border-[var(--glass-border)] text-center">
        <a href="/tools/live-prices" className="text-xs font-semibold text-[var(--color-primary)] hover:underline">
          View All Live Prices →
        </a>
      </div>
    </section>
  );
}
