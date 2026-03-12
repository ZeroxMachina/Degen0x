import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is EigenLayer (EIGEN)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about EigenLayer (EIGEN), the restaking protocol securing new services with staked ETH. Discover how it works, tokenomics, use cases, and how to buy EIGEN.",
};

export default function EigenLayerPage() {
  return (
    <LearnPageLayout
      title="What Is EigenLayer (EIGEN)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="9 min read"
      intro="EigenLayer is a restaking protocol on Ethereum that allows staked ETH to be used as security for additional services and protocols beyond just securing the Ethereum network. By enabling restaking, EigenLayer creates a marketplace for decentralized trust where new protocols can bootstrap security from Ethereum's existing validator set rather than building their own."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-eigenlayer", title: "What Is EigenLayer?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-eigenlayer-work", title: "How Does EigenLayer Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "eigen-tokenomics", title: "EIGEN Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-eigen", title: "How to Buy EIGEN", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        {
          question: "What is EigenLayer?",
          answer: "EigenLayer is a restaking protocol that lets staked ETH secure additional protocols and services. It creates a shared security marketplace on Ethereum.",
        },
        {
          question: "Where can I buy EIGEN?",
          answer: "EIGEN is available on Binance, OKX, Bybit, and other exchanges. It trades against USDT and ETH.",
        },
        {
          question: "Is EigenLayer a good investment?",
          answer: "EigenLayer introduces a novel restaking primitive with massive TVL, but the model is new and untested at scale. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Lido DAO", href: "/investing/crypto/lido", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is EigenLayer?</h2>
      <p>
        EigenLayer was founded by Sreeram Kannan, a professor at the University of Washington, and launched in 2023. The protocol introduces the concept of restaking, where ETH already staked on Ethereum can opt in to secure additional protocols called Actively Validated Services (AVSs). This allows new protocols to leverage Ethereum&apos;s massive economic security without needing to bootstrap their own validator networks.
      </p>
      <p>
        The protocol attracted billions in total value locked, becoming one of the largest DeFi protocols by TVL. EigenLayer fundamentally changes the economics of building middleware and infrastructure on Ethereum by commoditizing trust and security. Projects that would previously need their own token and validator set for security can now rent it from Ethereum stakers through EigenLayer.
      </p>

      <h2 id="how-it-works">How Does EigenLayer Work?</h2>
      <p>
        Restakers deposit ETH or liquid staking tokens (stETH, rETH) into EigenLayer and opt in to validate specific AVSs. Operators run the software required by each AVS and are subject to slashing conditions defined by that service. The restaked ETH serves as collateral, and if an operator behaves maliciously, their restaked ETH can be slashed. In return, restakers and operators earn additional rewards from the AVSs they secure.
      </p>
      <p>
        AVSs include data availability layers (EigenDA), oracle networks, bridges, sequencers, and other infrastructure that benefits from Ethereum-grade security. EigenDA, the flagship AVS, provides data availability services for rollups at lower costs than posting data directly to Ethereum.
      </p>

      <h2 id="tokenomics">EIGEN Tokenomics</h2>
      <p>
        EIGEN has a total supply of approximately 1.67 billion tokens. The token serves as an intersubjective work token that can be staked alongside ETH to provide security for AVSs that require subjective fault attribution (where slashing conditions cannot be verified on-chain). EIGEN staking complements ETH restaking by covering a broader range of potential faults. The token was distributed through airdrops to early restakers and ecosystem participants.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        EigenLayer enables shared security for AVSs including data availability layers, decentralized sequencers, oracle networks, bridges, and keeper networks. Restakers earn additional yield on their staked ETH. New protocols can launch with Ethereum-grade security from day one rather than building trust from scratch. The protocol reduces the cost and complexity of bootstrapping decentralized services.
      </p>

      <h2 id="how-to-buy">How to Buy EIGEN</h2>
      <p>
        To buy EIGEN, register on Binance, OKX, or Bybit. Complete identity verification, deposit funds, and purchase EIGEN tokens. To participate in restaking, deposit ETH or liquid staking tokens on the EigenLayer platform and select AVSs to validate. EIGEN is an ERC-20 token compatible with MetaMask and Ledger wallets.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        Restaking introduces compounded slashing risk, where a single validator error could result in losses across multiple protocols simultaneously. The model is new and untested during severe market stress. Smart contract risk is amplified by the complexity of the restaking system. Concerns exist about systemic risk to Ethereum if EigenLayer grows too large.
      </p>
      <p>
        AVS revenue generation is still developing, and whether restaking yields justify the additional risk remains to be proven. Token unlock schedules from investors and team allocations create selling pressure. Regulatory uncertainty around restaking as a financial product adds legal risk. Competition from other shared security models could fragment the market.
      </p>
    </LearnPageLayout>
  );
}
