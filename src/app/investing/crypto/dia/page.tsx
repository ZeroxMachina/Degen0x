import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is DIA (DIA)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about DIA (DIA), the open-source oracle platform for Web3. Discover how it works, tokenomics, use cases, and how to buy DIA.",
};

export default function DiaPage() {
  return (
    <LearnPageLayout
      title="What Is DIA (DIA)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="DIA (Decentralised Information Asset) is an open-source, cross-chain oracle platform that provides customizable and transparent data feeds for DeFi and Web3 applications. Unlike black-box oracle solutions, DIA offers full transparency into data sources, methodologies, and aggregation methods, allowing protocols to customize how their oracle data is sourced and processed."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-dia", title: "What Is DIA?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-dia-work", title: "How Does DIA Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "dia-tokenomics", title: "DIA Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-dia", title: "How to Buy DIA", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        {
          question: "What is DIA?",
          answer:
            "DIA is an open-source oracle platform providing customizable, transparent data feeds for Web3. Protocols can configure their own data sources, aggregation methods, and update frequencies for maximum control.",
        },
        {
          question: "Where can I buy DIA?",
          answer:
            "DIA is available on Binance, Gate.io, KuCoin, and Uniswap. It trades against USDT, BTC, and ETH pairs.",
        },
        {
          question: "Is DIA a good investment?",
          answer:
            "DIA offers unique transparency and customization in the oracle space, but competes against much larger incumbents. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Chainlink", href: "/investing/crypto/chainlink", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is DIA?</h2>
      <p>
        DIA was founded by Michael Weber and Samuel Brack in 2020 as an association based in Switzerland. The project was born from the conviction that oracle data should be fully transparent and verifiable. While most oracle solutions operate as black boxes where users cannot inspect the exact data sources or aggregation methodologies, DIA makes its entire data stack open-source and auditable. Every data point can be traced back to its raw source.
      </p>
      <p>
        The platform sources data directly from exchanges, DEXs, and other on-chain and off-chain venues through its network of data scrapers. DIA supports over 30 blockchain networks and provides oracle feeds for thousands of assets. Its flexibility in data configuration has attracted numerous Layer 1 and Layer 2 blockchain projects that need custom oracle solutions tailored to their specific ecosystem requirements.
      </p>

      <h2 id="how-it-works">How Does DIA Work?</h2>
      <p>
        DIA&apos;s oracle architecture consists of data sourcing, processing, and delivery layers. Data is collected from exchange APIs, DEX smart contracts, and other venues through open-source scrapers. The processing layer applies configurable aggregation methodologies (VWAP, median, TWAP, etc.) and filtering criteria to produce clean price feeds. These feeds are then delivered to supported blockchains through oracle contracts.
      </p>
      <p>
        Protocols can customize their DIA oracle feeds by selecting specific data sources, choosing aggregation methods, setting update frequencies, and defining deviation thresholds. This level of customization is unique in the oracle space and allows protocols to optimize their oracle for their specific use case, whether that&apos;s high-frequency DeFi trading or less time-sensitive applications.
      </p>

      <h2 id="tokenomics">DIA Tokenomics</h2>
      <p>
        DIA has a total supply of approximately 200 million tokens. The token is used for governance over the DIA DAO, staking for data verification and validation, and incentivizing the operation and maintenance of data feeds. DIA stakers participate in data curation and validation processes. The DAO treasury funds ongoing development and ecosystem grants for projects building with DIA oracles.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        DIA provides customizable price feeds for DeFi lending and trading, NFT floor price oracles for NFT-collateralized lending, random number generation for blockchain gaming, liquid staking token price feeds, and custom data feeds for Layer 1 and Layer 2 ecosystems. The platform is particularly popular among newer blockchain ecosystems that need dedicated oracle support and customizable data configurations.
      </p>

      <h2 id="how-to-buy">How to Buy DIA</h2>
      <p>
        To buy DIA, create an account on Binance, Gate.io, or KuCoin. Complete identity verification, deposit funds, and purchase DIA tokens. DIA is also available on Uniswap. After purchasing, participate in DIA DAO governance or stake DIA for data validation roles. DIA is an ERC-20 token compatible with MetaMask and Ledger wallets.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        DIA faces an uphill battle competing against Chainlink&apos;s dominant market position and extensive integration network. While transparency is a differentiator, many protocols prioritize reliability and integration simplicity over data customizability. The oracle market is becoming increasingly crowded, making it difficult for smaller players to gain significant market share.
      </p>
      <p>
        Revenue generation from oracle services must scale to justify the token valuation. The open-source data sourcing model, while transparent, requires continuous maintenance of data scrapers as exchange APIs change. The relatively small staking and validation network compared to larger oracles may raise security concerns. Regulatory uncertainty around oracle services and data provision in DeFi adds compliance risk.
      </p>
    </LearnPageLayout>
  );
}
