import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Mining Taxes ${CURRENT_YEAR} - How Mining Income Is Taxed`,
  description: `Learn how crypto mining is taxed in ${CURRENT_YEAR}. Income tax on mining rewards, deductible expenses, hobby vs business mining, and reporting requirements.`,
  alternates: { canonical: "/taxes/learn/mining-taxes" },
};

const toc = [
  { id: "mining-income", title: "Mining as Income", level: 2 },
  { id: "hobby-vs-business", title: "Hobby vs Business Mining", level: 2 },
  { id: "deductible-expenses", title: "Deductible Expenses", level: 2 },
  { id: "pool-mining", title: "Pool Mining Taxes", level: 2 },
  { id: "reporting-mining", title: "Reporting Mining Income", level: 2 },
];

const faqs = [
  { question: "Is crypto mining income taxable?", answer: "Yes. Mining rewards are taxed as ordinary income at the fair market value when the crypto is received (when a block is mined or a pool payout is distributed). If mining is a business, the income is also subject to self-employment tax. The income amount becomes your cost basis for future capital gains when you sell." },
  { question: "Can I deduct mining expenses?", answer: "If mining is a business (not a hobby), you can deduct expenses including electricity, hardware depreciation, internet costs, cooling equipment, rent for mining space, and repair costs. These deductions reduce your taxable mining income. Hobby miners cannot deduct expenses under current tax law." },
  { question: "How do I know if my mining is a hobby or business?", answer: "The IRS considers factors like whether you mine with the intention of making a profit, the time and effort invested, whether you depend on the income, and whether you keep business records. Continuous, profit-seeking mining operations are more likely classified as a business. Casual miners with a single GPU at home may be classified as hobbyists." },
];

export default function MiningTaxesPage() {
  return (
    <LearnPageLayout
      title="How Crypto Mining Is Taxed"
      categoryName="Crypto Taxes"
      categorySlug="taxes"
      readTime="9 min"
      intro="Crypto mining creates taxable income the moment you receive mining rewards. Whether you operate a large mining farm or run a single GPU at home, understanding the tax implications of mining helps you maximize deductions and stay compliant with IRS requirements."
      toc={toc}
      faqs={faqs}
      relatedArticles={[
        { title: "Staking Taxes", href: "/taxes/learn/staking-taxes", category: "Taxes" },
        { title: "How Crypto Is Taxed", href: "/taxes/learn/how-crypto-is-taxed", category: "Taxes" },
        { title: "Reporting Requirements", href: "/taxes/learn/reporting-requirements", category: "Taxes" },
      ]}
    >
      <section id="mining-income" className="mb-10">
        <h2>Mining as Income</h2>
        <p>
          When you successfully mine cryptocurrency, the block reward or pool payout is treated
          as ordinary income at the fair market value when received. For Bitcoin miners, this is
          the value of BTC at the exact time the block reward (currently 3.125 BTC after the 2024
          halving) is received. For pool miners, it is the value at each payout distribution.
        </p>
        <p>
          This income is taxed at your ordinary income rate, which can range from 10% to 37%.
          The fair market value at receipt also becomes your cost basis. If you mine 0.1 BTC
          worth $5,000 and later sell it for $7,000, you owe income tax on $5,000 and capital
          gains tax on the $2,000 appreciation.
        </p>
      </section>

      <section id="hobby-vs-business" className="mb-10">
        <h2>Hobby vs Business Mining</h2>
        <p>
          The IRS distinguishes between hobby mining and business mining. Business miners report
          income and expenses on Schedule C, can deduct all ordinary and necessary business
          expenses, and owe self-employment tax (15.3%) on net income. Hobby miners report income
          on Schedule 1 but cannot deduct expenses under the current tax code.
        </p>
        <p>
          To qualify as a business, you should demonstrate a profit motive, maintain records, and
          operate in a business-like manner. Factors include the scale of operations, time devoted,
          investment in equipment, and whether you have historically earned profits. If mining is
          your primary activity and you invest significantly in equipment, business classification
          is typically appropriate.
        </p>
      </section>

      <section id="deductible-expenses" className="mb-10">
        <h2>Deductible Mining Expenses</h2>
        <p>
          Business miners can deduct electricity costs (often the largest expense), hardware
          through depreciation (Section 179 or MACRS), internet service, cooling equipment,
          rent for mining facilities, repair and maintenance costs, and pool fees. These
          deductions significantly reduce taxable income.
        </p>
        <p>
          Mining hardware can be depreciated over its useful life or expensed immediately under
          Section 179 up to annual limits. Electricity costs should be documented with utility
          bills and, if mining at home, the mining-specific portion should be calculated based
          on equipment wattage and usage hours. A separate electricity meter for mining equipment
          provides the strongest documentation.
        </p>
      </section>

      <section id="pool-mining" className="mb-10">
        <h2>Pool Mining Taxes</h2>
        <p>
          Most miners today participate in mining pools that distribute rewards proportionally.
          Each pool payout is a taxable income event at the fair market value when received. Pool
          fees are either deducted before distribution (reducing your income amount) or can be
          claimed as a business expense if charged separately.
        </p>
        <p>
          Payouts may occur daily, when a minimum threshold is reached, or on a set schedule
          depending on the pool. Track each payout individually with its date, amount, and fair
          market value. Most crypto tax software can import pool payout data directly from wallet
          addresses by analyzing incoming transactions.
        </p>
      </section>

      <section id="reporting-mining" className="mb-10">
        <h2>Reporting Mining Income</h2>
        <p>
          Business miners report gross mining income and deductible expenses on Schedule C. The
          net profit is subject to both income tax and self-employment tax. Hobby miners report
          mining income on Schedule 1, Line 8 (Other Income). Both types report later sales of
          mined crypto on Form 8949 and Schedule D.
        </p>
        <p>
          If mining income is significant, make estimated quarterly tax payments to avoid
          underpayment penalties. Use Form 1040-ES to calculate and submit quarterly estimates.
          Consider consulting a tax professional familiar with crypto mining, especially for
          large-scale operations with substantial equipment investments and electricity costs.
        </p>
      </section>
    </LearnPageLayout>
  );
}
