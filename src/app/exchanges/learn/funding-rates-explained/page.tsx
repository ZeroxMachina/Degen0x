import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Funding Rates in Perpetual Futures (${CURRENT_YEAR}) | degen0x`,
  description: "Learn how funding rates work in perpetual futures trading. Calculation methods, impact on positions, strategies, and how to use funding rates to your advantage.",
};

export default function FundingRatesExplained() {
  return (
    <LearnPageLayout
      title="Funding Rates in Perpetual Futures"
      categoryName="Exchanges"
      categorySlug="exchanges"
      readTime="9 min read"
      intro="Funding rates are a critical mechanism in perpetual futures trading that keeps contract prices aligned with the underlying spot market. They represent periodic payments between long and short traders, and understanding them is essential for anyone trading perpetual futures. Funding rates affect your profitability, reveal market sentiment, and create unique trading opportunities."
      toc={[
        { id: "what-are-funding-rates", title: "what-are-funding-rates", level: 2 },
        { id: "what-are-funding-rates", title: "What Are Funding Rates?", level: 2 },
        { id: "how-calculated", title: "how-calculated", level: 2 },
        { id: "how-funding-rates-are-calculated", title: "How Funding Rates Are Calculated", level: 2 },
        { id: "impact", title: "impact", level: 2 },
        { id: "impact-on-your-positions", title: "Impact on Your Positions", level: 2 },
        { id: "market-sentiment", title: "market-sentiment", level: 2 },
        { id: "funding-rates-and-market-sentiment", title: "Funding Rates and Market Sentiment", level: 2 },
        { id: "strategies", title: "strategies", level: 2 },
        { id: "funding-rate-strategies", title: "Funding Rate Strategies", level: 2 },
        { id: "across-exchanges", title: "across-exchanges", level: 2 },
        { id: "funding-rates-across-exchanges", title: "Funding Rates Across Exchanges", level: 2 },
        { id: "managing", title: "managing", level: 2 },
        { id: "managing-funding-rate-costs", title: "Managing Funding Rate Costs", level: 2 }
      ]}
      faqs={[
        { question: "How often are funding rates paid?", answer: "Most exchanges charge funding every 8 hours (at 00:00, 08:00, and 16:00 UTC). Some exchanges like dYdX charge hourly. The payment happens automatically if you hold a position at the funding timestamp." },
        { question: "Can funding rates be negative?", answer: "Yes. Negative funding means short positions pay long positions. This occurs when the futures price trades below the spot price, typically during bearish markets or after sharp sell-offs." },
        { question: "Do I pay funding if I close before the funding time?", answer: "No. Funding is only charged to positions held at the exact funding timestamp. If you close your position before the timestamp, you do not pay or receive funding for that period." },
        { question: "How much can funding rates cost?", answer: "Typical funding ranges from -0.01% to 0.03% per 8-hour period. During extreme markets, rates can spike to 0.1-0.3% per period. Annualized, a 0.03% rate per 8 hours equals roughly 33% per year, which significantly erodes long position returns." },
      ]}
      relatedArticles={[
        { title: "Spot vs Futures Trading", href: "/exchanges/learn/spot-vs-futures-trading", category: "Exchanges" },
        { title: "Liquidation Explained", href: "/exchanges/learn/liquidation-explained", category: "Exchanges" },
        { title: "Leverage Trading Guide", href: "/exchanges/learn/leverage-trading-guide", category: "Exchanges" },
      ]}
    >
      <section id="what-are-funding-rates">
        <h2>What Are Funding Rates?</h2>
        <p>Perpetual futures contracts have no expiration date, unlike traditional futures that settle on a specific date. Without expiration, there is no natural mechanism forcing the perpetual price to converge with the spot price. Funding rates solve this problem by creating an economic incentive for convergence.</p>
        <p>When the perpetual futures price trades above the spot price (positive funding), long positions pay short positions. This payment discourages longs and encourages shorts, pushing the futures price back toward spot. When futures trade below spot (negative funding), shorts pay longs, creating the opposite incentive.</p>
        <p>Funding payments transfer directly between traders. The exchange does not profit from funding; it simply facilitates the transfer between opposing sides of the market. This peer-to-peer mechanism is what allows perpetual contracts to track spot prices without expiration.</p>
      </section>

      <section id="how-calculated">
        <h2>How Funding Rates Are Calculated</h2>
        <p>Funding rates typically have two components: the interest rate component (reflecting the difference between borrowing rates of the base and quote currencies) and the premium/discount component (reflecting the difference between the perpetual price and the spot index price).</p>
        <p>The premium component is the main driver. It measures how far the perpetual price deviates from the spot index, which is usually a weighted average of spot prices from multiple exchanges. A larger deviation results in a higher funding rate to create stronger convergence pressure.</p>
        <p>Each exchange calculates funding slightly differently. Binance, Bybit, and OKX use similar formulas with an interest rate base of 0.01% per 8-hour period plus the premium component. The total rate is typically capped between -0.75% and +0.75% per period to prevent extreme charges.</p>
      </section>

      <section id="impact">
        <h2>Impact on Your Positions</h2>
        <p>The funding payment is calculated on your position's notional value, not your margin. A $10,000 position with 0.01% funding pays $1 at each funding timestamp. With 10x leverage on $1,000 margin, this $1 payment represents 0.1% of your margin, illustrating how leverage amplifies funding costs.</p>
        <p>For long-term positions, funding costs compound significantly. A 0.01% per 8-hour rate compounds to approximately 10.9% annually. If you hold a leveraged long during a bull market when positive funding is persistent, these costs substantially reduce your net returns.</p>
        <p>Funding payments are deducted from or added to your margin balance. If funding costs reduce your margin below the maintenance level, you can be liquidated purely from funding payments without any adverse price movement. This is an often-overlooked risk for long-duration leveraged positions.</p>
      </section>

      <section id="market-sentiment">
        <h2>Funding Rates and Market Sentiment</h2>
        <p>Funding rates serve as a sentiment indicator. Consistently high positive funding indicates overwhelming bullish positioning with many traders long. This can signal overheated markets and potential for a correction as the crowded long trade becomes vulnerable to a squeeze.</p>
        <p>Negative funding during market fear indicates bearish overcrowding. When shorts dominate so heavily that they pay longs to exist, the market may be approaching capitulation. Historically, periods of extremely negative funding have preceded market reversals.</p>
        <p>Tracking funding rate trends across multiple assets reveals broader market sentiment shifts. When funding turns positive across most major assets simultaneously, it confirms bullish momentum. When funding flips negative broadly, it signals a sentiment shift toward caution or fear.</p>
      </section>

      <section id="strategies">
        <h2>Funding Rate Strategies</h2>
        <p>Cash-and-carry arbitrage is the most common funding strategy. You buy spot crypto and simultaneously short the same amount in perpetual futures. When positive funding exists, your short position earns funding payments while your spot position hedges the price risk. This captures funding yield with minimal directional exposure.</p>
        <p>Funding rate arbitrage between exchanges exploits differences in funding rates across platforms. If Binance charges 0.05% and Bybit charges 0.02%, you could short on Binance (earning higher funding) and long on Bybit (paying lower funding), capturing the 0.03% difference.</p>
        <p>Using funding as a contrarian indicator: extremely high positive funding may signal a good time to reduce long exposure or open shorts. Extremely negative funding may signal a buying opportunity. This is not a reliable timing tool alone but adds useful context to other analysis.</p>
      </section>

      <section id="across-exchanges">
        <h2>Funding Rates Across Exchanges</h2>
        <p>Funding rates vary between exchanges because each has different trader composition and market dynamics. Binance typically has the most "baseline" funding due to its dominant volume. Smaller exchanges may show more extreme funding rates due to less balanced order flow.</p>
        <p>Monitoring tools like Coinglass, Laevitas, and CoinAnk aggregate funding rates across exchanges in real time. These dashboards show current rates, historical charts, and predicted next funding for major trading pairs across all major exchanges.</p>
        <p>Some exchanges use different funding frequencies. Most use 8-hour intervals, but dYdX charges hourly and some newer platforms use different schedules. Always check the funding frequency when comparing rates across platforms to ensure you are making accurate comparisons.</p>
      </section>

      <section id="managing">
        <h2>Managing Funding Rate Costs</h2>
        <p>Check the current and predicted funding rate before opening a perpetual futures position. High funding on the side you plan to trade adds significant carrying costs. Consider whether the expected trade profit exceeds the funding cost over your anticipated holding period.</p>
        <p>Time your entries and exits around funding timestamps. If you are going long and positive funding is about to charge, entering just after the timestamp saves one funding payment. If you are short earning funding, stay open through the timestamp before closing.</p>
        <p>For longer-duration positions, consider whether spot or futures is more appropriate. If you expect to hold for weeks and positive funding averages 0.02% per 8 hours, the annualized 22% cost may make a spot position more economical despite the lack of leverage.</p>
      </section>
    </LearnPageLayout>
  );
}
