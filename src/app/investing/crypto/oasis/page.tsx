import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Oasis Network (ROSE)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description: "Learn about Oasis Network (ROSE), the privacy-focused Layer 1 blockchain. Discover ROSE tokenomics, confidential computing, and how to buy.",
};

export default function OasisPage() {
  return (
    <LearnPageLayout
      title="What Is Oasis Network (ROSE)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Oasis Network (ROSE) is a privacy-focused Layer 1 blockchain that separates consensus from computation, enabling scalable and confidential smart contracts. Using techniques like trusted execution environments (TEEs) and secure enclaves, Oasis allows developers to build privacy-preserving applications that protect sensitive data while maintaining blockchain verifiability."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-oasis-network", title: "What Is Oasis Network?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-oasis-network-work", title: "How Does Oasis Network Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "rose-tokenomics", title: "ROSE Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-rose", title: "How to Buy ROSE", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        { question: "What is Oasis Network?", answer: "Oasis Network is a privacy-first Layer 1 blockchain with a unique architecture separating consensus from smart contract execution. ROSE is used for staking, gas fees, and governance." },
        { question: "Where can I buy ROSE?", answer: "ROSE is available on Binance, Coinbase, KuCoin, and other major exchanges." },
        { question: "Is Oasis Network a good investment?", answer: "Oasis targets the growing privacy and confidential computing market. AI data privacy is a potential catalyst, but ecosystem adoption has been slower than competitors." },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
      ]}
    >
      <section id="what-is"><h2>What Is Oasis Network?</h2><p>Oasis Network is a Layer 1 blockchain designed for privacy-preserving computation, founded by Dawn Song, a professor at UC Berkeley known for her work in computer security. The network's unique architecture separates the consensus layer from the execution layer (called ParaTimes), allowing multiple parallel runtimes with different properties to operate on a shared consensus mechanism. This design enables both public and confidential smart contract execution.</p><p>The Sapphire ParaTime provides an EVM-compatible confidential computing environment where smart contract state and transactions can be encrypted, enabling privacy-preserving DeFi, confidential voting, and secure data processing. This positions Oasis at the intersection of blockchain privacy and AI data protection, two rapidly growing market segments.</p></section>
      <section id="how-it-works"><h2>How Does Oasis Network Work?</h2><p>The consensus layer uses proof-of-stake with ROSE staking to secure the network. ParaTimes are independent execution environments that share the consensus layer's security. Sapphire, the confidential EVM runtime, uses TEEs to process encrypted smart contract data, allowing computations on private data without exposing it. Cipher provides a WASM-based confidential runtime. Emerald offers a standard EVM-compatible environment for non-confidential applications.</p><p>Developers can deploy Solidity smart contracts on Sapphire with minimal modifications to gain confidentiality features. The privacy layer handles encryption and key management transparently, making it accessible to existing EVM developers without deep cryptography expertise.</p></section>
      <section id="tokenomics"><h2>ROSE Tokenomics</h2><p>ROSE has a total supply of 10 billion tokens. Distribution includes staking rewards, ecosystem development, community grants, and team allocations. ROSE is used for staking (with yields from block rewards), transaction fees across all ParaTimes, and governance. A significant portion of ROSE is locked in staking, reducing liquid supply. The token vesting schedule for early investors and team has largely completed, reducing future unlock-driven sell pressure.</p></section>
      <section id="use-cases"><h2>Key Use Cases</h2><p>ROSE is used for network staking, gas fees, and governance. The Oasis platform enables confidential DeFi applications, private data tokenization, AI model training on encrypted data, confidential voting systems, and privacy-preserving analytics. The growing regulatory focus on data privacy and the explosion of AI create potential demand for Oasis's confidential computing capabilities.</p></section>
      <section id="how-to-buy"><h2>How to Buy ROSE</h2><p>ROSE is available on Binance, Coinbase, KuCoin, Gate.io, and other major exchanges. After purchasing, stake ROSE through the Oasis Wallet or supported exchange staking to earn network rewards. For ecosystem interaction, the Oasis Wallet browser extension provides access to Sapphire and other ParaTimes.</p></section>
      <section id="risks"><h2>Risks and Considerations</h2><p>Oasis ecosystem adoption has been relatively slow compared to competing Layer 1s. The privacy niche, while technically important, has historically struggled to attract mainstream DeFi and consumer applications. TEE-based privacy relies on hardware security assumptions that may be vulnerable to side-channel attacks. Competition from other privacy solutions (Aztec, Zcash, Secret Network) and general-purpose chains adding privacy features is ongoing. The small DeFi ecosystem limits network effects and liquidity.</p></section>
    </LearnPageLayout>
  );
}
