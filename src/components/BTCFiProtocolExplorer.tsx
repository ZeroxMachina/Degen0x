'use client';

import { useState, useMemo } from "react";

// ── Interfaces ────────────────────────────────────────────────────────────────
interface BTCFiProtocol {
  name: string;
  ticker: string;
  type: "Bitcoin L2" | "Sidechain" | "Native Staking" | "Wrapped BTC" | "Yield Vault";
  tvlDisplay: string;
  tvlValue: number; // millions, for sorting
  yieldDisplay: string;
  trustModel: "Trustless" | "Semi-Trust" | "Custodial" | "Federated";
  chain: string;
  description: string;
  color: string;
  riskLevel: "Low" | "Medium" | "High";
  auditStatus: "Audited" | "Partial" | "Unaudited";
  evmCompatible: boolean;
}

// ── Static Data ───────────────────────────────────────────────────────────────
const BTCFI_PROTOCOLS: BTCFiProtocol[] = [
  {
    name: "Babylon Protocol",
    ticker: "BABY",
    type: "Native Staking",
    tvlDisplay: "N/A",
    tvlValue: 0,
    yieldDisplay: "Variable (PoS rewards)",
    trustModel: "Trustless",
    chain: "Bitcoin L1",
    description:
      "Stake native BTC on Bitcoin L1 — no bridge, no wrapping. Your BTC secures Proof-of-Stake chains and earns staking rewards. Lowest trust assumptions in BTCFi.",
    color: "#f59e0b",
    riskLevel: "Low",
    auditStatus: "Audited",
    evmCompatible: false,
  },
  {
    name: "Stacks",
    ticker: "STX",
    type: "Bitcoin L2",
    tvlDisplay: "$208M",
    tvlValue: 208,
    yieldDisplay: "4%–12% APY",
    trustModel: "Semi-Trust",
    chain: "Stacks (Bitcoin-settled)",
    description:
      "Bitcoin Layer 2 with Clarity smart contracts and sBTC — a decentralized BTC peg (15-of-20 threshold multisig). Full DeFi ecosystem settled on Bitcoin.",
    color: "#3b82f6",
    riskLevel: "Medium",
    auditStatus: "Audited",
    evmCompatible: false,
  },
  {
    name: "Rootstock (RSK)",
    ticker: "RIF",
    type: "Sidechain",
    tvlDisplay: "$160M+",
    tvlValue: 160,
    yieldDisplay: "Variable (EVM DeFi)",
    trustModel: "Federated",
    chain: "Rootstock",
    description:
      "EVM-compatible Bitcoin sidechain with merge-mining security. RBTC is the native BTC-pegged asset. Solidity contracts deploy as-is, MetaMask compatible.",
    color: "#8b5cf6",
    riskLevel: "Medium",
    auditStatus: "Audited",
    evmCompatible: true,
  },
  {
    name: "Aave (WBTC)",
    ticker: "AAVE",
    type: "Yield Vault",
    tvlDisplay: "$18B+ (total)",
    tvlValue: 500, // estimated WBTC portion in millions
    yieldDisplay: "2%–8% APY",
    trustModel: "Custodial",
    chain: "Ethereum",
    description:
      "Deposit WBTC on the most battle-tested DeFi lending protocol. Earn interest from borrowers. Smart contract risk is low given years of audits; main risk is BitGo custodian.",
    color: "#22c55e",
    riskLevel: "Low",
    auditStatus: "Audited",
    evmCompatible: true,
  },
  {
    name: "Merlin Chain",
    ticker: "MERL",
    type: "Bitcoin L2",
    tvlDisplay: "Emerging",
    tvlValue: 50,
    yieldDisplay: "10%–25%+ APY",
    trustModel: "Semi-Trust",
    chain: "Merlin (ZK-proof)",
    description:
      "EVM-compatible Bitcoin L2 using ZK proofs posted to Bitcoin. Gained traction in Asia markets. Higher yields are often token-incentivized; elevated protocol risk vs. older chains.",
    color: "#ef4444",
    riskLevel: "High",
    auditStatus: "Partial",
    evmCompatible: true,
  },
  {
    name: "WBTC (BitGo)",
    ticker: "WBTC",
    type: "Wrapped BTC",
    tvlDisplay: "$10B+",
    tvlValue: 10000,
    yieldDisplay: "Via DeFi protocols",
    trustModel: "Custodial",
    chain: "Ethereum",
    description:
      "Most liquid BTC representation on Ethereum. 1:1 BTC backed, custodied by BitGo. Use in Aave, Compound, Curve, and more. Centralized custodian is the main trust assumption.",
    color: "#f97316",
    riskLevel: "Low",
    auditStatus: "Audited",
    evmCompatible: true,
  },
  {
    name: "tBTC (Threshold)",
    ticker: "T",
    type: "Wrapped BTC",
    tvlDisplay: "$200M+",
    tvlValue: 200,
    yieldDisplay: "Via Curve / DeFi",
    trustModel: "Semi-Trust",
    chain: "Ethereum",
    description:
      "Decentralized BTC peg on Ethereum by Threshold Network. Threshold multisig removes single-custodian risk vs WBTC. Less liquid but more trustless. Integrates with Curve.",
    color: "#06b6d4",
    riskLevel: "Medium",
    auditStatus: "Audited",
    evmCompatible: true,
  },
  {
    name: "Botanix",
    ticker: "—",
    type: "Bitcoin L2",
    tvlDisplay: "Early Stage",
    tvlValue: 10,
    yieldDisplay: "TBD",
    trustModel: "Semi-Trust",
    chain: "Botanix (EVM)",
    description:
      "EVM-compatible Bitcoin L2 using BTC as native gas token. Still in early stages — higher protocol risk but interesting if full Bitcoin L2 programmability matters to you.",
    color: "#a855f7",
    riskLevel: "High",
    auditStatus: "Partial",
    evmCompatible: true,
  },
];

// ── Sort options ──────────────────────────────────────────────────────────────
type SortKey = "tvl" | "risk" | "name" | "trust";

const RISK_ORDER: Record<string, number> = { Low: 0, Medium: 1, High: 2 };
const TRUST_ORDER: Record<string, number> = { Trustless: 0, "Semi-Trust": 1, Federated: 2, Custodial: 3 };

function sortProtocols(protocols: BTCFiProtocol[], key: SortKey): BTCFiProtocol[] {
  return [...protocols].sort((a, b) => {
    switch (key) {
      case "tvl":    return b.tvlValue - a.tvlValue;
      case "risk":   return RISK_ORDER[a.riskLevel] - RISK_ORDER[b.riskLevel];
      case "trust":  return TRUST_ORDER[a.trustModel] - TRUST_ORDER[b.trustModel];
      case "name":   return a.name.localeCompare(b.name);
      default:       return 0;
    }
  });
}

// ── Risk badge ────────────────────────────────────────────────────────────────
const RISK_COLORS: Record<string, { bg: string; text: string }> = {
  Low:    { bg: "#22c55e20", text: "#22c55e" },
  Medium: { bg: "#f59e0b20", text: "#f59e0b" },
  High:   { bg: "#ef444420", text: "#ef4444" },
};

const TRUST_COLORS: Record<string, { bg: string; text: string }> = {
  Trustless:   { bg: "#22c55e20", text: "#22c55e" },
  "Semi-Trust":{ bg: "#3b82f620", text: "#3b82f6" },
  Federated:   { bg: "#f59e0b20", text: "#f59e0b" },
  Custodial:   { bg: "#8b5cf620", text: "#8b5cf6" },
};

// ── Component ─────────────────────────────────────────────────────────────────
export default function BTCFiProtocolExplorer() {
  const [typeFilter, setTypeFilter]   = useState<string>("All");
  const [riskFilter, setRiskFilter]   = useState<string>("All");
  const [evmFilter,  setEvmFilter]    = useState<string>("All");
  const [sortBy,     setSortBy]       = useState<SortKey>("tvl");

  const allTypes = ["All", "Bitcoin L2", "Sidechain", "Native Staking", "Wrapped BTC", "Yield Vault"];
  const allRisks = ["All", "Low", "Medium", "High"];

  const filtered = useMemo(() => {
    let result = BTCFI_PROTOCOLS;
    if (typeFilter !== "All") result = result.filter((p) => p.type === typeFilter);
    if (riskFilter !== "All") result = result.filter((p) => p.riskLevel === riskFilter);
    if (evmFilter  !== "All") result = result.filter((p) =>
      evmFilter === "EVM" ? p.evmCompatible : !p.evmCompatible
    );
    return sortProtocols(result, sortBy);
  }, [typeFilter, riskFilter, evmFilter, sortBy]);

  const btnBase: React.CSSProperties = {
    padding: "5px 12px",
    borderRadius: 20,
    fontSize: 12,
    fontWeight: 700,
    cursor: "pointer",
    border: "1px solid",
    transition: "all 0.15s ease",
  };
  const btnActive = (color: string): React.CSSProperties => ({
    ...btnBase,
    background: `${color}20`,
    borderColor: `${color}60`,
    color,
  });
  const btnInactive: React.CSSProperties = {
    ...btnBase,
    background: "transparent",
    borderColor: "#30363d",
    color: "#8b949e",
  };

  return (
    <div>
      {/* Filter bar */}
      <div
        className="rounded-xl p-4 mb-4"
        style={{ background: "#161b22", border: "1px solid #30363d" }}
      >
        <div className="flex flex-wrap gap-4">
          {/* Type filter */}
          <div>
            <p className="text-xs font-bold mb-2" id="type-filter-label" style={{ color: "#8b949e" }}>TYPE</p>
            <div className="flex flex-wrap gap-1" role="group" aria-labelledby="type-filter-label">
              {allTypes.map((t) => (
                <button
                  key={t}
                  onClick={() => setTypeFilter(t)}
                  aria-pressed={typeFilter === t}
                  aria-label={`Filter by type: ${t}`}
                  style={typeFilter === t ? btnActive("#f59e0b") : btnInactive}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Risk filter */}
          <div>
            <p className="text-xs font-bold mb-2" id="risk-filter-label" style={{ color: "#8b949e" }}>RISK</p>
            <div className="flex flex-wrap gap-1" role="group" aria-labelledby="risk-filter-label">
              {allRisks.map((r) => {
                const c = r === "All" ? "#8b949e" : RISK_COLORS[r]?.text ?? "#8b949e";
                return (
                  <button
                    key={r}
                    onClick={() => setRiskFilter(r)}
                    aria-pressed={riskFilter === r}
                    aria-label={`Filter by risk: ${r}`}
                    style={riskFilter === r ? btnActive(c) : btnInactive}
                  >
                    {r}
                  </button>
                );
              })}
            </div>
          </div>

          {/* EVM filter */}
          <div>
            <p className="text-xs font-bold mb-2" id="evm-filter-label" style={{ color: "#8b949e" }}>EVM</p>
            <div className="flex flex-wrap gap-1" role="group" aria-labelledby="evm-filter-label">
              {["All", "EVM", "Non-EVM"].map((e) => (
                <button
                  key={e}
                  onClick={() => setEvmFilter(e)}
                  aria-pressed={evmFilter === e}
                  aria-label={`Filter by EVM compatibility: ${e}`}
                  style={evmFilter === e ? btnActive("#3b82f6") : btnInactive}
                >
                  {e}
                </button>
              ))}
            </div>
          </div>

          {/* Sort */}
          <div className="ml-auto">
            <p className="text-xs font-bold mb-2" style={{ color: "#8b949e" }}>SORT BY</p>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortKey)}
              aria-label="Sort protocols by"
              style={{
                padding: "5px 10px",
                borderRadius: 8,
                fontSize: 12,
                fontWeight: 700,
                background: "#21262d",
                border: "1px solid #30363d",
                color: "#c9d1d9",
                cursor: "pointer",
              }}
            >
              <option value="tvl">TVL (High → Low)</option>
              <option value="risk">Risk (Low → High)</option>
              <option value="trust">Trust (Most → Least)</option>
              <option value="name">Name (A–Z)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results count */}
      <p className="text-xs mb-3" aria-live="polite" style={{ color: "#8b949e" }}>
        Showing {filtered.length} of {BTCFI_PROTOCOLS.length} BTCFi protocols
      </p>

      {/* Protocol cards */}
      {filtered.length === 0 ? (
        <div className="rounded-xl p-8 text-center" style={{ background: "#161b22", border: "1px solid #30363d" }}>
          <p style={{ color: "#8b949e" }}>No protocols match the current filters.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((protocol) => (
            <div
              key={protocol.name}
              className="rounded-xl p-4"
              style={{
                background: "#161b22",
                border: `1px solid ${protocol.color}30`,
                transition: "border-color 0.15s ease",
              }}
            >
              {/* Header row */}
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ background: protocol.color }}
                  />
                  <span className="font-extrabold text-sm" style={{ color: "#e6edf3" }}>
                    {protocol.name}
                  </span>
                  {protocol.ticker !== "—" && (
                    <span className="text-xs font-mono" style={{ color: "#8b949e" }}>
                      {protocol.ticker}
                    </span>
                  )}
                  {protocol.evmCompatible && (
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-bold"
                      style={{ background: "#3b82f620", color: "#3b82f6", border: "1px solid #3b82f640" }}
                    >
                      EVM
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {/* Type badge */}
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-bold"
                    style={{ background: `${protocol.color}20`, color: protocol.color, border: `1px solid ${protocol.color}40` }}
                  >
                    {protocol.type}
                  </span>
                  {/* Risk badge */}
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-bold"
                    style={{
                      background: RISK_COLORS[protocol.riskLevel].bg,
                      color: RISK_COLORS[protocol.riskLevel].text,
                      border: `1px solid ${RISK_COLORS[protocol.riskLevel].text}40`,
                    }}
                  >
                    {protocol.riskLevel} Risk
                  </span>
                  {/* Trust badge */}
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-bold"
                    style={{
                      background: TRUST_COLORS[protocol.trustModel].bg,
                      color: TRUST_COLORS[protocol.trustModel].text,
                      border: `1px solid ${TRUST_COLORS[protocol.trustModel].text}40`,
                    }}
                  >
                    {protocol.trustModel}
                  </span>
                  {/* Audit badge */}
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-bold"
                    style={{
                      background: protocol.auditStatus === "Audited" ? "#22c55e20" : protocol.auditStatus === "Partial" ? "#f59e0b20" : "#ef444420",
                      color:      protocol.auditStatus === "Audited" ? "#22c55e"   : protocol.auditStatus === "Partial" ? "#f59e0b"   : "#ef4444",
                      border:     `1px solid ${protocol.auditStatus === "Audited" ? "#22c55e" : protocol.auditStatus === "Partial" ? "#f59e0b" : "#ef4444"}40`,
                    }}
                  >
                    {protocol.auditStatus}
                  </span>
                </div>
              </div>

              {/* Stats row */}
              <div className="flex flex-wrap gap-4 mb-2 text-xs" style={{ color: "#8b949e" }}>
                <span>Chain: <strong style={{ color: "#c9d1d9" }}>{protocol.chain}</strong></span>
                <span>TVL: <strong style={{ color: "#c9d1d9" }}>{protocol.tvlDisplay}</strong></span>
                <span>Yield: <strong style={{ color: "#22c55e" }}>{protocol.yieldDisplay}</strong></span>
              </div>

              {/* Description */}
              <p className="text-xs leading-relaxed" style={{ color: "#8b949e" }}>
                {protocol.description}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Footer disclaimer */}
      <p className="text-xs mt-4" style={{ color: "#8b949e" }}>
        ⚠️ TVL and yield data are approximate as of March 2026. Sources: DefiLlama, SwapSpace, protocol documentation. Not financial advice.
      </p>
    </div>
  );
}
