import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Head and Shoulders Pattern in Crypto (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn what the head and shoulders pattern is, how to identify this reversal pattern, neckline breaks, inverse head and shoulders, and crypto trading strategies.",
};

export default function HeadAndShouldersPage() {
  return (
    <LearnPageLayout
      title="Head and Shoulders Pattern"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="7 min read"
      intro="The head and shoulders is a reversal chart pattern consisting of three peaks: a higher middle peak (head) flanked by two lower peaks (shoulders). It is widely considered one of the most reliable bearish reversal patterns in technical analysis. The inverse head and shoulders, forming at market bottoms, is the bullish counterpart. Both patterns provide clear entry, stop-loss, and target levels, making them favorites among crypto traders."
      toc={[
        { id: "what-is-hs", title: "What Is Head and Shoulders?", level: 2 },
        { id: "anatomy", title: "Anatomy of the Pattern", level: 2 },
        { id: "inverse", title: "Inverse Head and Shoulders", level: 2 },
        { id: "trading", title: "Trading the Pattern", level: 2 },
      ]}
      faqs={[
        { question: "How reliable is the head and shoulders pattern?", answer: "The head and shoulders is among the most reliable reversal patterns when properly identified and confirmed. Studies suggest a success rate of 70-85% for confirmed patterns with neckline breaks on volume. The pattern is more reliable on higher timeframes and when volume profile matches expectations (declining volume from left shoulder to head to right shoulder)." },
        { question: "Can a head and shoulders pattern fail?", answer: "Yes. If price breaks back above the neckline after initially breaking below it, the pattern fails and often leads to a sharp move in the opposite direction. Failed patterns can produce powerful rallies as short sellers cover. Always use stop-losses and respect the neckline as the invalidation level." },
      ]}
      relatedArticles={[
        { title: "Double Top", href: "/learn/glossary/double-top", category: "Glossary" },
        { title: "Double Bottom", href: "/learn/glossary/double-bottom", category: "Glossary" },
        { title: "Volume", href: "/learn/glossary/volume", category: "Glossary" },
      ]}
    >
      <section id="what-is-hs">
        <h2>What Is Head and Shoulders?</h2>
        <p>The head and shoulders pattern forms after an uptrend and consists of three successive peaks. The first peak (left shoulder) forms during the ongoing uptrend. Price then rises higher to form the head, the highest point of the pattern. Finally, price rallies again but only reaches the approximate level of the first peak, forming the right shoulder. The line connecting the lows between these peaks is the neckline, which serves as the critical support level whose break confirms the reversal.</p>
      </section>

      <section id="anatomy">
        <h2>Anatomy of the Pattern</h2>
        <p>The left shoulder forms with strong volume during an established uptrend. The head makes a higher high but ideally on slightly lower volume, showing early signs of weakening momentum. The right shoulder fails to reach the head height and forms on noticeably lower volume, confirming diminishing buying interest. The neckline connects the lows after the left shoulder and head. A sloping neckline is acceptable, though horizontal necklines are considered more reliable. The entire pattern can take weeks to months to complete.</p>
      </section>

      <section id="inverse">
        <h2>Inverse Head and Shoulders</h2>
        <p>The inverse (or reverse) head and shoulders forms at market bottoms and is the bullish counterpart. It consists of three troughs with the middle trough (head) being the lowest. Volume should increase on the breakout above the neckline for confirmation. Inverse head and shoulders patterns in crypto often mark major bottom formations and can precede significant bull runs. The measured move target and trading rules mirror the standard pattern but in the opposite direction.</p>
      </section>

      <section id="trading">
        <h2>Trading the Pattern</h2>
        <p>Enter short on a confirmed neckline break with above-average volume, placing stops above the right shoulder. The measured move target equals the distance from the head to the neckline, projected downward from the break point. Conservative traders wait for a retest of the broken neckline as resistance before entering. For inverse patterns, enter long on the neckline breakout with stops below the right shoulder. In crypto markets, these patterns often complete faster than in traditional markets and can produce swift, dramatic moves once confirmed.</p>
      </section>
    </LearnPageLayout>
  );
}
