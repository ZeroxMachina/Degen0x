'use client';

import { useState, useMemo } from "react";

// ── Interfaces ──────────────────────────────────────────────────────────────
interface YieldScenario {
  label: string;
  apy: number;
  color: string;
  description: string;
}

// ── Constants ───────────────────────────────────────────────────────────────
const SCENARIOS: YieldScenario[] = [
  { label: "Bear Market",   apy: 5,  color: "#8b949e", description: "Flat/negative funding rates" },
  { label: "Neutral",       apy: 12, color: "#58a6ff", description: "Typical market conditions" },
  { label: "Bull Market",   apy: 25, color: "#22c55e", description: "Strong bullish sentiment" },
  { label: "Peak Bull",     apy: 40, color: "#a371f7", description: "Extreme positive funding" },
];

const COMPARISON_YIELDS: { label: string; apy: number; color: string }[] = [
  { label: "US Savings Account", apy: 4.5, color: "#8b949e" },
  { label: "USDT/USDC (undeployed)", apy: 0, color: "#f85149" },
  { label: "sUSDe (custom APY)", apy: 0, color: "#22c55e" }, // filled dynamically
];

function formatUSD(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  return `$${n.toFixed(2)}`;
}

function calcEarnings(principal: number, apyPct: number, months: number): number {
  // Compound interest, monthly compounding
  const rate = apyPct / 100 / 12;
  return principal * Math.pow(1 + rate, months) - principal;
}

// ── Component ───────────────────────────────────────────────────────────────
export default function EthenaYieldCalc() {
  const [principal, setPrincipal] = useState<number>(10_000);
  const [principalInput, setPrincipalInput] = useState<string>("10000");
  const [apyPct, setApyPct] = useState<number>(12);
  const [months, setMonths] = useState<number>(12);

  const earnings = useMemo(() => calcEarnings(principal, apyPct, months), [principal, apyPct, months]);
  const finalBalance = principal + earnings;

  const comparisons = useMemo(() => [
    { label: "US Savings Account (~4.5%)", apy: 4.5, color: "#8b949e" },
    { label: "USDT / USDC (undeployed)", apy: 0, color: "#f85149" },
    { label: `sUSDe at ${apyPct}% APY`, apy: apyPct, color: "#22c55e" },
  ].map(c => ({
    ...c,
    earnings: calcEarnings(principal, c.apy, months),
    finalBalance: principal + calcEarnings(principal, c.apy, months),
  })), [principal, apyPct, months]);

  const maxEarnings = Math.max(...comparisons.map(c => c.earnings), 1);

  function handlePrincipalChange(val: string) {
    setPrincipalInput(val);
    const n = parseFloat(val.replace(/,/g, ""));
    if (!isNaN(n) && n >= 0) setPrincipal(Math.min(n, 10_000_000));
  }

  const periodLabel = months === 1 ? "1 month" : months === 3 ? "3 months" : months === 6 ? "6 months" : "1 year";

  return (
    <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 my-8">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-[#e6edf3] text-lg font-bold mb-1">sUSDe Yield Calculator</h3>
        <p className="text-[#8b949e] text-sm">
          Estimate your earnings from staking USDe as sUSDe. Yields are variable — use the
          scenarios below as benchmarks.
        </p>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {/* Principal */}
        <div>
          <label className="block text-[#8b949e] text-xs font-medium mb-2 uppercase tracking-wide">
            USDe Deposit
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8b949e] text-sm">$</span>
            <input
              type="text"
              inputMode="numeric"
              value={principalInput}
              onChange={e => handlePrincipalChange(e.target.value)}
              className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg pl-7 pr-4 py-3 text-[#e6edf3] text-sm focus:outline-none focus:border-[#6366f1] transition-colors"
            />
          </div>
          {/* Quick amounts */}
          <div className="flex gap-2 mt-2">
            {[1000, 10_000, 100_000].map(n => (
              <button
                key={n}
                onClick={() => { setPrincipal(n); setPrincipalInput(String(n)); }}
                className={`text-xs px-2 py-1 rounded border transition-colors ${
                  principal === n
                    ? "bg-[#6366f1]/20 border-[#6366f1]/50 text-[#818cf8]"
                    : "bg-transparent border-[#30363d] text-[#8b949e] hover:border-[#58a6ff]/50"
                }`}
              >
                ${n >= 1000 ? `${n / 1000}K` : n}
              </button>
            ))}
          </div>
        </div>

        {/* Time Period */}
        <div>
          <label className="block text-[#8b949e] text-xs font-medium mb-2 uppercase tracking-wide">
            Time Period
          </label>
          <div className="grid grid-cols-4 gap-2">
            {[
              { label: "1 mo", value: 1 },
              { label: "3 mo", value: 3 },
              { label: "6 mo", value: 6 },
              { label: "1 yr", value: 12 },
            ].map(p => (
              <button
                key={p.value}
                onClick={() => setMonths(p.value)}
                className={`py-3 rounded-lg text-sm font-medium border transition-colors ${
                  months === p.value
                    ? "bg-[#6366f1]/20 border-[#6366f1]/50 text-[#818cf8]"
                    : "bg-[#0d1117] border-[#30363d] text-[#8b949e] hover:border-[#58a6ff]/50"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* APY Scenarios */}
      <div className="mb-6">
        <label className="block text-[#8b949e] text-xs font-medium mb-2 uppercase tracking-wide">
          APY Scenario
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
          {SCENARIOS.map(s => (
            <button
              key={s.label}
              onClick={() => setApyPct(s.apy)}
              className={`p-3 rounded-lg border text-left transition-colors ${
                apyPct === s.apy
                  ? "border-[#6366f1]/60 bg-[#6366f1]/10"
                  : "border-[#30363d] bg-[#0d1117] hover:border-[#58a6ff]/40"
              }`}
            >
              <div className="text-xs text-[#8b949e] mb-1">{s.label}</div>
              <div className="font-bold text-lg" style={{ color: s.color }}>{s.apy}%</div>
              <div className="text-xs text-[#8b949e] mt-0.5">{s.description}</div>
            </button>
          ))}
        </div>

        {/* Custom APY Slider */}
        <div className="flex items-center gap-4">
          <span className="text-[#8b949e] text-xs w-16 shrink-0">Custom: {apyPct}%</span>
          <input
            type="range"
            min={1}
            max={60}
            step={0.5}
            value={apyPct}
            onChange={e => setApyPct(parseFloat(e.target.value))}
            className="flex-1 accent-[#6366f1]"
          />
          <span className="text-[#8b949e] text-xs w-8 shrink-0 text-right">60%</span>
        </div>
      </div>

      {/* Result */}
      <div className="bg-[#0d1117] border border-[#6366f1]/30 rounded-xl p-5 mb-6">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-[#8b949e] text-xs mb-1">Principal</p>
            <p className="text-[#e6edf3] font-bold text-xl">{formatUSD(principal)}</p>
          </div>
          <div>
            <p className="text-[#8b949e] text-xs mb-1">Earnings ({periodLabel})</p>
            <p className="font-bold text-xl" style={{ color: earnings >= 0 ? "#22c55e" : "#f85149" }}>
              +{formatUSD(earnings)}
            </p>
          </div>
          <div>
            <p className="text-[#8b949e] text-xs mb-1">Final Balance</p>
            <p className="text-[#e6edf3] font-bold text-xl">{formatUSD(finalBalance)}</p>
          </div>
        </div>
        <div className="mt-3 text-center">
          <span className="text-[#8b949e] text-xs">
            At <strong className="text-[#e6edf3]">{apyPct}% APY</strong> (monthly compounding) over{" "}
            <strong className="text-[#e6edf3]">{periodLabel}</strong>
          </span>
        </div>
      </div>

      {/* Comparison Chart */}
      <div>
        <h4 className="text-[#8b949e] text-xs font-medium uppercase tracking-wide mb-3">
          Comparison: Earnings over {periodLabel}
        </h4>
        <div className="space-y-3">
          {comparisons.map((c, i) => {
            const pct = maxEarnings > 0 ? Math.max((c.earnings / maxEarnings) * 100, c.earnings > 0 ? 2 : 0) : 0;
            return (
              <div key={i}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-[#8b949e]">{c.label}</span>
                  <span style={{ color: c.color }} className="font-medium">
                    {c.apy > 0 ? `+${formatUSD(c.earnings)}` : "$0.00"}
                  </span>
                </div>
                <div className="h-2 bg-[#0d1117] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${pct}%`,
                      backgroundColor: c.color,
                      opacity: 0.8,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Disclaimer */}
      <p className="text-[#8b949e] text-xs mt-5 pt-4 border-t border-[#30363d]">
        ⚠️ Yields are variable and not guaranteed. sUSDe APY fluctuates with perpetual funding rates —
        it can be higher or lower than the scenarios shown. This calculator is for illustrative
        purposes only and does not constitute financial advice. There is a 7-day cooldown when
        unstaking from sUSDe.
      </p>
    </div>
  );
}
