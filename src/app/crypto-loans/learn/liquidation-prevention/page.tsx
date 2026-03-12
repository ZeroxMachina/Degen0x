import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Avoid Crypto Loan Liquidation (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn how to prevent liquidation on crypto loans. Strategies for maintaining health factors, managing LTV ratios, and protecting your collateral.",
};

export default function LiquidationPreventionPage() {
  return (
    <LearnPageLayout
      title="How to Avoid Crypto Loan Liquidation"
      categoryName="Crypto Loans"
      categorySlug="crypto-loans"
      readTime="9 min read"
      intro="Liquidation is the biggest risk when borrowing against crypto collateral. When your collateral value drops below the required threshold, liquidators can seize and sell your assets, often at a significant penalty. Understanding how liquidation works and implementing prevention strategies is essential for anyone using crypto-backed loans. This guide covers practical techniques to protect your positions across both DeFi and CeFi platforms."
      toc={[
        { id: "how-liquidation-works", title: "how-liquidation-works", level: 2 },
        { id: "how-liquidation-works", title: "How Liquidation Works", level: 2 },
        { id: "monitoring-health", title: "monitoring-health", level: 2 },
        { id: "monitoring-your-health-factor", title: "Monitoring Your Health Factor", level: 2 },
        { id: "prevention-strategies", title: "prevention-strategies", level: 2 },
        { id: "prevention-strategies", title: "Prevention Strategies", level: 2 },
        { id: "automated-tools", title: "automated-tools", level: 2 },
        { id: "automated-protection-tools", title: "Automated Protection Tools", level: 2 },
        { id: "emergency-actions", title: "emergency-actions", level: 2 },
        { id: "emergency-actions-during-crashes", title: "Emergency Actions During Crashes", level: 2 }
      ]}
      faqs={[
        { question: "What is crypto loan liquidation?", answer: "Liquidation occurs when your collateral value drops below the required threshold relative to your loan amount. A liquidator repays part or all of your debt and receives your collateral at a discount (the liquidation penalty). This typically costs borrowers 5-15% of the liquidated amount." },
        { question: "What is a health factor?", answer: "Health factor is a numeric measure of your position's safety. In Aave, a health factor above 1 means you are safe, and below 1 triggers liquidation. It is calculated as (collateral value times liquidation threshold) divided by outstanding debt. Higher health factors provide more safety margin." },
        { question: "How can I prevent liquidation?", answer: "Key strategies include: maintaining a conservative LTV ratio well below the liquidation threshold, setting up alerts for price drops, having reserve funds ready to add collateral or repay debt, using stablecoins as part of your collateral, and using automated protection tools like DeFi Saver." },
        { question: "What happens to my remaining collateral after liquidation?", answer: "In DeFi, partial liquidation is common: the liquidator repays enough debt to bring your position back above the threshold, and you keep the remaining collateral. In CeFi, the platform may liquidate your entire position. After liquidation, you keep whatever remains minus the debt repaid and liquidation penalty." },
      ]}
      relatedArticles={[
        { title: "LTV Ratio Guide", href: "/crypto-loans/learn/ltv-ratio-guide", category: "Crypto Loans" },
        { title: "Bitcoin-Backed Loans", href: "/crypto-loans/learn/bitcoin-backed-loans", category: "Crypto Loans" },
        { title: "Risk Management for DeFi Lenders", href: "/defi-lending/learn/lending-risk-management", category: "DeFi Lending" },
      ]}
    >
      <h2 id="how-liquidation-works">How Liquidation Works</h2>
      <p>
        Liquidation is triggered when your loan-to-value (LTV) ratio exceeds the liquidation threshold set by the lending platform. In DeFi protocols like Aave, each collateral asset has a specific liquidation threshold (for example, 82.5% for ETH). If you borrow 80% of your collateral value and the collateral drops even slightly, you cross the threshold. Liquidators are bots and individuals who monitor positions and execute liquidation transactions for profit. They repay a portion of your debt (typically up to 50% in Aave) and receive the equivalent collateral value plus a liquidation bonus (typically 5-10%). In CeFi platforms like Nexo, the platform itself handles liquidation, often giving you margin call warnings before liquidating. The liquidation penalty varies: Aave charges 5-10% depending on the asset, while CeFi platforms may charge similar or higher penalties.
      </p>

      <h2 id="monitoring-health">Monitoring Your Health Factor</h2>
      <p>
        Your health factor (or equivalent metric) is the single most important number to monitor. In Aave, health factor equals the sum of (each collateral value multiplied by its liquidation threshold) divided by total debt value. A health factor of 2.0 means your collateral could drop 50% before liquidation. A health factor of 1.5 means roughly 33% buffer. Below 1.0, liquidation can occur. Set up monitoring through multiple channels: use the protocol&apos;s native dashboard, connect wallet monitoring tools like DeBank or Zapper, set up email or Telegram alerts through services like HAL or Tenderly, and check regularly during high-volatility periods. Know the liquidation prices for your positions in advance. If ETH is your collateral, calculate the ETH price at which your health factor drops to 1.0 and monitor ETH price relative to that level.
      </p>

      <h2 id="prevention-strategies">Prevention Strategies</h2>
      <p>
        The most effective prevention strategy is conservative borrowing. If the liquidation threshold is 82.5%, borrow at 40-50% LTV instead of maximizing. This gives you substantial buffer for market drops. Use stablecoins as part of your collateral mix to reduce volatility. If you borrow against ETH, depositing some USDC alongside reduces your overall position sensitivity to ETH price movements. Diversify collateral across multiple assets to avoid single-asset concentration risk. Keep reserve funds (stablecoins in your wallet or on exchanges) ready to add collateral or repay debt quickly if prices drop. Consider your collateral and debt denomination: borrowing stablecoins against crypto collateral is highest risk because a crypto crash increases LTV. Borrowing ETH against ETH collateral has zero liquidation risk since both sides move together. Regularly take profit by repaying portions of your loan when markets are favorable.
      </p>

      <h2 id="automated-tools">Automated Protection Tools</h2>
      <p>
        DeFi Saver is the most established automated liquidation protection tool. It monitors your Aave, MakerDAO, and Compound positions and automatically adjusts them when your ratio approaches danger. The Boost function increases leverage when prices rise, and the Repay function reduces your position when prices fall, automatically selling collateral to repay debt before liquidation. Instadapp offers similar automation through its Smart Accounts. MakerDAO Vaults can use DeFi Saver&apos;s automation to prevent liquidation of DAI-minted positions. Some protocols offer built-in protection: Aave V3&apos;s efficiency mode (eMode) allows higher LTV for correlated assets, reducing liquidation risk for those pairs. Set up automation with conservative trigger levels, well above the actual liquidation point, to account for gas price spikes and network congestion that could delay protective transactions.
      </p>

      <h2 id="emergency-actions">Emergency Actions During Crashes</h2>
      <p>
        During sharp market crashes, you need to act quickly. Priority one is adding collateral to increase your health factor. Have stablecoins pre-positioned in your wallet or on the same chain as your loan for fast deposits. Priority two is repaying part of your debt, which immediately improves your ratio. If you cannot add collateral or repay, consider a flash loan to self-liquidate at better terms than a forced liquidation. During extreme crashes, network congestion may make transactions expensive or slow. On Ethereum, be prepared to pay high gas fees for time-critical transactions. Layer 2 protocols (Aave on Arbitrum or Optimism) have lower gas costs and may process transactions faster during congestion. Never assume you have time during a crash. In the 2022 crashes, ETH dropped over 20% in hours, liquidating billions in positions. Prepare your emergency plan before you need it.
      </p>
    </LearnPageLayout>
  );
}
