import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is The Graph (GRT)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about The Graph (GRT), the decentralized indexing protocol for blockchain data. Discover how it works, tokenomics, use cases, and how to buy GRT.",
};

export default function TheGraphPage() {
  return (
    <LearnPageLayout
      title="What Is The Graph (GRT)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="The Graph is a decentralized indexing protocol that organizes blockchain data and makes it easily queryable through subgraphs. Often called the Google of Web3, The Graph enables developers to build fast, responsive decentralized applications by providing efficient access to on-chain data across multiple blockchains."
      toc={[
        { id: "what-is", title: "What Is The Graph?", level: 2 },
        { id: "how-it-works", title: "How Does The Graph Work?", level: 2 },
        { id: "tokenomics", title: "GRT Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy GRT", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        {
          question: "What is The Graph?",
          answer:
            "The Graph is a decentralized protocol for indexing and querying blockchain data through subgraphs. It enables dApps to efficiently access on-chain data without running their own indexing infrastructure.",
        },
        {
          question: "Where can I buy GRT?",
          answer:
            "GRT is available on Coinbase, Binance, Kraken, OKX, and other major exchanges. It is an ERC-20 token on Ethereum.",
        },
        {
          question: "Is The Graph a good investment?",
          answer:
            "The Graph provides critical Web3 infrastructure and is widely used, but faces competition from centralized alternatives and has a large token supply. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Filecoin", href: "/investing/crypto/filecoin", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is The Graph?</h2>
      <p>
        The Graph is a decentralized protocol for indexing and querying blockchain data, launched in 2020. Just as Google indexes the web to make information searchable, The Graph indexes blockchain data so decentralized applications can access it efficiently. Without The Graph, developers would need to build custom indexing solutions or run full archive nodes to access historical blockchain data.
      </p>
      <p>
        The protocol supports indexing data from Ethereum, IPFS, Arbitrum, Optimism, Polygon, Avalanche, Cosmos, and many other networks. Thousands of subgraphs have been published, powering some of the most popular dApps in DeFi, NFTs, and governance. The Graph is transitioning from a partially centralized hosted service to a fully decentralized network of independent indexers, curators, and delegators.
      </p>

      <h2 id="how-it-works">How Does The Graph Work?</h2>
      <p>
        Developers create subgraphs, which are open APIs that define how to extract, transform, and organize blockchain data for specific use cases. When a subgraph is deployed to The Graph Network, indexers process blockchain events according to the subgraph&apos;s mapping logic and store the resulting data in a queryable format.
      </p>
      <p>
        The network has three key participants: indexers who stake GRT and run infrastructure to index subgraphs and serve queries; curators who stake GRT on subgraphs to signal which ones are valuable and worth indexing; and delegators who stake GRT with indexers to earn a share of query fees and indexing rewards without running infrastructure themselves.
      </p>

      <h2 id="tokenomics">GRT Tokenomics</h2>
      <p>
        GRT has an initial supply of approximately 10.8 billion tokens with ongoing minting for indexing rewards (approximately 3% annual issuance) and burning of query fees. The balance between minting and burning determines whether GRT is inflationary or deflationary. As network usage grows and more query fees are burned, the deflationary pressure increases.
      </p>
      <p>
        GRT is used for staking by indexers (minimum 100,000 GRT), curation signaling by curators, delegation by passive token holders, and query fee payments. The economic model incentivizes efficient data indexing and accurate curation of valuable subgraphs.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        The Graph powers data queries for major DeFi protocols like Uniswap, Aave, and Synthetix, as well as NFT marketplaces, governance dashboards, analytics platforms, and portfolio trackers. Any application that needs to display blockchain data in a structured way benefits from The Graph&apos;s indexing infrastructure.
      </p>
      <p>
        The protocol is essential infrastructure for the Web3 ecosystem, similar to how databases and APIs are critical for Web2 applications. New use cases include AI-powered blockchain analytics and cross-chain data aggregation across multiple networks indexed by The Graph.
      </p>

      <h2 id="how-to-buy">How to Buy GRT</h2>
      <p>
        To buy GRT, register on Coinbase, Binance, or Kraken. Complete identity verification, deposit funds, and purchase GRT tokens. After buying, you can delegate GRT to indexers through The Graph Explorer to earn a portion of indexing rewards and query fees. GRT can be stored in any Ethereum-compatible wallet like MetaMask, Coinbase Wallet, or Ledger hardware wallets.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        The Graph faces competition from centralized indexing solutions that can offer faster query times and simpler developer experiences. The transition to a fully decentralized network has taken longer than anticipated. Token inflation from indexing rewards dilutes existing holders, though query fee burns provide some counterbalance.
      </p>
      <p>
        Revenue generation from query fees has been modest relative to the network&apos;s valuation. The large total supply and ongoing minting raise concerns about long-term token economics. Dependence on the broader Web3 ecosystem means that slower-than-expected dApp adoption directly impacts demand for indexing services.
      </p>
    </LearnPageLayout>
  );
}
