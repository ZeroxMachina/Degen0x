import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Cardano Ecosystem Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Complete guide to the Cardano ecosystem including Plutus smart contracts, ADA staking, DeFi protocols, governance, and how to get started.",
  keywords: ["Cardano", "ADA", "Cardano ecosystem", "Plutus", "Cardano DeFi", "Cardano staking"],
};

export default function CardanoEcosystemGuidePage() {
  return (
    <LearnPageLayout title="Cardano Ecosystem Guide" categoryName="Crypto Education" categorySlug="learn" readTime="8 min" intro="Cardano is a Proof of Stake blockchain platform built on peer-reviewed academic research and formal verification methods. Founded by Ethereum co-founder Charles Hoskinson, Cardano takes a methodical, research-first approach to blockchain development, prioritizing security and sustainability over speed-to-market."
      toc={[
        { id: "overview", title: "overview", level: 2 },
        { id: "cardano-overview", title: "Cardano Overview", level: 2 },
        { id: "technology", title: "technology", level: 2 },
        { id: "technology", title: "Technology", level: 2 },
        { id: "defi", title: "defi", level: 2 },
        { id: "defi-ecosystem", title: "DeFi Ecosystem", level: 2 },
        { id: "governance", title: "governance", level: 2 },
        { id: "governance", title: "Governance", level: 2 },
        { id: "getting-started", title: "getting-started", level: 2 },
        { id: "getting-started", title: "Getting Started", level: 2 }
      ]}
      faqs={[
        { question: "What makes Cardano different?", answer: "Cardano differentiates through its research-driven development, using peer-reviewed academic papers as the foundation for protocol design. Its Ouroboros consensus mechanism was the first provably secure Proof of Stake protocol. The platform uses the Haskell programming language and formal verification methods for enhanced security." },
        { question: "How does ADA staking work?", answer: "ADA staking on Cardano is non-custodial — your ADA never leaves your wallet. You delegate to a stake pool and earn rewards (typically 3-5% APY) while maintaining full control of your tokens. There is no lock-up period, and you can undelegate at any time." },
        { question: "What is Plutus?", answer: "Plutus is Cardano's smart contract platform based on Haskell. It uses an extended UTXO model rather than the account model used by Ethereum, providing different properties around parallelism and predictability of transaction outcomes." },
      ]}
      relatedArticles={[
        { title: "What Is Proof of Stake?", href: "/learn/what-is-proof-of-stake", category: "Learn" },
        { title: "Ethereum Ecosystem Guide", href: "/learn/ethereum-ecosystem-guide", category: "Learn" },
        { title: "What Is a Validator?", href: "/learn/what-is-a-validator", category: "Learn" },
        { title: "What Is a Smart Contract?", href: "/learn/what-is-a-smart-contract", category: "Learn" },
      ]}
    >
      <section id="overview"><h2>Cardano Overview</h2><p>Cardano was launched in 2017 by Input Output Hong Kong (IOHK), led by Charles Hoskinson. The project follows a phased development roadmap named after notable figures: Byron (foundation), Shelley (decentralization), Goguen (smart contracts), Basho (scaling), and Voltaire (governance). Smart contract capability arrived with the Alonzo upgrade in September 2021, enabling DeFi and dApp development on the platform.</p><p>The Cardano community is one of the most dedicated in crypto, with strong engagement in governance, staking, and ecosystem development. The platform has particular traction in developing regions, with projects in Africa focused on identity, supply chain, and financial inclusion. ADA consistently ranks among the top cryptocurrencies by market capitalization.</p></section>
      <section id="technology"><h2>Technology</h2><p>Cardano's Ouroboros is the first Proof of Stake consensus protocol with mathematical security proofs published in peer-reviewed academic conferences. The protocol divides time into epochs and slots, with stake pool operators selected to produce blocks based on their stake proportion. The extended UTXO (eUTXO) model provides deterministic transaction outcomes — you know exactly what a transaction will do before submitting it.</p><p>The eUTXO model offers advantages in parallelism and predictability but requires different development patterns than Ethereum's account model. Hydra, Cardano's Layer 2 scaling solution, creates off-chain processing channels that can handle high transaction volumes while settling on the main chain, addressing scalability for applications requiring high throughput.</p></section>
      <section id="defi"><h2>DeFi Ecosystem</h2><p>Cardano's DeFi ecosystem has grown significantly since smart contract launch. Minswap and SundaeSwap serve as leading DEXs. Liqwid Finance provides lending and borrowing. JPEG Store is the primary NFT marketplace. Indigo Protocol enables synthetic assets. While smaller than Ethereum's DeFi ecosystem, Cardano DeFi benefits from low fees, predictable transactions, and a committed user community.</p><p>The staking ecosystem is particularly robust, with over 70% of ADA supply typically staked across thousands of stake pools. Cardano's liquid staking is non-custodial by design — delegated ADA remains in your wallet and is not locked, providing an unusually user-friendly staking experience compared to other networks.</p></section>
      <section id="governance"><h2>Governance</h2><p>The Voltaire era introduces on-chain governance to Cardano through CIP-1694, establishing a governance framework where ADA holders vote on protocol changes, treasury spending, and constitutional amendments. Delegated Representatives (DReps) allow holders to delegate their voting power, similar to representative democracy. A Constitutional Committee provides oversight to ensure governance actions align with the Cardano constitution.</p><p>Project Catalyst, Cardano's community funding mechanism, distributes treasury funds to community-proposed projects through regular funding rounds. This decentralized innovation fund has distributed significant resources to hundreds of projects, fostering grassroots ecosystem development driven by community priorities.</p></section>
      <section id="getting-started"><h2>Getting Started</h2><p>Install Eternl, Yoroi, or Lace wallet for Cardano. Acquire ADA through exchanges and delegate to a stake pool to earn rewards immediately — no lock-up required. Explore DeFi through Minswap, browse NFTs on JPEG Store, or participate in governance through the governance portal. The staking experience on Cardano is among the most user-friendly in crypto.</p></section>
    </LearnPageLayout>
  );
}
