import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Capital Gains Tax ${CURRENT_YEAR} - Short-Term vs Long-Term Rates`,
  description: `Understand crypto capital gains tax for ${CURRENT_YEAR}. Learn the difference between short-term and long-term rates, how to calculate gains, and strategies to minimize your tax bill.`,
  alternates: { canonical: "/taxes/learn/capital-gains" },
};

const toc = [
  { id: "what-are-capital-gains", title: "What Are Capital Gains?", level: 2 },
  { id: "short-term-vs-long-term", title: "Short-Term vs Long-Term", level: 2 },
  { id: "calculating-gains", title: "Calculating Gains", level: 2 },
  { id: "capital-losses", title: "Capital Losses", level: 2 },
  { id: "minimizing-taxes", title: "Minimizing Taxes", level: 2 },
];

const faqs = [
  { question: "What is the capital gains tax rate on crypto?", answer: "Short-term capital gains (held under one year) are taxed at your ordinary income rate, which ranges from 10% to 37%. Long-term capital gains (held over one year) are taxed at 0%, 15%, or 20% depending on your taxable income. High earners may also owe an additional 3.8% Net Investment Income Tax." },
  { question: "How do I calculate my crypto capital gains?", answer: "Subtract your cost basis (purchase price plus fees) from the sale price or fair market value at the time of disposal. If you bought 1 ETH for $2,000 and sold it for $3,500, your capital gain is $1,500. Crypto tax software automates this across thousands of transactions." },
  { question: "Can crypto losses offset other income?", answer: "Capital losses first offset capital gains. If you have more losses than gains, you can deduct up to $3,000 per year ($1,500 if married filing separately) against ordinary income. Any remaining losses carry forward to future tax years indefinitely." },
];

export default function CapitalGainsPage() {
  return (
    <LearnPageLayout
      title="Crypto Capital Gains Tax Explained"
      categoryName="Crypto Taxes"
      categorySlug="taxes"
      readTime="10 min"
      intro="Capital gains tax is the primary tax most crypto investors encounter. Understanding how it works, the difference between short-term and long-term rates, and strategies to minimize your liability can save you thousands of dollars each year."
      toc={toc}
      faqs={faqs}
      relatedArticles={[
        { title: "Tax-Loss Harvesting", href: "/taxes/learn/tax-loss-harvesting", category: "Taxes" },
        { title: "Cost Basis Methods", href: "/taxes/learn/cost-basis-methods", category: "Taxes" },
        { title: "How to File Crypto Taxes", href: "/taxes/learn/how-to-file", category: "Taxes" },
      ]}
    >
      <section id="what-are-capital-gains" className="mb-10">
        <h2>What Are Capital Gains?</h2>
        <p>
          A capital gain occurs when you dispose of a capital asset for more than you paid for it.
          In crypto, this happens when you sell tokens for fiat, trade one crypto for another, or
          use crypto to pay for goods and services. The gain is the difference between what you
          received and your cost basis (original purchase price plus transaction fees).
        </p>
        <p>
          Capital gains are only realized when you dispose of the asset. Unrealized gains from
          holding crypto that has increased in value are not taxable. This is why many investors
          choose a long-term holding strategy: you control when the taxable event occurs and can
          plan accordingly.
        </p>
      </section>

      <section id="short-term-vs-long-term" className="mb-10">
        <h2>Short-Term vs Long-Term</h2>
        <p>
          The holding period determines your tax rate. Crypto held for one year or less before
          disposal generates short-term capital gains, taxed at ordinary income rates up to 37%.
          Crypto held for more than one year generates long-term capital gains, taxed at
          preferential rates of 0%, 15%, or 20%.
        </p>
        <p>
          The difference is substantial. An investor in the 32% tax bracket would pay $3,200 in
          tax on a $10,000 short-term gain but only $1,500 on the same gain if held long-term
          (at the 15% rate). This 17 percentage point difference makes holding period one of the
          most impactful tax planning variables for crypto investors.
        </p>
      </section>

      <section id="calculating-gains" className="mb-10">
        <h2>Calculating Gains</h2>
        <p>
          For each disposal, calculate: Sale Price minus Cost Basis equals Capital Gain or Loss.
          Your cost basis includes the purchase price plus any fees paid to acquire the asset
          (exchange fees, gas fees, network fees). Your sale price is the fair market value of
          what you received minus any fees paid on the sale.
        </p>
        <p>
          When you have purchased the same crypto at different times and prices, you must use a
          cost basis method to determine which specific units you are selling. Common methods
          include FIFO (First In, First Out), LIFO (Last In, First Out), and Specific
          Identification. Your choice of method can significantly affect your tax liability.
        </p>
      </section>

      <section id="capital-losses" className="mb-10">
        <h2>Capital Losses</h2>
        <p>
          Capital losses are the silver lining of market downturns. When you sell crypto for less
          than your cost basis, the resulting loss can offset capital gains from other crypto
          sales, stock sales, or other capital assets. This netting process reduces your overall
          tax liability.
        </p>
        <p>
          If your total capital losses exceed your total capital gains, you can deduct up to
          $3,000 of the excess against ordinary income each year. Any remaining losses carry
          forward to future years indefinitely. Strategically realizing losses (tax-loss
          harvesting) is one of the most effective crypto tax strategies available.
        </p>
      </section>

      <section id="minimizing-taxes" className="mb-10">
        <h2>Strategies to Minimize Capital Gains Tax</h2>
        <p>
          Hold crypto for over one year to qualify for long-term rates. Use tax-loss harvesting to
          offset gains with losses. Donate appreciated crypto to charity for a deduction at fair
          market value without realizing the gain. Consider using specific identification to sell
          your highest-cost-basis lots first, minimizing gains.
        </p>
        <p>
          Time your disposals strategically. If you expect lower income next year, consider
          deferring sales. Use retirement accounts (some platforms offer crypto IRAs) for
          tax-deferred or tax-free growth. Above all, maintain excellent records and use crypto
          tax software to ensure accurate calculations across all your transactions.
        </p>
      </section>
    </LearnPageLayout>
  );
}
