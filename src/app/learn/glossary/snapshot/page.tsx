import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Snapshot: What It Means in Crypto (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Learn what a snapshot means in cryptocurrency. Understand how snapshots record blockchain state for airdrops, governance voting, and network upgrades.",
  keywords: ["crypto snapshot", "blockchain snapshot", "airdrop snapshot", "token snapshot"],
};

export default function SnapshotGlossaryPage() {
  return (
    <LearnPageLayout
      title="Snapshot: What It Means in Crypto"
      categoryName="Crypto Education"
      categorySlug="learn"
      readTime="5 min"
      intro="A snapshot in cryptocurrency is a record of the state of a blockchain at a specific block height or point in time. Snapshots capture wallet balances, smart contract states, and other on-chain data, and are commonly used for airdrops, governance votes, and hard forks."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "definition", title: "Definition", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-it-works", title: "How It Works", level: 2 },
        { id: "examples", title: "examples", level: 2 },
        { id: "examples-use-cases", title: "Examples & Use Cases", level: 2 },
        { id: "why-it-matters", title: "why-it-matters", level: 2 },
        { id: "why-it-matters", title: "Why It Matters", level: 2 }
      ]}
      faqs={[
        {
          question: "Do I need to do anything special for a snapshot?",
          answer:
            "Generally, you just need to hold the required tokens in an eligible wallet at the time of the snapshot. Some snapshots require tokens to be in a self-custody wallet rather than on an exchange. Always check the specific requirements for each snapshot event, as eligibility criteria vary by project.",
        },
        {
          question: "Can I sell my tokens after a snapshot?",
          answer:
            "Yes, once a snapshot has been taken, your balance at that specific block height is permanently recorded. You are free to move or sell your tokens afterward without affecting your eligibility for whatever the snapshot was intended for, such as an airdrop or governance vote.",
        },
      ]}
      relatedArticles={[
        { title: "Token", href: "/learn/glossary/token", category: "Glossary" },
        { title: "Staking", href: "/learn/glossary/staking", category: "Glossary" },
        { title: "How Airdrops Work", href: "/learn/how-airdrops-work", category: "Learn" },
      ]}
    >
      <section id="definition">
        <h2>Definition</h2>
        <p>
          A snapshot in the cryptocurrency world is a precise recording of the entire state of a blockchain ledger at a particular moment, identified by a specific block number or block height. This recorded state includes every wallet address and its token balance, the state of all smart contracts, pending transactions, and any other data stored on the blockchain at that exact point. Think of it as taking a photograph of the entire blockchain at a single instant in time. Snapshots are immutable once taken because they reference a specific block that has already been confirmed and added to the chain. Projects and protocols use snapshots for a variety of purposes including determining eligibility for token distributions, recording voting power for governance proposals, facilitating network forks, and creating backups of blockchain state for recovery purposes.
        </p>
      </section>
      <section id="how-it-works">
        <h2>How It Works</h2>
        <p>
          The technical process of taking a snapshot involves querying the blockchain state at a specified block height. Since blockchains are deterministic and every full node stores the complete history, any node can reconstruct the exact state at any past block. For airdrop snapshots, a project announces a future block number at which balances will be recorded. At that block, an indexer or script reads every relevant token balance across all wallets. The resulting data is then used to create a distribution list. For governance snapshots, platforms like Snapshot.org read token balances at a specific block to determine voting power, ensuring that users cannot buy tokens just to vote and then immediately sell. The snapshot block is typically announced in advance for governance but may be kept secret for airdrops to prevent manipulation. After the snapshot data is collected, it can be stored off-chain and referenced by smart contracts through Merkle trees that allow efficient verification of individual claims.
        </p>
      </section>
      <section id="examples">
        <h2>Examples & Use Cases</h2>
        <p>
          One of the most famous snapshot events occurred when Uniswap took a snapshot of all addresses that had interacted with its protocol before September 2020, awarding 400 UNI tokens to each qualifying wallet. Ethereum Name Service performed a similar snapshot to distribute ENS tokens to domain holders. Hard forks also use snapshots extensively: when Bitcoin Cash forked from Bitcoin, a snapshot of all Bitcoin balances was taken, and holders received an equal amount of BCH. Governance platforms use snapshots for every vote, ensuring that voting power reflects token holdings at the proposal creation time rather than being manipulated during the voting period. Many DeFi protocols use regular snapshots to calculate staking rewards, track liquidity provider contributions, and determine fee distribution. Layer 2 networks and new chains often snapshot the parent chain to bootstrap initial state and balances.
        </p>
      </section>
      <section id="why-it-matters">
        <h2>Why It Matters</h2>
        <p>
          Snapshots are a fundamental tool in the cryptocurrency ecosystem because they provide a verifiable, tamper-proof record of blockchain state at any given moment. For fair token distributions, snapshots ensure that rewards go to genuine participants rather than opportunistic traders who buy in at the last minute. In governance, snapshots prevent vote manipulation by locking voting power at a specific point in time, making it impossible to temporarily acquire tokens just to influence a vote. For network upgrades and forks, snapshots ensure continuity by preserving the complete state of the original chain. Understanding how snapshots work is important for any crypto participant because they directly affect eligibility for airdrops, governance participation rights, and potential rewards from network upgrades. Being aware of upcoming snapshots can help users position themselves appropriately, whether that means holding tokens in the right wallet, staking in eligible protocols, or participating in specific DeFi activities that qualify for future rewards.
        </p>
      </section>
    </LearnPageLayout>
  );
}
