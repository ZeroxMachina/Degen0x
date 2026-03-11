import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Margin Call Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Understand crypto margin calls and how to handle them. Learn about margin call thresholds, response strategies, and how to prevent liquidation.",
  keywords: ["crypto margin call", "margin call guide", "liquidation prevention", "crypto loan margin"],
};

export default function MarginCallGuidePage() {
  return (
    <LearnPageLayout
      title="Crypto Margin Call Guide"
      categoryName="Crypto Loans"
      categorySlug="crypto-loans"
      readTime="8 min"
      intro="A margin call occurs when the value of your crypto collateral drops close to the liquidation threshold, signaling that you need to take action to protect your loan position. Understanding margin call mechanics, thresholds, and response strategies is critical for any crypto borrower to avoid the costly consequences of liquidation."
      toc={[
        { id: "what-is-margin-call", title: "What Is a Margin Call", level: 2 },
        { id: "thresholds", title: "Margin Call Thresholds", level: 2 },
        { id: "response-strategies", title: "Response Strategies", level: 2 },
        { id: "prevention", title: "Prevention Tips", level: 2 },
      ]}
      faqs={[
        { question: "How quickly do I need to respond to a margin call?", answer: "CeFi platforms typically give 24-72 hours to respond. DeFi protocols have no grace period; liquidation can occur immediately when thresholds are breached. Always have a plan ready before a margin call happens." },
        { question: "Can I get margin called on DeFi loans?", answer: "DeFi protocols do not issue formal margin calls. Instead, your position becomes liquidatable when the health factor drops below 1.0. Monitoring tools can alert you when your position approaches danger, functioning as an automated margin call." },
      ]}
      relatedArticles={[
        { title: "Liquidation Risk", href: "/crypto-loans/learn/liquidation-risk", category: "Crypto Loans" },
        { title: "LTV Ratio Explained", href: "/crypto-loans/learn/ltv-ratio-explained", category: "Crypto Loans" },
      ]}
    >
      <section id="what-is-margin-call">
        <h2>What Is a Margin Call</h2>
        <p>A margin call is a notification from a lending platform that your collateral value has dropped to a level where your loan is at risk of liquidation. It serves as a warning that you need to take corrective action, either by adding more collateral to your position or repaying part of your outstanding loan. On CeFi platforms like Nexo or Ledn, margin calls come as email or app notifications with specific instructions and deadlines. In DeFi, there are no formal margin calls since protocols operate through smart contracts. Instead, your health factor or collateral ratio moves toward the liquidation threshold, and third-party monitoring tools can send alerts. The margin call itself does not result in any loss, but failing to respond before the liquidation threshold is reached will trigger partial or full liquidation of your collateral.</p>
      </section>
      <section id="thresholds">
        <h2>Margin Call Thresholds</h2>
        <p>Each platform defines specific thresholds for margin calls and liquidation. CeFi platforms typically issue a margin call when LTV reaches 70-80% and liquidate at 85-95%. For example, Nexo may send a margin call at 73% LTV and begin liquidation at 83% LTV. DeFi protocols define a liquidation threshold per asset. On Aave, ETH has a liquidation threshold of 82.5%, meaning your position is liquidatable when your debt exceeds 82.5% of your weighted collateral value. The gap between the margin call level and the liquidation level is your response window. Larger gaps give you more time to act. Understanding your specific platform's thresholds before borrowing allows you to set appropriate monitoring alerts and prepare response plans in advance.</p>
      </section>
      <section id="response-strategies">
        <h2>Response Strategies</h2>
        <p>When facing a margin call, you have several options. The most direct is adding more collateral to your position, which immediately improves your collateral ratio. This requires having additional crypto available, which is why maintaining reserves outside your loan position is important. Partially repaying your loan reduces the debt side of the equation, improving the ratio without requiring additional assets. Swapping collateral to a less volatile asset can reduce future margin call risk if your current collateral is highly volatile. If you believe the price drop is temporary, you may choose to add minimal collateral to survive the dip, but this is risky if prices continue falling. The worst response is doing nothing, which leads to liquidation and typically a 5-15% penalty on your collateral.</p>
      </section>
      <section id="prevention">
        <h2>Prevention Tips</h2>
        <p>The best approach to margin calls is prevention. Borrow conservatively, maintaining an LTV at least 20-30% below the margin call threshold. Set up price alerts through services like CoinGecko, DeBank, or Tenderly to get early warning of collateral value drops. Use automated position management tools like DeFi Saver that can automatically add collateral or repay debt when your ratio approaches danger levels. Keep reserve funds readily available to respond quickly when needed. Choose collateral assets that align with your risk tolerance. If you cannot actively monitor your position, use more conservative LTV ratios. Consider the maximum historical drawdown of your collateral asset when setting your initial borrow amount, and ensure your position could survive a similar decline without liquidation.</p>
      </section>
    </LearnPageLayout>
  );
}
