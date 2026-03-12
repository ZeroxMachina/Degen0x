import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Stacking Sats: The Bitcoin DCA Strategy (${CURRENT_YEAR}) | degen0x`,
  description: "Complete guide to stacking sats (satoshis). The Bitcoin DCA strategy explained, best tools, frequency optimization, and building a Bitcoin position over time.",
};

export default function StackingSatsPage() {
  return (
    <LearnPageLayout title="Stacking Sats: The Bitcoin DCA Strategy" categoryName="Long-Term Strategies" categorySlug="long-term" readTime="7 min read"
      intro="Stacking sats is the practice of regularly accumulating satoshis (the smallest unit of Bitcoin, where 1 BTC equals 100 million sats) through consistent, disciplined purchases. Born from Bitcoin community culture, the stacking sats philosophy embraces long-term accumulation without concern for short-term price movements. It is the simplest and most psychologically sustainable approach to building a Bitcoin position over time."
      toc={[
        { id: "philosophy", title: "philosophy", level: 2 },
        { id: "the-stacking-sats-philosophy", title: "The Stacking Sats Philosophy", level: 2 },
        { id: "setup", title: "setup", level: 2 },
        { id: "setting-up-your-stack", title: "Setting Up Your Stack", level: 2 },
        { id: "optimization", title: "optimization", level: 2 },
        { id: "optimizing-your-strategy", title: "Optimizing Your Strategy", level: 2 },
        { id: "security", title: "security", level: 2 },
        { id: "securing-your-sats", title: "Securing Your Sats", level: 2 }
      ]}
      faqs={[
        { question: "What is a satoshi?", answer: "A satoshi (sat) is the smallest unit of Bitcoin: 1 Bitcoin equals 100,000,000 satoshis. Thinking in sats rather than whole Bitcoin makes accumulation feel more achievable. Instead of saying you own 0.005 BTC, you own 500,000 sats. At current prices, even small regular purchases add up to meaningful sat amounts over time." },
        { question: "How often should I stack sats?", answer: "The optimal frequency depends on your income pattern and the fees involved. Weekly or bi-weekly purchases aligned with payday are most common. Daily purchases provide slightly better price averaging but may incur higher total fees. Monthly purchases work but provide less volatility smoothing. The most important factor is consistency, not frequency." },
        { question: "Is stacking sats worth it with small amounts?", answer: "Yes. Even $25 or $50 per week adds up significantly over years. At $50 per week, you invest $2,600 per year. Over five years, that is $13,000 in contributions, which could be worth significantly more if Bitcoin appreciates. The key is starting and maintaining consistency. Many successful Bitcoin holders started with very small regular purchases." },
      ]}
      relatedArticles={[
        { title: "Accumulation Strategies", href: "/long-term/learn/accumulation-strategies", category: "Long-Term" },
        { title: "The Bitcoin Standard", href: "/long-term/learn/bitcoin-standard", category: "Long-Term" },
        { title: "Bitcoin ETF Guide", href: "/long-term/learn/bitcoin-etf-guide", category: "Long-Term" },
      ]}
    >
      <h2 id="philosophy">The Stacking Sats Philosophy</h2>
      <p>The stacking sats mentality is rooted in the belief that Bitcoin is undervalued relative to its long-term potential and that accumulating as many satoshis as possible during this early period will be one of the best financial decisions of a lifetime. The philosophy deliberately avoids price predictions, technical analysis, and market timing. Instead, it embraces a simple rule: buy Bitcoin regularly, regardless of price, and never sell. This approach draws from the Bitcoin Standard thesis that views Bitcoin as the hardest money ever created, destined to absorb value from inferior monetary assets. Thinking in sats rather than whole Bitcoins is a psychological tool. When Bitcoin costs tens of thousands of dollars per coin, buying a fraction feels insignificant. But buying 50,000 sats feels meaningful and accumulating towards milestones like one million sats provides motivation. The community aspect reinforces discipline: social media hashtags, sat counting apps, and Bitcoin communities celebrate consistent accumulation and provide encouragement during bear markets when the temptation to stop buying is strongest.</p>

      <h2 id="setup">Setting Up Your Stack</h2>
      <p>Setting up a sat stacking routine is straightforward. Choose a platform that supports recurring Bitcoin purchases: most major exchanges (Coinbase, Kraken, Gemini, Strike, Cash App, Swan Bitcoin) offer this feature. Swan Bitcoin and Strike are particularly popular among stackers because they are designed specifically for Bitcoin accumulation with low fees and automatic recurring purchases. Set your purchase amount and frequency aligned with your budget. A common approach is allocating a fixed percentage of each paycheck, treating it like a savings contribution. Start with an amount you can sustain indefinitely: consistency matters more than size. Link your bank account for automatic funding so purchases happen without your intervention. This automation eliminates the decision-making that leads to skipped purchases during bear markets. Some platforms allow you to set up automatic withdrawals to your own wallet after a certain threshold, combining automated purchasing with self-custody.</p>

      <h2 id="optimization">Optimizing Your Strategy</h2>
      <p>While the core stacking sats approach is simple, several optimizations can improve results. Fee minimization is important for small, frequent purchases where fees can represent a meaningful percentage of each buy. Compare fee structures across platforms: some charge flat fees that penalize small purchases while others charge percentage-based fees that scale proportionally. Strike and Swan Bitcoin typically offer the lowest fees for recurring Bitcoin purchases. Purchase frequency optimization: research suggests that daily or weekly purchases provide marginally better price averaging than monthly purchases, but the difference is small. Choose a frequency that aligns with your pay schedule and minimizes fees. Withdrawal batching reduces transaction fees: rather than withdrawing to your wallet after each purchase, accumulate on the exchange and withdraw monthly or quarterly in larger batches. This reduces the total Bitcoin network fees paid for on-chain transfers. During significant market drawdowns (30%+ from recent highs), some stackers increase their purchase amount temporarily, combining systematic DCA with opportunistic buying while maintaining the discipline of never skipping a scheduled purchase.</p>

      <h2 id="security">Securing Your Sats</h2>
      <p>As your sat stack grows, security becomes increasingly important. The common advice is: not your keys, not your coins. Exchange-held Bitcoin is subject to exchange risk (hacking, insolvency, account freezing). Transfer your Bitcoin to a personal wallet for self-custody. For small stacks (under a few thousand dollars), a mobile wallet like BlueWallet, Muun, or Blockstream Green provides a good balance of security and convenience. As your stack grows beyond an amount you would be uncomfortable losing, invest in a hardware wallet (Ledger, Trezor, Coldcard) for cold storage. The most common workflow for stackers is: automated purchases on an exchange, periodic withdrawal to a hardware wallet (monthly or when the exchange balance reaches a threshold), and long-term storage in cold storage with proper seed phrase backup. For significant stacks, implement the full cold storage best practices: metal seed phrase backups, multiple geographic locations, and consider multisig for additional security. The effort of proper security should scale with the value of your stack. Protecting one million sats warrants more security measures than protecting ten thousand sats.</p>
    </LearnPageLayout>
  );
}
