import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import RelatedContent from '@/components/RelatedContent';


export const metadata: Metadata = {
  title: 'What Is Restaking & EigenLayer 2026: AVS, Operators, LRTs | degen0x',
  description: 'Complete guide to restaking: how EigenLayer works, AVS (Actively Validated Services), liquid restaking tokens (eETH, rsETH, pufETH). TVL $23B, slashing risks, EigenDA.',
  keywords: ['restaking', 'eigenlayer', 'liquid staking tokens', 'LRT tokens', 'AVS eigenlayer', 'eETH', 'rsETH', 'pufETH', 'restaking risk', 'EigenDA'],
  openGraph: {
    type: 'article',
    title: 'What Is Restaking & EigenLayer 2026: AVS, Operators, LRTs',
    description: 'Complete guide to restaking: how EigenLayer works, AVS (Actively Validated Services), liquid restaking tokens (eETH, rsETH, pufETH). TVL $23B, slashing risks, EigenDA.',
    publishedTime: '2026-04-10T00:00:00Z',
    modifiedTime: '2026-04-10T00:00:00Z',
    url: 'https://degen0x.com/learn/what-is-restaking-eigenlayer',
    images: [{
      url: 'https://degen0x.com/og-learn.svg',
      width: 1200,
      height: 630,
      alt: 'EigenLayer Restaking Guide',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is Restaking & EigenLayer 2026: AVS, Operators, LRTs',
    description: 'Complete guide to restaking: how EigenLayer works, AVS (Actively Validated Services), liquid restaking tokens (eETH, rsETH, pufETH). TVL $23B, slashing risks, EigenDA.',
    image: 'https://degen0x.com/og-learn.svg',
  },
  alternates: {
    canonical: 'https://degen0x.com/learn/what-is-restaking-eigenlayer',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What Is Restaking & EigenLayer 2026: AVS, Operators, LRTs',
  description: 'Complete guide to restaking: how EigenLayer works, AVS (Actively Validated Services), liquid restaking tokens (eETH, rsETH, pufETH). TVL $23B, slashing risks, EigenDA.',
  image: 'https://degen0x.com/og-learn.svg',
  datePublished: '2026-04-10',
  dateModified: '2026-04-10',
  author: { '@type': 'Organization', name: 'degen0x' },
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is restaking?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Restaking is using staked ETH to secure other protocols. You stake ETH for Ethereum (earning 3.5% APY). Then, you restake that staked ETH to EigenLayer, which directs it to Actively Validated Services (AVS) like EigenDA. You earn additional yield (8-20% APY from AVS rewards) on top of base staking. Risk: if the AVS you secure gets slashed (hacked), your restaked ETH gets slashed.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does EigenLayer work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'EigenLayer is a smart contract platform ($23B TVL, April 2026). You deposit stETH (Lido liquid staking token) or nativeETH. EigenLayer creates a secondary slashing risk: if you get slashed, you lose your principal. Operators run nodes for AVS. Restakers delegate to operators. Operators earn AVS rewards and share with delegators. EigenLayer DAO governance via EIGEN token (launched March 2026, $5.80 per token).',
        },
      },
      {
        '@type': 'Question',
        name: 'What are AVS (Actively Validated Services)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AVS are protocols that use EigenLayer for security. Examples: EigenDA (decentralized data availability), EigenSampler (sampling services), 0xSolidly (oracle). Protocols pay AVS operators to secure them. Operators earn ~12-20% APY from AVS fees. For Ethereum security (staking), you earn 3.5%. For EigenLayer (restaking), you earn 8-20% (premium for risk).',
        },
      },
      {
        '@type': 'Question',
        name: 'What are liquid restaking tokens (LRTs)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'LRTs wrap restaked ETH. Deposit stETH in EigenLayer, get eETH (Ether.fi LRT, $4.2B TVL). Or get rsETH (Kelp, $1.8B) or pufETH (Puffer, $950M). LRTs are liquid: you can trade them on DEXs without unstaking. They earn restaking yields (~15-18% APY in 2026). Risk: smart contract bugs, slashing cascades.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is slashing risk in restaking?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If an AVS you secure gets hacked, your restaked ETH gets slashed (burned). Example: EigenDA if hackers break it, stakers lose funds. No slashing has occurred yet (April 2026), but it\'s a live risk. Slashing amount determined by AVS (can be 1-100% of restaked amount). This is why restaking yields are 8-20% (compensation for risk).',
        },
      },
      {
        '@type': 'Question',
        name: 'Should I restake or just stake ETH?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Staking ETH: 3.5% APY, safe, boring. Restaking: 15-18% APY, risky (slashing). Depends on risk tolerance. Conservative: 100% staking. Aggressive: 50% restaking/50% staking (diversify risk). LRTs are easier than solo restaking (Ether.fi, Kelp handle operator selection).',
        },
      },
    ],
  },
};

const h1Style: React.CSSProperties = { fontSize: 36, fontWeight: 800, marginBottom: 16, background: 'linear-gradient(135deg, #6366f1, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1.2 };
const h2Style: React.CSSProperties = { fontSize: 24, fontWeight: 700, marginTop: 40, marginBottom: 16, color: '#a78bfa', borderBottom: '2px solid #2d2254', paddingBottom: 12 };
const badgeStyle: React.CSSProperties = { padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 600, marginRight: 8, marginBottom: 16, display: 'inline-block' };
const infoBoxStyle: React.CSSProperties = { background: '#161b22', border: '1px solid #30363d', borderRadius: 12, padding: 20, marginBottom: 24, lineHeight: 1.8 };


export default function WhatIsRestakingEigenLayer() {
  const tableOfContents = [
    { id: 'what-is-restaking', title: 'What Is Restaking?' },
    { id: 'ethereum-staking-vs-restaking', title: 'Ethereum Staking vs. Restaking' },
    { id: 'eigenlayer-mechanics', title: 'EigenLayer Mechanics' },
    { id: 'avs-services', title: 'AVS (Actively Validated Services)' },
    { id: 'liquid-restaking-tokens', title: 'Liquid Restaking Tokens (LRTs)' },
    { id: 'restaking-yield', title: 'Restaking Yield & Returns' },
    { id: 'slashing-risk', title: 'Slashing Risk & Mitigation' },
    { id: 'lrt-comparison', title: 'Liquid Restaking Token Comparison' },
    { id: 'eigenlayer-growth', title: 'EigenLayer Growth & TVL' },
    { id: 'future-eigenlayer', title: 'Future: EigenDA & Beyond' },
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
    fontSize: 36,
    fontWeight: 800,
    marginBottom: 16,
    background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const h2Style = {
    fontSize: 24,
    fontWeight: 700,
    marginTop: 40,
    marginBottom: 16,
    color: '#a78bfa', borderBottom: '2px solid #2d2254', paddingBottom: 12,
  };

  const h3Style = {
    fontSize: 18,
    fontWeight: 600,
    marginTop: 20,
    marginBottom: 12,
    color: '#e6edf3',
  };

  const badgeStyle = {
    display: 'inline-block',
    padding: '6px 12px',
    borderRadius: 6,
    fontSize: 12,
    fontWeight: 600,
    marginRight: 8,
    marginBottom: 16,
  };

  const linkStyle = { color: '#58a6ff', textDecoration: 'none' };

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

  return (
    <article id="top" style={{ background: '#0d1117', color: '#e6edf3', minHeight: '100vh', padding: '40px 20px', scrollBehavior: 'smooth' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <nav aria-label="Breadcrumb" style={{ marginBottom: 20, fontSize: 13, color: '#8b949e' }}>
          <Link href="/" style={{ color: '#8b949e', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <Link href="/learn" style={{ color: '#8b949e', textDecoration: 'none' }}>Learn</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <span style={{ color: '#c9d1d9' }}>What Is Restaking & EigenLayer</span>
        </nav>

        <div style={{ marginBottom: 32 }}>
          <div>
            <span style={{ ...badgeStyle, background: '#6366f1', color: '#fff' }}>Learn</span>
            <span style={{ ...badgeStyle, background: '#3d444d', color: '#e6edf3' }}>Advanced</span>
          </div>
          <h1 style={h1Style}>What Is Restaking & EigenLayer 2026</h1>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 20 }}>
            Restaking is supercharging ETH staking. Ethereum staking earns 3.5% APY. Restaking on EigenLayer earns 15-20% APY by securing other protocols (AVS). EigenLayer has exploded to $23B TVL (April 2026), the fastest-growing DeFi protocol. Liquid restaking tokens like eETH ($4.2B), rsETH ($1.8B), and pufETH ($950M) make restaking accessible. But there&apos;s a catch: slashing risk. This comprehensive guide covers how restaking works, why yields are high, and how to evaluate LRTs.
          </p>
          <div style={{ display: 'flex', gap: 24, fontSize: 14, color: '#8b949e', marginBottom: 24 }}>
            <span>Updated: April 10, 2026</span>
            <span>Reading time: 16 min</span>
          </div>
        </div>

        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-04-10"
          updatedDate="2026-04-10"
          readingTime={16}
          section="learn"
        />


        <nav aria-label="Table of Contents" style={{ ...infoBoxStyle, marginBottom: 32 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, color: '#e6edf3' }}>Table of Contents</h3>
          <ol style={{ marginLeft: 20, color: '#58a6ff' }}>
            {tableOfContents.map(item => (
              <li key={item.id} style={{ marginBottom: 8 }}>
                <a href={`#${item.id}`} style={linkStyle}>{item.title}</a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="what-is-restaking" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>1. What Is Restaking?</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Restaking is using staked ETH (or liquid staking tokens) to secure other protocols. Here&apos;s the flow: (1) Stake ETH on Ethereum, earn 3.5% APY. (2) Deposit staked ETH into EigenLayer. (3) EigenLayer directs your ETH to Actively Validated Services (AVS). (4) AVS pay you for security, earning you 8-20% additional APY. Total return: 11-23% APY. Catch: if the AVS gets hacked, your ETH gets slashed.
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
          <h3 style={h3Style}>Why Restaking Exists</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Ethereum&apos;s security is expensive: $100B+ of ETH staked to secure Ethereum. Other protocols (data availability, oracles, sequencers) want similar security. Restaking lets them reuse Ethereum&apos;s validator set. Cost: 8-20% APY paid to restakers (cheaper than bootstrapping own security).
          </p>
        </section>

        <section id="ethereum-staking-vs-restaking" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>2. Ethereum Staking vs. Restaking</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Ethereum Staking: 32 ETH minimum, 3.5% APY, no slashing risk (Ethereum is mature). Restaking: any amount (via LRTs), 15-20% APY, slashing risk if AVS breaks. Choose based on risk tolerance. Conservative investors: 100% staking. Aggressive: 50-100% restaking.
          </p>
        </section>

        <section id="eigenlayer-mechanics" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>3. EigenLayer Mechanics</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            EigenLayer ($23B TVL, April 2026) is a smart contract platform. You deposit stETH (Lido liquid staking token) or ETH directly. EigenLayer creates a "secondary slashing layer." If the AVS you secure gets slashed, your ETH gets slashed. Operators run validator nodes for AVS. Restakers delegate to operators. Operators earn AVS rewards and share with delegators. EIGEN token (launched March 2026): governance + fee sharing. Current price: $5.80 per token.
          </p>
          <div style={infoBoxStyle}>
            <strong style={{ color: '#e6edf3' }}>Restaking Slashing vs. Staking Slashing</strong>
            <p style={{ marginTop: 12, marginBottom: 0, fontSize: 14 }}>
              Ethereum slashing is automatic (double-sign, attestation failures). Restaking slashing is determined by AVS (amount = AVS design). EigenDA might slash 1% of restaked amount if it goes offline. Or 100% if the AVS is fundamentally broken. This is why restaking requires trust in AVS design.
            </p>
          </div>
        </section>

        <section id="avs-services" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>4. AVS (Actively Validated Services)</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            AVS are protocols that use EigenLayer for consensus. Major AVS: EigenDA (decentralized data availability, $12B secured), EigenSampler (sampling services), 0xSolidly (oracle), Pumper (sequencer). Each AVS pays restakers differently. EigenDA: 12-15% APY. Emerging AVS: 20-40% APY (higher risk, newer code). Average restaking APY (April 2026): 18%.
          </p>
        </section>

        <section id="liquid-restaking-tokens" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>5. Liquid Restaking Tokens (LRTs)</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            LRTs make restaking accessible without running nodes. Ether.fi (eETH, $4.2B), Kelp (rsETH, $1.8B), Puffer (pufETH, $950M). You deposit ETH, get LRT, earn restaking yields (~16-18% APY). LRTs are liquid: trade on DEXs without unstaking. LRT protocols manage operator selection, slashing risk. They take 1-5% fee on yield.
          </p>
          <h3 style={h3Style}>eETH (Ether.fi) - $4.2B TVL</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            eETH is the largest LRT. Deposit ETH, get eETH shares. eETH earns 16-18% APY. Ether.fi operates validators (runs nodes for AVS). Charges 10% fee on validator rewards. APY after fees: 14-16%.
          </p>
          <h3 style={h3Style}>rsETH (Kelp) - $1.8B TVL</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            rsETH by Kelp. Similar to eETH but with different operator set. APY: 15-17% after fees. Kelp focuses on risk diversification (multiple AVS delegations).
          </p>
        </section>

        <section id="restaking-yield" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>6. Restaking Yield & Returns</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Restaking yields come from: (1) Ethereum base layer staking (3.5%), (2) AVS rewards (12-20%), (3) MEV (maximum extractable value, 0.5-2%). Total: 16-22% APY. Some LRTs offer boosted APY (22-30%) during launch periods, but this unsustainable. After 12-24 months, expect yields to normalize to 12-16% as competition increases.
          </p>
        </section>

        <section id="slashing-risk" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>7. Slashing Risk & Mitigation</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Slashing happens if an AVS fails or gets hacked. Example: EigenDA if consensus is broken, stakers get slashed. Amount: 1-100% depending on AVS design. Mitigation: (1) diversify across multiple AVS, (2) choose audited AVS only, (3) start with small amounts, (4) use LRTs (they do diversification for you).
          </p>
        </section>

        <section id="lrt-comparison" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>8. LRT Comparison Table</h2>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>LRT</th>
                <th style={thStyle}>TVL</th>
                <th style={thStyle}>APY</th>
                <th style={thStyle}>Underlying</th>
                <th style={thStyle}>Governance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>eETH (Ether.fi)</td>
                <td style={tdStyle}>$4.2B</td>
                <td style={tdStyle}>16-18%</td>
                <td style={tdStyle}>stETH + ETH</td>
                <td style={tdStyle}>EFI token</td>
              </tr>
              <tr>
                <td style={tdStyle}>rsETH (Kelp)</td>
                <td style={tdStyle}>$1.8B</td>
                <td style={tdStyle}>15-17%</td>
                <td style={tdStyle}>stETH + cbETH</td>
                <td style={tdStyle}>KELP token</td>
              </tr>
              <tr>
                <td style={tdStyle}>pufETH (Puffer)</td>
                <td style={tdStyle}>$950M</td>
                <td style={tdStyle}>14-16%</td>
                <td style={tdStyle}>Puffer validators</td>
                <td style={tdStyle}>PUF token</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="eigenlayer-growth" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>9. EigenLayer Growth & TVL</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            EigenLayer TVL: $8B (June 2024) → $23B (April 2026). 3x growth in 10 months. It&apos;s the fastest-growing DeFi protocol. Reason: high yields + Ethereum validator set backing. EIGEN token launched March 2026, distributed to early users. Price: $5.80 per token.
          </p>
        </section>

        <section id="future-eigenlayer" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>10. Future: EigenDA & Beyond</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            EigenDA is restaking&apos;s killer app: decentralized data availability. Ethereum dapps and L2s use EigenDA for cheaper data storage (vs. posting to Ethereum). This is why EigenDA has $12B secured—it&apos;s genuinely useful. Future AVS: decentralized oracles, sequencers, proof systems. Restaking will likely become standard infrastructure layer (like staking).
          </p>
        </section>

        <section id="faq">
          <h2 style={h2Style}>FAQ</h2>
          <div style={infoBoxStyle}>
            <h3 style={h3Style}>Should I restake?</h3>
            <p style={{ marginBottom: 0, fontSize: 14 }}>
              High yield + smart contract risk. Conservative: 30% restaking/70% staking. Aggressive: 100% restaking (for extra yield). Start small.
            </p>
          </div>
          <div style={infoBoxStyle}>
            <h3 style={h3Style}>What if eETH gets slashed?</h3>
            <p style={{ marginBottom: 0, fontSize: 14 }}>
              Your eETH balance decreases (shares burned). If 1% slash, your 10 eETH becomes 9.9 eETH. No separate slashing event; it&apos;s automatic.
            </p>
          </div>
          <div style={infoBoxStyle}>
            <h3 style={h3Style}>Can I unstake from EigenLayer?</h3>
            <p style={{ marginBottom: 0, fontSize: 14 }}>
              Yes, instant. Sell eETH on Uniswap. Or redeem eETH for ETH via Ether.fi (1-7 day delay for validators to exit).
            </p>
          </div>
          <div style={infoBoxStyle}>
            <h3 style={h3Style}>Which LRT is safest?</h3>
            <p style={{ marginBottom: 0, fontSize: 14 }}>
              eETH (largest, most audited). Then rsETH. pufETH is new (more risk). For maximum safety, don&apos;t restake.
            </p>
          </div>
          <div style={infoBoxStyle}>
            <h3 style={h3Style}>Will restaking yields drop?</h3>
            <p style={{ marginBottom: 0, fontSize: 14 }}>
              Likely. As TVL increases, per-staker rewards decrease. Current 18% APY may drop to 8-12% by 2027. High yields unsustainable.
            </p>
          </div>
          <div style={infoBoxStyle}>
            <h3 style={h3Style}>Is EigenLayer regulated?</h3>
            <p style={{ marginBottom: 0, fontSize: 14 }}>
              Unregulated (DeFi). MiCA may affect it in EU. US regulation unclear but likely no issues (it&apos;s infrastructure, not a token offering).
            </p>
          </div>
        </section>

        <div style={{ ...infoBoxStyle, marginTop: 48, fontSize: 13, color: '#8b949e' }}>
          <strong>Disclaimer:</strong> This content is for informational purposes only. Restaking carries slashing risk, smart contract risk, and protocol risk. LRTs are experimental. High yields are compensation for risk. Never risk more than you can afford to lose. This is not financial advice.
        </div>
      </div>
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: "24px", background: "#161b22", border: "1px solid #30363d", borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>Continue Reading</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
            <li><Link href="/tools/bitcoin-halving-countdown" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Bitcoin Halving Countdown</Link></li>
            <li><Link href="/tools/bitcoin-mempool-visualizer" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Bitcoin Mempool Visualizer</Link></li>
            <li><Link href="/tools/bitcoin-rainbow-chart" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Bitcoin Rainbow Chart</Link></li>
            <li><Link href="/tools/blockchain-explorer-tool" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Blockchain Explorer Tool</Link></li>
          </ul>
        </nav>

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
      <RelatedContent category="learn" currentSlug="/learn/what-is-restaking-eigenlayer" />
      </article>
  );
}
