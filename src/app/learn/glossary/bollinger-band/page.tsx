import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Bollinger Bands Explained (${CURRENT_YEAR}) | degen0x`,
  description: "Learn what Bollinger Bands are, how they measure volatility, how to interpret band squeezes and expansions, and trading strategies using Bollinger Bands in crypto.",
};

export default function BollingerBandPage() {
  return (
    <LearnPageLayout
      title="Bollinger Band"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="7 min read"
      intro="Bollinger Bands are a volatility indicator consisting of a middle band (typically a 20-period simple moving average) flanked by an upper and lower band set two standard deviations away. The bands automatically widen during volatile periods and contract during calm periods, providing a dynamic framework for assessing whether prices are relatively high or low. Created by John Bollinger, this indicator is invaluable for crypto traders navigating the market's notorious volatility."
      toc={[
        { id: "what-are-bollinger", title: "what-are-bollinger", level: 2 },
        { id: "what-are-bollinger-bands", title: "What Are Bollinger Bands?", level: 2 },
        { id: "reading-bands", title: "reading-bands", level: 2 },
        { id: "reading-the-bands", title: "Reading the Bands", level: 2 },
        { id: "squeeze", title: "squeeze", level: 2 },
        { id: "the-bollinger-squeeze", title: "The Bollinger Squeeze", level: 2 },
        { id: "strategies", title: "strategies", level: 2 },
        { id: "bollinger-band-strategies", title: "Bollinger Band Strategies", level: 2 }
      ]}
      faqs={[
        { question: "Do Bollinger Bands work for crypto?", answer: "Bollinger Bands are particularly useful for crypto because they adapt to volatility. Crypto markets experience extreme volatility shifts, and Bollinger Bands automatically adjust their width to reflect current conditions. The squeeze pattern is especially effective for anticipating breakouts in crypto pairs." },
        { question: "What settings should I use?", answer: "The standard settings (20-period SMA, 2 standard deviations) work well for most crypto timeframes. For day trading, some traders use (10, 1.5) for tighter signals. For longer-term analysis, (50, 2.5) provides a broader perspective. Wider deviations mean price touches the bands less frequently but signals are more significant." },
      ]}
      relatedArticles={[
        { title: "Moving Average", href: "/learn/glossary/moving-average", category: "Glossary" },
        { title: "ATR", href: "/learn/glossary/atr", category: "Glossary" },
        { title: "Volume", href: "/learn/glossary/volume", category: "Glossary" },
      ]}
    >
      <section id="what-are-bollinger">
        <h2>What Are Bollinger Bands?</h2>
        <p>Bollinger Bands consist of three lines plotted on a price chart. The middle band is a 20-period simple moving average that represents the intermediate trend. The upper band is the middle band plus two standard deviations, and the lower band is the middle band minus two standard deviations. Standard deviation measures how spread out prices are from the average, so the bands effectively create a statistical envelope around the price. Approximately 95% of price action occurs within the two standard deviation bands under normal market conditions.</p>
      </section>

      <section id="reading-bands">
        <h2>Reading the Bands</h2>
        <p>When price touches or exceeds the upper band, the asset may be overbought relative to recent history. When price touches the lower band, it may be oversold. However, touching a band is not automatically a buy or sell signal. In strong trends, price can ride along the upper or lower band for extended periods. The width of the bands conveys volatility information: wide bands indicate high volatility and narrow bands indicate low volatility. The relative position of price within the bands helps gauge momentum and potential reversal zones.</p>
      </section>

      <section id="squeeze">
        <h2>The Bollinger Squeeze</h2>
        <p>The squeeze occurs when Bollinger Bands narrow to their tightest width in a given period, indicating extremely low volatility. Low volatility periods are typically followed by high volatility breakouts, making the squeeze a powerful anticipatory signal. Traders watch for the bands to begin expanding as price breaks out of the squeeze, then enter in the direction of the breakout. Volume confirmation is important during breakouts from squeezes, and the direction of the breakout is often more reliable than the squeeze itself as a signal.</p>
      </section>

      <section id="strategies">
        <h2>Bollinger Band Strategies</h2>
        <p>The mean reversion strategy buys at the lower band and sells at the upper band, working best in ranging markets. The breakout strategy waits for a squeeze and enters in the direction of the expansion. The W-bottom pattern uses Bollinger Bands to identify double bottoms where the first low touches the lower band and the second low forms inside the bands. Bollinger Band width can be used as a standalone volatility indicator to time entries during low-volatility periods. Combining Bollinger Bands with RSI creates powerful confirmation setups.</p>
      </section>
    </LearnPageLayout>
  );
}
