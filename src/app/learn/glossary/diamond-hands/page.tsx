import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Are Diamond Hands? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what diamond hands means in crypto, its origins, the difference between conviction and stubbornness, and when holding makes sense.",
};

export default function DiamondHandsPage() {
  return (
    <LearnPageLayout
      title="What Are Diamond Hands?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="4 min"
      intro="Diamond hands is crypto and stock market slang for an investor who holds their position through significant price volatility without selling, regardless of losses or pressure. The term implies strength and conviction — diamonds being the hardest material. It is the opposite of 'paper hands,' which describes someone who sells at the first sign of trouble."
      toc={[
        { id: "definition", title: "What Are Diamond Hands?", level: 2 },
        { id: "origin", title: "Origin and Culture", level: 2 },
        { id: "when-smart", title: "When Diamond Hands Are Smart", level: 2 },
        { id: "when-not", title: "When They Are Not", level: 2 },
      ]}
      faqs={[
        {
          question: "Is having diamond hands always good?",
          answer:
            "Not necessarily. Diamond hands are beneficial when you are holding fundamentally strong assets through temporary market downturns. However, refusing to sell a failing project out of stubbornness is not diamond hands — it is bag holding. The key distinction is whether your hold is based on conviction in the asset's fundamentals or simply an unwillingness to accept a loss.",
        },
        {
          question: "Where did the term diamond hands come from?",
          answer:
            "Diamond hands gained mainstream popularity during the GameStop (GME) short squeeze in January 2021 on Reddit's WallStreetBets. The term was already used in crypto circles but exploded into broader awareness during that event, complete with diamond and hand emojis.",
        },
      ]}
      relatedArticles={[
        { title: "What Are Paper Hands?", href: "/learn/glossary/paper-hands", category: "Glossary" },
        { title: "What Is HODL?", href: "/learn/glossary/hodl", category: "Glossary" },
        { title: "What Is a Bag Holder?", href: "/learn/glossary/bag-holder", category: "Glossary" },
        { title: "What Is FUD?", href: "/learn/glossary/fud", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Are Diamond Hands?</h2>
      <p>
        Having diamond hands means maintaining your investment position during periods of extreme volatility, FUD, and market crashes. A diamond hands investor does not panic sell during dips and trusts their long-term thesis. The term is typically used approvingly, celebrating an investor&apos;s mental fortitude in the face of paper losses.
      </p>

      <h2 id="origin">Origin and Culture</h2>
      <p>
        While the concept of holding through adversity is as old as investing, the specific term &quot;diamond hands&quot; became part of mainstream internet culture during the 2021 GameStop saga and quickly became a staple of crypto communities. It is frequently paired with emojis and memes, and is used both seriously (to encourage holding during downturns) and humorously (to describe stubbornly holding a losing position).
      </p>

      <h2 id="when-smart">When Diamond Hands Are Smart</h2>
      <p>
        Diamond hands are genuinely valuable when applied to fundamentally strong assets during temporary market-wide downturns. Holding Bitcoin through the 2018 bear market (and beyond) rewarded diamond-handed investors enormously. When your investment thesis is sound and only the market sentiment has changed, holding through the noise is often the right move.
      </p>

      <h2 id="when-not">When They Are Not</h2>
      <p>
        Diamond hands become dangerous when applied indiscriminately. Holding a project with failing fundamentals, an abandoned development team, or a broken tokenomics model is not diamond hands — it is denial. The ability to distinguish between a temporary dip in a strong project and a fundamental decline in a failing one is what separates smart conviction from stubborn bag holding.
      </p>
    </LearnPageLayout>
  );
}
