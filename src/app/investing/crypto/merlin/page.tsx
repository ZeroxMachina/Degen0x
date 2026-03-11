import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Merlin Chain (MERL)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about Merlin Chain (MERL), the Bitcoin Layer 2 network for BTC-native DeFi. Discover how it works, tokenomics, use cases, and how to buy MERL.",
};

export default function MerlinPage() {
  return (
    <LearnPageLayout
      title="What Is Merlin Chain (MERL)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Merlin Chain is a Bitcoin Layer 2 network that aims to bring smart contract functionality and DeFi capabilities to the Bitcoin ecosystem. Built using a ZK-rollup architecture that settles on Bitcoin, Merlin Chain enables BTC holders to participate in decentralized finance, NFTs, and other on-chain applications while keeping their assets within the Bitcoin security model. MERL is the governance and utility token of the Merlin Chain ecosystem."
      toc={[
        { id: "what-is", title: "What Is Merlin Chain?", level: 2 },
        { id: "how-it-works", title: "How Does Merlin Chain Work?", level: 2 },
        { id: "tokenomics", title: "MERL Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy MERL", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        {
          question: "What is Merlin Chain?",
          answer: "Merlin Chain is a Bitcoin Layer 2 ZK-rollup network that brings smart contract functionality and DeFi to the Bitcoin ecosystem, allowing BTC holders to access DeFi applications.",
        },
        {
          question: "Where can I buy MERL?",
          answer: "MERL is available on OKX, Bybit, Gate.io, and decentralized exchanges on the Merlin Chain network.",
        },
        {
          question: "Is Merlin Chain a good investment?",
          answer: "Merlin Chain is pioneering Bitcoin L2 DeFi but the BTC L2 space is nascent with unproven security models. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Blast", href: "/investing/crypto/blast", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Merlin Chain?</h2>
      <p>
        Merlin Chain was developed by the Bitmap Tech team (formerly BRC-420 and Bitmap.Game creators) and launched in February 2024 during the Bitcoin L2 boom sparked by the Ordinals and BRC-20 movement. The network attracted over $3 billion in TVL during its staking launch phase, making it one of the largest Bitcoin L2 networks by deposits. Merlin Chain positions itself as the native Layer 2 for bringing EVM-compatible smart contracts to Bitcoin&apos;s massive liquidity pool.
      </p>
      <p>
        The project capitalized on the growing interest in making Bitcoin more programmable beyond simple transfers. While Ethereum has had a rich DeFi ecosystem for years, Bitcoin&apos;s $1 trillion+ market cap has largely sat idle in wallets. Merlin Chain aims to unlock this capital by providing a trustworthy execution environment where BTC holders can lend, swap, provide liquidity, and interact with smart contracts while maintaining exposure to Bitcoin.
      </p>

      <h2 id="how-it-works">How Does Merlin Chain Work?</h2>
      <p>
        Merlin Chain uses a ZK-rollup architecture with an EVM-compatible execution layer. Users bridge BTC and other Bitcoin-native assets (Ordinals, BRC-20 tokens) to Merlin Chain through a decentralized oracle network. Transactions are processed on the Merlin Chain EVM, batched together, and ZK proofs are generated to verify the correctness of state transitions. These proofs and state commitments are ultimately anchored to the Bitcoin blockchain.
      </p>
      <p>
        The network uses a decentralized oracle network for cross-chain communication and data availability. Sequencer nodes order transactions, while prover nodes generate the zero-knowledge proofs. The bridge security relies on a combination of multi-signature controls and the oracle network, with plans to progressively decentralize these components. Merlin Chain supports standard Ethereum development tools and smart contracts, making it accessible to EVM developers.
      </p>

      <h2 id="tokenomics">MERL Tokenomics</h2>
      <p>
        MERL has a total supply of 2.1 billion tokens (mirroring Bitcoin&apos;s 21 million cap with a 100x multiplier). The distribution includes community allocations through staking rewards and airdrops, ecosystem development funds, core contributors with vesting schedules, and investor allocations. MERL is used for governance, staking to secure the network, gas fee payments on certain operations, and incentivizing the decentralized oracle and prover networks.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        Merlin Chain enables BTC-native DeFi including lending, borrowing, and DEX trading with Bitcoin collateral. The platform supports Ordinals and BRC-20 trading with lower fees than Bitcoin mainnet, cross-chain bridges connecting Bitcoin assets to EVM ecosystems, and yield generation on idle BTC holdings. The ecosystem includes DEXs, lending protocols, NFT marketplaces for Ordinals, and launchpads for new Bitcoin-native projects.
      </p>

      <h2 id="how-to-buy">How to Buy MERL</h2>
      <p>
        To buy MERL, register on OKX, Bybit, or Gate.io. Complete identity verification, deposit funds, and purchase MERL tokens. You can also bridge BTC to Merlin Chain using the official bridge and acquire MERL on native DEXs. MERL is available on both Ethereum and the Merlin Chain network. Use MetaMask with the Merlin Chain network configuration to interact with the ecosystem.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        Bitcoin Layer 2 security models are fundamentally different from Ethereum L2s because Bitcoin lacks native smart contract verification capabilities. The ZK proofs cannot be verified on Bitcoin mainnet directly, requiring trust assumptions in the bridge and oracle infrastructure. The bridge security is a critical vulnerability, and any bridge exploit could result in loss of deposited BTC. The Bitcoin L2 space is nascent with unproven architectures.
      </p>
      <p>
        Competition from other Bitcoin L2 solutions (Stacks, BOB, BEVM, Citrea) fragments the market. The massive TVL attracted during the launch phase was largely driven by farming incentives, and retention after rewards end is uncertain. MERL token value depends on sustained Bitcoin DeFi adoption, which is still in its earliest stages. Regulatory uncertainty around wrapped Bitcoin assets and Bitcoin L2 tokens adds additional risk to the investment thesis.
      </p>
    </LearnPageLayout>
  );
}
