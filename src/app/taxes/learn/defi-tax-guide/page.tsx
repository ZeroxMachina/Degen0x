import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `DeFi Taxes Explained: Swaps, LPs, Yield Farming (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Comprehensive guide to DeFi taxes. Learn how token swaps, liquidity pools, yield farming, lending, and borrowing are taxed in the US and other jurisdictions.",
  keywords: ["DeFi taxes", "yield farming taxes", "liquidity pool taxes", "DeFi tax guide", "crypto DeFi tax"],
};

export default function DefiTaxGuidePage() {
  return (
    <LearnPageLayout
      title="DeFi Taxes Explained: Swaps, LPs, Yield Farming"
      categoryName="Crypto Taxes"
      categorySlug="taxes"
      readTime="13 min read"
      intro="Decentralized finance creates some of the most complex tax situations in crypto. Every token swap, liquidity pool deposit, yield farming reward, and lending transaction can trigger taxable events. The challenge is that DeFi protocols often generate dozens or hundreds of micro-transactions that each need to be tracked. This guide breaks down the tax implications of every major DeFi activity."
      toc={[
        { id: "token-swaps", title: "Token Swaps & DEX Trading", level: 2 },
        { id: "liquidity-pools", title: "Liquidity Pool Taxes", level: 2 },
        { id: "yield-farming", title: "Yield Farming & Reward Tokens", level: 2 },
        { id: "lending-borrowing", title: "DeFi Lending & Borrowing", level: 2 },
        { id: "staking-defi", title: "DeFi Staking & Liquid Staking", level: 2 },
        { id: "tracking", title: "Tracking DeFi Transactions for Tax", level: 2 },
      ]}
      faqs={[
        { question: "Is every token swap a taxable event?", answer: "Yes, in most jurisdictions. Swapping one token for another on a DEX like Uniswap is treated the same as selling one asset and buying another. You must calculate the gain or loss on the disposed token at the time of the swap." },
        { question: "Are liquidity pool deposits taxable?", answer: "This depends on jurisdiction and interpretation. In the US, depositing tokens into a liquidity pool may be treated as a taxable exchange if you receive LP tokens of a different character. The IRS has not issued definitive guidance, but many tax professionals treat it as a taxable event." },
        { question: "How are yield farming rewards taxed?", answer: "Yield farming rewards are generally taxed as ordinary income at fair market value when received or when you claim them. The rewards then have a cost basis equal to their value at receipt, and any subsequent gain or loss on selling them is a separate capital gains event." },
        { question: "Is borrowing against crypto taxable?", answer: "No. Taking out a loan using crypto as collateral is generally not a taxable event since you have not disposed of the crypto. However, if the loan is liquidated and your collateral is sold, that liquidation is a taxable disposition." },
      ]}
      relatedArticles={[
        { title: "NFT Tax Guide", href: "/taxes/learn/nft-tax-guide", category: "Taxes" },
        { title: "Staking Rewards Taxes", href: "/taxes/learn/staking-rewards-taxes", category: "Taxes" },
        { title: "Best Crypto Tax Software", href: "/taxes/best/software", category: "Taxes" },
      ]}
    >
      <h2 id="token-swaps">Token Swaps &amp; DEX Trading</h2>
      <p>
        Every token swap on a decentralized exchange like Uniswap, SushiSwap, or Curve is a taxable event in most jurisdictions. When you swap ETH for USDC, you are disposing of ETH and acquiring USDC. You must calculate the gain or loss on the ETH based on your cost basis versus the fair market value at the time of the swap. Gas fees paid for the transaction can typically be added to the cost basis of the acquired token or treated as a deductible transaction cost. Multi-hop swaps, where a DEX routes through several token pairs to execute your trade, create multiple intermediate taxable events on paper, though most tax software consolidates these into a single swap for reporting.
      </p>

      <h2 id="liquidity-pools">Liquidity Pool Taxes</h2>
      <p>
        Providing liquidity to pools on protocols like Uniswap, Curve, or Balancer creates several tax complexities. When you deposit tokens into a pool, you receive LP tokens in return. Whether this deposit itself is a taxable exchange is debated. The conservative approach treats it as a taxable event where you dispose of your original tokens and receive LP tokens. When you withdraw, you receive tokens in different proportions than you deposited due to price changes, creating additional gains or losses. Trading fees earned by the pool that accrue to your LP position may be taxable as income when realized. Impermanent loss is not directly recognized as a tax loss in most jurisdictions since it only crystallizes when you withdraw.
      </p>

      <h2 id="yield-farming">Yield Farming &amp; Reward Tokens</h2>
      <p>
        Yield farming rewards, whether received as governance tokens, protocol tokens, or additional LP tokens, are generally taxable as ordinary income when received or claimed. The fair market value at the time of receipt becomes your income and your cost basis in the tokens. If you harvest rewards and immediately sell them, the capital gain or loss is usually minimal. If you hold the reward tokens and they appreciate, you will owe capital gains tax when you eventually sell. Auto-compounding vaults that reinvest rewards create additional complexity, as each compounding event may be a taxable income event followed by a reinvestment. Tracking all these micro-transactions manually is virtually impossible, making DeFi tax software essential.
      </p>

      <h2 id="lending-borrowing">DeFi Lending &amp; Borrowing</h2>
      <p>
        Depositing crypto into lending protocols like Aave or Compound to earn interest creates taxable income. The interest accrues continuously and is typically taxable when received or when it becomes available to claim. In protocols where your deposit balance increases over time (like cTokens in Compound), the appreciation may be taxable as income or as a capital gain depending on how the tokens are classified. Borrowing crypto against your collateral is generally not a taxable event. However, liquidations where the protocol sells your collateral to repay the loan are taxable dispositions, often at the worst possible time when prices have already dropped.
      </p>

      <h2 id="staking-defi">DeFi Staking &amp; Liquid Staking</h2>
      <p>
        Staking tokens in DeFi protocols and receiving staking rewards is generally treated as income at the time of receipt. Liquid staking through protocols like Lido or Rocket Pool adds complexity. When you deposit ETH and receive stETH or rETH, this may or may not be a taxable exchange depending on your jurisdiction and the specific mechanics. The appreciation of rebasing tokens like stETH, where your balance increases daily to reflect staking rewards, may constitute taxable income events with each rebase. Wrapping stETH into wstETH is another potential taxable event. Each layer of DeFi composability can add another tax event, making multi-protocol strategies extremely complex from a tax perspective.
      </p>

      <h2 id="tracking">Tracking DeFi Transactions for Tax</h2>
      <p>
        Given the complexity and volume of DeFi transactions, automated tax software is essential. Leading platforms like Koinly, CoinTracker, and CryptoTaxCalculator can import on-chain transactions by connecting your wallet addresses. They parse smart contract interactions to identify swaps, liquidity provisions, yield claims, and other events. However, no tool is perfect for DeFi. You may need to manually classify certain transactions, especially for newer or more obscure protocols. Best practices include using dedicated wallets for DeFi activities, maintaining notes on your strategies, and exporting transaction data regularly. The cost of DeFi tax software is generally tax-deductible as an investment expense.
      </p>
    </LearnPageLayout>
  );
}
