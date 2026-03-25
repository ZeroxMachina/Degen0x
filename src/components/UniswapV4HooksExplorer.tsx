'use client';

import { useState } from "react";

// ── Interfaces ───────────────────────────────────────────────────────────────
interface HookPoint {
  id: string;
  name: string;
  phase: "swap" | "liquidity" | "init";
  timing: "before" | "after";
  description: string;
  examples: string[];
  riskLevel: "low" | "medium" | "high";
}

// ── Data ─────────────────────────────────────────────────────────────────────
const HOOK_POINTS: HookPoint[] = [
  {
    id: "before-init",
    name: "beforeInitialize",
    phase: "init",
    timing: "before",
    description: "Fires before the pool is created. Use this to enforce who can deploy pools with this Hook — e.g., allowlist of deployers, minimum liquidity requirements, or custom initialization parameters.",
    examples: ["Allowlist deployer addresses", "Require minimum initial liquidity", "Set custom tick spacing"],
    riskLevel: "low",
  },
  {
    id: "after-init",
    name: "afterInitialize",
    phase: "init",
    timing: "after",
    description: "Fires immediately after pool creation. Ideal for bootstrapping initial state, registering the pool with an external system, or setting up data structures the Hook needs to track over time.",
    examples: ["Bootstrap initial state", "Register with external registry", "Initialize TWAMM order tracking"],
    riskLevel: "low",
  },
  {
    id: "before-add",
    name: "beforeAddLiquidity",
    phase: "liquidity",
    timing: "before",
    description: "Fires before any LP deposit. Powerful for gating who can provide liquidity — KYC pools, allowlisted LPs, or lock-up enforcement. The Hook can reject the transaction entirely if conditions aren't met.",
    examples: ["KYC identity verification", "Allowlist LP addresses", "Enforce minimum deposit size"],
    riskLevel: "medium",
  },
  {
    id: "after-add",
    name: "afterAddLiquidity",
    phase: "liquidity",
    timing: "after",
    description: "Fires after a successful LP deposit. Use this to issue custom LP receipt tokens, trigger reward mechanics, or update position accounting for auto-compounding strategies.",
    examples: ["Mint custom LP receipt tokens", "Trigger staking rewards", "Update position index for auto-compound"],
    riskLevel: "medium",
  },
  {
    id: "before-remove",
    name: "beforeRemoveLiquidity",
    phase: "liquidity",
    timing: "before",
    description: "Fires before an LP withdrawal. Enforce lock-up periods here — reject withdrawals before a time threshold has passed. Can also calculate and apply exit fees before capital leaves the pool.",
    examples: ["Enforce lock-up periods", "Calculate exit fees", "Trigger auto-harvest before exit"],
    riskLevel: "medium",
  },
  {
    id: "after-remove",
    name: "afterRemoveLiquidity",
    phase: "liquidity",
    timing: "after",
    description: "Fires after a successful LP withdrawal. Use to send earned rewards, clean up position data, or push final accounting to external yield strategies.",
    examples: ["Send accumulated rewards", "Clean up position state", "Push final yield to external protocol"],
    riskLevel: "low",
  },
  {
    id: "before-swap",
    name: "beforeSwap",
    phase: "swap",
    timing: "before",
    description: "Fires before every swap. The highest-impact Hook point — enables dynamic fees that adjust in real time, TWAMM execution, MEV protection by inspecting the swap context before execution, or allowlist enforcement on who can trade.",
    examples: ["Calculate dynamic fees based on volatility", "Execute TWAMM orders", "Block non-allowlisted traders", "Apply MEV protection logic"],
    riskLevel: "high",
  },
  {
    id: "after-swap",
    name: "afterSwap",
    phase: "swap",
    timing: "after",
    description: "Fires after every swap completes. Use to share MEV revenue back to LPs, update on-chain oracles, trigger auto-rebalancing of concentrated liquidity positions, or record volume data for reward calculations.",
    examples: ["Redistribute MEV revenue to LPs", "Update on-chain price oracle", "Auto-rebalance LP position", "Record volume for token rewards"],
    riskLevel: "high",
  },
];

const PHASE_COLORS = {
  init: { bg: "#8b5cf620", color: "#a78bfa", border: "#8b5cf640", label: "Initialization" },
  swap: { bg: "#06b6d420", color: "#22d3ee", border: "#06b6d440", label: "Swap" },
  liquidity: { bg: "#22c55e20", color: "#4ade80", border: "#22c55e40", label: "Liquidity" },
};

const RISK_COLORS = {
  low: { color: "#4ade80", label: "Low Risk" },
  medium: { color: "#fbbf24", label: "Medium Risk" },
  high: { color: "#f87171", label: "High Risk" },
};

// ── Component ────────────────────────────────────────────────────────────────
export default function UniswapV4HooksExplorer() {
  const [selectedHook, setSelectedHook] = useState<HookPoint>(HOOK_POINTS[6]); // beforeSwap default
  const [activePhase, setActivePhase] = useState<"all" | "swap" | "liquidity" | "init">("all");
  const [mobileDetailOpen, setMobileDetailOpen] = useState(false);

  const filteredHooks = activePhase === "all"
    ? HOOK_POINTS
    : HOOK_POINTS.filter((h) => h.phase === activePhase);

  return (
    <div style={{
      background: "#161b22",
      border: "1px solid #30363d",
      borderRadius: 14,
      overflow: "hidden",
      marginBottom: 8,
    }}>
      <style>{`
        @media (max-width: 640px) {
          .hooks-grid { grid-template-columns: 1fr !important; }
          .hooks-list-col { border-right: none !important; border-bottom: 1px solid #30363d; }
        }
      `}</style>
      {/* Header */}
      <div style={{
        padding: "16px 20px",
        borderBottom: "1px solid #30363d",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 10,
      }}>
        <div>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: "#e6edf3", margin: 0, marginBottom: 2 }}>
            🔧 Hook Lifecycle Explorer
          </h3>
          <p style={{ fontSize: 12, color: "#8b949e", margin: 0 }}>
            Click any hook point to see what you can build with it
          </p>
        </div>

        {/* Phase Filter */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {(["all", "swap", "liquidity", "init"] as const).map((phase) => (
            <button
              key={phase}
              onClick={() => setActivePhase(phase)}
              aria-pressed={activePhase === phase}
              style={{
                padding: "5px 12px",
                borderRadius: 20,
                fontSize: 11,
                fontWeight: 700,
                cursor: "pointer",
                textTransform: "capitalize",
                border: activePhase === phase ? "1px solid #6366f1" : "1px solid #30363d",
                background: activePhase === phase ? "#6366f120" : "transparent",
                color: activePhase === phase ? "#818cf8" : "#8b949e",
                transition: "all 0.15s",
                outline: "none",
              }}
              onFocus={(e) => (e.currentTarget.style.boxShadow = "0 0 0 2px #6366f1")}
              onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              {phase === "all" ? "All Points" : PHASE_COLORS[phase].label}
            </button>
          ))}
        </div>
      </div>

      <div className="hooks-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>

        {/* Hook Point List */}
        <div className="hooks-list-col" style={{ borderRight: "1px solid #30363d", padding: "12px 0" }}>
          {filteredHooks.map((hook) => {
            const phase = PHASE_COLORS[hook.phase];
            const risk = RISK_COLORS[hook.riskLevel];
            const isSelected = selectedHook.id === hook.id;

            return (
              <button
                key={hook.id}
                onClick={() => setSelectedHook(hook)}
                aria-label={`${hook.name} — ${RISK_COLORS[hook.riskLevel].label}`}
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "10px 16px",
                  background: isSelected ? "#0d1117" : "transparent",
                  border: "none",
                  borderLeft: isSelected ? `3px solid #6366f1` : "3px solid transparent",
                  cursor: "pointer",
                  transition: "all 0.12s",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  outline: "none",
                }}
                onFocus={(e) => (e.currentTarget.style.boxShadow = "inset 0 0 0 2px #6366f1")}
                onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 3 }}>
                    <span style={{
                      padding: "1px 6px", borderRadius: 4, fontSize: 10, fontWeight: 700,
                      background: phase.bg, color: phase.color, border: `1px solid ${phase.border}`,
                      flexShrink: 0,
                    }}>
                      {hook.timing === "before" ? "before" : "after"}
                    </span>
                    <code style={{
                      fontSize: 11, color: isSelected ? "#e6edf3" : "#c9d1d9",
                      fontFamily: "monospace", fontWeight: isSelected ? 700 : 400,
                      overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                    }}>
                      {hook.name}
                    </code>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <span style={{
                      width: 6, height: 6, borderRadius: "50%",
                      background: risk.color, flexShrink: 0,
                    }} />
                    <span style={{ fontSize: 10, color: "#8b949e" }}>{risk.label}</span>
                  </div>
                </div>
                <span style={{ fontSize: 14, color: isSelected ? "#818cf8" : "#30363d" }}>›</span>
              </button>
            );
          })}
        </div>

        {/* Detail Panel */}
        <div style={{ padding: 20 }}>
          {selectedHook && (() => {
            const phase = PHASE_COLORS[selectedHook.phase];
            const risk = RISK_COLORS[selectedHook.riskLevel];
            return (
              <>
                <div style={{ display: "flex", gap: 6, marginBottom: 12, flexWrap: "wrap" }}>
                  <span style={{
                    padding: "3px 10px", borderRadius: 6, fontSize: 11, fontWeight: 700,
                    background: phase.bg, color: phase.color, border: `1px solid ${phase.border}`,
                  }}>
                    {phase.label}
                  </span>
                  <span style={{
                    padding: "3px 10px", borderRadius: 6, fontSize: 11, fontWeight: 700,
                    background: `${risk.color}20`, color: risk.color,
                    border: `1px solid ${risk.color}40`,
                  }}>
                    {risk.label}
                  </span>
                </div>

                <code style={{
                  display: "block", fontSize: 14, fontWeight: 700, color: "#e6edf3",
                  fontFamily: "monospace", marginBottom: 12,
                  background: "#0d1117", padding: "8px 12px", borderRadius: 8,
                  border: "1px solid #30363d",
                }}>
                  {selectedHook.name}()
                </code>

                <p style={{ fontSize: 13, lineHeight: 1.75, color: "#c9d1d9", marginBottom: 16 }}>
                  {selectedHook.description}
                </p>

                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#8b949e", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>
                    Example Uses
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {selectedHook.examples.map((ex) => (
                      <div key={ex} style={{
                        display: "flex", alignItems: "flex-start", gap: 8, fontSize: 12,
                        color: "#c9d1d9", lineHeight: 1.5,
                      }}>
                        <span style={{ color: "#4ade80", flexShrink: 0, marginTop: 1 }}>✓</span>
                        {ex}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            );
          })()}
        </div>
      </div>
    </div>
  );
}
