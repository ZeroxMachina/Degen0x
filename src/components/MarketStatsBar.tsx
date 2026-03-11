"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface MarketStats {
  totalMarketCap: number;
  totalVolume24h: number;
  btcDominance: number;
  ethDominance: number;
  activeCryptos: number;
  marketCapChange24h: number;
}

const FALLBACK: MarketStats = {
  totalMarketCap: 2_870_000_000_000,
  totalVolume24h: 142_000_000_000,
  btcDominance: 54.2,
  ethDominance: 17.4,
  activeCryptos: 14837,
  marketCapChange24h: 1.8,
};

function formatBigNumber(n: number): string {
  if (n >= 1e12) return `$${(n / 1e12).toFixed(2)}T`;
  if (n >= 1e9) return `$${(n / 1e9).toFixed(1)}B`;
  if (n >= 1e6) return `$${(n / 1e6).toFixed(1)}M`;
  return `$${n.toLocaleString()}`;
}

export default function MarketStatsBar() {
  const [stats, setStats] = useState<MarketStats>(FALLBACK);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/global",
          { next: { revalidate: 0 } }
        );
        if (!res.ok) throw new Error("API error");
        const json = await res.json();
        const d = json.data;
        setStats({
          totalMarketCap: d.total_market_cap.usd,
          totalVolume24h: d.total_volume.usd,
          btcDominance: d.market_cap_percentage.btc,
          ethDominance: d.market_cap_percentage.eth,
          activeCryptos: d.active_cryptocurrencies,
          marketCapChange24h: d.market_cap_change_percentage_24h_usd,
        });
        setIsLive(true);
      } catch {
        // keep fallback
      }
    };
    fetchStats();
  }, []);

  const changeColor = stats.marketCapChange24h >= 0 ? "#3fb950" : "#f85149";
  const changeArrow = stats.marketCapChange24h >= 0 ? "▲" : "▼";

  return (
    <div
      style={{
        background: "var(--surface, #0d1117)",
        borderBottom: "1px solid var(--color-border, #30363d)",
        padding: "0 16px",
        display: "flex",
        alignItems: "center",
        gap: 0,
        height: 28,
        overflow: "hidden",
        fontSize: 11,
        color: "var(--color-text-secondary, #8b949e)",
      }}
    >
      {/* Live indicator */}
      <span style={{ display: "flex", alignItems: "center", gap: 4, marginRight: 14, flexShrink: 0 }}>
        <span style={{
          width: 5, height: 5, borderRadius: "50%",
          background: isLive ? "#3fb950" : "#8b949e",
          boxShadow: isLive ? "0 0 5px #3fb95080" : "none",
        }} />
        <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.06em" }}>
          {isLive ? "LIVE" : "DATA"}
        </span>
      </span>

      {/* Stats */}
      <div style={{ display: "flex", gap: 18, alignItems: "center", flexWrap: "nowrap", overflow: "hidden" }}>
        <StatItem label="Market Cap" value={formatBigNumber(stats.totalMarketCap)}>
          <span style={{ color: changeColor, marginLeft: 4 }}>
            {changeArrow} {Math.abs(stats.marketCapChange24h).toFixed(1)}%
          </span>
        </StatItem>
        <StatItem label="24h Vol" value={formatBigNumber(stats.totalVolume24h)} />
        <StatItem label="BTC Dom." value={`${stats.btcDominance.toFixed(1)}%`} />
        <StatItem label="ETH Dom." value={`${stats.ethDominance.toFixed(1)}%`} />
        <StatItem label="Cryptos" value={stats.activeCryptos.toLocaleString()} />
        <Link
          href="/tools/price-ticker"
          style={{
            color: "var(--color-primary, #818cf8)",
            textDecoration: "none",
            fontSize: 10,
            fontWeight: 600,
            whiteSpace: "nowrap",
            marginLeft: 4,
          }}
        >
          Live Charts →
        </Link>
      </div>
    </div>
  );
}

function StatItem({ label, value, children }: {
  label: string;
  value: string;
  children?: React.ReactNode;
}) {
  return (
    <span style={{ display: "flex", alignItems: "center", gap: 5, whiteSpace: "nowrap", flexShrink: 0 }}>
      <span style={{ opacity: 0.6 }}>{label}:</span>
      <span style={{ color: "var(--color-text, #e6edf3)", fontWeight: 600 }}>{value}</span>
      {children}
    </span>
  );
}
