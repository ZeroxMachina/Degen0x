import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Copy Trading: How It Works (${CURRENT_YEAR}) | degen0x`,
  description: "Learn how copy trading works on crypto exchanges. Platforms, strategies, risks, fees, and how to choose the right traders to follow.",
};

export default function CopyTradingGuide() {
  return (
    <LearnPageLayout
      title="Copy Trading: How It Works"
      categoryName="Exchanges"
      categorySlug="exchanges"
      readTime="9 min read"
      intro="Copy trading lets you automatically replicate the trades of experienced traders on crypto exchanges. Instead of making every trading decision yourself, you allocate funds to follow successful traders whose positions are mirrored in your account. This guide explains how copy trading works, where to find it, and the risks you need to understand before starting."
      toc={[
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-copy-trading-works", title: "How Copy Trading Works", level: 2 },
        { id: "platforms", title: "platforms", level: 2 },
        { id: "copy-trading-platforms", title: "Copy Trading Platforms", level: 2 },
        { id: "choosing-traders", title: "choosing-traders", level: 2 },
        { id: "choosing-traders-to-follow", title: "Choosing Traders to Follow", level: 2 },
        { id: "costs", title: "costs", level: 2 },
        { id: "costs-and-fee-structure", title: "Costs and Fee Structure", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-limitations", title: "Risks and Limitations", level: 2 },
        { id: "strategies", title: "strategies", level: 2 },
        { id: "copy-trading-strategies", title: "Copy Trading Strategies", level: 2 },
        { id: "getting-started", title: "getting-started", level: 2 },
        { id: "getting-started", title: "Getting Started", level: 2 }
      ]}
      faqs={[
        { question: "Is copy trading profitable?", answer: "It depends entirely on the trader you follow. Past performance does not guarantee future results. Many top-ranked traders had lucky streaks or took excessive risks. Diversifying across multiple traders and setting strict loss limits is essential." },
        { question: "How much money do I need?", answer: "Minimum amounts vary by platform. Binance copy trading starts from $10. Bybit and OKX have similar low minimums. Starting small to test the system before committing more capital is recommended." },
        { question: "Can I stop copying at any time?", answer: "Yes, you can stop copying a trader at any time. Your open positions can either be kept or closed when you stop following. Most platforms allow you to close all copied positions immediately if needed." },
        { question: "Do I control my own funds?", answer: "Your funds remain in your exchange account. Copy trading platforms mirror trades in your account proportionally based on your allocated amount. You maintain full control and can intervene or stop at any time." },
      ]}
      relatedArticles={[
        { title: "Grid Trading Bots", href: "/exchanges/learn/grid-trading-bots", category: "Exchanges" },
        { title: "Exchange API Trading", href: "/exchanges/learn/exchange-api-trading", category: "Exchanges" },
        { title: "How to Choose a Crypto Exchange", href: "/exchanges/learn/how-to-choose-exchange", category: "Exchanges" },
      ]}
    >
      <section id="how-it-works">
        <h2>How Copy Trading Works</h2>
        <p>Copy trading connects followers with lead traders through an exchange's built-in system. You browse available traders, review their performance statistics, and allocate a portion of your funds to follow them. When the lead trader opens, modifies, or closes a position, the same action is automatically executed in your account proportionally.</p>
        <p>If a lead trader allocates 5% of their portfolio to a Bitcoin long position and you are following with $1,000, approximately $50 would be used for that trade in your account. Position sizes are scaled proportionally to your allocated amount.</p>
        <p>Most platforms allow you to follow multiple traders simultaneously, set maximum investment amounts per trade, configure stop-loss levels, and exclude specific trading pairs. You maintain full visibility into every trade executed in your account.</p>
      </section>

      <section id="platforms">
        <h2>Copy Trading Platforms</h2>
        <p>Bybit offers one of the most popular copy trading platforms with thousands of lead traders, detailed performance metrics, and low minimum requirements. The platform supports both spot and futures copy trading with transparent fee structures.</p>
        <p>Binance Copy Trading provides access to selected lead traders with verified track records. OKX offers a comprehensive copy trading system with both spot and derivatives support. Bitget has built a strong reputation specifically for its copy trading ecosystem with over 100,000 lead traders.</p>
        <p>Third-party platforms like 3Commas and Zignaly connect to multiple exchanges via API, offering cross-exchange copy trading. These provide more flexibility but add an additional layer of trust required since they need your API keys.</p>
      </section>

      <section id="choosing-traders">
        <h2>Choosing Traders to Follow</h2>
        <p>Look beyond total profit percentage. Examine the maximum drawdown, which shows the largest peak-to-trough decline. A trader showing 500% profit but 80% maximum drawdown took enormous risks that could have wiped out followers. Prefer consistent returns with controlled drawdowns.</p>
        <p>Track record length matters. A trader profitable over 6+ months across different market conditions is more reliable than someone who profited for 2 weeks during a bull run. Check how they performed during market downturns, not just rallies.</p>
        <p>Review the number of followers and assets under management. Very popular traders with large followings may face slippage issues where their followers' collective orders move markets. Moderate-sized followings often produce better results. Check the trader's win rate, average profit per trade, and risk-to-reward ratio.</p>
      </section>

      <section id="costs">
        <h2>Costs and Fee Structure</h2>
        <p>Copy trading costs include normal trading fees on every executed trade plus a profit-sharing fee paid to the lead trader. Profit sharing typically ranges from 10-20% of your profits. Some platforms charge no profit sharing but have higher trading fees.</p>
        <p>Trading fees accumulate quickly with active traders. A lead trader executing 50 trades per day generates significant fee costs for followers. Factor in both the trading fees and profit sharing when calculating actual returns.</p>
        <p>Some lead traders use high-frequency strategies that generate returns before fees but become unprofitable for followers after fees are deducted. Always evaluate net returns after all costs, not gross performance numbers displayed on leaderboards.</p>
      </section>

      <section id="risks">
        <h2>Risks and Limitations</h2>
        <p>Past performance is the biggest trap. Leaderboards display top performers who may have achieved results through excessive risk rather than skill. Survivorship bias means you only see traders who got lucky while those who blew up accounts are removed from rankings.</p>
        <p>Slippage occurs when your copy trade executes at a different price than the lead trader's. In volatile markets or with popular traders, the price can move significantly between the leader's trade and your copied trade. This consistently erodes follower returns.</p>
        <p>Lead traders can change strategies without notice. A previously conservative trader may start taking aggressive leveraged positions. Monitoring your copy trades regularly and setting maximum loss limits is essential to managing risk.</p>
      </section>

      <section id="strategies">
        <h2>Copy Trading Strategies</h2>
        <p>Diversify across multiple traders with different styles. Following one conservative spot trader, one moderate futures trader, and one short-term scalper reduces the risk of any single trader's poor performance devastating your portfolio.</p>
        <p>Set strict stop-loss limits on each trader you follow. If a trader loses more than 15-20% of your allocated capital, the system should automatically stop copying them. This prevents catastrophic losses from a single trader's bad streak.</p>
        <p>Start with small allocations to test each trader over at least 2-4 weeks before increasing your investment. Monitor actual net returns after fees rather than relying on displayed performance metrics. Be prepared to remove traders who deviate from their stated strategies.</p>
      </section>

      <section id="getting-started">
        <h2>Getting Started</h2>
        <p>Open an account on a platform with copy trading like Bybit, Bitget, or Binance. Navigate to the copy trading section and review available lead traders. Sort by metrics that matter most: low maximum drawdown, consistent monthly returns, and 3+ month track records.</p>
        <p>Start with a small allocation you can afford to lose entirely. Follow 2-3 traders with different styles. Set stop-loss limits for each. Monitor performance weekly and review after one month before making any changes or increasing allocations.</p>
        <p>Keep records of your copy trading performance including all fees paid. Compare your net returns against simply holding Bitcoin or a diversified crypto portfolio. If copy trading is not outperforming simpler strategies after fees, reconsider whether the added complexity is worthwhile.</p>
      </section>
    </LearnPageLayout>
  );
}
