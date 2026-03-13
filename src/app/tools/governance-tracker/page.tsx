"use client";

import { useState, useEffect, useMemo } from "react";
import Breadcrumb from "@/components/Breadcrumb";

/* ────────────────────────────────────────────────────────────
   Types
──────────────────────────────────────────────────────────── */
interface Proposal {
  id: string;
  protocol: string;
  protocolLogo: string;
  title: string;
  status: "active" | "passed" | "defeated" | "pending" | "queued";
  category: "treasury" | "parameter" | "upgrade" | "grant" | "meta-governance" | "other";
  votesFor: number;
  votesAgainst: number;
  votesAbstain: number;
  quorum: number;
  quorumReached: boolean;
  endTime: string;
  totalVoters: number;
  topVoters: { address: string; power: number; vote: "for" | "against" }[];
  impact: "high" | "medium" | "low";
  summary: string;
  chain: string;
}

interface ProtocolStats {
  name: string;
  activeProposals: number;
  totalProposals: number;
  avgTurnout: number;
  treasury: number;
  tokenHolders: number;
  chain: string;
}

/* ────────────────────────────────────────────────────────────
   Mock Data
──────────────────────────────────────────────────────────── */
const PROTOCOLS = [
  { name: "Uniswap", chain: "Ethereum", logo: "UNI" },
  { name: "Aave", chain: "Ethereum", logo: "AAVE" },
  { name: "Compound", chain: "Ethereum", logo: "COMP" },
  { name: "MakerDAO", chain: "Ethereum", logo: "MKR" },
  { name: "Arbitrum", chain: "Arbitrum", logo: "ARB" },
  { name: "Optimism", chain: "Optimism", logo: "OP" },
  { name: "Jito", chain: "Solana", logo: "JTO" },
  { name: "Jupiter", chain: "Solana", logo: "JUP" },
  { name: "Lido", chain: "Ethereum", logo: "LDO" },
  { name: "Curve", chain: "Ethereum", logo: "CRV" },
];

const PROPOSAL_TITLES: Record<string, string[]> = {
  treasury: [
    "Allocate $5M to Growth Fund for Q2 2026",
    "Diversify Treasury into RWA Yield Products",
    "Fund Ecosystem Grants Program — Season 4",
    "Deploy Idle Treasury into Aave & Morpho",
  ],
  parameter: [
    "Increase Max LTV for ETH Collateral to 85%",
    "Lower Swap Fee to 0.05% for Stablecoin Pools",
    "Adjust Risk Parameters for LST Collateral",
    "Reduce Borrow Rate Spread by 50bps",
  ],
  upgrade: [
    "Deploy V4 Contracts with Hooks Framework",
    "Migrate to Solidity 0.8.26 for Gas Savings",
    "Implement Account Abstraction Support",
    "Enable Cross-Chain Messaging via LayerZero",
  ],
  grant: [
    "Fund Open-Source Analytics Dashboard — $150K",
    "Retroactive Public Goods Funding Round 5",
    "Developer Bounty Program Expansion",
    "Audit Fund for Community-Built Integrations",
  ],
};

function generateProposals(): Proposal[] {
  const proposals: Proposal[] = [];
  const categories = Object.keys(PROPOSAL_TITLES) as Proposal["category"][];
  const statuses: Proposal["status"][] = ["active", "active", "active", "passed", "defeated", "pending", "queued"];

  for (let i = 0; i < 20; i++) {
    const protocol = PROTOCOLS[Math.floor(Math.random() * PROTOCOLS.length)];
    const category = categories[Math.floor(Math.random() * categories.length)];
    const titles = PROPOSAL_TITLES[category] || PROPOSAL_TITLES.treasury;
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const votesFor = Math.floor(Math.random() * 50_000_000);
    const votesAgainst = Math.floor(Math.random() * votesFor * 0.6);
    const quorum = Math.floor(Math.random() * 20_000_000 + 5_000_000);

    proposals.push({
      id: `PROP-${1000 + i}`,
      protocol: protocol.name,
      protocolLogo: protocol.logo,
      title: titles[Math.floor(Math.random() * titles.length)],
      status,
      category,
      votesFor,
      votesAgainst,
      votesAbstain: Math.floor(Math.random() * votesFor * 0.1),
      quorum,
      quorumReached: votesFor + votesAgainst > quorum,
      endTime: status === "active" ? `${Math.floor(Math.random() * 5) + 1}d ${Math.floor(Math.random() * 24)}h` : "Ended",
      totalVoters: Math.floor(Math.random() * 5000 + 50),
      topVoters: Array.from({ length: 5 }, (_, j) => ({
        address: `0x${Math.random().toString(16).slice(2, 8)}...${Math.random().toString(16).slice(2, 6)}`,
        power: Math.floor(Math.random() * 5_000_000),
        vote: Math.random() > 0.3 ? "for" as const : "against" as const,
      })),
      impact: Math.random() > 0.6 ? "high" : Math.random() > 0.3 ? "medium" : "low",
      summary: "This proposal aims to improve protocol efficiency and long-term sustainability through strategic resource allocation and parameter optimization.",
      chain: protocol.chain,
    });
  }
  return proposals;
}

function generateProtocolStats(): ProtocolStats[] {
  return PROTOCOLS.map((p) => ({
    name: p.name,
    activeProposals: Math.floor(Math.random() * 5),
    totalProposals: Math.floor(Math.random() * 200 + 50),
    avgTurnout: Math.random() * 30 + 5,
    treasury: Math.random() * 2_000_000_000 + 10_000_000,
    tokenHolders: Math.floor(Math.random() * 500_000 + 10_000),
    chain: p.chain,
  }));
}

/* ────────────────────────────────────────────────────────────
   Formatters
──────────────────────────────────────────────────────────── */
function fmtNum(n: number) {
  if (n >= 1e9) return `${(n / 1e9).toFixed(2)}B`;
  if (n >= 1e6) return `${(n / 1e6).toFixed(1)}M`;
  if (n >= 1e3) return `${(n / 1e3).toFixed(0)}K`;
  return n.toFixed(0);
}
function fmtUsd(n: number) { return `$${fmtNum(n)}`; }

const STATUS_COLORS: Record<string, { bg: string; color: string; border: string }> = {
  active: { bg: "#3fb95015", color: "#3fb950", border: "#3fb95040" },
  passed: { bg: "#58a6ff15", color: "#58a6ff", border: "#58a6ff40" },
  defeated: { bg: "#f8514915", color: "#f85149", border: "#f8514940" },
  pending: { bg: "#d2992215", color: "#d29922", border: "#d2992240" },
  queued: { bg: "#bc8cff15", color: "#bc8cff", border: "#bc8cff40" },
};

const IMPACT_COLORS: Record<string, string> = { high: "#f85149", medium: "#d29922", low: "#3fb950" };

/* ────────────────────────────────────────────────────────────
   Main Component
──────────────────────────────────────────────────────────── */
export default function GovernanceTrackerPage() {
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [protocolStats, setProtocolStats] = useState<ProtocolStats[]>([]);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [protocolFilter, setProtocolFilter] = useState<string>("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [tab, setTab] = useState<"proposals" | "protocols">("proposals");

  useEffect(() => {
    setProposals(generateProposals());
    setProtocolStats(generateProtocolStats());
  }, []);

  const filtered = useMemo(() => {
    let f = proposals;
    if (statusFilter !== "all") f = f.filter((p) => p.status === statusFilter);
    if (protocolFilter !== "all") f = f.filter((p) => p.protocol === protocolFilter);
    if (categoryFilter !== "all") f = f.filter((p) => p.category === categoryFilter);
    return f;
  }, [proposals, statusFilter, protocolFilter, categoryFilter]);

  const activeCount = proposals.filter((p) => p.status === "active").length;
  const totalVotePower = proposals.reduce((s, p) => s + p.votesFor + p.votesAgainst, 0);

  return (
    <div style={{ minHeight: "100vh", background: "#0d1117", color: "#e6edf3" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "24px 20px" }}>
        <Breadcrumb items={[{ label: "Tools", href: "/tools" }, { label: "Governance Tracker" }]} />

        <div style={{ marginBottom: 32 }}>
          <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8, background: "linear-gradient(135deg, #bc8cff, #6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            On-Chain Governance Tracker
          </h1>
          <p style={{ color: "#8b949e", fontSize: 15, maxWidth: 700 }}>
            Monitor governance proposals across DeFi and L2 protocols. Track voting power, quorum progress, and participate in on-chain democracy.
          </p>
        </div>

        {/* Summary */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginBottom: 24 }}>
          {[
            { label: "Active Proposals", value: String(activeCount), color: "#3fb950" },
            { label: "Protocols Tracked", value: String(PROTOCOLS.length), color: "#58a6ff" },
            { label: "Total Vote Power", value: fmtNum(totalVotePower), color: "#bc8cff" },
            { label: "Avg Turnout", value: `${(protocolStats.reduce((s, p) => s + p.avgTurnout, 0) / (protocolStats.length || 1)).toFixed(1)}%`, color: "#d29922" },
          ].map((c) => (
            <div key={c.label} style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: "14px 18px" }}>
              <div style={{ fontSize: 11, color: "#8b949e", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.05em" }}>{c.label}</div>
              <div style={{ fontSize: 22, fontWeight: 700, color: c.color }}>{c.value}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
          {(["proposals", "protocols"] as const).map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "8px 20px", borderRadius: 8, border: `1px solid ${tab === t ? "#6366f1" : "#30363d"}`,
              background: tab === t ? "#6366f120" : "#161b22", color: tab === t ? "#818cf8" : "#8b949e",
              cursor: "pointer", fontWeight: 600, fontSize: 14, textTransform: "capitalize",
            }}>
              {t}
            </button>
          ))}
        </div>

        {/* Filters */}
        {tab === "proposals" && (
          <div style={{ display: "flex", gap: 10, marginBottom: 16, flexWrap: "wrap" }}>
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} style={{ padding: "7px 12px", borderRadius: 8, border: "1px solid #30363d", background: "#161b22", color: "#e6edf3", fontSize: 13 }}>
              <option value="all">All Status</option>
              {["active", "passed", "defeated", "pending", "queued"].map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            <select value={protocolFilter} onChange={(e) => setProtocolFilter(e.target.value)} style={{ padding: "7px 12px", borderRadius: 8, border: "1px solid #30363d", background: "#161b22", color: "#e6edf3", fontSize: 13 }}>
              <option value="all">All Protocols</option>
              {PROTOCOLS.map((p) => <option key={p.name} value={p.name}>{p.name}</option>)}
            </select>
            <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} style={{ padding: "7px 12px", borderRadius: 8, border: "1px solid #30363d", background: "#161b22", color: "#e6edf3", fontSize: 13 }}>
              <option value="all">All Categories</option>
              {["treasury", "parameter", "upgrade", "grant"].map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        )}

        {/* Proposals List */}
        {tab === "proposals" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {filtered.map((p) => {
              const totalVotes = p.votesFor + p.votesAgainst + p.votesAbstain;
              const forPct = totalVotes ? (p.votesFor / totalVotes) * 100 : 0;
              const againstPct = totalVotes ? (p.votesAgainst / totalVotes) * 100 : 0;
              const sc = STATUS_COLORS[p.status] || STATUS_COLORS.pending;
              const expanded = expandedId === p.id;

              return (
                <div key={p.id} style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, overflow: "hidden" }}>
                  <div
                    onClick={() => setExpandedId(expanded ? null : p.id)}
                    style={{ padding: "16px 20px", cursor: "pointer" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <span style={{ background: "#6366f120", color: "#818cf8", borderRadius: 6, padding: "4px 8px", fontSize: 11, fontWeight: 700 }}>{p.protocolLogo}</span>
                        <span style={{ fontWeight: 700, fontSize: 15 }}>{p.title}</span>
                      </div>
                      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                        <span style={{ fontSize: 11, color: IMPACT_COLORS[p.impact], fontWeight: 600 }}>{p.impact} impact</span>
                        <span style={{ padding: "3px 10px", borderRadius: 6, fontSize: 12, fontWeight: 600, background: sc.bg, color: sc.color, border: `1px solid ${sc.border}` }}>
                          {p.status}
                        </span>
                      </div>
                    </div>
                    {/* Vote bar */}
                    <div style={{ marginTop: 12, display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ flex: 1, height: 8, background: "#21262d", borderRadius: 4, overflow: "hidden", display: "flex" }}>
                        <div style={{ width: `${forPct}%`, background: "#3fb950", borderRadius: "4px 0 0 4px" }} />
                        <div style={{ width: `${againstPct}%`, background: "#f85149" }} />
                      </div>
                      <span style={{ fontSize: 12, color: "#3fb950", fontWeight: 600 }}>{forPct.toFixed(1)}%</span>
                      <span style={{ fontSize: 12, color: "#8b949e" }}>vs</span>
                      <span style={{ fontSize: 12, color: "#f85149", fontWeight: 600 }}>{againstPct.toFixed(1)}%</span>
                      <span style={{ fontSize: 12, color: "#8b949e" }}>•</span>
                      <span style={{ fontSize: 12, color: p.endTime === "Ended" ? "#8b949e" : "#d29922" }}>{p.endTime}</span>
                    </div>
                  </div>

                  {expanded && (
                    <div style={{ padding: "0 20px 16px", borderTop: "1px solid #21262d", paddingTop: 16 }}>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12, marginBottom: 12 }}>
                        <div><span style={{ fontSize: 11, color: "#8b949e" }}>Protocol</span><div style={{ fontWeight: 600 }}>{p.protocol}</div></div>
                        <div><span style={{ fontSize: 11, color: "#8b949e" }}>Chain</span><div style={{ fontWeight: 600 }}>{p.chain}</div></div>
                        <div><span style={{ fontSize: 11, color: "#8b949e" }}>Category</span><div style={{ fontWeight: 600, textTransform: "capitalize" }}>{p.category}</div></div>
                        <div><span style={{ fontSize: 11, color: "#8b949e" }}>Voters</span><div style={{ fontWeight: 600 }}>{p.totalVoters.toLocaleString()}</div></div>
                        <div><span style={{ fontSize: 11, color: "#8b949e" }}>Quorum</span><div style={{ fontWeight: 600, color: p.quorumReached ? "#3fb950" : "#f85149" }}>{p.quorumReached ? "Reached" : "Not reached"} ({fmtNum(p.quorum)})</div></div>
                      </div>
                      <p style={{ color: "#8b949e", fontSize: 13, lineHeight: 1.6, marginBottom: 12 }}>{p.summary}</p>
                      <div>
                        <div style={{ fontSize: 12, color: "#8b949e", fontWeight: 600, marginBottom: 6 }}>Top Voters</div>
                        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                          {p.topVoters.map((v, i) => (
                            <span key={i} style={{ fontSize: 11, padding: "3px 8px", borderRadius: 6, background: v.vote === "for" ? "#3fb95010" : "#f8514910", color: v.vote === "for" ? "#3fb950" : "#f85149", border: `1px solid ${v.vote === "for" ? "#3fb95030" : "#f8514930"}` }}>
                              {v.address} · {fmtNum(v.power)}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Protocol Overview */}
        {tab === "protocols" && (
          <div style={{ overflowX: "auto", borderRadius: 12, border: "1px solid #30363d" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ background: "#161b22" }}>
                  {["Protocol", "Chain", "Active", "Total Proposals", "Avg Turnout", "Treasury", "Token Holders"].map((h) => (
                    <th key={h} style={{ padding: "12px 16px", textAlign: "left", color: "#8b949e", fontWeight: 600, borderBottom: "1px solid #30363d" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {protocolStats.map((p) => (
                  <tr key={p.name} style={{ borderBottom: "1px solid #21262d" }}>
                    <td style={{ padding: "10px 16px", fontWeight: 700 }}>{p.name}</td>
                    <td style={{ padding: "10px 16px", color: "#8b949e" }}>{p.chain}</td>
                    <td style={{ padding: "10px 16px", color: p.activeProposals > 0 ? "#3fb950" : "#8b949e", fontWeight: 600 }}>{p.activeProposals}</td>
                    <td style={{ padding: "10px 16px" }}>{p.totalProposals}</td>
                    <td style={{ padding: "10px 16px" }}>{p.avgTurnout.toFixed(1)}%</td>
                    <td style={{ padding: "10px 16px", fontWeight: 600 }}>{fmtUsd(p.treasury)}</td>
                    <td style={{ padding: "10px 16px" }}>{p.tokenHolders.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
