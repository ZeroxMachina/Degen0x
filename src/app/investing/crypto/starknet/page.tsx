import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Starknet (STRK)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about Starknet (STRK), the ZK-rollup Layer 2 scaling solution for Ethereum. Discover how it works, tokenomics, use cases, and how to buy STRK.",
};

export default function StarknetPage() {
  return (
    <LearnPageLayout
      title="What Is Starknet (STRK)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="9 min read"
      intro="Starknet is a permissionless, decentralized ZK-rollup Layer 2 network built on Ethereum. Developed by StarkWare, it uses STARK proofs to provide scalable, secure computation while maintaining Ethereum's security guarantees. STRK is the native token used for fees, staking, and governance."
      toc={[
        { id: "what-is", title: "What Is Starknet?", level: 2 },
        { id: "how-it-works", title: "How Does Starknet Work?", level: 2 },
        { id: "tokenomics", title: "STRK Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy STRK", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        {
          question: "What is Starknet?",
          answer:
            "Starknet is a ZK-rollup Layer 2 network on Ethereum that uses STARK proofs for scalable, low-cost transactions while inheriting Ethereum's security.",
        },
        {
          question: "Where can I buy STRK?",
          answer:
            "STRK is available on Binance, OKX, Bybit, Coinbase, and other major exchanges. It trades against USDT, ETH, and various fiat pairs.",
        },
        {
          question: "Is Starknet a good investment?",
          answer:
            "Starknet has leading ZK technology and a strong developer ecosystem, but faces competition from other L2s and has significant token unlock schedules. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "zkSync", href: "/investing/crypto/zksync", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Starknet?</h2>
      <p>
        Starknet is a permissionless Layer 2 validity rollup built on Ethereum, developed by StarkWare Industries. Founded by Eli Ben-Sasson (co-inventor of STARK proofs), Uri Kolodny, and Alessandro Chiesa, StarkWare has been at the forefront of zero-knowledge proof technology since 2018. Starknet launched its mainnet in 2021 and has grown into one of the largest ZK-rollup ecosystems.
      </p>
      <p>
        Unlike optimistic rollups that assume transactions are valid and use fraud proofs for disputes, Starknet generates cryptographic STARK proofs that mathematically verify the correctness of every transaction batch. This provides stronger security guarantees and faster finality since withdrawals to Ethereum do not require a challenge period.
      </p>
      <p>
        Starknet uses its own programming language called Cairo, which is specifically designed for generating STARK proofs efficiently. While this means developers need to learn a new language, Cairo enables computational patterns that are not possible or practical in other smart contract environments, particularly around provable computation and privacy.
      </p>

      <h2 id="how-it-works">How Does Starknet Work?</h2>
      <p>
        Starknet batches thousands of transactions together and executes them off-chain. A prover then generates a STARK proof that attests to the validity of all transactions in the batch. This proof is posted to Ethereum, where a verifier smart contract checks its correctness. The key property of STARKs is that proof verification is exponentially faster than re-executing the transactions.
      </p>
      <p>
        STARKs (Scalable Transparent Arguments of Knowledge) differ from SNARKs by not requiring a trusted setup ceremony, making them more transparent and quantum-resistant. Starknet&apos;s recursive proving allows proofs of proofs, further compressing the data posted to Ethereum and reducing costs for end users.
      </p>

      <h2 id="tokenomics">STRK Tokenomics</h2>
      <p>
        STRK has a total supply of 10 billion tokens. The distribution includes allocations for StarkWare investors, core contributors, the Starknet Foundation for grants and ecosystem development, and community provisions including airdrops. STRK is used for paying transaction fees on Starknet, staking to secure the network, and governance over protocol parameters.
      </p>
      <p>
        The token follows a multi-year vesting schedule for team and investor allocations. Community incentive programs distribute STRK to users and developers who contribute to the ecosystem. Staking STRK is being introduced as part of the network&apos;s decentralization roadmap.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        Starknet hosts a growing DeFi ecosystem including decentralized exchanges, lending protocols, and yield optimization platforms. Its ability to handle complex computation cheaply makes it well-suited for on-chain gaming, where games like Realms and Influence run entirely on Starknet with logic that would be prohibitively expensive on Ethereum mainnet.
      </p>
      <p>
        The platform is also used for identity solutions, verifiable computation, and applications requiring privacy features through zero-knowledge proofs. StarkWare&apos;s technology has been validated through StarkEx, a permissioned scaling engine used by dYdX, Immutable X, and Sorare before Starknet&apos;s launch.
      </p>

      <h2 id="how-to-buy">How to Buy STRK</h2>
      <p>
        To buy STRK, register on a major exchange such as Binance, OKX, or Coinbase. Complete identity verification, deposit funds, and purchase STRK tokens. After buying, you can bridge STRK to the Starknet Layer 2 using the official bridge or third-party bridges. Argent X and Braavos are the primary wallets for interacting with the Starknet ecosystem.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        Starknet competes with other Ethereum Layer 2 solutions including Arbitrum, Optimism, Base, zkSync, and Scroll. The use of Cairo rather than Solidity creates a learning curve for developers, potentially limiting ecosystem growth compared to EVM-compatible L2s. Significant token unlocks from investors and team members could create sustained selling pressure.
      </p>
      <p>
        The network is still working toward full decentralization, with the sequencer currently operated by StarkWare. Transaction costs, while lower than Ethereum mainnet, can be higher than some competing L2 solutions. The ZK-rollup technology is complex and still maturing, and bugs in the proving system could have severe consequences for network security.
      </p>
    </LearnPageLayout>
  );
}
