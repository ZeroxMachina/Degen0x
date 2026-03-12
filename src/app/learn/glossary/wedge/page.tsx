import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Wedge Pattern in Crypto Trading (${CURRENT_YEAR}) | degen0x`,
  description: "Learn what wedge patterns are, the difference between rising and falling wedges, how they signal reversals or continuations, and trading strategies for crypto.",
};

export default function WedgePage() {
  return (
    <LearnPageLayout
      title="Wedge Pattern"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="6 min read"
      intro="A wedge pattern is a chart formation where price converges between two sloping trendlines that move in the same direction. Rising wedges (both lines sloping upward) are typically bearish, while falling wedges (both lines sloping downward) are typically bullish. Wedges can appear as both reversal and continuation patterns depending on the context of the prior trend. They are common in crypto markets and provide clear breakout levels."
      toc={[
        { id: "what-is-wedge", title: "what-is-wedge", level: 2 },
        { id: "what-is-a-wedge-pattern", title: "What Is a Wedge Pattern?", level: 2 },
        { id: "rising-wedge", title: "rising-wedge", level: 2 },
        { id: "rising-wedge", title: "Rising Wedge", level: 2 },
        { id: "falling-wedge", title: "falling-wedge", level: 2 },
        { id: "falling-wedge", title: "Falling Wedge", level: 2 },
        { id: "trading", title: "trading", level: 2 },
        { id: "trading-wedge-patterns", title: "Trading Wedge Patterns", level: 2 }
      ]}
      faqs={[
        { question: "How is a wedge different from a triangle?", answer: "In a wedge, both trendlines slope in the same direction (both up in a rising wedge, both down in a falling wedge). In triangles, the lines either converge from opposite directions (symmetrical), one is flat (ascending/descending), or both are flat. Wedges carry directional bias based on their slope direction." },
        { question: "Which is more reliable, rising or falling wedge?", answer: "Both have similar reliability rates of approximately 65-70% for confirmed breakouts. Falling wedges appearing after downtrends tend to produce slightly stronger reversals, while rising wedges at the end of uptrends are effective reversal signals. Volume confirmation and the broader trend context matter more than the wedge type alone." },
      ]}
      relatedArticles={[
        { title: "Ascending Triangle", href: "/learn/glossary/ascending-triangle", category: "Glossary" },
        { title: "Pennant Pattern", href: "/learn/glossary/pennant", category: "Glossary" },
        { title: "Flag Pattern", href: "/learn/glossary/flag", category: "Glossary" },
      ]}
    >
      <section id="what-is-wedge">
        <h2>What Is a Wedge Pattern?</h2>
        <p>A wedge pattern forms when price moves within two converging trendlines that both slope in the same direction. Unlike triangles where lines converge from opposite directions, wedge trendlines move together, creating a narrowing price channel. The converging lines indicate that the current trend is losing momentum as the range compresses. Wedges typically take several weeks to months to form and resolve with a breakout opposite to the wedge direction.</p>
      </section>

      <section id="rising-wedge">
        <h2>Rising Wedge</h2>
        <p>A rising wedge has both support and resistance lines sloping upward, with the support line rising more steeply than resistance. This means each new high is incrementally smaller relative to each new low, showing that upside momentum is fading. Rising wedges are bearish and typically break down through the lower support line. When found at the top of an uptrend, they signal reversal. When found during a downtrend, they represent a bearish continuation (a bear flag variant).</p>
      </section>

      <section id="falling-wedge">
        <h2>Falling Wedge</h2>
        <p>A falling wedge has both trendlines sloping downward, with the resistance line declining more steeply than support. Each new low is incrementally smaller relative to each new high, indicating that downside momentum is weakening. Falling wedges are bullish and typically break upward through the upper resistance line. At the bottom of a downtrend, they signal reversal. During an uptrend, they represent a bullish continuation pattern as the pullback loses steam.</p>
      </section>

      <section id="trading">
        <h2>Trading Wedge Patterns</h2>
        <p>For rising wedges, enter short on a breakdown below the lower trendline with stops above the most recent high within the wedge. For falling wedges, enter long on a breakout above the upper trendline with stops below the most recent low. The measured move target is typically the widest part of the wedge projected from the breakout point. Volume should expand on the breakout. In crypto, wedge breakouts can be explosive because the gradual compression builds significant energy that releases rapidly once the pattern resolves.</p>
      </section>
    </LearnPageLayout>
  );
}
