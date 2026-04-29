import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution from "@/components/AuthorAttribution";
import RelatedContent from "@/components/RelatedContent";

export const metadata: Metadata = {
  title: "Funding Rate Arbitrage Calculator | degen0x",
  description:
    "Calculate the annualized yield of a delta-neutral funding rate arbitrage trade — long spot, short perp (or the reverse). Documented formulas, worked examples on Binance, Bybit, Hyperliquid, dYdX, and the costs and risks that turn a 30% APR into a 6% APR after fees and capital lockup.",
  keywords: [
    "funding rate arbitrage calculator",
    "cash and carry crypto",
    "delta neutral funding yield",
    "perp funding farm",
    "basis trade calculator",
    "funding rate apr",
    "spot perp arbitrage",
    "degen0x",
  ],
  openGraph: {
    type: "article",
    title: "Funding Rate Arbitrage Calculator | degen0x",
    description:
      "Long spot, short perp, harvest the funding. Documented formulas for annualizing funding rates into a delta-neutral yield, with worked examples and the fees, borrow costs, and tail risks that decide whether the trade is real.",
    publishedTime: "2026-04-29T00:00:00Z",
    modifiedTime: "2026-04-29T00:00:00Z",
    url: "https://degen0x.com/tools/funding-rate-arbitrage-calculator",
    images: [
      {
        url: "https://degen0x.com/og-tools.svg",
        width: 1200,
        height: 630,
        alt: "Funding Rate Arbitrage Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Funding Rate Arbitrage Calculator | degen0x",
    description:
      "Long spot, short perp, collect the funding — annualized. Documented formulas, worked examples, and the costs that decide whether the APR survives.",
    image: "https://degen0x.com/og-tools.svg",
  },
  alternates: {
    canonical: "https://degen0x.com/tools/funding-rate-arbitrage-calculator",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Funding Rate Arbitrage Calculator",
  description:
    "Calculate the annualized yield of a delta-neutral funding rate arbitrage trade. Documented formulas for long-spot/short-perp and short-spot/long-perp legs, with worked examples and a costs-and-risks framework.",
  image: "https://degen0x.com/og-tools.svg",
  datePublished: "2026-04-29",
  dateModified: "2026-04-29",
  author: { "@type": "Organization", name: "degen0x" },
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is funding rate arbitrage?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Funding rate arbitrage — also called the cash-and-carry trade or basis trade — is a delta-neutral position that collects perpetual-futures funding payments without taking directional exposure. The classic version: long $X of spot crypto, short $X of perp on the same asset. If perp funding is positive (longs pay shorts), the short leg collects funding while the spot leg hedges price moves. The two legs net to roughly zero P&L on price changes, and the funding accrues as yield.",
        },
      },
      {
        "@type": "Question",
        name: "How do you annualize a funding rate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most major venues (Binance, Bybit, OKX, Hyperliquid) charge funding every 8 hours, which is 1095 funding intervals per year. Annualized funding APR ≈ funding_rate_per_interval × 1095. A 0.01% per 8h funding rate annualizes to roughly 10.95% APR. Some venues (dYdX historically, some smaller perps) use 1-hour funding, which gives 8760 intervals per year. Always check the venue's funding interval before annualizing — using the wrong multiplier can be off by 8x.",
        },
      },
      {
        "@type": "Question",
        name: "What is the formula for cash-and-carry yield?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Net APR ≈ (funding_rate × intervals_per_year) − (round-trip trading fees × turnover_per_year) − borrow_cost_on_collateral − opportunity_cost_of_capital. The first term is gross funding yield. The second is fees you pay to enter and exit both legs, amortized over the holding period. The third is the cost to borrow stablecoin collateral if you're using leverage on the perp leg. The fourth is what your capital would have earned in a T-bill or stablecoin lender. The trade is only real if the net is materially above your stablecoin yield benchmark.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between positive and negative funding arbitrage?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Positive funding (longs pay shorts) is the common case in bull regimes — perp price trades above spot index, funding pulls it down. To collect it: long spot, short perp. Negative funding (shorts pay longs) is the bear-regime mirror — perp trades below spot, funding pushes it up. To collect it: short spot, long perp. Short-spot is harder operationally — you need a venue that lets you borrow the asset (CEX margin, Aave) without prohibitive borrow rates, which often eats most of the funding income.",
        },
      },
      {
        "@type": "Question",
        name: "What can blow up a funding arbitrage trade?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Five known blow-up vectors. (1) Auto-deleveraging (ADL) on the short perp during a sharp rally if the venue's insurance fund is exhausted. (2) Spot-perp basis widening on the way out when you have to close — the slippage on a large round-trip can exceed weeks of accumulated funding. (3) Funding sign flips before you can unwind, turning a yield position into a cost position. (4) Stablecoin depeg on either the spot collateral or the perp margin currency. (5) Venue solvency or withdrawal halt, which can leave one leg stranded. Position sizing should assume any single venue can become unreachable for 24–72 hours.",
        },
      },
      {
        "@type": "Question",
        name: "What funding rate makes the trade worth doing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rule of thumb: aim for at least 2x your stablecoin lending benchmark net of fees. If 5% APR is available on USDC in T-bills or Aave, you want a funding-arb position that nets to at least 10% APR after every cost. Below that, the tail risk (ADL, depeg, basis widening) is not paid for. In 2024–2026 regimes, raw funding APRs on major perps have ranged from 5% to 40%+ during euphoria; net of all costs, sustainable yield has typically been in the 6–15% range.",
        },
      },
      {
        "@type": "Question",
        name: "How is funding rate arbitrage taxed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tax treatment is jurisdiction-specific and not advice. In many jurisdictions the spot leg's holding-period gains/losses, the perp leg's mark-to-market P&L, and the funding payments themselves are treated as separate taxable events with potentially different rates. The most common pitfall: a position designed to be P&L-flat in dollar terms can still produce material taxable income from the funding leg while the spot leg's wash-sale-like rules deny offsetting losses. Talk to a crypto tax professional before sizing into the strategy.",
        },
      },
    ],
  },
};

const linkStyle: React.CSSProperties = { color: "#58a6ff", textDecoration: "none" };
const h1Style: React.CSSProperties = {
  fontSize: 36,
  fontWeight: 800,
  marginBottom: 16,
  background: "linear-gradient(135deg, #f97316, #ef4444)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  lineHeight: 1.2,
};
const h2Style: React.CSSProperties = {
  fontSize: 24,
  fontWeight: 700,
  marginTop: 40,
  marginBottom: 16,
  color: "#f97316",
};
const h3Style: React.CSSProperties = {
  fontSize: 18,
  fontWeight: 700,
  marginTop: 24,
  marginBottom: 12,
  color: "#e6edf3",
};
const badgeStyle: React.CSSProperties = {
  padding: "6px 12px",
  borderRadius: 6,
  fontSize: 12,
  fontWeight: 600,
  marginRight: 8,
  marginBottom: 16,
  display: "inline-block",
};
const infoBoxStyle: React.CSSProperties = {
  background: "#161b22",
  border: "1px solid #30363d",
  borderRadius: 12,
  padding: 20,
  marginBottom: 24,
  lineHeight: 1.8,
};
const codeBoxStyle: React.CSSProperties = {
  background: "#0d1117",
  border: "1px solid #30363d",
  borderRadius: 8,
  padding: "16px 20px",
  marginBottom: 24,
  fontFamily:
    "ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace",
  fontSize: 14,
  color: "#e6edf3",
  overflowX: "auto",
};

export default function FundingRateArbitrageCalculator() {
  return (
    <article
      id="top"
      style={{
        background: "#0d1117",
        color: "#e6edf3",
        minHeight: "100vh",
        padding: "40px 20px",
        scrollBehavior: "smooth",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <nav
          aria-label="Breadcrumb"
          style={{ marginBottom: 20, fontSize: 13, color: "#8b949e" }}
        >
          <Link href="/" style={{ color: "#8b949e", textDecoration: "none" }}>
            Home
          </Link>
          <span style={{ margin: "0 6px" }}>›</span>
          <Link href="/tools" style={{ color: "#8b949e", textDecoration: "none" }}>
            Tools
          </Link>
          <span style={{ margin: "0 6px" }}>›</span>
          <span style={{ color: "#c9d1d9" }}>Funding Rate Arbitrage Calculator</span>
        </nav>

        <div style={{ marginBottom: 32 }}>
          <div>
            <span style={{ ...badgeStyle, background: "#f97316", color: "#fff" }}>
              Tools
            </span>
            <span style={{ ...badgeStyle, background: "#3d444d", color: "#e6edf3" }}>
              Intermediate
            </span>
            <span style={{ ...badgeStyle, background: "#1f6feb", color: "#fff" }}>
              Delta-Neutral Yield
            </span>
          </div>
          <h1 style={h1Style}>Funding Rate Arbitrage Calculator</h1>
          <p style={{ fontSize: 16, color: "#8b949e", marginBottom: 20 }}>
            The math behind the cash-and-carry trade — long spot, short perp,
            collect the funding. Documented formulas, three worked examples
            across Binance, Bybit, and Hyperliquid, and the fees, borrow costs,
            and tail risks that turn a paper 30% APR into a real 6% APR.
          </p>
          <div
            style={{
              display: "flex",
              gap: 24,
              fontSize: 14,
              color: "#8b949e",
              marginBottom: 24,
            }}
          >
            <span>Updated: April 29, 2026</span>
            <span>Reading time: 10-12 min</span>
          </div>
        </div>

        <AuthorAttribution
          author="0xMachina"
          role="Founder"
          publishedDate="2026-04-29"
          updatedDate="2026-04-29"
          readingTime={11}
          section="tools"
        />

        <div style={{ ...infoBoxStyle, borderColor: "#1f6feb" }}>
          <strong style={{ color: "#58a6ff" }}>News context — April 29, 2026.</strong>
          <p
            style={{
              marginTop: 12,
              marginBottom: 0,
              fontSize: 14,
              color: "#c9d1d9",
            }}
          >
            BTC ETF inflows are in their 8th consecutive day, which historically
            correlates with persistent positive funding on BTC perps as
            speculators chase the spot bid with leverage. Live funding APRs on
            BTC majors have spent most of the week in the 12–22% range. The
            window for clean cash-and-carry is open, but the same flow that
            opens it can slam shut on a single liquidity event — so the
            costs-and-risks math at the bottom of this page matters more than
            the gross-yield math at the top. See the{" "}
            <Link href="/news" style={linkStyle}>
              degen0x news feed
            </Link>{" "}
            for the latest funding context.
          </p>
        </div>

        <nav
          aria-label="Table of Contents"
          style={{ ...infoBoxStyle, marginBottom: 32 }}
        >
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>
            Table of Contents
          </h3>
          <ol style={{ marginLeft: 20, color: "#58a6ff" }}>
            <li style={{ marginBottom: 8 }}>
              <a href="#what-it-is" style={linkStyle}>What Funding Rate Arbitrage Actually Is</a>
            </li>
            <li style={{ marginBottom: 8 }}>
              <a href="#mechanics" style={linkStyle}>Cash-and-Carry Mechanics</a>
            </li>
            <li style={{ marginBottom: 8 }}>
              <a href="#annualization" style={linkStyle}>Annualizing the Funding Rate</a>
            </li>
            <li style={{ marginBottom: 8 }}>
              <a href="#net-yield-formula" style={linkStyle}>The Net-Yield Formula</a>
            </li>
            <li style={{ marginBottom: 8 }}>
              <a href="#worked-examples" style={linkStyle}>Three Worked Examples</a>
            </li>
            <li style={{ marginBottom: 8 }}>
              <a href="#sign-conventions" style={linkStyle}>Sign Conventions by Venue</a>
            </li>
            <li style={{ marginBottom: 8 }}>
              <a href="#blow-up-vectors" style={linkStyle}>Five Known Blow-Up Vectors</a>
            </li>
            <li style={{ marginBottom: 8 }}>
              <a href="#decision-framework" style={linkStyle}>Decision Framework</a>
            </li>
            <li style={{ marginBottom: 8 }}>
              <a href="#monitoring" style={linkStyle}>How to Monitor Live Rates</a>
            </li>
            <li style={{ marginBottom: 8 }}>
              <a href="#faq" style={linkStyle}>FAQ</a>
            </li>
          </ol>
        </nav>

        <section id="what-it-is" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>1. What Funding Rate Arbitrage Actually Is</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            A perpetual futures contract has no expiration. To keep its price
            tethered to spot, every venue charges a periodic <em>funding
            payment</em> that one side of the book pays the other based on the
            premium or discount of perp price to spot index. When perps trade
            above spot (positive funding) longs pay shorts. When perps trade
            below spot (negative funding) shorts pay longs. This pulls the perp
            price back to the index over time.
          </p>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            A funding-arbitrage trader is not taking a view on the underlying
            asset. They&apos;re taking a view on the <em>persistence of the
            funding rate</em>: that perp will keep trading at a premium (or
            discount) for long enough that the funding payments compound into
            a real yield. The directional risk on the asset is hedged out by
            holding equal and opposite legs in spot and perp.
          </p>
          <div style={infoBoxStyle}>
            <strong style={{ color: "#e6edf3" }}>One sentence summary</strong>
            <p
              style={{
                marginTop: 12,
                marginBottom: 0,
                fontSize: 14,
                color: "#c9d1d9",
              }}
            >
              You&apos;re renting balance sheet to the perp market and getting
              paid the funding rate as rent — the spot leg is just a hedge so
              the rent isn&apos;t eaten by directional moves.
            </p>
          </div>
        </section>

        <section id="mechanics" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>2. Cash-and-Carry Mechanics</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            The two canonical trades:
          </p>
          <pre style={codeBoxStyle}>
{`POSITIVE FUNDING (longs pay shorts)
  Buy   $X of spot asset (e.g., BTC on Coinbase)
  Sell  $X notional perp on the same asset (e.g., BTC-USDT-PERP on Binance)
  → Short perp leg collects funding every interval
  → Spot leg hedges directional moves
  → Net P&L per interval ≈ funding paid to shorts (minus fees)

NEGATIVE FUNDING (shorts pay longs)
  Borrow + sell  $X of spot asset
  Buy            $X notional perp
  → Long perp leg collects funding every interval
  → Short spot leg hedges directional moves
  → Net P&L per interval ≈ funding paid to longs − borrow rate on spot`}
          </pre>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            Positive-funding arb is operationally simpler — you only need spot
            buying power and perp shorting capacity. Negative-funding arb is
            usually the harder side because borrowing the asset to short spot
            costs something, and on most assets that borrow rate eats most or
            all of the funding income.
          </p>
        </section>

        <section id="annualization" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>3. Annualizing the Funding Rate</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            Funding is quoted per interval. To compare it to a stablecoin
            yield benchmark, annualize:
          </p>
          <pre style={codeBoxStyle}>
{`gross_apr = funding_rate_per_interval × intervals_per_year

Binance, Bybit, OKX, Hyperliquid:  8h funding → 1095 intervals/year
dYdX (historical), some smaller :  1h funding → 8760 intervals/year

Example: 0.01% per 8h on Binance
  gross_apr = 0.0001 × 1095 = 0.1095 = 10.95%`}
          </pre>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            This is <em>linear annualization</em>, which is the convention
            every venue and analytics dashboard uses. Compounded annualization
            is mathematically tighter but produces numbers that don&apos;t
            match what venues display, so most desks stay linear.
          </p>
          <div style={infoBoxStyle}>
            <strong style={{ color: "#facc15" }}>Watch the interval</strong>
            <p
              style={{
                marginTop: 12,
                marginBottom: 0,
                fontSize: 14,
                color: "#c9d1d9",
              }}
            >
              A 0.01% rate on a 1h-funding venue annualizes to 87.6%, not
              10.95%. Cross-venue comparisons that don&apos;t normalize the
              interval are wrong by close to an order of magnitude. Always
              read the venue&apos;s funding-interval spec before plugging
              numbers into a spreadsheet.
            </p>
          </div>
        </section>

        <section id="net-yield-formula" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>4. The Net-Yield Formula</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            Gross APR is what gets posted on Twitter. Net APR is what hits
            your account. The full equation:
          </p>
          <pre style={codeBoxStyle}>
{`net_apr  =  gross_funding_apr
          − round_trip_fee_drag
          − borrow_cost (negative-funding leg only)
          − stablecoin_opportunity_cost
          − basis_widening_haircut

where:
  round_trip_fee_drag = (spot_fee + perp_fee) × 2 × turnover_per_year
  basis_widening_haircut = expected exit slippage / holding_period`}
          </pre>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            Each subtraction has a real number behind it. Round-trip fees on
            taker-routed CEX flow are typically 8–20 bps for both legs
            combined. Borrow rates on spot lending platforms range from 0%
            (deeply oversupplied stablecoins) to 30%+ (small-cap altcoins
            during a short squeeze). Stablecoin opportunity cost in 2026 is
            sitting around 4–6% on T-bill-backed stables. Basis-widening
            haircut is the mean-reverting expectation of a few bps to a few
            hundred bps depending on size.
          </p>
        </section>

        <section id="worked-examples" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>5. Three Worked Examples</h2>

          <h3 style={h3Style}>Example A: BTC positive funding on Binance</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            BTC-USDT-PERP funding has been printing 0.015% per 8h for the past
            week (8th consecutive ETF inflow day, leveraged longs are
            persistent). Trade size: $100,000. Round-trip taker fees: 8 bps.
            Holding period: 30 days.
          </p>
          <pre style={codeBoxStyle}>
{`gross_apr = 0.00015 × 1095 = 16.4%
fee_drag (single round trip over 30d, annualized):
  0.0008 × (365/30) = 0.97%
stablecoin_opportunity_cost = 5.0%

net_apr ≈ 16.4% − 1.0% − 5.0% = 10.4%

Excess return over T-bill yield: ~10.4% on delta-neutral capital`}
          </pre>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            A 10.4% excess return delta-neutral is a real trade if the funding
            rate persists. The historical kill condition: a fast spot-up move
            that wicks the perp short into ADL territory. Position size and
            stop-out plan determine survival.
          </p>

          <h3 style={h3Style}>Example B: SOL extreme positive funding on Hyperliquid</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            SOL perp funding spikes to 0.05% per 8h during a memecoin frenzy.
            Trade size: $50,000. Round-trip maker fees on Hyperliquid: ~4 bps
            combined. Holding period: 7 days.
          </p>
          <pre style={codeBoxStyle}>
{`gross_apr = 0.0005 × 1095 = 54.75%
fee_drag (annualized over 7d):
  0.0004 × (365/7) = 2.09%
stablecoin_opportunity_cost = 5.0%
basis_widening_haircut (estimated, low-liquidity exit) = 3.0%

net_apr ≈ 54.75% − 2.09% − 5.0% − 3.0% = 44.66%`}
          </pre>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            A 44.66% net APR is too good to be free — it&apos;s paid for by
            the very real probability that SOL rips +20% in a session and ADL
            closes the short before the funding accrues. Sizing here should
            be 1/4 of normal cash-and-carry size and the position should be
            unwound the moment funding starts to mean-revert.
          </p>

          <h3 style={h3Style}>Example C: ETH negative funding on dYdX</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            Negative funding regime: ETH perp at −0.008% per 1h on dYdX
            (8760 intervals/year). To collect, you long perp and short spot
            (borrowing ETH to sell). Borrow rate on ETH: 1.5% APR. Trade
            size: $50,000. Round-trip fees: 12 bps. Holding period: 14 days.
          </p>
          <pre style={codeBoxStyle}>
{`gross_apr = 0.00008 × 8760 = 70.08%   (sign-flipped: longs receive)
fee_drag (annualized over 14d):
  0.0012 × (365/14) = 3.13%
borrow_cost_on_short_spot = 1.5%
stablecoin_opportunity_cost = 5.0%
basis_widening_haircut = 1.0%

net_apr ≈ 70.08% − 3.13% − 1.5% − 5.0% − 1.0% = 59.45%`}
          </pre>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            Negative-funding regimes are usually short-lived (capitulation
            bottoms, sudden bear flips) and the gross numbers can look
            spectacular. The risk: spot bottom, funding sign flips back to
            positive within hours, and you&apos;re left holding a position
            that now bleeds the same rate it was paying. Plan the exit
            before the entry.
          </p>
        </section>

        <section id="sign-conventions" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>6. Sign Conventions by Venue</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            Every venue agrees on the economics — perp premium pulls toward
            spot via a periodic transfer between longs and shorts — but the
            displayed sign and interval differ. The four conventions you&apos;ll
            see in 2026:
          </p>
          <pre style={codeBoxStyle}>
{`Binance, Bybit, OKX, Bitget    : 8h, signed (positive = longs pay shorts)
Hyperliquid                    : 8h, signed (same convention as CEX)
dYdX v4 (Cosmos)               : 1h, signed
GMX v2, Vertex                 : continuous accrual, signed
Drift, Jupiter Perps           : 1h or hybrid, signed`}
          </pre>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            Cross-venue arb (long perp on one venue, short perp on another)
            is a separate strategy from cash-and-carry — same family, but the
            risk profile is dominated by venue-specific basis dispersion, not
            spot-perp basis. Same math, different inputs.
          </p>
        </section>

        <section id="blow-up-vectors" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>7. Five Known Blow-Up Vectors</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            Cash-and-carry is sold as &quot;risk-free yield.&quot; It is not.
            Five recurring failure modes:
          </p>
          <div style={infoBoxStyle}>
            <strong style={{ color: "#f97316" }}>1. ADL on the short perp</strong>
            <p style={{ marginTop: 8, fontSize: 14, color: "#c9d1d9" }}>
              In a sharp rally, the venue&apos;s insurance fund can be
              exhausted by liquidations. Auto-deleveraging then closes the
              most-profitable shorts (often including delta-neutral
              positions) at the bankruptcy price. Your spot leg is now
              unhedged into a green candle.
            </p>
          </div>
          <div style={infoBoxStyle}>
            <strong style={{ color: "#f97316" }}>2. Basis widening on exit</strong>
            <p style={{ marginTop: 8, fontSize: 14, color: "#c9d1d9" }}>
              When you unwind, the spot-perp spread on a $1M+ ticket can be
              50–200 bps depending on order book depth and time of day.
              That&apos;s weeks of accumulated funding given back to the
              market. Always model exit slippage at 2–3x the entry slippage.
            </p>
          </div>
          <div style={infoBoxStyle}>
            <strong style={{ color: "#f97316" }}>3. Funding sign flip</strong>
            <p style={{ marginTop: 8, fontSize: 14, color: "#c9d1d9" }}>
              Funding mean-reverts. A position entered at +0.04% per 8h can
              find itself at −0.02% within a day if sentiment flips. The
              same balance sheet now bleeds the same rate it was earning,
              and your unwind cost is locked in regardless.
            </p>
          </div>
          <div style={infoBoxStyle}>
            <strong style={{ color: "#f97316" }}>4. Stablecoin depeg</strong>
            <p style={{ marginTop: 8, fontSize: 14, color: "#c9d1d9" }}>
              Spot collateral or perp margin denominated in a stablecoin
              creates depeg risk. USDT or USDC dropping 2% in a stress event
              can wipe out a year of funding yield in a single afternoon.
              Diversification across stables and venues is the only mitigant.
            </p>
          </div>
          <div style={infoBoxStyle}>
            <strong style={{ color: "#f97316" }}>5. Venue solvency / withdrawal halt</strong>
            <p style={{ marginTop: 8, fontSize: 14, color: "#c9d1d9" }}>
              FTX is the canonical case. Either leg of the trade can be
              stranded if a CEX halts withdrawals, and the surviving leg is
              now naked directional. Position sizing should assume any single
              venue can become unreachable for 24–72 hours.
            </p>
          </div>
        </section>

        <section id="decision-framework" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>8. Decision Framework</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            Before opening a cash-and-carry, write down:
          </p>
          <ol style={{ marginLeft: 24, color: "#c9d1d9", lineHeight: 1.9 }}>
            <li><strong>Net APR</strong> — gross funding minus all five subtractions in section 4. Below 2x stablecoin yield, walk away.</li>
            <li><strong>Holding period</strong> — your fee drag is amortized over this. 7-day positions look much worse than 90-day positions on the same gross APR.</li>
            <li><strong>Exit plan</strong> — a defined trigger (funding mean-reversion, sign flip, basis widening) at which you unwind. Trades without exit plans become career-ending positions.</li>
            <li><strong>Venue exposure</strong> — what fraction of capital sits at each CEX or chain. Cap any single venue at 25% of strategy capital.</li>
            <li><strong>ADL probability</strong> — venues publish ADL rankings. If you&apos;re top-decile in ADL queue, your &quot;delta-neutral&quot; position is one liquidation cascade from being delta-positive.</li>
          </ol>
          <p style={{ marginTop: 16, marginBottom: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            All five answers should fit on a single index card. If they
            don&apos;t, the trade is too complicated for the size you&apos;re
            considering.
          </p>
        </section>

        <section id="monitoring" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>9. How to Monitor Live Rates</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            Funding rates update every interval — every 8 hours on most
            venues, every 1 hour on a few. The minimum monitoring kit:
          </p>
          <ol style={{ marginLeft: 24, color: "#c9d1d9", lineHeight: 1.9 }}>
            <li>The venue&apos;s native funding history page (Binance: futures funding history, Bybit: funding rate page, Hyperliquid: per-asset funding chart).</li>
            <li>A cross-venue dashboard — see the{" "}
              <Link href="/tools/funding-rate-tracker" style={linkStyle}>funding rate tracker</Link>{" "}
              for live aggregation across major perps.</li>
            <li>Open-interest and basis charts to detect whether funding is
              about to mean-revert (rising OI with falling funding is the
              classic late-cycle setup).</li>
            <li>An ADL ranking screen for the venues you&apos;re shorting on,
              checked at least daily.</li>
          </ol>
          <div style={infoBoxStyle}>
            <strong style={{ color: "#e6edf3" }}>Pre-trade checklist</strong>
            <p style={{ marginTop: 12, fontSize: 14, color: "#c9d1d9" }}>
              Net APR &gt; 2x stablecoin benchmark · holding period defined ·
              exit trigger defined · venue exposure capped · ADL rank checked
              · stablecoin diversification confirmed · borrow rate verified
              (if negative-funding leg).
            </p>
          </div>
        </section>

        <section id="faq" style={{ scrollMarginTop: 24, marginTop: 48 }}>
          <h2 style={h2Style}>10. Frequently Asked Questions</h2>
          <div style={{ ...infoBoxStyle, marginBottom: 16 }}>
            <h3
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: "#58a6ff",
                marginBottom: 10,
              }}
            >
              What is funding rate arbitrage?
            </h3>
            <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.7, marginBottom: 0 }}>
              A delta-neutral trade that collects perp funding payments by
              holding equal and opposite legs in spot and perp. The price
              risk on the asset cancels; the funding accrues as yield.
            </p>
          </div>
          <div style={{ ...infoBoxStyle, marginBottom: 16 }}>
            <h3
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: "#58a6ff",
                marginBottom: 10,
              }}
            >
              How do you annualize a funding rate?
            </h3>
            <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.7, marginBottom: 0 }}>
              Multiply the rate per interval by the number of intervals per
              year. 8h funding × 1095. 1h funding × 8760. A 0.01% per 8h
              rate annualizes to ~10.95%.
            </p>
          </div>
          <div style={{ ...infoBoxStyle, marginBottom: 16 }}>
            <h3
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: "#58a6ff",
                marginBottom: 10,
              }}
            >
              What is the net-yield formula?
            </h3>
            <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.7, marginBottom: 0 }}>
              Net APR ≈ gross funding APR − round-trip fees (annualized) −
              borrow cost on the spot leg (negative-funding only) −
              stablecoin opportunity cost − basis-widening exit haircut.
            </p>
          </div>
          <div style={{ ...infoBoxStyle, marginBottom: 16 }}>
            <h3
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: "#58a6ff",
                marginBottom: 10,
              }}
            >
              What is the difference between positive and negative funding arbitrage?
            </h3>
            <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.7, marginBottom: 0 }}>
              Positive funding (longs pay shorts): long spot, short perp.
              Negative funding (shorts pay longs): short spot, long perp.
              The negative side is harder because borrowing the spot asset
              costs something that often eats most of the income.
            </p>
          </div>
          <div style={{ ...infoBoxStyle, marginBottom: 16 }}>
            <h3
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: "#58a6ff",
                marginBottom: 10,
              }}
            >
              What can blow up a funding arbitrage trade?
            </h3>
            <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.7, marginBottom: 0 }}>
              Auto-deleveraging on the short perp, basis widening on exit,
              funding sign flips, stablecoin depegs, and venue solvency or
              withdrawal halts. Sizing should assume any one of these can
              hit on any given week.
            </p>
          </div>
          <div style={{ ...infoBoxStyle, marginBottom: 16 }}>
            <h3
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: "#58a6ff",
                marginBottom: 10,
              }}
            >
              What funding rate makes the trade worth doing?
            </h3>
            <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.7, marginBottom: 0 }}>
              Aim for at least 2x your stablecoin lending benchmark, net of
              every cost. In 2024–2026 regimes, sustainable net yield has
              typically been in the 6–15% range despite gross funding
              spiking much higher during euphoria.
            </p>
          </div>
          <div style={{ ...infoBoxStyle, marginBottom: 16 }}>
            <h3
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: "#58a6ff",
                marginBottom: 10,
              }}
            >
              How is funding rate arbitrage taxed?
            </h3>
            <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.7, marginBottom: 0 }}>
              Jurisdiction-specific. The spot leg, the perp leg, and the
              funding flow are often three separate taxable events. A
              dollar-flat position can still produce material taxable
              income from funding while the spot leg&apos;s losses are
              treated unfavorably. Talk to a crypto tax professional
              before sizing in.
            </p>
          </div>
        </section>

        <div
          style={{
            ...infoBoxStyle,
            marginTop: 48,
            fontSize: 13,
            color: "#8b949e",
          }}
        >
          <strong>Disclaimer:</strong> This content is for informational
          purposes only and is not financial advice. Funding rate arbitrage
          is not risk-free yield — auto-deleveraging, basis widening,
          funding sign flips, stablecoin depegs, and venue solvency can each
          turn a positive-carry position into a loss. The formulas on this
          page are documented approximations using linear annualization and
          ignore venue-specific edge cases (mark-vs-index calculations,
          insurance-fund haircuts, ADL pricing). Always read the venue&apos;s
          live funding rate, funding interval, fee schedule, and ADL ranking
          before entering. Do your own research.
        </div>

        <div
          style={{
            marginTop: 32,
            paddingTop: 24,
            borderTop: "1px solid #30363d",
            fontSize: 14,
            color: "#8b949e",
          }}
        >
          <p style={{ marginBottom: 16 }}>Suggested reading:</p>
          <ul style={{ marginLeft: 20, lineHeight: 1.9 }}>
            <li>
              <Link href="/tools/funding-rate-tracker" style={linkStyle}>
                Funding Rate Tracker
              </Link>
            </li>
            <li>
              <Link href="/tools/liquidation-price-calculator" style={linkStyle}>
                Liquidation Price Calculator
              </Link>
            </li>
            <li>
              <Link
                href="/learn/crypto-funding-rate-arbitrage-cash-carry-guide-2026"
                style={linkStyle}
              >
                Funding Rate Arbitrage &amp; Cash-and-Carry Guide
              </Link>
            </li>
            <li>
              <Link
                href="/learn/funding-rates-crypto-explained"
                style={linkStyle}
              >
                Funding Rates Explained
              </Link>
            </li>
            <li>
              <Link
                href="/learn/perpetual-futures-guide"
                style={linkStyle}
              >
                Perpetual Futures Guide
              </Link>
            </li>
            <li>
              <Link
                href="/trading/crypto-futures-funding-rate-strategy"
                style={linkStyle}
              >
                Crypto Futures Funding Rate Strategy
              </Link>
            </li>
            <li>
              <Link href="/tools/dca-calculator" style={linkStyle}>
                DCA Calculator
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <RelatedContent
        category="tools"
        currentSlug="/tools/funding-rate-arbitrage-calculator"
      />
    </article>
  );
}
