import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Liquid Staking Explained: How It Works (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Learn how liquid staking works, the difference between stETH, rETH, and other LSTs, and how to use liquid staking tokens in DeFi for additional yield.",
};

export default function LiquidStakingExplainedPage() {
  return (
    <LearnPageLayout
      title="Liquid Staking Explained: How It Works"
      categoryName="Staking"
      categorySlug="investing/staking"
      readTime="12 min"
      intro="Liquid staking has transformed the staking landscape by solving one of its biggest drawbacks: illiquidity. Instead of locking your crypto and losing access to it, liquid staking gives you a tradeable token that represents your staked position. This guide explains how liquid staking works, the different token models, and how to maximize returns through DeFi composability."
      toc={[
        { id: "what-is-liquid-staking", title: "what-is-liquid-staking", level: 2 },
        { id: "what-is-liquid-staking", title: "What Is Liquid Staking?", level: 2 },
        { id: "token-models", title: "token-models", level: 2 },
        { id: "rebasing-vs-value-accruing-tokens", title: "Rebasing vs Value-Accruing Tokens", level: 2 },
        { id: "major-protocols", title: "major-protocols", level: 2 },
        { id: "major-liquid-staking-protocols", title: "Major Liquid Staking Protocols", level: 2 },
        { id: "defi-strategies", title: "defi-strategies", level: 2 },
        { id: "defi-strategies-with-lsts", title: "DeFi Strategies with LSTs", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-of-liquid-staking", title: "Risks of Liquid Staking", level: 2 },
        { id: "choosing-protocol", title: "choosing-protocol", level: 2 },
        { id: "choosing-a-liquid-staking-protocol", title: "Choosing a Liquid Staking Protocol", level: 2 }
      ]}
      faqs={[
        {
          question: "What is a liquid staking token (LST)?",
          answer: "A liquid staking token is a derivative that represents your staked cryptocurrency plus accumulated rewards. Examples include stETH (Lido), rETH (Rocket Pool), JitoSOL (Jito), and mSOL (Marinade). These tokens can be traded, used as collateral, or provided as liquidity in DeFi while your underlying stake continues earning rewards.",
        },
        {
          question: "Can I lose money with liquid staking?",
          answer: "Yes. Risks include smart contract exploits, liquid staking token de-pegging (trading below the value of the underlying asset during market stress), and slashing of the underlying stake. Additionally, the market value of the staked cryptocurrency itself can decline.",
        },
        {
          question: "Is liquid staking better than regular staking?",
          answer: "Liquid staking offers capital efficiency since you can earn staking rewards and use the derivative token in DeFi simultaneously. However, it adds smart contract risk and potential de-peg risk. Regular staking is simpler and avoids these additional risks. The choice depends on your DeFi knowledge and risk tolerance.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Staking?", href: "/investing/staking/learn/what-is-staking", category: "Staking" },
        { title: "Restaking Explained", href: "/investing/staking/learn/restaking-explained", category: "Staking" },
        { title: "Staking Risks", href: "/investing/staking/learn/staking-risks", category: "Staking" },
      ]}
    >
      <h2 id="what-is-liquid-staking">What Is Liquid Staking?</h2>
      <p>
        Liquid staking is a mechanism that allows you to stake cryptocurrency on a proof-of-stake
        network while receiving a liquid derivative token in return. This derivative token represents
        your staked position and accumulated rewards, and it can be freely traded, transferred, or
        used in decentralized finance (DeFi) protocols.
      </p>
      <p>
        Traditional staking requires you to lock your tokens for a period, during which they cannot
        be used for anything else. Liquid staking solves this capital inefficiency by giving you a
        fungible representation of your staked assets. The underlying tokens remain staked and earning
        rewards, while you maintain liquidity through the derivative token.
      </p>
      <p>
        The liquid staking sector has grown to become one of the largest categories in DeFi, with
        over $40 billion in total value locked across all protocols. This growth reflects strong
        demand for the combination of staking yields and capital efficiency.
      </p>

      <h2 id="token-models">Rebasing vs Value-Accruing Tokens</h2>
      <p>
        Liquid staking tokens use one of two models to represent staking rewards. Rebasing tokens,
        like Lido&apos;s stETH, increase your token balance daily as rewards accumulate. If you hold
        10 stETH today, you might have 10.001 stETH tomorrow. The exchange rate with the underlying
        asset stays approximately 1:1, while your balance grows.
      </p>
      <p>
        Value-accruing tokens, like Rocket Pool&apos;s rETH or Jito&apos;s JitoSOL, maintain a constant
        balance while the token&apos;s exchange rate relative to the underlying asset increases over
        time. If 1 rETH equals 1.05 ETH today, it might equal 1.055 ETH next week. Both models
        deliver the same economic outcome but have different implications for DeFi integrations and
        tax reporting.
      </p>
      <p>
        Rebasing tokens are simpler to understand but can be tricky in DeFi protocols that do not
        support balance changes. Value-accruing tokens are simpler for DeFi composability and may
        offer clearer tax treatment in some jurisdictions, since there are no daily balance changes
        to report.
      </p>

      <h2 id="major-protocols">Major Liquid Staking Protocols</h2>
      <p>
        On Ethereum, Lido dominates with stETH holding the largest market share and deepest DeFi
        integrations. Rocket Pool&apos;s rETH offers the most decentralized alternative with
        permissionless node operation. StakeWise&apos;s osETH provides a vault-based approach with
        overcollateralization. Coinbase&apos;s cbETH is the most accessible option for beginners.
      </p>
      <p>
        On Solana, Jito leads with JitoSOL and its MEV-enhanced yields, while Marinade offers mSOL
        with a focus on network decentralization. Each protocol has different fees, validator
        strategies, and DeFi integration depths. Choosing between them requires weighing factors
        like yield, decentralization, composability, and risk tolerance.
      </p>

      <h2 id="defi-strategies">DeFi Strategies with LSTs</h2>
      <p>
        Liquid staking tokens unlock a range of DeFi strategies that compound returns beyond base
        staking yields. The most common strategy is using LSTs as collateral on lending protocols
        like Aave. You deposit stETH, borrow stablecoins, and can reinvest the borrowed funds.
        This leveraged staking strategy amplifies returns but also amplifies risk.
      </p>
      <p>
        Liquidity provision is another popular strategy. Providing stETH-ETH liquidity on Curve or
        JitoSOL-SOL liquidity on Jupiter earns trading fees on top of staking rewards. Yield
        aggregators like Yearn automatically optimize these strategies for maximum returns.
      </p>
      <p>
        Restaking through EigenLayer adds another yield layer for ETH LSTs. You can earn base staking
        rewards, restaking rewards, and DeFi yields simultaneously, though each layer adds additional
        risk. Understanding the risk-return tradeoff of each layer is crucial before implementing
        multi-layer yield strategies.
      </p>

      <h2 id="risks">Risks of Liquid Staking</h2>
      <p>
        Smart contract risk is the primary concern with liquid staking. If a protocol&apos;s smart
        contracts contain a vulnerability, staked funds could be at risk. While major protocols have
        undergone multiple audits, no audit guarantees zero bugs. The more complex the protocol, the
        larger the potential attack surface.
      </p>
      <p>
        De-peg risk occurs when a liquid staking token trades below the value of its underlying asset.
        This happened with stETH during the Terra/Luna collapse in 2022 when stETH briefly traded at
        a 5% discount to ETH. While the peg eventually recovered, users who needed to sell during the
        de-peg took a loss. Market stress events can trigger cascading liquidations if LSTs are
        used as collateral.
      </p>
      <p>
        Slashing risk exists on the underlying validator level. If validators in the staking pool are
        slashed, the loss is shared among all token holders. Protocols mitigate this through insurance
        funds, operator diversification, and collateral requirements (like Rocket Pool&apos;s RPL bonds),
        but the risk cannot be eliminated entirely.
      </p>

      <h2 id="choosing-protocol">Choosing a Liquid Staking Protocol</h2>
      <p>
        When choosing a liquid staking protocol, consider five key factors: security track record
        (audit history, time in production, TVL), fee structure (lower fees mean higher net yields),
        DeFi integrations (more integrations mean more yield opportunities), decentralization level
        (diversified validators reduce risk), and liquidity depth (deeper liquidity means easier
        entry and exit).
      </p>
      <p>
        For most Ethereum users, Lido offers the best combination of yield, composability, and
        battle-tested security. For those prioritizing decentralization, Rocket Pool is the clear
        choice. For Solana users seeking maximum yield, Jito leads, while Marinade serves those who
        value network health. Diversifying across multiple protocols reduces your exposure to any
        single protocol&apos;s risks.
      </p>
    </LearnPageLayout>
  );
}
