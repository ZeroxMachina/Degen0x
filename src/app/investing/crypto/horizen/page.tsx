import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Horizen (ZEN)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description: "Learn about Horizen (ZEN), the blockchain platform with zero-knowledge proof technology. Discover ZEN tokenomics, EON sidechain, and how to buy.",
};

export default function HorizenPage() {
  return (
    <LearnPageLayout
      title="What Is Horizen (ZEN)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Horizen (ZEN) is a blockchain ecosystem that has evolved from a privacy-focused cryptocurrency into a platform for zero-knowledge proof-powered sidechains. The Horizen EON sidechain provides an EVM-compatible smart contract platform, while the Zendoo protocol enables customizable, ZK-proof-verified sidechain deployment."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-horizen", title: "What Is Horizen?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-horizen-work", title: "How Does Horizen Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "zen-tokenomics", title: "ZEN Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-zen", title: "How to Buy ZEN", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        { question: "What is Horizen?", answer: "Horizen is a blockchain platform with ZK-proof-powered sidechains. ZEN is the native token used for staking on the EON sidechain, node operation, and cross-chain transactions." },
        { question: "Where can I buy ZEN?", answer: "ZEN is available on Binance, Coinbase, and other major exchanges." },
        { question: "Is Horizen a good investment?", answer: "Horizen has pivoted toward ZK-proof infrastructure with its sidechain ecosystem. Competition in the ZK space is intense, but the platform has a long track record and established node network." },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
      ]}
    >
      <section id="what-is"><h2>What Is Horizen?</h2><p>Horizen (formerly ZenCash) is a blockchain platform that launched in 2017 as a privacy-focused fork of Zcash. Over time, the project evolved its focus from pure privacy toward becoming a platform for zero-knowledge proof-enabled sidechains. The Zendoo sidechain protocol allows developers to create custom sidechains that are verified by the Horizen mainchain using ZK-SNARK proofs, providing scalability and flexibility.</p><p>The EON sidechain is Horizen's EVM-compatible smart contract platform, enabling Ethereum-style DeFi applications and dApp development with proof-of-stake consensus. Horizen maintains one of the largest node networks in the blockchain industry with thousands of secure and super nodes distributed globally.</p></section>
      <section id="how-it-works"><h2>How Does Horizen Work?</h2><p>The Horizen mainchain uses an Equihash proof-of-work consensus with a modified difficulty adjustment algorithm. Sidechains communicate with the mainchain through the Zendoo protocol, which uses recursive zero-knowledge proofs to verify sidechain state transitions without the mainchain processing every sidechain transaction. This architecture allows for theoretically unlimited horizontal scaling through parallel sidechain deployment.</p><p>EON uses delegated proof-of-stake consensus where validators stake ZEN to secure the sidechain. Cross-chain transfers between the mainchain and sidechains are facilitated through the Zendoo protocol with ZK-proof verification. The node network provides infrastructure for sidechain operations and data availability.</p></section>
      <section id="tokenomics"><h2>ZEN Tokenomics</h2><p>ZEN has a maximum supply of 21 million tokens, identical to Bitcoin's supply cap. Block rewards are distributed among miners, secure nodes, super nodes, and the Horizen DAO treasury. The halving schedule follows Bitcoin's pattern, reducing block rewards approximately every four years. ZEN is used for gas fees on EON, node collateral requirements, and cross-chain transfers between the mainchain and sidechains.</p></section>
      <section id="use-cases"><h2>Key Use Cases</h2><p>ZEN is used for node operations, EON staking, gas fees, and cross-chain transfers. The Horizen ecosystem supports EVM-compatible DeFi on EON, custom sidechain deployment for enterprise and project-specific use cases, and the large secure/super node infrastructure network. The ZK-proof infrastructure positions Horizen for applications requiring verifiable computation and data integrity.</p></section>
      <section id="how-to-buy"><h2>How to Buy ZEN</h2><p>ZEN is available on Binance, Coinbase, KuCoin, and other exchanges. After purchasing, consider running a node or staking on EON for network rewards. Store ZEN in the official Sphere by Horizen wallet or any compatible cryptocurrency wallet.</p></section>
      <section id="risks"><h2>Risks and Considerations</h2><p>Horizen faces intense competition in the ZK-proof space from zkSync, StarkNet, Polygon zkEVM, and other ZK-focused projects with larger developer communities. The EON sidechain is relatively new and building its DeFi ecosystem from a small base. The pivot from privacy coin to sidechain platform has required significant repositioning. Mining-based tokenomics create ongoing sell pressure from miners. The complexity of the multi-chain architecture may deter developers accustomed to simpler deployment environments.</p></section>
    </LearnPageLayout>
  );
}
