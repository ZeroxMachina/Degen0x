import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is The Sandbox (SAND)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about The Sandbox (SAND), the decentralized virtual world and gaming platform. Discover how it works, tokenomics, use cases, and how to buy SAND.",
};

export default function SandboxPage() {
  return (
    <LearnPageLayout
      title="What Is The Sandbox (SAND)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="The Sandbox is a decentralized virtual world where players can create, own, and monetize gaming experiences using NFTs and the SAND utility token. Backed by major brands and entertainment companies, The Sandbox combines user-generated content with true digital ownership in a voxel-based metaverse."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-the-sandbox", title: "What Is The Sandbox?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-the-sandbox-work", title: "How Does The Sandbox Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "sand-tokenomics", title: "SAND Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-sand", title: "How to Buy SAND", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        {
          question: "What is The Sandbox?",
          answer:
            "The Sandbox is a decentralized virtual world where users create, own, and monetize voxel-based gaming experiences. It features virtual land as NFTs and uses SAND as its utility token.",
        },
        {
          question: "Where can I buy SAND?",
          answer:
            "SAND is available on Binance, Coinbase, Kraken, OKX, and other major exchanges. It is an ERC-20 token on Ethereum.",
        },
        {
          question: "Is The Sandbox a good investment?",
          answer:
            "The Sandbox has strong brand partnerships but faces challenges in sustaining user engagement and metaverse adoption. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Decentraland", href: "/investing/crypto/decentraland", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is The Sandbox?</h2>
      <p>
        The Sandbox is a decentralized, community-driven virtual world where creators can design, share, and monetize gaming experiences. Originally launched as a mobile game in 2012, it was acquired by Animoca Brands and reimagined as a blockchain-based metaverse platform. The Sandbox uses voxel art (3D pixel art) to create an accessible creative environment where anyone can build interactive experiences.
      </p>
      <p>
        The platform has attracted partnerships with major brands including Adidas, Gucci, Warner Music, The Walking Dead, Snoop Dogg, and many others who have purchased virtual land and built experiences in The Sandbox. These partnerships bring mainstream attention and content to the platform, differentiating it from purely crypto-native metaverse projects.
      </p>

      <h2 id="how-it-works">How Does The Sandbox Work?</h2>
      <p>
        The Sandbox ecosystem consists of three core products: VoxEdit for creating 3D voxel assets and NFTs, the Game Maker for building interactive experiences without coding knowledge, and the Marketplace for buying and selling user-created assets. Virtual land (LAND) consists of 166,464 plots that serve as the foundation for building experiences in the metaverse.
      </p>
      <p>
        Landowners can build games, social spaces, and interactive experiences on their plots and charge visitors for entry or in-game purchases. The platform runs on Ethereum with Layer 2 integration for lower-cost transactions. Seasons of curated experiences drive player engagement and showcase the best creator content.
      </p>

      <h2 id="tokenomics">SAND Tokenomics</h2>
      <p>
        SAND has a maximum supply of 3 billion tokens. The distribution includes allocations for the company reserve, founders and team, seed sale, strategic sale, advisors, and the Sandbox Foundation for ecosystem development. SAND is used for marketplace transactions, land purchases, staking for rewards, and governance voting on platform decisions.
      </p>
      <p>
        A portion of SAND from marketplace transactions is burned, creating deflationary pressure. Staking SAND provides rewards and exclusive access to certain platform features and events. The token also serves as the primary currency for in-game purchases across all Sandbox experiences.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        The Sandbox enables virtual land ownership and development, user-generated gaming experiences, brand activations and marketing campaigns in the metaverse, virtual events and concerts, digital art galleries, and educational experiences. Creators monetize their content through game creation, asset sales, and land-based experiences.
      </p>
      <p>
        The platform serves as a bridge between traditional brands and Web3, offering companies a way to engage with crypto-native audiences through interactive virtual experiences. The creator economy aspect allows individuals to earn SAND by building popular games and creating desirable NFT assets.
      </p>

      <h2 id="how-to-buy">How to Buy SAND</h2>
      <p>
        To buy SAND, register on Binance, Coinbase, or Kraken. Complete identity verification, deposit funds, and purchase SAND tokens. After buying, you can stake SAND on The Sandbox platform for rewards, use it to purchase LAND NFTs, or buy marketplace assets. SAND can be stored in any Ethereum-compatible wallet like MetaMask or a Ledger hardware wallet.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        The metaverse narrative has cooled significantly since the 2021-2022 hype cycle, with daily active user counts for virtual worlds remaining modest. Virtual land prices have declined substantially from their peaks, and the sustainable economics of virtual real estate remain unproven. Competition from other metaverse platforms and traditional gaming companies entering the space adds pressure.
      </p>
      <p>
        The platform&apos;s reliance on brand partnerships for content and engagement creates dependency on external partners. Token unlock schedules for team and investor allocations contribute to selling pressure. The broader question of whether blockchain-based metaverses will achieve mainstream adoption remains unanswered, making SAND a speculative investment tied to the metaverse thesis.
      </p>
    </LearnPageLayout>
  );
}
