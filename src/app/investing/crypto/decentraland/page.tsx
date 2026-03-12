import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Decentraland (MANA)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about Decentraland (MANA), the decentralized virtual reality platform. Discover how it works, tokenomics, use cases, and how to buy MANA.",
};

export default function DecentralandPage() {
  return (
    <LearnPageLayout
      title="What Is Decentraland (MANA)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Decentraland is a decentralized virtual reality platform powered by the Ethereum blockchain where users can create, experience, and monetize content and applications. MANA is the ERC-20 token used for purchasing virtual land (LAND), marketplace transactions, and governance of the platform through the Decentraland DAO."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-decentraland", title: "What Is Decentraland?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-decentraland-work", title: "How Does Decentraland Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "mana-tokenomics", title: "MANA Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-mana", title: "How to Buy MANA", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        {
          question: "What is Decentraland?",
          answer:
            "Decentraland is a browser-based virtual world on Ethereum where users own virtual land as NFTs and can build, explore, and trade in a decentralized metaverse governed by a DAO.",
        },
        {
          question: "Where can I buy MANA?",
          answer:
            "MANA is available on Coinbase, Binance, Kraken, OKX, and other major exchanges. It is an ERC-20 token.",
        },
        {
          question: "Is Decentraland a good investment?",
          answer:
            "Decentraland is one of the original metaverse platforms with true decentralized governance, but faces user engagement challenges. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "The Sandbox", href: "/investing/crypto/sandbox", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Decentraland?</h2>
      <p>
        Decentraland is one of the earliest decentralized virtual worlds, launching its initial coin offering in 2017 and opening to the public in 2020. Founded by Ari Meilich and Esteban Ordano, the platform allows users to explore a browser-based 3D virtual world, create interactive content on their virtual land parcels, attend events, and engage with other users in a persistent digital environment.
      </p>
      <p>
        What distinguishes Decentraland from other metaverse projects is its governance structure. The Decentraland DAO (Decentralized Autonomous Organization) controls the platform&apos;s policies, development priorities, and treasury through MANA token voting. This makes Decentraland one of the most decentralized virtual worlds, with the community having genuine control over the platform&apos;s direction.
      </p>

      <h2 id="how-it-works">How Does Decentraland Work?</h2>
      <p>
        The Decentraland world consists of 90,601 parcels of LAND, each represented as an ERC-721 NFT on Ethereum. Landowners can build 3D scenes and interactive experiences on their plots using the Decentraland SDK. The platform runs in web browsers without requiring downloads, making it accessible but limiting graphical complexity compared to downloadable metaverse applications.
      </p>
      <p>
        Users navigate the virtual world with customizable avatars, visiting experiences ranging from art galleries and casinos to music venues and corporate spaces. The DAO governs all aspects of the platform, including land policy, marketplace fees, content moderation, and development grants funded by the community treasury.
      </p>

      <h2 id="tokenomics">MANA Tokenomics</h2>
      <p>
        MANA has a circulating supply of approximately 1.9 billion tokens. When MANA is used to purchase LAND on the primary market, the MANA is burned, creating permanent deflationary pressure. Marketplace transaction fees generate revenue for the DAO treasury, which the community allocates through governance proposals.
      </p>
      <p>
        MANA is used for purchasing LAND and wearable NFTs, marketplace transactions, governance voting through the DAO, and accessing premium experiences and events. The burning mechanism means that as virtual land demand increases, the supply of MANA decreases.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        Decentraland hosts virtual events and conferences, art exhibitions and galleries, brand activations and marketing experiences, casino and gambling applications, educational spaces, and social meeting areas. Major brands including Samsung, JPMorgan, and Sotheby&apos;s have established presences in Decentraland.
      </p>
      <p>
        The platform serves as a venue for the Decentraland Music Festival and other community-organized events. Wearable NFTs allow users to customize their avatars with designer clothing and accessories, creating a digital fashion economy. Corporate event spaces offer an alternative to traditional virtual meeting platforms with blockchain-based ownership.
      </p>

      <h2 id="how-to-buy">How to Buy MANA</h2>
      <p>
        To buy MANA, register on Coinbase, Binance, or Kraken. Complete identity verification, deposit funds, and purchase MANA tokens. After buying, you can use MANA within Decentraland to purchase LAND, wearables, or participate in DAO governance. MANA is stored in any Ethereum-compatible wallet like MetaMask or a Ledger hardware wallet.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        Decentraland has consistently low daily active user counts, raising questions about the platform&apos;s ability to achieve meaningful adoption. The browser-based experience limits visual quality compared to dedicated metaverse applications. Virtual land prices have fallen dramatically from their 2021-2022 peaks, and recovery depends on the broader metaverse thesis gaining traction.
      </p>
      <p>
        Competition from The Sandbox, newer metaverse platforms, and traditional gaming companies entering the virtual world space is intense. The decentralized governance model, while philosophically appealing, can lead to slow decision-making. The platform&apos;s long-term viability depends on attracting and retaining users in an environment where most people have not yet embraced virtual world experiences.
      </p>
    </LearnPageLayout>
  );
}
