'use client';

import { useState, useMemo } from "react";
import { Search, TrendingUp, TrendingDown, ArrowUpDown, ChevronDown, ChevronUp, Activity } from "lucide-react";

// ============================================================================
// INTERFACES
// ============================================================================

interface FundingRate {
  exchange: string;
  rate: number; // e.g., 0.0100 means 0.01%
  nextFunding: string; // e.g., "2h 34m"
}

interface TokenFunding {
  symbol: string;
  name: string;
  price: number;
  avgRate: number;
  exchanges: FundingRate[];
  openInterest: number; // in USD
  volume24h: number;
}

type SortBy = "rate-high" | "rate-low" | "name-asc" | "name-desc";

// ============================================================================
// MOCK DATA & CONSTANTS
// ============================================================================

const EXCHANGES = ["Binance", "Bybit", "OKX", "Bitget", "dYdX", "Hyperliquid"];

const MOCK_FUNDING_DATA: TokenFunding[] = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    price: 67850,
    avgRate: 0.0098,
    exchanges: [
      { exchange: "Binance", rate: 0.0102, nextFunding: "2h 34m" },
      { exchange: "Bybit", rate: 0.0095, nextFunding: "1h 45m" },
      { exchange: "OKX", rate: 0.0099, nextFunding: "3h 12m" },
      { exchange: "Bitget", rate: 0.0097, nextFunding: "2h 18m" },
      { exchange: "dYdX", rate: 0.0096, nextFunding: "4h 01m" },
      { exchange: "Hyperliquid", rate: 0.0101, nextFunding: "1h 22m" },
    ],
    openInterest: 45230000000,
    volume24h: 28500000000,
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    price: 3456,
    avgRate: 0.0087,
    exchanges: [
      { exchange: "Binance", rate: 0.0091, nextFunding: "2h 34m" },
      { exchange: "Bybit", rate: 0.0084, nextFunding: "1h 45m" },
      { exchange: "OKX", rate: 0.0088, nextFunding: "3h 12m" },
      { exchange: "Bitget", rate: 0.0085, nextFunding: "2h 18m" },
      { exchange: "dYdX", rate: 0.0089, nextFunding: "4h 01m" },
      { exchange: "Hyperliquid", rate: 0.0083, nextFunding: "1h 22m" },
    ],
    openInterest: 18450000000,
    volume24h: 12300000000,
  },
  {
    symbol: "SOL",
    name: "Solana",
    price: 198.45,
    avgRate: 0.0156,
    exchanges: [
      { exchange: "Binance", rate: 0.0178, nextFunding: "2h 34m" },
      { exchange: "Bybit", rate: 0.0142, nextFunding: "1h 45m" },
      { exchange: "OKX", rate: 0.0165, nextFunding: "3h 12m" },
      { exchange: "Bitget", rate: 0.0151, nextFunding: "2h 18m" },
      { exchange: "dYdX", rate: 0.0148, nextFunding: "4h 01m" },
      { exchange: "Hyperliquid", rate: 0.0154, nextFunding: "1h 22m" },
    ],
    openInterest: 2840000000,
    volume24h: 1620000000,
  },
  {
    symbol: "ARB",
    name: "Arbitrum",
    price: 2.34,
    avgRate: -0.0043,
    exchanges: [
      { exchange: "Binance", rate: -0.0025, nextFunding: "2h 34m" },
      { exchange: "Bybit", rate: -0.0058, nextFunding: "1h 45m" },
      { exchange: "OKX", rate: -0.0039, nextFunding: "3h 12m" },
      { exchange: "Bitget", rate: -0.0047, nextFunding: "2h 18m" },
      { exchange: "dYdX", rate: -0.0041, nextFunding: "4h 01m" },
      { exchange: "Hyperliquid", rate: -0.0052, nextFunding: "1h 22m" },
    ],
    openInterest: 1230000000,
    volume24h: 456000000,
  },
  {
    symbol: "AVAX",
    name: "Avalanche",
    price: 41.23,
    avgRate: 0.0125,
    exchanges: [
      { exchange: "Binance", rate: 0.0134, nextFunding: "2h 34m" },
      { exchange: "Bybit", rate: 0.0118, nextFunding: "1h 45m" },
      { exchange: "OKX", rate: 0.0128, nextFunding: "3h 12m" },
      { exchange: "Bitget", rate: 0.0122, nextFunding: "2h 18m" },
      { exchange: "dYdX", rate: 0.0129, nextFunding: "4h 01m" },
      { exchange: "Hyperliquid", rate: 0.0116, nextFunding: "1h 22m" },
    ],
    openInterest: 892000000,
    volume24h: 382000000,
  },
  {
    symbol: "DOGE",
    name: "Dogecoin",
    price: 0.4215,
    avgRate: 0.0198,
    exchanges: [
      { exchange: "Binance", rate: 0.0215, nextFunding: "2h 34m" },
      { exchange: "Bybit", rate: 0.0187, nextFunding: "1h 45m" },
      { exchange: "OKX", rate: 0.0204, nextFunding: "3h 12m" },
      { exchange: "Bitget", rate: 0.0193, nextFunding: "2h 18m" },
      { exchange: "dYdX", rate: 0.0201, nextFunding: "4h 01m" },
      { exchange: "Hyperliquid", rate: 0.0192, nextFunding: "1h 22m" },
    ],
    openInterest: 645000000,
    volume24h: 289000000,
  },
  {
    symbol: "LINK",
    name: "Chainlink",
    price: 28.67,
    avgRate: 0.0062,
    exchanges: [
      { exchange: "Binance", rate: 0.0078, nextFunding: "2h 34m" },
      { exchange: "Bybit", rate: 0.0051, nextFunding: "1h 45m" },
      { exchange: "OKX", rate: 0.0065, nextFunding: "3h 12m" },
      { exchange: "Bitget", rate: 0.0058, nextFunding: "2h 18m" },
      { exchange: "dYdX", rate: 0.0061, nextFunding: "4h 01m" },
      { exchange: "Hyperliquid", rate: 0.0053, nextFunding: "1h 22m" },
    ],
    openInterest: 567000000,
    volume24h: 234000000,
  },
  {
    symbol: "MATIC",
    name: "Polygon",
    price: 0.8956,
    avgRate: -0.0031,
    exchanges: [
      { exchange: "Binance", rate: -0.0015, nextFunding: "2h 34m" },
      { exchange: "Bybit", rate: -0.0042, nextFunding: "1h 45m" },
      { exchange: "OKX", rate: -0.0028, nextFunding: "3h 12m" },
      { exchange: "Bitget", rate: -0.0036, nextFunding: "2h 18m" },
      { exchange: "dYdX", rate: -0.0032, nextFunding: "4h 01m" },
      { exchange: "Hyperliquid", rate: -0.0039, nextFunding: "1h 22m" },
    ],
    openInterest: 423000000,
    volume24h: 198000000,
  },
  {
    symbol: "OP",
    name: "Optimism",
    price: 3.78,
    avgRate: 0.0089,
    exchanges: [
      { exchange: "Binance", rate: 0.0105, nextFunding: "2h 34m" },
      { exchange: "Bybit", rate: 0.0074, nextFunding: "1h 45m" },
      { exchange: "OKX", rate: 0.0092, nextFunding: "3h 12m" },
      { exchange: "Bitget", rate: 0.0085, nextFunding: "2h 18m" },
      { exchange: "dYdX", rate: 0.0088, nextFunding: "4h 01m" },
      { exchange: "Hyperliquid", rate: 0.0081, nextFunding: "1h 22m" },
    ],
    openInterest: 312000000,
    volume24h: 145000000,
  },
  {
    symbol: "SUI",
    name: "Sui",
    price: 4.56,
    avgRate: 0.0172,
    exchanges: [
      { exchange: "Binance", rate: 0.0189, nextFunding: "2h 34m" },
      { exchange: "Bybit", rate: 0.0158, nextFunding: "1h 45m" },
      { exchange: "OKX", rate: 0.0176, nextFunding: "3h 12m" },
      { exchange: "Bitget", rate: 0.0168, nextFunding: "2h 18m" },
      { exchange: "dYdX", rate: 0.0179, nextFunding: "4h 01m" },
      { exchange: "Hyperliquid", rate: 0.0162, nextFunding: "1h 22m" },
    ],
    openInterest: 543000000,
    volume24h: 267000000,
  },
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

const formatRate = (rate: number): string => {
  return `${rate >= 0 ? "+" : ""}${(rate * 100).toFixed(4)}%`;
};

const formatAnnualized = (eightHourRate: number): string => {
  const annualized = eightHourRate * 365 * 3; // 3 periods per day
  return `${annualized >= 0 ? "+" : ""}${(annualized * 100).toFixed(2)}% APR`;
};

const formatCurrency = (value: number): string => {
  if (value >= 1000000000) {
    return `$${(value / 1000000000).toFixed(2)}B`;
  }
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(2)}M`;
  }
  return `$${value.toFixed(2)}`;
};

const getRateColor = (rate: number): string => {
  if (rate > 0) return "#22c55e"; // Green
  if (rate < 0) return "#f85149"; // Red
  return "#d29922"; // Amber (neutral)
};

// ============================================================================
// COMPONENT
// ============================================================================

export default function FundingRateTracker() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortBy>("rate-high");
  const [expandedToken, setExpandedToken] = useState<string | null>(null);

  // Filter and sort tokens
  const filteredAndSortedTokens = useMemo(() => {
    let filtered = MOCK_FUNDING_DATA.filter((token) =>
      token.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
      token.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "rate-high":
          return b.avgRate - a.avgRate;
        case "rate-low":
          return a.avgRate - b.avgRate;
        case "name-asc":
          return a.symbol.localeCompare(b.symbol);
        case "name-desc":
          return b.symbol.localeCompare(a.symbol);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, sortBy]);

  // Calculate summary stats
  const summaryStats = useMemo(() => {
    const btc = MOCK_FUNDING_DATA.find((t) => t.symbol === "BTC");
    const eth = MOCK_FUNDING_DATA.find((t) => t.symbol === "ETH");
    const mostBullish = MOCK_FUNDING_DATA.reduce((max, token) =>
      token.avgRate > max.avgRate ? token : max
    );
    const mostBearish = MOCK_FUNDING_DATA.reduce((min, token) =>
      token.avgRate < min.avgRate ? token : min
    );

    return {
      btcRate: btc?.avgRate || 0,
      ethRate: eth?.avgRate || 0,
      mostBullish,
      mostBearish,
    };
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      {/* Header */}
      <div style={{ marginBottom: "2rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
          <Activity style={{ width: "1.5rem", height: "1.5rem", color: "#22c55e" }} />
          <h1 style={{ margin: 0, fontSize: "2rem", fontWeight: 700, color: "#ffffff" }}>
            Funding Rate Tracker
          </h1>
        </div>
        <p style={{ margin: 0, color: "#a0aec0", fontSize: "0.875rem", marginTop: "0.5rem" }}>
          Compare perpetual futures funding rates across exchanges in real-time
        </p>
      </div>

      {/* Live Status */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", fontSize: "0.875rem" }}>
        <div style={{ width: "0.5rem", height: "0.5rem", borderRadius: "50%", backgroundColor: "#22c55e" }} />
        <span style={{ color: "#22c55e" }}>Live</span>
        <span style={{ color: "#64748b" }}>Last updated: 23 seconds ago</span>
      </div>

      {/* Summary Stats Cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "1rem",
        marginBottom: "2rem",
      }}>
        {/* BTC Rate Card */}
        <div style={{
          background: "var(--glass-bg, rgba(15, 23, 42, 0.8))",
          border: "1px solid var(--glass-border, rgba(203, 213, 225, 0.1))",
          borderRadius: "var(--glass-radius-sm, 12px)",
          backdropFilter: "blur(var(--glass-blur, 10px))",
          WebkitBackdropFilter: "blur(var(--glass-blur, 10px))",
          padding: "1.25rem",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
            <span style={{ color: "#94a3b8", fontSize: "0.875rem", fontWeight: 500 }}>BTC Avg Funding</span>
            <TrendingUp style={{ width: "1rem", height: "1rem", color: "#22c55e" }} />
          </div>
          <div style={{ fontSize: "1.875rem", fontWeight: 700, color: "#22c55e", marginBottom: "0.5rem" }}>
            {formatRate(summaryStats.btcRate)}
          </div>
          <div style={{ fontSize: "0.75rem", color: "#64748b" }}>
            {formatAnnualized(summaryStats.btcRate)}
          </div>
        </div>

        {/* ETH Rate Card */}
        <div style={{
          background: "var(--glass-bg, rgba(15, 23, 42, 0.8))",
          border: "1px solid var(--glass-border, rgba(203, 213, 225, 0.1))",
          borderRadius: "var(--glass-radius-sm, 12px)",
          backdropFilter: "blur(var(--glass-blur, 10px))",
          WebkitBackdropFilter: "blur(var(--glass-blur, 10px))",
          padding: "1.25rem",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
            <span style={{ color: "#94a3b8", fontSize: "0.875rem", fontWeight: 500 }}>ETH Avg Funding</span>
            <TrendingUp style={{ width: "1rem", height: "1rem", color: "#22c55e" }} />
          </div>
          <div style={{ fontSize: "1.875rem", fontWeight: 700, color: "#22c55e", marginBottom: "0.5rem" }}>
            {formatRate(summaryStats.ethRate)}
          </div>
          <div style={{ fontSize: "0.75rem", color: "#64748b" }}>
            {formatAnnualized(summaryStats.ethRate)}
          </div>
        </div>

        {/* Most Bullish Card */}
        <div style={{
          background: "var(--glass-bg, rgba(15, 23, 42, 0.8))",
          border: "1px solid var(--glass-border, rgba(203, 213, 225, 0.1))",
          borderRadius: "var(--glass-radius-sm, 12px)",
          backdropFilter: "blur(var(--glass-blur, 10px))",
          WebkitBackdropFilter: "blur(var(--glass-blur, 10px))",
          padding: "1.25rem",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
            <span style={{ color: "#94a3b8", fontSize: "0.875rem", fontWeight: 500 }}>Most Bullish</span>
            <TrendingUp style={{ width: "1rem", height: "1rem", color: "#22c55e" }} />
          </div>
          <div style={{ fontSize: "1.875rem", fontWeight: 700, color: "#22c55e", marginBottom: "0.5rem" }}>
            {summaryStats.mostBullish.symbol}
          </div>
          <div style={{ fontSize: "0.75rem", color: "#64748b" }}>
            {formatRate(summaryStats.mostBullish.avgRate)}
          </div>
        </div>

        {/* Most Bearish Card */}
        <div style={{
          background: "var(--glass-bg, rgba(15, 23, 42, 0.8))",
          border: "1px solid var(--glass-border, rgba(203, 213, 225, 0.1))",
          borderRadius: "var(--glass-radius-sm, 12px)",
          backdropFilter: "blur(var(--glass-blur, 10px))",
          WebkitBackdropFilter: "blur(var(--glass-blur, 10px))",
          padding: "1.25rem",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
            <span style={{ color: "#94a3b8", fontSize: "0.875rem", fontWeight: 500 }}>Most Bearish</span>
            <TrendingDown style={{ width: "1rem", height: "1rem", color: "#f85149" }} />
          </div>
          <div style={{ fontSize: "1.875rem", fontWeight: 700, color: "#f85149", marginBottom: "0.5rem" }}>
            {summaryStats.mostBearish.symbol}
          </div>
          <div style={{ fontSize: "0.75rem", color: "#64748b" }}>
            {formatRate(summaryStats.mostBearish.avgRate)}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr auto",
        gap: "1rem",
        marginBottom: "1.5rem",
      }}>
        {/* Search Bar */}
        <div style={{
          background: "var(--glass-bg, rgba(15, 23, 42, 0.8))",
          border: "1px solid var(--glass-border, rgba(203, 213, 225, 0.1))",
          borderRadius: "var(--glass-radius-sm, 12px)",
          backdropFilter: "blur(var(--glass-blur, 10px))",
          WebkitBackdropFilter: "blur(var(--glass-blur, 10px))",
          padding: "0.75rem 1rem",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
        }}>
          <Search style={{ width: "1.25rem", height: "1.25rem", color: "#64748b" }} />
          <input
            type="text"
            placeholder="Search tokens..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search tokens"
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              color: "#ffffff",
              fontSize: "0.875rem",
              outline: "none",
            }}
          />
        </div>

        {/* Sort Dropdown */}
        <div style={{
          background: "var(--glass-bg, rgba(15, 23, 42, 0.8))",
          border: "1px solid var(--glass-border, rgba(203, 213, 225, 0.1))",
          borderRadius: "var(--glass-radius-sm, 12px)",
          backdropFilter: "blur(var(--glass-blur, 10px))",
          WebkitBackdropFilter: "blur(var(--glass-blur, 10px))",
          padding: "0.75rem 1rem",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          cursor: "pointer",
        }}>
          <ArrowUpDown style={{ width: "1rem", height: "1rem", color: "#64748b" }} />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortBy)}
            style={{
              background: "transparent",
              border: "none",
              color: "#ffffff",
              fontSize: "0.875rem",
              outline: "none",
              cursor: "pointer",
            }}
          >
            <option value="rate-high" style={{ background: "#1e293b", color: "#ffffff" }}>Highest Rate</option>
            <option value="rate-low" style={{ background: "#1e293b", color: "#ffffff" }}>Lowest Rate</option>
            <option value="name-asc" style={{ background: "#1e293b", color: "#ffffff" }}>Name (A-Z)</option>
            <option value="name-desc" style={{ background: "#1e293b", color: "#ffffff" }}>Name (Z-A)</option>
          </select>
        </div>
      </div>

      {/* Token Funding Table */}
      <div style={{
        background: "var(--glass-bg, rgba(15, 23, 42, 0.8))",
        border: "1px solid var(--glass-border, rgba(203, 213, 225, 0.1))",
        borderRadius: "var(--glass-radius-sm, 12px)",
        backdropFilter: "blur(var(--glass-blur, 10px))",
        WebkitBackdropFilter: "blur(var(--glass-blur, 10px))",
        overflow: "hidden",
        overflowX: "auto",
      }}>
        {/* Table Header */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "2rem 100px 1fr 120px 120px 120px auto",
          gap: "1rem",
          padding: "1rem 1.25rem",
          borderBottom: "1px solid rgba(203, 213, 225, 0.1)",
          backgroundColor: "rgba(51, 65, 85, 0.4)",
          minWidth: "max-content",
        }}>
          <div />
          <div style={{ color: "#94a3b8", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase" }}>
            Token
          </div>
          <div style={{ color: "#94a3b8", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase" }}>
            Price
          </div>
          <div style={{ color: "#94a3b8", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase" }}>
            8h Rate
          </div>
          <div style={{ color: "#94a3b8", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase" }}>
            Annualized
          </div>
          <div style={{ color: "#94a3b8", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase" }}>
            Open Interest
          </div>
          <div />
        </div>

        {/* Table Rows */}
        {filteredAndSortedTokens.map((token) => (
          <div key={token.symbol}>
            {/* Main Row */}
            <div
              onClick={() =>
                setExpandedToken(expandedToken === token.symbol ? null : token.symbol)
              }
              style={{
                display: "grid",
                gridTemplateColumns: "2rem 100px 1fr 120px 120px 120px auto",
                gap: "1rem",
                padding: "1rem 1.25rem",
                borderBottom: "1px solid rgba(203, 213, 225, 0.1)",
                cursor: "pointer",
                transition: "background-color 0.2s",
                backgroundColor:
                  expandedToken === token.symbol
                    ? "rgba(51, 65, 85, 0.6)"
                    : "transparent",
                alignItems: "center",
                minWidth: "max-content",
              }}
              onMouseEnter={(e) => {
                if (expandedToken !== token.symbol) {
                  e.currentTarget.style.backgroundColor = "rgba(51, 65, 85, 0.3)";
                }
              }}
              onMouseLeave={(e) => {
                if (expandedToken !== token.symbol) {
                  e.currentTarget.style.backgroundColor = "transparent";
                }
              }}
            >
              {/* Expand Button */}
              <div style={{ display: "flex", justifyContent: "center" }}>
                {expandedToken === token.symbol ? (
                  <ChevronUp style={{ width: "1.25rem", height: "1.25rem", color: "#64748b" }} />
                ) : (
                  <ChevronDown style={{ width: "1.25rem", height: "1.25rem", color: "#64748b" }} />
                )}
              </div>

              {/* Token Symbol */}
              <div style={{ fontWeight: 600, color: "#ffffff" }}>{token.symbol}</div>

              {/* Token Name & Price */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                <div style={{ color: "#cbd5e1", fontSize: "0.875rem" }}>{token.name}</div>
                <div style={{ color: "#64748b", fontSize: "0.75rem" }}>
                  {formatCurrency(token.price)}
                </div>
              </div>

              {/* 8h Rate */}
              <div
                style={{
                  color: getRateColor(token.avgRate),
                  fontWeight: 600,
                  fontSize: "0.95rem",
                }}
              >
                {formatRate(token.avgRate)}
              </div>

              {/* Annualized */}
              <div style={{ color: "#94a3b8", fontSize: "0.875rem" }}>
                {formatAnnualized(token.avgRate)}
              </div>

              {/* Open Interest */}
              <div style={{ color: "#94a3b8", fontSize: "0.875rem" }}>
                {formatCurrency(token.openInterest)}
              </div>

              {/* Spacer */}
              <div />
            </div>

            {/* Expanded Exchange Rows */}
            {expandedToken === token.symbol && (
              <div style={{ backgroundColor: "rgba(51, 65, 85, 0.2)", padding: "0.75rem 1.25rem" }}>
                <div style={{ marginBottom: "0.75rem" }}>
                  <h4 style={{ margin: "0 0 0.75rem 0", color: "#cbd5e1", fontSize: "0.875rem", fontWeight: 600 }}>
                    Exchange Comparison
                  </h4>
                </div>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "0.75rem",
                }}>
                  {token.exchanges.map((exchange) => (
                    <div
                      key={exchange.exchange}
                      style={{
                        background: "rgba(30, 41, 59, 0.6)",
                        border: "1px solid rgba(203, 213, 225, 0.1)",
                        borderRadius: "8px",
                        padding: "0.75rem",
                      }}
                    >
                      <div style={{ color: "#94a3b8", fontSize: "0.75rem", marginBottom: "0.5rem" }}>
                        {exchange.exchange}
                      </div>
                      <div
                        style={{
                          color: getRateColor(exchange.rate),
                          fontWeight: 600,
                          fontSize: "0.875rem",
                          marginBottom: "0.35rem",
                        }}
                      >
                        {formatRate(exchange.rate)}
                      </div>
                      <div style={{ color: "#64748b", fontSize: "0.7rem" }}>
                        Next: {exchange.nextFunding}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredAndSortedTokens.length === 0 && (
        <div style={{
          background: "var(--glass-bg, rgba(15, 23, 42, 0.8))",
          border: "1px solid var(--glass-border, rgba(203, 213, 225, 0.1))",
          borderRadius: "var(--glass-radius-sm, 12px)",
          backdropFilter: "blur(var(--glass-blur, 10px))",
          WebkitBackdropFilter: "blur(var(--glass-blur, 10px))",
          padding: "3rem",
          textAlign: "center",
        }}>
          <p style={{ color: "#94a3b8", margin: 0 }}>
            No tokens found matching "{searchQuery}"
          </p>
        </div>
      )}
    </div>
  );
}
