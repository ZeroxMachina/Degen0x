import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Donations: Tax Benefits and How-To (${CURRENT_YEAR}) | degen0x`,
  description: "Guide to donating cryptocurrency. Tax benefits, eligible charities, donation process, and how to maximize your impact with crypto charitable giving.",
};

export default function CryptoDonationsPage() {
  return (
    <LearnPageLayout title="Crypto Donations: Tax Benefits and How-To" categoryName="Crypto Spending" categorySlug="spending" readTime="8 min read"
      intro="Donating cryptocurrency to charity can be one of the most tax-efficient forms of charitable giving. When you donate appreciated crypto directly to a qualified charity, you may receive a tax deduction for the full fair market value while avoiding capital gains tax on the appreciation. This double benefit makes crypto donations an attractive option for holders with significant unrealized gains who want to support causes they care about."
      toc={[
        { id: "tax-benefits", title: "tax-benefits", level: 2 },
        { id: "tax-benefits-of-crypto-donations", title: "Tax Benefits of Crypto Donations", level: 2 },
        { id: "how-to-donate", title: "how-to-donate", level: 2 },
        { id: "how-to-donate-crypto", title: "How to Donate Crypto", level: 2 },
        { id: "platforms", title: "platforms", level: 2 },
        { id: "donation-platforms", title: "Donation Platforms", level: 2 },
        { id: "best-practices", title: "best-practices", level: 2 },
        { id: "best-practices", title: "Best Practices", level: 2 }
      ]}
      faqs={[
        { question: "What are the tax benefits of donating crypto?", answer: "In the US, if you donate cryptocurrency held for more than one year to a qualified 501(c)(3) charity, you can deduct the full fair market value of the donation and pay no capital gains tax on the appreciation. For example, if you bought Bitcoin at $10,000 and donate it when it is worth $60,000, you get a $60,000 deduction and avoid $50,000 in taxable capital gains." },
        { question: "Which charities accept crypto?", answer: "Many major charities now accept crypto directly, including the Red Cross, Save the Children, United Way, and hundreds of others. Platforms like The Giving Block and Gitcoin facilitate crypto donations to thousands of organizations. Some universities, hospitals, and cultural institutions also accept crypto donations. Check with your preferred charity or use a donation platform." },
        { question: "Do I need an appraisal for crypto donations?", answer: "In the US, if your crypto donation exceeds $5,000, you must obtain a qualified appraisal for tax deduction purposes. For donations between $500 and $5,000, you need to complete IRS Form 8283. For donations under $500, standard record-keeping is sufficient. Crypto donation platforms often provide the necessary documentation and valuation records." },
      ]}
      relatedArticles={[
        { title: "Crypto Tipping", href: "/spending/learn/crypto-tipping", category: "Spending" },
        { title: "Crypto Inheritance Planning", href: "/long-term/learn/crypto-inheritance-planning", category: "Long-Term" },
        { title: "Crypto Budgeting", href: "/spending/learn/crypto-budgeting", category: "Spending" },
      ]}
    >
      <h2 id="tax-benefits">Tax Benefits of Crypto Donations</h2>
      <p>Donating appreciated cryptocurrency is more tax-efficient than selling the crypto and donating cash. Here is why: if you sell Bitcoin that you bought for $10,000 at its current value of $60,000, you owe capital gains tax on the $50,000 gain (potentially $10,000-15,000 in federal taxes depending on your bracket and holding period). After taxes, you have approximately $45,000-50,000 to donate. But if you donate the Bitcoin directly to a qualified charity, you avoid the capital gains tax entirely and receive a charitable deduction for the full $60,000 fair market value. The charity receives the full $60,000, and you save both the capital gains tax and receive the full deduction. This only applies to crypto held for more than one year (long-term capital gains property). Short-term holdings (held less than one year) can still be donated, but the deduction is limited to your cost basis rather than the fair market value. The deduction for long-term appreciated property is limited to 30% of your adjusted gross income, with a five-year carryforward for any excess. Plan large donations with your tax advisor to optimize the timing and amount across tax years.</p>

      <h2 id="how-to-donate">How to Donate Crypto</h2>
      <p>The donation process is straightforward. First, confirm that your chosen charity is a qualified tax-exempt organization (501(c)(3) in the US). Check whether they accept crypto directly or through a donation platform. If the charity accepts crypto directly, they will provide a wallet address. Send the cryptocurrency from your wallet to the charity&apos;s wallet address. Record the transaction hash, the date, the amount of crypto sent, and the fair market value at the time of transfer. If the charity does not accept crypto directly, use a crypto donation platform that acts as an intermediary: you send crypto to the platform, they convert it and forward the fiat to the charity, and provide you with a donation receipt. For tax purposes, document everything: the date of donation, the fair market value at the time of donation (use a recognized exchange rate), the amount of cryptocurrency donated, the transaction hash proving the transfer, and the charity&apos;s acknowledgment letter. For donations over $250, you need a written acknowledgment from the charity. For donations over $5,000, you need a qualified appraisal.</p>

      <h2 id="platforms">Donation Platforms</h2>
      <p>Several platforms specialize in facilitating crypto charitable donations. The Giving Block is the largest crypto donation platform, connecting donors with over 1,000 nonprofits. They handle the conversion process, provide tax receipts, and support dozens of cryptocurrencies. Many well-known charities use The Giving Block as their crypto donation infrastructure. Gitcoin focuses on funding open-source software and public goods in the Ethereum ecosystem. Their quadratic funding mechanism amplifies small donations, meaning even modest contributions have outsized impact. Endaoment is a community foundation built on Ethereum that allows donors to create donor-advised funds (DAFs) with cryptocurrency. A crypto DAF allows you to take the tax deduction immediately when you contribute crypto to the fund, then distribute grants to charities of your choice over time. This is particularly useful for large donations that you want to distribute across multiple organizations and years. Every.org allows crypto donations to any US nonprofit. BitPay enables merchants to accept crypto donations alongside regular crypto payments. For international giving, platforms like GiveDirectly accept crypto for direct cash transfers to people in extreme poverty.</p>

      <h2 id="best-practices">Best Practices</h2>
      <p>Maximize your donation impact with these strategies. Donate your most appreciated assets first: if you hold multiple crypto positions, donating the ones with the highest unrealized gains provides the largest tax benefit. Bunch donations into a single tax year if you plan to itemize deductions, then use the standard deduction in other years. This alternating strategy maximizes the tax benefit of charitable giving. Consider a donor-advised fund (DAF) for flexibility: contribute a large amount of appreciated crypto in a single year for the full tax deduction, then distribute to charities over multiple years. This works well if you have a large one-time windfall (like a successful crypto position). Verify the charity&apos;s legitimacy before donating: check their tax-exempt status, review their financial reports on Charity Navigator or GuideStar, and confirm that the wallet address you send to is genuinely controlled by the organization. Be cautious of charity scams that impersonate legitimate organizations. Time your donations strategically: donating before year-end locks in the deduction for the current tax year. If you expect a higher income next year, consider delaying the donation for a larger tax benefit. Consult with a tax advisor to integrate crypto donations into your overall tax and estate planning strategy.</p>
    </LearnPageLayout>
  );
}
