import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import {
  generateArticleSchema,
  generateFAQSchema,
  combineSchemas,
} from "@/lib/structured-data";
import { SITE_URL } from "@/lib/constants";
import AerodromeVeCalculator from "@/components/AerodromeVeCalculator";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


// ─── Metadata ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Aerodrome Finance Guide 2026: Base's #1 DEX | degen0x",
  description:
    "Aerodrome Finance guide 2026: ve(3,3) model, veAERO locking, pool types, tokenomics. How Aerodrome dominates Base with 68% DEX share and $500M TVL.",
  keywords: [
    "aerodrome finance",
    "aerodrome base chain",
    "AERO token",
    "ve33 tokenomics",
    "veAERO",
    "base chain dex",
    "aerodrome guide 2026",
    "velodrome aerodrome",
    "aerodrome liquidity",
    "base defi protocols",
  ],
  openGraph: {
    title: "Aerodrome Finance Guide 2026: Base Chain's Dominant DEX",
    description:
      "68% of Base DEX volume. $500M TVL. Here's how Aerodrome's ve(3,3) flywheel works — and how you can earn from it.",
    url: `${SITE_URL}/learn/aerodrome-finance-guide`,
    type: "article",
    publishedTime: "2026-03-17T00:00:00Z",
    modifiedTime: "2026-03-17T00:00:00Z",
    authors: ["degen0x Team"],
    images: [
      {
        url: `${SITE_URL}/api/og?title=Aerodrome+Finance+Guide&category=Learn&type=learn`,
        width: 1200,
        height: 630,
        alt: "Aerodrome Finance Guide 2026 — degen0x",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aerodrome Finance Guide 2026: Base Chain's #1 DEX",
    description:
      "68% Base DEX share. $500M TVL. How Aerodrome's ve(3,3) flywheel directs $810M/day in trading volume. Full guide →",
    images: [`${SITE_URL}/api/og?title=Aerodrome+Finance+Guide&category=Learn&type=learn`],
  },
  alternates: {
    canonical: `${SITE_URL}/learn/aerodrome-finance-guide`,
  },
};

// ─── Structured Data ─────────────────────────────────────────────────────────
const articleSchema = generateArticleSchema({
  title: "Aerodrome Finance Guide 2026: Base Chain's Dominant DEX Explained",
  description:
    "Complete guide to Aerodrome Finance (AERO): ve(3,3) tokenomics, veAERO voting and earning, pool types, AERO tokenomics, competitive landscape, and how to get started on Base chain.",
  url: `${SITE_URL}/learn/aerodrome-finance-guide`,
  datePublished: "2026-03-17T00:00:00Z",
  dateModified: "2026-03-17T00:00:00Z",
  author: "degen0x Team",
  image: `${SITE_URL}/api/og?title=Aerodrome+Finance+Guide&category=Learn&type=learn`,
  wordCount: 3200,
});

const faqSchema = generateFAQSchema([
  {
    question: "What is Aerodrome Finance?",
    answer:
      "Aerodrome Finance is the principal decentralized exchange (DEX) on Base chain, Coinbase's Layer 2 network. Built on the ve(3,3) tokenomics model, it serves as the central liquidity hub for the Base ecosystem — routing trades, directing emissions to productive pools, and redistributing 100% of protocol fees to AERO token lockers. As of March 2026, Aerodrome holds approximately $500M in TVL and commands around 68% of Base's DEX trading volume.",
  },
  {
    question: "What is veAERO and how do I get it?",
    answer:
      "veAERO is the vote-escrowed version of AERO. You get it by locking your AERO tokens for up to 4 years — the longer you lock, the more veAERO voting power you receive. 100 AERO locked for 4 years = 100 veAERO; 100 AERO locked for 1 year = 25 veAERO. veAERO holders vote weekly on which liquidity pools receive AERO emissions, and in return earn 100% of the trading fees and bribes from those pools.",
  },
  {
    question: "What is the ve(3,3) model?",
    answer:
      "The ve(3,3) model combines Curve Finance's vote-escrowed token design with Olympus DAO's cooperative game theory. 've' refers to vote-escrow: locking tokens to gain governance power that decays over time. '(3,3)' comes from game theory and represents the optimal cooperative outcome where all participants lock rather than sell. In practice it means AERO emissions flow to whichever pools veAERO holders vote for, and those holders receive the fees and bribes those pools generate.",
  },
  {
    question: "What is Aerodrome Slipstream?",
    answer:
      "Aerodrome Slipstream is a concentrated liquidity AMM (clAMM) module similar to Uniswap v3, launched in 2024. It allows liquidity providers to concentrate their capital within specific price ranges for greater capital efficiency and higher fee yields. Unlike standard volatile pools, Slipstream requires active management or use of auto-compounding vaults to maintain optimal ranges. Since launching, it has driven significant liquidity migration away from Uniswap v3 on Base.",
  },
  {
    question: "Is Aerodrome related to Velodrome?",
    answer:
      "Yes. Aerodrome was built by the same team (Velodrome/Dromos Labs) as Velodrome Finance on Optimism, using the same ve(3,3) architecture. Aerodrome launched on Base in August 2023 as Base's dedicated liquidity hub. In Q2 2026, the two protocols are scheduled to merge into a single unified DEX under one AERO token and governance layer, expanding to Ethereum mainnet. This cross-chain unification is one of the biggest DeFi events planned for 2026.",
  },
  {
    question: "What are the risks of using Aerodrome?",
    answer:
      "Key risks include: (1) Smart contract risk — Aerodrome's contracts have been audited but exploits are always possible in DeFi. (2) Impermanent loss for liquidity providers, especially in volatile pools or poorly managed Slipstream positions. (3) AERO token dilution — ongoing emissions gradually increase supply, which can pressure the token price. (4) Lock-up risk — veAERO positions lock your AERO for up to 4 years with no early exit. (5) Bribe market dependency — pool emissions can decline sharply if bribe income drops. Always do your own research.",
  },
]);

const schemas = combineSchemas([articleSchema, faqSchema]);

// ─── Page Component ───────────────────────────────────────────────────────────
export default function AerodromeFinanceGuide() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <StructuredData data={schemas} />

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Learn", href: "/learn" },
          { label: "Aerodrome Finance Guide" },
        ]}
      />

      {/* Badges */}
      <div className="flex gap-3 mb-4 mt-8">
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#1f6feb]/20 text-[#58a6ff] border border-[#1f6feb]/30">
          DeFi
        </span>
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#1a7f37]/20 text-[#3fb950] border border-[#1a7f37]/30">
          Intermediate
        </span>
      </div>

      {/* Title */}
      <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#58a6ff] to-[#3fb950] bg-clip-text text-transparent">
        Aerodrome Finance: Base Chain&apos;s Dominant DEX Explained
      </h1>
      <p className="text-xl text-[#8b949e] mb-8">
        How Aerodrome captured 68% of Base&apos;s DEX volume using ve(3,3) tokenomics — and how
        you can earn from it as a liquidity provider, voter, or trader.
      </p>

      {/* Meta Info */}
      <div className="flex flex-wrap gap-6 mb-10 text-sm text-[#8b949e] pb-8 border-b border-[#30363d]">
        <span>14 min read</span>
        <span>Updated March 2026</span>
      </div>

      {/* Disclaimer */}
      <div className="bg-[#161b22] border border-[#f0883e]/30 rounded-lg p-5 mb-10">
        <p className="text-[#f0883e] text-sm font-medium mb-1">⚠️ Educational Content Only</p>
        <p className="text-[#8b949e] text-sm">
          This guide is for informational purposes only. It is not financial advice. DeFi protocols
          carry significant risks including smart contract exploits, impermanent loss, and token
          dilution. Always do your own research before interacting with any protocol.
        </p>
      </div>

      {/* Table of Contents */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 mb-12">
        <h3 className="text-[#e6edf3] font-semibold mb-4">📋 Table of Contents</h3>
        <ol className="space-y-2 text-[#58a6ff] text-sm">
          <li>
            <a href="#what-is-aerodrome" className="hover:underline">
              1. What Is Aerodrome Finance?
            </a>
          </li>
          <li>
            <a href="#ve33-model" className="hover:underline">
              2. The ve(3,3) Model: How Aerodrome&apos;s Flywheel Works
            </a>
          </li>
          <li>
            <a href="#pool-types" className="hover:underline">
              3. Pool Types: Stable, Volatile, and Slipstream
            </a>
          </li>
          <li>
            <a href="#veareo-voting" className="hover:underline">
              4. veAERO: Locking, Voting, and Earning Fees
            </a>
          </li>
          <li>
            <a href="#tokenomics" className="hover:underline">
              5. AERO Tokenomics: Emissions, Supply, and the Aero Fed
            </a>
          </li>
          <li>
            <a href="#key-metrics" className="hover:underline">
              6. Key Metrics (March 2026)
            </a>
          </li>
          <li>
            <a href="#competitive-landscape" className="hover:underline">
              7. Competitive Landscape: Aerodrome vs. the Field
            </a>
          </li>
          <li>
            <a href="#risks" className="hover:underline">
              8. Risks to Understand Before You Start
            </a>
          </li>
          <li>
            <a href="#getting-started" className="hover:underline">
              9. How to Get Started with Aerodrome
            </a>
          </li>
          <li>
            <a href="#faq" className="hover:underline">
              10. Frequently Asked Questions
            </a>
          </li>
        </ol>
      </div>

      {/* ── Section 1 ── */}
      <section id="what-is-aerodrome" className="mb-14">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-5">1. What Is Aerodrome Finance?</h2>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          Aerodrome Finance is the principal decentralized exchange on{" "}
          <strong className="text-[#e6edf3]">Base</strong>, Coinbase&apos;s Ethereum Layer 2
          network. Launched in August 2023 by the same team behind Velodrome Finance on Optimism,
          Aerodrome was purpose-built to be Base&apos;s central liquidity layer — the protocol that
          everything else plugs into when it needs deep, efficient trading markets.
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
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          In just over two years, it has delivered on that mandate. By March 2026, Aerodrome
          commands approximately <strong className="text-[#e6edf3]">68% of Base&apos;s DEX
          trading volume</strong> — processing around $810M in daily trades — while holding roughly{" "}
          <strong className="text-[#e6edf3]">$500M in total value locked</strong> (TVL peaked
          above $1 billion in December 2025). It is the highest fee-generating dApp on the entire
          Base chain, regularly outpacing even Coinbase&apos;s own products in on-chain revenue.
        </p>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          The secret sauce is the{" "}
          <strong className="text-[#e6edf3]">ve(3,3) tokenomics model</strong>: a sophisticated
          incentive flywheel that coordinates liquidity providers, traders, and governance
          participants into a self-reinforcing system. Understanding how that model works is the key
          to understanding why Aerodrome has grown so fast — and how you can participate in it.
        </p>

        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 my-6">
          <h4 className="text-[#3fb950] font-semibold mb-3">
            📊 Aerodrome at a Glance (March 2026)
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-[#8b949e]">TVL</p>
              <p className="text-[#e6edf3] font-bold text-lg">~$500M</p>
            </div>
            <div>
              <p className="text-[#8b949e]">Daily Volume</p>
              <p className="text-[#e6edf3] font-bold text-lg">~$810M</p>
            </div>
            <div>
              <p className="text-[#8b949e]">Base DEX Share</p>
              <p className="text-[#e6edf3] font-bold text-lg">~68%</p>
            </div>
            <div>
              <p className="text-[#8b949e]">Annualized Revenue</p>
              <p className="text-[#e6edf3] font-bold text-lg">~$202M</p>
            </div>
            <div>
              <p className="text-[#8b949e]">Chain</p>
              <p className="text-[#e6edf3] font-bold text-lg">Base (L2)</p>
            </div>
            <div>
              <p className="text-[#8b949e]">Launched</p>
              <p className="text-[#e6edf3] font-bold text-lg">Aug 2023</p>
            </div>
          </div>

        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-03-17"
          updatedDate="2026-03-17"
          readingTime={9}
          section="learn"
        />

          <p className="text-[#8b949e] text-xs mt-4">
            Source: DefiLlama, CoinGecko — March 2026 (approximate, data changes daily)
          </p>
        </div>
      </section>

      {/* ── Section 2 ── */}
      <section id="ve33-model" className="mb-14">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-5">
          2. The ve(3,3) Model: How Aerodrome&apos;s Flywheel Works
        </h2>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          Aerodrome&apos;s architecture is built on the{" "}
          <strong className="text-[#e6edf3]">ve(3,3) model</strong> — a design that combines two
          ideas from earlier DeFi protocols. The &ldquo;ve&rdquo; part comes from{" "}
          <strong className="text-[#e6edf3]">Curve Finance</strong>, which pioneered vote-escrowed
          tokens: lock your tokens to gain governance power and protocol fees, with longer locks
          giving more power. The &ldquo;(3,3)&rdquo; part comes from game theory and represents the
          cooperative equilibrium — the outcome where everyone locks rather than sells, which
          benefits all participants.
        </p>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          In practice, the flywheel works like this:
        </p>

        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 my-6">
          <h4 className="text-[#58a6ff] font-semibold mb-4">⚙️ The Aerodrome Flywheel</h4>
          <div className="space-y-4 text-sm">
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#1f6feb]/20 text-[#58a6ff] flex items-center justify-center font-bold text-xs border border-[#1f6feb]/30">1</span>
              <div>
                <p className="text-[#e6edf3] font-medium">Emissions flow to voted pools</p>
                <p className="text-[#8b949e] mt-1">Each week, new AERO tokens are emitted to liquidity pools in proportion to the votes they receive from veAERO holders.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#1f6feb]/20 text-[#58a6ff] flex items-center justify-center font-bold text-xs border border-[#1f6feb]/30">2</span>
              <div>
                <p className="text-[#e6edf3] font-medium">LPs stake in voted pools</p>
                <p className="text-[#8b949e] mt-1">Liquidity providers deposit assets and stake their LP tokens in the protocol gauges to earn those AERO emissions.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#1f6feb]/20 text-[#58a6ff] flex items-center justify-center font-bold text-xs border border-[#1f6feb]/30">3</span>
              <div>
                <p className="text-[#e6edf3] font-medium">Deep liquidity attracts traders</p>
                <p className="text-[#8b949e] mt-1">More liquidity means tighter spreads and lower slippage, attracting trading volume to those pools.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#1f6feb]/20 text-[#58a6ff] flex items-center justify-center font-bold text-xs border border-[#1f6feb]/30">4</span>
              <div>
                <p className="text-[#e6edf3] font-medium">Fees flow to veAERO voters</p>
                <p className="text-[#8b949e] mt-1">100% of trading fees from each pool go to the veAERO holders who voted for that pool — not to LPs. This is a key distinction from traditional AMMs.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#1f6feb]/20 text-[#58a6ff] flex items-center justify-center font-bold text-xs border border-[#1f6feb]/30">5</span>
              <div>
                <p className="text-[#e6edf3] font-medium">Protocols bribe to attract votes</p>
                <p className="text-[#8b949e] mt-1">Protocols wanting liquidity for their tokens pay bribes to veAERO voters to direct emissions to their pools. This creates a transparent, market-based liquidity marketplace.</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          The elegance of this system is that it creates alignment at every level. LPs are motivated
          to provide liquidity (to earn emissions). Protocols are motivated to bribe (to get
          emissions for their pools). And veAERO holders are motivated to vote thoughtfully (to
          maximize their fee + bribe income). The protocol doesn&apos;t need to manually manage
          anything — incentives do the coordination automatically.
        </p>
      </section>

      {/* ── Section 3 ── */}
      <section id="pool-types" className="mb-14">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-5">
          3. Pool Types: Stable, Volatile, and Slipstream
        </h2>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          Aerodrome supports three distinct pool architectures, each optimized for different asset
          pairs and trading behaviors.
        </p>

        <h3 className="text-xl font-semibold text-[#e6edf3] mt-8 mb-3">
          Stable Pools (for correlated assets)
        </h3>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          Stable pools use a hybrid AMM curve designed for assets that should trade at near-equal
          prices — think USDC/USDT, ETH/wstETH, or DAI/USDC. The bonding curve stays flatter near
          the 1:1 ratio, enabling extremely low slippage on large swaps between correlated pairs.
          Fee tiers for stable pools are typically very low (0.01–0.05%) because the arbitrage
          opportunities are smaller.
        </p>

        <h3 className="text-xl font-semibold text-[#e6edf3] mt-8 mb-3">
          Volatile Pools (for uncorrelated assets)
        </h3>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          Volatile pools use the standard constant product formula (x × y = k) — the same as
          Uniswap v2 — for asset pairs that can move independently of each other, like ETH/USDC or
          AERO/WETH. These pools use higher fee tiers (typically 0.3%) to compensate LPs for
          impermanent loss exposure.
        </p>

        <h3 className="text-xl font-semibold text-[#e6edf3] mt-8 mb-3">
          Slipstream (Concentrated Liquidity)
        </h3>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          Slipstream is Aerodrome&apos;s concentrated liquidity AMM module, similar to Uniswap v3.
          Launched in April 2024, it allows LPs to provide liquidity within custom price ranges for
          dramatically higher capital efficiency — your $1,000 can do the work of $10,000 or more
          in a standard pool, if you manage your range well.
        </p>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          The tradeoff is active management. If the price moves outside your range, your position
          stops earning fees and you hold 100% of the underperforming asset. Most Slipstream LPs
          use auto-compounding vaults (like those offered by third-party protocols built on top of
          Aerodrome) to automate range management and reinvest fees.
        </p>

        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 my-6 overflow-x-auto">
          <h4 className="text-[#58a6ff] font-semibold mb-4">📊 Pool Type Comparison</h4>
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-[#30363d]">
                <th className="py-2 pr-4 text-[#8b949e] font-medium">Pool Type</th>
                <th className="py-2 pr-4 text-[#8b949e] font-medium">Best For</th>
                <th className="py-2 pr-4 text-[#8b949e] font-medium">Fee Range</th>
                <th className="py-2 text-[#8b949e] font-medium">IL Risk</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#30363d]">
              <tr>
                <td className="py-3 pr-4 text-[#e6edf3] font-medium">Stable</td>
                <td className="py-3 pr-4 text-[#c9d1d9]">USDC/USDT, ETH/wstETH</td>
                <td className="py-3 pr-4 text-[#c9d1d9]">0.01–0.05%</td>
                <td className="py-3 text-[#3fb950]">Low</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 text-[#e6edf3] font-medium">Volatile</td>
                <td className="py-3 pr-4 text-[#c9d1d9]">ETH/USDC, AERO/WETH</td>
                <td className="py-3 pr-4 text-[#c9d1d9]">0.3%</td>
                <td className="py-3 text-[#f0883e]">Medium</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 text-[#e6edf3] font-medium">Slipstream (clAMM)</td>
                <td className="py-3 pr-4 text-[#c9d1d9]">Any pair, active LPs</td>
                <td className="py-3 pr-4 text-[#c9d1d9]">0.01–1.0%</td>
                <td className="py-3 text-[#f85149]">High (if unmanaged)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Section 4 ── */}
      <section id="veareo-voting" className="mb-14">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-5">
          4. veAERO: Locking, Voting, and Earning Fees
        </h2>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          veAERO is how you graduate from passive user to active protocol stakeholder. When you lock
          your <code className="bg-[#161b22] px-1.5 py-0.5 rounded text-[#79c0ff] text-sm">AERO</code>{" "}
          tokens, you receive a{" "}
          <code className="bg-[#161b22] px-1.5 py-0.5 rounded text-[#79c0ff] text-sm">veAERO</code>{" "}
          position — represented as a non-fungible token (veNFT) in your wallet — that entitles you
          to vote, earn fees, and participate in protocol governance.
        </p>

        <h3 className="text-xl font-semibold text-[#e6edf3] mt-8 mb-3">Lock Duration</h3>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          You can lock AERO for any duration from 1 week to 4 years. The longer you lock, the more
          voting power you receive:
        </p>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5 my-5 text-sm">
          <div className="grid grid-cols-2 gap-3">
            <div className="flex justify-between border-b border-[#30363d] pb-2">
              <span className="text-[#8b949e]">100 AERO × 4 years</span>
              <span className="text-[#3fb950] font-semibold">= 100 veAERO</span>
            </div>
            <div className="flex justify-between border-b border-[#30363d] pb-2">
              <span className="text-[#8b949e]">100 AERO × 2 years</span>
              <span className="text-[#3fb950] font-semibold">= 50 veAERO</span>
            </div>
            <div className="flex justify-between border-b border-[#30363d] pb-2">
              <span className="text-[#8b949e]">100 AERO × 1 year</span>
              <span className="text-[#58a6ff] font-semibold">= 25 veAERO</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8b949e]">100 AERO × 6 months</span>
              <span className="text-[#58a6ff] font-semibold">= 12.5 veAERO</span>
            </div>
          </div>
          <p className="text-[#8b949e] text-xs mt-3">
            Voting power decays linearly toward zero as your lock approaches expiry, unless you
            enable Auto-Max Lock to maintain 4-year equivalent power continuously.
          </p>
        </div>

        <h3 className="text-xl font-semibold text-[#e6edf3] mt-8 mb-3">Weekly Voting Epochs</h3>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          Every Thursday, a new voting epoch begins. veAERO holders cast votes to allocate the
          coming week&apos;s AERO emissions across pools. Your votes determine how much new AERO
          flows to each pool — and in return, you receive 100% of the trading fees generated by
          the pools you voted for during the previous epoch, plus any bribes offered to attract
          your votes.
        </p>

        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5 my-6">
          <p className="text-[#f0883e] text-sm font-medium mb-2">💡 Pro Tip: Bribes</p>
          <p className="text-[#8b949e] text-sm leading-relaxed">
            Protocols wanting emissions for their pools often offer{" "}
            <strong className="text-[#e6edf3]">bribes</strong> — additional token rewards paid
            directly to veAERO voters who support their pool. You can view current bribe
            opportunities on the Aerodrome UI before voting. Savvy veAERO holders optimize their
            votes based on the combination of expected fees + bribe income per veAERO.
          </p>
        </div>

        {/* Interactive Calculator */}
        <AerodromeVeCalculator />
      </section>

      {/* ── Section 5 ── */}
      <section id="tokenomics" className="mb-14">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-5">
          5. AERO Tokenomics: Emissions, Supply, and the Aero Fed
        </h2>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          The <code className="bg-[#161b22] px-1.5 py-0.5 rounded text-[#79c0ff] text-sm">AERO</code>{" "}
          token serves three functions: it&apos;s a governance token (via locking into veAERO),
          a reward token (emitted to LPs each epoch), and a deflationary economic asset (bought
          back via the protocol&apos;s internal treasury mechanism).
        </p>

        <h3 className="text-xl font-semibold text-[#e6edf3] mt-8 mb-3">Emissions Schedule</h3>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          AERO follows a decreasing emissions schedule. Each epoch, a set amount of new AERO is
          minted and distributed to LPs who stake in protocol gauges. Emissions decrease over time
          as the protocol matures. A critical threshold is{" "}
          <strong className="text-[#e6edf3]">Epoch 67</strong>: when weekly emissions fall below
          9 million AERO per epoch, governance control over monetary policy transfers fully to
          veAERO holders via the{" "}
          <strong className="text-[#e6edf3]">Aero Fed</strong>.
        </p>

        <h3 className="text-xl font-semibold text-[#e6edf3] mt-8 mb-3">
          The Aero Fed: Community Monetary Policy
        </h3>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          Once the Aero Fed activates, veAERO holders vote each epoch on one of three monetary
          policy decisions:
        </p>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5 my-5">
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <span className="text-[#3fb950] font-bold mt-0.5">↑</span>
              <div>
                <p className="text-[#e6edf3] font-medium">Increase emissions by 0.01%</p>
                <p className="text-[#8b949e]">Mint more AERO to attract more liquidity</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#f85149] font-bold mt-0.5">↓</span>
              <div>
                <p className="text-[#e6edf3] font-medium">Decrease emissions by 0.01%</p>
                <p className="text-[#8b949e]">Slow new supply to support token price</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#8b949e] font-bold mt-0.5">→</span>
              <div>
                <p className="text-[#e6edf3] font-medium">Maintain current emissions</p>
                <p className="text-[#8b949e]">No change this epoch</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          This mechanism gives long-term AERO holders direct control over inflation — aligning
          monetary policy with the incentives of those most committed to the protocol.
        </p>

        <h3 className="text-xl font-semibold text-[#e6edf3] mt-8 mb-3">
          Cross-Chain Unification with Velodrome (Q2 2026)
        </h3>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          One of the biggest upcoming events for Aerodrome is its planned merger with Velodrome
          Finance on Optimism, targeted for Q2 2026. The two protocols — built by the same team
          (Dromos Labs) using the same architecture — will unite under a single AERO token and
          governance layer, with Aerodrome expanding to Ethereum mainnet as part of the rollout.
          This would create one of DeFi&apos;s largest unified DEX networks by TVL and volume.
        </p>
      </section>

      {/* ── Section 6 ── */}
      <section id="key-metrics" className="mb-14">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-5">6. Key Metrics (March 2026)</h2>
        <p className="text-[#c9d1d9] mb-6 leading-relaxed">
          Aerodrome&apos;s growth story is backed by real on-chain data. Here&apos;s a snapshot of
          where the protocol stands as of March 2026 — all figures are approximate and change
          constantly with market conditions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <p className="text-[#8b949e] text-sm mb-1">TVL</p>
            <p className="text-[#e6edf3] text-2xl font-bold">~$500M</p>
            <p className="text-[#8b949e] text-xs mt-1">Peak: $1.07B (Dec 2025)</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <p className="text-[#8b949e] text-sm mb-1">30-Day Trading Volume</p>
            <p className="text-[#e6edf3] text-2xl font-bold">~$4.2B</p>
            <p className="text-[#8b949e] text-xs mt-1">Annualized: ~$50B+</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <p className="text-[#8b949e] text-sm mb-1">Annualized Fee Revenue</p>
            <p className="text-[#e6edf3] text-2xl font-bold">~$202M</p>
            <p className="text-[#8b949e] text-xs mt-1">~$550K per day</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <p className="text-[#8b949e] text-sm mb-1">Base DEX Market Share</p>
            <p className="text-[#e6edf3] text-2xl font-bold">~68%</p>
            <p className="text-[#8b949e] text-xs mt-1">Up from ~40% (early 2024)</p>
          </div>
        </div>
        <p className="text-[#8b949e] text-xs">
          Source: DefiLlama, CoinGecko, Aerodrome Analytics — March 2026. Data is approximate and
          subject to significant daily fluctuation.
        </p>
      </section>

      {/* ── Section 7 ── */}
      <section id="competitive-landscape" className="mb-14">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-5">
          7. Competitive Landscape: Aerodrome vs. the Field
        </h2>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          Aerodrome doesn&apos;t exist in a vacuum. Understanding how it compares to competitors
          helps clarify both its advantages and its risks.
        </p>

        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 my-6 overflow-x-auto">
          <h4 className="text-[#58a6ff] font-semibold mb-4">⚔️ DEX Competitive Comparison</h4>
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-[#30363d]">
                <th className="py-2 pr-4 text-[#8b949e] font-medium">Protocol</th>
                <th className="py-2 pr-4 text-[#8b949e] font-medium">Chain</th>
                <th className="py-2 pr-4 text-[#8b949e] font-medium">TVL</th>
                <th className="py-2 pr-4 text-[#8b949e] font-medium">Model</th>
                <th className="py-2 text-[#8b949e] font-medium">Fee to LPs</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#30363d]">
              <tr>
                <td className="py-3 pr-4 text-[#3fb950] font-semibold">Aerodrome</td>
                <td className="py-3 pr-4 text-[#c9d1d9]">Base</td>
                <td className="py-3 pr-4 text-[#c9d1d9]">~$500M</td>
                <td className="py-3 pr-4 text-[#c9d1d9]">ve(3,3) + clAMM</td>
                <td className="py-3 text-[#c9d1d9]">100% to voters</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 text-[#e6edf3] font-medium">Uniswap v3</td>
                <td className="py-3 pr-4 text-[#c9d1d9]">Multi-chain</td>
                <td className="py-3 pr-4 text-[#c9d1d9]">&gt;$5B</td>
                <td className="py-3 pr-4 text-[#c9d1d9]">clAMM</td>
                <td className="py-3 text-[#c9d1d9]">100% to LPs</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 text-[#e6edf3] font-medium">Velodrome</td>
                <td className="py-3 pr-4 text-[#c9d1d9]">Optimism</td>
                <td className="py-3 pr-4 text-[#c9d1d9]">~$200M</td>
                <td className="py-3 pr-4 text-[#c9d1d9]">ve(3,3) + clAMM</td>
                <td className="py-3 text-[#c9d1d9]">100% to voters</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 text-[#e6edf3] font-medium">Curve Finance</td>
                <td className="py-3 pr-4 text-[#c9d1d9]">Multi-chain</td>
                <td className="py-3 pr-4 text-[#c9d1d9]">&gt;$2B</td>
                <td className="py-3 pr-4 text-[#c9d1d9]">StableSwap + ve</td>
                <td className="py-3 text-[#c9d1d9]">Split (LPs + veCRV)</td>
              </tr>
            </tbody>
          </table>
          <p className="text-[#8b949e] text-xs mt-3">
            Approximate figures — March 2026. See DefiLlama for live data.
          </p>
        </div>

        <h3 className="text-xl font-semibold text-[#e6edf3] mt-8 mb-3">
          Aerodrome vs. Uniswap on Base
        </h3>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          The most direct competition is Uniswap v3 on Base. Aerodrome has largely won this battle:
          since launching Slipstream in April 2024, Aerodrome&apos;s Base market share surged from
          around 40% to 68%, while Uniswap fell from the dominant position to approximately 25–30%.
          The ve(3,3) bribe system creates a structural advantage — protocols can pay to bootstrap
          liquidity on Aerodrome in a way that isn&apos;t possible with Uniswap&apos;s neutral fee
          model.
        </p>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          Uniswap v4, with its hooks architecture, could close this gap by enabling more
          customizable incentive structures. But as of Q1 2026, Aerodrome&apos;s liquidity depth
          and the bribe ecosystem give it a defensible moat on Base.
        </p>
      </section>

      {/* ── Section 8 ── */}
      <section id="risks" className="mb-14">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-5">
          8. Risks to Understand Before You Start
        </h2>
        <p className="text-[#c9d1d9] mb-6 leading-relaxed">
          Aerodrome is one of the most battle-tested protocols on Base, but DeFi always carries
          risk. Here&apos;s what you need to be clear-eyed about before committing capital.
        </p>

        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#f85149]/30 rounded-lg p-5">
            <p className="text-[#f85149] font-semibold mb-2">🔐 Smart Contract Risk</p>
            <p className="text-[#8b949e] text-sm leading-relaxed">
              Aerodrome has been audited multiple times, but no DeFi protocol is immune to
              exploits. A vulnerability in the core contracts, gauge system, or Slipstream pools
              could result in loss of funds. Only deploy capital you can afford to lose.
            </p>
          </div>

          <div className="bg-[#161b22] border border-[#f0883e]/30 rounded-lg p-5">
            <p className="text-[#f0883e] font-semibold mb-2">📉 Impermanent Loss</p>
            <p className="text-[#8b949e] text-sm leading-relaxed">
              All AMMs carry impermanent loss risk. In volatile pools (e.g., AERO/WETH), large
              price swings mean you&apos;d have been better off just holding the assets. Slipstream
              positions can suffer even more acute IL if prices move outside your range and you
              don&apos;t rebalance.
            </p>
          </div>

          <div className="bg-[#161b22] border border-[#f0883e]/30 rounded-lg p-5">
            <p className="text-[#f0883e] font-semibold mb-2">🔒 Lock-Up Risk (veAERO)</p>
            <p className="text-[#8b949e] text-sm leading-relaxed">
              Locking AERO for 4 years to maximize veAERO power is a serious commitment. There is
              no early withdrawal. If the AERO price drops significantly or you need liquidity
              unexpectedly, you&apos;re stuck. Consider locking shorter durations if you&apos;re
              uncertain.
            </p>
          </div>

          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <p className="text-[#e6edf3] font-semibold mb-2">📊 Emission Dilution</p>
            <p className="text-[#8b949e] text-sm leading-relaxed">
              AERO tokens are continuously minted to reward LPs. This ongoing inflation dilutes
              the value of held AERO. The emissions schedule decreases over time, but early
              participants absorb higher dilution. This is offset for veAERO holders (who receive
              fees and bribes), but pure AERO holders are diluted without locking.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 9 ── */}
      <section id="getting-started" className="mb-14">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-5">
          9. How to Get Started with Aerodrome
        </h2>
        <p className="text-[#c9d1d9] mb-6 leading-relaxed">
          There are three main ways to participate in Aerodrome, each with different risk/reward
          profiles.
        </p>

        <h3 className="text-xl font-semibold text-[#e6edf3] mb-3">Option A: Trade on Aerodrome</h3>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          The simplest entry point. Connect your wallet to{" "}
          <strong className="text-[#e6edf3]">aerodrome.finance</strong>, ensure you&apos;re on the
          Base network, and swap any supported tokens. You benefit from Aerodrome&apos;s deep
          liquidity and competitive rates without taking on any protocol risk beyond the trade
          itself.
        </p>

        <h3 className="text-xl font-semibold text-[#e6edf3] mt-8 mb-3">
          Option B: Provide Liquidity (LP)
        </h3>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          Navigate to the &ldquo;Liquidity&rdquo; tab, find a pool that suits your risk tolerance,
          and deposit your assets. For beginners, stable pools (USDC/USDT, ETH/wstETH) offer lower
          impermanent loss. After depositing, stake your LP tokens in the gauge to earn AERO
          emissions on top of trading fee revenue.
        </p>

        <h3 className="text-xl font-semibold text-[#e6edf3] mt-8 mb-3">
          Option C: Lock AERO as veAERO (Advanced)
        </h3>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          If you want to maximize your Aerodrome returns, acquire AERO (on-chain via Aerodrome
          itself or on CEXs), lock it for your chosen duration, and vote weekly on pools. Your
          returns come from trading fees and bribes — not from new AERO emissions. This is the
          most capital-efficient strategy for large holders who want yield without LP complexity.
        </p>

        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5 my-6">
          <p className="text-[#58a6ff] text-sm font-medium mb-2">🔗 Useful Tools</p>
          <ul className="space-y-2 text-sm text-[#8b949e]">
            <li>
              <strong className="text-[#e6edf3]">Aerodrome.finance</strong> — Official DEX UI for
              trading, providing liquidity, and locking veAERO
            </li>
            <li>
              <strong className="text-[#e6edf3]">DefiLlama</strong> — Track Aerodrome TVL, fees,
              and revenue in real-time
            </li>
            <li>
              <strong className="text-[#e6edf3]">Our{" "}
              <a href="/tools/impermanent-loss" className="text-[#58a6ff] hover:underline">
                Impermanent Loss Calculator
              </a></strong>{" "}
              — Model potential IL before depositing in volatile or Slipstream pools
            </li>
            <li>
              <strong className="text-[#e6edf3]">Our{" "}
              <a href="/tools/yield-farming-calculator" className="text-[#58a6ff] hover:underline">
                Yield Farming Calculator
              </a></strong>{" "}
              — Estimate returns from different liquidity strategies
            </li>
          </ul>
        </div>
      </section>

      {/* ── Related Articles ── */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-[#e6edf3] mb-6">Related Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              href: "/learn/base-chain-guide",
              title: "Base Chain Guide",
              desc: "Everything you need to know about Coinbase's Layer 2 network.",
            },
            {
              href: "/learn/uniswap-v4-hooks-guide",
              title: "Uniswap v4 Hooks Guide",
              desc: "How Uniswap's hooks architecture changes DeFi liquidity.",
            },
            {
              href: "/learn/liquid-staking-derivatives",
              title: "Liquid Staking Derivatives",
              desc: "How LSTs like stETH and wstETH work and where they earn yield.",
            },
            {
              href: "/learn/advanced-defi-strategies",
              title: "Advanced DeFi Strategies",
              desc: "Layering yield sources, hedging IL, and optimizing returns.",
            },
          ].map((article) => (
            <a
              key={article.href}
              className="bg-[#161b22] border border-[#30363d] rounded-lg p-5 hover:border-[#58a6ff]/50 transition-colors"
            >
              <p className="text-[#58a6ff] font-semibold mb-1">{article.title}</p>
              <p className="text-[#8b949e] text-sm">{article.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="mb-14">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-8">
          10. Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {[
            {
              q: "What is Aerodrome Finance?",
              a: "Aerodrome Finance is the principal decentralized exchange (DEX) on Base chain, Coinbase's Layer 2 network. Built on the ve(3,3) tokenomics model, it serves as the central liquidity hub for the Base ecosystem. As of March 2026, Aerodrome holds approximately $500M in TVL and commands around 68% of Base's DEX trading volume.",
            },
            {
              q: "What is veAERO and how do I get it?",
              a: "veAERO is the vote-escrowed version of AERO. You get it by locking your AERO tokens for up to 4 years. The longer you lock, the more voting power you receive — 100 AERO locked for 4 years = 100 veAERO. veAERO holders vote weekly on which pools receive AERO emissions and earn 100% of those pools' trading fees plus any bribes.",
            },
            {
              q: "What is the ve(3,3) model?",
              a: "The ve(3,3) model combines Curve Finance's vote-escrowed token design with Olympus DAO's cooperative game theory. AERO emissions flow to pools that veAERO holders vote for, and those holders receive all the fees and bribes those pools generate. The result is a self-coordinating liquidity incentive system.",
            },
            {
              q: "What is Aerodrome Slipstream?",
              a: "Aerodrome Slipstream is a concentrated liquidity AMM (clAMM) module similar to Uniswap v3, launched in 2024. It allows LPs to concentrate capital within specific price ranges for greater capital efficiency. Since launch, it has driven significant liquidity migration away from Uniswap v3 on Base, pushing Aerodrome's market share to ~68%.",
            },
            {
              q: "Is Aerodrome related to Velodrome?",
              a: "Yes. Aerodrome was built by the same team (Dromos Labs) as Velodrome Finance on Optimism. In Q2 2026, the two protocols are scheduled to merge under a single AERO token and governance layer, with expansion to Ethereum mainnet.",
            },
            {
              q: "What are the main risks of using Aerodrome?",
              a: "Key risks include: smart contract vulnerability, impermanent loss for LPs (especially in volatile or Slipstream pools), lock-up risk (veAERO cannot be unlocked early), and ongoing AERO emission dilution for holders who don't lock. Always do your own research and only use capital you can afford to lose.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-[#e6edf3] font-semibold mb-3">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <BackToTop />
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Aerodrome Finance Guide",
              "author": { "@type": "Organization", "name": "degen0x" },
              "publisher": { "@type": "Organization", "name": "degen0x", "url": "https://degen0x.com" },
              "datePublished": "2026-04-01",
              "dateModified": "2026-04-12",
              "mainEntityOfPage": "https://degen0x.com/learn/aerodrome-finance-guide"
            })
          }}
        />
            <div style={{
        marginTop: "32px",
        padding: "24px",
        backgroundColor: "#111827",
        borderRadius: "12px",
        border: "1px solid #374151"
      }}>
        <h3 style={{ marginBottom: "16px", color: "#f3f4f6" }}>Explore More</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          <Link href="/learn" style={
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }>
            All Learning Guides
          </Link>
          <Link href="/tools" style={
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }>
            Crypto Tools
          </Link>
          <Link href="/compare" style={
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }>
            Compare Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
