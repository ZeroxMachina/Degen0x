'use client';
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";
import StructuredData from "@/components/StructuredData";

const S = {
  bg: "var(--color-bg, #0d1117)", border: "var(--glass-border, #30363d)",
  text: "var(--color-text, #e6edf3)", text2: "var(--color-text-secondary, #8b949e)",
  primary: "#6366f1", blue: "#58a6ff", green: "#3fb950", purple: "#bc8cff",
  yellow: "#d29922", red: "#f85149", orange: "#F6851B",
};

const breadcrumbs = [
  { label: "Home", href: "/" }, { label: "Learn", href: "/learn" },
  { label: "Katana Perps Guide", href: "/learn/katana-perps-idex-acquisition-guide" },
];

const faqData = [
  {
    question: "What is Katana Perps?",
    answer: "Katana Perps is a native perpetual futures DEX built on the Katana chain (a Polygon-incubated DeFi L2). It launched on March 23, 2026 after Katana acquired IDEX, combining order book infrastructure with a structural yield model that funds incentives from real bridged-USDC yield rather than token emissions.",
  },
  {
    question: "How does Katana's Vault Bridge structural yield model work?",
    answer: "The Vault Bridge takes USDC bridged onto Katana's L2 and deploys it into yield-generating strategies. The yield generated funds trading incentives like liquidity provision, market making rewards, and user incentives — making the system self-sustaining without relying on inflationary token emissions.",
  },
  {
    question: "Why did Katana acquire IDEX?",
    answer: "Katana acquired IDEX to gain proven order book and matching engine technology, a team with deep expertise in decentralized exchange infrastructure, and an existing user base. This vertical integration allows Katana to own the full DeFi stack — from chain infrastructure to trading execution.",
  },
  {
    question: "How does Katana Perps compare to Hyperliquid?",
    answer: "Hyperliquid dominates with over 70% of decentralized perpetuals open interest as of March 2026. Katana Perps differentiates through its structural yield model (sustainable incentives vs. token emissions), vertical integration with its own L2 chain, and focus on the Polygon ecosystem. Hyperliquid is an independent L1, while Katana is building a full-stack DeFi chain.",
  },
  {
    question: "What is the current state of on-chain perpetual futures trading?",
    answer: "On-chain perp DEX volume reached $739.48 billion in January 2026 alone, with decentralized venues capturing 10.2% of total crypto perpetuals trading — up from just 2.0% two years earlier. The market is growing rapidly but is heavily concentrated, with Hyperliquid commanding the majority of market share.",
  },
];

const articleSchema = generateArticleSchema({
  title: "Katana Perps & IDEX Acquisition Guide 2026",
  description: "Learn how Katana acquired IDEX to launch a native perpetual futures DEX with a structural yield model. Understand the Vault Bridge, vertical integration strategy, and how it competes in the on-chain derivatives market.",
  url: "https://degen0x.com/learn/katana-perps-idex-acquisition-guide",
  datePublished: "2026-03-25T00:00:00Z",
  dateModified: "2026-03-25T00:00:00Z",
  author: "degen0x Team",
  image: "https://degen0x.com/og-katana-perps-idex-acquisition-guide.svg",
  wordCount: 2800,
});

const faqSchema = generateFAQSchema(faqData);
const schema = combineSchemas([articleSchema, faqSchema]);

export default function KatanaPerpsGuidePage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh" }}>
      <StructuredData data={schema} />
      <div style={{ borderBottom: `1px solid ${S.border}`, paddingTop: 24 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 24px" }}>
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>
      <article style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px 80px" }}>

        {/* ── Header ── */}
        <header style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
            <span style={{ fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: `${S.purple}20`, color: S.purple, border: `1px solid ${S.purple}40` }}>⚔️ Perp DEX</span>
            <span style={{ fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: `${S.blue}20`, color: S.blue, border: `1px solid ${S.blue}40` }}>DeFi Infrastructure</span>
            <span style={{ fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: `${S.yellow}20`, color: S.yellow, border: `1px solid ${S.yellow}40` }}>Intermediate</span>
            <span style={{ fontSize: 12, color: S.text2 }}>Updated March 25, 2026 · 12 min read</span>
          </div>
          <h1 style={{ fontSize: "2.4rem", fontWeight: 900, lineHeight: 1.2, marginBottom: 20 }}>
            Katana Perps Guide 2026: How the IDEX Acquisition Created a Full-Stack Perp DEX
          </h1>
          <p style={{ fontSize: 17, color: S.text2, lineHeight: 1.75 }}>
            Katana, a Polygon-incubated DeFi chain, acquired IDEX on March 23, 2026 and launched Katana Perps — a native perpetual futures platform powered by a structural yield model instead of token emissions. This guide explains how Katana&apos;s vertical integration strategy works, what the Vault Bridge does, and how it competes in the rapidly growing on-chain derivatives market.
          </p>
        </header>

        {/* ── Table of Contents ── */}
        <nav style={{ background: "#161b22", border: `1px solid ${S.border}`, borderRadius: 14, padding: 24, marginBottom: 40 }}>
          <h2 style={{ fontSize: 14, fontWeight: 700, marginBottom: 12, color: S.blue }}>Table of Contents</h2>
          <ol style={{ paddingLeft: 20, color: S.text2, fontSize: 14, lineHeight: 2.2 }}>
            {[
              ["why-katana-acquired-idex", "Why Katana Acquired IDEX"],
              ["structural-yield", "The Structural Yield Model & Vault Bridge"],
              ["how-katana-perps-works", "How Katana Perps Works"],
              ["market-context", "On-Chain Perps Market: The $739B Landscape"],
              ["vertical-integration", "Vertical Integration: Owning the Full Stack"],
              ["katana-vs-hyperliquid", "Katana vs. Hyperliquid vs. dYdX"],
              ["risks", "Risks & Considerations"],
              ["faq", "FAQ"],
            ].map(([id, label]) => (
              <li key={id}><a href={`#${id}`} style={{ color: S.blue, textDecoration: "none" }}>{label}</a></li>
            ))}
          </ol>
        </nav>

        {/* ── Section 1: Why Katana Acquired IDEX ── */}
        <section id="why-katana-acquired-idex" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16 }}>1. Why Katana Acquired IDEX</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            On March 23, 2026, Katana announced it had completed the acquisition of IDEX, a decentralized exchange that&apos;s been operating since 2017. The move wasn&apos;t just about adding a trading product — it was about owning a critical piece of DeFi infrastructure at the chain level.
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
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            IDEX brought three key assets to Katana: a battle-tested order book matching engine, a team with deep expertise in decentralized trading infrastructure, and years of regulatory and operational experience. Rather than building a perps platform from scratch or relying on third-party apps for trading volume, Katana chose to acquire and integrate.
          </p>
          <div style={{ background: `${S.purple}08`, border: `1px solid ${S.purple}25`, borderRadius: 14, padding: 24, marginBottom: 16 }}>
            <div style={{ fontWeight: 800, color: S.purple, marginBottom: 12 }}>💡 What IDEX Brought to the Table</div>
            <div style={{ display: "grid", gap: 8 }}>
              {[
                "Order book & matching engine technology — proven in production since 2017",
                "Team expertise in decentralized exchange infrastructure and hybrid architectures",
                "Existing user base and liquidity network from years of operation",
                "Regulatory compliance know-how — critical as SEC/CFTC scrutiny increases",
              ].map((s) => (
                <div key={s} style={{ color: S.text2, fontSize: 14, paddingLeft: 8, display: "flex", gap: 8 }}>
                  <span style={{ color: S.purple }}>▸</span> {s}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 2: Structural Yield ── */}
        <section id="structural-yield" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16 }}>2. The Structural Yield Model & Vault Bridge</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Most perp DEXes incentivize early users with token emissions — a model that works short-term but creates sell pressure and dilution. Katana Perps takes a fundamentally different approach with its <strong style={{ color: S.text }}>structural yield model</strong>.
          </p>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 20 }}>
            The Vault Bridge is the engine behind this model. When users bridge USDC onto Katana&apos;s L2, those funds don&apos;t sit idle — the Vault Bridge deploys them into yield-generating strategies. The yield produced is then used to fund:
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14, marginBottom: 20 }}>
            {[
              { icon: "💧", title: "Liquidity Incentives", desc: "Rewards for market makers and LPs providing depth to the order book" },
              { icon: "🎯", title: "Trading Rewards", desc: "Fee rebates and volume-based incentives for active traders" },
              { icon: "🔄", title: "Protocol Operations", desc: "Sustainable funding for ongoing platform development and maintenance" },
            ].map((item) => (
              <div key={item.title} style={{ background: `${S.green}08`, border: `1px solid ${S.green}25`, borderRadius: 12, padding: 18 }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{item.icon}</div>
                <div style={{ fontWeight: 700, color: S.green, fontSize: 14, marginBottom: 6 }}>{item.title}</div>
                <div style={{ fontSize: 13, color: S.text2, lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            ))}
          </div>

          <div style={{ background: `${S.yellow}08`, border: `1px solid ${S.yellow}25`, borderRadius: 14, padding: 24 }}>
            <div style={{ fontWeight: 800, color: S.yellow, marginBottom: 12 }}>⚡ Why This Matters</div>
            <p style={{ color: S.text2, fontSize: 14, lineHeight: 1.7 }}>
              Structural yield means incentives scale with deposits, not with token inflation. As more USDC is bridged to Katana, more yield is generated, funding more incentives, attracting more users. It&apos;s a flywheel that doesn&apos;t require printing new tokens — a direct response to the &quot;farm-and-dump&quot; problem that plagued DeFi Summer-era protocols.
            </p>
          </div>
        </section>

        {/* ── Section 3: How Katana Perps Works ── */}
        <section id="how-katana-perps-works" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16 }}>3. How Katana Perps Works</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 20 }}>
            Katana Perps lives at <code style={{ background: "#161b22", padding: "2px 6px", borderRadius: 4, fontSize: 13 }}>perps.katana.network</code> and offers perpetual futures trading with the following architecture:
          </p>

          <div style={{ display: "grid", gap: 12, marginBottom: 20 }}>
            {[
              { step: "1", title: "Bridge USDC", desc: "Users bridge USDC to Katana's L2 via the Vault Bridge. Funds immediately start generating structural yield." },
              { step: "2", title: "Open Positions", desc: "Trade perpetual futures with leverage against an order book (inherited from IDEX's matching engine). Supports major pairs including BTC, ETH, SOL, and more." },
              { step: "3", title: "Earn Incentives", desc: "Traders and LPs earn rewards funded by Vault Bridge yield — not token emissions. Season 1 incentive program is currently live." },
              { step: "4", title: "Settle & Withdraw", desc: "PnL is settled in USDC. Withdraw back to Ethereum or stay on Katana's L2 for other DeFi activities." },
            ].map((s) => (
              <div key={s.step} style={{ display: "flex", gap: 16, background: "#161b22", border: `1px solid ${S.border}`, borderRadius: 12, padding: 18 }}>
                <div style={{ minWidth: 36, height: 36, borderRadius: "50%", background: `${S.primary}20`, color: S.primary, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 16 }}>{s.step}</div>
                <div>
                  <div style={{ fontWeight: 700, color: S.text, marginBottom: 4 }}>{s.title}</div>
                  <div style={{ fontSize: 14, color: S.text2, lineHeight: 1.6 }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 4: Market Context ── */}
        <section id="market-context" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16 }}>4. On-Chain Perps Market: The $739B Landscape</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 20 }}>
            Katana Perps enters a booming but highly concentrated market. On-chain perpetual futures have grown from a niche to a mainstream DeFi category:
          </p>

          <div style={{ background: "#161b22", border: `1px solid ${S.border}`, borderRadius: 14, padding: 24, marginBottom: 20 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 20 }}>
              {[
                { label: "Jan 2026 Perp DEX Volume", value: "$739.5B", color: S.green },
                { label: "DEX Share of Perp Trading", value: "10.2%", color: S.blue },
                { label: "DEX Share 2 Years Ago", value: "2.0%", color: S.text2 },
                { label: "Hyperliquid OI Market Share", value: "70%+", color: S.purple },
              ].map((m) => (
                <div key={m.label}>
                  <div style={{ fontSize: 28, fontWeight: 900, color: m.color, marginBottom: 4 }}>{m.value}</div>
                  <div style={{ fontSize: 12, color: S.text2 }}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          <p style={{ color: S.text2, lineHeight: 1.8 }}>
            The growth is massive — but so is the concentration. <a href="/ecosystem/hyperliquid" style={{ color: S.blue, textDecoration: "none" }}>Hyperliquid</a> dominates with over 70% of open interest in decentralized perpetuals. For Katana Perps to carve out meaningful market share, its structural yield model and full-stack integration need to offer something Hyperliquid can&apos;t: sustainable incentives without token dependency and deep ecosystem integration via the Polygon network. For a broader overview of perpetual futures trading, see our <a href="/learn/perpetual-dex-guide-2026" style={{ color: S.blue, textDecoration: "none" }}>perpetual DEX guide</a>.
          </p>
        </section>

        {/* ── Section 5: Vertical Integration ── */}
        <section id="vertical-integration" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16 }}>5. Vertical Integration: Owning the Full Stack</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Katana&apos;s strategy is unusual in DeFi: rather than being a single application on someone else&apos;s chain, it&apos;s building a chain that owns its core DeFi primitives. The IDEX acquisition is the latest step in this vertical integration.
          </p>
          <div style={{ overflowX: "auto", marginBottom: 16 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${S.border}` }}>
                  <th style={{ textAlign: "left", padding: "10px 12px", color: S.text2, fontWeight: 600 }}>Layer</th>
                  <th style={{ textAlign: "left", padding: "10px 12px", color: S.text2, fontWeight: 600 }}>Katana Approach</th>
                  <th style={{ textAlign: "left", padding: "10px 12px", color: S.text2, fontWeight: 600 }}>Typical L2 Approach</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Chain / Settlement", "Own L2 (Polygon-incubated)", "Build on existing L2"],
                  ["Bridge / Liquidity", "Vault Bridge (yield-generating)", "Standard bridge (idle capital)"],
                  ["Spot DEX", "Native AMM", "3rd-party Uniswap fork"],
                  ["Perp DEX", "Katana Perps (owns IDEX tech)", "3rd-party protocol"],
                  ["Revenue Capture", "Fees at every layer → flywheel", "Sequencer fees only"],
                ].map(([layer, katana, typical]) => (
                  <tr key={layer} style={{ borderBottom: `1px solid ${S.border}` }}>
                    <td style={{ padding: "10px 12px", fontWeight: 600, color: S.text }}>{layer}</td>
                    <td style={{ padding: "10px 12px", color: S.green }}>{katana}</td>
                    <td style={{ padding: "10px 12px", color: S.text2 }}>{typical}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ color: S.text2, lineHeight: 1.8 }}>
            This mirrors what Hyperliquid did by building its own L1 — but Katana takes a different angle by leveraging the Polygon ecosystem and focusing on sustainable yield rather than pure performance.
          </p>
        </section>

        {/* ── Section 6: Comparison ── */}
        <section id="katana-vs-hyperliquid" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16 }}>6. Katana vs. Hyperliquid vs. dYdX</h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ borderBottom: `2px solid ${S.border}` }}>
                  <th style={{ textAlign: "left", padding: "10px 12px", color: S.text2, fontWeight: 600 }}>Feature</th>
                  <th style={{ textAlign: "center", padding: "10px 12px", color: S.purple, fontWeight: 700 }}>Katana Perps</th>
                  <th style={{ textAlign: "center", padding: "10px 12px", color: S.blue, fontWeight: 700 }}>Hyperliquid</th>
                  <th style={{ textAlign: "center", padding: "10px 12px", color: S.orange, fontWeight: 700 }}>dYdX</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Chain", "Polygon L2", "Own L1", "Cosmos appchain"],
                  ["Incentive Model", "Structural yield", "Token emissions + fees", "Token emissions"],
                  ["Order Book", "Acquired (IDEX)", "Custom-built", "Off-chain matching"],
                  ["Ecosystem", "Polygon network", "Standalone", "Cosmos IBC"],
                  ["Launch Date", "March 2026", "2023 (mainnet 2024)", "2021 (v4: 2023)"],
                  ["Differentiator", "Sustainable incentives", "Speed & liquidity", "Decentralized governance"],
                ].map(([feature, katana, hyper, dydx]) => (
                  <tr key={feature} style={{ borderBottom: `1px solid ${S.border}` }}>
                    <td style={{ padding: "10px 12px", fontWeight: 600, color: S.text }}>{feature}</td>
                    <td style={{ padding: "10px 12px", textAlign: "center", color: S.text2 }}>{katana}</td>
                    <td style={{ padding: "10px 12px", textAlign: "center", color: S.text2 }}>{hyper}</td>
                    <td style={{ padding: "10px 12px", textAlign: "center", color: S.text2 }}>{dydx}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Section 7: Risks ── */}
        <section id="risks" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16 }}>7. Risks & Considerations</h2>
          <div style={{ display: "grid", gap: 12 }}>
            {[
              { title: "Market Concentration", desc: "Hyperliquid's 70%+ dominance means Katana Perps must offer a compelling reason for traders to switch or diversify. Liquidity begets liquidity, and bootstrapping a new perps venue is notoriously difficult.", color: S.red },
              { title: "Vault Bridge Yield Risk", desc: "The structural yield model depends on the safety and reliability of underlying yield strategies. Smart contract risk in yield-generating protocols could impact the entire incentive system.", color: S.yellow },
              { title: "Execution Risk", desc: "Integrating IDEX's technology into a new chain with a new incentive model is non-trivial. Season 1 is live but the platform is still very early — bugs, downtime, and growing pains are expected.", color: S.orange },
              { title: "Regulatory Uncertainty", desc: "Perpetual futures face ongoing regulatory scrutiny globally. While the SEC/CFTC's recent digital commodities framework provides some clarity, enforcement actions against perp DEXes remain a risk.", color: S.purple },
            ].map((risk) => (
              <div key={risk.title} style={{ background: `${risk.color}08`, border: `1px solid ${risk.color}25`, borderRadius: 12, padding: 18 }}>
                <div style={{ fontWeight: 700, color: risk.color, marginBottom: 6 }}>⚠️ {risk.title}</div>
                <div style={{ fontSize: 14, color: S.text2, lineHeight: 1.7 }}>{risk.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 20 }}>Frequently Asked Questions</h2>
          <div style={{ display: "grid", gap: 12 }}>
            {faqData.map((faq) => (
              <div key={faq.question} style={{ background: "#161b22", border: `1px solid ${S.border}`, borderRadius: 12, padding: 20 }}>
                <div style={{ fontWeight: 700, color: S.text, marginBottom: 8 }}>{faq.question}</div>
                <div style={{ fontSize: 14, color: S.text2, lineHeight: 1.7 }}>{faq.answer}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Key Takeaways ── */}
        <section style={{ background: `${S.primary}10`, border: `1px solid ${S.primary}25`, borderRadius: 16, padding: 28, marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: 16, color: S.primary }}>⚔️ Key Takeaways</h2>
          {[
            "Katana acquired IDEX on March 23, 2026, launching Katana Perps — a native perpetual futures DEX on its Polygon-incubated L2.",
            "The structural yield model uses real USDC yield from the Vault Bridge to fund incentives, replacing unsustainable token emissions.",
            "On-chain perp DEX volume hit $739.5B in January 2026, with DEX share growing from 2% to 10.2% in two years.",
            "Katana's vertical integration strategy (own chain + bridge + spot DEX + perps) maximizes fee capture and creates a self-reinforcing flywheel.",
            "The biggest challenge is competing with Hyperliquid's 70%+ market share and deep liquidity moat.",
          ].map((pt, i) => (
            <div key={i} style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start" }}>
              <span style={{ color: S.primary, fontWeight: 800, marginTop: 2 }}>✦</span>
              <span style={{ color: S.text2, lineHeight: 1.7, fontSize: 14 }}>{pt}</span>
            </div>
          ))}
        </section>

        {/* ── Related Articles ── */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: 16 }}>Related Articles & Tools</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 14 }}>
            {[
              { title: "Perpetual DEX Guide 2026", desc: "Complete overview of on-chain perpetual futures trading platforms and how they work.", href: "/learn/perpetual-dex-guide-2026", color: S.blue },
              { title: "Hyperliquid Ecosystem", desc: "Deep dive into the dominant perp DEX commanding 70%+ of decentralized derivatives OI.", href: "/ecosystem/hyperliquid", color: S.green },
              { title: "Funding Rate Tracker", desc: "Track real-time funding rates across major perp DEXes and centralized exchanges.", href: "/tools/funding-rate-tracker", color: S.purple },
            ].map((card) => (
              <a key={card.title} href={card.href} style={{ background: "#161b22", border: `1px solid ${S.border}`, borderRadius: 12, padding: 18, textDecoration: "none", display: "block", transition: "border-color 0.2s" }}>
                <div style={{ fontWeight: 700, color: card.color, marginBottom: 6, fontSize: 14 }}>{card.title}</div>
                <div style={{ fontSize: 13, color: S.text2, lineHeight: 1.6 }}>{card.desc}</div>
              </a>
            ))}
          </div>
        </section>

        {/* ── Disclaimer ── */}
        <div style={{ background: `${S.yellow}08`, border: `1px solid ${S.yellow}25`, borderRadius: 12, padding: 20, fontSize: 13, color: S.text2, lineHeight: 1.7 }}>
          ⚠️ This guide is for informational purposes only. It is not financial advice. Perpetual futures trading involves significant risk of loss. Always do your own research before making investment decisions. Data sourced from public announcements and on-chain metrics as of March 2026.
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
    </main>
  );
}
