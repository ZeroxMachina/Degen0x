import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Staking Taxes ${CURRENT_YEAR} - How Staking Rewards Are Taxed`,
  description: `Learn how staking rewards are taxed in ${CURRENT_YEAR}. IRS guidance on staking income, when to report, and how to calculate your tax liability.`,
  alternates: { canonical: "/taxes/learn/staking-taxes" },
};

const toc = [
  { id: "staking-tax-basics", title: "Staking Tax Basics", level: 2 },
  { id: "when-taxed", title: "When Are Rewards Taxed?", level: 2 },
  { id: "liquid-staking", title: "Liquid Staking Taxes", level: 2 },
  { id: "calculating-liability", title: "Calculating Your Liability", level: 2 },
  { id: "reporting", title: "How to Report", level: 2 },
];

const faqs = [
  { question: "Are staking rewards taxable?", answer: "Yes. The IRS treats staking rewards as ordinary income, taxable at the fair market value when you receive them (or gain dominion and control). This applies to all forms of staking including proof-of-stake validation, delegated staking, and liquid staking protocols." },
  { question: "When do I owe tax on staking rewards?", answer: "You owe income tax when you receive the rewards and have the ability to sell, exchange, or transfer them. For validators, this is typically when rewards are added to your balance. For delegated staking, it is when rewards are claimable or auto-distributed to your wallet." },
  { question: "Is there a court case about staking taxes?", answer: "Yes. The Jarrett v. United States case challenged the IRS position that staking rewards are income upon creation. The case was initially settled with a refund, then refiled. The outcome could significantly impact how staking is taxed. Currently, the IRS position remains that staking rewards are income upon receipt." },
];

export default function StakingTaxesPage() {
  return (
    <LearnPageLayout
      title="How Staking Rewards Are Taxed"
      categoryName="Crypto Taxes"
      categorySlug="taxes"
      readTime="9 min"
      intro="Staking is one of the most popular ways to earn passive income in crypto, but it creates an ongoing tax liability. Understanding when and how staking rewards are taxed, including the nuances of liquid staking, is essential for anyone earning yield on their crypto holdings."
      toc={toc}
      faqs={faqs}
      relatedArticles={[
        { title: "DeFi Taxes", href: "/taxes/learn/defi-taxes", category: "Taxes" },
        { title: "How Crypto Is Taxed", href: "/taxes/learn/how-crypto-is-taxed", category: "Taxes" },
        { title: "Reporting Requirements", href: "/taxes/learn/reporting-requirements", category: "Taxes" },
      ]}
    >
      <section id="staking-tax-basics" className="mb-10">
        <h2>Staking Tax Basics</h2>
        <p>
          The IRS issued Revenue Ruling 2023-14 confirming that staking rewards are taxable as
          ordinary income when the taxpayer gains dominion and control over them. The income
          amount is the fair market value of the tokens at the time of receipt. This income is
          then subject to your marginal income tax rate, which can be as high as 37%.
        </p>
        <p>
          Additionally, staking income may be subject to self-employment tax if you are operating
          as a validator or running staking as a business. For most retail investors who delegate
          their stake to a validator, self-employment tax typically does not apply, but the income
          is still taxable.
        </p>
      </section>

      <section id="when-taxed" className="mb-10">
        <h2>When Are Rewards Taxed?</h2>
        <p>
          The key question is when you gain dominion and control over the rewards. For most
          proof-of-stake networks where rewards are automatically distributed to your wallet,
          taxation occurs at the time of distribution. For protocols where you must manually
          claim rewards, some argue taxation occurs at the time of claiming.
        </p>
        <p>
          The frequency of reward distribution matters for record-keeping. Ethereum validators
          receive rewards with every block attestation (roughly every 6.4 minutes), creating
          thousands of tiny income events per year. Cosmos-based chains require manual claiming.
          Crypto tax software handles this complexity by importing on-chain data and calculating
          the income automatically.
        </p>
      </section>

      <section id="liquid-staking" className="mb-10">
        <h2>Liquid Staking Taxes</h2>
        <p>
          Liquid staking through protocols like Lido (stETH) or Rocket Pool (rETH) adds
          complexity. When you deposit ETH and receive stETH, the tax treatment depends on whether
          this is considered a taxable exchange or a representation of your existing position. The
          IRS has not provided specific guidance on this.
        </p>
        <p>
          For rebasing tokens like stETH (where your balance increases over time), each rebase
          may be treated as income. For value-accruing tokens like rETH (where the price increases
          relative to ETH), the gain may not be realized until you sell. Many tax professionals
          recommend the conservative approach of treating new tokens as income when received.
        </p>
      </section>

      <section id="calculating-liability" className="mb-10">
        <h2>Calculating Your Tax Liability</h2>
        <p>
          To calculate staking tax liability, total up the fair market value of all staking
          rewards received during the tax year. This is your staking income, taxed at ordinary
          rates. Each reward also establishes a cost basis for future capital gains calculations
          when you sell those tokens.
        </p>
        <p>
          If you earned staking rewards throughout the year as prices fluctuated, each reward
          event has a different fair market value. For Ethereum validators, this can mean tracking
          thousands of small income events. Use crypto tax software that supports staking income
          tracking and imports directly from the blockchain to handle this volume accurately.
        </p>
      </section>

      <section id="reporting" className="mb-10">
        <h2>How to Report Staking Income</h2>
        <p>
          Report staking income on your tax return based on your situation. Individual stakers
          report on Schedule 1 (Additional Income) or Schedule C if operating as a business.
          The total income amount flows to your Form 1040. When you later sell staking rewards,
          report the capital gain or loss on Form 8949 and Schedule D.
        </p>
        <p>
          Keep detailed records of every staking reward including the date received, amount of
          tokens, fair market value at receipt, and the protocol used. Your crypto tax software
          should generate the necessary forms and track the cost basis of each reward batch.
          Consider making estimated quarterly tax payments if staking income is significant.
        </p>
      </section>
    </LearnPageLayout>
  );
}
