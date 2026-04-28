'use client';

import { useState, useMemo } from "react";

// ── Interfaces ───────────────────────────────────────────────────────────────
interface UnlockEvent {
  date: string;
  amount: number; // millions of MOVE
  cumulative: number;
  daysFromNow: number;
}

interface AllocationGroup {
  name: string;
  totalTokens: number; // billions
  color: string;
  pct: number;
}

// ── Constants ────────────────────────────────────────────────────────────────
const TOTAL_SUPPLY = 10_000_000_000; // 10B
const MONTHLY_UNLOCK_M = 170; // ~170M per month

const ALLOCATIONS: AllocationGroup[] = [
  { name: "Ecosystem & Community", totalTokens: 3.0, color: "#6366f1", pct: 30 },
  { name: "Early Backers",         totalTokens: 2.25, color: "#f85149", pct: 22.5 },
  { name: "Early Contributors",    totalTokens: 1.75, color: "#d29922", pct: 17.5 },
  { name: "Foundation",            totalTokens: 1.5,  color: "#58a6ff", pct: 15 },
  { name: "Initial Claims",        totalTokens: 1.5,  color: "#22c55e", pct: 15 },
];

// Generate next 12 monthly unlock events from Mar 2026
function generateUnlocks(): UnlockEvent[] {
  const events: UnlockEvent[] = [];
  const baseDate = new Date("2026-03-09");
  // Already passed for Mar 2026 — start from Apr
  for (let i = 0; i < 12; i++) {
    const d = new Date(baseDate);
    d.setMonth(d.getMonth() + i + 1);
    const now = new Date("2026-03-16");
    const daysFromNow = Math.round((d.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    events.push({
      date: d.toLocaleDateString("en-US", { month: "short", year: "numeric", day: "numeric" }),
      amount: MONTHLY_UNLOCK_M,
      cumulative: Math.round(3344 + MONTHLY_UNLOCK_M * (i + 1)), // ~3344M already unlocked
      daysFromNow,
    });
  }
  return events;
}

function fmtM(val: number): string {
  if (val >= 1000) return `${(val / 1000).toFixed(2)}B`;
  return `${val}M`;
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function MoveTokenUnlockTracker() {
  const [activeTab, setActiveTab] = useState<"schedule" | "allocation">("schedule");
  const unlocks = useMemo(() => generateUnlocks(), []);

  const circulatingPct = ((3344 / (TOTAL_SUPPLY / 1_000_000)) * 100).toFixed(1);
  const lockedPct = (100 - parseFloat(circulatingPct)).toFixed(1);

  return (
    <div style={{
      background: "var(--glass-bg, #161b22)",
      border: "1px solid var(--glass-border, #30363d)",
      borderRadius: 16,
      padding: "1.5rem",
      marginTop: "2rem",
      marginBottom: "2rem",
    }}>

      {/* Header */}
      <div style={{ marginBottom: 20 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, color: "#e6edf3", margin: 0 }}>
          📊 $MOVE Token Unlock Tracker
        </h2>
        <p style={{ color: "#8b949e", fontSize: 13, marginTop: 6, marginBottom: 0 }}>
          ~170M MOVE unlocks on the 9th of every month. Data as of March 2026.
        </p>
      </div>

      {/* Summary cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
        gap: 10, marginBottom: 20,
      }}>
        {[
          { label: "Total Supply", value: "10B MOVE", color: "#e6edf3" },
          { label: "Circulating", value: `~${circulatingPct}%`, color: "#22c55e" },
          { label: "Still Locked", value: `~${lockedPct}%`, color: "#f85149" },
          { label: "Monthly Unlock", value: `${MONTHLY_UNLOCK_M}M MOVE`, color: "#d29922" },
        ].map(({ label, value, color }) => (
          <div key={label} style={{
            background: "#0d1117",
            border: "1px solid #21262d",
            borderRadius: 10, padding: "12px 14px",
          }}>
            <div style={{ fontSize: 12, color: "#8b949e", marginBottom: 4 }}>{label}</div>
            <div style={{ fontSize: 16, fontWeight: 800, color }}>{value}</div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        {(["schedule", "allocation"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: "6px 16px",
              borderRadius: 20,
              border: "1px solid",
              borderColor: activeTab === tab ? "#6366f1" : "#30363d",
              background: activeTab === tab ? "rgba(99,102,241,0.15)" : "transparent",
              color: activeTab === tab ? "#818cf8" : "#8b949e",
              fontSize: 13, fontWeight: 600, cursor: "pointer",
            }}
          >
            {tab === "schedule" ? "Unlock Schedule" : "Allocation Breakdown"}
          </button>
        ))}
      </div>

      {/* Tab: Schedule */}
      {activeTab === "schedule" && (
        <div>
          <div style={{ overflowX: "auto" }}>
            <table style={{
              width: "100%", borderCollapse: "collapse",
              fontSize: 13, color: "#c9d1d9",
            }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #30363d" }}>
                  {["Unlock Date", "Days Away", "Amount Unlocked", "Total Circulating"].map(h => (
                    <th key={h} style={{
                      padding: "8px 12px", textAlign: "left",
                      color: "#8b949e", fontWeight: 600, fontSize: 11,
                      whiteSpace: "nowrap",
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {unlocks.map((ev, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #21262d" }}>
                    <td style={{ padding: "9px 12px", fontWeight: 600, color: "#e6edf3" }}>
                      {ev.date}
                    </td>
                    <td style={{ padding: "9px 12px" }}>
                      <span style={{
                        padding: "2px 8px", borderRadius: 4,
                        background: ev.daysFromNow <= 30 ? "#d2992225" : "#30363d",
                        color: ev.daysFromNow <= 30 ? "#d29922" : "#8b949e",
                        fontSize: 12, fontWeight: 600,
                      }}>
                        {ev.daysFromNow}d
                      </span>
                    </td>
                    <td style={{ padding: "9px 12px", color: "#f85149", fontWeight: 600 }}>
                      +{fmtM(ev.amount)} MOVE
                    </td>
                    <td style={{ padding: "9px 12px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div style={{
                          width: 80, height: 6, background: "#21262d", borderRadius: 3,
                        }}>
                          <div style={{
                            width: `${(ev.cumulative / 10000) * 100}%`,
                            height: "100%", background: "#6366f1", borderRadius: 3,
                          }} />
                        </div>
                        <span style={{ fontSize: 12, color: "#8b949e" }}>
                          {fmtM(ev.cumulative)} ({((ev.cumulative / 10000) * 100).toFixed(1)}%)
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ color: "#8b949e", fontSize: 12, marginTop: 12, marginBottom: 0 }}>
            * Amounts are approximate. Full vesting schedule extends through 2029. Verify with official Movement Foundation sources.
          </p>
        </div>
      )}

      {/* Tab: Allocation */}
      {activeTab === "allocation" && (
        <div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {ALLOCATIONS.map(({ name, totalTokens, color, pct }) => (
              <div key={name} style={{
                background: "#0d1117", border: "1px solid #21262d",
                borderRadius: 10, padding: "14px 16px",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, alignItems: "center" }}>
                  <span style={{ fontWeight: 700, color: "#e6edf3", fontSize: 14 }}>{name}</span>
                  <span style={{ fontWeight: 800, color, fontSize: 15 }}>{pct}%</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{
                    flex: 1, height: 8, background: "#21262d", borderRadius: 4,
                  }}>
                    <div style={{
                      width: `${pct}%`, height: "100%",
                      background: color, borderRadius: 4,
                    }} />
                  </div>
                  <span style={{ fontSize: 12, color: "#8b949e", whiteSpace: "nowrap" }}>
                    {totalTokens}B MOVE
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div style={{
            background: "#161b22", border: "1px solid #30363d",
            borderRadius: 10, padding: 14, marginTop: 16,
          }}>
            <p style={{ color: "#8b949e", fontSize: 13, lineHeight: 1.6, margin: 0 }}>
              💡 <strong style={{ color: "#e6edf3" }}>Community-first allocation:</strong> 60% of all MOVE is reserved for the ecosystem — split across Ecosystem & Community (30%), Foundation (15%), and Initial Claims (15%). This is significantly more community-oriented than most VC-backed L1s.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
