import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Hammer Candlestick Pattern Explained (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn what a hammer candlestick is, how it signals potential bullish reversals, the inverted hammer, and how to trade hammer patterns in crypto markets.",
};

export default function HammerPage() {
  return (
    <LearnPageLayout
      title="Hammer Candlestick"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="6 min read"
      intro="A hammer is a bullish reversal candlestick pattern with a small body near the top of the candle and a long lower shadow at least twice the length of the body. It forms during downtrends when sellers push price significantly lower during the session, but buyers step in and drive price back up to close near the open. The hammer signals that selling pressure is being overcome by buying interest and a potential reversal may be forming."
      toc={[
        { id: "what-is-hammer", title: "What Is a Hammer?", level: 2 },
        { id: "inverted-hammer", title: "Inverted Hammer", level: 2 },
        { id: "confirmation", title: "Confirmation Requirements", level: 2 },
        { id: "trading", title: "Trading Hammer Patterns", level: 2 },
      ]}
      faqs={[
        { question: "What is the difference between a hammer and a hanging man?", answer: "Both have identical shapes (small body, long lower shadow), but their position differs. A hammer appears after a downtrend and is bullish. A hanging man appears after an uptrend and is bearish. The same candle shape carries opposite implications depending on the preceding trend. Both require confirmation from the following candle." },
        { question: "Does the color of a hammer candle matter?", answer: "A green (bullish) hammer is slightly more bullish than a red (bearish) hammer because it means price closed above the open. However, both are considered bullish signals when they appear after a downtrend. The long lower shadow showing buyer rejection of lower prices is more important than the body color." },
      ]}
      relatedArticles={[
        { title: "Doji Candlestick", href: "/learn/glossary/doji", category: "Glossary" },
        { title: "Engulfing Pattern", href: "/learn/glossary/engulfing", category: "Glossary" },
        { title: "Support Level", href: "/learn/glossary/support", category: "Glossary" },
      ]}
    >
      <section id="what-is-hammer">
        <h2>What Is a Hammer?</h2>
        <p>A hammer candlestick has a small real body at or near the top of the trading range, little to no upper shadow, and a lower shadow that is at least twice the length of the body. The pattern tells a story: sellers were in control during the session and pushed the price significantly lower, but buyers emerged at the lows and drove price back up to close near the opening price. This rejection of lower prices during a downtrend suggests the balance of power may be shifting from sellers to buyers.</p>
      </section>

      <section id="inverted-hammer">
        <h2>Inverted Hammer</h2>
        <p>The inverted hammer appears at the bottom of a downtrend with a small body near the bottom and a long upper shadow. It indicates that buyers attempted to push prices higher during the session. Although they could not maintain the gains, the upward attempt after a downtrend shows that buying interest is emerging. The inverted hammer is less reliable than the standard hammer and requires stronger confirmation from the following candle. A gap up or strong bullish candle after the inverted hammer validates the reversal signal.</p>
      </section>

      <section id="confirmation">
        <h2>Confirmation Requirements</h2>
        <p>A hammer is a warning signal, not an automatic buy trigger. Confirmation requires a bullish candle following the hammer that closes above the hammer body. Additional confirmation comes from higher volume on the hammer or the confirmation candle, RSI showing oversold conditions, and the hammer forming at a recognized support level. Without confirmation, the hammer may simply represent a temporary pause in the downtrend before further decline. Higher timeframe hammers (daily, weekly) are more significant than intraday hammers.</p>
      </section>

      <section id="trading">
        <h2>Trading Hammer Patterns</h2>
        <p>Enter long after the confirmation candle closes above the hammer high. Place stops below the hammer low (the bottom of the long shadow). The risk-reward is defined by the distance from entry to stop-loss versus the potential upside target. Hammers at major support levels, Fibonacci retracements, or moving averages carry more weight. In crypto, hammers on the daily chart after significant sell-offs often mark important bottoms. Scale into positions rather than committing full size on the initial signal to manage the risk of pattern failure.</p>
      </section>
    </LearnPageLayout>
  );
}
