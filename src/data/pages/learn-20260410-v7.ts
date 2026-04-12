import { PageData } from "@/lib/types";

export const cryptoPortfolioConstructionGuidePage: PageData = {
  slug: "/learn/crypto-portfolio-construction-position-sizing-guide-2026",
  title: "Crypto Portfolio Construction & Position Sizing Guide 2026",
  description: "Master crypto portfolio construction with Kelly criterion, risk parity, correlation analysis, and position sizing strategies. Learn allocation frameworks, rebalancing methods, and advanced portfolio theory for crypto assets.",
  category: "learn",
  subcategory: "trading",
  tags: [
    "portfolio construction",
    "position sizing",
    "Kelly criterion",
    "risk parity",
    "crypto portfolio",
    "risk management",
    "rebalancing",
    "asset allocation",
    "portfolio theory",
    "volatility",
    "correlation analysis",
    "BTC allocation",
    "ETH allocation",
    "altcoin diversification"
  ],
  publishedAt: "2026-04-10T00:00:00Z",
  updatedAt: "2026-04-10T00:00:00Z",
  difficulty: "intermediate",
  readingTime: 14,
  wordCount: 2700,
  author: "degen0x",
  status: "queued",
  seo: {
    targetKeyword: "crypto portfolio construction position sizing guide 2026",
    secondaryKeywords: [
      "crypto portfolio allocation",
      "position sizing crypto",
      "Kelly criterion crypto",
      "risk parity crypto portfolio",
      "portfolio rebalancing strategies",
      "crypto asset allocation",
      "portfolio diversification crypto",
      "BTC ETH allocation strategy",
      "cryptocurrency portfolio theory",
      "volatility adjusted sizing"
    ],
    schemas: ["Article", "FAQPage"],
    internalLinks: [
      "/learn/crypto-dca-dollar-cost-averaging-strategy-guide-2026",
      "/learn/crypto-portfolio-rebalancing-guide-2026",
      "/learn/crypto-passive-income-complete-guide-2026",
      "/learn/crypto-staking-guide-2026",
      "/learn/crypto-tax-guide-2026"
    ]
  },
  toc: [
    "Why Portfolio Construction Matters in Crypto",
    "Core Allocation Frameworks",
    "The Kelly Criterion for Crypto",
    "Risk Parity Approach",
    "Correlation Analysis",
    "Position Sizing Methods",
    "Rebalancing Strategies",
    "Common Mistakes",
    "FAQ"
  ],
  faqs: [
    {
      q: "What is the Kelly Criterion and why use it in crypto?",
      a: "The Kelly Criterion is a mathematical formula (f* = (bp - q) / b) that calculates the optimal fraction of your portfolio to risk on each position. It maximizes long-term compound growth. However, full Kelly is too aggressive for crypto; most traders use Quarter-Kelly (dividing the result by 4) to reduce volatility while maintaining growth. If you have a 30% win rate, 2:1 reward-to-risk, and use Quarter-Kelly, a 30% BTC drop only impacts your portfolio by 7.5%."
    },
    {
      q: "What allocation framework should I use?",
      a: "Choose based on risk tolerance. Conservative: 60% BTC, 20% ETH, 10% alts, 10% stables (tolerates 30-40% drawdowns). Moderate: 40% BTC, 25% ETH, 25% alts, 10% stables (tolerates 50-60% drawdowns). Aggressive: 30% BTC, 25% ETH, 35% alts, 10% stables (tolerates 70-80% drawdowns). These are starting templates; adjust based on your market outlook and time horizon."
    },
    {
      q: "How often should I rebalance my portfolio?",
      a: "Calendar-based rebalancing (monthly, quarterly, or annually) is simpler and more tax-efficient than threshold-based. For long-term holders, quarterly rebalancing strikes a balance. Threshold-based (rebalance when any position drifts >5-10% from target) works if you're actively monitoring. Consider holding >1 year before rebalancing for favorable long-term capital gains tax treatment."
    },
    {
      q: "Why does correlation matter in a crypto portfolio?",
      a: "Correlation shows how assets move together. BTC-ETH correlation is ~0.85 (move in sync). During crashes, correlation spikes to 1.0, eliminating diversification benefits. A portfolio of 50% BTC + 50% highly correlated alts (0.95 correlation) is riskier than 100% BTC due to selection risk. Add truly uncorrelated assets (stablecoins, RWA tokens) for meaningful diversification."
    },
    {
      q: "What is risk parity and when should I use it?",
      a: "Risk parity allocates positions so each contributes equal risk (not equal capital) to the portfolio. If BTC has 45% volatility and ETH has 60%, risk parity weights them 57% and 43% respectively. This works well in stable markets but underperforms during single-asset rallies (like BTC 2020-2021). For most crypto investors, simpler allocation frameworks are practical enough."
    },
    {
      q: "Should I diversify heavily into altcoins or stick with BTC-ETH?",
      a: "A core BTC-ETH portfolio (60% BTC, 40% ETH) provides excellent risk-adjusted returns with minimal selection risk. Adding alts introduces alpha potential but rug-pull risk; cap them at 25-30% and focus on $1B+ market-cap projects. Many successful long-term investors find BTC-ETH-only sufficient. Diversification into alts only helps if they have low correlation (they usually don't)."
    }
  ]
};
