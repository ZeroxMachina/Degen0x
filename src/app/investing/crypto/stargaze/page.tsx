import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Stargaze (STARS)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about Stargaze (STARS), the NFT marketplace and launchpad on Cosmos. Discover how it works, tokenomics, use cases, and how to buy STARS.",
};

export default function StargazePage() {
  return (
    <LearnPageLayout
      title="What Is Stargaze (STARS)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Stargaze is the premier NFT marketplace and launchpad in the Cosmos ecosystem, operating as a dedicated Cosmos SDK appchain optimized for NFT creation, trading, and community engagement. With zero gas fees for NFT minting and trading, Stargaze provides a seamless NFT experience while leveraging IBC for cross-chain NFT interoperability."
      toc={[
        { id: "what-is", title: "What Is Stargaze?", level: 2 },
        { id: "how-it-works", title: "How Does Stargaze Work?", level: 2 },
        { id: "tokenomics", title: "STARS Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy STARS", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        {
          question: "What is Stargaze?",
          answer:
            "Stargaze is the leading NFT marketplace in the Cosmos ecosystem, operating as a dedicated appchain with zero gas fee NFT minting and trading, a launchpad, and IBC-based cross-chain NFT support.",
        },
        {
          question: "Where can I buy STARS?",
          answer:
            "STARS is available on Osmosis DEX, Gate.io, and MEXC. It trades against OSMO, ATOM, and USDC pairs.",
        },
        {
          question: "Is Stargaze a good investment?",
          answer:
            "Stargaze leads the Cosmos NFT market with innovative features, but the NFT sector and Cosmos ecosystem face broader market challenges. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Cosmos", href: "/investing/crypto/cosmos", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Stargaze?</h2>
      <p>
        Stargaze was founded by Shane Vitarana and launched in late 2021 as a sovereign Cosmos SDK chain purpose-built for NFTs. The platform was designed to solve the pain points of NFT creation on Ethereum, including high gas fees, slow minting, and fragmented marketplace experiences. By operating as an appchain, Stargaze can optimize its entire blockchain for NFT operations, resulting in fast and low-cost minting and trading.
      </p>
      <p>
        The platform has hosted numerous NFT collections across art, PFP, music, and utility categories within the Cosmos ecosystem. Stargaze&apos;s launchpad provides a streamlined process for creators to launch NFT collections with features like whitelisting, phased minting, and royalty enforcement. The marketplace supports secondary trading with collection offers, trait-based filtering, and real-time price tracking.
      </p>

      <h2 id="how-it-works">How Does Stargaze Work?</h2>
      <p>
        Stargaze uses CosmWasm smart contracts for NFT standards (CW-721) and marketplace logic. Creators deploy collections through the launchpad interface, setting parameters like supply, mint price, and royalty percentages. NFTs are minted on-chain with metadata stored on IPFS for decentralized storage. The marketplace operates as a peer-to-peer exchange with listing, bidding, and collection offer mechanics.
      </p>
      <p>
        Cross-chain NFT transfers are possible through IBC, allowing NFTs to move between Stargaze and other Cosmos chains. The chain uses a proof-of-stake consensus with its own validator set. Name service integration allows users to create human-readable identities tied to their NFT holdings. Social features including profiles, activity feeds, and community spaces enhance the user experience beyond simple trading.
      </p>

      <h2 id="tokenomics">STARS Tokenomics</h2>
      <p>
        STARS has a total supply of 4 billion tokens with a declining emission schedule. The token is used for staking to secure the chain, governance, NFT minting payments, and marketplace fee payments. A percentage of all marketplace trades is collected as a protocol fee and distributed to STARS stakers. Creators can choose to price their NFTs in STARS, creating demand tied to collection launches. The Fair Burn mechanism sends a portion of fees to a community pool.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        Stargaze powers NFT collection launches through its launchpad, secondary NFT trading on the marketplace, cross-chain NFT transfers via IBC, creator royalty enforcement, and digital identity through NFT-based profiles. The platform serves as the primary venue for Cosmos-native NFT culture and digital art, with potential expansion into real-world asset tokenization and gaming NFTs.
      </p>

      <h2 id="how-to-buy">How to Buy STARS</h2>
      <p>
        To buy STARS, visit Osmosis DEX and swap ATOM or USDC for STARS using Keplr wallet. STARS is also available on Gate.io and MEXC. After purchasing, stake STARS to earn marketplace fee revenue or use them to mint and trade NFTs on the Stargaze platform. Store STARS in Keplr wallet.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        The NFT market has experienced significant downturns, and trading volumes across all platforms have declined substantially from peak levels. Stargaze&apos;s focus on the Cosmos ecosystem limits its addressable market compared to Ethereum and Solana NFT platforms. Competition from multi-chain NFT platforms and chain-specific marketplaces could attract creators and collectors away from Stargaze.
      </p>
      <p>
        The large token supply creates dilution risk from ongoing emissions. NFT marketplace revenue is volatile and depends on sustained collector interest. The platform&apos;s success is tied to the health of the Cosmos ecosystem and IBC adoption. Regulatory uncertainty around NFTs and their classification continues to evolve. Creator retention and collection quality are critical for sustained marketplace activity.
      </p>
    </LearnPageLayout>
  );
}
