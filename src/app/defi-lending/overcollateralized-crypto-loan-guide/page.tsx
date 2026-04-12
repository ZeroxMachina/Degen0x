import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: 'Overcollateralized Crypto Loans Guide 2026: LTV, Health Factor, Liquidation | degen0x',
  description: 'Master overcollateralized DeFi lending: understand LTV ratios, health factors, liquidation mechanics, and risk management for safe borrowing on Aave, Compound, and Morpho.',
  keywords: ['overcollateralized loans', 'LTV', 'health factor', 'liquidation', 'collateral ratio', 'DeFi borrowing', 'Aave', 'Compound'],
  openGraph: {
    type: 'article',
    title: 'Overcollateralized Crypto Loans Guide 2026',
    description: 'Complete guide to overcollateralized lending: LTV mechanics, health factor monitoring, liquidation triggers, and risk management strategies.',
    publishedTime: '2026-04-11T00:00:00Z',
    modifiedTime: '2026-04-11T00:00:00Z',
    url: 'https://degen0x.com/defi-lending/overcollateralized-crypto-loan-guide',
    images: [{ url: 'https://degen0x.com/og-overcollateralized-loans.svg', width: 1200, height: 630, alt: 'Overcollateralized Loans' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Overcollateralized Crypto Loans Guide 2026',
    description: 'Overcollateralized lending: LTV ratios, health factors, liquidation triggers, and safe DeFi borrowing strategies.',
    image: 'https://degen0x.com/og-overcollateralized-loans.svg',
  },
,
  alternates: {
    canonical: 'https://degen0x.com/defi-lending/overcollateralized-crypto-loan-guide',
  }};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Overcollateralized Crypto Loans Guide 2026: LTV, Health Factor, Liquidation',
  description: 'Complete guide to overcollateralized lending mechanics with LTV mechanics, health factor calculations, liquidation triggers, and risk management.',
  image: 'https://degen0x.com/og-overcollateralized-loans.svg',
  datePublished: '2026-04-11',
  dateModified: '2026-04-11',
  author: { '@type': 'Organization', name: 'degen0x' },
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is LTV (Loan-to-Value)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'LTV = borrow amount / collateral value. 50% LTV means borrow $50 per $100 collateral. Higher LTV increases leverage and risk. ETH: max 83% LTV. BTC: max 75%. USDC: max 100%. Standard safe LTV: 50-60%. Conservative: <40%.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does liquidation work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'When collateral value falls, health factor drops. At health factor 1.0, liquidators can repay your debt and buy collateral at 5-10% discount. You lose both the collateral and the debt repayment, resulting in capital loss. Example: $1000 ETH → $600 ETH + liquidation = ~$500 net loss.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is health factor?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Health Factor = (collateral value × LTV) / total debt. >2.0 = safe. 1.5-2.0 = caution zone. 1.0-1.5 = danger zone. <1.0 = liquidation active. Monitor daily for leveraged positions. Automated tools can trigger liquidation alerts.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I get liquidated?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, if health factor <1.0. Liquidators are incentivized to monitor; once triggered, automated process repays debt + captures collateral discount. Avoid by maintaining HF >1.5. Use price alerts to monitor collateral value.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is liquidation threshold?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Liquidation threshold = max LTV at liquidation trigger. Usually 10-15% above standard LTV. Example: 50% LTV, 60% threshold. Borrowing at 50% is safe; liquidation triggers at 60% threshold when collateral falls.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I avoid liquidation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Monitor health factor daily. Maintain HF >1.5. Use diversified collateral. Keep borrow low relative to collateral (40-50% max LTV). Set price alerts ($5K drops on ETH, etc.). Repay debt or add collateral when HF approaches 1.2. Never borrow max LTV.',
        },
      },
    ],
  },
};

export default function OvercollateralizedCryptoLoansGuide() {
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

  return (
    <article id="top" style={{ background: '#0d1117', color: '#e6edf3', minHeight: '100vh', padding: '40px 20px', scrollBehavior: 'smooth' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <nav aria-label="Breadcrumb" style={{ marginBottom: 20, fontSize: 13, color: '#8b949e' }}>
          <Link href="/" style={{ color: '#8b949e', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <Link href="/defi-lending" style={{ color: '#8b949e', textDecoration: 'none' }}>DeFi Lending</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <span style={{ color: '#c9d1d9' }}>Overcollateralized Loans</span>
        </nav>

        <div style={{ marginBottom: 32 }}>
          <div>
            <span style={{ ...badgeStyle, background: '#6366f1', color: '#fff' }}>DeFi Lending</span>
            <span style={{ ...badgeStyle, background: '#3d444d', color: '#e6edf3' }}>Beginner-Intermediate</span>
          </div>

          <h1 style={h1Style}>Overcollateralized Loans Guide 2026</h1>

          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 20 }}>
            Overcollateralized lending is DeFi&apos;s safest borrowing model. This guide explains LTV (Loan-to-Value) mechanics, health factor calculations, liquidation triggers, and how to borrow safely on Aave, Compound, and Morpho. Master these concepts to avoid liquidation and maximize leverage without ruin.
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
          <h2 style={h2Style}>1. Overcollateralization: The Core Concept</h2>

          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            You deposit collateral (ETH, BTC, USDC). You borrow less value than deposited. Example: deposit $10,000 ETH, borrow $5,000 USDC. The $5,000 gap is the safety margin. If ETH drops 40%, you&apos;re still solvent. If ETH drops 60%, you get liquidated. This model protects lenders (their funds are safe) and borrowers (you keep excess collateral).
          </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a0f2e', border: '1px solid #3b1f5e', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>⚠️</span>
            <strong style={{ color: '#c084fc', fontSize: 15 }}>Risk Assessment</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            APY is the bait, but smart contract risk is the hook. We prioritize protocols with multiple independent audits and active bug bounty programs.
          </p>
        </div>

          <p style={{ marginBottom: 24, lineHeight: 1.8 }}>
            Overcollateralization is fundamental to DeFi lending. It prevents bad debt and cascade failures. The tradeoff: you must lock up capital to borrow. Borrow $100, lock $200-250. This is inefficient vs traditional banking (where you borrow 100% of asset value) but necessary for trustlessness.
          </p>
        </section>

        <section id="ltv" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>2. LTV Explained: Loan-to-Value Ratio</h2>

          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            LTV = borrow amount / collateral value. 50% LTV means borrow $50 per $100 collateral. Each asset has different max LTV based on volatility. Stable assets (USDC, USDT) have higher LTV (100%, meaning borrow up to face value). Volatile assets (ETH, BTC) have lower LTV (75-83% max).
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginTop: 20, marginBottom: 12, color: '#e6edf3' }}>LTV by Asset Type (Aave April 2026)</h3>
          <ul style={{ marginLeft: 20, marginBottom: 16, lineHeight: 1.8 }}>
            <li>ETH: 83% max LTV (low volatility for major assets)</li>
            <li>wBTC: 75% max LTV</li>
            <li>Stablecoin (USDC, USDT): 100% max LTV</li>
            <li>Altcoins (SOL, MATIC): 50-60% max LTV (higher volatility)</li>
            <li>Risky assets: 0% LTV (cannot borrow against, only collateral)</li>
          </ul>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginTop: 20, marginBottom: 12, color: '#e6edf3' }}>Safe LTV Tiers</h3>
          <ul style={{ marginLeft: 20, marginBottom: 24, lineHeight: 1.8 }}>
            <li><strong>Conservative:</strong> Borrow 30-40% of collateral value. HF stays &gt;3.0 even in 50% crash.</li>
            <li><strong>Moderate:</strong> Borrow 50-60% (standard). HF drops to ~1.5 in 50% crash.</li>
            <li><strong>Aggressive:</strong> Borrow 70-80% (high risk). HF &lt;1.5 in 50% crash, liquidation likely.</li>
          </ul>

          <div style={infoBoxStyle}>
            <strong style={{ color: '#e6edf3' }}>LTV Rule of Thumb</strong>
            <p style={{ marginTop: 12, marginBottom: 0, fontSize: 14 }}>
              Max safe LTV ≤ 60% for most portfolios. Leave 40% safety margin. In a 30% crash, health factor stays &gt;1.5. You have time to react. Never borrow at max LTV (&gt;80%); one market move liquidates you instantly.
            </p>
          </div>
        </section>

        <section id="health-factor" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>3. Health Factor: The Key Metric</h2>

          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Health Factor (HF) = (collateral value × LTV) / total debt. This single number indicates liquidation risk. Monitor it obsessively. Every 1% collateral drop reduces HF proportionally. When HF reaches 1.0, liquidation becomes active.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginTop: 20, marginBottom: 12, color: '#e6edf3' }}>Health Factor Zones</h3>
          <ul style={{ marginLeft: 20, marginBottom: 16, lineHeight: 1.8 }}>
            <li><strong>HF &gt;2.0:</strong> Safe. Collateral can drop 50%+ before liquidation risk. Most conservative positions.</li>
            <li><strong>HF 1.5-2.0:</strong> Caution. Moderate risk. Watch for market moves. Add collateral if HF approaches 1.2.</li>
            <li><strong>HF 1.0-1.5:</strong> Danger. High liquidation risk. Market drop triggers liquidation. Not recommended for sleep.</li>
            <li><strong>HF &lt;1.0:</strong> Liquidation active. Liquidators repay debt, capture collateral discount. You lose capital.</li>
          </ul>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginTop: 20, marginBottom: 12, color: '#e6edf3' }}>Example Calculation</h3>
          <p style={{ marginBottom: 24, lineHeight: 1.8 }}>
            Deposit $10,000 ETH (83% max LTV). Borrow $6,000 USDC (60% LTV). HF = ($10,000 × 0.83) / $6,000 = 1.38. If ETH drops to $7,000: HF = ($7,000 × 0.83) / $6,000 = 0.97 (liquidation!). If ETH drops to $7,250: HF = 1.0 (liquidation threshold). Safe drop: ETH can go to $7,229 before HF &lt;1.0.
          </p>

          <div style={infoBoxStyle}>
            <strong style={{ color: '#e6edf3' }}>Monitoring Tools</strong>
            <p style={{ marginTop: 12, marginmarginBottom: 0, fontSize: 14 }}>
              Dashboard alerts: Aave UI shows HF in red/yellow/green. Set phone alerts at HF 1.5. Use Telegram bots (Aave alerts) for real-time notifications. Check portfolio daily during market volatility.
            </p>
          </div>
        </section>

        <section id="liquidation" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>4. Liquidation Mechanics</h2>

          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            When HF drops below 1.0, liquidators spring into action. Liquidators are bots and traders monitoring undercollateralized positions. They profit from your misfortune: they repay your debt (paying USDC) and receive collateral at 5-10% discount (taking ETH). You lose both capital and the discount spread.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginTop: 20, marginBottom: 12, color: '#e6edf3' }}>Liquidation Example</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            You: $10,000 ETH collateral, $6,000 USDC debt, 50% HF at ETH=$7,000. Liquidator sees HF &lt;1.0. Liquidator repays $6,000 USDC debt. Liquidator receives ETH worth $6,600 (10% discount). You lose: $6,600 ETH (original $10,000) + $6,000 debt = net -$6,000 (30% portfolio loss). Liquidator profit: $600 (10% discount).
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginTop: 20, marginBottom: 12, color: '#e6edf3' }}>Protection: Liquidation Threshold</h3>
          <p style={{ marginBottom: 24, lineHeight: 1.8 }}>
            Liquidation threshold = max LTV at which liquidation triggers. Usually 10-15% above standard LTV. Example: ETH max LTV 83%, liquidation threshold 86%. Borrowing at 50% LTV safe; if collateral falls, liquidation triggers at 60% threshold (not 50%). This grace period gives you time to react.
          </p>
        </section>

        <section id="strategies" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>5. Safe Borrowing Strategies</h2>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginTop: 20, marginBottom: 12, color: '#e6edf3' }}>Conservative: Stablecoin Lending</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Borrow USDC against USDC at 100% LTV. Earns 5-6% on borrowed capital. Zero liquidation risk (same asset). Best for predictable returns. Example: $10,000 USDC, borrow $10,000 USDC, earn 5% = $500/year. Net zero leverage risk.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginTop: 20, marginBottom: 12, color: '#e6edf3' }}>Moderate: Collateralized Stablecoin Borrow</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Supply $10,000 ETH, borrow $5,000 USDC (50% LTV). Earn yield on ETH + borrow stablecoins for yield farming. Example: earn 3% on ETH = $300, earn 8% on $5K USDC in Morpho = $400. Total: $700/year on $10K = 7% blended. HF stays &gt;2.0 in 50% crash (safe).
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginTop: 20, marginBottom: 12, color: '#e6edf3' }}>Aggressive: Leverage Farming</h3>
          <p style={{ marginBottom: 24, lineHeight: 1.8 }}>
            Supply $10,000 ETH, borrow $7,000 USDC (70% LTV). Use USDC to buy $7,000 more ETH. Deposit ETH, borrow more USDC (loop). 2-3x leverage possible. Earn amplified ETH yield but face liquidation risk. HF &lt;1.5 in 30% crash. Only for experienced traders with hedges.
          </p>

          <div style={infoBoxStyle}>
            <strong style={{ color: '#e6edf3' }}>Recommended Starting Point</strong>
            <p style={{ marginTop: 12, marginBottom: 0, fontSize: 14 }}>
              Start with conservative stablecoin borrow. Once comfortable with mechanics, graduate to moderate collateralized borrow (50% LTV). Only attempt leverage farming (70%+ LTV) after 6+ months DeFi experience and with hedges (short positions, stop-loss orders).
            </p>
          </div>
        </section>

        <section id="faq" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>6. Frequently Asked Questions</h2>

          <details style={{ marginBottom: 16, background: '#161b22', border: '1px solid #30363d', borderRadius: 12, padding: '0 20px' }}>
            <summary style={{ padding: '16px 0', cursor: 'pointer', fontWeight: 600, color: '#e6edf3', fontSize: 16, listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              What is LTV?
              <span style={{ fontSize: 20, color: '#8b949e' }}>+</span>
            </summary>
            <p style={{ paddingBottom: 16, lineHeight: 1.8, color: '#8b949e', marginTop: 0 }}>
              LTV = borrow amount / collateral value. 50% LTV means borrow $50 per $100 collateral. Higher LTV increases leverage and risk. ETH max: 83% LTV. USDC max: 100%. Safe: 40-60% LTV.
            </p>
          </details>

          <details style={{ marginBottom: 16, background: '#161b22', border: '1px solid #30363d', borderRadius: 12, padding: '0 20px' }}>
            <summary style={{ padding: '16px 0', cursor: 'pointer', fontWeight: 600, color: '#e6edf3', fontSize: 16, listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              How does liquidation work?
              <span style={{ fontSize: 20, color: '#8b949e' }}>+</span>
            </summary>
            <p style={{ paddingBottom: 16, lineHeight: 1.8, color: '#8b949e', marginTop: 0 }}>
              Health factor drops below 1.0 → liquidators repay debt and buy collateral at 5-10% discount. You lose both debt amount and collateral difference. Example: $10K ETH, $6K debt → liquidated at HF &lt;1.0 → lose ~$6K.
            </p>
          </details>

          <details style={{ marginBottom: 16, background: '#161b22', border: '1px solid #30363d', borderRadius: 12, padding: '0 20px' }}>
            <summary style={{ padding: '16px 0', cursor: 'pointer', fontWeight: 600, color: '#e6edf3', fontSize: 16, listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              What is health factor?
              <span style={{ fontSize: 20, color: '#8b949e' }}>+</span>
            </summary>
            <p style={{ paddingBottom: 16, lineHeight: 1.8, color: '#8b949e', marginTop: 0 }}>
              HF = (collateral value × LTV) / total debt. &gt;2.0 safe, 1.5-2.0 caution, 1.0-1.5 danger, &lt;1.0 liquidation. Monitor daily for leveraged positions. Automated alerts recommended.
            </p>
          </details>

          <details style={{ marginBottom: 16, background: '#161b22', border: '1px solid #30363d', borderRadius: 12, padding: '0 20px' }}>
            <summary style={{ padding: '16px 0', cursor: 'pointer', fontWeight: 600, color: '#e6edf3', fontSize: 16, listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              Can I get liquidated?
              <span style={{ fontSize: 20, color: '#8b949e' }}>+</span>
            </summary>
            <p style={{ paddingBottom: 16, lineHeight: 1.8, color: '#8b949e', marginTop: 0 }}>
              Yes, if health factor &lt;1.0. Avoid by maintaining HF &gt;1.5. Monitor price alerts. Repay debt or add collateral if HF approaches 1.2. Never borrow max LTV.
            </p>
          </details>

          <details style={{ marginBottom: 16, background: '#161b22', border: '1px solid #30363d', borderRadius: 12, padding: '0 20px' }}>
            <summary style={{ padding: '16px 0', cursor: 'pointer', fontWeight: 600, color: '#e6edf3', fontSize: 16, listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              How to avoid liquidation?
              <span style={{ fontSize: 20, color: '#8b949e' }}>+</span>
            </summary>
            <p style={{ paddingBottom: 16, lineHeight: 1.8, color: '#8b949e', marginTop: 0 }}>
              Monitor HF daily. Maintain &gt;1.5. Use diversified collateral. Keep borrow low (40-50% max LTV). Set price alerts. Repay debt when HF approaches 1.2. Never borrow at max LTV. Sleep soundly.
            </p>
          </details>
        </section>

        <section style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid #30363d' }}>
          <h2 style={h2Style}>Related Reading</h2>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: 32 }}>
            <li style={{ marginBottom: 12 }}>
              <Link href="/defi-lending/cefi-vs-defi-lending-comparison" style={linkStyle}>
                CeFi vs DeFi Lending Comparison →
              </Link>
            </li>
            <li style={{ marginBottom: 12 }}>
              <Link href="/defi-lending/undercollateralized-defi-loans" style={linkStyle}>
                Undercollateralized Loans: Higher Yields, Higher Risk →
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
            This guide is for educational purposes only and not investment or financial advice. Overcollateralized lending carries real risks including liquidation, smart contract bugs, and market volatility. Always conduct thorough research, start with small amounts, monitor positions carefully, and consult a financial advisor before committing significant capital.
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
