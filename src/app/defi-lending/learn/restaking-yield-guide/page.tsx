import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Restaking Yield Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Complete guide to restaking yield strategies with EigenLayer and liquid restaking tokens. Learn how restaking works, AVS rewards, LRT strategies, and risk assessment.",
  keywords: ["restaking", "EigenLayer", "liquid restaking", "AVS rewards", "LRT yield"],
};

export default function RestakingYieldGuidePage() {
  return (
    <LearnPageLayout
      title="Restaking Yield Guide"
      categoryName="DeFi Lending"
      categorySlug="defi-lending"
      readTime="12 min"
      intro="Restaking is one of the most significant innovations in DeFi yield generation, allowing staked ETH to simultaneously secure multiple protocols and earn supplementary rewards. EigenLayer pioneered the concept, and a growing ecosystem of liquid restaking protocols, AVS operators, and DeFi integrations has emerged around it. This guide covers how restaking works, yield optimization strategies, and the unique risks involved."
      toc={[
        { id: "how-restaking-works", title: "how-restaking-works", level: 2 },
        { id: "how-restaking-works", title: "How Restaking Works", level: 2 },
        { id: "lrt-ecosystem", title: "lrt-ecosystem", level: 2 },
        { id: "liquid-restaking-tokens", title: "Liquid Restaking Tokens", level: 2 },
        { id: "yield-strategies", title: "yield-strategies", level: 2 },
        { id: "restaking-yield-strategies", title: "Restaking Yield Strategies", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "restaking-specific-risks", title: "Restaking-Specific Risks", level: 2 }
      ]}
      faqs={[
        { question: "How much extra yield does restaking provide?", answer: "Additional yield from restaking varies as the AVS reward ecosystem matures. Early estimates suggest 1-5% additional APY on top of base staking yield, but actual rewards depend on which AVSs you opt into and their willingness to pay for security." },
        { question: "What is an AVS?", answer: "An Actively Validated Service is any system that requires its own validation and security, such as oracles, bridges, data availability layers, or rollup sequencers. AVSs pay restakers for extending Ethereum's security to their services." },
        { question: "Can I be slashed for restaking?", answer: "Yes, restaking introduces additional slashing risk. If an AVS you opted into detects malicious behavior, your restaked ETH can be slashed. This is a new risk layer on top of base Ethereum staking slashing conditions." },
      ]}
      relatedArticles={[
        { title: "LSD Yield Strategies", href: "/defi-lending/learn/lsd-yield-strategies", category: "DeFi Lending" },
        { title: "ETH Yield Strategies", href: "/defi-lending/learn/eth-yield-strategies", category: "DeFi Lending" },
        { title: "Restaking Protocol Comparison", href: "/defi-lending/compare/restaking-protocol-comparison", category: "DeFi Lending" },
      ]}
    >
      <section id="how-restaking-works">
        <h2>How Restaking Works</h2>
        <p>Restaking allows staked ETH (native or liquid staking tokens) to be used as security for additional protocols beyond Ethereum itself. EigenLayer, the pioneer restaking protocol, enables ETH stakers to opt into securing Actively Validated Services (AVSs) by extending their staked capital's security guarantees. When you restake, your ETH continues to secure Ethereum and earn base staking rewards while simultaneously being committed to validate AVS operations. In return, AVSs distribute rewards to restakers for this shared security. The mechanism effectively allows the same capital to do double duty: securing Ethereum and securing one or more AVSs, earning separate rewards from each. This shared security model is economically efficient because it allows new protocols to bootstrap security from Ethereum's massive validator set rather than building their own from scratch.</p>
      </section>
      <section id="lrt-ecosystem">
        <h2>Liquid Restaking Tokens</h2>
        <p>Liquid Restaking Tokens (LRTs) solve the liquidity problem created by restaking lockups. Protocols like EtherFi (eETH), Renzo (ezETH), Kelp DAO (rsETH), and Puffer Finance (pufETH) accept ETH or LSTs, restake them through EigenLayer, and issue liquid tokens representing the restaked position. These LRTs can be traded, used as collateral in lending protocols, or deployed in DeFi strategies, maintaining liquidity while earning staking plus restaking rewards. The LRT ecosystem has grown rapidly, with significant TVL and increasing DeFi integrations. When choosing an LRT provider, consider their AVS selection strategy, fee structure, redemption mechanics, DeFi composability, and the team's approach to risk management. Different LRT protocols may opt into different sets of AVSs, creating varying risk-reward profiles.</p>
      </section>
      <section id="yield-strategies">
        <h2>Restaking Yield Strategies</h2>
        <p>Restaking yield strategies build on the base staking plus restaking rewards to add additional DeFi yield layers. The simplest approach is holding an LRT and earning the combined staking and restaking yield. Depositing LRTs into lending protocols like Aave or Morpho adds lending interest. Providing liquidity in LRT/ETH pools captures trading fees. Leveraged restaking loops deposit LRTs, borrow ETH, acquire more LRTs, and repeat to amplify the yield spread. Points farming on LRT protocols adds speculative upside from potential governance token airdrops. Pendle integration allows separating the yield and principal components of LRTs for fixed-rate or yield speculation strategies. The total yield stack from restaking can reach 10-20% when combining all layers, though each additional layer adds risk.</p>
      </section>
      <section id="risks">
        <h2>Restaking-Specific Risks</h2>
        <p>Restaking introduces unique risks beyond standard DeFi. AVS slashing risk means your restaked capital can be reduced if an AVS you opted into penalizes operators for misbehavior, even if you as a passive restaker were not directly involved. The slashing conditions and penalties vary by AVS. Smart contract risk is multiplied across the staking protocol, EigenLayer, AVS contracts, and any LRT wrapper. LRT de-peg risk can affect leveraged positions if the LRT trades at a discount to its underlying value. The restaking ecosystem is still young, with AVS reward economics unproven at scale. Many current restaking participants are motivated by points and airdrop speculation rather than sustainable AVS rewards. The transition from points-driven to rewards-driven economics may disappoint users expecting high yields. Concentration risk exists if most restakers opt into the same AVSs, potentially creating correlated slashing scenarios.</p>
      </section>
    </LearnPageLayout>
  );
}
