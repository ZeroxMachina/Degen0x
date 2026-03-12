import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Double Bottom Pattern in Crypto (${CURRENT_YEAR}) | degen0x`,
  description: "Learn what a double bottom pattern is, how to identify this bullish reversal on crypto charts, neckline confirmation, and trading strategies for double bottoms.",
};

export default function DoubleBottomPage() {
  return (
    <LearnPageLayout
      title="Double Bottom Pattern"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="6 min read"
      intro="A double bottom is a bullish reversal chart pattern that forms after a downtrend when price reaches a support level twice and bounces both times. The pattern resembles the letter W and signals that selling pressure is exhausting. Double bottoms are reliable reversal indicators in crypto markets and frequently mark the end of significant sell-offs, providing traders with clear entry points and defined risk levels."
      toc={[
        { id: "what-is-double-bottom", title: "what-is-double-bottom", level: 2 },
        { id: "what-is-a-double-bottom", title: "What Is a Double Bottom?", level: 2 },
        { id: "identifying", title: "identifying", level: 2 },
        { id: "identifying-the-pattern", title: "Identifying the Pattern", level: 2 },
        { id: "confirmation", title: "confirmation", level: 2 },
        { id: "confirmation-signals", title: "Confirmation Signals", level: 2 },
        { id: "trading", title: "trading", level: 2 },
        { id: "trading-double-bottoms", title: "Trading Double Bottoms", level: 2 }
      ]}
      faqs={[
        { question: "How do I tell a double bottom from a continuing downtrend?", answer: "The key differentiator is volume. In a valid double bottom, volume typically increases on the bounce from the second low, showing buying interest returning. RSI divergence (higher RSI low on the second price low) adds confirmation. The pattern is only confirmed when price breaks above the neckline between the two lows." },
        { question: "Can the two bottoms be at different prices?", answer: "Yes. The two lows can differ by up to 3-5%. A slightly higher second low is actually more bullish because it shows buyers stepping in earlier. A slightly lower second low that quickly recovers (a spring or fake breakdown) can also be valid and sometimes produces stronger reversals." },
      ]}
      relatedArticles={[
        { title: "Double Top", href: "/learn/glossary/double-top", category: "Glossary" },
        { title: "Support Level", href: "/learn/glossary/support", category: "Glossary" },
        { title: "Cup and Handle", href: "/learn/glossary/cup-and-handle", category: "Glossary" },
      ]}
    >
      <section id="what-is-double-bottom">
        <h2>What Is a Double Bottom?</h2>
        <p>A double bottom forms when price declines to a support level, bounces, pulls back to approximately the same level, and bounces again. The two troughs establish strong support where buyers consistently step in. The peak between the two lows forms the neckline, which serves as the breakout trigger. The pattern reflects a shift in market psychology from bearish to bullish as sellers fail twice to push price below the established support zone, emboldening buyers to take control.</p>
      </section>

      <section id="identifying">
        <h2>Identifying the Pattern</h2>
        <p>Look for two distinct lows at similar prices following an established downtrend. The bounce between the lows should retrace at least 10% of the prior decline. Volume often decreases on the second low compared to the first, showing declining selling pressure. The time between the two lows matters: patterns spanning several weeks or months are more significant than those forming over days. The second low should show signs of demand through bullish candlestick patterns or increasing buying volume on the bounce.</p>
      </section>

      <section id="confirmation">
        <h2>Confirmation Signals</h2>
        <p>The double bottom is confirmed when price breaks above the neckline on strong volume. Bullish RSI divergence between the two lows strengthens the signal significantly. A close above the neckline is more reliable than an intraday touch. After the breakout, a pullback to retest the neckline as support is common and provides a lower-risk entry opportunity. MACD turning positive or a bullish crossover near the second low adds further confirmation that momentum has shifted.</p>
      </section>

      <section id="trading">
        <h2>Trading Double Bottoms</h2>
        <p>Aggressive traders buy at the second low when bullish candlestick patterns appear, with stops below the double bottom support. Conservative traders wait for the neckline breakout or the subsequent retest. The measured move target equals the pattern height projected upward from the neckline. In crypto, double bottoms on the weekly chart often mark major trend reversals and can lead to substantial rallies. Scaling into positions between the second low and the neckline break allows averaging in while managing risk.</p>
      </section>
    </LearnPageLayout>
  );
}
