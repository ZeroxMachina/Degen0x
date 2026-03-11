import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Arweave (AR)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about Arweave (AR), the permanent data storage blockchain. Discover how it works, tokenomics, use cases, and how to buy AR tokens.",
};

export default function ArweavePage() {
  return (
    <LearnPageLayout
      title="What Is Arweave (AR)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Arweave is a decentralized storage protocol that enables permanent data storage through a one-time payment model. Unlike traditional cloud storage, Arweave guarantees that data will be stored forever using a novel blockchain-like structure called the blockweave. AR is the native token used to pay for storage and incentivize miners."
      toc={[
        { id: "what-is", title: "What Is Arweave?", level: 2 },
        { id: "how-it-works", title: "How Arweave Works", level: 2 },
        { id: "tokenomics", title: "Arweave Tokenomics", level: 2 },
        { id: "use-cases", title: "Use Cases & Ecosystem", level: 2 },
        { id: "how-to-buy", title: "How to Buy Arweave", level: 2 },
        { id: "risks", title: "Risks & Considerations", level: 2 },
      ]}
      faqs={[
        {
          question: "What is Arweave?",
          answer:
            "Arweave is a decentralized permanent data storage protocol that allows users to store data forever with a single upfront payment, secured by a network of miners.",
        },
        {
          question: "Where can I buy AR?",
          answer:
            "AR tokens are available on Binance, Coinbase, Kraken, and other major exchanges. You can trade AR against USDT, BTC, or fiat currencies.",
        },
        {
          question: "Is Arweave a good investment?",
          answer:
            "Arweave addresses the growing need for permanent data storage and has attracted major blockchain projects as users, but adoption depends on continued demand. This is not financial advice.",
        },
      ]}
      relatedArticles={[
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Best Crypto Exchanges", href: "/exchanges/best", category: "Exchanges" },
        { title: "Filecoin", href: "/investing/crypto/filecoin", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Arweave?</h2>
      <p>
        Arweave is a decentralized storage network founded in 2017 that provides permanent data storage. Unlike Filecoin or traditional cloud storage that requires ongoing payments, Arweave uses a one-time fee model where users pay once and their data is stored permanently across the network.
      </p>
      <p>
        The protocol uses a novel data structure called the blockweave, which is similar to a blockchain but designed specifically for efficient data storage. Each block is linked not only to the previous block but also to a random earlier block, creating a web of data that incentivizes miners to store as much data as possible.
      </p>
      <p>
        Arweave has become critical infrastructure for the broader blockchain ecosystem, serving as the permanent storage layer for Solana, Avalanche, and many other protocols that need to store historical transaction data and state permanently.
      </p>

      <h2 id="how-it-works">How Arweave Works</h2>
      <p>
        Arweave uses a consensus mechanism called Succinct Proofs of Random Access (SPoRA). Miners must prove they have access to randomly selected previous blocks to mine new blocks, ensuring that data is replicated across many nodes. This mechanism aligns economic incentives with long-term data preservation.
      </p>
      <p>
        The storage endowment model is funded by an initial payment that is designed to cover storage costs for at least 200 years based on declining storage cost projections. As storage becomes cheaper over time, the endowment generates surplus returns that extend the effective storage period indefinitely.
      </p>

      <h2 id="tokenomics">Arweave Tokenomics</h2>
      <p>
        AR has a maximum supply of 66 million tokens. The majority of tokens were distributed at genesis and through mining rewards. AR tokens are burned when users pay for data storage, creating a deflationary pressure that increases with network usage.
      </p>
      <p>
        Miners earn AR tokens as block rewards for storing and replicating data across the network. As the network matures, a larger portion of miner revenue comes from storage fees rather than block rewards, creating a sustainable economic model tied to actual utility and demand.
      </p>

      <h2 id="use-cases">Use Cases &amp; Ecosystem</h2>
      <p>
        Arweave&apos;s primary use cases include permanent archival storage for blockchain data, decentralized application hosting through the permaweb, and censorship-resistant publishing. Projects like Solana use Arweave to store ledger history, and NFT projects use it for permanent metadata and media storage.
      </p>
      <p>
        The AO (Arweave Operating System) is a hyper-parallel computing environment built on Arweave that enables smart contracts and complex computations. This expansion from storage to computation significantly broadens Arweave&apos;s utility and positions it as a full-stack decentralized computing platform.
      </p>

      <h2 id="how-to-buy">How to Buy Arweave</h2>
      <p>
        To purchase AR, create an account on Binance, Coinbase, or Kraken. Complete KYC verification, deposit funds via bank transfer or card, and buy AR tokens. You can store AR in the ArConnect browser extension wallet or use it to upload data permanently to the Arweave network.
      </p>

      <h2 id="risks">Risks &amp; Considerations</h2>
      <p>
        The permanent storage model relies on assumptions about declining storage costs over centuries, which introduces long-term uncertainty. If storage costs do not decrease as projected, the endowment model could face sustainability challenges. The network also depends on miners continuing to find it economically viable to store data.
      </p>
      <p>
        Competition from other storage solutions like Filecoin and centralized services remains a challenge. Arweave&apos;s immutable storage also raises concerns about illegal or harmful content being stored permanently with no ability to remove it. Regulatory actions around permanent data storage could pose risks to the project.
      </p>
    </LearnPageLayout>
  );
}
