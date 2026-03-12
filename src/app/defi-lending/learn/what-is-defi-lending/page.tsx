import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";

export const metadata: Metadata = {
  title: "What Is DeFi Lending? Complete Beginner's Guide (2026)",
  description: "Learn how DeFi lending works, how to earn yield, borrowing mechanics, risks, and how to get started with decentralized lending protocols like Aave and Compound.",
};

export default function WhatIsDefiLendingPage() {
  return (
    <LearnPageLayout
      title="What Is DeFi Lending?"
      categoryName="DeFi Lending"
      categorySlug="defi-lending"
      readTime="12 min"
      intro="DeFi lending allows anyone with a crypto wallet to earn interest on their assets or borrow cryptocurrency without intermediaries, credit checks, or bank approvals. Using smart contracts on blockchain networks, DeFi lending protocols create permissionless, transparent money markets that operate 24/7. This guide covers everything you need to know about how DeFi lending works, the risks involved, and how to get started."
      toc={[
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-defi-lending-works", title: "How DeFi Lending Works", level: 2 },
        { id: "earning-yield", title: "earning-yield", level: 2 },
        { id: "earning-yield-as-a-lender", title: "Earning Yield as a Lender", level: 2 },
        { id: "borrowing", title: "borrowing", level: 2 },
        { id: "borrowing-in-defi", title: "Borrowing in DeFi", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "key-risks-to-understand", title: "Key Risks to Understand", level: 2 },
        { id: "getting-started", title: "getting-started", level: 2 },
        { id: "how-to-get-started", title: "How to Get Started", level: 2 }
      ]}
      faqs={[
        { question: "Is DeFi lending safe?", answer: "DeFi lending carries smart contract risk, liquidation risk, and market volatility risk. Top protocols like Aave and Compound have been extensively audited and operated for years without major exploits. However, no DeFi protocol is completely risk-free. Only deposit what you can afford to lose." },
        { question: "How much can I earn from DeFi lending?", answer: "Returns vary by asset and protocol. Stablecoin lending typically yields 2-8% APY, while volatile assets may yield more or less depending on borrowing demand. These rates are variable and change based on market conditions." },
        { question: "Do I need to pay taxes on DeFi lending income?", answer: "In most jurisdictions, interest earned from DeFi lending is taxable as income. The specific tax treatment varies by country. Consult a tax professional familiar with cryptocurrency taxation for guidance specific to your situation." },
        { question: "What is the minimum amount to start DeFi lending?", answer: "There is no minimum deposit for most DeFi lending protocols. However, you should consider transaction (gas) fees relative to your deposit size. On Ethereum mainnet, deposits under $500 may not be cost-effective. On Layer 2 networks, even small amounts work well." },
      ]}
      relatedArticles={[
        { title: "How to Earn Yield in DeFi", href: "/defi-lending/learn/how-to-earn-yield", category: "DeFi Lending" },
        { title: "APY vs APR Explained", href: "/defi-lending/learn/apy-vs-apr", category: "DeFi Lending" },
        { title: "Smart Contract Risks", href: "/defi-lending/learn/smart-contract-risks", category: "DeFi Lending" },
        { title: "Best DeFi Lending Protocols", href: "/defi-lending/best", category: "DeFi Lending" },
      ]}
    >
      <h2 id="how-it-works">How DeFi Lending Works</h2>
      <p>DeFi lending protocols operate as algorithmic money markets powered by smart contracts. Instead of a bank acting as an intermediary between savers and borrowers, smart contracts automatically manage the entire process on the blockchain. Lenders deposit their crypto assets into a shared liquidity pool, and borrowers can take loans from this pool by providing collateral that exceeds the loan value (over-collateralization).</p>
      <p>Interest rates are determined algorithmically based on the utilization ratio of each asset pool. When a large percentage of the pool is borrowed (high utilization), interest rates increase to incentivize more deposits and discourage excessive borrowing. When utilization is low, rates decrease. This creates a self-balancing market without any human intervention.</p>
      <p>The entire process is transparent and verifiable on the blockchain. Anyone can audit the smart contract code, check the current state of lending pools, and verify that the protocol is operating as intended. This transparency is one of DeFi's core advantages over traditional financial intermediaries.</p>

      <h2 id="earning-yield">Earning Yield as a Lender</h2>
      <p>To earn yield in DeFi lending, you simply deposit supported crypto assets into a lending protocol like Aave, Compound, or Spark. Once deposited, your assets immediately begin earning interest that accrues to your account in real time. You can withdraw your assets plus earned interest at any time, subject to available liquidity in the pool.</p>
      <p>The yield you earn comes from borrowers paying interest on their loans. A portion of the interest paid by borrowers goes to the protocol (as a reserve or fee), and the rest is distributed to lenders proportional to their share of the pool. Some protocols also distribute governance token rewards as an additional incentive, effectively boosting your yield above the base lending rate.</p>
      <p>Typical yields range from 1-5% APY for major assets like ETH and USDC, though rates can spike much higher during periods of extreme borrowing demand. Stablecoins generally offer the most consistent yields because borrowing demand for stablecoins tends to be more stable than for volatile assets.</p>

      <h2 id="borrowing">Borrowing in DeFi</h2>
      <p>DeFi borrowing requires over-collateralization, meaning you must deposit more value in collateral than you borrow. For example, if the loan-to-value (LTV) ratio for ETH is 80%, you can borrow up to $8,000 worth of assets against $10,000 worth of ETH collateral. This over-collateralization protects lenders in case the collateral loses value.</p>
      <p>If your collateral value drops below the liquidation threshold, your position may be partially or fully liquidated. Liquidators (bots and arbitrageurs) repay part of your loan and claim your collateral at a discount as their incentive. To avoid liquidation, borrowers should monitor their health factor and add collateral or repay loans when it gets too low.</p>
      <p>A key advantage of DeFi borrowing is that there are no credit checks, no applications, and no waiting periods. Anyone with sufficient collateral can borrow instantly. This permissionless access is one of DeFi's most powerful features, enabling financial services for anyone with an internet connection and a crypto wallet.</p>

      <h2 id="risks">Key Risks to Understand</h2>
      <p>Smart contract risk is the most fundamental risk in DeFi. If the lending protocol's smart contracts contain a bug or vulnerability, deposited funds could be at risk. Top protocols mitigate this through extensive auditing, formal verification, bug bounties, and battle-testing over time, but the risk can never be fully eliminated.</p>
      <p>Liquidation risk affects borrowers who may lose collateral if asset prices move against them. Market risk affects both lenders and borrowers, as the value of deposited or borrowed assets can change. Oracle risk exists because DeFi protocols rely on price oracles to value collateral, and oracle failures can trigger incorrect liquidations or enable exploits.</p>
      <p>Protocol governance risk exists because changes to protocol parameters (like interest rates, collateral requirements, or supported assets) are controlled by governance token holders who may not always act in the best interest of all users. Finally, regulatory risk exists as governments worldwide continue to develop frameworks for DeFi regulation.</p>

      <h2 id="getting-started">How to Get Started</h2>
      <p>To start with DeFi lending, you need a Web3 wallet (like MetaMask, Rabby, or Coinbase Wallet), some crypto assets to deposit, and enough ETH (or the native gas token of your chosen network) to pay for transaction fees. For beginners, we recommend starting on a Layer 2 network like Arbitrum or Base where gas costs are minimal.</p>
      <p>Connect your wallet to a trusted lending protocol like Aave or Compound, select the asset you want to supply, approve the token for spending, and deposit. Your assets immediately begin earning interest. Start with a small amount to familiarize yourself with the process before committing larger sums. And remember: only deposit what you can afford to lose.</p>
    </LearnPageLayout>
  );
}
