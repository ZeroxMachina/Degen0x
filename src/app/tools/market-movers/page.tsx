"use client";

import { useState, useMemo } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedContent from '@/components/RelatedContent';

// ─── Types ───────────────────────────────────────────────────────────────
interface Token {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  volume24h: number;
  marketCap: number;
  sparkline: number[];
}

type TabType = "gainers" | "losers" | "volume";
type SortKey = "name" | "price" | "change24h" | "volume24h" | "marketCap";

// ─── Demo Data Generator ─────────────────────────────────────────────────
const DEMO_TOKENS: Token[] = [
  {
    id: "bitcoin",
    symbol: "BTC",
    name: "Bitcoin",
    price: 68420,
    change24h: 3.2,
    volume24h: 28500000000,
    marketCap: 1342000000000,
    sparkline: generateSparkline(3.2),
  },
  {
    id: "ethereum",
    symbol: "ETH",
    name: "Ethereum",
    price: 3840,
    change24h: 2.8,
    volume24h: 18200000000,
    marketCap: 461000000000,
    sparkline: generateSparkline(2.8),
  },
  {
    id: "solana",
    symbol: "SOL",
    name: "Solana",
    price: 142.50,
    change24h: 8.5,
    volume24h: 3200000000,
    marketCap: 68500000000,
    sparkline: generateSparkline(8.5),
  },
  {
    id: "binancecoin",
    symbol: "BNB",
    name: "Binance Coin",
    price: 612,
    change24h: 1.4,
    volume24h: 2100000000,
    marketCap: 94500000000,
    sparkline: generateSparkline(1.4),
  },
  {
    id: "ripple",
    symbol: "XRP",
    name: "Ripple",
    price: 2.45,
    change24h: -2.3,
    volume24h: 1800000000,
    marketCap: 132000000000,
    sparkline: generateSparkline(-2.3),
  },
  {
    id: "cardano",
    symbol: "ADA",
    name: "Cardano",
    price: 0.98,
    change24h: -1.2,
    volume24h: 890000000,
    marketCap: 36200000000,
    sparkline: generateSparkline(-1.2),
  },
  {
    id: "avalanche-2",
    symbol: "AVAX",
    name: "Avalanche",
    price: 45.80,
    change24h: 12.3,
    volume24h: 1420000000,
    marketCap: 16800000000,
    sparkline: generateSparkline(12.3),
  },
  {
    id: "polkadot",
    symbol: "DOT",
    name: "Polkadot",
    price: 8.42,
    change24h: -4.1,
    volume24h: 620000000,
    marketCap: 12100000000,
    sparkline: generateSparkline(-4.1),
  },
  {
    id: "polygon",
    symbol: "MATIC",
    name: "Polygon",
    price: 0.89,
    change24h: 6.7,
    volume24h: 890000000,
    marketCap: 9200000000,
    sparkline: generateSparkline(6.7),
  },
  {
    id: "chainlink",
    symbol: "LINK",
    name: "Chainlink",
    price: 28.60,
    change24h: 5.4,
    volume24h: 1200000000,
    marketCap: 13500000000,
    sparkline: generateSparkline(5.4),
  },
  {
    id: "uniswap",
    symbol: "UNI",
    name: "Uniswap",
    price: 12.15,
    change24h: 9.2,
    volume24h: 980000000,
    marketCap: 9800000000,
    sparkline: generateSparkline(9.2),
  },
  {
    id: "cosmos",
    symbol: "ATOM",
    name: "Cosmos",
    price: 11.85,
    change24h: 7.5,
    volume24h: 620000000,
    marketCap: 8900000000,
    sparkline: generateSparkline(7.5),
  },
  {
    id: "arbitrum",
    symbol: "ARB",
    name: "Arbitrum",
    price: 1.28,
    change24h: 15.6,
    volume24h: 890000000,
    marketCap: 5200000000,
    sparkline: generateSparkline(15.6),
  },
  {
    id: "optimism",
    symbol: "OP",
    name: "Optimism",
    price: 2.85,
    change24h: -5.2,
    volume24h: 480000000,
    marketCap: 3100000000,
    sparkline: generateSparkline(-5.2),
  },
  {
    id: "aptos",
    symbol: "APT",
    name: "Aptos",
    price: 11.45,
    change24h: 18.4,
    volume24h: 620000000,
    marketCap: 5800000000,
    sparkline: generateSparkline(18.4),
  },
  {
    id: "sui",
    symbol: "SUI",
    name: "Sui",
    price: 4.28,
    change24h: 11.3,
    volume24h: 890000000,
    marketCap: 4500000000,
    sparkline: generateSparkline(11.3),
  },
  {
    id: "near",
    symbol: "NEAR",
    name: "NEAR Protocol",
    price: 6.85,
    change24h: 9.8,
    volume24h: 720000000,
    marketCap: 7200000000,
    sparkline: generateSparkline(9.8),
  },
  {
    id: "fantom",
    symbol: "FTM",
    name: "Fantom",
    price: 0.92,
    change24h: 13.2,
    volume24h: 420000000,
    marketCap: 3200000000,
    sparkline: generateSparkline(13.2),
  },
  {
    id: "sei",
    symbol: "SEI",
    name: "Sei",
    price: 0.55,
    change24h: -8.4,
    volume24h: 280000000,
    marketCap: 1850000000,
    sparkline: generateSparkline(-8.4),
  },
  {
    id: "celestia",
    symbol: "TIA",
    name: "Celestia",
    price: 8.92,
    change24h: 22.1,
    volume24h: 380000000,
    marketCap: 3500000000,
    sparkline: generateSparkline(22.1),
  },
];

function generateSparkline(change: number): number[] {
  const points: number[] = [];
  let value = 50;
  const volatility = Math.abs(change) / 5;

  for (let i = 0; i < 12; i++) {
    const random = (Math.random() - 0.5) * volatility * 2;
    value = Math.max(20, Math.min(80, value + random + (change / 12)));
    points.push(value);
  }

  return points;
}

// ─── Sparkline Component ──────────────────────────────────────────────────
interface SparklineProps {
  data: number[];
  color: string;
}

function Sparkline({ data, color }: SparklineProps) {
  const width = 80;
  const height = 24;
  const padding = 2;
  const graphWidth = width - padding * 2;
  const graphHeight = height - padding * 2;

  const minVal = Math.min(...data);
  const maxVal = Math.max(...data);
  const range = maxVal - minVal || 1;

  const points = data
    .map((val, i) => {
      const x = padding + (i / (data.length - 1)) * graphWidth;
      const y = padding + graphHeight - ((val - minVal) / range) * graphHeight;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

// ─── Token Card Component ─────────────────────────────────────────────────
interface TokenCardProps {
  token: Token;
  colorScheme: "green" | "red" | "blue";
}

function TokenCard({ token, colorScheme }: TokenCardProps) {
  const colorMap = {
    green: { bg: "rgba(34, 197, 94, 0.1)", text: "#22c55e", border: "rgba(34, 197, 94, 0.2)" },
    red: { bg: "rgba(239, 68, 68, 0.1)", text: "#ef4444", border: "rgba(239, 68, 68, 0.2)" },
    blue: { bg: "rgba(99, 102, 241, 0.1)", text: "#6366f1", border: "rgba(99, 102, 241, 0.2)" },
  };

  const colors = colorMap[colorScheme];
  const isPositive = token.change24h >= 0;

  return (
    <div
      style={{
        padding: "1.25rem",
        background: "var(--glass-bg)",
        border: "1px solid var(--glass-border)",
        borderRadius: "var(--glass-radius-sm)",
        backdropFilter: "blur(var(--glass-blur))",
        WebkitBackdropFilter: "blur(var(--glass-blur))",
        transition: "all 0.3s var(--ease-glass)",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.background = "var(--glass-bg-hover)";
        el.style.borderColor = "var(--glass-border-hover)";
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow = "var(--glass-shadow-lg)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.background = "var(--glass-bg)";
        el.style.borderColor = "var(--glass-border)";
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
      }}
    >
      {/* ── Header: Name + Symbol ── */}
      <div style={{ marginBottom: "0.75rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "0.85rem",
                fontWeight: 700,
                color: colors.text,
                marginBottom: "2px",
              }}
            >
              {token.symbol}
            </div>
            <div
              style={{
                fontSize: "0.8rem",
                color: "var(--color-text-secondary)",
              }}
            >
              {token.name}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <Sparkline data={token.sparkline} color={colors.text} />
          </div>
        </div>
      </div>

      {/* ── Price ── */}
      <div
        style={{
          fontSize: "1.3rem",
          fontWeight: 800,
          color: "var(--color-text)",
          marginBottom: "0.5rem",
        }}
      >
        ${token.price.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: token.price > 100 ? 0 : 2,
        })}
      </div>

      {/* ── 24h Change ── */}
      <div
        style={{
          padding: "0.5rem 0.75rem",
          background: colors.bg,
          border: `1px solid ${colors.border}`,
          borderRadius: "8px",
          marginBottom: "0.75rem",
          fontSize: "0.9rem",
          fontWeight: 700,
          color: colors.text,
          display: "inline-block",
        }}
      >
        {isPositive ? "▲" : "▼"} {Math.abs(token.change24h).toFixed(2)}%
      </div>

      {/* ── Market Cap ── */}
      <div
        style={{
          fontSize: "0.75rem",
          color: "var(--color-text-secondary)",
          marginTop: "0.75rem",
        }}
      >
        Market Cap:{" "}
        <span style={{ color: "var(--color-text)", fontWeight: 600 }}>
          ${(token.marketCap / 1000000000).toFixed(1)}B
        </span>
      </div>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────
export default function MarketMoversPage() {
  const [activeTab, setActiveTab] = useState<TabType>("gainers");
  const [sortKey, setSortKey] = useState<SortKey>("change24h");
  const [sortAsc, setSortAsc] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // ── Filter & Sort Logic ──
  const filteredAndSorted = useMemo(() => {
    let filtered = DEMO_TOKENS.filter((token) =>
      token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      token.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );

    let sorted = [...filtered];

    // Sort by active tab
    if (activeTab === "gainers") {
      sorted = sorted.sort((a, b) => b.change24h - a.change24h);
    } else if (activeTab === "losers") {
      sorted = sorted.sort((a, b) => a.change24h - b.change24h);
    } else {
      sorted = sorted.sort((a, b) => b.volume24h - a.volume24h);
    }

    // Apply custom sort
    if (sortKey === "change24h" && activeTab !== "gainers" && activeTab !== "losers") {
      sorted.sort((a, b) => (sortAsc ? a.change24h - b.change24h : b.change24h - a.change24h));
    } else if (sortKey === "volume24h") {
      sorted.sort((a, b) => (sortAsc ? a.volume24h - b.volume24h : b.volume24h - a.volume24h));
    } else if (sortKey === "price") {
      sorted.sort((a, b) => (sortAsc ? a.price - b.price : b.price - a.price));
    } else if (sortKey === "name") {
      sorted.sort((a, b) => (sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)));
    }

    // Take top 10
    return sorted.slice(0, 10);
  }, [activeTab, searchTerm, sortKey, sortAsc]);

  const getTabColor = (tab: TabType) => {
    if (activeTab === tab) {
      return tab === "gainers" ? "#22c55e" : tab === "losers" ? "#ef4444" : "#6366f1";
    }
    return "var(--color-text-secondary)";
  };

  return (
    <div style={{ background: "var(--color-bg)", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Tools", href: "/tools" },
            { label: "Market Movers" },
          ]}
        />

        {/* ── Header ── */}
        <div style={{ marginTop: "1.5rem", marginBottom: "2.5rem" }}>
          <div
            style={{
              display: "inline-block",
              padding: "6px 14px",
              background: "rgba(99, 102, 241, 0.15)",
              border: "1px solid rgba(99, 102, 241, 0.3)",
              borderRadius: 20,
              fontSize: 12,
              color: "var(--color-primary)",
              fontWeight: 700,
              marginBottom: 12,
            }}
          >
            📊 Market Movers
          </div>
          <h1
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 900,
              color: "var(--color-text)",
              marginBottom: "0.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Market Movers
          </h1>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--color-text-secondary)",
              maxWidth: 560,
              margin: 0,
            }}
          >
            Track top gainers, losers, and high-volume tokens in real-time with 24h price changes.
          </p>
        </div>

        {/* ── Search & Filter Bar ── */}
        <div
          style={{
            marginBottom: "2rem",
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            placeholder="Search tokens..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              flex: 1,
              minWidth: 200,
              padding: "0.75rem 1rem",
              background: "var(--glass-bg)",
              border: "1px solid var(--glass-border)",
              borderRadius: "var(--glass-radius-sm)",
              color: "var(--color-text)",
              fontSize: "0.95rem",
              outline: "none",
              transition: "all 0.3s ease",
              backdropFilter: "blur(var(--glass-blur))",
              WebkitBackdropFilter: "blur(var(--glass-blur))",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "var(--glass-border-hover)";
              e.currentTarget.style.background = "var(--glass-bg-hover)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "var(--glass-border)";
              e.currentTarget.style.background = "var(--glass-bg)";
            }}
          />

          <select
            value={sortKey}
            onChange={(e) => setSortKey(e.target.value as SortKey)}
            style={{
              padding: "0.75rem 1rem",
              background: "var(--glass-bg)",
              border: "1px solid var(--glass-border)",
              borderRadius: "var(--glass-radius-sm)",
              color: "var(--color-text)",
              fontSize: "0.95rem",
              outline: "none",
              cursor: "pointer",
              backdropFilter: "blur(var(--glass-blur))",
              WebkitBackdropFilter: "blur(var(--glass-blur))",
            }}
          >
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="change24h">24h Change</option>
            <option value="volume24h">Volume</option>
            <option value="marketCap">Market Cap</option>
          </select>

          <button
            onClick={() => setSortAsc(!sortAsc)}
            style={{
              padding: "0.75rem 1rem",
              background: "var(--glass-bg)",
              border: "1px solid var(--glass-border)",
              borderRadius: "var(--glass-radius-sm)",
              color: "var(--color-text)",
              fontSize: "0.9rem",
              fontWeight: 600,
              outline: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              backdropFilter: "blur(var(--glass-blur))",
              WebkitBackdropFilter: "blur(var(--glass-blur))",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--glass-bg-hover)";
              e.currentTarget.style.borderColor = "var(--glass-border-hover)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--glass-bg)";
              e.currentTarget.style.borderColor = "var(--glass-border)";
            }}
          >
            {sortAsc ? "↑" : "↓"}
          </button>
        </div>

        {/* ── Tab Navigation ── */}
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            marginBottom: "2rem",
            borderBottom: "1px solid var(--glass-border)",
            paddingBottom: "1rem",
          }}
        >
          {(["gainers", "losers", "volume"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "0.5rem 0",
                background: "none",
                border: "none",
                borderBottom:
                  activeTab === tab ? `2px solid ${getTabColor(tab)}` : "none",
                color: getTabColor(tab),
                fontSize: "0.95rem",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.3s ease",
                textTransform: "capitalize",
              }}
            >
              {tab === "gainers" && "📈 Top Gainers"}
              {tab === "losers" && "📉 Top Losers"}
              {tab === "volume" && "💧 Top Volume"}
            </button>
          ))}
        </div>

        {/* ── Token Grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          {filteredAndSorted.length > 0 ? (
            filteredAndSorted.map((token, idx) => (
              <TokenCard
                key={token.id}
                token={token}
                colorScheme={
                  activeTab === "gainers"
                    ? "green"
                    : activeTab === "losers"
                    ? "red"
                    : "blue"
                }
              />
            ))
          ) : (
            <div
              style={{
                gridColumn: "1 / -1",
                padding: "3rem 2rem",
                textAlign: "center",
                background: "var(--glass-bg)",
                border: "1px solid var(--glass-border)",
                borderRadius: "var(--glass-radius-sm)",
                backdropFilter: "blur(var(--glass-blur))",
                WebkitBackdropFilter: "blur(var(--glass-blur))",
              }}
            >
              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--color-text-secondary)",
                  margin: 0,
                }}
              >
                No tokens found matching "{searchTerm}"
              </p>
            </div>
          )}
        </div>

        {/* ── Info Section ── */}
        <div
          style={{
            padding: "2rem",
            background: "var(--glass-bg)",
            border: "1px solid var(--glass-border)",
            borderRadius: "var(--glass-radius)",
            backdropFilter: "blur(var(--glass-blur))",
            WebkitBackdropFilter: "blur(var(--glass-blur))",
            marginBottom: "2rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.2rem",
              fontWeight: 700,
              color: "var(--color-text)",
              marginTop: 0,
              marginBottom: "1rem",
            }}
          >
            About Market Movers
          </h2>
          <p
            style={{
              color: "var(--color-text-secondary)",
              lineHeight: 1.7,
              margin: "0 0 1rem 0",
            }}
          >
            Market Movers tracks the top performing cryptocurrencies by multiple metrics.
            View the top 10 gainers for tokens with the highest positive 24-hour price change,
            top 10 losers for the biggest declines, and top 10 by volume for the most actively
            traded tokens. Perfect for identifying emerging trends and market sentiment.
          </p>
          <p
            style={{
              color: "var(--color-text-secondary)",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Each token card displays the current price, 24-hour percentage change with a color-coded
            indicator (green for gains, red for losses), a sparkline chart showing price movement,
            and the market capitalization. Filter by token name or symbol to quickly find what you're
            looking for.
          </p>
        </div>

        {/* ── Features Grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16,
          }}
        >
          {[
            {
              title: "Three Market Views",
              body: "Switch between gainers, losers, and volume leaders instantly.",
            },
            {
              title: "Sparkline Charts",
              body: "Mini SVG charts show 24h price movement for each token.",
            },
            {
              title: "Advanced Sorting",
              body: "Sort by price, market cap, volume, or 24h change percentage.",
            },
            {
              title: "Search & Filter",
              body: "Quickly find tokens by name or symbol across all markets.",
            },
          ].map((box) => (
            <div
              key={box.title}
              style={{
                padding: "1.25rem",
                background: "var(--glass-bg)",
                border: "1px solid var(--glass-border)",
                borderRadius: "var(--glass-radius-sm)",
                backdropFilter: "blur(var(--glass-blur))",
                WebkitBackdropFilter: "blur(var(--glass-blur))",
              }}
            >
              <h3
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: "var(--color-text)",
                  marginBottom: 8,
                  margin: "0 0 8px 0",
                }}
              >
                {box.title}
              </h3>
              <p
                style={{
                  fontSize: 13,
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {box.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Market Movers",
              "url": "https://degen0x.com/tools/market-movers",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            })
          }}
        />
      <RelatedContent category="tools" currentSlug="/tools/market-movers" />
      </div>
  );
}
