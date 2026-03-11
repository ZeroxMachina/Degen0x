import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Margin Call in Crypto? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn what a margin call means in crypto trading, how it works in both CeFi and DeFi, how to avoid liquidation, and best practices for margin management.",
};

export default function MarginCallPage() {
  return (
    <LearnPageLayout title="What Is a Margin Call?" categoryName="Learn Crypto" categorySlug="learn" readTime="5 min read"
      intro="A margin call is a warning that occurs when the value of a trader's collateral falls below the required maintenance margin for their leveraged position. In traditional finance, it is a demand from a broker to deposit additional funds. In crypto, margin calls typically precede automatic liquidation, where the exchange or protocol closes your position to prevent further losses. Understanding margin calls is essential for anyone using leverage in crypto trading."
      toc={[{ id: "definition", title: "What Is a Margin Call?", level: 2 }, { id: "how-margin-works", title: "How Margin Trading Works", level: 2 }, { id: "avoiding-margin-calls", title: "Avoiding Margin Calls", level: 2 }, { id: "defi-margin", title: "Margin in DeFi", level: 2 }]}
      faqs={[{ question: "What happens after a margin call in crypto?", answer: "On centralized exchanges, you typically get a notification and a brief window to add collateral. If you do not respond, the exchange liquidates your position. In DeFi, there is usually no warning — liquidation happens automatically when your health factor or margin ratio crosses the threshold. Setting alerts and monitoring positions is your responsibility." },
        { question: "How much leverage is safe in crypto?", answer: "There is no universally safe leverage level, but most experienced traders recommend 2-3x maximum for swing trades and never exceeding 5x. Crypto's high volatility means that even moderate leverage can lead to rapid liquidation. Higher leverage requires tighter stop losses and more active position management." }]}
      relatedArticles={[{ title: "Liquidation", href: "/learn/glossary/liquidation", category: "Glossary" }, { title: "Stop Loss", href: "/learn/glossary/stop-loss", category: "Glossary" }, { title: "Borrowing", href: "/learn/glossary/borrowing", category: "Glossary" }, { title: "Risk Management", href: "/learn/risk-management-crypto", category: "Learn Crypto" }]}
    >
      <h2 id="definition">What Is a Margin Call?</h2>
      <p>A margin call occurs when your leveraged trading position has lost enough value that your remaining collateral approaches the minimum maintenance requirement. It is the exchange&apos;s way of saying your position is at risk and needs additional collateral. In crypto, margin calls are more abrupt than in traditional finance because markets trade 24/7 and can move dramatically in minutes, giving traders less time to respond.</p>

      <h2 id="how-margin-works">How Margin Trading Works</h2>
      <p>Margin trading allows you to borrow funds to trade with more capital than you own. With 5x leverage, a $1,000 deposit controls a $5,000 position. If the position increases 10%, you earn $500 (50% return on your margin). If it decreases 10%, you lose $500 (50% of your margin). At 20% loss, your entire margin is wiped out and you face liquidation. The initial margin is your deposit, and the maintenance margin is the minimum collateral required to keep the position open.</p>

      <h2 id="avoiding-margin-calls">Avoiding Margin Calls</h2>
      <p>Use lower leverage to create a wider buffer before liquidation. Set stop-loss orders to automatically close positions before they reach margin call territory. Monitor your positions regularly, especially during high volatility. Keep additional funds available to add collateral quickly if needed. Avoid opening maximum-sized positions, as leaving room for adverse price movement is essential for surviving volatile markets.</p>

      <h2 id="defi-margin">Margin in DeFi</h2>
      <p>In DeFi lending protocols, the equivalent of a margin call is a declining health factor. When your health factor approaches 1.0, your position becomes eligible for liquidation. DeFi protocols do not send warnings or provide grace periods — liquidation is instant and automated. Use DeFi dashboard tools to set up health factor alerts, and always maintain a comfortable buffer (health factor of 1.5+ is generally recommended) to account for sudden price drops.</p>
    </LearnPageLayout>
  );
}
