import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Validator? Blockchain Validators Explained (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn what blockchain validators are, how they secure Proof of Stake networks, validator requirements, rewards, risks, and how to become a validator or delegate your stake.",
  keywords: ["validator", "blockchain validator", "staking validator", "Ethereum validator", "validator node", "delegating stake"],
};

export default function WhatIsAValidatorPage() {
  return (
    <LearnPageLayout
      title="What Is a Validator?"
      categoryName="Crypto Education"
      categorySlug="learn"
      readTime="8 min"
      intro="A validator is a network participant that verifies transactions and produces new blocks in Proof of Stake blockchains. Validators stake cryptocurrency as collateral to ensure honest behavior, earning rewards for correct participation and facing penalties (slashing) for misbehavior. They are the backbone of PoS network security, replacing the role that miners play in Proof of Work systems."
      toc={[
        { id: "role", title: "The Role of Validators", level: 2 },
        { id: "requirements", title: "Validator Requirements", level: 2 },
        { id: "rewards-risks", title: "Rewards and Risks", level: 2 },
        { id: "delegation", title: "Delegating to Validators", level: 2 },
        { id: "becoming-validator", title: "Becoming a Validator", level: 2 },
        { id: "validator-landscape", title: "The Validator Landscape", level: 2 },
      ]}
      faqs={[
        { question: "How much do validators earn?", answer: "Validator earnings vary by network and market conditions. Ethereum validators typically earn 3-5% APY on their 32 ETH stake. Cosmos validators earn 10-25% depending on the specific chain. Earnings come from block rewards, transaction fees, and MEV. Delegators receive a portion of validator earnings minus the validator's commission." },
        { question: "Can validators steal my staked tokens?", answer: "When delegating to a validator, you do not transfer custody of your tokens — they remain in your control through the staking smart contract. However, if a validator is slashed for misbehavior, delegators may also lose a portion of their delegated stake. Choosing reliable validators with strong track records is important." },
        { question: "What happens if a validator goes offline?", answer: "Validators that go offline receive inactivity penalties that gradually reduce their stake. These penalties are relatively mild for short outages but accumulate over time. Most networks do not consider temporary offline periods as slashable offenses, reserving slashing for actively malicious behavior." },
        { question: "How many validators does Ethereum have?", answer: "Ethereum has hundreds of thousands of active validators, making it one of the most decentralized Proof of Stake networks. Each validator must stake exactly 32 ETH. Many entities run multiple validators, so the number of unique staking entities is smaller than the validator count." },
      ]}
      relatedArticles={[
        { title: "What Is Proof of Stake?", href: "/learn/what-is-proof-of-stake", category: "Learn" },
        { title: "What Is Slashing?", href: "/learn/what-is-slashing", category: "Learn" },
        { title: "How to Stake Ethereum", href: "/learn/how-to-stake-ethereum", category: "Learn" },
        { title: "What Is Liquid Staking?", href: "/learn/what-is-liquid-staking", category: "Learn" },
      ]}
    >
      <section id="role">
        <h2>The Role of Validators</h2>
        <p>
          Validators serve as the guardians of Proof of Stake blockchains. Their primary responsibilities include verifying that transactions are valid, proposing new blocks when selected by the protocol, attesting to blocks proposed by other validators, and maintaining a synchronized copy of the blockchain state. Without validators, the network cannot process transactions or reach consensus on the canonical state of the ledger.
        </p>
        <p>
          When a validator is selected to propose a block, it assembles pending transactions from the mempool, verifies each one against the current state, constructs a valid block, and broadcasts it to the network. Other validators then attest to the block's validity by checking the transactions and state transitions. Once enough attestations are collected, the block is finalized and added to the chain. This process repeats every few seconds, maintaining the continuous operation of the blockchain.
        </p>
        <p>
          The validator role requires both economic commitment and operational reliability. Validators must maintain staked collateral that can be slashed for misbehavior, and they must keep their nodes running with high uptime to avoid inactivity penalties. This combination of financial and operational requirements creates a self-selecting group of committed, capable network participants who have strong incentives to maintain the network's integrity.
        </p>
      </section>

      <section id="requirements">
        <h2>Validator Requirements</h2>
        <p>
          Requirements vary by network but generally include a minimum stake deposit, suitable hardware, reliable internet connectivity, and the technical knowledge to operate validator software. Ethereum requires exactly 32 ETH per validator, a computer with at least 16GB of RAM, a modern multi-core processor, fast SSD storage with several terabytes of capacity, and a stable broadband internet connection. The hardware requirements are modest compared to mining but demand consistent uptime.
        </p>
        <p>
          Other networks have different requirements. Solana validators need high-performance hardware capable of processing thousands of transactions per second. Cosmos-based chains typically require less powerful hardware but demand reliable networking and ongoing software updates. Some networks like Polkadot have dynamic minimum stake requirements that change based on the number of validators seeking to participate, creating competition for validator slots.
        </p>
      </section>

      <section id="rewards-risks">
        <h2>Rewards and Risks</h2>
        <p>
          Validator rewards come from three sources: protocol inflation (newly minted tokens distributed to validators), transaction fees paid by users, and MEV (additional value captured through transaction ordering). The total reward rate depends on the network's inflation schedule, total amount of stake in the network, and level of user activity generating fees. Higher network activity typically means higher validator earnings.
        </p>
        <p>
          Risks include slashing penalties for malicious behavior (double-signing or surround voting), inactivity penalties for going offline, the opportunity cost of locked capital during unbonding periods, operational costs for hardware and electricity, and the market risk of the staked token losing value. Validators must carefully manage these risks through proper operational practices, monitoring systems, and financial planning to ensure that the rewards consistently exceed the costs and risks.
        </p>
      </section>

      <section id="delegation">
        <h2>Delegating to Validators</h2>
        <p>
          Most PoS networks allow token holders to delegate their stake to validators without running a node themselves. Delegation lets passive token holders earn staking rewards while contributing to network security. When you delegate, your tokens remain in your ownership — you simply assign your staking weight to a chosen validator, who includes your stake in their total when participating in consensus.
        </p>
        <p>
          Validators charge a commission (typically 5-15%) on the rewards earned from delegated stake. When choosing a validator to delegate to, consider their track record (uptime, slashing history), commission rate, total stake (overly large validators can harm decentralization), community contributions, and governance participation. Diversifying delegations across multiple validators reduces the risk of any single validator's poor performance impacting all of your staking rewards.
        </p>
      </section>

      <section id="becoming-validator">
        <h2>Becoming a Validator</h2>
        <p>
          To become a validator, you need to acquire the minimum stake, set up the required hardware, install and configure the validator software, stake your tokens through the network's staking contract, and maintain ongoing operations. Detailed guides are available for each network. It is strongly recommended to practice on a testnet before staking real funds, as operational mistakes can result in slashing penalties.
        </p>
        <p>
          Professional validators implement monitoring and alerting systems to detect issues immediately, maintain backup infrastructure to minimize downtime during hardware failures, use key management solutions to protect validator signing keys, and keep software updated to follow protocol changes. The operational demands are continuous — a validator must be available to produce blocks at any time and must stay synchronized with the latest network state and software versions.
        </p>
      </section>

      <section id="validator-landscape">
        <h2>The Validator Landscape</h2>
        <p>
          The validator landscape spans from individual enthusiasts running single nodes at home to large staking-as-a-service providers managing thousands of validators. Liquid staking protocols like Lido and Rocket Pool have become major players, pooling deposits from thousands of users to run validators at scale. Centralized exchanges also operate significant validator infrastructure, offering staking services to their customers.
        </p>
        <p>
          Decentralization of the validator set is a persistent concern. If a small number of entities control a majority of stake, the network's censorship resistance and security guarantees weaken. Many protocols implement mechanisms to encourage decentralization, such as capping rewards for large validators, providing additional incentives for smaller validators, and ensuring geographic and jurisdictional diversity across the validator set.
        </p>
      </section>
    </LearnPageLayout>
  );
}
