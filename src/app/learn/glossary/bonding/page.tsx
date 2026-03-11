import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Bonding in Crypto? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn what bonding means in crypto, how it works in staking and DeFi protocols, bonding curves, and the relationship between bonding and unbonding periods.",
};

export default function BondingPage() {
  return (
    <LearnPageLayout title="What Is Bonding?" categoryName="Learn Crypto" categorySlug="learn" readTime="5 min read"
      intro="Bonding in crypto refers to the process of locking up tokens for a specific purpose, typically to secure a proof-of-stake network, provide liquidity, or participate in a protocol's economic mechanism. When you bond tokens, they become illiquid for a defined period and serve as collateral or commitment. Bonding is fundamental to proof-of-stake security, DeFi protocol mechanics, and tokenomics design."
      toc={[{ id: "definition", title: "What Is Bonding?", level: 2 }, { id: "staking-bonds", title: "Bonding in Staking", level: 2 }, { id: "defi-bonding", title: "Bonding in DeFi", level: 2 }, { id: "bonding-curves", title: "Bonding Curves", level: 2 }]}
      faqs={[{ question: "What is the difference between bonding and staking?", answer: "Staking is a form of bonding specific to proof-of-stake consensus. Bonding is the broader concept of locking tokens for any purpose. You can bond tokens for protocol governance, DeFi liquidity provision, or purchasing discounted tokens through protocol-owned liquidity mechanisms. All staking involves bonding, but not all bonding is staking." },
        { question: "How long are bonding periods?", answer: "Bonding periods vary by network and purpose. Cosmos staking has a 21-day unbonding period. Polkadot has a 28-day unbonding period. DeFi bonding periods range from days to years depending on the protocol. Some protocols offer higher rewards for longer bonding commitments. Liquid staking bypasses bonding periods by issuing tradeable receipt tokens." }]}
      relatedArticles={[{ title: "Unbonding", href: "/learn/glossary/unbonding", category: "Glossary" }, { title: "Validator", href: "/learn/glossary/validator", category: "Glossary" }, { title: "What Is Staking?", href: "/learn/what-is-staking", category: "Learn Crypto" }, { title: "Liquid Staking", href: "/learn/glossary/liquid-staking", category: "Glossary" }]}
    >
      <h2 id="definition">What Is Bonding?</h2>
      <p>Bonding is the act of committing tokens to a smart contract or protocol, making them illiquid for a specified period. The bonded tokens serve a specific function: securing the network in proof-of-stake, providing liquidity in DeFi, or demonstrating long-term commitment in governance. In exchange for accepting illiquidity, bonders typically receive rewards such as staking yields, protocol revenue sharing, or governance power.</p>

      <h2 id="staking-bonds">Bonding in Staking</h2>
      <p>In proof-of-stake networks, validators and delegators bond their tokens as security collateral. Bonded tokens can be slashed if the validator misbehaves, creating economic incentives for honest behavior. The bonding process on Cosmos chains involves a delegation transaction that locks tokens with a chosen validator. Once bonded, tokens earn rewards but cannot be transferred or traded until they go through the unbonding process.</p>

      <h2 id="defi-bonding">Bonding in DeFi</h2>
      <p>OlympusDAO popularized protocol-owned liquidity bonding, where users exchange LP tokens or assets for discounted protocol tokens that vest over a period. This mechanism allows protocols to acquire their own liquidity rather than renting it through emissions. Vote-escrowed bonding (veTokens), used by Curve and others, locks tokens for up to four years in exchange for boosted governance power and revenue sharing. The longer the lock, the greater the benefits.</p>

      <h2 id="bonding-curves">Bonding Curves</h2>
      <p>A bonding curve is a mathematical function that determines token price based on supply. As more tokens are purchased, the price increases along the curve; as tokens are sold, the price decreases. Bonding curves are used in token launches, social tokens (like friend.tech keys), and automated market makers. They provide continuous liquidity and transparent pricing without requiring a traditional order book or market maker.</p>
    </LearnPageLayout>
  );
}
