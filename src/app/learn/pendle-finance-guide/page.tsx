import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import PendleYieldCalc from "@/components/PendleYieldCalc";
import {
  generateArticleSchema,
  generateFAQSchema,
  combineSchemas,
} from "@/lib/structured-data";
import { SITE_URL } from "@/lib/constants";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import RelatedContent from '@/components/RelatedContent';


// ─── Metadata ────────────────────────────────────────────────────────────────
// Title: 58 chars — primary keyword first, year included
// Description: 155 chars — specific, keyword-rich, compelling CTA
export const metadata: Metadata = {
  title: "Pendle Finance Guide 2026: Yield Tokenization | degen0x",
  description:
    "Master Pendle Finance: how yield tokenization splits assets into PT and YT tokens, lock in fixed DeFi yields, and use Boros for funding rate trading. Updated March 2026.",
  keywords: [
    "pendle finance",
    "yield tokenization",
    "principal token PT",
    "yield token YT",
    "pendle guide 2026",
    "fixed yield DeFi",
    "boros pendle v3",
    "spendle token",
    "defi yield trading",
    "pendle arbitrum",
  ],
  openGraph: {
    title: "Pendle Finance: Yield Tokenization Explained (2026)",
    description:
      "$8.9B TVL. 58% market share. Here's how Pendle turns volatile DeFi yield into tradeable fixed-rate instruments.",
    url: `${SITE_URL}/learn/pendle-finance-guide`,
    type: "article",
    publishedTime: "2026-03-15T00:00:00Z",
    modifiedTime: "2026-03-15T00:00:00Z",
    authors: ["degen0x Team"],
    images: [
      {
        url: `${SITE_URL}/api/og?title=Pendle+Finance+Guide&category=Learn&type=learn`,
        width: 1200,
        height: 630,
        alt: "Pendle Finance Yield Tokenization Guide 2026 — degen0x",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pendle Finance Guide 2026: Yield Tokenization Explained",
    description:
      "$8.9B TVL. How Pendle turns volatile DeFi yield into fixed-rate PT and speculative YT tokens. Full guide →",
    images: [`${SITE_URL}/api/og?title=Pendle+Finance+Guide&category=Learn&type=learn`],
  },
  alternates: {
    canonical: `${SITE_URL}/learn/pendle-finance-guide`,
  },
};

// ─── Structured Data ─────────────────────────────────────────────────────────
const articleSchema = generateArticleSchema({
  title: "Pendle Finance Guide 2026: Yield Tokenization Explained",
  description:
    "Master Pendle Finance: how yield tokenization splits assets into Principal Tokens (PT) and Yield Tokens (YT), fixed-yield strategies, Boros V3 funding rate trading, and sPENDLE tokenomics.",
  url: `${SITE_URL}/learn/pendle-finance-guide`,
  datePublished: "2026-03-15T00:00:00Z",
  dateModified: "2026-03-15T00:00:00Z",
  author: "degen0x Team",
  image: `${SITE_URL}/api/og?title=Pendle+Finance+Guide&category=Learn&type=learn`,
  wordCount: 3400,
});

const faqSchema = generateFAQSchema([
  {
    question: "What is Pendle Finance?",
    answer:
      "Pendle Finance is a DeFi protocol that lets you tokenize, trade, and speculate on future yield from any interest-bearing crypto asset. It splits yield-bearing tokens into Principal Tokens (PT) — which let you lock in a fixed yield — and Yield Tokens (YT), which give you leveraged exposure to future yield streams. As of March 2026, Pendle has approximately $8.9B in TVL and commands 58% of the on-chain yield trading market.",
  },
  {
    question: "What is the difference between PT and YT in Pendle?",
    answer:
      "PT (Principal Token) represents the underlying principal and trades at a discount to par, enabling fixed-yield strategies — buy PT at 0.96 and redeem for 1.00 at maturity to lock in a fixed rate. YT (Yield Token) represents the future yield stream and is inherently speculative and time-sensitive, giving leveraged exposure to yield rate movements. PT expires at par value; YT expires worthless at maturity.",
  },
  {
    question: "Is Pendle Finance safe to use?",
    answer:
      "Pendle has undergone multiple security audits, but all DeFi protocols carry inherent risk. Key risks include smart contract vulnerabilities in Pendle and its underlying protocols (Lido, Aave, etc.), YT time-decay risk, underlying asset depeg risk, and liquidity risk near maturity. Start with small positions and stick to PT strategies if you're new to the protocol.",
  },
  {
    question: "What chains does Pendle support?",
    answer:
      "As of March 2026, Pendle supports Ethereum mainnet, Arbitrum, BNB Chain (BSC), Base, and Mantle. Arbitrum is the most active chain due to lower gas fees. Check app.pendle.finance for the current live network and market list.",
  },
  {
    question: "What is Boros in Pendle?",
    answer:
      "Boros (Pendle V3) extends yield tokenization to perpetual futures funding rates — payments exchanged between longs and shorts in perp markets. Launched on Arbitrum in early 2025, Boros lets you trade BTC and ETH funding rates sourced from Binance as fixed or floating instruments, opening up the ~$150B/day perp market to yield tokenization strategies.",
  },
  {
    question: "What is sPENDLE?",
    answer:
      "sPENDLE is Pendle's liquid staking token introduced in January 2026 to replace the old vePENDLE locking model. Unlike vePENDLE which required locking for up to 2 years, sPENDLE has only a 14-day unstaking period and is transferable. It still earns protocol revenue and governance rights, making the token more accessible to institutional and retail participants who need flexibility.",
  },
]);

const schemas = combineSchemas([articleSchema, faqSchema]);

// ─── Page Component ───────────────────────────────────────────────────────────
export default function PendleFinanceGuide() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <StructuredData data={schemas} />

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Learn", href: "/learn" },
          { label: "Pendle Finance Guide" },
        ]}
      />

      {/* Badges */}
      <div className="flex gap-3 mb-4 mt-8">
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#1f6feb]/20 text-[#58a6ff] border border-[#1f6feb]/30">
          DeFi
        </span>
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#6e40c9]/20 text-[#a371f7] border border-[#6e40c9]/30">
          Advanced
        </span>
      </div>

      {/* Title */}
      <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#58a6ff] to-[#a371f7] bg-clip-text text-transparent">
        Pendle Finance: Yield Tokenization Explained
      </h1>
      <p className="text-xl text-[#8b949e] mb-8">
        How Pendle turns volatile DeFi yield into tradeable assets — and why $8.9B in TVL says
        this is one of DeFi&apos;s most important protocols.
      </p>

      {/* Meta Info */}
      <div className="flex flex-wrap gap-6 mb-10 text-sm text-[#8b949e] pb-8 border-b border-[#30363d]">
        <span>16 min read</span>
        <span>Updated March 2026</span>
      </div>

      {/* Disclaimer */}
      <div className="bg-[#161b22] border border-[#f0883e]/30 rounded-lg p-5 mb-10">
        <p className="text-[#f0883e] text-sm font-medium mb-1">⚠️ Educational Content Only</p>
        <p className="text-[#8b949e] text-sm">
          This guide is for informational purposes only. It is not financial advice. DeFi protocols
          carry significant risks including smart contract exploits, liquidity risk, and loss of
          principal. Always do your own research before interacting with any protocol.
        </p>
      </div>

      {/* Table of Contents */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 mb-12">
        <h3 className="text-[#e6edf3] font-semibold mb-4">📋 Table of Contents</h3>
        <ol className="space-y-2 text-[#58a6ff] text-sm">
          <li>
            <a href="#what-is-pendle" className="hover:underline">
              1. What Is Pendle Finance?
            </a>
          </li>
          <li>
            <a href="#yield-tokenization" className="hover:underline">
              2. How Yield Tokenization Works
            </a>
          </li>
          <li>
            <a href="#pt-yt-explained" className="hover:underline">
              3. Principal Tokens (PT) and Yield Tokens (YT) Explained
            </a>
          </li>
          <li>
            <a href="#pendle-amm" className="hover:underline">
              4. The Pendle AMM: Trading Yield Like a Pro
            </a>
          </li>
          <li>
            <a href="#strategies" className="hover:underline">
              5. The Three Core Strategies
            </a>
          </li>
          <li>
            <a href="#boros" className="hover:underline">
              6. Boros (V3): Tokenizing Funding Rates
            </a>
          </li>
          <li>
            <a href="#spendle" className="hover:underline">
              7. sPENDLE: The Tokenomics Overhaul
            </a>
          </li>
          <li>
            <a href="#risks" className="hover:underline">
              8. Risks to Understand Before You Start
            </a>
          </li>
          <li>
            <a href="#getting-started" className="hover:underline">
              9. Getting Started with Pendle
            </a>
          </li>
          <li>
            <a href="#faq" className="hover:underline">
              10. Frequently Asked Questions
            </a>
          </li>
        </ol>
      </div>

      {/* Section 1 */}
      <section id="what-is-pendle" className="mb-14">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-5">
          1. What Is Pendle Finance?
        </h2>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          Pendle Finance is a decentralized protocol that lets you tokenize, trade, and speculate on
          future yield from any interest-bearing crypto asset. Launched in 2021 and built primarily
          on Ethereum and Arbitrum, Pendle takes the messy, unpredictable nature of DeFi yields and
          turns them into something concrete: tokens you can buy, sell, and hold with a defined
          expiry date.
        </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>💡</span>
            <strong style={{ color: '#a78bfa', fontSize: 15 }}>Why This Matters</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            This is one of those topics where surface-level understanding is dangerous. We've seen traders lose significant capital from misconceptions covered in this guide.
          </p>
        </div>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          Think of it this way. You deposit stETH (liquid staked ETH) into Aave and earn around 4%
          APY — but that rate fluctuates constantly. Pendle lets you lock in that 4% as a fixed
          return, or alternatively bet that the rate will go higher. You&apos;re not just holding a
          yield-bearing asset; you&apos;re actively trading the yield itself.
        </p>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          By March 2026, Pendle has grown into the dominant protocol in on-chain yield trading with
          approximately $8.9B in total value locked, commanding 58% market share in its category.
          That&apos;s not accidental — it reflects genuine product-market fit for a concept that has
          no direct equivalent in traditional DeFi.
        </p>

        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 my-6">
          <h4 className="text-[#58a6ff] font-semibold mb-3">📊 Pendle by the Numbers (March 2026)</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-[#8b949e]">Total Value Locked</p>
              <p className="text-[#e6edf3] font-bold text-lg">~$8.9B</p>
            </div>
            <div>
              <p className="text-[#8b949e]">Market Share (yield trading)</p>
              <p className="text-[#e6edf3] font-bold text-lg">58%</p>
            </div>
            <div>
              <p className="text-[#8b949e]">Annual Revenue</p>
              <p className="text-[#e6edf3] font-bold text-lg">&gt;$40M</p>
            </div>
            <div>
              <p className="text-[#8b949e]">Revenue to Buybacks</p>
              <p className="text-[#e6edf3] font-bold text-lg">80%</p>
            </div>
          </div>

        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-03-15"
          updatedDate="2026-03-15"
          readingTime={7}
          section="learn"
        />

          <p className="text-[#8b949e] text-xs mt-4">
            Source: DefiLlama, CoinGecko — March 2026 (approximate, data changes daily)
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section id="yield-tokenization" className="mb-14">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-5">
          2. How Yield Tokenization Works
        </h2>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          To understand Pendle, you first need to understand the problem it solves. Most DeFi yield
          is variable. When you stake ETH through Lido, lend USDC on Aave, or provide liquidity on
          Curve, the rate you earn changes every day based on supply, demand, and protocol
          conditions. This is fine if you&apos;re comfortable with uncertainty — but it makes
          precise financial planning nearly impossible.
        </p>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          Pendle solves this by introducing a three-layer architecture built around the concept of
          time. Every yield-bearing asset has two components: the underlying principal (the asset
          itself) and the yield it will generate between now and some future date (maturity). Pendle
          separates these two components into distinct, tradeable tokens.
        </p>

        <h3 className="text-xl font-semibold text-[#e6edf3] mt-8 mb-4">
          The SY Wrapper: The Foundation
        </h3>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          Before anything else, Pendle wraps your yield-bearing asset into a{" "}
          <strong className="text-[#e6edf3]">Standardized Yield (SY) token</strong>. This is a
          compatibility layer — Pendle supports dozens of different yield-bearing assets (stETH,
          aUSDC, sUSDS, GLP, and more), each with its own mechanics. SY creates a unified interface
          so the protocol can handle them consistently.
        </p>

        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 my-6">
          <h4 className="text-[#58a6ff] font-semibold mb-4">⚡ The Tokenization Flow</h4>
          <div className="space-y-3 text-sm">
            {[
              {
                step: "1.",
                title: "Deposit yield-bearing asset",
                detail: "e.g., deposit stETH (earning ~3.5% ETH staking yield)",
              },
              {
                step: "2.",
                title: "Pendle wraps it as SY-stETH",
                detail: "Standardized interface for the protocol to handle",
              },
              {
                step: "3.",
                title: "SY splits into PT-stETH + YT-stETH",
                detail:
                  "Two tokens, each representing a different right against the same underlying asset",
              },
              {
                step: "4.",
                title: "Both tokens have an expiry (maturity date)",
                detail:
                  "Typically 3–12 months out; at maturity, PT redeems for full principal, YT expires worthless",
              },
            ].map(({ step, title, detail }) => (
              <div key={step} className="flex items-start gap-3">
                <span className="text-[#58a6ff] font-bold mt-0.5">{step}</span>
                <div>
                  <p className="text-[#e6edf3] font-medium">{title}</p>
                  <p className="text-[#8b949e]">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section id="pt-yt-explained" className="mb-14">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-5">
          3. Principal Tokens (PT) and Yield Tokens (YT) Explained
        </h2>

        <h3 className="text-xl font-semibold text-[#e6edf3] mt-6 mb-4">
          Principal Tokens (PT): Guaranteed Returns
        </h3>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          A <code className="bg-[#161b22] text-[#79c0ff] px-1.5 py-0.5 rounded text-sm">PT</code>{" "}
          represents the principal of the underlying asset — but it trades at a{" "}
          <strong className="text-[#e6edf3]">discount</strong> to the full value, with that discount
          reflecting the expected yield over the remaining time to maturity.
        </p>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          Here&apos;s a concrete example: if PT-stETH expiring in six months costs 0.96 ETH, and
          redeems for 1.00 ETH at maturity, you&apos;ve locked in approximately{" "}
          <strong className="text-[#e6edf3]">4.17% APY</strong> — completely fixed, regardless of
          what happens to staking rates in between. This is Pendle&apos;s killer feature for
          risk-averse yield farmers who want predictability.
        </p>

        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 my-6">
          <h4 className="text-[#58a6ff] font-semibold mb-3">🔒 PT = Fixed Yield</h4>
          <div className="space-y-2 text-sm">
            <p className="text-[#c9d1d9]">
              <strong className="text-[#e6edf3]">Buy:</strong> PT-stETH at 0.96 ETH today
            </p>
            <p className="text-[#c9d1d9]">
              <strong className="text-[#e6edf3]">At maturity:</strong> Redeem for 1.00 ETH
            </p>
            <p className="text-[#c9d1d9]">
              <strong className="text-[#e6edf3]">Your return:</strong> ~4.17% over the holding
              period, locked in on day one — no matter what the market does
            </p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-[#e6edf3] mt-8 mb-4">
          Yield Tokens (YT): Pure Yield Exposure
        </h3>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          A <code className="bg-[#161b22] text-[#79c0ff] px-1.5 py-0.5 rounded text-sm">YT</code>{" "}
          is the other side of the equation. While PT strips away the yield to give you just the
          principal, YT strips away the principal to give you just the yield stream. Holding YT
          entitles you to all the yield (and points, and incentives) generated by the underlying
          asset between now and maturity.
        </p>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          YT is inherently speculative and time-sensitive. It has a value that declines toward zero
          as maturity approaches (because there&apos;s less yield-generating time remaining). If you
          buy YT and the underlying yield rate goes up significantly, you profit. If rates stay flat
          or drop, you lose. At maturity, YT expires with no redemption value.
        </p>

        <div className="overflow-x-auto my-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#30363d]">
                <th className="text-left text-[#8b949e] py-3 pr-4">Property</th>
                <th className="text-left text-[#58a6ff] py-3 pr-4">PT (Principal Token)</th>
                <th className="text-left text-[#a371f7] py-3">YT (Yield Token)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#21262d]">
              {[
                ["What it represents", "Underlying principal", "Future yield stream"],
                ["Trades at", "Discount to par (e.g., 0.96)", "Premium (leveraged yield exposure)"],
                ["At maturity", "Redeems for 1 full underlying", "Expires worthless"],
                ["Best for", "Fixed-yield seekers", "Yield speculators & points farmers"],
                ["Risk level", "Low-moderate", "High (can go to zero)"],
                ["Analogous to", "Zero-coupon bond", "Interest rate swap / options"],
              ].map(([prop, pt, yt]) => (
                <tr key={prop}>
                  <td className="py-3 pr-4 text-[#8b949e]">{prop}</td>
                  <td className="py-3 pr-4 text-[#c9d1d9]">{pt}</td>
                  <td className="py-3 text-[#c9d1d9]">{yt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4 */}
      <section id="pendle-amm" className="mb-14">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-5">
          4. The Pendle AMM: Trading Yield Like a Pro
        </h2>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          Pendle has its own custom automated market maker (AMM) purpose-built for PT and YT.
          Generic AMMs like Uniswap v3 don&apos;t work well for yield tokens because their value
          changes not just with market forces, but with the passage of time. A PT&apos;s price
          mechanically converges to 1.0 as maturity approaches — this is a known, deterministic
          behavior that a general AMM can&apos;t account for efficiently.
        </p>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          Pendle&apos;s AMM factors in time decay natively. This means tighter spreads, lower
          slippage, and capital efficiency that makes deep liquidity possible even for niche yield
          markets. Liquidity providers (LPs) in Pendle pools earn trading fees plus{" "}
          <code className="bg-[#161b22] text-[#79c0ff] px-1.5 py-0.5 rounded text-sm">PENDLE</code>{" "}
          incentives — but they do take on impermanent loss risk as the PT price converges to par.
        </p>

        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 my-6">
          <h4 className="text-[#58a6ff] font-semibold mb-3">💡 Why the Pendle AMM Matters</h4>
          <p className="text-[#c9d1d9] text-sm mb-3">
            Standard AMMs use x * y = k pricing curves. Pendle&apos;s AMM uses a modified curve
            that accounts for PT&apos;s mandatory convergence to par by a specific date. This means:
          </p>
          <ul className="space-y-2 text-[#c9d1d9] text-sm">
            {[
              "Lower slippage for large trades close to maturity",
              "More accurate implied yield pricing",
              "LP positions don't need constant rebalancing",
            ].map((point) => (
              <li key={point} className="flex gap-2">
                <span className="text-[#3fb950] mt-0.5">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 5 */}
      <section id="strategies" className="mb-14">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-5">
          5. The Three Core Strategies
        </h2>
        <p className="text-[#c9d1d9] mb-6 leading-relaxed">
          Most Pendle users operate through one of three primary strategies, depending on their
          risk appetite and market view.
        </p>

        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h3 className="text-xl font-semibold text-[#3fb950] mb-3">
              Strategy 1: Lock In Fixed Yield (Buy PT)
            </h3>
            <p className="text-[#c9d1d9] mb-3 text-sm">
              You believe current yield rates are attractive and want to lock them in with no
              variability. Buy PT at a discount, hold to maturity, receive par value.
            </p>
            <p className="text-[#c9d1d9] text-sm">
              <strong className="text-[#e6edf3]">Best for:</strong> Stablecoin holders,
              conservative DeFi users, institutions wanting predictable returns.{" "}
              <strong className="text-[#e6edf3]">Real example:</strong> PT-sUSDS expiring in June
              2026 was offering ~8% fixed APY in early 2026 — meaningfully above traditional money
              market rates.
            </p>
          </div>

          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h3 className="text-xl font-semibold text-[#f0883e] mb-3">
              Strategy 2: Long Yield (Buy YT)
            </h3>
            <p className="text-[#c9d1d9] mb-3 text-sm">
              You believe current yield rates are too low and will rise. Or you want leveraged
              exposure to protocol points/airdrops. Buy YT to receive all future yield from a large
              notional position while only spending a fraction of the capital.
            </p>
            <p className="text-[#c9d1d9] text-sm">
              <strong className="text-[#e6edf3]">Best for:</strong> Yield traders, points farmers,
              advanced DeFi users. YT is inherently leveraged (sometimes 10–20x notional exposure
              per dollar spent) so losses can be rapid. YT buyers were significant players during
              EigenLayer&apos;s points farming period in 2024–2025.
            </p>
          </div>

          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h3 className="text-xl font-semibold text-[#58a6ff] mb-3">
              Strategy 3: Provide Liquidity (LP)
            </h3>
            <p className="text-[#c9d1d9] mb-3 text-sm">
              Deposit assets into Pendle liquidity pools to earn trading fees plus{" "}
              <code className="bg-[#0d1117] text-[#79c0ff] px-1 rounded">PENDLE</code> incentives.
              LP positions can earn 15–30%+ APY on stable assets during high-activity periods.
            </p>
            <p className="text-[#c9d1d9] text-sm">
              <strong className="text-[#e6edf3]">Best for:</strong> Yield optimizers comfortable
              with DeFi complexity. Note: LP positions have directional exposure to yield rates and
              experience time-decay impermanent loss as PT converges to par.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section id="boros" className="mb-14">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-5">
          6. Boros (V3): Tokenizing Funding Rates
        </h2>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          Pendle&apos;s latest evolution is <strong className="text-[#e6edf3]">Boros</strong>,
          launched in early 2025 on Arbitrum. While Pendle V2 focused on tokenizing staking and
          lending yields, Boros extends the same PT/YT framework to{" "}
          <strong className="text-[#e6edf3]">perpetual futures funding rates</strong> — one of
          crypto&apos;s largest and most traded yield streams.
        </p>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          Funding rates are payments made between long and short traders in perpetual futures
          markets to keep prices tethered to spot. When sentiment is bullish, longs pay shorts;
          when bearish, shorts pay longs. These rates are massive in aggregate — the perpetual
          derivatives market sees roughly $150B+ in daily volume — but they&apos;re completely
          unpredictable day to day.
        </p>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          Boros tokenizes BTC and ETH funding rates sourced from Binance, allowing you to take a
          fixed or floating view on this yield source. For market-neutral traders running basis
          trades, Boros represents a genuinely novel tool: you can now lock in a fixed funding rate
          income rather than riding the variable market. Early testing recorded $5.5B in notional
          volume. Learn more about how perp markets work in our{" "}
          <a href="/learn/perpetual-futures-guide" className="text-[#58a6ff] hover:underline">
            perpetual futures guide
          </a>
          .
        </p>

        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 my-6">
          <h4 className="text-[#58a6ff] font-semibold mb-3">🔥 Why Boros Is a Big Deal</h4>
          <p className="text-[#c9d1d9] text-sm mb-3">
            Traditional on-chain yield markets (staking, lending) represent a fraction of total
            crypto yield. By tokenizing funding rates, Pendle taps into a market that dwarfs staking
            in raw dollar volume.
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-[#8b949e]">Perp market daily volume</p>
              <p className="text-[#e6edf3] font-bold">~$150B+</p>
            </div>
            <div>
              <p className="text-[#8b949e]">Boros early notional volume</p>
              <p className="text-[#e6edf3] font-bold">$5.5B</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 */}
      <section id="spendle" className="mb-14">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-5">
          7. sPENDLE: The Tokenomics Overhaul
        </h2>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          In January 2026, Pendle replaced its original{" "}
          <code className="bg-[#161b22] text-[#79c0ff] px-1.5 py-0.5 rounded text-sm">vePENDLE</code>{" "}
          locking model with a liquid staking token called{" "}
          <code className="bg-[#161b22] text-[#79c0ff] px-1.5 py-0.5 rounded text-sm">sPENDLE</code>
          . The old model required locking{" "}
          <code className="bg-[#161b22] text-[#79c0ff] px-1.5 py-0.5 rounded text-sm">PENDLE</code>{" "}
          for up to two years to earn governance rights and protocol fees — a common but
          capital-inefficient ve-tokenomics pattern.
        </p>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          sPENDLE is different. It&apos;s a liquid token that still earns protocol revenue and
          governance rights, but can be exited in just 14 days via an unstaking period. This unlocks
          deeper secondary market liquidity and makes PENDLE more attractive to institutional holders
          who need flexibility.
        </p>

        <div className="overflow-x-auto my-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#30363d]">
                <th className="text-left text-[#8b949e] py-3 pr-4">Feature</th>
                <th className="text-left text-[#8b949e] py-3 pr-4">vePENDLE (old)</th>
                <th className="text-left text-[#58a6ff] py-3">sPENDLE (new)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#21262d]">
              {[
                ["Lock period", "Up to 2 years", "14-day unstaking"],
                ["Transferable", "No", "Yes (liquid)"],
                ["Revenue share", "Yes (boosted by lock duration)", "Yes (proportional)"],
                ["Governance", "Yes", "Yes"],
              ].map(([feat, old, newVal]) => (
                <tr key={feat}>
                  <td className="py-3 pr-4 text-[#8b949e]">{feat}</td>
                  <td className="py-3 pr-4 text-[#c9d1d9]">{old}</td>
                  <td className="py-3 text-[#c9d1d9]">{newVal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 8 */}
      <section id="risks" className="mb-14">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-5">
          8. Risks to Understand Before You Start
        </h2>
        <p className="text-[#c9d1d9] mb-6 leading-relaxed">
          Pendle is a sophisticated DeFi protocol. The risks below are real and should inform your
          position sizing and strategy selection. For a broader overview of how to stay safe in
          DeFi, see our{" "}
          <a href="/learn/defi-safety-guide-2026" className="text-[#58a6ff] hover:underline">
            DeFi Safety Guide 2026
          </a>
          .
        </p>

        <div className="space-y-4">
          {[
            {
              color: "#f85149",
              level: "🔴",
              title: "Smart Contract Risk",
              desc: "Pendle interacts with multiple underlying protocols (Lido, Aave, EigenLayer, etc.). An exploit in any one of them — or in Pendle's own contracts — could result in loss of funds. Pendle has undergone multiple audits but no audit eliminates risk entirely.",
            },
            {
              color: "#f0883e",
              level: "🟠",
              title: "YT Decay Risk",
              desc: "YT tokens lose value over time by design. Even if underlying yield rates stay constant, your YT position decreases in value as maturity approaches. Buying YT is a bet that yield rates will rise fast enough to offset this time decay — similar to buying options.",
            },
            {
              color: "#f0883e",
              level: "🟠",
              title: "Underlying Asset Risk",
              desc: "PT and YT are only as good as the underlying asset. If the underlying yield-bearing token depegs, gets exploited, or has its yield slashed to zero, PT holders may not receive the full principal they expected.",
            },
            {
              color: "#ffa657",
              level: "🟡",
              title: "Liquidity Risk",
              desc: "Pendle markets have maturity dates. Near maturity, liquidity can thin out. If you need to exit a PT or YT position early in a low-liquidity market, you may face significant slippage.",
            },
            {
              color: "#ffa657",
              level: "🟡",
              title: "LP Impermanent Loss",
              desc: "LP positions are exposed to the convergence of PT to par value over time. This creates a form of impermanent loss. Historical data suggests fees often outweigh this cost, but it varies significantly by pool and market conditions.",
            },
          ].map(({ color, level, title, desc }) => (
            <div
              key={title}
              className="bg-[#161b22] rounded-lg p-5"
              style={{ border: `1px solid ${color}4d` }}
            >
              <h4 className="font-semibold mb-2" style={{ color }}>
                {level} {title}
              </h4>
              <p className="text-[#c9d1d9] text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 9 */}
      <section id="getting-started" className="mb-14">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-5">
          9. Getting Started with Pendle
        </h2>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          Pendle is available at{" "}
          <strong className="text-[#e6edf3]">app.pendle.finance</strong> and supports Ethereum,
          Arbitrum, BSC, Base, and Mantle. Use the calculator below to model your expected fixed
          yield before committing capital — then follow the steps to execute.
        </p>

        {/* ── Interactive PT Calculator ── */}
        <div className="mb-8">
          <PendleYieldCalc />
        </div>

        <div className="space-y-4">
          {[
            {
              title: "Step 1: Connect & Choose a Market",
              body: "Browse Pendle's market list and filter by asset type (stablecoins vs. ETH yield vs. BTC yield), chain, and APY. The \u201cFixed APY\u201d column shows what you\u2019d lock in by buying PT today.",
            },
            {
              title: "Step 2: Decide Your Strategy",
              body: "New to Pendle? Start with PT. The fixed-yield strategy is the most predictable and analogous to a bond purchase. Avoid YT until you understand time decay.",
            },
            {
              title: "Step 3: Check Maturity Date",
              body: "Ensure you're comfortable holding until the maturity date, or that you'll be able to exit via the secondary market. Markets with lower TVL may have thin exit liquidity before maturity.",
            },
            {
              title: "Step 4: Start Small",
              body: "Pendle's UI is relatively friendly but the mechanics are non-trivial. Run a small test position first to understand gas costs, how your PT balance behaves, and what the maturity redemption process looks like before committing significant capital.",
            },
          ].map(({ title, body }) => (
            <div
              key={title}
              className="bg-[#161b22] border border-[#30363d] rounded-lg p-5"
            >
              <h4 className="text-[#79c0ff] font-semibold mb-2">{title}</h4>
              <p className="text-[#c9d1d9] text-sm">{body}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 mt-6">
          <h4 className="text-[#58a6ff] font-semibold mb-3">🔗 Related Tools &amp; Guides</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/learn/liquid-staking-derivatives" className="text-[#58a6ff] hover:underline">
                Liquid Staking Derivatives — stETH, rETH, and the tokens Pendle wraps
              </a>
            </li>
            <li>
              <a href="/learn/advanced-defi-strategies" className="text-[#58a6ff] hover:underline">
                Advanced DeFi Strategies — yield stacking and delta-neutral approaches
              </a>
            </li>
            <li>
              <a href="/tools/staking-apy" className="text-[#58a6ff] hover:underline">
                Staking APY Tracker — compare live yields across protocols
              </a>
            </li>
            <li>
              <a href="/tools/yield-farming-calculator" className="text-[#58a6ff] hover:underline">
                Yield Farming Calculator — model your returns before deploying capital
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 10: FAQ */}
      <section id="faq" className="mb-14">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-8">
          10. Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {[
            {
              q: "What is Pendle Finance?",
              a: "Pendle Finance is a DeFi protocol that splits yield-bearing assets into Principal Tokens (PT) and Yield Tokens (YT), enabling fixed-yield strategies and yield speculation. It has ~$8.9B in TVL and 58% market share in on-chain yield trading as of March 2026.",
            },
            {
              q: "Is Pendle only for advanced DeFi users?",
              a: "The fixed-yield strategy (buying PT) is genuinely accessible to intermediate DeFi users — it's conceptually similar to buying a bond at a discount. YT and LP strategies are more complex and better suited to experienced users. Pendle's UI clearly labels the implied fixed APY for each PT, so you can make a straightforward decision without deep protocol knowledge.",
            },
            {
              q: "What happens if I hold PT past the maturity date?",
              a: "Nothing bad — PT can be redeemed for its underlying value at or after maturity. There's no penalty for late redemption (though gas fees apply). The PT simply sits in your wallet redeemable for par value until you claim it.",
            },
            {
              q: "What chains does Pendle support?",
              a: "As of March 2026: Ethereum mainnet, Arbitrum, BSC (BNB Chain), Base, and Mantle. Arbitrum is the most active for gas efficiency. Check app.pendle.finance for the current live network list.",
            },
            {
              q: "How is Pendle different from Aave or Compound?",
              a: "Aave and Compound are lending protocols where you deposit assets and earn a variable rate. Pendle is a yield trading protocol — you take the yield produced by assets on Aave (or Lido, or other protocols) and trade it as a separate financial instrument. Pendle typically builds on top of protocols like Aave, wrapping their interest-bearing tokens as the underlying for PT/YT markets.",
            },
            {
              q: "What is Boros and how does it differ from Pendle V2?",
              a: "Boros (Pendle V3) extends yield tokenization to perpetual futures funding rates — a market dwarfing traditional DeFi staking yields in volume. V2 focused on staking and lending yields (e.g., stETH, aUSDC). Boros lets you go fixed or floating on BTC and ETH perp funding rates sourced from Binance, opening up entirely new yield trading strategies for market-neutral traders.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-[#e6edf3] font-semibold mb-3">{q}</h3>
              <p className="text-[#c9d1d9] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-10 pt-8 border-t border-[#30363d]">
        {[
          "DeFi",
          "Yield",
          "Pendle",
          "Yield Tokenization",
          "PT",
          "YT",
          "Fixed Yield",
          "Arbitrum",
          "Advanced",
          "2026",
        ].map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full text-xs text-[#8b949e] bg-[#161b22] border border-[#30363d]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Related Articles */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
        <h3 className="text-[#e6edf3] font-semibold mb-4">📚 Related Guides</h3>
        <ul className="space-y-3 text-sm">
          <li>
            <a href="/learn/liquid-staking-derivatives" className="text-[#58a6ff] hover:underline">
              Liquid Staking Derivatives (LSDs) — the assets powering Pendle&apos;s largest markets
            </a>
          </li>
          <li>
            <a href="/learn/advanced-defi-strategies" className="text-[#58a6ff] hover:underline">
              Advanced DeFi Strategies — yield stacking, looping, and delta-neutral plays
            </a>
          </li>
          <li>
            <a href="/learn/restaking-eigenlayer-guide" className="text-[#58a6ff] hover:underline">
              Restaking &amp; EigenLayer Guide — another major Pendle underlying yield source
            </a>
          </li>
          <li>
            <a href="/learn/perpetual-futures-guide" className="text-[#58a6ff] hover:underline">
              Perpetual Futures Guide — understand funding rates before using Boros
            </a>
          </li>
          <li>
            <a href="/learn/defi-safety-guide-2026" className="text-[#58a6ff] hover:underline">
              DeFi Safety Guide 2026 — how to protect yourself in DeFi protocols
            </a>
          </li>
        </ul>
      <BackToTop />
      </div>
      <RelatedContent category="learn" currentSlug="/learn/pendle-finance-guide" />
    </div>
  );
}
