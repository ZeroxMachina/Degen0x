'use client';

"use client";
import { useState, useMemo, useCallback } from "react";
import RelatedContent from '@/components/RelatedContent';

/* ── types ── */
interface Asset {
  id: string;
  name: string;
  symbol: string;
  allocation: number;          // 0-100
  expectedReturn: number;      // annualised %
  volatility: number;          // annualised std-dev %
  maxDrawdown: number;         // historical max %
  sharpe: number;
  beta: number;
  correlationGroup: "btc" | "eth" | "alt" | "stable" | "defi";
}

interface SimResult {
  median: number;
  p5: number;
  p25: number;
  p75: number;
  p95: number;
  maxDrawdown: number;
  sharpeRatio: number;
  sortinoRatio: number;
  calmarRatio: number;
  valueAtRisk95: number;
  cvar95: number;
}

/* ── seed data ── */
const PRESETS: Asset[] = [
  { id: "btc", name: "Bitcoin", symbol: "BTC", allocation: 40, expectedReturn: 62, volatility: 55, maxDrawdown: -77, sharpe: 1.12, beta: 1.0, correlationGroup: "btc" },
  { id: "eth", name: "Ethereum", symbol: "ETH", allocation: 25, expectedReturn: 75, volatility: 72, maxDrawdown: -82, sharpe: 0.98, beta: 1.25, correlationGroup: "eth" },
  { id: "sol", name: "Solana", symbol: "SOL", allocation: 10, expectedReturn: 110, volatility: 95, maxDrawdown: -90, sharpe: 1.05, beta: 1.65, correlationGroup: "alt" },
  { id: "usdc", name: "USD Coin", symbol: "USDC", allocation: 10, expectedReturn: 5, volatility: 1, maxDrawdown: -1, sharpe: 3.0, beta: 0.0, correlationGroup: "stable" },
  { id: "aave", name: "Aave", symbol: "AAVE", allocation: 8, expectedReturn: 85, volatility: 88, maxDrawdown: -88, sharpe: 0.85, beta: 1.45, correlationGroup: "defi" },
  { id: "link", name: "Chainlink", symbol: "LINK", allocation: 7, expectedReturn: 70, volatility: 80, maxDrawdown: -85, sharpe: 0.78, beta: 1.35, correlationGroup: "alt" },
];

const CORRELATION: Record<string, Record<string, number>> = {
  btc:    { btc: 1.0,  eth: 0.82, alt: 0.72, stable: 0.02, defi: 0.68 },
  eth:    { btc: 0.82, eth: 1.0,  alt: 0.78, stable: 0.03, defi: 0.75 },
  alt:    { btc: 0.72, eth: 0.78, alt: 1.0,  stable: 0.05, defi: 0.80 },
  stable: { btc: 0.02, eth: 0.03, alt: 0.05, stable: 1.0,  defi: 0.04 },
  defi:   { btc: 0.68, eth: 0.75, alt: 0.80, stable: 0.04, defi: 1.0  },
};

/* ── helpers ── */
function gaussianRandom(): number {
  let u = 0, v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
}

function runMonteCarlo(assets: Asset[], periods: number, simulations: number): SimResult {
  const n = assets.length;
  if (n === 0) return { median: 0, p5: 0, p25: 0, p75: 0, p95: 0, maxDrawdown: 0, sharpeRatio: 0, sortinoRatio: 0, calmarRatio: 0, valueAtRisk95: 0, cvar95: 0 };

  const totalAlloc = assets.reduce((s, a) => s + a.allocation, 0) || 1;
  const weights = assets.map(a => a.allocation / totalAlloc);

  // portfolio expected monthly return & vol (simplified)
  const monthlyReturns: number[] = assets.map(a => a.expectedReturn / 100 / 12);
  const monthlyVols: number[] = assets.map(a => a.volatility / 100 / Math.sqrt(12));

  // portfolio vol with correlation
  let portVar = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const corr = CORRELATION[assets[i].correlationGroup]?.[assets[j].correlationGroup] ?? 0.5;
      portVar += weights[i] * weights[j] * monthlyVols[i] * monthlyVols[j] * corr;
    }
  };
  const portVol = Math.sqrt(Math.max(portVar, 0.0001));
  const portReturn = weights.reduce((s, w, i) => s + w * monthlyReturns[i], 0);

  const finalValues: number[] = [];
  const maxDrawdowns: number[] = [];
  const monthlyReturnsSeries: number[] = [];

  for (let s = 0; s < simulations; s++) {
    let value = 10000;
    let peak = value;
    let maxDD = 0;
    for (let m = 0; m < periods; m++) {
      const r = portReturn + portVol * gaussianRandom();
      monthlyReturnsSeries.push(r);
      value *= (1 + r);
      if (value > peak) peak = value;
      const dd = (value - peak) / peak;
      if (dd < maxDD) maxDD = dd;
    }
    finalValues.push(value);
    maxDrawdowns.push(maxDD);
  }

  finalValues.sort((a, b) => a - b);
  maxDrawdowns.sort((a, b) => a - b);
  monthlyReturnsSeries.sort((a, b) => a - b);

  const pct = (arr: number[], p: number) => arr[Math.floor(arr.length * p)] ?? 0;
  const mean = finalValues.reduce((s, v) => s + v, 0) / finalValues.length;
  const avgReturn = monthlyReturnsSeries.reduce((s, v) => s + v, 0) / monthlyReturnsSeries.length;
  const stdDev = Math.sqrt(monthlyReturnsSeries.reduce((s, v) => s + (v - avgReturn) ** 2, 0) / monthlyReturnsSeries.length);
  const downside = monthlyReturnsSeries.filter(r => r < 0);
  const downsideDev = downside.length > 0 ? Math.sqrt(downside.reduce((s, v) => s + v ** 2, 0) / downside.length) : 0.001;
  const avgDD = maxDrawdowns.reduce((s, v) => s + v, 0) / maxDrawdowns.length;

  // VaR & CVaR
  const var95Idx = Math.floor(monthlyReturnsSeries.length * 0.05);
  const var95 = monthlyReturnsSeries[var95Idx] ?? 0;
  const cvar95 = monthlyReturnsSeries.slice(0, var95Idx).reduce((s, v) => s + v, 0) / (var95Idx || 1);

  return {
    median: pct(finalValues, 0.5),
    p5: pct(finalValues, 0.05),
    p25: pct(finalValues, 0.25),
    p75: pct(finalValues, 0.75),
    p95: pct(finalValues, 0.95),
    maxDrawdown: pct(maxDrawdowns, 0.05) * 100,
    sharpeRatio: stdDev > 0 ? avgReturn / stdDev : 0,
    sortinoRatio: downsideDev > 0 ? avgReturn / downsideDev : 0,
    calmarRatio: avgDD !== 0 ? (avgReturn * 12) / Math.abs(avgDD) : 0,
    valueAtRisk95: var95 * 100,
    cvar95: cvar95 * 100,
  };
}

function riskGrade(sim: SimResult): { label: string; color: string; emoji: string; description: string } {
  const score = Math.abs(sim.maxDrawdown);
  if (score < 15) return { label: "Conservative", color: "#3fb950", emoji: "🛡️", description: "Low risk. Suitable for capital preservation." };
  if (score < 35) return { label: "Moderate", color: "#58a6ff", emoji: "⚖️", description: "Balanced risk-reward. Good diversification." };
  if (score < 55) return { label: "Aggressive", color: "#d29922", emoji: "🔥", description: "High volatility. Expect significant swings." };
  if (score < 75) return { label: "Very Aggressive", color: "#f0883e", emoji: "⚡", description: "Extreme volatility. Only for experienced traders." };
  return { label: "Degen", color: "#f85149", emoji: "💀", description: "Maximum risk. Prepare for wild rides." };
}

/* ── component ── */
export default function RiskAnalyzerPage() {
  const [assets, setAssets] = useState<Asset[]>(PRESETS);
  const [horizon, setHorizon] = useState(12);       // months
  const [simCount, setSimCount] = useState(5000);
  const [showAdd, setShowAdd] = useState(false);
  const [newAsset, setNewAsset] = useState({ name: "", symbol: "", expectedReturn: 50, volatility: 60, correlationGroup: "alt" as Asset["correlationGroup"] });

  const totalAlloc = assets.reduce((s, a) => s + a.allocation, 0);

  const sim = useMemo(() => runMonteCarlo(assets, horizon, simCount), [assets, horizon, simCount]);
  const grade = useMemo(() => riskGrade(sim), [sim]);

  const updateAllocation = useCallback((id: string, val: number) => {
    setAssets(prev => prev.map(a => a.id === id ? { ...a, allocation: Math.max(0, Math.min(100, val)) } : a));
  }, []);

  const removeAsset = useCallback((id: string) => {
    setAssets(prev => prev.filter(a => a.id !== id));
  }, []);

  const addAsset = useCallback(() => {
    if (!newAsset.name || !newAsset.symbol) return;
    const id = newAsset.symbol.toLowerCase() + Date.now();
    setAssets(prev => [...prev, {
      id, name: newAsset.name, symbol: newAsset.symbol.toUpperCase(), allocation: 5,
      expectedReturn: newAsset.expectedReturn, volatility: newAsset.volatility,
      maxDrawdown: -newAsset.volatility * 1.2, sharpe: newAsset.expectedReturn / newAsset.volatility,
      beta: newAsset.volatility / 55, correlationGroup: newAsset.correlationGroup,
    }]);
    setNewAsset({ name: "", symbol: "", expectedReturn: 50, volatility: 60, correlationGroup: "alt" });
    setShowAdd(false);
  }, [newAsset]);

  const fmt = (n: number) => n >= 10000 ? `$${(n / 1000).toFixed(1)}k` : `$${n.toFixed(0)}`;

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 16px", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
          <span style={{ fontSize: 36 }}>📊</span>
          <h1 style={{ fontSize: 28, fontWeight: 800, background: "linear-gradient(135deg, #6366f1, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Portfolio Risk Analyzer
          </h1>
        </div>
        <p style={{ color: "#8b949e", fontSize: 15, maxWidth: 700 }}>
          Monte Carlo simulation engine with {simCount.toLocaleString()} paths. Adjust allocations, add assets, and stress-test your portfolio across different time horizons.
        </p>
      </div>

      {/* Risk Grade Banner */}
      <div style={{ background: `${grade.color}15`, border: `1px solid ${grade.color}40`, borderRadius: 12, padding: "20px 24px", marginBottom: 24, display: "flex", alignItems: "center", gap: 16 }}>
        <span style={{ fontSize: 48 }}>{grade.emoji}</span>
        <div>
          <div style={{ fontSize: 22, fontWeight: 700, color: grade.color }}>{grade.label} Portfolio</div>
          <div style={{ color: "#8b949e", fontSize: 14, marginTop: 2 }}>{grade.description}</div>
        </div>
        <div style={{ marginLeft: "auto", textAlign: "right" }}>
          <div style={{ fontSize: 11, color: "#8b949e", textTransform: "uppercase", letterSpacing: "0.05em" }}>Allocation</div>
          <div style={{ fontSize: 20, fontWeight: 700, color: totalAlloc === 100 ? "#3fb950" : "#f85149" }}>{totalAlloc}%</div>
        </div>
      </div>

      {/* Controls */}
      <div style={{ display: "flex", gap: 16, marginBottom: 24, flexWrap: "wrap" }}>
        <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 10, padding: "12px 16px", flex: "1 1 200px" }}>
          <label style={{ fontSize: 11, color: "#8b949e", textTransform: "uppercase", letterSpacing: "0.05em" }}>Time Horizon</label>
          <select value={horizon} onChange={e => setHorizon(Number(e.target.value))} style={{ display: "block", width: "100%", marginTop: 6, padding: "8px 12px", background: "#0d1117", border: "1px solid #30363d", borderRadius: 8, color: "#e6edf3", fontSize: 14 }}>
            <option value={3}>3 Months</option>
            <option value={6}>6 Months</option>
            <option value={12}>1 Year</option>
            <option value={24}>2 Years</option>
            <option value={36}>3 Years</option>
            <option value={60}>5 Years</option>
          </select>
        </div>
        <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 10, padding: "12px 16px", flex: "1 1 200px" }}>
          <label style={{ fontSize: 11, color: "#8b949e", textTransform: "uppercase", letterSpacing: "0.05em" }}>Simulations</label>
          <select value={simCount} onChange={e => setSimCount(Number(e.target.value))} style={{ display: "block", width: "100%", marginTop: 6, padding: "8px 12px", background: "#0d1117", border: "1px solid #30363d", borderRadius: 8, color: "#e6edf3", fontSize: 14 }}>
            <option value={1000}>1,000</option>
            <option value={5000}>5,000</option>
            <option value={10000}>10,000</option>
          </select>
        </div>
        <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 10, padding: "12px 16px", flex: "1 1 200px" }}>
          <label style={{ fontSize: 11, color: "#8b949e", textTransform: "uppercase", letterSpacing: "0.05em" }}>Starting Capital</label>
          <div style={{ fontSize: 20, fontWeight: 700, color: "#e6edf3", marginTop: 6 }}>$10,000</div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        {/* Left: Assets */}
        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
            <h2 style={{ fontSize: 16, fontWeight: 700 }}>Portfolio Assets</h2>
            <button onClick={() => setShowAdd(!showAdd)} style={{ background: "#6366f120", color: "#818cf8", border: "1px solid #6366f140", borderRadius: 8, padding: "6px 14px", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
              {showAdd ? "Cancel" : "+ Add Asset"}
            </button>
          </div>

          {showAdd && (
            <div style={{ background: "#161b22", border: "1px solid #6366f140", borderRadius: 10, padding: 16, marginBottom: 12 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 8 }}>
                <input placeholder="Name" value={newAsset.name} onChange={e => setNewAsset(p => ({ ...p, name: e.target.value }))} style={{ padding: "8px 12px", background: "#0d1117", border: "1px solid #30363d", borderRadius: 8, color: "#e6edf3", fontSize: 13 }} />
                <input placeholder="Symbol" value={newAsset.symbol} onChange={e => setNewAsset(p => ({ ...p, symbol: e.target.value }))} style={{ padding: "8px 12px", background: "#0d1117", border: "1px solid #30363d", borderRadius: 8, color: "#e6edf3", fontSize: 13 }} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 8 }}>
                <div>
                  <label style={{ fontSize: 10, color: "#8b949e" }}>Exp. Return %</label>
                  <input type="number" value={newAsset.expectedReturn} onChange={e => setNewAsset(p => ({ ...p, expectedReturn: Number(e.target.value) }))} style={{ width: "100%", padding: "6px 8px", background: "#0d1117", border: "1px solid #30363d", borderRadius: 6, color: "#e6edf3", fontSize: 13 }} />
                </div>
                <div>
                  <label style={{ fontSize: 10, color: "#8b949e" }}>Volatility %</label>
                  <input type="number" value={newAsset.volatility} onChange={e => setNewAsset(p => ({ ...p, volatility: Number(e.target.value) }))} style={{ width: "100%", padding: "6px 8px", background: "#0d1117", border: "1px solid #30363d", borderRadius: 6, color: "#e6edf3", fontSize: 13 }} />
                </div>
                <div>
                  <label style={{ fontSize: 10, color: "#8b949e" }}>Corr Group</label>
                  <select value={newAsset.correlationGroup} onChange={e => setNewAsset(p => ({ ...p, correlationGroup: e.target.value as Asset["correlationGroup"] }))} style={{ width: "100%", padding: "6px 8px", background: "#0d1117", border: "1px solid #30363d", borderRadius: 6, color: "#e6edf3", fontSize: 13 }}>
                    <option value="btc">BTC-corr</option>
                    <option value="eth">ETH-corr</option>
                    <option value="alt">Alt-corr</option>
                    <option value="stable">Stable</option>
                    <option value="defi">DeFi</option>
                  </select>
                </div>
              </div>
              <button onClick={addAsset} style={{ width: "100%", padding: "8px", background: "#6366f1", color: "#fff", border: "none", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Add to Portfolio</button>
            </div>
          )}

          {assets.map(a => (
            <div key={a.id} style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 10, padding: "12px 16px", marginBottom: 8, display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 14 }}>{a.name} <span style={{ color: "#8b949e", fontWeight: 400 }}>{a.symbol}</span></div>
                <div style={{ fontSize: 11, color: "#8b949e", marginTop: 2 }}>Return: {a.expectedReturn}% | Vol: {a.volatility}% | Beta: {a.beta.toFixed(2)}</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <input type="range" min={0} max={100} value={a.allocation} onChange={e => updateAllocation(a.id, Number(e.target.value))} style={{ width: 80, accentColor: "#6366f1" }} />
                <span style={{ fontSize: 14, fontWeight: 700, width: 40, textAlign: "right" }}>{a.allocation}%</span>
                <button onClick={() => removeAsset(a.id)} style={{ background: "none", border: "none", color: "#f85149", cursor: "pointer", fontSize: 16 }}>×</button>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Results */}
        <div>
          <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Simulation Results</h2>

          {/* Outcome Distribution */}
          <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 10, padding: 16, marginBottom: 12 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#8b949e", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 12 }}>Outcome Distribution ({horizon}mo)</div>
            <div style={{ display: "flex", gap: 2, height: 80, alignItems: "flex-end", marginBottom: 12 }}>
              {[
                { label: "Bear (5th)", value: sim.p5, color: "#f85149" },
                { label: "Weak (25th)", value: sim.p25, color: "#f0883e" },
                { label: "Median", value: sim.median, color: "#58a6ff" },
                { label: "Strong (75th)", value: sim.p75, color: "#3fb950" },
                { label: "Bull (95th)", value: sim.p95, color: "#39d353" },
              ].map((b, i) => {
                const max = sim.p95 || 1;
                const h = Math.max(8, (Math.max(b.value, 0) / max) * 70);
                return (
                  <div key={i} style={{ flex: 1, textAlign: "center" }}>
                    <div style={{ background: b.color, height: h, borderRadius: "4px 4px 0 0", transition: "height 0.3s" }} />
                  </div>
                );
              })}
            </div>
            <div style={{ display: "flex", gap: 2 }}>
              {[
                { label: "Bear", value: sim.p5, color: "#f85149" },
                { label: "Weak", value: sim.p25, color: "#f0883e" },
                { label: "Median", value: sim.median, color: "#58a6ff" },
                { label: "Strong", value: sim.p75, color: "#3fb950" },
                { label: "Bull", value: sim.p95, color: "#39d353" },
              ].map((b, i) => (
                <div key={i} style={{ flex: 1, textAlign: "center" }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: b.color }}>{fmt(b.value)}</div>
                  <div style={{ fontSize: 10, color: "#8b949e" }}>{b.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Risk Metrics */}
          <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 10, padding: 16, marginBottom: 12 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#8b949e", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 12 }}>Risk Metrics</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {[
                { label: "Max Drawdown (5th pct)", value: `${sim.maxDrawdown.toFixed(1)}%`, color: "#f85149" },
                { label: "Value at Risk (95%)", value: `${sim.valueAtRisk95.toFixed(1)}%`, color: "#f0883e" },
                { label: "CVaR / Exp. Shortfall", value: `${sim.cvar95.toFixed(1)}%`, color: "#d29922" },
                { label: "Sharpe Ratio", value: sim.sharpeRatio.toFixed(3), color: "#58a6ff" },
                { label: "Sortino Ratio", value: sim.sortinoRatio.toFixed(3), color: "#bc8cff" },
                { label: "Calmar Ratio", value: sim.calmarRatio.toFixed(3), color: "#39d353" },
              ].map((m, i) => (
                <div key={i} style={{ background: "#0d1117", borderRadius: 8, padding: "10px 12px" }}>
                  <div style={{ fontSize: 10, color: "#8b949e", textTransform: "uppercase", letterSpacing: "0.04em" }}>{m.label}</div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: m.color, marginTop: 2 }}>{m.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Correlation Matrix */}
          <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 10, padding: 16 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#8b949e", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 12 }}>Concentration Risk</div>
            {(() => {
              const groups: Record<string, number> = {};
              assets.forEach(a => { groups[a.correlationGroup] = (groups[a.correlationGroup] || 0) + a.allocation; });
              return Object.entries(groups).sort((a, b) => b[1] - a[1]).map(([g, v]) => (
                <div key={g} style={{ marginBottom: 8 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 4 }}>
                    <span style={{ textTransform: "capitalize" }}>{g}</span>
                    <span style={{ color: "#8b949e" }}>{((v / totalAlloc) * 100).toFixed(0)}%</span>
                  </div>
                  <div style={{ height: 6, background: "#0d1117", borderRadius: 3, overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${(v / totalAlloc) * 100}%`, background: v / totalAlloc > 0.5 ? "#f85149" : v / totalAlloc > 0.3 ? "#d29922" : "#3fb950", borderRadius: 3, transition: "width 0.3s" }} />
                  </div>
                </div>
              ));
            })()}
            {(() => {
              const maxGroup = Object.entries(assets.reduce((g: Record<string, number>, a) => { g[a.correlationGroup] = (g[a.correlationGroup] || 0) + a.allocation; return g; }, {})).sort((a, b) => b[1] - a[1])[0];
              if (maxGroup && maxGroup[1] / totalAlloc > 0.5) {
                return <div style={{ marginTop: 8, padding: "8px 12px", background: "#f8514915", border: "1px solid #f8514940", borderRadius: 8, fontSize: 12, color: "#f85149" }}>Warning: {maxGroup[0]} assets are {((maxGroup[1] / totalAlloc) * 100).toFixed(0)}% of portfolio. Consider diversifying.</div>;
              }
              return null;
            })()}
          </div>
        </div>
      </div>

      {/* Methodology */}
      <div style={{ marginTop: 32, background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: "20px 24px" }}>
        <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>Methodology</h3>
        <p style={{ fontSize: 13, color: "#8b949e", lineHeight: 1.6 }}>
          This tool uses geometric Brownian motion Monte Carlo simulation with correlated asset returns. Expected returns and volatilities are based on historical crypto market data (2020-2025). Correlation matrices are derived from daily returns across asset classes. Results are for educational purposes only and do not constitute financial advice. Past performance does not guarantee future results. Crypto assets are highly volatile and you may lose your entire investment.
        </p>
      </div>
      <RelatedContent category="tools" currentSlug="/tools/risk-analyzer" />
    </div>
  );
}
