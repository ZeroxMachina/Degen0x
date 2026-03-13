"use client";

import { useState, useEffect, useMemo } from "react";
import Breadcrumb from "@/components/Breadcrumb";

/* ────────────────────────────────────────────────────────────
   Types
──────────────────────────────────────────────────────────── */
interface BridgeTransaction {
  id: string;
  bridge: string;
  fromChain: string;
  toChain: string;
  token: string;
  amount: number;
  usdValue: number;
  status: "completed" | "pending" | "failed";
  timestamp: Date;
  txHash: string;
  estimatedTime: string;
  fee: number;
}

interface BridgeProtocol {
  name: string;
  tvl: number;
  volume24h: number;
  volume7d: number;
  chains: string[];
  fees24h: number;
  avgTime: string;
  successRate: number;
  exploitHistory: number;
  securityScore: number;
  trend: number[];
}

interface ChainFlow {
  from: string;
  to: string;
  volume24h: number;
  txCount: number;
}

/* ────────────────────────────────────────────────────────────
   Constants & Generators
──────────────────────────────────────────────────────────── */
const CHAINS = ["Ethereum", "Arbitrum", "Optimism", "Base", "Polygon", "Solana", "Avalanche", "BSC", "zkSync", "Linea", "Scroll", "Blast"];
const BRIDGES = ["Stargate", "Across", "Synapse", "Hop", "Celer", "LayerZero", "Wormhole", "deBridge", "Orbiter", "Relay"];
const TOKENS = ["ETH", "USDC", "USDT", "DAI", "WBTC", "ARB", "OP", "MATIC"];

function generateBridgeProtocols(): BridgeProtocol[] {
  return BRIDGES.map((name) => ({
    name,
    tvl: Math.random() * 3_000_000_000 + 50_000_000,
    volume24h: Math.random() * 500_000_000 + 1_000_000,
    volume7d: Math.random() * 3_000_000_000 + 10_000_000,
    chains: CHAINS.slice(0, 3 + Math.floor(Math.random() * 8)),
    fees24h: Math.random() * 500_000 + 5_000,
    avgTime: `${Math.floor(Math.random() * 15) + 1}m ${Math.floor(Math.random() * 60)}s`,
    successRate: 95 + Math.random() * 5,
    exploitHistory: Math.floor(Math.random() * 3),
    securityScore: Math.floor(70 + Math.random() * 30),
    trend: Array.from({ length: 7 }, () => Math.random() * 200_000_000 + 10_000_000),
  }));
}

function generateTransactions(): BridgeTransaction[] {
  return Array.from({ length: 30 }, (_, i) => {
    const from = CHAINS[Math.floor(Math.random() * CHAINS.length)];
    let to = CHAINS[Math.floor(Math.random() * CHAINS.length)];
    while (to === from) to = CHAINS[Math.floor(Math.random() * CHAINS.length)];
    const token = TOKENS[Math.floor(Math.random() * TOKENS.length)];
    const amount = Math.random() * 500_000 + 100;
    return {
      id: `tx-${i}`,
      bridge: BRIDGES[Math.floor(Math.random() * BRIDGES.length)],
      fromChain: from,
      toChain: to,
      token,
      amount,
      usdValue: amount * (token === "WBTC" ? 95000 : token === "ETH" ? 3800 : 1),
      status: Math.random() > 0.15 ? "completed" : Math.random() > 0.5 ? "pending" : "failed",
      timestamp: new Date(Date.now() - Math.floor(Math.random() * 86400000)),
      txHash: `0x${Math.random().toString(16).slice(2, 14)}...`,
      estimatedTime: `${Math.floor(Math.random() * 20) + 1}m`,
      fee: Math.random() * 50 + 0.5,
    };
  });
}

function generateChainFlows(): ChainFlow[] {
  const flows: ChainFlow[] = [];
  for (let i = 0; i < 20; i++) {
    const from = CHAINS[Math.floor(Math.random() * CHAINS.length)];
    let to = CHAINS[Math.floor(Math.random() * CHAINS.length)];
    while (to === from) to = CHAINS[Math.floor(Math.random() * CHAINS.length)];
    flows.push({
      from,
      to,
      volume24h: Math.random() * 100_000_000 + 500_000,
      txCount: Math.floor(Math.random() * 10_000 + 100),
    });
  }
  return flows.sort((a, b) => b.volume24h - a.volume24h);
}

/* ────────────────────────────────────────────────────────────
   Formatters & Components
──────────────────────────────────────────────────────────── */
function fmtUsd(n: number) {
  if (n >= 1e9) return `$${(n / 1e9).toFixed(2)}B`;
  if (n >= 1e6) return `$${(n / 1e6).toFixed(1)}M`;
  if (n >= 1e3) return `$${(n / 1e3).toFixed(0)}K`;
  return `$${n.toFixed(2)}`;
}

function Sparkline({ data, width = 80, height = 24 }: { data: number[]; width?: number; height?: number }) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const points = data.map((v, i) => `${(i / (data.length - 1)) * width},${height - ((v - min) / range) * height}`).join(" ");
  const color = data[data.length - 1] >= data[0] ? "#3fb950" : "#f85149";
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <polyline points={points} fill="none" stroke={color} strokeWidth={1.5} />
    </svg>
  );
}

const STATUS_STYLES: Record<string, { bg: string; color: string }> = {
  completed: { bg: "#3fb95015", color: "#3fb950" },
  pending: { bg: "#d2992215", color: "#d29922" },
  failed: { bg: "#f8514915", color: "#f85149" },
};

/* ────────────────────────────────────────────────────────────
   Main Component
──────────────────────────────────────────────────────────── */
export default function BridgeMonitorPage() {
  const [protocols, setProtocols] = useState<BridgeProtocol[]>([]);
  const [transactions, setTransactions] = useState<BridgeTransaction[]>([]);
  const [chainFlows, setChainFlows] = useState<ChainFlow[]>([]);
  const [tab, setTab] = useState<"overview" | "transactions" | "flows" | "security">("overview");
  const [bridgeFilter, setBridgeFilter] = useState("all");
  const [sortField, setSortField] = useState<"tvl" | "volume24h" | "fees24h" | "successRate">("tvl");

  useEffect(() => {
    setProtocols(generateBridgeProtocols());
    setTransactions(generateTransactions());
    setChainFlows(generateChainFlows());
  }, []);

  const sorted = useMemo(() => {
    return [...protocols].sort((a, b) => b[sortField] - a[sortField]);
  }, [protocols, sortField]);

  const totalTVL = protocols.reduce((s, p) => s + p.tvl, 0);
  const totalVol = protocols.reduce((s, p) => s + p.volume24h, 0);
  const totalFees = protocols.reduce((s, p) => s + p.fees24h, 0);

  return (
    <div style={{ minHeight: "100vh", background: "#0d1117", color: "#e6edf3" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "24px 20px" }}>
        <Breadcrumb items={[{ label: "Tools", href: "/tools" }, { label: "Bridge Monitor" }]} />

        <div style={{ marginBottom: 32 }}>
          <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8, background: "linear-gradient(135deg, #f0883e, #d29922)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Cross-Chain Bridge Monitor
          </h1>
          <p style={{ color: "#8b949e", fontSize: 15, maxWidth: 700 }}>
            Compare bridge protocols by TVL, fees, speed, and security. Track live cross-chain transactions and capital flows between networks.
          </p>
        </div>

        {/* Summary */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginBottom: 24 }}>
          {[
            { label: "Total Bridge TVL", value: fmtUsd(totalTVL), color: "#58a6ff" },
            { label: "24h Volume", value: fmtUsd(totalVol), color: "#3fb950" },
            { label: "24h Fees", value: fmtUsd(totalFees), color: "#d29922" },
            { label: "Bridges Tracked", value: String(BRIDGES.length), color: "#bc8cff" },
          ].map((c) => (
            <div key={c.label} style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: "14px 18px" }}>
              <div style={{ fontSize: 11, color: "#8b949e", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.05em" }}>{c.label}</div>
              <div style={{ fontSize: 22, fontWeight: 700, color: c.color }}>{c.value}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
          {(["overview", "transactions", "flows", "security"] as const).map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "8px 20px", borderRadius: 8, border: `1px solid ${tab === t ? "#6366f1" : "#30363d"}`,
              background: tab === t ? "#6366f120" : "#161b22", color: tab === t ? "#818cf8" : "#8b949e",
              cursor: "pointer", fontWeight: 600, fontSize: 14, textTransform: "capitalize",
            }}>
              {t === "flows" ? "Capital Flows" : t === "security" ? "Security Audit" : t}
            </button>
          ))}
        </div>

        {/* OVERVIEW TABLE */}
        {tab === "overview" && (
          <div style={{ overflowX: "auto", borderRadius: 12, border: "1px solid #30363d" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ background: "#161b22" }}>
                  {[
                    { key: "name", label: "Bridge" },
                    { key: "tvl", label: "TVL" },
                    { key: "volume24h", label: "24h Volume" },
                    { key: "fees24h", label: "24h Fees" },
                    { key: "chains", label: "Chains" },
                    { key: "avgTime", label: "Avg Time" },
                    { key: "successRate", label: "Success" },
                    { key: "trend", label: "7d Trend" },
                  ].map((h) => (
                    <th key={h.key} onClick={() => ["tvl", "volume24h", "fees24h", "successRate"].includes(h.key) ? setSortField(h.key as any) : null}
                      style={{ padding: "12px 16px", textAlign: "left", color: "#8b949e", fontWeight: 600, borderBottom: "1px solid #30363d", cursor: ["tvl", "volume24h", "fees24h", "successRate"].includes(h.key) ? "pointer" : "default" }}>
                      {h.label} {sortField === h.key ? " ▼" : ""}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sorted.map((p) => (
                  <tr key={p.name} style={{ borderBottom: "1px solid #21262d" }}>
                    <td style={{ padding: "10px 16px", fontWeight: 700 }}>{p.name}</td>
                    <td style={{ padding: "10px 16px", fontWeight: 600 }}>{fmtUsd(p.tvl)}</td>
                    <td style={{ padding: "10px 16px" }}>{fmtUsd(p.volume24h)}</td>
                    <td style={{ padding: "10px 16px" }}>{fmtUsd(p.fees24h)}</td>
                    <td style={{ padding: "10px 16px" }}>
                      <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                        {p.chains.slice(0, 4).map((c) => (
                          <span key={c} style={{ fontSize: 10, padding: "2px 6px", borderRadius: 4, background: "#21262d", color: "#8b949e" }}>{c}</span>
                        ))}
                        {p.chains.length > 4 && <span style={{ fontSize: 10, padding: "2px 6px", color: "#58a6ff" }}>+{p.chains.length - 4}</span>}
                      </div>
                    </td>
                    <td style={{ padding: "10px 16px" }}>{p.avgTime}</td>
                    <td style={{ padding: "10px 16px", color: p.successRate > 98 ? "#3fb950" : p.successRate > 95 ? "#d29922" : "#f85149", fontWeight: 600 }}>{p.successRate.toFixed(1)}%</td>
                    <td style={{ padding: "10px 16px" }}><Sparkline data={p.trend} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* TRANSACTIONS */}
        {tab === "transactions" && (
          <div>
            <div style={{ marginBottom: 12 }}>
              <select value={bridgeFilter} onChange={(e) => setBridgeFilter(e.target.value)} style={{ padding: "7px 12px", borderRadius: 8, border: "1px solid #30363d", background: "#161b22", color: "#e6edf3", fontSize: 13 }}>
                <option value="all">All Bridges</option>
                {BRIDGES.map((b) => <option key={b} value={b}>{b}</option>)}
              </select>
            </div>
            <div style={{ overflowX: "auto", borderRadius: 12, border: "1px solid #30363d" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <thead>
                  <tr style={{ background: "#161b22" }}>
                    {["Bridge", "Route", "Token", "Amount", "USD Value", "Fee", "Status", "Time"].map((h) => (
                      <th key={h} style={{ padding: "10px 14px", textAlign: "left", color: "#8b949e", fontWeight: 600, borderBottom: "1px solid #30363d" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {transactions
                    .filter((t) => bridgeFilter === "all" || t.bridge === bridgeFilter)
                    .map((t) => {
                      const st = STATUS_STYLES[t.status];
                      return (
                        <tr key={t.id} style={{ borderBottom: "1px solid #21262d" }}>
                          <td style={{ padding: "8px 14px", fontWeight: 600 }}>{t.bridge}</td>
                          <td style={{ padding: "8px 14px" }}>
                            <span style={{ color: "#58a6ff" }}>{t.fromChain}</span>
                            <span style={{ color: "#8b949e", margin: "0 6px" }}>&rarr;</span>
                            <span style={{ color: "#bc8cff" }}>{t.toChain}</span>
                          </td>
                          <td style={{ padding: "8px 14px", fontWeight: 600 }}>{t.token}</td>
                          <td style={{ padding: "8px 14px" }}>{t.amount >= 1000 ? `${(t.amount / 1000).toFixed(1)}K` : t.amount.toFixed(2)}</td>
                          <td style={{ padding: "8px 14px", fontWeight: 600 }}>{fmtUsd(t.usdValue)}</td>
                          <td style={{ padding: "8px 14px", color: "#8b949e" }}>{fmtUsd(t.fee)}</td>
                          <td style={{ padding: "8px 14px" }}>
                            <span style={{ padding: "2px 8px", borderRadius: 4, fontSize: 11, fontWeight: 600, background: st.bg, color: st.color }}>{t.status}</span>
                          </td>
                          <td style={{ padding: "8px 14px", color: "#8b949e", fontSize: 12 }}>{t.estimatedTime}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* CAPITAL FLOWS */}
        {tab === "flows" && (
          <div style={{ overflowX: "auto", borderRadius: 12, border: "1px solid #30363d" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ background: "#161b22" }}>
                  {["From", "To", "24h Volume", "Transactions", "Avg Size"].map((h) => (
                    <th key={h} style={{ padding: "12px 16px", textAlign: "left", color: "#8b949e", fontWeight: 600, borderBottom: "1px solid #30363d" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {chainFlows.slice(0, 15).map((f, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #21262d" }}>
                    <td style={{ padding: "10px 16px", fontWeight: 600, color: "#58a6ff" }}>{f.from}</td>
                    <td style={{ padding: "10px 16px", fontWeight: 600, color: "#bc8cff" }}>{f.to}</td>
                    <td style={{ padding: "10px 16px", fontWeight: 700 }}>{fmtUsd(f.volume24h)}</td>
                    <td style={{ padding: "10px 16px" }}>{f.txCount.toLocaleString()}</td>
                    <td style={{ padding: "10px 16px", color: "#8b949e" }}>{fmtUsd(f.volume24h / f.txCount)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* SECURITY */}
        {tab === "security" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 16 }}>
            {sorted.map((p) => (
              <div key={p.name} style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <span style={{ fontWeight: 700, fontSize: 16 }}>{p.name}</span>
                  <span style={{
                    padding: "4px 12px", borderRadius: 8, fontSize: 14, fontWeight: 700,
                    background: p.securityScore >= 90 ? "#3fb95015" : p.securityScore >= 75 ? "#d2992215" : "#f8514915",
                    color: p.securityScore >= 90 ? "#3fb950" : p.securityScore >= 75 ? "#d29922" : "#f85149",
                  }}>{p.securityScore}/100</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, fontSize: 13 }}>
                  <div><span style={{ color: "#8b949e" }}>Success Rate</span><div style={{ fontWeight: 600, color: p.successRate > 98 ? "#3fb950" : "#d29922" }}>{p.successRate.toFixed(2)}%</div></div>
                  <div><span style={{ color: "#8b949e" }}>Past Exploits</span><div style={{ fontWeight: 600, color: p.exploitHistory === 0 ? "#3fb950" : "#f85149" }}>{p.exploitHistory}</div></div>
                  <div><span style={{ color: "#8b949e" }}>TVL</span><div style={{ fontWeight: 600 }}>{fmtUsd(p.tvl)}</div></div>
                  <div><span style={{ color: "#8b949e" }}>Chains</span><div style={{ fontWeight: 600 }}>{p.chains.length}</div></div>
                </div>
                {/* Security score bar */}
                <div style={{ marginTop: 12, height: 6, background: "#21262d", borderRadius: 3 }}>
                  <div style={{ width: `${p.securityScore}%`, height: "100%", borderRadius: 3, background: p.securityScore >= 90 ? "#3fb950" : p.securityScore >= 75 ? "#d29922" : "#f85149" }} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
