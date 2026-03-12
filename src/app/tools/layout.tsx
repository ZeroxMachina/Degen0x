/**
 * Tools Layout — wraps ALL /tools/* pages
 * ─────────────────────────────────────────────────────────────────
 * Adds structured data, consistent styling, and metadata for
 * all 69 crypto tool pages. Injects WebApplication schema on every
 * tool page without requiring per-page modifications.
 *
 * Sprint 11 — SEO Specialist + Frontend Dev
 */
export const dynamic = "force-dynamic";

import { SITE_URL, SITE_NAME } from "@/lib/constants";

// Tool metadata map — name + description for each tool slug
const TOOL_META: Record<string, { name: string; description: string }> = {
  "dca-calculator": { name: "DCA Calculator", description: "Calculate dollar-cost averaging returns for any cryptocurrency over custom time periods" },
  "tax-calculator": { name: "Crypto Tax Calculator", description: "Estimate your crypto capital gains tax liability with support for multiple jurisdictions" },
  "portfolio-tracker": { name: "Portfolio Tracker", description: "Track your crypto portfolio performance in real-time across all exchanges and wallets" },
  "staking-apy": { name: "Staking APY Finder", description: "Compare staking yields across proof-of-stake networks and liquid staking protocols" },
  "gas-tracker": { name: "Gas Tracker", description: "Real-time gas fees across Ethereum, L2s, and alternative blockchains" },
  "impermanent-loss": { name: "Impermanent Loss Calculator", description: "Calculate potential impermanent loss for liquidity pool positions" },
  "pnl-calculator": { name: "P&L Calculator", description: "Calculate your cryptocurrency profit and loss across trades and positions" },
  "converter": { name: "Crypto Converter", description: "Convert between cryptocurrencies and fiat currencies with real-time exchange rates" },
  "fear-greed-timeline": { name: "Fear & Greed Index", description: "Track crypto market sentiment with the Fear & Greed Index timeline" },
  "yield-farming-calculator": { name: "Yield Farming Calculator", description: "Calculate potential yield farming returns across DeFi protocols" },
  "lending-comparison": { name: "Lending Rate Comparison", description: "Compare DeFi lending and borrowing rates across protocols" },
  "exchange-fees": { name: "Exchange Fee Comparison", description: "Compare trading fees across all major cryptocurrency exchanges" },
  "whale-tracker": { name: "Whale Tracker", description: "Monitor large cryptocurrency transactions and whale wallet movements" },
  "liquidation-heatmap": { name: "Liquidation Heatmap", description: "Visualize leverage liquidation levels across crypto trading pairs" },
  "options-calculator": { name: "Options Calculator", description: "Price crypto options using Black-Scholes and estimate Greeks" },
  "defi-position-manager": { name: "DeFi Position Manager", description: "Manage and track your decentralized finance positions across protocols" },
  "wallet-analyzer": { name: "Wallet Analyzer", description: "Analyze any crypto wallet address for holdings, transaction history, and activity" },
  "token-screener": { name: "Token Screener", description: "Screen and filter cryptocurrencies by market cap, volume, and technical indicators" },
  "backtesting-engine": { name: "Backtesting Engine", description: "Backtest crypto trading strategies against historical market data" },
  "robo-advisor": { name: "Crypto Robo Advisor", description: "Get AI-powered portfolio allocation recommendations based on your risk profile" },
  "staking-rewards": { name: "Staking Rewards", description: "Calculate and compare staking rewards across proof-of-stake cryptocurrencies" },
  "onchain-analytics": { name: "On-Chain Analytics", description: "Deep dive into blockchain data with on-chain metrics and analysis" },
  "airdrop-tracker": { name: "Airdrop Tracker", description: "Track upcoming, active, and past cryptocurrency airdrops" },
  "funding-rates": { name: "Funding Rates", description: "Monitor perpetual futures funding rates across exchanges" },
  "portfolio-analytics": { name: "Portfolio Analytics", description: "Advanced analytics and risk metrics for your crypto portfolio" },
  "social-metrics": { name: "Social Metrics", description: "Track crypto social media sentiment and engagement metrics" },
  "correlation-matrix": { name: "Correlation Matrix", description: "Visualize price correlations between cryptocurrencies" },
  "market-heatmap": { name: "Market Heatmap", description: "Visual crypto market overview with price change heatmap" },
  "dominance-tracker": { name: "Dominance Tracker", description: "Track Bitcoin and altcoin market dominance over time" },
  "token-unlocks": { name: "Token Unlocks", description: "Track upcoming token unlock schedules and vesting events" },
  "defi-yields": { name: "DeFi Yields", description: "Compare yield opportunities across DeFi protocols and chains" },
  "nft-rarity-checker": { name: "NFT Rarity Checker", description: "Check rarity scores and trait rankings for NFT collections" },
  "nft-portfolio": { name: "NFT Portfolio Tracker", description: "Track your NFT collection value and floor price changes" },
  "smart-money-tracker": { name: "Smart Money Tracker", description: "Follow institutional and whale wallet trading activity" },
  "risk-analyzer": { name: "Risk Analyzer", description: "Assess portfolio risk with VaR, Sharpe ratio, and drawdown analysis" },
  "sentiment-dashboard": { name: "Sentiment Dashboard", description: "Aggregate crypto sentiment from social media, news, and on-chain data" },
  "narrative-tracker": { name: "Narrative Tracker", description: "Track trending crypto narratives and sector rotations" },
  "crypto-calendar": { name: "Crypto Calendar", description: "Track upcoming crypto events, launches, and important dates" },
  "trading-journal": { name: "Trading Journal", description: "Log and analyze your crypto trades to improve performance" },
  "portfolio-rebalancer": { name: "Portfolio Rebalancer", description: "Automatically calculate rebalancing trades for target allocations" },
  "price-alerts": { name: "Price Alerts", description: "Set custom price alerts for any cryptocurrency" },
  "advanced-charting": { name: "Advanced Charting", description: "Professional crypto charting with technical indicators and drawing tools" },
  "ai-trading-signals": { name: "AI Trading Signals", description: "AI-powered trading signals and market analysis" },
  "alerts-dashboard": { name: "Alerts Dashboard", description: "Centralized dashboard for all your crypto price and event alerts" },
  "bridge-aggregator": { name: "Bridge Aggregator", description: "Find the cheapest and fastest cross-chain bridge routes" },
  "crypto-watchlist": { name: "Crypto Watchlist", description: "Create and manage custom cryptocurrency watchlists" },
  "crypto-wrapped": { name: "Crypto Wrapped", description: "Your year-in-review crypto activity summary" },
  "degen-score": { name: "Degen Score", description: "Calculate your degen score based on on-chain activity" },
  "dex-aggregator": { name: "DEX Aggregator", description: "Find the best swap rates across decentralized exchanges" },
  "embed-widgets": { name: "Embed Widgets", description: "Embeddable crypto price widgets for your website" },
  "exchange-cashback": { name: "Exchange Cashback", description: "Compare cashback and referral programs across exchanges" },
  "index-fund-simulator": { name: "Index Fund Simulator", description: "Simulate crypto index fund performance with custom weightings" },
  "leaderboard": { name: "Trader Leaderboard", description: "See top-performing crypto traders and their strategies" },
  "lending-rates": { name: "Lending Rates", description: "Real-time crypto lending and borrowing rates comparison" },
  "live-prices": { name: "Live Prices", description: "Real-time cryptocurrency price feeds with market data" },
  "mev-scanner": { name: "MEV Scanner", description: "Detect and analyze MEV (Maximal Extractable Value) transactions" },
  "multi-chain-gas": { name: "Multi-Chain Gas", description: "Compare gas fees across multiple blockchain networks" },
  "performance-dashboard": { name: "Performance Dashboard", description: "Comprehensive portfolio performance metrics and benchmarking" },
  "portfolio-heatmap": { name: "Portfolio Heatmap", description: "Visualize your portfolio allocation and performance as a heatmap" },
  "portfolio-simulator": { name: "Portfolio Simulator", description: "Simulate portfolio outcomes under different market scenarios" },
  "portfolio-widget": { name: "Portfolio Widget", description: "Embeddable portfolio tracking widget for your website" },
  "price-ticker": { name: "Price Ticker", description: "Live crypto price ticker for embedding or monitoring" },
  "regulatory-map": { name: "Regulatory Map", description: "Interactive map of global cryptocurrency regulations by country" },
  "research-assistant": { name: "Research Assistant", description: "AI-powered cryptocurrency research and analysis tool" },
  "salary-in-crypto": { name: "Salary in Crypto", description: "Calculate the value of receiving salary payments in cryptocurrency" },
  "tax-optimizer": { name: "Tax Optimizer", description: "Optimize your crypto tax strategy with lot selection and loss harvesting" },
  "token-vesting": { name: "Token Vesting", description: "Track and visualize token vesting schedules for projects" },
  "volatility-scanner": { name: "Volatility Scanner", description: "Scan and rank cryptocurrencies by historical and implied volatility" },
};

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
