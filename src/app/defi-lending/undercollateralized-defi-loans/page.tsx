import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: 'Undercollateralized DeFi Loans Guide 2026: Maple, Goldfinch, TrueFi | degen0x',
  description: 'Complete guide to undercollateralized lending: Maple (8-12% APY), Goldfinch (10-20% APY), TrueFi. Enterprise credit on-chain with higher yields and default risks.',
  keywords: ['undercollateralized loans', 'Maple Finance', 'Goldfinch', 'TrueFi', 'credit risk', 'DeFi lending', 'enterprise loans'],
  openGraph: {
    type: 'article',
    title: 'Undercollateralized DeFi Loans Guide 2026',
    description: 'Undercollateralized lending: Maple, Goldfinch, TrueFi with 8-20% yields, credit risk management, and diversification strategies.',
    publishedTime: '2026-04-11T00:00:00Z',
    modifiedTime: '2026-04-11T00:00:00Z',
    url: 'https://degen0x.com/defi-lending/undercollateralized-defi-loans',
    images: [{ url: 'https://degen0x.com/og-undercollateralized-loans.svg', width: 1200, height: 630, alt: 'Undercollateralized Loans' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Undercollateralized DeFi Loans Guide 2026',
    description: 'Undercollateralized lending: Maple (institutional), Goldfinch (emerging markets), TrueFi. Higher yields, real default risk.',
    image: 'https://degen0x.com/og-undercollateralized-loans.svg',
  },
  alternates: {
    canonical: 'https://degen0x.com/defi-lending/undercollateralized-defi-loans',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Undercollateralized DeFi Loans Guide 2026: Maple, Goldfinch, TrueFi',
  description: 'Complete guide to undercollateralized lending protocols with credit risk analysis, yield comparison, and portfolio diversification.',
  image: 'https://degen0x.com/og-undercollateralized-loans.svg',
  datePublished: '2026-04-11',
  dateModified: '2026-04-11',
  author: { '@type': 'Organization', name: 'degen0x' },
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is undercollateralized lending?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Loans where collateral is less than borrow amount, or absent entirely. Enabled by credit scoring and off-chain underwriting. Maple: institutional lending, 8-12% yields. Goldfinch: emerging market SMEs, 10-20% yields. TrueFi: reputation-based, 6-10% yields.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do they assess creditworthiness?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Off-chain underwriting combined with on-chain verification. Maple: credit committees evaluate institutional borrowers. Goldfinch: verified borrowers with on-chain history. TrueFi: reputation scores built from prior loan performance. Higher transparency than traditional finance.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are typical yields?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Maple: 8-12% APY on USDC lending to institutions (lower default risk). Goldfinch: 10-20% on emerging market loans (higher risk/reward). TrueFi: 6-10% depending on loan term. Yields directly reflect credit risk premium.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the default risk?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Significant. Borrowers may default, leaving lenders with losses. Maple uses insurance pools; Goldfinch uses insurance. Historical default rates: Goldfinch ~5-10%, Maple <2% (institutional quality). Insurance may not cover all losses.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which platform is safest?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Maple: institutional borrowers, lowest default risk. Goldfinch: emerging markets, higher risk/reward. TrueFi: balanced, reputation-based. All carry default risk. Start with Maple for stability, Goldfinch for yield.',
        },
      },
      {
        '@type': 'Question',
        name: 'How should I diversify?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Suggested: 10% undercollateralized (Maple/Goldfinch), 70% overcollateralized (Aave/Compound), 20% stablecoins/cash. This balances yield (undercollateralized) with capital preservation (overcollateralized). Rebalance quarterly.',
        },
      },
    ],
  },
};

export default function UndercollateralizedDefiLoansGuide() {
  const infoBoxStyle = {
    background: '#161b22',
    border: '1px solid #30363d', borderLeft: '3px solid #c084fc', borderLeft: '3px solid #c084fc',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    lineHeight: 1.8,
  };

  const h1Style = {
    fontSize: 36,
    fontWeight: 800,
    marginBottom: 16,
    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const h2Style = {
    fontSize: 24,
    fontWeight: 700,
    marginTop: 40,
    marginBottom: 16,
    color: '#c084fc', borderBottom: '2px solid #3b1f5e', paddingBottom: 12,
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

  const linkStyle = {
    color: '#58a6ff',
    textDecoration: 'none',
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

  return (
    <article id="top" style={{ background: '#0d1117', color: '#e6edf3', minHeight: '100vh', padding: '40px 20px', scrollBehavior: 'smooth' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <nav aria-label="Breadcrumb" style={{ marginBottom: 20, fontSize: 13, color: '#8b949e' }}>
          <Link href="/" style={{ color: '#8b949e', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <Link href="/defi-lending" style={{ color: '#8b949e', textDecoration: 'none' }}>DeFi Lending</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <span style={{ color: '#c9d1d9' }}>Undercollateralized Loans</span>
        </nav>

        <div style={{ marginBottom: 32 }}>
          <div>
            <span style={{ ...badgeStyle, background: '#6366f1', color: '#fff' }}>DeFi Lending</span>
            <span style={{ ...badgeStyle, background: '#3d444d', color: '#e6edf3' }}>Advanced</span>
          </div>

          <h1 style={h1Style}>Undercollateralized Loans 2026</h1>

          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 20 }}>
            Undercollateralized lending brings traditional credit on-chain. Maple, Goldfinch, and TrueFi offer higher yields (8-20%) by replacing collateral with credit scoring and underwriting. This guide explains platforms, yield profiles, credit risk, and how to diversify safely across institutional (Maple), emerging market (Goldfinch), and reputation-based (TrueFi) lending.
          </p>

          <div style={{ display: 'flex', gap: 24, fontSize: 14, color: '#8b949e', marginBottom: 24 }}>
            <span>Updated: April 11, 2026</span>
            <span>Reading time: 13 min</span>
          </div>
        </div>

        <AuthorAttribution
          author="SatoshiGhost"
          role="Lead Researcher"
          publishedDate="2026-04-11"
          updatedDate="2026-04-11"
          readingTime={13}
          section="defi-lending"
        />


        <section id="intro" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>1. Undercollateralized Lending: The Concept</h2>

          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Traditional DeFi (Aave, Compound) requires 120-200% collateral (borrow $100, lock $200-250). Undercollateralized protocols reduce this via credit analysis. Maple: institutional underwriting (near-zero default). Goldfinch: emerging market SMEs (5-10% default). TrueFi: reputation scores (1-3% default typical).
          </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a0f2e', border: '1px solid #3b1f5e', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>⚠️</span>
            <strong style={{ color: '#c084fc', fontSize: 15 }}>Risk Assessment</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            Our DeFi researchers monitor governance proposals and treasury health, not just headline rates. A protocol's governance decisions reveal more than its TVL.
          </p>
        </div>

          <p style={{ marginBottom: 24, lineHeight: 1.8 }}>
            Undercollateralization trades simplicity for yield and risk. Borrow $100 with $50-100 collateral (vs $200+). Earn higher yields as return for accepting default risk. This is closer to traditional banking: credit drives economics, not collateral.
          </p>

          <div style={infoBoxStyle}>
            <strong style={{ color: '#e6edf3' }}>Risk-Yield Tradeoff</strong>
            <p style={{ marginTop: 12, marginBottom: 0, fontSize: 14 }}>
              Overcollateralized (Aave): 5-6% yield, 0% default risk (collateral-backed). Undercollateralized (Maple): 10-12% yield, &lt;2% default risk (institutional quality). Emerging markets (Goldfinch): 15-20% yield, 5-10% default risk. Choose allocation based on risk tolerance.
            </p>
          </div>
        </section>

        <section id="maple" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>2. Maple Finance: Institutional Lending</h2>

          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Maple is institutional-grade lending. Borrowers are vetted companies, hedge funds, proprietary traders. Yields: 8-12% APY on USDC. TVL: $500M+ growing. Default rate: &lt;2% historically (excellent for credit). Insurance exists but insufficient for total loss.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginTop: 20, marginBottom: 12, color: '#e6edf3' }}>Maple Pools</h3>
          <ul style={{ marginLeft: 20, marginBottom: 16, lineHeight: 1.8 }}>
            <li>Institutional Pool 1: 10-12% APY, established lenders (Genesis, Macroaxis), low default risk</li>
            <li>Institutional Pool 2: 9-11% APY, mid-tier borrowers, moderate risk</li>
            <li>Emerging Pool: 8-10% APY, newer borrowers, slightly higher risk</li>
          </ul>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginTop: 20, marginBottom: 12, color: '#e6edf3' }}>Maple Strengths</h3>
          <ul style={{ marginLeft: 20, marginBottom: 24, lineHeight: 1.8 }}>
            <li>Vetted borrowers: credit committees evaluate each applicant</li>
            <li>Transparent terms: loan duration, interest rate, collateral posted on-chain</li>
            <li>Insurance pools: Arch insurance covers partial losses</li>
            <li>Governance: MAPLtoken holders vote on new pools, risk parameters</li>
          </ul>

          <div style={infoBoxStyle}>
            <strong style={{ color: '#e6edf3' }}>Best For: Maple</strong>
            <p style={{ marginTop: 12, marginBottom: 0, fontSize: 14 }}>
              Conservative yield seekers. Institutional quality borrowers minimize default risk. Suitable for 10-20% portfolio allocation to gain yield premium over Aave without excessive risk.
            </p>
          </div>
        </section>

        <section id="goldfinch" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>3. Goldfinch: Emerging Market SMEs</h2>

          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Goldfinch brings credit to emerging markets. Borrowers are small/medium businesses in developing countries (Africa, SE Asia, Latin America). Yields: 12-20% APY reflecting higher credit risk. TVL: $200M+. Default rate: 5-10% historically (expected for frontier markets).
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginTop: 20, marginBottom: 12, color: '#e6edf3' }}>Goldfinch Structure</h3>
          <ul style={{ marginLeft: 20, marginBottom: 16, lineHeight: 1.8 }}>
            <li>Verified borrowers: local partners verify business, collateral, ability to repay</li>
            <li>Underwritten loans: $100K-$1M+ per borrower typical</li>
            <li>Investor tiers: senior (lower yield, lower risk), junior (higher yield, higher risk)</li>
            <li>GFI rewards: governance token (GFI) given to senior + junior investors</li>
          </ul>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginTop: 20, marginBottom: 12, color: '#e6edf3' }}>Goldfinch Risks</h3>
          <ul style={{ marginLeft: 20, marginBottom: 24, lineHeight: 1.8 }}>
            <li>Default risk: 5-10% of borrowers default annually. Insurance pools may deplete.</li>
            <li>FX risk: borrowers repay in local currency; exchange rate fluctuations matter</li>
            <li>Liquidity: no secondary market; locked until loan maturity</li>
            <li>Counterparty risk: relies on local partner verification (not 100% trustless)</li>
          </ul>

          <div style={infoBoxStyle}>
            <strong style={{ color: '#e6edf3' }}>Best For: Goldfinch</strong>
            <p style={{ marginTop: 12, marginBottom: 0, fontSize: 14 }}>
              Risk-tolerant yield chasers. High yields justify credit risk. Impact investors wanting social good (SME lending in emerging markets). Limit to 5-10% portfolio maximum (concentrated risk).
            </p>
          </div>
        </section>

        <section id="truefi" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>4. TrueFi: Reputation-Based Lending</h2>

          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            TrueFi uses on-chain reputation scores instead of collateral. Borrowers build track records through prior loans. TRU token holders vote on approvals. Yields: 6-10% depending on loan term. TVL: $100M+. Default rate: low (1-3%) due to reputation incentives.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginTop: 20, marginBottom: 12, color: '#e6edf3' }}>TrueFi Features</h3>
          <ul style={{ marginLeft: 20, marginBottom: 16, lineHeight: 1.8 }}>
            <li>Creditless model: no collateral required; trust reputation</li>
            <li>On-chain history: all loans, defaults, repayments transparent</li>
            <li>TRU staking: governance token holders risk capital on approvals</li>
            <li>Underwriting: off-chain due diligence combined with on-chain scoring</li>
          </ul>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginTop: 20, marginBottom: 12, color: '#e6edf3' }}>TrueFi Mechanics</h3>
          <p style={{ marginBottom: 24, lineHeight: 1.8 }}>
            Borrower: applies for loan, background checked off-chain. TRU holders vote. If approved, loan issued. Borrower pledges reputation (if they default, on-chain history shows it forever). Lenders earn yield. If default occurs, TRU stakers who approved suffer slashing. This game theory incentivizes careful underwriting.
          </p>

          <div style={infoBoxStyle}>
            <strong style={{ color: '#e6edf3' }}>Best For: TrueFi</strong>
            <p style={{ marginTop: 12, marginBottom: 0, fontSize: 14 }}>
              Balanced risk seekers. Reputation incentives create lower default rates than Goldfinch. Higher yield than Maple without same institutional quality. Suitable for 5-15% portfolio allocation.
            </p>
          </div>
        </section>

        <section id="comparison" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>5. Platform Comparison Table</h2>

          <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', marginBottom: 24 }}>
            <table style={tableStyle} aria-label="Undercollateralized Platform Comparison">
              <thead>
                <tr>
                  <th style={thStyle} scope="col">Platform</th>
                  <th style={thStyle} scope="col">Yield</th>
                  <th style={thStyle} scope="col">Default Risk</th>
                  <th style={thStyle} scope="col">TVL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tdStyle}><strong>Maple</strong></td>
                  <td style={tdStyle}>8-12%</td>
                  <td style={tdStyle}>&lt;2% (institutional)</td>
                  <td style={tdStyle}>$500M+</td>
                </tr>
                <tr>
                  <td style={tdStyle}><strong>Goldfinch</strong></td>
                  <td style={tdStyle}>12-20%</td>
                  <td style={tdStyle}>5-10% (frontier)</td>
                  <td style={tdStyle}>$200M+</td>
                </tr>
                <tr>
                  <td style={tdStyle}><strong>TrueFi</strong></td>
                  <td style={tdStyle}>6-10%</td>
                  <td style={tdStyle}>1-3% (reputation)</td>
                  <td style={tdStyle}>$100M+</td>
                </tr>
                <tr>
                  <td style={tdStyle}><strong>Aave (overcollateral)</strong></td>
                  <td style={tdStyle}>5-6%</td>
                  <td style={tdStyle}>0% (collateral-backed)</td>
                  <td style={tdStyle}>$10B+</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ marginBottom: 24, lineHeight: 1.8 }}>
            Maple: best for low-risk + moderate yield. Goldfinch: best for high yield (accept default risk). TrueFi: balanced between yield and safety. Aave: lowest yield but zero default risk. Choose allocation based on risk appetite.
          </p>
        </section>

        <section id="strategy" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>6. Diversification Strategy</h2>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginTop: 20, marginBottom: 12, color: '#e6edf3' }}>Conservative Portfolio</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            90% Aave/Compound (overcollateralized): 5% yield, 0% default risk. 10% Maple (institutional): 10% yield, &lt;2% risk. Blended: ~5.5% yield, minimal risk. Suitable for risk-averse investors prioritizing capital preservation.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginTop: 20, marginBottom: 12, color: '#e6edf3' }}>Balanced Portfolio</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            60% Aave (5%). 20% Maple (10%). 15% TrueFi (8%). 5% Goldfinch (15%). Blended: ~6.75% yield, diversified risk. Maple + TrueFi spread credit risk. Goldfinch small allocation (5%) for high-yield exposure without concentration.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginTop: 20, marginBottom: 12, color: '#e6edf3' }}>Aggressive Portfolio</h3>
          <p style={{ marginBottom: 24, lineHeight: 1.8 }}>
            40% Aave (5%). 20% Maple (10%). 20% TrueFi (8%). 20% Goldfinch (15%). Blended: ~9% yield, moderate-to-high risk. Heavy Goldfinch allocation (20%) for yield. Sufficient Aave (40%) to cushion defaults. Only for experienced, risk-tolerant investors.
          </p>

          <div style={infoBoxStyle}>
            <strong style={{ color: '#e6edf3' }}>Universal Rule</strong>
            <p style={{ marginTop: 12, marginBottom: 0, fontSize: 14 }}>
              Never allocate &gt;20% of portfolio to undercollateralized lending. Even with diversification, credit risk is real. Keep 60-70% in overcollateralized (Aave), 10-20% in undercollateralized (Maple/TrueFi/Goldfinch), 10-20% cash/stables. Rebalance quarterly.
            </p>
          </div>
        </section>

        <section id="faq" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>7. Frequently Asked Questions</h2>

          <details style={{ marginBottom: 16, background: '#161b22', border: '1px solid #30363d', borderRadius: 12, padding: '0 20px' }}>
            <summary style={{ padding: '16px 0', cursor: 'pointer', fontWeight: 600, color: '#e6edf3', fontSize: 16, listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              What is undercollateralized lending?
              <span style={{ fontSize: 20, color: '#8b949e' }}>+</span>
            </summary>
            <p style={{ paddingBottom: 16, lineHeight: 1.8, color: '#8b949e', marginTop: 0 }}>
              Loans where collateral is &lt;100% of borrow amount, or absent. Enabled by credit scoring and underwriting. Maple: institutional lending, 8-12% yield. Goldfinch: emerging market SMEs, 12-20%. TrueFi: reputation-based, 6-10%.
            </p>
          </details>

          <details style={{ marginBottom: 16, background: '#161b22', border: '1px solid #30363d', borderRadius: 12, padding: '0 20px' }}>
            <summary style={{ padding: '16px 0', cursor: 'pointer', fontWeight: 600, color: '#e6edf3', fontSize: 16, listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              How do they assess creditworthiness?
              <span style={{ fontSize: 20, color: '#8b949e' }}>+</span>
            </summary>
            <p style={{ paddingBottom: 16, lineHeight: 1.8, color: '#8b949e', marginTop: 0 }}>
              Off-chain underwriting + on-chain verification. Maple: credit committees evaluate institutions. Goldfinch: partner verification. TrueFi: reputation scores from prior loans. Higher transparency than traditional banking.
            </p>
          </details>

          <details style={{ marginBottom: 16, background: '#161b22', border: '1px solid #30363d', borderRadius: 12, padding: '0 20px' }}>
            <summary style={{ padding: '16px 0', cursor: 'pointer', fontWeight: 600, color: '#e6edf3', fontSize: 16, listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              What yields do they offer?
              <span style={{ fontSize: 20, color: '#8b949e' }}>+</span>
            </summary>
            <p style={{ paddingBottom: 16, lineHeight: 1.8, color: '#8b949e', marginTop: 0 }}>
              Maple: 8-12%. Goldfinch: 10-20%. TrueFi: 6-10%. Higher yields = higher credit risk. Aave (overcollateralized): 5-6% for comparison. Yield premium compensates for default risk.
            </p>
          </details>

          <details style={{ marginBottom: 16, background: '#161b22', border: '1px solid #30363d', borderRadius: 12, padding: '0 20px' }}>
            <summary style={{ padding: '16px 0', cursor: 'pointer', fontWeight: 600, color: '#e6edf3', fontSize: 16, listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              What is the default risk?
              <span style={{ fontSize: 20, color: '#8b949e' }}>+</span>
            </summary>
            <p style={{ paddingBottom: 16, lineHeight: 1.8, color: '#8b949e', marginTop: 0 }}>
              Significant. Maple: &lt;2% (institutional quality). TrueFi: 1-3% (reputation-based). Goldfinch: 5-10% (emerging markets). Insurance pools may deplete. Never allocate &gt;20% of portfolio.
            </p>
          </details>

          <details style={{ marginBottom: 16, background: '#161b22', border: '1px solid #30363d', borderRadius: 12, padding: '0 20px' }}>
            <summary style={{ padding: '16px 0', cursor: 'pointer', fontWeight: 600, color: '#e6edf3', fontSize: 16, listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              Which is safest?
              <span style={{ fontSize: 20, color: '#8b949e' }}>+</span>
            </summary>
            <p style={{ paddingBottom: 16, lineHeight: 1.8, color: '#8b949e', marginTop: 0 }}>
              Maple: institutional borrowers, lowest risk. TrueFi: reputation-based, balanced. Goldfinch: emerging markets, highest risk. All carry default risk. Start with Maple; scale to others gradually.
            </p>
          </details>

          <details style={{ marginBottom: 16, background: '#161b22', border: '1px solid #30363d', borderRadius: 12, padding: '0 20px' }}>
            <summary style={{ padding: '16px 0', cursor: 'pointer', fontWeight: 600, color: '#e6edf3', fontSize: 16, listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              How do I diversify?
              <span style={{ fontSize: 20, color: '#8b949e' }}>+</span>
            </summary>
            <p style={{ paddingBottom: 16, lineHeight: 1.8, color: '#8b949e', marginTop: 0 }}>
              Balanced: 60% Aave, 20% Maple, 15% TrueFi, 5% Goldfinch. Keep 60-70% overcollateralized. Never &gt;20% in undercollateralized. Rebalance quarterly. Monitor defaults.
            </p>
          </details>
        </section>

        <section style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid #30363d' }}>
          <h2 style={h2Style}>Related Reading</h2>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: 32 }}>
            <li style={{ marginBottom: 12 }}>
              <Link href="/defi-lending/overcollateralized-crypto-loan-guide" style={linkStyle}>
                Overcollateralized Loans: Safety & Liquidation Risk →
              </Link>
            </li>
            <li style={{ marginBottom: 12 }}>
              <Link href="/defi-lending/cefi-vs-defi-lending-comparison" style={linkStyle}>
                CeFi vs DeFi Lending Comparison →
              </Link>
            </li>
            <li style={{ marginBottom: 12 }}>
              <Link href="/defi-lending/kamino-finance-solana-lending" style={linkStyle}>
                Kamino Finance: Solana Yield Optimization →
              </Link>
            </li>
          </ul>
        </section>

        <section style={{ marginTop: 32, padding: 20, background: '#161b22', border: '1px solid #30363d', borderRadius: 12, fontSize: 13, color: '#8b949e' }}>
          <strong style={{ color: '#e6edf3' }}>Disclaimer</strong>
          <p style={{ marginTop: 12, marginBottom: 0, lineHeight: 1.6 }}>
            This guide is for educational purposes and not investment or financial advice. Undercollateralized lending carries significant credit risk. Borrowers may default; insurance pools may deplete. Past performance (defaults &lt;5%) doesn&apos;t guarantee future results. Always conduct thorough research, start with small amounts, diversify across platforms, and consult a financial advisor before committing significant capital. degen0x is not liable for platform losses, defaults, or market volatility.
          </p>
        </section>
      </div>
    
        {/* section-footer */}
        <div style={{ background: '#1a0f2e', border: '1px solid #3b1f5e', borderRadius: 8, padding: '16px 20px', marginTop: 40, marginBottom: 20 }}>
          <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: '#c084fc' }}>DeFi risk warning:</strong> Lending protocols carry smart contract risk, liquidation risk, and oracle risk.
            APY figures fluctuate constantly — verify current rates on-chain before depositing. Read our <a href="/methodology" style={{ color: '#c084fc' }}>protocol evaluation framework</a>.
          </p>
        </div>
      
        {/* section-footer */}
        <div style={{ background: '#1a0f2e', border: '1px solid #3b1f5e', borderRadius: 8, padding: '16px 20px', marginTop: 40, marginBottom: 20 }}>
          <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: '#c084fc' }}>DeFi risk warning:</strong> Lending protocols carry smart contract risk, liquidation risk, and oracle risk.
            APY figures fluctuate constantly — verify current rates on-chain before depositing. Read our <a href="/methodology" style={{ color: '#c084fc' }}>protocol evaluation framework</a>.
          </p>
        </div>
      </article>
  );
}
