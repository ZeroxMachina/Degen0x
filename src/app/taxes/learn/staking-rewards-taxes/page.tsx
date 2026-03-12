import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How Staking Rewards Are Taxed (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Complete guide to staking reward taxes. Learn when staking income is taxed, how to calculate cost basis, liquid staking tax implications, and how different countries treat staking rewards.",
  keywords: ["staking rewards taxes", "crypto staking tax", "staking income tax", "ETH staking taxes"],
};

export default function StakingRewardsTaxesPage() {
  return (
    <LearnPageLayout
      title="How Staking Rewards Are Taxed"
      categoryName="Crypto Taxes"
      categorySlug="taxes"
      readTime="11 min read"
      intro="Staking has become one of the most popular ways to earn passive income on crypto holdings, especially since Ethereum's transition to proof-of-stake. However, staking rewards are taxable in most jurisdictions, and the timing, classification, and calculation of that tax can be complex. This guide covers how staking rewards are taxed across major jurisdictions and the emerging complexities around liquid staking derivatives."
      toc={[
        { id: "when-taxed", title: "when-taxed", level: 2 },
        { id: "when-staking-rewards-are-taxed", title: "When Staking Rewards Are Taxed", level: 2 },
        { id: "income-vs-gains", title: "income-vs-gains", level: 2 },
        { id: "income-tax-vs-capital-gains", title: "Income Tax vs Capital Gains", level: 2 },
        { id: "liquid-staking", title: "liquid-staking", level: 2 },
        { id: "liquid-staking-tax-implications", title: "Liquid Staking Tax Implications", level: 2 },
        { id: "validators", title: "validators", level: 2 },
        { id: "running-a-validator-node", title: "Running a Validator Node", level: 2 },
        { id: "by-country", title: "by-country", level: 2 },
        { id: "staking-taxes-by-country", title: "Staking Taxes by Country", level: 2 },
        { id: "tracking", title: "tracking", level: 2 },
        { id: "tracking-staking-rewards", title: "Tracking Staking Rewards", level: 2 }
      ]}
      faqs={[
        { question: "Are staking rewards taxed as income?", answer: "In most jurisdictions, yes. Staking rewards are treated as ordinary income at fair market value when received. In the US, there is ongoing legal debate about whether newly created staking tokens should be taxed at creation or only when sold, following the Jarrett v. United States case." },
        { question: "When do I owe tax on staking rewards?", answer: "Generally, you owe tax when you gain dominion and control over the rewards. For most staking, this is when rewards are credited to your wallet. For some protocols where rewards auto-compound, the timing can be more ambiguous." },
        { question: "Is staking subject to self-employment tax?", answer: "For most individual stakers, no. Staking is generally considered a passive investment activity. However, if you run a commercial staking service or validator business, the income may be subject to self-employment tax." },
        { question: "How does the Jarrett case affect staking taxes?", answer: "The Jarrett case argued that staking rewards are newly created property (like a baker creating bread) and should not be taxed until sold. The IRS settled the case with a refund but has not issued guidance changing its position. The outcome remains uncertain." },
      ]}
      relatedArticles={[
        { title: "Mining Tax Guide", href: "/taxes/learn/mining-tax-guide", category: "Taxes" },
        { title: "DeFi Tax Guide", href: "/taxes/learn/defi-tax-guide", category: "Taxes" },
        { title: "Best Crypto Tax Software", href: "/taxes/best/software", category: "Taxes" },
      ]}
    >
      <h2 id="when-taxed">When Staking Rewards Are Taxed</h2>
      <p>
        The general rule in most jurisdictions is that staking rewards are taxable when you gain dominion and control over them. For delegated staking through exchanges like Coinbase or Kraken, this is when the rewards appear in your account. For on-chain staking where rewards auto-accumulate (like Ethereum validator rewards), the timing is when rewards become accessible. The tax is assessed on the fair market value of the rewards in your local currency at the time of receipt. Each reward payment creates both an income event and establishes a cost basis for the received tokens. If you receive daily staking rewards, you potentially have 365 separate income events per year.
      </p>

      <h2 id="income-vs-gains">Income Tax vs Capital Gains</h2>
      <p>
        Staking rewards are a two-phase tax event. First, the rewards are taxed as ordinary income when received at their fair market value. This becomes your cost basis. Second, when you eventually sell or trade the staked rewards, any difference between the sale price and your cost basis is a capital gain or loss. The holding period for capital gains treatment starts from the date you received each reward. For example, if you receive 0.01 ETH in staking rewards worth $30, you report $30 as income. If ETH later rises and you sell those rewards for $50, you also have a $20 capital gain, which is long-term if held over a year or short-term if held less.
      </p>

      <h2 id="liquid-staking">Liquid Staking Tax Implications</h2>
      <p>
        Liquid staking protocols like Lido, Rocket Pool, and Coinbase cbETH add complexity. When you deposit ETH into Lido and receive stETH, whether this is a taxable exchange is debated. Some tax professionals treat it as a tax-free like-kind exchange since stETH represents your staked ETH, while others treat it as a taxable swap. Rebasing tokens like stETH that increase your balance daily to reflect rewards may create daily taxable income events. Non-rebasing tokens like wstETH or rETH that appreciate in value rather than increasing in quantity may defer income recognition until you unwrap or sell. The lack of clear regulatory guidance makes this an area where professional tax advice is particularly valuable.
      </p>

      <h2 id="validators">Running a Validator Node</h2>
      <p>
        Running an Ethereum validator or similar proof-of-stake validator has additional tax considerations. Validator rewards include both consensus rewards (for proposing and attesting blocks) and execution rewards (priority fees and MEV). Both are taxable income when received. If you run a validator as a business, you can deduct expenses including hardware costs, electricity, internet, and cloud hosting fees. The 32 ETH deposit to become an Ethereum validator is not a taxable event since you maintain ownership. However, any penalties or slashing events that reduce your staked amount may create deductible losses depending on your jurisdiction.
      </p>

      <h2 id="by-country">Staking Taxes by Country</h2>
      <p>
        Tax treatment of staking varies globally. In the US, the IRS treats staking rewards as income at receipt, though the Jarrett case has created uncertainty. In the UK, HMRC considers staking rewards as miscellaneous income or trading income depending on the activity level. In Germany, staking rewards are taxable as other income when received, but the 2022 BMF guidance confirmed the 1-year holding period is not extended by staking. In Australia, the ATO treats staking rewards as income at fair market value. In Singapore, staking rewards from personal investment activity are generally not taxable since there is no capital gains tax. In Japan, staking rewards are miscellaneous income subject to progressive rates up to 55 percent.
      </p>

      <h2 id="tracking">Tracking Staking Rewards</h2>
      <p>
        Accurate tracking of staking rewards is essential for tax compliance. For exchange staking, platforms like Coinbase and Kraken provide staking reward reports that can be exported. For on-chain staking, you need to track every reward deposit to your wallet. Tools like Koinly, CoinTracker, and CryptoTaxCalculator can automatically detect staking rewards from blockchain data when you connect your wallet addresses. For liquid staking tokens, tracking the daily value changes requires specialized tools. Keep records of the amount received, the fair market value at receipt, the date, and which staking protocol or service generated the reward. This documentation is critical for both the income calculation and establishing cost basis for future sales.
      </p>
    </LearnPageLayout>
  );
}
