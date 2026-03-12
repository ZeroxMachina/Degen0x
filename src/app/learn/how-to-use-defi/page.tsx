import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Use DeFi (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Beginner's guide to using decentralized finance including swapping, lending, borrowing, staking, and yield farming with step-by-step instructions.",
  keywords: ["how to use DeFi", "DeFi beginner guide", "decentralized finance tutorial", "DeFi getting started", "DeFi guide"],
};

export default function HowToUseDefiPage() {
  return (
    <LearnPageLayout title="How to Use DeFi" categoryName="Crypto Education" categorySlug="learn" readTime="9 min" intro="Decentralized Finance (DeFi) offers financial services — trading, lending, borrowing, saving — without traditional intermediaries. Using DeFi requires a self-custodial wallet and some understanding of how protocols work. This guide walks you through the key DeFi activities and how to get started safely."
      toc={[
        { id: "prerequisites", title: "prerequisites", level: 2 },
        { id: "prerequisites", title: "Prerequisites", level: 2 },
        { id: "swapping", title: "swapping", level: 2 },
        { id: "token-swapping", title: "Token Swapping", level: 2 },
        { id: "lending-borrowing", title: "lending-borrowing", level: 2 },
        { id: "lending-borrowing", title: "Lending & Borrowing", level: 2 },
        { id: "yield-farming", title: "yield-farming", level: 2 },
        { id: "yield-farming", title: "Yield Farming", level: 2 },
        { id: "safety", title: "safety", level: 2 },
        { id: "defi-safety-tips", title: "DeFi Safety Tips", level: 2 }
      ]}
      faqs={[
        { question: "How much money do I need to start in DeFi?", answer: "You can start with any amount, but gas fees matter. On Ethereum mainnet, high gas fees make DeFi impractical for small amounts. Layer 2 networks (Arbitrum, Base, Optimism) and alternative L1s (Solana, Avalanche) offer much lower fees, making DeFi accessible with smaller amounts." },
        { question: "Is DeFi safe for beginners?", answer: "DeFi carries real risks including smart contract vulnerabilities, impermanent loss, and liquidation. Start with small amounts on well-established protocols, understand each action before taking it, and never invest more than you can afford to lose. Education is the best risk management tool." },
        { question: "What is the difference between DeFi and CeFi?", answer: "DeFi (Decentralized Finance) operates through smart contracts without intermediaries — you maintain custody of your assets. CeFi (Centralized Finance) involves traditional companies like exchanges holding your assets. DeFi offers more control but requires more personal responsibility for security." },
      ]}
      relatedArticles={[
        { title: "How to Use MetaMask", href: "/learn/how-to-use-metamask", category: "Learn" },
        { title: "How to Use Uniswap", href: "/learn/how-to-use-uniswap", category: "Learn" },
        { title: "How to Provide Liquidity", href: "/learn/how-to-provide-liquidity", category: "Learn" },
        { title: "What Is TVL?", href: "/learn/what-is-tvl", category: "Learn" },
      ]}
    >
      <section id="prerequisites"><h2>Prerequisites</h2><p>To use DeFi, you need: a self-custodial wallet (MetaMask for EVM chains, Phantom for Solana), cryptocurrency for the network you want to use (ETH for Ethereum/L2s, SOL for Solana), and additional tokens for gas fees. Set up your wallet, fund it by purchasing crypto on an exchange and transferring to your wallet address, and ensure you have enough native tokens for transaction fees.</p><p>Choose your starting network based on your budget and interests. Layer 2 networks like Arbitrum and Base offer the Ethereum DeFi experience with much lower fees. Solana provides fast, cheap transactions with a growing DeFi ecosystem. Start on one network, learn the mechanics, and expand to other chains as you gain confidence. Always keep some native tokens (ETH, SOL) reserved for gas fees.</p></section>
      <section id="swapping"><h2>Token Swapping</h2><p>Token swapping is the most basic DeFi activity. Decentralized exchanges (DEXs) let you trade tokens directly from your wallet without an account. Navigate to a DEX (Uniswap, Jupiter, SushiSwap), connect your wallet, select the tokens to swap, enter the amount, review the quote, and confirm. The swap executes through smart contracts and your new tokens appear in your wallet within seconds to minutes.</p><p>DEX aggregators like 1inch and Jupiter compare prices across multiple DEXs to find the best rate for your swap. They may split your order across multiple pools for better execution. Always check the price impact of your trade — high price impact means you are getting a worse deal, usually due to low liquidity. For larger trades, aggregators provide significantly better execution than trading on a single DEX.</p></section>
      <section id="lending-borrowing"><h2>Lending & Borrowing</h2><p>Lending protocols (Aave, Compound, Morpho) let you deposit crypto to earn interest or borrow against your deposits. To lend: deposit supported tokens into the protocol and earn variable or fixed interest rates. Your deposited assets may also be used as collateral. To borrow: deposit collateral, select the asset to borrow, and ensure your loan-to-value ratio stays below the liquidation threshold.</p><p>Borrowing in DeFi requires over-collateralization — you must deposit more value than you borrow. If your collateral value drops below the liquidation threshold, your position is automatically liquidated (sold) to repay the loan. Monitor your health factor (the ratio of collateral to debt) and add collateral or repay loans if it approaches dangerous levels. Lending is lower risk than borrowing, which requires active position management.</p></section>
      <section id="yield-farming"><h2>Yield Farming</h2><p>Yield farming involves strategically deploying capital across DeFi protocols to maximize returns. Common strategies include providing liquidity on DEXs and staking LP tokens for additional rewards, lending on multiple protocols to optimize rates, using liquid staking tokens as collateral for leveraged yield strategies, and participating in protocol incentive programs that distribute governance tokens to active users.</p><p>Yield farming returns can be attractive but come with layered risks: smart contract risk from each protocol involved, impermanent loss from liquidity provision, liquidation risk from leverage, and the volatility of reward tokens. Start with simple, single-protocol strategies and gradually explore more complex compositions as you understand the risks. Tools like DefiLlama, Zapper, and DeBank help you discover opportunities and track positions across protocols.</p></section>
      <section id="safety"><h2>DeFi Safety Tips</h2><p>Start with small amounts on well-established protocols with long track records and multiple audits. Never invest more than you can afford to lose entirely. Verify protocol websites through official sources, bookmark them, and never click links from unknown messages. Review every transaction before signing — understand what you are approving, especially token approval amounts.</p><p>Diversify across protocols to limit exposure to any single smart contract failure. Regularly revoke unnecessary token approvals. Use a dedicated wallet for DeFi with limited funds rather than your main holdings wallet. Stay informed about the protocols you use — follow their security channels and be prepared to act quickly if an exploit is reported. Education and caution are your best protection in DeFi.</p></section>
    </LearnPageLayout>
  );
}
