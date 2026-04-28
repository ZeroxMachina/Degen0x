"use client";

import { useState, useEffect } from "react";

interface MarketData {
  btcPrice: number;
  btcChange: number;
  ethPrice: number;
  ethChange: number;
  solPrice: number;
  solChange: number;
  bnbPrice: number;
  bnbChange: number;
  totalMarketCap: number;
  btcDominance: number;
  fearGreedIndex: number;
  volume24h: number;
}

const formatPrice = (price: number) => {
  if (price >= 1000) {
    return `$${(price / 1000).toFixed(1)}K`;
  }
  return `$${price.toFixed(2)}`;
};

const formatMarketCap = (cap: number) => {
  if (cap >= 1000000000000) {
    return `$${(cap / 1000000000000).toFixed(2)}T`;
  }
  if (cap >= 1000000000) {
    return `$${(cap / 1000000000).toFixed(2)}B`;
  }
  return `$${(cap / 1000000).toFixed(2)}M`;
};

export default function MarketPulse() {
  const [market, setMarket] = useState<MarketData>({
    btcPrice: 42350,
    btcChange: 2.45,
    ethPrice: 3680,
    ethChange: 1.82,
    solPrice: 145.30,
    solChange: 3.21,
    bnbPrice: 612.50,
    bnbChange: 0.95,
    totalMarketCap: 2450000000000,
    btcDominance: 52.3,
    fearGreedIndex: 68,
    volume24h: 156000000000,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMarket((prev) => ({
        btcPrice: prev.btcPrice + (Math.random() - 0.5) * 100,
        btcChange: prev.btcChange + (Math.random() - 0.5) * 0.5,
        ethPrice: prev.ethPrice + (Math.random() - 0.5) * 30,
        ethChange: prev.ethChange + (Math.random() - 0.5) * 0.3,
        solPrice: prev.solPrice + (Math.random() - 0.5) * 2,
        solChange: prev.solChange + (Math.random() - 0.5) * 0.2,
        bnbPrice: prev.bnbPrice + (Math.random() - 0.5) * 5,
        bnbChange: prev.bnbChange + (Math.random() - 0.5) * 0.2,
        totalMarketCap: prev.totalMarketCap + (Math.random() - 0.5) * 10000000000,
        btcDominance: Math.min(60, Math.max(45, prev.btcDominance + (Math.random() - 0.5) * 0.3)),
        fearGreedIndex: Math.min(100, Math.max(0, prev.fearGreedIndex + (Math.random() - 0.5) * 2)),
        volume24h: prev.volume24h + (Math.random() - 0.5) * 5000000000,
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getChangeColor = (change: number) => {
    return change >= 0 ? "#3fb950" : "#f85149";
  };

  const getFearGreedColor = (index: number) => {
    if (index >= 75) return "#3fb950";
    if (index >= 50) return "#f0883e";
    return "#f85149";
  };

  const marketItems = [
    { icon: "₿", label: "BTC", price: market.btcPrice, change: market.btcChange },
    { icon: "Ξ", label: "ETH", price: market.ethPrice, change: market.ethChange },
    { icon: "◎", label: "SOL", price: market.solPrice, change: market.solChange },
    { icon: "🟨", label: "BNB", price: market.bnbPrice, change: market.bnbChange },
  ];

  return (
    <div
      style={{
        width: "100%",
        background: "var(--glass-bg, linear-gradient(135deg, rgba(98, 126, 234, 0.05), rgba(98, 126, 234, 0.02)))",
        border: `1px solid var(--glass-border, rgba(98, 126, 234, 0.15))`,
        borderRadius: 8,
        padding: "12px 16px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          overflowX: "auto",
          scrollBehavior: "smooth",
          fontSize: 12,
          color: "var(--color-text, #e6edf3)",
        }}
      >
        {/* Market Cap */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            whiteSpace: "nowrap",
            paddingRight: 12,
            borderRight: "1px solid var(--glass-border, rgba(98, 126, 234, 0.15))",
            flexShrink: 0,
          }}
        >
          <span style={{ fontSize: 13, fontWeight: 700 }}>📊 Market Cap:</span>
          <span style={{ fontWeight: 800, color: "var(--color-primary, #627EEA)" }}>
            {formatMarketCap(market.totalMarketCap)}
          </span>
        </div>

        {/* Price Tickers */}
        {marketItems.map((item) => (
          <div
            key={item.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              whiteSpace: "nowrap",
              padding: "6px 10px",
              background: "rgba(98, 126, 234, 0.08)",
              borderRadius: 6,
              flexShrink: 0,
            }}
          >
            <span style={{ fontSize: 14 }}>{item.icon}</span>
            <span style={{ fontWeight: 700, fontSize: 11 }}>{item.label}</span>
            <span style={{ fontWeight: 800, fontSize: 11 }}>
              {formatPrice(item.price)}
            </span>
            <span
              style={{
                fontWeight: 700,
                fontSize: 10,
                color: getChangeColor(item.change),
              }}
            >
              {item.change >= 0 ? "↑" : "↓"} {Math.abs(item.change).toFixed(2)}%
            </span>
          </div>
        ))}

        {/* Volume */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            whiteSpace: "nowrap",
            padding: "6px 10px",
            background: "rgba(98, 126, 234, 0.08)",
            borderRadius: 6,
            flexShrink: 0,
          }}
        >
          <span style={{ fontWeight: 700, fontSize: 11 }}>Volume 24h</span>
          <span style={{ fontWeight: 800, fontSize: 11, color: "var(--color-primary, #627EEA)" }}>
            {formatMarketCap(market.volume24h)}
          </span>
        </div>

        {/* BTC Dominance */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            whiteSpace: "nowrap",
            padding: "6px 10px",
            background: "rgba(98, 126, 234, 0.08)",
            borderRadius: 6,
            flexShrink: 0,
          }}
        >
          <span style={{ fontWeight: 700, fontSize: 11 }}>BTC Dom</span>
          <span style={{ fontWeight: 800, fontSize: 11, color: "var(--color-primary, #627EEA)" }}>
            {market.btcDominance.toFixed(1)}%
          </span>
        </div>

        {/* Fear & Greed Index */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            whiteSpace: "nowrap",
            padding: "6px 10px",
            background: "rgba(98, 126, 234, 0.08)",
            borderRadius: 6,
            flexShrink: 0,
          }}
        >
          <span style={{ fontSize: 12 }}>😨</span>
          <span style={{ fontWeight: 700, fontSize: 11 }}>F&G</span>
          <span
            style={{
              fontWeight: 800,
              fontSize: 11,
              color: getFearGreedColor(market.fearGreedIndex),
            }}
          >
            {market.fearGreedIndex.toFixed(0)}
          </span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        style={{
          fontSize: 10,
          color: "var(--color-text-secondary, #8b949e)",
          marginTop: 8,
          textAlign: "center",
        }}
      >
        ← Scroll for more →
      </div>

      {/* Scrollbar Styles */}
      <style>{`
        div[style*="overflow-x: auto"]::-webkit-scrollbar {
          height: 4px;
        }

        div[style*="overflow-x: auto"]::-webkit-scrollbar-track {
          background: rgba(98, 126, 234, 0.08);
          borderRadius: 4px;
        }

        div[style*="overflow-x: auto"]::-webkit-scrollbar-thumb {
          background: rgba(98, 126, 234, 0.3);
          borderRadius: 4px;
        }

        div[style*="overflow-x: auto"]::-webkit-scrollbar-thumb:hover {
          background: rgba(98, 126, 234, 0.5);
        }
      `}</style>
    </div>
  );
}
