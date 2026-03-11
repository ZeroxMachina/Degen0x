import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `IRS Form 8949 for Crypto ${CURRENT_YEAR} - How to Fill It Out`,
  description: `Learn how to fill out IRS Form 8949 for cryptocurrency in ${CURRENT_YEAR}. Line-by-line guide with examples for reporting crypto sales and trades.`,
  alternates: { canonical: "/taxes/learn/irs-form-8949" },
};

const toc = [
  { id: "what-is-8949", title: "What Is Form 8949?", level: 2 },
  { id: "when-needed", title: "When You Need It", level: 2 },
  { id: "filling-it-out", title: "How to Fill It Out", level: 2 },
  { id: "categories", title: "Box A, B, and C", level: 2 },
  { id: "schedule-d", title: "Schedule D Connection", level: 2 },
];

const faqs = [
  { question: "Do I need Form 8949 for every crypto trade?", answer: "Yes. Every sale, trade, or disposal of cryptocurrency should be reported on Form 8949. This includes crypto-to-crypto trades, crypto-to-fiat sales, using crypto to buy goods or services, and any other disposition. If you have hundreds of trades, you can attach a statement with the same information." },
  { question: "What if I do not have cost basis information?", answer: "You should make a reasonable effort to determine your cost basis using exchange records, blockchain data, and historical price data. If you truly cannot determine cost basis, you may use $0, but this results in the entire sale proceeds being treated as gain. Crypto tax software can often reconstruct cost basis from blockchain data." },
  { question: "Can I use a summary instead of listing every trade?", answer: "If you have many transactions, you can enter summary totals on Form 8949 and attach a detailed statement listing all individual transactions. The statement must include the same information as Form 8949: asset description, dates, proceeds, cost basis, and gain or loss for each transaction." },
];

export default function IrsForm8949Page() {
  return (
    <LearnPageLayout
      title="IRS Form 8949 for Cryptocurrency"
      categoryName="Crypto Taxes"
      categorySlug="taxes"
      readTime="10 min"
      intro="Form 8949 is the primary IRS form for reporting capital gains and losses from cryptocurrency transactions. Understanding how to fill it out correctly is essential for accurate crypto tax reporting. This guide walks you through each section with practical examples."
      toc={toc}
      faqs={faqs}
      relatedArticles={[
        { title: "How to File Crypto Taxes", href: "/taxes/learn/how-to-file", category: "Taxes" },
        { title: "Capital Gains Explained", href: "/taxes/learn/capital-gains", category: "Taxes" },
        { title: "Reporting Requirements", href: "/taxes/learn/reporting-requirements", category: "Taxes" },
      ]}
    >
      <section id="what-is-8949" className="mb-10">
        <h2>What Is Form 8949?</h2>
        <p>
          Form 8949 (Sales and Other Dispositions of Capital Assets) is where you report
          individual capital asset transactions to the IRS. For crypto, every sale, trade, or
          spending event that results in a capital gain or loss gets listed on this form. The
          form is divided into Part I (short-term transactions) and Part II (long-term
          transactions).
        </p>
        <p>
          Each line on Form 8949 includes: a description of the property (such as "0.5 BTC"),
          the date acquired, the date sold or disposed of, the proceeds (sale price), the cost
          basis, any adjustments, and the resulting gain or loss. The totals from Form 8949
          flow to Schedule D, which summarizes your overall capital gains position.
        </p>
      </section>

      <section id="when-needed" className="mb-10">
        <h2>When You Need Form 8949</h2>
        <p>
          You need Form 8949 whenever you dispose of cryptocurrency during the tax year. This
          includes selling crypto for fiat, trading one crypto for another, using crypto to
          purchase goods or services, and receiving proceeds from liquidated DeFi positions. If
          you only bought and held crypto without any dispositions, you do not need this form.
        </p>
        <p>
          Even if an exchange provides a 1099-B or 1099-DA, you may still need Form 8949 if
          the cost basis reported is incorrect or missing. This is common when you transfer
          crypto between exchanges, as the receiving exchange may not know your original purchase
          price.
        </p>
      </section>

      <section id="filling-it-out" className="mb-10">
        <h2>How to Fill It Out</h2>
        <p>
          Column (a) describes the property: use the crypto name and amount, like "2.5 ETH" or
          "10,000 DOGE." Column (b) is the date acquired (when you originally purchased or
          received the crypto). Column (c) is the date sold or disposed of. Column (d) is the
          proceeds (what you received). Column (e) is the cost basis (what you paid plus fees).
        </p>
        <p>
          Column (f) is for adjustment codes. Common codes include "B" (basis not reported to
          IRS) and "N" (not reported on 1099-B). Column (g) is the adjustment amount. Column (h)
          is the gain or loss (proceeds minus cost basis, adjusted for any column g amounts).
          Crypto tax software generates all of this automatically from your transaction data.
        </p>
      </section>

      <section id="categories" className="mb-10">
        <h2>Box A, B, and C Categories</h2>
        <p>
          Form 8949 has three checkbox categories for both short-term and long-term sections.
          Box A: proceeds were reported to the IRS on Form 1099-B with basis reported. Box B:
          proceeds were reported but basis was not. Box C: proceeds were not reported to the IRS
          at all. Most crypto transactions fall into Box B or Box C.
        </p>
        <p>
          For crypto sold on exchanges that provide 1099 forms with cost basis, use Box A. For
          exchanges that report proceeds but not cost basis (common for crypto), use Box B. For
          DeFi transactions, peer-to-peer sales, and exchanges that do not report, use Box C.
          Separate Form 8949 pages are needed for each box category.
        </p>
      </section>

      <section id="schedule-d" className="mb-10">
        <h2>Schedule D Connection</h2>
        <p>
          After completing Form 8949, transfer the totals to Schedule D. Short-term totals from
          Form 8949 Part I go to Schedule D lines 1-3. Long-term totals from Part II go to lines
          8-10. Schedule D then calculates your net capital gain or loss, which flows to your
          Form 1040.
        </p>
        <p>
          If your net capital loss exceeds $3,000, Schedule D calculates the deductible amount
          ($3,000 maximum against ordinary income) and any carryforward. If you have a net
          capital gain, Schedule D determines the applicable tax rate using the Capital Gain Tax
          Worksheet. This is where the long-term rate advantage becomes concrete in your
          actual tax calculation.
        </p>
      </section>
    </LearnPageLayout>
  );
}
