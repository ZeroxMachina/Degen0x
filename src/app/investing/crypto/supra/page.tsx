import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Supra (SUPRA)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about Supra (SUPRA), the IntraLayer oracle and cross-chain infrastructure platform. Discover how it works, tokenomics, use cases, and how to buy SUPRA.",
};

export default function SupraPage() {
  return (
    <LearnPageLayout
      title="What Is Supra (SUPRA)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Supra is an IntraLayer that provides decentralized oracle services, verifiable randomness, cross-chain communication, and high-performance blockchain infrastructure. Combining a vertically integrated Layer 1 blockchain with oracle and bridge capabilities, Supra aims to be a one-stop infrastructure platform that connects Web2 data sources with Web3 smart contracts across all major blockchains."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-supra", title: "What Is Supra?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-supra-work", title: "How Does Supra Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "supra-tokenomics", title: "SUPRA Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-supra", title: "How to Buy SUPRA", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        {
          question: "What is Supra?",
          answer:
            "Supra is an IntraLayer combining oracle services, VRF (verifiable random function), cross-chain bridging, and a Layer 1 blockchain into a vertically integrated Web3 infrastructure platform.",
        },
        {
          question: "Where can I buy SUPRA?",
          answer:
            "SUPRA is available on Bybit, KuCoin, Gate.io, and other exchanges. It trades against USDT and BTC pairs.",
        },
        {
          question: "Is Supra a good investment?",
          answer:
            "Supra offers comprehensive infrastructure with strong technical capabilities, but faces established competition in every vertical. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Chainlink", href: "/investing/crypto/chainlink", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Supra?</h2>
      <p>
        Supra was founded by Joshua Tobkin and has been in development since 2018, with significant academic research backing its protocol design. The project positions itself as a comprehensive infrastructure layer (IntraLayer) that bundles multiple critical Web3 services into a single platform. Rather than protocols needing separate providers for oracles, randomness, bridges, and execution, Supra offers all of these through a unified network.
      </p>
      <p>
        The Supra oracle network (DORA - Distributed Oracle Agreement) delivers price feeds with sub-second latency across dozens of blockchains. The protocol&apos;s VRF (Verifiable Random Function) provides provably random numbers for gaming and NFT applications. The HyperNova bridge uses cryptographic proofs for cross-chain message verification. All of these services run on Supra&apos;s own high-throughput Layer 1 blockchain built with the Move smart contract language.
      </p>

      <h2 id="how-it-works">How Does Supra Work?</h2>
      <p>
        DORA uses a novel consensus mechanism for oracle data where validators form decentralized clusters that independently collect, aggregate, and verify data. The system achieves consensus on data values in a single round, enabling extremely low latency. Data feeds are pushed to destination chains through Supra&apos;s relay network. The pull-based oracle model allows protocols to fetch the latest signed data on-demand, reducing gas costs.
      </p>
      <p>
        The Supra Layer 1 uses a DAG-based consensus called Moonshot that achieves high throughput with fast finality. Smart contracts are written in Move, the language developed for Aptos and Sui. The HyperNova bridge uses succinct proofs to verify cross-chain messages without trusted intermediaries. Supra&apos;s Automation Network (SNAP) provides keeper-like services for automated smart contract execution based on oracle-triggered conditions.
      </p>

      <h2 id="tokenomics">SUPRA Tokenomics</h2>
      <p>
        SUPRA has a total supply of 100 billion tokens. The token is used for staking to secure the Supra network, paying for oracle and VRF services, governance, and gas fees on the Supra Layer 1. Node operators stake SUPRA to participate in oracle data validation, bridge verification, and blockchain consensus. A portion of service fees is distributed to stakers, tying token value to actual network usage.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        Supra provides low-latency price feeds for DeFi protocols, verifiable randomness for gaming and NFT minting, cross-chain bridging through the HyperNova bridge, automated contract execution through SNAP, and high-throughput smart contract execution on its Layer 1. The integrated approach appeals to protocols seeking a single infrastructure partner for multiple Web3 services.
      </p>

      <h2 id="how-to-buy">How to Buy SUPRA</h2>
      <p>
        To buy SUPRA, create an account on Bybit, KuCoin, or Gate.io. Complete identity verification, deposit funds, and purchase SUPRA tokens. After purchasing, stake SUPRA to earn network rewards or participate in governance. Store SUPRA in supported wallets compatible with the Supra network.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        Supra competes against established leaders in every vertical: Chainlink in oracles, LayerZero in bridges, and Aptos/Sui in Move-based Layer 1s. Building competitive products across multiple verticals simultaneously is extremely challenging. The large token supply of 100 billion creates dilution concerns. The IntraLayer concept requires protocols to adopt Supra across multiple services for maximum value.
      </p>
      <p>
        The Move-based Layer 1 ecosystem is smaller than EVM, potentially limiting developer adoption. Building awareness and trust in a crowded infrastructure market requires significant resources. Token unlock schedules from early investors may create selling pressure. Regulatory uncertainty around oracle and bridge services applies to Supra across its multiple product lines.
      </p>
    </LearnPageLayout>
  );
}
