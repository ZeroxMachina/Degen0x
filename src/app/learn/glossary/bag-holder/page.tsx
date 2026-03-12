import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Bag Holder? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what a bag holder is in crypto, how to avoid becoming one, and why understanding this concept matters for managing your portfolio.",
};

export default function BagHolderPage() {
  return (
    <LearnPageLayout
      title="What Is a Bag Holder?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="4 min"
      intro="A bag holder is an investor left holding a cryptocurrency that has significantly declined in value, often to the point where selling would crystallize a major loss. The term comes from the image of being stuck holding a heavy 'bag' of worthless assets. Understanding this concept helps you make better decisions about when to cut losses versus when to hold."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-a-bag-holder", title: "What Is a Bag Holder?", level: 2 },
        { id: "how-it-happens", title: "how-it-happens", level: 2 },
        { id: "how-it-happens", title: "How It Happens", level: 2 },
        { id: "examples", title: "examples", level: 2 },
        { id: "examples", title: "Examples", level: 2 },
        { id: "why-it-matters", title: "why-it-matters", level: 2 },
        { id: "why-it-matters", title: "Why It Matters", level: 2 },
        { id: "avoiding", title: "avoiding", level: 2 },
        { id: "how-to-avoid-becoming-one", title: "How to Avoid Becoming One", level: 2 }
      ]}
      faqs={[
        {
          question: "Is bag holding the same as HODLing?",
          answer:
            "Not exactly. HODLing implies a deliberate long-term strategy based on conviction in an asset's fundamentals. Bag holding typically describes an involuntary situation where the investor is stuck with a declining asset and holds out of hope rather than strategy.",
        },
        {
          question: "Should I sell at a loss or keep holding?",
          answer:
            "This depends on whether the project's fundamentals remain sound. If the team is still building, the technology works, and the market decline is broader, holding may be reasonable. If the project shows signs of failure, cutting losses early prevents deeper drawdowns. Never hold purely based on hope.",
        },
      ]}
      relatedArticles={[
        { title: "What Is HODL?", href: "/learn/glossary/hodl", category: "Glossary" },
        { title: "What Are Diamond Hands?", href: "/learn/glossary/diamond-hands", category: "Glossary" },
        { title: "What Are Paper Hands?", href: "/learn/glossary/paper-hands", category: "Glossary" },
        { title: "What Is FUD?", href: "/learn/glossary/fud", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is a Bag Holder?</h2>
      <p>
        A bag holder is someone who continues to hold a cryptocurrency that has lost most of its value, usually because selling would lock in painful losses. The term is used across financial markets but is especially common in crypto due to the extreme volatility and the number of projects that fail or lose 90%+ of their value.
      </p>

      <h2 id="how-it-happens">How It Happens</h2>
      <p>
        Bag holding typically results from buying at or near a price peak, often driven by FOMO or hype. As the price drops, the investor holds on hoping for a recovery. Psychological biases like loss aversion and the sunk cost fallacy make it difficult to sell at a loss. Some investors keep buying on the way down (averaging down) without reassessing whether the project&apos;s fundamentals justify continued investment.
      </p>

      <h2 id="examples">Examples</h2>
      <p>
        Investors who bought tokens during the 2021 bull market peak and held through the subsequent bear market became bag holders when many altcoins dropped 90-99%. ICO investors from 2017 who never sold saw many projects go to zero. NFT collectors who minted at high prices during peak hype found themselves holding assets with no buyers.
      </p>

      <h2 id="why-it-matters">Why It Matters</h2>
      <p>
        Understanding bag holding helps you develop better risk management practices. Setting stop-losses, taking profits on the way up, diversifying across projects, and having a clear investment thesis all help prevent you from being caught in a position with no exit. Recognizing the emotional patterns that lead to bag holding is key to making rational portfolio decisions.
      </p>

      <h2 id="avoiding">How to Avoid Becoming One</h2>
      <p>
        Set clear entry and exit criteria before investing. Use position sizing to limit how much you allocate to any single asset. Take partial profits during rallies rather than waiting for a perfect top. Regularly reassess whether your investment thesis still holds. Be willing to admit mistakes and cut losses early rather than hoping for a recovery that may never come.
      </p>
    </LearnPageLayout>
  );
}
