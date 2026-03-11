import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Axie Infinity (AXS)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about Axie Infinity (AXS), the pioneering play-to-earn blockchain game. Discover how it works, tokenomics, use cases, and how to buy AXS.",
};

export default function AxieInfinityPage() {
  return (
    <LearnPageLayout
      title="What Is Axie Infinity (AXS)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Axie Infinity is a blockchain-based game developed by Sky Mavis that pioneered the play-to-earn model. Players collect, breed, and battle fantasy creatures called Axies, which are NFTs with unique attributes. AXS is the governance token used for staking, governance, and in-game payments within the Axie ecosystem."
      toc={[
        { id: "what-is", title: "What Is Axie Infinity?", level: 2 },
        { id: "how-it-works", title: "How Does Axie Infinity Work?", level: 2 },
        { id: "tokenomics", title: "AXS Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy AXS", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        {
          question: "What is Axie Infinity?",
          answer:
            "Axie Infinity is a play-to-earn blockchain game where players collect, breed, and battle NFT creatures called Axies. It runs on the Ronin sidechain and pioneered the crypto gaming movement.",
        },
        {
          question: "Where can I buy AXS?",
          answer:
            "AXS is available on Binance, Coinbase, Kraken, OKX, and other major exchanges. It can also be obtained through the Ronin ecosystem.",
        },
        {
          question: "Is Axie Infinity a good investment?",
          answer:
            "Axie pioneered play-to-earn gaming but has seen significant decline from its 2021 peak. The team continues development but faces challenges in sustaining player engagement. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Gala Games", href: "/investing/crypto/gala", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Axie Infinity?</h2>
      <p>
        Axie Infinity was developed by Sky Mavis, a Vietnamese gaming studio founded by Trung Nguyen. Launched in 2018, the game exploded in popularity during 2021, particularly in Southeast Asia where players could earn meaningful income through gameplay. At its peak, Axie Infinity had over 2.7 million daily active players and generated billions in marketplace volume.
      </p>
      <p>
        The game features Axies, digital creatures that exist as NFTs with unique genetic attributes. Players assemble teams of three Axies to battle other players or complete adventure mode quests. Breeding Axies creates new creatures with inherited traits, and successful gameplay earns tokens. The game runs on Ronin, an Ethereum sidechain built specifically by Sky Mavis for Axie Infinity.
      </p>

      <h2 id="how-it-works">How Does Axie Infinity Work?</h2>
      <p>
        Axie Infinity operates on the Ronin blockchain, which was purpose-built for the game&apos;s needs. The Ronin chain provides fast, low-cost transactions essential for gaming. Players need three Axies to start playing, which can be purchased from the marketplace or bred from existing Axies. Battles use a card-based system where each Axie&apos;s body parts determine its available moves and abilities.
      </p>
      <p>
        The game uses a dual-token system: AXS for governance, staking, and premium features, and SLP (Smooth Love Potion) for breeding Axies and daily rewards. Sky Mavis has introduced Axie Infinity: Origins as an updated version with improved gameplay mechanics and a free-to-play entry option alongside Axie Homeland, a land-based strategy game.
      </p>

      <h2 id="tokenomics">AXS Tokenomics</h2>
      <p>
        AXS has a maximum supply of 270 million tokens. The distribution includes allocations for Sky Mavis, play-to-earn rewards, staking rewards, ecosystem fund, advisors, and public sale participants. AXS staking provides rewards for token holders who lock their tokens for a fixed period.
      </p>
      <p>
        AXS is used for governance voting on protocol decisions, staking for rewards, marketplace fee payments, and premium game features. The Axie treasury accumulates fees from marketplace transactions and breeding, which are used for ecosystem development and token buybacks.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        Axie Infinity&apos;s primary use case is blockchain gaming with true digital asset ownership. Players own their Axies as NFTs that can be traded, bred, or used across game modes. The Ronin ecosystem has expanded beyond Axie to host other games and dApps, making AXS relevant to a broader gaming ecosystem.
      </p>
      <p>
        The scholarship system, where Axie owners lend their NFTs to players who cannot afford the entry cost, demonstrated a novel model for accessible blockchain gaming. Land gameplay through Axie Homeland adds a strategy layer where players develop virtual properties and earn resources.
      </p>

      <h2 id="how-to-buy">How to Buy AXS</h2>
      <p>
        To buy AXS, register on Binance, Coinbase, or Kraken. Complete identity verification, deposit funds, and purchase AXS tokens. After buying, you can stake AXS for staking rewards or bridge to the Ronin chain to participate in the Axie ecosystem. The Ronin Wallet is the primary wallet for interacting with the game and marketplace.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        Axie Infinity experienced a dramatic decline from its 2021 peak, with daily active players and token prices falling significantly. The Ronin bridge was hacked for over $600 million in 2022 (later recovered), highlighting smart contract security risks. The play-to-earn model has been criticized as unsustainable when token prices decline.
      </p>
      <p>
        Competition from newer blockchain games with more sophisticated gameplay threatens Axie&apos;s market position. The game&apos;s heavy reliance on token incentives to attract players creates a fragile economic model. Regulatory scrutiny of play-to-earn games as potential unregistered securities adds legal uncertainty to the project.
      </p>
    </LearnPageLayout>
  );
}
