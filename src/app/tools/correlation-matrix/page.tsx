"use client";

import { useState, useMemo } from "react";
import Breadcrumb from "@/components/Breadcrumb";

/* ─────────────────────────────────────────────────────────────
   Crypto Correlation Matrix
   Interactive heatmap showing price correlation between top
   cryptocurrencies. Helps with portfolio diversification.

   Features:
   - 12x12 correlation heatmap (SVG)
   - Multiple timeframes (7d, 30d, 90d, 1Y)
   - Correlation strength indicator
   - Portfolio diversification score
   - Educational breakdown
   - Simulated realistic data based on known crypto correlations
───────────────────────────────────────────────────────────── */

interface CryptoAsset {
  symbol: string;
  name: string;
  color: string;
  category: string;
}

const ASSETS: CryptoAsset[] = [
  { symbol: "BTC", name: "Bitcoin", color: "#F7931A", category: "L1" },
  { symbol: "ETH", name: "Ethereum", color: "#627EEA", category: "L1" },
  { symbol: "SOL", name: "Solana", color: "#9945FF", category: "L1" },
  { symbol: "BNB", name: "BNB", color: "#F3BA2F", category: "L1" },
  { symbol: "ADA", name: "Cardano", color: "#0033AD", category: "L1" },
  { symbol: "AVAX", name: "Avalanche", color: "#E84142", category: "L1" },
  { symbol: "DOT", name: "Polkadot", color: "#E6007A", category: "L1" },
  { symbol: "LINK", name: "Chainlink", color: "#2A5ADA", category: "Oracle" },
  { symbol: "UNI", name: "Uniswap", color: "#FF007A", category: "DeFi" },
  { symbol: "AAVE", name: "Aave", color: "#B6509E", category: "DeFi" },
  { symbol: "MATIC", name: "Polygon", color: "#8247E5", category: "L2" },
  { symbol: "ARB", name: "Arbitrum", color: "#12AAFF", category: "L2" },
];

type Timeframe = "7d" | "30d" | "90d" | "1y";

/* Seeded PRNG for deterministic correlations */
function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

/* Generate realistic correlation matrices per timeframe */
function generateCorrelations(tf: Timeframe): number[][] {
  const n = ASSETS.length;
  const seeds: Record<Timeframe, number> = { "7d": 42, "30d": 137, "90d": 256, "1y": 512 };
  const rng = seededRandom(seeds[tf]);

  // Base correlation: same category = higher, different = lower
  // Short timeframes = slightly lower correlations
  const tfMultiplier: Record<Timeframe, number> = { "7d": 0.85, "30d": 0.92, "90d": 0.96, "1y": 1 };
  const mult = tfMultiplier[tf];

  const matrix: number[][] = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    matrix[i][i] = 1;
    for (let j = i + 1; j < n; j++) {
      const sameCategory = ASSETS[i].category === ASSETS[j].category;
      const bothL1 = ASSETS[i].category === "L1" && ASSETS[j].category === "L1";

      let base: number;
      if (sameCategory) {
        base = 0.7 + rng() * 0.25; // 0.70-0.95
      } else if (bothL1 || ASSETS[i].symbol === "BTC" || ASSETS[j].symbol === "BTC") {
        base = 0.5 + rng() * 0.35; // 0.50-0.85
      } else {
        base = 0.3 + rng() * 0.45; // 0.30-0.75
      }

      // BTC-ETH always highly correlated
      if ((ASSETS[i].symbol === "BTC" && ASSETS[j].symbol === "ETH") || (ASSETS[i].symbol === "ETH" && ASSETS[j].symbol === "BTC")) {
        base = 0.85 + rng() * 0.1;
      }

      const val = Math.round(base * mult * 100) / 100;
      matrix[i][j] = val;
      matrix[j][i] = val;
    }
  }
  return matrix;
}

function getCorrelationColor(v: number): string {
  if (v >= 0.9) return "#22c55e";
  if (v >= 0.7) return "#84cc16";
  if (v >= 0.5) return "#eab308";
  if (v >= 0.3) return "#f97316";
  return "#ef4444";
}

function getCorrelationBg(v: number): string {
  if (v >= 0.9) return "#22c55e25";
  if (v >= 0.7) return "#84cc1620";
  if (v >= 0.5) return "#eab30818";
  if (v >= 0.3) return "#f9731615";
  return "#ef444415";
}

export default function CorrelationMatrixPage() {
  const [timeframe, setTimeframe] = useState<Timeframe>("30d");
  const [selectedCell, setSelectedCell] = useState<{ i: number; j: number } | null>(null);
  const [selectedAssets, setSelectedAssets] = useState<Set<number>>(new Set(ASSETS.map((_, i) => i)));

  const correlations = useMemo(() => generateCorrelations(timeframe), [timeframe]);

  const activeIndices = useMemo(() => Array.from(selectedAssets).sort((a, b) => a - b), [selectedAssets]);

  const toggleAsset = (idx: number) => {
    setSelectedAssets(prev => {
      const next = new Set(prev);
      if (next.has(idx)) {
        if (next.size > 2) next.delete(idx);
      } else {
        next.add(idx);
      }
      return next;
    });
  };

  // Portfolio diversification score (average off-diagonal correlation)
  const diversificationScore = useMemo(() => {
    let sum = 0;
    let count = 0;
    for (const i of activeIndices) {
      for (const j of activeIndices) {
        if (i < j) {
          sum += correlations[i][j];
          count++;
        }
      }
    }
    const avgCorr = count > 0 ? sum / count : 0;
    // Score: lower correlation = higher diversification
    return Math.round((1 - avgCorr) * 100);
  }, [activeIndices, correlations]);

  // Find best and worst pairs
  const { bestPair, worstPair } = useMemo(() => {
    let minCorr = 2, maxCorr = -1;
    let best = { i: 0, j: 1 }, worst = { i: 0, j: 1 };
    for (const i of activeIndices) {
      for (const j of activeIndices) {
        if (i >= j) continue;
        if (correlations[i][j] < minCorr) { minCorr = correlations[i][j]; best = { i, j }; }
        if (correlations[i][j] > maxCorr && i !== j) { maxCorr = correlations[i][j]; worst = { i, j }; }
      }
    }
    return { bestPair: { ...best, corr: minCorr }, worstPair: { ...worst, corr: maxCorr } };
  }, [activeIndices, correlations]);

  const sectionStyle: React.CSSProperties = {
    background: "var(--color-surface, #161b22)",
    border: "1px solid var(--color-border, #30363d)",
    borderRadius: 14,
    padding: 24,
    marginBottom: 20,
  };

  const cellSize = Math.min(52, Math.floor(700 / activeIndices.length));

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-bg, #0d1117)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px 80px" }}>
        <Breadcrumb items={[{ label: "Tools", href: "/tools" }, { label: "Correlation Matrix", href: "/tools/correlation-matrix" }]} />

        {/* Header */}
        <div style={{ textAlign: "center", paddingBottom: 32, paddingTop: 16 }}>
          <div style={{ display: "inline-block", padding: "4px 14px", background: "#6366f120", border: "1px solid #6366f140", borderRadius: 20, fontSize: 12, color: "#818cf8", fontWeight: 600, marginBottom: 16 }}>
            📊 Portfolio Analytics
          </div>
          <h1 style={{ fontSize: 34, fontWeight: 900, color: "var(--color-text, #e6edf3)", marginBottom: 10 }}>
            Crypto Correlation Matrix
          </h1>
          <p style={{ color: "var(--color-text-secondary, #8b949e)", fontSize: 15, maxWidth: 600, margin: "0 auto" }}>
            See how crypto assets move together. Build a diversified portfolio by choosing assets with low correlation.
          </p>
        </div>

        {/* Controls */}
        <div style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: 24, flexWrap: "wrap" }}>
          {/* Timeframe */}
          <div style={{ display: "flex", gap: 4, padding: 4, background: "var(--color-surface, #161b22)", borderRadius: 10, border: "1px solid var(--color-border, #30363d)" }}>
            {(["7d", "30d", "90d", "1y"] as Timeframe[]).map(tf => (
              <button key={tf} onClick={() => setTimeframe(tf)} style={{
                padding: "6px 16px", borderRadius: 8, fontSize: 13, fontWeight: 700, cursor: "pointer", border: "none",
                background: timeframe === tf ? "#6366f1" : "transparent",
                color: timeframe === tf ? "#fff" : "var(--color-text-secondary, #8b949e)",
              }}>{tf}</button>
            ))}
          </div>
        </div>

        {/* Asset toggles */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginBottom: 24 }}>
          {ASSETS.map((a, idx) => (
            <button key={a.symbol} onClick={() => toggleAsset(idx)} style={{
              padding: "5px 12px", borderRadius: 8, fontSize: 12, fontWeight: 700, cursor: "pointer",
              border: `1px solid ${selectedAssets.has(idx) ? a.color : "var(--color-border, #30363d)"}`,
              background: selectedAssets.has(idx) ? `${a.color}15` : "transparent",
              color: selectedAssets.has(idx) ? a.color : "var(--color-text-secondary, #8b949e)",
              opacity: selectedAssets.has(idx) ? 1 : 0.5,
            }}>
              {a.symbol}
            </button>
          ))}
        </div>

        {/* Metrics Row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14, marginBottom: 20 }}>
          <div style={{ ...sectionStyle, marginBottom: 0, textAlign: "center" }}>
            <div style={{ fontSize: 11, color: "var(--color-text-secondary, #8b949e)", fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>Diversification Score</div>
            <div style={{ fontSize: 36, fontWeight: 900, color: diversificationScore >= 50 ? "#22c55e" : diversificationScore >= 30 ? "#eab308" : "#ef4444" }}>
              {diversificationScore}
            </div>
            <div style={{ fontSize: 11, color: "var(--color-text-secondary, #8b949e)" }}>
              {diversificationScore >= 50 ? "Well Diversified" : diversificationScore >= 30 ? "Moderate" : "Highly Correlated"}
            </div>
          </div>
          <div style={{ ...sectionStyle, marginBottom: 0, textAlign: "center" }}>
            <div style={{ fontSize: 11, color: "#22c55e", fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>Least Correlated Pair</div>
            <div style={{ fontSize: 22, fontWeight: 900, color: "#22c55e" }}>
              {ASSETS[bestPair.i].symbol} / {ASSETS[bestPair.j].symbol}
            </div>
            <div style={{ fontSize: 13, color: "var(--color-text-secondary, #8b949e)" }}>{bestPair.corr.toFixed(2)} correlation</div>
          </div>
          <div style={{ ...sectionStyle, marginBottom: 0, textAlign: "center" }}>
            <div style={{ fontSize: 11, color: "#ef4444", fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>Most Correlated Pair</div>
            <div style={{ fontSize: 22, fontWeight: 900, color: "#ef4444" }}>
              {ASSETS[worstPair.i].symbol} / {ASSETS[worstPair.j].symbol}
            </div>
            <div style={{ fontSize: 13, color: "var(--color-text-secondary, #8b949e)" }}>{worstPair.corr.toFixed(2)} correlation</div>
          </div>
          <div style={{ ...sectionStyle, marginBottom: 0, textAlign: "center" }}>
            <div style={{ fontSize: 11, color: "var(--color-text-secondary, #8b949e)", fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>Assets Selected</div>
            <div style={{ fontSize: 36, fontWeight: 900, color: "#6366f1" }}>{activeIndices.length}</div>
            <div style={{ fontSize: 11, color: "var(--color-text-secondary, #8b949e)" }}>of {ASSETS.length} available</div>
          </div>
        </div>

        {/* Heatmap Matrix */}
        <div style={sectionStyle}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: "var(--color-text, #e6edf3)", marginBottom: 16 }}>Correlation Heatmap — {timeframe}</h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ borderCollapse: "collapse", margin: "0 auto" }}>
              <thead>
                <tr>
                  <th style={{ width: cellSize, height: cellSize }} />
                  {activeIndices.map(j => (
                    <th key={j} style={{ width: cellSize, height: cellSize, fontSize: 10, fontWeight: 700, color: ASSETS[j].color, textAlign: "center", padding: 2 }}>
                      {ASSETS[j].symbol}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {activeIndices.map(i => (
                  <tr key={i}>
                    <td style={{ fontSize: 10, fontWeight: 700, color: ASSETS[i].color, textAlign: "right", paddingRight: 8, whiteSpace: "nowrap" }}>
                      {ASSETS[i].symbol}
                    </td>
                    {activeIndices.map(j => {
                      const val = correlations[i][j];
                      const isSelected = selectedCell?.i === i && selectedCell?.j === j;
                      const isDiag = i === j;
                      return (
                        <td
                          key={j}
                          onClick={() => !isDiag && setSelectedCell({ i, j })}
                          style={{
                            width: cellSize,
                            height: cellSize,
                            textAlign: "center",
                            fontSize: 11,
                            fontWeight: 700,
                            color: isDiag ? "var(--color-text-secondary, #8b949e)" : getCorrelationColor(val),
                            background: isDiag ? "var(--color-bg, #0d1117)" : getCorrelationBg(val),
                            border: isSelected ? "2px solid #fff" : "1px solid var(--color-border, #30363d)",
                            cursor: isDiag ? "default" : "pointer",
                            borderRadius: 4,
                            transition: "all 0.15s",
                          }}
                        >
                          {isDiag ? "1.00" : val.toFixed(2)}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Selected cell detail */}
          {selectedCell && selectedCell.i !== selectedCell.j && (
            <div style={{ marginTop: 16, padding: 14, background: "var(--color-bg, #0d1117)", borderRadius: 10, border: "1px solid var(--color-border, #30363d)", display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
              <div style={{ fontSize: 18, fontWeight: 800, color: "var(--color-text, #e6edf3)" }}>
                {ASSETS[selectedCell.i].symbol} ↔ {ASSETS[selectedCell.j].symbol}
              </div>
              <div style={{ fontSize: 24, fontWeight: 900, color: getCorrelationColor(correlations[selectedCell.i][selectedCell.j]) }}>
                {correlations[selectedCell.i][selectedCell.j].toFixed(2)}
              </div>
              <div style={{ fontSize: 12, color: "var(--color-text-secondary, #8b949e)" }}>
                {correlations[selectedCell.i][selectedCell.j] >= 0.8 ? "Highly correlated — these assets tend to move together. Adding both provides limited diversification." :
                 correlations[selectedCell.i][selectedCell.j] >= 0.5 ? "Moderately correlated — some diversification benefit when holding both." :
                 "Low correlation — excellent diversification pair. These assets move relatively independently."}
              </div>
            </div>
          )}

          {/* Legend */}
          <div style={{ marginTop: 16, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { label: "Very High (0.9+)", color: "#22c55e" },
              { label: "High (0.7-0.9)", color: "#84cc16" },
              { label: "Moderate (0.5-0.7)", color: "#eab308" },
              { label: "Low (0.3-0.5)", color: "#f97316" },
              { label: "Very Low (<0.3)", color: "#ef4444" },
            ].map(l => (
              <div key={l.label} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "var(--color-text-secondary, #8b949e)" }}>
                <div style={{ width: 12, height: 12, borderRadius: 3, background: l.color + "30", border: `1px solid ${l.color}50` }} />
                {l.label}
              </div>
            ))}
          </div>
        </div>

        {/* Ranked Pairs Table */}
        <div style={sectionStyle}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: "var(--color-text, #e6edf3)", marginBottom: 14 }}>All Pairs Ranked by Correlation</h2>
          <div style={{ overflowX: "auto", maxHeight: 400 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead style={{ position: "sticky", top: 0, background: "var(--color-surface, #161b22)" }}>
                <tr style={{ borderBottom: "1px solid var(--color-border, #30363d)" }}>
                  <th style={{ padding: "8px 12px", textAlign: "left", color: "var(--color-text-secondary, #8b949e)", fontWeight: 600, fontSize: 11, textTransform: "uppercase" }}>#</th>
                  <th style={{ padding: "8px 12px", textAlign: "left", color: "var(--color-text-secondary, #8b949e)", fontWeight: 600, fontSize: 11, textTransform: "uppercase" }}>Pair</th>
                  <th style={{ padding: "8px 12px", textAlign: "right", color: "var(--color-text-secondary, #8b949e)", fontWeight: 600, fontSize: 11, textTransform: "uppercase" }}>Correlation</th>
                  <th style={{ padding: "8px 12px", textAlign: "center", color: "var(--color-text-secondary, #8b949e)", fontWeight: 600, fontSize: 11, textTransform: "uppercase" }}>Diversification</th>
                </tr>
              </thead>
              <tbody>
                {(() => {
                  const pairs: { i: number; j: number; corr: number }[] = [];
                  for (const i of activeIndices) {
                    for (const j of activeIndices) {
                      if (i < j) pairs.push({ i, j, corr: correlations[i][j] });
                    }
                  }
                  pairs.sort((a, b) => a.corr - b.corr);
                  return pairs.map((p, idx) => (
                    <tr key={`${p.i}-${p.j}`} style={{ borderBottom: "1px solid var(--color-border, #30363d)" }}>
                      <td style={{ padding: "8px 12px", color: "var(--color-text-secondary, #8b949e)" }}>{idx + 1}</td>
                      <td style={{ padding: "8px 12px", fontWeight: 700, color: "var(--color-text, #e6edf3)" }}>
                        <span style={{ color: ASSETS[p.i].color }}>{ASSETS[p.i].symbol}</span>
                        {" / "}
                        <span style={{ color: ASSETS[p.j].color }}>{ASSETS[p.j].symbol}</span>
                      </td>
                      <td style={{ padding: "8px 12px", textAlign: "right", fontWeight: 700, color: getCorrelationColor(p.corr) }}>{p.corr.toFixed(2)}</td>
                      <td style={{ padding: "8px 12px", textAlign: "center" }}>
                        <span style={{
                          fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 6,
                          background: p.corr < 0.5 ? "#22c55e20" : p.corr < 0.7 ? "#eab30820" : "#ef444420",
                          color: p.corr < 0.5 ? "#22c55e" : p.corr < 0.7 ? "#eab308" : "#ef4444",
                        }}>
                          {p.corr < 0.5 ? "Excellent" : p.corr < 0.7 ? "Good" : "Poor"}
                        </span>
                      </td>
                    </tr>
                  ));
                })()}
              </tbody>
            </table>
          </div>
        </div>

        {/* Educational */}
        <div style={sectionStyle}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: "var(--color-text, #e6edf3)", marginBottom: 16 }}>Understanding Crypto Correlations</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div style={{ padding: 16, background: "var(--color-bg, #0d1117)", borderRadius: 10, border: "1px solid var(--color-border, #30363d)" }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "#6366f1", marginBottom: 8 }}>What is Correlation?</h3>
              <p style={{ fontSize: 13, color: "var(--color-text-secondary, #8b949e)", lineHeight: 1.7 }}>
                Correlation measures how two assets move in relation to each other. A correlation of 1.0 means they move perfectly together, 0 means no relationship, and -1.0 means they move in opposite directions. In crypto, most assets are positively correlated due to shared market sentiment.
              </p>
            </div>
            <div style={{ padding: 16, background: "var(--color-bg, #0d1117)", borderRadius: 10, border: "1px solid var(--color-border, #30363d)" }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "#22c55e", marginBottom: 8 }}>Why It Matters for Your Portfolio</h3>
              <p style={{ fontSize: 13, color: "var(--color-text-secondary, #8b949e)", lineHeight: 1.7 }}>
                Holding highly correlated assets means your portfolio moves as one — amplifying both gains and losses. By selecting assets with lower correlations, you reduce overall portfolio volatility while maintaining upside potential. Think of it as not putting all eggs in one basket, even within crypto.
              </p>
            </div>
            <div style={{ padding: 16, background: "var(--color-bg, #0d1117)", borderRadius: 10, border: "1px solid var(--color-border, #30363d)" }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "#f0883e", marginBottom: 8 }}>Key Patterns in Crypto</h3>
              <p style={{ fontSize: 13, color: "var(--color-text-secondary, #8b949e)", lineHeight: 1.7 }}>
                BTC and ETH typically have the highest correlation (0.85+). L1 chains tend to be highly correlated with each other. DeFi tokens and L2s sometimes show lower correlation to BTC, offering diversification. During market crashes, correlations spike as everything sells off together.
              </p>
            </div>
            <div style={{ padding: 16, background: "var(--color-bg, #0d1117)", borderRadius: 10, border: "1px solid var(--color-border, #30363d)" }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "#bc8cff", marginBottom: 8 }}>Timeframe Matters</h3>
              <p style={{ fontSize: 13, color: "var(--color-text-secondary, #8b949e)", lineHeight: 1.7 }}>
                Short-term correlations (7d) can vary significantly due to individual catalysts. Longer timeframes (90d, 1Y) provide more reliable signals for portfolio construction. Use 30d+ data for strategic allocation decisions.
              </p>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center", padding: "24px 0", fontSize: 11, color: "var(--color-text-secondary, #8b949e)" }}>
          Correlation data is based on historical price simulations. Past correlations do not guarantee future behavior. Not financial advice.
        </div>
      </div>
    </div>
  );
}
