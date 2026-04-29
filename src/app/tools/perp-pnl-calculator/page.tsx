import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution from "@/components/AuthorAttribution";
import RelatedContent from "@/components/RelatedContent";

export const metadata: Metadata = {
  title: "Perp PnL Calculator | degen0x",
  description:
    "Calculate the full PnL of a perpetual position — price PnL plus funding accrual minus fees. Documented formulas for longs and shorts, isolated and cross margin, with ROE vs ROI breakdowns and worked examples traders actually use.",
  keywords: [
    "perp pnl calculator",
    "perpetual futures pnl",
    "perp profit and loss formula",
    "funding pnl",
    "isolated margin pnl",
    "roe vs roi perp",
    "mark to market pnl",
    "degen0x",
  ],
  openGraph: {
    type: "article",
    title: "Perp PnL Calculator | degen0x",
    description:
      "Price PnL plus funding accrual minus fees. The full PnL math for perpetual longs and shorts, isolated and cross, with worked examples and ROE vs ROI heuristics.",
    publishedTime: "2026-04-29T00:00:00Z",
    modifiedTime: "2026-04-29T00:00:00Z",
    url: "https://degen0x.com/tools/perp-pnl-calculator",
    images: [
      {
        url: "https://degen0x.com/og-tools.svg",
        width: 1200,
        height: 630,
        alt: "Perp PnL Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Perp PnL Calculator | degen0x",
    description:
      "Price PnL + funding − fees. The full PnL math for perpetual longs and shorts, isolated and cross margin, with worked examples.",
    image: "https://degen0x.com/og-tools.svg",
  },
  alternates: {
    canonical: "https://degen0x.com/tools/perp-pnl-calculator",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Perp PnL Calculator",
  description:
    "Calculate the full PnL of a perpetual position — price PnL plus funding accrual minus fees. Documented formulas for longs and shorts, isolated and cross margin, with ROE vs ROI breakdowns.",
  image: "https://degen0x.com/og-tools.svg",
  datePublished: "2026-04-29",
  dateModified: "2026-04-29",
  author: { "@type": "Organization", name: "degen0x" },
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the perp PnL formula for a long?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For a perpetual long, total_pnl = (exit_price − entry_price) × position_size − Σ funding_payments − fees. Position size here is the number of contract units (e.g., BTC count, not USD notional). Funding payments are summed over every funding interval the position was open across; longs pay shorts when funding is positive and receive when funding is negative. Fees are entry taker fee + exit taker fee on the notional, minus any maker rebates earned.",
        },
      },
      {
        "@type": "Question",
        name: "What is the perp PnL formula for a short?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For a perpetual short, total_pnl = (entry_price − exit_price) × position_size + Σ funding_payments − fees. Sign on funding flips because shorts receive when funding is positive and pay when funding is negative. The other terms are identical to the long formula. Note that the position-size term is the absolute number of units; the sign is captured by the entry-vs-exit ordering.",
        },
      },
      {
        "@type": "Question",
        name: "How do I calculate funding PnL on a perpetual position?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Funding PnL = position_notional × funding_rate × number_of_funding_intervals_held, with sign per direction. On most major venues (Binance, Bybit, OKX) funding settles every 8 hours; Hyperliquid and dYdX settle every 1 hour. A long holding $10,000 notional through three 8h intervals at +0.01% funding pays $10,000 × 0.0001 × 3 = $3.00. A short in the same regime receives $3.00. The funding rate is a per-interval percentage on most venues but is sometimes quoted as an annualized number — read the venue's docs to confirm units.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between ROE and ROI on a perp position?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ROI on a perp position is total_pnl / position_notional — the return on the size of your exposure. ROE is total_pnl / margin_posted — the return on your actual capital at risk. With 10x leverage, a 1% favorable price move yields ~1% ROI but ~10% ROE. ROE is the right number to track for capital efficiency; ROI is the right number for raw directional accuracy. Most venue interfaces display ROE on the position panel because it's the more intuitive 'how much did I make on the money I put in' figure.",
        },
      },
      {
        "@type": "Question",
        name: "How does mark-to-market PnL differ from realized PnL on a perp?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Realized PnL is what you keep after closing the position: (exit_price − entry_price) × size minus funding and fees. Mark-to-market (unrealized) PnL is computed continuously against the venue's mark price — typically an index of multiple spot venues plus a moving-average smoother — not the last trade on the venue. The two can differ during fast moves: a wick on the venue's tape may not move the mark, so your unrealized PnL won't reflect the wick even though traders saw it. Realized PnL crystallizes when you close; everything before that is mark.",
        },
      },
      {
        "@type": "Question",
        name: "Are fees included in the displayed PnL on perp venues?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mostly yes for entry fees on the venue's PnL display, but usage varies. Binance displays PnL net of entry+exit fees on the order history but the live position panel often shows pre-fee PnL. Bybit, OKX and Hyperliquid's behaviors differ in detail. Always reconcile against the trade history CSV for tax and reporting purposes — that is the authoritative net-of-fees record. Funding payments are usually shown as a separate line item on most venues and need to be summed manually if you want the total cost-of-carry on a multi-day hold.",
        },
      },
      {
        "@type": "Question",
        name: "How does cross margin change perp PnL accounting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PnL on each individual position computes the same way in cross or isolated mode. What differs is the margin denominator for ROE: cross-margin ROE uses total account equity (cash + unrealized PnL across all positions) rather than the slice dedicated to a single position. A profitable hedge widens the effective margin base and dilutes per-position ROE while reducing per-position liquidation risk. Most professional traders track per-position ROI for directional skill and account-level ROE for capital efficiency, treating them as separate metrics rather than one number.",
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

export default function PerpPnlCalculator() {
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
          <span style={{ color: "#c9d1d9" }}>Perp PnL Calculator</span>
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
              Leverage &amp; Margin
            </span>
          </div>
          <h1 style={h1Style}>Perp PnL Calculator</h1>
          <p style={{ fontSize: 16, color: "#8b949e", marginBottom: 20 }}>
            Total PnL on a perpetual position is price PnL plus funding accrual
            minus fees — three line items, three different mechanics. Below
            are the documented formulas for longs and shorts, the funding-PnL
            math that decides whether your trade was actually profitable
            after a multi-day hold, and ROE vs ROI breakdowns with worked
            examples.
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
            <span>Reading time: 9-11 min</span>
          </div>
        </div>

        <AuthorAttribution
          author="0xMachina"
          role="Founder"
          publishedDate="2026-04-29"
          updatedDate="2026-04-29"
          readingTime={10}
          section="tools"
        />

        <div style={{ ...infoBoxStyle, borderColor: "#1f6feb" }}>
          <strong style={{ color: "#58a6ff" }}>Why funding matters more in 2026.</strong>
          <p
            style={{
              marginTop: 12,
              marginBottom: 0,
              fontSize: 14,
              color: "#c9d1d9",
            }}
          >
            With BTC spot volume thin and perp open interest concentrated, the
            funding-PnL component of a multi-day hold is no longer a rounding
            error — it can flip a profitable directional call into a loser
            after fees. The math on this page splits price PnL, funding PnL,
            and fees into independent line items so you can see which one
            actually drove the outcome. See the{" "}
            <Link href="/tools/funding-rate-tracker" style={linkStyle}>
              funding rate tracker
            </Link>{" "}
            for live cross-venue funding context.
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
              <a href="#first-principles" style={linkStyle}>Perp PnL From First Principles</a>
            </li>
            <li style={{ marginBottom: 8 }}>
              <a href="#price-pnl" style={linkStyle}>Price PnL — Long and Short</a>
            </li>
            <li style={{ marginBottom: 8 }}>
              <a href="#funding-pnl" style={linkStyle}>Funding PnL Mechanics</a>
            </li>
            <li style={{ marginBottom: 8 }}>
              <a href="#fees" style={linkStyle}>Fees — Taker, Maker, and Rebates</a>
            </li>
            <li style={{ marginBottom: 8 }}>
              <a href="#worked-examples" style={linkStyle}>Three Worked Examples</a>
            </li>
            <li style={{ marginBottom: 8 }}>
              <a href="#roe-vs-roi" style={linkStyle}>ROE vs ROI — Which to Track</a>
            </li>
            <li style={{ marginBottom: 8 }}>
              <a href="#mtm-vs-realized" style={linkStyle}>Mark-to-Market vs Realized</a>
            </li>
            <li style={{ marginBottom: 8 }}>
              <a href="#cross-margin" style={linkStyle}>PnL Accounting in Cross Margin</a>
            </li>
            <li style={{ marginBottom: 8 }}>
              <a href="#tax-reporting" style={linkStyle}>Tax and Reporting Considerations</a>
            </li>
            <li style={{ marginBottom: 8 }}>
              <a href="#faq" style={linkStyle}>FAQ</a>
            </li>
          </ol>
        </nav>

        <section id="first-principles" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>1. Perp PnL From First Principles</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            A perpetual futures contract has no expiry. The contract tracks
            spot via a periodic funding payment between longs and shorts that
            pulls the perp price toward the index. Because the contract
            persists, total PnL on a perp position is not just
            entry-minus-exit — it is the price PnL accumulated while the
            position was open, plus or minus every funding payment that
            settled while you held it, minus every fee charged at entry and
            exit (and any liquidation fee if the engine closed the position).
          </p>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            On a fast intraday trade, fees and funding are usually a small
            fraction of price PnL and most traders ignore them. On a
            multi-day or multi-week hold — common for trend-following or
            basis trades — funding can rival or exceed price PnL. Pulling
            the three line items apart is the only way to know whether a
            position was actually profitable on direction or simply
            harvesting a one-sided funding regime.
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
              total_pnl = price_pnl + funding_pnl − fees, where each component
              has its own sign convention and time dependency. ROE divides
              the total by margin posted; ROI divides it by position notional.
            </p>
          </div>
        </section>

        <section id="price-pnl" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>2. Price PnL — Long and Short</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            For a linear perpetual (settled in USD or a USD-pegged stable
            against an underlying like BTC or ETH), the price PnL formulas
            are direct:
          </p>
          <pre style={codeBoxStyle}>
{`Long:   price_pnl = (exit_price − entry_price) × position_size
Short:  price_pnl = (entry_price − exit_price) × position_size`}
          </pre>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            <code>position_size</code> is the number of contract units —
            BTC count, ETH count, etc. — not USD notional. If your venue
            quotes size in USD (some inverse perps and a few legacy linear
            interfaces), divide by entry price to get unit count first, then
            apply the formula in the unit space.
          </p>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            For inverse perpetuals (settled in the underlying — e.g., a
            BTC-margined BTC perp on Bitmex or Bybit), the formula reverses:
            price_pnl in BTC equals position_size_in_USD × (1/entry_price −
            1/exit_price) for a long. Inverse perps are now a minority of
            the market, but if you trade them the unit math matters and is
            easy to get wrong.
          </p>
        </section>

        <section id="funding-pnl" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>3. Funding PnL Mechanics</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            Funding rate is the periodic payment between longs and shorts
            that pulls the perp mark toward spot. Positive funding =&gt; longs
            pay shorts (perp is trading rich vs spot). Negative funding =&gt;
            shorts pay longs (perp is trading cheap). The funding payment on
            an open position at the funding settlement time is:
          </p>
          <pre style={codeBoxStyle}>
{`funding_payment = position_notional × funding_rate

Long  pays  if  funding_rate > 0,  receives  if  funding_rate < 0
Short receives if funding_rate > 0,  pays    if  funding_rate < 0

funding_pnl = − Σ funding_payments  (long)
funding_pnl = + Σ funding_payments  (short)`}
          </pre>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            Funding intervals vary by venue: Binance, Bybit, OKX settle
            every 8 hours; Hyperliquid and dYdX settle every 1 hour; some
            smaller venues settle every 4 hours. The published rate is the
            per-interval rate on most venues — confirm in the docs because
            a few venues quote annualized.
          </p>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            Annualizing per-interval funding for comparison purposes:
            multiply per-interval rate by intervals-per-year (1095 for 8h,
            8760 for 1h). A 0.01% per-8h funding rate equates to roughly
            10.95% APR on the position notional — non-trivial drag on a
            multi-month hold.
          </p>
          <div style={infoBoxStyle}>
            <strong style={{ color: "#facc15" }}>Funding-rate trap on size scaling</strong>
            <p
              style={{
                marginTop: 12,
                marginBottom: 0,
                fontSize: 14,
                color: "#c9d1d9",
              }}
            >
              Funding scales with notional, not margin. Doubling leverage
              while keeping margin fixed doubles the funding payment exposure
              even though intuition suggests funding is a margin-side cost.
              This is why high-leverage trades against persistent funding
              regimes bleed faster than the leverage ratio alone would
              suggest.
            </p>
          </div>
        </section>

        <section id="fees" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>4. Fees — Taker, Maker, and Rebates</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            Major perp venues charge per-fill fees on the position notional.
            Taker fees (you cross the spread) are usually 2–5 bps; maker
            fees (you provide liquidity) are usually 0–2 bps and sometimes
            negative (you receive a rebate). On a round-trip trade — entry
            and exit — the fee impact is approximately:
          </p>
          <pre style={codeBoxStyle}>
{`fees = (entry_fee_rate + exit_fee_rate) × position_notional

Round-trip taker on Binance @ 4 bps:  0.04% × 2 = 0.08% of notional
Round-trip taker on Hyperliquid @ 3.5 bps: 0.07% of notional
Maker entry + taker exit on Bybit @ 1+5.5: 0.065% of notional`}
          </pre>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            For high-frequency strategies, fee tier matters more than
            funding for hold periods under a few hours. For positions held
            longer than ~24 hours, funding usually dominates fees as the
            cost-of-carry. Match the fee accounting to the hold horizon
            you&apos;re analyzing.
          </p>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            VIP tier fees, BNB/exchange-token discounts, and referral
            rebates compound — a 25% referral discount on a 4 bp taker fee
            takes round-trip fees from 0.08% to 0.06%, which is a meaningful
            edge for active strategies. Always reconcile actual paid fees
            from the trade-history export, not the headline rate.
          </p>
        </section>

        <section id="worked-examples" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>5. Three Worked Examples</h2>

          <h3 style={h3Style}>Example A: 5x BTC long, 2-day hold, positive funding regime</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            You enter long BTC at $76,000 with $10,000 margin posting a 5x
            position ($50,000 notional ≈ 0.658 BTC). You exit two days later
            at $78,000. Funding ran +0.012% per 8h for the entire hold (six
            settlements at +0.012%). Round-trip taker fees at 4 bps each side.
          </p>
          <pre style={codeBoxStyle}>
{`price_pnl  = ($78,000 − $76,000) × 0.658
           = +$1,316.00

funding_pnl = − $50,000 × 0.00012 × 6
           = − $36.00       (long pays in positive-funding regime)

fees       = $50,000 × 0.0004 × 2
           = − $40.00

total_pnl  = $1,316 − $36 − $40
           = +$1,240.00

ROE        = $1,240 / $10,000 = +12.40%
ROI        = $1,240 / $50,000 = +2.48%`}
          </pre>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            Direction was the dominant driver — funding plus fees combined
            cost ~5.8% of the price PnL, which is in the typical range for
            a multi-day hold in normal-funding conditions. ROE of 12.4% on
            a 2.6% spot move illustrates leverage&apos;s capital efficiency
            (and its symmetry — the same move down would have been a
            ~12.4% ROE loss).
          </p>

          <h3 style={h3Style}>Example B: 10x ETH short, 7-day hold, persistently positive funding</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            You enter short ETH at $3,000 with $5,000 margin posting a 10x
            position ($50,000 notional ≈ 16.667 ETH). You exit a week later
            at $2,940. Funding ran +0.025% per 8h for the entire week (21
            settlements at +0.025%, an unusually rich-perp regime). Round-trip
            taker fees at 5 bps each side.
          </p>
          <pre style={codeBoxStyle}>
{`price_pnl  = ($3,000 − $2,940) × 16.667
           = +$1,000.00

funding_pnl = + $50,000 × 0.00025 × 21
           = + $262.50      (short receives in positive-funding regime)

fees       = $50,000 × 0.0005 × 2
           = − $50.00

total_pnl  = $1,000 + $262.50 − $50
           = +$1,212.50

ROE        = $1,212.50 / $5,000 = +24.25%
ROI        = $1,212.50 / $50,000 = +2.43%`}
          </pre>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            The short captured a small directional move and harvested a
            persistent funding stream worth ~26% of the price PnL. In rich
            perp regimes — common around major-narrative tops — the
            funding component can flip a flat-to-slightly-losing
            directional call into a winning trade. This is the structural
            edge funding-rate-arb strategies exploit (see the{" "}
            <Link href="/tools/funding-rate-arbitrage-calculator" style={linkStyle}>
              funding rate arbitrage calculator
            </Link>{" "}
            for the delta-neutral version).
          </p>

          <h3 style={h3Style}>Example C: 20x SOL long, fast intraday flush</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            You enter long SOL at $200 with $1,000 margin posting a 20x
            position ($20,000 notional = 100 SOL). 90 minutes later you
            exit at $204. No funding settlement crossed the hold window.
            Round-trip taker fees at 5 bps each side.
          </p>
          <pre style={codeBoxStyle}>
{`price_pnl  = ($204 − $200) × 100
           = +$400.00

funding_pnl = $0           (no settlement crossed)

fees       = $20,000 × 0.0005 × 2
           = − $20.00

total_pnl  = $400 − $0 − $20
           = +$380.00

ROE        = $380 / $1,000  = +38.00%
ROI        = $380 / $20,000 = +1.90%`}
          </pre>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            Fast intraday trades have negligible funding exposure. The fee
            line is the dominant non-price drag — at 20x leverage, fees ate
            5% of the price PnL on a single round-trip. High-frequency
            scalping at high leverage is brutally fee-sensitive; venue
            tier and maker/taker mix matter as much as the directional call.
          </p>
        </section>

        <section id="roe-vs-roi" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>6. ROE vs ROI — Which to Track</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            ROE (return on equity) divides PnL by margin posted. ROI (return
            on investment) divides PnL by position notional. They tell
            different stories:
          </p>
          <div style={infoBoxStyle}>
            <p style={{ marginBottom: 12, color: "#c9d1d9" }}>
              <strong style={{ color: "#22c55e" }}>ROI is directional accuracy.</strong>{" "}
              At 1% ROI, the price moved 1% in your favor net of carry —
              regardless of leverage. Two traders with the same conviction
              and exit, one at 2x and one at 20x, will print roughly the
              same ROI. ROI is the metric to compare directional skill
              across positions of different sizes.
            </p>
            <p style={{ marginBottom: 12, color: "#c9d1d9" }}>
              <strong style={{ color: "#facc15" }}>ROE is capital efficiency.</strong>{" "}
              At 20% ROE, the position returned 20% of the cash you put up.
              The 20x trader who got the same direction as the 2x trader
              prints 10x the ROE — at 10x the survival-distance risk. ROE
              is the metric to compare across leverage choices and to size
              for drawdown tolerance.
            </p>
            <p style={{ marginBottom: 0, color: "#c9d1d9" }}>
              <strong style={{ color: "#ef4444" }}>The trap.</strong> Most
              venue interfaces display ROE as the headline number on the
              position panel. Comparing ROE across positions of different
              leverage paints high-leverage trades as &quot;more skilled&quot;
              when they were just more capital-efficient on the same
              direction. Track both, and report ROI when comparing strategies.
            </p>
          </div>
        </section>

        <section id="mtm-vs-realized" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>7. Mark-to-Market vs Realized</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            Realized PnL crystallizes when a position closes — by your exit
            order, by liquidation, or by ADL. Mark-to-market (unrealized)
            PnL is what the position panel shows while open: it&apos;s
            computed against the venue&apos;s mark price, which is usually
            an index of multiple spot exchanges plus a moving-average
            smoother — not the last trade on the venue itself.
          </p>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            Two practical implications. First, a wick on the venue&apos;s
            tape may not move the mark, so unrealized PnL won&apos;t reflect
            the wick even though traders saw the print. Second, this is
            why the engine sometimes doesn&apos;t liquidate at the published
            liquidation price — see the{" "}
            <Link href="/tools/liquidation-price-calculator" style={linkStyle}>
              liquidation price calculator
            </Link>{" "}
            for the mark-vs-index detail.
          </p>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            For tax purposes most jurisdictions treat realized PnL as the
            taxable event, with mark-to-market not triggering until the
            position is closed. A few jurisdictions (and some institutional
            mark-to-market tax elections in the US) treat year-end
            unrealized PnL as taxable — read the rules in your jurisdiction
            or talk to a crypto-aware accountant.
          </p>
        </section>

        <section id="cross-margin" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>8. PnL Accounting in Cross Margin</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            Per-position PnL math is identical in cross or isolated mode —
            price PnL, funding PnL, and fees compute the same way against
            the position&apos;s entry, size, and venue parameters. What
            changes in cross mode is the margin denominator for ROE.
          </p>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            In cross margin, the margin pool is total account equity (cash
            + unrealized PnL across all positions). Per-position ROE
            against that pool understates the per-position capital
            efficiency because the denominator includes margin not actually
            allocated to the position. Most venues display per-position
            ROE against the position&apos;s implied share of the cross pool,
            which is reasonable but not directly comparable to an isolated
            ROE figure.
          </p>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            For a clean read, track per-position ROI for directional
            skill (margin-mode independent), and account-level ROE for
            capital efficiency (account_pnl / starting_account_equity).
            Mixing the two — comparing per-position ROE across cross and
            isolated — is the most common source of misleading PnL
            attribution in cross-margin trading reports.
          </p>
        </section>

        <section id="tax-reporting" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>9. Tax and Reporting Considerations</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            For tax purposes, the components are usually treated separately
            in jurisdictions that have made any explicit ruling on perps:
          </p>
          <div style={infoBoxStyle}>
            <p style={{ marginBottom: 12, color: "#c9d1d9" }}>
              <strong style={{ color: "#e6edf3" }}>Realized price PnL.</strong>{" "}
              Treated as a capital gain/loss on closing in most
              jurisdictions; some treat perps as ordinary income depending
              on holding period and trader classification.
            </p>
            <p style={{ marginBottom: 12, color: "#c9d1d9" }}>
              <strong style={{ color: "#e6edf3" }}>Funding payments.</strong>{" "}
              Often treated as ordinary income (received) or interest
              expense (paid), separate from the underlying capital gain on
              the position. Some jurisdictions roll funding into the
              capital position; rules vary.
            </p>
            <p style={{ marginBottom: 0, color: "#c9d1d9" }}>
              <strong style={{ color: "#e6edf3" }}>Fees.</strong>{" "}
              Generally deductible from the capital gain calculation as
              cost basis adjustments. Maker rebates received are usually
              treated as ordinary income.
            </p>
          </div>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            The trade-history CSV from the venue is the authoritative
            ground-truth. Crypto tax tools (Koinly, CoinTracker, Recap, et
            al.) ingest the CSV and apply jurisdiction-specific
            classification — but they don&apos;t replace a crypto-aware
            accountant for non-trivial perp activity. The{" "}
            <Link href="/tools/crypto-tax-calculator-free" style={linkStyle}>
              crypto tax calculator
            </Link>{" "}
            is a starting point, not a replacement for professional advice.
          </p>
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
              What is the perp PnL formula for a long?
            </h3>
            <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.7, marginBottom: 0 }}>
              total_pnl = (exit_price − entry_price) × position_size − Σ
              funding_payments − fees. Position size is unit count, not USD
              notional. Funding sums across every settlement crossed. Fees
              are entry plus exit on the notional, less any maker rebates.
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
              What is the perp PnL formula for a short?
            </h3>
            <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.7, marginBottom: 0 }}>
              total_pnl = (entry_price − exit_price) × position_size + Σ
              funding_payments − fees. Funding sign flips because shorts
              receive when funding is positive. Other terms identical to
              the long formula.
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
              How do I calculate funding PnL on a perpetual position?
            </h3>
            <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.7, marginBottom: 0 }}>
              funding_pnl = position_notional × funding_rate × intervals_held,
              with the sign per direction (long pays in positive funding,
              short receives). Most venues settle every 8h; Hyperliquid and
              dYdX settle hourly.
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
              What is the difference between ROE and ROI on a perp position?
            </h3>
            <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.7, marginBottom: 0 }}>
              ROI = total_pnl / position_notional (directional accuracy).
              ROE = total_pnl / margin_posted (capital efficiency). Same
              direction, more leverage = same ROI, higher ROE. Track both;
              report ROI when comparing directional skill.
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
              How does mark-to-market PnL differ from realized PnL on a perp?
            </h3>
            <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.7, marginBottom: 0 }}>
              Realized PnL crystallizes when the position closes. Mark PnL
              is computed continuously against the venue&apos;s mark price —
              an index of multiple spots plus a smoother — not the last
              trade. Wicks on the venue tape may not move the mark.
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
              Are fees included in the displayed PnL on perp venues?
            </h3>
            <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.7, marginBottom: 0 }}>
              Behavior varies. Order-history PnL is usually net of fees;
              live position-panel PnL is sometimes pre-fee. Always
              reconcile against the trade-history CSV for tax and reporting.
              Funding is shown as a separate line and needs manual summing.
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
              How does cross margin change perp PnL accounting?
            </h3>
            <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.7, marginBottom: 0 }}>
              Per-position PnL math is identical. The ROE denominator
              changes — cross-margin ROE uses total account equity, which
              dilutes per-position ROE. For comparison across modes, track
              per-position ROI and account-level ROE separately.
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
          purposes only and is not financial advice. Perpetual futures
          carry the risk of total margin loss when liquidated; the formulas
          on this page are documented approximations and the venue&apos;s
          live engine is the authoritative source for executed PnL,
          funding accruals, and fees. Tax treatment of perps varies
          materially by jurisdiction — consult a qualified accountant. Do
          your own research.
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
              <Link href="/tools/liquidation-price-calculator" style={linkStyle}>
                Liquidation Price Calculator
              </Link>
            </li>
            <li>
              <Link href="/tools/funding-rate-arbitrage-calculator" style={linkStyle}>
                Funding Rate Arbitrage Calculator
              </Link>
            </li>
            <li>
              <Link href="/tools/funding-rate-tracker" style={linkStyle}>
                Funding Rate Tracker
              </Link>
            </li>
            <li>
              <Link href="/tools/pnl-calculator" style={linkStyle}>
                Generic PnL Calculator
              </Link>
            </li>
            <li>
              <Link href="/tools/crypto-profit-calculator" style={linkStyle}>
                Crypto Profit Calculator
              </Link>
            </li>
            <li>
              <Link href="/tools/crypto-tax-calculator-free" style={linkStyle}>
                Crypto Tax Calculator
              </Link>
            </li>
            <li>
              <Link href="/tools/crypto-liquidation-tracker" style={linkStyle}>
                Crypto Liquidation Tracker
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <RelatedContent
        category="tools"
        currentSlug="/tools/perp-pnl-calculator"
      />
    </article>
  );
}
