import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Liquid Staking? (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about liquid staking: how it works, the benefits of liquid staking tokens like stETH, major protocols like Lido and Rocket Pool, and the risks to consider.",
};

export default function WhatIsLiquidStakingPage() {
  return (
    <LearnPageLayout
      title="What Is Liquid Staking?"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="8 min read"
      intro="Liquid staking allows you to stake your cryptocurrency to earn staking rewards while simultaneously receiving a liquid derivative token that represents your staked position. This derivative can be used across DeFi — as collateral for borrowing, in liquidity pools, or in other yield strategies — effectively giving you the benefits of staking without the opportunity cost of locked capital. Liquid staking has grown to become one of the largest sectors in DeFi, with protocols like Lido managing tens of billions in staked assets."
      toc={[
        { id: "how-it-works", title: "How Liquid Staking Works", level: 2 },
        { id: "major-protocols", title: "Major Liquid Staking Protocols", level: 2 },
        { id: "benefits", title: "Benefits of Liquid Staking", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
        { id: "lst-defi", title: "Using LSTs in DeFi", level: 2 },
      ]}
      faqs={[
        {
          question: "What is a liquid staking token (LST)?",
          answer:
            "An LST is a token you receive when you stake through a liquid staking protocol. Examples include stETH (Lido), rETH (Rocket Pool), and cbETH (Coinbase). The LST represents your staked ETH plus accumulated rewards and can be traded, used as collateral, or deployed in DeFi protocols while your underlying ETH continues earning staking rewards.",
        },
        {
          question: "Is liquid staking safe?",
          answer:
            "Liquid staking introduces additional smart contract risk beyond native staking. You trust the protocol's contracts to manage staked assets correctly. However, leading protocols like Lido and Rocket Pool have been extensively audited and have operated for years. The primary risks are smart contract vulnerabilities, slashing events affecting underlying validators, and potential de-pegging of the LST from its underlying asset.",
        },
        {
          question: "Can I unstake my liquid staking tokens at any time?",
          answer:
            "Most liquid staking protocols offer a withdrawal queue where you can redeem your LST for the underlying asset. The processing time depends on the protocol and the Ethereum withdrawal queue. Alternatively, you can sell your LST on a DEX for immediate liquidity, though you may receive slightly less than the fair value depending on market conditions.",
        },
      ]}
      relatedArticles={[
        { title: "Proof of Stake Explained", href: "/learn/proof-of-stake", category: "Learn" },
        { title: "Restaking Explained", href: "/learn/restaking-explained", category: "Learn" },
        { title: "What Is Yield Farming?", href: "/learn/what-is-yield-farming", category: "Learn" },
        { title: "DeFi Yield Strategies", href: "/learn/defi-yield-strategies", category: "Learn" },
      ]}
    >
      <section id="how-it-works">
        <h2>How Liquid Staking Works</h2>
        <p>
          In traditional Proof of Stake staking, you lock your tokens to support network security and earn rewards, but those tokens are illiquid for the duration of the staking period. On Ethereum, running a validator requires 32 ETH and technical expertise, and withdrawals may take days to process. Liquid staking protocols solve both problems: they pool deposits from multiple users (accepting any amount), delegate to professional node operators, and issue a derivative token that represents your share of the staked pool.
        </p>
        <p>
          When you deposit ETH into Lido, for example, you receive stETH, which automatically accrues staking rewards through a daily rebasing mechanism (your stETH balance increases each day). Rocket Pool issues rETH, which increases in value relative to ETH over time rather than increasing in quantity. Both approaches give you a token that appreciates as staking rewards accumulate, while remaining freely transferable and usable across the DeFi ecosystem.
        </p>
      </section>

      <section id="major-protocols">
        <h2>Major Liquid Staking Protocols</h2>
        <p>
          Lido is the largest liquid staking protocol, managing a significant portion of all staked ETH. It operates a curated set of professional node operators and issues stETH, which has become one of the most deeply integrated tokens in DeFi. Lido's dominance has raised centralization concerns, as a large concentration of staked ETH under one protocol could theoretically influence Ethereum's consensus layer.
        </p>
        <p>
          Rocket Pool takes a more decentralized approach, allowing anyone to run a node with as little as 8 ETH (the remaining 24 ETH comes from the pool). This permissionless validator model distributes the network across a larger number of independent operators. Other notable protocols include Coinbase's cbETH, Frax's sfrxETH, and Mantle's mETH. Beyond Ethereum, liquid staking exists on Solana (Marinade, Jito), Cosmos (Stride), and other PoS chains, each adapting the concept to their specific staking mechanics.
        </p>
      </section>

      <section id="benefits">
        <h2>Benefits of Liquid Staking</h2>
        <p>
          Capital efficiency is the primary benefit. Instead of choosing between staking rewards and DeFi yields, liquid staking lets you earn both simultaneously. Your underlying ETH earns staking rewards while your stETH or rETH can be deposited into lending protocols, used as collateral to borrow stablecoins, or provided as liquidity in DEX pools. This composability can significantly boost your total return on capital.
        </p>
        <p>
          Accessibility is another major advantage. Native Ethereum staking requires 32 ETH (a substantial sum) and the technical ability to run a validator node. Liquid staking protocols accept any amount and handle all the technical complexity. They also diversify validator risk across many node operators, reducing the impact of any single operator's downtime or slashing penalty. For most users, liquid staking provides a superior experience to native staking in terms of convenience, risk diversification, and capital utility.
        </p>
      </section>

      <section id="risks">
        <h2>Risks and Considerations</h2>
        <p>
          Smart contract risk is the primary concern. While leading protocols have extensive audits and track records, the contracts managing billions in staked assets remain potential targets for attackers. Slashing risk, though rare, is real — if a validator operated by the protocol misbehaves or experiences a bug, a portion of the staked ETH could be slashed, reducing the value of all LST holders' positions.
        </p>
        <p>
          De-pegging risk is another consideration. LSTs trade on secondary markets, and during periods of market stress, the market price of an LST can fall below the value of its underlying staked assets. This happened briefly during the Terra/LUNA collapse and the FTX bankruptcy. While the peg typically recovers as arbitrageurs step in, holders who need to sell during a de-peg event could realize a loss. Centralization risk is also important: if one liquid staking protocol accumulates too large a share of total staked ETH, it could become a systemic risk to the entire network.
        </p>
      </section>

      <section id="lst-defi">
        <h2>Using LSTs in DeFi</h2>
        <p>
          The most common DeFi strategy for LSTs is using them as collateral to borrow stablecoins. Depositing stETH into Aave and borrowing USDC gives you liquid capital while your ETH continues earning staking rewards. The staking yield effectively reduces your net borrowing cost, and in some cases can make the loan net-positive (you earn more from staking than you pay in borrow interest).
        </p>
        <p>
          LST liquidity pools on DEXs like Curve are among the deepest in DeFi, providing opportunities for liquidity providers. Leveraged staking strategies involve depositing LSTs as collateral, borrowing ETH, staking the borrowed ETH for more LSTs, and repeating — amplifying staking returns but also introducing liquidation risk. Restaking protocols like EigenLayer allow LSTs to be restaked for additional yield by securing other networks and services, though this adds another layer of smart contract risk. Each strategy increases potential returns but compounds the risks involved.
        </p>
      </section>
    </LearnPageLayout>
  );
}
