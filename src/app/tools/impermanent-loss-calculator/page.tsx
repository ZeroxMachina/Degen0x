"use client";

import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import AuthorAttribution from "@/components/AuthorAttribution";

/* ── Focus-ring + hover + mobile-grid styles ── */
const POLISH_CSS = `
  .ilc-link:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
  .ilc-link:hover {
    border-color: var(--color-primary) !important;
    background-color: var(--color-bg-card-hover) !important;
  }
  @media (max-width: 768px) {
    .ilc-grid-2col { grid-template-columns: 1fr !important; }
  }
`;

const faqs = [
  {
    q: "What is impermanent loss in simple terms?",
    a: "Impermanent loss is the unrealized loss you take when providing liquidity to a pool and the asset price ratio changes. If you held the tokens outside the pool, you would have more value. It is “impermanent” because if prices return to the original ratio, the loss disappears.",
  },
  {
    q: 'Is impermanent loss really "impermanent"?',
    a: "Yes and no. It is impermanent if the price ratio returns to where it started. However, if price never returns, your loss becomes permanent. Most IL becomes permanent in practice since assets rarely return to exact previous ratios.",
  },
  {
    q: "How can I avoid impermanent loss?",
    a: "Provide liquidity to stablecoin pools (minimal IL), use correlated asset pairs, farm concentrated liquidity on narrow ranges (Uniswap V3), or choose pair with low historical volatility. Single-sided staking eliminates IL.",
  },
  {
    q: "Can I profit from LP farming despite impermanent loss?",
    a: "Absolutely. If trading fees earned exceed IL, you profit overall. Example: 20% APY in fees minus 5.7% IL = 14.3% net gain. This is why high-volume, low-volatility pairs are ideal for LP farming.",
  },
  {
    q: "What is the IL formula?",
    a: "IL = 2*sqrt(r)/(1+r) - 1, where r = new price / old price. For 2x price move: IL = 2*sqrt(2)/(1+2) - 1 = -5.7%. For 5x: IL = -25.5%. Higher price ratios incur proportionally larger IL.",
  },
  {
    q: "Does concentrated liquidity increase impermanent loss?",
    a: "Yes. Concentrated liquidity (narrower price range) increases capital efficiency and fees but dramatically increases IL if prices move outside your range. IL on V3 concentrated positions can exceed 50% on extreme moves.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://degen0x.com/" },
    { "@type": "ListItem", position: 2, name: "Tools", item: "https://degen0x.com/tools" },
    { "@type": "ListItem", position: 3, name: "Impermanent Loss Calculator" },
  ],
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Impermanent Loss Calculator",
  url: "https://degen0x.com/tools/impermanent-loss-calculator",
  applicationCategory: "FinanceApplication",
  operatingSystem: "All",
  description:
    "Calculate impermanent loss on liquidity pools. Understand IL formula, fee breakeven analysis, and strategies to minimize losses on DEX farming.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function ImpermanentLossCalculatorPage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-bg)", color: "var(--color-text)" }}>
      <style dangerouslySetInnerHTML={{ __html: POLISH_CSS }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, var(--color-success), var(--color-secondary))",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: 20 }}>
            Impermanent Loss Calculator
          </h1>
          <p style={{ fontSize: "1.1rem", opacity: 0.95, maxWidth: 760, margin: "0 auto" }}>
            Calculate IL impact on liquidity positions and determine true LP farming profitability
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 20px" }}>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Tools", href: "/tools" },
            { label: "Impermanent Loss Calculator" },
          ]}
        />

        {/* What is IL */}
        <div
          style={{
            backgroundColor: "var(--color-bg-card)",
            border: "1px solid var(--color-border)",
            borderRadius: 8,
            padding: 40,
            marginBottom: 40,
          }}
        >
          <h2 style={{ fontSize: "1.8rem", marginBottom: 20, color: "var(--color-primary)" }}>
            What is Impermanent Loss?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: 15, color: "var(--color-text)" }}>
            Impermanent loss (IL) is the difference in value you would have received by holding tokens
            versus providing liquidity. It occurs when the price ratio of two assets in a liquidity pool
            changes after you deposit them.
          </p>
          <div
            style={{
              backgroundColor: "var(--color-bg)",
              border: "1px solid var(--color-border)",
              padding: 20,
              borderRadius: 6,
              marginBottom: 15,
            }}
          >
            <p style={{ color: "var(--color-text-secondary)", marginBottom: 10 }}>
              <strong>Simple Example:</strong>
            </p>
            <ul style={{ color: "var(--color-text-secondary)", marginLeft: 20, lineHeight: 1.8 }}>
              <li>You deposit 1 ETH + 10,000 USDC to a pool (1 ETH = $10,000)</li>
              <li>Price changes: 1 ETH = $20,000</li>
              <li>If you held: 1 ETH + 10,000 USDC = $30,000</li>
              <li>If you LP&apos;d: ~0.707 ETH + 14,142 USDC = $28,284</li>
              <li>Impermanent Loss: $1,716 (5.7%)</li>
            </ul>
          </div>
          <p style={{ lineHeight: 1.8, color: "var(--color-text-secondary)" }}>
            This loss occurs because the pool rebalances automatically, selling your ETH as its price
            rises to maintain equal value of both assets. You capture less of the upside than by simply
            holding.
          </p>
        </div>

        {/* IL Formula */}
        <div
          style={{
            backgroundColor: "var(--color-bg-card)",
            border: "1px solid var(--color-border)",
            borderRadius: 8,
            padding: 40,
            marginBottom: 40,
          }}
        >
          <h2 style={{ fontSize: "1.8rem", marginBottom: 20, color: "var(--color-primary)" }}>
            The Impermanent Loss Formula
          </h2>
          <div
            style={{
              backgroundColor: "var(--color-bg)",
              border: "1px solid var(--color-border)",
              padding: 30,
              borderRadius: 6,
              marginBottom: 20,
              fontFamily: "monospace",
              fontSize: "1.1rem",
              textAlign: "center",
              color: "var(--color-primary)",
            }}
          >
            IL = 2√r / (1 + r) - 1
          </div>
          <p style={{ lineHeight: 1.8, marginBottom: 15, color: "var(--color-text)" }}>
            Where <strong>r</strong> = (New Price / Original Price)
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: 15, color: "var(--color-text)" }}>
            This formula shows that IL is always negative (a loss). The greater the price divergence
            (r values far from 1), the larger the IL becomes.
          </p>
          <p style={{ lineHeight: 1.8, color: "var(--color-text-secondary)" }}>
            <strong>Important:</strong> This formula assumes equal deposit amounts. Standard AMM pools
            (like Uniswap V2) use a constant product formula. The IL formula represents the loss compared
            to simply holding.
          </p>
        </div>

        {/* IL by Price Movement */}
        <div
          style={{
            backgroundColor: "var(--color-bg-card)",
            border: "1px solid var(--color-border)",
            borderRadius: 8,
            padding: 40,
            marginBottom: 40,
          }}
        >
          <h2 style={{ fontSize: "1.8rem", marginBottom: 20, color: "var(--color-primary)" }}>
            Impermanent Loss at Different Price Movements
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: 20, color: "var(--color-text)" }}>
            Understanding how IL scales with price changes:
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid var(--color-border)" }}>
                  <th style={{ padding: 12, textAlign: "left", color: "var(--color-primary)" }}>Price Change</th>
                  <th style={{ padding: 12, textAlign: "left", color: "var(--color-primary)" }}>Hold vs LP Return</th>
                  <th style={{ padding: 12, textAlign: "left", color: "var(--color-primary)" }}>Impermanent Loss</th>
                  <th style={{ padding: 12, textAlign: "left", color: "var(--color-primary)" }}>$100 Initial</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { move: "1.1x (10%)", comp: "+10% vs +4.99%", il: "-0.45%", val: "$199.55" },
                  { move: "1.25x (25%)", comp: "+25% vs +19.4%", il: "-2.46%", val: "$219.40" },
                  { move: "1.5x (50%)", comp: "+50% vs +44.21%", il: "-5.72%", val: "$244.21" },
                  { move: "2x (100%)", comp: "+100% vs +82.84%", il: "-5.71%", val: "$282.84" },
                  { move: "3x (200%)", comp: "+200% vs +169.91%", il: "-13.39%", val: "$369.91" },
                  { move: "5x (400%)", comp: "+400% vs +349.63%", il: "-25.53%", val: "$549.63" },
                  { move: "10x (900%)", comp: "+900% vs +783.32%", il: "-47.99%", val: "$883.32" },
                ].map((row, i, arr) => (
                  <tr key={row.move} style={{ borderBottom: i < arr.length - 1 ? "1px solid var(--color-border)" : "none" }}>
                    <td style={{ padding: 12, color: "var(--color-text)" }}>{row.move}</td>
                    <td style={{ padding: 12, color: "var(--color-text-secondary)" }}>{row.comp}</td>
                    <td style={{ padding: 12, color: "var(--color-danger)" }}>{row.il}</td>
                    <td style={{ padding: 12, color: "var(--color-text-secondary)" }}>{row.val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ lineHeight: 1.8, marginTop: 20, color: "var(--color-text-secondary)" }}>
            Notice: IL peaks at around 2-3x price movements, then continues increasing but at a slower rate.
            This is counterintuitive — extreme moves (100x) still cause significant IL despite the diminishing rate.
          </p>
        </div>

        {/* When LP Farming Is Profitable */}
        <div
          style={{
            backgroundColor: "var(--color-bg-card)",
            border: "1px solid var(--color-border)",
            borderRadius: 8,
            padding: 40,
            marginBottom: 40,
          }}
        >
          <h2 style={{ fontSize: "1.8rem", marginBottom: 20, color: "var(--color-primary)" }}>
            When LP Farming Is Still Profitable Despite IL
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: 20, color: "var(--color-text)" }}>
            Trading fees can offset impermanent loss. A pool with high volume generates significant fees:
          </p>
          <div
            style={{
              backgroundColor: "var(--color-bg)",
              border: "1px solid var(--color-border)",
              padding: 20,
              borderRadius: 6,
              marginBottom: 20,
            }}
          >
            <p style={{ color: "var(--color-text)", marginBottom: 10 }}>
              <strong>Profitability Formula:</strong>
            </p>
            <p style={{ color: "var(--color-text-secondary)", fontFamily: "monospace" }}>
              Net Return = Trading Fees - Impermanent Loss
            </p>
          </div>
          <p style={{ lineHeight: 1.8, marginBottom: 15, color: "var(--color-text)" }}>
            <strong>Example Scenarios:</strong>
          </p>
          <div style={{ display: "grid", gap: 15 }}>
            <div style={{ backgroundColor: "var(--color-bg)", padding: 15, borderRadius: 6 }}>
              <p style={{ color: "var(--color-success)", fontWeight: "bold", marginBottom: 8 }}>
                Profitable (ETH/USDC High Volume)
              </p>
              <ul style={{ color: "var(--color-text-secondary)", marginLeft: 15, lineHeight: 1.6, fontSize: "0.9rem" }}>
                <li>20% APY in trading fees</li>
                <li>Price moves 2x (5.7% IL over the year)</li>
                <li>Net Return: 20% - 5.7% = 14.3% profit</li>
              </ul>
            </div>
            <div style={{ backgroundColor: "var(--color-bg)", padding: 15, borderRadius: 6 }}>
              <p style={{ color: "var(--color-danger)", fontWeight: "bold", marginBottom: 8 }}>
                Breakeven (Moderate Volume)
              </p>
              <ul style={{ color: "var(--color-text-secondary)", marginLeft: 15, lineHeight: 1.6, fontSize: "0.9rem" }}>
                <li>8% APY in trading fees</li>
                <li>Price moves 2x (5.7% IL)</li>
                <li>Net Return: 8% - 5.7% = 2.3% profit</li>
              </ul>
            </div>
            <div style={{ backgroundColor: "var(--color-bg)", padding: 15, borderRadius: 6 }}>
              <p style={{ color: "var(--color-danger)", fontWeight: "bold", marginBottom: 8 }}>
                Loss (Low Volume + High Volatility)
              </p>
              <ul style={{ color: "var(--color-text-secondary)", marginLeft: 15, lineHeight: 1.6, fontSize: "0.9rem" }}>
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
            updatedDate="2026-04-30"
            readingTime={3}
            section="tools"
          />
        </div>

        {/* Concentrated Liquidity */}
        <div
          style={{
            backgroundColor: "var(--color-bg-card)",
            border: "1px solid var(--color-border)",
            borderRadius: 8,
            padding: 40,
            marginBottom: 40,
          }}
        >
          <h2 style={{ fontSize: "1.8rem", marginBottom: 20, color: "var(--color-primary)" }}>
            Concentrated Liquidity & IL (Uniswap V3)
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: 15, color: "var(--color-text)" }}>
            Uniswap V3 allows you to concentrate liquidity in a narrow price range, increasing capital
            efficiency and earning more fees per dollar deployed. However, this dramatically increases IL.
          </p>
          <div
            className="ilc-grid-2col"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}
          >
            <div
              style={{
                backgroundColor: "var(--color-bg)",
                padding: 20,
                borderRadius: 6,
                borderLeft: "4px solid var(--color-primary)",
              }}
            >
              <h3 style={{ color: "var(--color-primary-light)", marginBottom: 10 }}>Full Range (V2-style)</h3>
              <ul style={{ color: "var(--color-text-secondary)", marginLeft: 15, lineHeight: 1.8, fontSize: "0.9rem" }}>
                <li>Covers 0 to infinity price range</li>
                <li>5.7% IL at 2x price move</li>
                <li>Lower fee yield but safer</li>
                <li>Capital not efficiently used</li>
              </ul>
            </div>
            <div
              style={{
                backgroundColor: "var(--color-bg)",
                padding: 20,
                borderRadius: 6,
                borderLeft: "4px solid var(--color-accent)",
              }}
            >
              <h3 style={{ color: "var(--color-primary-light)", marginBottom: 10 }}>Concentrated Range (V3)</h3>
              <ul style={{ color: "var(--color-text-secondary)", marginLeft: 15, lineHeight: 1.8, fontSize: "0.9rem" }}>
                <li>Example: 0.9x-1.1x price range</li>
                <li>50%+ IL at 1.5x price move (out of range)</li>
                <li>Higher fee yield but risky</li>
                <li>Capital 10-100x more efficient</li>
              </ul>
            </div>
          </div>
          <p style={{ lineHeight: 1.8, color: "var(--color-text-secondary)" }}>
            <strong>Key Insight:</strong> Concentrated liquidity is best for stable, range-bound pairs
            (stablecoins, correlated assets). For volatile assets, keep liquidity spread across wider ranges
            to avoid being knocked out of range.
          </p>
        </div>

        {/* Strategies to Minimize IL */}
        <div
          style={{
            backgroundColor: "var(--color-bg-card)",
            border: "1px solid var(--color-border)",
            borderRadius: 8,
            padding: 40,
            marginBottom: 40,
          }}
        >
          <h2 style={{ fontSize: "1.8rem", marginBottom: 20, color: "var(--color-primary)" }}>
            Strategies to Minimize Impermanent Loss
          </h2>
          <div style={{ display: "grid", gap: 15 }}>
            {[
              {
                title: "1. Farm Stablecoin Pools",
                text: "USDC/USDT, USDC/DAI pools have minimal volatility and therefore minimal IL. IL might be 0.01% even with active trading. Fees still accumulate steadily on high-volume stablecoin pairs.",
              },
              {
                title: "2. Choose Correlated Asset Pairs",
                text: "Pairs like ETH/stETH or wBTC/renBTC track each other closely and have lower price volatility relative to each other. IL between correlated assets is naturally lower.",
              },
              {
                title: "3. Use Concentrated Liquidity Carefully",
                text: "Set ranges based on 30-day historical volatility. Example: If volatility is 5%, set a 0.95-1.05 range. Wider ranges = safer but lower capital efficiency. Rebalance regularly.",
              },
              {
                title: "4. High-Volume / High-Fee Pools",
                text: "Farm pools with 1% fees (Uniswap V3) instead of 0.3% to earn more fee income relative to IL. Example: A volatile pair with 30% APY in fees can overcome even 20% IL.",
              },
              {
                title: "5. Avoid Farming Trending Assets",
                text: "Don’t LP shitcoins with 500% daily swings. IL on extreme volatility crushes you. Farm assets with stable, predictable trading volumes.",
              },
              {
                title: "6. Exit Before Major Crashes",
                text: "Use stop-losses on your LP position. If one asset crashes 50%+, IL becomes permanent. Exit early and redeploy in less volatile pairs.",
              },
            ].map((s) => (
              <div key={s.title} style={{ backgroundColor: "var(--color-bg)", padding: 20, borderRadius: 6 }}>
                <h3 style={{ color: "var(--color-primary-light)", marginBottom: 10 }}>{s.title}</h3>
                <p style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Fee vs IL Analysis */}
        <div
          style={{
            backgroundColor: "var(--color-bg-card)",
            border: "1px solid var(--color-border)",
            borderRadius: 8,
            padding: 40,
            marginBottom: 40,
          }}
        >
          <h2 style={{ fontSize: "1.8rem", marginBottom: 20, color: "var(--color-primary)" }}>
            Fee Income vs IL Breakeven Analysis
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: 20, color: "var(--color-text)" }}>
            To determine if a pool is worth farming, calculate your breakeven point:
          </p>
          <div
            style={{
              backgroundColor: "var(--color-bg)",
              padding: 20,
              borderRadius: 6,
              marginBottom: 20,
            }}
          >
            <p style={{ color: "var(--color-text)", marginBottom: 10 }}>
              <strong>Breakeven Calculation:</strong>
            </p>
            <ol style={{ color: "var(--color-text-secondary)", marginLeft: 20, lineHeight: 1.8 }}>
              <li>Estimate expected APY from trading fees (e.g., 15%)</li>
              <li>Estimate likely price volatility over your farming duration</li>
              <li>Calculate IL at likely price move (e.g., 2x price = 5.7% IL)</li>
              <li>If Fees &gt; IL: Farm it | If Fees &lt; IL: Avoid it</li>
            </ol>
          </div>
          <p style={{ lineHeight: 1.8, marginBottom: 15, color: "var(--color-text)" }}>
            <strong>Example Decision Tree:</strong>
          </p>
          <ul style={{ lineHeight: 2, marginLeft: 20, color: "var(--color-text)" }}>
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
            backgroundColor: "var(--color-bg-card)",
            border: "1px solid var(--color-border)",
            borderRadius: 8,
            padding: 40,
            marginBottom: 40,
          }}
        >
          <h2 style={{ fontSize: "1.8rem", marginBottom: 20, color: "var(--color-primary)" }}>
            Related Tools & Resources
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 15 }}>
            {[
              { href: "/tools/liquidity-pool-calculator", label: "Liquidity Pool Calculator" },
              { href: "/tools/defi-portfolio-dashboard", label: "DeFi Portfolio Dashboard" },
              { href: "/defi-lending/aave-v3-complete-guide", label: "Aave v3 Complete Guide" },
              { href: "/learn/what-is-a-liquidity-pool", label: "What is a Liquidity Pool" },
              { href: "/learn/concentrated-liquidity-uniswap-v3", label: "Concentrated Liquidity Guide" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="ilc-link" style={{
                display: "block",
                padding: 15,
                backgroundColor: "var(--color-bg)",
                border: "1px solid var(--color-border)",
                borderRadius: 6,
                color: "var(--color-primary)",
                textDecoration: "none",
                transition: "border-color 0.15s ease, background-color 0.15s ease",
              }}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div
          style={{
            backgroundColor: "var(--color-bg-card)",
            border: "1px solid var(--color-border)",
            borderRadius: 8,
            padding: 40,
          }}
        >
          <h2 style={{ fontSize: "1.8rem", marginBottom: 30, color: "var(--color-primary)" }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: "grid", gap: 20 }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "var(--color-bg)",
                  border: "1px solid var(--color-border)",
                  borderRadius: 6,
                  padding: 20,
                }}
              >
                <h3 style={{ fontSize: "1.1rem", marginBottom: 10, color: "var(--color-primary-light)" }}>
                  {faq.q}
                </h3>
                <p style={{ lineHeight: 1.7, color: "var(--color-text-secondary)" }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(appSchema),
        }}
      />

      <BackToTop />
    </div>
  );
}
