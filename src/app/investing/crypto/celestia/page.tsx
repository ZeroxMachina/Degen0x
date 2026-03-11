import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Celestia (TIA)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about Celestia (TIA), the first modular data availability network. Discover how it works, tokenomics, use cases, and how to buy TIA.",
};

export default function CelestiaPage() {
  return (
    <LearnPageLayout
      title="What Is Celestia (TIA)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="9 min read"
      intro="Celestia is the first modular data availability network, providing a dedicated layer for blockchain data publishing that enables rollups and Layer 2 chains to scale efficiently. TIA is the native token used for paying data availability fees, staking, and governance of the network."
      toc={[
        { id: "what-is", title: "What Is Celestia?", level: 2 },
        { id: "how-it-works", title: "How Does Celestia Work?", level: 2 },
        { id: "tokenomics", title: "TIA Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy TIA", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        {
          question: "What is Celestia?",
          answer:
            "Celestia is a modular blockchain network that provides data availability as a service. It allows rollups and L2 chains to post transaction data cheaply and verifiably without handling execution or consensus themselves.",
        },
        {
          question: "Where can I buy TIA?",
          answer:
            "TIA is available on Binance, Coinbase, OKX, Bybit, and Kraken. It trades against USDT, BTC, and various fiat currencies.",
        },
        {
          question: "Is Celestia a good investment?",
          answer:
            "Celestia pioneered the modular blockchain thesis and benefits from growing rollup adoption, but faces competition from EigenDA, Avail, and Ethereum native DA. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Dymension", href: "/investing/crypto/dymension", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Celestia?</h2>
      <p>
        Celestia is a modular blockchain network that separates data availability from execution, a fundamental shift from monolithic blockchains that handle everything on a single layer. Founded by Mustafa Al-Bassam, Ismail Khoffi, and John Adler, Celestia launched its mainnet in October 2023 after years of research into modular blockchain architecture.
      </p>
      <p>
        The core insight behind Celestia is that rollups and Layer 2 chains need a cheap, reliable place to post transaction data so that anyone can verify the chain state is correct. Rather than posting this data to Ethereum (which is expensive), rollups can publish to Celestia at a fraction of the cost while still maintaining security guarantees through data availability sampling.
      </p>
      <p>
        Celestia does not execute transactions or run smart contracts. Instead, it focuses solely on ordering and publishing data, allowing execution to happen on separate rollup chains. This modular approach dramatically reduces costs for rollup operators and allows developers to deploy new blockchains with minimal infrastructure overhead.
      </p>

      <h2 id="how-it-works">How Does Celestia Work?</h2>
      <p>
        Celestia uses data availability sampling (DAS) to allow light nodes to verify that data is available without downloading entire blocks. Light nodes randomly sample small portions of block data, and if all samples are available, the node can be statistically confident that the entire block is available. This means Celestia can scale by adding more light nodes rather than requiring every node to process all data.
      </p>
      <p>
        The network is built on CometBFT consensus (a fork of Tendermint) and uses erasure coding to expand block data so that even if some data is withheld, it can be reconstructed from available portions. Rollups built on Celestia, called sovereign rollups, post their transaction data to Celestia blobs and handle their own execution and settlement independently.
      </p>

      <h2 id="tokenomics">TIA Tokenomics</h2>
      <p>
        TIA launched with an initial supply of 1 billion tokens, subject to inflation from staking rewards. The distribution allocated tokens across early backers, the Celestia Foundation, core contributors, and the public through the genesis airdrop. TIA is used for paying blobspace fees when rollups post data to Celestia, staking to secure the network, and governance over protocol parameters.
      </p>
      <p>
        Staking TIA provides rewards from network inflation and has historically qualified holders for airdrops from projects building on Celestia, making it an attractive staking option beyond the base yield. There is a 21-day unbonding period when unstaking TIA.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        Celestia serves as the data availability layer for sovereign rollups, Ethereum Layer 2s seeking cheaper DA costs, and new blockchain projects deploying through rollup frameworks like Rollkit, the OP Stack, and Arbitrum Orbit. Projects can launch their own blockchain using Celestia for DA in a matter of minutes rather than building infrastructure from scratch.
      </p>
      <p>
        The growing modular ecosystem includes rollup-as-a-service platforms, shared sequencers, and settlement layers that all integrate with Celestia. As more rollups launch across the crypto ecosystem, demand for Celestia&apos;s data availability services is expected to grow proportionally.
      </p>

      <h2 id="how-to-buy">How to Buy TIA</h2>
      <p>
        To buy TIA, register on a major exchange such as Binance, Coinbase, or Kraken. Complete identity verification, deposit funds, and purchase TIA tokens. After buying, you can stake TIA through Cosmos-compatible wallets like Keplr to earn staking rewards and participate in governance. Ledger hardware wallets support TIA through the Keplr integration for secure storage.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        Celestia faces competition from Ethereum&apos;s own data availability improvements including EIP-4844 blobs and future danksharding, EigenDA backed by the EigenLayer restaking protocol, and Avail. If Ethereum&apos;s native DA becomes sufficiently cheap, demand for external DA layers could decrease significantly.
      </p>
      <p>
        Large TIA token unlocks from early investors and team allocations create selling pressure over the coming years. Revenue from blobspace fees has been modest relative to the network&apos;s fully diluted valuation. The modular blockchain thesis, while compelling, is still being validated at scale, and the long-term economics of data availability as a service are not yet proven.
      </p>
    </LearnPageLayout>
  );
}
