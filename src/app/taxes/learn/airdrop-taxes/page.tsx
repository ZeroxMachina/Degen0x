import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Airdrop Taxes ${CURRENT_YEAR} - How Airdrops Are Taxed`,
  description: `Learn how crypto airdrops are taxed in ${CURRENT_YEAR}. IRS rules on airdrop income, how to calculate fair market value, and reporting requirements.`,
  alternates: { canonical: "/taxes/learn/airdrop-taxes" },
};

const toc = [
  { id: "airdrop-basics", title: "Airdrop Tax Basics", level: 2 },
  { id: "when-taxable", title: "When Airdrops Become Taxable", level: 2 },
  { id: "valuation", title: "Determining Fair Market Value", level: 2 },
  { id: "claiming-strategies", title: "Claiming Strategies", level: 2 },
  { id: "reporting-airdrops", title: "Reporting Airdrops", level: 2 },
];

const faqs = [
  { question: "Are crypto airdrops taxable?", answer: "Yes. The IRS treats airdrops as ordinary income, taxable at the fair market value when you gain dominion and control over the tokens. This means you owe income tax on the value of airdropped tokens even if you did not ask for them, as long as you can access and sell them." },
  { question: "What if I receive an airdrop for a worthless token?", answer: "If the airdropped token has no market value (cannot be sold or exchanged), you can report it as $0 income. Many spam airdrops and scam tokens fall into this category. However, if the token later gains value and you sell it, the entire sale proceeds become a capital gain since your cost basis is $0." },
  { question: "Can I avoid airdrop taxes by not claiming?", answer: "Potentially. If an airdrop requires you to actively claim tokens and you choose not to claim them, you have not gained dominion and control, so no tax event occurs. However, if tokens are sent directly to your wallet without any action on your part, you may owe tax upon receipt regardless." },
];

export default function AirdropTaxesPage() {
  return (
    <LearnPageLayout
      title="How Crypto Airdrops Are Taxed"
      categoryName="Crypto Taxes"
      categorySlug="taxes"
      readTime="8 min"
      intro="Airdrops can be exciting windfall events, but they come with tax obligations. Whether you receive a governance token airdrop from a DeFi protocol or unsolicited tokens in your wallet, understanding the tax implications helps you plan accordingly and avoid surprises at filing time."
      toc={toc}
      faqs={faqs}
      relatedArticles={[
        { title: "How Crypto Is Taxed", href: "/taxes/learn/how-crypto-is-taxed", category: "Taxes" },
        { title: "DeFi Taxes", href: "/taxes/learn/defi-taxes", category: "Taxes" },
        { title: "Reporting Requirements", href: "/taxes/learn/reporting-requirements", category: "Taxes" },
      ]}
    >
      <section id="airdrop-basics" className="mb-10">
        <h2>Airdrop Tax Basics</h2>
        <p>
          The IRS treats airdropped cryptocurrency as ordinary income. When you receive tokens
          via an airdrop, the fair market value at the time you gain dominion and control is
          taxable income. This value also becomes your cost basis for future capital gains
          calculations when you sell those tokens.
        </p>
        <p>
          This applies to all types of airdrops: governance token distributions (like UNI or ARB),
          hard fork tokens, retroactive rewards, and promotional drops. The tax treatment is
          the same regardless of whether you expected the airdrop or it arrived unexpectedly in
          your wallet.
        </p>
      </section>

      <section id="when-taxable" className="mb-10">
        <h2>When Airdrops Become Taxable</h2>
        <p>
          The critical factor is dominion and control. For airdrops that require claiming (like
          most governance token airdrops), the taxable event occurs when you claim the tokens,
          not when the airdrop is announced. If you never claim, no tax event occurs. This gives
          you some ability to time the recognition of income.
        </p>
        <p>
          For airdrops sent directly to your wallet without any action required, taxation occurs
          when the tokens appear in your wallet and you have the ability to transfer or sell them.
          If tokens are locked or vesting, taxation may be deferred until they become transferable.
          The specific facts of each airdrop matter, so review the terms carefully.
        </p>
      </section>

      <section id="valuation" className="mb-10">
        <h2>Determining Fair Market Value</h2>
        <p>
          Use the trading price on a major exchange at the time of receipt to determine fair
          market value. For new tokens that have just launched, prices may be highly volatile in
          the first hours and days. Using the price at the exact time of claiming (or receipt)
          is the most defensible approach.
        </p>
        <p>
          If the token is not yet trading on any exchange at the time of receipt, determining
          fair market value is difficult. Some approaches include using OTC prices, pre-market
          trading prices, or even reporting $0 if there is genuinely no market. Document your
          valuation methodology in case of an IRS inquiry. Conservative approaches are generally
          safer.
        </p>
      </section>

      <section id="claiming-strategies" className="mb-10">
        <h2>Tax-Smart Claiming Strategies</h2>
        <p>
          Since claimable airdrops let you control when the taxable event occurs, consider
          timing your claim strategically. If you expect to be in a lower tax bracket in the
          current year, claiming sooner may result in a lower tax rate. If the token price is
          dropping, waiting may reduce your income amount.
        </p>
        <p>
          Be aware of claim deadlines. Many airdrops expire after a set period (often 6-12
          months). Missing the deadline means losing the tokens entirely. Weigh the tax
          implications against the risk of price changes and expiration. If the airdrop is
          significant, consider selling enough tokens upon claiming to cover your estimated
          tax liability.
        </p>
      </section>

      <section id="reporting-airdrops" className="mb-10">
        <h2>Reporting Airdrops</h2>
        <p>
          Report airdrop income on Schedule 1 (Additional Income) of your tax return. Include
          the fair market value of all airdrops received during the tax year. When you later
          sell the airdropped tokens, report the capital gain or loss on Form 8949 using the
          income amount as your cost basis.
        </p>
        <p>
          Crypto tax software like Koinly and CryptoTaxCalculator can automatically detect many
          airdrop events by analyzing on-chain transaction data. However, you may need to manually
          classify some airdrops, especially for newer protocols. Keep records of the airdrop
          source, claim date, token amount, and the price source you used for valuation.
        </p>
      </section>
    </LearnPageLayout>
  );
}
