import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Blockchain Bridge? Complete Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what blockchain bridges are, how they work, the different types available, and the security considerations when moving assets between chains.",
};

export default function WhatIsABridgePage() {
  return (
    <LearnPageLayout
      title="What Is a Blockchain Bridge?"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="9 min read"
      intro="A blockchain bridge is a protocol that enables the transfer of assets and data between two different blockchain networks. Since blockchains are inherently isolated systems that cannot natively communicate with each other, bridges serve as the connective tissue of the multi-chain ecosystem. They allow users to move tokens from Ethereum to Solana, from Arbitrum to Base, or between any supported networks, unlocking liquidity and enabling cross-chain DeFi strategies."
      toc={[
        { id: "how-bridges-work", title: "How Blockchain Bridges Work", level: 2 },
        { id: "types-of-bridges", title: "Types of Bridges", level: 2 },
        { id: "popular-bridges", title: "Popular Bridges in 2025", level: 2 },
        { id: "security-risks", title: "Security Risks and Best Practices", level: 2 },
      ]}
      faqs={[
        {
          question: "Are blockchain bridges safe?",
          answer:
            "Bridges are among the highest-risk components in crypto. Over $2 billion has been lost to bridge exploits, including Ronin ($625M), Wormhole ($320M), and Nomad ($190M). While bridge security has improved significantly, they remain attractive targets for hackers due to the large amount of value they hold. Use well-audited bridges with strong track records.",
        },
        {
          question: "How long does bridging take?",
          answer:
            "Bridge times vary from seconds to several days. Fast bridges like Across and Stargate complete transfers in 1-5 minutes. Native bridges like the Arbitrum bridge can take up to 7 days for withdrawals from L2 to Ethereum due to the challenge period. The speed usually correlates with the trust model and security guarantees.",
        },
        {
          question: "What fees are involved in bridging?",
          answer:
            "Bridge fees include a protocol fee (typically 0.04-0.3% of the transfer amount) plus gas fees on both the source and destination chains. Bridging to Ethereum mainnet is the most expensive due to high gas costs. L2-to-L2 bridging is very cheap, often under $1 total.",
        },
      ]}
      relatedArticles={[
        { title: "Layer 1 vs Layer 2", href: "/learn/layer-1-vs-layer-2", category: "Learn Crypto" },
        { title: "What Is a Rollup?", href: "/learn/what-is-a-rollup", category: "Learn Crypto" },
        { title: "Cross-Chain", href: "/learn/glossary/cross-chain", category: "Glossary" },
        { title: "How to Bridge Crypto", href: "/wallets/learn/how-to-bridge-crypto", category: "Wallets" },
      ]}
    >
      <section id="how-bridges-work">
        <h2>How Blockchain Bridges Work</h2>
        <p>
          At a fundamental level, bridges work by locking tokens on the source chain and minting equivalent representations on the destination chain. When you bridge 1 ETH from Ethereum to Arbitrum, the bridge locks your ETH in a smart contract on Ethereum and mints 1 wrapped ETH on Arbitrum. When you bridge back, the wrapped tokens are burned and the original ETH is released from the lock contract.
        </p>
        <p>
          The security of a bridge depends on how the lock-and-mint process is verified. Some bridges use a set of validators or multisig signers to attest that tokens were locked before minting. Others use cryptographic proofs like zero-knowledge proofs or optimistic verification with challenge periods. The trust assumptions of the verification mechanism determine the bridge&apos;s overall security.
        </p>
      </section>

      <section id="types-of-bridges">
        <h2>Types of Bridges</h2>
        <p>
          Trusted bridges rely on a centralized or semi-centralized set of validators to verify cross-chain transfers. They are faster and cheaper but require users to trust the validator set. Examples include Multichain and older bridge designs. Trustless bridges use on-chain verification mechanisms like light clients or proofs to verify transfers without relying on trusted intermediaries.
        </p>
        <p>
          Native bridges are built by the L2 chains themselves, like the Arbitrum bridge or Optimism bridge, and inherit the security of the underlying rollup. Liquidity network bridges like Across and Stargate use pools of liquidity on each chain and relayers to fill orders quickly, often settling faster than native bridges. Intent-based bridges match users with solvers who front the destination tokens and are reimbursed on the source chain.
        </p>
      </section>

      <section id="popular-bridges">
        <h2>Popular Bridges in 2025</h2>
        <p>
          Across Protocol has emerged as a leading bridge for EVM chains, offering fast transfers with competitive fees and a strong security model backed by UMA&apos;s optimistic oracle. Stargate, built on LayerZero, provides deep liquidity pools for stablecoin transfers across many chains. Wormhole connects a broad set of chains including Solana, Aptos, and Sui in addition to EVM networks.
        </p>
        <p>
          For L2 users, native bridges offered by Arbitrum, Optimism, Base, and zkSync provide the most trust-minimized option for bridging to and from Ethereum. The trade-off is speed: optimistic rollup bridges have a 7-day withdrawal period for Ethereum exits. Aggregators like Li.Fi and Socket combine multiple bridges into a single interface, automatically routing users through the cheapest or fastest path.
        </p>
      </section>

      <section id="security-risks">
        <h2>Security Risks and Best Practices</h2>
        <p>
          Bridge exploits have resulted in some of the largest hacks in crypto history. The primary attack vectors include compromised validator keys, smart contract vulnerabilities, and flaws in the message verification logic. When a bridge is exploited, the wrapped tokens on the destination chain become unbacked, often causing those tokens to lose their peg and become worthless.
        </p>
        <p>
          To minimize risk, use well-established bridges with multiple security audits, active bug bounty programs, and a proven track record. Avoid bridging large amounts through a single bridge; split transfers across multiple bridges when possible. Consider using native rollup bridges for large transfers where the 7-day wait is acceptable. Always verify you are using the official bridge URL to avoid phishing attacks.
        </p>
      </section>
    </LearnPageLayout>
  );
}
