"use client";

import { useState, useMemo } from "react";

// ── Interfaces ───────────────────────────────────────────────────────────────

interface SovereignHolder {
  country: string;
  flag: string;
  btcHeld: number;
  acquisitionMethod: string;
  status: "active" | "proposed" | "mining";
  since: string;
  notes: string;
}

// ── Constants ────────────────────────────────────────────────────────────────

const BTC_TOTAL_SUPPLY = 21_000_000;

// Static data — sovereign holdings as of March 2026
const SOVEREIGN_DATA: SovereignHolder[] = [
  {
    country: "United States",
    flag: "🇺🇸",
    btcHeld: 325_000,
    acquisitionMethod: "Law enforcement seizures",
    status: "active",
    since: "2026",
    notes: "Formally designated Strategic Bitcoin Reserve in March 2026. Largest sovereign holder globally.",
  },
  {
    country: "Bhutan",
    flag: "🇧🇹",
    btcHeld: 13_000,
    acquisitionMethod: "State hydropower mining",
    status: "mining",
    since: "2019",
    notes: "Druk Holding & Investments mines BTC using surplus renewable hydro energy.",
  },
  {
    country: "El Salvador",
    flag: "🇸🇻",
    btcHeld: 7_508,
    acquisitionMethod: "Treasury purchases",
    status: "active",
    since: "2021",
    notes: "First country to make Bitcoin legal tender. Publicly tracked via National Bitcoin Office.",
  },
  {
    country: "Brazil",
    flag: "🇧🇷",
    btcHeld: 0,
    acquisitionMethod: "Proposed legislation (RESBit)",
    status: "proposed",
    since: "2026",
    notes: "Congress proposed accumulating up to 1,000,000 BTC over 5 years — ~5% of total supply.",
  },
  {
    country: "Pakistan",
    flag: "🇵🇰",
    btcHeld: 0,
    acquisitionMethod: "Government directive",
    status: "proposed",
    since: "2026",
    notes: "Announced strategic Bitcoin reserve framework in 2026. Holdings not yet publicly disclosed.",
  },
];

// ── Helpers ──────────────────────────────────────────────────────────────────

function formatBTC(n: number): string {
  if (n === 0) return "—";
  return n.toLocaleString() + " BTC";
}

function formatUSD(btc: number, priceUSD: number): string {
  const val = btc * priceUSD;
  if (val >= 1_000_000_000) return `$${(val / 1_000_000_000).toFixed(1)}B`;
  if (val >= 1_000_000) return `$${(val / 1_000_000).toFixed(1)}M`;
  return `$${val.toLocaleString()}`;
}

const STATUS_CONFIG: Record<SovereignHolder["status"], { label: string; color: string; bg: string }> = {
  active:   { label: "Active Reserve",  color: "#22c55e", bg: "#22c55e20" },
  mining:   { label: "State Mining",    color: "#0ea5e9", bg: "#0ea5e920" },
  proposed: { label: "Proposed",        color: "#f59e0b", bg: "#f59e0b20" },
};

// ── Component ────────────────────────────────────────────────────────────────

export default function SovereignBTCTracker() {
  const [expanded, setExpanded] = useState<string | null>(null);
  // Static BTC price estimate for USD display — approximate March 2026 price
  const BTC_PRICE_USD = 65_000;

  const totalConfirmedBTC = useMemo(
    () => SOVEREIGN_DATA.filter((h) => h.btcHeld > 0).reduce((s, h) => s + h.btcHeld, 0),
    []
  );

  const percentOfSupply = ((totalConfirmedBTC / BTC_TOTAL_SUPPLY) * 100).toFixed(2);
  const maxBTC = Math.max(...SOVEREIGN_DATA.map((h) => h.btcHeld));

  return (
    <div
      style={{
        background: "#161b22",
        border: "1px solid #30363d",
        borderRadius: 16,
        overflow: "hidden",
        margin: "2rem 0",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "1rem 1.25rem",
          borderBottom: "1px solid #30363d",
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h3 style={{ color: "#f7931a", fontWeight: 800, fontSize: 15, margin: 0 }}>
            ₿ Sovereign Bitcoin Holdings Tracker
          </h3>
          <p style={{ color: "#8b949e", fontSize: 12, margin: "4px 0 0" }}>
            Updated March 2026 · Confirmed + proposed government BTC holdings
          </p>
        </div>
        <div
          style={{
            background: "#f7931a18",
            border: "1px solid #f7931a40",
            borderRadius: 10,
            padding: "6px 14px",
            textAlign: "center",
          }}
        >
          <div style={{ color: "#f7931a", fontWeight: 800, fontSize: 18 }}>
            {totalConfirmedBTC.toLocaleString()} BTC
          </div>
          <div style={{ color: "#8b949e", fontSize: 11 }}>
            {percentOfSupply}% of supply · ~{formatUSD(totalConfirmedBTC, BTC_PRICE_USD)}
          </div>
        </div>
      </div>

      {/* Rows */}
      <div>
        {SOVEREIGN_DATA.map((holder, i) => {
          const isExpanded = expanded === holder.country;
          const barWidth = holder.btcHeld > 0 ? (holder.btcHeld / maxBTC) * 100 : 3;
          const cfg = STATUS_CONFIG[holder.status];

          return (
            <div key={holder.country}>
              <button
                onClick={() => setExpanded(isExpanded ? null : holder.country)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  background: i % 2 === 0 ? "transparent" : "#ffffff04",
                  border: "none",
                  borderBottom: "1px solid #21262d",
                  padding: "0.875rem 1.25rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#ffffff08")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = i % 2 === 0 ? "transparent" : "#ffffff04")
                }
              >
                {/* Flag + Country */}
                <span style={{ fontSize: 20, flexShrink: 0 }}>{holder.flag}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      flexWrap: "wrap",
                      marginBottom: 6,
                    }}
                  >
                    <span style={{ color: "#e6edf3", fontWeight: 700, fontSize: 14 }}>
                      {holder.country}
                    </span>
                    <span
                      style={{
                        background: cfg.bg,
                        color: cfg.color,
                        fontSize: 10,
                        fontWeight: 700,
                        padding: "2px 8px",
                        borderRadius: 6,
                        flexShrink: 0,
                      }}
                    >
                      {cfg.label}
                    </span>
                  </div>
                  {/* Bar chart row */}
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div
                      style={{
                        flex: 1,
                        height: 6,
                        background: "#30363d",
                        borderRadius: 3,
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: `${barWidth}%`,
                          height: "100%",
                          background:
                            holder.status === "proposed"
                              ? "repeating-linear-gradient(45deg, #f59e0b40, #f59e0b40 4px, transparent 4px, transparent 8px)"
                              : `linear-gradient(90deg, ${cfg.color}, ${cfg.color}88)`,
                          borderRadius: 3,
                        }}
                      />
                    </div>
                    <span
                      style={{
                        color: holder.btcHeld > 0 ? "#f7931a" : "#8b949e",
                        fontWeight: 700,
                        fontSize: 13,
                        minWidth: 90,
                        textAlign: "right",
                        flexShrink: 0,
                      }}
                    >
                      {formatBTC(holder.btcHeld)}
                    </span>
                    {holder.btcHeld > 0 && (
                      <span
                        style={{
                          color: "#8b949e",
                          fontSize: 11,
                          minWidth: 70,
                          textAlign: "right",
                          flexShrink: 0,
                        }}
                      >
                        ~{formatUSD(holder.btcHeld, BTC_PRICE_USD)}
                      </span>
                    )}
                    <span style={{ color: "#8b949e", fontSize: 14, flexShrink: 0 }}>
                      {isExpanded ? "▲" : "▼"}
                    </span>
                  </div>
                </div>
              </button>

              {/* Expanded detail */}
              {isExpanded && (
                <div
                  style={{
                    padding: "0.875rem 1.25rem 0.875rem 3.5rem",
                    background: "#0d1117",
                    borderBottom: "1px solid #21262d",
                  }}
                >
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                      gap: "0.75rem",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {[
                      { label: "Acquisition Method", value: holder.acquisitionMethod },
                      { label: "Since", value: holder.since },
                      {
                        label: "Approx. Value",
                        value: holder.btcHeld > 0 ? formatUSD(holder.btcHeld, BTC_PRICE_USD) : "N/A",
                      },
                      {
                        label: "% of Supply",
                        value:
                          holder.btcHeld > 0
                            ? `${((holder.btcHeld / BTC_TOTAL_SUPPLY) * 100).toFixed(3)}%`
                            : "N/A",
                      },
                    ].map((item) => (
                      <div key={item.label}>
                        <div style={{ color: "#8b949e", fontSize: 11, marginBottom: 2 }}>
                          {item.label}
                        </div>
                        <div style={{ color: "#e6edf3", fontSize: 13, fontWeight: 600 }}>
                          {item.value}
                        </div>
                      </div>
                    ))}
                  </div>
                  <p style={{ color: "#8b949e", fontSize: 12, lineHeight: 1.6, margin: 0 }}>
                    {holder.notes}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div
        style={{
          padding: "0.75rem 1.25rem",
          borderTop: "1px solid #30363d",
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {Object.entries(STATUS_CONFIG).map(([key, cfg]) => (
          <div key={key} style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11 }}>
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: cfg.color,
              }}
            />
            <span style={{ color: "#8b949e" }}>{cfg.label}</span>
          </div>
        ))}
        <span style={{ color: "#8b949e", fontSize: 11, marginLeft: "auto" }}>
          BTC price approx. $65K · Click row to expand details
        </span>
      </div>
    </div>
  );
}
