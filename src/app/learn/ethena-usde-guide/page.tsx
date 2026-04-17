import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import EthenaYieldCalc from "@/components/EthenaYieldCalc";
import {
  generateArticleSchema,
  generateFAQSchema,
  combineSchemas,
} from "@/lib/structured-data";
import { SITE_URL } from "@/lib/constants";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import RelatedContent from '@/components/RelatedContent';


// ─── Metadata ────────────────────────────────────────────────────────────────
// Title: 65 chars — primary keyword first, year included
// Description: 159 chars — specific, addresses search intent
export const metadata: Metadata = {
  title: "What Is Ethena? USDe, sUSDe & the Internet Bond (2026) | degen0x",
  description:
    "Ethena's USDe is a delta-hedged synthetic dollar. Stake it as sUSDe to earn yield from ETH staking + perpetual funding rates. Complete 2026 guide with risks.",
  keywords: [
    "ethena usde",
    "what is ethena",
    "ethena guide 2026",
    "usde stablecoin",
    "susde internet bond",
    "ethena yield",
    "ena token",
    "synthetic dollar defi",
    "ethena delta hedging",
    "ethena risks",
  ],
  openGraph: {
    title: "Ethena (USDe) 2026: The Synthetic Dollar That Hit $14B",
    description:
      "USDe reached $14B market cap and became the 3rd-largest stablecoin. Here's exactly how Ethena's delta-hedging works, where the yield comes from, and what can go wrong.",
    url: `${SITE_URL}/learn/ethena-usde-guide`,
    type: "article",
    publishedTime: "2026-03-15T00:00:00Z",
    modifiedTime: "2026-03-15T00:00:00Z",
    authors: ["degen0x Team"],
    images: [
      {
        url: `${SITE_URL}/api/og?title=Ethena+USDe&category=Learn&type=learn`,
        width: 1200,
        height: 630,
        alt: "Ethena USDe Guide 2026 — degen0x",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethena (USDe) 2026: The Synthetic Dollar That Hit $14B",
    description:
      "Delta-hedged stablecoin with a yield-bearing version (sUSDe) that peaked at 35% APY. Our complete guide to how it works, ENA tokenomics, and the real risks.",
    images: [`${SITE_URL}/api/og?title=Ethena+USDe&category=Learn&type=learn`],
  },
  alternates: {
    canonical: `${SITE_URL}/learn/ethena-usde-guide`,
  },
};

// ─── Structured Data ─────────────────────────────────────────────────────────
const articleSchema = generateArticleSchema({
  title: "What Is Ethena? USDe, sUSDe, and the Internet Bond Explained (2026)",
  description:
    "Complete guide to Ethena's synthetic dollar protocol: how USDe maintains its peg via delta-hedging, where sUSDe yield comes from, ENA tokenomics, TVL history, and risk analysis.",
  url: `${SITE_URL}/learn/ethena-usde-guide`,
  datePublished: "2026-03-15T00:00:00Z",
  dateModified: "2026-03-15T00:00:00Z",
  author: "degen0x Team",
  image: `${SITE_URL}/api/og?title=Ethena+USDe&category=Learn&type=learn`,
  wordCount: 2800,
});

const faqSchema = generateFAQSchema([
  {
    question: "What is Ethena (USDe)?",
    answer:
      "Ethena is a DeFi protocol that issues USDe, a synthetic dollar stablecoin. Unlike USDT or USDC which hold real dollars in bank accounts, USDe maintains its $1 peg through delta-hedging: holding long ETH collateral (stETH) while simultaneously holding short perpetual futures positions of equal value. This makes the position dollar-neutral regardless of ETH's price movement.",
  },
  {
    question: "How does sUSDe generate yield?",
    answer:
      "sUSDe (staked USDe) earns yield from two sources: Ethereum staking rewards from the stETH collateral (~3–5% annually), and perpetual futures funding rate payments. During bull markets, traders pay shorts to maintain their long positions — Ethena earns these payments and passes them to sUSDe holders. Yields have ranged from 5% in quiet markets to 35%+ during peak bull conditions.",
  },
  {
    question: "Is Ethena USDe safe?",
    answer:
      "USDe is always fully collateralized, which makes it fundamentally different from algorithmic stablecoins like UST/LUNA. However, USDe carries its own risks: centralized exchange counterparty risk (shorts are held on CEXs), negative funding rate risk, and smart contract risk. It is not risk-free.",
  },
  {
    question: "What is the Internet Bond?",
    answer:
      "The 'Internet Bond' is Ethena's name for sUSDe — staked USDe that earns yield. The framing positions it as a crypto-native equivalent of a Treasury bond: a dollar-denominated savings instrument with programmatic yield, no traditional custodian, and permissionless global access.",
  },
  {
    question: "Is Ethena the same as UST/LUNA?",
    answer:
      "No. UST was algorithmic with no real collateral — its peg depended entirely on LUNA's market cap. USDe is always backed by real assets (liquid staked ETH plus offsetting short positions). The mechanism and risk profile are fundamentally different, though USDe is not risk-free.",
  },
  {
    question: "What is the ENA token?",
    answer:
      "ENA is Ethena's governance token with a total supply of 15 billion tokens. Holders vote on protocol parameters and can stake ENA to receive sENA, which earns rewards from protocol activity. Ethena's 2026 roadmap includes activating a fee switch that routes protocol revenue to ENA stakers.",
  },
]);

const schemas = combineSchemas([articleSchema, faqSchema]);

// ─── Page Component ───────────────────────────────────────────────────────────
export default function EthenaUsdeGuide() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <StructuredData data={schemas} />

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Learn", href: "/learn" },
          { label: "Ethena USDe Guide" },
        ]}
      />

      {/* Badges */}
      <div className="flex gap-3 mb-4 mt-8">
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#1f6feb]/20 text-[#58a6ff] border border-[#1f6feb]/30">
          DeFi
        </span>
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#1f6feb]/20 text-[#58a6ff] border border-[#1f6feb]/30">
          Stablecoins
        </span>
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#d29922]/20 text-[#d29922] border border-[#d29922]/30">
          Intermediate
        </span>
      </div>

      {/* Title */}
      <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#6366f1] to-[#06b6d4] bg-clip-text text-transparent">
        What Is Ethena? USDe, sUSDe, and the Internet Bond Explained
      </h1>
      <p className="text-xl text-[#8b949e] mb-8">
        Ethena is a synthetic dollar protocol that produces USDe — a stablecoin backed by
        delta-hedged crypto derivatives, not bank accounts. It grew to a $14B market cap and the
        third-largest stablecoin position in the world. Here&apos;s exactly how it works.
      </p>

      {/* Meta Info */}
      <div className="flex flex-wrap gap-6 mb-10 text-sm text-[#8b949e] pb-8 border-b border-[#30363d]">
        <span>11 min read</span>
        <span>Updated March 2026</span>
      </div>

      {/* Disclaimer */}
      <div className="bg-[#161b22] border border-[#f0883e]/30 rounded-lg p-5 mb-10">
        <p className="text-[#f0883e] text-sm font-medium mb-1">⚠️ Educational Content Only</p>
        <p className="text-[#8b949e] text-sm">
          This guide is for informational purposes only. It is not financial advice. DeFi protocols
          carry significant risks including smart contract bugs, market risk, and counterparty risk.
          Always do your own research.
        </p>
      </div>

      {/* Table of Contents */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 mb-12">
        <h3 className="text-[#e6edf3] font-semibold mb-4">📋 Table of Contents</h3>
        <ol className="space-y-2 text-[#58a6ff] text-sm">
          <li><a href="#what-is-ethena" className="hover:underline">1. What Is Ethena?</a></li>
          <li><a href="#what-is-usde" className="hover:underline">2. What Is USDe?</a></li>
          <li><a href="#peg-mechanism" className="hover:underline">3. How USDe Maintains Its Peg: Delta-Hedging Explained</a></li>
          <li><a href="#susde-internet-bond" className="hover:underline">4. sUSDe: The Internet Bond</a></li>
          <li><a href="#yield-sources" className="hover:underline">5. Where the Yield Comes From</a></li>
          <li><a href="#ena-token" className="hover:underline">6. ENA Token: Tokenomics and Governance</a></li>
          <li><a href="#ethena-tvl" className="hover:underline">7. Ethena&apos;s Growth and TVL</a></li>
          <li><a href="#risks" className="hover:underline">8. Risks and Criticisms</a></li>
          <li><a href="#comparison" className="hover:underline">9. Ethena vs Other Stablecoins</a></li>
          <li><a href="#how-to-use" className="hover:underline">10. How to Use Ethena</a></li>
          <li><a href="#faq" className="hover:underline">11. Frequently Asked Questions</a></li>
        </ol>
      </div>

      {/* Section 1 */}
      <section id="what-is-ethena" className="mb-14">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-5">1. What Is Ethena?</h2>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          Ethena Labs is a DeFi protocol built on Ethereum that issues{" "}
          <strong className="text-[#e6edf3]">USDe</strong>, a synthetic dollar, and{" "}
          <strong className="text-[#e6edf3]">sUSDe</strong>, a yield-bearing version — which the
          team calls the <strong className="text-[#e6edf3]">&quot;Internet Bond.&quot;</strong> The
          protocol launched publicly in February 2024 and reached a peak TVL of nearly{" "}
          <strong className="text-[#e6edf3]">$15 billion</strong> by October 2025.
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
          The core insight is straightforward: you can create a dollar-equivalent asset using crypto
          collateral plus a perfectly offsetting derivatives position. No banks. No Treasuries. No
          redemption risk from a single custodian. Just on-chain math.
        </p>

        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 my-6">
          <h4 className="text-[#58a6ff] font-semibold mb-4">📊 Ethena by the Numbers (March 2026)</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-[#8b949e]">TVL (Peak Oct 2025)</p>
              <p className="text-[#e6edf3] font-bold text-lg">~$14.98B</p>
            </div>
            <div>
              <p className="text-[#8b949e]">TVL (Current)</p>
              <p className="text-[#e6edf3] font-bold text-lg">~$6.7B</p>
            </div>
            <div>
              <p className="text-[#8b949e]">USDe Market Cap Peak</p>
              <p className="text-[#e6edf3] font-bold text-lg">~$14B</p>
            </div>
            <div>
              <p className="text-[#8b949e]">Revenue (90 days)</p>
              <p className="text-[#e6edf3] font-bold text-lg">~$79M</p>
            </div>
            <div>
              <p className="text-[#8b949e]">ENA Total Supply</p>
              <p className="text-[#e6edf3] font-bold text-lg">15B ENA</p>
            </div>
            <div>
              <p className="text-[#8b949e]">Stablecoin Rank (Peak)</p>
              <p className="text-[#e6edf3] font-bold text-lg">#3</p>
            </div>
          </div>

        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-03-15"
          updatedDate="2026-03-15"
          readingTime={5}
          section="learn"
        />

          <p className="text-[#8b949e] text-xs mt-4">
            Source: DefiLlama, CoinMarketCap — March 2026 (approximate)
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section id="what-is-usde" className="mb-14">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-5">2. What Is USDe?</h2>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          USDe is a <strong className="text-[#e6edf3]">synthetic dollar</strong> — a token designed
          to track the value of $1, but backed entirely by crypto assets and derivatives rather than
          USD held in a bank account.
        </p>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          When you mint USDe, you deposit collateral (primarily stETH and other liquid staked ETH
          tokens, plus stablecoins). Ethena then opens a corresponding{" "}
          <strong className="text-[#e6edf3]">short perpetual futures position</strong> on a
          centralized exchange equal to the dollar value of that collateral. The result is a
          delta-neutral position: ETH price movements cancel out, leaving the position always worth
          approximately $1 per USDe.
        </p>

        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 my-6">
          <h4 className="text-[#58a6ff] font-semibold mb-3">💡 USDe vs USDT vs DAI</h4>
          <p className="text-[#c9d1d9] text-sm leading-relaxed">
            USDT/USDC hold real dollars in bank accounts — simple, but dependent on Tether and
            Circle&apos;s banking relationships. DAI/USDS use overcollateralized crypto vaults.
            USDe uses delta-hedged derivatives — no banks, but introduces CEX counterparty risk.
            Different tradeoffs, not one obviously better.
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section id="peg-mechanism" className="mb-14">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-5">
          3. How USDe Maintains Its Peg: Delta-Hedging Explained
        </h2>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          The peg mechanism has two layers working together:
        </p>

        <div className="space-y-4 my-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <h4 className="text-[#e6edf3] font-semibold mb-2">Layer 1: Delta-Neutral Collateral</h4>
            <p className="text-[#c9d1d9] text-sm leading-relaxed">
              Every USDe is backed by a delta-neutral position: long collateral (stETH) + short
              perpetual futures of equal size. The short position offsets any price movement in the
              underlying ETH, leaving the combined position worth a stable dollar amount regardless
              of whether ETH rises or falls.
            </p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <h4 className="text-[#e6edf3] font-semibold mb-2">Layer 2: Mint/Redeem Arbitrage</h4>
            <p className="text-[#c9d1d9] text-sm leading-relaxed">
              If USDe trades below $1, arbitrageurs buy cheap USDe and redeem it with Ethena for $1
              worth of collateral — capturing the discount and pushing the price up. If it trades
              above $1, they mint at $1 and sell for the premium. This two-sided pressure maintains
              the peg.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section id="susde-internet-bond" className="mb-14">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-5">4. sUSDe: The Internet Bond</h2>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          <strong className="text-[#e6edf3]">sUSDe (staked USDe)</strong> is what makes Ethena
          compelling to DeFi users. Deposit USDe into Ethena&apos;s staking contract and you receive
          sUSDe — a yield-bearing token that accrues value over time.
        </p>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          This is a <strong className="text-[#e6edf3]">non-rebasing model</strong>: your sUSDe
          balance stays the same, but its exchange rate against USDe increases. If the annual yield
          is 20%, after one year 1 sUSDe redeems for 1.20 USDe instead of 1.00 USDe.
        </p>

        <div className="bg-[#161b22] border border-[#22c55e]/30 rounded-lg p-6 my-6">
          <h4 className="text-[#22c55e] font-semibold mb-3">📈 Historical sUSDe Yields</h4>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <p className="text-[#8b949e] mb-1">Bull market peak</p>
              <p className="text-[#22c55e] font-bold text-xl">20–35%+</p>
              <p className="text-[#8b949e] text-xs">APY</p>
            </div>
            <div className="text-center">
              <p className="text-[#8b949e] mb-1">Neutral market</p>
              <p className="text-[#e6edf3] font-bold text-xl">5–12%</p>
              <p className="text-[#8b949e] text-xs">APY</p>
            </div>
            <div className="text-center">
              <p className="text-[#8b949e] mb-1">Bear conditions</p>
              <p className="text-[#f85149] font-bold text-xl">Variable</p>
              <p className="text-[#8b949e] text-xs">Can go low</p>
            </div>
          </div>
          <p className="text-[#8b949e] text-xs mt-4">
            Yields are not fixed. They fluctuate with perpetual futures funding rates.
          </p>
        </div>

        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          The &quot;Internet Bond&quot; framing is intentional. Ethena positions sUSDe as the crypto
          equivalent of a Treasury bond — a dollar-denominated savings instrument with programmatic
          yield, no counterparty in the traditional finance sense, and permissionless access from
          anywhere in the world.
        </p>
      </section>

      {/* Interactive Yield Calculator */}
      <EthenaYieldCalc />

      {/* Section 5 */}
      <section id="yield-sources" className="mb-14">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-5">5. Where the Yield Comes From</h2>

        <div className="space-y-4 my-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <h4 className="text-[#58a6ff] font-semibold mb-2">Source 1: Ethereum Staking Rewards</h4>
            <p className="text-[#c9d1d9] text-sm leading-relaxed">
              The collateral backing USDe is primarily liquid staked ETH (stETH and similar tokens).
              These earn ~3–5% annually from Ethereum&apos;s proof-of-stake rewards. This is the{" "}
              <strong>&quot;floor&quot;</strong> yield — it exists regardless of market conditions.
            </p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <h4 className="text-[#58a6ff] font-semibold mb-2">Source 2: Perpetual Futures Funding Rates</h4>
            <p className="text-[#c9d1d9] text-sm leading-relaxed">
              In perpetual futures markets, a periodic payment called a{" "}
              <strong className="text-[#e6edf3]">funding rate</strong> is paid between long and
              short traders to keep the perp price close to spot. During bull markets, more traders
              want to be long than short — longs pay shorts. Ethena&apos;s short positions{" "}
              <strong className="text-[#e6edf3]">receive</strong> these payments, and they flow to
              sUSDe holders. In a strongly bullish environment, annualized funding rates can reach
              20–50%+.
            </p>
          </div>
        </div>

        <div className="bg-[#161b22] border border-[#f85149]/30 rounded-lg p-5 my-6">
          <p className="text-[#f85149] text-sm font-medium mb-1">⚠️ Funding Rate Risk</p>
          <p className="text-[#8b949e] text-sm">
            In bear markets or when the market is short-biased, funding can go{" "}
            <strong>negative</strong> — meaning shorts pay longs. In this scenario, Ethena&apos;s
            yield drops significantly. Ethena maintains a reserve fund to buffer against short
            periods of negative funding, but extended negative-funding environments would drain it.
          </p>
        </div>
      </section>

      {/* Section 6 */}
      <section id="ena-token" className="mb-14">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-5">
          6. ENA Token: Tokenomics and Governance
        </h2>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          <strong className="text-[#e6edf3]">ENA</strong> is Ethena&apos;s governance and utility
          token.
        </p>

        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 my-6">
          <h4 className="text-[#58a6ff] font-semibold mb-4">ENA Token Overview (March 2026)</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-[#8b949e]">Total Supply</p>
              <p className="text-[#e6edf3] font-bold">15 billion ENA</p>
            </div>
            <div>
              <p className="text-[#8b949e]">Circulating Supply</p>
              <p className="text-[#e6edf3] font-bold">~7.42B (49.5%)</p>
            </div>
            <div>
              <p className="text-[#8b949e]">Vesting (remaining)</p>
              <p className="text-[#e6edf3] font-bold">1yr cliff + 3yr linear</p>
            </div>
            <div>
              <p className="text-[#8b949e]">Fee Switch</p>
              <p className="text-[#e6edf3] font-bold">2026 roadmap</p>
            </div>
          </div>
        </div>

        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          By locking ENA, users receive <strong className="text-[#e6edf3]">sENA</strong>, a liquid
          staking token that earns rewards from ecosystem partnerships. Ethena&apos;s 2026 roadmap
          includes activating a <strong className="text-[#e6edf3]">fee switch</strong> that
          redirects a portion of protocol revenue to ENA stakers — a meaningful catalyst if
          protocol revenue remains strong.
        </p>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          Ethena also has the{" "}
          <strong className="text-[#e6edf3]">Converge Network</strong> on its 2026 roadmap — a
          purpose-built blockchain developed with Securitize to onboard institutional capital under
          the new US GENIUS Act stablecoin framework.
        </p>
      </section>

      {/* Section 7 */}
      <section id="ethena-tvl" className="mb-14">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-5">7. Ethena&apos;s Growth and TVL</h2>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#30363d]">
                <th className="text-left py-3 px-4 text-[#8b949e] font-semibold">Date</th>
                <th className="text-left py-3 px-4 text-[#8b949e] font-semibold">TVL / USDe Market Cap</th>
              </tr>
            </thead>
            <tbody>
              {[
                { date: "Launch (Feb 2024)", tvl: "~$0" },
                { date: "Mid 2024", tvl: "~$3B" },
                { date: "Oct 2025 (peak)", tvl: "~$14.98B" },
                { date: "Jan 2026", tvl: "~$6.55B" },
                { date: "March 2026 (approx.)", tvl: "~$6.7B" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-[#30363d] hover:bg-[#161b22] transition-colors">
                  <td className="py-3 px-4 text-[#c9d1d9]">{row.date}</td>
                  <td className="py-3 px-4 text-[#e6edf3] font-medium">{row.tvl}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-[#8b949e] text-xs mt-2">Source: DefiLlama, March 2026</p>
        </div>

        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          USDe briefly became the{" "}
          <strong className="text-[#e6edf3]">third-largest stablecoin in the world</strong>, behind
          only Tether (USDT) and Circle (USDC). The surge from $5.7B to $9.3B market cap in three
          weeks in mid-2025 was partly catalyzed by the US GENIUS Act — the first comprehensive
          American stablecoin legislation — which paradoxically drove demand for crypto-native dollar
          alternatives.
        </p>
      </section>

      {/* Section 8 */}
      <section id="risks" className="mb-14">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-5">8. Risks and Criticisms</h2>

        <div className="space-y-4">
          {[
            {
              title: "Centralized Exchange Counterparty Risk",
              level: "high",
              body: "Ethena's short positions are held on centralized exchanges (Binance, OKX, Bybit, etc.). If a major exchange fails or freezes withdrawals — as FTX did in 2022 — Ethena could face sudden collateral shortfalls. This is arguably the highest-severity systemic risk.",
            },
            {
              title: "Negative Funding Rate Risk",
              level: "medium",
              body: "If perpetual futures markets sustain negative funding (shorts pay longs), Ethena's yield collapses and the reserve fund depletes. A prolonged negative-funding environment could, in an extreme scenario, cause the protocol to wind down positions at a loss.",
            },
            {
              title: "Collateral Risk",
              level: "medium",
              body: "The collateral (primarily stETH) carries its own smart contract and slashing risk. A catastrophic stETH de-peg would stress the system even if the delta-hedging is working correctly.",
            },
            {
              title: "Smart Contract Risk",
              level: "low",
              body: "All DeFi protocols carry code risk. Ethena's contracts have been audited by multiple firms, but no audit guarantees no bugs.",
            },
          ].map((risk) => (
            <div
              key={risk.title}
              className={`bg-[#161b22] rounded-lg p-5 border ${
                risk.level === "high"
                  ? "border-[#f85149]/40"
                  : risk.level === "medium"
                  ? "border-[#d29922]/40"
                  : "border-[#30363d]"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <h4 className="text-[#e6edf3] font-semibold">{risk.title}</h4>
                <span
                  className={`text-xs px-2 py-0.5 rounded font-medium ${
                    risk.level === "high"
                      ? "bg-[#f85149]/20 text-[#f85149]"
                      : risk.level === "medium"
                      ? "bg-[#d29922]/20 text-[#d29922]"
                      : "bg-[#22c55e]/20 text-[#22c55e]"
                  }`}
                >
                  {risk.level.toUpperCase()} RISK
                </span>
              </div>
              <p className="text-[#c9d1d9] text-sm leading-relaxed">{risk.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 9 */}
      <section id="comparison" className="mb-14">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-5">9. Ethena vs Other Stablecoins</h2>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#30363d]">
                {["Stablecoin", "Type", "Backing", "Yield", "Custodian Risk"].map((h) => (
                  <th key={h} className="text-left py-3 px-4 text-[#8b949e] font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["USDT (Tether)", "Fiat-backed", "USD + T-bills", "None", "High"],
                ["USDC (Circle)", "Fiat-backed", "USD + T-bills", "None", "Medium"],
                ["DAI / USDS (Sky)", "CDP / hybrid", "ETH + RWAs", "Variable (DSR)", "Low-medium"],
                ["USDe (Ethena)", "Synthetic", "stETH + perp shorts", "High (variable)", "Medium (CEX)"],
                ["LUSD (Liquity)", "CDP", "ETH only", "None", "Very low"],
              ].map((row, i) => (
                <tr
                  key={i}
                  className={`border-b border-[#30363d] hover:bg-[#161b22] transition-colors ${
                    i === 3 ? "bg-[#161b22]" : ""
                  }`}
                >
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`py-3 px-4 ${
                        i === 3 && j === 0
                          ? "text-[#58a6ff] font-semibold"
                          : j === 0
                          ? "text-[#e6edf3] font-medium"
                          : "text-[#c9d1d9]"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-[#8b949e] text-xs mt-2">
            Every stablecoin makes different tradeoffs. USDe offers highest potential yield but
            introduces CEX counterparty exposure.
          </p>
        </div>

        <p className="text-[#c9d1d9] leading-relaxed">
          For a deeper comparison, see our{" "}
          <a href="/learn/stablecoin-comparison" className="text-[#58a6ff] hover:underline">
            stablecoin comparison guide
          </a>
          .
        </p>
      </section>

      {/* Section 10 */}
      <section id="how-to-use" className="mb-14">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-5">10. How to Use Ethena</h2>

        <div className="space-y-4">
          {[
            {
              step: "1",
              title: "Acquire USDe",
              body: "Buy USDe on decentralized exchanges (Curve, Uniswap) or centralized exchanges. You can also mint USDe by depositing collateral directly with Ethena at app.ethena.fi.",
            },
            {
              step: "2",
              title: "Stake for sUSDe",
              body: "Deposit USDe into Ethena's staking contract to receive sUSDe. Note: there's a 7-day cooldown period when unstaking.",
            },
            {
              step: "3",
              title: "Use sUSDe in DeFi",
              body: "sUSDe is composable — it's accepted as collateral on several lending protocols (Aave, Morpho, Pendle), letting you earn yield while also borrowing against your position.",
            },
            {
              step: "4",
              title: "Monitor your yield",
              body: "Use our DeFi yields tool to track current sUSDe APY alongside other yield opportunities, and our lending rates tool to find the best borrowing rates using sUSDe collateral.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="flex gap-4 bg-[#161b22] border border-[#30363d] rounded-lg p-5"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#6366f1]/20 border border-[#6366f1]/30 flex items-center justify-center text-[#818cf8] font-bold text-sm">
                {item.step}
              </div>
              <div>
                <h4 className="text-[#e6edf3] font-semibold mb-1">{item.title}</h4>
                <p className="text-[#c9d1d9] text-sm leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[#c9d1d9] mt-6 leading-relaxed">
          Track current sUSDe yields with our{" "}
          <a href="/tools/defi-yields" className="text-[#58a6ff] hover:underline">
            DeFi yields tool
          </a>{" "}
          and compare lending rates for sUSDe collateral with our{" "}
          <a href="/tools/lending-rates" className="text-[#58a6ff] hover:underline">
            lending rates tool
          </a>
          .
        </p>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="mb-14">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "Is USDe a safe stablecoin?",
              a: "USDe carries different risks than fiat-backed stablecoins. It's always fully collateralized, but exposes holders to CEX counterparty risk, funding rate risk, and smart contract risk. It is significantly safer than unbacked algorithmic stablecoins like the failed UST.",
            },
            {
              q: "Why is sUSDe yield so high sometimes?",
              a: "sUSDe yield is driven by perpetual futures funding rates. During bull markets, longs pay shorts — Ethena earns these payments. In strongly bullish conditions, annualized funding can exceed 30%, flowing through to sUSDe holders.",
            },
            {
              q: "What happens if funding rates go negative?",
              a: "Ethena maintains a reserve fund to buffer short periods of negative funding. If funding stays negative for an extended period, yields would drop significantly and the reserve would be drawn down.",
            },
            {
              q: "Is Ethena the same as the UST/LUNA collapse?",
              a: "No. UST was algorithmic with no real collateral backing. USDe is always backed by real assets (stETH + short futures). The risks are different in nature, though not zero.",
            },
            {
              q: "Can I lose money holding USDe?",
              a: "USDe is designed to stay at $1, but black swan scenarios — simultaneous exchange failures, extreme funding dislocation, or stETH de-peg — could theoretically cause losses. Hold only what you can afford to lose in any DeFi protocol.",
            },
            {
              q: "What is the ENA token used for?",
              a: "ENA is Ethena's governance token. Holders vote on protocol parameters and can stake ENA for sENA to earn protocol rewards. A fee switch routing revenue to stakers is part of the 2026 roadmap.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <h3 className="text-[#e6edf3] font-semibold mb-2">{item.q}</h3>
              <p className="text-[#c9d1d9] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Articles */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-[#e6edf3] mb-6">Related Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: "Stablecoin Comparison Guide", href: "/learn/stablecoin-comparison", desc: "USDT vs USDC vs DAI vs USDe" },
            { title: "Pendle Finance Guide", href: "/learn/pendle-finance-guide", desc: "Trade sUSDe yield on Pendle" },
            { title: "DeFi Safety Guide 2026", href: "/learn/defi-safety-guide-2026", desc: "How to stay safe in DeFi" },
            { title: "DeFi Yields Tool", href: "/tools/defi-yields", desc: "Compare current APYs including sUSDe" },
          ].map((link) => (
            <a
              key={link.href}
              className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#58a6ff]/50 transition-colors"
            >
              <p className="text-[#58a6ff] font-medium mb-1">{link.title}</p>
              <p className="text-[#8b949e] text-sm">{link.desc}</p>
            </a>
          ))}
        </div>
      </section>

      <BackToTop />
      <RelatedContent category="learn" currentSlug="/learn/ethena-usde-guide" />
    </div>
  );
}
