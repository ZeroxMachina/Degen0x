import type { Metadata } from "next";
import {
  generateArticleSchema,
  generateFAQSchema,
  combineSchemas,
} from "@/lib/structured-data";
import StructuredData from "@/components/StructuredData";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "GENIUS Act Stablecoin Guide 2026: USDC, USDT & DeFi Impact",
  description:
    "The GENIUS Act became US law in July 2025. Learn what stablecoin regulation means for USDC, USDT, DeFi protocols, and your crypto in 2026. Compliance timeline inside.",
  openGraph: {
    title: "GENIUS Act Stablecoin Guide 2026 — What Changed & What's Next",
    description:
      "The first major US stablecoin law is live. Here's what it means for USDC, USDT, DeFi, and your holdings.",
    url: `${SITE_URL}/learn/genius-act-stablecoin-guide`,
    type: "article",
    publishedTime: "2026-03-15T00:00:00Z",
    modifiedTime: "2026-03-15T00:00:00Z",
    authors: ["degen0x Team"],
    images: [
      {
        url: `${SITE_URL}/api/og?title=GENIUS+Act+Stablecoin&category=Learn&type=learn`,
        width: 1200,
        height: 630,
        alt: "GENIUS Act Stablecoin Guide 2026 — degen0x",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GENIUS Act Stablecoin Guide 2026: USDC, USDT & DeFi Impact",
    description:
      "The first major US stablecoin law is live. What it means for USDC, USDT, DeFi protocols, and your crypto.",
    images: [`${SITE_URL}/api/og?title=GENIUS+Act+Stablecoin&category=Learn&type=learn`],
  },
};

const articleSchema = generateArticleSchema({
  title: "GENIUS Act Stablecoin Guide 2026: USDC, USDT & DeFi Impact",
  description:
    "The GENIUS Act became US law in July 2025. Learn what stablecoin regulation means for USDC, USDT, DeFi protocols, and your crypto in 2026.",
  url: `${SITE_URL}/learn/genius-act-stablecoin-guide`,
  datePublished: "2026-03-15T00:00:00Z",
  dateModified: "2026-03-15T00:00:00Z",
  author: "degen0x Team",
  image: `${SITE_URL}/api/og?title=GENIUS+Act+Stablecoin&category=Learn&type=learn`,
  wordCount: 2800,
});

const faqSchema = generateFAQSchema([
  {
    question: "Is USDT illegal in the US after the GENIUS Act?",
    answer:
      "No. USDT is not illegal. However, Tether cannot issue USDT as a 'permitted payment stablecoin' under the GENIUS Act. US-regulated exchanges may eventually need to restrict USDT trading, but holding USDT in a personal wallet or using it in DeFi remains legal.",
  },
  {
    question: "Does the GENIUS Act affect algorithmic stablecoins like USDe or DAI?",
    answer:
      "The Act explicitly prohibits algo-backed stablecoins from qualifying as 'permitted' stablecoins. DAI (now USDS) exists in a gray zone. Ethena's USDe uses delta-neutral hedging and is not classified as a permitted stablecoin for US issuance, but it can continue operating in DeFi freely.",
  },
  {
    question: "Can DeFi protocols still use USDT after 2027?",
    answer:
      "Yes. The GENIUS Act explicitly exempts decentralized protocols, immutable smart contracts, and liquidity pools. DeFi protocols are not classified as stablecoin issuers, so they face no legal restriction on which stablecoins they support.",
  },
  {
    question: "What is USA₮ and how is it different from USDT?",
    answer:
      "USA₮ is Tether's GENIUS Act-compliant stablecoin issued through a US banking subsidiary. It operates under full US regulatory oversight, maintains 1:1 cash/Treasury reserves, and publishes monthly disclosures. USA₮ and USDT are separate tokens.",
  },
  {
    question: "When is the GENIUS Act compliance deadline?",
    answer:
      "Treasury is targeting final rules by July 2026. Full compliance for US exchanges and issuers is expected by early 2027.",
  },
]);

const combinedSchema = combineSchemas([articleSchema, faqSchema]);

export default function GeniusActStablecoinGuide() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <StructuredData data={combinedSchema} />
      {/* Breadcrumb */}
      <nav className="text-sm mb-8">
        <a href="/learn" className="text-[#58a6ff] hover:underline">
          Learn
        </a>
        <span className="text-[#8b949e] mx-2">/</span>
        <span className="text-[#e6edf3]">GENIUS Act Stablecoin Guide</span>
      </nav>

      {/* Badges */}
      <div className="flex gap-2 mb-4">
        <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#1f2937] text-[#60a5fa] border border-[#1d4ed8]">
          Regulation
        </span>
        <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#1f2937] text-[#f59e0b] border border-[#b45309]">
          Intermediate
        </span>
      </div>

      {/* Title */}
      <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#58a6ff] to-[#79c0ff] bg-clip-text text-transparent">
        GENIUS Act Stablecoin Guide 2026
      </h1>
      <p className="text-xl text-[#8b949e] mb-8">
        The first major US stablecoin law is here. Here's exactly what changed — and what it means for your crypto.
      </p>

      {/* Meta Info */}
      <div className="flex flex-wrap gap-6 mb-8 text-sm text-[#8b949e] pb-8 border-b border-[#30363d]">
        <span>12 min read</span>
        <span>Intermediate</span>
        <span>Updated March 2026</span>
      </div>

      {/* Table of Contents */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 mb-12">
        <h3 className="text-[#e6edf3] font-semibold mb-4">📋 Table of Contents</h3>
        <ol className="space-y-2 text-[#58a6ff] text-sm">
          <li><a href="#what-is-genius-act" className="hover:underline">1. What Is the GENIUS Act?</a></li>
          <li><a href="#key-rules" className="hover:underline">2. Key Rules for Stablecoin Issuers</a></li>
          <li><a href="#usdc-vs-usdt" className="hover:underline">3. USDC vs. USDT: Who's Compliant?</a></li>
          <li><a href="#defi-impact" className="hover:underline">4. Impact on DeFi Protocols</a></li>
          <li><a href="#for-users" className="hover:underline">5. What It Means for You as a User</a></li>
          <li><a href="#timeline" className="hover:underline">6. Compliance Timeline</a></li>
          <li><a href="#faq" className="hover:underline">7. FAQ</a></li>
        </ol>
      </div>

      {/* Section 1 */}
      <section id="what-is-genius-act" className="mb-12">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-4">
          1. What Is the GENIUS Act? ⚖️
        </h2>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          The <strong className="text-[#e6edf3]">GENIUS Act</strong> — short for "Guiding and
          Establishing National Innovation for U.S. Stablecoins" — is the first comprehensive
          federal law governing stablecoins in the United States. It was signed into law on{" "}
          <strong className="text-[#e6edf3]">July 17, 2025</strong>, ending years of regulatory
          ambiguity around the $200B+ stablecoin market.
        </p>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          Before the GENIUS Act, stablecoin issuers operated in a patchwork of state-level
          regulations with no unified federal standard. The law changes that by establishing clear
          rules for who can issue stablecoins in the US, how reserves must be managed, and what
          disclosures are required.
        </p>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 my-6">
          <h4 className="text-[#58a6ff] font-semibold mb-3">🔑 The Core Principle</h4>
          <p className="text-[#c9d1d9] text-sm leading-relaxed">
            The GENIUS Act treats stablecoins as <strong className="text-[#e6edf3]">payment instruments</strong>,
            not securities. This is a big deal: it means stablecoins like USDC don't fall under
            SEC jurisdiction, and DeFi protocols that use them aren't automatically classified as
            securities exchanges.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section id="key-rules" className="mb-12">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-4">
          2. Key Rules for Stablecoin Issuers 📋
        </h2>
        <p className="text-[#c9d1d9] mb-6 leading-relaxed">
          The law imposes strict requirements on any entity issuing a "permitted payment stablecoin"
          for use by US persons. The headline requirements:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#30363d]">
                <th className="text-left py-3 px-4 text-[#58a6ff] font-semibold">Requirement</th>
                <th className="text-left py-3 px-4 text-[#58a6ff] font-semibold">What It Means</th>
              </tr>
            </thead>
            <tbody className="text-[#c9d1d9]">
              <tr className="border-b border-[#21262d]">
                <td className="py-3 px-4 font-medium text-[#e6edf3]">1:1 Reserves</td>
                <td className="py-3 px-4">Every stablecoin must be backed by cash or short-term US Treasuries dollar-for-dollar</td>
              </tr>
              <tr className="border-b border-[#21262d]">
                <td className="py-3 px-4 font-medium text-[#e6edf3]">Monthly Disclosures</td>
                <td className="py-3 px-4">Reserve composition must be publicly disclosed every month</td>
              </tr>
              <tr className="border-b border-[#21262d]">
                <td className="py-3 px-4 font-medium text-[#e6edf3]">Permitted Issuer Status</td>
                <td className="py-3 px-4">Only bank subsidiaries, federally-qualified nonbanks, or approved trust companies may issue</td>
              </tr>
              <tr className="border-b border-[#21262d]">
                <td className="py-3 px-4 font-medium text-[#e6edf3]">Redemption Rights</td>
                <td className="py-3 px-4">Users must be able to redeem at par (1:1 for USD) on demand</td>
              </tr>
              <tr className="border-b border-[#21262d]">
                <td className="py-3 px-4 font-medium text-[#e6edf3]">Anti-Money Laundering</td>
                <td className="py-3 px-4">Full Bank Secrecy Act and AML compliance required</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-[#e6edf3]">No Algorithmic Backing</td>
                <td className="py-3 px-4">Stablecoins backed by crypto assets (like UST was) do not qualify as permitted stablecoins</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-[#c9d1d9] leading-relaxed">
          Importantly, the law includes explicit carve-outs for <strong className="text-[#e6edf3]">DeFi
          protocols themselves</strong>. Immutable smart contracts, liquidity pools, and self-custodial
          wallets are not treated as stablecoin issuers — the rules apply to the token creators, not
          the infrastructure that uses the tokens.
        </p>
      </section>

      {/* Section 3 */}
      <section id="usdc-vs-usdt" className="mb-12">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-4">
          3. USDC vs. USDT: Who's Compliant? 🔍
        </h2>
        <p className="text-[#c9d1d9] mb-6 leading-relaxed">
          The GENIUS Act effectively created a two-tier stablecoin world. Here's where the two
          dominant stablecoins — which together represent over 85% of the market — stand:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-[#161b22] border border-[#238636] rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">✅</span>
              <div>
                <h3 className="text-[#e6edf3] font-bold text-lg">USDC (Circle)</h3>
                <span className="text-xs text-[#3fb950] font-medium">GENIUS Act Compliant</span>
              </div>
            </div>
            <ul className="text-[#c9d1d9] text-sm space-y-2">
              <li>• Backed 1:1 by cash and short-term Treasuries</li>
              <li>• Circle has applied for federal nonbank status</li>
              <li>• Monthly reserve attestations already published</li>
              <li>• Market cap: ~$55B (March 2026)</li>
            </ul>
          </div>

          <div className="bg-[#161b22] border border-[#f85149] rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">⚠️</span>
              <div>
                <h3 className="text-[#e6edf3] font-bold text-lg">USDT (Tether)</h3>
                <span className="text-xs text-[#f85149] font-medium">Outside US Framework</span>
              </div>
            </div>
            <ul className="text-[#c9d1d9] text-sm space-y-2">
              <li>• Tether is a BVI-based entity, not a US permitted issuer</li>
              <li>• USDT issuance does not meet the federal criteria</li>
              <li>• Tether launched <strong className="text-[#e6edf3]">USA₮</strong> — a compliant US variant</li>
              <li>• USDT market cap: ~$145B; still dominant globally</li>
            </ul>
          </div>
        </div>

        <div className="bg-[#161b22] border border-[#e3b341] rounded-lg p-5 my-4">
          <h4 className="text-[#e3b341] font-semibold mb-2">⚠️ What This Means Practically</h4>
          <p className="text-[#c9d1d9] text-sm leading-relaxed">
            USDT isn't "banned" in the US — you can still hold and trade it. But US-regulated exchanges
            may be required to delist or restrict USDT trading pairs once the full compliance deadline
            hits in early 2027. Non-custodial DeFi protocols can continue to support USDT freely, since
            DeFi infrastructure is explicitly excluded from the law's issuer requirements.
          </p>
        </div>
      </section>

      {/* Section 4 */}
      <section id="defi-impact" className="mb-12">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-4">
          4. Impact on DeFi Protocols 📊
        </h2>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          The GENIUS Act doesn't regulate DeFi protocols directly — but it's reshaping how they
          operate through market dynamics and risk management decisions. Here's what's happening
          on-chain in 2026:
        </p>

        <h3 className="text-xl font-bold text-[#e6edf3] mb-3">Liquidity Migration to USDC</h3>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          Major lending protocols like <strong className="text-[#e6edf3]">Aave</strong> and{" "}
          <strong className="text-[#e6edf3]">Compound</strong> have been gradually prioritizing USDC
          in new liquidity pools, even when USDT pools offer marginally higher yields. The compliance
          certainty of USDC now has a premium — institutional capital in particular is wary of holding
          non-compliant stablecoins in regulated products.
        </p>

        <h3 className="text-xl font-bold text-[#e6edf3] mb-3">New Entrants: Bank-Issued Stablecoins</h3>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          The GENIUS Act opened the door for traditional banks to issue their own stablecoins. Several
          major US financial institutions are in the permitting process. Bank-issued stablecoins on
          public blockchains could add tens of billions in new on-chain liquidity — a massive tailwind
          for DeFi TVL.
        </p>

        <h3 className="text-xl font-bold text-[#e6edf3] mb-3">DEX & Yield Protocol Effects</h3>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          Decentralized exchanges like <strong className="text-[#e6edf3]">Uniswap</strong> and{" "}
          <strong className="text-[#e6edf3]">Curve</strong> can continue operating with any stablecoin.
          However, treasury diversification strategies at many DAOs are shifting to hold more USDC
          relative to USDT. Protocols like <strong className="text-[#e6edf3]">Ethena's USDe</strong> —
          backed by delta-neutral positions — are not classified as "permitted stablecoins" under the
          Act either, but they remain legal to use in DeFi since they don't target US retail issuance.
        </p>

        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 my-6">
          <h4 className="text-[#58a6ff] font-semibold mb-3">💡 Pro Tip</h4>
          <p className="text-[#c9d1d9] text-sm leading-relaxed">
            When choosing yield strategies in 2026, pay attention to which stablecoin a pool uses.
            USDC pools may offer slightly lower APYs but carry less regulatory tail risk. USDT pools
            may continue to offer higher yield but come with uncertainty around US exchange access
            post-2027. Learn more in our{" "}
            <a href="/learn/stablecoin-comparison" className="text-[#58a6ff] hover:underline">
              stablecoin comparison guide
            </a>.
          </p>
        </div>
      </section>

      {/* Section 5 */}
      <section id="for-users" className="mb-12">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-4">
          5. What It Means for You as a User 💰
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <h4 className="text-[#e6edf3] font-semibold mb-2">📍 Holding Stablecoins</h4>
            <p className="text-[#c9d1d9] text-sm leading-relaxed">
              If you hold USDC or USDT in a self-custodial wallet or hardware wallet, nothing changes.
              The GENIUS Act does not affect your ability to hold, transfer, or use stablecoins in
              DeFi. The rules target issuers and regulated exchanges — not individual users.
            </p>
          </div>

          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <h4 className="text-[#e6edf3] font-semibold mb-2">🏦 Using Centralized Exchanges</h4>
            <p className="text-[#c9d1d9] text-sm leading-relaxed">
              US-based centralized exchanges (Coinbase, Kraken, etc.) will need to be careful about
              which stablecoins they list once full compliance kicks in around early 2027. Expect
              continued USDC support everywhere, but some platforms may phase out or restrict USDT
              trading pairs. Check your exchange's policy before the deadline.
            </p>
          </div>

          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <h4 className="text-[#e6edf3] font-semibold mb-2">⚡ Using DeFi Protocols</h4>
            <p className="text-[#c9d1d9] text-sm leading-relaxed">
              DeFi is explicitly protected. You can continue to supply USDT to Aave, provide liquidity
              in USDT/USDC pools on Uniswap, and use any stablecoin in smart contracts. The law
              carved out DeFi protocols, self-custodial wallets, and liquidity pool participation from
              its definitions.
            </p>
          </div>

          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <h4 className="text-[#e6edf3] font-semibold mb-2">🌍 If You're Outside the US</h4>
            <p className="text-[#c9d1d9] text-sm leading-relaxed">
              The GENIUS Act only applies to stablecoins "for use by US persons." USDT continues
              to dominate globally and remains unaffected outside US jurisdiction. For non-US users,
              the main practical impact is the continued growth of USDC as a trusted, regulated option
              that institutional partners prefer.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section id="timeline" className="mb-12">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-4">
          6. Compliance Timeline ⏱️
        </h2>

        <div className="relative border-l-2 border-[#30363d] ml-4 space-y-8 mb-6">
          <div className="relative pl-8">
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#3fb950] border-2 border-[#0d1117]" />
            <p className="text-xs text-[#8b949e] mb-1">July 17, 2025</p>
            <h4 className="text-[#e6edf3] font-semibold">GENIUS Act Signed Into Law</h4>
            <p className="text-[#c9d1d9] text-sm mt-1">
              The Act becomes effective. The framework for "permitted payment stablecoins" is established.
            </p>
          </div>

          <div className="relative pl-8">
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#e3b341] border-2 border-[#0d1117]" />
            <p className="text-xs text-[#8b949e] mb-1">May 2026</p>
            <h4 className="text-[#e6edf3] font-semibold">FDIC Comment Period Closes</h4>
            <p className="text-[#c9d1d9] text-sm mt-1">
              The FDIC extended its comment period to May 18, 2026. Final rules expected from Treasury by July 2026.
            </p>
          </div>

          <div className="relative pl-8">
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#e3b341] border-2 border-[#0d1117]" />
            <p className="text-xs text-[#8b949e] mb-1">July 2026</p>
            <h4 className="text-[#e6edf3] font-semibold">Treasury Final Rules Published</h4>
            <p className="text-[#c9d1d9] text-sm mt-1">
              Final OCC and Treasury guidance expected. Bank-issued stablecoin applications in review.
            </p>
          </div>

          <div className="relative pl-8">
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#58a6ff] border-2 border-[#0d1117]" />
            <p className="text-xs text-[#8b949e] mb-1">Early 2027</p>
            <h4 className="text-[#e6edf3] font-semibold">Full Compliance Deadline</h4>
            <p className="text-[#c9d1d9] text-sm mt-1">
              US exchanges and issuers must achieve full GENIUS Act compliance. Non-compliant stablecoins
              face potential delisting from regulated platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="bg-[#161b22] border border-[#e3b341] rounded-lg p-5 mb-12">
        <p className="text-[#c9d1d9] text-sm leading-relaxed">
          ⚠️ <strong className="text-[#e3b341]">Disclaimer:</strong> This guide is for informational
          purposes only. It is not legal or financial advice. Regulatory requirements are evolving —
          consult qualified legal counsel for compliance questions. Always do your own research before
          making investment decisions.
        </p>
      </div>

      {/* FAQ */}
      <section id="faq" className="mb-12">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-6">Frequently Asked Questions</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-[#e6edf3] mb-2">
              Is USDT illegal in the US after the GENIUS Act?
            </h3>
            <p className="text-[#c9d1d9] text-sm leading-relaxed">
              No. USDT is not illegal. However, Tether (as a foreign entity) cannot issue USDT as a
              "permitted payment stablecoin" under the GENIUS Act. US-regulated exchanges may eventually
              need to restrict USDT trading, but holding USDT in a personal wallet or using it in DeFi
              remains legal.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#e6edf3] mb-2">
              Does the GENIUS Act affect algorithmic stablecoins like USDe or DAI?
            </h3>
            <p className="text-[#c9d1d9] text-sm leading-relaxed">
              Partially. The Act explicitly prohibits algo-backed stablecoins (like the defunct UST)
              from qualifying as "permitted" stablecoins. DAI (now USDS) is collateral-backed and
              exists in a gray zone. Ethena's USDe uses delta-neutral hedging and is not classified as
              a permitted stablecoin for US issuance, but it can continue operating in DeFi freely.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#e6edf3] mb-2">
              Can DeFi protocols still use USDT after 2027?
            </h3>
            <p className="text-[#c9d1d9] text-sm leading-relaxed">
              Yes. The GENIUS Act explicitly exempts decentralized protocols, immutable smart contracts,
              and liquidity pools. DeFi protocols are not classified as stablecoin issuers, so they face
              no legal restriction on which stablecoins they support.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#e6edf3] mb-2">
              What is USA₮ and how is it different from USDT?
            </h3>
            <p className="text-[#c9d1d9] text-sm leading-relaxed">
              USA₮ is Tether's newly launched GENIUS Act-compliant stablecoin issued through a US
              banking subsidiary. It operates under full US regulatory oversight, maintains 1:1 cash/Treasury
              reserves, and publishes monthly disclosures. USA₮ and USDT are separate tokens — USA₮ is
              specifically designed for the US regulatory environment.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#e6edf3] mb-2">
              Will the GENIUS Act increase DeFi TVL?
            </h3>
            <p className="text-[#c9d1d9] text-sm leading-relaxed">
              Potentially yes. By providing regulatory clarity, the Act is expected to unlock institutional
              capital that was previously blocked by compliance concerns. Bank-issued stablecoins entering
              DeFi could add significant liquidity. The trade-off is that compliance requirements introduce
              friction — tighter issuer standards, redemption rules, and AML requirements may reduce the
              diversity of stablecoins in circulation.
            </p>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-[#e6edf3] mb-4">Related Guides</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              href: "/learn/stablecoin-comparison",
              title: "Stablecoin Comparison 2026",
              desc: "USDC vs USDT vs DAI vs USDe — full comparison",
            },
            {
              href: "/learn/stablecoin-payments-guide-2026",
              title: "Stablecoin Payments Guide",
              desc: "How to use stablecoins for payments and transfers",
            },
            {
              href: "/learn/crypto-regulation-global",
              title: "Global Crypto Regulation",
              desc: "How countries around the world are regulating crypto",
            },
          ].map((article) => (
            <a
              key={article.href}
              href={article.href}
              className="block bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#58a6ff] transition-colors"
            >
              <h4 className="text-[#e6edf3] font-semibold text-sm mb-1">{article.title}</h4>
              <p className="text-[#8b949e] text-xs">{article.desc}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
