import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Golden Cross in Crypto Explained (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn what a golden cross is, how the 50-day and 200-day moving average crossover signals bullish trends, and how to trade golden cross patterns in crypto.",
};

export default function GoldenCrossPage() {
  return (
    <LearnPageLayout
      title="Golden Cross"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="6 min read"
      intro="A golden cross is a bullish technical pattern that occurs when a short-term moving average crosses above a long-term moving average, most commonly the 50-day MA crossing above the 200-day MA. This crossover signals that short-term momentum has shifted bullish relative to the long-term trend and is considered one of the most widely recognized buy signals in technical analysis. Institutional investors and algorithmic systems closely monitor golden crosses across crypto and traditional markets."
      toc={[
        { id: "what-is-golden-cross", title: "What Is a Golden Cross?", level: 2 },
        { id: "three-stages", title: "Three Stages of Formation", level: 2 },
        { id: "reliability", title: "Historical Reliability in Crypto", level: 2 },
        { id: "trading-strategies", title: "Trading Strategies", level: 2 },
      ]}
      faqs={[
        { question: "Is a golden cross a guaranteed buy signal?", answer: "No. Golden crosses are lagging indicators and can produce false signals, especially in choppy markets. The signal is more reliable when accompanied by increasing volume, positive momentum indicators, and improving fundamentals. Use the golden cross as confirmation within a broader analysis framework rather than a standalone trading trigger." },
        { question: "How long after a golden cross should I expect gains?", answer: "Historical data shows crypto assets tend to perform well in the 3-12 months following a golden cross, but there are no guarantees. Some golden crosses lead to immediate rallies while others take weeks to produce significant upside. The strength of the subsequent move depends on the broader market environment and specific asset fundamentals." },
      ]}
      relatedArticles={[
        { title: "Death Cross", href: "/learn/glossary/death-cross", category: "Glossary" },
        { title: "Moving Average", href: "/learn/glossary/moving-average", category: "Glossary" },
        { title: "Bull Market", href: "/learn/glossary/bull-market", category: "Glossary" },
      ]}
    >
      <section id="what-is-golden-cross">
        <h2>What Is a Golden Cross?</h2>
        <p>A golden cross occurs when the 50-day simple moving average crosses above the 200-day simple moving average on the price chart. This crossover indicates that the intermediate-term trend has turned positive relative to the long-term trend, suggesting growing bullish momentum. The pattern gets its name from its association with the start of major bull runs. Because institutional investors and algorithmic trading systems track these moving averages, the crossover itself can generate buying pressure that reinforces the bullish signal.</p>
      </section>

      <section id="three-stages">
        <h2>Three Stages of Formation</h2>
        <p>The golden cross develops in three phases. First, a downtrend bottoms out as selling exhaustion occurs and buyers begin accumulating. Second, the shorter 50-day MA begins curving upward as recent prices push it higher while the 200-day MA is still declining or flattening. Third, the 50-day crosses above the 200-day, completing the pattern. The strongest golden crosses occur when both moving averages begin trending upward after the crossover, confirming that the trend shift has broad-based momentum behind it.</p>
      </section>

      <section id="reliability">
        <h2>Historical Reliability in Crypto</h2>
        <p>In Bitcoin and major altcoins, golden crosses have historically preceded significant bull runs, though timing varies considerably. The signal is more reliable on weekly timeframes than daily ones. False golden crosses can occur in bear market rallies where the cross briefly forms before reversing back to a death cross. Volume confirmation is critical: a golden cross accompanied by rising volume on up days is far more reliable than one occurring on declining volume. The best results come when the golden cross aligns with positive on-chain metrics and improving market sentiment.</p>
      </section>

      <section id="trading-strategies">
        <h2>Trading Strategies</h2>
        <p>Conservative traders begin accumulating positions after the golden cross forms and confirm it with weekly chart analysis. Aggressive traders may front-run the golden cross by buying when the 50-day MA begins curving upward toward the 200-day. Position sizing should be gradual, adding to positions as the trend confirms. Use the 50-day MA as a trailing support level for stop-loss placement. If price falls back below the 50-day MA after the golden cross, it may invalidate the signal and warrant reducing exposure.</p>
      </section>
    </LearnPageLayout>
  );
}
