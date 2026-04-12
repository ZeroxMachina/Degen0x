'use client';

import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import { useState } from "react";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Learn", href: "/learn" },
  { label: "Yield-Bearing Stablecoins", href: "/learn/yield-bearing-stablecoins" },
];

export default function YieldBearingStablecoinsPage() {
  const [activeTab, setActiveTab] = useState<"what-are-ybs" | "protocols" | "how-to-earn">("what-are-ybs");

  const S = {
    bg: "var(--color-bg, #0d1117)",
    surface: "var(--color-surface, #161b22)",
    surface2: "#1c2330",
    border: "var(--glass-border, #30363d)",
    text: "var(--color-text, #e6edf3)",
    text2: "var(--color-text-secondary, #8b949e)",
    primary: "var(--color-primary, #627EEA)",
    green: "#3fb950",
    red: "#f85149",
    orange: "#f0883e",
    yellow: "#d29922",
    blue: "#58a6ff",
  };

  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh" }}>
      {/* Breadcrumb */}
      <div style={{ borderBottom: `1px solid ${S.border}`, paddingTop: 24 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 24px" }}>
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>

      <article style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px 80px" }}>

        {/* Header */}
        <header style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
            <span style={{ fontSize: 13, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: `${S.primary}20`, color: S.primary, border: `1px solid ${S.primary}40` }}>💰 DeFi</span>
            <span style={{ fontSize: 13, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: `${S.green}20`, color: S.green, border: `1px solid ${S.green}40` }}>📊 Stablecoins</span>
            <span style={{ fontSize: 13, color: S.text2 }}>Updated March 17, 2026 · 14 min read</span>
          </div>

          <h1 style={{ fontSize: "2.4rem", fontWeight: 900, lineHeight: 1.2, marginBottom: 20 }}>
            Yield-Bearing Stablecoins: Earn Passive Returns on Stablecoins in 2026
          </h1>

          <p style={{ fontSize: 17, color: S.text2, lineHeight: 1.75, marginBottom: 28 }}>
            Yield-bearing stablecoins generate passive returns for holders, unlike traditional stablecoins (USDT, USDC) that pass no yield to users. As of March 2026, the market has grown to $20B+ with 6+ protocols competing. JPMorgan predicts yield-bearing stablecoins will grow from 6% to 50% of the total stablecoin market by 2027. This guide covers how they work, the top protocols, and how to maximize returns safely.
          </p>

          {/* Quick Stats Box */}
          <div style={{ background: `${S.primary}10`, border: `1px solid ${S.primary}30`, borderRadius: 14, padding: 24, marginBottom: 32 }}>
            <h2 style={{ fontSize: 16, fontWeight: 800, color: S.primary, marginBottom: 16 }}>📈 Yield-Bearing Stablecoins Market 2026</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 16 }}>
              <div>
                <div style={{ fontSize: 24, fontWeight: 900, color: S.primary, marginBottom: 4 }}>$20B+</div>
                <div style={{ fontSize: 13, color: S.text2 }}>Total Market Size</div>
              </div>
              <div>
                <div style={{ fontSize: 24, fontWeight: 900, color: S.green, marginBottom: 4 }}>3-13%</div>
                <div style={{ fontSize: 13, color: S.text2 }}>APY Range</div>
              </div>
              <div>
                <div style={{ fontSize: 24, fontWeight: 900, color: S.blue, marginBottom: 4 }}>6+</div>
                <div style={{ fontSize: 13, color: S.text2 }}>Major Protocols</div>
              </div>
            </div>
          </div>
        </header>

        {/* Tab Navigation */}
        <div role="tablist" style={{ display: "flex", gap: 8, marginBottom: 32, borderBottom: `1px solid ${S.border}`, paddingBottom: 0 }}>
          {[
            { id: "what-are-ybs", label: "📖 What Are YBS?" },
            { id: "protocols", label: "⚙️ Top Protocols Compared" },
            { id: "how-to-earn", label: "💻 How to Earn Yield" },
          ].map(tab => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              style={{
                padding: "14px 20px",
                background: activeTab === tab.id ? S.surface : "transparent",
                border: `1px solid ${activeTab === tab.id ? S.primary : "transparent"}`,
                borderBottom: activeTab === tab.id ? `3px solid ${S.primary}` : `1px solid ${S.border}`,
                color: activeTab === tab.id ? S.primary : S.text2,
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                borderRadius: "8px 8px 0 0",
                transition: "all 0.2s ease",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: What Are Yield-Bearing Stablecoins? */}
        {activeTab === "what-are-ybs" && (
          <div role="tabpanel" style={{ animation: "fadeIn 0.3s ease" }}>
            <section style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 20 }}>Understanding Yield-Bearing Stablecoins</h2>

              <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 20 }}>
                Yield-bearing stablecoins (YBS) are a new class of stablecoins that generate passive returns for holders. Unlike USDT, USDC, and other traditional stablecoins that offer 0% yield, YBS protocols share protocol revenue, lending yields, or treasury returns with token holders. This creates a new financial primitive: stable, low-risk, yield-generating assets.
              </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>💡</span>
            <strong style={{ color: '#a78bfa', fontSize: 15 }}>Why This Matters</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            We wrote this guide because the existing explanations online are either too simplified or assume PhD-level knowledge. Neither serves most readers.
          </p>
        </div>

              <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, marginTop: 32 }}>Traditional vs Yield-Bearing Stablecoins</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, marginBottom: 24 }}>
                {[
                  {
                    title: "Traditional Stablecoins",
                    icon: "🏦",
                    features: [
                      "0% APY to holders",
                      "Protocol keeps all revenue",
                      "Pure medium of exchange",
                      "e.g., USDT, USDC, BUSD",
                      "No incentive to hold",
                    ]
                  },
                  {
                    title: "Yield-Bearing Stablecoins",
                    icon: "💰",
                    features: [
                      "3-13% APY distributed",
                      "Revenue shared with holders",
                      "Medium of exchange + yield",
                      "e.g., sUSDe, sUSDS, USDY",
                      "Incentivizes long-term holding",
                    ]
                  }
                ].map(w => (
                  <div key={w.title} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 20 }}>
                    <div style={{ fontSize: 32, marginBottom: 12 }}>{w.icon}</div>
                    <h4 style={{ fontSize: 16, fontWeight: 800, marginBottom: 14 }}>{w.title}</h4>
                    <ul style={{ paddingLeft: 16, color: S.text2, fontSize: 14, lineHeight: 1.8, listStyle: "none" }}>
                      {w.features.map(f => (
                        <li key={f} style={{ marginBottom: 8 }}>✓ {f}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, marginTop: 32 }}>How Yield-Bearing Stablecoins Work</h3>
              <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
                Different protocols generate yield through different mechanisms:
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  {
                    title: "Lending Protocol Revenue",
                    desc: "Aave, Compound, Morpho earn fees from lending. Yield-bearing stablecoins capture a portion of these fees for token holders.",
                    color: S.primary
                  },
                  {
                    title: "Real-World Asset (RWA) Yields",
                    desc: "Tokens backed by T-bills, bonds, or bank deposits (e.g., USDY, USDM) earn yields directly from these assets.",
                    color: S.blue
                  },
                  {
                    title: "Delta-Neutral Funding Rates",
                    desc: "Ethena's USDe mints new supply by holding ETH short on perps, capturing funding rates when positive.",
                    color: S.green
                  },
                  {
                    title: "Protocol Tokenomics Revenue",
                    desc: "Fee switches or governance mechanisms direct protocol fees to stablecoin holders (e.g., MakerDAO to Sky).",
                    color: S.orange
                  },
                  {
                    title: "Lock-Up Incentives",
                    desc: "Protocols offer higher yields for longer lock periods. USD0++ (Usual) offers 13% APY for 4-year locks.",
                    color: S.yellow
                  },
                ].map(item => (
                  <div key={item.title} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16, display: "flex", gap: 14 }}>
                    <span style={{ fontSize: 20, flexShrink: 0, color: item.color }}>→</span>
                    <div>
                      <h4 style={{ fontSize: 14, fontWeight: 800, marginBottom: 4, color: item.color }}>{item.title}</h4>
                      <p style={{ fontSize: 14, color: S.text2, lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, marginTop: 32 }}>Key Yield Sources Explained</h3>
              <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 20 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    { source: "Lending Spreads", explanation: "When you deposit USD in Aave, you earn interest. Yield-bearing stablecoins capture a portion of these spreads." },
                    { source: "Treasury Yields", explanation: "T-bills currently yield 4-5%. Tokenized Treasury protocols pass this yield directly to token holders." },
                    { source: "Funding Rates", explanation: "Perpetual futures funding rates represent compensation for long/short imbalances. Ethena captures positive funding rates." },
                    { source: "Trading Fees", explanation: "DEXs earn trading fees. Some protocols share these fees with stablecoin holders." },
                    { source: "Protocol Revenue Sharing", explanation: "Governance tokens can vote to direct protocol fees to stablecoin deposits, increasing yields." },
                  ].map((item, i) => (
                    <div key={i} style={{ paddingBottom: i < 4 ? 16 : 0, borderBottom: i < 4 ? `1px solid ${S.border}` : 'none' }}>
                      <div style={{ fontWeight: 800, fontSize: 14, color: S.primary, marginBottom: 6 }}>{item.source}</div>
                      <div style={{ fontSize: 14, color: S.text2, lineHeight: 1.6 }}>{item.explanation}</div>
                    </div>
                  ))}
                </div>
              </div>

              <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, marginTop: 32 }}>Market Context: Why Now?</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
                {[
                  {
                    title: "📋 GENIUS Act Regulatory Clarity",
                    desc: "Signed by Trump in early 2026. Creates explicit regulatory framework for compliant stablecoins, enabling institutional adoption."
                  },
                  {
                    title: "🏦 Institutional Inflows",
                    desc: "BlackRock, Vanguard, and banks now holding yield-bearing stablecoins. $20B+ TVL expected by end of 2026."
                  },
                  {
                    title: "🎯 Yield Compression",
                    desc: "Early 2026 saw funding rates normalize. APYs compressed from 10%+ to 3-5%, making risk/reward more balanced."
                  },
                  {
                    title: "🌍 Cross-Chain Proliferation",
                    desc: "Yield-bearing stablecoins now on Ethereum, Polygon, Arbitrum, Optimism, Base, and Solana. Multi-chain is standard."
                  },
                ].map(item => (
                  <div key={item.title} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16 }}>
                    <h4 style={{ fontSize: 14, fontWeight: 800, marginBottom: 8 }}>{item.title}</h4>
                    <p style={{ fontSize: 14, color: S.text2, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>

              <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, marginTop: 32 }}>Key Benefits of Yield-Bearing Stablecoins</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
                {[
                  {
                    title: "💵 Passive Income",
                    desc: "Earn 3-13% APY on stablecoins. No active trading or liquidity mining required. Just hold and earn."
                  },
                  {
                    title: "📊 Capital Efficiency",
                    desc: "Use your stable collateral productively. Earn yield while maintaining purchasing power. No downside volatility."
                  },
                  {
                    title: "🏦 Better Than Banks",
                    desc: "Traditional savings accounts pay 0.5-1%. Stablecoin yields of 3-13% vastly outpace traditional banking."
                  },
                  {
                    title: "🌐 Global Access",
                    desc: "No borders, no paperwork, no minimum deposits. Anyone with crypto wallet can access these yields instantly."
                  },
                  {
                    title: "🔐 Regulatory Clarity",
                    desc: "GENIUS Act-compliant protocols like Ethena have clear compliance paths and institutional backing."
                  },
                  {
                    title: "🚀 Composability",
                    desc: "Use yield-bearing stablecoins in other protocols. Deposit sUSDe into Aave for leveraged yields. Full composability."
                  },
                ].map(item => (
                  <div key={item.title} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16 }}>
                    <h4 style={{ fontSize: 14, fontWeight: 800, marginBottom: 8 }}>{item.title}</h4>
                    <p style={{ fontSize: 14, color: S.text2, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Tab 2: Top Protocols Compared */}
        {activeTab === "protocols" && (
          <div role="tabpanel" style={{ animation: "fadeIn 0.3s ease" }}>
            <section style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 20 }}>Top Yield-Bearing Stablecoin Protocols</h2>

              <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 24 }}>
                As of March 2026, 6+ major protocols dominate the yield-bearing stablecoin market. Here's a detailed comparison of each:
              </p>

              <div style={{ overflowX: "auto", borderRadius: 12, border: `1px solid ${S.border}`, marginBottom: 32 }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, minWidth: 1400 }}>
                  <thead>
                    <tr style={{ background: S.surface, borderBottom: `1px solid ${S.border}` }}>
                      {[
                        "Protocol",
                        "Market Cap",
                        "APY",
                        "Mechanism",
                        "Risk Level",
                        "Compliance",
                        "Multi-Chain"
                      ].map(h => (
                        <th
                          key={h}
                          style={{
                            padding: "12px 14px",
                            textAlign: "left",
                            color: S.text2,
                            fontWeight: 700,
                            whiteSpace: "nowrap"
                          }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Ethena (sUSDe)", "~$6B TVL", "3.5%", "Delta-neutral ETH", "Medium", "GENIUS Compliant", "✓ Yes"],
                      ["Sky (sUSDS)", "~$4.6B TVL", "4.25%", "Overcollateralized", "Low", "Battle-tested", "✓ Yes"],
                      ["Ondo (USDY)", "~$690M TVL", "4-5%", "Tokenized T-bills", "Low", "Institutional", "✓ Limited"],
                      ["Mountain (USDM)", "~$200M+ TVL", "3-5%", "Treasury-backed", "Low", "Bermuda Regulated", "✓ Yes"],
                      ["Usual (USD0++)", "~$100M+ TVL", "13% (locked)", "RWA-backed", "Medium", "Emerging", "✓ Yes"],
                      ["Frax (sfrxUSD)", "~$150M+ TVL", "3-6%", "Protocol revenue + RWA", "Medium", "Decentralized", "✓ Yes"],
                    ].map((row, i) => (
                      <tr
                        key={i}
                        style={{
                          borderBottom: `1px solid ${S.border}`,
                          background: i % 2 === 0 ? S.surface : "transparent"
                        }}
                      >
                        {row.map((cell, j) => (
                          <td
                            key={j}
                            style={{
                              padding: "12px 14px",
                              fontWeight: j === 0 ? 700 : 400,
                              color: j === 0 ? S.primary : S.text2,
                              whiteSpace: "nowrap"
                            }}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16 }}>Deep Dive: Each Protocol</h3>

              {[
                {
                  name: "Ethena (USDe / sUSDe)",
                  icon: "⚡",
                  details: [
                    "Market Cap: ~$5.9B USDe + ~$6B sUSDe TVL",
                    "APY: sUSDe yields ~3.5% (compressed from 10%+ in 2025)",
                    "Mechanism: Synthetic dollar using delta-neutral ETH hedging",
                    "Peak TVL: $14.8B in October 2025, contracted to ~$6B",
                    "Compliance: GENIUS Act compliant via Anchorage custody",
                    "Key Feature: Fee switch coming for ENA governance token holders",
                    "Lifetime Fees: >$480M distributed to sUSDe holders",
                    "Risk: Synthetic model risk, smart contract risk (mitigated by audits)",
                  ]
                },
                {
                  name: "Sky (USDS / sUSDS)",
                  icon: "🏦",
                  details: [
                    "Market Cap: ~$10B USDS + ~$4.6B sUSDS TVL",
                    "APY: Sky Savings Rate (SSR) ~4.25%",
                    "Mechanism: Overcollateralized stablecoin (successor to MakerDAO DAI)",
                    "Advantage: Most conservative, battle-tested model since 2015",
                    "Compliance: Decentralized governance, MKR token holders control protocol",
                    "Key Feature: Dual governance with Maker and Sky DAOs",
                    "Risk: Overcollateralization requires significant capital lockup, but lowest depegging risk",
                    "Use Case: Best for risk-averse institutional holders",
                  ]
                },
                {
                  name: "Ondo (USDY)",
                  icon: "📋",
                  details: [
                    "Market Cap: ~$690M TVL",
                    "APY: 4-5% (direct from T-bill yields)",
                    "Mechanism: Tokenized short-term US Treasury notes + bank deposits",
                    "Backing: 100% backed by real assets (not synthetic)",
                    "Compliance: Institutional-grade (geared toward non-US users)",
                    "KYC Requirement: Yes, limited to non-US accredited investors",
                    "Risk: Very low (backed by US Treasuries), but liquidity lower than Ethena/Sky",
                    "Use Case: Institutional treasuries, family offices",
                  ]
                },
                {
                  name: "Mountain Protocol (USDM)",
                  icon: "⛰️",
                  details: [
                    "Market Cap: ~$200M+ TVL",
                    "APY: 3-5% (varies by yield source)",
                    "Mechanism: Treasury-backed yield for non-US users",
                    "Daily Yield Reconciliation: Transparent daily updates",
                    "Compliance: Regulated in Bermuda (progressive crypto jurisdiction)",
                    "Global Focus: Designed for international users outside US regulatory scope",
                    "Risk: Regulatory risk, smaller TVL means less liquidity",
                    "Innovation: Daily yield updates increase transparency vs. competitor models",
                  ]
                },
                {
                  name: "Usual (USD0 / USD0++)",
                  icon: "🎯",
                  details: [
                    "Market Cap: ~$100M+ TVL",
                    "APY: USD0++ offers ~13% for 4-year lock; USD0 non-yield variant",
                    "Mechanism: RWA-backed with novel governance via USUAL token",
                    "Lock-Up Model: USD0++ requires 4-year commitment, very high yield",
                    "Governance: USUAL token holders vote on protocol parameters",
                    "Risk: HIGH (lock-up risk, smart contract risk, smaller protocol)",
                    "Use Case: Yield-seeking investors willing to lock capital long-term",
                    "Emerging Protocol: Less battle-tested than Ethena/Sky/Ondo",
                  ]
                },
                {
                  name: "Frax (sfrxUSD)",
                  icon: "🌾",
                  details: [
                    "Market Cap: ~$150M+ TVL",
                    "APY: 3-6% (from protocol revenue + RWA exposure)",
                    "Mechanism: Part of Frax ecosystem; shares protocol revenue",
                    "Composability: Highly composable with Frax lending/derivative products",
                    "Governance: FXS token holders control protocol direction",
                    "Multi-Chain: Available on most EVM chains (Ethereum, Arbitrum, Optimism, etc.)",
                    "Risk: Medium (depends on Frax ecosystem health)",
                    "Innovation: Innovative use of Frax revenue-sharing model for yields",
                  ]
                },
              ].map((proto, i) => (
                <div key={i} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 24, marginBottom: 20 }}>
                  <h4 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16, color: S.primary }}>
                    {proto.icon} {proto.name}
                  </h4>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12 }}>
                    {proto.details.map((detail, j) => (
                      <div key={j} style={{ fontSize: 14, color: S.text2, lineHeight: 1.6 }}>
                        • {detail}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16 }}>Which Protocol Should You Choose?</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
                {[
                  {
                    title: "🎯 Maximum Safety & Battle-Tested",
                    pick: "Sky (sUSDS)",
                    reason: "Lowest risk overcollateralized model. Proven since 2015. Best for conservative holders."
                  },
                  {
                    title: "⚡ Highest Yields (Current Market)",
                    pick: "Ethena (sUSDe)",
                    reason: "Largest market cap, highest liquidity, 3.5% stable yield. Most accessible for all users."
                  },
                  {
                    title: "🏦 Institutional Grade",
                    pick: "Ondo (USDY)",
                    reason: "Backed by US Treasuries. Best for corporate treasuries and institutions. KYC required."
                  },
                  {
                    title: "🔒 Lock-Up & High Yield",
                    pick: "Usual (USD0++)",
                    reason: "13% APY but requires 4-year lock. Only for investors comfortable with illiquidity."
                  },
                  {
                    title: "🌍 Non-US Users",
                    pick: "Mountain (USDM)",
                    reason: "Designed for non-US users. Daily yield transparency. Bermuda regulated."
                  },
                  {
                    title: "🧬 DeFi Power User",
                    pick: "Frax (sfrxUSD)",
                    reason: "Composable with full Frax ecosystem. Highest yield potential through composability."
                  },
                ].map(item => (
                  <div key={item.title} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16 }}>
                    <h4 style={{ fontSize: 14, fontWeight: 800, marginBottom: 8, color: S.primary }}>{item.title}</h4>
                    <div style={{ fontSize: 14, fontWeight: 700, color: S.text, marginBottom: 6 }}>{item.pick}</div>
                    <p style={{ fontSize: 14, color: S.text2, lineHeight: 1.6, margin: 0 }}>{item.reason}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Tab 3: How to Earn Yield */}
        {activeTab === "how-to-earn" && (
          <div role="tabpanel" style={{ animation: "fadeIn 0.3s ease" }}>
            <section style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 20 }}>How to Earn Yield on Stablecoins</h2>

              <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 24 }}>
                Ready to start earning 3-13% APY on stablecoins? Here's the step-by-step guide for each major protocol:
              </p>

              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16 }}>Step-by-Step Guide: Each Protocol</h3>

              {[
                {
                  protocol: "Ethena (sUSDe)",
                  steps: [
                    "Go to app.ethena.fi and connect your wallet",
                    "Click 'Stake' or 'Convert to sUSDe'",
                    "If you don't have USDe, swap USDC/USDT on Curve or Uniswap for USDe",
                    "Deposit your USDe into the staking contract",
                    "Receive sUSDe in return (1:1 ratio initially, grows with yields)",
                    "Yields accrue daily and are automatically compounded",
                    "Withdraw anytime by unstaking sUSDe to USDe, then swap to stablecoin",
                    "Current APY: ~3.5% (varies with funding rates)",
                  ]
                },
                {
                  protocol: "Sky (sUSDS)",
                  steps: [
                    "Visit sky.money and connect wallet",
                    "Navigate to 'Savings' or 'DSR' section",
                    "Swap USDC → USDS on Uniswap/Curve (if needed)",
                    "Deposit USDS into Sky Savings Rate (SSR) contract",
                    "Receive sUSDS (auto-compounding yield token)",
                    "Your balance grows daily as yield accrues",
                    "Withdraw USDS anytime from SSR",
                    "Current APY: ~4.25% (set by MKR governance)",
                  ]
                },
                {
                  protocol: "Ondo (USDY)",
                  steps: [
                    "Visit app.ondo.finance and complete KYC (non-US residents only)",
                    "Click 'Buy USDY' and select your stablecoin (USDC, USDT)",
                    "Confirm KYC and complete swap to USDY",
                    "USDY automatically accrues yield daily in your wallet",
                    "No separate staking required — yields are embedded",
                    "Check your USDY balance — it grows automatically",
                    "Withdraw anytime via redemption flow",
                    "Current APY: ~4-5% (direct T-bill yields)",
                  ]
                },
                {
                  protocol: "Mountain (USDM)",
                  steps: [
                    "Go to mountainprotocol.com and verify you're in eligible jurisdiction",
                    "Connect wallet and navigate to 'Mint' or 'Deposit'",
                    "Provide collateral (USDC, USDT, or other stable) to mint USDM",
                    "USDM accrues yield daily at 3-5% depending on Treasury performance",
                    "Monitor daily yield reconciliation on dashboard",
                    "Redeem USDM for collateral anytime",
                    "Yields transparent and updated daily",
                    "Current APY: ~3-5% (varies by collateral type)",
                  ]
                },
                {
                  protocol: "Usual (USD0++)",
                  steps: [
                    "Visit usual.money and read terms (4-year lock commitment)",
                    "Swap USDC → USD0++ via interface",
                    "Your USD0++ enters 4-year lock period immediately",
                    "Accrues ~13% APY automatically (compounded)",
                    "Cannot redeem until 4 years elapsed (illiquid)",
                    "After 4 years, redeem 1:1 for stablecoin",
                    "High yield compensates for illiquidity",
                    "Current APY: ~13% (highest but with lock-up)",
                  ]
                },
                {
                  protocol: "Frax (sfrxUSD)",
                  steps: [
                    "Go to frax.com/frxusd and connect wallet",
                    "Swap USDC → frxUSD (non-yield version)",
                    "Deposit frxUSD into sfrxUSD staking contract",
                    "Receive sfrxUSD (yield-bearing variant)",
                    "Yield accrues from Frax protocol revenue + RWA exposure",
                    "Can compose with other Frax protocols (lending, etc.)",
                    "Withdraw frxUSD anytime by unstaking",
                    "Current APY: ~3-6% (varies with protocol activity)",
                  ]
                },
              ].map((proto, i) => (
                <div key={i} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 24, marginBottom: 20 }}>
                  <h4 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16, color: S.primary }}>
                    {proto.protocol}
                  </h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {proto.steps.map((step, j) => (
                      <div key={j} style={{ fontSize: 14, color: S.text2, lineHeight: 1.6, paddingLeft: 20, position: "relative" }}>
                        <span style={{ position: "absolute", left: 0, fontWeight: 700, color: S.primary }}>
                          {j + 1}.
                        </span>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16, marginTop: 28 }}>Risk Management & Best Practices</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  {
                    title: "⚠️ Smart Contract Risk",
                    desc: "All yield-bearing stablecoin protocols carry smart contract risk. Ethena, Sky, and Ondo are audited and battle-tested. Smaller protocols (Usual, Mountain) have higher risk. Start with smaller amounts if new."
                  },
                  {
                    title: "✓ Diversify Across Protocols",
                    desc: "Don't put all capital in one protocol. Consider splitting: 50% sUSDS (safest), 30% sUSDe (largest market), 20% USDY (institutional grade)."
                  },
                  {
                    title: "⚠️ Depegging Risk",
                    desc: "Synthetic models (Ethena) have higher depegging risk than overcollateralized (Sky). Treasuries (Ondo) have lowest depegging risk. Monitor peg during market stress."
                  },
                  {
                    title: "✓ Monitor Yield Compression",
                    desc: "APYs fluctuate with market conditions. Funding rates drop in bear markets. Yields may compress from 10% to 3%. Maximize yields in high-yield environments."
                  },
                  {
                    title: "⚠️ Regulatory Risk",
                    desc: "GENIUS Act (signed by Trump) provides clarity but isn't global. Non-US protocols (Mountain) face different regulations. Stay informed about crypto policy changes."
                  },
                  {
                    title: "✓ Avoid Lock-Up Unless Committed",
                    desc: "Usual's USD0++ offers 13% APY but locks capital 4 years. Only commit if you're certain you won't need liquidity."
                  },
                  {
                    title: "⚠️ Tax Implications",
                    desc: "Daily compounding of yields creates daily taxable events in some jurisdictions. Track basis and yields for tax reporting. Consult a crypto tax professional."
                  },
                  {
                    title: "✓ Use Hardware Wallets for Large Amounts",
                    desc: "If holding $100K+, use hardware wallet (Ledger, Trezor) connected to protocol. Reduces hacking risk from browser malware."
                  },
                ].map(item => (
                  <div key={item.title} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16, display: "flex", gap: 12 }}>
                    <span style={{ fontSize: 16, flexShrink: 0 }}>→</span>
                    <div>
                      <h4 style={{ fontSize: 14, fontWeight: 800, marginBottom: 4 }}>{item.title}</h4>
                      <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16, marginTop: 28 }}>Advanced Strategies</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
                {[
                  {
                    title: "🔄 Yield Composability",
                    desc: "Deposit sUSDe into Aave, earn additional lending yields on top of Ethena's 3.5%. Compound yields = higher returns."
                  },
                  {
                    title: "💎 Delta-Neutral Farming",
                    desc: "Buy USDe, short ETH perps to stay delta-neutral, earn USDe yield. Advanced strategy for experienced traders."
                  },
                  {
                    title: "🎪 Liquidity Provider Yields",
                    desc: "Provide liquidity for USDe/USDC on Curve. Earn trading fees (0.1-0.5%) + yield from Curve rewards. Higher risk but higher returns."
                  },
                  {
                    title: "🔀 Yield Arbitrage",
                    desc: "If sUSDe trades at discount to fair value, buy and hold for yield. Captures both discount recovery + APY. Risk: depegging."
                  },
                  {
                    title: "📊 Correlation Hedging",
                    desc: "Hold sUSDe (ETH-based) + USDY (T-bill-based) to hedge different macro scenarios. Low correlation = portfolio diversification."
                  },
                  {
                    title: "🌐 Multi-Chain Optimized",
                    desc: "Deploy capital across chains (Ethereum, Arbitrum, Optimism) for best APYs by chain. Use bridges for capital rebalancing."
                  },
                ].map(item => (
                  <div key={item.title} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16 }}>
                    <h4 style={{ fontSize: 14, fontWeight: 800, marginBottom: 8, color: S.primary }}>{item.title}</h4>
                    <p style={{ fontSize: 14, color: S.text2, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>

              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16, marginTop: 28 }}>Common Mistakes to Avoid</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  {
                    title: "❌ Assuming 13% APY is Guaranteed (Usual)",
                    desc: "Usual's 13% APY is specific to USD0++ with 4-year lock. Regular USD0 has no yield. Don't assume all Usual products yield high."
                  },
                  {
                    title: "❌ Ignoring Depegging Risk",
                    desc: "Ethena depegged to $0.98 in 2025. Even synthetic stables can depeg. Monitor health metrics daily if holding large amounts."
                  },
                  {
                    title: "❌ Chasing Yield Compression",
                    desc: "Don't lock up capital in 4-year products expecting 13% when yields may fall to 5%. Lock only what you can afford to keep locked."
                  },
                  {
                    title: "❌ Not Diversifying Risk",
                    desc: "Putting 100% in one protocol is dangerous. Diversify across Ethena, Sky, Ondo to spread smart contract risk."
                  },
                  {
                    title: "❌ Forgetting to Withdraw Before Maturity",
                    desc: "Lock-up products like Usual can trap capital. Set calendar reminders for when lockups expire so you can withdraw/rebalance."
                  },
                ].map(item => (
                  <div key={item.title} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16, display: "flex", gap: 12 }}>
                    <span style={{ fontSize: 16, flexShrink: 0, color: S.red }}>→</span>
                    <div>
                      <h4 style={{ fontSize: 14, fontWeight: 800, marginBottom: 4 }}>{item.title}</h4>
                      <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16, marginTop: 28 }}>Resources & Tools</h3>
              <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16 }}>
                <ul style={{ paddingLeft: 16, color: S.text, fontSize: 14, lineHeight: 2, listStyle: "none" }}>
                  <li>📊 <a href="/tools/defi-yields" style={{ color: S.primary, textDecoration: "none" }}>DeFi Yield Tracker</a> — Compare real-time APYs across all protocols</li>
                  <li>🔗 <a href="/learn/ethena-usde-guide" style={{ color: S.primary, textDecoration: "none" }}>Ethena USDe Deep Dive</a> — Our full guide to Ethena's synthetic dollar</li>
                  <li>💰 <a href="/tools/staking-apy" style={{ color: S.primary, textDecoration: "none" }}>Staking APY Calculator</a> — Calculate your expected yields across protocols</li>
                  <li>🏦 <a href="/tools/lending-comparison" style={{ color: S.primary, textDecoration: "none" }}>DeFi Lending Comparison</a> — Compare lending rates on Aave, Compound & more</li>
                  <li>🔐 <a href="/learn/genius-act-stablecoin-guide" style={{ color: S.primary, textDecoration: "none" }}>GENIUS Act Guide</a> — How stablecoin regulation affects your yields</li>
                  <li>📋 <a href="/tools/tax-calculator" style={{ color: S.primary, textDecoration: "none" }}>Crypto Tax Calculator</a> — Track taxable events from yield-bearing stablecoins</li>
                </ul>
              </div>
            </section>
          </div>
        )}

        {/* CTA Section */}
        <div style={{ background: `linear-gradient(135deg, ${S.primary}10, ${S.green}10)`, border: `1px solid ${S.primary}30`, borderRadius: 16, padding: 32, textAlign: "center", marginTop: 48 }}>
          <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 12 }}>Start Earning Yield on Stablecoins Today</h2>
          <p style={{ color: S.text2, fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>
            The yield-bearing stablecoin market is accelerating. Earn 3-13% APY on stablecoins with minimal risk. Choose from 6+ protocols, each with unique risk/reward profiles.
          </p>
          <a
            href="/tools/defi-yields"
            style={{
              display: "inline-block",
              padding: "12px 28px",
              borderRadius: 10,
              background: S.primary,
              color: "#fff",
              fontWeight: 700,
              fontSize: 14,
              textDecoration: "none",
            }}
          >
            Explore DeFi Yield Tools
          </a>
        </div>

        {/* Disclaimer */}
        <div style={{ marginTop: 32, padding: 16, background: S.surface, border: `1px solid ${S.border}`, borderRadius: 8, fontSize: 13, color: S.text2, lineHeight: 1.6 }}>
          <strong style={{ color: S.red }}>Disclaimer:</strong> This content is for educational purposes only. Yield-bearing stablecoins carry risks including smart contract risk, depegging risk, regulatory risk, and yield compression. Past performance does not guarantee future results. Always conduct your own research, test with small amounts first, and never invest more than you can afford to lose. Consult a financial advisor before making investment decisions.
        </div>
      
        {/* section-footer */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 8, padding: '16px 20px', marginTop: 40, marginBottom: 20 }}>
          <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: '#a78bfa' }}>Educational disclaimer:</strong> This guide is for informational purposes only and does not constitute financial advice.
            Crypto involves significant risk — do your own research before making any decisions. Learn more about <a href="/about" style={{ color: '#a78bfa' }}>our team</a>.
          </p>
        </div>
      </article>

      <BackToTop />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
