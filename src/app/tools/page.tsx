import Link from "next/link";
import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedContent from '@/components/RelatedContent';

export const metadata: Metadata = {
  title: "104+ Free Crypto Tools — Bridge Aggregator v2, Watchlist Sync, MEV Protection & More | degen0x",
  description: "Free crypto tools including multi-chain bridge aggregator v2 with route optimization, watchlist sync with localStorage, MEV protection dashboard, token unlock calendar, DAO treasury dashboard, liquidity pool explorer, AI trading strategy builder, advanced charting (TradingView-style), crypto tax optimizer with loss harvesting, portfolio analytics, crypto alerts dashboard, crypto watchlist, social metrics aggregator, portfolio rebalancer, NFT portfolio tracker, DeFi position manager, airdrop tracker, yield farming calculator, market heatmap, BTC dominance tracker, volatility scanner, liquidation heatmap, funding rate tracker, fear & greed timeline, bridge aggregator, exchange fee comparison, portfolio widget, on-chain analytics, and more.",
};

const TOOLS = [
  {
    href: "/tools/watchlist-sync",
    icon: "\u{2B50}",
    color: "#d29922",
    title: "Watchlist Sync",
    description: "Persist your token watchlist across sessions with localStorage. Set price alerts, volume spike triggers, and export/import your lists as JSON. Quick-add from any tool page. Compare and share watchlists.",
    tags: ["Watchlist", "Price Alerts", "Local Storage", "Import/Export"],
    badge: "\u{1F195} Sprint 38",
  },
  {
    href: "/tools/bridge-aggregator-v2",
    icon: "\u{1F309}",
    color: "#06b6d4",
    title: "Multi-Chain Bridge Aggregator v2",
    description: "Compare routes across 10+ bridges (Stargate, Across, Hop, Wormhole, LayerZero & more). Real-time gas estimation, fee comparison, security scores, and optimal route recommendations across 10 chains.",
    tags: ["Bridge Routes", "Gas Estimation", "Multi-Chain", "Route Optimizer"],
    badge: "\u{1F195} Sprint 38",
  },
  {
    href: "/tools/mev-protection-dashboard",
    icon: "\u{1F6E1}",
    color: "#f85149",
    title: "MEV Protection Dashboard",
    description: "Monitor MEV extraction in real-time: sandwich attacks, frontrunning, JIT liquidity, and liquidation bots. Compare 6 protection strategies with effectiveness scores. Built-in TX simulator scores your trade's MEV exposure.",
    tags: ["MEV Protection", "Sandwich Attacks", "TX Simulator", "DeFi Security"],
    badge: "\u{1F195} Sprint 37",
  },
  {
    href: "/tools/token-unlock-calendar",
    icon: "\u{1F513}",
    color: "#f0883e",
    title: "Token Unlock Calendar",
    description: "Track upcoming token unlocks across 15+ projects. Impact scoring, historical price correlation, supply visualization, and weekly calendar view. Filter by chain, category, and timeframe.",
    tags: ["Token Unlocks", "Supply Impact", "Vesting", "Risk Assessment"],
    badge: "\u{1F195} Sprint 36",
  },
  {
    href: "/tools/dao-treasury-dashboard",
    icon: "\u{1F3E6}",
    color: "#3fb950",
    title: "DAO Treasury Dashboard",
    description: "Analyze DAO treasuries across 8 major protocols. Holdings breakdown, diversification scoring, runway estimation, and recent fund flow tracking with on-chain transaction links.",
    tags: ["DAO Finance", "Treasury", "Runway", "Diversification"],
    badge: "\u{1F195} Sprint 36",
  },
  {
    href: "/tools/liquidity-pool-explorer",
    icon: "\u{1F30A}",
    color: "#06b6d4",
    title: "Liquidity Pool Explorer",
    description: "Explore LP positions across Uniswap, Raydium, Orca, Curve, PancakeSwap & Aerodrome. TVL tracking, fee analysis, APR comparison, and built-in impermanent loss calculator across 5 chains.",
    tags: ["AMM Pools", "Impermanent Loss", "TVL", "Multi-Chain"],
    badge: "Sprint 35",
  },
  {
    href: "/tools/strategy-builder",
    icon: "\u{1F916}",
    color: "#8b5cf6",
    title: "AI Trading Strategy Builder",
    description: "Build custom trading strategies with rule-based conditions. 5 preset templates, backtesting with equity curves, win rate analysis, and risk management settings. Supports RSI, MACD, Bollinger Bands & more.",
    tags: ["Backtesting", "Strategy Rules", "Equity Curves", "Risk Settings"],
    badge: "Sprint 35",
  },
  {
    href: "/tools/protocol-revenue",
    icon: "💰",
    color: "#58a6ff",
    title: "Protocol Revenue Dashboard",
    description: "Compare on-chain revenue across 16+ DeFi protocols. View 24h/7d/30d earnings, TVL, P/E ratios, and revenue growth. Table and card views with advanced sorting and filtering.",
    tags: ["Revenue", "P/E Ratio", "TVL", "Protocol Comparison"],
    badge: "Sprint 34",
  },
  {
    href: "/tools/social-sentiment",
    icon: "📡",
    color: "#bc8cff",
    title: "Social Sentiment Radar",
    description: "Track real-time crypto social media sentiment from Twitter, Reddit, and Telegram. Sentiment scores, buzz metrics, sparkline charts, and trending topic detection for 12+ tokens.",
    tags: ["Sentiment", "Social Media", "Buzz Score", "Trending"],
    badge: "Sprint 34",
  },
  {
    href: "/tools/market-movers",
    icon: "🚀",
    color: "#3fb950",
    title: "Market Movers",
    description: "Track the top gainers, biggest losers, and highest volume tokens in real-time. Interactive sparkline charts, advanced sorting, and instant search across 20+ tokens.",
    tags: ["Gainers", "Losers", "Volume", "Sparklines"],
    badge: "🆕 Sprint 33",
  },
  {
    href: "/tools/defi-risk-scorer",
    icon: "🛡️",
    color: "#f0883e",
    title: "DeFi Risk Scoring Engine",
    description: "Assess risk across 15+ DeFi protocols with a 6-dimension scoring model. Radar charts, circular gauges, and side-by-side protocol comparison mode.",
    tags: ["Risk Assessment", "Radar Charts", "Compare Mode"],
    badge: "🆕 Sprint 33",
  },
  {
    href: "/tools/portfolio-rebalancer",
    icon: "⚖️",
    color: "#6366f1",
    title: "Portfolio Rebalancer",
    description: "Visualize portfolio drift, set target allocations with preset strategies, and generate optimal rebalancing trades. Threshold-based rebalancing with donut charts and trade execution plans.",
    tags: ["Drift Detection", "Trade Plans", "Donut Charts"],
    badge: "🆕 Sprint 32",
  },
  {
    href: "/tools/tax-loss-harvester",
    icon: "🧾",
    color: "#10b981",
    title: "Tax Loss Harvesting Analyzer",
    description: "Identify tax-loss harvesting opportunities across your crypto portfolio. Calculates potential savings by tax bracket, tracks holding periods (short vs long-term), and generates prioritized harvesting recommendations with wash sale warnings.",
    tags: ["Tax Savings", "Wash Sale Alerts", "Holding Periods"],
    badge: "🆕 Sprint 32",
  },
  {
    href: "/tools/perp-funding",
    icon: "📈",
    color: "#6366f1",
    title: "Perpetual Funding Rates",
    description: "Track real-time funding rates across 8+ perp exchanges. Find delta-neutral arbitrage opportunities, monitor sentiment heatmaps, and compare annualized yields.",
    tags: ["8 Exchanges", "Arbitrage Finder", "Heatmap"],
    badge: "🆕 Sprint 31",
  },
  {
    href: "/tools/governance-tracker",
    icon: "🏛️",
    color: "#bc8cff",
    title: "Governance Tracker",
    description: "Monitor on-chain governance proposals across DeFi and L2 protocols. Track voting power, quorum progress, and proposal impact in real-time.",
    tags: ["10 Protocols", "Vote Tracking", "Multi-Chain"],
    badge: "🆕 Sprint 31",
  },
  {
    href: "/tools/bridge-monitor",
    icon: "🌉",
    color: "#f0883e",
    title: "Cross-Chain Bridge Monitor",
    description: "Compare bridge protocols by TVL, fees, speed, and security scores. Track live cross-chain transactions and capital flows between 12 networks.",
    tags: ["10 Bridges", "Security Audit", "Capital Flows"],
    badge: "🆕 Sprint 31",
  },
  {
    href: "/tools/staking-rewards",
    icon: "💰",
    color: "#22c55e",
    title: "Staking Rewards Calculator",
    description: "Calculate potential staking rewards for ETH, SOL, ADA, DOT, ATOM and more. Compare APY rates, compounding strategies, and projected earnings with monthly breakdowns.",
    tags: ["8 PoS Chains", "Compounding", "Monthly Breakdown"],
    badge: "🆕 New",
  },
  {
    href: "/tools/advanced-charting",
    icon: "📊",
    color: "#06b6d4",
    title: "Advanced Charting",
    description: "TradingView-style interactive candlestick charts with 10+ crypto pairs, 5 timeframes, technical indicators (SMA, EMA, RSI, MACD, Bollinger Bands), order book, and crosshair tooltips.",
    tags: ["Candlestick", "Indicators", "Order Book"],
    badge: "\uD83C\uDD95 New",
  },
  {
    href: "/tools/tax-optimizer",
    icon: "\uD83D\uDCB0",
    color: "#22c55e",
    title: "Crypto Tax Optimizer",
    description: "Tax-loss harvesting tool with capital gains/losses calculation, wash sale warnings, multiple cost basis methods (FIFO/LIFO/HIFO), tax bracket estimation, and CSV export for tax filing.",
    tags: ["Loss Harvesting", "Tax Report", "CSV Export"],
    badge: "\uD83C\uDD95 New",
  },
  {
    href: "/tools/portfolio-analytics",
    icon: "📈",
    color: "#6366f1",
    title: "Portfolio Analytics",
    description: "Advanced portfolio analytics with SVG charts, risk metrics (Sharpe, Sortino, max drawdown), correlation matrix, performance attribution, and diversification scoring.",
    tags: ["Risk Metrics", "Charts", "Attribution"],
    badge: "🆕 New",
  },
  {
    href: "/tools/alerts-dashboard",
    icon: "🔔",
    color: "#f43f5e",
    title: "Crypto Alerts Dashboard",
    description: "Set price alerts, whale alerts, volume spike notifications, Fear & Greed triggers, and DeFi TVL alerts. Real-time monitoring with browser notifications.",
    tags: ["Price Alerts", "Whale Alerts", "Real-Time"],
    badge: "🆕 New",
  },
  {
    href: "/tools/crypto-watchlist",
    icon: "⭐",
    color: "#f59e0b",
    title: "Crypto Watchlist",
    description: "Build your personal crypto watchlist. Track 50+ tokens with real-time prices, sort by any metric, filter by category, and export as CSV.",
    tags: ["50+ Tokens", "Favorites", "CSV Export"],
    badge: "🆕 New",
  },
  {
    href: "/tools/social-metrics",
    icon: "📱",
    color: "#8b5cf6",
    title: "Social Metrics Aggregator",
    description: "Track social sentiment across Twitter, Reddit, Telegram, Discord & GitHub for 30+ cryptos. Social Score, momentum indicators, and trend analysis.",
    tags: ["Multi-Platform", "Social Score", "Momentum"],
    badge: "🆕 New",
  },
  {
    href: "/tools/portfolio-rebalancer",
    icon: "⚖️",
    color: "#06b6d4",
    title: "Portfolio Rebalancer",
    description: "Define target allocations, calculate rebalancing trades, visualize current vs target with SVG pie charts, and export trade plans as CSV.",
    tags: ["Allocation", "Trade Calculator", "CSV Export"],
    badge: "🆕 New",
  },
  {
    href: "/tools/nft-portfolio",
    icon: "🖼️",
    color: "#ec4899",
    title: "NFT Portfolio Tracker",
    description: "Track NFT collections across Ethereum, Solana, Polygon & Base. Floor prices, P&L, rarity scoring, and portfolio diversification charts.",
    tags: ["Multi-Chain", "Rarity", "P&L Tracker"],
    badge: "🆕 New",
  },
  {
    href: "/tools/defi-position-manager",
    icon: "🏦",
    color: "#8B5CF6",
    title: "DeFi Position Manager",
    description: "Track all your DeFi positions — lending, LP, staking — across Aave, Uniswap, Lido, and more. Monitor health factors and liquidation risks.",
    tags: ["Multi-Protocol", "Risk Monitor", "Cross-Chain"],
  },
  {
    href: "/tools/portfolio-widget",
    icon: "💼",
    color: "#6366f1",
    title: "Portfolio Widget",
    description: "Build and track your crypto portfolio with real-time P&L, allocation charts, and embeddable widgets.",
    tags: ["Free", "Private", "No Login"],
    badge: "🆕 New",
  },
  {
    href: "/tools/onchain-analytics",
    icon: "⛓️",
    color: "#8B5CF6",
    title: "On-Chain Analytics",
    description: "Monitor blockchain network activity, DeFi protocol health, and gas fees across major chains.",
    tags: ["On-Chain", "Multi-Chain", "Real-time"],
    badge: "🆕 New",
  },
  {
    href: "/tools/portfolio-tracker",
    icon: "📊",
    color: "#6366f1",
    title: "Portfolio Tracker",
    description: "Track your crypto holdings with P&L, allocation charts, and performance analytics. 100% private — stored in your browser only.",
    tags: ["Free", "Private", "No Login"],
    badge: "🆕 New",
  },
  {
    href: "/tools/staking-apy",
    icon: "🥩",
    color: "#22c55e",
    title: "Staking APY Leaderboard",
    description: "Compare live staking yields across 17+ protocols — CEX, DeFi liquid staking, and native staking. Filter by risk level and lock period.",
    tags: ["17+ Protocols", "Live APY", "Risk Ratings"],
    badge: "🆕 New",
  },
  {
    href: "/tools/dca-calculator",
    icon: "📆",
    color: "#6366f1",
    title: "DCA Calculator",
    description: "Calculate how dollar cost averaging into crypto would have performed. Compare DCA vs lump sum, see your average cost basis, and optimize your strategy.",
    tags: ["Free", "DCA", "Strategy"],
    badge: "🆕 New",
  },
  {
    href: "/tools/pnl-calculator",
    icon: "💰",
    color: "#22c55e",
    title: "Profit & Loss Calculator",
    description: "Calculate crypto trade P&L instantly. Supports leverage, fees, long/short, multi-trade tracking, and tax estimation.",
    tags: ["P&L", "Tax", "Leverage"],
    badge: "🆕 New",
  },
  {
    href: "/tools/airdrop-tracker",
    icon: "🪂",
    color: "#a855f7",
    title: "Airdrop Tracker",
    description: "Track upcoming and live crypto airdrops across 19+ projects. Filter by chain, check eligibility criteria, and never miss a free token drop.",
    tags: ["19+ Projects", "Eligibility", "Multi-chain"],
    badge: "🆕 New",
  },
  {
    href: "/tools/yield-farming-calculator",
    icon: "🌾",
    color: "#22c55e",
    title: "Yield Farming Calculator",
    description: "Calculate yield farming returns with compounding, impermanent loss, and fee estimation. Compare 8 popular farms and optimize your DeFi strategy.",
    tags: ["APY/APR", "IL Calculator", "8 Farms"],
    badge: "🆕 New",
  },
  {
    href: "/tools/gas-tracker",
    icon: "⛽",
    color: "#F3BA2F",
    title: "Gas Tracker",
    description: "Real-time gas prices for Ethereum, Arbitrum, Optimism, Base, Polygon, Solana, and more. See slow/standard/fast estimates in USD.",
    tags: ["8 Networks", "Live", "USD Cost"],
    badge: null,
  },
  {
    href: "/tools/price-ticker",
    icon: "📈",
    color: "#06b6d4",
    title: "Live Price Ticker",
    description: "Full crypto market overview with 16 coins, sparkline charts, 3-second price updates, and sortable columns. Filter by category.",
    tags: ["16 Coins", "3s Updates", "Sparklines"],
    badge: null,
  },
  {
    href: "/tools/whale-tracker",
    icon: "🐋",
    color: "#9945FF",
    title: "Whale Alert Tracker",
    description: "Monitor large on-chain transfers across BTC, ETH, SOL, and more. See whale movements and their potential market impact.",
    tags: ["On-chain", "Real-time", "Multi-chain"],
    badge: null,
  },
  {
    href: "/exchanges/compare",
    icon: "⚖️",
    color: "#E84142",
    title: "Exchange Comparison Builder",
    description: "Compare up to 4 crypto exchanges side-by-side across fees, features, security, and more. Interactive builder with scores.",
    tags: ["6 Exchanges", "Interactive", "Side-by-side"],
    badge: "🆕 New",
  },
  {
    href: "/tools/converter",
    icon: "🔄",
    color: "#6366f1",
    title: "Crypto Converter",
    description: "Convert BTC to USD, ETH to EUR, or any crypto-to-crypto. Live prices, multi-currency support (USD, EUR, GBP, JPY, CAD, AUD), and a full conversion table.",
    tags: ["15+ Coins", "6 Fiat Currencies", "Crypto-to-Crypto"],
    badge: "🆕 New",
  },
  {
    href: "/tools/price-alerts",
    icon: "🔔",
    color: "#F0B90B",
    title: "Price Alerts",
    description: "Set custom price targets for BTC, ETH, SOL and 9 more coins. Alerts trigger in-browser with toast notifications. No account required.",
    tags: ["No Login", "Private", "12 Coins"],
    badge: "🆕 New",
  },
  {
    href: "/tools/tax-calculator",
    icon: "🧮",
    color: "#E84142",
    title: "Crypto Tax Calculator",
    description: "Calculate crypto capital gains taxes using FIFO, LIFO, or HIFO. Enter trades, get short-term vs long-term breakdown and estimated tax owed.",
    tags: ["FIFO/LIFO/HIFO", "Free", "No Login"],
    badge: "🆕 New",
  },
  {
    href: "/tools/defi-yields",
    icon: "🌾",
    color: "#22c55e",
    title: "DeFi Yield Aggregator",
    description: "Compare DeFi yields across 20+ protocols — Aave, Compound, Curve, Lido, Jito, and more. Filter by chain, risk, and category. See APY + TVL.",
    tags: ["20+ Protocols", "7 Chains", "Risk Ratings"],
    badge: "🆕 New",
  },
  {
    href: "/tools/token-screener",
    icon: "🔍",
    color: "#6366f1",
    title: "Token Screener",
    description: "Screen 100 cryptocurrencies by category, chain, price performance, and market cap. Filter gainers/losers, sort any column, find tokens that match your criteria.",
    tags: ["100 Tokens", "8 Categories", "Multi-Chain"],
    badge: "🆕 New",
  },
  {
    href: "/tools/sentiment-dashboard",
    icon: "🧠",
    color: "#8B5CF6",
    title: "Sentiment Dashboard",
    description: "12 real-time market sentiment signals: Fear & Greed, funding rates, on-chain flows, MVRV Z-Score, social volume, altcoin season index, and more.",
    tags: ["12 Signals", "On-Chain", "Real-time"],
    badge: "🆕 Day 4",
  },
  {
    href: "/tools/impermanent-loss",
    icon: "🔥",
    color: "#EF4444",
    title: "Impermanent Loss Calculator",
    description: "Calculate IL for any AMM pool — Uniswap, Curve, Balancer, PancakeSwap. Compare LP returns vs HODLing, estimate fee income, and find your break-even point.",
    tags: ["DeFi", "AMM Pools", "Fee Estimation"],
    badge: "🆕 Day 5",
  },
  {
    href: "/tools/correlation-matrix",
    icon: "📊",
    color: "#6366F1",
    title: "Crypto Correlation Matrix",
    description: "Interactive correlation heatmap for 12 top cryptos. See how assets move together, find diversification opportunities, and optimize your portfolio allocation.",
    tags: ["12 Assets", "4 Timeframes", "Heatmap"],
    badge: "🆕 Day 5",
  },
  {
    href: "/tools/nft-rarity-checker",
    icon: "💎",
    color: "#06b6d4",
    title: "NFT Rarity Checker",
    description: "Estimate rarity scores for NFTs across 6 top collections. Add traits, see rarity tiers (Legendary to Common), and get price estimates based on floor multipliers.",
    tags: ["6 Collections", "Rarity Tiers", "Price Estimates"],
    badge: "🆕 Sprint 5",
  },
  {
    href: "/tools/ai-trading-signals",
    icon: "🤖",
    color: "#8B5CF6",
    title: "AI Trading Signals",
    description: "Simulated ML-powered signals for 20 top cryptos. RSI, MACD, Bollinger Bands, on-chain metrics, whale tracking, and market regime detection. Educational only.",
    tags: ["20 Coins", "Technical + On-Chain", "4 Timeframes"],
    badge: "🆕 Sprint 5",
  },
  {
    href: "/tools/index-fund-simulator",
    icon: "📈",
    color: "#10B981",
    title: "Crypto Index Fund Simulator",
    description: "Build custom crypto index funds with 20 assets, 5 presets, DCA simulation, Sharpe ratio analysis, and benchmark comparison against BTC and S&P 500.",
    tags: ["20 Assets", "DCA Sim", "Sharpe Ratio"],
    badge: "🆕 Sprint 5",
  },
  {
    href: "/tools/wallet-analyzer",
    icon: "👛",
    color: "#F59E0B",
    title: "Wallet Address Analyzer",
    description: "Analyze any wallet across 6 chains — see DeFi positions, transaction history, health score, token balances, and risk assessment. Paste any address.",
    tags: ["6 Chains", "DeFi Scan", "Health Score"],
    badge: "🆕 Sprint 5",
  },
  {
    href: "/tools/exchange-fees",
    icon: "💱",
    color: "#9945FF",
    title: "Exchange Fee Comparison",
    description: "Compare fees across 15+ exchanges: spot, futures, withdrawals, fiat ramps. Enter your monthly volume to find the cheapest exchange for your tier.",
    tags: ["15+ Exchanges", "VIP Tiers", "Volume Calc"],
    badge: "🆕 Day 8",
  },
  {
    href: "/tools/bridge-aggregator",
    icon: "🌉",
    color: "#06b6d4",
    title: "Cross-Chain Bridge Aggregator",
    description: "Find the cheapest, fastest, and safest bridge for any cross-chain transfer. Compare 12+ bridges across 15 chains with security ratings and fee estimates.",
    tags: ["12+ Bridges", "15 Chains", "Security Scores"],
    badge: "🆕 Day 8",
  },
  {
    href: "/tools/token-unlocks",
    icon: "🔓",
    color: "#EF4444",
    title: "Token Unlock Tracker",
    description: "Track upcoming token unlocks and vesting schedules for 20+ tokens. Calendar view, impact estimator, and alert levels for supply-expanding events.",
    tags: ["20+ Tokens", "Calendar", "Impact Analysis"],
    badge: "🆕 Day 8",
  },
  {
    href: "/tools/liquidation-heatmap",
    icon: "🔥",
    color: "#EF4444",
    title: "Liquidation Heatmap",
    description: "Visualize liquidation clusters across price levels for 10 coins. See where leveraged positions will get wiped — the areas exchanges target for cascading liquidations.",
    tags: ["10 Coins", "Heatmap", "Leverage Data"],
    badge: "🆕 Day 9",
  },
  {
    href: "/tools/funding-rates",
    icon: "📊",
    color: "#6366F1",
    title: "Funding Rate Tracker",
    description: "Compare perpetual futures funding rates across 5 exchanges and 20 coins. Find arbitrage opportunities, track sentiment, and see which side is overleveraged.",
    tags: ["5 Exchanges", "20 Coins", "Arbitrage"],
    badge: "🆕 Day 9",
  },
  {
    href: "/tools/fear-greed-timeline",
    icon: "🧠",
    color: "#EAB308",
    title: "Fear & Greed Timeline",
    description: "Historical Fear & Greed index with BTC price correlation. Gauge, calendar heatmap, notable extremes, and contrarian signal analysis over 30–365 day windows.",
    tags: ["Gauge", "Calendar", "4 Timeframes"],
    badge: "🆕 Day 9",
  },
  {
    href: "/tools/market-heatmap",
    icon: "🗺️",
    color: "#22c55e",
    title: "Market Heatmap",
    description: "Visual treemap of the crypto market — 35+ coins sized by market cap, colored by performance. Filter by sector, change timeframes, and spot trends at a glance.",
    tags: ["35+ Coins", "11 Sectors", "4 Timeframes"],
    badge: "🆕 Day 10",
  },
  {
    href: "/tools/dominance-tracker",
    icon: "👑",
    color: "#F7931A",
    title: "BTC Dominance & Altseason Index",
    description: "Track Bitcoin dominance trends, detect altcoin seasons with a 0–100 index, and monitor capital rotation between 11 market sectors with flow analysis.",
    tags: ["Altseason Index", "Dominance Chart", "Sector Rotation"],
    badge: "🆕 Day 10",
  },
  {
    href: "/tools/volatility-scanner",
    icon: "🌡️",
    color: "#EF4444",
    title: "Crypto Volatility Scanner",
    description: "Scan 28 coins for realized volatility (1d/7d/30d/90d), ATR, Bollinger Band width, and daily range. Filter by risk level and sector. Find breakout setups.",
    tags: ["28 Coins", "ATR + BB Width", "Risk Levels"],
    badge: "🆕 Day 10",
  },
  {
    href: "/tools/vc-funding-tracker",
    icon: "💸",
    color: "#10b981",
    title: "VC Funding Tracker",
    description: "Track the latest crypto venture capital funding rounds. See which projects are raising, who's investing, and where the smart money is flowing in Q1 2026.",
    tags: ["VC Deals", "Investor Rankings", "Sector Analysis"],
    badge: "🆕 Sprint 13",
  },
  {
    href: "/tools/chain-comparison",
    icon: "⛓️",
    color: "#6366f1",
    title: "Blockchain Comparison Tool",
    description: "Compare L1 and L2 blockchains side-by-side. TPS, fees, TVL, finality, dApp counts, and strengths/weaknesses for Ethereum, Solana, Arbitrum, Base, and more.",
    tags: ["8 Chains", "Side-by-Side", "Leaderboard"],
    badge: "🆕 Sprint 13",
  },
  {
    href: "/tools/wallet-security-audit",
    icon: "🔐",
    color: "#f43f5e",
    title: "Wallet Security Audit",
    description: "Interactive security checklist to audit your crypto wallet setup. Get a personalized security score, identify vulnerabilities, and receive actionable recommendations.",
    tags: ["17 Checks", "Security Score", "Recommendations"],
    badge: "🆕 Sprint 13",
  },
];

const COMING_SOON = [
  { icon: "📰", title: "Crypto News Feed", description: "Aggregated news from top crypto sources, personalized to your holdings.", color: "#06b6d4" },
  { icon: "🖼️", title: "NFT Portfolio Tracker", description: "Track your NFT collections, floor prices, and estimated portfolio value across multiple chains.", color: "#f0883e" },
  { icon: "📊", title: "On-Chain Analytics Dashboard", description: "Deep on-chain metrics: active addresses, NVT ratio, exchange flows, miner revenue, and more.", color: "#8B5CF6" },
];

export default function ToolsPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--color-bg)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px 80px" }}>
        <Breadcrumb items={[{ label: "Tools", href: "/tools" }]} />

        {/* Header */}
        <div style={{ textAlign: "center", paddingBottom: 40, paddingTop: 20 }}>
          <div style={{ display: "inline-block", padding: "4px 14px", background: "#6366f120", border: "1px solid #6366f140", borderRadius: 20, fontSize: 12, color: "#818cf8", fontWeight: 600, marginBottom: 16 }}>
            🛠️ 33 Free Crypto Tools
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 900, color: "var(--color-text)", marginBottom: 12 }}>
            Your Crypto Toolkit
          </h1>
          <p style={{ color: "var(--color-text-secondary)", fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Professional-grade crypto tools, completely free. No account required for most tools.
          </p>
        </div>

        {/* Main tools grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))", gap: 20, marginBottom: 60 }}>
          {TOOLS.map(tool => (
            <Link key={tool.href} href={tool.href} style={{ textDecoration: "none" }}>
              <div style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: 14,
                padding: 24,
                height: "100%",
                cursor: "pointer",
                transition: "transform 0.2s, border-color 0.2s",
                borderTop: `4px solid ${tool.color}`,
                position: "relative",
                overflow: "hidden",
              }}>
                {tool.badge && (
                  <div style={{ position: "absolute", top: 14, right: 14, fontSize: 10, padding: "2px 8px", background: `${tool.color}20`, border: `1px solid ${tool.color}40`, borderRadius: 10, color: tool.color, fontWeight: 700 }}>
                    {tool.badge}
                  </div>
                )}
                <div style={{ fontSize: 40, marginBottom: 14 }}>{tool.icon}</div>
                <h2 style={{ fontSize: 18, fontWeight: 800, color: "var(--color-text)", marginBottom: 8 }}>{tool.title}</h2>
                <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: 16 }}>{tool.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                  {tool.tags.map(tag => (
                    <span key={tag} style={{ fontSize: 10, padding: "2px 8px", borderRadius: 5, background: `${tool.color}15`, color: tool.color, fontWeight: 700, border: `1px solid ${tool.color}30` }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6, color: tool.color, fontSize: 13, fontWeight: 700 }}>
                  Open Tool <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Coming soon */}
        <div style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--color-text)", marginBottom: 6 }}>🔜 Coming Soon</h2>
          <p style={{ fontSize: 13, color: "var(--color-text-secondary)", marginBottom: 20 }}>More tools being built by our team. Check back soon.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 240px), 1fr))", gap: 14 }}>
          {COMING_SOON.map(t => (
            <div key={t.title} style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: 12, padding: 18, opacity: 0.7 }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>{t.icon}</div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--color-text)", marginBottom: 6 }}>{t.title}</h3>
              <p style={{ fontSize: 12, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{t.description}</p>
              <div style={{ marginTop: 10, fontSize: 11, color: "var(--color-text-secondary)", fontStyle: "italic" }}>Coming soon…</div>
            </div>
          ))}
        </div>
      </div>
      <RelatedContent category="tools" currentSlug="/tools" />
    </div>
  );
}
