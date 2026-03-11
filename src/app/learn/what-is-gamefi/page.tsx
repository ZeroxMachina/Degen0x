import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is GameFi? Play-to-Earn Gaming Explained (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what GameFi is, how blockchain gaming and play-to-earn economies work, key projects shaping the industry, and the future of gaming on the blockchain.",
};

export default function WhatIsGameFiPage() {
  return (
    <LearnPageLayout
      title="What Is GameFi?"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="9 min read"
      intro="GameFi combines gaming and decentralized finance, creating ecosystems where players can earn real economic value through gameplay. Unlike traditional games where in-game items and currencies are controlled by the developer, GameFi uses blockchain technology to give players true ownership of their digital assets through NFTs and tokens. This model transforms gaming from pure entertainment into an economic activity where time and skill invested can generate tangible financial returns."
      toc={[
        { id: "what-is-gamefi", title: "Understanding GameFi", level: 2 },
        { id: "play-to-earn", title: "Play-to-Earn Models", level: 2 },
        { id: "major-projects", title: "Major GameFi Projects", level: 2 },
        { id: "future-of-gamefi", title: "The Future of GameFi", level: 2 },
      ]}
      faqs={[
        {
          question: "Can you really make money playing GameFi games?",
          answer:
            "Some players earn meaningful income, but it depends heavily on the game, timing, and investment. Early Axie Infinity players in 2021 earned hundreds of dollars monthly, but most play-to-earn economies are unsustainable long-term and rewards decrease as more players join. Treat GameFi earnings as a bonus rather than a reliable income source.",
        },
        {
          question: "Do I need to invest money to start playing GameFi games?",
          answer:
            "Many GameFi games require purchasing NFTs or tokens to participate, which can cost from a few dollars to thousands. However, free-to-play models are becoming more common, allowing players to start without investment and earn assets through gameplay. Some games offer scholarship programs where asset owners lend NFTs to players who share the earnings.",
        },
        {
          question: "What happens to my GameFi assets if the game shuts down?",
          answer:
            "This is a real risk. Your NFTs would still exist on the blockchain, but they lose utility and likely all value if the game ceases operations. Some projects mitigate this by building interoperable assets usable across multiple games, but this is still limited. Always consider game longevity before investing heavily.",
        },
      ]}
      relatedArticles={[
        { title: "What Are NFTs?", href: "/learn/what-are-nfts", category: "Learn Crypto" },
        { title: "What Is SocialFi?", href: "/learn/what-is-socialfi", category: "Learn Crypto" },
        { title: "What Is Web3?", href: "/learn/what-is-web3", category: "Learn Crypto" },
        { title: "NFT Utility Beyond Art", href: "/nfts/learn/nft-utility", category: "NFTs" },
      ]}
    >
      <section id="what-is-gamefi">
        <h2>Understanding GameFi</h2>
        <p>
          GameFi represents the convergence of gaming, blockchain technology, and financial systems. Traditional games operate in closed economies where developers retain full control over in-game assets, currencies, and marketplaces. Players invest time and money but never truly own anything. GameFi changes this by placing game assets on the blockchain as NFTs and using fungible tokens for in-game economies, giving players verifiable ownership and the ability to trade assets freely.
        </p>
        <p>
          The GameFi concept gained mainstream attention during the 2021 bull market when Axie Infinity became a cultural phenomenon, particularly in the Philippines where players earned more from the game than from traditional employment. While the initial hype has cooled, the underlying principle that players should own their in-game assets continues to drive innovation in blockchain gaming.
        </p>
      </section>

      <section id="play-to-earn">
        <h2>Play-to-Earn Models</h2>
        <p>
          Play-to-earn (P2E) is the foundational GameFi model where players receive token rewards for completing activities, winning battles, or achieving milestones. The first generation of P2E games relied heavily on token emissions to reward players, creating inflationary economies that eventually collapsed as selling pressure overwhelmed new investment. This led to the criticism that P2E was essentially a Ponzi structure requiring new money to pay existing players.
        </p>
        <p>
          Newer models have evolved to address sustainability. Play-and-earn reduces token emissions and focuses on creating games that are fun regardless of financial incentives. Move-to-earn apps like Stepn rewarded physical activity with tokens. Skill-to-earn models weight rewards toward competitive performance rather than time spent. The industry has learned that sustainable GameFi requires genuine entertainment value, not just financial incentives.
        </p>
      </section>

      <section id="major-projects">
        <h2>Major GameFi Projects</h2>
        <p>
          Axie Infinity pioneered the space with its creature-battling game but faced economic sustainability issues. Illuvium is building an AAA-quality auto-battler RPG on Ethereum. Star Atlas is developing an ambitious space exploration game on Solana. The Treasure ecosystem on Arbitrum hosts multiple interconnected games sharing a common economic layer. Big Time offers free-to-play dungeon crawling with tradable loot.
        </p>
        <p>
          Gaming infrastructure projects are equally important. Immutable provides an L2 specifically optimized for gaming with gasless transactions and a marketplace SDK. Ronin chain, built by the Axie team, offers low-cost infrastructure for game developers. Unity and Unreal Engine integrations from companies like Sequence and thirdweb make it easier for traditional game studios to incorporate blockchain elements without deep crypto expertise.
        </p>
      </section>

      <section id="future-of-gamefi">
        <h2>The Future of GameFi</h2>
        <p>
          The next generation of GameFi is focused on quality over quick financial returns. Game studios with traditional gaming experience are entering the space, bringing production values and game design expertise that early blockchain games lacked. The emphasis has shifted from play-to-earn marketing to building genuinely engaging games where blockchain features enhance rather than define the experience.
        </p>
        <p>
          Interoperability between games is an emerging frontier. Protocols like Treasure and Loot are building shared economic layers where items and currencies can move between multiple games. AI integration is creating more dynamic in-game economies and NPCs. As the technology matures and game quality improves, GameFi has the potential to capture a meaningful share of the global gaming industry, which generates over $180 billion annually.
        </p>
      </section>
    </LearnPageLayout>
  );
}
