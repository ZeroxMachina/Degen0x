import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is zkSync (ZK)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about zkSync (ZK), the Ethereum Layer 2 scaling solution using zero-knowledge proofs. Discover how it works, tokenomics, use cases, and how to buy ZK.",
};

export default function ZkSyncPage() {
  return (
    <LearnPageLayout
      title="What Is zkSync (ZK)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="9 min read"
      intro="zkSync is an Ethereum Layer 2 scaling solution developed by Matter Labs that uses zero-knowledge rollup (ZK-rollup) technology to provide fast, low-cost transactions while inheriting Ethereum's security guarantees. zkSync Era, the mainnet version, supports full EVM compatibility through its custom zkEVM compiler, enabling developers to deploy existing Solidity smart contracts with minimal modifications. ZK is the native governance token of the zkSync ecosystem."
      toc={[
        { id: "what-is", title: "What Is zkSync?", level: 2 },
        { id: "how-it-works", title: "How Does zkSync Work?", level: 2 },
        { id: "tokenomics", title: "ZK Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy ZK", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        {
          question: "What is zkSync?",
          answer: "zkSync is an Ethereum Layer 2 ZK-rollup that uses zero-knowledge proofs to batch transactions off-chain and verify them on Ethereum, providing scalability with full security inheritance.",
        },
        {
          question: "Where can I buy ZK?",
          answer: "ZK is available on Binance, OKX, Bybit, Gate.io, and decentralized exchanges on the zkSync Era network.",
        },
        {
          question: "Is zkSync a good investment?",
          answer: "zkSync is a leading ZK-rollup with strong technology, but faces intense L2 competition and uncertain fee revenue dynamics. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "StarkNet", href: "/investing/crypto/starknet", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is zkSync?</h2>
      <p>
        zkSync was developed by Matter Labs, founded by Alex Gluchowski, with the mission of scaling Ethereum using zero-knowledge proof technology. The project evolved through multiple phases: zkSync Lite (1.0) launched in 2020 as a payment-focused ZK-rollup, while zkSync Era (2.0) launched in March 2023 as a fully EVM-compatible ZK-rollup supporting general smart contract execution. Matter Labs raised over $450 million from top-tier investors including a16z, Dragonfly, and Blockchain Capital.
      </p>
      <p>
        The key technical achievement of zkSync Era is its zkEVM implementation, which compiles Solidity and Vyper smart contracts into a ZK-friendly execution format. Unlike optimistic rollups that rely on fraud proofs with challenge periods, zkSync uses validity proofs (ZK-SNARKs) that mathematically guarantee the correctness of every state transition, enabling faster finality and stronger security guarantees. The ZK token was distributed via airdrop in June 2024 to early users and contributors.
      </p>

      <h2 id="how-it-works">How Does zkSync Work?</h2>
      <p>
        zkSync Era processes transactions off-chain in batches, executes them through its zkEVM, and generates zero-knowledge proofs that attest to the validity of the entire batch. These proofs are submitted to Ethereum along with the state differences, where an on-chain verifier contract confirms their validity. This approach provides instant cryptographic finality once the proof is verified on Ethereum, unlike optimistic rollups which require a 7-day challenge window.
      </p>
      <p>
        The system uses a custom compiler (zksolc for Solidity, zkvyper for Vyper) that translates smart contract bytecode into circuits compatible with the ZK proving system. Account abstraction is natively integrated, allowing smart contract wallets to pay gas in any token, batch multiple operations into single transactions, and implement custom authentication logic. zkSync also introduced Hyperchains, a framework for deploying sovereign ZK-rollup chains that settle through zkSync to Ethereum.
      </p>

      <h2 id="tokenomics">ZK Tokenomics</h2>
      <p>
        ZK has a total supply of 21 billion tokens. The distribution includes 17.5% for the community airdrop, 49.1% for the ecosystem and community initiatives, 16.1% for investors, and 16.1% for Matter Labs team members with vesting schedules. The token is used for governance over protocol parameters, upgrade decisions, and treasury allocation. ZK holders can delegate voting power to representatives for active governance participation.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        zkSync enables low-cost Ethereum transactions with cryptographic security guarantees, DeFi applications including DEXs (SyncSwap, Mute), lending protocols, and yield aggregators. The native account abstraction simplifies user onboarding with gasless transactions and social recovery. Hyperchains allow enterprises and projects to deploy custom ZK-rollup chains that inherit zkSync&apos;s security. The platform also targets NFT minting, gaming, and payment applications that benefit from fast, cheap transactions.
      </p>

      <h2 id="how-to-buy">How to Buy ZK</h2>
      <p>
        To buy ZK, register on Binance, OKX, or Bybit. Complete identity verification, deposit funds, and purchase ZK tokens. You can also bridge ETH to zkSync Era using the official bridge and trade ZK on native DEXs like SyncSwap. ZK is an ERC-20 token on both Ethereum and zkSync Era, compatible with MetaMask and Ledger wallets. Add the zkSync Era network to your wallet to interact with the ecosystem.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        zkSync faces intense competition from other Layer 2 solutions including Arbitrum, Optimism, Base, and StarkNet. The ZK token airdrop was controversial due to perceived unfair distribution criteria, causing community backlash. ZK proof generation requires significant computational resources, and the proving infrastructure is currently centralized with Matter Labs operating the sequencer and prover.
      </p>
      <p>
        The path to full decentralization of the sequencer and prover remains a work in progress. Token unlock schedules from investors and team members create selling pressure. The L2 landscape is becoming increasingly crowded, making user acquisition and retention challenging. Revenue depends on the spread between fees charged to users and costs of posting proofs and data to Ethereum, which may compress over time as competition intensifies.
      </p>
    </LearnPageLayout>
  );
}
