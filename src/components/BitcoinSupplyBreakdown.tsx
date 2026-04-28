'use client';

import { useState, useMemo } from "react";

// ── Interfaces ──────────────────────────────────────────
interface SupplyCategory {
  label: string;
  btc: number;
  color: string;
  description: string;
}

// ── Constants ───────────────────────────────────────────
const MAX_SUPPLY = 21_000_000;
const CIRCULATING_SUPPLY = 19_840_000; // ~March 2026
const YET_TO_BE_MINED = MAX_SUPPLY - CIRCULATING_SUPPLY;

const SUPPLY_CATEGORIES: SupplyCategory[] = [
  {
    label: "Long-Term Holders (>1yr)",
    btc: 14_800_000,
    color: "#6366f1",
    description: "Coins held by addresses that haven't moved BTC in over 12 months. These represent strong conviction holders unlikely to sell.",
  },
  {
    label: "Exchange Reserves",
    btc: 2_750_000,
    color: "#f59e0b",
    description: "BTC sitting on centralized exchange wallets. At 7-year lows as of March 2026, down from 3.02M in early 2025.",
  },
  {
    label: "ETF Custody",
    btc: 1_300_000,
    color: "#22c55e",
    description: "Bitcoin held by spot ETF custodians (primarily Coinbase Prime). ~6.7% of circulating supply locked in regulated funds.",
  },
  {
    label: "Lost / Unrecoverable",
    btc: 3_700_000,
    color: "#ef4444",
    description: "Estimated permanently lost coins — early mining rewards, lost keys, Satoshi's untouched ~1.1M BTC, and other inaccessible wallets.",
  },
  {
    label: "Short-Term / Active",
    btc: CIRCULATING_SUPPLY - 14_800_000 - 2_750_000 - 1_300_000 - 3_700_000,
    color: "#06b6d4",
    description: "Coins that have moved within the past year and are not on exchanges or in ETFs. Includes miners, traders, and active DeFi participants.",
  },
];

const TIMELINE_DATA = [
  { year: "2020", exchangeBtc: 3_200_000, lthPct: 62 },
  { year: "2021", exchangeBtc: 3_100_000, lthPct: 58 },
  { year: "2022", exchangeBtc: 2_900_000, lthPct: 66 },
  { year: "2023", exchangeBtc: 2_850_000, lthPct: 70 },
  { year: "2024", exchangeBtc: 3_020_000, lthPct: 72 },
  { year: "2025", exchangeBtc: 2_880_000, lthPct: 76 },
  { year: "2026", exchangeBtc: 2_750_000, lthPct: 79 },
];

// ── Helpers ─────────────────────────────────────────────
function formatBTC(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`;
  return n.toLocaleString();
}

function formatPct(n: number, total: number): string {
  return `${((n / total) * 100).toFixed(1)}%`;
}

// ── Component ───────────────────────────────────────────
export default function BitcoinSupplyBreakdown() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [view, setView] = useState<"breakdown" | "timeline">("breakdown");

  const totalTracked = useMemo(
    () => SUPPLY_CATEGORIES.reduce((s, c) => s + c.btc, 0),
    []
  );

  // Effective liquid supply (exchange + short-term active)
  const liquidSupply = useMemo(() => {
    const exchange = SUPPLY_CATEGORIES.find((c) => c.label.includes("Exchange"))?.btc ?? 0;
    const active = SUPPLY_CATEGORIES.find((c) => c.label.includes("Active"))?.btc ?? 0;
    return exchange + active;
  }, []);

  // SVG bar chart dimensions
  const BAR_WIDTH = 600;
  const BAR_HEIGHT = 36;

  // Timeline chart dimensions
  const CHART_W = 600;
  const CHART_H = 200;
  const PADDING = 40;

  return (
    <div style={{ marginBottom: 32 }}>
      {/* Tab Switcher */}
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        {(["breakdown", "timeline"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setView(tab)}
            style={{
              padding: "8px 16px",
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 700,
              border: "1px solid",
              borderColor: view === tab ? "#6366f1" : "var(--color-border)",
              background: view === tab ? "rgba(99,102,241,0.15)" : "transparent",
              color: view === tab ? "#818cf8" : "var(--color-text-secondary)",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            {tab === "breakdown" ? "Supply Breakdown" : "Historical Trend"}
          </button>
        ))}
      </div>

      {view === "breakdown" ? (
        <>
          {/* Key Metric Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12, marginBottom: 20 }}>
            {[
              { label: "Max Supply", value: "21M BTC", sub: "Hard cap, never changes", accent: "#f7931a" },
              { label: "Circulating", value: formatBTC(CIRCULATING_SUPPLY), sub: `${formatPct(CIRCULATING_SUPPLY, MAX_SUPPLY)} mined`, accent: "#6366f1" },
              { label: "Liquid Supply", value: formatBTC(liquidSupply), sub: `${formatPct(liquidSupply, CIRCULATING_SUPPLY)} of circulating`, accent: "#06b6d4" },
              { label: "Exchange Reserves", value: "2.75M", sub: "7-year low (March 2026)", accent: "#f59e0b" },
              { label: "ETF Holdings", value: "~1.3M", sub: "6.7% of circulating", accent: "#22c55e" },
              { label: "Lost Forever", value: "~3.7M", sub: "18.7% of circulating", accent: "#ef4444" },
            ].map((m) => (
              <div
                key={m.label}
                style={{
                  padding: "14px 16px",
                  background: "var(--glass-bg)",
                  border: "1px solid var(--color-border)",
                  borderRadius: 12,
                  borderLeft: `3px solid ${m.accent}`,
                }}
              >
                <div style={{ fontSize: 11, color: "var(--color-text-secondary)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>{m.label}</div>
                <div style={{ fontSize: 20, fontWeight: 800, color: "var(--color-text)", marginTop: 4 }}>{m.value}</div>
                <div style={{ fontSize: 11, color: "var(--color-text-secondary)", marginTop: 2 }}>{m.sub}</div>
              </div>
            ))}
          </div>

          {/* Supply Bar */}
          <div style={{ background: "var(--glass-bg)", border: "1px solid var(--color-border)", borderRadius: 12, padding: 20, marginBottom: 16 }}>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: "var(--color-text)", marginBottom: 12 }}>
              Circulating Supply Distribution
            </h3>
            <svg
              width="100%"
              viewBox={`0 0 ${BAR_WIDTH} ${BAR_HEIGHT + 8}`}
              style={{ overflow: "visible" }}
            >
              {(() => {
                let x = 0;
                return SUPPLY_CATEGORIES.map((cat, i) => {
                  const w = (cat.btc / totalTracked) * BAR_WIDTH;
                  const rect = (
                    <g key={cat.label}>
                      <rect
                        x={x}
                        y={4}
                        width={Math.max(w - 1, 1)}
                        height={BAR_HEIGHT}
                        rx={i === 0 ? 6 : i === SUPPLY_CATEGORIES.length - 1 ? 6 : 0}
                        fill={cat.color}
                        opacity={hoveredIndex === null || hoveredIndex === i ? 1 : 0.35}
                        style={{ cursor: "pointer", transition: "opacity 0.2s" }}
                        onMouseEnter={() => setHoveredIndex(i)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      />
                      {w > 40 && (
                        <text
                          x={x + w / 2}
                          y={BAR_HEIGHT / 2 + 7}
                          textAnchor="middle"
                          fill="white"
                          fontSize={11}
                          fontWeight={700}
                          style={{ pointerEvents: "none" }}
                        >
                          {formatPct(cat.btc, totalTracked)}
                        </text>
                      )}
                    </g>
                  );
                  x += w;
                  return rect;
                });
              })()}
            </svg>

            {/* Legend */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 16px", marginTop: 16 }}>
              {SUPPLY_CATEGORIES.map((cat, i) => (
                <div
                  key={cat.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    cursor: "pointer",
                    opacity: hoveredIndex === null || hoveredIndex === i ? 1 : 0.5,
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div style={{ width: 10, height: 10, borderRadius: 3, background: cat.color, flexShrink: 0 }} />
                  <span style={{ fontSize: 12, color: "var(--color-text-secondary)" }}>{cat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Detail Card (shown on hover) */}
          {hoveredIndex !== null && (
            <div
              style={{
                padding: 16,
                background: "var(--glass-bg)",
                border: `1px solid ${SUPPLY_CATEGORIES[hoveredIndex].color}40`,
                borderLeft: `3px solid ${SUPPLY_CATEGORIES[hoveredIndex].color}`,
                borderRadius: 12,
                marginBottom: 16,
                transition: "all 0.2s",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: SUPPLY_CATEGORIES[hoveredIndex].color }}>
                  {SUPPLY_CATEGORIES[hoveredIndex].label}
                </span>
                <span style={{ fontSize: 14, fontWeight: 800, color: "var(--color-text)" }}>
                  {formatBTC(SUPPLY_CATEGORIES[hoveredIndex].btc)} BTC
                </span>
              </div>
              <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
                {SUPPLY_CATEGORIES[hoveredIndex].description}
              </p>
            </div>
          )}

          {/* Yet to be mined callout */}
          <div style={{
            padding: 14,
            background: "rgba(247,147,26,0.08)",
            border: "1px solid rgba(247,147,26,0.25)",
            borderRadius: 10,
            fontSize: 13,
            color: "var(--color-text-secondary)",
            lineHeight: 1.6,
          }}>
            <strong style={{ color: "#f7931a" }}>⛏️ Still to be mined:</strong>{" "}
            {formatBTC(YET_TO_BE_MINED)} BTC ({formatPct(YET_TO_BE_MINED, MAX_SUPPLY)} of max supply).
            The next halving is expected in April 2028, reducing block rewards from 3.125 to 1.5625 BTC.
          </div>
        </>
      ) : (
        /* Timeline View */
        <div style={{ background: "var(--glass-bg)", border: "1px solid var(--color-border)", borderRadius: 12, padding: 20 }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: "var(--color-text)", marginBottom: 4 }}>
            Exchange Reserves vs Long-Term Holder %
          </h3>
          <p style={{ fontSize: 12, color: "var(--color-text-secondary)", marginBottom: 16 }}>
            As exchange reserves decline, long-term holder dominance increases — a classic supply shock setup.
          </p>
          <svg width="100%" viewBox={`0 0 ${CHART_W} ${CHART_H + 40}`} style={{ overflow: "visible" }}>
            {/* Grid lines */}
            {[0, 1, 2, 3, 4].map((i) => {
              const y = PADDING + (i / 4) * (CHART_H - PADDING);
              return (
                <line key={i} x1={PADDING} y1={y} x2={CHART_W - 10} y2={y} stroke="var(--color-border)" strokeWidth={0.5} />
              );
            })}

            {/* Exchange reserves bars */}
            {TIMELINE_DATA.map((d, i) => {
              const barW = 32;
              const x = PADDING + (i / (TIMELINE_DATA.length - 1)) * (CHART_W - PADDING - 50);
              const maxBtc = 3_500_000;
              const h = ((d.exchangeBtc / maxBtc) * (CHART_H - PADDING));
              const y = CHART_H - h + PADDING;
              return (
                <g key={d.year}>
                  <rect
                    x={x - barW / 2}
                    y={y}
                    width={barW}
                    height={h}
                    rx={4}
                    fill="#f59e0b"
                    opacity={0.6}
                  />
                  <text x={x} y={CHART_H + PADDING + 16} textAnchor="middle" fill="var(--color-text-secondary)" fontSize={11}>
                    {d.year}
                  </text>
                  <text x={x} y={y - 6} textAnchor="middle" fill="#f59e0b" fontSize={10} fontWeight={600}>
                    {(d.exchangeBtc / 1_000_000).toFixed(2)}M
                  </text>
                </g>
              );
            })}

            {/* LTH % line */}
            <polyline
              points={TIMELINE_DATA.map((d, i) => {
                const x = PADDING + (i / (TIMELINE_DATA.length - 1)) * (CHART_W - PADDING - 50);
                const y = CHART_H + PADDING - ((d.lthPct / 100) * (CHART_H - PADDING));
                return `${x},${y}`;
              }).join(" ")}
              fill="none"
              stroke="#6366f1"
              strokeWidth={2.5}
              strokeLinejoin="round"
            />
            {TIMELINE_DATA.map((d, i) => {
              const x = PADDING + (i / (TIMELINE_DATA.length - 1)) * (CHART_W - PADDING - 50);
              const y = CHART_H + PADDING - ((d.lthPct / 100) * (CHART_H - PADDING));
              return (
                <g key={`dot-${d.year}`}>
                  <circle cx={x} cy={y} r={4} fill="#6366f1" />
                  <text x={x} y={y - 10} textAnchor="middle" fill="#818cf8" fontSize={10} fontWeight={600}>
                    {d.lthPct}%
                  </text>
                </g>
              );
            })}

            {/* Legend */}
            <g transform={`translate(${CHART_W - 200}, 10)`}>
              <rect x={0} y={0} width={10} height={10} rx={2} fill="#f59e0b" opacity={0.6} />
              <text x={14} y={9} fill="var(--color-text-secondary)" fontSize={10}>Exchange Reserves (BTC)</text>
              <line x1={0} y1={20} x2={10} y2={20} stroke="#6366f1" strokeWidth={2.5} />
              <text x={14} y={24} fill="var(--color-text-secondary)" fontSize={10}>Long-Term Holder %</text>
            </g>
          </svg>
        </div>
      )}
    </div>
  );
}
