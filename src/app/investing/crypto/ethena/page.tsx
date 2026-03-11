import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Ethena (ENA)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about Ethena (ENA), the synthetic dollar protocol built on Ethereum. Discover how USDe works, tokenomics, and how to buy ENA tokens.",
};

export default function EthenaPage() {
  return (
    <LearnPageLayout
      title="What Is Ethena (ENA)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Ethena is a synthetic dollar protocol built on Ethereum that offers USDe, a crypto-native dollar backed by delta-hedged staked Ethereum positions. By combining staking yield with perpetual futures basis trading, Ethena provides one of the highest yields in DeFi on a dollar-denominated asset. ENA is the governance token of the Ethena protocol."
      toc={[
        { id: "what-is", title: "What Is Ethena?", level: 2 },
        { id: "how-it-works", title: "How Ethena Works", level: 2 },
        { id: "tokenomics", title: "Ethena Tokenomics", level: 2 },
        { id: "use-cases", title: "Use Cases & Ecosystem", level: 2 },
        { id: "how-to-buy", title: "How to Buy ENA", level: 2 },
        { id: "risks", title: "Risks & Considerations", level: 2 },
      ]}
      faqs={[
        {
          question: "What is Ethena?",
          answer:
            "Ethena is a synthetic dollar protocol that creates USDe, a yield-bearing dollar asset backed by delta-hedged staked ETH positions, combining staking rewards with funding rate arbitrage.",
        },
        {
          question: "Where can I buy ENA?",
          answer:
            "ENA is available on Binance, Bybit, OKX, and other major exchanges. USDe can be minted directly through the Ethena platform.",
        },
        {
          question: "Is ENA a good investment?",
          answer:
            "Ethena has grown rapidly with innovative yield mechanics, but the strategy carries risks during negative funding rate environments. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Best Crypto Exchanges", href: "/exchanges/best", category: "Exchanges" },
        { title: "Ethereum", href: "/investing/crypto/ethereum", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Ethena?</h2>
      <p>
        Ethena is a DeFi protocol launched in 2024 that creates USDe, a synthetic dollar asset that maintains its peg through a delta-neutral hedging strategy. Unlike traditional stablecoins backed by bank deposits or over-collateralized crypto positions, USDe derives its stability from simultaneously holding staked ETH and short perpetual futures positions.
      </p>
      <p>
        The protocol was created by Guy Young and quickly attracted billions in deposits, making it one of the fastest-growing DeFi protocols ever. Ethena&apos;s approach generates yield from two sources: Ethereum staking rewards and the funding rate earned from short perpetual futures positions.
      </p>
      <p>
        Staked USDe (sUSDe) allows holders to earn yield that has historically ranged from 10-30% APY, making it one of the most attractive yield opportunities in DeFi. The protocol has attracted backing from major investors including Arthur Hayes, Dragonfly, and Franklin Templeton.
      </p>

      <h2 id="how-it-works">How Ethena Works</h2>
      <p>
        Ethena&apos;s mechanism works by taking deposited assets (ETH, stETH, BTC), staking the ETH portion, and simultaneously opening equivalent short perpetual futures positions on centralized exchanges. This creates a delta-neutral position where price movements cancel out, while collecting both staking yield and funding rate payments.
      </p>
      <p>
        The backing assets are held with institutional custodians using off-exchange settlement solutions, meaning they never sit on exchange hot wallets. During periods when funding rates are negative, Ethena uses a reserve fund to maintain sUSDe yields, providing a buffer against adverse market conditions.
      </p>

      <h2 id="tokenomics">Ethena Tokenomics</h2>
      <p>
        ENA has a total supply of 15 billion tokens. The distribution includes allocations for the foundation, ecosystem development, core contributors, and investors. A significant portion was distributed through airdrops to early USDe adopters and ecosystem participants during the Shard campaigns.
      </p>
      <p>
        ENA is the governance token that allows holders to vote on protocol parameters, risk management decisions, and reserve fund allocations. Staking ENA in the governance module provides additional shard rewards and voting power over the protocol&apos;s direction.
      </p>

      <h2 id="use-cases">Use Cases &amp; Ecosystem</h2>
      <p>
        USDe serves as a high-yield dollar asset for DeFi treasuries, yield farmers, and investors seeking dollar-denominated returns. It is integrated across major DeFi protocols as collateral for lending, liquidity provision, and structured products. Many DeFi protocols use USDe as a building block for yield strategies.
      </p>
      <p>
        Ethena is expanding beyond its core product with initiatives around interest rate swaps, real-world asset integration, and cross-chain deployment. The protocol&apos;s reserve fund and insurance mechanism provide a safety net that gives institutional participants more confidence in USDe&apos;s stability.
      </p>

      <h2 id="how-to-buy">How to Buy ENA</h2>
      <p>
        To buy ENA, sign up on Binance, Bybit, or OKX. Complete KYC verification, deposit funds, and purchase ENA tokens. To earn yield on USDe, visit the Ethena app, mint USDe with ETH or stablecoins, then stake it to receive sUSDe which automatically accrues yield.
      </p>

      <h2 id="risks">Risks &amp; Considerations</h2>
      <p>
        Ethena&apos;s strategy carries significant risks during prolonged periods of negative funding rates, which could deplete the reserve fund and reduce or eliminate yields. Counterparty risk exists through dependence on centralized exchanges for the short futures positions and custodians for asset storage.
      </p>
      <p>
        USDe is a synthetic asset, not a fully backed stablecoin, and could depeg under extreme market conditions. Smart contract risks, liquidation risks during volatile markets, and regulatory scrutiny of yield-bearing dollar instruments add additional layers of uncertainty. The sustainability of high yields in the long term is not guaranteed.
      </p>
    </LearnPageLayout>
  );
}
