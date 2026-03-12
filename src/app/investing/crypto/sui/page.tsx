import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Sui (SUI)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about Sui (SUI), the high-performance Layer 1 blockchain built by Mysten Labs. Discover how it works, tokenomics, use cases, and how to buy SUI.",
};

export default function SuiPage() {
  return (
    <LearnPageLayout
      title="What Is Sui (SUI)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Sui is a high-performance Layer 1 blockchain developed by Mysten Labs, founded by former Meta (Diem) engineers. It uses a novel object-centric data model and the Move programming language to achieve parallel transaction processing, enabling extremely low latency and high throughput for decentralized applications."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-sui", title: "What Is Sui?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-sui-work", title: "How Does Sui Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "sui-tokenomics", title: "SUI Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-sui", title: "How to Buy SUI", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        {
          question: "What is Sui?",
          answer:
            "Sui is a Layer 1 blockchain designed for high throughput and low latency. It uses an object-centric model and the Move programming language to enable parallel transaction execution.",
        },
        {
          question: "Where can I buy SUI?",
          answer:
            "SUI is listed on Binance, Coinbase, Kraken, KuCoin, and other major exchanges. It trades against USDT, BTC, and various fiat pairs.",
        },
        {
          question: "Is Sui a good investment?",
          answer:
            "Sui offers innovative technology and a strong founding team, but it competes in a crowded Layer 1 space. This is not financial advice. Always do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Aptos", href: "/investing/crypto/aptos", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Sui?</h2>
      <p>
        Sui is a next-generation Layer 1 blockchain created by Mysten Labs, a company founded in 2021 by former engineers from Meta&apos;s Diem blockchain project, including Evan Cheng and Sam Blackshear. The project launched its mainnet in May 2023 with a vision to make blockchain technology accessible and performant enough for mainstream consumer applications.
      </p>
      <p>
        Unlike traditional blockchains that process transactions sequentially, Sui introduces an object-centric data model where assets and smart contracts are represented as independent objects. This architecture allows the network to process transactions involving different objects simultaneously, achieving sub-second finality and theoretical throughput of hundreds of thousands of transactions per second.
      </p>
      <p>
        Sui uses the Move programming language, originally developed for Meta&apos;s Diem project, which provides strong safety guarantees for digital assets. Move treats assets as first-class resources that cannot be accidentally duplicated or destroyed, making smart contract development more secure by default.
      </p>

      <h2 id="how-it-works">How Does Sui Work?</h2>
      <p>
        Sui&apos;s consensus mechanism is built on a delegated proof-of-stake system with two transaction processing paths. Simple transactions that involve owned objects bypass full consensus entirely through a protocol called Narwhal and Bullshark, achieving near-instant finality. More complex transactions involving shared objects go through the Mysticeti consensus process but still achieve finality within two to three seconds.
      </p>
      <p>
        The object-centric model means each on-chain asset is an independent object with a unique identifier. When a transaction only touches objects owned by the sender, Sui can process it without coordinating with other validators about unrelated transactions. This parallel execution model is what gives Sui its horizontal scalability.
      </p>
      <p>
        Sui also pioneered zkLogin, a feature that allows users to create blockchain accounts using existing Google, Facebook, or Twitch credentials without needing to manage private keys. This significantly lowers the barrier to entry for mainstream users and is particularly valuable for gaming and social applications.
      </p>

      <h2 id="tokenomics">SUI Tokenomics</h2>
      <p>
        SUI has a total supply of 10 billion tokens. The initial distribution allocated roughly 20% to early contributors, 14% to investors, 10% to the Mysten Labs treasury, 6% to a community access program, and the remaining 50% to a community reserve managed by the Sui Foundation for ecosystem grants, staking rewards, and validator subsidies.
      </p>
      <p>
        SUI tokens are used for gas fees, staking with validators, and on-chain governance. A unique feature of Sui&apos;s tokenomics is a storage fund that collects fees from users who store data on-chain, redistributing those fees to validators as compensation for storing that data over time. This creates a sustainable economic model for long-term data storage on the network.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        Sui has established itself as a leading platform for blockchain gaming and consumer applications. Its low latency and high throughput make it suitable for real-time gaming experiences that would be impractical on slower chains. Major gaming studios and publishers have built on Sui, attracted by its performance and developer-friendly tooling.
      </p>
      <p>
        Decentralized finance on Sui has grown rapidly, with lending protocols, decentralized exchanges, and liquid staking platforms attracting significant total value locked. The DeFi ecosystem benefits from Sui&apos;s low transaction costs and fast settlement times. Sui is also being adopted for social applications, NFT marketplaces, and enterprise solutions that require high transaction throughput.
      </p>

      <h2 id="how-to-buy">How to Buy SUI</h2>
      <p>
        To purchase SUI, create an account on a major exchange such as Binance, Coinbase, or Kraken. Complete the required identity verification, deposit funds via bank transfer or card, and search for SUI trading pairs. After buying, consider transferring your SUI to a self-custody wallet like Sui Wallet or a hardware wallet for long-term storage. You can also stake SUI directly to validators to earn staking rewards.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        Sui faces intense competition from other high-performance Layer 1 blockchains including Solana, Aptos, and established networks like Ethereum with its Layer 2 ecosystem. The Move programming language, while powerful, has a smaller developer community compared to Solidity, potentially limiting ecosystem growth. Token unlock schedules for early investors and team members could create selling pressure over time.
      </p>
      <p>
        As a relatively new blockchain, Sui&apos;s technology has not been battle-tested over extended periods. The network&apos;s reliance on a relatively small validator set raises some centralization concerns. Additionally, regulatory uncertainty around blockchain platforms could impact Sui&apos;s growth trajectory, particularly in jurisdictions with stricter crypto regulations.
      </p>
    </LearnPageLayout>
  );
}
