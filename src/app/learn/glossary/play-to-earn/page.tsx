import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Play-to-Earn? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what play-to-earn gaming is, how it works, and the challenges facing blockchain-based gaming economies.",
};

export default function PlayToEarnPage() {
  return (
    <LearnPageLayout
      title="What Is Play-to-Earn?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="Play-to-earn (P2E) is a gaming model where players earn cryptocurrency or NFTs with real-world value by playing blockchain-based games. Unlike traditional games where in-game items belong to the developer, P2E games give players true ownership of their assets. Axie Infinity popularized the model in 2021, but the sector has faced significant challenges around sustainability, game quality, and economic design."
      toc={[
        { id: "definition", title: "What Is Play-to-Earn?", level: 2 },
        { id: "how-it-works", title: "How P2E Works", level: 2 },
        { id: "axie-infinity", title: "The Axie Infinity Phenomenon", level: 2 },
        { id: "challenges", title: "Challenges and Criticism", level: 2 },
        { id: "future", title: "The Future of Blockchain Gaming", level: 2 },
      ]}
      faqs={[
        {
          question: "Can you actually make money playing P2E games?",
          answer:
            "Some early players of successful P2E games have earned significant income, particularly in developing countries where crypto earnings exceeded local wages. However, most P2E games have seen token values decline dramatically, and late entrants often lose money. Sustainable earnings depend on the game maintaining a healthy economy, which has proven difficult for most projects.",
        },
        {
          question: "How is play-to-earn different from traditional gaming?",
          answer:
            "In traditional games, in-game items exist on company servers and cannot be transferred or sold outside the game (or only through against-TOS gray markets). In P2E, items are NFTs on a blockchain that players truly own. They can freely trade, sell, or use these items across different platforms. Players also earn fungible tokens that can be exchanged for other cryptocurrencies or fiat.",
        },
      ]}
      relatedArticles={[
        { title: "What Is an NFT?", href: "/learn/glossary/nft", category: "Glossary" },
        { title: "What Is the Metaverse?", href: "/learn/glossary/metaverse", category: "Glossary" },
        { title: "What Is a DApp?", href: "/learn/glossary/dapp", category: "Glossary" },
        { title: "What Is a Governance Token?", href: "/learn/glossary/governance-token", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is Play-to-Earn?</h2>
      <p>
        Play-to-earn is a gaming paradigm where players are compensated with crypto tokens and NFTs for their in-game activities. The model flips the traditional gaming economy: instead of paying to access content and enriching the game publisher, players invest time (and sometimes money) and receive real economic value in return. Game assets are represented on-chain, giving players genuine ownership and transferability.
      </p>

      <h2 id="how-it-works">How P2E Works</h2>
      <p>
        Players typically purchase or earn initial NFT assets (characters, items, land) needed to play. Through gameplay, they earn the game&apos;s native token and additional NFTs. These tokens can be traded on exchanges for other cryptocurrencies or fiat money. NFT items can be sold on marketplaces. Some games implement scholarship systems where asset owners lend their NFTs to other players and share the earnings.
      </p>

      <h2 id="axie-infinity">The Axie Infinity Phenomenon</h2>
      <p>
        Axie Infinity became the poster child for P2E in 2021, with millions of players worldwide, particularly in the Philippines where daily earnings exceeded local minimum wages. At its peak, Axie generated over $200 million in monthly revenue. The game demonstrated that blockchain gaming could achieve massive scale, but also revealed the fragility of P2E economics when the token price collapsed, devastating players who had invested heavily.
      </p>

      <h2 id="challenges">Challenges and Criticism</h2>
      <p>
        Most P2E games suffer from unsustainable tokenomics: earnings depend on new players entering and buying tokens, resembling a Ponzi structure. Game quality often lags behind traditional games as teams focus on financial mechanics over fun gameplay. Regulatory uncertainty around token earnings creates legal risks. The &quot;play&quot; in play-to-earn is often tedious grinding rather than enjoyable gaming, raising questions about the model&apos;s long-term viability.
      </p>

      <h2 id="future">The Future of Blockchain Gaming</h2>
      <p>
        The industry is evolving from pure play-to-earn toward models emphasizing fun-first gameplay with optional earning components. Terms like &quot;play-and-earn&quot; and &quot;own-your-game-assets&quot; reflect this shift. The core innovation — true digital ownership of game assets — has lasting value even if the specific P2E economic model evolves. The next generation of blockchain games aims to match traditional game quality while adding ownership benefits.
      </p>
    </LearnPageLayout>
  );
}
