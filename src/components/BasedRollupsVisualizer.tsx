"use client";

import { useState, useEffect } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────
type Scenario = "traditional" | "based" | "based-preconfs";

interface FlowStep {
  id: number;
  label: string;
  sublabel: string;
  color: string;
  bg: string;
  border: string;
  icon: string;
}

interface ScenarioConfig {
  label: string;
  tagline: string;
  accentColor: string;
  timeToConfirm: string;
  decentralized: boolean;
  censorshipResistant: boolean;
  composable: boolean;
  steps: FlowStep[];
}

// ─── Scenario Data ────────────────────────────────────────────────────────────
const SCENARIOS: Record<Scenario, ScenarioConfig> = {
  traditional: {
    label: "Traditional Rollup",
    tagline: "Centralized sequencer orders transactions before posting to L1.",
    accentColor: "#f85149",
    timeToConfirm: "~500ms (soft), 7+ days (hard)",
    decentralized: false,
    censorshipResistant: false,
    composable: false,
    steps: [
      {
        id: 1,
        label: "User submits tx",
        sublabel: "Sent to rollup mempool",
        color: "#e6edf3",
        bg: "#161b22",
        border: "#30363d",
        icon: "👤",
      },
      {
        id: 2,
        label: "Centralized Sequencer",
        sublabel: "Orders & batches transactions",
        color: "#f85149",
        bg: "#f8514910",
        border: "#f8514940",
        icon: "🖥️",
      },
      {
        id: 3,
        label: "Soft Confirmation",
        sublabel: "~500ms — trusting the operator",
        color: "#d29922",
        bg: "#d2992215",
        border: "#d2992240",
        icon: "⚡",
      },
      {
        id: 4,
        label: "Batch posted to L1",
        sublabel: "Calldata or blob to Ethereum",
        color: "#8b949e",
        bg: "#161b22",
        border: "#30363d",
        icon: "📦",
      },
      {
        id: 5,
        label: "L1 Finalization",
        sublabel: "Hard finality after fraud proof window",
        color: "#4ade80",
        bg: "#22c55e15",
        border: "#22c55e40",
        icon: "🔐",
      },
    ],
  },
  based: {
    label: "Based Rollup",
    tagline: "L1 validators sequence the rollup — no separate sequencer exists.",
    accentColor: "#818cf8",
    timeToConfirm: "~12s (L1 block)",
    decentralized: true,
    censorshipResistant: true,
    composable: true,
    steps: [
      {
        id: 1,
        label: "User submits tx",
        sublabel: "Enters shared mempool",
        color: "#e6edf3",
        bg: "#161b22",
        border: "#30363d",
        icon: "👤",
      },
      {
        id: 2,
        label: "L1 Block Builders",
        sublabel: "Compete to include L2 txs in block bids",
        color: "#818cf8",
        bg: "#6366f115",
        border: "#6366f140",
        icon: "🏗️",
      },
      {
        id: 3,
        label: "L1 Proposer selects block",
        sublabel: "Highest-bid block wins — PBS auction",
        color: "#818cf8",
        bg: "#6366f115",
        border: "#6366f140",
        icon: "🗳️",
      },
      {
        id: 4,
        label: "L1 + L2 tx finalized together",
        sublabel: "Atomic — same block, same security",
        color: "#4ade80",
        bg: "#22c55e15",
        border: "#22c55e40",
        icon: "🔐",
      },
      {
        id: 5,
        label: "L2 state updated",
        sublabel: "Execution layer processes block",
        color: "#06b6d4",
        bg: "#06b6d415",
        border: "#06b6d440",
        icon: "✅",
      },
    ],
  },
  "based-preconfs": {
    label: "Based Rollup + Preconfs",
    tagline: "Validator preconfs give ~100ms guarantees before the L1 block is built.",
    accentColor: "#4ade80",
    timeToConfirm: "~100ms (preconf), 12s (final)",
    decentralized: true,
    censorshipResistant: true,
    composable: true,
    steps: [
      {
        id: 1,
        label: "User submits tx",
        sublabel: "Sent to preconf-enabled validator",
        color: "#e6edf3",
        bg: "#161b22",
        border: "#30363d",
        icon: "👤",
      },
      {
        id: 2,
        label: "Validator issues preconf",
        sublabel: "Signed commitment in ~100ms",
        color: "#4ade80",
        bg: "#22c55e15",
        border: "#22c55e40",
        icon: "⚡",
      },
      {
        id: 3,
        label: "User has execution guarantee",
        sublabel: "Validator staked ETH backs this promise",
        color: "#4ade80",
        bg: "#22c55e15",
        border: "#22c55e40",
        icon: "🛡️",
      },
      {
        id: 4,
        label: "L1 block built & proposed",
        sublabel: "Validator fulfills preconf commitment",
        color: "#818cf8",
        bg: "#6366f115",
        border: "#6366f140",
        icon: "🗳️",
      },
      {
        id: 5,
        label: "Final settlement on L1",
        sublabel: "Full Ethereum security — no new trust",
        color: "#06b6d4",
        bg: "#06b6d415",
        border: "#06b6d440",
        icon: "🔐",
      },
    ],
  },
};

// ─── Animated Arrow ───────────────────────────────────────────────────────────
function AnimatedArrow({ color }: { color: string }) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 2,
      padding: "2px 0",
    }}>
      <div style={{
        width: 2,
        height: 18,
        background: `linear-gradient(to bottom, transparent, ${color}80)`,
      }} />
      <div style={{
        width: 0,
        height: 0,
        borderLeft: "5px solid transparent",
        borderRight: "5px solid transparent",
        borderTop: `6px solid ${color}`,
      }} />
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function BasedRollupsVisualizer() {
  const [activeScenario, setActiveScenario] = useState<Scenario>("traditional");
  const [animStep, setAnimStep] = useState(0);
  const [running, setRunning] = useState(false);

  const scenario = SCENARIOS[activeScenario];

  // Animate through steps
  useEffect(() => {
    if (!running) return;
    if (animStep >= scenario.steps.length) {
      setRunning(false);
      return;
    }
    const timer = setTimeout(
      () => setAnimStep((s) => s + 1),
      activeScenario === "based-preconfs" && animStep === 1 ? 400 : 700
    );
    return () => clearTimeout(timer);
  }, [running, animStep, scenario.steps.length, activeScenario]);

  function handleScenarioChange(s: Scenario) {
    setActiveScenario(s);
    setAnimStep(0);
    setRunning(false);
  }

  function handlePlay() {
    setAnimStep(0);
    setRunning(true);
  }

  return (
    <div style={{
      background: "#0d1117",
      border: "1px solid #30363d",
      borderRadius: 16,
      overflow: "hidden",
    }}>
      {/* ── Scenario Tabs ── */}
      <div style={{
        display: "flex",
        borderBottom: "1px solid #30363d",
        overflowX: "auto",
      }}>
        {(Object.keys(SCENARIOS) as Scenario[]).map((key) => {
          const s = SCENARIOS[key];
          const isActive = key === activeScenario;
          return (
            <button
              key={key}
              onClick={() => handleScenarioChange(key)}
              style={{
                flex: "1 1 auto",
                padding: "12px 16px",
                background: isActive ? "#161b22" : "transparent",
                border: "none",
                borderBottom: isActive ? `2px solid ${s.accentColor}` : "2px solid transparent",
                color: isActive ? s.accentColor : "#8b949e",
                fontSize: 13,
                fontWeight: isActive ? 700 : 500,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "all 0.2s",
              }}
            >
              {s.label}
            </button>
          );
        })}
      </div>

      {/* ── Header ── */}
      <div style={{
        padding: "16px 20px",
        background: "#161b22",
        borderBottom: "1px solid #30363d",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 12,
      }}>
        <div>
          <div style={{ fontSize: 13, color: "#8b949e", marginBottom: 4 }}>{scenario.tagline}</div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <span style={{
              fontSize: 12, fontWeight: 700, padding: "2px 8px", borderRadius: 4,
              background: `${scenario.accentColor}20`, color: scenario.accentColor,
            }}>
              ⏱ {scenario.timeToConfirm}
            </span>
            {scenario.decentralized && (
              <span style={{ fontSize: 12, fontWeight: 700, padding: "2px 8px", borderRadius: 4, background: "#22c55e20", color: "#4ade80" }}>
                ✓ Decentralized
              </span>
            )}
            {scenario.censorshipResistant && (
              <span style={{ fontSize: 12, fontWeight: 700, padding: "2px 8px", borderRadius: 4, background: "#06b6d415", color: "#06b6d4" }}>
                ✓ Censorship Resistant
              </span>
            )}
            {scenario.composable && (
              <span style={{ fontSize: 12, fontWeight: 700, padding: "2px 8px", borderRadius: 4, background: "#818cf820", color: "#818cf8" }}>
                ✓ Synchronous Composability
              </span>
            )}
          </div>
        </div>
        <button
          onClick={handlePlay}
          style={{
            padding: "8px 18px",
            background: running ? "#30363d" : `${scenario.accentColor}20`,
            border: `1px solid ${running ? "#30363d" : scenario.accentColor}60`,
            borderRadius: 8,
            color: running ? "#8b949e" : scenario.accentColor,
            fontSize: 13,
            fontWeight: 700,
            cursor: running ? "not-allowed" : "pointer",
            transition: "all 0.2s",
          }}
          disabled={running}
        >
          {running ? "⏳ Animating…" : animStep >= scenario.steps.length ? "↺ Replay" : "▶ Simulate"}
        </button>
      </div>

      {/* ── Flow Steps ── */}
      <div style={{ padding: "24px 20px" }}>
        {scenario.steps.map((step, idx) => {
          const revealed = idx < animStep;
          const isActive = idx === animStep - 1;
          return (
            <div key={step.id}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "12px 14px",
                background: revealed ? step.bg : "#161b22",
                border: `1px solid ${revealed ? step.border : "#30363d"}`,
                borderRadius: 10,
                opacity: animStep === 0 ? 0.45 : revealed ? 1 : 0.3,
                transform: isActive ? "scale(1.01)" : "scale(1)",
                transition: "all 0.35s ease",
                boxShadow: isActive ? `0 0 12px ${step.border}80` : "none",
              }}>
                <div style={{
                  width: 34, height: 34,
                  background: revealed ? step.bg : "#0d1117",
                  border: `1px solid ${revealed ? step.border : "#30363d"}`,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 16,
                  flexShrink: 0,
                  transition: "all 0.35s",
                }}>
                  {revealed ? step.icon : <span style={{ color: "#30363d" }}>{idx + 1}</span>}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: revealed ? step.color : "#8b949e",
                    marginBottom: 2,
                    transition: "color 0.35s",
                  }}>
                    {step.label}
                  </div>
                  <div style={{
                    fontSize: 12,
                    color: revealed ? "#8b949e" : "#484f58",
                    transition: "color 0.35s",
                  }}>
                    {step.sublabel}
                  </div>
                </div>
                {revealed && (
                  <div style={{ color: step.color, fontSize: 18 }}>✓</div>
                )}
              </div>

              {/* Arrow between steps */}
              {idx < scenario.steps.length - 1 && (
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <AnimatedArrow color={revealed ? step.color : "#30363d"} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ── Completion Message ── */}
      {animStep >= scenario.steps.length && (
        <div style={{
          margin: "0 20px 20px",
          padding: "14px 16px",
          background: `${scenario.accentColor}10`,
          border: `1px solid ${scenario.accentColor}40`,
          borderRadius: 10,
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}>
          <span style={{ fontSize: 20 }}>
            {activeScenario === "traditional" ? "⚠️" : "✅"}
          </span>
          <div style={{ fontSize: 13, color: "#c9d1d9", lineHeight: 1.6 }}>
            {activeScenario === "traditional" &&
              "Transaction confirmed by a centralized operator. Soft confirmation only — hard finality requires the fraud proof window to pass (7 days on Optimistic rollups). The sequencer could have censored or front-run this tx."}
            {activeScenario === "based" &&
              "Transaction ordered by Ethereum validators via the PBS auction. Full L1 security and censorship resistance — no separate sequencer needed. L1 and L2 finalized atomically in the same block."}
            {activeScenario === "based-preconfs" &&
              "Execution guarantee received in ~100ms via validator preconf, backed by slashable stake. Full L1 finality achieved when the block is proposed. Best of both worlds: decentralized sequencing + near-instant UX."}
          </div>
        </div>
      )}

      {/* ── Prompt to start ── */}
      {animStep === 0 && !running && (
        <div style={{
          textAlign: "center",
          padding: "4px 20px 20px",
          fontSize: 13,
          color: "#484f58",
        }}>
          Press <strong style={{ color: "#58a6ff" }}>▶ Simulate</strong> to animate the transaction flow
        </div>
      )}
    </div>
  );
}
