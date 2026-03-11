import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Scroll (SCR)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about Scroll (SCR), the zkEVM Layer 2 scaling solution for Ethereum. Discover how it works, tokenomics, use cases, and how to buy SCR.",
};

export default function ScrollPage() {
  return (
    <LearnPageLayout
      title="What Is Scroll (SCR)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Scroll is an Ethereum Layer 2 scaling solution that uses a bytecode-level compatible zkEVM to execute smart contracts identically to Ethereum while generating zero-knowledge proofs for verification. Founded by Sandy Peng and Ye Zhang, Scroll aims to be the most Ethereum-equivalent ZK-rollup, minimizing the differences developers encounter when porting applications from Ethereum mainnet."
      toc={[
        { id: "what-is", title: "What Is Scroll?", level: 2 },
        { id: "how-it-works", title: "How Does Scroll Work?", level: 2 },
        { id: "tokenomics", title: "SCR Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy SCR", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        {
          question: "What is Scroll?",
          answer: "Scroll is an Ethereum Layer 2 zkEVM rollup that provides bytecode-level EVM compatibility, allowing Ethereum applications to deploy on Scroll with no code changes while benefiting from lower costs.",
        },
        {
          question: "Where can I buy SCR?",
          answer: "SCR is available on Binance, OKX, Gate.io, and decentralized exchanges on the Scroll network.",
        },
        {
          question: "Is Scroll a good investment?",
          answer: "Scroll has strong technical foundations with its zkEVM approach, but competes in a crowded L2 market. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "zkSync", href: "/investing/crypto/zksync", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Scroll?</h2>
      <p>
        Scroll was co-founded by Sandy Peng and Ye Zhang, who began researching zkEVM technology in 2021. The project raised over $80 million from investors including Polychain Capital, Bain Capital Crypto, and Sequoia China. Scroll launched its mainnet in October 2023, positioning itself as a community-driven, open-source zkEVM that prioritizes Ethereum equivalence over performance optimizations that sacrifice compatibility.
      </p>
      <p>
        The key differentiator for Scroll is its bytecode-level compatibility with the Ethereum Virtual Machine. While other ZK-rollups require custom compilers or modified development environments, Scroll executes the same EVM opcodes as Ethereum, meaning developers can deploy existing contracts using standard Ethereum tools like Hardhat, Foundry, and Remix without any modifications. This approach aims to maximize the portability of Ethereum&apos;s existing ecosystem.
      </p>

      <h2 id="how-it-works">How Does Scroll Work?</h2>
      <p>
        Scroll processes transactions through a three-stage pipeline: sequencing, proving, and finalization. The sequencer orders and executes transactions, producing execution traces. These traces are sent to a distributed network of provers that generate ZK proofs attesting to the correct execution of each batch. Finally, the proof and state commitments are submitted to Ethereum for verification, achieving on-chain finality.
      </p>
      <p>
        The zkEVM circuit design converts each EVM opcode into arithmetic constraints that can be verified by zero-knowledge proofs. Scroll uses a hierarchical proving scheme where individual transaction proofs are aggregated into batch proofs and then further compressed into chunk proofs, reducing the on-chain verification cost. The project is working toward decentralizing the prover network to allow anyone to participate in proof generation.
      </p>

      <h2 id="tokenomics">SCR Tokenomics</h2>
      <p>
        SCR has a total supply of 1 billion tokens. The distribution includes allocations for the community through airdrops and ecosystem incentives, core contributors with vesting schedules, investors, and a foundation reserve. SCR is used for governance over protocol upgrades, fee parameters, and ecosystem fund allocation. The token also plays a role in the planned decentralized prover network, where provers may need to stake SCR as collateral.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        Scroll enables seamless deployment of Ethereum dApps with lower transaction costs, DeFi protocols including lending markets (Aave deployments), DEXs, and stablecoin applications. The bytecode compatibility makes Scroll ideal for projects that want L2 cost savings without rewriting contracts. The ecosystem also supports NFT platforms, identity solutions, and cross-chain bridges that connect Scroll to other L2s and Ethereum mainnet.
      </p>

      <h2 id="how-to-buy">How to Buy SCR</h2>
      <p>
        To buy SCR, register on Binance, OKX, or Gate.io. Complete identity verification, deposit funds, and purchase SCR tokens. You can also bridge ETH to Scroll using the official bridge and acquire SCR on native DEXs. SCR is available on both Ethereum mainnet and the Scroll network, compatible with MetaMask and other Ethereum wallets after adding the Scroll network.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        Scroll competes directly with zkSync, Linea, Polygon zkEVM, and other ZK-rollups for users and developers, creating a fragmented Layer 2 landscape. The sequencer and prover are currently centralized, creating single points of failure and censorship risk. ZK proof generation costs are significant, and the economics of operating the prover network at scale are still being validated.
      </p>
      <p>
        The L2 market is experiencing fee compression as networks compete for users with incentive programs. Scroll&apos;s TVL and transaction volume must grow substantially to generate meaningful protocol revenue. Token unlock schedules from early investors create selling pressure. The zkEVM technology, while advancing rapidly, still faces challenges around proving efficiency and cost optimization that impact the network&apos;s long-term sustainability.
      </p>
    </LearnPageLayout>
  );
}
