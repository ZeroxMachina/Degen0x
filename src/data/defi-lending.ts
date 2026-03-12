import { Product, ComparisonItem, FAQ } from "@/lib/types";

export const DEFI_LENDING_PRODUCTS: Product[] = [
  {
    name: "Aave",
    slug: "aave",
    rating: 4.8,
    description:
      "Aave is the largest decentralized lending protocol by TVL, offering variable and stable rate borrowing across Ethereum, Polygon, Arbitrum, Optimism, and multiple other chains with flash loan capabilities.",
    pros: [
      "Largest TVL and deepest liquidity",
      "Multi-chain deployment (10+ chains)",
      "Flash loans and rate switching",
      "Proven security with extensive audits",
    ],
    cons: [
      "Variable rates can be volatile",
      "Gas fees on Ethereum mainnet",
      "Complex interface for beginners",
    ],
    fees: "Variable (supply/borrow spread)",
    bestFor: "Most DeFi users",
    affiliateUrl: "https://degen0x.com/go/aave",
    category: "defi-lending",
    featured: true,
  },
  {
    name: "Compound",
    slug: "compound",
    rating: 4.6,
    description:
      "Compound is a pioneering DeFi lending protocol that introduced the cToken model for earning interest, now in its V3 iteration with improved capital efficiency and risk management features.",
    pros: [
      "Pioneer in DeFi lending",
      "Simple, clean interface",
      "Battle-tested smart contracts",
      "COMP governance token rewards",
    ],
    cons: [
      "Fewer supported assets than Aave",
      "Limited to Ethereum and select L2s",
      "Lower yields on some assets",
    ],
    fees: "Variable (supply/borrow spread)",
    bestFor: "Conservative DeFi users",
    affiliateUrl: "https://degen0x.com/go/compound",
    category: "defi-lending",
    featured: true,
  },
  {
    name: "Morpho",
    slug: "morpho",
    rating: 4.7,
    description:
      "Morpho optimizes lending rates by peer-to-peer matching lenders and borrowers on top of Aave and Compound, offering improved rates for both sides while maintaining the same liquidity guarantees.",
    pros: [
      "Better rates than underlying protocols",
      "Same security as Aave/Compound",
      "Peer-to-peer rate improvement",
      "No additional smart contract risk",
    ],
    cons: [
      "Dependent on underlying protocols",
      "Lower brand recognition",
      "Limited to protocols it integrates with",
    ],
    fees: "Improved spread vs base protocols",
    bestFor: "Rate optimization seekers",
    affiliateUrl: "https://degen0x.com/go/morpho",
    category: "defi-lending",
  },
  {
    name: "Spark",
    slug: "spark",
    rating: 4.5,
    description:
      "Spark (formerly Spark Protocol) is the lending arm of MakerDAO/Sky ecosystem, allowing users to borrow DAI at the Dai Savings Rate while using a wide range of crypto collateral types.",
    pros: [
      "Borrow DAI at favorable rates",
      "Integrated with MakerDAO ecosystem",
      "Dai Savings Rate for depositors",
      "Governance-aligned incentives",
    ],
    cons: [
      "Limited to DAI borrowing primarily",
      "Smaller market compared to Aave",
      "Dependent on MakerDAO governance",
    ],
    fees: "DAI borrow rate (governance set)",
    bestFor: "DAI-focused users",
    affiliateUrl: "https://degen0x.com/go/spark",
    category: "defi-lending",
  },
  {
    name: "Yearn Finance",
    slug: "yearn",
    rating: 4.5,
    description:
      "Yearn Finance is the premier yield aggregator that automatically moves funds between lending protocols, liquidity pools, and farming strategies to maximize returns for depositors.",
    pros: [
      "Automated yield optimization",
      "Multiple vault strategies",
      "Gas-efficient auto-compounding",
      "Battle-tested vault architecture",
    ],
    cons: [
      "Performance fees on profits",
      "Strategy risks beyond simple lending",
      "Can be complex to understand strategies",
    ],
    fees: "2% management + 20% performance",
    bestFor: "Passive yield seekers",
    affiliateUrl: "https://degen0x.com/go/yearn",
    category: "defi-lending",
    featured: true,
  },
  {
    name: "Curve Finance",
    slug: "curve",
    rating: 4.6,
    description:
      "Curve Finance is the leading DEX optimized for stablecoin and pegged asset swaps with deep liquidity pools, offering liquidity providers trading fees plus CRV token rewards.",
    pros: [
      "Lowest slippage for stablecoin swaps",
      "Deep liquidity pools",
      "CRV and gauge rewards",
      "Efficient capital utilization",
    ],
    cons: [
      "Complex gauge and voting system",
      "UI can be intimidating",
      "Impermanent loss on volatile pools",
    ],
    fees: "0.04% swap fee to LPs",
    bestFor: "Stablecoin liquidity providers",
    affiliateUrl: "https://degen0x.com/go/curve",
    category: "defi-lending",
  },
  {
    name: "Lido",
    slug: "lido",
    rating: 4.7,
    description:
      "Lido is the largest liquid staking protocol, allowing users to stake ETH and receive stETH tokens that earn staking rewards while remaining liquid for use across DeFi protocols.",
    pros: [
      "Largest liquid staking by TVL",
      "No minimum staking requirement",
      "stETH widely accepted in DeFi",
      "Consistent staking yields",
    ],
    cons: [
      "10% fee on staking rewards",
      "Centralization concerns",
      "stETH may depeg temporarily",
    ],
    fees: "10% of staking rewards",
    bestFor: "ETH stakers wanting liquidity",
    affiliateUrl: "https://degen0x.com/go/lido",
    category: "defi-lending",
    featured: true,
  },
];

export const DEFI_COMPARISON_ITEMS: ComparisonItem[] = DEFI_LENDING_PRODUCTS.map((p) => ({
  name: p.name,
  slug: p.slug,
  rating: p.rating,
  affiliateUrl: p.affiliateUrl,
  features: {
    "Type": p.slug === "lido" ? "Liquid Staking" : p.slug === "yearn" ? "Yield Aggregator" : p.slug === "curve" ? "DEX / LP" : "Lending Protocol",
    "TVL": p.slug === "aave" ? "$15B+" : p.slug === "lido" ? "$20B+" : p.slug === "compound" ? "$3B+" : p.slug === "curve" ? "$5B+" : p.slug === "morpho" ? "$2B+" : p.slug === "spark" ? "$4B+" : "$500M+",
    "Chains": p.slug === "aave" ? "10+" : p.slug === "curve" ? "8+" : p.slug === "compound" ? "3" : p.slug === "lido" ? "1 (Ethereum)" : "1-3",
    "Governance Token": p.slug === "aave" ? "AAVE" : p.slug === "compound" ? "COMP" : p.slug === "curve" ? "CRV" : p.slug === "lido" ? "LDO" : p.slug === "yearn" ? "YFI" : p.slug === "morpho" ? "MORPHO" : "N/A",
    "Audit Status": "Multiple Audits",
    "Min Deposit": "No minimum",
    "Yield Type": p.slug === "lido" ? "Staking APR" : p.slug === "yearn" ? "Auto-optimized APY" : p.slug === "curve" ? "LP fees + CRV" : "Supply APY",
  },
}));

export const DEFI_COMPARISON_FEATURES = [
  "Type",
  "TVL",
  "Chains",
  "Governance Token",
  "Audit Status",
  "Min Deposit",
  "Yield Type",
];

export const DEFI_FAQS: FAQ[] = [
  {
    question: "What is DeFi lending?",
    answer:
      "DeFi lending allows you to lend or borrow cryptocurrency without intermediaries using smart contracts on blockchain networks. Lenders deposit assets into liquidity pools and earn interest, while borrowers provide collateral to take out loans. Rates are determined algorithmically based on supply and demand.",
  },
  {
    question: "Is DeFi lending safe?",
    answer:
      "DeFi lending carries smart contract risk, liquidation risk, and market risk. Top protocols like Aave and Compound have undergone extensive security audits and have operated without major exploits for years. However, all DeFi involves risk. Only deposit what you can afford to lose and stick to well-audited protocols.",
  },
  {
    question: "What is the best DeFi lending protocol?",
    answer:
      "Aave is the best overall DeFi lending protocol due to its massive TVL, multi-chain support, and extensive asset coverage. Compound is ideal for conservative users, while Morpho offers optimized rates on top of existing protocols.",
  },
  {
    question: "What is impermanent loss?",
    answer:
      "Impermanent loss occurs when you provide liquidity to an AMM pool and the price ratio of your deposited tokens changes compared to when you deposited them. The greater the price divergence, the more impermanent loss you experience. It becomes permanent loss only when you withdraw your liquidity.",
  },
  {
    question: "What is the difference between APR and APY?",
    answer:
      "APR (Annual Percentage Rate) is the simple interest rate without compounding. APY (Annual Percentage Yield) includes the effect of compound interest. In DeFi, APY is almost always higher than APR because most protocols auto-compound rewards. A 10% APR with daily compounding equals approximately 10.52% APY.",
  },
  {
    question: "How do I start earning yield in DeFi?",
    answer:
      "To start earning yield: 1) Set up a Web3 wallet like MetaMask. 2) Fund it with ETH for gas and the assets you want to lend. 3) Connect to a lending protocol like Aave. 4) Deposit your assets into the supply pool. 5) You will immediately start earning interest that accrues to your account.",
  },
];
