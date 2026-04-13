import type { Metadata } from "next";
import Link from "next/link";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";
import StructuredData from "@/components/StructuredData";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import { SITE_NAME } from "@/lib/constants";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: "Liquid Restaking Tokens Compared 2026: weETH vs rsETH vs",
  description: "Complete guide to Liquid Restaking Tokens (LRTs) comparing weETH (Ether.fi), rsETH (Kelp/KernelDAO), ezETH (Renzo), and others. Learn how LRTs work, TVL,",
  keywords: "liquid restaking tokens, LRT, weETH, rsETH, ezETH, EigenLayer, restaking, AVS, Ether.fi, Kelp, Renzo, DeFi yield",
  openGraph: {
    title: "Liquid Restaking Tokens Compared 2026: weETH vs rsETH vs ezETH",
    description: "Expert guide to liquid restaking tokens with TVL comparisons, yield analysis, risk assessment, and DeFi strategies.",
    url: "https://degen0x.com/learn/liquid-restaking-tokens-compared-2026",
    type: "article",
    publishedTime: "2026-03-17T00:00:00Z",
    modifiedTime: "2026-03-17T00:00:00Z",
    authors: ["degen0x Team"],
    images: [
      {
        url: "https://degen0x.com/api/og?title=Liquid+Restaking+Tokens+Compared&category=Learn&type=learn",
        width: 1200,
        height: 630,
        alt: "Liquid Restaking Tokens Compared 2026 — degen0x",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Liquid Restaking Tokens Compared 2026: weETH vs rsETH vs ezETH",
    description: "Compare weETH, rsETH, ezETH — TVL, yields, risks, and DeFi strategies for the top liquid restaking tokens.",
  },

  alternates: { canonical: "/learn/liquid-restaking-tokens-compared-2026" }};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Learn", href: "/learn" },
  { label: "Liquid Restaking Tokens Compared 2026", href: "/learn/liquid-restaking-tokens-compared-2026" },
];

const article = {
  title: "Liquid Restaking Tokens Compared 2026: weETH vs rsETH vs ezETH — Complete Guide",
  description: "Master liquid restaking tokens. Compare TVL, yields, risks, and choose the best LRT for your strategy.",
  slug: "/learn/liquid-restaking-tokens-compared-2026",
  publishedTime: "2026-03-17T00:00:00Z",
  wordCount: 3500,
};

const faqItems = [
  {
    question: "What is the difference between liquid staking and liquid restaking?",
    answer: "Liquid staking (LST) lets you stake ETH with a validator and receive a liquid token (like stETH). Liquid restaking (LRT) takes that LST and restakes it again with EigenLayer, adding another layer of yield. You receive an LRT token that represents your restaked position."
  },
  {
    question: "Which liquid restaking token has the highest TVL?",
    answer: "Ether.fi's weETH is the largest LRT with $2.8B+ TVL as of March 2026. Kelp/KernelDAO's rsETH is second with $2B+ TVL, followed by Renzo's ezETH with ~$1B+ TVL."
  },
  {
    question: "Can I lose money with liquid restaking tokens?",
    answer: "Yes. LRTs face slashing risk (AVS operators commit capital and face penalties if they misbehave), smart contract risk, and liquidity risk. If an AVS is slashed, your restaked capital can be permanently reduced."
  },
  {
    question: "What is EigenLayer and why does it matter for LRTs?",
    answer: "EigenLayer is a protocol that allows stakers to restake their ETH and earn fees from Actively Validated Services (AVS). LRTs are built on top of EigenLayer, pooling user deposits and restaking them across multiple AVS operators to maximize yield."
  },
  {
    question: "Are LRTs safe to use as collateral in DeFi?",
    answer: "LRTs have added risk compared to standard LSTs. Aave and other lending protocols may allow LRTs as collateral but with lower LTV (Loan-to-Value) ratios due to slashing risk. Always check current risk parameters before using as collateral."
  },
  {
    question: "How do I unstake from an LRT protocol?",
    answer: "Most LRTs let you unstake by swapping your LRT token for the underlying asset (e.g., weETH → ETH) via the protocol's dashboard or DEX. Unstaking is usually instant but may have small slippage. Some protocols have withdrawal queues during high redemption periods."
  },
];

const articleSchema = generateArticleSchema({
  title: article.title,
  description: article.description,
  url: "https://degen0x.com" + article.slug,
  datePublished: article.publishedTime,
  dateModified: article.publishedTime,
  author: "degen0x Team",
  wordCount: article.wordCount,
});

const faqSchema = generateFAQSchema(faqItems);
const schemas = combineSchemas([articleSchema, faqSchema]);

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Learn', item: 'https://degen0x.com/learn' },
    { '@type': 'ListItem', position: 3, name: 'Liquid Restaking Tokens Compared 2026', },
  ],
};

export default function LiquidRestakingTokensPage() {
  const S = {
    bg: "var(--color-bg, #0d1117)",
    surface: "var(--color-surface, #161b22)",
    surface2: "#1c2330",
    border: "var(--glass-border, #30363d)",
    text: "var(--color-text, #e6edf3)",
    text2: "var(--color-text-secondary, #8b949e)",
    primary: "var(--color-primary, #58a6ff)",
    accent: "#79c0ff",
    green: "#3fb950",
    red: "#f85149",
    orange: "#f0883e",
    yellow: "#d29922",
  };

  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <StructuredData data={schemas} />

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
            <span style={{ fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: `${S.primary}20`, color: S.primary, border: `1px solid ${S.primary}40` }}>🌊 Restaking</span>
            <span style={{ fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: "#79c0ff20", color: S.accent, border: "1px solid #79c0ff40" }}>DeFi Yield</span>
            <span style={{ fontSize: 12, color: S.text2 }}>Updated March 17, 2026 · 15 min read</span>
          </div>

          <h1 style={{ fontSize: "2.8rem", fontWeight: 900, lineHeight: 1.1, marginBottom: 20, background: `linear-gradient(135deg, ${S.primary}, ${S.accent})`, backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Liquid Restaking Tokens Compared 2026
          </h1>

          <p style={{ fontSize: 17, color: S.text2, lineHeight: 1.75, marginBottom: 28 }}>
            Liquid Restaking Tokens (LRTs) are one of the hottest DeFi narratives in 2026. They let you earn multiple layers of yield: staking rewards, restaking rewards, and protocol rewards. But they come with serious risks. This guide compares the top LRT protocols—weETH, rsETH, ezETH, and more—so you can choose the right one for your strategy.
          </p>

          {/* Quick Context Box */}
          <div style={{ background: `${S.primary}10`, border: `1px solid ${S.primary}30`, borderRadius: 14, padding: 24, marginBottom: 32 }}>
            <h2 style={{ fontSize: 16, fontWeight: 800, color: S.accent, marginBottom: 16 }}>⚡ Restaking Quick Facts</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, fontSize: 14, color: S.text }}>
              <div>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Total LRT TVL</div>
                <div style={{ color: S.text2 }}>~$6B+ (as of March 2026)</div>
              </div>

        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-03-17"
          updatedDate="2026-03-17"
          readingTime={7}
          section="learn"
        />

              <div>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Largest Protocol</div>
                <div style={{ color: S.text2 }}>Ether.fi (weETH) — $2.8B+</div>
              </div>
              <div>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Est. LRT Yields</div>
                <div style={{ color: S.text2 }}>8–15% APY (varies by AVS)</div>
              </div>
              <div>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Main Risk</div>
                <div style={{ color: S.text2 }}>AVS slashing</div>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 20 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: S.text, marginBottom: 12 }}>📋 Table of Contents</div>
            {[
              ["#what-are-lrts", "What Are Liquid Restaking Tokens?"],
              ["#how-lrts-work", "How Liquid Restaking Works"],
              ["#major-protocols", "The Major LRT Protocols Compared"],
              ["#comparison-table", "Head-to-Head Comparison"],
              ["#etherfi-deep-dive", "Ether.fi (weETH) Deep Dive"],
              ["#kelp-deep-dive", "Kelp/KernelDAO (rsETH) Deep Dive"],
              ["#renzo-deep-dive", "Renzo (ezETH) Deep Dive"],
              ["#defi-strategies", "Using LRTs in DeFi"],
              ["#risks", "Risks of Liquid Restaking"],
              ["#choose-lrt", "How to Choose the Right LRT"],
            ].map(([href, label]) => (
              <div key={href as string}>
                <a href={href as string} style={{ display: "block", color: S.primary, fontSize: 13, textDecoration: "none", padding: "4px 0", lineHeight: 1.6 }}>→ {label as string}</a>
              </div>
            ))}
          </div>
        </header>

        {/* Section 1: What Are LRTs */}
        <section id="what-are-lrts" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>What Are Liquid Restaking Tokens?</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Liquid Restaking Tokens (LRTs) are a relatively new primitive in crypto that stacks yield on top of yield. Here's how it works:
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
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 24 }}>
            When you deposit ETH (or an Ethereum LST like stETH, rETH, cbETH) into an LRT protocol, your deposit is automatically restaked on EigenLayer. In return, you receive a liquid token (like weETH, rsETH, or ezETH) that you can trade, use as collateral, or provide as liquidity. While your capital is restaked earning yield, your LRT token can work in other DeFi protocols simultaneously—you get double-duty capital efficiency.
          </p>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Why LRTs Matter</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { emoji: "💰", title: "Multi-Layer Yield", body: "You earn base staking yield (4–5%) + restaking yield (3–10%) + protocol incentives (ETHFI, KEL, REZ). Total APY often exceeds 10%." },
              { emoji: "⚡", title: "Capital Efficiency", body: "Your LRT token remains liquid. You can deposit it into lending protocols (Aave), provide liquidity on Pendle, or use it for leveraged strategies." },
              { emoji: "🔄", title: "Abstraction", body: "You don't have to manage multiple protocols or operators. The LRT protocol handles restaking logic and operator selection." },
              { emoji: "📊", title: "Diversification", body: "Large LRT protocols distribute your capital across multiple AVS operators, reducing single-point-of-failure risk." },
            ].map(p => (
              <div key={p.title} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16, display: "flex", gap: 14 }}>
                <span style={{ fontSize: 20, flexShrink: 0 }}>{p.emoji}</span>
                <div>
                  <h4 style={{ fontSize: 14, fontWeight: 800, marginBottom: 4 }}>{p.title}</h4>
                  <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.7, margin: 0 }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: How LRTs Work */}
        <section id="how-lrts-work" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>How Liquid Restaking Works</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Understanding the mechanics is crucial. LRTs operate in a specific flow with EigenLayer at the center.
          </p>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>The Restaking Flow</h3>
          <div style={{ background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 10, padding: 20, marginBottom: 24, fontSize: 13, color: S.text, lineHeight: 2 }}>
            <div style={{ fontWeight: 700, marginBottom: 16 }}>Step 1: You Deposit</div>
            <div style={{ marginLeft: 16, marginBottom: 16 }}>You deposit ETH or an LST (stETH, rETH, cbETH) into the LRT protocol (e.g., Ether.fi).</div>

            <div style={{ fontWeight: 700, marginBottom: 16 }}>Step 2: LRT Protocol Receives LST</div>
            <div style={{ marginLeft: 16, marginBottom: 16 }}>The protocol automatically swaps your ETH for staked ETH (LST) if needed, or uses your existing LST.</div>

            <div style={{ fontWeight: 700, marginBottom: 16 }}>Step 3: Restaking on EigenLayer</div>
            <div style={{ marginLeft: 16, marginBottom: 16 }}>Your LST is deposited into EigenLayer. EigenLayer becomes the custodian and applies restaking logic.</div>

            <div style={{ fontWeight: 700, marginBottom: 16 }}>Step 4: AVS Operator Assignment</div>
            <div style={{ marginLeft: 16, marginBottom: 16 }}>EigenLayer distributes your capital across Actively Validated Service (AVS) operators based on the LRT protocol's strategy.</div>

            <div style={{ fontWeight: 700, marginBottom: 16 }}>Step 5: You Receive LRT Token</div>
            <div style={{ marginLeft: 16, marginBottom: 16 }}>You receive an LRT token (weETH, rsETH, ezETH, etc.) representing your share of the restaked pool.</div>

            <div style={{ fontWeight: 700, marginBottom: 16 }}>Step 6: Earn Multiple Yields</div>
            <div style={{ marginLeft: 16 }}>Base staking yield (from the LST) + restaking rewards from AVS + protocol incentives accumulate in your LRT token's value.</div>
          </div>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>EigenLayer & AVS Explained</h3>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            EigenLayer is a smart contract protocol that allows you to restake staked Ethereum with different service providers (AVS). An Actively Validated Service is a specialized operator that needs security from restaked ETH. Examples include oracle networks, sequencers, middleware, and DA layers. By restaking, you help secure these services and earn fees in return.
          </p>

          <div style={{ background: `${S.green}10`, border: `1px solid ${S.green}30`, borderRadius: 10, padding: 16, marginBottom: 20 }}>
            <div style={{ fontWeight: 700, marginBottom: 10, color: S.green }}>✓ Key Insight: Slashing</div>
            <p style={{ fontSize: 13, color: S.text2, margin: 0, lineHeight: 1.7 }}>
              If an AVS operator misbehaves (censors transactions, goes offline, equivocates), EigenLayer can slash your restaked capital. You don't lose the whole amount—slashing is typically 1–10%—but it's permanent and irreversible.
            </p>
          </div>
        </section>

        {/* Section 3: Major Protocols Overview */}
        <section id="major-protocols" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>The Major LRT Protocols Compared</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 24 }}>
            Five protocols dominate the LRT landscape. Each has a different approach to restaking, risk management, and incentives.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              {
                name: "Ether.fi (weETH & eETH)",
                tvl: "$2.8B+",
                token: "ETHFI",
                focus: "Native restaking, largest ecosystem",
                highlight: "Native restaking (first mover), ETHFI airdrops (15.3%), expanded to eBTC and stablecoin restaking",
              },
              {
                name: "Kelp/KernelDAO (rsETH)",
                tvl: "$2B+",
                token: "KEL",
                focus: "Multi-LST input, multi-chain",
                highlight: "10+ chains, $40M ecosystem fund (Jan 2026), Kred (Internet of Credit) initiative, BNB expansion",
              },
              {
                name: "Renzo (ezETH)",
                tvl: "~$1B+",
                token: "REZ",
                focus: "Cross-chain restaking pioneer",
                highlight: "Multi-chain strategy, cross-chain messaging, early mover in decentralized AVS selection",
              },
              {
                name: "Frax (sfrxETH)",
                tvl: "Lower TVL",
                token: "FRAX",
                focus: "LST, not true LRT",
                highlight: "Stablecoin ecosystem synergy, lower TVL but integrated with Frax ecosystem",
              },
              {
                name: "Puffer (pufETH)",
                tvl: "Emerging",
                token: "PUF",
                focus: "Anti-slashing tech",
                highlight: "Lower barriers to entry, anti-slashing mechanisms, new entrant with unique approach",
              },
            ].map(p => (
              <div key={p.name} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 12 }}>
                  <div>
                    <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 4 }}>{p.name}</h3>
                    <div style={{ fontSize: 13, color: S.text2 }}>TVL: {p.tvl} • Token: {p.token}</div>
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 700, padding: "4px 10px", borderRadius: 6, background: `${S.primary}20`, color: S.primary }}>
                    {p.focus}
                  </div>
                </div>
                <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.7, margin: 0 }}>{p.highlight}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Comparison Table */}
        <section id="comparison-table" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>Head-to-Head Comparison Table</h2>
          <div style={{ overflowX: "auto", borderRadius: 10, border: `1px solid ${S.border}` }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ backgroundColor: S.surface2, borderBottom: `1px solid ${S.border}` }}>
                  <th style={{ padding: 12, textAlign: "left", fontWeight: 800, color: S.accent }}>Metric</th>
                  <th style={{ padding: 12, textAlign: "left", fontWeight: 800, color: S.accent }}>weETH</th>
                  <th style={{ padding: 12, textAlign: "left", fontWeight: 800, color: S.accent }}>rsETH</th>
                  <th style={{ padding: 12, textAlign: "left", fontWeight: 800, color: S.accent }}>ezETH</th>
                  <th style={{ padding: 12, textAlign: "left", fontWeight: 800, color: S.accent }}>sfrxETH</th>
                  <th style={{ padding: 12, textAlign: "left", fontWeight: 800, color: S.accent }}>pufETH</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: `1px solid ${S.border}` }}>
                  <td style={{ padding: 12, fontWeight: 700 }}>TVL</td>
                  <td style={{ padding: 12 }}>$2.8B+</td>
                  <td style={{ padding: 12 }}>$2B+</td>
                  <td style={{ padding: 12 }}>~$1B+</td>
                  <td style={{ padding: 12 }}>Lower</td>
                  <td style={{ padding: 12 }}>Emerging</td>
                </tr>
                <tr style={{ borderBottom: `1px solid ${S.border}` }}>
                  <td style={{ padding: 12, fontWeight: 700 }}>Est. APY</td>
                  <td style={{ padding: 12 }}>10–14%</td>
                  <td style={{ padding: 12 }}>9–13%</td>
                  <td style={{ padding: 12 }}>8–12%</td>
                  <td style={{ padding: 12 }}>7–10%</td>
                  <td style={{ padding: 12 }}>Variable</td>
                </tr>
                <tr style={{ borderBottom: `1px solid ${S.border}` }}>
                  <td style={{ padding: 12, fontWeight: 700 }}>Chains</td>
                  <td style={{ padding: 12 }}>Mainnet</td>
                  <td style={{ padding: 12 }}>10+</td>
                  <td style={{ padding: 12 }}>Multi-chain</td>
                  <td style={{ padding: 12 }}>Mainnet</td>
                  <td style={{ padding: 12 }}>Mainnet</td>
                </tr>
                <tr style={{ borderBottom: `1px solid ${S.border}` }}>
                  <td style={{ padding: 12, fontWeight: 700 }}>Input Assets</td>
                  <td style={{ padding: 12 }}>ETH, LST</td>
                  <td style={{ padding: 12 }}>Multi-LST</td>
                  <td style={{ padding: 12 }}>Multi-LST</td>
                  <td style={{ padding: 12 }}>frxETH</td>
                  <td style={{ padding: 12 }}>ETH, LST</td>
                </tr>
                <tr style={{ borderBottom: `1px solid ${S.border}` }}>
                  <td style={{ padding: 12, fontWeight: 700 }}>Fee (Est.)</td>
                  <td style={{ padding: 12 }}>~1.5%</td>
                  <td style={{ padding: 12 }}>~2%</td>
                  <td style={{ padding: 12 }}>~2%</td>
                  <td style={{ padding: 12 }}>~1%</td>
                  <td style={{ padding: 12 }}>~2%</td>
                </tr>
                <tr style={{ borderBottom: `1px solid ${S.border}` }}>
                  <td style={{ padding: 12, fontWeight: 700 }}>Governance</td>
                  <td style={{ padding: 12 }}>ETHFI token</td>
                  <td style={{ padding: 12 }}>KEL token</td>
                  <td style={{ padding: 12 }}>REZ token</td>
                  <td style={{ padding: 12 }}>Frax DAO</td>
                  <td style={{ padding: 12 }}>PUF token</td>
                </tr>
                <tr>
                  <td style={{ padding: 12, fontWeight: 700 }}>Unique Feature</td>
                  <td style={{ padding: 12 }}>Native restaking first</td>
                  <td style={{ padding: 12 }}>Multi-chain + Kred</td>
                  <td style={{ padding: 12 }}>Cross-chain tech</td>
                  <td style={{ padding: 12 }}>Stablecoin synergy</td>
                  <td style={{ padding: 12 }}>Anti-slashing</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5: Ether.fi Deep Dive */}
        <section id="etherfi-deep-dive" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>Ether.fi Deep Dive: weETH & eETH</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Ether.fi is the largest LRT protocol with over $2.8B TVL. It launched native restaking—allowing you to deposit ETH directly without needing an LST first—which was revolutionary.
          </p>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Tokens</h3>
          <ul style={{ paddingLeft: 20, color: S.text, lineHeight: 2, fontSize: 14, marginBottom: 20 }}>
            <li><strong>weETH:</strong> Liquid restaking token (represents your restaked position)</li>
            <li><strong>eETH:</strong> Staked ETH token (represents your staked position before restaking)</li>
            <li><strong>ETHFI:</strong> Governance and airdrop token</li>
          </ul>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Key Features</h3>
          <div style={{ background: `${S.primary}10`, border: `1px solid ${S.primary}30`, borderRadius: 10, padding: 16, marginBottom: 20 }}>
            <ul style={{ paddingLeft: 20, color: S.text, lineHeight: 2, fontSize: 14, margin: 0 }}>
              <li><strong>Native Restaking:</strong> Deposit ETH directly → automatic conversion to eETH → restaking on EigenLayer</li>
              <li><strong>Airdrop Program:</strong> ~15.3% of ETHFI token was airdropped to early users (massive value)</li>
              <li><strong>Expansion:</strong> Now supports eBTC (Bitcoin restaking) and stablecoin restaking</li>
              <li><strong>Validator Network:</strong> Ether.fi also runs independent validators, providing staking without restaking</li>
            </ul>
          </div>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Pros & Cons</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
            <div style={{ background: `${S.green}10`, border: `1px solid ${S.green}30`, borderRadius: 10, padding: 16 }}>
              <div style={{ fontWeight: 700, color: S.green, marginBottom: 12 }}>✓ Pros</div>
              <ul style={{ paddingLeft: 16, color: S.text, lineHeight: 1.8, fontSize: 13, margin: 0 }}>
                <li>Largest TVL (most established)</li>
                <li>Simple UX (ETH → weETH)</li>
                <li>ETHFI airdrops</li>
                <li>Bitcoin + stablecoin expansion</li>
              </ul>
            </div>
            <div style={{ background: `${S.red}10`, border: `1px solid ${S.red}30`, borderRadius: 10, padding: 16 }}>
              <div style={{ fontWeight: 700, color: S.red, marginBottom: 12 }}>✗ Cons</div>
              <ul style={{ paddingLeft: 16, color: S.text, lineHeight: 1.8, fontSize: 13, margin: 0 }}>
                <li>Mainnet only (not multi-chain)</li>
                <li>Higher concentration risk</li>
                <li>ETHFI dilution post-airdrop</li>
                <li>Highest slashing exposure</li>
              </ul>
            </div>
          </div>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>How to Use</h3>
          <ol style={{ paddingLeft: 20, color: S.text, lineHeight: 2, fontSize: 14, marginBottom: 20 }}>
            <li>Go to app.ether.fi</li>
            <li>Connect your wallet and approve ETH</li>
            <li>Specify amount to deposit</li>
            <li>Receive weETH instantly</li>
            <li>Use weETH in DeFi (Pendle, Aave, UniswapV3)</li>
          </ol>
        </section>

        {/* Section 6: Kelp/KernelDAO Deep Dive */}
        <section id="kelp-deep-dive" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>Kelp/KernelDAO Deep Dive: rsETH</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Kelp rebranded to KernelDAO to reflect its broader ambitions. rsETH is designed to be multi-chain and multi-input from day one.
          </p>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Key Differentiators</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
            {[
              { title: "Multi-LST Input", body: "Accept stETH, rETH, cbETH, sfrxETH, and more. Single transaction aggregation." },
              { title: "10+ Chain Deployment", body: "Ethereum, Polygon, Arbitrum, Optimism, Base, Solana, and more (via bridges/cross-chain)." },
              { title: "$40M Ecosystem Fund", body: "Launched Jan 2026 to support builders integrating rsETH and AVS partnerships." },
              { title: "Kred Initiative", body: "Internet of Credit—using rsETH as collateral for undercollateralized lending (long-term play)." },
              { title: "BNB Expansion", body: "Recently launched rsETH on BNB chain with native BNB staking support." },
            ].map(p => (
              <div key={p.title} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16, display: "flex", gap: 14 }}>
                <span style={{ fontSize: 18, flexShrink: 0 }}>→</span>
                <div>
                  <h4 style={{ fontSize: 14, fontWeight: 800, marginBottom: 4 }}>{p.title}</h4>
                  <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.7, margin: 0 }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Why It Matters</h3>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            KernelDAO's multi-chain strategy positions rsETH as an interoperable restaking primitive. If their Kred initiative succeeds (using rsETH as collateral for loans), it could unlock a new DeFi primitive: multi-collateral, restaking-backed credit.
          </p>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Pros & Cons</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
            <div style={{ background: `${S.green}10`, border: `1px solid ${S.green}30`, borderRadius: 10, padding: 16 }}>
              <div style={{ fontWeight: 700, color: S.green, marginBottom: 12 }}>✓ Pros</div>
              <ul style={{ paddingLeft: 16, color: S.text, lineHeight: 1.8, fontSize: 13, margin: 0 }}>
                <li>Multi-chain support</li>
                <li>Flexible input (stETH, rETH, etc.)</li>
                <li>$40M ecosystem fund</li>
                <li>Ambitious Kred vision</li>
              </ul>
            </div>
            <div style={{ background: `${S.red}10`, border: `1px solid ${S.red}30`, borderRadius: 10, padding: 16 }}>
              <div style={{ fontWeight: 700, color: S.red, marginBottom: 12 }}>✗ Cons</div>
              <ul style={{ paddingLeft: 16, color: S.text, lineHeight: 1.8, fontSize: 13, margin: 0 }}>
                <li>More complex UX</li>
                <li>Cross-chain liquidity fragmented</li>
                <li>Kred still experimental</li>
                <li>Competition with Ether.fi</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 7: Renzo Deep Dive */}
        <section id="renzo-deep-dive" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>Renzo Deep Dive: ezETH</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Renzo was one of the first to pursue multi-chain restaking. ezETH is designed with cross-chain interoperability at its core.
          </p>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Unique Approach</h3>
          <div style={{ background: `${S.primary}10`, border: `1px solid ${S.primary}30`, borderRadius: 10, padding: 16, marginBottom: 20 }}>
            <ul style={{ paddingLeft: 20, color: S.text, lineHeight: 2, fontSize: 14, margin: 0 }}>
              <li><strong>Cross-Chain Restaking:</strong> Enables restaking of assets from non-Ethereum chains (e.g., BNB, Polygon native tokens)</li>
              <li><strong>Decentralized AVS Selection:</strong> Token holders vote on which AVS to restake with (vs. protocol-selected)</li>
              <li><strong>~$1B+ TVL:</strong> Solid position as third-largest LRT</li>
              <li><strong>REZ Token:</strong> Governance token with airdrop program</li>
            </ul>
          </div>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Cross-Chain Value Proposition</h3>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            If you have BNB or Polygon-staked ETH, Renzo lets you restake it without bridging to mainnet first. This reduces slippage, gas costs, and bridge risk. It's a compelling narrative for users already on L2s or sidechains.
          </p>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Pros & Cons</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
            <div style={{ background: `${S.green}10`, border: `1px solid ${S.green}30`, borderRadius: 10, padding: 16 }}>
              <div style={{ fontWeight: 700, color: S.green, marginBottom: 12 }}>✓ Pros</div>
              <ul style={{ paddingLeft: 16, color: S.text, lineHeight: 1.8, fontSize: 13, margin: 0 }}>
                <li>True cross-chain support</li>
                <li>Decentralized AVS voting</li>
                <li>Lower barriers for non-mainnet users</li>
                <li>Pioneering tech</li>
              </ul>
            </div>
            <div style={{ background: `${S.red}10`, border: `1px solid ${S.red}30`, borderRadius: 10, padding: 16 }}>
              <div style={{ fontWeight: 700, color: S.red, marginBottom: 12 }}>✗ Cons</div>
              <ul style={{ paddingLeft: 16, color: S.text, lineHeight: 1.8, fontSize: 13, margin: 0 }}>
                <li>Smaller TVL than weETH/rsETH</li>
                <li>Cross-chain messaging complexity</li>
                <li>Less DeFi integration (less liquidity)</li>
                <li>Newer team (execution risk)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 8: Using LRTs in DeFi */}
        <section id="defi-strategies" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>Using LRTs in DeFi</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            The magic of LRTs is that your token remains liquid. You can use it in DeFi to earn even more yield.
          </p>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Popular Strategies</h3>

          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 20, marginBottom: 24 }}>
            <h4 style={{ fontSize: 15, fontWeight: 800, marginBottom: 12 }}>1. Pendle Finance (PT/YT Strategy)</h4>
            <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.8, marginBottom: 12 }}>
              Deposit weETH into Pendle. Split it into:
            </p>
            <ul style={{ paddingLeft: 20, color: S.text, lineHeight: 1.8, fontSize: 13, marginBottom: 12 }}>
              <li><strong>Principle Token (PT):</strong> Sell for immediate yield if weETH appreciates before maturity</li>
              <li><strong>Yield Token (YT):</strong> Keep to capture restaking yield (8–15% APY)</li>
            </ul>
            <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.8 }}>
              <strong>Yield:</strong> 10–18% APY (YT) depending on market conditions
            </p>
          </div>

          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 20, marginBottom: 24 }}>
            <h4 style={{ fontSize: 15, fontWeight: 800, marginBottom: 12 }}>2. Aave Lending</h4>
            <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.8, marginBottom: 12 }}>
              Deposit weETH as collateral on Aave. Borrow stablecoins (USDC, USDT) and:
            </p>
            <ul style={{ paddingLeft: 20, color: S.text, lineHeight: 1.8, fontSize: 13, marginBottom: 12 }}>
              <li>Deploy borrowed stablecoins into higher-yield strategies (Curve, Lido, Pendle)</li>
              <li>Capture yield spread while earning weETH restaking APY</li>
            </ul>
            <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.8 }}>
              <strong>Risk:</strong> Liquidation if weETH price drops. Maintain 2x collateral ratio.
            </p>
          </div>

          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 20, marginBottom: 24 }}>
            <h4 style={{ fontSize: 15, fontWeight: 800, marginBottom: 12 }}>3. Uniswap V3 Liquidity Provision</h4>
            <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.8, marginBottom: 12 }}>
              Provide weETH/ETH liquidity on Uniswap V3 (concentrated range). Earn swap fees + restaking yield.
            </p>
            <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.8 }}>
              <strong>Yield:</strong> 12–20% APY depending on volume and range tightness.
            </p>
          </div>

          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 20, marginBottom: 24 }}>
            <h4 style={{ fontSize: 15, fontWeight: 800, marginBottom: 12 }}>4. Morpho Lending</h4>
            <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.8, marginBottom: 12 }}>
              Supply weETH on Morpho as collateral. Morpho offers peer-to-peer lending with lower fees than Aave.
            </p>
            <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.8 }}>
              <strong>Yield:</strong> Variable, but often competitive with Aave + MORPHO incentives.
            </p>
          </div>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>⚠️ Warning: Complexity & Cascade Risk</h3>
          <div style={{ background: `${S.yellow}15`, border: `1px solid ${S.yellow}40`, borderRadius: 10, padding: 16 }}>
            <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.8, margin: 0 }}>
              The more layers you add (LRT → Pendle → leverage → borrowing), the more risk compounds. Pendle YT prices can shock if the underlying LRT is slashed. Aave liquidations cascade during market stress. Start simple (just hold weETH), then add layers carefully.
            </p>
          </div>
        </section>

        {/* Section 9: Risks */}
        <section id="risks" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>Risks of Liquid Restaking</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 24 }}>
            LRTs offer attractive yields but carry risks that traditional staking doesn't. Understand them fully before deploying capital.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              {
                emoji: "⚡",
                title: "AVS Slashing Risk",
                desc: "If an AVS operator misbehaves, EigenLayer can slash your restaked capital (typically 1–10%). This is permanent and irreversible.",
              },
              {
                emoji: "🔗",
                title: "Smart Contract Risk",
                desc: "LRT protocols are new and complex. Bugs in EigenLayer, the LRT contract, or operator selection logic could lead to fund loss.",
              },
              {
                emoji: "💧",
                title: "Liquidity Risk",
                desc: "Your LRT token (weETH, rsETH) might have low liquidity during market crashes. You could face significant slippage when exiting.",
              },
              {
                emoji: "🌉",
                title: "Wrapper Risk",
                desc: "LRTs are wrappers on top of LSTs, which are wrappers on ETH. If one layer breaks, cascades down. E.g., if stETH depegs, weETH faces collateral issues.",
              },
              {
                emoji: "🎯",
                title: "Concentration Risk",
                desc: "Weighting your portfolio too heavily in one LRT exposes you to that protocol's specific risks. Diversify across weETH, rsETH, ezETH.",
              },
              {
                emoji: "🔄",
                title: "Pendle YT Shock Propagation",
                desc: "If you're using Pendle YT (yield tokens), a slashing event causes YT price to crash, triggering liquidations in leveraged positions.",
              },
              {
                emoji: "📉",
                title: "Regulatory Risk",
                desc: "If regulators deem restaking as securities-like activity or attack EigenLayer, LRT adoption could be limited.",
              },
              {
                emoji: "🏃",
                title: "Operator Run Risk",
                desc: "A large operator could selectively restake with bad AVS, concentrating slash risk. Good protocols diversify operators.",
              },
            ].map(r => (
              <div key={r.title} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16 }}>
                <div style={{ display: "flex", gap: 12, marginBottom: 8 }}>
                  <span style={{ fontSize: 24 }}>{r.emoji}</span>
                  <h3 style={{ fontSize: 15, fontWeight: 800, margin: 0 }}>{r.title}</h3>
                </div>
                <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.7, margin: 0, marginLeft: 36 }}>{r.desc}</p>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Risk Mitigation Strategies</h3>
          <ul style={{ paddingLeft: 20, color: S.text, lineHeight: 2, fontSize: 14, marginBottom: 20 }}>
            <li><strong>Diversify LRTs:</strong> Don't put all capital into weETH. Spread across weETH, rsETH, ezETH.</li>
            <li><strong>Monitor AVS Selection:</strong> Follow which AVS each protocol restakes with. Avoid those with poor security histories.</li>
            <li><strong>Keep a Plain weETH Position:</strong> Hold some weETH without leverage or complex strategies. This is your "boring, safe" position.</li>
            <li><strong>Size DeFi Strategies Conservatively:</strong> If you're doing Pendle YT or Aave leverage, start with 10–20% of your LRT position.</li>
            <li><strong>Track Smart Contract Audits:</strong> Check if LRT protocols have had third-party audits (OpenZeppelin, Trail of Bits, etc.).</li>
            <li><strong>Follow Governance Discussions:</strong> Join Discord/forums of Ether.fi, KernelDAO, Renzo to stay updated on governance decisions.</li>
          </ul>
        </section>

        {/* Section 10: How to Choose */}
        <section id="choose-lrt" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>How to Choose the Right LRT</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 24 }}>
            There's no single "best" LRT. Your choice depends on your risk tolerance, strategies, and beliefs about the ecosystem.
          </p>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Decision Framework</h3>

          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 20, marginBottom: 24 }}>
            <h4 style={{ fontSize: 14, fontWeight: 800, marginBottom: 12 }}>If you want maximum safety + simplicity:</h4>
            <p style={{ fontSize: 13, color: S.text, lineHeight: 1.8, marginBottom: 12 }}>
              <strong>Choose: weETH (Ether.fi)</strong>
            </p>
            <ul style={{ paddingLeft: 20, color: S.text2, lineHeight: 1.8, fontSize: 13, margin: 0 }}>
              <li>Largest TVL = most battle-tested</li>
              <li>Biggest liquidity on DEX</li>
              <li>Highest adoption in DeFi (Pendle, Aave, etc.)</li>
              <li>Simple "ETH → weETH" flow</li>
            </ul>
          </div>

          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 20, marginBottom: 24 }}>
            <h4 style={{ fontSize: 14, fontWeight: 800, marginBottom: 12 }}>If you want multi-chain exposure + ecosystem fund:</h4>
            <p style={{ fontSize: 13, color: S.text, lineHeight: 1.8, marginBottom: 12 }}>
              <strong>Choose: rsETH (KernelDAO)</strong>
            </p>
            <ul style={{ paddingLeft: 20, color: S.text2, lineHeight: 1.8, fontSize: 13, margin: 0 }}>
              <li>Deploy on Polygon, Arbitrum, etc.</li>
              <li>Benefit from $40M ecosystem fund</li>
              <li>Access to Kred when launched</li>
              <li>Believe in multi-chain narrative</li>
            </ul>
          </div>

          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 20, marginBottom: 24 }}>
            <h4 style={{ fontSize: 14, fontWeight: 800, marginBottom: 12 }}>If you're on a Layer 2 or want cross-chain tech:</h4>
            <p style={{ fontSize: 13, color: S.text, lineHeight: 1.8, marginBottom: 12 }}>
              <strong>Choose: ezETH (Renzo)</strong>
            </p>
            <ul style={{ paddingLeft: 20, color: S.text2, lineHeight: 1.8, fontSize: 13, margin: 0 }}>
              <li>Restake BNB or Polygon-native assets</li>
              <li>Avoid mainnet bridges</li>
              <li>Believe in decentralized AVS voting</li>
              <li>Want to support early cross-chain tech</li>
            </ul>
          </div>

          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 20, marginBottom: 24 }}>
            <h4 style={{ fontSize: 14, fontWeight: 800, marginBottom: 12 }}>If you want to hedge risk or diversify:</h4>
            <p style={{ fontSize: 13, color: S.text, lineHeight: 1.8, marginBottom: 12 }}>
              <strong>Choose: Split portfolio (40% weETH, 35% rsETH, 25% ezETH)</strong>
            </p>
            <ul style={{ paddingLeft: 20, color: S.text2, lineHeight: 1.8, fontSize: 13, margin: 0 }}>
              <li>Reduce single-protocol risk</li>
              <li>Benefit from multiple narratives</li>
              <li>If one LRT is slashed, others provide cushion</li>
              <li>Maximize learning opportunities</li>
            </ul>
          </div>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Allocation Strategy</h3>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Start small. Restaking is nascent. Even the "safest" LRT has unproven mechanics at scale.
          </p>

          <div style={{ background: `${S.yellow}15`, border: `1px solid ${S.yellow}40`, borderRadius: 10, padding: 16, marginBottom: 20 }}>
            <div style={{ fontWeight: 700, marginBottom: 12, color: S.text }}>Recommended Approach</div>
            <ol style={{ paddingLeft: 20, color: S.text, lineHeight: 2, fontSize: 13, margin: 0 }}>
              <li><strong>Month 1:</strong> Deposit 10% of your staking capital into weETH. Hold for 1 month, observe yields and protocol updates.</li>
              <li><strong>Month 2:</strong> If no issues, increase to 30%. Start 10% into rsETH. Keep simple (no DeFi leverage yet).</li>
              <li><strong>Month 3+:</strong> If still comfortable, reach 50% in LRTs. Begin simple DeFi strategies (Pendle YT, Aave lending).</li>
              <li><strong>Never 100%:</strong> Keep 20–30% in plain ETH or traditional staking (Lido, Rocket Pool) as a hedge.</li>
            </ol>
          </div>
        </section>

        {/* FAQ Section */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 24, paddingTop: 8 }}>Frequently Asked Questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {faqItems.map((faq, idx) => (
              <details key={idx} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16 }}>
                <summary style={{ cursor: "pointer", fontWeight: 800, fontSize: 14, color: S.accent, userSelect: "none" }}>
                  {faq.question}
                </summary>
                <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.8, marginTop: 12, marginBottom: 0 }}>
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Related Resources */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 24, paddingTop: 8 }}>Related Resources</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { href: "/learn/eigenlayer-restaking-guide", title: "EigenLayer Restaking Guide", desc: "Deep dive into EigenLayer protocol mechanics" },
              { href: "/tools/staking-apy", title: "Staking APY Calculator", desc: "Compare yields across staking protocols" },
              { href: "/learn/defi-yield-strategies-2026", title: "DeFi Yield Strategies 2026", desc: "Advanced yield farming tactics" },
              { href: "/learn/impermanent-loss", title: "Impermanent Loss Guide", desc: "Understand IL before LP in Uniswap" },
              { href: "/learn/advanced-defi-strategies", title: "Advanced DeFi Strategies", desc: "Leverage, flash loans, and more" },
              { href: "/ecosystem/eigenlayer", title: "EigenLayer Ecosystem", desc: "AVS, operators, and integrations" },
            ].map(link => (
              <Link href={href as string}
                key={link.href}
                style={{
                  background: S.surface,
                  border: `1px solid ${S.border}`,
                  borderRadius: 10,
                  padding: 16,
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
              >
                <div style={{ fontWeight: 800, fontSize: 14, color: S.accent, marginBottom: 4 }}>📖 {link.title}</div>
                <div style={{ fontSize: 12, color: S.text2, lineHeight: 1.6 }}>{link.desc}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div style={{ background: `linear-gradient(135deg, ${S.primary}15, ${S.primary}05)`, border: `1px solid ${S.primary}30`, borderRadius: 14, padding: 28, textAlign: "center" }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 12 }}>Ready to Start Restaking?</h2>
          <p style={{ fontSize: 14, color: S.text2, marginBottom: 20, lineHeight: 1.7 }}>
            Begin with weETH on Ether.fi, or explore rsETH on KernelDAO. Start small, monitor closely, and scale gradually.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://app.ether.fi" target="_blank" rel="noopener noreferrer" style={{ padding: "10px 22px", borderRadius: 10, background: `${S.primary}20`, border: `1px solid ${S.primary}40`, color: S.primary, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
              🌊 Ether.fi
            </a>
            <a href="https://kelpdao.xyz" target="_blank" rel="noopener noreferrer" style={{ padding: "10px 22px", borderRadius: 10, background: "#79c0ff20", border: "1px solid #79c0ff40", color: S.accent, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
              🔗 KernelDAO
            </a>
            <Link href="/learn" style={{ padding: "10px 22px", borderRadius: 10, background: "#3fb95020", border: "1px solid #3fb95040", color: S.green, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
              📚 More Guides
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div style={{ background: "#d2992215", border: "1px solid #d2992240", borderRadius: 10, padding: 14, marginTop: 32, fontSize: 12, color: S.yellow, lineHeight: 1.7 }}>
          ⚠️ <strong>Disclaimer:</strong> This guide is for educational purposes only. Liquid restaking is a nascent, high-risk strategy. Slashing, smart contract bugs, and operator misconduct can result in permanent capital loss. Cryptocurrency markets are volatile and unpredictable. Always conduct your own research (DYOR), never invest more than you can afford to lose, and consult a financial advisor if necessary. {SITE_NAME} is not responsible for investment losses, hacks, or slashing events. Past yields do not guarantee future returns.
        </div>
      
        
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: 24, background: '#161b22', border: '1px solid #30363d', borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: '#e6edf3' }}>Continue Reading</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
            <li><a href="/courses/blockchain-developer-course-free" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Blockchain Developer Course Free</a></li>
            <li><a href="/investing/best-ai-crypto-projects-2026" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Best Ai Crypto Projects 2026</a></li>
            <li><a href="/investing/best-gaming-crypto-tokens" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Best Gaming Crypto Tokens</a></li>
            <li><a href="/investing/best-restaking-tokens-2026" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Best Restaking Tokens 2026</a></li>
          </ul>
        </nav>

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
              "headline": "Liquid Restaking Tokens Compared 2026",
              "author": { "@type": "Organization", "name": "degen0x" },
              "publisher": { "@type": "Organization", "name": "degen0x", "url": "https://degen0x.com" },
              "datePublished": "2026-04-01",
              "dateModified": "2026-04-12",
              "mainEntityOfPage": "https://degen0x.com/learn/liquid-restaking-tokens-compared-2026"
            })
          }}
        />
      <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
  <span style={{ color: "#8b949e" }}>Related: </span>
  <a href="/learn/onchain-forex-stablecoin-diversity-guide-2026" style={{ color: "#fb923c", marginRight: "1rem" }}>Onchain Forex Stablecoin Diversity Guide 2026</a>
  <a href="/learn/starknet-stark-validity-rollups-guide-2026" style={{ color: "#fb923c", marginRight: "1rem" }}>Starknet Stark Validity Rollups Guide 2026</a>
  <a href="/learn/dao-governance-voting-guide-2026" style={{ color: "#fb923c", marginRight: "1rem" }}>Dao Governance Voting Guide 2026</a>

          <a href="/learn/defi-points-airdrop-farming-guide-2026" style={{ color: "#fb923c", marginRight: "1rem" }}>Defi Points Airdrop Farming Guide 2026</a>
        </nav>
      </article>

      <BackToTop />
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
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Liquid Restaking Tokens Compared 2026: weETH vs rsETH vs", "description": "Complete guide to Liquid Restaking Tokens (LRTs) comparing weETH (Ether.fi), rsETH (Kelp/KernelDAO), ezETH (Renzo), and others. Learn how LRTs work, TVL,", "url": "https://degen0x.com/learn/liquid-restaking-tokens-compared-2026", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
</main>
  );
}
