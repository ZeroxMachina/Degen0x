import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Liquid Staking Complete Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Learn everything about liquid staking, how liquid staking derivatives work, top protocols like Lido and Rocket Pool, and strategies to maximize your staking yield while maintaining liquidity.",
  keywords: [
    "liquid staking",
    "staking derivatives",
    "Lido",
    "Rocket Pool",
    "stETH",
    "rETH",
    "DeFi staking",
  ],
};

export default function LiquidStakingGuidePage() {
  return (
    <LearnPageLayout
      title="Liquid Staking Complete Guide"
      categoryName="Staking"
      categorySlug="investing/staking"
      readTime="10 min"
      intro="Liquid staking has revolutionized how crypto holders earn staking rewards. Instead of locking up your tokens, liquid staking protocols issue derivative tokens that represent your staked position, allowing you to earn yield while still participating in DeFi. This guide covers everything from the basics to advanced strategies."
      toc={[
        { id: "what-is-liquid-staking", title: "what-is-liquid-staking", level: 2 },
        { id: "what-is-liquid-staking", title: "What Is Liquid Staking?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-liquid-staking-works", title: "How Liquid Staking Works", level: 2 },
        { id: "top-protocols", title: "top-protocols", level: 2 },
        { id: "top-liquid-staking-protocols", title: "Top Liquid Staking Protocols", level: 2 },
        { id: "strategies", title: "strategies", level: 2 },
        { id: "liquid-staking-strategies", title: "Liquid Staking Strategies", level: 2 },
        { id: "risks-and-considerations", title: "risks-and-considerations", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        {
          question: "What is the difference between liquid staking and traditional staking?",
          answer:
            "Traditional staking locks your tokens for a set period, while liquid staking gives you a derivative token (like stETH) that you can trade or use in DeFi while still earning staking rewards.",
        },
        {
          question: "Is liquid staking safe?",
          answer:
            "Liquid staking carries smart contract risk, slashing risk, and potential de-peg risk for the derivative token. Major protocols like Lido have been audited extensively, but no protocol is completely risk-free.",
        },
        {
          question: "Can I unstake from a liquid staking protocol at any time?",
          answer:
            "Most liquid staking protocols offer a withdrawal queue for native unstaking, or you can sell the derivative token on a DEX for near-instant liquidity, though large trades may experience slippage.",
        },
      ]}
      relatedArticles={[
        { title: "ETH Staking Complete Guide", href: "/investing/staking/learn/eth-staking-complete-guide", category: "Staking" },
        { title: "LSD Strategies", href: "/investing/staking/learn/lsd-strategies", category: "Staking" },
        { title: "Staking Risks Explained", href: "/investing/staking/learn/staking-risks-explained", category: "Staking" },
      ]}
    >
      <section id="what-is-liquid-staking">
        <h2>What Is Liquid Staking?</h2>
        <p>
          Liquid staking is a mechanism that allows cryptocurrency holders to stake their tokens and receive a liquid derivative token in return. This derivative represents your staked position and accrues staking rewards over time. Unlike traditional staking where your assets are locked and illiquid, liquid staking derivatives can be freely transferred, traded on decentralized exchanges, or used as collateral in DeFi protocols. The concept was pioneered primarily on Ethereum after its transition to proof-of-stake, where Lido Finance introduced stETH as the first widely adopted liquid staking token. Today, liquid staking exists across multiple blockchain ecosystems including Solana, Cosmos, Polkadot, and many others. The total value locked in liquid staking protocols has grown to represent a significant portion of all staked assets across the crypto ecosystem.
        </p>
      </section>

      <section id="how-it-works">
        <h2>How Liquid Staking Works</h2>
        <p>
          When you deposit tokens into a liquid staking protocol, the protocol pools your tokens with those of other depositors and delegates them to a set of professional node operators. In return, you receive a liquid staking derivative token at a specific exchange rate. There are two primary models for how these derivative tokens work. The rebase model, used by Lido stETH, adjusts the token balance in your wallet daily to reflect earned rewards. The value-accruing model, used by Rocket Pool rETH and Coinbase cbETH, keeps the token amount constant but increases its value relative to the underlying asset over time. Professional node operators selected by the protocol run validators on your behalf, and the earned rewards minus protocol fees are passed through to derivative token holders. This process abstracts away the complexity of running validator infrastructure while giving users exposure to staking yield.
        </p>
      </section>

      <section id="top-protocols">
        <h2>Top Liquid Staking Protocols</h2>
        <p>
          The liquid staking landscape features several major protocols across different chains. Lido Finance remains the largest liquid staking provider for Ethereum, offering stETH with deep DeFi integration across lending protocols, DEXs, and yield aggregators. Rocket Pool provides a more decentralized alternative with rETH, allowing anyone to run a minipool node with just 8 ETH. Coinbase Wrapped Staked ETH (cbETH) is a popular institutional choice for regulated entities. On Solana, Marinade Finance and Jito lead the liquid staking market. Stride dominates the Cosmos ecosystem by providing liquid staking across IBC-connected chains. When evaluating protocols, consider factors like total value locked, decentralization of the validator set, smart contract audit history, fee structure (typically 5-10% of rewards), and the depth of DeFi integrations available for the derivative token. Each protocol makes different tradeoffs between decentralization, capital efficiency, and user experience.
        </p>
      </section>

      <section id="strategies">
        <h2>Liquid Staking Strategies</h2>
        <p>
          Liquid staking opens up a wide range of yield-enhancing strategies beyond simply holding the derivative token. The most common approach is recursive leveraged staking, where you deposit your liquid staking token as collateral on a lending protocol like Aave, borrow the underlying asset, and stake it again to amplify your yield. This strategy carries liquidation risk if the derivative de-pegs. Another popular strategy involves providing liquidity in pools pairing the derivative with the base asset, such as stETH-ETH pools on Curve, earning trading fees on top of staking rewards. You can also use liquid staking tokens in structured products and yield vaults that automate complex strategies. Some users combine liquid staking with restaking protocols like EigenLayer to earn additional rewards by securing other networks. The key is to understand the compounding risks involved: each additional layer of yield comes with additional smart contract risk, liquidity risk, and potential slashing exposure. Start with simpler strategies and gradually explore more complex compositions as you gain experience.
        </p>
      </section>

      <section id="risks-and-considerations">
        <h2>Risks and Considerations</h2>
        <p>
          While liquid staking offers significant advantages, it introduces several risk vectors that participants must understand. Smart contract risk is the most fundamental concern, as bugs in the protocol code could lead to loss of funds. De-peg risk occurs when the derivative token trades below the value of the underlying staked asset, which can happen during market stress or if confidence in the protocol wavers. Slashing risk exists because if the validators chosen by the protocol misbehave or experience downtime, a portion of staked tokens could be penalized. Centralization risk is relevant for protocols where a small number of entities control the validator set, potentially creating single points of failure. Regulatory risk is an emerging concern as governments worldwide develop frameworks for staking services. Oracle risk can affect DeFi integrations that rely on accurate pricing of liquid staking derivatives. To mitigate these risks, consider diversifying across multiple liquid staking protocols, monitoring the health of validator sets, and limiting your exposure to leveraged strategies. Always check that protocols have undergone thorough security audits and have active bug bounty programs in place.
        </p>
      </section>
    </LearnPageLayout>
  );
}
