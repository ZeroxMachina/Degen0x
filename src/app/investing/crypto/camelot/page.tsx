import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Camelot (GRAIL)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about Camelot (GRAIL), the native DEX and liquidity layer on Arbitrum. Discover GRAIL tokenomics, unique features, and how to buy.",
};

export default function CamelotPage() {
  return (
    <LearnPageLayout
      title="What Is Camelot (GRAIL)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Camelot (GRAIL) is a native decentralized exchange and liquidity protocol built specifically for the Arbitrum ecosystem. Positioned as the community-focused DEX of Arbitrum, Camelot offers customizable liquidity pools, a launchpad for new projects, and flexible fee structures designed to serve the unique needs of Arbitrum-native protocols."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-camelot", title: "What Is Camelot?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-camelot-work", title: "How Does Camelot Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "grail-tokenomics", title: "GRAIL Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-grail", title: "How to Buy GRAIL", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        {
          question: "What is Camelot?",
          answer:
            "Camelot is an Arbitrum-native DEX that provides customizable liquidity pools, a token launchpad, and flexible fee structures. GRAIL is the governance and utility token of the ecosystem.",
        },
        {
          question: "Where can I buy GRAIL?",
          answer:
            "GRAIL can be purchased on Camelot DEX itself on Arbitrum. It is also available on some centralized exchanges like Gate.io and MEXC.",
        },
        {
          question: "Is Camelot a good investment?",
          answer:
            "GRAIL has a very low supply and strong positioning on Arbitrum. Its value depends on Arbitrum ecosystem growth and its ability to maintain relevance against larger competitors like Uniswap and GMX on the same chain.",
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
        <h2>What Is Camelot?</h2>
        <p>
          Camelot is a decentralized exchange built from the ground up for the Arbitrum Layer 2 ecosystem. Launched in late 2022, Camelot distinguished itself by offering highly customizable liquidity solutions that cater specifically to Arbitrum-native protocols. The platform provides tools for projects to create pools with custom fee structures, directional swap fees, and dynamic parameters that can be adjusted based on market conditions.
        </p>
        <p>
          Camelot has become a go-to launchpad and liquidity venue for new Arbitrum projects, fostering a community-centric approach that emphasizes partnerships with ecosystem builders. The protocol supports both volatile and stable pair pools, concentrated liquidity through its V3 integration, and spNFT positions that represent staked LP tokens with boosted yields.
        </p>
      </section>

      <section id="how-it-works">
        <h2>How Does Camelot Work?</h2>
        <p>
          Camelot combines traditional AMM pools with concentrated liquidity features. Pool creators can customize fee tiers, set directional fees (different rates for buying vs. selling), and implement dynamic fee adjustments. The spNFT (staked position NFT) system wraps LP positions as NFTs that can be staked for additional GRAIL and xGRAIL rewards. xGRAIL is the dividend and governance token earned through staking, which can be allocated to various plugins including yield boosting, governance voting, and launchpad participation.
        </p>
        <p>
          The protocol's partnership model allows new Arbitrum projects to create customized liquidity solutions, including incentivized pools with project-specific parameters. This flexibility has made Camelot attractive to emerging protocols seeking tailored liquidity infrastructure.
        </p>
      </section>

      <section id="tokenomics">
        <h2>GRAIL Tokenomics</h2>
        <p>
          GRAIL has a very limited maximum supply of 100,000 tokens, making it one of the scarcest DEX governance tokens. The low supply combined with xGRAIL locking mechanisms creates significant scarcity. xGRAIL is earned through staking and can be redeemed for GRAIL over a vesting period, with longer vestments providing better conversion rates. Protocol revenue from trading fees is distributed to xGRAIL holders through dividends. This dual-token model incentivizes long-term commitment.
        </p>
      </section>

      <section id="use-cases">
        <h2>Key Use Cases</h2>
        <p>
          GRAIL and xGRAIL are used for governance voting, earning protocol fee dividends, yield boosting for LP positions, and accessing launchpad allocations. The Camelot platform enables token swaps, customizable liquidity provision, project launches, and yield farming. The protocol serves as a community hub for Arbitrum DeFi, providing emerging projects with liquidity tools and existing users with yield opportunities.
        </p>
      </section>

      <section id="how-to-buy">
        <h2>How to Buy GRAIL</h2>
        <p>
          GRAIL is primarily available on Camelot DEX itself on Arbitrum. Some centralized exchanges like Gate.io and MEXC also list GRAIL. To buy on Camelot, bridge ETH to Arbitrum, connect your wallet to the Camelot interface, and swap ETH for GRAIL. Due to the very low total supply, GRAIL has a high per-token price and significant volatility. Use limit orders and appropriate position sizing.
        </p>
      </section>

      <section id="risks">
        <h2>Risks and Considerations</h2>
        <p>
          GRAIL is heavily dependent on Arbitrum ecosystem growth and trading activity. Competition from Uniswap, GMX, and other established protocols on Arbitrum is intense. The very low supply means the token can be illiquid at times, leading to high price impact on trades. The xGRAIL vesting mechanism creates complexity and lock-up risk. Smart contract risk across the custom pool types and plugin system is a consideration. The protocol's reliance on partnerships with new projects means revenue can be inconsistent.
        </p>
      </section>
    </LearnPageLayout>
  );
}
