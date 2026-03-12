import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best DeFi Lending Platforms on Arbitrum (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Compare top DeFi lending protocols on Arbitrum. Lower gas fees, Ethereum security, and competitive yields from Aave, Radiant, Silo, and more.",
  keywords: ["arbitrum defi lending", "best lending arbitrum", "aave arbitrum", "arbitrum yield"],
};

export default function BestArbitrumDefiLending() {
  return (
    <LearnPageLayout
      title="Best DeFi Lending Platforms on Arbitrum"
      categoryName="DeFi Lending"
      categorySlug="defi-lending"
      readTime="9 min"
      intro="Arbitrum has emerged as a leading Layer 2 network for DeFi lending, offering Ethereum-level security with dramatically lower gas fees. The network hosts a thriving ecosystem of lending protocols from battle-tested giants like Aave to Arbitrum-native innovators like Radiant Capital. This guide covers the best platforms for lending and borrowing on Arbitrum."
      toc={[
        { id: "why-arbitrum", title: "why-arbitrum", level: 2 },
        { id: "why-arbitrum-for-defi-lending", title: "Why Arbitrum for DeFi Lending", level: 2 },
        { id: "top-protocols", title: "top-protocols", level: 2 },
        { id: "top-lending-protocols", title: "Top Lending Protocols", level: 2 },
        { id: "yield-opportunities", title: "yield-opportunities", level: 2 },
        { id: "yield-opportunities", title: "Yield Opportunities", level: 2 },
        { id: "getting-started", title: "getting-started", level: 2 },
        { id: "getting-started", title: "Getting Started", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "arbitrum-specific-risks", title: "Arbitrum-Specific Risks", level: 2 }
      ]}
      faqs={[
        { question: "Is Arbitrum safe for DeFi lending?", answer: "Arbitrum inherits Ethereum's security through its optimistic rollup architecture. Transactions settle on Ethereum mainnet. The main additional risk is the bridge, but the network has processed billions in value with a strong safety record." },
        { question: "How much can I save on gas fees?", answer: "Arbitrum gas fees are typically 90-95% lower than Ethereum mainnet. A lending transaction costing $20-50 on Ethereum might cost $0.20-0.50 on Arbitrum." },
        { question: "Can I bridge assets to Arbitrum easily?", answer: "Yes, the official Arbitrum bridge and third-party bridges like Stargate make it straightforward. Most major tokens are supported, and bridging typically takes 10-15 minutes." },
      ]}
      relatedArticles={[
        { title: "Cross-Chain Lending", href: "/defi-lending/learn/cross-chain-lending", category: "DeFi Lending" },
        { title: "How DeFi Lending Works", href: "/defi-lending/learn/how-defi-lending-works", category: "DeFi Lending" },
        { title: "DeFi Risks Guide", href: "/defi-lending/learn/defi-risks-guide", category: "DeFi Lending" },
      ]}
    >
      <section id="why-arbitrum">
        <h2>Why Arbitrum for DeFi Lending</h2>
        <p>Arbitrum has become the go-to Layer 2 for DeFi lending due to its combination of Ethereum security inheritance, dramatically lower transaction costs, and robust protocol ecosystem. As an optimistic rollup, Arbitrum posts transaction data to Ethereum mainnet while executing transactions off-chain, resulting in gas savings of 90-95%. This makes DeFi lending practical for a wider range of users and position sizes. The network boasts the highest TVL among Ethereum Layer 2s.</p>
        <p>For lenders and borrowers, low fees mean you can actively manage positions, rebalance collateral, and claim rewards without gas costs eating into returns. This is particularly valuable for yield farming strategies requiring frequent transactions.</p>
      </section>
      <section id="top-protocols">
        <h2>Top Lending Protocols on Arbitrum</h2>
        <p>Aave V3 on Arbitrum is the largest lending protocol by TVL, supporting major assets including ETH, USDC, USDT, WBTC, and ARB with efficiency mode for correlated pairs. Radiant Capital is an Arbitrum-native omnichain lending protocol with cross-chain mechanics and RDNT incentives. Compound V3 brings its isolated market model to the Layer 2. Silo Finance offers isolated lending markets with unique risk separation. Other notable protocols include those serving the GMX derivatives ecosystem.</p>
        <p>Each protocol offers distinct advantages. Aave provides the deepest liquidity and most assets. Radiant incentivizes cross-chain lending participation. Silo offers unique risk isolation per asset pair. Your choice depends on which assets you want to lend or borrow and your risk tolerance.</p>
      </section>
      <section id="yield-opportunities">
        <h2>Yield Opportunities</h2>
        <p>Yields on Arbitrum are often enhanced by ARB token incentives and protocol-specific rewards. Stablecoin lending yields on Aave Arbitrum typically range from 3-8% APY depending on market conditions, often boosted by ARB incentives from the Arbitrum DAO. ETH lending benefits from the liquid staking premium, with wstETH and rETH earning additional yield on top of lending returns. The ARB token can also be supplied to lending protocols, though yields are more volatile.</p>
      </section>
      <section id="getting-started">
        <h2>Getting Started on Arbitrum</h2>
        <p>To start lending on Arbitrum, bridge assets from Ethereum or another chain. The official Arbitrum bridge is most secure but has a 7-day withdrawal period back to Ethereum. Third-party bridges like Stargate and Hop offer faster transfers. Once assets are on Arbitrum, connect your wallet to your chosen protocol. The interfaces work identically to Ethereum mainnet versions. Ensure you have a small amount of ETH on Arbitrum for gas fees, which are minimal but required.</p>
      </section>
      <section id="risks">
        <h2>Arbitrum-Specific Risks</h2>
        <p>While Arbitrum inherits Ethereum security, additional risks exist. Bridge risk when moving assets between chains, as bridges have been exploit targets. Sequencer risk is unique to rollups, though Arbitrum is developing decentralized sequencer solutions. Smart contract risk at both protocol and bridge levels. Liquidity fragmentation means Arbitrum assets are separate from Ethereum mainnet liquidity, potentially resulting in different dynamics during extreme market events.</p>
      </section>
    </LearnPageLayout>
  );
}
