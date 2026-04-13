import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: "DeFi Hack Insurance Comparison 2026 | Nexus Mutual,",
  description: "DeFi hack insurance: Nexus Mutual exploit cover, InsurAce protection, Neptune Mutual parametric claims, Unslashed. Compare coverage, payouts, claim speed,",
  keywords: ['DeFi insurance', 'hack insurance', 'Nexus Mutual', 'InsurAce', 'Neptune Mutual', 'Unslashed', 'smart contract insurance'],
  openGraph: {
    title: 'DeFi Hack Insurance | degen0x',
    description: 'Compare DeFi insurance protocols: coverage, claims, premiums for smart contracts.',
    images: [{ url: 'https://degen0x.com/og-insurance.svg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeFi Hack Insurance | degen0x',
    description: 'Nexus Mutual, InsurAce, Neptune, Unslashed comparison.',
  },
  alternates: {
    canonical: 'https://degen0x.com/insurance/defi-hack-insurance-comparison',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'DeFi Hack Insurance Comparison: Protocols, Coverage, Claims',
  description: 'Complete guide to DeFi hack insurance platforms and coverage options.',
  image: 'https://degen0x.com/og-insurance.svg',
  datePublished: '2026-04-10',
  dateModified: '2026-04-11',
  author: { '@type': 'Organization', name: 'degen0x' },
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Is DeFi hack insurance worth it?', acceptedAnswer: { '@type': 'Answer', text: 'Depends on capital size and risk tolerance. Small deposits (<$10K): avoid insurance (premium ~0.5-2% annually costs $50-200 on small capital). Medium ($10K-$100K): consider Nexus Mutual (1-3% premium = $100-3,000 annually for piece of mind). Large (>$100K): definitely insure (hackers target large pools; 5-10% loss with 1% premium is hedge). Insurance pays only after hack proven; claims take 2-8 weeks.' } },
      { '@type': 'Question', name: 'How do DeFi insurance claims work?', acceptedAnswer: { '@type': 'Answer', text: 'Nexus Mutual: member voting on hack legitimacy (7-14 days). InsurAce: claims assessment by underwriters (3-7 days). Neptune Mutual: parametric (automatic payout if protocol loses >$X liquidated, 24-48 hours). Unslashed: keeper network validates claims (1-3 days). Proof required: on-chain evidence, etherscan records, protocol communication. False claims = rejected, premium lost.' } },
      { '@type': 'Question', name: 'What is the maximum payout?', acceptedAnswer: { '@type': 'Answer', text: 'Nexus Mutual: $500M+ active cover capacity, per-protocol caps ($50M-$200M). InsurAce: $200M reserves, per-protocol limits. Neptune Mutual: parametric caps (e.g., $10M for Curve hack). Unslashed: smaller pools ($10M-$50M per pool). If hack exceeds protocol cap, payout pro-rated (you get percentage of cap). Never covers 100% of loss; max 80-90%.' } },
      { '@type': 'Question', name: 'What types of hacks are covered?', acceptedAnswer: { '@type': 'Answer', text: 'Covered: smart contract bugs (reentrancy, overflow), exploits, rugpull claims. NOT covered: rug pulls by known devs, user error (sending to wrong address), impermanent loss (not a hack), price oracle failure (protocol\'s problem, not hack). Nexus Mutual most inclusive; Neptune Mutual most restrictive (only parametric hacks meeting strict conditions).' } },
      { '@type': 'Question', name: 'What are insurance premiums in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Nexus Mutual: 0.5-3% annually (varies by protocol risk). Curve 0.5%, Aave 1%, new protocols 2-3%. InsurAce: 0.8-2.5%. Neptune Mutual: 1-2% (parametric, lower risk). Unslashed: 0.3-1.5% (KP3R staking required). Most provide discount for long-term coverage (pay 6 months upfront, get 10-15% reduction).' } },
      { '@type': 'Question', name: 'Which insurance should I choose?', acceptedAnswer: { '@type': 'Answer', text: 'Nexus Mutual for flexibility + largest cover pool ($500M). InsurAce for multi-protocol coverage. Neptune Mutual for low-cost parametric. Unslashed for keeper-based decentralization. Hybrid: split coverage across 2 platforms (Nexus + Neptune) diversifies claim risk. Most users: 50% Nexus, 50% Neptune balances cost + coverage.' } },
    ],
  },
};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Insurance', item: 'https://degen0x.com/insurance' },
    { '@type': 'ListItem', position: 3, name: 'Defi Hack Insurance Comparison', },
  ],
};

export default function DeFiHackInsuranceComparison() {
  const h1Style = {
    fontSize: 36,
    fontWeight: 800,
    marginBottom: 16,
    background: 'linear-gradient(135deg, #64748b, #3b82f6)',
    WebkitBackgroundClip: 'text' as const,
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const h2Style = {
    fontSize: 24,
    fontWeight: 700,
    marginTop: 40,
    marginBottom: 16,
    color: '#a3e635', borderBottom: '2px solid #365314', paddingBottom: 12,
  };

  const h3Style = {
    fontSize: 18,
    fontWeight: 600,
    marginTop: 20,
    marginBottom: 12,
    color: '#e6edf3',
  };

  const badgeStyle = {
    display: 'inline-block' as const,
    padding: '6px 12px',
    borderRadius: 6,
    fontSize: 12,
    fontWeight: 600,
    marginRight: 8,
    marginBottom: 16,
  };

  const infoBoxStyle = {
    background: '#161b22',
    border: '1px solid #30363d', borderLeft: '3px solid #a3e635', borderLeft: '3px solid #a3e635',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    lineHeight: 1.8,
  };

  const linkStyle = { color: '#58a6ff', textDecoration: 'none' as const };

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

  const tableOfContents = [
    { id: 'overview', title: 'DeFi Hack Risk & Insurance Overview' },
    { id: 'nexus-mutual', title: 'Nexus Mutual: Member Voting' },
    { id: 'insurace', title: 'InsurAce: Multi-Protocol' },
    { id: 'neptune', title: 'Neptune Mutual: Parametric Claims' },
    { id: 'unslashed', title: 'Unslashed: Keeper Network' },
    { id: 'comparison', title: 'Comparison Table' },
    { id: 'claims-process', title: 'Claims Process Walkthrough' },
    { id: 'faq', title: 'FAQ' },
  ];

  return (
    <article id="top" style={{ background: '#0d1117', color: '#e6edf3', minHeight: '100vh', padding: '40px 20px', scrollBehavior: 'smooth' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <nav aria-label="Breadcrumb" style={{ marginBottom: 20, fontSize: 13, color: '#8b949e' }}>
          <Link href="/" style={{ color: '#8b949e', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <Link href="/insurance" style={{ color: '#8b949e', textDecoration: 'none' }}>Insurance</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <span style={{ color: '#c9d1d9' }}>Hack Insurance</span>
        </nav>

        <div style={{ marginBottom: 32 }}>
          <span style={{ ...badgeStyle, background: '#64748b', color: '#fff' }}>Insurance</span>
          <span style={{ ...badgeStyle, background: '#3d444d', color: '#e6edf3' }}>Intermediate</span>
          <h1 style={h1Style}>DeFi Hack Insurance Comparison</h1>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 20 }}>
            DeFi hacks cost $800M+ annually. Nexus Mutual ($500M cover), InsurAce, Neptune Mutual, and Unslashed now cover exploits. Understand coverage limits, claim processes, premiums, and whether insurance is worth the cost for your capital size.
          </p>
          <div style={{ display: 'flex', gap: 24, fontSize: 14, color: '#8b949e', marginBottom: 24 }}>
            <span>Updated: April 11, 2026</span>
            <span>Reading time: 15 min</span>
          </div>
        </div>

        <AuthorAttribution
          author="CipherPunk_42"
          role="Security & QA"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={15}
          section="insurance"
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

        <section id="overview">
          <h2 style={h2Style}>DeFi Hack Risk &amp; Insurance Overview</h2>
          <p style={{ fontSize: 15, color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            DeFi attracts hackers: $800M stolen in 2024, $1B+ in 2025. Common hacks: reentrancy attacks (Curve Vyper bug, 2023, $61M), flash loan exploits (Pancake Bunny, $45M), oracle manipulation. Risk scales with TVL: Aave $10B = $100M-$500M at-risk per hack. Insurance mitigates this risk by guaranteeing payout if exploit occurs.
          </p>
        {/* editorial-voice */}
        <div style={{ background: '#0f1a08', border: '1px solid #365314', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>🔒</span>
            <strong style={{ color: '#a3e635', fontSize: 15 }}>Coverage Analysis</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            We analyze claims history and payout records, not just policy terms. A protocol that's never paid a claim isn't necessarily trustworthy.
          </p>
        </div>
          <h3 style={h3Style}>Insurance Coverage Types</h3>
          <p style={{ fontSize: 15, color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            Smart contract cover: compensates for code exploits (typical). Custody cover: protects against stolen private keys. Governance attacks: covers vote manipulation. All-risk: covers multiple categories. Most policies exclude user error, price crashes, and regulatory action.
          </p>
          <div style={infoBoxStyle}>
            <strong>Hack statistics:</strong> 2024 exploits: Curve ($61M), Pancake Bunny ($45M), Euler ($196M). Average claim payout delay: 3-8 weeks. Member voting (Nexus) or underwriter assessment (InsurAce) adds time. Speed matters: funds locked during assessment.
          </div>
        </section>

        <section id="nexus-mutual">
          <h2 style={h2Style}>Nexus Mutual: Member Voting</h2>
          <p style={{ fontSize: 15, color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            Largest DeFi insurance protocol. $500M+ active cover, $1B+ staked capital. Model: members stake NXM tokens, vote on claims. Cover examples: Aave ($10M-$20M cover available), Curve ($5M-$10M), new protocols ($1M-$5M). Premiums: 0.5-3% annually (Aave 1%, Compound 1%, new protocols 2-3%).
          </p>
          <h3 style={h3Style}>Claim Process</h3>
          <p style={{ fontSize: 15, color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            1. File claim with exploit details + on-chain evidence (etherscan, protocol communication). 2. Assessment (1-3 days): verify hack occurred. 3. Member voting (7-14 days): members vote yes/no on payout. 4. Payout: if passed, claim settled within 2-3 days. Median: 14-21 days total. Approval rate: ~80% (legitimate hacks approved; user error/rug pulls rejected).
          </p>
        </section>

        <section id="insurace">
          <h2 style={h2Style}>InsurAce: Multi-Protocol</h2>
          <p style={{ fontSize: 15, color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            More formal insurance model. Underwriters assess claims (not member voting). Covers 50+ protocols. $200M+ reserves. Premiums: 0.8-2.5% annually. Cover limits: $5M-$50M per protocol depending on audit. Claims paid 80-85% of loss (coinsurance model).
          </p>
          <h3 style={h3Style}>Coverage Example</h3>
          <p style={{ fontSize: 15, color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            Insure $50K USDC on Uniswap. Premium: 1% = $500/year. If exploit occurs and drains $40K, claim $32K (80% coinsurance). InsurAce pays if underwriters agree hack qualifies. Assessment: 3-5 days. Payout: 5-10 days after approval.
          </p>
        </section>

        <section id="neptune">
          <h2 style={h2Style}>Neptune Mutual: Parametric Claims</h2>
          <p style={{ fontSize: 15, color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            Parametric insurance: automatic payout if protocol experiences confirmed loss &gt;$X. No voting, no assessment delay. Example: "Curve cover: if Curve suffers hack causing &gt;$10M loss, Neptune pays $1K per claim within 24-48 hours." Premiums: 1-2% (lower due to parameter risk: if hack &lt;$10M threshold, no payout). Claim speed: 1-3 days (fastest).
          </p>
          <h3 style={h3Style}>Parametric vs. Traditional</h3>
          <p style={{ fontSize: 15, color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            Traditional (Nexus, InsurAce): pay actual loss amount, but slow (2-3 weeks). Parametric (Neptune): pay fixed amount fast (1-3 days), but may underpay if threshold barely hit. Trade-off: speed vs. coverage accuracy.
          </p>
        </section>

        <section id="unslashed">
          <h2 style={h2Style}>Unslashed: Keeper Network</h2>
          <p style={{ fontSize: 15, color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            Decentralized claims validation: keepers (incentivized nodes) verify hacks and validate claims. Premiums: 0.3-1.5% (lowest). Payout speed: 1-5 days. Model: KP3R staking required for underwriting. Smaller pools ($10M-$50M per protocol) vs. Nexus ($500M). Best for: budget-conscious users seeking decentralized validation.
          </p>
        </section>

        <section id="comparison">
          <h2 style={h2Style}>Comparison Table</h2>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Protocol</th>
                <th style={thStyle}>Cover Capacity</th>
                <th style={thStyle}>Premium Range</th>
                <th style={thStyle}>Claim Speed</th>
                <th style={thStyle}>Max Payout</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>Nexus Mutual</td>
                <td style={tdStyle}>$500M+</td>
                <td style={tdStyle}>0.5-3%</td>
                <td style={tdStyle}>10-21 days</td>
                <td style={tdStyle}>$50M-$200M/protocol</td>
              </tr>
              <tr>
                <td style={tdStyle}>InsurAce</td>
                <td style={tdStyle}>$200M+</td>
                <td style={tdStyle}>0.8-2.5%</td>
                <td style={tdStyle}>8-15 days</td>
                <td style={tdStyle}>$5M-$50M/protocol</td>
              </tr>
              <tr>
                <td style={tdStyle}>Neptune Mutual</td>
                <td style={tdStyle}>$100M+</td>
                <td style={tdStyle}>1-2%</td>
                <td style={tdStyle}>1-3 days</td>
                <td style={tdStyle}>Parametric ($1K-$10K/claim)</td>
              </tr>
              <tr>
                <td style={tdStyle}>Unslashed</td>
                <td style={tdStyle}>$50M</td>
                <td style={tdStyle}>0.3-1.5%</td>
                <td style={tdStyle}>1-5 days</td>
                <td style={tdStyle}>$1M-$10M/pool</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="claims-process">
          <h2 style={h2Style}>Claims Process Walkthrough</h2>
          <h3 style={h3Style}>Nexus Mutual Claim Example</h3>
          <p style={{ fontSize: 15, color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            Day 1: Curve exploited, $61M lost. You file Nexus claim, attach etherscan evidence. Day 2-3: Nexus assesses legitimacy (confirms exploit occurred). Day 4-14: Members vote (7-14 days voting period). Day 15: Vote passes, claim approved. Day 16-18: Payout processed to your wallet. Total: 15-18 days. Funds locked during vote period.
          </p>
          <h3 style={h3Style}>InsurAce Claim Example</h3>
          <p style={{ fontSize: 15, color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            Day 1: Exploit occurs. File claim. Day 2-4: Underwriters assess (faster than member voting). Day 5: Decision made. Day 6-10: Payout processing. Total: 9-10 days. Faster than Nexus.
          </p>
          <h3 style={h3Style}>Neptune Mutual Claim Example</h3>
          <p style={{ fontSize: 15, color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            Day 1: Curve loses $61M. Neptune monitors on-chain (automatic). Day 1-2: Threshold confirmed ($61M &gt; $10M parameter). Day 2: Claim auto-approved. Day 3: Payout to your wallet. Total: 2-3 days. Fastest, but payout fixed (doesn&apos;t scale with loss).
          </p>
        </section>

        <section id="faq">
          <h2 style={h2Style}>FAQ</h2>
          <div style={infoBoxStyle}>
            <h3 style={h3Style}>Is DeFi hack insurance worth it?</h3>
            <p style={{ fontSize: 15, color: '#8b949e', lineHeight: 1.8 }}>
              Depends on capital size and risk tolerance. Small deposits (&lt;$10K): avoid insurance (premium ~0.5-2% annually costs $50-200 on small capital). Medium ($10K-$100K): consider Nexus Mutual (1-3% premium = $100-3,000 annually for peace of mind). Large (&gt;$100K): definitely insure (hackers target large pools; 5-10% loss with 1% premium is hedge). Insurance pays only after hack proven; claims take 2-8 weeks.
            </p>
          </div>
          <div style={infoBoxStyle}>
            <h3 style={h3Style}>How do DeFi insurance claims work?</h3>
            <p style={{ fontSize: 15, color: '#8b949e', lineHeight: 1.8 }}>
              Nexus Mutual: member voting on hack legitimacy (7-14 days). InsurAce: claims assessment by underwriters (3-7 days). Neptune Mutual: parametric (automatic payout if protocol loses &gt;$X liquidated, 24-48 hours). Unslashed: keeper network validates claims (1-3 days). Proof required: on-chain evidence, etherscan records, protocol communication. False claims = rejected, premium lost.
            </p>
          </div>
          <div style={infoBoxStyle}>
            <h3 style={h3Style}>What is the maximum payout?</h3>
            <p style={{ fontSize: 15, color: '#8b949e', lineHeight: 1.8 }}>
              Nexus Mutual: $500M+ active cover capacity, per-protocol caps ($50M-$200M). InsurAce: $200M reserves, per-protocol limits. Neptune Mutual: parametric caps (e.g., $10M for Curve hack). Unslashed: smaller pools ($10M-$50M per pool). If hack exceeds protocol cap, payout pro-rated (you get percentage of cap). Never covers 100% of loss; max 80-90%.
            </p>
          </div>
          <div style={infoBoxStyle}>
            <h3 style={h3Style}>What types of hacks are covered?</h3>
            <p style={{ fontSize: 15, color: '#8b949e', lineHeight: 1.8 }}>
              Covered: smart contract bugs (reentrancy, overflow), exploits, rugpull claims. NOT covered: rug pulls by known devs, user error (sending to wrong address), impermanent loss (not a hack), price oracle failure (protocol&apos;s problem, not hack). Nexus Mutual most inclusive; Neptune Mutual most restrictive (only parametric hacks meeting strict conditions).
            </p>
          </div>
          <div style={infoBoxStyle}>
            <h3 style={h3Style}>What are insurance premiums in 2026?</h3>
            <p style={{ fontSize: 15, color: '#8b949e', lineHeight: 1.8 }}>
              Nexus Mutual: 0.5-3% annually (varies by protocol risk). Curve 0.5%, Aave 1%, new protocols 2-3%. InsurAce: 0.8-2.5%. Neptune Mutual: 1-2% (parametric, lower risk). Unslashed: 0.3-1.5% (KP3R staking required). Most provide discount for long-term coverage (pay 6 months upfront, get 10-15% reduction).
            </p>
          </div>
          <div style={infoBoxStyle}>
            <h3 style={h3Style}>Which insurance should I choose?</h3>
            <p style={{ fontSize: 15, color: '#8b949e', lineHeight: 1.8 }}>
              Nexus Mutual for flexibility + largest cover pool ($500M). InsurAce for multi-protocol coverage. Neptune Mutual for low-cost parametric. Unslashed for keeper-based decentralization. Hybrid: split coverage across 2 platforms (Nexus + Neptune) diversifies claim risk. Most users: 50% Nexus, 50% Neptune balances cost + coverage.
            </p>
          </div>
        </section>

        <div style={{ ...infoBoxStyle, marginTop: 48, fontSize: 13, color: '#8b949e' }}>
          <strong>Disclaimer:</strong> This content is for informational purposes only and is not investment, insurance, or financial advice. DeFi hack insurance does not cover all risk types and claim approval varies by protocol. Claims processing takes 1-3 weeks minimum. Past hack frequency does not guarantee future claims will be approved. Payouts may be pro-rated if claim volume exceeds protocol capacity. Do your own research (DYOR) and read insurance terms carefully before purchasing. Consult a licensed insurance advisor for personalized recommendations.
        </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "DeFi Hack Insurance Comparison 2026 | Nexus Mutual,", "description": "DeFi hack insurance: Nexus Mutual exploit cover, InsurAce protection, Neptune Mutual parametric claims, Unslashed. Compare coverage, payouts, claim speed,", "url": "https://degen0x.com/insurance/defi-hack-insurance-comparison", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
</div>
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: "24px", background: "#161b22", border: "1px solid #30363d", borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>Continue Reading</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
            <li><Link href="/wallets/best-wallet-for-airdrop-farming" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Best Wallet For Airdrop Farming</Link></li>
            <li><Link href="/wallets/account-abstraction-wallet-guide" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Account Abstraction Wallet</Link></li>
            <li><Link href="/wallets/backpack-wallet-complete-guide" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Backpack Wallet Complete</Link></li>
            <li><Link href="/wallets/best-bitcoin-only-wallet" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Best Bitcoin Only Wallet</Link></li>
          </ul>
        </nav>

</article>
  );
}
