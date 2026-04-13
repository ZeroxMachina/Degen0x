import { Metadata } from 'next';
import Link from 'next/link';
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: 'Impermanent Loss Calculator | IL & LP Profit Tool',
  description: 'Calculate impermanent loss on liquidity pools. Understand IL formula, fee breakeven analysis, and strategies to minimize losses on DEX farming.',
  keywords: 'impermanent loss calculator, liquidity pool, DEX farming, IL formula, LP farming',
  openGraph: {
    title: 'Impermanent Loss Calculator | IL & LP Profit Tool',
    description: 'Calculate impermanent loss and liquidity provider returns with our interactive IL calculator.',
    type: 'website',
    url: 'https://degen0x.com/tools/impermanent-loss-calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Impermanent Loss Calculator',
    description: 'Calculate IL impact on your LP positions and liquidity pool farming profits.',
  },
  alternates: {
    canonical: 'https://degen0x.com/tools/impermanent-loss-calculator',
  },
};

const faqs = [
  {
    q: 'What is impermanent loss in simple terms?',
    a: 'Impermanent loss is the unrealized loss you take when providing liquidity to a pool and the asset price ratio changes. If you held the tokens outside the pool, you would have more value. It is "impermanent" because if prices return to the original ratio, the loss disappears.',
  },
  {
    q: 'Is impermanent loss really "impermanent"?',
    a: 'Yes and no. It is impermanent if the price ratio returns to where it started. However, if price never returns, your loss becomes permanent. Most IL becomes permanent in practice since assets rarely return to exact previous ratios.',
  },
  {
    q: 'How can I avoid impermanent loss?',
    a: 'Provide liquidity to stablecoin pools (minimal IL), use correlated asset pairs, farm concentrated liquidity on narrow ranges (Uniswap V3), or choose pair with low historical volatility. Single-sided staking eliminates IL.',
  },
  {
    q: 'Can I profit from LP farming despite impermanent loss?',
    a: 'Absolutely. If trading fees earned exceed IL, you profit overall. Example: 20% APY in fees minus 5.7% IL = 14.3% net gain. This is why high-volume, low-volatility pairs are ideal for LP farming.',
  },
  {
    q: 'What is the IL formula?',
    a: 'IL = 2*sqrt(r)/(1+r) - 1, where r = new price / old price. For 2x price move: IL = 2*sqrt(2)/(1+2) - 1 = -5.7%. For 5x: IL = -25.5%. Higher price ratios incur proportionally larger IL.',
  },
  {
    q: 'Does concentrated liquidity increase impermanent loss?',
    a: 'Yes. Concentrated liquidity (narrower price range) increases capital efficiency and fees but dramatically increases IL if prices move outside your range. IL on V3 concentrated positions can exceed 50% on extreme moves.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://degen0x.com/tools' },
    { '@type': 'ListItem', position: 3, name: 'Impermanent Loss Calculator', },
  ],
};

export default function ImpermanentLossCalculatorPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0d1117', color: '#e6edf3' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section
        style={{
          background: 'linear-gradient(135deg, #10b981, #06b6d4)',
          padding: '60px 20px',
          textAlign: 'center',
        }}
    >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
            Impermanent Loss Calculator
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.95 }}>
            Calculate IL impact on liquidity positions and determine true LP farming profitability
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        {/* What is IL */}
        <div
          style={{
            backgroundColor: '#161b22',
            border: '1px solid #30363d',
            borderRadius: '8px',
            padding: '40px',
            marginBottom: '40px',
          }}
    >
          <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#58a6ff' }}>
            What is Impermanent Loss?
          </h2>
          <p style={{ lineHeight: '1.8', marginBottom: '15px', color: '#e6edf3' }}>
            Impermanent loss (IL) is the difference in value you would have received by holding tokens
            versus providing liquidity. It occurs when the price ratio of two assets in a liquidity pool
            changes after you deposit them.
          </p>
          <div
            style={{
              backgroundColor: '#0d1117',
              border: '1px solid #30363d',
              padding: '20px',
              borderRadius: '6px',
              marginBottom: '15px',
            }}
    >
            <p style={{ color: '#8b949e', marginBottom: '10px' }}>
              <strong>Simple Example:</strong>
            </p>
            <ul style={{ color: '#8b949e', marginLeft: '20px', lineHeight: '1.8' }}>
              <li>You deposit 1 ETH + 10,000 USDC to a pool (1 ETH = $10,000)</li>
              <li>Price changes: 1 ETH = $20,000</li>
              <li>If you held: 1 ETH + 10,000 USDC = $30,000</li>
              <li>If you LP&apos;d: ~0.707 ETH + 14,142 USDC = $28,284</li>
              <li>Impermanent Loss: $1,716 (5.7%)</li>
            </ul>
          </div>
          <p style={{ lineHeight: '1.8', color: '#8b949e' }}>
            This loss occurs because the pool rebalances automatically, selling your ETH as its price
            rises to maintain equal value of both assets. You capture less of the upside than by simply
            holding.
          </p>
        </div>

        {/* IL Formula */}
        <div
          style={{
            backgroundColor: '#161b22',
            border: '1px solid #30363d',
            borderRadius: '8px',
            padding: '40px',
            marginBottom: '40px',
          }}
    >
          <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#58a6ff' }}>
            The Impermanent Loss Formula
          </h2>
          <div
            style={{
              backgroundColor: '#0d1117',
              border: '1px solid #30363d',
              padding: '30px',
              borderRadius: '6px',
              marginBottom: '20px',
              fontFamily: 'monospace',
              fontSize: '1.1rem',
              textAlign: 'center',
              color: '#58a6ff',
            }}
    >
            IL = 2√r / (1 + r) - 1
          </div>
          <p style={{ lineHeight: '1.8', marginBottom: '15px', color: '#e6edf3' }}>
            Where <strong>r</strong> = (New Price / Original Price)
          </p>
          <p style={{ lineHeight: '1.8', marginBottom: '15px', color: '#e6edf3' }}>
            This formula shows that IL is always negative (a loss). The greater the price divergence
            (r values far from 1), the larger the IL becomes.
          </p>
          <p style={{ lineHeight: '1.8', color: '#8b949e' }}>
            <strong>Important:</strong> This formula assumes equal deposit amounts. Standard AMM pools
            (like Uniswap V2) use a constant product formula. The IL formula represents the loss compared
            to simply holding.
          </p>
        </div>

        {/* IL by Price Movement */}
        <div
          style={{
            backgroundColor: '#161b22',
            border: '1px solid #30363d',
            borderRadius: '8px',
            padding: '40px',
            marginBottom: '40px',
          }}
    >
          <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#58a6ff' }}>
            Impermanent Loss at Different Price Movements
          </h2>
          <p style={{ lineHeight: '1.8', marginBottom: '20px', color: '#e6edf3' }}>
            Understanding how IL scales with price changes:
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '0.95rem',
              }}
    >
              <thead>
                <tr style={{ borderBottom: '2px solid #30363d' }}>
                  <th style={{ padding: '12px', textAlign: 'left', color: '#58a6ff' }}>Price Change</th>
                  <th style={{ padding: '12px', textAlign: 'left', color: '#58a6ff' }}>
                    Hold vs LP Return
                  </th>
                  <th style={{ padding: '12px', textAlign: 'left', color: '#58a6ff' }}>
                    Impermanent Loss
                  </th>
                  <th style={{ padding: '12px', textAlign: 'left', color: '#58a6ff' }}>$100 Initial</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={{ padding: '12px', color: '#e6edf3' }}>1.1x (10%)</td>
                  <td style={{ padding: '12px', color: '#8b949e' }}>+10% vs +4.99%</td>
                  <td style={{ padding: '12px', color: '#f85149' }}>-0.45%</td>
                  <td style={{ padding: '12px', color: '#8b949e' }}>$199.55</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={{ padding: '12px', color: '#e6edf3' }}>1.25x (25%)</td>
                  <td style={{ padding: '12px', color: '#8b949e' }}>+25% vs +19.4%</td>
                  <td style={{ padding: '12px', color: '#f85149' }}>-2.46%</td>
                  <td style={{ padding: '12px', color: '#8b949e' }}>$219.40</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={{ padding: '12px', color: '#e6edf3' }}>1.5x (50%)</td>
                  <td style={{ padding: '12px', color: '#8b949e' }}>+50% vs +44.21%</td>
                  <td style={{ padding: '12px', color: '#f85149' }}>-5.72%</td>
                  <td style={{ padding: '12px', color: '#8b949e' }}>$244.21</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={{ padding: '12px', color: '#e6edf3' }}>2x (100%)</td>
                  <td style={{ padding: '12px', color: '#8b949e' }}>+100% vs +82.84%</td>
                  <td style={{ padding: '12px', color: '#f85149' }}>-5.71%</td>
                  <td style={{ padding: '12px', color: '#8b949e' }}>$282.84</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={{ padding: '12px', color: '#e6edf3' }}>3x (200%)</td>
                  <td style={{ padding: '12px', color: '#8b949e' }}>+200% vs +169.91%</td>
                  <td style={{ padding: '12px', color: '#f85149' }}>-13.39%</td>
                  <td style={{ padding: '12px', color: '#8b949e' }}>$369.91</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={{ padding: '12px', color: '#e6edf3' }}>5x (400%)</td>
                  <td style={{ padding: '12px', color: '#8b949e' }}>+400% vs +349.63%</td>
                  <td style={{ padding: '12px', color: '#f85149' }}>-25.53%</td>
                  <td style={{ padding: '12px', color: '#8b949e' }}>$549.63</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', color: '#e6edf3' }}>10x (900%)</td>
                  <td style={{ padding: '12px', color: '#8b949e' }}>+900% vs +783.32%</td>
                  <td style={{ padding: '12px', color: '#f85149' }}>-47.99%</td>
                  <td style={{ padding: '12px', color: '#8b949e' }}>$883.32</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ lineHeight: '1.8', marginTop: '20px', color: '#8b949e' }}>
            Notice: IL peaks at around 2-3x price movements, then continues increasing but at a slower rate.
            This is counterintuitive—extreme moves (100x) still cause significant IL despite the diminishing rate.
          </p>
        </div>

        {/* When LP Farming Is Profitable */}
        <div
          style={{
            backgroundColor: '#161b22',
            border: '1px solid #30363d',
            borderRadius: '8px',
            padding: '40px',
            marginBottom: '40px',
          }}
    >
          <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#58a6ff' }}>
            When LP Farming Is Still Profitable Despite IL
          </h2>
          <p style={{ lineHeight: '1.8', marginBottom: '20px', color: '#e6edf3' }}>
            Trading fees can offset impermanent loss. A pool with high volume generates significant fees:
          </p>
          <div
            style={{
              backgroundColor: '#0d1117',
              border: '1px solid #30363d',
              padding: '20px',
              borderRadius: '6px',
              marginBottom: '20px',
            }}
    >
            <p style={{ color: '#e6edf3', marginBottom: '10px' }}>
              <strong>Profitability Formula:</strong>
            </p>
            <p style={{ color: '#8b949e', fontFamily: 'monospace' }}>
              Net Return = Trading Fees - Impermanent Loss
            </p>
          </div>
          <p style={{ lineHeight: '1.8', marginBottom: '15px', color: '#e6edf3' }}>
            <strong>Example Scenarios:</strong>
          </p>
          <div style={{ display: 'grid', gap: '15px' }}>
            <div style={{ backgroundColor: '#0d1117', padding: '15px', borderRadius: '6px' }}>
              <p style={{ color: '#3fb950', fontWeight: 'bold', marginBottom: '8px' }}>Profitable (ETH/USDC High Volume)</p>
              <ul style={{ color: '#8b949e', marginLeft: '15px', lineHeight: '1.6', fontSize: '0.9rem' }}>
                <li>20% APY in trading fees</li>
                <li>Price moves 2x (5.7% IL over the year)</li>
                <li>Net Return: 20% - 5.7% = 14.3% profit</li>
              </ul>
            </div>
            <div style={{ backgroundColor: '#0d1117', padding: '15px', borderRadius: '6px' }}>
              <p style={{ color: '#f85149', fontWeight: 'bold', marginBottom: '8px' }}>Breakeven (Moderate Volume)</p>
              <ul style={{ color: '#8b949e', marginLeft: '15px', lineHeight: '1.6', fontSize: '0.9rem' }}>
                <li>8% APY in trading fees</li>
                <li>Price moves 2x (5.7% IL)</li>
                <li>Net Return: 8% - 5.7% = 2.3% profit</li>
              </ul>
            </div>
            <div style={{ backgroundColor: '#0d1117', padding: '15px', borderRadius: '6px' }}>
              <p style={{ color: '#f85149', fontWeight: 'bold', marginBottom: '8px' }}>Loss (Low Volume + High Volatility)</p>
              <ul style={{ color: '#8b949e', marginLeft: '15px', lineHeight: '1.6', fontSize: '0.9rem' }}>
                <li>3% APY in trading fees</li>
                <li>Price moves 5x (25.5% IL)</li>
                <li>Net Return: 3% - 25.5% = -22.5% loss</li>
              </ul>
            </div>
          </div>

        <AuthorAttribution
          author="0xMachina"
          role="Founder"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={3}
          section="tools"
        />

        </div>

        {/* Concentrated Liquidity */}
        <div
          style={{
            backgroundColor: '#161b22',
            border: '1px solid #30363d',
            borderRadius: '8px',
            padding: '40px',
            marginBottom: '40px',
          }}
    >
          <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#58a6ff' }}>
            Concentrated Liquidity & IL (Uniswap V3)
          </h2>
          <p style={{ lineHeight: '1.8', marginBottom: '15px', color: '#e6edf3' }}>
            Uniswap V3 allows you to concentrate liquidity in a narrow price range, increasing capital
            efficiency and earning more fees per dollar deployed. However, this dramatically increases IL.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
            <div style={{ backgroundColor: '#0d1117', padding: '20px', borderRadius: '6px', borderLeft: '4px solid #58a6ff' }}>
              <h3 style={{ color: '#79c0ff', marginBottom: '10px' }}>Full Range (V2-style)</h3>
              <ul style={{ color: '#8b949e', marginLeft: '15px', lineHeight: '1.8', fontSize: '0.9rem' }}>
                <li>Covers 0 to infinity price range</li>
                <li>5.7% IL at 2x price move</li>
                <li>Lower fee yield but safer</li>
                <li>Capital not efficiently used</li>
              </ul>
            </div>
            <div style={{ backgroundColor: '#0d1117', padding: '20px', borderRadius: '6px', borderLeft: '4px solid #f0883e' }}>
              <h3 style={{ color: '#79c0ff', marginBottom: '10px' }}>Concentrated Range (V3)</h3>
              <ul style={{ color: '#8b949e', marginLeft: '15px', lineHeight: '1.8', fontSize: '0.9rem' }}>
                <li>Example: 0.9x-1.1x price range</li>
                <li>50%+ IL at 1.5x price move (out of range)</li>
                <li>Higher fee yield but risky</li>
                <li>Capital 10-100x more efficient</li>
              </ul>
            </div>
          </div>
          <p style={{ lineHeight: '1.8', color: '#8b949e' }}>
            <strong>Key Insight:</strong> Concentrated liquidity is best for stable, range-bound pairs
            (stablecoins, correlated assets). For volatile assets, keep liquidity spread across wider ranges
            to avoid being knocked out of range.
          </p>
        </div>

        {/* Strategies to Minimize IL */}
        <div
          style={{
            backgroundColor: '#161b22',
            border: '1px solid #30363d',
            borderRadius: '8px',
            padding: '40px',
            marginBottom: '40px',
          }}
    >
          <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#58a6ff' }}>
            Strategies to Minimize Impermanent Loss
          </h2>
          <div style={{ display: 'grid', gap: '15px' }}>
            <div style={{ backgroundColor: '#0d1117', padding: '20px', borderRadius: '6px' }}>
              <h3 style={{ color: '#79c0ff', marginBottom: '10px' }}>1. Farm Stablecoin Pools</h3>
              <p style={{ color: '#8b949e', fontSize: '0.9rem' }}>
                USDC/USDT, USDC/DAI pools have minimal volatility and therefore minimal IL. IL might be
                0.01% even with active trading. Fees still accumulate steadily on high-volume stablecoin pairs.
              </p>
            </div>
            <div style={{ backgroundColor: '#0d1117', padding: '20px', borderRadius: '6px' }}>
              <h3 style={{ color: '#79c0ff', marginBottom: '10px' }}>2. Choose Correlated Asset Pairs</h3>
              <p style={{ color: '#8b949e', fontSize: '0.9rem' }}>
                Pairs like ETH/stETH or wBTC/renBTC track each other closely and have lower price volatility
                relative to each other. IL between correlated assets is naturally lower.
              </p>
            </div>
            <div style={{ backgroundColor: '#0d1117', padding: '20px', borderRadius: '6px' }}>
              <h3 style={{ color: '#79c0ff', marginBottom: '10px' }}>3. Use Concentrated Liquidity Carefully</h3>
              <p style={{ color: '#8b949e', fontSize: '0.9rem' }}>
                Set ranges based on 30-day historical volatility. Example: If volatility is 5%, set a
                0.95-1.05 range. Wider ranges = safer but lower capital efficiency. Rebalance regularly.
              </p>
            </div>
            <div style={{ backgroundColor: '#0d1117', padding: '20px', borderRadius: '6px' }}>
              <h3 style={{ color: '#79c0ff', marginBottom: '10px' }}>4. High-Volume / High-Fee Pools</h3>
              <p style={{ color: '#8b949e', fontSize: '0.9rem' }}>
                Farm pools with 1% fees (Uniswap V3) instead of 0.3% to earn more fee income relative to IL.
                Example: A volatile pair with 30% APY in fees can overcome even 20% IL.
              </p>
            </div>
            <div style={{ backgroundColor: '#0d1117', padding: '20px', borderRadius: '6px' }}>
              <h3 style={{ color: '#79c0ff', marginBottom: '10px' }}>5. Avoid Farming Trending Assets</h3>
              <p style={{ color: '#8b949e', fontSize: '0.9rem' }}>
                Don&apos;t LP shitcoins with 500% daily swings. IL on extreme volatility crushes you. Farm
                assets with stable, predictable trading volumes.
              </p>
            </div>
            <div style={{ backgroundColor: '#0d1117', padding: '20px', borderRadius: '6px' }}>
              <h3 style={{ color: '#79c0ff', marginBottom: '10px' }}>6. Exit Before Major Crashes</h3>
              <p style={{ color: '#8b949e', fontSize: '0.9rem' }}>
                Use stop-losses on your LP position. If one asset crashes 50%+, IL becomes permanent. Exit
                early and redeploy in less volatile pairs.
              </p>
            </div>
          </div>
        </div>

        {/* Fee vs IL Analysis */}
        <div
          style={{
            backgroundColor: '#161b22',
            border: '1px solid #30363d',
            borderRadius: '8px',
            padding: '40px',
            marginBottom: '40px',
          }}
    >
          <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#58a6ff' }}>
            Fee Income vs IL Breakeven Analysis
          </h2>
          <p style={{ lineHeight: '1.8', marginBottom: '20px', color: '#e6edf3' }}>
            To determine if a pool is worth farming, calculate your breakeven point:
          </p>
          <div
            style={{
              backgroundColor: '#0d1117',
              padding: '20px',
              borderRadius: '6px',
              marginBottom: '20px',
            }}
    >
            <p style={{ color: '#e6edf3', marginBottom: '10px' }}>
              <strong>Breakeven Calculation:</strong>
            </p>
            <ol style={{ color: '#8b949e', marginLeft: '20px', lineHeight: '1.8' }}>
              <li>Estimate expected APY from trading fees (e.g., 15%)</li>
              <li>Estimate likely price volatility over your farming duration</li>
              <li>Calculate IL at likely price move (e.g., 2x price = 5.7% IL)</li>
              <li>If Fees &gt; IL: Farm it | If Fees &lt; IL: Avoid it</li>
            </ol>
          </div>
          <p style={{ lineHeight: '1.8', marginBottom: '15px', color: '#e6edf3' }}>
            <strong>Example Decision Tree:</strong>
          </p>
          <ul style={{ lineHeight: '2', marginLeft: '20px', color: '#e6edf3' }}>
            <li>
              <strong>ETH/USDC (high volume, low volatility):</strong> 20% APY in fees, 5% IL expected
              → Farm it (15% net gain)
            </li>
            <li>
              <strong>ALT/USDC (medium volume, medium volatility):</strong> 8% APY in fees, 15% IL expected
              → Avoid it (-7% net loss)
            </li>
            <li>
              <strong>USDC/DAI (low volatility, stable):</strong> 5% APY in fees, 0.1% IL
              → Farm it (4.9% net gain with minimal risk)
            </li>
          </ul>
        </div>

        {/* Related Tools */}
        <div
          style={{
            backgroundColor: '#161b22',
            border: '1px solid #30363d',
            borderRadius: '8px',
            padding: '40px',
            marginBottom: '40px',
          }}
    >
          <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#58a6ff' }}>
            Related Tools & Resources
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
            <Link href="/tools/liquidity-pool-calculator">
              <span
                style={{
                  display: 'block',
                  padding: '15px',
                  backgroundColor: '#0d1117',
                  border: '1px solid #30363d',
                  borderRadius: '6px',
                  color: '#58a6ff',
                  textDecoration: 'none',
                }}
    >
                Liquidity Pool Calculator
              </span>
            </Link>
            <Link href="/tools/defi-portfolio-dashboard">
              <span
                style={{
                  display: 'block',
                  padding: '15px',
                  backgroundColor: '#0d1117',
                  border: '1px solid #30363d',
                  borderRadius: '6px',
                  color: '#58a6ff',
                  textDecoration: 'none',
                }}
    >
                DeFi Portfolio Dashboard
              </span>
            </Link>
            <Link href="/defi-lending/aave-v3-complete-guide">
              <span
                style={{
                  display: 'block',
                  padding: '15px',
                  backgroundColor: '#0d1117',
                  border: '1px solid #30363d',
                  borderRadius: '6px',
                  color: '#58a6ff',
                  textDecoration: 'none',
                }}
    >
                Aave v3 Complete Guide
              </span>
            </Link>
            <Link href="/learn/what-is-a-liquidity-pool">
              <span
                style={{
                  display: 'block',
                  padding: '15px',
                  backgroundColor: '#0d1117',
                  border: '1px solid #30363d',
                  borderRadius: '6px',
                  color: '#58a6ff',
                  textDecoration: 'none',
                }}
    >
                What is a Liquidity Pool
              </span>
            </Link>
            <Link href="/learn/concentrated-liquidity-uniswap-v3">
              <span
                style={{
                  display: 'block',
                  padding: '15px',
                  backgroundColor: '#0d1117',
                  border: '1px solid #30363d',
                  borderRadius: '6px',
                  color: '#58a6ff',
                  textDecoration: 'none',
                }}
    >
                Concentrated Liquidity Guide
              </span>
            </Link>
          </div>
        </div>

        {/* FAQs */}
        <div
          style={{
            backgroundColor: '#161b22',
            border: '1px solid #30363d',
            borderRadius: '8px',
            padding: '40px',
          }}
    >
          <h2 style={{ fontSize: '1.8rem', marginBottom: '30px', color: '#58a6ff' }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'grid', gap: '20px' }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#0d1117',
                  border: '1px solid #30363d',
                  borderRadius: '6px',
                  padding: '20px',
                }}
    >
                <h3 style={{ fontSize: '1.1rem', marginBottom: '10px', color: '#79c0ff' }}>
                  {faq.question}
                </h3>
                <p style={{ lineHeight: '1.7', color: '#8b949e' }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Impermanent Loss Calculator",
              "url": "https://degen0x.com/tools/impermanent-loss-calculator",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            })
          }}
        />
      </div>
  );
}
