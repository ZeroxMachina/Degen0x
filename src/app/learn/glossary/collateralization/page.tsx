import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Collateralization? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn what collateralization means in DeFi and crypto lending, how collateral ratios work, and why collateralization is essential for decentralized lending.",
};

export default function CollateralizationPage() {
  return (
    <LearnPageLayout title="What Is Collateralization?" categoryName="Learn Crypto" categorySlug="learn" readTime="5 min read"
      intro="Collateralization is the practice of pledging assets as security for a loan or financial obligation. In DeFi, borrowers must deposit cryptocurrency as collateral to borrow other assets. Because crypto is volatile, most DeFi protocols require over-collateralization, meaning the collateral value must exceed the loan value. Collateralization is the mechanism that makes trustless, permissionless lending possible without credit checks or identity verification."
      toc={[{ id: "definition", title: "What Is Collateralization?", level: 2 }, { id: "collateral-ratios", title: "Understanding Collateral Ratios", level: 2 }, { id: "liquidation", title: "Collateralization and Liquidation", level: 2 }, { id: "defi-collateral", title: "Types of DeFi Collateral", level: 2 }]}
      faqs={[{ question: "Why does DeFi require over-collateralization?", answer: "DeFi lending is trustless — there are no credit checks or legal enforcement mechanisms. Over-collateralization ensures that even if a borrower defaults, the protocol can sell the collateral to recover the loan. The excess collateral provides a buffer against price volatility that could otherwise leave loans undercollateralized." },
        { question: "What happens if my collateral value drops?", answer: "If your collateral value drops below the minimum collateralization ratio, your position becomes eligible for liquidation. A liquidator repays part of your debt in exchange for your collateral at a discount. To avoid liquidation, you can add more collateral or repay part of the loan to increase your collateral ratio." }]}
      relatedArticles={[{ title: "Over-Collateralized", href: "/learn/glossary/over-collateralized", category: "Glossary" }, { title: "Under-Collateralized", href: "/learn/glossary/under-collateralized", category: "Glossary" }, { title: "Liquidation", href: "/learn/glossary/liquidation", category: "Glossary" }, { title: "Lending Protocol", href: "/learn/glossary/lending-protocol", category: "Glossary" }]}
    >
      <h2 id="definition">What Is Collateralization?</h2>
      <p>Collateralization is the foundation of DeFi lending. When you want to borrow assets from a protocol like Aave or Compound, you first deposit collateral. The protocol allows you to borrow up to a certain percentage of your collateral&apos;s value, known as the loan-to-value (LTV) ratio. For example, with a 75% LTV, depositing $10,000 in ETH allows you to borrow up to $7,500 in other assets. This ensures the protocol always has assets to recover if the borrower fails to repay.</p>

      <h2 id="collateral-ratios">Understanding Collateral Ratios</h2>
      <p>The collateral ratio measures the relationship between collateral value and loan value. A 150% collateral ratio means you have $1.50 in collateral for every $1 borrowed. Different assets have different LTV ratios based on their volatility and liquidity. ETH might have a 80% LTV, while more volatile altcoins might only allow 50-60% LTV. Stablecoins have the highest LTV ratios (up to 90%) due to their low volatility.</p>

      <h2 id="liquidation">Collateralization and Liquidation</h2>
      <p>Each lending protocol has a liquidation threshold, the collateral ratio below which your position can be liquidated. If your collateral value drops due to price movement, your ratio decreases. When it crosses the liquidation threshold, automated liquidators repay your debt and seize your collateral plus a liquidation penalty (typically 5-15%). Monitoring your health factor and maintaining a safe buffer above the liquidation threshold is critical for any DeFi borrower.</p>

      <h2 id="defi-collateral">Types of DeFi Collateral</h2>
      <p>Common DeFi collateral types include major cryptocurrencies (ETH, BTC), stablecoins (USDC, USDT), liquid staking tokens (stETH, rETH), LP tokens from DEX pools, and increasingly real-world asset tokens. Each collateral type has different risk parameters set by the protocol&apos;s governance. More volatile assets require higher collateral ratios, while stable, liquid assets can be borrowed against more efficiently. Some advanced protocols also accept NFTs as collateral for specialized lending.</p>
    </LearnPageLayout>
  );
}
