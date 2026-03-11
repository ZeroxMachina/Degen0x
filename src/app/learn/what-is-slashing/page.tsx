import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Slashing? Validator Penalties Explained (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn what slashing is in Proof of Stake blockchains, why validators get slashed, how slashing penalties work, and how to protect against slashing as a staker.",
  keywords: ["slashing", "validator slashing", "staking penalty", "double signing", "PoS security", "slashing protection"],
};

export default function WhatIsSlashingPage() {
  return (
    <LearnPageLayout
      title="What Is Slashing? Validator Penalties Explained"
      categoryName="Crypto Education"
      categorySlug="learn"
      readTime="7 min"
      intro="Slashing is a penalty mechanism in Proof of Stake blockchains that destroys a portion of a validator's staked cryptocurrency when they engage in provably malicious or negligent behavior. Slashing serves as the primary enforcement mechanism for honest behavior in PoS systems — the threat of losing staked capital creates a powerful economic deterrent against attacks."
      toc={[
        { id: "why-slashing", title: "Why Slashing Exists", level: 2 },
        { id: "slashable-offenses", title: "Slashable Offenses", level: 2 },
        { id: "penalty-mechanics", title: "Penalty Mechanics", level: 2 },
        { id: "impact-delegators", title: "Impact on Delegators", level: 2 },
        { id: "protection", title: "Slashing Protection", level: 2 },
      ]}
      faqs={[
        { question: "How much do you lose from slashing?", answer: "On Ethereum, the initial slashing penalty is at least 1/32 of the validator's stake (1 ETH from a 32 ETH stake). Additional correlation penalties apply if many validators are slashed simultaneously — in a mass slashing event, validators could lose their entire stake. Other networks have different penalty structures." },
        { question: "Can accidental slashing happen?", answer: "Yes, though it is uncommon with proper setup. Running the same validator keys on two machines simultaneously is the most common cause of accidental slashing. This can happen during migrations or failover events. Using slashing protection databases and never running duplicate validator instances prevents accidental slashing." },
        { question: "Do delegators get slashed too?", answer: "On most PoS networks, delegators share in slashing penalties proportional to their delegation. This means choosing a reliable validator is important for delegators, not just for maximizing rewards but also for protecting their staked capital from potential slashing events." },
        { question: "What happens to slashed tokens?", answer: "Slashed tokens are typically burned (permanently destroyed) rather than redistributed. This means slashing reduces the total token supply, creating a small deflationary effect. Some networks may redirect a portion of slashed funds to a protocol treasury or to the reporter who detected the offense." },
      ]}
      relatedArticles={[
        { title: "What Is a Validator?", href: "/learn/what-is-a-validator", category: "Learn" },
        { title: "What Is Proof of Stake?", href: "/learn/what-is-proof-of-stake", category: "Learn" },
        { title: "What Is Restaking?", href: "/learn/what-is-restaking", category: "Learn" },
        { title: "How to Stake Ethereum", href: "/learn/how-to-stake-ethereum", category: "Learn" },
      ]}
    >
      <section id="why-slashing">
        <h2>Why Slashing Exists</h2>
        <p>
          In Proof of Work, the cost of attacking the network is the hardware and electricity required to generate enough hash power — these costs are external and cannot be recovered. In Proof of Stake, the cost of participation is the staked capital, which could theoretically be used to attack the network and then withdrawn. Slashing solves this by making the stake destructible — if a validator attacks the network, they lose their staked capital, ensuring that the cost of misbehavior always exceeds the potential gain.
        </p>
        <p>
          Without slashing, validators could attempt to finalize conflicting blocks, engage in censorship, or perform other attacks without risking their economic stake. Slashing creates a game-theoretic environment where the rational strategy for any validator is always to follow the protocol honestly, because the expected punishment for misbehavior outweighs any possible profit. This economic security model is what allows Proof of Stake networks to achieve consensus without energy-intensive mining.
        </p>
      </section>

      <section id="slashable-offenses">
        <h2>Slashable Offenses</h2>
        <p>
          The two primary slashable offenses on Ethereum are double proposing (creating two different blocks for the same slot) and surround voting (making attestations that contradict each other in a way that could enable conflicting chain histories). Both actions indicate either a deliberate attempt to attack the network or a dangerous configuration error that could facilitate an attack. The evidence for these offenses is cryptographic and irrefutable — the validator's signed messages prove the misbehavior.
        </p>
        <p>
          Different networks define different slashable behaviors. Cosmos-based chains slash for double signing and extended downtime. Some networks also slash for participating in governance attacks or for providing false oracle data. The common thread is that slashable offenses are behaviors that threaten the integrity or availability of the network, and the evidence must be provably verifiable on-chain so that penalties cannot be applied unjustly.
        </p>
      </section>

      <section id="penalty-mechanics">
        <h2>Penalty Mechanics</h2>
        <p>
          Ethereum's slashing mechanics involve three components. The initial penalty destroys a minimum of 1/32 of the validator's stake immediately upon detection. A correlation penalty, assessed after approximately 36 days, scales based on how many other validators were slashed in the same time period — if the slashing event appears to be part of a coordinated attack (many validators slashed simultaneously), the penalty increases dramatically, potentially destroying the entire stake. Finally, the slashed validator is forcibly exited from the validator set and cannot withdraw remaining funds for a waiting period.
        </p>
        <p>
          The correlation penalty is a particularly elegant design. An individual accidental slashing (such as misconfiguring failover infrastructure) results in a relatively mild penalty — painful but not catastrophic. But a coordinated attack where many validators are slashed together triggers catastrophic penalties that could destroy all involved stakes. This progressive penalty structure appropriately distinguishes between honest mistakes and deliberate attacks while creating an overwhelming deterrent against organized misbehavior.
        </p>
      </section>

      <section id="impact-delegators">
        <h2>Impact on Delegators</h2>
        <p>
          On networks that support delegation (Cosmos, Polkadot, Solana, etc.), delegators typically share in slashing penalties proportional to their delegation. If a validator you have delegated to gets slashed by 5%, you also lose 5% of your delegated stake. This shared-risk model incentivizes delegators to carefully evaluate validators before delegating and creates market pressure for validators to maintain high operational standards.
        </p>
        <p>
          To mitigate delegation risk, distribute your stake across multiple validators rather than concentrating with a single operator. Research validators' track records, infrastructure setup, and operational practices before delegating. Some validators offer insurance or slashing protection guarantees, though these are only as reliable as the entity providing them. On Ethereum, liquid staking protocols like Lido spread staking across many validators, diversifying slashing risk for individual stakers.
        </p>
      </section>

      <section id="protection">
        <h2>Slashing Protection</h2>
        <p>
          For validators, the most critical protection is never running the same validator keys on multiple machines simultaneously. This is the most common cause of accidental slashing. Validator clients include built-in slashing protection databases that record signed messages and refuse to sign conflicting ones. When migrating a validator between machines, always ensure the old instance is completely shut down before starting the new one, and migrate the slashing protection database.
        </p>
        <p>
          Additional protections include using remote signing services that enforce slashing protection at the key management level, implementing monitoring and alerting systems that detect unusual validator behavior immediately, participating in testnet exercises to practice operational procedures, and maintaining comprehensive documentation of your validator setup and recovery procedures. The investment in proper operational security is small compared to the potential loss from a slashing event.
        </p>
      </section>
    </LearnPageLayout>
  );
}
