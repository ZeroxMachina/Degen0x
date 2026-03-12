import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Kujira (KUJI)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about Kujira (KUJI), the Cosmos-based DeFi ecosystem for sustainable yield. Discover how it works, tokenomics, use cases, and how to buy KUJI.",
};

export default function KujiraPage() {
  return (
    <LearnPageLayout
      title="What Is Kujira (KUJI)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Kujira is a Cosmos-based Layer 1 blockchain focused on building a comprehensive DeFi ecosystem centered around sustainable, real-yield economics rather than inflationary token incentives. With products spanning liquidation markets, decentralized exchanges, lending, and stablecoin infrastructure, Kujira aims to democratize access to sophisticated DeFi strategies previously available only to whales."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-kujira", title: "What Is Kujira?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-kujira-work", title: "How Does Kujira Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "kuji-tokenomics", title: "KUJI Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-kuji", title: "How to Buy KUJI", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        {
          question: "What is Kujira?",
          answer:
            "Kujira is a Cosmos Layer 1 blockchain with an integrated DeFi ecosystem focused on real yield, including ORCA liquidations, FIN order book DEX, GHOST lending, and USK stablecoin.",
        },
        {
          question: "Where can I buy KUJI?",
          answer:
            "KUJI is available on the FIN DEX on Kujira, Osmosis, and Gate.io. It trades against USDC, ATOM, and axlUSDC pairs.",
        },
        {
          question: "Is Kujira a good investment?",
          answer:
            "Kujira has a strong real-yield model and integrated DeFi suite, but its small ecosystem size limits liquidity and adoption. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Cosmos", href: "/investing/crypto/cosmos", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Kujira?</h2>
      <p>
        Kujira was founded by a pseudonymous team and originally launched on Terra before migrating to its own Cosmos SDK chain after Terra&apos;s collapse in 2022. The project began with ORCA, an innovative protocol that allowed regular users to bid on liquidated collateral from lending platforms at a discount, a process previously dominated by bots and sophisticated traders. This ethos of democratizing DeFi opportunities defines the Kujira ecosystem.
      </p>
      <p>
        After establishing its own chain, Kujira built a vertically integrated DeFi ecosystem including FIN (a central limit order book DEX), GHOST (a lending and borrowing protocol), BOW (a market-making tool), USK (a decentralized stablecoin), and PILOT (a token launchpad). Every product generates real revenue that flows back to KUJI stakers, avoiding the inflationary reward models common in DeFi.
      </p>

      <h2 id="how-it-works">How Does Kujira Work?</h2>
      <p>
        Kujira operates as a sovereign Cosmos SDK chain with its own validator set. The DeFi products are built as native chain modules and CosmWasm smart contracts, allowing tight integration and composability. FIN operates as an on-chain order book exchange rather than an AMM, providing better price execution for traders. ORCA connects to lending protocols across the Cosmos ecosystem to offer liquidation bidding opportunities.
      </p>
      <p>
        GHOST lending uses overcollateralized positions where borrowers deposit assets and borrow USK or other tokens. When positions become undercollateralized, ORCA facilitates orderly liquidations where bidders receive collateral at predetermined discounts. Revenue from trading fees, lending interest, and liquidation premiums is distributed to KUJI stakers in the form of multiple tokens, creating diversified real yield.
      </p>

      <h2 id="tokenomics">KUJI Tokenomics</h2>
      <p>
        KUJI has a fixed maximum supply of 122.4 million tokens with no inflation. The token is used for staking to secure the chain, governance, and as the primary value capture mechanism for the ecosystem. KUJI stakers receive a proportional share of all protocol revenues in various tokens (USDC, ATOM, USK, etc.) rather than inflationary KUJI rewards. This real-yield model means staking returns are directly tied to actual ecosystem usage and revenue.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        Kujira enables liquidation bidding through ORCA for discounted asset acquisition, order book trading on FIN with limit and market orders, lending and borrowing through GHOST, USK stablecoin usage across the Cosmos ecosystem, and token launches through PILOT. The ecosystem is designed for users seeking sustainable DeFi yields backed by real economic activity rather than token emissions.
      </p>

      <h2 id="how-to-buy">How to Buy KUJI</h2>
      <p>
        To buy KUJI, visit the FIN exchange on Kujira or swap on Osmosis DEX. KUJI is also available on Gate.io. Bridge USDC to Kujira via IBC or Axelar to trade on FIN. After purchasing, stake KUJI through the Kujira staking dashboard (BLUE) to earn real-yield rewards from ecosystem revenue. Store KUJI in Keplr or Sonar wallet.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        Kujira&apos;s small ecosystem size means limited liquidity compared to major DeFi platforms, which can result in high slippage for larger trades. The USK stablecoin maintains its peg through collateralization rather than algorithmic mechanisms, but any extreme market conditions could stress the peg. The pseudonymous team, while experienced, introduces trust considerations.
      </p>
      <p>
        Competition from larger Cosmos DeFi platforms and EVM-based alternatives limits the addressable user base. Real-yield returns depend on sustained trading volume and lending activity, which fluctuate with market conditions. The migration from Terra and relatively small validator set compared to major chains are considerations. Regulatory uncertainty around DeFi products and decentralized stablecoins adds risk.
      </p>
    </LearnPageLayout>
  );
}
