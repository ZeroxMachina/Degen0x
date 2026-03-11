import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Copy Trading Explained (${CURRENT_YEAR}): Guide to Social Trading in Crypto`,
  description: "Learn how crypto copy trading works. Compare platforms, understand risks, evaluate lead traders, and set up your first copy trading strategy.",
};

const toc = [
  { id: "what-is-copy-trading", title: "What Is Copy Trading", level: 2 },
  { id: "how-it-works", title: "How Copy Trading Works", level: 2 },
  { id: "choosing-traders", title: "Choosing Lead Traders", level: 2 },
  { id: "platforms", title: "Best Copy Trading Platforms", level: 2 },
  { id: "risks", title: "Risks and Limitations", level: 2 },
];

const faqs = [
  { question: "Can I lose money with copy trading?", answer: "Yes. Copy trading does not guarantee profits. If the lead trader loses money, you lose money proportionally. Past performance does not guarantee future results. Always diversify across multiple lead traders and only invest what you can afford to lose." },
  { question: "How much do lead traders earn?", answer: "Lead traders typically earn a performance fee of 10-20% of the profits they generate for copiers. Some platforms also offer flat commissions. Top lead traders on platforms like Bitget and Bybit can earn significant income from a large copier base." },
  { question: "Is copy trading better than trading yourself?", answer: "It depends on your skill level. Copy trading is better for beginners who lack the time or knowledge to trade actively. However, you give up control and pay performance fees. For experienced traders, developing your own strategy is more profitable long-term." },
];

export default function CopyTradingExplainedPage() {
  return (
    <LearnPageLayout
      title="Copy Trading Explained: Guide to Social Crypto Trading"
      categoryName="Crypto Exchanges"
      categorySlug="exchanges"
      readTime="9 min"
      intro="Copy trading lets you automatically mirror the trades of experienced traders. Instead of making your own trading decisions, you select proven traders to follow and your account replicates their positions in real time. This guide covers how copy trading works, how to evaluate lead traders, and the important risks to consider."
      toc={toc}
      faqs={faqs}
      relatedArticles={[
        { title: "API Trading Guide", href: "/exchanges/learn/api-trading-guide", category: "Exchanges" },
        { title: "Leverage Trading Guide", href: "/exchanges/learn/leverage-trading-guide", category: "Exchanges" },
        { title: "How to Choose an Exchange", href: "/exchanges/learn/how-to-choose-exchange", category: "Exchanges" },
      ]}
    >
      <h2 id="what-is-copy-trading">What Is Copy Trading?</h2>
      <p>
        Copy trading is a form of social trading where your account automatically replicates
        the trades made by a lead trader. When they open a position, an identical (proportionally
        sized) position opens in your account. When they close, yours closes too. It is
        essentially delegating your trading decisions to someone with more experience or a
        proven strategy.
      </p>
      <p>
        Copy trading bridges the gap between passive investing and active trading. You benefit
        from the lead trader&apos;s expertise without needing to monitor markets yourself. However,
        you share in both their profits and losses, typically paying a performance fee on gains.
      </p>

      <h2 id="how-it-works">How Copy Trading Works</h2>
      <p>
        You select a lead trader from the platform&apos;s marketplace based on their performance
        metrics. You allocate a portion of your funds to copy their trades, setting parameters
        like maximum position size and stop-loss levels. When the lead trader opens a trade,
        a proportional position is automatically opened in your account. You can typically
        override or close positions manually if desired.
      </p>
      <p>
        Position sizing is proportional. If a lead trader uses 10% of their portfolio for a
        trade and you have allocated $1,000 to copy them, $100 would be used for that position.
        Most platforms allow you to adjust the copy ratio to increase or decrease your exposure
        relative to the lead trader.
      </p>

      <h2 id="choosing-traders">Choosing Lead Traders</h2>
      <p>
        Evaluate lead traders using multiple metrics, not just total return. Key indicators
        include win rate (percentage of profitable trades), risk-adjusted return (Sharpe ratio),
        maximum drawdown (largest peak-to-trough loss), trading frequency, average holding period,
        and the number of copiers and their profitability.
      </p>
      <p>
        Be wary of traders with extremely high returns over short periods, as this often indicates
        high leverage and eventual large losses. Prefer traders with consistent returns over
        many months, manageable drawdowns, and a large base of profitable copiers.
      </p>

      <h2 id="platforms">Best Copy Trading Platforms</h2>
      <p>
        Bitget has the largest copy trading community with over 100,000 lead traders and detailed
        performance analytics. Bybit offers copy trading for both spot and futures with a growing
        trader marketplace. OKX provides copy trading with comprehensive performance dashboards.
        Binance offers copy trading integrated into its broader trading ecosystem.
      </p>

      <h2 id="risks">Risks and Limitations</h2>
      <p>
        Copy trading risks include lead trader losses (you lose proportionally), strategy
        changes by the lead trader without notice, slippage between the lead trader&apos;s
        execution and yours, platform risk (the exchange could fail), and the psychological
        challenge of watching someone else control your money during drawdowns.
      </p>
      <p>
        Mitigate risks by diversifying across multiple lead traders, setting maximum loss
        limits, monitoring performance regularly, and being prepared to stop copying if a
        trader&apos;s strategy appears to change or performance deteriorates significantly.
      </p>
    </LearnPageLayout>
  );
}
