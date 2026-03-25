import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import CryptoTaxEstimator from "@/components/CryptoTaxEstimator";
import {
  generateArticleSchema,
  generateFAQSchema,
  combineSchemas,
} from "@/lib/structured-data";
import { SITE_URL } from "@/lib/constants";

// ─── Metadata ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Crypto Tax Guide 2026: IRS Rules & Form 1099-DA | degen0x",
  description:
    "Complete US crypto tax guide for 2026: capital gains rates, DeFi taxable events, new Form 1099-DA reporting, staking income rules. Updated March 2026.",
  keywords: [
    "crypto tax guide 2026",
    "cryptocurrency taxes",
    "IRS crypto rules 2026",
    "Form 1099-DA crypto",
    "DeFi taxes",
    "staking taxes 2026",
    "crypto capital gains",
    "crypto tax reporting",
    "bitcoin taxes",
    "crypto tax loss harvesting",
  ],
  openGraph: {
    title: "Crypto Tax Guide 2026: IRS Rules, DeFi & Form 1099-DA",
    description:
      "April 15 is coming. Here's everything you need to know about US crypto taxes in 2026 — from Form 1099-DA to DeFi swaps and staking rewards.",
    url: `${SITE_URL}/learn/crypto-tax-guide-2026`,
    type: "article",
    publishedTime: "2026-03-15T00:00:00Z",
    modifiedTime: "2026-03-15T00:00:00Z",
    authors: ["degen0x Team"],
    images: [
      {
        url: `${SITE_URL}/api/og?title=Crypto+Tax+Guide+2026&category=Learn&type=learn`,
        width: 1200,
        height: 630,
        alt: "Crypto Tax Guide 2026 — IRS Rules, DeFi & Form 1099-DA | degen0x",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crypto Tax Guide 2026: IRS Rules, DeFi & Form 1099-DA",
    description:
      "April 15 = 31 days away. New Form 1099-DA, DeFi taxable events, staking income rules — everything you need to file correctly. Full guide →",
    images: [`${SITE_URL}/api/og?title=Crypto+Tax+Guide+2026&category=Learn&type=learn`],
  },
  alternates: {
    canonical: `${SITE_URL}/learn/crypto-tax-guide-2026`,
  },
};

// ─── Structured Data ─────────────────────────────────────────────────────────
const articleSchema = generateArticleSchema({
  title: "Crypto Tax Guide 2026: IRS Rules, DeFi, Staking & Form 1099-DA",
  description:
    "Complete US crypto tax guide for 2026 covering capital gains rates, staking and DeFi income rules, new Form 1099-DA broker reporting requirements, wallet-by-wallet cost basis tracking, and legal tax reduction strategies.",
  url: `${SITE_URL}/learn/crypto-tax-guide-2026`,
  datePublished: "2026-03-15T00:00:00Z",
  dateModified: "2026-03-15T00:00:00Z",
  author: "degen0x Team",
  image: `${SITE_URL}/api/og?title=Crypto+Tax+Guide+2026&category=Learn&type=learn`,
  wordCount: 3200,
});

const faqSchema = generateFAQSchema([
  {
    question: "Do I have to pay taxes on cryptocurrency in the US?",
    answer:
      "Yes. The IRS classifies cryptocurrency as property, not currency. Every disposal — selling, trading, spending, or gifting crypto above the annual exclusion — is a taxable event. You must report all transactions regardless of whether you receive a 1099-DA form from your exchange.",
  },
  {
    question: "How is crypto taxed when I sell it?",
    answer:
      "When you sell crypto, you realize a capital gain or loss equal to the difference between your sale price and your cost basis (what you paid). Gains on assets held 12 months or less are taxed as short-term capital gains at ordinary income rates (10–37%). Gains on assets held more than 12 months qualify for long-term rates of 0%, 15%, or 20% depending on your total income.",
  },
  {
    question: "Are staking rewards taxable income?",
    answer:
      "Yes. The IRS treats staking rewards as ordinary income at the fair market value on the date you receive them (when you gain 'dominion and control'). When you later sell those rewards, any gain or loss from that point is a separate capital gain or loss event. Staking income is reported on Schedule 1 (Form 1040) as 'Other Income'.",
  },
  {
    question: "Is swapping one crypto for another a taxable event?",
    answer:
      "Yes. Trading crypto-to-crypto is a taxable event. When you swap ETH for USDC, for example, the IRS treats it as if you sold ETH for its USD value and then purchased USDC. You must calculate the gain or loss on the ETH you disposed of. The same applies to DeFi swaps on Uniswap, Curve, or any DEX.",
  },
  {
    question: "What is Form 1099-DA and what does it mean for me?",
    answer:
      "Form 1099-DA is a new IRS form that centralized US exchanges are required to issue starting with 2025 transactions (filed in 2026). It reports your gross proceeds from digital asset sales to both you and the IRS. For 2025 transactions, only gross proceeds are reported. Starting with 2026 transactions, cost basis and acquisition dates will also be included. DeFi and self-custody wallets are currently exempt from this reporting.",
  },
  {
    question: "Does the wash-sale rule apply to crypto?",
    answer:
      "As of the 2025 tax year (filed in 2026), the wash-sale rule does not apply to cryptocurrency. This means you can sell Bitcoin at a loss and immediately repurchase it, locking in the tax loss while maintaining your position — a strategy called tax-loss harvesting. Congress has proposed extending the wash-sale rule to crypto, so monitor legislation closely as this could change.",
  },
]);

const schemas = combineSchemas([articleSchema, faqSchema]);

// ─── Page Component ───────────────────────────────────────────────────────────
export default function CryptoTaxGuide2026() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <StructuredData data={schemas} />

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Learn", href: "/learn" },
          { label: "Crypto Tax Guide 2026" },
        ]}
      />

      {/* Badges */}
      <div className="flex gap-3 mb-4 mt-8">
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#da3633]/20 text-[#f85149] border border-[#da3633]/30">
          Taxes
        </span>
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#d4a017]/20 text-[#e3b341] border border-[#d4a017]/30">
          Intermediate
        </span>
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#f85149]/20 text-[#f85149] border border-[#f85149]/30 animate-pulse">
          📅 File by April 15
        </span>
      </div>

      {/* Title */}
      <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#f85149] to-[#e3b341] bg-clip-text text-transparent">
        Crypto Tax Guide 2026
      </h1>
      <p className="text-xl text-[#8b949e] mb-4">
        The IRS wants its cut. Here&rsquo;s exactly what you owe — and how to make sure you&rsquo;re not overpaying — with the new Form 1099-DA era now officially underway.
      </p>
      <p className="text-sm text-[#8b949e] mb-8">
        Updated March 2026 &middot; 14 min read
      </p>

      {/* ⚠️ Disclaimer */}
      <div
        className="rounded-xl p-5 mb-10 border"
        style={{
          background: "#161b22",
          borderColor: "#d4a017",
        }}
      >
        <p className="text-sm text-[#e3b341]">
          ⚠️ <strong>Not financial or legal advice.</strong> This guide is for informational and educational purposes only. Crypto tax rules are complex and jurisdiction-specific. Consult a qualified tax professional or CPA before filing. IRS rules cited are based on guidance current as of March 2026.
        </p>
      </div>

      {/* Table of Contents */}
      <nav
        className="rounded-xl p-6 mb-10 border"
        style={{ background: "#161b22", borderColor: "#30363d" }}
      >
        <h2 className="text-base font-semibold text-[#e6edf3] mb-4">📋 In This Guide</h2>
        <ol className="space-y-2 text-sm text-[#58a6ff]">
          <li><a href="#how-irs-treats-crypto" className="hover:underline">1. How the IRS Classifies Cryptocurrency</a></li>
          <li><a href="#capital-gains" className="hover:underline">2. Capital Gains: Short-Term vs. Long-Term</a></li>
          <li><a href="#staking-mining" className="hover:underline">3. Staking, Mining & Yield: Ordinary Income Rules</a></li>
          <li><a href="#defi-taxes" className="hover:underline">4. DeFi Tax Events: Swaps, LPs & Yield Farming</a></li>
          <li><a href="#1099-da" className="hover:underline">5. Form 1099-DA: The New Broker Reporting Era</a></li>
          <li><a href="#airdrops-forks" className="hover:underline">6. Airdrops, Hard Forks & NFTs</a></li>
          <li><a href="#cost-basis" className="hover:underline">7. Cost Basis Methods & Wallet-by-Wallet Rules</a></li>
          <li><a href="#tax-forms" className="hover:underline">8. Key IRS Forms to File</a></li>
          <li><a href="#reduce-taxes" className="hover:underline">9. Legal Ways to Reduce Your Crypto Tax Bill</a></li>
          <li><a href="#faq" className="hover:underline">10. FAQ</a></li>
        </ol>
      </nav>

      {/* ─── Section 1 ──────────────────────────────────────────────────────────── */}
      <h2 id="how-irs-treats-crypto" className="text-3xl font-bold text-[#e6edf3] mt-12 mb-4">
        1. How the IRS Classifies Cryptocurrency
      </h2>
      <p className="text-[#8b949e] mb-4">
        The IRS has been clear since 2014: <strong className="text-[#e6edf3]">cryptocurrency is property, not currency.</strong> That one classification drives almost every tax rule that follows. When you sell, trade, spend, or give away crypto, the IRS treats it the same way it treats selling a stock, a piece of art, or real estate.
      </p>
      <p className="text-[#8b949e] mb-4">
        The practical implication: <strong className="text-[#e6edf3]">every disposal is a taxable event.</strong> Selling Bitcoin for dollars is taxable. Swapping ETH for USDC is taxable. Buying a coffee with crypto is taxable. Sending crypto to a friend as a gift above the annual exclusion ($18,000 in 2025) triggers gift tax rules.
      </p>
      <p className="text-[#8b949e] mb-6">
        The IRS added a mandatory digital asset question to Form 1040 since 2019. In 2026, you must check &ldquo;Yes&rdquo; or &ldquo;No&rdquo; on whether you received, sold, exchanged, or otherwise disposed of any digital asset. Checking &ldquo;No&rdquo; when you should check &ldquo;Yes&rdquo; is a false statement to the federal government.
      </p>

      <div
        className="rounded-xl p-5 mb-8 border"
        style={{ background: "#161b22", borderColor: "#30363d" }}
      >
        <p className="text-sm font-semibold text-[#e6edf3] mb-2">💡 What Counts as a Taxable Event?</p>
        <ul className="text-sm text-[#8b949e] space-y-1 list-disc list-inside">
          <li>Selling crypto for fiat (USD, EUR, etc.)</li>
          <li>Trading one crypto for another (BTC → ETH, ETH → USDC, etc.)</li>
          <li>Spending crypto to purchase goods or services</li>
          <li>Receiving staking rewards, mining income, or yield farming payouts</li>
          <li>Receiving airdrops or tokens from a hard fork</li>
          <li>NFT sales and NFT purchases (buying an NFT with ETH = disposing of ETH)</li>
        </ul>
        <p className="text-sm font-semibold text-[#e6edf3] mt-3 mb-2">✅ What Is NOT a Taxable Event?</p>
        <ul className="text-sm text-[#8b949e] space-y-1 list-disc list-inside">
          <li>Buying crypto with fiat and holding it</li>
          <li>Transferring crypto between your own wallets</li>
          <li>Gifting crypto below the annual exclusion ($18,000/recipient)</li>
          <li>Donating crypto to a qualified charity (and you may get a deduction)</li>
        </ul>
      </div>

      {/* ─── Section 2 ──────────────────────────────────────────────────────────── */}
      <h2 id="capital-gains" className="text-3xl font-bold text-[#e6edf3] mt-12 mb-4">
        2. Capital Gains: Short-Term vs. Long-Term
      </h2>
      <p className="text-[#8b949e] mb-4">
        When you dispose of crypto, you calculate your <strong className="text-[#e6edf3]">capital gain or loss</strong> as: <em>sale price minus cost basis (what you paid, including fees)</em>. Whether that gain is taxed as short-term or long-term depends entirely on how long you held the asset before selling.
      </p>

      {/* Rates table */}
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-[#30363d]">
              <th className="text-left py-3 px-4 text-[#e6edf3]">Holding Period</th>
              <th className="text-left py-3 px-4 text-[#e6edf3]">Tax Rate</th>
              <th className="text-left py-3 px-4 text-[#e6edf3]">Filed On</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#21262d]">
              <td className="py-3 px-4 text-[#f85149] font-medium">≤ 12 months (short-term)</td>
              <td className="py-3 px-4 text-[#8b949e]">10% – 37% (ordinary income rates)</td>
              <td className="py-3 px-4 text-[#8b949e]">Form 8949 + Schedule D</td>
            </tr>
            <tr className="border-b border-[#21262d]">
              <td className="py-3 px-4 text-[#3fb950] font-medium">&gt; 12 months (long-term)</td>
              <td className="py-3 px-4 text-[#8b949e]">0%, 15%, or 20% (income-dependent)</td>
              <td className="py-3 px-4 text-[#8b949e]">Form 8949 + Schedule D</td>
            </tr>
            <tr className="border-b border-[#21262d]">
              <td className="py-3 px-4 text-[#e3b341] font-medium">High income surcharge</td>
              <td className="py-3 px-4 text-[#8b949e]">+3.8% Net Investment Income Tax (NIIT)</td>
              <td className="py-3 px-4 text-[#8b949e]">Form 8960</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-[#8b949e] mb-4">
        The <strong className="text-[#e6edf3]">NIIT</strong> applies if your modified adjusted gross income exceeds $200,000 (single) or $250,000 (married filing jointly) and you have net investment income. Long-term crypto gains can be subject to an effective rate of up to <strong className="text-[#e6edf3]">23.8%</strong> (20% + 3.8%) at the highest income levels.
      </p>
      <p className="text-[#8b949e] mb-6">
        The single most powerful tax move available to most crypto investors is simply <strong className="text-[#e6edf3]">holding assets for more than 12 months.</strong> If you flip tokens in under a year, you&rsquo;re paying income tax rates on your gains. Hold one day longer than 365 and you drop to preferential capital gains rates — potentially saving 10–20% on every dollar of profit.
      </p>

      {/* ─── Tax Estimator Tool ─────────────────────────────────────────────────── */}
      <CryptoTaxEstimator />

      {/* ─── Section 3 ──────────────────────────────────────────────────────────── */}
      <h2 id="staking-mining" className="text-3xl font-bold text-[#e6edf3] mt-12 mb-4">
        3. Staking, Mining & Yield: Ordinary Income Rules
      </h2>
      <p className="text-[#8b949e] mb-4">
        Earning crypto — whether through proof-of-stake validation, liquid staking protocols like Lido, yield farming, or mining — creates a <strong className="text-[#e6edf3]">taxable income event the moment you gain control over the tokens.</strong> The IRS uses the &ldquo;dominion and control&rdquo; standard: when the tokens are in your wallet and you can use or sell them, they&rsquo;re taxable income.
      </p>
      <p className="text-[#8b949e] mb-4">
        The income amount equals the <strong className="text-[#e6edf3]">fair market value of the tokens on the date received.</strong> If you received 0.5 ETH in staking rewards when ETH was trading at $4,000, you have $2,000 of ordinary income — regardless of whether you sell.
      </p>
      <p className="text-[#8b949e] mb-4">
        When you later sell those staking rewards, a <strong className="text-[#e6edf3]">second tax event occurs:</strong> a capital gain or loss measured from the value at receipt (your new cost basis) to the sale price. If ETH was $4,000 when you earned it and you sell at $6,000, you have an additional $2,000 capital gain.
      </p>

      <div
        className="rounded-xl p-5 mb-6 border"
        style={{ background: "#161b22", borderColor: "#30363d" }}
      >
        <p className="text-sm font-semibold text-[#e6edf3] mb-3">⚠️ Liquid Staking Edge Case</p>
        <p className="text-sm text-[#8b949e]">
          When you deposit ETH into Lido and receive <code className="bg-[#21262d] px-1 rounded">stETH</code>, the IRS may treat this as a crypto-to-crypto swap (disposing of ETH, acquiring stETH) — creating an immediate taxable event on any ETH gains. This is distinct from solo staking directly on the Ethereum beacon chain. Use our{" "}
          <a href="/tools/staking-apy" className="text-[#58a6ff] hover:underline">
            Staking APY Calculator
          </a>{" "}
          to model your yield — and factor in the tax cost.
        </p>
      </div>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-[#30363d]">
              <th className="text-left py-3 px-4 text-[#e6edf3]">Activity</th>
              <th className="text-left py-3 px-4 text-[#e6edf3]">Tax Treatment</th>
              <th className="text-left py-3 px-4 text-[#e6edf3]">Form</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["ETH staking rewards (solo)", "Ordinary income at receipt", "Schedule 1"],
              ["Liquid staking (Lido stETH)", "Possible swap event + income", "8949 + Schedule 1"],
              ["Yield farming rewards", "Ordinary income at receipt", "Schedule 1"],
              ["Mining income (personal)", "Ordinary income at receipt", "Schedule 1"],
              ["Mining income (business)", "Self-employment income", "Schedule C"],
              ["Selling any of the above", "Capital gain/loss from cost basis", "8949 + Schedule D"],
            ].map(([activity, treatment, form], i) => (
              <tr key={i} className="border-b border-[#21262d]">
                <td className="py-3 px-4 text-[#e6edf3] font-medium">{activity}</td>
                <td className="py-3 px-4 text-[#8b949e]">{treatment}</td>
                <td className="py-3 px-4 text-[#58a6ff]">{form}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ─── Section 4 ──────────────────────────────────────────────────────────── */}
      <h2 id="defi-taxes" className="text-3xl font-bold text-[#e6edf3] mt-12 mb-4">
        4. DeFi Tax Events: Swaps, LPs & Yield Farming
      </h2>
      <p className="text-[#8b949e] mb-4">
        DeFi is where crypto tax complexity explodes. A single yield farming session can generate dozens of taxable events — and none of them will show up on a Form 1099-DA, because DeFi protocols currently aren&rsquo;t covered by broker reporting rules.
      </p>
      <p className="text-[#8b949e] mb-4">
        <strong className="text-[#e6edf3]">The IRS doesn&rsquo;t care that it&rsquo;s on-chain.</strong> Blockchain transactions are public and traceable. The agency has used John Doe summonses and blockchain analytics firms for years. Treat every DeFi interaction as a potential taxable event and keep records.
      </p>

      <div
        className="rounded-xl p-5 mb-6 border"
        style={{ background: "#161b22", borderColor: "#30363d" }}
      >
        <p className="text-sm font-semibold text-[#e6edf3] mb-3">🔁 Common DeFi Tax Events</p>
        <ul className="text-sm text-[#8b949e] space-y-2 list-disc list-inside">
          <li><strong className="text-[#e6edf3]">DEX swaps (Uniswap, Curve, etc.):</strong> Disposing of token A for token B = capital gain/loss on A</li>
          <li><strong className="text-[#e6edf3]">Liquidity pool deposits:</strong> Depositing two tokens and receiving LP tokens may be treated as two disposals</li>
          <li><strong className="text-[#e6edf3]">LP withdrawals:</strong> Burning LP tokens to receive underlying assets may be a disposal event</li>
          <li><strong className="text-[#e6edf3]">Impermanent loss:</strong> Not a deductible loss until you exit the LP position and realize it</li>
          <li><strong className="text-[#e6edf3]">Yield farming rewards:</strong> Ordinary income at receipt; subsequent sale = capital event</li>
          <li><strong className="text-[#e6edf3]">Lending collateral (Aave, Compound):</strong> Depositing may not be taxable, but receiving interest tokens is income</li>
          <li><strong className="text-[#e6edf3]">Token wraps (ETH → WETH):</strong> Often treated as a swap — consult your tax professional</li>
          <li><strong className="text-[#e6edf3]">Bridge transfers:</strong> Moving assets cross-chain may be taxable if a new token is issued</li>
        </ul>
      </div>

      <p className="text-[#8b949e] mb-6">
        The volume of transactions DeFi generates makes manual tracking nearly impossible. Crypto tax software like Koinly, TokenTax, or CoinTracker can import wallet transactions and auto-classify events, saving you dozens of hours. Pair software with our{" "}
        <a href="/tools/tax-calculator" className="text-[#58a6ff] hover:underline">Crypto Tax Calculator</a>{" "}
        to estimate your liability before you file.
      </p>

      {/* ─── Section 5 ──────────────────────────────────────────────────────────── */}
      <h2 id="1099-da" className="text-3xl font-bold text-[#e6edf3] mt-12 mb-4">
        5. Form 1099-DA: The New Broker Reporting Era
      </h2>
      <p className="text-[#8b949e] mb-4">
        Starting with <strong className="text-[#e6edf3]">2025 transactions filed in 2026</strong>, US centralized exchanges (Coinbase, Kraken, Gemini, Binance.US, etc.) are legally required to issue <strong className="text-[#e6edf3]">Form 1099-DA</strong> — a new IRS form reporting your digital asset sales directly to you and to the government simultaneously.
      </p>
      <p className="text-[#8b949e] mb-4">
        This is a seismic shift. Previously, crypto reporting was largely self-reported. Now, the IRS will receive transaction data the same way it receives your stock brokerage data on Form 1099-B. If your 1040 doesn&rsquo;t match what the exchange reports, you&rsquo;ll get a notice.
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-[#30363d]">
              <th className="text-left py-3 px-4 text-[#e6edf3]">Tax Year</th>
              <th className="text-left py-3 px-4 text-[#e6edf3]">What 1099-DA Reports</th>
              <th className="text-left py-3 px-4 text-[#e6edf3]">Who Must Issue It</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["2025 (filed 2026)", "Gross proceeds from sales only", "US centralized exchanges, custodial brokers"],
              ["2026 (filed 2027)", "Gross proceeds + cost basis + acquisition dates", "US centralized exchanges, custodial brokers"],
              ["TBD", "DeFi & non-custodial brokers — NOT yet required", "Proposed but not finalized as of March 2026"],
            ].map(([year, what, who], i) => (
              <tr key={i} className="border-b border-[#21262d]">
                <td className="py-3 px-4 text-[#e6edf3] font-medium">{year}</td>
                <td className="py-3 px-4 text-[#8b949e]">{what}</td>
                <td className="py-3 px-4 text-[#8b949e]">{who}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        className="rounded-xl p-5 mb-8 border"
        style={{ background: "#161b22", borderColor: "#1f6feb" }}
      >
        <p className="text-sm font-semibold text-[#e6edf3] mb-2">💡 Key 1099-DA Fact</p>
        <p className="text-sm text-[#8b949e]">
          Receiving a 1099-DA doesn&rsquo;t automatically mean the reported cost basis is correct. Exchanges may not have complete purchase history, especially for assets transferred in from external wallets. <strong className="text-[#e6edf3]">You are responsible for maintaining accurate records</strong> — the 1099-DA is a starting point, not a final answer. Always verify numbers against your own records before filing.
        </p>
      </div>

      {/* ─── Section 6 ──────────────────────────────────────────────────────────── */}
      <h2 id="airdrops-forks" className="text-3xl font-bold text-[#e6edf3] mt-12 mb-4">
        6. Airdrops, Hard Forks & NFTs
      </h2>
      <p className="text-[#8b949e] mb-4">
        <strong className="text-[#e6edf3]">Airdrops</strong> are taxable as ordinary income at the fair market value on the date you receive them — even if you didn&rsquo;t ask for them. The IRS position has been consistent: receiving property with economic value creates income. If you were eligible for and claimed a token airdrop (e.g., a governance token distribution), that value on claim date is income, reported on Schedule 1. When you eventually sell, the gain or loss is calculated from that income value as your cost basis.
      </p>
      <p className="text-[#8b949e] mb-4">
        <strong className="text-[#e6edf3]">Hard forks</strong> follow the same logic. If a blockchain forks and you receive new tokens (as holders of Bitcoin did with Bitcoin Cash in 2017), the IRS treats the new tokens as ordinary income at fair market value when they come under your control. If the new token has no market value at the time of the fork, some tax professionals argue there is no income until you can trade it — but this is an area of ongoing debate.
      </p>
      <p className="text-[#8b949e] mb-6">
        <strong className="text-[#e6edf3]">NFTs</strong> are taxed as property like any other crypto. Minting an NFT for a fee is generally not taxable (you&rsquo;re creating an asset), but selling an NFT creates a capital gain. Buying an NFT with ETH is a disposal of ETH at the current market price — meaning you may owe tax on ETH gains at the moment of purchase, separate from any profit when you sell the NFT.
      </p>

      {/* ─── Section 7 ──────────────────────────────────────────────────────────── */}
      <h2 id="cost-basis" className="text-3xl font-bold text-[#e6edf3] mt-12 mb-4">
        7. Cost Basis Methods & Wallet-by-Wallet Rules
      </h2>
      <p className="text-[#8b949e] mb-4">
        Your <strong className="text-[#e6edf3]">cost basis</strong> is what you paid for a crypto asset, including purchase price and any fees. The IRS requires you to track cost basis on a <strong className="text-[#e6edf3]">per-wallet or per-account basis</strong> — not as one giant pool across all your wallets. Starting with 2025 transactions, you can&rsquo;t blend cost basis from Coinbase with coins sitting in a hardware wallet.
      </p>
      <p className="text-[#8b949e] mb-4">
        You can choose among several accounting methods for which specific units of a coin you&rsquo;re selling. The method you choose can dramatically affect your tax bill:
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-[#30363d]">
              <th className="text-left py-3 px-4 text-[#e6edf3]">Method</th>
              <th className="text-left py-3 px-4 text-[#e6edf3]">How It Works</th>
              <th className="text-left py-3 px-4 text-[#e6edf3]">Best For</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["FIFO (default)", "First bought = first sold. Default if you don't elect another.", "Bull markets where older coins have largest gains — often highest tax"],
              ["HIFO", "Sell highest-cost lots first. Minimizes gains (or maximizes losses).", "Minimizing current-year tax liability"],
              ["Specific ID", "Choose exactly which lots to sell. Maximum flexibility.", "Tax optimization with careful record-keeping"],
              ["LIFO", "Last in, first out. Sells newest coins first.", "May produce short-term gains — use with caution"],
            ].map(([method, how, best], i) => (
              <tr key={i} className="border-b border-[#21262d]">
                <td className="py-3 px-4 text-[#e6edf3] font-medium">{method}</td>
                <td className="py-3 px-4 text-[#8b949e]">{how}</td>
                <td className="py-3 px-4 text-[#8b949e]">{best}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        className="rounded-xl p-5 mb-8 border"
        style={{ background: "#161b22", borderColor: "#30363d" }}
      >
        <p className="text-sm font-semibold text-[#e6edf3] mb-2">🔐 Wallet-by-Wallet Requirement (2025+)</p>
        <p className="text-sm text-[#8b949e]">
          Under IRS regulations effective for 2025 transactions, cost basis must be tracked separately per wallet or exchange account. You can no longer pool all your BTC together regardless of where it sits. If you transferred coins between wallets, you must track the original basis through the transfer. This makes record-keeping tools like our{" "}
          <a href="/tools/portfolio-tracker" className="text-[#58a6ff] hover:underline">
            Portfolio Tracker
          </a>{" "}
          essential — it tags cost basis to the source wallet automatically.
        </p>
      </div>

      {/* ─── Section 8 ──────────────────────────────────────────────────────────── */}
      <h2 id="tax-forms" className="text-3xl font-bold text-[#e6edf3] mt-12 mb-4">
        8. Key IRS Forms to File
      </h2>
      <p className="text-[#8b949e] mb-6">
        Crypto touches multiple parts of your tax return. Here are the forms you&rsquo;ll likely need:
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-[#30363d]">
              <th className="text-left py-3 px-4 text-[#e6edf3]">Form</th>
              <th className="text-left py-3 px-4 text-[#e6edf3]">Purpose</th>
              <th className="text-left py-3 px-4 text-[#e6edf3]">When You Need It</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Form 8949", "Reports individual capital gain/loss transactions", "Any sale or disposal of crypto"],
              ["Schedule D (Form 1040)", "Summarizes all capital gains and losses", "Always if you have capital events"],
              ["Schedule 1 (Form 1040)", "Reports 'Other Income' including staking/airdrops", "Staking, yield, airdrop, fork income"],
              ["Schedule C (Form 1040)", "Business income and expenses", "Mining or staking as a business"],
              ["Form 1099-DA", "Exchange-issued; reports your sale proceeds to IRS", "Issued by your exchange, not filed by you"],
              ["Form 8960", "Calculates Net Investment Income Tax (NIIT)", "Modified AGI > $200K single / $250K joint"],
              ["FinCEN 114 (FBAR)", "Reports foreign financial accounts > $10K", "Offshore exchange accounts (Kraken, Binance intl.)"],
            ].map(([form, purpose, when], i) => (
              <tr key={i} className="border-b border-[#21262d]">
                <td className="py-3 px-4 text-[#58a6ff] font-medium">{form}</td>
                <td className="py-3 px-4 text-[#8b949e]">{purpose}</td>
                <td className="py-3 px-4 text-[#8b949e]">{when}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ─── Section 9 ──────────────────────────────────────────────────────────── */}
      <h2 id="reduce-taxes" className="text-3xl font-bold text-[#e6edf3] mt-12 mb-4">
        9. Legal Ways to Reduce Your Crypto Tax Bill
      </h2>
      <p className="text-[#8b949e] mb-4">
        Tax avoidance (legal) is not tax evasion (illegal). These strategies are IRS-compliant and widely used by sophisticated investors:
      </p>

      <div className="space-y-5 mb-8">
        <div className="rounded-xl p-5 border" style={{ background: "#161b22", borderColor: "#30363d" }}>
          <p className="text-sm font-semibold text-[#e6edf3] mb-2">⏳ Hold for Long-Term Capital Gains</p>
          <p className="text-sm text-[#8b949e]">
            If you&apos;re sitting on large gains in a position you bought 10 months ago, consider waiting past the 12-month mark before selling. Dropping from a 37% short-term rate to a 20% long-term rate on a $100K gain saves $17,000 in taxes.
          </p>
        </div>

        <div className="rounded-xl p-5 border" style={{ background: "#161b22", borderColor: "#30363d" }}>
          <p className="text-sm font-semibold text-[#e6edf3] mb-2">📉 Tax-Loss Harvesting</p>
          <p className="text-sm text-[#8b949e]">
            Sell positions currently in the red to realize losses that offset your gains. Unlike stocks, crypto has no wash-sale rule — you can sell and immediately repurchase. Losses first offset gains; excess losses offset up to $3,000 of ordinary income per year, with unlimited carryforward. See our full{" "}
            <a href="/taxes/learn/tax-loss-harvesting" className="text-[#58a6ff] hover:underline">Tax-Loss Harvesting Guide</a>{" "}
            and use the{" "}
            <a href="/tools/tax-loss-harvester" className="text-[#58a6ff] hover:underline">Tax-Loss Harvesting Tool</a>.
          </p>
        </div>

        <div className="rounded-xl p-5 border" style={{ background: "#161b22", borderColor: "#30363d" }}>
          <p className="text-sm font-semibold text-[#e6edf3] mb-2">🎁 Gift Appreciated Crypto</p>
          <p className="text-sm text-[#8b949e]">
            Giving crypto to family members in lower tax brackets shifts the capital gains bill to them. Gifts up to $18,000 per recipient per year (2025) have no gift tax. Recipients take your original cost basis when they eventually sell.
          </p>
        </div>

        <div className="rounded-xl p-5 border" style={{ background: "#161b22", borderColor: "#30363d" }}>
          <p className="text-sm font-semibold text-[#e6edf3] mb-2">🏛️ Donate to Charity</p>
          <p className="text-sm text-[#8b949e]">
            Donating appreciated crypto directly to a qualified 501(c)(3) charity lets you deduct the full fair market value without recognizing the capital gain. You avoid the tax and get a deduction — far better than selling first and donating cash.
          </p>
        </div>

        <div className="rounded-xl p-5 border" style={{ background: "#161b22", borderColor: "#30363d" }}>
          <p className="text-sm font-semibold text-[#e6edf3] mb-2">🔄 Use HIFO Cost Basis Method</p>
          <p className="text-sm text-[#8b949e]">
            Elect to use HIFO (Highest-In, First-Out) to match your highest-cost lots against sales first. This minimizes your taxable gain on each sale. You must make the specific ID election at the time of sale, not retroactively.
          </p>
        </div>

        <div className="rounded-xl p-5 border" style={{ background: "#161b22", borderColor: "#30363d" }}>
          <p className="text-sm font-semibold text-[#e6edf3] mb-2">📊 Offset with Capital Loss Carryforwards</p>
          <p className="text-sm text-[#8b949e]">
            If you had a rough year with crypto losses exceeding gains, those losses carry forward indefinitely. A significant loss year in 2025 can shelter gains in 2026 and beyond. Track your carryforward balance carefully — use our{" "}
            <a href="/tools/tax-optimizer" className="text-[#58a6ff] hover:underline">Tax Optimizer</a>{" "}
            to model scenarios.
          </p>
        </div>
      </div>

      {/* ─── FAQ ────────────────────────────────────────────────────────────────── */}
      <h2 id="faq" className="text-3xl font-bold text-[#e6edf3] mt-12 mb-6">
        10. Frequently Asked Questions
      </h2>
      <div className="space-y-5 mb-12">
        {[
          {
            q: "Do I have to pay taxes on cryptocurrency in the US?",
            a: "Yes. The IRS classifies cryptocurrency as property. Every disposal — selling, trading, spending, or gifting crypto above the annual exclusion — is a taxable event that must be reported on your return.",
          },
          {
            q: "How is crypto taxed when I sell it?",
            a: "Your gain or loss equals the sale price minus your cost basis. Assets held 12 months or less are taxed at short-term rates (10–37%). Assets held longer qualify for long-term rates (0%, 15%, or 20%). High earners may also owe an additional 3.8% Net Investment Income Tax.",
          },
          {
            q: "Are staking rewards taxable income?",
            a: "Yes. Staking rewards are ordinary income at fair market value on the date received. They're reported on Schedule 1. When you later sell the rewards, the gain or loss from that income value is a separate capital event.",
          },
          {
            q: "Is swapping one crypto for another a taxable event?",
            a: "Yes. Trading BTC for ETH, ETH for USDC, or any crypto-to-crypto swap is a taxable disposal of the coin you sold. You must calculate the gain or loss based on that coin's cost basis.",
          },
          {
            q: "What is Form 1099-DA and what does it mean for me?",
            a: "Form 1099-DA is a new IRS form centralized exchanges must issue for 2025 and later transactions. It reports your sale proceeds directly to the IRS. For 2025, only gross proceeds are reported. Starting 2026, cost basis and acquisition dates will be included. DeFi and self-custody wallets are currently not covered.",
          },
          {
            q: "Does the wash-sale rule apply to crypto?",
            a: "As of the 2025 tax year, the wash-sale rule does not apply to crypto. You can sell at a loss and immediately repurchase — realizing the tax loss while maintaining your market position. Monitor proposed legislation that could change this.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="rounded-xl p-5 border"
            style={{ background: "#161b22", borderColor: "#30363d" }}
          >
            <p className="font-semibold text-[#e6edf3] mb-2">{item.q}</p>
            <p className="text-sm text-[#8b949e]">{item.a}</p>
          </div>
        ))}
      </div>

      {/* Related Articles */}
      <div
        className="rounded-xl p-6 border"
        style={{ background: "#161b22", borderColor: "#30363d" }}
      >
        <h3 className="text-base font-semibold text-[#e6edf3] mb-4">📚 Related Resources</h3>
        <ul className="space-y-2 text-sm">
          {[
            ["/taxes/learn/tax-loss-harvesting", "Crypto Tax-Loss Harvesting: Step-by-Step Guide"],
            ["/tools/tax-calculator", "Crypto Tax Calculator — Estimate Your 2026 Liability"],
            ["/tools/tax-loss-harvester", "Tax-Loss Harvesting Tool — Find Positions to Harvest"],
            ["/tools/tax-optimizer", "Tax Optimizer — Model Gain/Loss Scenarios"],
            ["/learn/defi-safety-guide-2026", "DeFi Safety Guide 2026 — Managing Smart Contract Risk"],
            ["/tools/portfolio-tracker", "Portfolio Tracker — Track Cost Basis Across Wallets"],
          ].map(([href, label]) => (
            <li key={href}>
              <a href={href} className="text-[#58a6ff] hover:underline">
                → {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <BackToTop />
    </div>
  );
}
