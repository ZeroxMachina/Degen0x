import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Mining Taxes Explained (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Complete guide to crypto mining taxes. Learn how mining rewards are taxed as income, deductible expenses, hobby vs business classification, and reporting requirements for miners.",
  keywords: ["crypto mining taxes", "bitcoin mining tax", "mining income tax", "crypto mining deductions"],
};

export default function MiningTaxGuidePage() {
  return (
    <LearnPageLayout
      title="Crypto Mining Taxes Explained"
      categoryName="Crypto Taxes"
      categorySlug="taxes"
      readTime="11 min read"
      intro="Cryptocurrency mining generates taxable income in most jurisdictions. Whether you are mining Bitcoin with ASICs, mining altcoins with GPUs, or participating in mining pools, you need to understand when mining rewards become taxable, what expenses you can deduct, and whether your activity qualifies as a hobby or a business. The classification significantly affects both your tax liability and the deductions available to you."
      toc={[
        { id: "mining-income", title: "mining-income", level: 2 },
        { id: "mining-rewards-as-taxable-income", title: "Mining Rewards as Taxable Income", level: 2 },
        { id: "hobby-vs-business", title: "hobby-vs-business", level: 2 },
        { id: "hobby-mining-vs-business-mining", title: "Hobby Mining vs Business Mining", level: 2 },
        { id: "deductions", title: "deductions", level: 2 },
        { id: "deductible-mining-expenses", title: "Deductible Mining Expenses", level: 2 },
        { id: "pool-mining", title: "pool-mining", level: 2 },
        { id: "mining-pool-tax-considerations", title: "Mining Pool Tax Considerations", level: 2 },
        { id: "selling-rewards", title: "selling-rewards", level: 2 },
        { id: "selling-mining-rewards", title: "Selling Mining Rewards", level: 2 },
        { id: "reporting", title: "reporting", level: 2 },
        { id: "reporting-mining-income", title: "Reporting Mining Income", level: 2 }
      ]}
      faqs={[
        { question: "When are mining rewards taxed?", answer: "Mining rewards are generally taxed as income at fair market value when you receive them (when the block reward or pool payout hits your wallet). This creates ordinary income or self-employment income depending on your classification as a hobbyist or business." },
        { question: "Can I deduct electricity costs for mining?", answer: "If mining is classified as a business, yes. Electricity, hardware depreciation, internet costs, cooling, rent for mining space, and other direct expenses are deductible against mining income. Hobby miners have very limited deduction options." },
        { question: "Is mining subject to self-employment tax?", answer: "If your mining activity is classified as a business (which is likely for profitable, consistent mining), the net income is subject to self-employment tax of 15.3 percent in the US, in addition to regular income tax. This covers Social Security and Medicare contributions." },
        { question: "How do I calculate cost basis for mined crypto?", answer: "The cost basis of mined crypto is the fair market value at the time you received it. This is the same amount you report as mining income. When you later sell the mined crypto, your capital gain is the sale price minus this cost basis." },
      ]}
      relatedArticles={[
        { title: "Staking Rewards Taxes", href: "/taxes/learn/staking-rewards-taxes", category: "Taxes" },
        { title: "DeFi Tax Guide", href: "/taxes/learn/defi-tax-guide", category: "Taxes" },
        { title: "Best Crypto Tax Software", href: "/taxes/best/software", category: "Taxes" },
      ]}
    >
      <h2 id="mining-income">Mining Rewards as Taxable Income</h2>
      <p>
        When you successfully mine cryptocurrency, the rewards are taxable as income at the fair market value in your local currency at the time of receipt. For solo miners, this is when the block reward arrives in your wallet. For pool miners, this is typically when the pool distributes your share of the rewards. The income is recognized regardless of whether you sell the crypto immediately or hold it. In the US, the IRS has explicitly stated in Notice 2014-21 and subsequent guidance that mined crypto constitutes gross income. The same principle applies in most other jurisdictions including the UK, Canada, Australia, and the EU.
      </p>

      <h2 id="hobby-vs-business">Hobby Mining vs Business Mining</h2>
      <p>
        The classification of your mining activity as a hobby or a business has major tax implications. Business miners can deduct all ordinary and necessary expenses, but their income is subject to self-employment tax (15.3 percent in the US). Hobby miners report income but have extremely limited deduction options. The IRS uses factors including profit motive, time and effort invested, expertise, equipment investment, and track record of profits to determine classification. In practice, if you have dedicated mining hardware, operate continuously, and earn regular income from mining, it is almost certainly a business. Casual mining on a personal computer might qualify as a hobby.
      </p>

      <h2 id="deductions">Deductible Mining Expenses</h2>
      <p>
        Business miners can deduct a wide range of expenses against their mining income. Electricity is typically the largest deduction, and you should track your mining electricity usage separately from personal use. Mining hardware like ASICs and GPUs can be depreciated over their useful life or expensed under Section 179 in the US. Other deductible expenses include cooling systems, internet connectivity, rent for dedicated mining space, maintenance and repairs, mining pool fees, and professional services like accounting. Home miners can potentially deduct a portion of their housing costs if they dedicate a specific area exclusively to mining. Keep detailed records and receipts for all expenses.
      </p>

      <h2 id="pool-mining">Mining Pool Tax Considerations</h2>
      <p>
        Most miners participate in mining pools, which distribute rewards based on contributed hash power. Pool payouts are taxable income when received, valued at fair market value. Pool fees are deductible as a business expense. Some pools pay rewards in different crypto than what is being mined, which is still taxable income at the value received. Pools may use different payout schemes like PPS (Pay Per Share), PPLNS (Pay Per Last N Shares), or FPPS (Full Pay Per Share), but the tax treatment is the same: income when received. If the pool withholds a percentage as fees, you report the net amount received as income and can deduct the fee separately.
      </p>

      <h2 id="selling-rewards">Selling Mining Rewards</h2>
      <p>
        When you sell mined cryptocurrency, you trigger a separate capital gains event. Your cost basis is the fair market value at the time you received the mining reward (the same amount you reported as income). If the crypto appreciated between receipt and sale, you have a capital gain. If it declined, you have a capital loss. The holding period starts from the date you received the reward. Mining rewards held for over a year may qualify for long-term capital gains rates in jurisdictions that offer preferential treatment. Many miners sell rewards immediately to cover operating costs, which typically results in minimal capital gains.
      </p>

      <h2 id="reporting">Reporting Mining Income</h2>
      <p>
        In the US, business mining income is reported on Schedule C (Profit or Loss from Business) of your tax return. Self-employment tax is calculated on Schedule SE. Hobby mining income is reported as Other Income on Schedule 1. Capital gains from selling mined crypto go on Schedule D and Form 8949. Other countries have similar reporting requirements: UK miners report on the Self Assessment return, Canadian miners on T2125 for business income, and Australian miners report through their personal tax return. Using crypto tax software that can import mining pool data helps ensure accurate reporting of the often numerous small payouts that mining generates.
      </p>
    </LearnPageLayout>
  );
}
