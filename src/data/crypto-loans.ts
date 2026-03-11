import { Product, ComparisonItem, FAQ } from "@/lib/types";

export const CRYPTO_LOAN_PRODUCTS: Product[] = [
  {
    name: "Nexo",
    slug: "nexo",
    rating: 4.7,
    description:
      "Nexo is the leading CeFi crypto lending platform offering instant crypto-backed loans with rates starting at 0% APR for loyal users, supporting 60+ cryptocurrencies as collateral with flexible repayment terms.",
    pros: [
      "Rates as low as 0% APR for top-tier users",
      "No monthly repayments required",
      "60+ supported collateral assets",
      "Instant loan approval and funding",
    ],
    cons: [
      "Best rates require NEXO token holdings",
      "CeFi counterparty risk",
      "Not available in all US states",
    ],
    fees: "From 0% APR",
    bestFor: "CeFi borrowers seeking low rates",
    affiliateUrl: "https://cryptodegen.com/go/nexo",
    category: "crypto-loans",
    featured: true,
  },
  {
    name: "Aave",
    slug: "aave-loans",
    rating: 4.8,
    description:
      "Aave enables decentralized borrowing against crypto collateral with variable and stable rate options across multiple chains. As the largest DeFi lending protocol, it offers deep liquidity and innovative features like flash loans.",
    pros: [
      "Fully decentralized, no KYC required",
      "Multi-chain support (10+ networks)",
      "Flash loan capabilities",
      "Variable and stable rate options",
    ],
    cons: [
      "Requires technical knowledge",
      "Gas costs on Ethereum mainnet",
      "Liquidation risk in volatile markets",
    ],
    fees: "Variable borrow rates",
    bestFor: "DeFi-native borrowers",
    affiliateUrl: "https://cryptodegen.com/go/aave",
    category: "crypto-loans",
    featured: true,
  },
  {
    name: "Compound",
    slug: "compound-loans",
    rating: 4.5,
    description:
      "Compound allows permissionless borrowing against crypto collateral through its battle-tested smart contracts. The V3 upgrade introduced single-asset borrowing markets with improved capital efficiency and risk isolation.",
    pros: [
      "Battle-tested protocol since 2018",
      "Simple, intuitive borrowing",
      "COMP token rewards for borrowers",
      "Isolated risk per market in V3",
    ],
    cons: [
      "Fewer supported assets than Aave",
      "Higher borrow rates on some assets",
      "Limited chain availability",
    ],
    fees: "Variable borrow rates",
    bestFor: "Conservative DeFi borrowers",
    affiliateUrl: "https://cryptodegen.com/go/compound",
    category: "crypto-loans",
  },
  {
    name: "MakerDAO",
    slug: "makerdao",
    rating: 4.6,
    description:
      "MakerDAO (now Sky) is the protocol behind DAI stablecoin, allowing users to open Vaults and borrow DAI against crypto collateral. It pioneered the concept of decentralized stablecoin lending with over-collateralized positions.",
    pros: [
      "Borrow DAI stablecoin directly",
      "Multiple collateral types accepted",
      "Pioneer in decentralized lending",
      "Governance-controlled stability fees",
    ],
    cons: [
      "Can only borrow DAI",
      "Higher collateralization ratios required",
      "Complex vault management",
    ],
    fees: "Stability fee (variable)",
    bestFor: "DAI stablecoin borrowers",
    affiliateUrl: "https://cryptodegen.com/go/makerdao",
    category: "crypto-loans",
    featured: true,
  },
  {
    name: "Celsius",
    slug: "celsius",
    rating: 2.0,
    description:
      "Celsius was a major CeFi lending platform that filed for bankruptcy in July 2022 after freezing customer withdrawals. It serves as a cautionary tale about counterparty risk in centralized crypto lending. The platform is no longer operational for new loans.",
    pros: [
      "Previously offered competitive rates",
      "Had a simple mobile app interface",
      "Supported many crypto assets",
      "No minimum loan amounts",
    ],
    cons: [
      "Filed for bankruptcy in 2022",
      "Frozen customer funds",
      "No longer operational",
      "Massive user losses",
    ],
    fees: "N/A (defunct)",
    bestFor: "Historical reference only",
    affiliateUrl: "https://cryptodegen.com/go/celsius",
    category: "crypto-loans",
  },
];

export const LOAN_COMPARISON_ITEMS: ComparisonItem[] = CRYPTO_LOAN_PRODUCTS.filter(
  (p) => p.slug !== "celsius"
).map((p) => ({
  name: p.name,
  slug: p.slug,
  rating: p.rating,
  affiliateUrl: p.affiliateUrl,
  features: {
    "Type": p.slug === "nexo" ? "CeFi" : "DeFi",
    "Min LTV": p.slug === "nexo" ? "20%" : p.slug === "makerdao" ? "Varies by vault" : "Variable",
    "Max LTV": p.slug === "nexo" ? "90%" : p.slug === "makerdao" ? "67%" : "80%",
    "Interest Rates": p.slug === "nexo" ? "0-13.9% APR" : "Variable (market-driven)",
    "KYC Required": p.slug === "nexo" ? "Yes" : "No",
    "Supported Collateral": p.slug === "nexo" ? "60+" : p.slug === "aave-loans" ? "100+" : p.slug === "compound-loans" ? "20+" : "30+",
    "Flash Loans": p.slug === "aave-loans" ? "Yes" : "No",
    "Loan Currency": p.slug === "makerdao" ? "DAI only" : "Multiple",
  },
}));

export const LOAN_COMPARISON_FEATURES = [
  "Type",
  "Min LTV",
  "Max LTV",
  "Interest Rates",
  "KYC Required",
  "Supported Collateral",
  "Flash Loans",
  "Loan Currency",
];

export const LOAN_FAQS: FAQ[] = [
  {
    question: "What is a crypto-backed loan?",
    answer:
      "A crypto-backed loan allows you to borrow money (fiat or stablecoins) by using your cryptocurrency as collateral. You deposit crypto into a lending platform, and in return you receive a loan. You keep ownership of your crypto and get it back when you repay the loan. If the value of your collateral drops below a threshold, you may be liquidated.",
  },
  {
    question: "What is LTV ratio in crypto lending?",
    answer:
      "LTV (Loan-to-Value) ratio is the percentage of your collateral value that you can borrow. For example, if you deposit $10,000 in Bitcoin and have a 50% LTV, you can borrow up to $5,000. Lower LTV ratios are safer because they provide more buffer against liquidation during price drops.",
  },
  {
    question: "Can I get a crypto loan without credit check?",
    answer:
      "Yes. DeFi lending protocols like Aave, Compound, and MakerDAO do not require credit checks or KYC. You simply deposit collateral and borrow against it. Your creditworthiness is determined entirely by your collateral value, not your credit score.",
  },
  {
    question: "What happens if my crypto collateral drops in value?",
    answer:
      "If your collateral value drops below the liquidation threshold (varies by platform and asset), your position may be partially or fully liquidated. The protocol sells your collateral to repay the loan plus a liquidation penalty. To avoid liquidation, monitor your position and add collateral when needed.",
  },
  {
    question: "Are crypto loans taxable?",
    answer:
      "In most jurisdictions, borrowing against crypto is not a taxable event because you are not selling your assets. However, if your position is liquidated, that is treated as a sale and subject to capital gains tax. Interest paid on crypto loans may be tax deductible in some cases. Consult a tax professional for your specific situation.",
  },
  {
    question: "What is the difference between CeFi and DeFi crypto loans?",
    answer:
      "CeFi (Centralized Finance) loans go through a company like Nexo that manages your collateral and requires KYC. DeFi loans use smart contracts on the blockchain with no intermediary and no KYC requirement. CeFi is easier to use but carries counterparty risk. DeFi is more permissionless but requires technical knowledge and carries smart contract risk.",
  },
];
