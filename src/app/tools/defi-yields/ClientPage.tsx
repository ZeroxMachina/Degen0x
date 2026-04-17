'use client';

"use client";

import { useState, useMemo } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedContent from '@/components/RelatedContent';

// ── Types ─────────────────────────────────────────────────────────────────────
type Chain = "All" | "Ethereum" | "Solana" | "Arbitrum" | "Base" | "Avalanche" | "Polygon" | "BNB";
type RiskLevel = "All" | "Low" | "Medium" | "High";
type Category = "All" | "Lending" | "Liquid Staking" | "DEX LP" | "Yield Vault";

interface Protocol {
  name: string;
  token: string;
  chain: Chain;
  category: Category;
  apy: number;
  tvl: number; // in millions USD
  riskLevel: RiskLevel;
  riskReason: string;
  color: string;
  icon: string;
  url: string;
  lockPeriod: string;
  audited: boolean;
  description: string;
  change7d: number;
}

// ── Protocol Data (static, updated March 2026) ────────────────────────────────
const PROTOCOLS: Protocol[] = [
  { name: "Lido Finance", token: "ETH", chain: "Ethereum", category: "Liquid Staking", apy: 3.8, tvl: 28400, riskLevel: "Low", riskReason: "Largest LST, Ethereum-native", color: "#00a3ff", icon: "🔵", url: "/go/lido", lockPeriod: "None (stETH liquid)", audited: true, description: "Stake ETH and receive stETH, a liquid token earning Ethereum staking rewards.", change7d: 0.05 },
  { name: "Aave V3", token: "USDC", chain: "Ethereum", category: "Lending", apy: 5.2, tvl: 12800, riskLevel: "Low", riskReason: "Largest lending protocol, multi-audited", color: "#b6509e", icon: "👻", url: "/go/aave", lockPeriod: "None (instant withdraw)", audited: true, description: "Supply USDC to Aave's money market and earn variable lending APY from borrowers.", change7d: -0.3 },
  { name: "Aave V3", token: "USDT", chain: "Arbitrum", category: "Lending", apy: 6.1, tvl: 4200, riskLevel: "Low", riskReason: "Aave on L2 — lower gas costs", color: "#b6509e", icon: "👻", url: "/go/aave", lockPeriod: "None", audited: true, description: "Earn higher yields on Aave's Arbitrum deployment with lower transaction costs.", change7d: 0.8 },
  { name: "Compound V3", token: "USDC", chain: "Base", category: "Lending", apy: 5.8, tvl: 2100, riskLevel: "Low", riskReason: "Battle-tested protocol on Base L2", color: "#00d395", icon: "🔷", url: "/go/compound", lockPeriod: "None", audited: true, description: "Supply USDC to Compound's Comet market on Base for competitive stable yields.", change7d: 0.1 },
  { name: "Curve Finance", token: "3CRV", chain: "Ethereum", category: "DEX LP", apy: 4.5, tvl: 8900, riskLevel: "Medium", riskReason: "Smart contract risk + impermanent loss minimal on stablecoins", color: "#d6d1c7", icon: "♻️", url: "/go/curve", lockPeriod: "None (LP exit anytime)", audited: true, description: "Provide liquidity to Curve's 3pool (DAI/USDC/USDT) stablecoin pool.", change7d: -0.2 },
  { name: "Curve Finance", token: "ETH/stETH", chain: "Ethereum", category: "DEX LP", apy: 5.9, tvl: 5600, riskLevel: "Medium", riskReason: "stETH depeg risk, smart contract risk", color: "#d6d1c7", icon: "♻️", url: "/go/curve", lockPeriod: "None", audited: true, description: "ETH/stETH LP — earns trading fees + CRV rewards with minimal impermanent loss.", change7d: 0.4 },
  { name: "Uniswap V4", token: "ETH/USDC", chain: "Ethereum", category: "DEX LP", apy: 18.4, tvl: 3400, riskLevel: "High", riskReason: "High impermanent loss risk — concentrated liquidity", color: "#ff007a", icon: "🦄", url: "/go/uniswap", lockPeriod: "None", audited: true, description: "Provide concentrated liquidity to ETH/USDC 0.05% fee tier — higher fees, higher IL risk.", change7d: 2.1 },
  { name: "Uniswap V4", token: "SOL/USDC", chain: "Arbitrum", category: "DEX LP", apy: 22.7, tvl: 1800, riskLevel: "High", riskReason: "High volatility pair — significant impermanent loss possible", color: "#ff007a", icon: "🦄", url: "/go/uniswap", lockPeriod: "None", audited: true, description: "Earn trading fees as a liquidity provider for the SOL/USDC volatile pair.", change7d: -1.5 },
  { name: "Jito", token: "SOL", chain: "Solana", category: "Liquid Staking", apy: 7.2, tvl: 4100, riskLevel: "Low", riskReason: "Solana's largest LST — Jito MEV rewards included", color: "#9945FF", icon: "🟣", url: "/go/jito", lockPeriod: "~2-3 days unstake", audited: true, description: "Stake SOL with Jito and earn Solana network APY + MEV tip rewards via jitoSOL.", change7d: 0.15 },
  { name: "Marinade Finance", token: "SOL", chain: "Solana", category: "Liquid Staking", apy: 6.8, tvl: 1900, riskLevel: "Low", riskReason: "Delegated to 400+ validators — decentralized", color: "#54f5b7", icon: "🟩", url: "/go/marinade", lockPeriod: "None (mSOL liquid)", audited: true, description: "Stake SOL and receive mSOL. Delegated across 400+ Solana validators for safety.", change7d: -0.05 },
  { name: "Yearn Finance", token: "USDC", chain: "Ethereum", category: "Yield Vault", apy: 7.4, tvl: 890, riskLevel: "Medium", riskReason: "Automated strategies — smart contract stack risk", color: "#0657f9", icon: "🔮", url: "/go/yearn", lockPeriod: "None (instant)", audited: true, description: "Yearn's USDC vault automatically rotates yield strategies across lending protocols.", change7d: 0.6 },
  { name: "Yearn Finance", token: "ETH", chain: "Ethereum", category: "Yield Vault", apy: 6.2, tvl: 640, riskLevel: "Medium", riskReason: "Strategy risk, but ETH-denominated", color: "#0657f9", icon: "🔮", url: "/go/yearn", lockPeriod: "None", audited: true, description: "ETH vault that maximizes yield by deploying ETH across liquid staking + lending.", change7d: 0.3 },
  { name: "Pendle Finance", token: "eETH", chain: "Ethereum", category: "Yield Vault", apy: 12.8, tvl: 1200, riskLevel: "Medium", riskReason: "Novel PT/YT model — yield tokenization risk", color: "#4ade80", icon: "🌱", url: "/go/pendle", lockPeriod: "Until maturity (6–12 mo)", audited: true, description: "Lock eETH on Pendle to receive fixed yield — or buy YT tokens to speculate on rising rates.", change7d: 1.2 },
  { name: "Morpho Blue", token: "USDC", chain: "Ethereum", category: "Lending", apy: 8.6, tvl: 2800, riskLevel: "Medium", riskReason: "Newer protocol — peer-to-peer matching", color: "#1976d2", icon: "🔷", url: "/go/morpho", lockPeriod: "None", audited: true, description: "Earn enhanced USDC lending yields via Morpho's peer-to-peer matching on top of Aave/Compound.", change7d: -0.4 },
  { name: "BENQI", token: "AVAX", chain: "Avalanche", category: "Lending", apy: 5.4, tvl: 580, riskLevel: "Medium", riskReason: "Chain concentration risk — Avalanche only", color: "#e84142", icon: "🔺", url: "/go/benqi", lockPeriod: "None", audited: true, description: "Largest lending protocol on Avalanche — earn yield by supplying AVAX.", change7d: 0.9 },
  { name: "Venus Protocol", token: "BNB", chain: "BNB", category: "Lending", apy: 4.9, tvl: 1100, riskLevel: "Medium", riskReason: "BNB Chain centralization, oracle risk history", color: "#f0b90b", icon: "🌸", url: "/go/venus", lockPeriod: "None", audited: true, description: "BNB Chain's leading lending protocol — supply BNB for variable yield.", change7d: 0.2 },
  { name: "Orca", token: "SOL/USDC", chain: "Solana", category: "DEX LP", apy: 15.3, tvl: 920, riskLevel: "High", riskReason: "Volatile pair — concentrated liquidity IL risk", color: "#a78bfa", icon: "🐋", url: "/go/orca", lockPeriod: "None", audited: true, description: "Concentrated liquidity pools on Solana — earn trading fees on SOL/USDC pair.", change7d: -0.8 },
  { name: "Stargate Finance", token: "USDC", chain: "Arbitrum", category: "Lending", apy: 9.2, tvl: 340, riskLevel: "High", riskReason: "Cross-chain bridge risk — novel security model", color: "#6366f1", icon: "⭐", url: "/go/stargate", lockPeriod: "None (some wait on rebalance)", audited: true, description: "Bridge liquidity on Stargate — earn from cross-chain transfer fees on USDC flows.", change7d: 1.8 },
  { name: "Fluid Protocol", token: "USDC", chain: "Ethereum", category: "Lending", apy: 7.8, tvl: 620, riskLevel: "Medium", riskReason: "Newer protocol, growing but less proven", color: "#06b6d4", icon: "💧", url: "/go/fluid", lockPeriod: "None", audited: true, description: "Fluid combines lending + DEX LP in smart collateral for enhanced USDC yields.", change7d: 2.5 },
  { name: "Rocket Pool", token: "ETH", chain: "Ethereum", category: "Liquid Staking", apy: 3.5, tvl: 3200, riskLevel: "Low", riskReason: "Decentralized ETH staking — no single entity", color: "#e97738", icon: "🚀", url: "/go/rocketpool", lockPeriod: "None (rETH liquid)", audited: true, description: "Decentralized ETH liquid staking — rETH accrues staking rewards, no central custodian.", change7d: 0.0 },
];

function fmtApy(n: number): string {
  return n.toFixed(1) + "%";
}
function fmtTvl(n: number): string {
  if (n >= 1000) return "$" + (n / 1000).toFixed(1) + "B";
  return "$" + n.toFixed(0) + "M";
}

const RISK_COLORS: Record<RiskLevel, string> = {
  All: "#8b949e",
  Low: "#3fb950",
  Medium: "#d29922",
  High: "#f85149",
};

const S = {
  bg: "#0d1117",
  surface: "#161b22",
  surface2: "#1c2330",
  border: "#30363d",
  text: "#e6edf3",
  text2: "#8b949e",
  green: "#3fb950",
  blue: "#58a6ff",
  purple: "#818cf8",
  red: "#f85149",
  orange: "#f0883e",
  yellow: "#d29922",
};

type SortKey = "apy" | "tvl" | "riskLevel" | "name";

export default function DeFiYieldsPage() {
  const [chain, setChain] = useState<Chain>("All");
  const [risk, setRisk] = useState<RiskLevel>("All");
  const [category, setCategory] = useState<Category>("All");
  const [sort, setSort] = useState<SortKey>("apy");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
  const [amount, setAmount] = useState(10000);

  const chains: Chain[] = ["All", "Ethereum", "Solana", "Arbitrum", "Base", "Avalanche", "Polygon", "BNB"];
  const risks: RiskLevel[] = ["All", "Low", "Medium", "High"];
  const categories: Category[] = ["All", "Lending", "Liquid Staking", "DEX LP", "Yield Vault"];

  const filtered = useMemo(() => {
    let list = PROTOCOLS;
    if (chain !== "All") list = list.filter(p => p.chain === chain);
    if (risk !== "All") list = list.filter(p => p.riskLevel === risk);
    if (category !== "All") list = list.filter(p => p.category === category);

    return list.sort((a, b) => {
      const dir = sortDir === "desc" ? -1 : 1;
      if (sort === "apy") return dir * (a.apy - b.apy);
      if (sort === "tvl") return dir * (a.tvl - b.tvl);
      if (sort === "riskLevel") {
        const order: Record<string, number> = { Low: 0, Medium: 1, High: 2 };
        return dir * (order[a.riskLevel] - order[b.riskLevel]);
      }
      return dir * a.name.localeCompare(b.name);
    });
  }, [chain, risk, category, sort, sortDir]);

  const avgApy = filtered.length > 0 ? filtered.reduce((s, p) => s + p.apy, 0) / filtered.length : 0;
  const totalTvl = PROTOCOLS.reduce((s, p) => s + p.tvl, 0);

  function toggleSort(key: SortKey) {
    if (sort === key) setSortDir(d => d === "desc" ? "asc" : "desc");
    else { setSort(key); setSortDir("desc"); }
  };

  const chipStyle = (active: boolean, color: string) => ({
    padding: "6px 14px",
    borderRadius: 20,
    fontSize: 12,
    fontWeight: 700,
    cursor: "pointer",
    border: `1px solid ${active ? color : S.border}`,
    background: active ? color + "20" : S.surface2,
    color: active ? color : S.text2,
    whiteSpace: "nowrap" as const,
  });

  const thStyle = (key: SortKey) => ({
    padding: "10px 12px",
    color: sort === key ? S.blue : S.text2,
    fontWeight: 700,
    fontSize: 12,
    textAlign: "left" as const,
    cursor: "pointer",
    whiteSpace: "nowrap" as const,
    userSelect: "none" as const,
  });

  return (
    <div style={{ minHeight: "100vh", background: S.bg, color: S.text }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px 80px" }}>
        <Breadcrumb items={[{ label: "Tools", href: "/tools" }, { label: "DeFi Yield Aggregator", href: "/tools/defi-yields" }]} />

        {/* Header */}
        <div style={{ paddingBottom: 28, paddingTop: 20 }}>
          <div style={{ display: "inline-block", padding: "4px 14px", background: "#22c55e20", border: "1px solid #22c55e40", borderRadius: 20, fontSize: 12, color: S.green, fontWeight: 600, marginBottom: 14 }}>
            🌾 DeFi Yield Aggregator
          </div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 10 }}>
            Best DeFi Yields — March 2026
          </h1>
          <p style={{ color: S.text2, fontSize: 15, maxWidth: 640 }}>
            Compare live DeFi yields across Aave, Compound, Curve, Uniswap, Lido, Jito, and 15+ protocols. Filter by chain, risk level, and category.
          </p>
        </div>

        {/* Stats Row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 24 }}>
          {[
            { label: "Protocols Tracked", val: PROTOCOLS.length.toString(), color: S.purple },
            { label: "Total TVL", val: fmtTvl(totalTvl), color: S.blue },
            { label: "Avg APY (filtered)", val: fmtApy(avgApy), color: S.green },
            { label: "Chains Covered", val: "7", color: S.orange },
          ].map(s => (
            <div key={s.label} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 16 }}>
              <div style={{ fontSize: 22, fontWeight: 900, color: s.color }}>{s.val}</div>
              <div style={{ fontSize: 11, color: S.text2, marginTop: 4, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Yield on Amount Calculator */}
        <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 14, padding: 20, marginBottom: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <div style={{ fontSize: 14, fontWeight: 700 }}>💰 Calculate your yield:</div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ color: S.text2, fontSize: 13 }}>Invest</span>
              <input
                type="number"
                value={amount}
                onChange={e => setAmount(Number(e.target.value))}
                style={{ background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 8, color: S.text, padding: "6px 12px", fontSize: 14, fontWeight: 700, width: 140 }}
                min={100}
                step={1000}
              />
              <span style={{ color: S.text2, fontSize: 13 }}>USD — annual yield at top protocols:</span>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {filtered.slice(0, 3).map(p => (
                <div key={`${p.name}-${p.token}`} style={{ background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 8, padding: "6px 14px", fontSize: 13 }}>
                  <span style={{ color: S.text2 }}>{p.name} ({p.token}): </span>
                  <span style={{ fontWeight: 800, color: S.green }}>${((amount * p.apy) / 100).toLocaleString("en-US", { maximumFractionDigits: 0 })}/yr</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Filters */}
        <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 14, padding: 18, marginBottom: 20 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div>
              <div style={{ fontSize: 11, color: S.text2, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>Chain</div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {chains.map(c => (
                  <button key={c} onClick={() => setChain(c)} style={chipStyle(chain === c, S.blue)}>{c}</button>
                ))}
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div>
                <div style={{ fontSize: 11, color: S.text2, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>Risk Level</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {risks.map(r => (
                    <button key={r} onClick={() => setRisk(r)} style={chipStyle(risk === r, RISK_COLORS[r])}>{r}</button>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ fontSize: 11, color: S.text2, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>Category</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {categories.map(c => (
                    <button key={c} onClick={() => setCategory(c)} style={chipStyle(category === c, S.purple)}>{c}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div style={{ fontSize: 13, color: S.text2, marginBottom: 12 }}>
          Showing <strong style={{ color: S.text }}>{filtered.length}</strong> of {PROTOCOLS.length} protocols
        </div>

        {/* Table */}
        <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 14, overflow: "hidden" }}>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${S.border}`, background: S.surface2 }}>
                  <th style={thStyle("name")} onClick={() => toggleSort("name")}>Protocol {sort === "name" ? (sortDir === "desc" ? "↓" : "↑") : ""}</th>
                  <th style={{ ...thStyle("name"), cursor: "default" }}>Token / Chain</th>
                  <th style={{ ...thStyle("name"), cursor: "default" }}>Category</th>
                  <th style={thStyle("apy")} onClick={() => toggleSort("apy")}>APY {sort === "apy" ? (sortDir === "desc" ? "↓" : "↑") : "↕"}</th>
                  <th style={thStyle("tvl")} onClick={() => toggleSort("tvl")}>TVL {sort === "tvl" ? (sortDir === "desc" ? "↓" : "↑") : "↕"}</th>
                  <th style={thStyle("riskLevel")} onClick={() => toggleSort("riskLevel")}>Risk {sort === "riskLevel" ? (sortDir === "desc" ? "↓" : "↑") : "↕"}</th>
                  <th style={{ ...thStyle("name"), cursor: "default" }}>Lock Period</th>
                  <th style={{ ...thStyle("name"), cursor: "default" }}>7d Change</th>
                  <th style={{ ...thStyle("name"), cursor: "default" }}>Yield on {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(amount)}</th>
                  <th style={{ ...thStyle("name"), cursor: "default" }}></th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((p, i) => (
                  <tr key={`${p.name}-${p.token}-${i}`} style={{
                    borderBottom: `1px solid ${S.border}30`,
                    background: i % 2 === 0 ? "transparent" : `${S.surface2}50`,
                  }}>
                    <td style={{ padding: "14px 12px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div style={{ fontSize: 22 }}>{p.icon}</div>
                        <div>
                          <div style={{ fontWeight: 800, fontSize: 14 }}>{p.name}</div>
                          {p.audited && (
                            <div style={{ fontSize: 10, color: S.green, fontWeight: 700 }}>✓ Audited</div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: "14px 12px" }}>
                      <div style={{ fontWeight: 700, fontSize: 14 }}>{p.token}</div>
                      <div style={{ fontSize: 11, color: S.text2, marginTop: 2 }}>{p.chain}</div>
                    </td>
                    <td style={{ padding: "14px 12px" }}>
                      <span style={{
                        fontSize: 11, fontWeight: 700, padding: "3px 8px", borderRadius: 6,
                        background: p.category === "Lending" ? "#58a6ff15" : p.category === "Liquid Staking" ? "#3fb95015" : p.category === "DEX LP" ? "#ff007a15" : "#bc8cff15",
                        color: p.category === "Lending" ? S.blue : p.category === "Liquid Staking" ? S.green : p.category === "DEX LP" ? "#ff007a" : S.purple,
                        border: `1px solid ${p.category === "Lending" ? S.blue : p.category === "Liquid Staking" ? S.green : p.category === "DEX LP" ? "#ff007a" : S.purple}30`,
                      }}>
                        {p.category}
                      </span>
                    </td>
                    <td style={{ padding: "14px 12px" }}>
                      <div style={{ fontSize: 20, fontWeight: 900, color: p.apy >= 10 ? S.orange : p.apy >= 6 ? S.green : S.text }}>
                        {fmtApy(p.apy)}
                      </div>
                    </td>
                    <td style={{ padding: "14px 12px" }}>
                      <div style={{ fontSize: 14, fontWeight: 700 }}>{fmtTvl(p.tvl)}</div>
                    </td>
                    <td style={{ padding: "14px 12px" }}>
                      <span style={{
                        fontSize: 11, fontWeight: 700, padding: "3px 8px", borderRadius: 6,
                        background: RISK_COLORS[p.riskLevel] + "15",
                        color: RISK_COLORS[p.riskLevel],
                        border: `1px solid ${RISK_COLORS[p.riskLevel]}30`,
                      }}>
                        {p.riskLevel}
                      </span>
                      <div style={{ fontSize: 10, color: S.text2, marginTop: 4, maxWidth: 140, lineHeight: 1.4 }}>{p.riskReason}</div>
                    </td>
                    <td style={{ padding: "14px 12px", fontSize: 12, color: S.text2 }}>{p.lockPeriod}</td>
                    <td style={{ padding: "14px 12px" }}>
                      <span style={{ fontWeight: 700, fontSize: 13, color: p.change7d >= 0 ? S.green : S.red }}>
                        {p.change7d >= 0 ? "+" : ""}{p.change7d.toFixed(2)}%
                      </span>
                    </td>
                    <td style={{ padding: "14px 12px" }}>
                      <div style={{ fontSize: 14, fontWeight: 800, color: S.green }}>
                        +${((amount * p.apy) / 100).toLocaleString("en-US", { maximumFractionDigits: 0 })}/yr
                      </div>
                      <div style={{ fontSize: 11, color: S.text2, marginTop: 2 }}>
                        ${((amount * p.apy) / 100 / 12).toLocaleString("en-US", { maximumFractionDigits: 0 })}/mo
                      </div>
                    </td>
                    <td style={{ padding: "14px 12px" }}>
                      <a href={p.url} style={{
                        display: "inline-block", padding: "6px 14px", borderRadius: 8, fontSize: 12, fontWeight: 700,
                        background: p.color + "20", border: `1px solid ${p.color}40`, color: p.color,
                        textDecoration: "none",
                      }}>
                        Earn →
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Risk Guide */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 28 }}>
          {[
            { level: "Low" as RiskLevel, desc: "Battle-tested protocols (Aave, Lido, Compound) with 2+ years of operation, multi-audits, and deep liquidity. Suitable for most investors.", examples: "Lido ETH, Aave USDC, Compound, Rocket Pool" },
            { level: "Medium" as RiskLevel, desc: "Solid protocols with some additional risk vectors — newer deployments, algorithmic strategies, or multi-step yield sources. Do your own research.", examples: "Curve LP, Yearn Vaults, Morpho, Pendle" },
            { level: "High" as RiskLevel, desc: "Higher APY comes with higher risk — concentrated liquidity (impermanent loss), novel mechanisms, or bridge risk. Only invest what you can afford to lose.", examples: "Uniswap V4 concentrated, Stargate, volatile pairs" },
          ].map(r => (
            <div key={r.level} style={{ background: S.surface, border: `1px solid ${RISK_COLORS[r.level]}30`, borderRadius: 12, padding: 18, borderTop: `3px solid ${RISK_COLORS[r.level]}` }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <span style={{ fontSize: 14, fontWeight: 800, color: RISK_COLORS[r.level] }}>{r.level} Risk</span>
              </div>
              <p style={{ fontSize: 12, color: S.text2, lineHeight: 1.6, marginBottom: 10 }}>{r.desc}</p>
              <div style={{ fontSize: 11, color: S.text2 }}><strong style={{ color: S.text }}>Examples:</strong> {r.examples}</div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div style={{ background: "#d2992215", border: `1px solid #d2992240`, borderRadius: 10, padding: 14, marginTop: 24, fontSize: 12, color: S.yellow, lineHeight: 1.7 }}>
          ⚠️ <strong>Important:</strong> APY rates are approximations and change constantly. DeFi carries smart contract, liquidity, and market risks — including total loss of funds. This is not financial advice. Always DYOR and never invest more than you can afford to lose. Data updated March 2026.
        </div>
      </div>
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Defi Yields",
              "url": "https://degen0x.com/tools/defi-yields",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            })
          }}
        />
      <RelatedContent category="tools" currentSlug="/tools/defi-yields" />
      </div>
  );
}
