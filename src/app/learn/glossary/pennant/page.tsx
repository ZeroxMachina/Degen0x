import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Pennant Pattern in Crypto Trading (${CURRENT_YEAR}) | degen0x`,
  description: "Learn what a pennant pattern is, how to identify bullish and bearish pennants, the flagpole, and how to trade pennant breakouts in cryptocurrency markets.",
};

export default function PennantPage() {
  return (
    <LearnPageLayout
      title="Pennant Pattern"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="6 min read"
      intro="A pennant is a short-term continuation pattern that forms after a strong price move (the flagpole), followed by a brief period of consolidation with converging trendlines before the price continues in the original direction. Pennants resemble small symmetrical triangles and indicate a pause in the trend as the market digests the prior move. In crypto, pennants frequently appear during rapid rallies or sell-offs and can signal the resumption of powerful trends."
      toc={[
        { id: "what-is-pennant", title: "what-is-pennant", level: 2 },
        { id: "what-is-a-pennant", title: "What Is a Pennant?", level: 2 },
        { id: "bullish-bearish", title: "bullish-bearish", level: 2 },
        { id: "bullish-vs-bearish-pennants", title: "Bullish vs Bearish Pennants", level: 2 },
        { id: "vs-flag", title: "vs-flag", level: 2 },
        { id: "pennant-vs-flag-pattern", title: "Pennant vs Flag Pattern", level: 2 },
        { id: "trading", title: "trading", level: 2 },
        { id: "trading-pennant-breakouts", title: "Trading Pennant Breakouts", level: 2 }
      ]}
      faqs={[
        { question: "How long do pennant patterns last?", answer: "Pennants typically last one to three weeks on daily charts. Patterns lasting more than three weeks begin to resemble symmetrical triangles and lose the sharp continuation characteristics of pennants. The brevity of the pattern reflects a quick pause before the trend resumes rather than extended indecision." },
        { question: "What is the measured move for a pennant?", answer: "The measured move target equals the length of the flagpole (the sharp move preceding the pennant) projected from the breakout point. In crypto, these targets are often reached quickly, especially during high-momentum phases of bull or bear markets." },
      ]}
      relatedArticles={[
        { title: "Flag Pattern", href: "/learn/glossary/flag", category: "Glossary" },
        { title: "Ascending Triangle", href: "/learn/glossary/ascending-triangle", category: "Glossary" },
        { title: "Wedge Pattern", href: "/learn/glossary/wedge", category: "Glossary" },
      ]}
    >
      <section id="what-is-pennant">
        <h2>What Is a Pennant?</h2>
        <p>A pennant consists of two parts: the flagpole and the pennant body. The flagpole is a sharp, strong price move on high volume. The pennant body is a brief consolidation with converging trendlines (higher lows and lower highs) on declining volume. The pattern forms as short-term traders take profits from the sharp move while the broader trend remains intact. The converging lines create a small triangle that signals the market is pausing before continuing in the direction of the flagpole.</p>
      </section>

      <section id="bullish-bearish">
        <h2>Bullish vs Bearish Pennants</h2>
        <p>A bullish pennant forms after a sharp upward move and resolves with a breakout to the upside. It indicates that the buying pressure that created the flagpole will resume after the brief consolidation. A bearish pennant forms after a sharp decline and resolves with a breakdown to the downside. The key to identifying the bias is the direction of the flagpole, as pennants are continuation patterns that typically resolve in the direction of the prior trend.</p>
      </section>

      <section id="vs-flag">
        <h2>Pennant vs Flag Pattern</h2>
        <p>While both are short-term continuation patterns following a flagpole, their consolidation phases differ. A pennant has converging trendlines (like a small triangle), while a flag has parallel trendlines (like a small channel). Pennants show decreasing volatility during consolidation, while flags maintain relatively consistent volatility. Both have similar reliability and measured move targets based on the flagpole length. The choice between trading them is less important than properly identifying the flagpole and confirming the breakout.</p>
      </section>

      <section id="trading">
        <h2>Trading Pennant Breakouts</h2>
        <p>Enter when price breaks out of the pennant in the direction of the flagpole on increasing volume. Place stops on the opposite side of the pennant. Target the flagpole length projected from the breakout point. In bullish pennants, buy on the upside breakout with stops below the pennant low. In bearish pennants, sell on the downside break with stops above the pennant high. Volume expansion on the breakout is critical for confirmation. Crypto pennants often resolve quickly and produce fast moves, so be ready to act when the breakout occurs.</p>
      </section>
    </LearnPageLayout>
  );
}
