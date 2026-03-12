import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Curve Finance (CRV)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about Curve Finance (CRV), the leading DEX for stablecoin and pegged asset trading. Discover CRV tokenomics, the veToken model, and how to buy.",
};

export default function CurvePage() {
  return (
    <LearnPageLayout
      title="What Is Curve Finance (CRV)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Curve Finance (CRV) is a decentralized exchange optimized for efficient stablecoin and pegged asset trading on Ethereum and other chains. Known for its low-slippage swaps and innovative vote-escrow tokenomics model, Curve has become critical infrastructure in DeFi, facilitating billions in daily trading volume for stablecoins and liquid staking tokens."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-curve-finance", title: "What Is Curve Finance?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-curve-finance-work", title: "How Does Curve Finance Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "crv-tokenomics", title: "CRV Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-crv", title: "How to Buy CRV", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        {
          question: "What is Curve Finance?",
          answer:
            "Curve Finance is a decentralized exchange designed specifically for efficient stablecoin and pegged asset swaps. Its AMM algorithm offers extremely low slippage for like-kind asset trades. CRV is the governance token used through the veCRV vote-escrow system.",
        },
        {
          question: "Where can I buy CRV?",
          answer:
            "CRV is available on Coinbase, Binance, Kraken, and other major exchanges. It can also be purchased on Curve itself, Uniswap, and other DEXs.",
        },
        {
          question: "Is Curve Finance a good investment?",
          answer:
            "CRV has strong protocol fundamentals as the backbone of stablecoin liquidity in DeFi. Its veTokenomics model creates long-term alignment. However, high token emissions and past security incidents are risk factors to consider.",
        },
      ]}
      relatedArticles={[
        {
          title: "Best Cryptos to Buy",
          href: "/investing/best/cryptos-to-buy",
          category: "Investing",
        },
        {
          title: "How to Invest in Crypto",
          href: "/investing/learn/how-to-invest-in-crypto",
          category: "Investing",
        },
      ]}
    >
      <section id="what-is">
        <h2>What Is Curve Finance?</h2>
        <p>
          Curve Finance is a decentralized exchange launched in 2020 that specializes in efficient trading of stablecoins and pegged assets. Unlike general-purpose DEXs like Uniswap, Curve's automated market maker (AMM) algorithm is specifically optimized for assets that should trade near a 1:1 ratio, such as USDC/USDT or stETH/ETH. This specialized design allows Curve to offer significantly lower slippage and trading fees compared to standard AMMs for these pairs.
        </p>
        <p>
          Curve has become essential DeFi infrastructure, serving as the primary venue for stablecoin swaps and a key building block for yield strategies across the ecosystem. The protocol's influence extends beyond trading through its innovative vote-escrow governance model, which has been widely adopted by other DeFi protocols.
        </p>
      </section>

      <section id="how-it-works">
        <h2>How Does Curve Finance Work?</h2>
        <p>
          Curve uses a specialized bonding curve algorithm called StableSwap that concentrates liquidity around the expected peg price of paired assets. This mathematical approach means that for trades between stablecoins or other similarly-priced assets, users experience minimal price impact even for large trade sizes. Curve V2 expanded the protocol to support volatile asset pairs using a different algorithm called Cryptoswap.
        </p>
        <p>
          Liquidity providers deposit assets into Curve pools and earn trading fees plus CRV token emissions. The amount of CRV emissions directed to each pool is determined by veCRV (vote-escrowed CRV) holders through gauge voting. This creates the "Curve Wars" dynamic where protocols compete to accumulate veCRV voting power to direct emissions toward their preferred pools, incentivizing deeper liquidity for their tokens.
        </p>
      </section>

      <section id="tokenomics">
        <h2>CRV Tokenomics</h2>
        <p>
          CRV has a maximum supply of approximately 3.03 billion tokens, distributed through liquidity mining emissions over several years. The vote-escrow model requires locking CRV for up to four years to receive veCRV, which provides boosted yields, governance voting power, and a share of protocol trading fees. Longer lock periods receive proportionally more veCRV. This mechanism removes a significant portion of CRV from circulation, reducing sell pressure. Protocols like Convex Finance have accumulated large veCRV positions to control gauge emissions.
        </p>
      </section>

      <section id="use-cases">
        <h2>Key Use Cases</h2>
        <p>
          CRV is used for governance through the veCRV system, earning protocol revenue from trading fees, and boosting liquidity provider yields. The Curve protocol serves as the backbone for stablecoin trading, liquid staking derivative swaps, and yield farming strategies. Curve pools are integrated into virtually every DeFi aggregator and yield optimizer. The protocol also launched crvUSD, its own stablecoin backed by crypto collateral, adding another dimension to the CRV token's utility and revenue generation.
        </p>
      </section>

      <section id="how-to-buy">
        <h2>How to Buy CRV</h2>
        <p>
          CRV is listed on all major centralized exchanges including Coinbase, Binance, Kraken, and OKX. It can be purchased directly on Curve Finance or through Uniswap and other DEXs. After buying, CRV holders can lock tokens for veCRV to participate in governance and earn fees, or deposit into Convex Finance to earn yield without a four-year lock commitment. Store CRV in any Ethereum-compatible wallet for self-custody.
        </p>
      </section>

      <section id="risks">
        <h2>Risks and Considerations</h2>
        <p>
          Curve faces risks including high token emissions that create ongoing sell pressure, smart contract complexity across multiple pool types and chains, and the concentration of governance power in protocols like Convex. The protocol experienced a significant security incident in mid-2023 involving a Vyper compiler vulnerability that affected several pools. Competition from Uniswap V3's concentrated liquidity for stablecoin pairs and emerging DEXs is a growing concern. Regulatory risk around stablecoins and DeFi trading platforms could also impact the protocol.
        </p>
      </section>
    </LearnPageLayout>
  );
}
