import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Curve vs Uniswap (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Compare Curve vs Uniswap DEXs. Stablecoin swaps, fees, liquidity, and which decentralized exchange is better for different trading needs.",
};

export default function CurveVsUniswap() {
  return (
    <LearnPageLayout
      title="Curve vs Uniswap"
      categoryName="Exchanges"
      categorySlug="exchanges"
      readTime="8 min read"
      intro="Curve and Uniswap are both foundational DeFi protocols but serve different primary use cases. Curve specializes in efficient stablecoin and similar-asset swaps with minimal slippage, while Uniswap is a general-purpose DEX handling all types of token pairs. This comparison examines their strengths and ideal use cases."
      toc={[
        { id: "overview", title: "Platform Overview", level: 2 },
        { id: "specializations", title: "Specializations", level: 2 },
        { id: "fees", title: "Fee Comparison", level: 2 },
        { id: "governance", title: "Governance and Tokenomics", level: 2 },
        { id: "liquidity-provision", title: "Liquidity Provision", level: 2 },
        { id: "verdict", title: "Which Should You Choose?", level: 2 },
      ]}
      faqs={[
        { question: "Which is better for stablecoins?", answer: "Curve is significantly better for stablecoin swaps, offering lower slippage and fees for pairs like USDC/USDT/DAI. Its StableSwap algorithm is specifically designed for assets that should trade near 1:1." },
        { question: "Which has more overall volume?", answer: "Uniswap typically has higher total trading volume. However, Curve handles a significant share of stablecoin swap volume, dominating that specific category." },
        { question: "What is the Curve Wars?", answer: "The Curve Wars refers to protocols competing to accumulate veCRV tokens to direct CRV emissions to their pools, thereby attracting more liquidity. It has become a central dynamic in DeFi governance." },
        { question: "Can Curve handle volatile assets?", answer: "Yes, Curve v2 introduced pools for volatile asset pairs using a different algorithm. However, Uniswap generally handles volatile pairs better with its concentrated liquidity model." },
      ]}
      relatedArticles={[
        { title: "Uniswap vs SushiSwap", href: "/exchanges/compare/uniswap-vs-sushiswap", category: "Exchanges" },
        { title: "PancakeSwap vs Uniswap", href: "/exchanges/compare/pancakeswap-vs-uniswap", category: "Exchanges" },
        { title: "DEX vs CEX", href: "/exchanges/learn/decentralized-vs-centralized", category: "Exchanges" },
      ]}
    >
      <section id="overview">
        <h2>Platform Overview</h2>
        <p>Curve Finance, launched in 2020, pioneered the StableSwap algorithm optimized for trading assets of similar value with minimal slippage. It has become the backbone of DeFi stablecoin liquidity and expanded to volatile pairs with Curve v2. Curve is deployed across Ethereum and multiple L2s.</p>
        <p>Uniswap, launched in 2018, is the largest DEX by volume and the pioneer of the AMM model. With concentrated liquidity in v3 and customizable hooks in v4, Uniswap handles all types of token pairs. It is the default DEX for general-purpose token swapping.</p>
      </section>

      <section id="specializations">
        <h2>Specializations</h2>
        <p>Curve's StableSwap algorithm enables extremely efficient swaps between similarly-priced assets. Swapping USDC to USDT on Curve incurs minimal slippage even for large amounts. This specialization makes Curve indispensable for DeFi protocols that need to move between stablecoins or wrapped assets.</p>
        <p>Uniswap excels at general-purpose swaps across any token pair. Concentrated liquidity allows LPs to focus their capital around current prices, creating deeper liquidity for active trading ranges. This makes Uniswap better for volatile pairs where prices move significantly.</p>
      </section>

      <section id="fees">
        <h2>Fee Comparison</h2>
        <p>Curve charges very low swap fees, typically 0.04% for stablecoin pools. Volatile pools may charge higher fees. The low fee structure is possible because the StableSwap algorithm reduces impermanent loss for LPs, allowing them to accept lower compensation.</p>
        <p>Uniswap's fee tiers range from 0.01% to 1%, with 0.3% being the standard. Stablecoin pairs typically use the 0.01% or 0.05% tier. For stablecoin swaps specifically, Curve often offers lower total costs.</p>
      </section>

      <section id="governance">
        <h2>Governance and Tokenomics</h2>
        <p>CRV tokenomics center on vote-locking: users lock CRV for veCRV to earn boosted rewards and direct emissions to specific pools. This mechanism has created the Curve Wars ecosystem where protocols compete for veCRV influence. Convex Finance and others have built entire businesses around this dynamic.</p>
        <p>UNI governance is simpler: token holders vote on protocol proposals. There is no lock-up mechanism. The protocol fee switch, if activated, could direct trading fees to UNI holders. The governance structure is less complex but also less deeply integrated into the DeFi ecosystem.</p>
      </section>

      <section id="liquidity-provision">
        <h2>Liquidity Provision</h2>
        <p>Curve LP positions experience significantly lower impermanent loss for stablecoin pools due to the StableSwap algorithm. LPs earn swap fees and potentially CRV rewards. The veCRV boost mechanism can substantially increase LP returns.</p>
        <p>Uniswap v3 concentrated liquidity requires more active management but can generate higher fee income per dollar deployed. Impermanent loss is higher for volatile pairs. The flexibility of concentrated liquidity positions allows sophisticated LP strategies.</p>
      </section>

      <section id="verdict">
        <h2>Which Should You Choose?</h2>
        <p>Use Curve for stablecoin swaps, similar-asset exchanges, and if you want to participate in the Curve Wars governance ecosystem. Curve provides unmatched efficiency for like-valued asset trading and deep integration with the broader DeFi landscape.</p>
        <p>Use Uniswap for general-purpose token swaps, volatile pairs, and if you want the deepest overall liquidity. Uniswap is the default choice for any non-stablecoin trade and provides the broadest token coverage across multiple chains.</p>
      </section>
    </LearnPageLayout>
  );
}
