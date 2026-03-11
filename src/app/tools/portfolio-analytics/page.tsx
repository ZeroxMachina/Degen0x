"use client";

import { useState, useEffect, useCallback } from "react";
import Breadcrumb from "@/components/Breadcrumb";

/* ─────────────────────────────────────────────────────────────
   Types
───────────────────────────────────────────────────────────── */
interface PortfolioAsset {
  id: string;
  symbol: string;
  name: string;
  category: "L1" | "DeFi" | "Meme" | "L2" | "Staking" | "NFTs";
  amount: number;
  currentPrice: number;
  entryPrice: number;
  allocation: number;
  change24h: number;
  change7d: number;
  change30d: number;
  change90d: number;
  change1y: number;
  historicalPrices: number[];
  beta: number;
  volatility: number;
}

interface RiskMetrics {
  sharpeRatio: number;
  sortinoRatio: number;
  maxDrawdown: number;
  portfolioBeta: number;
  portfolioVolatility: number;
  diversificationScore: number;
}

interface PerformanceAttribution {
  symbol: string;
  name: string;
  contribution: number;
  percentOfGains: number;
}

type TimePeriod = "24h" | "7d" | "30d" | "90d" | "1y";

/* ─────────────────────────────────────────────────────────────
   Helpers
───────────────────────────────────────────────────────────── */
function getChangeColor(change: number): string {
  if (change > 0) return "#22c55e";
  if (change < 0) return "#ef4444";
  return "#eab308";
}

function formatNumber(num: number): string {
  if (num >= 1000000) return (num / 1000000).toFixed(2) + "M";
  if (num >= 1000) return (num / 1000).toFixed(2) + "K";
  return num.toFixed(2);
}

function formatCurrency(num: number): string {
  return "$" + formatNumber(num);
}

function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    L1: "#6366f1",
    DeFi: "#f59e0b",
    Meme: "#8b5cf6",
    L2: "#06b6d4",
    Staking: "#10b981",
    NFTs: "#ec4899",
  };
  return colors[category] || "#6366f1";
}

/* ─────────────────────────────────────────────────────────────
   SVG Chart Components
───────────────────────────────────────────────────────────── */
function AllocationDonutChart({ assets }: { assets: PortfolioAsset[] }) {
  const totalValue = assets.reduce((sum, a) => sum + a.amount * a.currentPrice, 0);
  let currentAngle = -90;
  const slices = assets.map((asset) => {
    const sliceAngle = (asset.allocation / 100) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + sliceAngle;
    currentAngle = endAngle;

    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;
    const x1 = 80 + 60 * Math.cos(startRad);
    const y1 = 80 + 60 * Math.sin(startRad);
    const x2 = 80 + 60 * Math.cos(endRad);
    const y2 = 80 + 60 * Math.sin(endRad);
    const largeArc = sliceAngle > 180 ? 1 : 0;

    const path = `M 80 80 L ${x1} ${y1} A 60 60 0 ${largeArc} 1 ${x2} ${y2} Z`;
    return { path, color: getCategoryColor(asset.category), symbol: asset.symbol, allocation: asset.allocation };
  });

  return (
    <svg viewBox="0 0 160 160" className="w-full max-w-xs mx-auto">
      {slices.map((slice, idx) => (
        <path key={idx} d={slice.path} fill={slice.color} opacity="0.8" stroke="#1f2937" strokeWidth="1" />
      ))}
      <circle cx="80" cy="80" r="35" fill="#111827" />
      <text x="80" y="75" textAnchor="middle" fill="#f3f4f6" fontSize="18" fontWeight="bold">
        Portfolio
      </text>
      <text x="80" y="92" textAnchor="middle" fill="#9ca3af" fontSize="12">
        Allocation
      </text>
    </svg>
  );
}

function PerformanceAreaChart({ historicalValues }: { historicalValues: number[] }) {
  if (historicalValues.length < 2) return null;

  const minValue = Math.min(...historicalValues);
  const maxValue = Math.max(...historicalValues);
  const range = maxValue - minValue || 1;
  const width = 400;
  const height = 150;
  const padding = 20;

  const points = historicalValues.map((val, idx) => {
    const x = padding + (idx / (historicalValues.length - 1)) * (width - 2 * padding);
    const y = height - padding - ((val - minValue) / range) * (height - 2 * padding);
    return { x, y, val };
  });

  const pathD = points.map((p, idx) => (idx === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`)).join(" ");
  const areaPathD = `${pathD} L ${width - padding} ${height - padding} L ${padding} ${height - padding} Z`;

  const isGain = historicalValues[historicalValues.length - 1] >= historicalValues[0];

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-2xl mx-auto">
      <defs>
        <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={isGain ? "#22c55e" : "#ef4444"} stopOpacity="0.3" />
          <stop offset="100%" stopColor={isGain ? "#22c55e" : "#ef4444"} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPathD} fill="url(#areaGradient)" />
      <path d={pathD} stroke={isGain ? "#22c55e" : "#ef4444"} strokeWidth="2" fill="none" />
      {points.map((p, idx) => (
        <circle key={idx} cx={p.x} cy={p.y} r="3" fill={isGain ? "#22c55e" : "#ef4444"} />
      ))}
    </svg>
  );
}

function CorrelationMatrix({ assets }: { assets: PortfolioAsset[] }) {
  const topAssets = assets.slice(0, 5);

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-xs">
        <thead>
          <tr className="border-b border-[rgba(255,255,255,0.1)]">
            <th className="px-2 py-2 text-left text-[var(--color-text-secondary)]">Asset</th>
            {topAssets.map((a) => (
              <th key={a.id} className="px-2 py-2 text-center text-[var(--color-text-secondary)] font-semibold">
                {a.symbol}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {topAssets.map((assetA, idx1) => (
            <tr key={assetA.id} className="border-b border-[rgba(255,255,255,0.05)]">
              <td className="px-2 py-2 font-semibold text-[var(--color-text)]">{assetA.symbol}</td>
              {topAssets.map((assetB) => {
                let correlation = 1.0;
                if (assetA.id !== assetB.id) {
                  const baseCorr = 0.6 + Math.random() * 0.3;
                  if (assetA.category === assetB.category) correlation = baseCorr + 0.15;
                  else correlation = baseCorr - 0.1;
                  correlation = Math.max(-1, Math.min(1, correlation));
                }
                const color = correlation > 0.7 ? "#22c55e" : correlation > 0.4 ? "#f59e0b" : "#ef4444";
                return (
                  <td key={`${assetA.id}-${assetB.id}`} className="px-2 py-2 text-center" style={{ color }}>
                    <div className="font-semibold">{correlation.toFixed(2)}</div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Data Generation
───────────────────────────────────────────────────────────── */
function generatePortfolioData(): PortfolioAsset[] {
  const assets = [
    { symbol: "BTC", name: "Bitcoin", category: "L1" as const },
    { symbol: "ETH", name: "Ethereum", category: "L1" as const },
    { symbol: "SOL", name: "Solana", category: "L1" as const },
    { symbol: "AAVE", name: "Aave", category: "DeFi" as const },
    { symbol: "UNI", name: "Uniswap", category: "DeFi" as const },
    { symbol: "LIDO", name: "Lido", category: "Staking" as const },
    { symbol: "ARB", name: "Arbitrum", category: "L2" as const },
    { symbol: "OP", name: "Optimism", category: "L2" as const },
    { symbol: "DOGE", name: "Dogecoin", category: "Meme" as const },
    { symbol: "SHIB", name: "Shiba Inu", category: "Meme" as const },
    { symbol: "BLUR", name: "Blur", category: "NFTs" as const },
    { symbol: "MKR", name: "Maker", category: "DeFi" as const },
    { symbol: "CRV", name: "Curve", category: "DeFi" as const },
    { symbol: "MATIC", name: "Polygon", category: "L2" as const },
    { symbol: "AVAX", name: "Avalanche", category: "L1" as const },
  ];

  const prices: Record<string, number> = {
    BTC: 68500,
    ETH: 3850,
    SOL: 142,
    AAVE: 425,
    UNI: 18.5,
    LIDO: 6.2,
    ARB: 2.1,
    OP: 3.8,
    DOGE: 0.38,
    SHIB: 0.000032,
    BLUR: 0.68,
    MKR: 3200,
    CRV: 0.95,
    MATIC: 0.95,
    AVAX: 38.5,
  };

  return assets.map((asset, idx) => {
    const baseAmount = idx === 0 ? 0.15 : idx === 1 ? 1.2 : Math.random() * 50 + 10;
    const currentPrice = prices[asset.symbol] * (1 + (Math.random() - 0.5) * 0.08);
    const entryPrice = currentPrice * (1 + (Math.random() - 0.5) * 0.15);
    const change24h = (Math.random() - 0.4) * 15;
    const change7d = (Math.random() - 0.35) * 35;
    const change30d = (Math.random() - 0.3) * 65;
    const change90d = (Math.random() - 0.2) * 120;
    const change1y = (Math.random() - 0.1) * 280;

    const historicalPrices = Array.from({ length: 30 }, (_, i) => {
      const progress = i / 29;
      const trend = change1y * progress * 0.01;
      const noise = (Math.random() - 0.5) * 20;
      return entryPrice + trend + noise;
    });

    const volatility = 15 + Math.random() * 40;
    const beta = 0.8 + Math.random() * 0.8;

    return {
      id: asset.symbol.toLowerCase(),
      symbol: asset.symbol,
      name: asset.name,
      category: asset.category,
      amount: baseAmount,
      currentPrice,
      entryPrice,
      allocation: 0,
      change24h,
      change7d,
      change30d,
      change90d,
      change1y,
      historicalPrices,
      beta,
      volatility,
    };
  });
}

function calculateRiskMetrics(assets: PortfolioAsset[], totalValue: number): RiskMetrics {
  const portfolioVolatility = Math.sqrt(assets.reduce((sum, a) => sum + (a.volatility ** 2 * (a.allocation / 100) ** 2), 0));
  const portfolioBeta = assets.reduce((sum, a) => sum + a.beta * (a.allocation / 100), 0);
  const avgReturn = assets.reduce((sum, a) => sum + a.change1y * (a.allocation / 100), 0) / 100;
  const riskFreeRate = 0.05;
  const sharpeRatio = (avgReturn - riskFreeRate) / (portfolioVolatility / 100 || 1);
  const downside = Math.sqrt(Math.max(0, Math.min(...assets.map((a) => a.change1y)) - riskFreeRate * 100) ** 2);
  const sortinoRatio = (avgReturn - riskFreeRate) / (downside / 100 || 1);
  const maxDrawdown = Math.min(...assets.map((a) => a.change30d)) * (assets.length / 100);
  const categoryCount = new Set(assets.map((a) => a.category)).size;
  const diversificationScore = Math.min(100, (categoryCount / 6) * 100 * 0.7 + (1 - Math.max(...assets.map((a) => a.allocation)) / 100) * 100 * 0.3);

  return {
    sharpeRatio: Math.max(-5, Math.min(5, sharpeRatio)),
    sortinoRatio: Math.max(-5, Math.min(5, sortinoRatio)),
    maxDrawdown,
    portfolioBeta,
    portfolioVolatility,
    diversificationScore,
  };
}

function getPerformanceAttribution(assets: PortfolioAsset[], timePeriod: TimePeriod): PerformanceAttribution[] {
  const getChange = (asset: PortfolioAsset) => {
    switch (timePeriod) {
      case "24h":
        return asset.change24h;
      case "7d":
        return asset.change7d;
      case "30d":
        return asset.change30d;
      case "90d":
        return asset.change90d;
      case "1y":
        return asset.change1y;
    }
  };

  const attributions = assets
    .map((asset) => {
      const change = getChange(asset);
      const value = asset.amount * asset.currentPrice;
      const contribution = (change / 100) * value;
      return {
        symbol: asset.symbol,
        name: asset.name,
        contribution,
        percentOfGains: 0,
      };
    })
    .sort((a, b) => Math.abs(b.contribution) - Math.abs(a.contribution));

  const totalGains = attributions.filter((a) => a.contribution > 0).reduce((sum, a) => sum + a.contribution, 0) || 1;
  return attributions.map((a) => ({
    ...a,
    percentOfGains: (a.contribution / totalGains) * 100,
  }));
}

/* ─────────────────────────────────────────────────────────────
   Component
───────────────────────────────────────────────────────────── */
export default function PortfolioAnalyticsPage() {
  const [assets, setAssets] = useState<PortfolioAsset[]>([]);
  const [loading, setLoading] = useState(true);
  const [timePeriod, setTimePeriod] = useState<TimePeriod>("30d");
  const [lastUpdated, setLastUpdated] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const refresh = useCallback(() => {
    setRefreshing(true);
    const newAssets = generatePortfolioData();
    const totalValue = newAssets.reduce((sum, a) => sum + a.amount * a.currentPrice, 0);
    const assetsWithAllocation = newAssets.map((a) => ({
      ...a,
      allocation: parseFloat((((a.amount * a.currentPrice) / totalValue) * 100).toFixed(2)),
    }));
    setAssets(assetsWithAllocation);
    setLastUpdated(new Date().toLocaleTimeString());
    setRefreshing(false);
    setLoading(false);
  }, []);

  useEffect(() => {
    refresh();
    const interval = setInterval(refresh, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [refresh]);

  const totalValue = assets.reduce((sum, a) => sum + a.amount * a.currentPrice, 0);
  const totalEntryValue = assets.reduce((sum, a) => sum + a.amount * a.entryPrice, 0);
  const totalGainLoss = totalValue - totalEntryValue;
  const totalGainLossPercent = (totalGainLoss / totalEntryValue) * 100;
  const riskMetrics = calculateRiskMetrics(assets, totalValue);
  const performanceAttribution = getPerformanceAttribution(assets, timePeriod);

  const topGainers = [...assets].sort((a, b) => {
    const getChange = (asset: PortfolioAsset) => {
      switch (timePeriod) {
        case "24h":
          return asset.change24h;
        case "7d":
          return asset.change7d;
        case "30d":
          return asset.change30d;
        case "90d":
          return asset.change90d;
        case "1y":
          return asset.change1y;
      }
    };
    return getChange(b) - getChange(a);
  }).slice(0, 5);

  const topLosers = [...assets].sort((a, b) => {
    const getChange = (asset: PortfolioAsset) => {
      switch (timePeriod) {
        case "24h":
          return asset.change24h;
        case "7d":
          return asset.change7d;
        case "30d":
          return asset.change30d;
        case "90d":
          return asset.change90d;
        case "1y":
          return asset.change1y;
      }
    };
    return getChange(a) - getChange(b);
  }).slice(0, 5);

  const getChange = (asset: PortfolioAsset) => {
    switch (timePeriod) {
      case "24h":
        return asset.change24h;
      case "7d":
        return asset.change7d;
      case "30d":
        return asset.change30d;
      case "90d":
        return asset.change90d;
      case "1y":
        return asset.change1y;
    }
  };

  const portfolioChange = assets.reduce((sum, a) => sum + getChange(a) * (a.allocation as unknown as number) / 100, 0);
  const historicalPortfolioValues = Array.from({ length: 30 }, (_, i) => {
    return totalValue * (1 + (portfolioChange / 100) * (i / 30));
  });

  const categoryBreakdown = Array.from(
    assets.reduce((map, asset) => {
      const existing = map.get(asset.category) || { category: asset.category, value: 0, allocation: 0 };
      existing.value += asset.amount * asset.currentPrice;
      existing.allocation += (asset.allocation as unknown as number);
      map.set(asset.category, existing);
      return map;
    }, new Map<string, any>()).values()
  ).sort((a, b) => b.value - a.value);

  const exportCSV = useCallback(() => {
    const headers = ["Symbol", "Name", "Category", "Amount", "Current Price", "Entry Price", "Value", "Gain/Loss", "Allocation", "Change (24h)", "Change (7d)", "Change (30d)", "Change (90d)", "Change (1y)"];
    const rows = assets.map((a) => [
      a.symbol,
      a.name,
      a.category,
      a.amount.toFixed(4),
      a.currentPrice.toFixed(2),
      a.entryPrice.toFixed(2),
      (a.amount * a.currentPrice).toFixed(2),
      (a.amount * (a.currentPrice - a.entryPrice)).toFixed(2),
      a.allocation,
      a.change24h.toFixed(2),
      a.change7d.toFixed(2),
      a.change30d.toFixed(2),
      a.change90d.toFixed(2),
      a.change1y.toFixed(2),
    ]);

    const csv = [headers, ...rows].map((row) => row.map((cell) => `"${cell}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `portfolio-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }, [assets]);

  if (loading) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-12 text-center">
        <div className="inline-flex items-center gap-3 text-[var(--color-text-secondary)]">
          <div className="w-5 h-5 border-2 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin" />
          Loading portfolio data…
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Tools", href: "/tools" },
          { label: "Portfolio Analytics", href: "/tools/portfolio-analytics" },
        ]}
      />

      {/* Header */}
      <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-black text-[var(--color-text)] mb-2">
            Crypto Portfolio Analytics
          </h1>
          <p className="text-[var(--color-text-secondary)]">
            Advanced portfolio analytics with risk metrics, performance attribution, and diversification analysis.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-[var(--color-text-secondary)]">Updated {lastUpdated}</span>
          <button
            onClick={refresh}
            disabled={refreshing}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold glass card-hover"
          >
            <span className={refreshing ? "animate-spin" : ""}>⟳</span>
            Refresh
          </button>
        </div>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="glass rounded-xl p-5">
          <div className="text-xs text-[var(--color-text-secondary)] mb-2 uppercase tracking-wider font-bold">
            Portfolio Value
          </div>
          <div className="text-3xl font-black text-[var(--color-text)] mb-1">{formatCurrency(totalValue)}</div>
          <div className="text-xs" style={{ color: getChangeColor(totalGainLoss) }}>
            {totalGainLoss > 0 ? "+" : ""}{formatCurrency(totalGainLoss)} ({totalGainLossPercent > 0 ? "+" : ""}
            {totalGainLossPercent.toFixed(2)}%)
          </div>
        </div>

        <div className="glass rounded-xl p-5">
          <div className="text-xs text-[var(--color-text-secondary)] mb-2 uppercase tracking-wider font-bold">
            Assets
          </div>
          <div className="text-3xl font-black text-[var(--color-text)] mb-1">{assets.length}</div>
          <div className="text-xs text-[var(--color-text-secondary)]">Holdings</div>
        </div>

        <div className="glass rounded-xl p-5">
          <div className="text-xs text-[var(--color-text-secondary)] mb-2 uppercase tracking-wider font-bold">
            Diversification
          </div>
          <div className="text-3xl font-black mb-1" style={{ color: riskMetrics.diversificationScore > 70 ? "#22c55e" : "#f59e0b" }}>
            {riskMetrics.diversificationScore.toFixed(1)}
          </div>
          <div className="text-xs text-[var(--color-text-secondary)]">Out of 100</div>
        </div>

        <div className="glass rounded-xl p-5">
          <div className="text-xs text-[var(--color-text-secondary)] mb-2 uppercase tracking-wider font-bold">
            Sharpe Ratio
          </div>
          <div className="text-3xl font-black text-[var(--color-text)] mb-1">{riskMetrics.sharpeRatio.toFixed(2)}</div>
          <div className="text-xs text-[var(--color-text-secondary)]">Risk-adjusted return</div>
        </div>
      </div>

      {/* Time Period Selector */}
      <div className="flex gap-2 mb-6">
        <label className="text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider self-center mr-3">
          Period
        </label>
        {(["24h", "7d", "30d", "90d", "1y"] as const).map((period) => (
          <button
            key={period}
            onClick={() => setTimePeriod(period)}
            className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
              timePeriod === period ? "bg-[var(--color-primary)] text-white" : "glass text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
            }`}
          >
            {period.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Allocation Chart Section */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="glass rounded-xl p-6">
          <h2 className="text-lg font-bold text-[var(--color-text)] mb-4">Allocation Breakdown</h2>
          <AllocationDonutChart assets={assets} />
          <div className="mt-6 grid grid-cols-2 gap-2">
            {assets.slice(0, 6).map((asset) => (
              <div key={asset.id} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: getCategoryColor(asset.category) }} />
                <span className="text-xs text-[var(--color-text-secondary)]">
                  {asset.symbol} ({asset.allocation}%)
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-xl p-6">
          <h2 className="text-lg font-bold text-[var(--color-text)] mb-4">Category Breakdown</h2>
          <div className="space-y-3">
            {categoryBreakdown.map((cat) => (
              <div key={cat.category} className="flex items-center gap-3">
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-semibold text-[var(--color-text)]">{cat.category}</span>
                    <span className="text-sm font-semibold text-[var(--color-text)]">{cat.allocation.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-[rgba(255,255,255,0.1)] rounded-full h-2 overflow-hidden">
                    <div className="h-full" style={{ width: `${cat.allocation}%`, backgroundColor: getCategoryColor(cat.category) }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Risk Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="glass rounded-xl p-5">
          <div className="text-xs text-[var(--color-text-secondary)] mb-2 uppercase tracking-wider font-bold">
            Portfolio Volatility
          </div>
          <div className="text-2xl font-black text-[var(--color-text)]">{riskMetrics.portfolioVolatility.toFixed(1)}%</div>
          <div className="text-xs text-[var(--color-text-secondary)]">Annual</div>
        </div>

        <div className="glass rounded-xl p-5">
          <div className="text-xs text-[var(--color-text-secondary)] mb-2 uppercase tracking-wider font-bold">
            Portfolio Beta
          </div>
          <div className="text-2xl font-black" style={{ color: riskMetrics.portfolioBeta > 1 ? "#ef4444" : "#22c55e" }}>
            {riskMetrics.portfolioBeta.toFixed(2)}
          </div>
          <div className="text-xs text-[var(--color-text-secondary)]">vs BTC</div>
        </div>

        <div className="glass rounded-xl p-5">
          <div className="text-xs text-[var(--color-text-secondary)] mb-2 uppercase tracking-wider font-bold">
            Sortino Ratio
          </div>
          <div className="text-2xl font-black text-[var(--color-text)]">{riskMetrics.sortinoRatio.toFixed(2)}</div>
          <div className="text-xs text-[var(--color-text-secondary)]">Downside risk</div>
        </div>

        <div className="glass rounded-xl p-5">
          <div className="text-xs text-[var(--color-text-secondary)] mb-2 uppercase tracking-wider font-bold">
            Max Drawdown
          </div>
          <div className="text-2xl font-black" style={{ color: getChangeColor(riskMetrics.maxDrawdown) }}>
            {riskMetrics.maxDrawdown.toFixed(2)}%
          </div>
          <div className="text-xs text-[var(--color-text-secondary)]">30d period</div>
        </div>
      </div>

      {/* Performance Chart */}
      <div className="glass rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold text-[var(--color-text)] mb-4">Historical Performance (30-day)</h2>
        <PerformanceAreaChart historicalValues={historicalPortfolioValues} />
      </div>

      {/* Correlation Matrix */}
      <div className="glass rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold text-[var(--color-text)] mb-4">Correlation Matrix (Top 5 Holdings)</h2>
        <CorrelationMatrix assets={assets} />
      </div>

      {/* Performance Attribution */}
      <div className="glass rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold text-[var(--color-text)] mb-4">Performance Attribution ({timePeriod.toUpperCase()})</h2>
        <div className="space-y-3">
          {performanceAttribution.slice(0, 8).map((attr) => (
            <div key={attr.symbol} className="flex items-center gap-4">
              <div className="w-16">
                <span className="text-sm font-semibold text-[var(--color-text)]">{attr.symbol}</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span className="text-xs text-[var(--color-text-secondary)]">{attr.percentOfGains > 0 ? "+" : ""}{attr.percentOfGains.toFixed(1)}% of gains</span>
                  <span
                    className="text-xs font-semibold"
                    style={{ color: getChangeColor(attr.contribution) }}
                  >
                    {attr.contribution > 0 ? "+" : ""}{formatCurrency(attr.contribution)}
                  </span>
                </div>
                <div className="w-full bg-[rgba(255,255,255,0.1)] rounded-full h-1.5 overflow-hidden">
                  <div
                    className="h-full"
                    style={{
                      width: `${Math.abs(attr.percentOfGains)}%`,
                      backgroundColor: attr.contribution > 0 ? "#22c55e" : "#ef4444",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Gainers and Losers */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="glass rounded-xl p-6">
          <h2 className="text-lg font-bold text-[var(--color-text)] mb-4">🚀 Top Gainers ({timePeriod.toUpperCase()})</h2>
          <div className="space-y-3">
            {topGainers.map((asset) => (
              <div key={asset.id} className="flex items-center justify-between p-3 bg-[var(--color-bg-secondary)] rounded-lg border border-green-500/20">
                <div>
                  <div className="font-semibold text-[var(--color-text)]">{asset.symbol}</div>
                  <div className="text-xs text-[var(--color-text-secondary)]">{asset.name}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-green-400">+{getChange(asset).toFixed(2)}%</div>
                  <div className="text-xs text-[var(--color-text-secondary)]">{formatCurrency(asset.amount * asset.currentPrice)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-xl p-6">
          <h2 className="text-lg font-bold text-[var(--color-text)] mb-4">📉 Top Losers ({timePeriod.toUpperCase()})</h2>
          <div className="space-y-3">
            {topLosers.map((asset) => (
              <div key={asset.id} className="flex items-center justify-between p-3 bg-[var(--color-bg-secondary)] rounded-lg border border-red-500/20">
                <div>
                  <div className="font-semibold text-[var(--color-text)]">{asset.symbol}</div>
                  <div className="text-xs text-[var(--color-text-secondary)]">{asset.name}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-red-400">{getChange(asset).toFixed(2)}%</div>
                  <div className="text-xs text-[var(--color-text-secondary)]">{formatCurrency(asset.amount * asset.currentPrice)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Holdings Table */}
      <div className="glass rounded-xl overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[rgba(255,255,255,0.1)]">
                <th className="text-left px-4 py-3 font-bold text-[var(--color-text)]">#</th>
                <th className="text-left px-4 py-3 font-bold text-[var(--color-text)]">Asset</th>
                <th className="text-center px-4 py-3 font-bold text-[var(--color-text)]">Amount</th>
                <th className="text-center px-4 py-3 font-bold text-[var(--color-text)]">Current Price</th>
                <th className="text-center px-4 py-3 font-bold text-[var(--color-text)]">Value</th>
                <th className="text-center px-4 py-3 font-bold text-[var(--color-text)]">Allocation</th>
                <th className="text-center px-4 py-3 font-bold text-[var(--color-text)]">Gain/Loss</th>
                <th className="text-center px-4 py-3 font-bold text-[var(--color-text)]">24h / 7d / 30d</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset, idx) => {
                const value = asset.amount * asset.currentPrice;
                const gainLoss = value - asset.amount * asset.entryPrice;
                return (
                  <tr key={asset.id} className="border-b border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                    <td className="px-4 py-3 text-[var(--color-text-secondary)]">{idx + 1}</td>
                    <td className="px-4 py-3">
                      <div className="flex flex-col">
                        <span className="font-bold text-[var(--color-text)]">{asset.symbol}</span>
                        <span className="text-xs text-[var(--color-text-secondary)]">{asset.category}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center text-xs font-semibold text-[var(--color-text)]">{asset.amount.toFixed(4)}</td>
                    <td className="px-4 py-3 text-center text-xs font-semibold text-[var(--color-text)]">{formatCurrency(asset.currentPrice)}</td>
                    <td className="px-4 py-3 text-center font-semibold text-[var(--color-text)]">{formatCurrency(value)}</td>
                    <td className="px-4 py-3 text-center">
                      <div className="font-semibold text-[var(--color-text)]">{asset.allocation}%</div>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <div style={{ color: getChangeColor(gainLoss) }} className="font-semibold">
                        {gainLoss > 0 ? "+" : ""}{formatCurrency(gainLoss)}
                      </div>
                      <div style={{ color: getChangeColor(gainLoss) }} className="text-xs">
                        {gainLoss > 0 ? "+" : ""}{((gainLoss / (asset.amount * asset.entryPrice)) * 100).toFixed(1)}%
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center text-xs">
                      <div className="flex justify-center gap-1">
                        <span style={{ color: getChangeColor(asset.change24h) }} className="font-semibold">
                          {asset.change24h > 0 ? "+" : ""}{asset.change24h.toFixed(1)}%
                        </span>
                        <span className="text-[var(--color-text-secondary)]">/</span>
                        <span style={{ color: getChangeColor(asset.change7d) }} className="font-semibold">
                          {asset.change7d > 0 ? "+" : ""}{asset.change7d.toFixed(1)}%
                        </span>
                        <span className="text-[var(--color-text-secondary)]">/</span>
                        <span style={{ color: getChangeColor(asset.change30d) }} className="font-semibold">
                          {asset.change30d > 0 ? "+" : ""}{asset.change30d.toFixed(1)}%
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Export Button */}
      <div className="flex justify-end mb-8">
        <button
          onClick={exportCSV}
          className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold glass card-hover"
        >
          📊 Export Report as CSV
        </button>
      </div>

      {/* FAQ Section */}
      <div className="mt-12 space-y-4">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Frequently Asked Questions</h2>

        <div className="glass rounded-xl p-6">
          <h3 className="font-bold text-[var(--color-text)] mb-2">What is Sharpe Ratio?</h3>
          <p className="text-sm text-[var(--color-text-secondary)]">
            The Sharpe Ratio measures risk-adjusted returns. Higher values indicate better returns per unit of risk taken. A ratio above 1.0 is generally considered good. It's calculated as (Portfolio Return - Risk-Free Rate) / Portfolio Volatility.
          </p>
        </div>

        <div className="glass rounded-xl p-6">
          <h3 className="font-bold text-[var(--color-text)] mb-2">What does Beta mean?</h3>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Beta measures how volatile your portfolio is relative to Bitcoin. A beta of 1.0 means your portfolio moves with BTC. Above 1.0 indicates higher volatility, below 1.0 indicates lower volatility. Beta helps assess systematic risk.
          </p>
        </div>

        <div className="glass rounded-xl p-6">
          <h3 className="font-bold text-[var(--color-text)] mb-2">What is Max Drawdown?</h3>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Maximum Drawdown is the largest peak-to-trough decline during the selected period. It shows the worst-case scenario loss you might have experienced. A -30% drawdown means the portfolio declined 30% from its peak.
          </p>
        </div>

        <div className="glass rounded-xl p-6">
          <h3 className="font-bold text-[var(--color-text)] mb-2">What is Diversification Score?</h3>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Diversification Score (0-100) measures how well your portfolio is spread across asset categories and individual holdings. A score above 70 indicates good diversification. Higher diversification generally reduces portfolio volatility.
          </p>
        </div>

        <div className="glass rounded-xl p-6">
          <h3 className="font-bold text-[var(--color-text)] mb-2">What is Sortino Ratio?</h3>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Similar to Sharpe Ratio, but only penalizes downside volatility. It better reflects the risk that investors care about. Higher Sortino Ratios indicate better risk-adjusted returns when considering only negative price movements.
          </p>
        </div>
      </div>

      {/* Related Tools */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Related Tools</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="/tools/social-metrics" className="glass rounded-xl p-6 hover:bg-[var(--glass-bg)] transition-colors">
            <div className="text-2xl mb-2">👥</div>
            <h3 className="font-bold text-[var(--color-text)] mb-2">Social Metrics</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Track social engagement across platforms for 30+ assets.</p>
          </a>
          <a href="/tools/sentiment-dashboard" className="glass rounded-xl p-6 hover:bg-[var(--glass-bg)] transition-colors">
            <div className="text-2xl mb-2">😱</div>
            <h3 className="font-bold text-[var(--color-text)] mb-2">Sentiment Dashboard</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Real-time market sentiment and Fear & Greed Index.</p>
          </a>
          <a href="/tools/onchain-tracker" className="glass rounded-xl p-6 hover:bg-[var(--glass-bg)] transition-colors">
            <div className="text-2xl mb-2">⛓️</div>
            <h3 className="font-bold text-[var(--color-text)] mb-2">On-Chain Tracker</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Monitor whale movements and network transactions.</p>
          </a>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="glass rounded-xl p-4 mt-12 text-xs text-[var(--color-text-secondary)]">
        <strong className="text-[var(--color-text)]">⚠ Disclaimer:</strong> This tool is for educational and informational purposes only. It does not constitute investment advice, financial advice, or a recommendation to buy or sell any security. Portfolio analytics are subject to data accuracy limitations and market dynamics. Past performance does not guarantee future results. Crypto assets are highly volatile and speculative. Always conduct thorough research, understand your risk tolerance, and consult with qualified financial advisors before making investment decisions.
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Crypto Portfolio Analytics",
            "description": "Advanced crypto portfolio analytics with risk metrics, performance attribution, diversification analysis, and historical tracking",
            "url": "https://cryptodegen.io/tools/portfolio-analytics",
            "applicationCategory": "FinanceApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })
        }}
      />
    </div>
  );
}

export const metadata = {
  title: "Crypto Portfolio Analytics | CryptoDegen",
  description: "Advanced portfolio analytics dashboard for crypto assets. Track allocation, risk metrics (Sharpe ratio, beta, volatility), performance attribution, diversification score, and correlation matrix.",
  openGraph: {
    title: "Crypto Portfolio Analytics | CryptoDegen",
    description: "Comprehensive portfolio analytics with SVG charts, risk metrics, and performance tracking across 15+ crypto assets.",
    url: "https://cryptodegen.io/tools/portfolio-analytics",
    type: "website",
  },
};
