'use client';

import { useState, useMemo } from "react";

// ── Constants ───────────────────────────────────────────
const PROTOCOLS = [
  { name: "Huma Finance (Permissionless)", apy: 10.0, risk: "Medium", chain: "Solana" },
  { name: "Huma Finance (Institutional)", apy: 9.0, risk: "Lower", chain: "Solana" },
  { name: "Aave USDC Supply", apy: 5.5, risk: "Low", chain: "Ethereum" },
  { name: "Ondo OUSG", apy: 5.2, risk: "Low", chain: "Multi-chain" },
  { name: "Curve 3pool (est.)", apy: 3.5, risk: "Low", chain: "Ethereum" },
];

const SETTLEMENT_WINDOWS = [
  { label: "Seconds (on-chain)", days: 0.002 },
  { label: "1 Hour", days: 0.042 },
  { label: "1 Day", days: 1 },
  { label: "2 Days (ACH)", days: 2 },
  { label: "3 Days (SWIFT)", days: 3 },
  { label: "30 Days (Trade Finance)", days: 30 },
  { label: "90 Days (Invoice)", days: 90 },
];

const FREQUENCIES = [
  { label: "One-time", txPerYear: 1 },
  { label: "Weekly", txPerYear: 52 },
  { label: "Daily", txPerYear: 365 },
  { label: "Hourly", txPerYear: 8760 },
];

// ── Helpers ─────────────────────────────────────────────
function fmtUSD(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(2)}K`;
  if (n >= 1) return `$${n.toFixed(2)}`;
  return `$${n.toFixed(4)}`;
}

function fmtNumber(n: number): string {
  return n.toLocaleString("en-US", { maximumFractionDigits: 2 });
}

// ── Component ───────────────────────────────────────────
export default function PayFiYieldCalculator() {
  const [capitalUSD, setCapitalUSD] = useState<number>(10000);
  const [capitalInput, setCapitalInput] = useState<string>("10000");
  const [protocolIdx, setProtocolIdx] = useState<number>(0);
  const [settlementIdx, setSettlementIdx] = useState<number>(3); // 2 days default
  const [frequencyIdx, setFrequencyIdx] = useState<number>(2); // daily default
  const [showBreakdown, setShowBreakdown] = useState<boolean>(false);

  const protocol = PROTOCOLS[protocolIdx];
  const settlement = SETTLEMENT_WINDOWS[settlementIdx];
  const frequency = FREQUENCIES[frequencyIdx];

  const results = useMemo(() => {
    const apyDecimal = protocol.apy / 100;
    const daysPerYear = 365;

    // Yield per settlement cycle (single payment)
    const yieldPerTx = capitalUSD * apyDecimal * (settlement.days / daysPerYear);

    // Total annual yield across all transactions
    const annualYield = yieldPerTx * frequency.txPerYear;

    // What traditional finance earns (essentially 0 on settlement float)
    const traditionalYield = 0;

    // Effective improvement
    const annualCapital = capitalUSD * frequency.txPerYear;
    const effectiveAPY = annualCapital > 0 ? (annualYield / capitalUSD) * 100 : 0;

    // Monthly yield
    const monthlyYield = annualYield / 12;

    // 5-year compounded
    const fiveYearCompound = capitalUSD * Math.pow(1 + apyDecimal, 5) - capitalUSD;

    return {
      yieldPerTx,
      annualYield,
      monthlyYield,
      traditionalYield,
      effectiveAPY,
      fiveYearCompound,
      annualCapital,
    };
  }, [capitalUSD, protocol.apy, settlement.days, frequency.txPerYear]);

  function handleCapitalInput(val: string) {
    setCapitalInput(val);
    const parsed = parseFloat(val.replace(/,/g, ""));
    if (!isNaN(parsed) && parsed >= 0) {
      setCapitalUSD(Math.min(parsed, 1_000_000_000));
    }
  }

  const riskColor: Record<string, string> = {
    Low: "#22c55e",
    Lower: "#22c55e",
    Medium: "#f59e0b",
    High: "#ef4444",
  };

  return (
    <div
      className="rounded-xl overflow-hidden border"
      style={{ background: "var(--color-bg-secondary)", borderColor: "var(--color-border)" }}
    >
      {/* Header */}
      <div
        className="px-5 py-4 border-b flex items-center justify-between"
        style={{ borderColor: "var(--color-border)", background: "rgba(99,102,241,0.08)" }}
      >
        <div>
          <p className="font-bold text-sm" style={{ color: "var(--color-text)" }}>
            💰 PayFi Yield Calculator
          </p>
          <p className="text-xs mt-0.5" style={{ color: "var(--color-text-secondary)" }}>
            Estimate yield on idle settlement capital
          </p>
        </div>
        <span className="text-xs px-2 py-1 rounded-full bg-indigo-900/50 text-indigo-300 border border-indigo-700/40 font-medium">
          Illustrative Only
        </span>
      </div>

      <div className="p-5 space-y-5">
        {/* --- Inputs --- */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Capital */}
          <div>
            <label className="block text-xs font-semibold mb-2" style={{ color: "var(--color-text)" }}>
              Settlement Capital (USD)
            </label>
            <div className="relative">
              <span
                className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-semibold"
                style={{ color: "var(--color-text-secondary)" }}
              >
                $
              </span>
              <input
                type="text"
                inputMode="decimal"
                aria-label="Settlement capital amount in USD"
                value={capitalInput}
                onChange={(e) => handleCapitalInput(e.target.value)}
                className="w-full rounded-lg pl-7 pr-3 py-2 text-sm outline-none focus:ring-1 focus:ring-indigo-500"
                style={{
                  background: "var(--color-bg)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text)",
                }}
                placeholder="10000"
              />
            </div>
            {/* Quick presets */}
            <div className="flex gap-2 mt-2 flex-wrap">
              {[1000, 10000, 100000, 1000000].map((v) => (
                <button
                  key={v}
                  onClick={() => { setCapitalUSD(v); setCapitalInput(String(v)); }}
                  aria-pressed={capitalUSD === v}
                  aria-label={`Set capital to ${v >= 1_000_000 ? "$1M" : v >= 1_000 ? `$${v / 1000}K` : `$${v}`}`}
                  className="text-xs px-2 py-0.5 rounded border transition-colors"
                  style={{
                    borderColor: capitalUSD === v ? "#6366f1" : "var(--color-border)",
                    color: capitalUSD === v ? "#a5b4fc" : "var(--color-text-secondary)",
                    background: capitalUSD === v ? "rgba(99,102,241,0.12)" : "transparent",
                  }}
                >
                  {v >= 1_000_000 ? "$1M" : v >= 1_000 ? `$${v / 1000}K` : `$${v}`}
                </button>
              ))}
            </div>
          </div>

          {/* Protocol */}
          <div>
            <label className="block text-xs font-semibold mb-2" style={{ color: "var(--color-text)" }}>
              PayFi Protocol / Strategy
            </label>
            <select
              value={protocolIdx}
              onChange={(e) => setProtocolIdx(Number(e.target.value))}
              aria-label="Select PayFi protocol or strategy"
              className="w-full rounded-lg px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-indigo-500"
              style={{
                background: "var(--color-bg)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text)",
              }}
            >
              {PROTOCOLS.map((p, i) => (
                <option key={i} value={i}>
                  {p.name} ({p.apy}% APY)
                </option>
              ))}
            </select>
            <div className="flex gap-2 mt-2 text-xs">
              <span style={{ color: "var(--color-text-secondary)" }}>Chain:</span>
              <span style={{ color: "var(--color-text)" }}>{protocol.chain}</span>
              <span className="ml-auto">
                Risk:{" "}
                <span style={{ color: riskColor[protocol.risk] ?? "#f59e0b" }}>
                  {protocol.risk}
                </span>
              </span>
            </div>
          </div>

          {/* Settlement Window */}
          <div>
            <label className="block text-xs font-semibold mb-2" style={{ color: "var(--color-text)" }}>
              Settlement Window
            </label>
            <select
              value={settlementIdx}
              onChange={(e) => setSettlementIdx(Number(e.target.value))}
              aria-label="Select settlement window duration"
              className="w-full rounded-lg px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-indigo-500"
              style={{
                background: "var(--color-bg)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text)",
              }}
            >
              {SETTLEMENT_WINDOWS.map((s, i) => (
                <option key={i} value={i}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>

          {/* Frequency */}
          <div>
            <label className="block text-xs font-semibold mb-2" style={{ color: "var(--color-text)" }}>
              Payment Frequency
            </label>
            <div className="grid grid-cols-2 gap-1 sm:grid-cols-4" role="group" aria-label="Payment frequency">
              {FREQUENCIES.map((f, i) => (
                <button
                  key={i}
                  onClick={() => setFrequencyIdx(i)}
                  aria-pressed={frequencyIdx === i}
                  aria-label={`${f.label} — ${f.txPerYear} transactions per year`}
                  className="text-xs py-2 rounded-lg transition-colors font-medium"
                  style={{
                    background: frequencyIdx === i ? "rgba(99,102,241,0.2)" : "var(--color-bg)",
                    border: `1px solid ${frequencyIdx === i ? "#6366f1" : "var(--color-border)"}`,
                    color: frequencyIdx === i ? "#a5b4fc" : "var(--color-text-secondary)",
                    boxShadow: undefined,
                  }}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* --- Results --- */}
        <div
          className="rounded-xl p-4 border"
          style={{ background: "rgba(99,102,241,0.06)", borderColor: "rgba(99,102,241,0.3)" }}
        >
          <p className="text-xs font-semibold mb-3 uppercase tracking-wide text-indigo-400">
            Estimated Yield
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "Per Transaction", value: fmtUSD(results.yieldPerTx), sub: `${protocol.apy}% APY · ${settlement.days}d` },
              { label: "Monthly", value: fmtUSD(results.monthlyYield), sub: `${frequency.txPerYear} tx/yr` },
              { label: "Annual", value: fmtUSD(results.annualYield), sub: `vs $0 (TradFi)` },
              { label: "5-Year (Compound)", value: fmtUSD(results.fiveYearCompound), sub: `on $${fmtNumber(capitalUSD)} principal` },
            ].map(({ label, value, sub }) => (
              <div key={label} className="text-center">
                <p className="text-xl font-bold text-indigo-300">{value}</p>
                <p className="text-xs font-semibold mt-0.5" style={{ color: "var(--color-text)" }}>{label}</p>
                <p className="text-xs mt-0.5" style={{ color: "var(--color-text-secondary)" }}>{sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Breakdown Toggle */}
        <button
          onClick={() => setShowBreakdown(!showBreakdown)}
          aria-expanded={showBreakdown}
          aria-label="Toggle calculation breakdown"
          className="text-xs flex items-center gap-1 hover:underline"
          style={{ color: "#58a6ff" }}
        >
          <span>{showBreakdown ? "▼" : "▶"}</span>
          {showBreakdown ? "Hide" : "Show"} calculation breakdown
        </button>

        {showBreakdown && (
          <div
            className="rounded-lg p-4 text-xs space-y-1.5 font-mono"
            style={{ background: "var(--color-bg)", border: "1px solid var(--color-border)", color: "var(--color-text-secondary)" }}
          >
            <p><span style={{ color: "#58a6ff" }}>APY:</span> {protocol.apy}% = {(protocol.apy / 100).toFixed(4)} decimal</p>
            <p><span style={{ color: "#58a6ff" }}>Settlement window:</span> {settlement.days} days / 365 = {(settlement.days / 365).toFixed(6)} of year</p>
            <p><span style={{ color: "#58a6ff" }}>Yield / tx:</span> ${fmtNumber(capitalUSD)} × {(protocol.apy / 100).toFixed(4)} × {(settlement.days / 365).toFixed(6)} = {fmtUSD(results.yieldPerTx)}</p>
            <p><span style={{ color: "#58a6ff" }}>Annual yield:</span> {fmtUSD(results.yieldPerTx)} × {frequency.txPerYear} tx = {fmtUSD(results.annualYield)}</p>
            <p><span style={{ color: "#58a6ff" }}>5yr compound:</span> ${fmtNumber(capitalUSD)} × (1 + {(protocol.apy / 100).toFixed(4)})^5 − ${fmtNumber(capitalUSD)} = {fmtUSD(results.fiveYearCompound)}</p>
          </div>
        )}

        {/* Disclaimer */}
        <p className="text-xs rounded-lg p-3 border" style={{ color: "var(--color-text-secondary)", borderColor: "var(--color-border)", background: "var(--color-bg)" }}>
          ⚠️ <strong style={{ color: "var(--color-text)" }}>Illustrative only.</strong> Actual yields vary with market conditions, protocol fees, smart contract risk, and stablecoin stability. APY rates shown are approximate as of March 2026. Not financial advice. Always verify current rates on the protocol directly.
        </p>
      </div>
    </div>
  );
}
