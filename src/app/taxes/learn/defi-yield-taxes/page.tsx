import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `DeFi Yield Taxes (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn how DeFi yield farming and liquidity provision rewards are taxed. Understand income recognition, cost basis tracking, and reporting for DeFi yields.",
  keywords: ["defi yield taxes", "yield farming taxes", "defi income tax", "liquidity mining taxes"],
};

export default function DefiYieldTaxesPage() {
  return (
    <LearnPageLayout
      title="DeFi Yield Taxes"
      categoryName="Taxes"
      categorySlug="taxes"
      readTime="9 min"
      intro="DeFi yield comes in many forms including lending interest, liquidity provision rewards, yield farming incentives, and staking returns. Each type of yield may have different tax treatment, and the complexity of DeFi protocols makes tracking and reporting challenging. This guide breaks down the tax implications of various DeFi yield strategies and provides practical guidance for compliance."
      toc={[
        { id: "types-of-yield", title: "types-of-yield", level: 2 },
        { id: "types-of-defi-yield-and-tax-treatment", title: "Types of DeFi Yield and Tax Treatment", level: 2 },
        { id: "income-recognition", title: "income-recognition", level: 2 },
        { id: "income-recognition-timing", title: "Income Recognition Timing", level: 2 },
        { id: "cost-basis-complexity", title: "cost-basis-complexity", level: 2 },
        { id: "cost-basis-complexity", title: "Cost Basis Complexity", level: 2 },
        { id: "reporting-defi-yield", title: "reporting-defi-yield", level: 2 },
        { id: "reporting-defi-yield", title: "Reporting DeFi Yield", level: 2 }
      ]}
      faqs={[
        { question: "Is DeFi yield taxed as income?", answer: "Generally yes. DeFi rewards, whether from lending, liquidity provision, or yield farming, are typically treated as ordinary income at the fair market value when received. This is analogous to interest income from traditional lending. When you later sell the reward tokens, you also pay capital gains tax on any appreciation from the value at receipt." },
        { question: "How do I track yield across multiple protocols?", answer: "Use DeFi-compatible crypto tax software like CryptoTaxCalculator, Koinly, or TokenTax that can parse on-chain DeFi transactions. Connect your wallet addresses and the software will attempt to categorize DeFi activities. Manual review is usually needed to verify accuracy, especially for complex protocol interactions." },
      ]}
      relatedArticles={[
        { title: "DeFi Tax Guide", href: "/taxes/learn/defi-tax-guide", category: "Taxes" },
        { title: "Staking Taxes", href: "/taxes/learn/staking-taxes", category: "Taxes" },
      ]}
    >
      <section id="types-of-yield">
        <h2>Types of DeFi Yield and Tax Treatment</h2>
        <p>DeFi yield takes several distinct forms, each with potentially different tax treatment. Lending interest earned from protocols like Aave, Compound, or Spark is treated as ordinary income, similar to bank interest. The income is recognized at fair market value when it accrues or is claimed, depending on the protocol mechanics. Liquidity provision rewards from decentralized exchanges like Uniswap or Curve generate yield through trading fee distributions. These fees are generally treated as ordinary income when received. Yield farming incentives are bonus tokens distributed to encourage protocol usage. These governance tokens or reward tokens are ordinary income at fair market value when claimed. Rebasing tokens that automatically increase your balance, like stETH before its switch to wstETH, may generate continuous taxable income with every rebase. Auto-compounding vaults that reinvest rewards on your behalf may create additional taxable events each time rewards are claimed and reinvested, even though you did not manually claim them. Understanding which type of yield you are receiving from each protocol is the first step in proper tax treatment.</p>
      </section>
      <section id="income-recognition">
        <h2>Income Recognition Timing</h2>
        <p>One of the most debated aspects of DeFi yield taxation is when income should be recognized. For rewards that must be manually claimed, the conservative approach recognizes income at the time of claiming. Some argue income should be recognized when it becomes claimable, even if not yet claimed, under the constructive receipt doctrine. For auto-compounding protocols where rewards are automatically reinvested, each compounding event may constitute a taxable receipt of income. This can create significant tracking challenges for protocols that compound frequently. Rebasing tokens present a particularly complex case. If your token balance increases with every block, a strict interpretation would require recognizing income at every rebase. In practice, most taxpayers and tax software calculate income periodically, such as daily, rather than at every block. The valuation of DeFi tokens at the moment of receipt adds another layer of complexity. Many reward tokens are illiquid or trade on thin markets, making fair market value determination difficult. Using the price from the largest exchange or a price aggregator like CoinGecko at the time of receipt is a reasonable approach, but the specific methodology should be documented and applied consistently.</p>
      </section>
      <section id="cost-basis-complexity">
        <h2>Cost Basis Complexity</h2>
        <p>DeFi yield activities create complex cost basis tracking requirements. When you deposit tokens into a lending protocol and receive interest-bearing tokens, the initial deposit may or may not be a taxable event depending on the token mechanism. Depositing ETH into Aave and receiving aETH is generally treated as a non-taxable swap since aETH represents your deposited ETH plus accrued interest. When you withdraw and receive more ETH than you deposited, the difference is income. Providing liquidity to an AMM involves depositing two tokens and receiving LP tokens. The deposit may be treated as a taxable exchange of the underlying tokens for the LP token. When you withdraw, you receive different amounts of the underlying tokens due to price changes and fee accumulation. The difference between what you deposited and what you withdrew, adjusted for fees earned, determines your gain or loss. Yield farming with multiple layers of complexity, such as depositing LP tokens into a farm to earn additional rewards, creates nested cost basis tracking challenges. Each layer of interaction may have its own cost basis considerations. Keeping detailed records of every deposit, withdrawal, claim, and compound is essential. Crypto tax software with DeFi support automates much of this tracking but should be verified against your actual transaction history.</p>
      </section>
      <section id="reporting-defi-yield">
        <h2>Reporting DeFi Yield</h2>
        <p>DeFi yield income is reported on your tax return in different sections depending on the type of yield and your classification. Ordinary income from DeFi yields is typically reported on Schedule 1 as other income, or on Schedule C if your DeFi activity constitutes a business. Capital gains and losses from entering and exiting DeFi positions are reported on Form 8949 and Schedule D. The challenge is that DeFi transactions often involve both income and capital gain components in a single sequence of actions. For example, withdrawing from a yield farm involves claiming reward tokens as income, receiving LP tokens whose value has changed creating a capital gain or loss, and potentially withdrawing the underlying tokens from the LP as another capital event. Each component should be reported appropriately. DeFi-specific tax software is essential for managing this complexity. CryptoTaxCalculator, Koinly, and TokenTax all parse on-chain DeFi transactions to varying degrees. However, the rapidly evolving DeFi landscape means tax software may not support every protocol, especially newer or less popular ones. Manual categorization may be needed for unsupported protocols. Given the complexity and evolving regulatory landscape, working with a tax professional who understands DeFi is recommended for anyone with significant DeFi yield activity.</p>
      </section>
    </LearnPageLayout>
  );
}
