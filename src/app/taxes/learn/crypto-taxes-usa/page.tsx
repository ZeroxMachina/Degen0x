import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Taxes in the USA: Complete Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Everything US residents need to know about cryptocurrency taxes. IRS rules, capital gains rates, taxable events, 1099-DA forms, and crypto tax software recommendations.",
  keywords: [
    "crypto taxes USA",
    "cryptocurrency tax US",
    "IRS crypto tax",
    "bitcoin taxes America",
    "crypto capital gains tax US",
    "1099-DA crypto",
  ],
};

export default function CryptoTaxesUSAPage() {
  return (
    <LearnPageLayout
      title="Crypto Taxes in the USA: What You Need to Know"
      categoryName="Crypto Taxes"
      categorySlug="taxes"
      readTime="15 min"
      intro="The IRS treats cryptocurrency as property, which means nearly every transaction can have tax implications. From capital gains on sales to income tax on mining rewards, understanding your obligations is essential for staying compliant. This guide covers all the key rules, rates, and reporting requirements for US crypto holders."
      toc={[
        { id: "irs-overview", title: "How the IRS Treats Cryptocurrency", level: 2 },
        { id: "taxable-events", title: "What Triggers a Taxable Event", level: 2 },
        { id: "capital-gains", title: "Capital Gains Tax Rates", level: 2 },
        { id: "income-tax", title: "Crypto as Income", level: 2 },
        { id: "reporting", title: "Reporting Requirements and 1099-DA", level: 2 },
        { id: "defi-nft-taxes", title: "DeFi, NFT, and Staking Taxes", level: 2 },
        { id: "tax-software", title: "Recommended Tax Software", level: 2 },
      ]}
      faqs={[
        {
          question: "Is buying crypto a taxable event in the US?",
          answer:
            "No. Simply purchasing cryptocurrency with USD is not a taxable event. Taxes are only triggered when you dispose of crypto: selling for USD, trading for another crypto, or spending crypto on goods and services.",
        },
        {
          question: "What happens if I do not report crypto to the IRS?",
          answer:
            "Failure to report crypto transactions can result in penalties, interest, and potential criminal charges for tax evasion. The IRS receives data from exchanges and uses blockchain analytics to identify unreported activity. Form 1040 now explicitly asks about crypto.",
        },
        {
          question: "Can I deduct crypto losses on my taxes?",
          answer:
            "Yes. Capital losses from crypto can offset capital gains from any source. If losses exceed gains, you can deduct up to $3,000 against ordinary income per year. Remaining losses carry forward to future years indefinitely.",
        },
        {
          question: "How is crypto-to-crypto trading taxed?",
          answer:
            "Every crypto-to-crypto trade is a taxable event. When you swap BTC for ETH, the IRS considers it as selling BTC (triggering capital gains) and buying ETH. You must calculate the gain or loss based on your cost basis in the crypto you sold.",
        },
        {
          question: "What records should I keep for crypto taxes?",
          answer:
            "Keep records of every transaction: date, amount, fair market value at time of transaction, cost basis, fees paid, and the purpose. Exchanges provide some data, but personal wallet transactions require your own tracking. Keep records for at least 3 years (6 if income is underreported by 25%+).",
        },
      ]}
      relatedArticles={[
        { title: "Best Crypto Tax Software", href: "/taxes/best/software", category: "Taxes" },
        { title: "How to Buy Crypto in the USA", href: "/exchanges/learn/how-to-buy-crypto-usa", category: "Exchanges" },
        { title: "US Crypto Regulation Guide", href: "/learn/crypto-regulation-usa", category: "Learn" },
      ]}
    >
      <h2 id="irs-overview">How the IRS Treats Cryptocurrency</h2>
      <p>
        The IRS classifies cryptocurrency as property, not currency. This means the same tax
        principles that apply to stocks, bonds, and real estate apply to crypto. Every time you
        dispose of crypto (sell, trade, spend), you must calculate the gain or loss based on
        your cost basis (what you originally paid). This classification was established in IRS
        Notice 2014-21 and has been reinforced through subsequent guidance.
      </p>

      <h2 id="taxable-events">What Triggers a Taxable Event</h2>
      <p>
        Taxable events include: selling crypto for fiat currency, trading one crypto for another,
        spending crypto on goods or services, receiving crypto as payment for work, mining
        rewards, staking rewards, airdrops, and earning interest from lending. Non-taxable
        events include: buying crypto with USD, transferring between your own wallets, and
        gifting crypto (though the recipient inherits your cost basis).
      </p>

      <h2 id="capital-gains">Capital Gains Tax Rates</h2>
      <p>
        Short-term capital gains (crypto held less than 1 year) are taxed at your ordinary
        income tax rate, which ranges from 10% to 37% depending on your tax bracket. Long-term
        capital gains (held over 1 year) receive preferential rates: 0% for taxable income up
        to $47,025 (single), 15% up to $518,900, and 20% above that. The long-term rates
        make holding for over a year significantly more tax-efficient.
      </p>

      <h2 id="income-tax">Crypto as Income</h2>
      <p>
        Cryptocurrency received as income is taxed at fair market value at the time of receipt.
        This applies to mining rewards, staking income, airdrops, salaries paid in crypto, and
        interest from lending platforms. The income is reported as ordinary income and the fair
        market value at receipt becomes your cost basis for future capital gains calculations.
      </p>

      <h2 id="reporting">Reporting Requirements and 1099-DA</h2>
      <p>
        Starting with tax year 2025, exchanges are required to issue Form 1099-DA, a new form
        specifically for digital asset transactions. This replaces the patchwork of 1099-MISC
        and 1099-B forms previously used. Form 1040 includes a question about digital assets
        that you must answer truthfully. Crypto transactions are reported on Schedule D and
        Form 8949.
      </p>

      <h2 id="defi-nft-taxes">DeFi, NFT, and Staking Taxes</h2>
      <p>
        DeFi transactions add complexity: liquidity pool deposits may be taxable swaps, yield
        farming rewards are income, and governance token airdrops are income at fair market value.
        NFT sales are subject to capital gains tax, and creating and selling NFTs generates
        ordinary income. Staking rewards are taxed as income when received, and subsequent sale
        triggers capital gains.
      </p>

      <h2 id="tax-software">Recommended Tax Software</h2>
      <p>
        Given the complexity of US crypto taxation, dedicated tax software is essential. Top
        options include CoinTracker (integrates with TurboTax), Koinly (comprehensive international
        support), TaxBit (used by major exchanges), and TokenTax (supports DeFi and NFTs).
        These tools import your exchange and wallet data, calculate gains using IRS-accepted
        methods (FIFO, LIFO, HIFO), and generate the required tax forms.
      </p>
    </LearnPageLayout>
  );
}
