import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import StructuredData from "@/components/StructuredData";
import BackToTop from "@/components/BackToTop";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: "Crypto Tax-Loss Harvesting Guide 2026 — IRS Rules & Strategy",
  description: "Master crypto tax-loss harvesting in 2026. Learn wash sale rules, IRS regulations, cost basis tracking, and strategic techniques to offset capital gains and",
  keywords:
    "crypto tax-loss harvesting, wash sale rule crypto, tax loss harvesting strategy, IRS crypto taxes, capital loss deduction, 1099-DA crypto, Form 8949, cryptocurrency tax planning, crypto tax software",
  openGraph: {
    type: "article",
    title: "Crypto Tax-Loss Harvesting Guide 2026 — IRS Rules & Strategy",
    description:
      "Master crypto tax-loss harvesting strategies, understand wash sale rules for crypto, and learn how to offset capital gains while staying compliant with IRS regulations.",
    publishedTime: "2026-03-24T00:00:00Z",
    authors: ["degen0x"],
    url: "https://degen0x.com/learn/crypto-tax-loss-harvesting-guide-2026",
    images: [
      {
        url: "https://degen0x.com/og-crypto-tax-loss-harvesting-guide-2026.svg",
        width: 1200,
        height: 630,
        alt: "Crypto Tax-Loss Harvesting Guide 2026 - IRS Rules & Strategy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crypto Tax-Loss Harvesting Guide 2026 | degen0x",
    description: "Master tax-loss harvesting for crypto. Learn wash sale rules, IRS compliance, and capital gains offset strategies.",
  },

  alternates: { canonical: "/learn/crypto-tax-loss-harvesting-guide-2026" }};

const articleSchema = generateArticleSchema({
  title: "Crypto Tax-Loss Harvesting Guide 2026 — Strategies, IRS Rules & Wash Sale Loophole",
  description: "Comprehensive guide to tax-loss harvesting for cryptocurrencies in 2026. Learn wash sale rules, cost basis tracking, capital loss deductions, Form 1099-DA reporting, and strategic techniques to reduce your crypto tax liability while staying fully compliant with IRS regulations.",
  url: "https://degen0x.com/learn/crypto-tax-loss-harvesting-guide-2026",
  datePublished: "2026-03-24T00:00:00Z",
  dateModified: "2026-03-24T00:00:00Z",
  author: "degen0x Team",
  image: "https://degen0x.com/og-crypto-tax-loss-harvesting-guide-2026.svg",
  wordCount: 3800,
});

const faqSchema = generateFAQSchema([
  { q: "What is crypto tax-loss harvesting and how does it work?", a: "Tax-loss harvesting is the practice of intentionally selling crypto assets at a loss to offset capital gains from other profitable investments. When you sell an asset for less than you paid, you realize a capital loss that can be used to reduce your taxable gains, and in some cases, up to $3,000 of ordinary income per year. Any excess losses can be carried forward indefinitely to future years." },
  { q: "Does the wash sale rule apply to cryptocurrency in 2026?", a: "As of 2026, the wash sale rule does NOT apply to cryptocurrency. The IRS treats crypto as property, not securities. This means you can sell a crypto asset at a loss and immediately repurchase the same asset without triggering wash sale violations. However, Congress has proposed legislation to add crypto to wash sale rules, so this could change in the future. Stay informed of regulatory updates." },
  { q: "How do I report crypto tax-loss harvesting to the IRS?", a: "Tax-loss harvesting is reported on Form 8949 (Sales of Capital Assets) and Schedule D. You list each sale with the acquisition date, holding period, purchase price, sale price, and the realized loss. Long-term losses (held >1 year) are reported separately from short-term losses. If you received a Form 1099-DA, use the information provided but double-check for accuracy." },
  { q: "What's the difference between short-term and long-term tax losses?", a: "Short-term losses (assets held ≤1 year) offset short-term gains first, which are taxed at ordinary income rates (up to 37%). Long-term losses (assets held >1 year) offset long-term gains first, taxed at preferential rates (0%, 15%, or 20%). Having losses in both categories allows strategic planning: use short-term losses to offset short-term gains, then long-term losses for long-term gains." },
  { q: "Can I immediately rebuy the same crypto I sold at a loss?", a: "Yes. Because crypto is not subject to wash sale rules (as of 2026), you can sell Bitcoin at a $10K loss today and buy Bitcoin again tomorrow without losing the tax deduction. This is the major advantage of tax-loss harvesting in crypto compared to stocks. However, proposed legislation may change this, so always verify current rules." },
  { q: "What software should I use for crypto tax-loss harvesting?", a: "Top options include Koinly (automated cost basis tracking), CoinLedger (comprehensive tax reporting), TokenTax (detailed IRS filing), and CoinTracker (portfolio + tax integration). Many offer features like loss harvesting recommendations and Form 1099-DA matching. Choose based on portfolio size, exchange complexity, and budget. Always verify your software's accuracy before filing." },
]);

const combinedSchema = combineSchemas([articleSchema, faqSchema]);

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Learn', item: 'https://degen0x.com/learn' },
    { '@type': 'ListItem', position: 3, name: 'Crypto Tax Loss Harvesting Guide 2026', },
  ],
};

export default function CryptoTaxLossHarvestingGuide() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#e6edf3]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <StructuredData data={combinedSchema} />
        {/* Breadcrumb */}
        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Learn", href: "/learn" },
          { label: "Crypto Tax-Loss Harvesting Guide" },
        ]} />

        {/* Header */}
        <header className="mb-12">
          <h1
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{
              backgroundImage: "linear-gradient(to right, #06b6d4, #6366f1)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Crypto Tax-Loss Harvesting Guide 2026
          </h1>
          <p className="text-xl text-[#c9d1d9] mb-6">
            Strategies, IRS Rules & Wash Sale Loophole Explained
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="inline-block bg-[#06b6d4]/10 text-[#06b6d4] border border-[#06b6d4]/30 rounded-full px-3 py-1 text-sm font-medium">
              Tax Strategy
            </span>
            <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] border border-[#58a6ff]/30 rounded-full px-3 py-1 text-sm font-medium">
              Beginner
            </span>
          </div>

          <p className="text-[#8b949e] text-sm">
            Updated March 2026 · 15 min read
          </p>
        </header>

        {/* Opening Paragraph */}
        <div className="mb-12 text-[#c9d1d9] leading-relaxed">
          <p className="text-lg mb-4">
            Tax-loss harvesting is one of the most powerful—and underutilized—strategies for crypto investors to reduce their tax liability. By strategically selling assets at a loss, you can offset capital gains from profitable trades and potentially reduce your ordinary income by up to $3,000 per year. In 2026, crypto still benefits from a critical advantage: the wash sale rule does not apply, meaning you can sell an asset at a loss and immediately repurchase it without losing the tax benefit. This guide walks you through the mechanics, IRS rules, and practical strategies to harvest losses effectively while staying fully compliant.
          </p>
        </div>

        {/* Table of Contents */}
        <nav aria-label="Table of contents" className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 mb-12">
          <h2 className="text-lg font-semibold mb-4 text-[#e6edf3]">
            Table of Contents
          </h2>
          <ul className="space-y-2 text-[#58a6ff]">
            <li>
              <a href="#what-is-tlh" className="hover:underline">
                1. What Is Tax-Loss Harvesting?
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="hover:underline">
                2. How It Works for Crypto
              </a>
            </li>
            <li>
              <a href="#wash-sale-rule" className="hover:underline">
                3. The Wash Sale Rule & Crypto
              </a>
            </li>
            <li>
              <a href="#step-by-step" className="hover:underline">
                4. Step-by-Step TLH Strategy
              </a>
            </li>
            <li>
              <a href="#short-term-long-term" className="hover:underline">
                5. Short-Term vs. Long-Term Losses
              </a>
            </li>
            <li>
              <a href="#tools-software" className="hover:underline">
                6. Tax-Loss Harvesting Tools & Software
              </a>
            </li>
            <li>
              <a href="#common-mistakes" className="hover:underline">
                7. Common Mistakes to Avoid
              </a>
            </li>
            <li>
              <a href="#risks-regulatory" className="hover:underline">
                8. Risks & Regulatory Outlook
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                9. Frequently Asked Questions
              </a>
            </li>
          </ul>
        </nav>

        {/* Section 1: What Is Tax-Loss Harvesting? */}
        <section id="what-is-tlh" className="mb-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6 text-[#e6edf3]">
            1. What Is Tax-Loss Harvesting?
          </h2>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            Tax-loss harvesting (TLH) is the practice of deliberately selling an investment at a loss to offset capital gains or reduce ordinary income for tax purposes. When you sell a cryptocurrency for less than you paid, you realize a capital loss. This loss can be used to offset capital gains from other profitable investments, reducing your overall tax liability.
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
            For example: You bought Bitcoin at $35,000 and sold at $30,000, realizing a $5,000 loss. You also sold Ethereum at $40,000 that you bought at $30,000, realizing a $10,000 gain. Your net capital gain is $5,000 ($10,000 gain - $5,000 loss), reducing your tax liability compared to reporting the $10,000 gain alone.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-[#e6edf3]">
            Why Tax-Loss Harvesting Matters
          </h3>

          <ul className="list-disc list-inside text-[#c9d1d9] space-y-3 mb-6 leading-relaxed">
            <li>
              <strong>Reduce capital gains taxes:</strong> Losses directly offset gains, lowering your tax bill
            </li>
            <li>
              <strong>Deduct up to $3,000 of ordinary income:</strong> If losses exceed gains, you can deduct up to $3,000 annually against salary and other income
            </li>
            <li>
              <strong>Carry losses forward indefinitely:</strong> Excess losses don't expire; they roll forward to future years
            </li>
            <li>
              <strong>Rebalance your portfolio:</strong> TLH forces you to reassess holdings and can align your portfolio with your strategy
            </li>
            <li>
              <strong>No wash sale rules in crypto (yet):</strong> Unlike stocks, you can immediately repurchase the same asset without losing the deduction
            </li>
          </ul>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            The key insight: tax-loss harvesting isn't "giving up" on an asset. It's strategically realizing losses when you have them to offset gains when you have them, all while maintaining your investment exposure.
          </p>
        </section>

        {/* Section 2: How It Works for Crypto */}
        <section id="how-it-works" className="mb-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6 text-[#e6edf3]">
            2. How It Works for Crypto
          </h2>

          <p className="text-[#c9d1d9] mb-6 leading-relaxed">
            Tax-loss harvesting for crypto works on the same principle as for stocks, but with unique advantages and challenges specific to the crypto market.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-[#e6edf3]">
            The Basic Flow
          </h3>

          <ol className="list-decimal list-inside text-[#c9d1d9] space-y-3 mb-6 leading-relaxed">
            <li>
              <strong>Identify unrealized losses:</strong> You hold Bitcoin at $30,000 (purchased at $35,000). You have a $5,000 unrealized loss.
            </li>
            <li>
              <strong>Sell at the loss:</strong> You execute a market sell, realizing the $5,000 loss. This loss is now "real" for tax purposes.
            </li>
            <li>
              <strong>Offset gains:</strong> If you have $10,000 in capital gains from other sales, the $5,000 loss reduces your taxable gains to $5,000.
            </li>
            <li>
              <strong>Immediately repurchase (optional):</strong> You can buy Bitcoin again immediately since wash sale rules don't apply. You maintain your market exposure while harvesting the tax loss.
            </li>
          </ol>

          <h3 className="text-2xl font-bold mb-4 text-[#e6edf3]">
            Key Tax Rules for Crypto
          </h3>

          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 mb-6">
            <h4 className="font-semibold mb-3 text-[#e6edf3]">
              Capital Gains Tax Rates (2026)
            </h4>
            <ul className="list-disc list-inside text-[#c9d1d9] space-y-2 mb-4">
              <li><strong>Short-term gains (held ≤1 year):</strong> Taxed as ordinary income, up to 37% federal rate</li>
              <li><strong>Long-term gains (held &gt;1 year):</strong> Preferential rates of 0%, 15%, or 20% based on income</li>
              <li><strong>Capital losses:</strong> Always offset gains of the same character (short-term offsets short-term, long-term offsets long-term)</li>
              <li><strong>Excess losses deduction:</strong> Up to $3,000 per year can offset ordinary income</li>
            </ul>
            <p className="text-[#c9d1d9] text-sm italic text-[#8b949e]">
              State taxes vary. California adds ~13.3% to federal rates for high earners, while states like Texas have no income tax. Always factor in your state's tax rate.
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-[#e6edf3]">
            Cost Basis & Accounting Methods
          </h3>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            To calculate your loss (or gain), you need to establish your cost basis—the original purchase price plus fees. The IRS allows four accounting methods:
          </p>

          <ul className="list-disc list-inside text-[#c9d1d9] space-y-3 mb-6 leading-relaxed">
            <li>
              <strong>FIFO (First-In-First-Out):</strong> Sells oldest coins first. Simple but often results in larger gains if prices have risen. Default method if you don't specify.
            </li>
            <li>
              <strong>LIFO (Last-In-First-Out):</strong> Sells newest coins first. Better for tax optimization in rising markets. Requires IRS notification.
            </li>
            <li>
              <strong>Average Cost Basis:</strong> Uses average price of all purchases. Simplifies tracking for large portfolios.
            </li>
            <li>
              <strong>Specific ID:</strong> You identify exactly which coins to sell. Most tax-efficient but requires meticulous documentation.
            </li>
          </ul>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            For tax-loss harvesting, Specific ID method is ideal: you can deliberately sell your highest-cost, lowest-price-now coins to maximize losses. Most tax software automatically defaults to FIFO unless you specify otherwise.
          </p>
        </section>

        {/* Section 3: The Wash Sale Rule & Crypto */}
        <section id="wash-sale-rule" className="mb-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6 text-[#e6edf3]">
            3. The Wash Sale Rule & Crypto
          </h2>

          <p className="text-[#c9d1d9] mb-6 leading-relaxed">
            The wash sale rule is a critical distinction between crypto and stocks. Understanding this rule is essential for effective tax-loss harvesting.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-[#e6edf3]">
            What Is the Wash Sale Rule?
          </h3>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            The wash sale rule (Internal Revenue Code Section 1091) prevents taxpayers from claiming a loss deduction if they repurchase the same security within 30 days before or after the loss sale. The rule applies to stocks, bonds, and futures contracts traded on U.S. exchanges. If you trigger a wash sale, the loss is disallowed and added back to your cost basis in the repurchased security.
          </p>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            Example (stocks): You sell Apple at a $1,000 loss on December 15. You buy Apple again on December 25. This is a wash sale. The $1,000 loss is disallowed, and your new cost basis increases by $1,000.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-[#e6edf3]">
            Crypto Is NOT Subject to Wash Sale Rules (As of 2026)
          </h3>

          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 mb-6">
            <h4 className="font-semibold mb-3 text-[#e6edf3]">
              The Major Advantage of Crypto Tax-Loss Harvesting
            </h4>
            <p className="text-[#c9d1d9] mb-3 leading-relaxed">
              The IRS has ruled that cryptocurrency is property, not securities. Because wash sale rules only apply to securities, crypto is exempt. This means:
            </p>
            <ul className="list-disc list-inside text-[#c9d1d9] space-y-2 mb-4">
              <li>You can sell Bitcoin at a loss today and buy Bitcoin again tomorrow</li>
              <li>The tax loss is valid and fully deductible</li>
              <li>You maintain continuous market exposure without losing the deduction</li>
              <li>You can harvest losses without worrying about the 30-day window</li>
            </ul>
            <p className="text-[#c9d1d9] text-sm italic text-[#8b949e]">
              This is the single biggest advantage of crypto tax planning over stock tax planning. However, this advantage could disappear if Congress passes legislation to add crypto to wash sale rules.
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-[#e6edf3]">
            Future Risk: Proposed Legislation
          </h3>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            Congress has proposed multiple bills that would extend wash sale rules to cryptocurrency. The most notable is the "Cryptocurrency Wash Sale Rule Act," which would align crypto treatment with stocks. While no law has passed as of 2026, the regulatory environment is shifting. If such legislation passes (potentially retroactive to January 1, 2026 or later), the wash sale advantage disappears.
          </p>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            <strong>Practical implication:</strong> If you're planning large-scale tax-loss harvesting in 2026, execute it early rather than waiting. If wash sale rules are enacted mid-year, you want losses already realized. After enactment, you'll need to respect the 30-day window just like stock traders.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-[#e6edf3]">
            Form 1099-DA & IRS Reporting
          </h3>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            Starting in 2026, crypto exchanges and brokers issue Form 1099-DA (Digital Asset Return). This form reports:
          </p>

          <ul className="list-disc list-inside text-[#c9d1d9] space-y-2 mb-6 leading-relaxed">
            <li><strong>Box 1i (Capital gain/loss):</strong> Reportable transactions and capital gains/losses</li>
            <li><strong>Realized gains and losses:</strong> Per transaction</li>
            <li><strong>Cost basis:</strong> If the exchange tracked it</li>
            <li><strong>Holding period:</strong> Short-term vs. long-term classification</li>
          </ul>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            Critical note: Form 1099-DA is reported to the IRS, and the IRS will cross-check against your tax filing. Ensure your reported losses match your 1099-DA. Discrepancies trigger audits. If your exchange provides incorrect cost basis, you must correct it with amended documentation.
          </p>
        </section>

        {/* Section 4: Step-by-Step TLH Strategy */}
        <section id="step-by-step" className="mb-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6 text-[#e6edf3]">
            4. Step-by-Step TLH Strategy
          </h2>

          <p className="text-[#c9d1d9] mb-6 leading-relaxed">
            Here's a practical walkthrough of executing a tax-loss harvesting strategy:
          </p>

          <h3 className="text-2xl font-bold mb-4 text-[#e6edf3]">
            Step 1: Identify Unrealized Losses
          </h3>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            Review your portfolio and identify any positions trading below cost basis. Tools like Koinly or CoinTracker automatically flag unrealized losses.
          </p>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            Example portfolio:
          </p>

          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 mb-6">
            <ul className="text-[#c9d1d9] space-y-2">
              <li>Bitcoin: Purchased at $40,000, now $35,000 → <span className="text-red-400">$5,000 loss</span></li>
              <li>Ethereum: Purchased at $2,500, now $2,200 → <span className="text-red-400">$300 loss</span></li>
              <li>Solana: Purchased at $150, now $120 → <span className="text-red-400">$30 loss</span></li>
              <li>Uniswap: Purchased at $8, now $6 → <span className="text-red-400">$2 loss</span></li>
              <li>Aave: Purchased at $350, now $360 → <span className="text-green-400">$10 gain (skip)</span></li>
            </ul>
          </div>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            Total realizable losses: $5,332
          </p>

          <h3 className="text-2xl font-bold mb-4 text-[#e6edf3]">
            Step 2: Determine Your Tax Situation
          </h3>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            Calculate your year-to-date capital gains and losses:
          </p>

          <ul className="list-disc list-inside text-[#c9d1d9] space-y-3 mb-6 leading-relaxed">
            <li>Do you have capital gains you want to offset? If so, harvest losses equal to those gains.</li>
            <li>Do you exceed $3,000 in total losses? You can deduct $3,000 against ordinary income; carry the rest forward.</li>
            <li>Are most of your gains short-term or long-term? Prioritize harvesting matching losses.</li>
            <li>What's your marginal tax bracket? Higher earners benefit more from TLH.</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 text-[#e6edf3]">
            Step 3: Document Your Cost Basis
          </h3>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            Before selling, verify cost basis information. This includes:
          </p>

          <ul className="list-disc list-inside text-[#c9d1d9] space-y-2 mb-6 leading-relaxed">
            <li>Purchase date and amount paid (including fees)</li>
            <li>Exchange or wallet where purchased</li>
            <li>Current fair market value (use the price at time of sale)</li>
            <li>Holding period (short-term if ≤1 year, long-term if &gt;1 year)</li>
          </ul>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            Save all documentation: exchange statements, blockchain transaction hashes, and price screenshots. The IRS may request proof of your cost basis.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-[#e6edf3]">
            Step 4: Execute the Sale
          </h3>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            Sell the identified positions at market price. You can use market orders or limit orders. Record:
          </p>

          <ul className="list-disc list-inside text-[#c9d1d9] space-y-2 mb-6 leading-relaxed">
            <li>Sale date and time</li>
            <li>Quantity sold</li>
            <li>Sale price</li>
            <li>Realized gain or loss</li>
            <li>Any fees paid (subtracted from proceeds)</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 text-[#e6edf3]">
            Step 5: Immediately Rebuy (Optional)
          </h3>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            Since wash sale rules don't apply to crypto, you can immediately repurchase the same asset. You now own the same position but with a lower cost basis going forward, and you've harvested the tax loss.
          </p>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            Note: If you're concerned about price volatility (the asset might rally while you're rebuying), you have a few options:
          </p>

          <ul className="list-disc list-inside text-[#c9d1d9] space-y-2 mb-6 leading-relaxed">
            <li>Buy immediately to minimize gap risk</li>
            <li>Buy a similar asset (e.g., Bitcoin Cash if you sold Bitcoin) temporarily, then swap back after 30 days (no wash sale rule, but economic exposure differs)</li>
            <li>Accept the gap and skip the rebuy if you want to reduce exposure</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 text-[#e6edf3]">
            Step 6: Report on Your Taxes
          </h3>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            Use Form 8949 and Schedule D to report all sales. List:
          </p>

          <ul className="list-disc list-inside text-[#c9d1d9] space-y-2 mb-6 leading-relaxed">
            <li>Asset name (Bitcoin, Ethereum, etc.)</li>
            <li>Date acquired and date sold</li>
            <li>Proceeds (amount received from sale)</li>
            <li>Cost basis (amount paid)</li>
            <li>Gain or loss (proceeds minus basis minus fees)</li>
            <li>Long-term or short-term indicator</li>
          </ul>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            Group long-term sales separately from short-term sales. Losses are reported as negative gains. The total from Schedule D flows to your Form 1040 tax return.
          </p>
        </section>

        {/* Section 5: Short-Term vs. Long-Term Losses */}
        <section id="short-term-long-term" className="mb-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6 text-[#e6edf3]">
            5. Short-Term vs. Long-Term Losses
          </h2>

          <p className="text-[#c9d1d9] mb-6 leading-relaxed">
            The tax treatment of gains and losses depends on holding period. Understanding the distinction is crucial for optimizing TLH.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-[#e6edf3]">
            Holding Period Rules
          </h3>

          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 mb-6">
            <h4 className="font-semibold mb-3 text-[#e6edf3]">
              Short-Term: Held ≤1 Year
            </h4>
            <ul className="list-disc list-inside text-[#c9d1d9] space-y-2 mb-4">
              <li>Gains taxed as ordinary income: up to 37% federal + state taxes</li>
              <li>Losses offset short-term gains first</li>
              <li>Any remaining losses offset long-term gains (if no short-term gains available)</li>
              <li>Holding period resets on rebuy</li>
            </ul>

            <h4 className="font-semibold mb-3 text-[#e6edf3]">
              Long-Term: Held &gt;1 Year
            </h4>
            <ul className="list-disc list-inside text-[#c9d1d9] space-y-2">
              <li>Gains taxed at preferential rates: 0%, 15%, or 20% federal (depending on income)</li>
              <li>Losses offset long-term gains first</li>
              <li>Any remaining losses offset short-term gains (if no long-term gains available)</li>
              <li>More tax-efficient than short-term</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-[#e6edf3]">
            Tax Optimization Strategy
          </h3>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            Use this hierarchy to optimize taxes:
          </p>

          <ol className="list-decimal list-inside text-[#c9d1d9] space-y-3 mb-6 leading-relaxed">
            <li>
              <strong>Harvest short-term losses first:</strong> Short-term losses are more valuable because short-term gains are taxed at higher rates (ordinary income). Harvesting short-term losses saves the most in taxes.
            </li>
            <li>
              <strong>Use short-term losses to offset short-term gains:</strong> This prevents the highest tax hit. If you have a $10,000 short-term gain and a $5,000 short-term loss, harvest the loss to reduce taxable short-term gain to $5,000.
            </li>
            <li>
              <strong>Harvest long-term losses only if short-term gains exceed short-term losses:</strong> If you've eliminated all short-term gains with short-term losses, use remaining long-term losses only if you have long-term gains (less valuable tax-wise, but still beneficial).
            </li>
            <li>
              <strong>Carry losses forward strategically:</strong> If you have excess losses with no gains to offset, consider timing: harvest only what you can deduct ($3,000 against ordinary income), and carry the rest forward to future years when you expect gains.
            </li>
          </ol>

          <h3 className="text-2xl font-bold mb-4 text-[#e6edf3]">
            Example: Smart Loss Harvesting
          </h3>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            Year-to-date situation:
          </p>

          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 mb-6">
            <ul className="text-[#c9d1d9] space-y-2 mb-4">
              <li><strong>Short-term gains:</strong> $15,000</li>
              <li><strong>Long-term gains:</strong> $5,000</li>
              <li><strong>Short-term losses available:</strong> $8,000</li>
              <li><strong>Long-term losses available:</strong> $4,000</li>
            </ul>
            <p className="text-[#c9d1d9] mb-3 italic text-[#8b949e]">Strategy:</p>
            <ol className="list-decimal list-inside text-[#c9d1d9] space-y-2">
              <li>Harvest all $8,000 short-term losses. This reduces short-term gains from $15,000 to $7,000.</li>
              <li>Result: $7,000 taxed at ordinary rates + $5,000 long-term gains at preferential rates.</li>
              <li>Skip the $4,000 long-term losses. You have no remaining short-term gains to offset, and you'd prefer to use long-term losses only against long-term gains.</li>
              <li>Carry the $4,000 long-term losses forward to next year when you have long-term gains.</li>
            </ol>
            <p className="text-[#c9d1d9] mt-3 text-sm italic text-[#8b949e]">
              Tax savings: ~$2,400 federal (8,000 loss × 30% blended rate on short-term). This assumes a 37% federal bracket; lower income earners save proportionally less.
            </p>
          </div>
        </section>

        {/* Section 6: Tax-Loss Harvesting Tools & Software */}
        <section id="tools-software" className="mb-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6 text-[#e6edf3]">
            6. Tax-Loss Harvesting Tools & Software
          </h2>

          <p className="text-[#c9d1d9] mb-6 leading-relaxed">
            Manual tax tracking for crypto is tedious and error-prone. Specialized tools automate cost basis tracking, loss identification, and tax reporting.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-[#e6edf3]">
            Top Tax Software Platforms
          </h3>

          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 mb-6">
            <h4 className="font-semibold mb-3 text-[#e6edf3]">
              Koinly
            </h4>
            <p className="text-[#c9d1d9] mb-3 leading-relaxed">
              Koinly automates cost basis tracking across 500+ exchanges and wallets. It identifies unrealized losses and generates tax reports. Strengths: intuitive UI, handles DeFi, supports multiple accounting methods. Limitation: primarily US-focused initially, though expanding globally.
            </p>
          </div>

          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 mb-6">
            <h4 className="font-semibold mb-3 text-[#e6edf3]">
              CoinLedger
            </h4>
            <p className="text-[#c9d1d9] mb-3 leading-relaxed">
              CoinLedger focuses on comprehensive tax reporting including Form 1099-DA matching. It tracks Form 8949 items precisely and identifies losses for harvesting. Strengths: detailed US tax compliance, supports all accounting methods, integrates with major exchanges. Cost is higher than competitors.
            </p>
          </div>

          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 mb-6">
            <h4 className="font-semibold mb-3 text-[#e6edf3]">
              TokenTax
            </h4>
            <p className="text-[#c9d1d9] mb-3 leading-relaxed">
              TokenTax offers granular loss harvesting with TLH recommendations. It calculates optimal harvesting scenarios and estimates tax savings. Strengths: specialized in DeFi losses, includes CPA verification service, real-time loss recommendations. Limitation: steeper learning curve for complex portfolios.
            </p>
          </div>

          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 mb-6">
            <h4 className="font-semibold mb-3 text-[#e6edf3]">
              CoinTracker
            </h4>
            <p className="text-[#c9d1d9] mb-3 leading-relaxed">
              CoinTracker combines portfolio tracking with tax reporting. It syncs with exchanges automatically and identifies losses in real-time. Strengths: user-friendly, frequent updates for IRS changes, good for active traders. Limitation: less depth on TLH strategy than specialized platforms.
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-[#e6edf3]">
            How to Choose the Right Tool
          </h3>

          <ul className="list-disc list-inside text-[#c9d1d9] space-y-3 mb-6 leading-relaxed">
            <li>
              <strong>Portfolio size:</strong> Small portfolios (&lt;$100K) work fine with free tiers. Large portfolios benefit from paid plans with API integrations.
            </li>
            <li>
              <strong>Exchange complexity:</strong> If you trade on 5+ exchanges or use DeFi, choose platforms with robust multi-exchange support (Koinly, TokenTax).
            </li>
            <li>
              <strong>Accounting method:</strong> Need Specific ID or LIFO? Verify the tool supports it. Most default to FIFO.
            </li>
            <li>
              <strong>TLH features:</strong> If TLH is your primary focus, TokenTax and CoinLedger offer dedicated loss harvesting modules.
            </li>
            <li>
              <strong>Budget:</strong> Entry-level: $50-100/year. Mid-range: $300-500/year. Premium: $1,000+/year with CPA support.
            </li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 text-[#e6edf3]">
            Manual Tracking Alternative
          </h3>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            If you prefer control or have a small portfolio, track manually in a spreadsheet:
          </p>

          <ul className="list-disc list-inside text-[#c9d1d9] space-y-2 mb-6 leading-relaxed">
            <li>Columns: Asset, Purchase Date, Purchase Price, Purchase Amount (with fees), Current Price, Unrealized Gain/Loss</li>
            <li>Update prices weekly or monthly</li>
            <li>Sort by Unrealized Loss to identify candidates</li>
            <li>When you sell, record sale date, sale price, realized gain/loss, and holding period</li>
            <li>Aggregate losses by short-term/long-term for tax reporting</li>
          </ul>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            Trade-off: manual tracking is free but time-consuming and error-prone. Most investors benefit from automation.
          </p>
        </section>

        {/* Section 7: Common Mistakes to Avoid */}
        <section id="common-mistakes" className="mb-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6 text-[#e6edf3]">
            7. Common Mistakes to Avoid
          </h2>

          <p className="text-[#c9d1d9] mb-6 leading-relaxed">
            Tax-loss harvesting is straightforward in principle but fraught with pitfalls. Here are the most common mistakes:
          </p>

          <h3 className="text-2xl font-bold mb-4 text-[#e6edf3]">
            Forgetting or Miscalculating Cost Basis
          </h3>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            This is the #1 mistake. Many investors don't track cost basis properly, especially from years-old purchases or multiple exchanges. Result: you underestimate losses (reducing tax benefits) or overestimate (triggering audit red flags).
          </p>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            <strong>Solution:</strong> Reconcile all historical purchases before harvesting. Use block explorers to verify transaction dates if exchange records are lost. If you genuinely can't find cost basis, estimate conservatively and note the limitation on your tax return.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-[#e6edf3]">
            Not Documenting Sales
          </h3>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            Selling crypto without retaining records (screenshots, blockchain hashes, exchange confirmations) invites IRS challenges. The IRS will issue notices if your reported losses don't match their Form 1099-DA data.
          </p>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            <strong>Solution:</strong> Screenshot every transaction. Save exchange statements. Record blockchain transaction hashes. Keep these for at least 7 years (or indefinitely if you're paranoid).
          </p>

          <h3 className="text-2xl font-bold mb-4 text-[#e6edf3]">
            Over-Harvesting Losses in Low-Income Years
          </h3>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            If you have $20,000 in losses but only $5,000 in gains, harvesting all losses "wastes" $15,000 of losses. You can only deduct $3,000 against ordinary income; the rest carries forward, which may expire if you never have future gains.
          </p>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            <strong>Solution:</strong> In low-income years, harvest only what you can use: gains plus $3,000. Carry forward excess losses and harvest them strategically in high-gain years. If you expect no future gains, deduct losses gradually over years.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-[#e6edf3]">
            Ignoring State Taxes
          </h3>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            Federal tax benefits are meaningful, but state taxes can be equally significant. California residents pay ~13.3% state tax on capital gains. Investors in no-income-tax states (Texas, Florida, Nevada) benefit disproportionately.
          </p>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            <strong>Solution:</strong> Factor your state tax rate into TLH decisions. A loss worth $3,700 in federal taxes (37% rate) might be worth $1,900 in state taxes too. Prioritize harvesting accordingly.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-[#e6edf3]">
            Relying on Exchanges for Cost Basis
          </h3>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            Exchanges often provide incomplete or incorrect cost basis. Missing entries, double-counting, fees not deducted—these are rampant. Form 1099-DA may report inaccurate data, which cascades into your tax filing if you don't verify.
          </p>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            <strong>Solution:</strong> Independently verify cost basis. If your exchange's 1099-DA conflicts with your records, file Form 8949 with a note explaining discrepancies. Include supporting documentation. The IRS accepts corrections if you can justify them.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-[#e6edf3]">
            Failing to Account for Staking, Airdrops & Forks
          </h3>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            Staking rewards and airdrops are taxable income (not capital gains). If you received Ethereum staking rewards, they're ordinary income at the time received. Failing to report creates phantom income and inflates your tax liability without corresponding basis.
          </p>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            <strong>Solution:</strong> Track staking, airdrop, and hard-fork rewards separately. Report as income. Add value to cost basis for future tax calculations. This prevents double-taxation and ensures accurate loss harvesting.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-[#e6edf3]">
            Selling Wrong Assets
          </h3>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            Accidentally selling your winner (high gains) instead of your loser (harvesting losses). In volatile crypto markets, it's easy to panic-sell the wrong position.
          </p>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            <strong>Solution:</strong> Before selling, triple-check: verify you're selling the specific asset at the loss, not a similar ticker. Use limit orders to prevent slippage. Consider placing 2FA locks before large sales.
          </p>
        </section>

        {/* Section 8: Risks & Regulatory Outlook */}
        <section id="risks-regulatory" className="mb-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6 text-[#e6edf3]">
            8. Risks & Regulatory Outlook
          </h2>

          <p className="text-[#c9d1d9] mb-6 leading-relaxed">
            Tax-loss harvesting is a legitimate tax-planning tool, but the regulatory landscape is shifting. Understanding risks is critical for long-term compliance.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-[#e6edf3]">
            Risk 1: Wash Sale Rule Extension
          </h3>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            The primary risk is Congress extending wash sale rules to cryptocurrency. If enacted, you'd no longer be able to immediately rebuy the same asset after selling at a loss. This eliminates the major advantage of crypto over stock TLH.
          </p>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            <strong>Timeline uncertainty:</strong> No law has passed as of March 2026, but proposals are circulating. Potential effective dates range from 2026 to 2027. If enactment is retroactive, losses harvested in early 2026 might be disallowed if wash sales are detected.
          </p>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            <strong>Mitigation:</strong> Execute large TLH strategies early in 2026 before any law passes. Document your intent (that you were unaware of future wash sale rules). If rules are enacted, comply prospectively.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-[#e6edf3]">
            Risk 2: IRS Audits & Loss Substantiation
          </h3>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            Large losses attract IRS scrutiny. If you claim $50,000 in capital losses, expect scrutiny if your income and portfolio size seem inconsistent. The IRS will request documentation: cost basis, sale proofs, account statements.
          </p>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            <strong>Risk level:</strong> Moderate for documented portfolios, high for informal or untracked activity.
          </p>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            <strong>Mitigation:</strong> Keep detailed records. Use reputable tax software (Koinly, TokenTax) that generates audit-ready reports. If audited, respond promptly with documentation. Consider hiring a CPA familiar with crypto tax issues.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-[#e6edf3]">
            Risk 3: Form 1099-DA Mismatches
          </h3>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            Your reported loss might not match the 1099-DA your exchange filed with the IRS. If your software calculates a $5,000 loss but the exchange reported $3,000, the IRS will flag the discrepancy.
          </p>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            <strong>Mitigation:</strong> Before filing, reconcile your loss calculations against expected 1099-DA data. If discrepancies exist, file Form 8949 with explanatory notes. Include supporting documentation. The IRS accepts reasonable explanations (e.g., "Exchange omitted Fee; verified on blockchain as $XXX").
          </p>

          <h3 className="text-2xl font-bold mb-4 text-[#e6edf3]">
            Risk 4: Superficial Loss Rules
          </h3>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            While wash sale rules don't apply to crypto, the IRS could challenge harvested losses if it appears the activity has no substantial purpose other than tax avoidance. "Superficial loss" doctrine has been applied to aggressive trading strategies.
          </p>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            <strong>Risk level:</strong> Low if TLH is part of a coherent investment strategy; higher if you're harvesting losses solely for tax purposes with no economic rationale.
          </p>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            <strong>Mitigation:</strong> Ensure your harvested assets align with your investment thesis. Don't harvest losses from assets you believe in only to rebuy them moments later (unless you genuinely think they're undervalued). Document your strategy: why you're harvesting now, why the asset is a good rebuy.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-[#e6edf3]">
            2026 Regulatory Landscape
          </h3>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            In 2026, the crypto regulatory environment remains fluid:
          </p>

          <ul className="list-disc list-inside text-[#c9d1d9] space-y-3 mb-6 leading-relaxed">
            <li><strong>Form 1099-DA enforcement:</strong> IRS is actively matching reported crypto activity against 1099-DA filed by exchanges. Expect increased audit rates for discrepancies.</li>
            <li><strong>Wash sale rule proposals:</strong> Congressional bills continue circulating. Passage is plausible but not certain. Watch major crypto news outlets for updates.</li>
            <li><strong>Staking & rewards clarity:</strong> IRS has clarified that staking rewards are ordinary income, but treatment of proof-of-stake vs. other mechanisms may evolve.</li>
            <li><strong>DeFi tax guidance:</strong> Minimal official guidance exists. IRS is likely gathering data before issuing formal positions. Expect clarification 2027-2028.</li>
          </ul>
        </section>

        {/* Section 9: FAQ */}
        <section id="faq" className="mb-12 scroll-mt-20" aria-label="Frequently Asked Questions about crypto tax-loss harvesting">
          <h2 className="text-3xl font-bold mb-6 text-[#e6edf3]">
            9. Frequently Asked Questions
          </h2>

          <div className="space-y-6" role="list">
            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6" role="listitem">
              <h3 className="text-lg font-semibold mb-3 text-[#e6edf3]">
                What is crypto tax-loss harvesting and how does it work?
              </h3>
              <p className="text-[#c9d1d9] leading-relaxed">
                Tax-loss harvesting is the practice of intentionally selling crypto assets at a loss to offset capital gains from other profitable investments. When you sell an asset for less than you paid, you realize a capital loss that can be used to reduce your taxable gains, and in some cases, up to $3,000 of ordinary income per year. Any excess losses can be carried forward indefinitely to future years.
              </p>
            </div>

            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-[#e6edf3]">
                Does the wash sale rule apply to cryptocurrency in 2026?
              </h3>
              <p className="text-[#c9d1d9] leading-relaxed">
                As of 2026, the wash sale rule does NOT apply to cryptocurrency. The IRS treats crypto as property, not securities. This means you can sell a crypto asset at a loss and immediately repurchase the same asset without triggering wash sale violations. However, Congress has proposed legislation to add crypto to wash sale rules, so this could change in the future. Stay informed of regulatory updates.
              </p>
            </div>

            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-[#e6edf3]">
                How do I report crypto tax-loss harvesting to the IRS?
              </h3>
              <p className="text-[#c9d1d9] leading-relaxed">
                Tax-loss harvesting is reported on Form 8949 (Sales of Capital Assets) and Schedule D. You list each sale with the acquisition date, holding period, purchase price, sale price, and the realized loss. Long-term losses (held &gt;1 year) are reported separately from short-term losses. If you received a Form 1099-DA, use the information provided but double-check for accuracy.
              </p>
            </div>

            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-[#e6edf3]">
                What's the difference between short-term and long-term tax losses?
              </h3>
              <p className="text-[#c9d1d9] leading-relaxed">
                Short-term losses (assets held ≤1 year) offset short-term gains first, which are taxed at ordinary income rates (up to 37%). Long-term losses (assets held &gt;1 year) offset long-term gains first, taxed at preferential rates (0%, 15%, or 20%). Having losses in both categories allows strategic planning: use short-term losses to offset short-term gains, then long-term losses for long-term gains.
              </p>
            </div>

            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-[#e6edf3]">
                Can I immediately rebuy the same crypto I sold at a loss?
              </h3>
              <p className="text-[#c9d1d9] leading-relaxed">
                Yes. Because crypto is not subject to wash sale rules (as of 2026), you can sell Bitcoin at a $10K loss today and buy Bitcoin again tomorrow without losing the tax deduction. This is the major advantage of tax-loss harvesting in crypto compared to stocks. However, proposed legislation may change this, so always verify current rules.
              </p>
            </div>

            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-[#e6edf3]">
                What software should I use for crypto tax-loss harvesting?
              </h3>
              <p className="text-[#c9d1d9] leading-relaxed">
                Top options include Koinly (automated cost basis tracking), CoinLedger (comprehensive tax reporting), TokenTax (detailed IRS filing), and CoinTracker (portfolio + tax integration). Many offer features like loss harvesting recommendations and Form 1099-DA matching. Choose based on portfolio size, exchange complexity, and budget. Always verify your software's accuracy before filing.
              </p>
            </div>
          </div>

        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-03-24"
          updatedDate="2026-04-12"
          readingTime={17}
          section="learn"
        />

        </section>

        {/* Disclaimer */}
        <section className="mb-12 bg-[#d29922]/10 border border-[#d29922]/25 rounded-xl p-6" aria-label="Disclaimer">
          <h2 className="text-lg font-semibold mb-3 text-[#d29922]">
            ⚠️ Disclaimer
          </h2>
          <p className="text-[#c9d1d9] text-sm leading-relaxed">
            This guide is for educational purposes only and does not constitute financial, tax, or legal advice. Tax laws are complex and vary by jurisdiction. The information here reflects 2026 regulations but may change with new legislation. Tax-loss harvesting strategies should be tailored to your specific financial situation, income level, and holdings. Always consult with a qualified tax professional or CPA before implementing TLH strategies, filing your taxes, or making significant investment decisions. Past tax benefits don't guarantee future benefits. Crypto markets are highly volatile; losses from harvesting could be larger than anticipated. Neither degen0x nor this guide is liable for tax liabilities, audit costs, or investment losses resulting from strategies discussed herein.
          </p>
        </section>

        {/* Related Resources */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[#e6edf3]">
            Related Resources
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/tools/tax-calculator"
              className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 hover:border-[#58a6ff] transition-colors"
            >
              <h3 className="font-semibold text-[#58a6ff] mb-2">
                Crypto Tax Calculator
              </h3>
              <p className="text-[#c9d1d9] text-sm">
                Calculate your total crypto tax liability and estimated capital gains taxes
              </p>
            </Link>

            <Link href="/tools/tax-calculator"
            >
              <h3 className="font-semibold text-[#58a6ff] mb-2">
                P&L Calculator
              </h3>
              <p className="text-[#c9d1d9] text-sm">
                Track realized and unrealized profit/loss across your portfolio
              </p>
            </Link>

            <Link href="/tools/tax-calculator"
            >
              <h3 className="font-semibold text-[#58a6ff] mb-2">
                Crypto Regulations Guide 2026
              </h3>
              <p className="text-[#c9d1d9] text-sm">
                Stay compliant with current IRS rules, SEC guidelines, and regulatory changes
              </p>
            </Link>

            <Link href="/tools/tax-calculator"
            >
              <h3 className="font-semibold text-[#58a6ff] mb-2">
                Crypto Taxes Hub
              </h3>
              <p className="text-[#c9d1d9] text-sm">
                Resources for reporting, compliance, and tax planning strategies
              </p>
            </Link>

            <Link href="/tools/tax-calculator"
            >
              <h3 className="font-semibold text-[#58a6ff] mb-2">
                Portfolio Tracker
              </h3>
              <p className="text-[#c9d1d9] text-sm">
                Monitor holdings, identify gains, losses, and tax-loss harvesting opportunities
              </p>
            </Link>

            <Link href="/tools/tax-calculator"
            >
              <h3 className="font-semibold text-[#58a6ff] mb-2">
                Common Crypto Scams
              </h3>
              <p className="text-[#c9d1d9] text-sm">
                Protect yourself from fraud and verify legitimate tax tools and services
              </p>
            </Link>
          </div>
        </section>

        {/* Back to Top Button */}
        <BackToTop />
      
        {/* section-footer */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 8, padding: '16px 20px', marginTop: 40, marginBottom: 20 }}>
          <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: '#a78bfa' }}>Educational disclaimer:</strong> This guide is for informational purposes only and does not constitute financial advice.
            Crypto involves significant risk — do your own research before making any decisions. Learn more about <a href="/about" style={{ color: '#a78bfa' }}>our team</a>.
          </p>
        </div>
      
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Crypto Tax Loss Harvesting Guide 2026",
              "author": { "@type": "Organization", "name": "degen0x" },
              "publisher": { "@type": "Organization", "name": "degen0x", "url": "https://degen0x.com" },
              "datePublished": "2026-04-01",
              "dateModified": "2026-04-12",
              "mainEntityOfPage": "https://degen0x.com/learn/crypto-tax-loss-harvesting-guide-2026"
            })
          }}
        />
      </article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Crypto Tax-Loss Harvesting Guide 2026 \u2014 IRS Rules & Strategy", "description": "Master crypto tax-loss harvesting in 2026. Learn wash sale rules, IRS regulations, cost basis tracking, and strategic techniques to offset capital gains and", "url": "https://degen0x.com/learn/crypto-tax-loss-harvesting-guide-2026", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
</div>
  );
}
