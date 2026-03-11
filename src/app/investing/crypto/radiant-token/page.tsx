import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Radiant Capital Token (RDNT)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about Radiant Capital Token (RDNT), the cross-chain lending protocol token. Discover RDNT tokenomics, omnichain features, and how to buy.",
};

export default function RadiantTokenPage() {
  return (
    <LearnPageLayout
      title="What Is Radiant Capital Token (RDNT)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Radiant Capital Token (RDNT) is the governance and utility token of Radiant Capital, a cross-chain lending protocol that aims to unify fragmented DeFi liquidity across multiple blockchains. Using LayerZero's omnichain technology, Radiant enables users to deposit collateral on one chain and borrow on another, targeting a seamless multi-chain lending experience."
      toc={[
        { id: "what-is", title: "What Is Radiant Capital Token?", level: 2 },
        { id: "how-it-works", title: "How Does Radiant Capital Work?", level: 2 },
        { id: "tokenomics", title: "RDNT Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy RDNT", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        { question: "What is Radiant Capital Token?", answer: "RDNT is the governance token of Radiant Capital, a cross-chain lending protocol using LayerZero technology to enable omnichain borrowing and lending across Arbitrum, BNB Chain, Ethereum, and Base." },
        { question: "Where can I buy RDNT?", answer: "RDNT is available on Binance, KuCoin, Gate.io, and other exchanges. It can also be purchased on DEXs on Arbitrum and BNB Chain." },
        { question: "Is Radiant Capital Token a good investment?", answer: "RDNT offers exposure to cross-chain DeFi lending, but the protocol has experienced a major security exploit and faces significant competition. Evaluate carefully before investing." },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
      ]}
    >
      <section id="what-is"><h2>What Is Radiant Capital Token?</h2><p>Radiant Capital is a decentralized lending protocol that uses LayerZero's omnichain messaging to enable cross-chain deposits and borrowing. Users can deposit assets on one blockchain and borrow against them on a different chain, reducing the need to manually bridge assets. The protocol launched on Arbitrum and expanded to BNB Chain, Ethereum, and Base.</p><p>Radiant V2 introduced the dynamic liquidity provisioning (dLP) requirement, where users must lock RDNT paired with ETH or BNB as LP tokens to be eligible for RDNT emissions. This mechanism ensures that only committed participants who provide both lending capital and RDNT liquidity receive rewards, aligning incentives with long-term protocol health.</p></section>
      <section id="how-it-works"><h2>How Does Radiant Capital Work?</h2><p>Radiant operates as an Aave V2 fork enhanced with LayerZero cross-chain messaging. Depositors supply assets to earn interest, while borrowers provide overcollateralized positions to access loans. The cross-chain component allows collateral on one chain to back borrowing on another through LayerZero's messaging protocol. The dLP requirement mandates that users maintain a minimum ratio of locked RDNT/ETH or RDNT/BNB LP tokens relative to their deposits to qualify for emission rewards.</p><p>Protocol fees from borrowing activity are distributed to dLP lockers, creating a direct revenue stream for committed participants. This model was designed to prevent mercenary capital from farming emissions without contributing to protocol sustainability.</p></section>
      <section id="tokenomics"><h2>RDNT Tokenomics</h2><p>RDNT has a total supply of 1 billion tokens distributed through community emissions, team allocations, treasury reserves, and ecosystem development. The dLP mechanism requires pairing RDNT with native assets as liquidity, effectively removing a significant portion of RDNT from liquid circulation. Protocol revenue from borrowing fees is distributed to dLP lockers. The emission schedule decays over time, transitioning the protocol from emission-driven growth toward fee-based sustainability.</p></section>
      <section id="use-cases"><h2>Key Use Cases</h2><p>RDNT is used for dynamic liquidity provisioning to earn protocol fees and emissions, governance voting, and cross-chain lending participation. The Radiant platform enables cross-chain borrowing and lending, yield generation on deposited assets, and leveraged strategies across multiple chains. The protocol targets users who operate across multiple blockchains and want unified lending without constant bridging.</p></section>
      <section id="how-to-buy"><h2>How to Buy RDNT</h2><p>RDNT is available on Binance, KuCoin, Gate.io, and other centralized exchanges. On decentralized exchanges, it can be purchased on Camelot or Uniswap on Arbitrum and PancakeSwap on BNB Chain. After purchasing, participating in dLP by pairing RDNT with ETH or BNB is necessary to earn full protocol rewards. Store in MetaMask configured for the relevant network.</p></section>
      <section id="risks"><h2>Risks and Considerations</h2><p>Radiant Capital suffered a significant security exploit in October 2024, resulting in the loss of approximately $50 million in user funds. This highlighted the risks of cross-chain lending protocols and multi-sig wallet management. The dLP mechanism creates complexity and requires active management. Competition from Aave's native cross-chain capabilities and other lending protocols is intense. LayerZero dependency introduces bridge-related risks. The protocol's recovery from the exploit and ability to rebuild trust are critical factors for future success.</p></section>
    </LearnPageLayout>
  );
}
