import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Liquidity Pool Taxes (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn how providing liquidity to DeFi pools is taxed. Understand LP token taxation, impermanent loss, fee income, and reporting requirements.",
  keywords: ["liquidity pool taxes", "LP token taxes", "defi liquidity taxes", "AMM tax treatment"],
};

export default function LiquidityPoolTaxesPage() {
  return (
    <LearnPageLayout
      title="Liquidity Pool Taxes"
      categoryName="Taxes"
      categorySlug="taxes"
      readTime="9 min"
      intro="Providing liquidity to decentralized exchanges and automated market makers creates multiple tax events that are among the most complex in crypto taxation. From the initial deposit to fee accumulation, impermanent loss realization, and withdrawal, each step has potential tax implications. This guide walks through the tax treatment of liquidity provision step by step."
      toc={[
        { id: "lp-deposit-taxes", title: "lp-deposit-taxes", level: 2 },
        { id: "deposit-tax-treatment", title: "Deposit Tax Treatment", level: 2 },
        { id: "fee-income", title: "fee-income", level: 2 },
        { id: "fee-income-and-rewards", title: "Fee Income and Rewards", level: 2 },
        { id: "impermanent-loss", title: "impermanent-loss", level: 2 },
        { id: "impermanent-loss-tax-treatment", title: "Impermanent Loss Tax Treatment", level: 2 },
        { id: "withdrawal-reporting", title: "withdrawal-reporting", level: 2 },
        { id: "withdrawal-and-reporting", title: "Withdrawal and Reporting", level: 2 }
      ]}
      faqs={[
        { question: "Is depositing into a liquidity pool taxable?", answer: "This is debated. One interpretation treats the deposit as a taxable exchange of your tokens for LP tokens. Another treats it as a non-taxable deposit similar to placing assets in a pool. The IRS has not provided specific guidance. Many tax professionals recommend treating it as taxable to be conservative, but document your chosen approach." },
        { question: "Can I deduct impermanent loss?", answer: "Impermanent loss is only realized for tax purposes when you withdraw from the pool. At withdrawal, the difference between what you deposited and what you received, adjusted for fees earned, determines your actual gain or loss. Unrealized impermanent loss while still providing liquidity has no tax impact." },
      ]}
      relatedArticles={[
        { title: "DeFi Tax Guide", href: "/taxes/learn/defi-tax-guide", category: "Taxes" },
        { title: "DeFi Yield Taxes", href: "/taxes/learn/defi-yield-taxes", category: "Taxes" },
      ]}
    >
      <section id="lp-deposit-taxes">
        <h2>Deposit Tax Treatment</h2>
        <p>When you provide liquidity to an AMM like Uniswap, Curve, or Balancer, you deposit tokens and receive LP tokens representing your share of the pool. The tax treatment of this initial deposit is one of the most debated questions in DeFi taxation. The taxable exchange interpretation argues that you are disposing of your original tokens and receiving a new asset, the LP token, making the deposit a taxable event. Under this view, you recognize gain or loss on each deposited token based on the difference between its fair market value at deposit and your cost basis. Your LP token's cost basis is the combined fair market value of the deposited tokens. The non-taxable deposit interpretation argues that you maintain beneficial ownership of the underlying tokens through the LP token, similar to depositing securities into a brokerage account. Under this view, no gain or loss is recognized at deposit, and the LP token takes a carryover basis equal to the cost basis of the deposited tokens. Most crypto tax software offers both treatment options. Choose one approach, apply it consistently, and document your reasoning. If the IRS eventually provides specific guidance that contradicts your chosen approach, you may need to amend prior returns.</p>
      </section>
      <section id="fee-income">
        <h2>Fee Income and Rewards</h2>
        <p>Liquidity providers earn income from trading fees charged to users who swap tokens through the pool. In traditional AMMs like Uniswap v2, fees are embedded in the LP token value. Your share of fees increases the value of your LP tokens over time rather than distributing separate income. This makes income recognition challenging because the fee income is not received as a separate token but rather as an increase in the value of your LP position. One approach is to treat all fee income as realized at the time of withdrawal, when the difference between deposit value and withdrawal value can be calculated. Another approach recognizes fee income periodically based on changes in LP token value. Some protocols distribute fees as separate tokens that can be claimed, making income recognition clearer. Concentrated liquidity positions in Uniswap v3 may earn fees in the form of claimable token balances, which are more clearly income when claimed. Beyond trading fees, many protocols offer additional reward incentives in the form of governance tokens or other reward tokens. These liquidity mining rewards are generally ordinary income at fair market value when claimed. The combination of fee income and reward tokens from a single liquidity position creates multiple income streams that must be tracked separately.</p>
      </section>
      <section id="impermanent-loss">
        <h2>Impermanent Loss Tax Treatment</h2>
        <p>Impermanent loss occurs when the relative prices of tokens in a liquidity pool change from when you deposited. If you deposited equal values of ETH and USDC, and ETH doubles in price, you end up with less ETH and more USDC than you started with. The impermanent loss is the difference between what you would have if you simply held the tokens versus what you have in the pool. For tax purposes, impermanent loss is only relevant when you withdraw from the pool. While you remain in the pool, the loss is unrealized and has no tax impact. At withdrawal, you compare what you received against what you deposited to determine your actual gain or loss. If your deposit is treated as a taxable exchange, impermanent loss is captured in the difference between the LP token's cost basis at deposit and its value at withdrawal. If the deposit is treated as non-taxable, impermanent loss is captured when comparing the cost basis of the original tokens to the value of tokens received at withdrawal. In either case, fee income earned may partially or fully offset the impermanent loss. The net result, combining fee income and impermanent loss, determines your overall gain or loss from the liquidity provision. Protocols like Curve that focus on similar-value token pairs typically have lower impermanent loss, reducing this tax complexity.</p>
      </section>
      <section id="withdrawal-reporting">
        <h2>Withdrawal and Reporting</h2>
        <p>Withdrawing liquidity is the point at which most tax consequences crystallize. When you remove liquidity and receive the underlying tokens back, you are disposing of your LP tokens and receiving the underlying tokens. If your initial deposit was treated as taxable, the withdrawal is a separate taxable event where you sell your LP tokens for the received tokens. Your gain or loss is the difference between the value of tokens received and your LP token cost basis. If your deposit was non-taxable, the withdrawal may be treated as receiving back your original deposit plus income, with the income portion being the fees earned during your time in the pool. Report capital gains and losses from LP position changes on Form 8949 and Schedule D. Report fee income and reward income on Schedule 1 or Schedule C as appropriate. Multi-pool strategies where you move LP tokens between different farms or deposit LP tokens as collateral in other protocols create additional layers of tax events. Each movement of the LP token may be a separate disposition. Crypto tax software with DeFi support can help parse these complex transaction chains, but manual review is essential to ensure accuracy. Keep records of all deposit and withdrawal transactions including amounts of each token, LP tokens received and returned, and timestamps.</p>
      </section>
    </LearnPageLayout>
  );
}
