import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Ethena USDe (USDe)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about Ethena USDe (USDe), the synthetic dollar protocol using delta-neutral hedging. Discover USDe mechanics, yield generation, and how to buy.",
};

export default function EthenaTokenPage() {
  return (
    <LearnPageLayout
      title="What Is Ethena USDe (USDe)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Ethena USDe (USDe) is a synthetic dollar protocol that maintains its peg through delta-neutral hedging strategies. By holding staked ETH as collateral and simultaneously shorting ETH perpetual futures, Ethena creates a dollar-pegged position that generates yield from both staking rewards and positive funding rates. USDe has grown to become one of the largest crypto-native dollar assets."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-ethena-usde", title: "What Is Ethena USDe?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-ethena-usde-work", title: "How Does Ethena USDe Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "usde-tokenomics", title: "USDe Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-usde", title: "How to Buy USDe", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        { question: "What is Ethena USDe?", answer: "USDe is a synthetic dollar from Ethena that uses a delta-neutral strategy: holding staked ETH and shorting ETH perps simultaneously. This creates a dollar-pegged position that generates yield from staking and funding rates." },
        { question: "Where can I buy USDe?", answer: "USDe can be minted through the Ethena app or purchased on Curve, Uniswap, and centralized exchanges like Bybit. sUSDe (staked USDe) earns protocol yield." },
        { question: "Is Ethena USDe a good investment?", answer: "USDe is designed to hold a $1 peg. sUSDe offers attractive yields during bullish markets but carries risks from negative funding rates and exchange counterparty exposure. For ecosystem governance exposure, see ENA token." },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
      ]}
    >
      <section id="what-is"><h2>What Is Ethena USDe?</h2><p>Ethena is a DeFi protocol that creates USDe, a synthetic dollar backed by delta-neutral positions. The protocol holds liquid staking tokens (like stETH) and simultaneously opens short perpetual futures positions on centralized exchanges to hedge price exposure. The result is a position that maintains dollar value regardless of ETH price movements while earning yield from both staking rewards and positive funding rates in the perpetual futures market.</p><p>USDe grew rapidly to become one of the largest crypto-native dollar assets, attracting billions in deposits due to its attractive yield generation. The protocol introduced sUSDe (staked USDe) where yield from the hedging strategy is distributed to stakers, creating one of the highest-yield stablecoin-like products in DeFi during bullish market conditions.</p></section>
      <section id="how-it-works"><h2>How Does Ethena USDe Work?</h2><p>When users mint USDe, the protocol accepts staked ETH or other approved collateral, then opens a corresponding short perpetual futures position on exchanges like Binance, Bybit, and Deribit. This creates a delta-neutral position: if ETH rises, the spot position gains value but the short position loses equivalently, and vice versa. The net result is a stable dollar value. Yield is generated from the staking rewards on the long side and the funding rate payments received on the short side (since perpetual longs typically pay shorts in bullish markets).</p><p>sUSDe holders earn this combined yield, which can be significantly higher than traditional stablecoin yields during periods of positive funding rates. The protocol uses an insurance fund to absorb losses during periods of negative funding rates, protecting sUSDe holders from yield fluctuations.</p></section>
      <section id="tokenomics"><h2>USDe Tokenomics</h2><p>USDe has a variable supply that grows as users mint and contracts as they redeem. There is no maximum supply cap. The backing for each USDe is the delta-neutral position of staked ETH plus a short perpetual futures position. sUSDe represents staked USDe that accrues yield over time, with the sUSDe/USDe exchange rate increasing as yield accumulates. The insurance fund provides a buffer against negative funding rate periods, ensuring sUSDe yield remains positive even during temporary adverse conditions.</p></section>
      <section id="use-cases"><h2>Key Use Cases</h2><p>USDe serves as a high-yield synthetic dollar for DeFi. sUSDe provides yield-bearing stablecoin exposure that can be used as collateral in lending protocols, deposited in DeFi yield strategies, or held for passive income. USDe itself is used as a trading pair, collateral asset, and medium of exchange within DeFi. The protocol has been integrated into Aave, Morpho, and other lending platforms as accepted collateral, expanding its utility across the ecosystem.</p></section>
      <section id="how-to-buy"><h2>How to Buy USDe</h2><p>USDe can be minted directly through the Ethena app using stETH or USDC. It can also be purchased on DEXs like Curve and Uniswap or on centralized exchanges. For yield generation, stake USDe as sUSDe through the Ethena app. Store in any Ethereum-compatible wallet. For governance exposure to the Ethena ecosystem, see the ENA token.</p></section>
      <section id="risks"><h2>Risks and Considerations</h2><p>Ethena carries significant counterparty risk through its reliance on centralized exchanges for short perpetual positions. Exchange failures, trading restrictions, or forced liquidations could disrupt the hedging strategy. Negative funding rate periods reduce or eliminate yield and draw on the insurance fund. If the insurance fund is depleted during extended negative funding, sUSDe holders could face losses. Smart contract risk, oracle manipulation risk, and regulatory scrutiny of synthetic stablecoins are additional factors. The novelty of the model means long-term stress testing under various market conditions is limited.</p></section>
    </LearnPageLayout>
  );
}
