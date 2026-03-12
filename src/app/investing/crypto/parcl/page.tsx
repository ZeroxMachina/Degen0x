import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Parcl (PRCL)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description: "Learn about Parcl (PRCL), the real estate price index trading protocol on Solana. Discover how it works, tokenomics, use cases, and how to buy PRCL.",
};

export default function ParclPage() {
  return (
    <LearnPageLayout title="What Is Parcl (PRCL)? Price, Guide & How to Buy" categoryName="Investing" categorySlug="investing" readTime="8 min read" intro="Parcl is a decentralized protocol on Solana that enables trading of real estate price indices. Users can go long or short on real estate prices in specific cities and neighborhoods without owning physical property, using Parcl's proprietary price feed data to create synthetic exposure to real estate markets through perpetual futures contracts." toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-parcl", title: "What Is Parcl?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-parcl-work", title: "How Does Parcl Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "prcl-tokenomics", title: "PRCL Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-prcl", title: "How to Buy PRCL", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]} faqs={[{question:"What is Parcl?",answer:"Parcl is a Solana protocol enabling trading of real estate price indices. Users can go long or short on property prices in specific cities without owning physical real estate."},{question:"Where can I buy PRCL?",answer:"PRCL is available on Bybit, Gate.io, and Jupiter DEX. It trades against USDT and SOL pairs."},{question:"Is Parcl a good investment?",answer:"Parcl offers unique real estate price exposure in DeFi, but the market for on-chain RWA trading is still nascent. This is not financial advice. Do your own research."}]} relatedArticles={[{title:"Best Cryptos to Buy",href:"/investing/best/cryptos-to-buy",category:"Investing"},{title:"How to Invest in Crypto",href:"/investing/learn/how-to-invest-in-crypto",category:"Investing"},{title:"Solana",href:"/investing/crypto/solana",category:"Investing"}]}>
      <h2 id="what-is">What Is Parcl?</h2>
      <p>Parcl was founded to democratize real estate investment by creating tradeable digital markets for property price movements. Instead of buying physical property, users can trade perpetual futures contracts based on real estate price indices for cities like Miami, New York, Los Angeles, and others. Parcl Labs provides the proprietary data feed that tracks real estate prices across various markets.</p>
      <p>The protocol operates on Solana for its high throughput and low transaction costs, making it practical for frequent trading of real estate indices. Parcl represents a unique intersection of real-world assets (RWA) and DeFi, bringing traditional real estate market exposure to the blockchain in a composable, accessible format.</p>

      <h2 id="how-it-works">How Does Parcl Work?</h2>
      <p>Parcl uses a liquidity pool model where LPs deposit USDC to provide liquidity for traders. Traders open long or short positions on city-level real estate indices with leverage. The Parcl price feed aggregates property transaction data to calculate index values. Funding rates balance long and short exposure, and positions are settled in USDC.</p>

      <h2 id="tokenomics">PRCL Tokenomics</h2>
      <p>PRCL has a total supply of 1 billion tokens. The token is used for governance, staking for protocol rewards, and accessing premium data and features. PRCL stakers can earn a share of protocol fees from trading activity.</p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>Parcl enables synthetic real estate price exposure without property ownership, hedging real estate portfolio risk, speculative trading on city-level property markets, real estate data access through the Parcl price feed, and liquidity provision earning real estate trading fees.</p>

      <h2 id="how-to-buy">How to Buy PRCL</h2>
      <p>To buy PRCL, use Jupiter DEX on Solana or purchase on Bybit or Gate.io. Store PRCL in Phantom wallet.</p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>The on-chain real estate trading market is extremely nascent with limited adoption. Price feed accuracy for real estate markets may not match the precision of crypto oracle feeds. Regulatory scrutiny of synthetic real estate products could be significant. Trading volume and liquidity are limited. The concept requires substantial education for mainstream adoption.</p>
    </LearnPageLayout>
  );
}
