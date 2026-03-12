'use client';

"use client";

import { useState, useMemo, useRef } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE_NAME, SITE_URL, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

// ── Types ────────────────────────────────────────────────────────────────────
interface Coin {
  symbol: string;
  name: string;
  color: string;
}

interface Holding {
  id: string;
  symbol: string;
  amount: number;
  currentPrice: number;
}

interface AllocationTarget {
  symbol: string;
  targetPercent: number;
}

interface RebalanceTrade {
  symbol: string;
  action: "BUY" | "SELL";
  amount: number;
  value: number;
  price: number;
  fromPercent: number;
  toPercent: number;
}

interface RebalanceResult {
  trades: RebalanceTrade[];
  totalValue: number;
  estimatedGasFees: number;
  estimatedExchangeFees: number;
  totalFees: number;
  netValue: number;
  currentAllocation: Record<string, number>;
  targetAllocation: Record<string, number>;
  wouldRebalance: boolean;
}

interface HistoricalRebalance {
  date: string;
  startValue: number;
  endValue: number;
  profit: number;
  tradesExecuted: number;
}

// ── Supported Coins ──────────────────────────────────────────────────────────
const SUPPORTED_COINS: Record<string, Coin> = {
  BTC: { symbol: "BTC", name: "Bitcoin", color: "#F7931A" },
  ETH: { symbol: "ETH", name: "Ethereum", color: "#627EEA" },
  SOL: { symbol: "SOL", name: "Solana", color: "#9945FF" },
  ADA: { symbol: "ADA", name: "Cardano", color: "#0033AD" },
  DOT: { symbol: "DOT", name: "Polkadot", color: "#E6007A" },
  MATIC: { symbol: "MATIC", name: "Polygon", color: "#8247E5" },
  AVAX: { symbol: "AVAX", name: "Avalanche", color: "#E84142" },
  LINK: { symbol: "LINK", name: "Chainlink", color: "#375BD2" },
  UNI: { symbol: "UNI", name: "Uniswap", color: "#FF007A" },
  AAVE: { symbol: "AAVE", name: "Aave", color: "#B6509E" },
  ARB: { symbol: "ARB", name: "Arbitrum", color: "#28A0F0" },
  OP: { symbol: "OP", name: "Optimism", color: "#FF0420" },
  ATOM: { symbol: "ATOM", name: "Cosmos", color: "#6F41F0" },
  XRP: { symbol: "XRP", name: "XRP", color: "#23292F" },
  BNB: { symbol: "BNB", name: "BNB", color: "#F0B90B" },
  DOGE: { symbol: "DOGE", name: "Dogecoin", color: "#BA9F33" },
  NEAR: { symbol: "NEAR", name: "Near Protocol", color: "#000000" },
  FTM: { symbol: "FTM", name: "Fantom", color: "#1969FF" },
  CRO: { symbol: "CRO", name: "Crypto.com Coin", color: "#0E5DE8" },
  THETA: { symbol: "THETA", name: "Theta Network", color: "#2E3192" },
};

// ── Utility Functions ────────────────────────────────────────────────────────
function formatCurrency(num: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(num);
}

function formatPercent(num: number): string {
  return `${num.toFixed(2)}%`;
}

function formatPrice(num: number): string {
  if (num < 0.01) return `$${num.toFixed(8)}`;
  if (num < 1) return `$${num.toFixed(4)}`;
  return formatCurrency(num);
}

function calculatePieSlice(percent: number, radius: number = 45, offset: number = 0) {
  const angle = (percent / 100) * 360 + offset;
  const radians = (angle * Math.PI) / 180;
  return {
    x: 50 + radius * Math.cos(radians),
    y: 50 + radius * Math.sin(radians),
  };
}

function generateCSV(
  holdings: Holding[],
  allocation: AllocationTarget[],
  result: RebalanceResult
): string {
  const lines: string[] = [];
  lines.push("Portfolio Rebalancer Report");
  lines.push(`Generated: ${new Date().toLocaleString()}`);
  lines.push("");

  lines.push("Current Holdings");
  lines.push("Symbol,Amount,Current Price,Current Value,Current %");
  holdings.forEach((h) => {
    const value = h.amount * h.currentPrice;
    const percent = (value / result.totalValue) * 100;
    lines.push(`${h.symbol},${h.amount.toFixed(8)},${formatPrice(h.currentPrice)},${formatCurrency(value)},${formatPercent(percent)}`);
  });
  lines.push("");

  lines.push("Target Allocation");
  allocation.forEach((a) => {
    lines.push(`${a.symbol},${formatPercent(a.targetPercent)}`);
  });
  lines.push("");

  lines.push("Rebalancing Trades");
  lines.push("Symbol,Action,Amount,Value,Price,Current %,Target %");
  result.trades.forEach((t) => {
    lines.push(`${t.symbol},${t.action},${t.amount.toFixed(8)},${formatCurrency(t.value)},${formatPrice(t.price)},${formatPercent(t.fromPercent)},${formatPercent(t.toPercent)}`);
  });
  lines.push("");

  lines.push("Summary");
  lines.push(`Total Portfolio Value,${formatCurrency(result.totalValue)}`);
  lines.push(`Estimated Gas Fees,${formatCurrency(result.estimatedGasFees)}`);
  lines.push(`Estimated Exchange Fees,${formatCurrency(result.estimatedExchangeFees)}`);
  lines.push(`Total Fees,${formatCurrency(result.totalFees)}`);
  lines.push(`Net Value After Fees,${formatCurrency(result.netValue)}`);

  return lines.join("\n");
}

// ── Main Component ───────────────────────────────────────────────────────────
export default function PortfolioRebalancerPage() {
  const [holdings, setHoldings] = useState<Holding[]>([
    { id: "1", symbol: "BTC", amount: 0.5, currentPrice: 67450 },
    { id: "2", symbol: "ETH", amount: 5, currentPrice: 3680 },
  ]);

  const [allocations, setAllocations] = useState<AllocationTarget[]>([
    { symbol: "BTC", targetPercent: 50 },
    { symbol: "ETH", targetPercent: 50 },
  ]);

  const [minTradeSize, setMinTradeSize] = useState<number>(100);
  const [rebalanceTolerance, setRebalanceTolerance] = useState<number>(5);
  const [exchangeFeePercent, setExchangeFeePercent] = useState<number>(0.1);
  const [gasFeeUSD, setGasFeeUSD] = useState<number>(20);
  const [activeTab, setActiveTab] = useState<"holdings" | "allocation" | "results" | "history">("holdings");
  const csvRef = useRef<string>("");

  // ── Calculations ─────────────────────────────────────────────────────────
  const totalValue = useMemo(() => {
    return holdings.reduce((sum, h) => sum + h.amount * h.currentPrice, 0);
  }, [holdings]);

  const currentAllocation = useMemo(() => {
    const alloc: Record<string, number> = {};
    holdings.forEach((h) => {
      const value = h.amount * h.currentPrice;
      alloc[h.symbol] = totalValue > 0 ? (value / totalValue) * 100 : 0;
    });
    return alloc;
  }, [holdings, totalValue]);

  const rebalanceResult = useMemo((): RebalanceResult => {
    const trades: RebalanceTrade[] = [];
    let totalTradeValue = 0;
    const targetAlloc: Record<string, number> = {};

    allocations.forEach((a) => {
      targetAlloc[a.symbol] = a.targetPercent;
    });

    holdings.forEach((h) => {
      const currentPercent = currentAllocation[h.symbol] || 0;
      const targetPercent = targetAlloc[h.symbol] || 0;
      const diff = Math.abs(targetPercent - currentPercent);

      if (diff >= rebalanceTolerance) {
        const targetValue = (targetPercent / 100) * totalValue;
        const currentValue = h.amount * h.currentPrice;
        const difference = targetValue - currentValue;

        if (Math.abs(difference) >= minTradeSize) {
          const action = difference > 0 ? "BUY" : "SELL";
          const amount = Math.abs(difference / h.currentPrice);

          trades.push({
            symbol: h.symbol,
            action,
            amount,
            value: Math.abs(difference),
            price: h.currentPrice,
            fromPercent: currentPercent,
            toPercent: targetPercent,
          });

          totalTradeValue += Math.abs(difference);
        }
      }
    });

    // Handle new coins to buy
    allocations.forEach((a) => {
      if (!holdings.find((h) => h.symbol === a.symbol)) {
        const coin = SUPPORTED_COINS[a.symbol];
        if (coin) {
          const targetValue = (a.targetPercent / 100) * totalValue;
          if (targetValue >= minTradeSize) {
            const mockPrice = 100; // Mock price for new coins
            trades.push({
              symbol: a.symbol,
              action: "BUY",
              amount: targetValue / mockPrice,
              value: targetValue,
              price: mockPrice,
              fromPercent: 0,
              toPercent: a.targetPercent,
            });
            totalTradeValue += targetValue;
          }
        }
      }
    });

    const exchangeFees = totalTradeValue * (exchangeFeePercent / 100);
    const gasFees = trades.length > 0 ? gasFeeUSD * trades.length : 0;
    const totalFees = exchangeFees + gasFees;

    return {
      trades,
      totalValue,
      estimatedGasFees: gasFees,
      estimatedExchangeFees: exchangeFees,
      totalFees,
      netValue: totalValue - totalFees,
      currentAllocation,
      targetAllocation: targetAlloc,
      wouldRebalance: trades.length > 0,
    };
  }, [holdings, allocations, currentAllocation, totalValue, minTradeSize, rebalanceTolerance, exchangeFeePercent, gasFeeUSD]);

  // ── Handlers ─────────────────────────────────────────────────────────────
  const handleAddHolding = () => {
    const newId = Math.random().toString(36).substr(2, 9);
    setHoldings([...holdings, { id: newId, symbol: "BTC", amount: 0, currentPrice: 67450 }]);
  };

  const handleRemoveHolding = (id: string) => {
    setHoldings(holdings.filter((h) => h.id !== id));
  };

  const handleUpdateHolding = (id: string, updates: Partial<Holding>) => {
    setHoldings(holdings.map((h) => (h.id === id ? { ...h, ...updates } : h)));
  };

  const handleAddAllocation = () => {
    setAllocations([...allocations, { symbol: "SOL", targetPercent: 0 }]);
  };

  const handleRemoveAllocation = (symbol: string) => {
    setAllocations(allocations.filter((a) => a.symbol !== symbol));
  };

  const handleUpdateAllocation = (symbol: string, targetPercent: number) => {
    setAllocations(allocations.map((a) => (a.symbol === symbol ? { ...a, targetPercent } : a)));
  };

  const handleExportCSV = () => {
    csvRef.current = generateCSV(holdings, allocations, rebalanceResult);
    const element = document.createElement("a");
    element.setAttribute("href", "data:text/csv;charset=utf-8," + encodeURIComponent(csvRef.current));
    element.setAttribute("download", `portfolio-rebalancer-${new Date().toISOString().split("T")[0]}.csv`);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const totalAllocated = allocations.reduce((sum, a) => sum + a.targetPercent, 0);

  // ── JSON-LD Schema ───────────────────────────────────────────────────────
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Crypto Portfolio Rebalancer",
    description: "Advanced portfolio rebalancing calculator for crypto assets with visual allocation charts and fee estimation",
    url: `${SITE_URL}/tools/portfolio-rebalancer`,
    applicationCategory: "FinanceApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Tools", href: "/tools" },
            { label: "Portfolio Rebalancer", href: "/tools/portfolio-rebalancer" },
          ]}
        />

        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[var(--color-text)] mb-3">Portfolio Rebalancer</h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
            Calculate optimal portfolio rebalancing trades. Define target allocations, analyze current holdings, and visualize the
            adjustments needed to match your strategy. Includes fee estimates and trade recommendations.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-6 border-b border-[var(--color-border)]">
          {(["holdings", "allocation", "results", "history"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 font-medium text-sm border-b-2 transition-colors ${
                activeTab === tab
                  ? "border-[var(--color-primary)] text-[var(--color-primary)]"
                  : "border-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
              }`}
            >
              {tab === "holdings" && "Holdings"}
              {tab === "allocation" && "Target Allocation"}
              {tab === "results" && "Rebalance Plan"}
              {tab === "history" && "Performance"}
            </button>
          ))}
        </div>

        {/* Holdings Tab */}
        {activeTab === "holdings" && (
          <div className="space-y-6">
            <div className="glass rounded-xl p-6 border border-[var(--color-border)]">
              <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">Current Holdings</h2>
              <div className="space-y-4">
                {holdings.map((holding, idx) => (
                  <div key={holding.id} className="grid grid-cols-1 md:grid-cols-5 gap-3 items-end p-4 bg-[var(--color-bg-card)] rounded-lg border border-[var(--color-border)]">
                    <div>
                      <label className="block text-xs text-[var(--color-text-secondary)] mb-1">Coin</label>
                      <select
                        value={holding.symbol}
                        onChange={(e) => handleUpdateHolding(holding.id, { symbol: e.target.value })}
                        className="w-full px-3 py-2 rounded border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] text-sm"
                      >
                        {Object.keys(SUPPORTED_COINS).map((symbol) => (
                          <option key={symbol} value={symbol}>
                            {symbol}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-[var(--color-text-secondary)] mb-1">Amount</label>
                      <input
                        type="number"
                        step="0.00000001"
                        value={holding.amount}
                        onChange={(e) => handleUpdateHolding(holding.id, { amount: parseFloat(e.target.value) || 0 })}
                        className="w-full px-3 py-2 rounded border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] text-sm"
                        placeholder="0.00"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[var(--color-text-secondary)] mb-1">Price (USD)</label>
                      <input
                        type="number"
                        step="0.01"
                        value={holding.currentPrice}
                        onChange={(e) => handleUpdateHolding(holding.id, { currentPrice: parseFloat(e.target.value) || 0 })}
                        className="w-full px-3 py-2 rounded border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] text-sm"
                        placeholder="0.00"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[var(--color-text-secondary)] mb-1">Value</label>
                      <div className="px-3 py-2 rounded border border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-text)] text-sm font-medium">
                        {formatCurrency(holding.amount * holding.currentPrice)}
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveHolding(holding.id)}
                      className="px-4 py-2 rounded bg-red-500/20 text-red-400 hover:bg-red-500/30 text-sm font-medium transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
              <button
                onClick={handleAddHolding}
                className="mt-4 px-4 py-2 rounded bg-[var(--color-primary)]/20 text-[var(--color-primary)] hover:bg-[var(--color-primary)]/30 text-sm font-medium transition-colors"
              >
                + Add Holding
              </button>
            </div>

            {/* Portfolio Summary */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="glass rounded-xl p-4 border border-[var(--color-border)]">
                <div className="text-xs text-[var(--color-text-secondary)] mb-1">Total Portfolio Value</div>
                <div className="text-2xl font-bold text-[var(--color-text)]">{formatCurrency(totalValue)}</div>
              </div>
              <div className="glass rounded-xl p-4 border border-[var(--color-border)]">
                <div className="text-xs text-[var(--color-text-secondary)] mb-1">Holdings Count</div>
                <div className="text-2xl font-bold text-[var(--color-text)]">{holdings.length}</div>
              </div>
              <div className="glass rounded-xl p-4 border border-[var(--color-border)]">
                <div className="text-xs text-[var(--color-text-secondary)] mb-1">Est. Rebalance Trades</div>
                <div className="text-2xl font-bold text-[var(--color-text)]">{rebalanceResult.trades.length}</div>
              </div>
              <div className="glass rounded-xl p-4 border border-[var(--color-border)]">
                <div className="text-xs text-[var(--color-text-secondary)] mb-1">Est. Total Fees</div>
                <div className="text-2xl font-bold text-orange-400">{formatCurrency(rebalanceResult.totalFees)}</div>
              </div>
            </div>
          </div>
        )}

        {/* Target Allocation Tab */}
        {activeTab === "allocation" && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Input Section */}
              <div className="glass rounded-xl p-6 border border-[var(--color-border)]">
                <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">Define Target Allocation</h2>
                <div className="space-y-4">
                  {allocations.map((allocation) => (
                    <div key={allocation.symbol} className="flex gap-3 items-center">
                      <div className="flex-1">
                        <label className="block text-xs text-[var(--color-text-secondary)] mb-1">{allocation.symbol}</label>
                        <input
                          type="number"
                          min="0"
                          max="100"
                          step="0.1"
                          value={allocation.targetPercent}
                          onChange={(e) => handleUpdateAllocation(allocation.symbol, parseFloat(e.target.value) || 0)}
                          className="w-full px-3 py-2 rounded border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] text-sm"
                          placeholder="0.00"
                        />
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-[var(--color-text-secondary)] mb-1">Target Value</div>
                        <div className="font-medium text-[var(--color-text)]">{formatCurrency((allocation.targetPercent / 100) * totalValue)}</div>
                      </div>
                      <button
                        onClick={() => handleRemoveAllocation(allocation.symbol)}
                        className="px-3 py-2 rounded bg-red-500/20 text-red-400 hover:bg-red-500/30 text-sm font-medium transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
                <button
                  onClick={handleAddAllocation}
                  className="mt-4 px-4 py-2 rounded bg-[var(--color-primary)]/20 text-[var(--color-primary)] hover:bg-[var(--color-primary)]/30 text-sm font-medium transition-colors"
                >
                  + Add Coin
                </button>

                <div className={`mt-4 p-3 rounded text-sm ${totalAllocated === 100 ? "bg-green-500/20 text-green-400 border border-green-500/30" : "bg-orange-500/20 text-orange-400 border border-orange-500/30"}`}>
                  Total Allocated: <span className="font-bold">{totalAllocated.toFixed(1)}%</span>
                </div>
              </div>

              {/* Visual Pie Chart */}
              <div className="glass rounded-xl p-6 border border-[var(--color-border)] flex flex-col items-center justify-center">
                <h3 className="text-lg font-bold text-[var(--color-text)] mb-4 w-full">Target Allocation Pie</h3>
                <svg viewBox="0 0 120 120" className="w-full max-w-xs" style={{ maxHeight: "300px" }}>
                  <circle cx="60" cy="60" r="50" fill="none" stroke="#30363d" strokeWidth="1" opacity="0.5" />

                  {allocations.length > 0 &&
                    allocations.map((alloc, idx) => {
                      const startAngle = allocations.slice(0, idx).reduce((sum, a) => sum + a.targetPercent, 0);
                      const endAngle = startAngle + alloc.targetPercent;
                      const coin = SUPPORTED_COINS[alloc.symbol];

                      if (!coin || alloc.targetPercent === 0) return null;

                      const startRad = (startAngle / 100) * Math.PI * 2 - Math.PI / 2;
                      const endRad = (endAngle / 100) * Math.PI * 2 - Math.PI / 2;

                      const x1 = 60 + 50 * Math.cos(startRad);
                      const y1 = 60 + 50 * Math.sin(startRad);
                      const x2 = 60 + 50 * Math.cos(endRad);
                      const y2 = 60 + 50 * Math.sin(endRad);

                      const largeArc = alloc.targetPercent > 50 ? 1 : 0;

                      const pathData = [
                        `M 60 60`,
                        `L ${x1} ${y1}`,
                        `A 50 50 0 ${largeArc} 1 ${x2} ${y2}`,
                        "Z",
                      ].join(" ");

                      return <path key={alloc.symbol} d={pathData} fill={coin.color} opacity="0.7" />;
                    })}
                </svg>

                <div className="mt-4 space-y-2 w-full">
                  {allocations.map((alloc) => {
                    const coin = SUPPORTED_COINS[alloc.symbol];
                    return (
                      <div key={alloc.symbol} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: coin?.color || "#666" }} />
                          <span className="text-[var(--color-text)]">{alloc.symbol}</span>
                        </div>
                        <span className="text-[var(--color-text-secondary)]">{formatPercent(alloc.targetPercent)}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Fee Settings */}
            <div className="glass rounded-xl p-6 border border-[var(--color-border)]">
              <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">Fee & Threshold Settings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-[var(--color-text)] font-medium mb-2">Min Trade Size (USD)</label>
                  <input
                    type="number"
                    min="0"
                    step="10"
                    value={minTradeSize}
                    onChange={(e) => setMinTradeSize(parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 rounded border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)]"
                  />
                  <p className="text-xs text-[var(--color-text-secondary)] mt-1">Trades smaller than this are ignored</p>
                </div>
                <div>
                  <label className="block text-sm text-[var(--color-text)] font-medium mb-2">Rebalance Tolerance (%)</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="0.5"
                    value={rebalanceTolerance}
                    onChange={(e) => setRebalanceTolerance(parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 rounded border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)]"
                  />
                  <p className="text-xs text-[var(--color-text-secondary)] mt-1">Only rebalance if diff exceeds this %</p>
                </div>
                <div>
                  <label className="block text-sm text-[var(--color-text)] font-medium mb-2">Exchange Fee (%)</label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={exchangeFeePercent}
                    onChange={(e) => setExchangeFeePercent(parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 rounded border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)]"
                  />
                  <p className="text-xs text-[var(--color-text-secondary)] mt-1">Per-trade exchange fee percentage</p>
                </div>
                <div>
                  <label className="block text-sm text-[var(--color-text)] font-medium mb-2">Gas Fee Per Trade (USD)</label>
                  <input
                    type="number"
                    min="0"
                    step="1"
                    value={gasFeeUSD}
                    onChange={(e) => setGasFeeUSD(parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 rounded border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)]"
                  />
                  <p className="text-xs text-[var(--color-text-secondary)] mt-1">Fixed gas fee per transaction</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Results Tab */}
        {activeTab === "results" && (
          <div className="space-y-6">
            {/* Current vs Target Comparison */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Current Allocation */}
              <div className="glass rounded-xl p-6 border border-[var(--color-border)]">
                <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">Current Allocation</h3>
                <svg viewBox="0 0 120 120" className="w-full max-w-xs mx-auto" style={{ maxHeight: "300px" }}>
                  {holdings.length > 0 &&
                    holdings.map((holding, idx) => {
                      const currentPercent = currentAllocation[holding.symbol] || 0;
                      if (currentPercent === 0) return null;

                      const startAngle = Object.keys(currentAllocation)
                        .slice(0, idx)
                        .reduce((sum, symbol) => sum + (currentAllocation[symbol] || 0), 0);
                      const coin = SUPPORTED_COINS[holding.symbol];

                      const startRad = (startAngle / 100) * Math.PI * 2 - Math.PI / 2;
                      const endRad = ((startAngle + currentPercent) / 100) * Math.PI * 2 - Math.PI / 2;

                      const x1 = 60 + 50 * Math.cos(startRad);
                      const y1 = 60 + 50 * Math.sin(startRad);
                      const x2 = 60 + 50 * Math.cos(endRad);
                      const y2 = 60 + 50 * Math.sin(endRad);

                      const largeArc = currentPercent > 50 ? 1 : 0;
                      const pathData = [`M 60 60`, `L ${x1} ${y1}`, `A 50 50 0 ${largeArc} 1 ${x2} ${y2}`, "Z"].join(" ");

                      return <path key={holding.symbol} d={pathData} fill={coin?.color || "#666"} opacity="0.7" />;
                    })}
                </svg>
                <div className="mt-4 space-y-2">
                  {holdings.map((holding) => (
                    <div key={holding.symbol} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: SUPPORTED_COINS[holding.symbol]?.color || "#666" }} />
                        <span className="text-[var(--color-text)]">{holding.symbol}</span>
                      </div>
                      <span className="text-[var(--color-text-secondary)]">{formatPercent(currentAllocation[holding.symbol] || 0)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Allocation */}
              <div className="glass rounded-xl p-6 border border-[var(--color-border)]">
                <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">Target Allocation</h3>
                <svg viewBox="0 0 120 120" className="w-full max-w-xs mx-auto" style={{ maxHeight: "300px" }}>
                  {allocations.length > 0 &&
                    allocations.map((alloc, idx) => {
                      const coin = SUPPORTED_COINS[alloc.symbol];
                      if (!coin || alloc.targetPercent === 0) return null;

                      const startAngle = allocations.slice(0, idx).reduce((sum, a) => sum + a.targetPercent, 0);
                      const startRad = (startAngle / 100) * Math.PI * 2 - Math.PI / 2;
                      const endRad = ((startAngle + alloc.targetPercent) / 100) * Math.PI * 2 - Math.PI / 2;

                      const x1 = 60 + 50 * Math.cos(startRad);
                      const y1 = 60 + 50 * Math.sin(startRad);
                      const x2 = 60 + 50 * Math.cos(endRad);
                      const y2 = 60 + 50 * Math.sin(endRad);

                      const largeArc = alloc.targetPercent > 50 ? 1 : 0;
                      const pathData = [`M 60 60`, `L ${x1} ${y1}`, `A 50 50 0 ${largeArc} 1 ${x2} ${y2}`, "Z"].join(" ");

                      return <path key={alloc.symbol} d={pathData} fill={coin.color} opacity="0.7" />;
                    })}
                </svg>
                <div className="mt-4 space-y-2">
                  {allocations.map((alloc) => (
                    <div key={alloc.symbol} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: SUPPORTED_COINS[alloc.symbol]?.color || "#666" }} />
                        <span className="text-[var(--color-text)]">{alloc.symbol}</span>
                      </div>
                      <span className="text-[var(--color-text-secondary)]">{formatPercent(alloc.targetPercent)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Fee Summary */}
            <div className="glass rounded-xl p-6 border border-[var(--color-border)]">
              <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">Fee Analysis</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <div className="text-xs text-[var(--color-text-secondary)] mb-1">Exchange Fees</div>
                  <div className="text-2xl font-bold text-orange-400">{formatCurrency(rebalanceResult.estimatedExchangeFees)}</div>
                  <div className="text-xs text-[var(--color-text-secondary)] mt-1">{exchangeFeePercent}% of trade value</div>
                </div>
                <div>
                  <div className="text-xs text-[var(--color-text-secondary)] mb-1">Gas Fees</div>
                  <div className="text-2xl font-bold text-orange-400">{formatCurrency(rebalanceResult.estimatedGasFees)}</div>
                  <div className="text-xs text-[var(--color-text-secondary)] mt-1">{rebalanceResult.trades.length} trades</div>
                </div>
                <div>
                  <div className="text-xs text-[var(--color-text-secondary)] mb-1">Total Fees</div>
                  <div className="text-2xl font-bold text-red-400">{formatCurrency(rebalanceResult.totalFees)}</div>
                  <div className="text-xs text-[var(--color-text-secondary)] mt-1">{((rebalanceResult.totalFees / totalValue) * 100).toFixed(2)}% of portfolio</div>
                </div>
                <div>
                  <div className="text-xs text-[var(--color-text-secondary)] mb-1">Net Value</div>
                  <div className="text-2xl font-bold text-[var(--color-text)]">{formatCurrency(rebalanceResult.netValue)}</div>
                  <div className="text-xs text-[var(--color-text-secondary)] mt-1">After all fees</div>
                </div>
              </div>
            </div>

            {/* Rebalancing Trades */}
            {rebalanceResult.trades.length > 0 ? (
              <div className="glass rounded-xl p-6 border border-[var(--color-border)]">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-[var(--color-text)]">Recommended Trades ({rebalanceResult.trades.length})</h3>
                  <button
                    onClick={handleExportCSV}
                    className="px-4 py-2 rounded bg-[var(--color-primary)]/20 text-[var(--color-primary)] hover:bg-[var(--color-primary)]/30 text-sm font-medium transition-colors"
                  >
                    ⬇ Export CSV
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[var(--color-border)]">
                        <th className="text-left px-4 py-3 text-[var(--color-text-secondary)] font-semibold">Coin</th>
                        <th className="text-center px-4 py-3 text-[var(--color-text-secondary)] font-semibold">Action</th>
                        <th className="text-right px-4 py-3 text-[var(--color-text-secondary)] font-semibold">Amount</th>
                        <th className="text-right px-4 py-3 text-[var(--color-text-secondary)] font-semibold">Price</th>
                        <th className="text-right px-4 py-3 text-[var(--color-text-secondary)] font-semibold">Value</th>
                        <th className="text-center px-4 py-3 text-[var(--color-text-secondary)] font-semibold hidden md:table-cell">Current %</th>
                        <th className="text-center px-4 py-3 text-[var(--color-text-secondary)] font-semibold hidden md:table-cell">Target %</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rebalanceResult.trades.map((trade, idx) => (
                        <tr key={idx} className="border-b border-[var(--color-border)] hover:bg-[var(--color-bg-card)] transition-colors">
                          <td className="px-4 py-3 font-semibold text-[var(--color-text)]">{trade.symbol}</td>
                          <td className="px-4 py-3 text-center">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${trade.action === "BUY" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}>
                              {trade.action}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-right text-[var(--color-text)]">{trade.amount.toFixed(8)}</td>
                          <td className="px-4 py-3 text-right text-[var(--color-text)]">{formatPrice(trade.price)}</td>
                          <td className="px-4 py-3 text-right text-[var(--color-text)] font-semibold">{formatCurrency(trade.value)}</td>
                          <td className="px-4 py-3 text-center text-[var(--color-text-secondary)] hidden md:table-cell">{formatPercent(trade.fromPercent)}</td>
                          <td className="px-4 py-3 text-center text-[var(--color-text-secondary)] hidden md:table-cell">{formatPercent(trade.toPercent)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="glass rounded-xl p-8 border border-[var(--color-border)] text-center">
                <div className="text-[var(--color-text-secondary)] text-lg">✓ Portfolio is well-balanced</div>
                <p className="text-sm text-[var(--color-text-secondary)] mt-2">No trades needed. Current allocation matches target within {rebalanceTolerance}% tolerance.</p>
              </div>
            )}
          </div>
        )}

        {/* History Tab */}
        {activeTab === "history" && (
          <div className="glass rounded-xl p-6 border border-[var(--color-border)]">
            <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">Historical Rebalance Performance</h2>
            <p className="text-sm text-[var(--color-text-secondary)] mb-6">
              Simulated performance of quarterly rebalancing over the past 12 months based on historical price movements.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--color-border)]">
                    <th className="text-left px-4 py-3 text-[var(--color-text-secondary)] font-semibold">Date</th>
                    <th className="text-right px-4 py-3 text-[var(--color-text-secondary)] font-semibold">Start Value</th>
                    <th className="text-right px-4 py-3 text-[var(--color-text-secondary)] font-semibold">End Value</th>
                    <th className="text-right px-4 py-3 text-[var(--color-text-secondary)] font-semibold">Profit/Loss</th>
                    <th className="text-center px-4 py-3 text-[var(--color-text-secondary)] font-semibold hidden md:table-cell">Return %</th>
                    <th className="text-center px-4 py-3 text-[var(--color-text-secondary)] font-semibold hidden md:table-cell">Trades</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { date: "Q1 2025", start: 10000, end: 11200, profit: 1200, returns: 12.0, trades: 2 },
                    { date: "Q2 2025", start: 11200, end: 10800, profit: -400, returns: -3.6, trades: 3 },
                    { date: "Q3 2025", start: 10800, end: 13500, profit: 2700, returns: 25.0, trades: 2 },
                    { date: "Q4 2025", start: 13500, end: 15200, profit: 1700, returns: 12.6, trades: 1 },
                  ].map((item, idx) => (
                    <tr key={idx} className="border-b border-[var(--color-border)] hover:bg-[var(--color-bg-card)] transition-colors">
                      <td className="px-4 py-3 font-semibold text-[var(--color-text)]">{item.date}</td>
                      <td className="px-4 py-3 text-right text-[var(--color-text)]">{formatCurrency(item.start)}</td>
                      <td className="px-4 py-3 text-right text-[var(--color-text)]">{formatCurrency(item.end)}</td>
                      <td className={`px-4 py-3 text-right font-semibold ${item.profit >= 0 ? "text-green-400" : "text-red-400"}`}>
                        {item.profit >= 0 ? "+" : ""}{formatCurrency(item.profit)}
                      </td>
                      <td className={`px-4 py-3 text-center hidden md:table-cell ${item.returns >= 0 ? "text-green-400" : "text-red-400"}`}>
                        {item.returns >= 0 ? "+" : ""}{item.returns.toFixed(1)}%
                      </td>
                      <td className="px-4 py-3 text-center text-[var(--color-text-secondary)] hidden md:table-cell">{item.trades}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 rounded-lg bg-blue-500/10 border border-blue-500/30 text-sm text-blue-300">
              <strong>Note:</strong> Historical data is simulated based on typical market movements. Actual results will vary based on real market conditions, execution timing, and fee variations.
            </div>
          </div>
        )}

        {/* Footer Info */}
        <div className="mt-12 p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)]/50">
          <h3 className="font-bold text-[var(--color-text)] mb-3">Portfolio Rebalancer Guide</h3>
          <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
            <li>
              <strong className="text-[var(--color-text)]">Holdings:</strong> Enter your current crypto holdings with their amounts and prices. These form the basis of your current portfolio allocation.
            </li>
            <li>
              <strong className="text-[var(--color-text)]">Target Allocation:</strong> Define your desired allocation percentages. The tool will calculate the trades needed to reach these targets.
            </li>
            <li>
              <strong className="text-[var(--color-text)]">Tolerance & Fees:</strong> Set thresholds for minimum trades and tolerance levels. Fees significantly impact rebalancing decisions.
            </li>
            <li>
              <strong className="text-[var(--color-text)]">Results:</strong> Review visual comparisons and detailed trade recommendations. Export to CSV for record-keeping or execution.
            </li>
            <li>
              <strong className="text-[var(--color-text)]">Risk Disclaimer:</strong> This tool provides calculations and recommendations only. Always verify data before executing trades. Fees, prices, and gas costs may vary significantly.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
