import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Ascending Triangle Pattern in Crypto (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn what an ascending triangle is, how to identify this bullish pattern, volume behavior, breakout confirmation, and trading strategies for crypto.",
};

export default function AscendingTrianglePage() {
  return (
    <LearnPageLayout
      title="Ascending Triangle"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="6 min read"
      intro="An ascending triangle is a bullish chart pattern formed by a flat upper resistance line and a rising lower trendline connecting higher lows. The pattern shows buyers becoming increasingly aggressive, pushing price higher with each pullback while sellers hold firm at a specific resistance level. Ascending triangles typically resolve with an upside breakout and are common continuation patterns in crypto uptrends."
      toc={[
        { id: "what-is-ascending", title: "What Is an Ascending Triangle?", level: 2 },
        { id: "identifying", title: "Identifying the Pattern", level: 2 },
        { id: "volume-behavior", title: "Volume Behavior", level: 2 },
        { id: "trading", title: "Trading Ascending Triangles", level: 2 },
      ]}
      faqs={[
        { question: "How often do ascending triangles break upward?", answer: "Ascending triangles break upward approximately 70-75% of the time. However, downside breakdowns do occur and can be powerful because they trap bullish traders. Always use stop-losses regardless of the statistical edge, and wait for confirmation rather than anticipating the breakout direction." },
        { question: "How is an ascending triangle different from a symmetrical triangle?", answer: "An ascending triangle has a flat top and rising bottom, showing bullish bias. A symmetrical triangle has converging trendlines with no directional bias. Ascending triangles are more likely to break upward while symmetrical triangles can break either direction. The trading approach is similar but the probability of direction differs." },
      ]}
      relatedArticles={[
        { title: "Descending Triangle", href: "/learn/glossary/descending-triangle", category: "Glossary" },
        { title: "Pennant Pattern", href: "/learn/glossary/pennant", category: "Glossary" },
        { title: "Flag Pattern", href: "/learn/glossary/flag", category: "Glossary" },
      ]}
    >
      <section id="what-is-ascending">
        <h2>What Is an Ascending Triangle?</h2>
        <p>An ascending triangle forms when price repeatedly tests a horizontal resistance level while making higher lows on each pullback. The flat resistance line shows sellers defending a specific price, while the rising lower trendline indicates buyers are willing to pay progressively higher prices. This compression of price action between the two lines creates tension that eventually resolves with a breakout, most commonly to the upside as buyer aggression overcomes seller defense.</p>
      </section>

      <section id="identifying">
        <h2>Identifying the Pattern</h2>
        <p>Look for at least two touches of the horizontal resistance line and at least two higher lows connecting to form the rising support trendline. The pattern should form within an existing uptrend for the highest reliability as a continuation signal. The convergence should take weeks to months on daily charts for the most significant patterns. The apex (where the two lines would meet) should not be reached before the breakout, as patterns that compress too tightly without breaking lose their energy.</p>
      </section>

      <section id="volume-behavior">
        <h2>Volume Behavior</h2>
        <p>Volume typically contracts as the triangle forms, reflecting decreasing participation as price range narrows. Each successive test of resistance may show declining volume. The breakout should occur on a significant increase in volume to be considered valid. A breakout on low volume is more likely to be a false signal. In crypto markets, volume patterns can be less consistent due to the fragmented exchange landscape, so checking volume across multiple exchanges adds reliability to the analysis.</p>
      </section>

      <section id="trading">
        <h2>Trading Ascending Triangles</h2>
        <p>Enter long on a confirmed close above the resistance line with above-average volume. Place stop-losses below the most recent higher low or the rising trendline. The measured move target equals the height of the triangle at its widest point projected upward from the breakout. Some traders enter early at the rising trendline support with tight stops, anticipating the eventual breakout. If the pattern breaks down through the rising trendline, it invalidates the bullish setup and may become a short opportunity.</p>
      </section>
    </LearnPageLayout>
  );
}
