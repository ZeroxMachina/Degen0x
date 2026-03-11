import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Taxes in Poland (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Complete guide to cryptocurrency taxes in Poland. Learn about the flat 19% tax rate, PIT-38 reporting, and how Polish crypto investors should file their taxes.",
};

export default function CryptoTaxesPolandPage() {
  return (
    <LearnPageLayout
      title="Crypto Taxes in Poland"
      categoryName="Crypto Taxes"
      categorySlug="taxes"
      readTime="8 min read"
      intro="Poland applies a straightforward flat 19% tax on cryptocurrency capital gains. Since 2019, Poland has had specific provisions for virtual currency taxation under the Personal Income Tax (PIT) Act. Crypto gains are classified as capital gains and reported separately from other income. The rules are relatively clear compared to many European countries, though DeFi and newer crypto activities present some interpretive challenges. This guide covers everything Polish crypto investors need to know for compliance."
      toc={[
        { id: "tax-rate", title: "The 19% Flat Tax Rate", level: 2 },
        { id: "taxable-events", title: "What Is Taxable", level: 2 },
        { id: "pit-38", title: "PIT-38 Reporting", level: 2 },
        { id: "loss-carryforward", title: "Loss Carry-Forward Rules", level: 2 },
        { id: "defi-special", title: "DeFi and Special Situations", level: 2 },
      ]}
      faqs={[
        { question: "What is the crypto tax rate in Poland?", answer: "Poland applies a flat 19% tax on net cryptocurrency capital gains. This rate applies to all crypto investors regardless of the amount of gain. It is reported separately from other income on the PIT-38 tax return." },
        { question: "Is crypto-to-crypto trading taxable in Poland?", answer: "No. Under Polish tax law, exchanging one virtual currency for another virtual currency is not a taxable event. Tax is only triggered when virtual currency is exchanged for legal tender (PLN, EUR, etc.), goods, services, or a property right other than virtual currency." },
        { question: "Can I deduct crypto losses in Poland?", answer: "Yes. If your crypto expenses (cost of acquisition) exceed your revenues in a given year, the resulting loss can be carried forward and deducted from crypto income over the next five tax years. However, the loss can only be used against crypto income, not other types of income." },
        { question: "When is the PIT-38 filing deadline?", answer: "The PIT-38 annual tax return must be filed by April 30th of the year following the tax year. For example, gains from the 2025 tax year must be reported by April 30, 2026. Late filing results in penalties and interest." },
      ]}
      relatedArticles={[
        { title: "Crypto Taxes in Sweden", href: "/taxes/learn/crypto-taxes-sweden", category: "Taxes" },
        { title: "Crypto Taxes in Norway", href: "/taxes/learn/crypto-taxes-norway", category: "Taxes" },
        { title: "Crypto Taxes in Ireland", href: "/taxes/learn/crypto-taxes-ireland", category: "Taxes" },
      ]}
    >
      <h2 id="tax-rate">The 19% Flat Tax Rate</h2>
      <p>
        Poland taxes cryptocurrency gains at a flat rate of 19% under Article 30b of the PIT Act. This rate applies uniformly regardless of the size of the gain, making it simple to calculate. The taxable amount is net revenue from the disposal of virtual currencies minus documented costs of acquisition. Revenue is recognized when crypto is exchanged for fiat currency (PLN or foreign), used to purchase goods or services, or exchanged for property rights other than virtual currency. The cost of acquisition includes the purchase price paid for the crypto plus directly related expenses such as exchange fees and transfer fees. This flat rate applies specifically to capital gains from virtual currencies and is separate from other capital gains (like stock profits), which are also taxed at 19% but reported in different sections of PIT-38.
      </p>

      <h2 id="taxable-events">What Is Taxable</h2>
      <p>
        Polish tax law specifically defines taxable events for virtual currencies. Selling crypto for fiat currency (any legal tender) is taxable. Using crypto to pay for goods or services is a taxable disposal. Exchanging crypto for property rights other than virtual currency (such as tokens classified as securities) is taxable. Critically, exchanging one virtual currency for another is not taxable under Polish law. This is a significant advantage for active traders who frequently rebalance between cryptocurrencies. Receiving crypto as payment for work or services creates income taxable under employment or business income provisions, not the virtual currency capital gains rules. Mining income is generally treated as business activity taxable under business income rules. Airdrops and forks that result in receiving new crypto are not immediately taxable but establish a zero cost basis.
      </p>

      <h2 id="pit-38">PIT-38 Reporting</h2>
      <p>
        Crypto gains are reported on the PIT-38 annual tax return, specifically in the section designated for virtual currency income. The return must be filed by April 30th following the tax year. You report total revenue from virtual currency disposals, total costs of acquisition, and the resulting net income or loss. If using the e-filing system (e-Deklaracje), the PIT-38 form includes specific fields for virtual currency income. You do not need to list individual transactions but must maintain records that support your reported totals. The tax office (Urzad Skarbowy) may request documentation during an audit. Keep records for at least five years after filing. Payment of the tax is due by the same April 30th deadline. Unlike some income types, there are no advance payment requirements for crypto gains during the tax year.
      </p>

      <h2 id="loss-carryforward">Loss Carry-Forward Rules</h2>
      <p>
        If your crypto acquisition costs exceed your revenue in a given tax year, you have a net loss from virtual currency activities. This loss can be carried forward for up to five years. In each subsequent year, you can deduct a portion of the carried loss from crypto income. However, the loss can only offset income from virtual currency activities, not from employment, business, or other capital gains. There is no provision for carrying losses back to prior years. To preserve the right to carry forward losses, you must properly report the loss on your PIT-38 in the year it occurs. The five-year window provides flexibility for recovery, but if you do not generate sufficient crypto income within five years, the remaining loss expires unused. Strategic timing of disposals can help manage loss utilization across tax years.
      </p>

      <h2 id="defi-special">DeFi and Special Situations</h2>
      <p>
        DeFi activities create interpretive challenges under Polish tax law. Swapping tokens through DEXs is generally treated the same as any crypto-to-crypto exchange and is therefore not immediately taxable. However, providing liquidity to pools and receiving LP tokens may involve exchanging crypto for a property right (the LP token), which could be taxable. Staking rewards are a gray area. If staking rewards are received as the same cryptocurrency you staked, they may be treated as additional virtual currency acquisition with a zero cost basis. Yield farming rewards in different tokens may be treated similarly. The National Tax Authority (KAS) has issued some individual interpretations (interpretacje indywidualne) on crypto topics, but comprehensive DeFi guidance is limited. Polish crypto tax software like CoinTracker and Koinly support PLN-based reporting and can generate data suitable for PIT-38 filing.
      </p>
    </LearnPageLayout>
  );
}
