import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Total Supply: What It Means in Crypto (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Learn what total supply means in cryptocurrency. Understand how total supply differs from circulating supply and max supply, and why it matters for token valuation.",
  keywords: ["total supply", "crypto total supply", "circulating supply", "max supply"],
};

export default function TotalSupplyGlossaryPage() {
  return (
    <LearnPageLayout
      title="Total Supply: What It Means in Crypto"
      categoryName="Crypto Education"
      categorySlug="learn"
      readTime="5 min"
      intro="Total supply refers to the total number of tokens that currently exist for a cryptocurrency, including those in circulation and those that are locked, reserved, or not yet released. It differs from both circulating supply and maximum supply, and is a key metric for understanding token valuation."
      toc={[
        { id: "definition", title: "Definition", level: 2 },
        { id: "how-it-works", title: "How It Works", level: 2 },
        { id: "examples", title: "Examples & Use Cases", level: 2 },
        { id: "why-it-matters", title: "Why It Matters", level: 2 },
      ]}
      faqs={[
        {
          question: "What is the difference between total supply and circulating supply?",
          answer:
            "Circulating supply counts only the tokens currently available and tradable on the market. Total supply includes circulating tokens plus any that exist but are locked in vesting contracts, staked, or held in treasury wallets. Circulating supply is always less than or equal to total supply.",
        },
        {
          question: "Can total supply decrease?",
          answer:
            "Yes, total supply decreases when tokens are burned (permanently destroyed). Many protocols implement token burning mechanisms that remove tokens from the total supply, making the remaining tokens more scarce. Ethereum's EIP-1559 burns a portion of transaction fees, periodically reducing ETH's total supply.",
        },
      ]}
      relatedArticles={[
        { title: "Tokenomics", href: "/learn/glossary/tokenomics", category: "Glossary" },
        { title: "Token", href: "/learn/glossary/token", category: "Glossary" },
        { title: "Vesting", href: "/learn/glossary/vesting", category: "Glossary" },
      ]}
    >
      <section id="definition">
        <h2>Definition</h2>
        <p>
          Total supply is a fundamental metric in cryptocurrency that represents the complete count of tokens that have been created minus any tokens that have been permanently burned or destroyed. It is distinct from two related metrics: circulating supply, which counts only the tokens freely available for trading on the open market, and maximum supply, which represents the absolute cap on how many tokens can ever exist. Total supply sits between these two figures, including tokens that exist but may be locked in vesting contracts, staked in protocols, held in project treasuries, or otherwise restricted from immediate trading. For example, if a project has a maximum supply of 1 billion tokens, has minted 500 million so far, but 200 million are locked in vesting contracts, the total supply would be 500 million while the circulating supply would be approximately 300 million. Understanding these distinctions is essential for accurately evaluating a token's market value and future price dynamics.
        </p>
      </section>
      <section id="how-it-works">
        <h2>How It Works</h2>
        <p>
          Total supply is determined by the token's smart contract and can be verified on-chain by anyone. When new tokens are minted through inflation, mining rewards, or staking emissions, the total supply increases. When tokens are burned by sending them to an address from which they can never be recovered (a dead address or through a burn function in the smart contract), the total supply decreases. The relationship between total supply and circulating supply changes over time as vesting schedules unlock tokens, making them available for trading. Data aggregators like CoinMarketCap and CoinGecko track these metrics by monitoring on-chain data and deducting known locked or burned tokens. Fully diluted valuation (FDV) is calculated by multiplying the token price by the maximum supply, while market capitalization uses the circulating supply. The ratio between circulating supply and total supply indicates how much potential sell pressure exists from tokens that could enter the market in the future.
        </p>
      </section>
      <section id="examples">
        <h2>Examples & Use Cases</h2>
        <p>
          Bitcoin has a maximum supply of 21 million BTC. As of now, approximately 19.5 million have been mined (total supply), virtually all of which are in circulation, though millions are estimated to be permanently lost in inaccessible wallets. Ethereum has no maximum supply cap, meaning its total supply can theoretically grow indefinitely, though the burn mechanism introduced with EIP-1559 has made it periodically deflationary. Many newer tokens launch with a total supply fully minted at genesis but with most tokens locked in vesting contracts. For instance, a project might mint 1 billion tokens at launch but have only 100 million in initial circulation, with the rest vesting over 2 to 4 years. Stablecoins like USDC adjust total supply based on demand, minting new tokens when users deposit dollars and burning tokens when users redeem them. These examples illustrate how different supply models serve different economic purposes and create different investment dynamics.
        </p>
      </section>
      <section id="why-it-matters">
        <h2>Why It Matters</h2>
        <p>
          Total supply is a critical metric for informed cryptocurrency investing and valuation. It reveals the potential dilution that current holders may face as locked tokens enter circulation. A token with a low circulating supply relative to its total supply has significant future sell pressure built in, as vesting tokens gradually unlock and enter the market. Savvy investors examine the ratio of circulating to total supply, along with the vesting schedule, to estimate when significant unlock events will occur and how they might impact price. The fully diluted valuation compared to the current market cap reveals whether a token is potentially overvalued when accounting for all future supply. Token burns that reduce total supply can create deflationary pressure that supports price appreciation over time. Understanding total supply dynamics is essential for avoiding the common trap of investing in tokens that appear cheap based on unit price but are actually heavily diluted or face substantial upcoming token unlocks that could depress prices significantly.
        </p>
      </section>
    </LearnPageLayout>
  );
}
