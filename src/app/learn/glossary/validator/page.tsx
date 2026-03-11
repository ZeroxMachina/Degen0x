import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Validator? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn what a validator is in proof-of-stake blockchains, how validators work, their responsibilities, and how they earn rewards for securing the network.",
};

export default function ValidatorGlossaryPage() {
  return (
    <LearnPageLayout title="What Is a Validator?" categoryName="Learn Crypto" categorySlug="learn" readTime="5 min read"
      intro="A validator is a node operator on a proof-of-stake blockchain who stakes cryptocurrency as collateral and participates in the consensus process by proposing and verifying new blocks. Validators are the equivalent of miners in proof-of-work systems, providing network security through economic incentives rather than computational power. They earn rewards for honest participation and face slashing penalties for malicious behavior or excessive downtime."
      toc={[{ id: "definition", title: "What Is a Validator?", level: 2 }, { id: "how-validators-work", title: "How Validators Work", level: 2 }, { id: "rewards-and-penalties", title: "Rewards and Penalties", level: 2 }, { id: "choosing-validators", title: "Choosing a Validator to Delegate To", level: 2 }]}
      faqs={[{ question: "How many validators does Ethereum have?", answer: "Ethereum has over 900,000 active validators as of 2025, making it one of the most decentralized proof-of-stake networks. Each validator stakes 32 ETH. The large validator set increases censorship resistance and reduces the risk of any single entity controlling the network." },
        { question: "What is the difference between a validator and a delegator?", answer: "A validator runs the actual node infrastructure and participates directly in consensus. A delegator stakes their tokens with a validator without running their own node. Delegators share in the validator's rewards minus a commission fee. The validator bears the operational responsibility while delegators provide additional economic security." }]}
      relatedArticles={[{ title: "Delegator", href: "/learn/glossary/delegator", category: "Glossary" }, { title: "Slashing", href: "/learn/glossary/slashing", category: "Glossary" }, { title: "Validator Guide", href: "/learn/validator-guide", category: "Learn Crypto" }, { title: "What Is Staking?", href: "/learn/what-is-staking", category: "Learn Crypto" }]}
    >
      <h2 id="definition">What Is a Validator?</h2>
      <p>A validator is a blockchain node that has deposited a stake (collateral) to participate in the consensus process. On Ethereum, each validator requires 32 ETH. On Solana, there is no minimum but validators need enough delegated stake to be included in the leader schedule. Validators propose new blocks, verify the blocks proposed by others, and vote on the canonical chain. Their staked collateral ensures they have skin in the game and are financially motivated to act honestly.</p>

      <h2 id="how-validators-work">How Validators Work</h2>
      <p>Validators run specialized software that connects to the blockchain network, processes transactions, and participates in the consensus protocol. On Ethereum, validators are randomly assigned to propose blocks in specific slots and attest to blocks in assigned committees. The randomness is generated from the blockchain state to prevent prediction and manipulation. Validators must maintain high uptime because missed assignments result in lost rewards and potential penalties.</p>

      <h2 id="rewards-and-penalties">Rewards and Penalties</h2>
      <p>Validators earn rewards from three sources: block rewards (newly minted tokens), transaction priority fees, and MEV tips. Penalties include attestation penalties for missing assigned duties, slashing for provably malicious actions like double-signing, and inactivity leaks during prolonged network outages that gradually reduce stakes of offline validators. The reward-to-penalty ratio is designed to make honest operation significantly more profitable than any attack strategy.</p>

      <h2 id="choosing-validators">Choosing a Validator to Delegate To</h2>
      <p>When delegating your stake, evaluate validators based on uptime history, commission rates, total stake (avoid over-concentrated validators for decentralization), and reputation within the community. Client diversity is important on Ethereum: validators running minority clients contribute more to network resilience. Use staking dashboards like Rated Network or StakingRewards to compare validator performance metrics before committing your delegation.</p>
    </LearnPageLayout>
  );
}
