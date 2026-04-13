import { Metadata } from 'next';
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Link from 'next/link';
import BackToTop from "@/components/BackToTop";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Sanctum Guide 2026 — Solana Liquid Staking, Infinity Pool &",
  description: "Complete guide to Sanctum, the universal liquid staking layer on Solana. Learn how the Infinity pool unifies LST liquidity, how Sanctum LSTs work, and what",
  keywords: [
    'Sanctum',
    'Sanctum Infinity',
    'CLOUD token',
    'Solana liquid staking',
    'Solana LST',
    'INF token',
    'LST aggregator',
    'JitoSOL',
    'mSOL',
    'bSOL',
    'Sanctum Router',
    'Sanctum Reserve',
  ],
  alternates: { canonical: 'https://degen0x.com/learn/sanctum-solana-liquid-staking-infinity-guide-2026' },
  openGraph: {
    type: 'article',
    title: "Sanctum Guide 2026 — Solana Liquid Staking, Infinity Pool &",
    description: 'How Sanctum unifies Solana liquid staking liquidity through the Infinity pool, Router, and Reserve — plus CLOUD tokenomics in 2026.',
    publishedTime: '2026-04-10T00:00:00Z',
    authors: ['degen0x'],
    siteName: 'degen0x',
    images: [{ url: '/og-sanctum-solana-lst-2026.svg', width: 1200, height: 630, alt: 'Sanctum Guide 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sanctum Guide 2026 — Solana LST Infinity Pool',
    description: 'The 2026 guide to Sanctum, Infinity, and CLOUD — the universal liquidity layer for Solana LSTs.',
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["Article", "FAQPage"],
  headline: "Sanctum Guide 2026 — Solana Liquid Staking, Infinity Pool & CLOUD",
  description: "Comprehensive guide to Sanctum: Infinity multi-LST pool, Router, Reserve, and CLOUD tokenomics on Solana.",
  datePublished: "2026-04-10T00:00:00Z",
  dateModified: "2026-04-10T00:00:00Z",
  author: { "@type": "Organization", name: "degen0x" },
  mainEntity: {
    "@type": "Article",
    headline: "Sanctum Guide 2026",
    articleBody: "Universal liquid staking layer on Solana unifying LST liquidity via Infinity, Router, and Reserve, governed by CLOUD."
  },
  faqs: [
    {
      "@type": "Question",
      name: "What is Sanctum?",
      acceptedAnswer: { "@type": "Answer", text: "Sanctum is a universal liquid staking layer on Solana. Rather than issuing a single LST, it provides shared infrastructure — Infinity, Router, and Reserve — that lets any validator or project launch its own LST and tap a unified liquidity pool." }
    },
    {
      "@type": "Question",
      name: "What is Sanctum Infinity?",
      acceptedAnswer: { "@type": "Answer", text: "Infinity is a multi-LST pool that holds a basket of Solana liquid staking tokens (JitoSOL, bSOL, jupSOL, and many others) and issues the INF LST. It lets users earn a weighted average of validator yields while providing deep swap liquidity between LSTs." }
    },
    {
      "@type": "Question",
      name: "How is Sanctum different from Marinade or Jito?",
      acceptedAnswer: { "@type": "Answer", text: "Marinade and Jito each issue a single flagship LST. Sanctum is infrastructure: it powers hundreds of LSTs, removes the cold-start liquidity problem for new ones, and makes every Sanctum LST instantly unstakable via the Reserve instead of waiting for epoch boundaries." }
    },
    {
      "@type": "Question",
      name: "What is the CLOUD token used for?",
      acceptedAnswer: { "@type": "Answer", text: "CLOUD is Sanctum's governance token. Holders vote on Infinity pool composition, fee parameters, Reserve utilization, and how validator-specific LSTs are whitelisted. Staked CLOUD can also direct incentives across the LST ecosystem." }
    },
    {
      "@type": "Question",
      name: "What is the Sanctum Reserve?",
      acceptedAnswer: { "@type": "Answer", text: "The Reserve is a shared SOL liquidity pool that backs instant unstakes for any supported LST. Instead of waiting an epoch to unstake, users tap the Reserve and pay a small fee; the Reserve then completes the underlying unstake asynchronously." }
    },
    {
      "@type": "Question",
      name: "What are the main risks of using Sanctum?",
      acceptedAnswer: { "@type": "Answer", text: "Key risks include smart contract risk across Infinity and Router, slashing or downtime risk from underlying validators, LST depeg risk during Reserve stress, and governance risk around which LSTs are whitelisted into the pool." }
    }
  ]
};

const h1Style: React.CSSProperties = { fontSize: 36, fontWeight: 800, marginBottom: 16, background: 'linear-gradient(135deg, #6366f1, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1.2 };
const h2Style: React.CSSProperties = { fontSize: 24, fontWeight: 700, marginTop: 40, marginBottom: 16, color: '#a78bfa', borderBottom: '2px solid #2d2254', paddingBottom: 12 };
const badgeStyle: React.CSSProperties = { padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 600, marginRight: 8, marginBottom: 16, display: 'inline-block' };
const infoBoxStyle: React.CSSProperties = { background: '#161b22', border: '1px solid #30363d', borderRadius: 12, padding: 20, marginBottom: 24, lineHeight: 1.8 };


const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Learn', item: 'https://degen0x.com/learn' },
    { '@type': 'ListItem', position: 3, name: 'Sanctum Solana Liquid Staking Infinity Guide 2026', },
  ],
};

export default function SanctumGuide() {
  const pageStyle = { backgroundColor: '#0d1117', color: '#e6edf3', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', lineHeight: '1.6', minHeight: '100vh' } as const;
  const containerStyle = { maxWidth: '800px', margin: '0 auto', padding: 'clamp(20px, 5vw, 40px) clamp(16px, 4vw, 20px)' } as const;
  const h1Style = { fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', fontWeight: 700, marginBottom: '20px', marginTop: 0, background: 'linear-gradient(135deg, #6366f1, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', letterSpacing: '-0.02em', lineHeight: '1.2' } as const;
  const h2Style = { fontSize: 'clamp(1.4rem, 4vw, 2rem)', fontWeight: 600, marginTop: '40px', marginBottom: '20px', color: '#a78bfa', borderBottom: '2px solid #2d2254', paddingBottom: 12, scrollMarginTop: '24px' } as const;
  const h3Style = { fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', fontWeight: 600, marginTop: '20px', marginBottom: '12px', color: '#e6edf3' } as const;
  const badgeStyle = { display: 'inline-block', backgroundColor: '#6366f1', color: '#fff', padding: '4px 12px', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 600, marginRight: '8px', marginBottom: '16px' } as const;
  const levelStyle = { display: 'inline-block', backgroundColor: '#58a6ff', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 } as const;
  const infoBoxStyle = { backgroundColor: '#161b22', border: '1px solid #30363d', borderLeft: '3px solid #a78bfa', borderLeft: '3px solid #a78bfa', borderRadius: '12px', padding: '20px', marginTop: '16px', marginBottom: '24px', lineHeight: '1.6' } as const;
  const linkStyle = { color: '#58a6ff', textDecoration: 'none', borderBottom: '1px solid rgba(88, 166, 255, 0.3)' } as const;
  const tocStyle = { backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '12px', padding: '20px', marginTop: '24px', marginBottom: '40px' } as const;
  const tocHeadingStyle = { fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px', color: '#e6edf3' } as const;
  const tocListStyle = { listStyleType: 'none' as const, padding: 0, margin: 0 };
  const tocItemStyle = { marginBottom: '8px' } as const;
  const disclaimerStyle = { backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '12px', padding: '20px', marginTop: '40px', marginBottom: '40px', fontSize: '0.95rem', color: '#d1d9e0' } as const;
  const relatedLinksStyle = { backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '12px', padding: '20px', marginTop: '40px', marginBottom: '40px' } as const;

  return (
    <div style={pageStyle}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="learn"
      />      <article aria-label="Guide: Sanctum Solana Liquid Staking">
      <div style={containerStyle}>
        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Learn", href: "/learn" },
          { label: "Sanctum Guide" },
        ]} />
        <div style={{ marginBottom: '12px' }}>
          <span style={badgeStyle}>SOLANA · LIQUID STAKING</span>
          <span style={levelStyle}>INTERMEDIATE</span>
        </div>

        <h1 style={h1Style}>Sanctum Guide 2026 — Solana Liquid Staking, Infinity Pool &amp; CLOUD</h1>

        <p style={{ fontSize: '1.1rem', marginBottom: '8px', color: '#d1d9e0' }}>
          Sanctum is the universal liquid staking layer of Solana. Instead of issuing a single flagship LST like Jito or Marinade, Sanctum provides shared infrastructure — Infinity, Router, and Reserve — that any validator or project can plug into to launch its own liquid staking token with instant liquidity from day one. This guide unpacks how the pieces fit together, what the CLOUD token does, and what can go wrong.
        </p>

        <p style={{ fontSize: '0.95rem', color: '#8b949e', marginTop: '16px' }}>
          <strong>Updated April 2026 · 10 min read</strong>
        </p>

        <nav aria-label="Table of Contents" style={tocStyle}>
          <div style={tocHeadingStyle}>Table of Contents</div>
          <ul style={tocListStyle}>
            <li style={tocItemStyle}><a href="#what-is-sanctum" style={linkStyle}>1. What Is Sanctum?</a></li>
            <li style={tocItemStyle}><a href="#infinity" style={linkStyle}>2. The Infinity Pool &amp; INF</a></li>
            <li style={tocItemStyle}><a href="#router" style={linkStyle}>3. Sanctum Router</a></li>
            <li style={tocItemStyle}><a href="#reserve" style={linkStyle}>4. Sanctum Reserve</a></li>
            <li style={tocItemStyle}><a href="#cloud" style={linkStyle}>5. CLOUD Tokenomics</a></li>
            <li style={tocItemStyle}><a href="#competitors" style={linkStyle}>6. Sanctum vs Jito vs Marinade</a></li>
            <li style={tocItemStyle}><a href="#risks" style={linkStyle}>7. Risks &amp; Considerations</a></li>
            <li style={tocItemStyle}><a href="#faq" style={linkStyle}>8. FAQ</a></li>
          </ul>
        </nav>

        <h2 id="what-is-sanctum" style={h2Style}>1. What Is Sanctum?</h2>
        <p>
          <strong>Sanctum</strong> is a Solana protocol that treats liquid staking as shared infrastructure rather than a product. In a traditional LST model, each protocol (Jito, Marinade, Blaze) runs its own stake pool, mints its own token, and bootstraps its own secondary-market liquidity. That creates a cold-start problem: new LSTs launch illiquid and trade at a discount, while users concentrate into a handful of dominant LSTs.
        </p>
        <p>
          Sanctum flips the model. It offers a common liquidity substrate — the Infinity pool, the Router, and the Reserve — so that any validator or project can launch an LST and immediately benefit from unified swap liquidity and instant unstake. The result is hundreds of Sanctum-powered LSTs, from validator-branded tokens to app-specific ones, all trading against the same underlying SOL liquidity.
        </p>
        <div style={infoBoxStyle}>
          <strong>Key Metrics (April 2026):</strong>
          <ul style={{ marginLeft: '20px', marginTop: '8px', marginBottom: 0 }}>
            <li><strong>Role:</strong> Universal liquid staking layer on Solana</li>
            <li><strong>Products:</strong> Infinity pool (INF), Router, Reserve</li>
            <li><strong>LSTs supported:</strong> Hundreds, including JitoSOL, bSOL, jupSOL, INF</li>
            <li><strong>Token:</strong> CLOUD (governance + incentives)</li>
          </ul>
        </div>

        <h2 id="infinity" style={h2Style}>2. The Infinity Pool &amp; INF</h2>
        <p>
          <strong>Infinity</strong> is Sanctum&rsquo;s flagship multi-LST pool. It holds a basket of whitelisted Solana LSTs and issues a single receipt token, <strong>INF</strong>, which represents a pro-rata share of the basket. Depositors earn a weighted average of the staking yields across all LSTs in the pool, with governance controlling which LSTs are included and at what cap.
        </p>
        <h3 style={h3Style}>Why Infinity matters</h3>
        <p>
          Infinity acts as a universal AMM for LSTs. Because all tokens in the pool are SOL-denominated with known exchange rates, swaps between any two LSTs route cheaply through INF with minimal slippage — a dramatic improvement over stitching together thin Orca pools per LST pair. For users, this means you can rotate between LSTs in a single transaction instead of price-impacting your own trade across multiple books.
        </p>
        <h3 style={h3Style}>INF as a standalone LST</h3>
        <p>
          INF itself is a usable LST. Holding it gives diversified validator exposure without having to pick a single operator, and it composes into Kamino, MarginFi, and other Solana DeFi apps as collateral.
        </p>

        <h2 id="router" style={h2Style}>3. Sanctum Router</h2>
        <p>
          <strong>Sanctum Router</strong> is the pricing and routing engine that sits on top of every Sanctum-powered LST. When a user wants to swap <em>any</em> LST to <em>any</em> other LST (or to SOL), the Router computes the optimal path — direct through Infinity, via the Reserve, or bridged through multiple pools — and executes it atomically.
        </p>
        <p>
          This is what makes Sanctum feel invisible in practice. From a wallet or aggregator&rsquo;s perspective, Sanctum LSTs behave like a single fungible asset class with deterministic pricing, rather than hundreds of illiquid tokens.
        </p>

        <h2 id="reserve" style={h2Style}>4. Sanctum Reserve</h2>
        <p>
          The <strong>Reserve</strong> is a shared SOL liquidity pool that backs instant unstakes. Normally, unstaking a Solana LST requires waiting for the end of an epoch (around two days). The Reserve short-circuits this: users burn their LST, receive SOL immediately from the Reserve at a small fee, and the protocol completes the underlying unstake asynchronously, replenishing the Reserve on the next epoch boundary.
        </p>
        <p>
          Every Sanctum LST taps the same Reserve, which is one of the main reasons Sanctum can offer instant unstake across hundreds of LSTs without each project bootstrapping its own buffer.
        </p>

        <h2 id="cloud" style={h2Style}>5. CLOUD Tokenomics</h2>
        <p>
          <strong>CLOUD</strong> is Sanctum&rsquo;s governance and incentives token. It is used to vote on Infinity pool composition (which LSTs are whitelisted and at what cap), fee parameters for Router and Reserve, and how incentives are distributed to LST partners. Over time, a share of protocol fees can be directed to CLOUD stakers via governance.
        </p>
        <p>
          CLOUD was distributed through an initial airdrop to early Sanctum users and LST depositors, plus ongoing Wonderland-style point seasons that reward depositors and LST-issuing validators. The long-term thesis is that CLOUD captures value proportional to how much of Solana&rsquo;s stake flows through Sanctum-powered LSTs.
        </p>

        <h2 id="competitors" style={h2Style}>6. Sanctum vs Jito vs Marinade</h2>
        <p>
          <strong>Jito</strong> and <strong>Marinade</strong> are vertically integrated LST protocols: they select validators, run their own stake pool, issue one token (JitoSOL, mSOL), and bootstrap liquidity directly. Sanctum is horizontal infrastructure: it does not compete with JitoSOL or mSOL — it aggregates them into Infinity and routes swaps between them. In practice, the protocols are complementary, which is why most major Solana LSTs live inside Sanctum&rsquo;s Router and Reserve graph.
        </p>
        <p>
          The closest analogue on Ethereum is the combination of <strong>Lido&rsquo;s wstETH</strong>, <strong>Curve stable-LST pools</strong>, and <strong>Balancer boosted pools</strong> — except Sanctum bundles all three into a single, Solana-native stack.
        </p>

        <h2 id="risks" style={h2Style}>7. Risks &amp; Considerations</h2>
        <ul style={{ marginLeft: '20px' }}>
          <li><strong>Smart contract risk:</strong> Infinity, Router, and Reserve share code surface. A bug in any of them can affect the entire LST graph.</li>
          <li><strong>Validator risk:</strong> Each LST in Infinity carries the slashing and downtime risk of its underlying validator set.</li>
          <li><strong>Depeg risk:</strong> If the Reserve is drained during a stress event, instant unstakes widen and LST/SOL pricing can dislocate.</li>
          <li><strong>Governance risk:</strong> CLOUD holders decide which LSTs are whitelisted into Infinity; bad inclusions can contaminate the pool.</li>
          <li><strong>Concentration risk:</strong> As Sanctum grows, a larger share of Solana staking depends on its infrastructure operating correctly.</li>
        </ul>
        <div style={infoBoxStyle}>
          <strong>Risk summary:</strong> Sanctum lowers the cost of launching an LST and improves LST UX massively — but it also concentrates systemic risk in one shared liquidity graph. Size positions accordingly.
        </div>

        <h2 id="faq" style={h2Style}>8. Frequently Asked Questions</h2>
        <div style={{ marginBottom: '24px' }}>
          <h3 style={h3Style}>Is holding INF better than holding JitoSOL?</h3>
          <p>Neither is strictly better. INF gives diversified validator exposure and deep LST swap liquidity; JitoSOL concentrates on Jito&rsquo;s validator set and MEV rewards. Pick based on whether you want diversification or a specific yield profile.</p>
        </div>
        <div style={{ marginBottom: '24px' }}>
          <h3 style={h3Style}>Do I need CLOUD to use Sanctum?</h3>
          <p>No. You can deposit into Infinity, mint an LST, or use the Router without touching CLOUD. The token is for governance and incentive direction.</p>
        </div>
        <div style={{ marginBottom: '24px' }}>
          <h3 style={h3Style}>How fast is an instant unstake?</h3>
          <p>It settles in a single transaction against the Reserve, at a small dynamic fee that scales with Reserve utilization. During normal conditions the fee is minimal; during stress it can widen significantly.</p>
        </div>
        <div style={{ marginBottom: '24px' }}>
          <h3 style={h3Style}>Can I use INF as collateral in Solana DeFi?</h3>
          <p>Yes. INF is accepted as collateral in major Solana lending markets and can be deposited into Kamino vaults and other yield strategies.</p>
        </div>

        <h2 id="disclaimer" style={h2Style}>Disclaimer</h2>
        <div style={disclaimerStyle}>
          <p><strong>This guide is for educational purposes only and does not constitute financial advice.</strong> Sanctum, CLOUD, INF, and Solana liquid staking carry risks including smart contract bugs, validator slashing, depegs, and governance failures. Always conduct your own research (DYOR) before participating in any DeFi protocol.</p>
          <p style={{ marginBottom: 0 }}>degen0x provides this information as-is without warranties. By reading this guide, you assume all risks associated with blockchain technology and DeFi.</p>
        </div>

        <h2 style={h2Style}>Related Articles</h2>
        <div style={relatedLinksStyle}>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '12px' }}><Link href="/learn/jito-solana-mev-liquid-staking-guide-2026" style={linkStyle}>Jito Protocol: Solana MEV &amp; Liquid Staking</Link></li>
            <li style={{ marginBottom: '12px' }}><Link href="/learn/kamino-finance-solana-lending-liquidity-guide-2026" style={linkStyle}>Kamino Finance: Solana Lending &amp; Leverage</Link></li>
            <li style={{ marginBottom: '12px' }}><Link href="/learn/drift-protocol-solana-perps-dex-guide-2026" style={linkStyle}>Drift Protocol: Solana Perps DEX</Link></li>
            <li><Link href="/learn/restaking-wars-eigenlayer-symbiotic-karak-guide-2026" style={linkStyle}>Restaking Wars: EigenLayer, Symbiotic &amp; Karak</Link></li>
          </ul>
        </div>

        <BackToTop />
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </div>
  );
}
