'use client';

import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import RelatedContent from '@/components/RelatedContent';
import AuthorAttribution, { getAuthorForSection } from '@/components/AuthorAttribution';

const S = {
  bg: "#0d1117",
  border: "#30363d",
  text: "#e6edf3",
  text2: "#8b949e",
  blue: "#58a6ff",
  green: "#3fb950",
  orange: "#f0883e",
  yellow: "#d29922",
  purple: "#bc8cff",
  cyan: "#06b6d4",
};

const breadcrumbs = [
  { label: "degen0x", href: "/" },
  { label: "Learn", href: "/learn" },
  { label: "Funding Rate Arbitrage Guide 2026" },
];

const CoreStrategies = [
  {
    title: "Cash-and-Carry",
    desc: "Buy spot, short perpetual, pocket funding rates",
    apy: "5-15% APY in bull markets",
    risk: "Liquidation, basis risk",
  },
  {
    title: "Cross-Exchange Arbitrage",
    desc: "Long low-funding exchange, short high-funding",
    apy: "8-25% APY when spreads widen",
    risk: "Funding reversals, execution slippage",
  },
  {
    title: "Delta-Neutral Derivatives",
    desc: "Offset positions on DEX/CEX combinations",
    apy: "6-18% APY with capital efficiency",
    risk: "Gas costs, lower liquidity on DEX",
  },
];

const MarketConditions = [
  { condition: "Bull Market", apy: "12-15%" },
  { condition: "Normal Market", apy: "5-8%" },
  { condition: "Bear Market", apy: "2-4%" },
  { condition: "Current (Mar 2026)", apy: "7-9%" },
];

const RiskFactors = [
  {
    name: "Liquidation Risk",
    detail: "Keep 15-20% excess margin buffer to survive market swings",
  },
  {
    name: "Basis Risk",
    detail: "Spot-perp divergence reduces returns; monitor minute-by-minute",
  },
  {
    name: "Funding Reversal",
    detail: "Negative funding can flip profitable trades; hedge with stops",
  },
  {
    name: "Exchange Risk",
    detail: "Counterparty failure or withdrawal freezes; diversify venues",
  },
  {
    name: "Gas Costs (DEX)",
    detail: "Entry/exit gas on L2 can eat 1-3% of small positions",
  },
];

const VenuComparison = [
  {
    venue: "Binance",
    type: "CEX",
    funding: "8-hour settlement",
    range: "0.01% - 0.15%",
  },
  {
    venue: "Bybit",
    type: "CEX",
    funding: "8-hour settlement",
    range: "0.01% - 0.12%",
  },
  {
    venue: "dYdX v4",
    type: "DEX",
    funding: "1-hour settlement",
    range: "0.02% - 0.25%",
  },
  {
    venue: "Hyperliquid",
    type: "DEX",
    funding: "1-hour settlement",
    range: "0.01% - 0.20%",
  },
  {
    venue: "GMX v2",
    type: "DEX",
    funding: "Real-time oracle",
    range: "0.005% - 0.18%",
  },
];

const Tools = [
  {
    name: "CoinGlass",
    use: "Real-time funding rate charts across 20+ exchanges, alerts on spikes",
  },
  {
    name: "Loris Tools",
    use: "Spot-perp basis calculator, break-even analysis, APY projections",
  },
  {
    name: "Hummingbot",
    use: "Open-source automation for cross-exchange arb execution",
  },
];

const FAQs = [
  {
    q: "What's the minimum capital for funding rate arb?",
    a: "$5k-$10k on CEX for cash-and-carry; $20k+ on DEX due to gas costs.",
  },
  {
    q: "How often do funding rates pay out?",
    a: "CEX: every 8 hours (Binance, Bybit). DEX: varies (dYdX hourly, Hyperliquid 1hr, GMX on-demand).",
  },
  {
    q: "Can negative funding rates hurt my trade?",
    a: "Yes. Negative rates mean you pay shorts. Flip your position or hedge with stops if funding turns negative.",
  },
  {
    q: "Best strategy for beginners?",
    a: "Start with cash-and-carry on Binance. Low complexity, clear mechanics, proven 5-8% annual returns.",
  },
  {
    q: "How do I automate this?",
    a: "Use Hummingbot for cross-exchange arb, or write custom bot with ccxt library + exchange APIs.",
  },
];

export default function FundingRateArbitrageGuide() {
  return (
    <main style={{ background: S.bg, minHeight: "100vh", paddingBottom: 60 }}>
      <Breadcrumb items={breadcrumbs} />
      {(() => { const a = getAuthorForSection('learn'); return (<AuthorAttribution author={a.author} role={a.role} publishedDate="2026-04-17" updatedDate="2026-04-17" section="learn" />); })()}
      <article
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "40px 20px",
          color: S.text,
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: "flex", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
            <span
              style={{
                background: `${S.purple}25`,
                color: S.purple,
                padding: "4px 12px",
                borderRadius: 20,
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              ADVANCED
            </span>
            <span
              style={{
                background: `${S.cyan}25`,
                color: S.cyan,
                padding: "4px 12px",
                borderRadius: 20,
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              PERPETUALS
            </span>
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>
            Funding Rate Arbitrage Guide 2026: Delta-Neutral Strategies for Perpetual Futures
          </h1>
          <div style={{ display: "flex", gap: 20, fontSize: 14, color: S.text2, flexWrap: "wrap" }}>
            <span>📅 March 2026</span>
            <span>⏱️ 12 min read</span>
            <span>⚡ 200 XP</span>
          </div>
        </div>

        {/* What is Funding Rate Arbitrage */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: S.blue }}>
            What is Funding Rate Arbitrage?
          </h2>
          <p style={{ lineHeight: 1.6, marginBottom: 12, color: S.text }}>
            Funding rate arbitrage exploits periodic payments between long and short traders on perpetual futures markets. When funding rates are positive, shorts pay longs; when negative, longs pay shorts. By maintaining delta-neutral positions (long spot + short perp, or vice versa), you capture this rate spread without directional risk.
          </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>💡</span>
            <strong style={{ color: '#a78bfa', fontSize: 15 }}>Why This Matters</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            This is one of those topics where surface-level understanding is dangerous. We've seen traders lose significant capital from misconceptions covered in this guide.
          </p>
        </div>
          <p style={{ lineHeight: 1.6, color: S.text }}>
            This is one of the highest-conviction, lowest-volatility strategies in crypto. Even in bear markets, consistent 2-4% annual returns are achievable. In bull markets with high leverage demand, rates spike to 12-15% APY.
          </p>
        </section>

        {/* How Funding Rates Work */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: S.blue }}>
            How Funding Rates Work
          </h2>
          <div
            style={{
              background: "#161b22",
              border: `1px solid ${S.border}`,
              borderRadius: 12,
              padding: 20,
              marginBottom: 20,
            }}
          >
            <p style={{ marginBottom: 12, color: S.text }}>
              <strong>Formula:</strong> Funding Rate = (Premium Index + Interest Rate) / 8 hours
            </p>
            <p style={{ marginBottom: 12, color: S.text }}>
              <strong>Premium Index:</strong> Perp price vs index price. If perp trades above spot, funding is positive.
            </p>
            <p style={{ color: S.text }}>
              <strong>Settlement:</strong> CEX every 8 hours (Binance, Bybit). DEX varies: dYdX 1-hour, Hyperliquid 1-hour, GMX real-time.
            </p>
          </div>
          <p style={{ lineHeight: 1.6, color: S.text }}>
            In bull markets, perps trade at a premium to spot (positive funding). Shorts pay longs to keep the market in balance. This is your income stream.
          </p>
        </section>

        {/* The 3 Core Strategies */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 20, color: S.blue }}>
            The 3 Core Strategies
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {CoreStrategies.map((s, i) => (
              <div
                key={i}
                style={{
                  background: "#161b22",
                  border: `1px solid ${S.border}`,
                  borderRadius: 12,
                  padding: 20,
                }}
              >
                <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12, color: S.green }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 14, color: S.text, marginBottom: 12, lineHeight: 1.5 }}>
                  {s.desc}
                </p>
                <p style={{ fontSize: 14, color: S.cyan, fontWeight: 600, marginBottom: 8 }}>
                  {s.apy}
                </p>
                <p style={{ fontSize: 12, color: S.text2 }}>
                  <strong>Risk:</strong> {s.risk}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Setting Up Cash-and-Carry */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: S.blue }}>
            Step-by-Step: Setting Up a Cash-and-Carry Trade
          </h2>
          <ol style={{ lineHeight: 1.8, color: S.text, paddingLeft: 20 }}>
            <li style={{ marginBottom: 12 }}>
              <strong>Buy spot:</strong> Purchase 1 BTC on Binance spot market at $62,000.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong>Short perp:</strong> Open 1 BTC short perp at $62,100 (current funding +0.03%/8h = 0.36%/year).
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong>Lock delta:</strong> You're now neutral. If BTC rises to $63,000, perp P&L offsets spot P&L.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong>Collect funding:</strong> Every 8 hours, the short perp position earns ~$18.70 on $62,000.
            </li>
            <li>
              <strong>Unwind:</strong> After 90 days, sell spot, close perp short. Total earnings: ~1.08% (360 basis points / 4 quarters).
            </li>
          </ol>
        </section>

        {/* Expected Returns */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: S.blue }}>
            Expected Returns by Market Condition
          </h2>
          <div
            style={{
              background: "#161b22",
              border: `1px solid ${S.border}`,
              borderRadius: 12,
              overflow: "hidden",
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${S.border}`, background: "#0d1117" }}>
                  <th style={{ padding: 12, textAlign: "left", color: S.cyan, fontWeight: 600 }}>
                    Market Condition
                  </th>
                  <th style={{ padding: 12, textAlign: "left", color: S.cyan, fontWeight: 600 }}>
                    Annual APY
                  </th>
                </tr>
              </thead>
              <tbody>
                {MarketConditions.map((m, i) => (
                  <tr key={i} style={{ borderBottom: `1px solid ${S.border}` }}>
                    <td style={{ padding: 12, color: S.text }}>{m.condition}</td>
                    <td style={{ padding: 12, color: S.green, fontWeight: 600 }}>{m.apy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Risk Management */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 20, color: S.blue }}>
            Risk Management
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
            {RiskFactors.map((r, i) => (
              <div
                key={i}
                style={{
                  background: "#161b22",
                  border: `1px solid ${S.border}`,
                  borderRadius: 12,
                  padding: 16,
                }}
              >
                <h3 style={{ fontSize: 14, fontWeight: 600, color: S.orange, marginBottom: 8 }}>
                  {r.name}
                </h3>
                <p style={{ fontSize: 14, color: S.text, lineHeight: 1.5 }}>
                  {r.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CEX vs DEX */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: S.blue }}>
            CEX vs DEX Funding Mechanics
          </h2>
          <div
            style={{
              background: "#161b22",
              border: `1px solid ${S.border}`,
              borderRadius: 12,
              overflow: "auto",
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${S.border}`, background: "#0d1117" }}>
                  <th style={{ padding: 12, textAlign: "left", color: S.cyan, fontWeight: 600 }}>
                    Venue
                  </th>
                  <th style={{ padding: 12, textAlign: "left", color: S.cyan, fontWeight: 600 }}>
                    Type
                  </th>
                  <th style={{ padding: 12, textAlign: "left", color: S.cyan, fontWeight: 600 }}>
                    Settlement
                  </th>
                  <th style={{ padding: 12, textAlign: "left", color: S.cyan, fontWeight: 600 }}>
                    Typical Range
                  </th>
                </tr>
              </thead>
              <tbody>
                {VenuComparison.map((v, i) => (
                  <tr key={i} style={{ borderBottom: `1px solid ${S.border}` }}>
                    <td style={{ padding: 12, color: S.text, fontWeight: 500 }}>{v.venue}</td>
                    <td style={{ padding: 12, color: S.text2 }}>{v.type}</td>
                    <td style={{ padding: 12, color: S.text2 }}>{v.funding}</td>
                    <td style={{ padding: 12, color: S.green, fontWeight: 600 }}>{v.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Essential Tools */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: S.blue }}>
            Essential Tools
          </h2>
          <div style={{ display: "grid", gap: 12 }}>
            {Tools.map((t, i) => (
              <div
                key={i}
                style={{
                  background: "#161b22",
                  border: `1px solid ${S.border}`,
                  borderRadius: 12,
                  padding: 16,
                }}
              >
                <h3 style={{ color: S.yellow, fontWeight: 600, marginBottom: 6 }}>
                  {t.name}
                </h3>
                <p style={{ color: S.text2, fontSize: 14 }}>
                  {t.use}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 20, color: S.blue }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: "grid", gap: 16 }}>
            {FAQs.map((faq, i) => (
              <div
                key={i}
                style={{
                  background: "#161b22",
                  border: `1px solid ${S.border}`,
                  borderRadius: 12,
                  padding: 16,
                }}
              >
                <h3 style={{ color: S.cyan, fontSize: 15, fontWeight: 600, marginBottom: 8 }}>
                  {faq.q}
                </h3>
                <p style={{ color: S.text, fontSize: 14, lineHeight: 1.5 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Takeaway */}
        <section style={{ marginBottom: 0 }}>
          <div
            style={{
              background: `linear-gradient(135deg, ${S.purple}20, ${S.cyan}20)`,
              border: `1px solid ${S.border}`,
              borderRadius: 12,
              padding: 24,
            }}
          >
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, color: S.purple }}>
              Key Takeaway
            </h2>
            <p style={{ lineHeight: 1.6, marginBottom: 12, color: S.text }}>
              Funding rate arbitrage is the closest thing to risk-free yield in crypto. With proper risk management (15-20% excess margin, diversified venues, gas optimization), you can generate 5-15% annual returns with minimal directional exposure.
            </p>
            <p style={{ lineHeight: 1.6, color: S.text2 }}>
              <strong>Disclaimer:</strong> This is not financial advice. Funding rates can reverse, exchanges can fail, and liquidations can occur. Start with small position sizes, automate only after live testing, and never trade more capital than you can afford to lose.
            </p>
            <div style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                style={{
                  color: S.blue,
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                → Read: Perpetual Futures Guide
              </a>
              <a
                style={{
                  color: S.blue,
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                → Tool: Funding Rate Monitor
              </a>
            </div>
          </div>
        </section>
      
        {/* section-footer */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 8, padding: '16px 20px', marginTop: 40, marginBottom: 20 }}>
          <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: '#a78bfa' }}>Educational disclaimer:</strong> This guide is for informational purposes only and does not constitute financial advice.
            Crypto involves significant risk — do your own research before making any decisions. Learn more about <a href="/about" style={{ color: '#a78bfa' }}>our team</a>.
          </p>
        </div>
      </article>
      <BackToTop />
      <RelatedContent category="learn" currentSlug="/learn/funding-rate-arbitrage-guide-2026" />
    </main>
  );
}
