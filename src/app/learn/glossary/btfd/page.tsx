import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Does BTFD Mean? Buy The Dip Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what BTFD (Buy The F***ing Dip) means in crypto, when the strategy works, when it fails, and how to approach dip buying responsibly.",
};

export default function BtfdPage() {
  return (
    <LearnPageLayout
      title="What Does BTFD Mean?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="4 min"
      intro="BTFD stands for 'Buy The F***ing Dip' — a popular rallying cry in crypto communities encouraging investors to purchase assets during price declines. The strategy is based on the belief that dips are temporary buying opportunities in an overall uptrend. While buying dips can be profitable in bull markets, the approach carries significant risk if the broader trend has reversed."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-does-btfd-mean", title: "What Does BTFD Mean?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-dip-buying-works", title: "How Dip Buying Works", level: 2 },
        { id: "when-it-works", title: "when-it-works", level: 2 },
        { id: "when-it-works", title: "When It Works", level: 2 },
        { id: "when-it-fails", title: "when-it-fails", level: 2 },
        { id: "when-it-fails", title: "When It Fails", level: 2 },
        { id: "smart-approach", title: "smart-approach", level: 2 },
        { id: "a-smarter-approach", title: "A Smarter Approach", level: 2 }
      ]}
      faqs={[
        {
          question: "Is buying the dip a good strategy?",
          answer:
            "Buying the dip works well in confirmed uptrends and bull markets. During these periods, temporary pullbacks often present genuine opportunities. However, during bear markets, buying every dip can lead to significant losses as prices continue declining. The key is understanding the broader market context.",
        },
        {
          question: "How do I know if it's a dip or a crash?",
          answer:
            "There is no foolproof way to distinguish in real time. Dips in bull markets tend to be short-lived (days to weeks) with strong buying support. Crashes typically show sustained selling with no strong bounces. Using dollar-cost averaging rather than lump-sum buying helps manage this uncertainty.",
        },
      ]}
      relatedArticles={[
        { title: "What Is DCA?", href: "/learn/glossary/dca", category: "Glossary" },
        { title: "What Is a Bear Market?", href: "/learn/glossary/bear-market", category: "Glossary" },
        { title: "What Is FOMO?", href: "/learn/glossary/fomo", category: "Glossary" },
        { title: "What Is HODL?", href: "/learn/glossary/hodl", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Does BTFD Mean?</h2>
      <p>
        BTFD is an acronym commonly used in crypto trading communities, particularly on social media platforms like Twitter/X and Reddit. It expresses the aggressive conviction that any price decline is a buying opportunity. The phrase gained popularity during the 2020-2021 bull market when every dip was indeed followed by higher prices.
      </p>

      <h2 id="how-it-works">How Dip Buying Works</h2>
      <p>
        The strategy involves keeping cash or stablecoin reserves on hand and deploying them when prices drop by a predetermined percentage from recent highs. Some traders set specific levels (such as buying when Bitcoin drops 10%, 20%, or 30%), while others look for technical indicators like support levels or oversold conditions on momentum indicators.
      </p>

      <h2 id="when-it-works">When It Works</h2>
      <p>
        Buying the dip is most effective during confirmed bull markets when the broader trend is upward. In these environments, temporary pullbacks caused by profit-taking, FUD, or short-term events provide opportunities to accumulate at lower prices before the next leg up. Historically, Bitcoin bull market dips of 20-30% have been strong buying opportunities.
      </p>

      <h2 id="when-it-fails">When It Fails</h2>
      <p>
        The strategy fails spectacularly in bear markets. Every dip looks like a buying opportunity until prices continue falling another 50%. Investors who aggressively bought dips throughout 2022 saw their positions decline further as Bitcoin dropped from $60,000 to $15,500. What appears to be a dip can actually be the beginning of a prolonged decline.
      </p>

      <h2 id="smart-approach">A Smarter Approach</h2>
      <p>
        Rather than blindly buying every dip, combine dip-buying with dollar-cost averaging, position sizing, and market context analysis. Allocate only a portion of your funds to each buy, scale in gradually, and maintain reserves for potentially deeper drops. Focus on fundamentally strong assets rather than speculative tokens, and accept that timing the exact bottom is nearly impossible.
      </p>
    </LearnPageLayout>
  );
}
