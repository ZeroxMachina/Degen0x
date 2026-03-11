import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to File Crypto Taxes ${CURRENT_YEAR} - Step-by-Step Guide`,
  description: `Step-by-step guide to filing crypto taxes for ${CURRENT_YEAR}. Using tax software, filling out Form 8949, reporting income, and avoiding common mistakes.`,
  alternates: { canonical: "/taxes/learn/how-to-file" },
};

const toc = [
  { id: "preparation", title: "Preparation", level: 2 },
  { id: "using-software", title: "Using Tax Software", level: 2 },
  { id: "forms-needed", title: "Tax Forms Needed", level: 2 },
  { id: "filing-process", title: "Filing Process", level: 2 },
  { id: "common-mistakes", title: "Common Mistakes", level: 2 },
];

const faqs = [
  { question: "What forms do I need to file crypto taxes?", answer: "Most crypto investors need Form 8949 (Sales and Other Dispositions of Capital Assets) and Schedule D (Capital Gains and Losses). If you received crypto income, you also need Schedule 1 or Schedule C. You must also answer the digital asset question on page 1 of Form 1040." },
  { question: "Do I need to report crypto if I only bought and held?", answer: "You do not need to report specific transactions if you only bought and held. However, you must still answer 'Yes' to the digital asset question on Form 1040 if you acquired crypto during the year. No Form 8949 or Schedule D is required if there were no dispositions." },
  { question: "What if I missed reporting crypto in previous years?", answer: "You can file amended returns using Form 1040-X for previous years. It is better to voluntarily amend than to wait for the IRS to discover the omission. Filing amended returns typically reduces potential penalties. Consider consulting a tax professional for guidance on amending multiple years." },
];

export default function HowToFilePage() {
  return (
    <LearnPageLayout
      title="How to File Crypto Taxes"
      categoryName="Crypto Taxes"
      categorySlug="taxes"
      readTime="11 min"
      intro="Filing crypto taxes does not have to be overwhelming. With the right tools and preparation, you can accurately report your crypto activity and file with confidence. This step-by-step guide walks you through the entire process from gathering data to submitting your return."
      toc={toc}
      faqs={faqs}
      relatedArticles={[
        { title: "IRS Form 8949 Guide", href: "/taxes/learn/irs-form-8949", category: "Taxes" },
        { title: "Reporting Requirements", href: "/taxes/learn/reporting-requirements", category: "Taxes" },
        { title: "Complete Crypto Tax Guide", href: "/taxes/learn/crypto-tax-guide", category: "Taxes" },
      ]}
    >
      <section id="preparation" className="mb-10">
        <h2>Preparation: Gathering Your Data</h2>
        <p>
          Before you can file, gather transaction data from every exchange, wallet, and DeFi
          protocol you used during the tax year. Export CSV files from centralized exchanges.
          For DeFi activity, you will need your wallet addresses so tax software can import
          on-chain data. Collect any 1099 forms received from exchanges.
        </p>
        <p>
          Organize your records by type: trades, income (staking, mining, airdrops), and
          transfers between your own wallets. Identifying transfers is important because they
          are not taxable but can be misclassified as dispositions if not properly labeled. Start
          this process early since gathering data from multiple sources takes time.
        </p>
      </section>

      <section id="using-software" className="mb-10">
        <h2>Using Crypto Tax Software</h2>
        <p>
          Crypto tax software like Koinly, CoinTracker, or CryptoTaxCalculator automates the
          most tedious parts of crypto tax filing. Import your data by connecting exchange APIs,
          uploading CSV files, or entering wallet addresses. The software matches transactions,
          calculates gains and losses, and generates the forms you need.
        </p>
        <p>
          After importing, review the software's classifications. Check that transfers between
          your wallets are not marked as trades. Verify that income events (staking, airdrops)
          are correctly categorized. Fix any unmatched transactions or missing cost basis data.
          Most tools highlight issues that need your attention before generating final reports.
        </p>
      </section>

      <section id="forms-needed" className="mb-10">
        <h2>Tax Forms Needed</h2>
        <p>
          Form 8949 lists every individual crypto disposition (sale, trade, or spend) with the
          asset description, acquisition date, sale date, proceeds, cost basis, and gain or loss.
          Schedule D summarizes your total capital gains and losses from Form 8949. These are
          the core forms for crypto capital gains reporting.
        </p>
        <p>
          Schedule 1 reports crypto income (staking, airdrops, small amounts of mining income).
          Schedule C reports mining or other crypto business income and expenses. Form 1040
          includes a digital asset question that you must answer truthfully. If you have many
          transactions, you can use a summary on Form 8949 and attach a detailed statement.
        </p>
      </section>

      <section id="filing-process" className="mb-10">
        <h2>Step-by-Step Filing Process</h2>
        <p>
          Step one: Import all transactions into your crypto tax software and review for accuracy.
          Step two: Select your cost basis method (FIFO is the default, but specific identification
          may reduce taxes). Step three: Generate Form 8949 and Schedule D from the software.
          Step four: Enter the summary totals into your tax return (or import directly into
          TurboTax, H&amp;R Block, or other filing software).
        </p>
        <p>
          Step five: Report any crypto income on the appropriate schedule. Step six: Answer
          "Yes" to the digital asset question on Form 1040. Step seven: Review everything for
          accuracy before filing. If using e-file software, you can often import the generated
          forms directly. If filing with an accountant, provide them with the generated reports
          and forms.
        </p>
      </section>

      <section id="common-mistakes" className="mb-10">
        <h2>Common Mistakes to Avoid</h2>
        <p>
          Not reporting crypto-to-crypto trades is the most common mistake. Every trade between
          different tokens is taxable. Missing transactions from DeFi protocols, bridges, or
          smaller exchanges leads to incomplete reporting. Failing to account for the capital
          gain when using crypto to buy NFTs or pay for services is frequently overlooked.
        </p>
        <p>
          Misclassifying transfers between your own wallets as sales creates phantom gains.
          Using incorrect cost basis (especially when transferring between exchanges) leads to
          inaccurate calculations. Not reporting staking or airdrop income is a growing area of
          IRS focus. Double-check all classifications and consider a professional review if your
          situation is complex.
        </p>
      </section>
    </LearnPageLayout>
  );
}
