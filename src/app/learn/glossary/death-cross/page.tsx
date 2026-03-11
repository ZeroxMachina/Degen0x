import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Death Cross in Crypto Explained (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn what a death cross is in crypto trading, how it forms, its historical reliability as a bearish signal, and how traders respond to death cross patterns.",
};

export default function DeathCrossPage() {
  return (
    <LearnPageLayout
      title="Death Cross"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="6 min read"
      intro="A death cross is a bearish technical pattern that occurs when a short-term moving average crosses below a long-term moving average, most commonly the 50-day moving average crossing below the 200-day moving average. This crossover signals that recent price momentum has shifted from bullish to bearish and is widely watched by traders, institutional investors, and algorithmic trading systems as a potential indicator of extended downside."
      toc={[
        { id: "what-is-death-cross", title: "What Is a Death Cross?", level: 2 },
        { id: "how-it-forms", title: "How It Forms", level: 2 },
        { id: "historical-reliability", title: "Historical Reliability", level: 2 },
        { id: "trading-death-cross", title: "Trading the Death Cross", level: 2 },
      ]}
      faqs={[
        { question: "Should I sell when a death cross occurs?", answer: "Not necessarily. Death crosses are lagging indicators that confirm what has already happened rather than predict what will happen next. By the time the crossover occurs, much of the decline may already be priced in. Use the death cross as one data point among many rather than an automatic sell signal." },
        { question: "How often do death crosses occur in Bitcoin?", answer: "Bitcoin has experienced death crosses several times since its inception. Some preceded extended bear markets while others were followed by quick recoveries. The signal is more reliable on weekly charts than daily charts and should always be interpreted in the context of broader market conditions and fundamentals." },
      ]}
      relatedArticles={[
        { title: "Golden Cross", href: "/learn/glossary/golden-cross", category: "Glossary" },
        { title: "Moving Average", href: "/learn/glossary/moving-average", category: "Glossary" },
        { title: "Bear Market", href: "/learn/glossary/bear-market", category: "Glossary" },
      ]}
    >
      <section id="what-is-death-cross">
        <h2>What Is a Death Cross?</h2>
        <p>A death cross is a chart pattern where the 50-day simple moving average crosses below the 200-day simple moving average. The name reflects the bearish implications of the signal, as it indicates the short-term price trend has deteriorated below the long-term trend. Because these are widely followed moving averages used by institutions, the crossover itself can trigger additional selling pressure from algorithmic trading systems and fund managers who use it as a risk management signal.</p>
      </section>

      <section id="how-it-forms">
        <h2>How It Forms</h2>
        <p>A death cross develops in three stages. First, price begins declining from a peak while both moving averages are still rising. Second, the shorter 50-day MA begins curving downward as recent prices drag it lower while the 200-day MA continues upward due to its longer lookback period. Third, the 50-day crosses below the 200-day, completing the pattern. The entire process typically takes weeks to months from the initial price decline to the actual crossover, making it a significantly lagging signal.</p>
      </section>

      <section id="historical-reliability">
        <h2>Historical Reliability</h2>
        <p>The death cross has a mixed track record in crypto markets. Some death crosses have preceded significant bear markets with declines of 50% or more. Others have been followed by rapid reversals that made the signal a false alarm. The signal tends to be more reliable during macro bear markets when accompanied by deteriorating fundamentals and declining volume on rallies. In isolation, the death cross has a high false positive rate, particularly in choppy or ranging markets where moving averages frequently cross and re-cross.</p>
      </section>

      <section id="trading-death-cross">
        <h2>Trading the Death Cross</h2>
        <p>Conservative traders reduce position sizes or increase hedging when a death cross forms on the weekly chart. Aggressive traders may initiate short positions with stop-losses above the recent swing high. Long-term investors often use the death cross as a signal to pause new purchases rather than sell existing holdings. The most effective approach combines the death cross with volume analysis (confirming volume on the decline), momentum indicators like RSI, and an assessment of market structure to determine whether the signal aligns with broader bearish conditions.</p>
      </section>
    </LearnPageLayout>
  );
}
