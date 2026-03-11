"use client";

import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";

interface StakingOption {
  rank: number;
  coin: string;
  symbol: string;
  color: string;
  platform: string;
  apy: number;
  apyRange: string;
  minStake: string;
  lockup: string;
  risk: "Low" | "Medium" | "High";
  type: "Native" | "Liquid" | "Exchange" | "DeFi";
  audited: boolean;
  link: string;
  description: string;
}

const STAKING_DATA: StakingOption[] = [
  {
    rank: 1,
    coin: "Ethereum",
    symbol: "ETH",
    color: "#627EEA",
    platform: "Lido Finance (stETH)",
    apy: 3.8,
    apyRange: "3.5% – 4.2%",
    minStake: "Any amount",
    lockup: "No lockup (liquid)",
    risk: "Low",
    type: "Liquid",
    audited: true,
    link: "/defi-lending/best/ethereum-staking",
    description: "Largest liquid staking protocol. Stake any amount of ETH and receive stETH tokens you can use in DeFi while earning rewards.",
  },
  {
    rank: 2,
    coin: "Solana",
    symbol: "SOL",
    color: "#9945FF",
    platform: "Native Solana Staking",
    apy: 6.5,
    apyRange: "6.0% – 7.2%",
    minStake: "~0.01 SOL",
    lockup: "2-3 day unbonding",
    risk: "Low",
    type: "Native",
    audited: true,
    link: "/investing/best/staking",
    description: "Delegate SOL to validators directly via Phantom or Solflare wallet. No minimum required, competitive APY with short unbonding.",
  },
  {
    rank: 3,
    coin: "Polkadot",
    symbol: "DOT",
    color: "#E6007A",
    platform: "Native DOT Staking",
    apy: 12.0,
    apyRange: "10% – 14%",
    minStake: "250 DOT (~$2,050)",
    lockup: "28-day unbonding",
    risk: "Medium",
    type: "Native",
    audited: true,
    link: "/investing/best/staking",
    description: "One of the highest native staking APYs in crypto. Long unbonding period means less flexibility — best for long-term holders.",
  },
  {
    rank: 4,
    coin: "Cosmos",
    symbol: "ATOM",
    color: "#2E3148",
    platform: "Native ATOM Staking",
    apy: 14.5,
    apyRange: "12% – 17%",
    minStake: "Any amount",
    lockup: "21-day unbonding",
    risk: "Medium",
    type: "Native",
    audited: true,
    link: "/investing/best/staking",
    description: "Staking ATOM secures the Cosmos Hub and earns high rewards. Long-term holders benefit most given the 21-day unbonding period.",
  },
  {
    rank: 5,
    coin: "Cardano",
    symbol: "ADA",
    color: "#0033AD",
    platform: "Native ADA Staking",
    apy: 3.2,
    apyRange: "2.8% – 3.8%",
    minStake: "Any amount",
    lockup: "No lockup",
    risk: "Low",
    type: "Native",
    audited: true,
    link: "/investing/best/staking",
    description: "Delegate ADA with no lockup period and keep full custody of your tokens. Rewards distributed every 5 days (epoch).",
  },
  {
    rank: 6,
    coin: "Avalanche",
    symbol: "AVAX",
    color: "#E84142",
    platform: "Native AVAX Staking",
    apy: 8.0,
    apyRange: "7% – 9%",
    minStake: "25 AVAX (~$963)",
    lockup: "2 weeks – 1 year",
    risk: "Low",
    type: "Native",
    audited: true,
    link: "/investing/best/staking",
    description: "Validator staking requires 2,000 AVAX but delegation starts at 25 AVAX. Longer stake periods earn higher rewards.",
  },
  {
    rank: 7,
    coin: "BNB",
    symbol: "BNB",
    color: "#F0B90B",
    platform: "Binance Earn",
    apy: 5.5,
    apyRange: "4% – 7%",
    minStake: "0.1 BNB",
    lockup: "Flexible or 30/60/90 days",
    risk: "Medium",
    type: "Exchange",
    audited: false,
    link: "/exchanges/best",
    description: "Binance offers flexible and locked BNB staking with competitive APY. Locked periods offer higher rates. Exchange custody risk applies.",
  },
  {
    rank: 8,
    coin: "Ethereum",
    symbol: "ETH",
    color: "#627EEA",
    platform: "Rocket Pool (rETH)",
    apy: 3.5,
    apyRange: "3.2% – 4.0%",
    minStake: "Any amount",
    lockup: "No lockup (liquid)",
    risk: "Low",
    type: "Liquid",
    audited: true,
    link: "/defi-lending/best/ethereum-staking",
    description: "Decentralized alternative to Lido. More decentralized node operator set, slightly lower APY vs Lido. Ideal for decentralization-focused stakers.",
  },
  {
    rank: 9,
    coin: "Tron",
    symbol: "TRX",
    color: "#EB0029",
    platform: "Native TRX Staking",
    apy: 4.5,
    apyRange: "3.5% – 5.5%",
    minStake: "Any amount",
    lockup: "3-day unstaking",
    risk: "Medium",
    type: "Native",
    audited: false,
    link: "/investing/best/staking",
    description: "Freeze TRX to gain energy/bandwidth resources and vote for Super Representatives. Short unstaking period with moderate APY.",
  },
  {
    rank: 10,
    coin: "Near Protocol",
    symbol: "NEAR",
    color: "#00EC97",
    platform: "Native NEAR Staking",
    apy: 9.5,
    apyRange: "8% – 11%",
    minStake: "Any amount",
    lockup: "52-72 hour unbonding",
    risk: "Low",
    type: "Native",
    audited: true,
    link: "/investing/best/staking",
    description: "High APY with a short unbonding period. Delegate NEAR directly from your wallet with no minimum requirement.",
  },
  {
    rank: 11,
    coin: "Polygon",
    symbol: "MATIC",
    color: "#8247E5",
    platform: "Native MATIC Staking",
    apy: 5.2,
    apyRange: "4.5% – 6%",
    minStake: "1 MATIC",
    lockup: "~9 days unbonding",
    risk: "Low",
    type: "Native",
    audited: true,
    link: "/investing/best/staking",
    description: "Delegate MATIC to validators on the Polygon network. Low minimum, relatively short unbonding — good risk/reward for medium-term holders.",
  },
  {
    rank: 12,
    coin: "Aptos",
    symbol: "APT",
    color: "#00D2FF",
    platform: "Native APT Staking",
    apy: 7.0,
    apyRange: "6% – 8%",
    minStake: "11 APT (~$110)",
    lockup: "30-day lockup",
    risk: "Medium",
    type: "Native",
    audited: true,
    link: "/investing/best/staking",
    description: "Delegate APT to validators for solid mid-range APY. 30-day lockup means you need conviction in your position.",
  },
];

const RISK_COLORS = { Low: "#3fb950", Medium: "#d29922", High: "#f85149" };
const TYPE_COLORS = { Native: "#58a6ff", Liquid: "#bc8cff", Exchange: "#f0883e", DeFi: "#39d353" };

export default function StakingAPYLeaderboardPage() {
  const [sortBy, setSortBy] = useState<"apy" | "rank">("apy");
  const [riskFilter, setRiskFilter] = useState<"all" | "Low" | "Medium" | "High">("all");
  const [typeFilter, setTypeFilter] = useState<"all" | "Native" | "Liquid" | "Exchange" | "DeFi">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = STAKING_DATA
    .filter((s) => riskFilter === "all" || s.risk === riskFilter)
    .filter((s) => typeFilter === "all" || s.type === typeFilter)
    .filter((s) =>
      !searchQuery ||
      s.coin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.platform.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => sortBy === "apy" ? b.apy - a.apy : a.rank - b.rank);

  const avgApy = filtered.length > 0 ? filtered.reduce((s, x) => s + x.apy, 0) / filtered.length : 0;
  const topApy = filtered.length > 0 ? Math.max(...filtered.map((x) => x.apy)) : 0;

  const cardStyle = {
    background: "rgba(22,27,34,0.9)",
    border: "1px solid #30363d",
    borderRadius: "12px",
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0d1117", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Investing", href: "/investing" },
            { label: "Tools", href: "/investing/tools" },
            { label: "Staking APY Leaderboard" },
          ]}
        />

        {/* Header */}
        <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#e6edf3", letterSpacing: "-0.02em", marginBottom: "0.5rem" }}>
            🏆 Best Crypto Staking Rewards 2026
          </h1>
          <p style={{ color: "#8b949e", fontSize: "1.1rem", maxWidth: "750px" }}>
            Compare staking APYs across 12 major cryptocurrencies. Updated weekly. Find the best staking rewards based on your risk tolerance, lockup preference, and amount.
          </p>
          <p style={{ color: "#6e7681", fontSize: "0.8rem", marginTop: "0.5rem" }}>
            📅 Last updated: March 9, 2026 · Data sourced from validator networks, DeFi protocols, and exchange platforms
          </p>
        </div>

        {/* Summary Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
          {[
            { label: "Assets Listed", value: `${STAKING_DATA.length}`, color: "#58a6ff" },
            { label: "Top APY", value: `${topApy.toFixed(1)}%`, color: "#3fb950" },
            { label: "Avg APY (filtered)", value: `${avgApy.toFixed(1)}%`, color: "#d29922" },
            { label: "No-Lockup Options", value: `${STAKING_DATA.filter((s) => s.lockup.toLowerCase().includes("no lockup")).length}`, color: "#bc8cff" },
          ].map((s) => (
            <div key={s.label} style={{ ...cardStyle, padding: "1.25rem" }}>
              <div style={{ fontSize: "0.72rem", color: "#8b949e", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "0.4rem" }}>{s.label}</div>
              <div style={{ fontSize: "1.6rem", fontWeight: "800", color: s.color }}>{s.value}</div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div style={{ ...cardStyle, padding: "1rem 1.25rem", marginBottom: "1.5rem", display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "flex-end" }}>
          <div>
            <label style={{ display: "block", fontSize: "0.72rem", color: "#8b949e", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.3rem" }}>Search</label>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="e.g. Ethereum, SOL…"
              style={{ padding: "0.5rem 0.75rem", background: "#161b22", border: "1px solid #30363d", borderRadius: "8px", color: "#e6edf3", fontSize: "0.875rem", width: "180px" }}
            />
          </div>
          {[
            { label: "Risk", value: riskFilter, setter: (v: string) => setRiskFilter(v as typeof riskFilter), options: ["all", "Low", "Medium", "High"] },
            { label: "Type", value: typeFilter, setter: (v: string) => setTypeFilter(v as typeof typeFilter), options: ["all", "Native", "Liquid", "Exchange", "DeFi"] },
            { label: "Sort By", value: sortBy, setter: (v: string) => setSortBy(v as typeof sortBy), options: ["apy", "rank"] },
          ].map((f) => (
            <div key={f.label}>
              <label style={{ display: "block", fontSize: "0.72rem", color: "#8b949e", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.3rem" }}>{f.label}</label>
              <select
                value={f.value}
                onChange={(e) => f.setter(e.target.value)}
                style={{ padding: "0.5rem 0.75rem", background: "#161b22", border: "1px solid #30363d", borderRadius: "8px", color: "#e6edf3", fontSize: "0.875rem", cursor: "pointer" }}
              >
                {f.options.map((o) => (
                  <option key={o} value={o}>{o === "all" ? "All" : o === "apy" ? "Highest APY" : o === "rank" ? "Our Ranking" : o}</option>
                ))}
              </select>
            </div>
          ))}
          <span style={{ color: "#6e7681", fontSize: "0.8rem", marginLeft: "auto", alignSelf: "center" }}>
            Showing {filtered.length} of {STAKING_DATA.length} options
          </span>
        </div>

        {/* Leaderboard Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {filtered.map((s, idx) => (
            <div
              key={`${s.platform}-${s.symbol}`}
              style={{
                ...cardStyle,
                padding: "1.25rem 1.5rem",
                display: "grid",
                gridTemplateColumns: "40px 1fr auto",
                gap: "1rem",
                alignItems: "center",
                transition: "border-color 0.15s",
                borderLeft: `3px solid ${s.color}`,
              }}
            >
              {/* Rank */}
              <div style={{ textAlign: "center" }}>
                <span style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  width: "32px", height: "32px", borderRadius: "50%",
                  background: idx < 3 ? "rgba(212,175,55,0.15)" : "rgba(139,148,158,0.1)",
                  color: idx < 3 ? "#d4af37" : "#8b949e",
                  fontSize: "0.85rem", fontWeight: "800",
                }}>
                  {sortBy === "apy" ? idx + 1 : s.rank}
                </span>
              </div>

              {/* Info */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap", marginBottom: "0.3rem" }}>
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: s.color, display: "inline-block", flexShrink: 0 }} />
                  <span style={{ color: "#e6edf3", fontWeight: "700", fontSize: "1rem" }}>{s.coin} ({s.symbol})</span>
                  <span style={{ color: "#8b949e", fontSize: "0.875rem" }}>via {s.platform}</span>
                  <span style={{ fontSize: "0.72rem", fontWeight: "700", padding: "2px 8px", borderRadius: "4px", background: `${RISK_COLORS[s.risk]}20`, color: RISK_COLORS[s.risk] }}>
                    {s.risk} Risk
                  </span>
                  <span style={{ fontSize: "0.72rem", fontWeight: "700", padding: "2px 8px", borderRadius: "4px", background: `${TYPE_COLORS[s.type]}20`, color: TYPE_COLORS[s.type] }}>
                    {s.type}
                  </span>
                  {s.audited && (
                    <span style={{ fontSize: "0.72rem", fontWeight: "700", padding: "2px 8px", borderRadius: "4px", background: "#3fb95015", color: "#3fb950" }}>✔ Audited</span>
                  )}
                </div>
                <p style={{ color: "#8b949e", fontSize: "0.85rem", margin: "0 0 0.5rem 0", lineHeight: "1.5" }}>{s.description}</p>
                <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                  {[
                    { label: "APY Range", value: s.apyRange },
                    { label: "Min Stake", value: s.minStake },
                    { label: "Lockup", value: s.lockup },
                  ].map((detail) => (
                    <div key={detail.label}>
                      <span style={{ fontSize: "0.72rem", color: "#6e7681", textTransform: "uppercase", letterSpacing: "0.05em" }}>{detail.label} </span>
                      <span style={{ fontSize: "0.85rem", color: "#c9d1d9", fontWeight: "600" }}>{detail.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* APY Badge */}
              <div style={{ textAlign: "right", minWidth: "100px" }}>
                <div style={{ fontSize: "2rem", fontWeight: "800", color: s.apy >= 10 ? "#3fb950" : s.apy >= 6 ? "#d29922" : "#58a6ff" }}>
                  {s.apy.toFixed(1)}%
                </div>
                <div style={{ fontSize: "0.75rem", color: "#8b949e" }}>APY</div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div style={{ marginTop: "2rem", padding: "1rem 1.25rem", background: "rgba(248,81,73,0.08)", border: "1px solid rgba(248,81,73,0.2)", borderRadius: "10px" }}>
          <p style={{ color: "#8b949e", fontSize: "0.8rem", margin: 0 }}>
            ⚠ <strong style={{ color: "#f85149" }}>Risk Disclaimer:</strong> Staking rewards are variable and not guaranteed. Staking involves smart contract risk, validator risk, and market risk. Rates shown are approximate and change based on network conditions. Higher APY often means higher risk. Always DYOR before staking significant amounts.
          </p>
        </div>

        {/* FAQ */}
        <div style={{ marginTop: "3rem" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: "700", color: "#e6edf3", marginBottom: "1.25rem" }}>Staking FAQs</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              { q: "What is crypto staking?", a: "Staking is the process of locking up your crypto tokens to help validate transactions on a Proof-of-Stake blockchain. In return, you earn staking rewards — similar to interest on a savings account." },
              { q: "Is staking safe?", a: "Native staking on reputable blockchains (ETH, SOL, ADA) is generally considered low risk. Exchange staking introduces custodial risk. DeFi staking involves smart contract risk. Always diversify your staking positions." },
              { q: "What's the difference between liquid and native staking?", a: "Native staking locks your tokens for a set period. Liquid staking (like Lido) gives you a receipt token (stETH) representing your staked ETH, which you can use in DeFi while still earning rewards." },
              { q: "How are staking APYs calculated?", a: "APYs are calculated based on the annualized rate of staking rewards divided by the total amount staked. They fluctuate with network participation rates — more stakers means lower per-staker rewards." },
              { q: "Which crypto has the highest staking APY?", a: "Cosmos (ATOM) and Polkadot (DOT) offer the highest APYs in this list (10-17%), but they come with long unbonding periods (21-28 days). NEAR Protocol offers ~9.5% with only a 52-72 hour unbonding period." },
            ].map((faq, i) => (
              <div key={i} style={{ ...cardStyle, padding: "1rem 1.25rem" }}>
                <p style={{ color: "#e6edf3", fontWeight: "600", fontSize: "0.95rem", margin: "0 0 0.4rem 0" }}>{faq.q}</p>
                <p style={{ color: "#8b949e", fontSize: "0.875rem", margin: 0, lineHeight: "1.6" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        select option { background: #161b22; color: #e6edf3; }
        input:focus, select:focus { outline: none; border-color: rgba(99,102,241,0.6) !important; }
      `}</style>
    </div>
  );
}
