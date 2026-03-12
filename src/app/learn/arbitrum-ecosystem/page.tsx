import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `The Arbitrum Ecosystem Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Explore the Arbitrum ecosystem including its DeFi landscape, Orbit chains, ARB token, and why Arbitrum is the leading Ethereum Layer 2 network.",
};

export default function ArbitrumEcosystemPage() {
  return (
    <LearnPageLayout
      title="The Arbitrum Ecosystem Guide"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="9 min read"
      intro="Arbitrum is the largest Ethereum Layer 2 network by total value locked and transaction volume. Built by Offchain Labs, Arbitrum uses optimistic rollup technology to provide fast, low-cost transactions while inheriting Ethereum's security. Its ecosystem has grown into a thriving hub for DeFi innovation, with protocols like GMX, Pendle, and Camelot pioneering new financial primitives. Arbitrum's EVM equivalence means any Ethereum application can deploy without modification."
      toc={[
        { id: "arbitrum-overview", title: "arbitrum-overview", level: 2 },
        { id: "arbitrum-overview", title: "Arbitrum Overview", level: 2 },
        { id: "defi-landscape", title: "defi-landscape", level: 2 },
        { id: "defi-landscape", title: "DeFi Landscape", level: 2 },
        { id: "orbit-chains", title: "orbit-chains", level: 2 },
        { id: "arbitrum-orbit-chains", title: "Arbitrum Orbit Chains", level: 2 },
        { id: "arb-token", title: "arb-token", level: 2 },
        { id: "arb-token-and-governance", title: "ARB Token and Governance", level: 2 }
      ]}
      faqs={[
        {
          question: "How does Arbitrum differ from Optimism?",
          answer:
            "Both are optimistic rollups, but they differ in fraud proof design and ecosystem strategy. Arbitrum uses interactive fraud proofs while Optimism uses non-interactive ones. Optimism focuses on the Superchain vision with standardized L3 chains, while Arbitrum offers more customization through Orbit chains. Arbitrum currently has more TVL and DeFi activity, while Optimism's ecosystem includes Base.",
        },
        {
          question: "How much does it cost to use Arbitrum?",
          answer:
            "Arbitrum transactions are extremely cheap, typically costing less than $0.01 for simple transfers and under $0.10 for complex DeFi interactions. After EIP-4844, costs dropped even further as data posting to Ethereum became cheaper. This makes Arbitrum accessible for users priced out of Ethereum mainnet.",
        },
        {
          question: "Is Arbitrum decentralized?",
          answer:
            "Arbitrum is progressively decentralizing. It currently has a centralized sequencer controlled by Offchain Labs, though anyone can submit transactions through the L1 if the sequencer censors them. The ARB DAO governs protocol upgrades and treasury spending. A security council handles emergency upgrades. Full decentralization of the sequencer is on the roadmap.",
        },
      ]}
      relatedArticles={[
        { title: "Optimism Ecosystem", href: "/learn/optimism-ecosystem", category: "Learn Crypto" },
        { title: "Base Ecosystem", href: "/learn/base-ecosystem", category: "Learn Crypto" },
        { title: "What Is a Rollup?", href: "/learn/what-is-a-rollup", category: "Learn Crypto" },
        { title: "Ethereum Ecosystem Guide", href: "/learn/ethereum-ecosystem-guide", category: "Learn Crypto" },
      ]}
    >
      <section id="arbitrum-overview">
        <h2>Arbitrum Overview</h2>
        <p>
          Arbitrum launched its One mainnet in August 2021 and quickly became the dominant Ethereum L2. The network is developed by Offchain Labs, a team of former Princeton researchers who pioneered optimistic rollup technology. Arbitrum achieves EVM equivalence, meaning it runs an unmodified version of the Ethereum virtual machine, ensuring that any Solidity smart contract works identically on Arbitrum without changes.
        </p>
        <p>
          The network processes transactions through a sequencer that orders and batches transactions before posting them to Ethereum. Fraud proofs ensure that invalid state transitions can be challenged and corrected. Arbitrum Nova is a separate chain optimized for social and gaming applications with even lower costs through an AnyTrust data availability model. Together, Arbitrum One and Nova serve different segments of users and applications.
        </p>
      </section>

      <section id="defi-landscape">
        <h2>DeFi Landscape</h2>
        <p>
          GMX is arguably the most important native Arbitrum protocol, offering decentralized perpetual futures with up to 100x leverage. Its innovative GLP model, where liquidity providers act as the counterparty to traders, has been widely forked across other chains. Camelot DEX provides concentrated liquidity with a focus on supporting native Arbitrum projects through its launchpad. Pendle Finance enables yield tokenization and trading, allowing users to speculate on or lock in fixed yields.
        </p>
        <p>
          Major Ethereum protocols have all deployed on Arbitrum, including Uniswap, Aave, Curve, and Compound. This makes Arbitrum a near-complete replica of Ethereum&apos;s DeFi landscape but at a fraction of the cost. Native protocols like Radiant Capital (cross-chain lending), Vela Exchange (perpetuals), and Dopex (options) add unique functionality not found on mainnet. The depth and diversity of Arbitrum&apos;s DeFi ecosystem is unmatched among L2 networks.
        </p>
      </section>

      <section id="orbit-chains">
        <h2>Arbitrum Orbit Chains</h2>
        <p>
          Arbitrum Orbit is a framework for launching Layer 3 chains that settle on Arbitrum. Orbit chains can be customized with different data availability solutions, gas tokens, and governance models. This enables gaming companies, enterprises, and other projects to have their own dedicated chains with Arbitrum-level security. Notable Orbit chains include Xai (gaming), Degen Chain (social), and Sanko (entertainment).
        </p>
        <p>
          Orbit represents Arbitrum&apos;s strategy for capturing the long-tail of blockchain demand. Rather than trying to serve every use case on a single chain, Orbit allows specialized chains to handle specific workloads while remaining interoperable with the broader Arbitrum ecosystem. This follows the broader industry trend toward modular, application-specific chains rather than monolithic platforms trying to serve all users on one chain.
        </p>
      </section>

      <section id="arb-token">
        <h2>ARB Token and Governance</h2>
        <p>
          ARB is the governance token of the Arbitrum DAO, which controls protocol upgrades, treasury spending, and ecosystem incentives. The ARB airdrop in March 2023 was one of the largest in crypto history, distributing tokens to over 600,000 eligible addresses. The DAO treasury holds billions of dollars in ARB and ETH, making it one of the best-funded DAOs in crypto.
        </p>
        <p>
          ARB holders can vote on proposals through the Tally governance platform or delegate their voting power to delegates who represent their interests. Active governance participation has led to substantial grant programs funding ecosystem development. The token does not currently accrue revenue from network fees, which has been a point of debate. Proposals to implement fee-sharing or token buybacks are regularly discussed within the community as ways to strengthen ARB&apos;s value proposition.
        </p>
      </section>
    </LearnPageLayout>
  );
}
