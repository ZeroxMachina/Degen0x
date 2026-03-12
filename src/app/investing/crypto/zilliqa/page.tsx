import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Zilliqa (ZIL)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about Zilliqa (ZIL), the pioneering sharded blockchain. Discover how it works, tokenomics, use cases, and how to buy ZIL.",
};

export default function ZilliqaPage() {
  return (
    <LearnPageLayout
      title="What Is Zilliqa (ZIL)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="7 min read"
      intro="Zilliqa is a pioneering sharded blockchain that was one of the first to implement network sharding for scalability. Founded by researchers from the National University of Singapore, Zilliqa uses its Scilla programming language for secure smart contracts and is expanding into Web3 gaming and metaverse applications."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-zilliqa", title: "What Is Zilliqa?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-zilliqa-work", title: "How Does Zilliqa Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "zil-tokenomics", title: "ZIL Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-zil", title: "How to Buy ZIL", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        {
          question: "What is Zilliqa?",
          answer:
            "Zilliqa is a sharded blockchain that was among the first to implement sharding for scalability. It uses the Scilla smart contract language and focuses on gaming and metaverse applications.",
        },
        {
          question: "Where can I buy ZIL?",
          answer:
            "ZIL is available on Binance, KuCoin, Gate.io, and other exchanges. It trades against USDT and BTC.",
        },
        {
          question: "Is Zilliqa a good investment?",
          answer:
            "Zilliqa was a pioneer in sharding but faces stiff competition from newer chains. The pivot to gaming adds new potential. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Harmony", href: "/investing/crypto/harmony", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Zilliqa?</h2>
      <p>
        Zilliqa was founded in 2017 by Amrit Kumar, Xinshu Dong, Yaoqi Jia, and Prateek Saxena, researchers from the National University of Singapore. It became one of the first blockchains to implement sharding when it launched its mainnet in 2019. The project introduced the Scilla programming language, specifically designed to prevent common smart contract vulnerabilities through formal verification.
      </p>
      <p>
        In recent years, Zilliqa has pivoted toward gaming and metaverse applications, launching initiatives like the Web3 gaming console and partnerships with entertainment companies. Zilliqa 2.0 is an upcoming major upgrade that will introduce EVM compatibility, improved consensus, and enhanced cross-chain functionality to modernize the platform.
      </p>

      <h2 id="how-it-works">How Does Zilliqa Work?</h2>
      <p>
        Zilliqa uses network sharding where the blockchain network is divided into groups (shards) that process transactions in parallel. As more nodes join the network, more shards are created, increasing throughput linearly. The consensus mechanism is a hybrid of practical Byzantine Fault Tolerance (pBFT) for finality within shards and proof-of-work for shard assignment and Sybil resistance.
      </p>
      <p>
        Smart contracts on Zilliqa are written in Scilla, which uses a communication automata model that makes contracts amenable to formal verification. This means many types of bugs can be detected before deployment. Zilliqa 2.0 will add EVM compatibility to expand the developer base while retaining Scilla support.
      </p>

      <h2 id="tokenomics">ZIL Tokenomics</h2>
      <p>
        ZIL has a maximum supply of 21 billion tokens. The token is used for gas fees, staking with validators, governance, and in-game purchases within the Zilliqa gaming ecosystem. Staking ZIL provides rewards through a combination of block rewards and transaction fees. The staking yield varies based on network participation rates.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        Zilliqa supports Web3 gaming through dedicated gaming infrastructure, DeFi protocols, NFT marketplaces, stablecoin payments (XSGD Singapore dollar stablecoin), and enterprise solutions. The gaming focus includes a Web3 gaming console and partnerships aimed at bringing blockchain gaming to mainstream audiences.
      </p>

      <h2 id="how-to-buy">How to Buy ZIL</h2>
      <p>
        To buy ZIL, register on Binance, KuCoin, or Gate.io. Complete identity verification, deposit funds, and purchase ZIL tokens. After buying, you can stake ZIL using the ZilPay wallet or Moonlet wallet for staking rewards. Ledger hardware wallets support ZIL for secure storage.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        Zilliqa&apos;s ecosystem is significantly smaller than most competing Layer 1 blockchains. The Scilla language has a very limited developer community, though Zilliqa 2.0&apos;s EVM compatibility should help. The gaming pivot is still early and unproven. Competition from newer high-performance chains with larger ecosystems and developer communities creates an uphill battle for user and developer acquisition.
      </p>
      <p>
        The token has underperformed most peers across market cycles. Zilliqa 2.0 execution carries risk, and the timeline for delivering the upgrade has been extended. Limited exchange support outside of major Asian exchanges reduces accessibility for global investors.
      </p>
    </LearnPageLayout>
  );
}
