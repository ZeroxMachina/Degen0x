import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Social Trading Platforms Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Explore social trading platforms for crypto. Learn how copy trading works, how to choose traders to follow, and the risks involved.",
};

export default function SocialTradingGuidePage() {
  return (
    <LearnPageLayout
      title="Social Trading Platforms Guide"
      categoryName="Trading"
      categorySlug="trading"
      readTime="8 min read"
      intro="Social trading platforms allow you to view, discuss, and copy the trades of experienced traders in real time. Copy trading in particular has become hugely popular, letting beginners benefit from the expertise of successful traders while learning. This guide covers how social trading works, the best platforms, and how to use social trading effectively."
      toc={[
        { id: "what-is-social-trading", title: "what-is-social-trading", level: 2 },
        { id: "what-is-social-trading", title: "What Is Social Trading?", level: 2 },
        { id: "copy-trading", title: "copy-trading", level: 2 },
        { id: "how-copy-trading-works", title: "How Copy Trading Works", level: 2 },
        { id: "choosing-traders", title: "choosing-traders", level: 2 },
        { id: "choosing-traders-to-follow", title: "Choosing Traders to Follow", level: 2 },
        { id: "risks-limitations", title: "risks-limitations", level: 2 },
        { id: "risks-and-limitations", title: "Risks and Limitations", level: 2 }
      ]}
      faqs={[
        { question: "Is copy trading good for beginners?", answer: "Copy trading can help beginners participate in markets while learning, but it should not be a substitute for education. Use it as a learning tool alongside your own study of trading fundamentals. Understanding why successful traders make their decisions is more valuable than simply copying their trades." },
        { question: "How much do copy traders charge?", answer: "Copy trading fee structures vary. Some platforms take a percentage of profits (typically 10-30%), others charge flat subscription fees, and some include the cost in trading fees. Free copy trading options exist on platforms like Bybit and Bitget but may have higher spreads." },
      ]}
      relatedArticles={[
        { title: "Trading Signals: How to Use Them", href: "/trading/learn/signal-trading", category: "Trading" },
        { title: "Paper Trading: Practice Without Risk", href: "/trading/learn/paper-trading", category: "Trading" },
        { title: "Trading Psychology: Mastering Emotions", href: "/trading/learn/trading-psychology", category: "Trading" },
        { title: "Risk-Reward Ratio in Trading", href: "/trading/learn/risk-reward-ratio", category: "Trading" },
      ]}
    >
      <section id="what-is-social-trading">
        <h2>What Is Social Trading?</h2>
        <p>
          Social trading combines financial trading with social networking, allowing traders to share ideas, strategies, and actual trade positions with a community. It ranges from simple discussion forums to full copy trading platforms where trades are automatically replicated in followers&apos; accounts.
        </p>
        <p>
          The concept democratizes access to trading expertise by making the strategies and positions of skilled traders visible and replicable. Platforms provide leaderboards, performance statistics, and risk metrics to help users identify traders worth following.
        </p>
        <p>
          Major crypto exchanges like Bybit, Bitget, and OKX have built-in copy trading features. Dedicated social trading platforms also exist, connecting to multiple exchanges and offering additional community features, educational content, and performance analytics.
        </p>
      </section>

      <section id="copy-trading">
        <h2>How Copy Trading Works</h2>
        <p>
          When you set up copy trading, you allocate a portion of your capital to follow a specific trader. When that trader opens a position, your account automatically opens a proportional position. When they close, your position closes too. The position size is scaled based on the ratio of your allocated capital to the trader&apos;s capital.
        </p>
        <p>
          Most platforms allow you to set parameters such as maximum position size, stop-loss levels, and which assets to copy. You can also choose to copy only new trades rather than replicating the trader&apos;s existing open positions.
        </p>
        <p>
          Copy trading is not a set-and-forget solution. You should regularly monitor the trader&apos;s performance, review their risk management, and be prepared to stop copying if their strategy deteriorates or their risk profile changes in ways you are not comfortable with.
        </p>
      </section>

      <section id="choosing-traders">
        <h2>Choosing Traders to Follow</h2>
        <p>
          Prioritize consistency over headline returns. A trader with steady 5% monthly returns and low drawdowns is generally a better choice than one with occasional 100% months followed by 50% losses. Look at performance over at least 3-6 months, not just recent results.
        </p>
        <p>
          Key metrics to evaluate include total return, maximum drawdown, Sharpe ratio, win rate, average trade duration, and the number of followers and assets under management. Risk-adjusted returns (Sharpe ratio above 1.0) are more important than absolute returns.
        </p>
        <p>
          Diversify across multiple traders with different strategies to reduce risk. Follow a mix of swing traders, scalpers, and longer-term position traders. This ensures that poor performance by one trader is offset by others performing well in different market conditions.
        </p>
      </section>

      <section id="risks-limitations">
        <h2>Risks and Limitations</h2>
        <p>
          Past performance does not guarantee future results. A trader who performed well during a bull market may struggle during a bear market. Strategy changes, emotional shifts, and market regime changes can all cause previously successful traders to underperform.
        </p>
        <p>
          Slippage between the lead trader&apos;s execution and your copy execution can reduce returns or increase losses. This is especially problematic when following popular traders with many copiers, as the collective copy orders can move the market against you.
        </p>
        <p>
          The biggest risk is becoming dependent on copy trading without developing your own skills. Treat social trading as a learning accelerator, studying the traders you follow to understand their decision-making process, and gradually building your own trading capability.
        </p>
      </section>
    </LearnPageLayout>
  );
}
