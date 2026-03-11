import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is NEAR Protocol (NEAR)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about NEAR Protocol (NEAR), the sharded blockchain focused on chain abstraction and AI. Discover how it works, tokenomics, use cases, and how to buy NEAR.",
};

export default function NEARPage() {
  return (
    <LearnPageLayout
      title="What Is NEAR Protocol (NEAR)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="NEAR Protocol is a sharded proof-of-stake Layer 1 blockchain designed for usability and scalability. Co-founded by Illia Polosukhin, co-author of the Transformer paper that underpins modern AI, NEAR focuses on chain abstraction and AI integration to make Web3 accessible to mainstream users."
      toc={[
        { id: "what-is", title: "What Is NEAR Protocol?", level: 2 },
        { id: "how-it-works", title: "How Does NEAR Work?", level: 2 },
        { id: "tokenomics", title: "NEAR Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy NEAR", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        {
          question: "What is NEAR Protocol?",
          answer:
            "NEAR Protocol is a sharded Layer 1 blockchain focused on usability and chain abstraction. It uses Nightshade sharding for scalability and human-readable account names for a better user experience.",
        },
        {
          question: "Where can I buy NEAR?",
          answer:
            "NEAR is available on Binance, Coinbase, Kraken, OKX, and other major exchanges. It trades against USDT, BTC, and fiat currencies.",
        },
        {
          question: "Is NEAR a good investment?",
          answer:
            "NEAR has strong technology and a unique AI narrative through its founder, but competes against larger ecosystems. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Sui", href: "/investing/crypto/sui", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is NEAR Protocol?</h2>
      <p>
        NEAR Protocol was co-founded in 2020 by Illia Polosukhin and Alexander Skidanov. Polosukhin is notably the co-author of the seminal Transformer paper (&quot;Attention Is All You Need&quot;) that forms the foundation of modern AI models like GPT and Claude. This connection gives NEAR a unique credibility in the AI-blockchain intersection.
      </p>
      <p>
        NEAR uses Nightshade sharding to achieve scalability, splitting the network into multiple parallel shards that process transactions simultaneously. The protocol features human-readable account names (like alice.near instead of hexadecimal addresses) and a key-based permission system that makes blockchain interactions more intuitive for mainstream users.
      </p>
      <p>
        The chain abstraction initiative is NEAR&apos;s vision for making the multi-chain crypto experience seamless. Users interact with a single account that can access applications across any blockchain without manually bridging assets or switching networks, removing one of the biggest friction points in crypto user experience.
      </p>

      <h2 id="how-it-works">How Does NEAR Work?</h2>
      <p>
        Nightshade sharding divides the NEAR network into multiple shards, each processing its own set of transactions in parallel. Unlike traditional sharding where each shard is a separate blockchain, Nightshade produces a single block that contains chunks from all shards, simplifying cross-shard communication and maintaining a unified network state.
      </p>
      <p>
        NEAR uses a Thresholded Proof of Stake consensus mechanism where validators are assigned to shards based on their stake. The network supports both Rust and JavaScript for smart contract development through WebAssembly, lowering the barrier for web developers. Meta transactions allow dApps to pay gas fees on behalf of users, enabling gasless user experiences.
      </p>

      <h2 id="tokenomics">NEAR Tokenomics</h2>
      <p>
        NEAR has a total supply of 1 billion tokens at genesis with approximately 5% annual inflation from staking rewards. Transaction fees on NEAR are partially burned (70%) and partially allocated to smart contract developers (30%), creating a unique incentive where developers earn revenue when their contracts are used. This fee-burning mechanism provides deflationary pressure against staking inflation.
      </p>
      <p>
        NEAR is used for transaction fees, staking with validators (earning approximately 8-10% APY), storage deposits for on-chain data, and governance. The relatively short unbonding period of 2-3 epochs (about 36-52 hours) makes staking more flexible than many competing networks.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        NEAR supports DeFi protocols, NFT platforms, and social applications. The chain abstraction vision positions NEAR as a gateway to multi-chain interactions. NEAR&apos;s AI focus, leveraging its founder&apos;s deep AI background, includes initiatives around decentralized AI inference, data marketplaces, and AI-powered blockchain interactions.
      </p>
      <p>
        The Aurora EVM layer on NEAR provides full Ethereum compatibility, allowing existing Ethereum dApps to deploy on NEAR with minimal changes. The ecosystem includes lending protocols, DEXs, and innovative social and gaming applications that leverage NEAR&apos;s account model and low transaction costs.
      </p>

      <h2 id="how-to-buy">How to Buy NEAR</h2>
      <p>
        To buy NEAR, register on a major exchange such as Binance, Coinbase, or Kraken. Complete identity verification, deposit funds, and purchase NEAR tokens. After buying, you can stake NEAR through the NEAR Wallet or Meteor Wallet to earn staking rewards. Ledger hardware wallets support NEAR for secure long-term storage. The staking yield and short unbonding period make NEAR attractive for yield-focused investors.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        NEAR competes for developer and user attention against larger ecosystems like Ethereum, Solana, and Cosmos. While its technology is strong, ecosystem total value locked and DeFi activity remain smaller than top-tier chains. The chain abstraction vision is ambitious but unproven at scale, requiring widespread adoption across multiple chains.
      </p>
      <p>
        Token inflation from staking rewards and ecosystem incentives could create selling pressure. The AI narrative, while compelling, needs to translate into concrete products and real usage rather than remaining purely narrative-driven. Success depends on executing both the chain abstraction and AI roadmaps while simultaneously growing developer adoption in a highly competitive market.
      </p>
    </LearnPageLayout>
  );
}
