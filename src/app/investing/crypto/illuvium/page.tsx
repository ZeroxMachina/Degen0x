import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Illuvium (ILV)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about Illuvium (ILV), the AAA blockchain gaming experience built on Ethereum. Discover how it works, tokenomics, use cases, and how to buy ILV.",
};

export default function IlluviumPage() {
  return (
    <LearnPageLayout
      title="What Is Illuvium (ILV)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Illuvium is an open-world RPG and auto-battler game built on Ethereum using Immutable X for gas-free NFT transactions. Developed by a team of over 200 people, Illuvium aims to be the first AAA-quality blockchain game, featuring creature collection, arena battles, and a persistent open world with true digital ownership."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-illuvium", title: "What Is Illuvium?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-illuvium-work", title: "How Does Illuvium Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "ilv-tokenomics", title: "ILV Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-ilv", title: "How to Buy ILV", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        {
          question: "What is Illuvium?",
          answer: "Illuvium is a AAA-quality open-world RPG and auto-battler game built on Ethereum and Immutable X, featuring NFT creatures called Illuvials that players capture and battle.",
        },
        {
          question: "Where can I buy ILV?",
          answer: "ILV is available on Binance, Coinbase, KuCoin, and Sushi DEX. It is an ERC-20 token on Ethereum.",
        },
        {
          question: "Is Illuvium a good investment?",
          answer: "Illuvium has high production quality but faces typical blockchain gaming adoption challenges. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Immutable X", href: "/investing/crypto/immutable-x", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Illuvium?</h2>
      <p>
        Illuvium was co-founded by Kieran and Aaron Warwick (brother of Synthetix founder Kain Warwick) and has been in development since 2020 with a large team and significant funding. The game features three interconnected game modes: Illuvium Overworld (open-world exploration and creature capture), Illuvium Arena (auto-battler PvP), and Illuvium Zero (mobile companion game for resource management).
      </p>
      <p>
        Built on Unreal Engine 5, Illuvium represents one of the highest-production-value blockchain games in development. Creatures called Illuvials are captured in the overworld and exist as NFTs on Immutable X, allowing true ownership and free trading. The game aims to prove that blockchain games can match the quality of traditional AAA titles while adding the benefits of digital asset ownership.
      </p>

      <h2 id="how-it-works">How Does Illuvium Work?</h2>
      <p>
        Illuvium uses Immutable X (Layer 2 on Ethereum) for gas-free NFT minting and trading of Illuvials and in-game items. The game runs as a downloadable client with blockchain features integrated seamlessly. Players explore procedurally generated regions, capture Illuvials in battle, and level them up to compete in the Arena auto-battler mode.
      </p>
      <p>
        The IlluviDEX serves as the in-game marketplace for trading Illuvials, weapons, armor, and other game assets. Revenue from marketplace fees is distributed to ILV stakers through the protocol&apos;s revenue sharing mechanism.
      </p>

      <h2 id="tokenomics">ILV Tokenomics</h2>
      <p>
        ILV has a maximum supply of 10 million tokens, making it one of the lower-supply gaming tokens. The token is used for governance of the Illuvium DAO, staking for revenue sharing from game marketplace fees, and in-game purchases. The yield farming program distributes ILV to liquidity providers and stakers. sILV (staked ILV) can be used within the game for purchases.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        ILV enables participation in Illuvium&apos;s governance through the DAO, staking for a share of game revenue, trading Illuvial NFTs and game assets, and accessing premium game features. The three-game ecosystem creates multiple entry points for different player preferences, from hardcore RPG exploration to casual mobile gaming.
      </p>

      <h2 id="how-to-buy">How to Buy ILV</h2>
      <p>
        To buy ILV, register on Binance, Coinbase, or KuCoin. Complete identity verification, deposit funds, and purchase ILV tokens. After buying, you can stake ILV to earn a share of game marketplace revenue. ILV is an ERC-20 token compatible with MetaMask and Ledger hardware wallets.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        Illuvium has faced development delays common to AAA game projects, extending the timeline for full game release. The game&apos;s success depends on attracting and retaining players in a competitive gaming market. Blockchain gaming has struggled to gain mainstream acceptance from traditional gamers. High production costs mean the project needs significant revenue to sustain development.
      </p>
      <p>
        The relatively low token supply means ILV can experience high volatility. Competition from other high-production blockchain games and traditional free-to-play titles with established player bases creates significant market risk. The economics of in-game NFT ownership must prove sustainable beyond initial hype to drive long-term value.
      </p>
    </LearnPageLayout>
  );
}
