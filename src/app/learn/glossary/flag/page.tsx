import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Flag Pattern in Crypto Trading (${CURRENT_YEAR}) | degen0x`,
  description: "Learn what a flag pattern is, how to identify bull and bear flags, the flagpole component, and how to trade flag pattern breakouts in cryptocurrency.",
};

export default function FlagPage() {
  return (
    <LearnPageLayout
      title="Flag Pattern"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="6 min read"
      intro="A flag pattern is a short-term continuation pattern that forms after a sharp price move (the flagpole), followed by a rectangular consolidation channel that slopes against the prior trend. Bull flags slope downward after an upward flagpole, while bear flags slope upward after a downward flagpole. Flags are among the most reliable continuation patterns in crypto trading and frequently appear during strong trending markets."
      toc={[
        { id: "what-is-flag", title: "what-is-flag", level: 2 },
        { id: "what-is-a-flag-pattern", title: "What Is a Flag Pattern?", level: 2 },
        { id: "bull-flag", title: "bull-flag", level: 2 },
        { id: "bull-flag-pattern", title: "Bull Flag Pattern", level: 2 },
        { id: "bear-flag", title: "bear-flag", level: 2 },
        { id: "bear-flag-pattern", title: "Bear Flag Pattern", level: 2 },
        { id: "trading", title: "trading", level: 2 },
        { id: "trading-flag-patterns", title: "Trading Flag Patterns", level: 2 }
      ]}
      faqs={[
        { question: "What is the difference between a flag and a channel?", answer: "A flag is a short-term pattern lasting days to weeks that follows a strong directional move. A channel is a longer-term pattern that can last months. Flags have a clear flagpole component and are continuation patterns. Channels can be continuation or reversal patterns depending on context and do not require a sharp preceding move." },
        { question: "How reliable are flag patterns in crypto?", answer: "Flag patterns have a high success rate (70-80%) when properly identified with clear flagpoles, declining volume during consolidation, and volume expansion on breakout. They are most reliable during strongly trending markets. In choppy or ranging markets, what appears to be a flag may simply be random consolidation." },
      ]}
      relatedArticles={[
        { title: "Pennant Pattern", href: "/learn/glossary/pennant", category: "Glossary" },
        { title: "Wedge Pattern", href: "/learn/glossary/wedge", category: "Glossary" },
        { title: "Volume", href: "/learn/glossary/volume", category: "Glossary" },
      ]}
    >
      <section id="what-is-flag">
        <h2>What Is a Flag Pattern?</h2>
        <p>A flag pattern consists of a strong, sharp price move (the flagpole) followed by a consolidation phase with parallel trendlines (the flag body) that slopes against the direction of the prior move. The pattern represents a brief pause where the market digests the rapid move before continuing. Volume should be high during the flagpole and decline during the flag formation. The breakout from the flag should occur in the direction of the flagpole on renewed volume.</p>
      </section>

      <section id="bull-flag">
        <h2>Bull Flag Pattern</h2>
        <p>A bull flag forms after a sharp upward move when price consolidates in a downward-sloping channel. The downward drift occurs on decreasing volume as short-term traders take profits while the broader uptrend remains intact. The flag body should retrace no more than 38-50% of the flagpole to remain valid. A breakout above the upper channel line on expanding volume confirms the pattern and signals continuation of the uptrend. Bull flags are extremely common during crypto bull market rallies.</p>
      </section>

      <section id="bear-flag">
        <h2>Bear Flag Pattern</h2>
        <p>A bear flag forms after a sharp downward move when price consolidates in an upward-sloping channel. The upward drift represents a relief rally on low volume as the bearish momentum pauses temporarily. Bear flags can be tricky because the upward drift can create false optimism. A breakdown below the lower channel line on volume confirms the continuation of the downtrend. Bear flags in crypto often appear during capitulation phases and panic sell-offs, preceding further declines.</p>
      </section>

      <section id="trading">
        <h2>Trading Flag Patterns</h2>
        <p>For bull flags, enter long on a breakout above the upper trendline with stops below the flag low. For bear flags, enter short on a breakdown below the lower trendline with stops above the flag high. The measured move target equals the flagpole length projected from the breakout point. Early entry within the flag body is possible but riskier, as the pattern may fail before completing. Volume confirmation on the breakout is essential. In crypto, flag breakouts often produce rapid moves that can reach the measured target within hours to days.</p>
      </section>
    </LearnPageLayout>
  );
}
