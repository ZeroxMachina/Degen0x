import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'veTokenomics & Vote-Escrowed Tokens Guide 2026 — DeFi Governance Explained | degen0x',
  description: 'Complete guide to veTokenomics (vote-escrowed tokens) in 2026. Learn how Curve, Balancer, Velodrome, and others use lock-based governance. Curve Wars, bribe markets, and why Pendle is moving beyond ve.',
  keywords: ['veTokenomics', 'vote-escrowed tokens', 'Curve Finance', 'Balancer', 'Velodrome', 'Aerodrome', 'Convex', 'Curve Wars', 'bribe markets', 'governance tokens', 'DeFi 2026'],
  openGraph: {
    type: 'article',
    title: 'veTokenomics & Vote-Escrowed Tokens Guide 2026 | degen0x',
    description: 'Lock tokens to earn governance power, trading fees, and governance bribes. Complete guide to veTokenomics, Curve Wars, and DeFi governance mechanisms in 2026.',
    publishedTime: '2026-04-03T00:00:00Z',
    modifiedTime: '2026-04-03T00:00:00Z',
    url: 'https://degen0x.com/learn/vetokenomics-vote-escrowed-tokens-defi-governance-guide-2026',
    images: [{
      url: 'https://degen0x.com/og-vetokenomics-vote-escrowed.svg',
      width: 1200,
      height: 630,
      alt: 'veTokenomics & Vote-Escrowed Tokens Guide 2026',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'veTokenomics & Vote-Escrowed Tokens Guide 2026 | degen0x',
    description: 'How vote-escrowed tokens revolutionized DeFi governance. Learn Curve, Balancer, Velodrome veTokenomics, Curve Wars, and bribing mechanics.',
  },
  alternates: {
    canonical: 'https://degen0x.com/learn/vetokenomics-vote-escrowed-tokens-defi-governance-guide-2026',
  },
};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Learn', item: 'https://degen0x.com/learn' },
    { '@type': 'ListItem', position: 3, name: 'veTokenomics & Vote-Escrowed Tokens Guide 2026' },
  ],
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'veTokenomics & Vote-Escrowed Tokens Guide 2026 — DeFi Governance Explained',
  description: 'Complete guide to veTokenomics (vote-escrowed tokens). Learn how protocols use lock-based governance, fee sharing, gauge voting, and bribe markets to align incentives.',
  image: 'https://degen0x.com/og-vetokenomics-vote-escrowed.svg',
  datePublished: '2026-04-03',
  dateModified: '2026-04-03',
  author: {
    '@type': 'Organization',
    name: 'degen0x',
  },
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the difference between a regular governance token and a veToken?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A regular governance token can be traded freely and often has minimal economic incentive to hold long-term. A veToken requires locking your base token for a fixed period (1 week to 4 years) to receive voting power, fee revenue, and other benefits. The longer you lock, the more voting power you get. This aligns incentives: long-term believers are rewarded with more governance influence and revenue share.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Curve Wars affect smaller protocols?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Curve Wars means protocols must fight for veCRV voting power to direct CRV emissions to their pools, ensuring competitive trading fees. Smaller protocols often lack the capital to compete directly, so they turn to Convex (controls ~50% of veCRV) or use bribe markets (Hidden Hand, Votium) to pay veCRV holders for votes. This creates a second-order market where governance power becomes the primary battleground.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is Pendle moving away from veTokenomics?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Only 20% of Pendle supply was locked in vePENDLE, indicating low adoption. Pendle is replacing vePENDLE with sPENDLE, which has a 14-day withdrawal window (not 4-year locks), algorithm-based emissions, and no capital inefficiency. This hybrid approach maintains governance while avoiding multi-year lock-in and capital waste. It signals that pure veTokenomics may not be the future.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are bribe markets and how do they work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bribe markets like Votium and Hidden Hand let protocols offer incentives (bribes) to veToken holders in exchange for voting their gauges. A protocol deposits tokens into a bribe pool, and veToken holders can claim rewards for voting. This creates a circular incentive: veToken holders earn extra yield, protocols get emissions they need, and bribe platforms take a cut.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is veTokenomics capital efficient?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Locking tokens for 4 years means that capital sits idle and cannot be used elsewhere, reducing yield opportunities. This is the main criticism of veTokenomics — it sacrifices capital efficiency for long-term alignment. Newer systems like Pendle\'s sPENDLE and hybrid models aim to balance lock-in incentives with operational flexibility.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can whale holders capture governance in veTokenomics?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. veTokenomics can suffer from governance capture if a single actor or protocol (like Convex) accumulates enough veTokens. Convex\'s control of 50% of veCRV is a prime example — they effectively have a veto over Curve governance despite being a third-party protocol. Smaller token holders have minimal influence.',
        },
      },
    ],
  },
};

const h1Style: React.CSSProperties = { fontSize: 36, fontWeight: 800, marginBottom: 16, background: 'linear-gradient(135deg, #6366f1, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1.2 };
const h2Style: React.CSSProperties = { fontSize: 24, fontWeight: 700, marginTop: 40, marginBottom: 16, color: '#a78bfa', borderBottom: '2px solid #2d2254', paddingBottom: 12 };
const badgeStyle: React.CSSProperties = { padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 600, marginRight: 8, marginBottom: 16, display: 'inline-block' };
const infoBoxStyle: React.CSSProperties = { background: '#161b22', border: '1px solid #30363d', borderRadius: 12, padding: 20, marginBottom: 24, lineHeight: 1.8 };


export default function VeTokenomicsGuide() {
  const tableOfContents = [
    { id: 'what-are-vetokens', title: 'What Are veTokens & veTokenomics?' },
    { id: 'how-vetokens-work', title: 'How Vote-Escrowed Tokens Work' },
    { id: 'curve-wars', title: 'The Curve Wars: A Case Study' },
    { id: 'major-protocols', title: 'Major veTokenomics Protocols in 2026' },
    { id: 'bribe-markets', title: 'Bribe Markets & Meta-Governance' },
    { id: 'pendle-pivot', title: 'The Pendle Pivot: Moving Beyond ve' },
    { id: 'benefits-risks', title: 'Benefits & Risks of veTokenomics' },
    { id: 'faq', title: 'FAQ' },
  ];

  const infoBoxStyle = {
    background: '#161b22',
    border: '1px solid #30363d', borderLeft: '3px solid #a78bfa', borderLeft: '3px solid #a78bfa',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    lineHeight: 1.8,
  };

  const h1Style = {
    fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
    fontWeight: 800,
    marginBottom: 16,
    background: 'linear-gradient(135deg, #4f46e5, #0891b2)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const h2Style = {
    fontSize: 'clamp(1.25rem, 3.5vw, 1.5rem)',
    fontWeight: 700,
    marginTop: 40,
    marginBottom: 16,
    color: '#a78bfa', borderBottom: '2px solid #2d2254', paddingBottom: 12,
  };

  const badgeStyle = {
    display: 'inline-block',
    padding: '8px 14px',
    borderRadius: 6,
    fontSize: 12,
    fontWeight: 600,
    marginRight: 8,
    marginBottom: 16,
  };

  const linkStyle = {
    color: '#58a6ff',
    textDecoration: 'none',
    padding: '2px 0',
  };

  const tocLinkStyle = {
    color: '#58a6ff',
    textDecoration: 'none',
    display: 'inline-block',
    padding: '6px 0',
    minHeight: 44,
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse' as const,
    marginBottom: 24,
    fontSize: 14,
  };

  const thStyle = {
    background: '#0d1117',
    border: '1px solid #30363d',
    padding: 12,
    textAlign: 'left' as const,
    fontWeight: 700,
    color: '#e6edf3',
  };

  const tdStyle = {
    border: '1px solid #30363d',
    padding: 12,
    color: '#8b949e',
  };

  const codeStyle = {
    background: '#0d1117',
    border: '1px solid #30363d',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    overflowX: 'auto' as const,
    fontSize: 13,
    lineHeight: 1.5,
    color: '#79c0ff',
    fontFamily: 'monospace',
  };

  return (
    <article id="top" style={{ background: '#0d1117', color: '#e6edf3', minHeight: '100vh', padding: '40px 20px', scrollBehavior: 'smooth' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <style dangerouslySetInnerHTML={{ __html: `details[open] > summary span.faq-icon { transform: rotate(45deg); }` }} />

      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" style={{ marginBottom: 20, fontSize: 13, color: '#8b949e' }}>
          <Link href="/" style={{ color: '#8b949e', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <Link href="/learn" style={{ color: '#8b949e', textDecoration: 'none' }}>Learn</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <span style={{ color: '#c9d1d9' }}>veTokenomics &amp; Vote-Escrowed Tokens Guide</span>
        </nav>

        {/* Header Section */}
        <div style={{ marginBottom: 32 }}>
          <div>
            <span style={{ ...badgeStyle, background: '#4338ca', color: '#e6edf3' }}>DeFi</span>
            <span style={{ ...badgeStyle, background: '#1f6feb', color: '#e6edf3' }}>Intermediate</span>
          </div>

          <h1 style={h1Style}>veTokenomics &amp; Vote-Escrowed Tokens Guide 2026</h1>

          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 20 }}>
            Vote-escrowed tokens revolutionized DeFi governance by tying voting power to long-term commitment. Instead of 1 token = 1 vote, protocols like Curve created veCRV: lock CRV for up to 4 years, earn governance power and 50% of trading fees. This simple mechanism sparked the "Curve Wars" — a multi-billion dollar competitive arms race for governance control. This guide explains how veTokenomics work, why they matter, the economics of bribe markets, and why some protocols are moving beyond the ve model entirely.
          </p>

          <div style={{ display: 'flex', gap: 24, fontSize: 14, color: '#8b949e', marginBottom: 24 }}>
            <span>Updated: April 2026</span>
            <span>Reading time: 12 min</span>
          </div>
        </div>

        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-04-03"
          updatedDate="2026-04-03"
          readingTime={12}
          section="learn"
        />


        {/* Table of Contents */}
        <nav aria-label="Table of Contents" style={{ ...infoBoxStyle, marginBottom: 32 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, color: '#e6edf3' }}>Table of Contents</h3>
          <ol style={{ margin: 0, paddingLeft: 20, lineHeight: 2.4, color: '#8b949e', fontSize: 14 }}>
            {tableOfContents.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} style={tocLinkStyle}>{item.title}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* ── Section 1: What Are veTokens ── */}
        <section id="what-are-vetokens" style={{ marginBottom: 40 }}>
          <h2 style={h2Style}>1. What Are veTokens &amp; veTokenomics?</h2>

          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            veTokenomics is a governance model where token holders lock their tokens for a fixed period to receive voting power and economic incentives. The mechanism was pioneered by Curve Finance in September 2020 with veCRV (vote-escrowed CRV). Instead of simply voting with coins they hold, users commit capital for 1 week to 4 years, receiving voting power proportional to both the amount locked and the lock duration.
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

          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            The elegance of veTokenomics is its alignment mechanism: users who believe in a protocol lock tokens and gain decision-making power. This creates a long-term alignment — lock holders benefit directly from protocol success. Additionally, many ve protocols share protocol revenue with veToken holders, creating real yield incentives beyond governance influence.
          </p>

          <div style={infoBoxStyle}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#4f46e5', marginBottom: 10 }}>Key Concept: Voting Power Decay</h3>
            <div style={{ color: '#c9d1d9', fontSize: 14 }}>
              <p style={{ marginBottom: 8 }}>Lock 1,000 CRV for 4 years → 1,000 veCRV voting power</p>
              <p style={{ marginBottom: 8 }}>Lock 1,000 CRV for 2 years → 500 veCRV voting power</p>
              <p style={{ marginBottom: 0 }}>As your lock nears expiration, your voting power decays linearly to zero. This incentivizes longer locks while ensuring older locks eventually expire.</p>
            </div>
          </div>

          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            The core innovation isn&apos;t just governance — it&apos;s economic incentive alignment. veCRV holders receive 50% of all Curve trading fees. This means long-term token holders who help steer the protocol actually profit from its success. For comparison, traditional governance tokens offer voting rights but no revenue share.
          </p>
        </section>

        {/* ── Section 2: How Vote-Escrowed Tokens Work ── */}
        <section id="how-vetokens-work" style={{ marginBottom: 40 }}>
          <h2 style={h2Style}>2. How Vote-Escrowed Tokens Work</h2>

          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            The mechanics of veTokenomics involve several layers: locking, voting power calculation, gauge voting, and fee distribution. Understanding each layer helps you grasp the economic incentives at play.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3', marginTop: 24, marginBottom: 12 }}>Locking Mechanism</h3>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            You deposit your base token (e.g., CRV) into a locking contract, choosing a lock duration from 1 week to 4 years. The contract locks your tokens and mints an equivalent amount of veTokens based on your lock duration. Longer locks receive more voting power per token. Your veToken balance decays linearly as the lock approaches expiration — on the expiration date, your veBalance reaches zero and you can withdraw your original tokens.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3', marginTop: 24, marginBottom: 12 }}>Gauge Voting</h3>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Once locked, you control veTokens that can vote on "gauges" — specific liquidity pools that receive CRV emissions. For example, Curve has gauges for the USDC/USDT pool, the USDC/DAI pool, etc. By voting for a gauge, you direct CRV inflation toward that pool. Pools receiving more votes get more CRV rewards, making gauge voting economically valuable: if you vote a pool&apos;s gauge, liquidity providers in that pool earn more CRV, potentially making you or your protocol richer.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3', marginTop: 24, marginBottom: 12 }}>Fee Revenue Distribution</h3>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Curve pools generate trading fees. In the original model, 50% of all Curve platform fees go to veCRV holders proportional to their voting power. This creates a real yield incentive — the longer you lock and the more reliably you vote, the more fee revenue you pocket. It&apos;s a revenue share model, not just governance.
          </p>

          <div style={infoBoxStyle}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#4f46e5', marginBottom: 10 }}>Example: A Simplified veTokenomics Flow</h3>
            <div style={{ color: '#c9d1d9', fontSize: 14 }}>
              <p style={{ marginBottom: 8 }}>1. Alice locks 10,000 CRV for 4 years → receives 10,000 veCRV</p>
              <p style={{ marginBottom: 8 }}>2. Alice votes 10,000 veCRV for the USDC/DAI gauge</p>
              <p style={{ marginBottom: 8 }}>3. USDC/DAI pool receives additional CRV emissions from Curve</p>
              <p style={{ marginBottom: 8 }}>4. USDC/DAI generates $1M in trading fees → $500k goes to Curve&apos;s treasury, $500k to veToken holders</p>
              <p style={{ marginBottom: 0 }}>5. Alice earns her proportional share of that $500k based on her veCRV% of total veCRV</p>
            </div>
          </div>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3', marginTop: 24, marginBottom: 12 }}>Lock Duration &amp; Voting Power Math</h3>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            The voting power formula is: <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 4, color: '#79c0ff' }}>voting_power = tokens_locked × (weeks_remaining / max_weeks)</code>
          </p>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            If you lock 1,000 tokens for 208 weeks (4 years), you get 1,000 voting power. As time passes and 52 weeks remain (1 year left), your voting power drops to 250. This linear decay encourages fresh locks to maintain voting power.
          </p>
        </section>

        {/* ── Section 3: Curve Wars Case Study ── */}
        <section id="curve-wars" style={{ marginBottom: 40 }}>
          <h2 style={h2Style}>3. The Curve Wars: A Case Study</h2>

          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            The Curve Wars illustrate how veTokenomics create competitive dynamics at scale. Curve&apos;s dominance in stablecoin liquidity meant controlling veCRV was hugely valuable — whoever directed emissions could capture trading volume and LP fees.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3', marginTop: 24, marginBottom: 12 }}>The Economics of Gauge Control</h3>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            A stablecoin protocol like Frax benefits enormously if its FRAX/USDC pool receives high CRV emissions on Curve — LPs earn more, making the pool attractive, increasing trading volume, and generating profit for Frax. If Frax could control enough veCRV to vote its gauge consistently, it would gain a permanent advantage. This is the core of the Curve Wars: protocols compete for veCRV control to direct emissions toward their own pools.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3', marginTop: 24, marginBottom: 12 }}>Convex Finance: Meta-Governance Layer</h3>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            In 2021, Convex Finance launched as a "CRV staking wrapper." Users deposit veCRV (or CRV to be locked) into Convex, receiving cveCRV and earning extra incentives. Convex aggregated voting power and began coordinating gauge votes to optimize returns for its users. Today, Convex controls approximately 50% of all veCRV — more than any other entity. This makes Convex a meta-governance layer: while Curve maintains tokenomics, Convex effectively controls which pools receive emissions.
          </p>

          <div style={infoBoxStyle}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#4f46e5', marginBottom: 10 }}>Governance Capture Risk</h3>
            <div style={{ color: '#c9d1d9', fontSize: 14 }}>
              <p style={{ marginBottom: 0 }}>Convex&apos;s 50% veCRV control highlights a veTokenomics vulnerability: governance can be captured by a single protocol. If Convex votes a certain way, it determines outcomes regardless of smaller veCRV holders&apos; preferences. This isn\&apos;t necessarily malicious — Convex\&apos;s incentives align with Curve\&apos;s success — but it\&apos;s a concentration of power.</p>
            </div>
          </div>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3', marginTop: 24, marginBottom: 12 }}>The Multi-Year Battle</h3>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            From 2021-2026, stablecoin protocols, DeFi platforms, and even VCs competed fiercely for veCRV. Protocols invested millions to accumulate CRV, lock it, and control emissions. Some raised venture funding specifically to acquire veCRV. The Curve Wars demonstrate that veTokenomics create a secondary market for governance power — the governance token becomes the asset being fought over, with billions in value at stake.
          </p>
        </section>

        {/* ── Section 4: Major Protocols in 2026 ── */}
        <section id="major-protocols" style={{ marginBottom: 40 }}>
          <h2 style={h2Style}>4. Major veTokenomics Protocols in 2026</h2>

          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            By 2026, veTokenomics became a dominant governance model across DeFi. Here are the major protocols actively using ve models:
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3', marginTop: 24, marginBottom: 12 }}>Curve Finance (veCRV) — The Pioneer</h3>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Curve remains the gold standard. veCRV holders receive 50% of all platform fees, gauge voting controls CRV emissions, and the model proved durable across market cycles. Curve maintains its position as the dominant stablecoin DEX.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3', marginTop: 24, marginBottom: 12 }}>Balancer (veBAL) — Multi-Chain ve</h3>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Balancer launched veBAL in March 2022, allowing users to lock BAL tokens across chains. veBAL holders vote on gauge incentive distributions and receive 75% of protocol fees. Balancer expanded veTokenomics beyond Ethereum with Arbitrum, Polygon, and Base integration.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3', marginTop: 24, marginBottom: 12 }}>Velodrome &amp; Aerodrome — Optimism &amp; Base L2s</h3>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Velodrome brought veTokenomics to Optimism; Aerodrome ported the model to Base. Both use veTOKEN-based governance with 100% fee revenue to veToken holders. In a significant 2026 development, Velodrome and Aerodrome announced a merger into a unified "Aero" protocol with MetaDEX03, consolidating L2 DEX liquidity under one ve umbrella.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3', marginTop: 24, marginBottom: 12 }}>Frax (veFXS) — Stablecoin Governance</h3>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Frax Protocol uses veFXS to govern its fractional-reserve stablecoin. veFXS holders direct emissions and earn protocol revenue. Frax\&apos;s ve model is tightly integrated with its stablecoin mechanics, making governance directly tied to stablecoin stability.
          </p>

          <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', marginBottom: 24 }}>
            <table style={tableStyle} aria-label="veTokenomics Protocols Comparison">
              <thead>
                <tr>
                  <th style={thStyle} scope="col">Protocol</th>
                  <th style={thStyle} scope="col">Token</th>
                  <th style={thStyle} scope="col">Max Lock</th>
                  <th style={thStyle} scope="col">Fee Share</th>
                  <th style={thStyle} scope="col">Launch</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tdStyle}>Curve Finance</td>
                  <td style={tdStyle}>CRV → veCRV</td>
                  <td style={tdStyle}>4 years</td>
                  <td style={tdStyle}>50%</td>
                  <td style={tdStyle}>Sept 2020</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Balancer</td>
                  <td style={tdStyle}>BAL → veBAL</td>
                  <td style={tdStyle}>1 year</td>
                  <td style={tdStyle}>75%</td>
                  <td style={tdStyle}>Mar 2022</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Velodrome</td>
                  <td style={tdStyle}>VELO → veVELO</td>
                  <td style={tdStyle}>4 years</td>
                  <td style={tdStyle}>100%</td>
                  <td style={tdStyle}>2022</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Aerodrome</td>
                  <td style={tdStyle}>AERO → veAERO</td>
                  <td style={tdStyle}>4 years</td>
                  <td style={tdStyle}>100%</td>
                  <td style={tdStyle}>2023</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Frax</td>
                  <td style={tdStyle}>FXS → veFXS</td>
                  <td style={tdStyle}>4 years</td>
                  <td style={tdStyle}>Varies</td>
                  <td style={tdStyle}>2021</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Section 5: Bribe Markets ── */}
        <section id="bribe-markets" style={{ marginBottom: 40 }}>
          <h2 style={h2Style}>5. Bribe Markets &amp; Meta-Governance</h2>

          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            As veTokenomics matured, a secondary market emerged: bribe markets. Protocols that wanted emissions but lacked enough veCRV to influence gauges began paying veToken holders to vote for them. Platforms like Votium and Hidden Hand centralized these payments, creating a transparent bribe exchange.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3', marginTop: 24, marginBottom: 12 }}>How Bribe Markets Work</h3>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            1. Protocol A wants CRV emissions for its pool but controls minimal veCRV.
          </p>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            2. Protocol A deposits a bribe (e.g., 10,000 USDC) into Votium, specifying "for gauge X."
          </p>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            3. veToken holders see the bribe and can claim rewards by voting gauge X.
          </p>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            4. Votium takes a 2-4% cut and distributes the remaining bribe to voters.
          </p>

          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            This creates economic incentives: a veToken holder can earn governance fees + bribes. If Protocol A bids higher than Protocol B, voters have incentive to switch votes. This transforms gauge voting into a real-time auction market where governance influence goes to the highest bidder.
          </p>

          <div style={infoBoxStyle}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#4f46e5', marginBottom: 10 }}>Key Platforms (2026)</h3>
            <div style={{ color: '#c9d1d9', fontSize: 14 }}>
              <p style={{ marginBottom: 8 }}><strong>Votium:</strong> Curve bribe aggregator; distributes Convex vlCVX rewards and third-party bribes</p>
              <p style={{ marginBottom: 0 }}><strong>Hidden Hand:</strong> Multi-protocol bribe platform supporting Balancer, Aura, and others</p>
            </div>
          </div>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3', marginTop: 24, marginBottom: 12 }}>The Economics of Bribes</h3>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Bribes only make economic sense if the expected return from emissions exceeds the bribe cost. If Protocol A bids $50k to get emissions directing $200k annual CRV rewards to its pool, the ROI is positive. But if multiple protocols compete, bribe prices inflate, potentially making acquisitions uneconomical. This is the Curve Wars in miniature: competition for governance drives up the cost of governance.
          </p>
        </section>

        {/* ── Section 6: The Pendle Pivot ── */}
        <section id="pendle-pivot" style={{ marginBottom: 40 }}>
          <h2 style={h2Style}>6. The Pendle Pivot: Moving Beyond ve</h2>

          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            In 2026, Pendle Protocol made a striking move: abandoning its vePENDLE model entirely. This signals that veTokenomics, while innovative, may not be optimal long-term.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3', marginTop: 24, marginBottom: 12 }}>Why Pendle is Moving Away from ve</h3>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Only 20% of Pendle\&apos;s total supply was ever locked in vePENDLE. This indicated low user adoption — the vast majority of PENDLE holders preferred liquidity over governance. Pendle concluded that forcing multi-year locks on 80% of holders was counterproductive. Additionally, long-term locks reduce capital efficiency: locked tokens can\&apos;t be deployed in yield strategies, farming pools, or other higher-return opportunities.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3', marginTop: 24, marginBottom: 12 }}>The sPENDLE Alternative</h3>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Pendle is replacing vePENDLE with sPENDLE (staked PENDLE), featuring:
          </p>

          <div style={infoBoxStyle}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#4f46e5', marginBottom: 10 }}>sPENDLE Design</h3>
            <div style={{ color: '#c9d1d9', fontSize: 14 }}>
              <p style={{ marginBottom: 8 }}><strong>14-day Withdrawal Window:</strong> No 4-year locks. Flexible exit with 14-day notice.</p>
              <p style={{ marginBottom: 8 }}><strong>Algorithm-Based Emissions:</strong> Emissions determined by protocol parameters, not governance votes.</p>
              <p style={{ marginBottom: 8 }}><strong>30% Emission Reduction:</strong> More sustainable tokenomics, less inflation.</p>
              <p style={{ marginBottom: 0 }}><strong>Governance Rights:</strong> Still participates in governance, just without capital inefficiency.</p>
            </div>
          </div>

          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            This is a "hybrid" approach: retaining governance incentives while eliminating multi-year lock-in. Stakers earn fees and governance rights, but can exit if better yield opportunities emerge elsewhere. It\&apos;s a signal that pure veTokenomics may over-index on long-term commitment at the expense of user flexibility.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3', marginTop: 24, marginBottom: 12 }}>Implications for DeFi</h3>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Pendle\&apos;s pivot suggests that the next generation of governance may combine shorter lock periods, higher flexibility, and algorithm-driven emissions. Protocols may adopt hybrid systems offering governance participation without mandating 4-year capital locks. This could increase governance token adoption while reducing capital inefficiency.
          </p>
        </section>

        {/* ── Section 7: Benefits & Risks ── */}
        <section id="benefits-risks" style={{ marginBottom: 40 }}>
          <h2 style={h2Style}>7. Benefits &amp; Risks of veTokenomics</h2>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3', marginTop: 24, marginBottom: 12 }}>Benefits of veTokenomics</h3>

          <h4 style={{ fontSize: 16, fontWeight: 600, color: '#c9d1d9', marginTop: 16, marginBottom: 10 }}>Long-Term Alignment</h4>
          <p style={{ color: '#8b949e', fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>
            Locking tokens for years aligns incentives: users benefit when the protocol thrives. This reduces short-term token dumps and creates stakeholders invested in protocol success.
          </p>

          <h4 style={{ fontSize: 16, fontWeight: 600, color: '#c9d1d9', marginTop: 16, marginBottom: 10 }}>Revenue Sharing</h4>
          <p style={{ color: '#8b949e', fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>
            veCRV holders earn 50% of fees. This creates real yield incentives beyond governance and reduces the "governance token is only useful for voting" perception. Users earn passive income for locking, not just governance rights.
          </p>

          <h4 style={{ fontSize: 16, fontWeight: 600, color: '#c9d1d9', marginTop: 16, marginBottom: 10 }}>Reduced Sell Pressure</h4>
          <p style={{ color: '#8b949e', fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>
            Locked tokens can\&apos;t be sold, reducing selling pressure on governance token prices. This can help maintain token value and prevent death spirals common in governance tokens.
          </p>

          <h4 style={{ fontSize: 16, fontWeight: 600, color: '#c9d1d9', marginTop: 16, marginBottom: 10 }}>Quantifiable Governance Power</h4>
          <p style={{ color: '#8b949e', fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>
            Voting power is transparent and deterministic. Users know exactly how much influence they have based on lock duration and amount. No hidden voting power calculations.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3', marginTop: 24, marginBottom: 12 }}>Risks &amp; Challenges</h3>

          <h4 style={{ fontSize: 16, fontWeight: 600, color: '#c9d1d9', marginTop: 16, marginBottom: 10 }}>Capital Inefficiency</h4>
          <p style={{ color: '#8b949e', fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>
            Locked tokens can\&apos;t be deployed in yield strategies, liquidity pools, or other income opportunities. A user locking 1,000 CRV for 4 years foregoes potential farming yields. This opportunity cost reduces participation, especially for sophisticated traders who prefer flexible capital.
          </p>

          <h4 style={{ fontSize: 16, fontWeight: 600, color: '#c9d1d9', marginTop: 16, marginBottom: 10 }}>Governance Capture</h4>
          <p style={{ color: '#8b949e', fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>
            Protocols with deep treasuries can accumulate enormous veCRV and effectively control governance (see: Convex\&apos;s 50% veCRV control). This centralizes power despite decentralized intentions.
          </p>

          <h4 style={{ fontSize: 16, fontWeight: 600, color: '#c9d1d9', marginTop: 16, marginBottom: 10 }}>Complexity &amp; UX Friction</h4>
          <p style={{ color: '#8b949e', fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>
            Understanding voting power decay, gauge voting, and fee distribution is complex. Retail users often delegate to platforms like Convex, reducing their own governance participation and increasing centralization.
          </p>

          <h4 style={{ fontSize: 16, fontWeight: 600, color: '#c9d1d9', marginTop: 16, marginBottom: 10 }}>Whale Dominance</h4>
          <p style={{ color: '#8b949e', fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>
            Large holders control large voting power. A protocol or fund with 10M veCRV can outvote millions of retail holders with 1,000 veCRV each. This can lead to winner-take-most dynamics where whales&apos; interests override small holders.
          </p>

          <h4 style={{ fontSize: 16, fontWeight: 600, color: '#c9d1d9', marginTop: 16, marginBottom: 10 }}>Bribing Spirals</h4>
          <p style={{ color: '#8b949e', fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>
            As bribe markets mature, protocols spend more on bribes, inflating acquisition costs. Eventually, bribe ROI can become negative, and protocols stop bidding, causing gauge revenue to plummet. This creates volatility in emissions and pool incentives.
          </p>
        </section>

        {/* ── Section 8: FAQ ── */}
        <section id="faq" style={{ marginBottom: 40 }}>
          <h2 style={h2Style}>8. Frequently Asked Questions</h2>

          <details style={{ marginBottom: 16, cursor: 'pointer' }}>
            <summary style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 8, padding: 16, fontSize: 15, fontWeight: 600, color: '#e6edf3', display: 'flex', justifyContent: 'space-between', alignItems: 'center', minHeight: 44 }}>
              What is the difference between a regular governance token and a veToken?
              <span className="faq-icon" style={{ marginLeft: 8, transition: 'transform 0.3s', display: 'inline-block' }}>+</span>
            </summary>
            <div style={{ background: '#161b22', border: '1px solid #30363d', borderTop: 'none', borderRadius: '0 0 8px 8px', padding: 16, color: '#c9d1d9', fontSize: 14, lineHeight: 1.8 }}>
              <p>
                A regular governance token (e.g., UNI) can be traded freely and offers voting rights. A veToken requires locking your base token for a fixed period (1 week to 4 years) to receive voting power, fee revenue, and other incentives. The longer you lock, the more voting power you get — this aligns long-term holders with protocol success.
              </p>
            </div>
          </details>

          <details style={{ marginBottom: 16, cursor: 'pointer' }}>
            <summary style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 8, padding: 16, fontSize: 15, fontWeight: 600, color: '#e6edf3', display: 'flex', justifyContent: 'space-between', alignItems: 'center', minHeight: 44 }}>
              How does Curve Wars affect smaller protocols?
              <span className="faq-icon" style={{ marginLeft: 8, transition: 'transform 0.3s', display: 'inline-block' }}>+</span>
            </summary>
            <div style={{ background: '#161b22', border: '1px solid #30363d', borderTop: 'none', borderRadius: '0 0 8px 8px', padding: 16, color: '#c9d1d9', fontSize: 14, lineHeight: 1.8 }}>
              <p>
                Smaller protocols lack capital to compete directly for veCRV, so they resort to bribing. Votium and Hidden Hand let smaller protocols pay for voting support. This creates a second-order market where governance power becomes the primary battleground, and smaller players pay for influence they can&apos;t accumulate themselves.
              </p>
            </div>
          </details>

          <details style={{ marginBottom: 16, cursor: 'pointer' }}>
            <summary style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 8, padding: 16, fontSize: 15, fontWeight: 600, color: '#e6edf3', display: 'flex', justifyContent: 'space-between', alignItems: 'center', minHeight: 44 }}>
              Why is Pendle moving away from veTokenomics?
              <span className="faq-icon" style={{ marginLeft: 8, transition: 'transform 0.3s', display: 'inline-block' }}>+</span>
            </summary>
            <div style={{ background: '#161b22', border: '1px solid #30363d', borderTop: 'none', borderRadius: '0 0 8px 8px', padding: 16, color: '#c9d1d9', fontSize: 14, lineHeight: 1.8 }}>
              <p>
                Only 20% of Pendle supply locked in vePENDLE, indicating low adoption. Pendle prioritizes capital efficiency: sPENDLE has 14-day withdrawal windows (not 4-year locks) and algorithm-based emissions, avoiding multi-year lock-in. This hybrid approach maintains governance while reducing capital inefficiency.
              </p>
            </div>
          </details>

          <details style={{ marginBottom: 16, cursor: 'pointer' }}>
            <summary style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 8, padding: 16, fontSize: 15, fontWeight: 600, color: '#e6edf3', display: 'flex', justifyContent: 'space-between', alignItems: 'center', minHeight: 44 }}>
              What are bribe markets and how do they work?
              <span className="faq-icon" style={{ marginLeft: 8, transition: 'transform 0.3s', display: 'inline-block' }}>+</span>
            </summary>
            <div style={{ background: '#161b22', border: '1px solid #30363d', borderTop: 'none', borderRadius: '0 0 8px 8px', padding: 16, color: '#c9d1d9', fontSize: 14, lineHeight: 1.8 }}>
              <p>
                Bribe markets (Votium, Hidden Hand) let protocols offer incentives to veToken holders in exchange for voting their gauges. A protocol deposits tokens as a bribe, veToken holders vote and claim rewards. This creates a transparent auction market where governance influence goes to the highest bidder, supplementing base protocol fees.
              </p>
            </div>
          </details>

          <details style={{ marginBottom: 16, cursor: 'pointer' }}>
            <summary style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 8, padding: 16, fontSize: 15, fontWeight: 600, color: '#e6edf3', display: 'flex', justifyContent: 'space-between', alignItems: 'center', minHeight: 44 }}>
              Is veTokenomics capital efficient?
              <span className="faq-icon" style={{ marginLeft: 8, transition: 'transform 0.3s', display: 'inline-block' }}>+</span>
            </summary>
            <div style={{ background: '#161b22', border: '1px solid #30363d', borderTop: 'none', borderRadius: '0 0 8px 8px', padding: 16, color: '#c9d1d9', fontSize: 14, lineHeight: 1.8 }}>
              <p>
                No. Locking tokens for 4 years removes capital from circulation, preventing deployment in yield strategies or other opportunities. This is veTokenomics&apos; biggest weakness. Newer systems like sPENDLE aim to balance long-term alignment with capital flexibility through shorter lock windows.
              </p>
            </div>
          </details>

          <details style={{ marginBottom: 16, cursor: 'pointer' }}>
            <summary style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 8, padding: 16, fontSize: 15, fontWeight: 600, color: '#e6edf3', display: 'flex', justifyContent: 'space-between', alignItems: 'center', minHeight: 44 }}>
              Can whale holders capture governance in veTokenomics?
              <span className="faq-icon" style={{ marginLeft: 8, transition: 'transform 0.3s', display: 'inline-block' }}>+</span>
            </summary>
            <div style={{ background: '#161b22', border: '1px solid #30363d', borderTop: 'none', borderRadius: '0 0 8px 8px', padding: 16, color: '#c9d1d9', fontSize: 14, lineHeight: 1.8 }}>
              <p>
                Yes. Convex controls 50% of all veCRV, effectively determining Curve governance. Deep-pocketed protocols and VCs can accumulate large veToken positions, leading to governance capture. veTokenomics is vulnerable to whale dominance, which can undermine decentralization goals.
              </p>
            </div>
          </details>
        </section>

        {/* ── Related Guides ── */}
        <section style={{ marginBottom: 40, marginTop: 60, paddingTop: 40, borderTop: '1px solid #30363d' }}>
          <h2 style={h2Style}>Related Guides</h2>
          <div style={{ display: 'grid', gap: 16, marginTop: 24 }}>
            <Link href="/learn/yield-farming-defi-strategies-guide-2026" style={{ ...infoBoxStyle, marginBottom: 0, textDecoration: 'none' }}>
              <div style={{ color: '#58a6ff', fontWeight: 600, marginBottom: 8 }}>Yield Farming &amp; DeFi Strategies Guide 2026</div>
              <p style={{ color: '#8b949e', fontSize: 14, margin: 0 }}>Understand LP strategies, yield optimization, and impermanent loss in the context of governance emissions.</p>
            </Link>
            <Link href="/learn/dao-governance-onchain-voting-guide-2026" style={{ ...infoBoxStyle, marginBottom: 0, textDecoration: 'none' }}>
              <div style={{ color: '#58a6ff', fontWeight: 600, marginBottom: 8 }}>DAO Governance &amp; On-Chain Voting Guide 2026</div>
              <p style={{ color: '#8b949e', fontSize: 14, margin: 0 }}>Explore broader governance mechanisms, voting systems, and DAO structures beyond veTokenomics.</p>
            </Link>
            <Link href="/learn/tokenomics-crypto-token-economics-guide-2026" style={{ ...infoBoxStyle, marginBottom: 0, textDecoration: 'none' }}>
              <div style={{ color: '#58a6ff', fontWeight: 600, marginBottom: 8 }}>Tokenomics &amp; Crypto Token Economics Guide 2026</div>
              <p style={{ color: '#8b949e', fontSize: 14, margin: 0 }}>Learn the fundamentals of token design, emissions, and economic incentives underlying all DeFi protocols.</p>
            </Link>
            <Link href="/learn/concentrated-liquidity-lp-strategies-guide-2026" style={{ ...infoBoxStyle, marginBottom: 0, textDecoration: 'none' }}>
              <div style={{ color: '#58a6ff', fontWeight: 600, marginBottom: 8 }}>Concentrated Liquidity &amp; LP Strategies Guide 2026</div>
              <p style={{ color: '#8b949e', fontSize: 14, margin: 0 }}>Understand Uniswap v3 and concentrated liquidity pools that benefit from gauge voting and emissions.</p>
            </Link>
            <Link href="/learn/real-yield-defi-protocol-revenue-guide-2026" style={{ ...infoBoxStyle, marginBottom: 0, textDecoration: 'none' }}>
              <div style={{ color: '#58a6ff', fontWeight: 600, marginBottom: 8 }}>Real Yield &amp; DeFi Protocol Revenue Guide 2026</div>
              <p style={{ color: '#8b949e', fontSize: 14, margin: 0 }}>Dive into fee distribution, protocol revenue sharing, and earning strategies from DeFi fees like veCRV holders do.</p>
            </Link>
          </div>
        </section>

        {/* ── Financial Disclaimer ── */}
        <div style={{ ...infoBoxStyle, background: '#16213e', border: '1px solid #30363d', marginBottom: 40 }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: '#e6edf3', marginBottom: 10 }}>Financial Disclaimer</h3>
          <p style={{ color: '#8b949e', fontSize: 13, lineHeight: 1.8, margin: 0 }}>
            This guide is educational content only and does not constitute financial advice, investment advice, or a recommendation to buy or sell tokens. DeFi and governance tokens carry significant risk: principal loss, impermanent loss, smart contract bugs, governance attacks, and market volatility. Before locking tokens or participating in governance, conduct thorough research, understand the risks, and only invest capital you can afford to lose. Past performance does not guarantee future results.
          </p>
        </div>

        {/* ── Back to Top ── */}
        <div style={{ textAlign: 'center', marginTop: 40, paddingTop: 20, borderTop: '1px solid #30363d' }}>
          <Link href="#top" style={{ ...linkStyle, fontSize: 14 }}>← Back to Top</Link>
        </div>
      </div>
    
        {/* section-footer */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 8, padding: '16px 20px', marginTop: 40, marginBottom: 20 }}>
          <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: '#a78bfa' }}>Educational disclaimer:</strong> This guide is for informational purposes only and does not constitute financial advice.
            Crypto involves significant risk — do your own research before making any decisions. Learn more about <a href="/about" style={{ color: '#a78bfa' }}>our team</a>.
          </p>
        </div>
      
        {/* section-footer */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 8, padding: '16px 20px', marginTop: 40, marginBottom: 20 }}>
          <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: '#a78bfa' }}>Educational disclaimer:</strong> This guide is for informational purposes only and does not constitute financial advice.
            Crypto involves significant risk — do your own research before making any decisions. Learn more about <a href="/about" style={{ color: '#a78bfa' }}>our team</a>.
          </p>
        </div>
      </article>
  );
}
