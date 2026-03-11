import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Cost Basis Methods ${CURRENT_YEAR} - FIFO, LIFO, HIFO Explained`,
  description: `Learn crypto cost basis methods for ${CURRENT_YEAR}. FIFO, LIFO, HIFO, and Specific Identification explained with examples showing how each method affects your taxes.`,
  alternates: { canonical: "/taxes/learn/cost-basis-methods" },
};

const toc = [
  { id: "what-is-cost-basis", title: "What Is Cost Basis?", level: 2 },
  { id: "fifo", title: "FIFO (First In, First Out)", level: 2 },
  { id: "lifo", title: "LIFO (Last In, First Out)", level: 2 },
  { id: "hifo", title: "HIFO (Highest In, First Out)", level: 2 },
  { id: "choosing-method", title: "Choosing a Method", level: 2 },
];

const faqs = [
  { question: "What is the default cost basis method for crypto?", answer: "The IRS default is FIFO (First In, First Out), which assumes you sell your oldest units first. If you do not specify a method, FIFO is applied. However, you can use Specific Identification to choose which lots to sell, which allows LIFO, HIFO, or any other selection method." },
  { question: "Can I change my cost basis method?", answer: "You can change methods between tax years, but you cannot retroactively change the method for transactions already reported. Consistency within a tax year is recommended. If you use Specific Identification, you must designate which lots are being sold at the time of the transaction." },
  { question: "Which cost basis method saves the most on taxes?", answer: "HIFO (Highest In, First Out) typically minimizes current tax liability by selling your highest-cost units first, resulting in the smallest gains or largest losses. However, it means your remaining holdings have a lower average basis, potentially increasing future taxes. The best method depends on your overall tax strategy." },
];

export default function CostBasisMethodsPage() {
  return (
    <LearnPageLayout
      title="Crypto Cost Basis Methods Explained"
      categoryName="Crypto Taxes"
      categorySlug="taxes"
      readTime="10 min"
      intro="Your choice of cost basis method can significantly impact your crypto tax bill. Understanding the difference between FIFO, LIFO, HIFO, and Specific Identification helps you make informed decisions that optimize your tax position both now and in the future."
      toc={toc}
      faqs={faqs}
      relatedArticles={[
        { title: "Capital Gains Explained", href: "/taxes/learn/capital-gains", category: "Taxes" },
        { title: "Tax-Loss Harvesting", href: "/taxes/learn/tax-loss-harvesting", category: "Taxes" },
        { title: "How to File Crypto Taxes", href: "/taxes/learn/how-to-file", category: "Taxes" },
      ]}
    >
      <section id="what-is-cost-basis" className="mb-10">
        <h2>What Is Cost Basis?</h2>
        <p>
          Cost basis is the original value of an asset for tax purposes, typically the purchase
          price plus any fees. When you sell crypto, your capital gain or loss is calculated as
          the sale price minus the cost basis. If you purchased Bitcoin at $30,000 and sold at
          $50,000, your cost basis is $30,000 and your gain is $20,000.
        </p>
        <p>
          The complexity arises when you have purchased the same cryptocurrency at different
          times and prices. If you bought 1 BTC at $20,000 in January, 1 BTC at $40,000 in March,
          and 1 BTC at $30,000 in June, then sell 1 BTC in December, which cost basis do you use?
          This is where cost basis methods come in.
        </p>
      </section>

      <section id="fifo" className="mb-10">
        <h2>FIFO (First In, First Out)</h2>
        <p>
          FIFO assumes you sell your oldest units first. Using the example above, selling 1 BTC
          under FIFO would use the January purchase at $20,000 as the cost basis. If you sell
          at $50,000, your gain would be $30,000. FIFO is the IRS default method if you do not
          specify an alternative.
        </p>
        <p>
          FIFO tends to result in more long-term capital gains (since older lots are more likely
          to have been held over a year) and potentially larger gains (since older lots were often
          purchased at lower prices in a rising market). This makes FIFO less tax-efficient in
          bull markets but more favorable when you want to maximize long-term holding period
          treatment.
        </p>
      </section>

      <section id="lifo" className="mb-10">
        <h2>LIFO (Last In, First Out)</h2>
        <p>
          LIFO assumes you sell your most recently acquired units first. Selling 1 BTC under
          LIFO would use the June purchase at $30,000 as the cost basis. If you sell at $50,000,
          your gain would be $20,000, which is $10,000 less than under FIFO in this example.
        </p>
        <p>
          LIFO can be advantageous when recent purchases were at higher prices, resulting in
          smaller gains. However, LIFO transactions are more likely to generate short-term
          capital gains (taxed at higher rates) since the most recently purchased units are
          sold first. LIFO is implemented through Specific Identification in crypto.
        </p>
      </section>

      <section id="hifo" className="mb-10">
        <h2>HIFO (Highest In, First Out)</h2>
        <p>
          HIFO sells the units with the highest cost basis first, regardless of when they were
          purchased. Selling 1 BTC under HIFO would use the March purchase at $40,000 (the
          highest cost basis). If you sell at $50,000, your gain is only $10,000, the smallest
          gain of all three methods in this example.
        </p>
        <p>
          HIFO generally minimizes current-year tax liability, which is why many tax advisors
          recommend it. The trade-off is that your remaining units have lower cost bases, meaning
          larger gains when you eventually sell them. HIFO is implemented through Specific
          Identification and requires you to designate specific lots at the time of sale.
        </p>
      </section>

      <section id="choosing-method" className="mb-10">
        <h2>Choosing the Right Method</h2>
        <p>
          For most crypto investors, HIFO (via Specific Identification) minimizes current taxes
          and is often the best default choice. If you want to maximize long-term capital gains
          treatment, FIFO may be better since it sells older lots first. If you recently bought
          at high prices during a market peak, LIFO lets you use those high-basis lots.
        </p>
        <p>
          All crypto tax software supports multiple cost basis methods and can show you the tax
          impact of each before you commit. Run the calculations with different methods to see
          which produces the most favorable result for your specific situation. Apply your chosen
          method consistently within each tax year and document your choice.
        </p>
      </section>
    </LearnPageLayout>
  );
}
