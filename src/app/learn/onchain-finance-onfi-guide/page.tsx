import type { Metadata } from "next";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";
import StructuredData from "@/components/StructuredData";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import { SITE_URL } from "@/lib/constants";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: "On-Chain Finance (OnFi) Guide 2026 — What It Is & How It",
  description: "OnFi is DeFi rebuilt for institutions. Learn how on-chain finance combines blockchain settlement with KYC compliance, tokenized RWAs, and permissioned lending",
  openGraph: {
    title: "On-Chain Finance (OnFi) Explained — DeFi Meets Wall Street in 2026",
    description:
      "What is OnFi? How tokenized treasuries, permissioned lending, and institutional DeFi are reshaping crypto in 2026.",
    url: `${SITE_URL}/learn/onchain-finance-onfi-guide`,
    type: "article",
    publishedTime: "2026-03-15T00:00:00Z",
    modifiedTime: "2026-03-15T00:00:00Z",
    images: [
      {
        url: `${SITE_URL}/og-onchain-finance-onfi.png`,
        width: 1200,
        height: 630,
        alt: "On-Chain Finance OnFi — institutional DeFi and tokenized assets explained",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "On-Chain Finance (OnFi) Guide 2026 — What It Is & How It Works",
    description:
      "OnFi = DeFi with compliance rails. $17B in institutional TVL and growing. Here's the full breakdown.",
    images: [`${SITE_URL}/og-onchain-finance-onfi.png`],
  },

  alternates: { canonical: "/learn/onchain-finance-onfi-guide" }};

const articleSchema = generateArticleSchema({
  title: "On-Chain Finance (OnFi) Guide 2026 — What It Is & How It Works",
  description:
    "OnFi is DeFi rebuilt for institutions. Learn how on-chain finance combines blockchain settlement with KYC, tokenized RWAs, and permissioned lending in 2026.",
  url: `${SITE_URL}/learn/onchain-finance-onfi-guide`,
  datePublished: "2026-03-15T00:00:00Z",
  dateModified: "2026-03-15T00:00:00Z",
  author: "degen0x Team",
  image: `${SITE_URL}/og-onchain-finance-onfi.png`,
  wordCount: 3100,
});

const faqSchema = generateFAQSchema([
  {
    question: "What is OnFi (on-chain finance)?",
    answer:
      "OnFi (on-chain finance) is the institutional evolution of DeFi — blockchain-based financial infrastructure that includes KYC/AML compliance, tokenized real-world assets, and permissioned liquidity pools designed for regulated capital. Unlike permissionless DeFi, OnFi fits within existing legal frameworks.",
  },
  {
    question: "What is the difference between DeFi and OnFi?",
    answer:
      "DeFi is permissionless and pseudonymous, built for crypto-native users with no identity requirements. OnFi adds compliance layers — verified identity (KYC), securities-law-compliant assets, and permissioned access — to make blockchain finance usable for banks, funds, and institutions.",
  },
  {
    question: "What are examples of OnFi protocols?",
    answer:
      "Key OnFi examples include BlackRock BUIDL (tokenized US treasuries), Maple Finance (institutional undercollateralized lending), Ondo Finance USDY (yield-bearing stablecoin backed by T-bills), Centrifuge (real-world asset financing), and Clearpool (permissioned corporate credit pools).",
  },
  {
    question: "Is OnFi accessible to retail investors?",
    answer:
      "Some OnFi products are accessible to retail investors — particularly regulated stablecoins like USDC, PYUSD, and mUSD. However, many institutional OnFi products like tokenized treasury funds require accredited investor status (US: $200K+ annual income or $1M+ net worth).",
  },
  {
    question: "How does OnFi relate to RWA tokenization?",
    answer:
      "RWA tokenization is the asset layer of OnFi — converting real-world assets (bonds, real estate, commodities) into blockchain tokens. OnFi is the broader system that includes compliance infrastructure, permissioned liquidity pools, and smart-contract settlement that makes tokenized RWAs usable for institutional capital.",
  },
  {
    question: "What blockchain is used for OnFi?",
    answer:
      "Most OnFi infrastructure runs on Ethereum or Ethereum L2s (Arbitrum, Base) for their security and liquidity. Some institutional projects use permissioned chains (Hyperledger, Corda) or Avalanche Subnets for additional validator control. Chainlink provides oracle and cross-chain infrastructure across all of them.",
  },
]);

const combinedSchema = combineSchemas([articleSchema, faqSchema]);

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Learn', item: 'https://degen0x.com/learn' },
    { '@type': 'ListItem', position: 3, name: 'Onchain Finance Onfi Guide', },
  ],
};

export default function OnChainFinanceGuide() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <StructuredData data={combinedSchema} />

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Learn", href: "/learn" },
          { label: "On-Chain Finance (OnFi) Guide" },
        ]}
      />

      {/* Badges */}
      <div className="flex gap-3 mb-6">
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#1f6feb33] text-[#58a6ff] border border-[#1f6feb]">
          DeFi
        </span>
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#388bfd1a] text-[#79c0ff] border border-[#388bfd]">
          Intermediate
        </span>
      </div>

      {/* Title */}
      <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#58a6ff] to-[#bc8cff] bg-clip-text text-transparent">
        On-Chain Finance (OnFi)
      </h1>
      <p className="text-xl text-[#8b949e] mb-8">
        DeFi grew up. Now it's wearing a suit — and the institutions are showing up. Here's what OnFi is, how it works, and why 2026 is its breakout year.
      </p>

      {/* Meta Info */}
      <div className="flex flex-wrap gap-6 mb-12 text-sm text-[#8b949e] pb-8 border-b border-[#30363d]">
        <span>14 min read</span>
        <span>Intermediate</span>
        <time dateTime="2026-03">Updated March 2026</time>
      </div>

      {/* Table of Contents */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 mb-12">
        <h3 className="text-[#e6edf3] font-semibold mb-4">📋 In This Guide</h3>
        <ol className="space-y-2 text-[#58a6ff] text-sm">
          <li><a href="#what-is-onfi" className="hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6366f1] focus-visible:outline-offset-2 rounded-sm">1. What Is OnFi?</a></li>
          <li><a href="#defi-vs-onfi" className="hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6366f1] focus-visible:outline-offset-2 rounded-sm">2. DeFi vs. OnFi: What's the Difference?</a></li>
          <li><a href="#how-it-works" className="hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6366f1] focus-visible:outline-offset-2 rounded-sm">3. How OnFi Works</a></li>
          <li><a href="#key-players" className="hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6366f1] focus-visible:outline-offset-2 rounded-sm">4. Key Players and Protocols</a></li>
          <li><a href="#market-data" className="hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6366f1] focus-visible:outline-offset-2 rounded-sm">5. Market Data and Growth</a></li>
          <li><a href="#use-cases" className="hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6366f1] focus-visible:outline-offset-2 rounded-sm">6. Real Use Cases in 2026</a></li>
          <li><a href="#risks" className="hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6366f1] focus-visible:outline-offset-2 rounded-sm">7. Risks and Limitations</a></li>
          <li><a href="#faq" className="hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6366f1] focus-visible:outline-offset-2 rounded-sm">8. FAQ</a></li>
        </ol>
      </div>

      {/* Section 1 */}
      <section id="what-is-onfi" className="mb-12">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-4">
          1. What Is OnFi?
        </h2>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          <strong className="text-[#e6edf3]">On-Chain Finance (OnFi)</strong> is the evolution of
          DeFi beyond its permissionless, pseudonymous roots into a compliant, institutional-grade
          financial infrastructure — one that fits inside existing legal and regulatory frameworks
          while running on public blockchain rails.
        </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>💡</span>
            <strong style={{ color: '#a78bfa', fontSize: 15 }}>Why This Matters</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            We wrote this guide because the existing explanations online are either too simplified or assume PhD-level knowledge. Neither serves most readers.
          </p>
        </div>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          Think of it this way: DeFi was built by crypto-natives for crypto-natives. OnFi is DeFi
          rebuilt to let a JPMorgan, a pension fund, or a Fortune 500 treasury department
          participate without violating securities law or their internal compliance requirements.
        </p>
        <p className="text-[#c9d1d9] leading-relaxed">
          The term is gaining traction across the industry in 2026 as tokenized treasuries, RWA
          lending pools, and permissioned DEXs move from experiment to real capital deployment.
          Institutional DeFi TVL crossed <strong className="text-[#e6edf3]">$17 billion</strong> by
          early 2026, and analysts expect exponential growth as regulatory clarity materializes.
        </p>

        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 my-6">
          <h4 className="text-[#58a6ff] font-semibold mb-3">⚡ One-Line Definition</h4>
          <p className="text-[#c9d1d9]">
            OnFi = blockchain-native financial infrastructure designed for institutional compliance,
            real-world asset settlement, and regulated capital flows — not just permissionless DeFi.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section id="defi-vs-onfi" className="mb-12">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-4">
          2. DeFi vs. OnFi: What's the Difference?
        </h2>
        <p className="text-[#c9d1d9] mb-6 leading-relaxed">
          The two aren't mutually exclusive — OnFi builds on DeFi's infrastructure. But they
          serve different participants and operate under different assumptions:
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#30363d]">
                <th className="text-left text-[#8b949e] py-3 pr-4">Dimension</th>
                <th className="text-left text-[#58a6ff] py-3 pr-4">DeFi</th>
                <th className="text-left text-[#bc8cff] py-3">OnFi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#21262d]">
              <tr>
                <td className="text-[#c9d1d9] py-3 pr-4">Access</td>
                <td className="text-[#8b949e] py-3 pr-4">Permissionless — anyone</td>
                <td className="text-[#c9d1d9] py-3">Permissioned — KYC/AML required</td>
              </tr>
              <tr>
                <td className="text-[#c9d1d9] py-3 pr-4">Identity</td>
                <td className="text-[#8b949e] py-3 pr-4">Pseudonymous wallets</td>
                <td className="text-[#c9d1d9] py-3">Verified identity, accredited investors</td>
              </tr>
              <tr>
                <td className="text-[#c9d1d9] py-3 pr-4">Assets</td>
                <td className="text-[#8b949e] py-3 pr-4">Crypto-native tokens</td>
                <td className="text-[#c9d1d9] py-3">Tokenized bonds, equities, real estate, treasuries</td>
              </tr>
              <tr>
                <td className="text-[#c9d1d9] py-3 pr-4">Compliance</td>
                <td className="text-[#8b949e] py-3 pr-4">Self-regulatory at best</td>
                <td className="text-[#c9d1d9] py-3">Securities law, MiCA, AML frameworks</td>
              </tr>
              <tr>
                <td className="text-[#c9d1d9] py-3 pr-4">Governance</td>
                <td className="text-[#8b949e] py-3 pr-4">Token-weighted voting (DAOs)</td>
                <td className="text-[#c9d1d9] py-3">Legal entity structures + on-chain execution</td>
              </tr>
              <tr>
                <td className="text-[#c9d1d9] py-3 pr-4">Settlement</td>
                <td className="text-[#8b949e] py-3 pr-4">Instant on-chain</td>
                <td className="text-[#c9d1d9] py-3">Instant on-chain + legal enforceability</td>
              </tr>
              <tr>
                <td className="text-[#c9d1d9] py-3 pr-4">Audience</td>
                <td className="text-[#8b949e] py-3 pr-4">Crypto-native users</td>
                <td className="text-[#c9d1d9] py-3">Banks, funds, corporates, family offices</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-[#c9d1d9] leading-relaxed">
          Neither is better — they serve different needs. You can use Uniswap without OnFi.
          But you can't run a tokenized US Treasury fund through Uniswap either.
        </p>
      </section>

      {/* Section 3 */}
      <section id="how-it-works" className="mb-12">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-4">
          3. How OnFi Works
        </h2>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          The OnFi stack has several layers, each corresponding to a real-world financial
          function rebuilt on-chain:
        </p>

        <div className="space-y-4 mb-8">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h4 className="text-[#79c0ff] font-semibold mb-2">Layer 1: Asset Tokenization</h4>
            <p className="text-[#c9d1d9] text-sm mb-2">
              Real-world assets (government bonds, corporate credit, real estate, commodities)
              are represented as tokens on a public or permissioned blockchain. The token
              holds legal claims against the underlying asset, managed by a regulated custodian
              or SPV (Special Purpose Vehicle).
            </p>
            <p className="text-[#8b949e] text-xs">
              Examples: BlackRock BUIDL (tokenized treasuries), Franklin Templeton BENJI, Ondo Finance USDY
            </p>
          </div>

          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h4 className="text-[#79c0ff] font-semibold mb-2">Layer 2: Identity & Compliance</h4>
            <p className="text-[#c9d1d9] text-sm mb-2">
              Wallets are tied to verified identities through on-chain KYC/AML attestations.
              Protocols use smart contracts to restrict transfers only to wallets that have
              passed compliance checks — automatically enforcing regulatory requirements.
            </p>
            <p className="text-[#8b949e] text-xs">
              Examples: Chainlink DECO, Polygon ID, Onfido integrations, Fireblocks compliance rails
            </p>
          </div>

          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h4 className="text-[#79c0ff] font-semibold mb-2">Layer 3: Permissioned Liquidity Pools</h4>
            <p className="text-[#c9d1d9] text-sm mb-2">
              Institutional credit pools operate like DeFi lending but with gated access.
              Only verified borrowers and lenders can participate. Interest rates are set
              by smart contracts based on risk metrics. Settlement is instant and on-chain.
            </p>
            <p className="text-[#8b949e] text-xs">
              Examples: Morpho institutional vaults, Aave Arc, Centrifuge Tinlake, Maple Finance, Clearpool
            </p>
          </div>

          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h4 className="text-[#79c0ff] font-semibold mb-2">Layer 4: Settlement & Automation</h4>
            <p className="text-[#c9d1d9] text-sm mb-2">
              Actions like coupon payments, dividend distributions, collateral rebalancing, and
              margin calls execute automatically via smart contracts. This eliminates the
              operational overhead (and delay) of traditional financial settlement.
            </p>
            <p className="text-[#8b949e] text-xs">
              Examples: Chainlink Automation, Gauntlet risk modules, EigenLayer AVS verification
            </p>
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

      </section>

      {/* Section 4 */}
      <section id="key-players" className="mb-12">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-4">
          4. Key Players and Protocols
        </h2>
        <p className="text-[#c9d1d9] mb-6 leading-relaxed">
          The OnFi ecosystem spans traditional finance giants, crypto-native protocols, and the
          infrastructure layer connecting them:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <h4 className="text-[#e6edf3] font-semibold mb-3">🏦 TradFi Entrants</h4>
            <ul className="space-y-2 text-sm text-[#8b949e]">
              <li><strong className="text-[#c9d1d9]">BlackRock BUIDL</strong> — $500M+ tokenized treasury fund on Ethereum</li>
              <li><strong className="text-[#c9d1d9]">Franklin Templeton BENJI</strong> — tokenized money market fund, first to settle on public chain</li>
              <li><strong className="text-[#c9d1d9]">JPMorgan Onyx</strong> — blockchain-based repo settlements and intraday liquidity</li>
              <li><strong className="text-[#c9d1d9]">Société Générale</strong> — issued covered bonds as security tokens on Ethereum</li>
            </ul>
          </div>

          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <h4 className="text-[#e6edf3] font-semibold mb-3">🔗 Crypto-Native Infrastructure</h4>
            <ul className="space-y-2 text-sm text-[#8b949e]">
              <li><strong className="text-[#c9d1d9]">Chainlink</strong> — oracle infrastructure for RWA pricing, CCIP cross-chain settlement</li>
              <li><strong className="text-[#c9d1d9]">Ondo Finance</strong> — tokenized US treasuries (USDY, OUSG) with ~$700M TVL</li>
              <li><strong className="text-[#c9d1d9]">Centrifuge</strong> — real-world asset financing, bringing invoices and trade finance on-chain</li>
              <li><strong className="text-[#c9d1d9]">Maple Finance</strong> — institutional undercollateralized lending with $1B+ originated</li>
            </ul>
          </div>

          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <h4 className="text-[#e6edf3] font-semibold mb-3">💳 Stablecoin Issuers</h4>
            <ul className="space-y-2 text-sm text-[#8b949e]">
              <li><strong className="text-[#c9d1d9]">Tether (USDT)</strong> — $90B+ market cap, dominant settlement layer</li>
              <li><strong className="text-[#c9d1d9]">Circle (USDC)</strong> — regulated, MiCA-compliant, Mastercard/Visa integrations</li>
              <li><strong className="text-[#c9d1d9]">MetaMask mUSD</strong> — wallet-native stablecoin pegged to T-bills, self-custodial</li>
              <li><strong className="text-[#c9d1d9]">PayPal PYUSD</strong> — regulated dollar stablecoin with ~$1.2B market cap</li>
            </ul>
          </div>

          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <h4 className="text-[#e6edf3] font-semibold mb-3">🔐 Compliance Infrastructure</h4>
            <ul className="space-y-2 text-sm text-[#8b949e]">
              <li><strong className="text-[#c9d1d9]">Fireblocks</strong> — institutional custody with DeFi access and compliance controls</li>
              <li><strong className="text-[#c9d1d9]">Chainalysis KYT</strong> — real-time transaction monitoring for on-chain compliance</li>
              <li><strong className="text-[#c9d1d9]">Coinbase Prime</strong> — institutional trading with AML/KYC and regulatory reporting</li>
              <li><strong className="text-[#c9d1d9]">Polygon ID</strong> — zero-knowledge identity proofs for privacy-preserving compliance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section id="market-data" className="mb-12">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-4">
          5. Market Data and Growth
        </h2>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          The numbers tell the story of rapid institutional adoption in 2025–2026:
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 text-center">
            <p className="text-3xl font-bold text-[#58a6ff]">$17B</p>
            <p className="text-[#8b949e] text-xs mt-1">Institutional DeFi/RWA TVL</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 text-center">
            <p className="text-3xl font-bold text-[#14f195]">$310B</p>
            <p className="text-[#8b949e] text-xs mt-1">Total stablecoin market cap</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 text-center">
            <p className="text-3xl font-bold text-[#bc8cff]">11%</p>
            <p className="text-[#8b949e] text-xs mt-1">Institutions already holding tokenized assets</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 text-center">
            <p className="text-3xl font-bold text-[#f7931a]">61%</p>
            <p className="text-[#8b949e] text-xs mt-1">Institutions expecting to invest within years</p>
          </div>
        </div>

        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 my-6">
          <h4 className="text-[#58a6ff] font-semibold mb-3">📊 Key Catalysts in 2026</h4>
          <ul className="space-y-2 text-[#c9d1d9] text-sm">
            <li>• <strong className="text-[#e6edf3]">GENIUS Act</strong> — US federal stablecoin legislation providing legal clarity for issuers</li>
            <li>• <strong className="text-[#e6edf3]">Digital Asset Market Clarity Act (CLARITY)</strong> — defines which assets are commodities vs. securities</li>
            <li>• <strong className="text-[#e6edf3]">EU MiCA (Markets in Crypto Assets)</strong> — comprehensive European crypto regulation now in effect</li>
            <li>• <strong className="text-[#e6edf3]">SEC Generic Listing Standards (Sept 2025)</strong> — paved way for spot altcoin ETFs</li>
          </ul>
        </div>

        <p className="text-[#c9d1d9] leading-relaxed">
          Regulatory clarity is the unlock. Once institutions know the rules, they can build
          legal structures around them. The infrastructure was ready; compliance was the
          bottleneck. In 2026, that bottleneck is being removed.
        </p>
      </section>

      {/* Section 6 */}
      <section id="use-cases" className="mb-12">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-4">
          6. Real Use Cases in 2026
        </h2>
        <p className="text-[#c9d1d9] mb-6 leading-relaxed">
          OnFi isn't theoretical anymore. Here's what's actually happening:
        </p>

        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🏛️</span>
              <h4 className="text-[#e6edf3] font-semibold">Tokenized US Treasuries</h4>
            </div>
            <p className="text-[#c9d1d9] text-sm mb-3">
              BlackRock's BUIDL fund, Franklin Templeton's BENJI, and Ondo's USDY allow qualified
              investors to hold US Treasury exposure as on-chain tokens. Interest accrues
              automatically. Transfer is instant. No custodian required for settlement.
            </p>
            <p className="text-[#8b949e] text-xs">
              Combined TVL in tokenized treasuries: ~$2B+ as of Q1 2026
            </p>
          </div>

          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🏗️</span>
              <h4 className="text-[#e6edf3] font-semibold">On-Chain Corporate Lending</h4>
            </div>
            <p className="text-[#c9d1d9] text-sm mb-3">
              Maple Finance and Clearpool offer institutional borrowers access to on-chain
              credit lines from crypto-native lenders. Borrowers pass KYC and credit checks;
              lenders earn yield without needing a bank. $1B+ has been originated on Maple alone.
            </p>
            <p className="text-[#8b949e] text-xs">
              Loan terms, interest rates, and collateral managed entirely by smart contracts
            </p>
          </div>

          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">💱</span>
              <h4 className="text-[#e6edf3] font-semibold">Intraday FX and Repo Settlement</h4>
            </div>
            <p className="text-[#c9d1d9] text-sm mb-3">
              JPMorgan's Onyx platform settles intraday repo transactions on-chain, with banks
              using tokenized deposits as collateral. Pilots with BNY Mellon, Goldman Sachs,
              and others are converting concept to production volume.
            </p>
            <p className="text-[#8b949e] text-xs">
              Traditional repo settlement takes T+1 to T+2. On-chain settles in seconds.
            </p>
          </div>

          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🏘️</span>
              <h4 className="text-[#e6edf3] font-semibold">Real Estate Fractional Ownership</h4>
            </div>
            <p className="text-[#c9d1d9] text-sm mb-3">
              Platforms like RealT, Lofty, and newer entrants allow investors to purchase
              fractional ownership in rental properties as on-chain tokens. Rent distributes
              automatically to token holders. Secondary markets provide liquidity that
              real estate normally lacks.
            </p>
            <p className="text-[#8b949e] text-xs">
              Note: regulatory treatment varies significantly by jurisdiction — check local rules
            </p>
          </div>
        </div>
      </section>

      {/* Section 7 */}
      <section id="risks" className="mb-12">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-4">
          7. Risks and Limitations
        </h2>

        <div className="bg-[#161b22] border border-[#f7931a40] rounded-lg p-6 mb-6">
          <h4 className="text-[#f7931a] font-semibold mb-3">⚠️ Educational Content Only</h4>
          <p className="text-[#8b949e] text-sm">
            This guide is for informational purposes only. It is not financial advice. Always
            do your own research and consult qualified advisors before making any investment
            decisions.
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <h4 className="text-[#ff7b72] font-semibold mb-2">Regulatory Fragmentation</h4>
            <p className="text-[#c9d1d9] text-sm">
              What's legal in the EU under MiCA may be different from US rules under the
              Clarity Act. Running a truly global OnFi protocol requires navigating a patchwork
              of jurisdictions, each with different requirements for KYC, securities treatment,
              and investor eligibility.
            </p>
          </div>

          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <h4 className="text-[#ff7b72] font-semibold mb-2">Custody and Counterparty Risk</h4>
            <p className="text-[#c9d1d9] text-sm">
              Tokenized assets are only as good as the custodian holding the underlying.
              If BlackRock's BUIDL custodian fails or the legal structure collapses, the
              token holders have a claim against a legal entity — not self-custodied assets.
              This is fundamentally different from owning ETH.
            </p>
          </div>

          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <h4 className="text-[#ff7b72] font-semibold mb-2">Smart Contract Risk</h4>
            <p className="text-[#c9d1d9] text-sm">
              OnFi protocols carry the same smart contract vulnerabilities as any DeFi protocol.
              A bug in a tokenized treasury contract or compliance module could lock or destroy
              funds. Institutional scale makes this risk more consequential, not less.
            </p>
          </div>

          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <h4 className="text-[#ff7b72] font-semibold mb-2">Access Gatekeeping</h4>
            <p className="text-[#c9d1d9] text-sm">
              By design, OnFi is permissioned. Most products require accredited investor status
              (US: $200K+ income or $1M+ net worth). This limits participation and raises
              questions about whether OnFi recreates traditional financial inequality on new rails.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-12">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h4 className="text-[#e6edf3] font-semibold mb-3">
              Is OnFi better than traditional DeFi?
            </h4>
            <p className="text-[#8b949e]">
              Better and worse — depending on your goals. OnFi offers institutional-grade
              compliance and access to real-world assets but sacrifices permissionlessness
              and censorship-resistance. DeFi offers open access and self-custody but limited
              institutional participation. The two ecosystems can coexist and complement each other.
            </p>
          </div>

          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h4 className="text-[#e6edf3] font-semibold mb-3">
              Can retail investors participate in OnFi?
            </h4>
            <p className="text-[#8b949e]">
              Some products are accessible to non-accredited investors — particularly
              tokenized stablecoins (USDC, mUSD, PYUSD) and some real estate platforms.
              However, many institutional OnFi products require accredited investor status
              or are restricted to qualified institutional buyers (QIBs).
            </p>
          </div>

          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h4 className="text-[#e6edf3] font-semibold mb-3">
              What blockchain does OnFi run on?
            </h4>
            <p className="text-[#8b949e]">
              Most OnFi infrastructure runs on Ethereum (for its security, liquidity, and
              developer ecosystem) or Ethereum L2s like Arbitrum and Base for lower fees.
              Some institutional projects use permissioned chains (Hyperledger, Corda) or
              Avalanche Subnets for better control over validators.
            </p>
          </div>

          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h4 className="text-[#e6edf3] font-semibold mb-3">
              How does OnFi relate to RWA tokenization?
            </h4>
            <p className="text-[#8b949e]">
              RWA tokenization is a core component of OnFi — it's the asset layer. OnFi
              is the broader system that includes the compliance infrastructure, permissioned
              liquidity pools, and settlement mechanisms that make tokenized RWAs usable
              for institutional capital. You can have RWA tokenization without full OnFi,
              but not OnFi without RWA tokenization.
            </p>
          </div>

          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h4 className="text-[#e6edf3] font-semibold mb-3">
              Is OnFi the same as CeFi (Centralized Finance)?
            </h4>
            <p className="text-[#8b949e]">
              No. CeFi uses centralized platforms (Coinbase, Binance, exchanges) as intermediaries
              with custody of your assets. OnFi uses smart contracts for execution and settlement
              while maintaining compliance wrappers. The logic is on-chain and auditable;
              the access control is permissioned by identity, not by a company holding your keys.
            </p>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="border-t border-[#30363d] pt-8">
        <h3 className="text-[#e6edf3] font-semibold mb-4">Related Guides</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="/learn/real-world-assets-rwa-guide" className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#58a6ff] transition-colors">
            <p className="text-[#58a6ff] text-sm font-medium">RWA Guide</p>
            <p className="text-[#8b949e] text-xs mt-1">Real-world asset tokenization explained</p>
          </a>
          <a href="/learn/defi-safety-guide-2026" className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#58a6ff] transition-colors">
            <p className="text-[#58a6ff] text-sm font-medium">DeFi Safety Guide 2026</p>
            <p className="text-[#8b949e] text-xs mt-1">How to stay safe in DeFi</p>
          </a>
          <a href="/learn/stablecoin-comparison" className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#58a6ff] transition-colors">
            <p className="text-[#58a6ff] text-sm font-medium">Stablecoin Comparison</p>
            <p className="text-[#8b949e] text-xs mt-1">USDC vs USDT vs DAI vs mUSD</p>
          </a>
        </div>
      </section>

      <BackToTop />
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Onchain Finance Onfi Guide",
              "author": { "@type": "Organization", "name": "degen0x" },
              "publisher": { "@type": "Organization", "name": "degen0x", "url": "https://degen0x.com" },
              "datePublished": "2026-04-01",
              "dateModified": "2026-04-12",
              "mainEntityOfPage": "https://degen0x.com/learn/onchain-finance-onfi-guide"
            })
          }}
        />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "On-Chain Finance (OnFi) Guide 2026 \u2014 What It Is & How It", "description": "OnFi is DeFi rebuilt for institutions. Learn how on-chain finance combines blockchain settlement with KYC compliance, tokenized RWAs, and permissioned lending", "url": "https://degen0x.com/learn/onchain-finance-onfi-guide", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
</div>
  );
}
      <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
  <h3 style={{ color: "#e5e7eb", fontSize: "16px", marginBottom: "0.75rem" }}>Explore More</h3>
  <a href="/learn/[slug]" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>[Slug]</a>
  <a href="/learn/aave-v4-gho-stablecoin-defi-lending-guide-2026" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Aave V4 Gho Stablecoin Defi Lending Guide 2026</a>
  <a href="/learn/aave-v4-guide" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Aave V4 Guide</a>
  <a href="/learn/abstract-chain-consumer-crypto-zk-rollup-guide-2026" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Abstract Chain Consumer Crypto Zk Rollup Guide 2026</a>
  <a href="/learn/abstract-chain-guide" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Abstract Chain Guide</a>
  <a href="/learn/account-abstraction" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Account Abstraction</a>
  <a href="/learn/account-abstraction-erc-4337-guide" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Account Abstraction Erc 4337 Guide</a>
  <a href="/learn/advanced-defi-strategies" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Advanced Defi Strategies</a>
</nav>