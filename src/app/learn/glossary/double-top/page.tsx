import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Double Top Pattern in Crypto (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn what a double top pattern is, how to identify this bearish reversal pattern on crypto charts, confirmation signals, and trading strategies for double tops.",
};

export default function DoubleTopPage() {
  return (
    <LearnPageLayout
      title="Double Top Pattern"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="6 min read"
      intro="A double top is a bearish reversal chart pattern that forms after an uptrend when price reaches a resistance level twice and fails to break through both times. The pattern resembles the letter M and signals that buying momentum is exhausting. Double tops are among the most reliable reversal patterns in technical analysis and are frequently observed in crypto markets, where they often mark the end of significant rallies."
      toc={[
        { id: "what-is-double-top", title: "What Is a Double Top?", level: 2 },
        { id: "identifying", title: "Identifying the Pattern", level: 2 },
        { id: "confirmation", title: "Confirmation and Neckline", level: 2 },
        { id: "trading", title: "Trading Double Tops", level: 2 },
      ]}
      faqs={[
        { question: "How reliable are double tops in crypto?", answer: "Double tops are among the more reliable reversal patterns, but they are not foolproof. Confirmed double tops (with neckline breaks on volume) have a success rate of roughly 65-75% in triggering meaningful declines. The pattern is more reliable on higher timeframes (daily and weekly) and when the two peaks are separated by at least several weeks." },
        { question: "What is the price target for a double top?", answer: "The measured move target is calculated by measuring the distance from the peaks to the neckline and projecting that same distance downward from the neckline break. For example, if the peaks are at $50,000 and the neckline is at $42,000, the target would be $34,000. This is an estimate, not a guarantee." },
      ]}
      relatedArticles={[
        { title: "Double Bottom", href: "/learn/glossary/double-bottom", category: "Glossary" },
        { title: "Head and Shoulders", href: "/learn/glossary/head-and-shoulders", category: "Glossary" },
        { title: "Resistance", href: "/learn/glossary/resistance", category: "Glossary" },
      ]}
    >
      <section id="what-is-double-top">
        <h2>What Is a Double Top?</h2>
        <p>A double top forms when price rises to a level, pulls back, then rallies again to approximately the same level before declining again. The two peaks create a clear resistance zone that buyers cannot overcome. The trough between the two peaks forms the neckline, which serves as the trigger level for the pattern. The psychology behind the pattern reflects buyers losing conviction after two failed attempts to push through resistance, while sellers gain confidence at the established ceiling.</p>
      </section>

      <section id="identifying">
        <h2>Identifying the Pattern</h2>
        <p>Look for two distinct peaks at roughly the same price level following an established uptrend. The peaks do not need to be exactly equal but should be within 1-3% of each other. The trough between peaks should show a meaningful pullback of at least 10%. Volume typically declines on the second peak compared to the first, indicating waning buying interest. The pattern takes weeks to months to form on daily charts, and patterns that develop too quickly are less reliable.</p>
      </section>

      <section id="confirmation">
        <h2>Confirmation and Neckline</h2>
        <p>The double top is not confirmed until price breaks below the neckline (the low between the two peaks) on elevated volume. Until the neckline breaks, the pattern remains unconfirmed and price could still push to new highs. A close below the neckline with above-average volume provides the strongest confirmation. After the break, a retest of the neckline from below (acting as new resistance) often occurs before the decline continues, offering a second entry opportunity for traders who missed the initial breakdown.</p>
      </section>

      <section id="trading">
        <h2>Trading Double Tops</h2>
        <p>Aggressive traders enter short positions when price rejects the second peak with a bearish candle pattern, placing stops above the peak. Conservative traders wait for the neckline break and enter on the retest. The measured move target equals the pattern height projected downward from the neckline. Trail stop-losses as the decline progresses. Be aware that false breakdowns can occur, especially if the neckline break happens on low volume. Using RSI divergence between the two peaks adds confirmation strength to the pattern.</p>
      </section>
    </LearnPageLayout>
  );
}
