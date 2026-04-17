import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import RelatedContent from '@/components/RelatedContent';


export const metadata: Metadata = {
  title: "Perpetual Futures Trading Guide 2026 — How Perps Work",
  description: "Learn everything about perpetual futures: funding rates, leverage, liquidation, delta-neutral strategies, and the best perp DEXs in 2026. Beginner to advanced",
  keywords: [
    "perpetual futures",
    "perps trading",
    "funding rate",
    "crypto leverage",
    "liquidation",
    "delta neutral",
    "perpetual DEX",
    "Hyperliquid",
    "dYdX",
    "GMX",
  ],
  openGraph: {
    title: "Perpetual Futures Trading Guide 2026 | degen0x",
    description: "Master perpetual futures: funding rates, leverage, liquidation, and advanced perp strategies.",
  },

  alternates: { canonical: "/learn/perpetual-futures-guide" },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Learn', item: 'https://degen0x.com/learn' },
    { '@type': 'ListItem', position: 3, name: 'Perpetual Futures Guide', },
  ],
};

export default function PerpetualFuturesGuidePage() {
  return (
    <div style={{ minHeight: "100vh", background: "#0d1117", color: "#e6edf3" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <article style={{ maxWidth: 820, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
            <span style={{ padding: "3px 10px", borderRadius: 6, fontSize: 12, fontWeight: 600, background: "#6366f120", color: "#818cf8", border: "1px solid #6366f140" }}>Trading</span>
            <span style={{ padding: "3px 10px", borderRadius: 6, fontSize: 12, fontWeight: 600, background: "#d2992220", color: "#d29922", border: "1px solid #d2992240" }}>Advanced</span>
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 800, lineHeight: 1.2, marginBottom: 12, background: "linear-gradient(135deg, #6366f1, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Perpetual Futures Trading Guide 2026
          </h1>
          <p style={{ color: "#8b949e", fontSize: 16, lineHeight: 1.7 }}>
            Perpetual futures (perps) are the most traded instrument in crypto, with over $150B in daily volume across centralized and decentralized exchanges. This guide covers everything from the basics to advanced strategies.
          </p>
          <div style={{ marginTop: 12, fontSize: 13, color: "#8b949e" }}>Updated March 2026 · 15 min read</div>
        </div>

        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={3}
          section="learn"
        />


        {/* Table of Contents */}
        <nav style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 20, marginBottom: 32 }}>
          <h2 style={{ fontSize: 14, fontWeight: 700, marginBottom: 12, color: "#58a6ff" }}>Table of Contents</h2>
          <ol style={{ paddingLeft: 20, color: "#8b949e", fontSize: 14, lineHeight: 2 }}>
            <li><a href="#what-are-perps" style={{ color: "#58a6ff", textDecoration: "none" }}>What Are Perpetual Futures?</a></li>
            <li><a href="#funding-rates" style={{ color: "#58a6ff", textDecoration: "none" }}>Understanding Funding Rates</a></li>
            <li><a href="#leverage" style={{ color: "#58a6ff", textDecoration: "none" }}>Leverage, Margin & Liquidation</a></li>
            <li><a href="#strategies" style={{ color: "#58a6ff", textDecoration: "none" }}>Popular Perp Strategies</a></li>
            <li><a href="#platforms" style={{ color: "#58a6ff", textDecoration: "none" }}>Top Perp Platforms in 2026</a></li>
            <li><a href="#risks" style={{ color: "#58a6ff", textDecoration: "none" }}>Risks & Risk Management</a></li>
          </ol>
        </nav>

        {/* Section 1 */}
        <section id="what-are-perps" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>1. What Are Perpetual Futures?</h2>
          <p style={{ color: "#c9d1d9", fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Perpetual futures are derivative contracts that let you speculate on the price of an asset without an expiry date. Unlike traditional futures that settle on a specific date, perps can be held indefinitely. The price of a perp contract stays tethered to the spot price through a mechanism called the funding rate.
          </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>💡</span>
            <strong style={{ color: '#a78bfa', fontSize: 15 }}>Why This Matters</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            Understanding this concept is a prerequisite for making informed decisions in DeFi. Most losses in crypto come from misunderstanding the fundamentals.
          </p>
        </div>
          <p style={{ color: "#c9d1d9", fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            When you open a long position, you profit when the price goes up. A short position profits when the price falls. You can use leverage to amplify your exposure — for example, 10x leverage on $1,000 gives you $10,000 of exposure.
          </p>
          <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 20, marginBottom: 16 }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: "#58a6ff", marginBottom: 10 }}>Key Terms</h3>
            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "8px 16px", fontSize: 14, color: "#c9d1d9" }}>
              <strong style={{ color: "#e6edf3" }}>Mark Price</strong><span>The fair value price used for liquidation calculations, typically a combination of index (spot) prices from multiple exchanges.</span>
              <strong style={{ color: "#e6edf3" }}>Open Interest</strong><span>The total value of all outstanding perp contracts. Rising OI with rising price = new money entering long positions.</span>
              <strong style={{ color: "#e6edf3" }}>Unrealized PnL</strong><span>Your profit or loss on open positions that haven't been closed yet.</span>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section id="funding-rates" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>2. Understanding Funding Rates</h2>
          <p style={{ color: "#c9d1d9", fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            The funding rate is a periodic payment between longs and shorts that keeps the perpetual price aligned with spot. Most exchanges settle funding every 8 hours (Binance, Bybit) or every 1 hour (Hyperliquid, dYdX).
          </p>
          <div style={{ background: "#161b22", border: "1px solid #3fb95030", borderRadius: 12, padding: 20, marginBottom: 16 }}>
            <div style={{ fontSize: 14, color: "#3fb950", fontWeight: 700, marginBottom: 8 }}>When Funding is Positive (+)</div>
            <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.7 }}>Longs pay shorts. This happens when the perp price trades above spot, indicating bullish sentiment and overleveraged longs. Extreme positive funding often precedes liquidation cascades.</p>
          </div>
          <div style={{ background: "#161b22", border: "1px solid #f8514930", borderRadius: 12, padding: 20, marginBottom: 16 }}>
            <div style={{ fontSize: 14, color: "#f85149", fontWeight: 700, marginBottom: 8 }}>When Funding is Negative (−)</div>
            <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.7 }}>Shorts pay longs. The perp price is below spot, suggesting bearish sentiment. Extremely negative funding can signal a bottom as shorts are overleveraged.</p>
          </div>
          <p style={{ color: "#c9d1d9", fontSize: 15, lineHeight: 1.8 }}>
            Use our <a href="/tools/perp-funding" style={{ color: "#58a6ff", textDecoration: "underline" }}>Perpetual Funding Rate Dashboard</a> to track funding rates across all major exchanges in real-time and find arbitrage opportunities.
          </p>
        </section>

        {/* Section 3 */}
        <section id="leverage" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>3. Leverage, Margin & Liquidation</h2>
          <p style={{ color: "#c9d1d9", fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Leverage lets you control a larger position with less capital. With 10x leverage, a 10% move in your favor doubles your money — but a 10% move against you wipes out your margin.
          </p>
          <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 20, marginBottom: 16 }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 12, color: "#d29922" }}>Liquidation Example</h3>
            <div style={{ fontSize: 14, color: "#c9d1d9", lineHeight: 1.8 }}>
              <p>Position: 10x Long BTC at $95,000 with $1,000 margin ($10,000 notional)</p>
              <p style={{ marginTop: 8 }}>Liquidation price ≈ $85,500 (−10% from entry, minus fees)</p>
              <p style={{ marginTop: 8, color: "#f85149" }}>If BTC drops to $85,500, your entire $1,000 margin is liquidated. With cross-margin, other positions may also be affected.</p>
            </div>
          </div>
          <p style={{ color: "#c9d1d9", fontSize: 15, lineHeight: 1.8 }}>
            <strong style={{ color: "#e6edf3" }}>Cross vs Isolated Margin:</strong> Cross margin shares your account balance across all positions (higher risk of total wipeout). Isolated margin limits risk to the margin allocated to each individual position.
          </p>
        </section>

        {/* Section 4 */}
        <section id="strategies" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>4. Popular Perp Strategies</h2>

          <div style={{ display: "grid", gap: 16 }}>
            {[
              { name: "Funding Rate Arbitrage", desc: "Go long on an exchange with low/negative funding and short on an exchange with high positive funding for the same asset. Capture the spread as yield with minimal directional risk.", tag: "Low Risk", color: "#3fb950" },
              { name: "Basis Trade (Cash & Carry)", desc: "Buy spot and short the perp. Profit from the premium that perps trade at relative to spot. Popular among institutional traders and market-neutral funds.", tag: "Low Risk", color: "#3fb950" },
              { name: "Momentum Scalping", desc: "Use funding rate spikes and open interest surges as signals for short-term directional trades. Extremely positive funding with rising OI often precedes a liquidation-driven reversal.", tag: "High Risk", color: "#f85149" },
              { name: "Hedging Spot Holdings", desc: "Short perps to hedge your long-term spot portfolio during uncertain market conditions. Protects against downside while keeping spot exposure for airdrops and staking.", tag: "Medium Risk", color: "#d29922" },
            ].map((s) => (
              <div key={s.name} style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700 }}>{s.name}</h3>
                  <span style={{ fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 4, color: s.color, background: `${s.color}15` }}>{s.tag}</span>
                </div>
                <p style={{ color: "#8b949e", fontSize: 14, lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5 */}
        <section id="platforms" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>5. Top Perp Platforms in 2026</h2>
          <div style={{ overflowX: "auto", borderRadius: 12, border: "1px solid #30363d" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ background: "#161b22" }}>
                  {["Platform", "Type", "Max Leverage", "Chains", "Fees (Maker/Taker)", "Key Feature"].map((h) => (
                    <th key={h} style={{ padding: "10px 14px", textAlign: "left", color: "#8b949e", fontWeight: 600, borderBottom: "1px solid #30363d" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Hyperliquid", "DEX", "50x", "Hyperliquid L1", "0.01% / 0.035%", "On-chain order book, sub-second finality"],
                  ["dYdX v4", "DEX", "20x", "dYdX Chain", "0.02% / 0.05%", "Cosmos-based, fully decentralized"],
                  ["GMX v2", "DEX", "100x", "Arbitrum, Avalanche", "Dynamic", "GLP liquidity model, zero slippage"],
                  ["Vertex", "DEX", "20x", "Arbitrum, Blast", "0.02% / 0.04%", "Hybrid CEX-DEX speed"],
                  ["Binance", "CEX", "125x", "N/A", "0.02% / 0.05%", "Deepest liquidity globally"],
                  ["Bybit", "CEX", "100x", "N/A", "0.02% / 0.055%", "Copy trading, unified margin"],
                ].map((row) => (
                  <tr key={row[0]} style={{ borderBottom: "1px solid #21262d" }}>
                    {row.map((cell, i) => (
                      <td key={i} style={{ padding: "10px 14px", fontWeight: i === 0 ? 700 : 400, color: i === 0 ? "#e6edf3" : "#c9d1d9" }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 6 */}
        <section id="risks" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>6. Risks & Risk Management</h2>
          <div style={{ background: "#161b22", border: "1px solid #f8514930", borderRadius: 12, padding: 20 }}>
            <div style={{ display: "grid", gap: 16, fontSize: 14, color: "#c9d1d9", lineHeight: 1.7 }}>
              <div>
                <strong style={{ color: "#f85149" }}>Liquidation Risk:</strong> The #1 killer of perp traders. Never use max leverage. A good rule: if your position size requires more than 5x leverage, it is too large.
              </div>
              <div>
                <strong style={{ color: "#d29922" }}>Funding Rate Risk:</strong> Holding positions through funding settlement can be expensive. A 0.1% funding rate every 8 hours = 10.95% annually. Always check the funding rate before entering.
              </div>
              <div>
                <strong style={{ color: "#d29922" }}>Exchange Risk:</strong> CEX custody risk (FTX collapse) and DEX smart contract risk. Diversify across platforms and never keep more than you can afford to lose on any single exchange.
              </div>
              <div>
                <strong style={{ color: "#58a6ff" }}>Best Practices:</strong> Use stop-losses, isolated margin, position sizing (never risk more than 2% of portfolio per trade), and track your trades in a journal.
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div style={{ background: "linear-gradient(135deg, #6366f110, #06b6d410)", border: "1px solid #6366f130", borderRadius: 16, padding: 32, textAlign: "center" }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Start Tracking Funding Rates</h2>
          <p style={{ color: "#8b949e", fontSize: 14, marginBottom: 20 }}>Monitor perp funding rates across 8+ exchanges and find delta-neutral arbitrage opportunities.</p>
          <a href="/tools/perp-funding" style={{ display: "inline-block", padding: "12px 28px", borderRadius: 10, background: "#6366f1", color: "#fff", fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
            Open Funding Dashboard
          </a>
        </div>

        {/* Disclaimer */}
        <div style={{ marginTop: 32, padding: 16, background: "#161b22", border: "1px solid #30363d", borderRadius: 8, fontSize: 12, color: "#8b949e", lineHeight: 1.6 }}>
          <strong>Disclaimer:</strong> This content is for educational purposes only and does not constitute financial advice. Perpetual futures trading involves substantial risk of loss. Never trade with money you cannot afford to lose.
        </div>
      
        {/* section-footer */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 8, padding: '16px 20px', marginTop: 40, marginBottom: 20 }}>
          <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: '#a78bfa' }}>Educational disclaimer:</strong> This guide is for informational purposes only and does not constitute financial advice.
            Crypto involves significant risk — do your own research before making any decisions. Learn more about <a href="/about" style={{ color: '#a78bfa' }}>our team</a>.
          </p>
        </div>
      
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Perpetual Futures Guide",
              "author": { "@type": "Organization", "name": "degen0x" },
              "publisher": { "@type": "Organization", "name": "degen0x", "url": "https://degen0x.com" },
              "datePublished": "2026-04-01",
              "dateModified": "2026-04-12",
              "mainEntityOfPage": "https://degen0x.com/learn/perpetual-futures-guide"
            })
          }}
        />
      <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
  <span style={{ color: "#8b949e" }}>Related: </span>
  <a href="/learn/layer-3-chains-guide-2026" style={{ color: "#fb923c", marginRight: "1rem" }}>Layer 3 Chains Guide 2026</a>
  <a href="/learn/solana-blinks-actions-guide-2026" style={{ color: "#fb923c", marginRight: "1rem" }}>Solana Blinks Actions Guide 2026</a>
  <a href="/learn/tradfi-defi-convergence-guide-2026" style={{ color: "#fb923c", marginRight: "1rem" }}>Tradfi Defi Convergence Guide 2026</a>

          <a href="/learn/what-is-a-dao-explained" style={{ color: "#fb923c", marginRight: "1rem" }}>What Is A Dao Explained</a>
        </nav>
      </article>
          <div style={{
        marginTop: "32px",
        padding: "24px",
        backgroundColor: "#111827",
        borderRadius: "12px",
        border: "1px solid #374151"
      }}>
        <h3 style={{ marginBottom: "16px", color: "#f3f4f6" }}>Explore More</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          <Link href="/learn" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            All Learning Guides
          </Link>
          <Link href="/tools" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            Crypto Tools
          </Link>
          <Link href="/compare" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            Compare Projects
          </Link>
        </div>
      </div>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Perpetual Futures Trading Guide 2026 \u2014 How Perps Work", "description": "Learn everything about perpetual futures: funding rates, leverage, liquidation, delta-neutral strategies, and the best perp DEXs in 2026. Beginner to advanced", "url": "https://degen0x.com/learn/perpetual-futures-guide", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
      <RelatedContent category="learn" currentSlug="/learn/perpetual-futures-guide" />
</div>
  );
}
