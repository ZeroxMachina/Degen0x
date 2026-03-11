import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Ergo (ERG)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn about Ergo (ERG), the UTXO-based smart contract blockchain using Autolykos proof-of-work. Discover ERG tokenomics and how to buy.",
};

export default function ErgoPage() {
  return (
    <LearnPageLayout
      title="What Is Ergo (ERG)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Ergo (ERG) is a UTXO-based proof-of-work blockchain platform that combines the security model of Bitcoin with advanced smart contract capabilities. Founded by former Cardano and IOHK researchers, Ergo features the Autolykos mining algorithm, Sigma protocols for zero-knowledge proofs, and an extended UTXO model that enables sophisticated DeFi applications."
      toc={[
        { id: "what-is", title: "What Is Ergo?", level: 2 },
        { id: "how-it-works", title: "How Does Ergo Work?", level: 2 },
        { id: "tokenomics", title: "ERG Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy ERG", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        { question: "What is Ergo?", answer: "Ergo is a proof-of-work smart contract platform using the extended UTXO model and Autolykos mining algorithm. It was founded by researchers from IOHK (Cardano) and combines Bitcoin-like security with advanced smart contract capabilities." },
        { question: "Where can I buy ERG?", answer: "ERG is available on KuCoin, Gate.io, and several smaller exchanges. It can also be traded on ErgoDEX within the Ergo ecosystem." },
        { question: "Is Ergo a good investment?", answer: "Ergo has innovative technology and a dedicated community, but limited exchange listings and smaller ecosystem reduce liquidity and adoption. Its academic approach to blockchain design sets it apart technically." },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
      ]}
    >
      <section id="what-is"><h2>What Is Ergo?</h2><p>Ergo is a blockchain platform launched in 2019 by Alex Chepurnoy, a co-founder of smartcontract.com (now Chainlink) and former core developer at IOHK, the research company behind Cardano. The platform was designed from the ground up to address what its creators see as fundamental issues in existing blockchains: long-term security, accessible mining, and powerful yet safe smart contracts.</p><p>Ergo uses the extended UTXO (eUTXO) model, which maintains the security and parallelism benefits of Bitcoin's transaction model while adding the ability to execute complex smart contracts. The Autolykos proof-of-work algorithm is memory-hard and ASIC-resistant, designed to keep mining accessible to individuals with consumer hardware.</p></section>
      <section id="how-it-works"><h2>How Does Ergo Work?</h2><p>Ergo's extended UTXO model represents each smart contract state as a distinct UTXO box that can contain ERG, tokens, and data alongside programmable spending conditions. ErgoScript, the smart contract language, enables complex applications while maintaining formal verifiability. Sigma protocols provide native support for zero-knowledge proofs, enabling privacy-preserving applications without additional layers.</p><p>The storage rent mechanism charges a small fee for long-term UTXO storage, preventing state bloat and ensuring miners can earn revenue even after all ERG has been mined. NiPoPoWs (Non-Interactive Proofs of Proof-of-Work) enable light clients and cross-chain verification without downloading the full blockchain.</p></section>
      <section id="tokenomics"><h2>ERG Tokenomics</h2><p>ERG has a fixed maximum supply of 97.7 million tokens. All ERG is distributed through mining rewards with no pre-mine, ICO, or team allocation. The emission schedule follows a predetermined curve that gradually reduces block rewards over approximately eight years. A portion of each block reward goes to the Ergo Foundation treasury for ecosystem development. The storage rent mechanism provides an additional long-term revenue source for miners beyond transaction fees.</p></section>
      <section id="use-cases"><h2>Key Use Cases</h2><p>ERG is used for mining rewards, transaction fees, and DeFi participation within the Ergo ecosystem. The platform supports decentralized exchanges (ErgoDEX/Spectrum), stablecoins (SigmaUSD), lending protocols, and privacy-preserving applications through Sigma protocols. Ergo's oracle framework (Oracle Pools) provides decentralized data feeds for smart contracts. The eUTXO model enables unique applications like trustless atomic swaps and multi-signature transactions.</p></section>
      <section id="how-to-buy"><h2>How to Buy ERG</h2><p>ERG is available on KuCoin, Gate.io, and several smaller exchanges. Within the Ergo ecosystem, it can be traded on Spectrum DEX. Limited major exchange listings mean liquidity is lower than for many comparable projects. After purchasing, store ERG in the Nautilus wallet or the official Ergo wallet for full ecosystem access.</p></section>
      <section id="risks"><h2>Risks and Considerations</h2><p>Ergo's limited exchange listings constrain liquidity and accessibility. The smaller ecosystem and developer community compared to Ethereum, Solana, or even Cardano limits network effects. UTXO-based smart contracts, while technically elegant, require different development paradigms that reduce the pool of available developers. The proof-of-work consensus, while providing strong security, faces growing environmental criticism. Competition from more established smart contract platforms is intense.</p></section>
    </LearnPageLayout>
  );
}
