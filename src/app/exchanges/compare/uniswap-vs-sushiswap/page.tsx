import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Uniswap vs SushiSwap (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Compare Uniswap vs SushiSwap DEXs. Fees, liquidity, chains, governance, and which decentralized exchange is better for swapping tokens.",
};

export default function UniswapVsSushiSwap() {
  return (
    <LearnPageLayout
      title="Uniswap vs SushiSwap"
      categoryName="Exchanges"
      categorySlug="exchanges"
      readTime="8 min read"
      intro="Uniswap and SushiSwap are two of the most well-known decentralized exchanges, sharing a common origin but diverging significantly in their development. Uniswap is the largest DEX by volume and pioneered the AMM model, while SushiSwap forked from Uniswap and built additional DeFi features. This comparison examines their current state and differences."
      toc={[
        { id: "overview", title: "Platform Overview", level: 2 },
        { id: "fees", title: "Fee Comparison", level: 2 },
        { id: "liquidity", title: "Liquidity and Volume", level: 2 },
        { id: "chains", title: "Supported Chains", level: 2 },
        { id: "features", title: "Features", level: 2 },
        { id: "verdict", title: "Which Should You Choose?", level: 2 },
      ]}
      faqs={[
        { question: "Is SushiSwap a copy of Uniswap?", answer: "SushiSwap originally forked Uniswap's code but has since differentiated with unique features like yield farming with SUSHI rewards, a lending platform, and cross-chain expansion." },
        { question: "Which has more liquidity?", answer: "Uniswap has significantly more liquidity and trading volume, typically 5-10x more than SushiSwap. This results in better prices and lower slippage for most trades." },
        { question: "Which has lower fees?", answer: "Both charge 0.3% for standard pools. Uniswap v3 offers variable fee tiers (0.01%, 0.05%, 0.3%, 1%). Actual costs depend on the specific pool and token pair." },
        { question: "Do I need KYC?", answer: "Neither requires KYC. Both are fully decentralized and can be accessed with just a wallet. However, Uniswap's frontend has blocked certain tokens for compliance reasons." },
      ]}
      relatedArticles={[
        { title: "PancakeSwap vs Uniswap", href: "/exchanges/compare/pancakeswap-vs-uniswap", category: "Exchanges" },
        { title: "Curve vs Uniswap", href: "/exchanges/compare/curve-vs-uniswap", category: "Exchanges" },
        { title: "DEX vs CEX", href: "/exchanges/learn/decentralized-vs-centralized", category: "Exchanges" },
      ]}
    >
      <section id="overview">
        <h2>Platform Overview</h2>
        <p>Uniswap, launched in 2018, pioneered the automated market maker (AMM) model and remains the largest decentralized exchange by volume. The platform has evolved through multiple versions, with Uniswap v3 introducing concentrated liquidity and v4 bringing hooks for customizable pools.</p>
        <p>SushiSwap launched in 2020 as a fork of Uniswap v2, famously offering SUSHI token rewards to attract liquidity. Since then, it has differentiated by adding features like lending, cross-chain swaps, and a more community-governed approach to development.</p>
      </section>

      <section id="fees">
        <h2>Fee Comparison</h2>
        <p>Uniswap v3 offers multiple fee tiers: 0.01% for stablecoins, 0.05% for correlated pairs, 0.3% for standard pairs, and 1% for exotic pairs. The Uniswap protocol fee switch can direct a portion of fees to UNI holders if activated by governance.</p>
        <p>SushiSwap charges a 0.3% swap fee, with 0.25% going to liquidity providers and 0.05% to SUSHI stakers through the SushiBar. This fee-sharing mechanism directly rewards SUSHI token holders.</p>
      </section>

      <section id="liquidity">
        <h2>Liquidity and Volume</h2>
        <p>Uniswap dominates in liquidity and volume, typically processing billions in daily trades. The concentrated liquidity model of v3 enables capital-efficient market making. Deep liquidity means better prices and lower slippage for traders.</p>
        <p>SushiSwap has lower liquidity and volume, which can result in higher slippage for larger trades. However, SushiSwap's liquidity incentives through SUSHI rewards attract providers to pools that might otherwise be underserved.</p>
      </section>

      <section id="chains">
        <h2>Supported Chains</h2>
        <p>Uniswap is deployed on Ethereum, Polygon, Arbitrum, Optimism, Base, BNB Chain, Avalanche, and several other networks. The multi-chain deployment ensures accessibility across the most popular EVM ecosystems.</p>
        <p>SushiSwap has been deployed on 30+ chains, offering broader multi-chain coverage than Uniswap. This extensive deployment allows trading on many niche chains where Uniswap is not available.</p>
      </section>

      <section id="features">
        <h2>Features</h2>
        <p>Uniswap focuses on being the best swap platform. Concentrated liquidity (v3), customizable hooks (v4), and a clean interface define the user experience. The Uniswap wallet app provides a mobile-first DeFi experience.</p>
        <p>SushiSwap offers a broader DeFi suite beyond swapping: Kashi lending, MISO launchpad, cross-chain swaps via SushiXSwap, and SUSHI staking for fee revenue. The multi-product approach provides more utility within one ecosystem.</p>
      </section>

      <section id="verdict">
        <h2>Which Should You Choose?</h2>
        <p>Choose Uniswap for the best swap experience with deepest liquidity, lowest slippage, and the most innovative AMM technology. For most token swaps, Uniswap provides the best execution price.</p>
        <p>Choose SushiSwap if you want to participate in the broader DeFi ecosystem with staking rewards, lending, and wider chain support. SushiSwap rewards its community more directly through SUSHI fee sharing.</p>
      </section>
    </LearnPageLayout>
  );
}
