"use client";
import { useState, useMemo } from "react";
import Link from "next/link";

const COINS = [
  { symbol: "BTC", name: "Bitcoin", color: "#f7931a" },
  { symbol: "ETH", name: "Ethereum", color: "#627eea" },
  { symbol: "SOL", name: "Solana", color: "#9945ff" },
  { symbol: "BNB", name: "BNB", color: "#f0b90b" },
  { symbol: "ADA", name: "Cardano", color: "#0033ad" },
  { symbol: "AVAX", name: "Avalanche", color: "#e84142" },
  { symbol: "LINK", name: "Chainlink", color: "#2a5ada" },
  { symbol: "DOT", name: "Polkadot", color: "#e6007a" },
];

interface Allocation {
  symbol: string;
  name: string;
  color: string;
  pct: number;
}

export default function PortfolioSimulator() {
  const [investment, setInvestment] = useState(1000);
  const [allocations, setAllocations] = useState<Allocation[]>([
    { ...COINS[0], pct: 40 },
    { ...COINS[1], pct: 30 },
    { ...COINS[2], pct: 20 },
    { ...COINS[3], pct: 10 },
  ]);
  const [riskLevel, setRiskLevel] = useState<"conservative" | "moderate" | "aggressive">("moderate");

  const totalPct = useMemo(() => allocations.reduce((sum, a) => sum + a.pct, 0), [allocations]);

  const updateAllocation = (idx: number, newPct: number) => {
    setAllocations((prev) => prev.map((a, i) => (i === idx ? { ...a, pct: Math.max(0, Math.min(100, newPct)) } : a)));
  };

  const addCoin = (coin: (typeof COINS)[0]) => {
    if (allocations.find((a) => a.symbol === coin.symbol)) return;
    if (allocations.length >= 6) return;
    setAllocations((prev) => [...prev, { ...coin, pct: 0 }]);
  };

  const removeCoin = (idx: number) => {
    if (allocations.length <= 1) return;
    setAllocations((prev) => prev.filter((_, i) => i !== idx));
  };

  const projections = useMemo(() => {
    const multiplier = riskLevel === "conservative" ? 1.5 : riskLevel === "moderate" ? 2.5 : 4.0;
    const downside = riskLevel === "conservative" ? 0.7 : riskLevel === "moderate" ? 0.5 : 0.3;
    return {
      bull: investment * multiplier,
      base: investment * (1 + (multiplier - 1) * 0.4),
      bear: investment * downside,
    };
  }, [investment, riskLevel]);

  const riskColor =
    riskLevel === "conservative"
      ? "text-green-400"
      : riskLevel === "moderate"
      ? "text-yellow-400"
      : "text-red-400";

  const availableCoins = COINS.filter((c) => !allocations.find((a) => a.symbol === c.symbol));

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-[var(--color-text)] mb-4 text-center">Portfolio Simulator</h2>
      <p className="text-[var(--color-text-secondary)] text-center mb-10 max-w-2xl mx-auto">
        Build a hypothetical crypto portfolio and see projected outcomes based on risk level.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Left: Inputs */}
        <div className="glass p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Investment Amount</label>
            <div className="flex items-center gap-2">
              <span className="text-[var(--color-text-secondary)]">$</span>
              <input
                type="number"
                value={investment}
                onChange={(e) => setInvestment(Math.max(0, Number(e.target.value)))}
                className="w-full bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-xl px-4 py-2.5 text-[var(--color-text)] text-lg font-semibold focus:outline-none focus:border-indigo-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Risk Profile</label>
            <div className="grid grid-cols-3 gap-2">
              {(["conservative", "moderate", "aggressive"] as const).map((level) => (
                <button
                  key={level}
                  onClick={() => setRiskLevel(level)}
                  className={`py-2 px-3 rounded-xl text-sm font-medium capitalize transition-all ${
                    riskLevel === level
                      ? "bg-indigo-500/20 border-indigo-400 text-indigo-300 border"
                      : "glass border border-[var(--glass-border)] text-[var(--color-text-secondary)]"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-[var(--color-text)]">Allocations</label>
              <span className={`text-sm font-mono ${totalPct === 100 ? "text-green-400" : "text-red-400"}`}>
                {totalPct}%
              </span>
            </div>
            <div className="space-y-2">
              {allocations.map((alloc, idx) => (
                <div key={alloc.symbol} className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{ backgroundColor: alloc.color }}
                  />
                  <span className="text-sm font-medium text-[var(--color-text)] w-12">{alloc.symbol}</span>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={alloc.pct}
                    onChange={(e) => updateAllocation(idx, Number(e.target.value))}
                    className="flex-1 accent-indigo-500"
                  />
                  <span className="text-sm text-[var(--color-text-secondary)] w-10 text-right font-mono">
                    {alloc.pct}%
                  </span>
                  <button
                    onClick={() => removeCoin(idx)}
                    className="text-[var(--color-text-secondary)] hover:text-red-400 text-sm"
                    title="Remove"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
            {availableCoins.length > 0 && allocations.length < 6 && (
              <div className="flex flex-wrap gap-1.5 mt-3">
                {availableCoins.map((c) => (
                  <button
                    key={c.symbol}
                    onClick={() => addCoin(c)}
                    className="text-xs px-2 py-1 rounded-lg glass border border-[var(--glass-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:border-indigo-400 transition-all"
                  >
                    + {c.symbol}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right: Results */}
        <div className="glass p-6 space-y-6">
          <div>
            <h3 className="text-sm font-medium text-[var(--color-text-secondary)] mb-4 uppercase tracking-wide">
              12-Month Projections ({<span className={riskColor}>{riskLevel}</span>})
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-xl bg-green-500/10 border border-green-500/20">
                <span className="text-sm text-green-300">Bull Case</span>
                <span className="text-xl font-bold text-green-400">
                  ${projections.bull.toLocaleString("en-US", { maximumFractionDigits: 0 })}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                <span className="text-sm text-yellow-300">Base Case</span>
                <span className="text-xl font-bold text-yellow-400">
                  ${projections.base.toLocaleString("en-US", { maximumFractionDigits: 0 })}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                <span className="text-sm text-red-300">Bear Case</span>
                <span className="text-xl font-bold text-red-400">
                  ${projections.bear.toLocaleString("en-US", { maximumFractionDigits: 0 })}
                </span>
              </div>
            </div>
          </div>

          {/* Visual pie chart */}
          <div>
            <h3 className="text-sm font-medium text-[var(--color-text-secondary)] mb-3 uppercase tracking-wide">
              Allocation Breakdown
            </h3>
            <div className="flex items-center gap-6">
              <div className="relative w-32 h-32 shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  {(() => {
                    let offset = 0;
                    return allocations.map((a) => {
                      const pct = totalPct > 0 ? (a.pct / totalPct) * 100 : 0;
                      const circumference = Math.PI * 80;
                      const dashLength = (pct / 100) * circumference;
                      const el = (
                        <circle
                          key={a.symbol}
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke={a.color}
                          strokeWidth="12"
                          strokeDasharray={`${dashLength} ${circumference - dashLength}`}
                          strokeDashoffset={-(offset / 100) * circumference}
                          className="transition-all duration-500"
                        />
                      );
                      offset += pct;
                      return el;
                    });
                  })()}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-[var(--color-text)]">
                    ${(investment / 1000).toFixed(investment >= 1000 ? 0 : 1)}k
                  </span>
                </div>
              </div>
              <div className="space-y-1.5 flex-1">
                {allocations.map((a) => (
                  <div key={a.symbol} className="flex items-center gap-2 text-sm">
                    <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: a.color }} />
                    <span className="text-[var(--color-text)]">{a.symbol}</span>
                    <span className="text-[var(--color-text-secondary)] ml-auto">
                      ${((investment * a.pct) / 100).toLocaleString("en-US", { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/tools/portfolio-tracker"
              className="affiliate-cta w-full block text-center px-6 py-2.5 rounded-xl text-white font-semibold"
            >
              Track Real Portfolio
            </Link>
          </div>
        </div>
      </div>

      <p className="text-xs text-[var(--color-text-secondary)] text-center mt-6 max-w-xl mx-auto">
        This simulator is for educational purposes only. Projections are hypothetical and not financial advice.
        Past performance does not guarantee future results.
      </p>
    </section>
  );
}
