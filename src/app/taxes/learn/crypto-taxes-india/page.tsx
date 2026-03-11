import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Taxes in India (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Complete guide to cryptocurrency taxes in India. Learn about the flat 30% tax on crypto gains, 1% TDS, no loss offset rules, and Section 115BBH reporting requirements.",
  keywords: ["crypto taxes India", "crypto tax India 30%", "TDS crypto India", "cryptocurrency tax India"],
};

export default function CryptoTaxesIndiaPage() {
  return (
    <LearnPageLayout
      title="Crypto Taxes in India"
      categoryName="Crypto Taxes"
      categorySlug="taxes"
      readTime="10 min read"
      intro="India introduced a comprehensive crypto tax framework in the 2022 Union Budget that imposes a flat 30 percent tax on all Virtual Digital Asset (VDA) gains with no deductions allowed except the cost of acquisition. Combined with a 1 percent Tax Deducted at Source (TDS) on all crypto transfers and the inability to offset losses, India has one of the most stringent crypto tax regimes globally."
      toc={[
        { id: "framework", title: "India's Crypto Tax Framework", level: 2 },
        { id: "flat-tax", title: "The 30% Flat Tax on Gains", level: 2 },
        { id: "tds", title: "1% TDS on Transfers", level: 2 },
        { id: "loss-rules", title: "No Loss Offset Rules", level: 2 },
        { id: "reporting", title: "ITR Filing & Compliance", level: 2 },
        { id: "planning", title: "Tax Planning Strategies", level: 2 },
      ]}
      faqs={[
        { question: "Is crypto taxed at 30% in India?", answer: "Yes. All gains from Virtual Digital Assets are taxed at a flat 30 percent rate under Section 115BBH, plus applicable surcharge and 4 percent health and education cess. This rate applies regardless of your income tax slab or holding period." },
        { question: "Can I offset crypto losses against crypto gains?", answer: "No. Losses from one cryptocurrency cannot be set off against gains from another cryptocurrency, and crypto losses cannot be set off against any other income. Losses also cannot be carried forward to future years. Each transaction is taxed independently." },
        { question: "What is the 1% TDS on crypto?", answer: "Under Section 194S, a 1 percent Tax Deducted at Source applies to all crypto transfers exceeding 10,000 INR per year (50,000 INR for specified persons). Indian exchanges deduct this automatically. The TDS can be claimed as a credit when filing your income tax return." },
        { question: "Is crypto-to-crypto trading taxable in India?", answer: "Yes. Exchanging one VDA for another is a taxable transfer. The gain is calculated as the fair market value of the received asset minus the cost of acquisition of the transferred asset, taxed at the flat 30 percent rate." },
      ]}
      relatedArticles={[
        { title: "Best Crypto Tax Software", href: "/taxes/best/software", category: "Taxes" },
        { title: "Airdrop Tax Guide", href: "/taxes/learn/airdrop-tax-guide", category: "Taxes" },
        { title: "Staking Rewards Taxes", href: "/taxes/learn/staking-rewards-taxes", category: "Taxes" },
      ]}
    >
      <h2 id="framework">India&apos;s Crypto Tax Framework</h2>
      <p>
        India&apos;s crypto tax framework was introduced through the Finance Act 2022, adding Section 115BBH to the Income Tax Act. The framework defines Virtual Digital Assets (VDAs) broadly to include cryptocurrencies, NFTs, and other digital assets. The rules took effect from April 1, 2022, for the 2022-23 assessment year. The framework was designed to be comprehensive and straightforward but is widely considered punitive due to the flat high rate, no loss offset provisions, and the TDS mechanism that creates liquidity challenges for active traders.
      </p>

      <h2 id="flat-tax">The 30% Flat Tax on Gains</h2>
      <p>
        All gains from the transfer of VDAs are taxed at a flat 30 percent rate under Section 115BBH, plus applicable surcharge and 4 percent health and education cess, bringing the effective rate to approximately 31.2 percent for most taxpayers. The only deduction allowed is the cost of acquisition of the specific asset being transferred. No other deductions are permitted, including trading fees, gas fees, or any expenses related to the transaction. The flat rate applies regardless of your income tax slab, holding period, or whether the gain is short-term or long-term. There is no distinction between casual investors and frequent traders.
      </p>

      <h2 id="tds">1% TDS on Transfers</h2>
      <p>
        Section 194S mandates a 1 percent Tax Deducted at Source on all VDA transfers exceeding 10,000 INR per year for regular taxpayers, or 50,000 INR for specified persons including those whose income is already subject to tax audit. Indian exchanges like WazirX, CoinDCX, and CoinSwitch deduct the TDS automatically on each trade. For peer-to-peer transactions, the buyer is responsible for deducting and depositing the TDS. The TDS creates a cash flow impact for active traders as the deduction happens on the full transaction value, not just the profit. However, the TDS amount can be claimed as a credit against your total tax liability when filing your ITR.
      </p>

      <h2 id="loss-rules">No Loss Offset Rules</h2>
      <p>
        One of the most significant aspects of India&apos;s crypto tax regime is the strict prohibition on loss offsets. Losses from one VDA cannot be set off against gains from another VDA within the same year. For example, if you lose 50,000 INR on Ethereum but gain 100,000 INR on Bitcoin, you owe tax on the full 100,000 INR gain. The Ethereum loss provides no tax benefit. Additionally, crypto losses cannot offset any other income category such as salary, business income, or capital gains from stocks. Losses cannot be carried forward to future assessment years. This makes each VDA transaction effectively independent for tax purposes.
      </p>

      <h2 id="reporting">ITR Filing &amp; Compliance</h2>
      <p>
        Crypto gains are reported in Schedule VDA of your Income Tax Return. You must declare each VDA transfer separately, including the date of transfer, date of acquisition, cost of acquisition, sale consideration, and the resulting income. The applicable ITR form is typically ITR-2 or ITR-3 depending on your other income sources. The assessment year runs from April 1 to March 31, with the filing deadline typically in July for non-audit cases. Gifts of VDAs are taxable in the hands of the recipient under Section 56(2)(x) if the aggregate value exceeds 50,000 INR. The Income Tax Department has been actively tracking crypto transactions through exchange data.
      </p>

      <h2 id="planning">Tax Planning Strategies</h2>
      <p>
        Given the stringent rules, tax planning options are limited. Investors can focus on minimizing the number of taxable events by adopting a long-term buy-and-hold approach rather than frequent trading. Since the TDS applies per transaction, reducing trade frequency also reduces the cash flow impact. Some investors use SIP-style (Systematic Investment Plan) approaches to build positions gradually. Maintaining meticulous records of acquisition costs is critical since this is the only allowable deduction. Using dedicated crypto tax software that integrates with Indian exchanges helps ensure accurate reporting and TDS tracking. Consulting a chartered accountant familiar with VDA taxation is advisable for significant holdings.
      </p>
    </LearnPageLayout>
  );
}
