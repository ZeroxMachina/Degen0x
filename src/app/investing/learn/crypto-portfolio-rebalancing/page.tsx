import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Portfolio Rebalancing Guide (${CURRENT_YEAR}) - Strategies | ${SITE_NAME}`,
  description: `Learn how to rebalance your crypto portfolio in ${CURRENT_YEAR}. Threshold-based, calendar-based, and tactical rebalancing strategies with practical examples.`,
  alternates: { canonical: "/investing/learn/crypto-portfolio-rebalancing" },
};

const toc = [
  { id: "what-is-rebalancing", title: "What Is Portfolio Rebalancing?", level: 2 },
  { id: "why-rebalance", title: "Why Rebalancing Matters in Crypto", level: 2 },
  { id: "strategies", title: "Rebalancing Strategies", level: 2 },
  { id: "tools", title: "Tools and Automation", level: 2 },
  { id: "best-practices", title: "Rebalancing Best Practices", level: 2 },
];

const faqs = [
  { question: "How often should I rebalance my crypto portfolio?", answer: "Monthly or quarterly rebalancing works well for most investors. More frequent rebalancing (weekly) captures more volatility but incurs more transaction costs and tax events. Less frequent rebalancing (annually) may allow positions to drift too far from targets. The optimal frequency depends on your portfolio size, transaction costs, and tax situation." },
  { question: "Does rebalancing improve crypto returns?", answer: "Research shows rebalancing can improve risk-adjusted returns by systematically selling high and buying low. In crypto's volatile markets, this effect is amplified. However, in a strong bull market, rebalancing may slightly reduce returns by trimming winners too early. The primary benefit is risk management, not return maximization." },
  { question: "What is threshold-based rebalancing?", answer: "Threshold-based rebalancing triggers a rebalance only when an asset drifts beyond a set percentage from its target allocation. For example, if your target BTC allocation is 40% and your threshold is 5%, you rebalance when BTC exceeds 45% or falls below 35% of your portfolio. This approach trades less frequently than calendar-based rebalancing." },
  { question: "Should I rebalance during a bear market?", answer: "Yes, rebalancing during bear markets is important and potentially valuable. It forces you to buy assets that have declined (buying low) using proceeds from assets that held up better. This mechanical discipline counteracts the emotional urge to panic sell during downturns. Many investors find their best entries came from rebalancing into beaten-down assets." },
  { question: "What are the tax implications of rebalancing?", answer: "Each rebalancing trade that involves selling an appreciated asset triggers a taxable event. Short-term capital gains (held less than one year) are taxed at higher rates than long-term gains. Consider using new deposits to rebalance (buying underweight assets instead of selling overweight ones) to minimize tax impact. Tax-loss harvesting during rebalancing can offset gains." },
];

const relatedArticles = [
  { title: "Dollar-Cost Averaging Strategy", href: "/investing/learn/dollar-cost-averaging", category: "Investing" },
  { title: "Crypto Index Funds", href: "/investing/learn/crypto-index-funds", category: "Investing" },
  { title: "Risk Management for Crypto", href: "/investing/learn/risk-management", category: "Investing" },
];

export default function CryptoPortfolioRebalancingPage() {
  return (
    <LearnPageLayout
      title="Crypto Portfolio Rebalancing: Strategies and Best Practices"
      categoryName="Crypto Investing"
      categorySlug="investing"
      readTime="8 min"
      intro="Portfolio rebalancing is a disciplined approach to maintaining your desired asset allocation over time. In crypto markets where a single asset can double or halve in weeks, your portfolio composition shifts rapidly. Regular rebalancing ensures you systematically take profits from outperformers, reinvest in underperformers, and keep risk within your comfort zone."
      toc={toc}
      faqs={faqs}
      relatedArticles={relatedArticles}
    >
      <h2 id="what-is-rebalancing">What Is Portfolio Rebalancing?</h2>
      <p>
        Portfolio rebalancing is the process of realigning your portfolio back to its target asset
        allocation. Suppose your target is 50% BTC, 30% ETH, and 20% altcoins. After a month where
        altcoins surge, your portfolio might be 40% BTC, 25% ETH, and 35% altcoins. Rebalancing
        involves selling some altcoins and buying BTC and ETH to restore the original 50/30/20 split.
      </p>
      <p>
        This mechanical process accomplishes something psychologically difficult: it forces you to
        sell what has been going up and buy what has been going down. In practice, this means
        systematically taking profits from winners and buying discounted assets. Over many cycles
        of rebalancing, this discipline captures the volatility of crypto markets in your favor
        rather than letting emotional reactions to price swings harm your portfolio.
      </p>

      <h2 id="why-rebalance">Why Rebalancing Matters in Crypto</h2>
      <p>
        Crypto&apos;s extreme volatility makes rebalancing more impactful than in traditional markets.
        An altcoin that triples in value can quickly dominate your portfolio, concentrating your risk
        in a single asset. Without rebalancing, your portfolio naturally drifts toward whatever has
        performed best recently, which is essentially a momentum strategy that works until the trend
        reverses, often violently in crypto.
      </p>
      <p>
        Rebalancing also provides a framework for rational decision-making in irrational markets.
        When a token has surged 300% and your emotions scream to buy more, rebalancing tells you
        to trim. When a solid project has dropped 60% and fear urges you to sell, rebalancing
        tells you to add. This rules-based approach removes the human tendency to buy high and sell
        low, which is the primary reason most investors underperform the market.
      </p>

      <h2 id="strategies">Rebalancing Strategies</h2>
      <p>
        Calendar-based rebalancing triggers on fixed dates: monthly, quarterly, or annually. This is
        the simplest approach and works well for most investors. Monthly rebalancing is most common
        in crypto due to the pace of price movements. Set a recurring calendar reminder and adjust
        allocations on the same day each period. The predictability makes it easy to maintain as a
        habit regardless of market conditions.
      </p>
      <p>
        Threshold-based rebalancing triggers when any asset drifts beyond a predefined band from
        its target. A 5% absolute threshold (or 25% relative threshold) is common. This approach
        trades less during calm markets and more during volatile periods, which can be more cost-efficient
        than fixed-schedule rebalancing. Hybrid approaches combine both: rebalance quarterly but
        also check if any threshold has been breached between scheduled dates.
      </p>

      <h2 id="tools">Tools and Automation</h2>
      <p>
        Manual rebalancing works for simple portfolios. Calculate your current allocations, compare
        to targets, and execute the necessary trades on your exchange. Spreadsheet templates can
        help with the math. For portfolios across multiple exchanges or wallets, portfolio trackers
        like CoinGecko Portfolio or Delta can aggregate holdings and highlight allocation drift.
      </p>
      <p>
        Automated rebalancing tools like Shrimpy, 3Commas, and HodlBot connect to exchanges via API
        and execute rebalancing trades automatically based on your configured strategy. These tools
        save time and ensure consistent execution without emotional interference. Some DeFi
        protocols also offer on-chain rebalancing vaults. The cost of these tools (typically
        $10-50/month) is usually justified by the discipline and time savings they provide.
      </p>

      <h2 id="best-practices">Rebalancing Best Practices</h2>
      <p>
        Use new deposits to rebalance when possible. Instead of selling overweight assets (triggering
        taxes), direct new DCA purchases toward underweight positions. This achieves the same
        rebalancing effect without taxable sales. Only sell to rebalance when drift is significant
        and new deposits are insufficient to correct the imbalance.
      </p>
      <p>
        Define your target allocation and rebalancing rules before entering any trades, and follow
        them mechanically. Document your portfolio thesis and allocation targets. Consider tax
        implications in your jurisdiction. Do not rebalance during extreme market events (flash
        crashes, exchange outages) when prices may not reflect true value. Review and update your
        target allocation annually to account for changing market conditions, new investment
        opportunities, and shifts in your personal financial situation and risk tolerance.
      </p>
    </LearnPageLayout>
  );
}
