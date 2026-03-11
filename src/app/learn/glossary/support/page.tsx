import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Support Level in Crypto Trading (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn what support levels are in crypto trading, how to identify them on charts, why they matter for buy decisions, and strategies for trading support zones.",
};

export default function SupportLevelPage() {
  return (
    <LearnPageLayout
      title="Support Level"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="6 min read"
      intro="A support level is a price point where an asset tends to stop falling because buying interest concentrates at that level. When price approaches support, demand increases and sellers lose momentum, creating a floor effect. Support levels are foundational to technical analysis and help traders identify potential entry points, set stop-loss orders, and gauge market sentiment. Understanding support is essential for any crypto trader or investor looking to time entries effectively."
      toc={[
        { id: "what-is-support", title: "What Is a Support Level?", level: 2 },
        { id: "identifying-support", title: "Identifying Support Levels", level: 2 },
        { id: "types-of-support", title: "Types of Support", level: 2 },
        { id: "trading-support", title: "Trading Support Levels", level: 2 },
      ]}
      faqs={[
        { question: "What happens when support breaks?", answer: "When price falls below a support level on significant volume, that former support often becomes resistance. This breakdown can trigger accelerated selling as stop-loss orders execute and traders who bought at that level begin selling. Broken support signals a shift in market sentiment from bullish to bearish for that price range." },
        { question: "How do you confirm a support level is valid?", answer: "Valid support levels are confirmed by multiple price touches (at least two to three bounces from the same area), increasing volume on the bounce, and alignment with other technical indicators. The more times a level holds, the stronger it is considered, though each test also gradually weakens it as buyers at that level are consumed." },
      ]}
      relatedArticles={[
        { title: "Resistance", href: "/learn/glossary/resistance", category: "Glossary" },
        { title: "Stop-Loss", href: "/learn/glossary/stop-loss", category: "Glossary" },
        { title: "Technical Analysis", href: "/investing/learn/technical-analysis", category: "Investing" },
      ]}
    >
      <section id="what-is-support">
        <h2>What Is a Support Level?</h2>
        <p>A support level is a price zone where buying pressure consistently overcomes selling pressure, preventing the price from declining further. Support forms because traders and investors perceive the asset as undervalued at that price and begin accumulating. Institutional buyers may have limit orders clustered at support, and short sellers may cover positions there. Support is not a single exact price but a zone where the balance of power shifts toward buyers.</p>
      </section>

      <section id="identifying-support">
        <h2>Identifying Support Levels</h2>
        <p>The most common method is examining historical price action for levels where the asset has previously bounced. Round numbers like $50,000 for Bitcoin or $3,000 for Ethereum act as psychological support. Previous resistance levels that have been broken often become new support. Moving averages (especially the 50-day and 200-day) serve as dynamic support in uptrends. Volume profile analysis can reveal high-volume nodes that act as support zones where significant trading activity occurred.</p>
      </section>

      <section id="types-of-support">
        <h2>Types of Support</h2>
        <p>Static support comes from horizontal price levels identified on the chart. Dynamic support moves with the price trend, such as trendlines and moving averages. Fibonacci retracement levels (38.2%, 50%, 61.8%) provide calculated support zones within trends. Volume-based support identifies price levels where historically high trading volume indicates strong buyer interest. Each type can reinforce the others, and confluences of multiple support types at the same level create particularly strong support zones.</p>
      </section>

      <section id="trading-support">
        <h2>Trading Support Levels</h2>
        <p>Aggressive traders buy at support with tight stop-losses placed just below the support zone. Conservative traders wait for a confirmed bounce (a bullish candle closing above support) before entering. If support breaks, traders may short the asset or exit long positions, with former support becoming their new resistance target. Risk management is critical when trading support because false breakdowns occur frequently in crypto markets. Position sizing should account for the distance between entry and stop-loss to maintain consistent risk per trade.</p>
      </section>
    </LearnPageLayout>
  );
}
