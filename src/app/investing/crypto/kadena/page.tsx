import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Kadena (KDA)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description: "Learn about Kadena (KDA), the scalable Proof-of-Work blockchain with smart contracts. Discover KDA tokenomics and how to buy.",
};

export default function KadenaPage() {
  return (
    <LearnPageLayout title="What Is Kadena (KDA)? Price, Guide & How to Buy" categoryName="Investing" categorySlug="investing" readTime="8 min read" intro="Kadena (KDA) is a scalable Layer 1 blockchain that uniquely combines Proof-of-Work security with smart contract functionality and theoretically infinite scalability through its braided multi-chain architecture. Founded by Stuart Popejoy and Will Martino, former JP Morgan blockchain engineers who built the bank's first blockchain, Kadena aims to deliver enterprise-grade performance without sacrificing decentralization or security." toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-kadena", title: "What Is Kadena?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-kadena-work", title: "How Does Kadena Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "kda-tokenomics", title: "KDA Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-kda", title: "How to Buy KDA", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]} faqs={[{question:"What is Kadena?",answer:"Kadena is a scalable Proof-of-Work blockchain with smart contracts using the Pact language. Its braided multi-chain architecture enables high throughput while maintaining PoW security."},{question:"Where can I buy KDA?",answer:"KDA is available on Coinbase, KuCoin, Gate.io, and other exchanges."},{question:"Is Kadena a good investment?",answer:"Kadena offers unique scalable PoW technology. Its value depends on ecosystem growth, developer adoption of the Pact language, and proving its scaling claims in production."}]} relatedArticles={[{title:"Best Cryptos to Buy",href:"/investing/best/cryptos-to-buy",category:"Investing"},{title:"How to Invest in Crypto",href:"/investing/learn/how-to-invest-in-crypto",category:"Investing"}]}>
      <section id="what-is"><h2>What Is Kadena?</h2><p>Kadena was founded in 2016 by Stuart Popejoy and Will Martino, who developed JP Morgan's first blockchain (Juno). The project launched its public chain in 2020 with a unique approach: running 20 braided chains in parallel, all sharing the same Proof-of-Work security model. This multi-chain architecture theoretically allows throughput to scale by adding more chains without reducing security, a claim unique among PoW blockchains.</p><p>Kadena introduced Pact, a human-readable smart contract language designed to be formally verifiable, meaning contract bugs can be mathematically proven absent before deployment. Pact also features Formal Verification tools built into the language, targeting enterprise users who require auditable, secure smart contracts. The combination of scalable PoW and enterprise-grade smart contracts positions Kadena uniquely in the blockchain landscape.</p></section>
      <section id="how-it-works"><h2>How Does Kadena Work?</h2><p>Kadena's Chainweb protocol braids 20 parallel chains together using a Merkle tree structure where each chain includes references to its peer chains. This creates a unified security model where attacking one chain requires attacking all 20 simultaneously. Miners mine across all chains, and transactions can move between chains through a cross-chain protocol. Gas fees on Kadena are paid in KDA, with a gas station concept allowing dApp developers to subsidize user transaction costs, enabling gasless user experiences.</p></section>
      <section id="tokenomics"><h2>KDA Tokenomics</h2><p>KDA has a maximum supply of 1 billion tokens with a fixed emission schedule spanning approximately 120 years. Block rewards are distributed across all 20 chains to miners. The platform allocation includes ecosystem development, investor, and contributor portions. KDA is used for gas fees across all chains, with demand scaling proportionally to network activity. The long emission schedule provides sustained mining incentives but also means significant ongoing dilution for current holders.</p></section>
      <section id="use-cases"><h2>Key Use Cases</h2><p>KDA is used for gas fees across all 20 Kadena chains, mining rewards, DeFi participation on Kadena's DEXs and protocols, smart contract deployment, and cross-chain transactions. The Pact language enables enterprise-grade applications requiring formal verification and human-readable contracts.</p></section>
      <section id="how-to-buy"><h2>How to Buy KDA</h2><p>KDA is available on Coinbase, KuCoin, Gate.io, and other exchanges. After purchasing, KDA can be used in the Kadena DeFi ecosystem or held. Store in Chainweaver (official wallet) or Ecko Wallet.</p></section>
      <section id="risks"><h2>Risks and Considerations</h2><p>Kadena's ecosystem is small relative to major smart contract platforms, with limited DeFi TVL and developer activity. The Pact language, while technically strong, creates a learning curve that may deter developers familiar with Solidity. The 20-chain architecture is complex and has not been stress-tested at the scale of top blockchains. The long token emission schedule means significant future dilution. Mining profitability fluctuations affect network security. The project must compete for developer and user attention with well-funded, established platforms that have larger communities and more comprehensive tooling.</p></section>
    </LearnPageLayout>
  );
}
