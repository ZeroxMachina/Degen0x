import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Donations & Tax Deductions (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn how donating cryptocurrency affects your taxes. Understand charitable deductions, fair market value rules, and reporting requirements for crypto donations.",
  keywords: ["crypto donations taxes", "cryptocurrency charitable donation", "crypto tax deduction", "donate bitcoin taxes"],
};

export default function CryptoDonationsTaxesPage() {
  return (
    <LearnPageLayout
      title="Crypto Donations & Tax Deductions"
      categoryName="Taxes"
      categorySlug="taxes"
      readTime="8 min"
      intro="Donating cryptocurrency to qualified charitable organizations can be one of the most tax-efficient ways to give. When done correctly, you can deduct the full fair market value of appreciated crypto without paying capital gains tax on the appreciation. This guide covers the rules, requirements, and strategies for maximizing tax benefits from crypto donations."
      toc={[
        { id: "donation-basics", title: "Crypto Donation Tax Basics", level: 2 },
        { id: "deduction-rules", title: "Deduction Rules and Limits", level: 2 },
        { id: "how-to-donate", title: "How to Donate Crypto", level: 2 },
        { id: "reporting-donations", title: "Reporting Crypto Donations", level: 2 },
      ]}
      faqs={[
        { question: "Do I owe taxes when donating crypto?", answer: "No. Donating appreciated crypto to a qualified 501(c)(3) charity is not a taxable event. You do not pay capital gains tax on the appreciation, and you can deduct the fair market value of the donation. This makes donating crypto more tax-efficient than selling and donating cash." },
        { question: "Can I deduct the full value of donated crypto?", answer: "If you held the crypto for more than one year, you can deduct its full fair market value up to 30% of your adjusted gross income. For crypto held one year or less, the deduction is limited to your cost basis. Excess deductions can be carried forward for up to five years." },
      ]}
      relatedArticles={[
        { title: "Capital Gains Guide", href: "/taxes/learn/capital-gains", category: "Taxes" },
        { title: "Crypto Tax Guide", href: "/taxes/learn/crypto-tax-guide", category: "Taxes" },
      ]}
    >
      <section id="donation-basics">
        <h2>Crypto Donation Tax Basics</h2>
        <p>Donating cryptocurrency directly to a qualified charitable organization provides a double tax benefit. First, you avoid paying capital gains tax on any appreciation since the donation is not treated as a sale or disposition. Second, you receive a charitable deduction for the fair market value of the donated asset if you have held it for more than one year. This combination makes crypto donations particularly advantageous for long-term holders who have significant unrealized gains. For example, if you bought Bitcoin at $5,000 and it is now worth $50,000, selling would trigger $45,000 in capital gains. Donating directly allows you to deduct the full $50,000 value while avoiding the $45,000 gain entirely. The charity also benefits because it receives the full value without any tax reduction. This tax treatment applies to donations made to IRS-recognized 501(c)(3) organizations. Donations to individuals, political organizations, or foreign charities generally do not qualify for the charitable deduction. Verify the charity's status using the IRS Tax Exempt Organization Search tool before donating.</p>
      </section>
      <section id="deduction-rules">
        <h2>Deduction Rules and Limits</h2>
        <p>The charitable deduction for crypto donations depends on how long you held the asset and the type of organization receiving the donation. For crypto held longer than one year, you can deduct the fair market value at the time of donation, subject to a limit of 30% of your adjusted gross income for donations to public charities. Donations to private foundations are limited to 20% of AGI. For crypto held one year or less, the deduction is limited to your cost basis, not the fair market value. This means short-term holders lose the appreciation benefit. If your donation exceeds the AGI percentage limit, you can carry the excess forward for up to five tax years. The fair market value for publicly traded crypto is typically the price on the date and time of the transfer. For NFTs, tokens with limited liquidity, or other crypto assets that are difficult to value, a qualified independent appraisal may be required for donations over $5,000. The appraisal must be completed no earlier than 60 days before the donation and no later than the due date of the tax return. These rules make proper documentation essential for any significant crypto donation.</p>
      </section>
      <section id="how-to-donate">
        <h2>How to Donate Crypto</h2>
        <p>Several platforms and organizations facilitate crypto donations. The Giving Block is a major platform that connects crypto donors with hundreds of nonprofits and handles the technical aspects of receiving crypto donations. Many large charities now accept crypto directly through their own wallets. Donor-advised funds from providers like Fidelity Charitable, Schwab Charitable, and specialized crypto DAFs allow you to donate crypto, receive an immediate tax deduction, and then recommend grants to specific charities over time. Using a DAF provides flexibility in timing your deduction separately from your charitable giving decisions. To donate directly, send the crypto from your wallet to the charity's designated address. Ensure you have documentation of the transfer including the transaction hash, date, time, amount, and fair market value at the time of transfer. Do not sell the crypto first and then donate cash, as selling triggers the capital gains tax that direct donation avoids. For donations over $250, obtain a written acknowledgment from the charity. For non-cash donations over $500, file Form 8283 with your tax return. For donations over $5,000 of property other than publicly traded crypto, a qualified appraisal is required.</p>
      </section>
      <section id="reporting-donations">
        <h2>Reporting Crypto Donations</h2>
        <p>Crypto donations are reported as itemized deductions on Schedule A of your tax return. You must itemize deductions rather than taking the standard deduction to benefit from charitable contributions. For crypto donations valued at more than $500, complete Section A of Form 8283, which requires information about the donated property including a description, date acquired, cost basis, fair market value, and how the value was determined. For donations exceeding $5,000 of non-publicly-traded crypto, Section B of Form 8283 is required along with a qualified appraisal. Bitcoin, Ethereum, and other major cryptocurrencies traded on established exchanges are generally considered publicly traded for these purposes, while obscure tokens, NFTs, and limited-liquidity assets may require appraisals. Keep the charity's written acknowledgment letter, transaction records showing the transfer, and your determination of fair market value. If the IRS questions your deduction, having comprehensive documentation is essential. Tax software like TurboTax and H&R Block can handle the basic reporting, but for complex crypto donations involving NFTs, multiple assets, or large amounts, working with a tax professional is recommended.</p>
      </section>
    </LearnPageLayout>
  );
}
