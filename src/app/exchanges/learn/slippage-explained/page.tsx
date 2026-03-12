import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Slippage Explained: What It Is and How to Minimize It (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Understand what slippage is in crypto trading, why it happens, and strategies to minimize its impact on your trades.",
};

export default function SlippageExplainedPage() {
  return (
    <LearnPageLayout title="Slippage Explained: What It Is and How to Minimize It" categoryName="Crypto Exchanges" categorySlug="exchanges" readTime="7 min"
      intro="Slippage is the difference between the expected price of a trade and the actual execution price. It is an unavoidable reality of trading that can significantly impact your returns, especially on large orders or illiquid markets. Understanding and managing slippage is essential for effective trading."
      toc={[
        { id: "what-is-slippage", title: "what-is-slippage", level: 2 },
        { id: "what-is-slippage", title: "What Is Slippage", level: 2 },
        { id: "causes", title: "causes", level: 2 },
        { id: "what-causes-slippage", title: "What Causes Slippage", level: 2 },
        { id: "cex-vs-dex", title: "cex-vs-dex", level: 2 },
        { id: "slippage-on-cex-vs-dex", title: "Slippage on CEX vs DEX", level: 2 },
        { id: "minimizing", title: "minimizing", level: 2 },
        { id: "how-to-minimize-slippage", title: "How to Minimize Slippage", level: 2 },
        { id: "slippage-tolerance", title: "slippage-tolerance", level: 2 },
        { id: "setting-slippage-tolerance-on-dexs", title: "Setting Slippage Tolerance on DEXs", level: 2 }
      ]}
      faqs={[{question:"Is slippage always negative?",answer:"No. Positive slippage occurs when you get a better price than expected. However, negative slippage (getting a worse price) is more common and the primary concern."},{question:"How much slippage is normal?",answer:"On major pairs on liquid exchanges, slippage should be minimal (under 0.1%). On DEXs or illiquid pairs, 0.5-1% slippage is common. Anything above 2% suggests very low liquidity."},{question:"Can I avoid slippage entirely?",answer:"Using limit orders on centralized exchanges eliminates slippage entirely because your order only fills at your specified price or better. On DEXs, setting tight slippage tolerance helps but trades may fail if the tolerance is too tight."}]}
      relatedArticles={[{title:"Liquidity Explained",href:"/exchanges/learn/liquidity-explained",category:"Exchanges"},{title:"How to Read the Order Book",href:"/exchanges/learn/how-to-read-order-book",category:"Exchanges"},{title:"AMM Explained",href:"/exchanges/learn/amm-explained",category:"Exchanges"}]}
    >
      <section id="what-is-slippage"><h2>What Is Slippage</h2><p>Slippage occurs when the price at which your trade executes differs from the price you expected. If you see Bitcoin at $50,000 and place a market buy order, but the order fills at $50,050, you experienced $50 (0.1%) of negative slippage. This happens because the market moved or the liquidity at your expected price was insufficient to fill your entire order. Slippage is an implicit cost of trading that sits on top of explicit fees.</p></section>
      <section id="causes"><h2>What Causes Slippage</h2><p>Three main factors cause slippage. Low liquidity means there are not enough orders at or near the current price to fill your trade without moving through multiple price levels. High volatility means prices are changing rapidly between when you submit your order and when it executes. Large order size relative to available liquidity means your single order consumes multiple price levels in the order book, with each subsequent fill at a progressively worse price.</p></section>
      <section id="cex-vs-dex"><h2>Slippage on CEX vs DEX</h2><p>On centralized exchanges, slippage primarily depends on order book depth. Major pairs on top exchanges have deep books, minimizing slippage for most retail-sized orders. On DEXs using automated market makers (AMMs), slippage is determined by the pool size relative to your trade. A $10,000 swap in a $10 million liquidity pool will experience approximately 0.1% slippage from the pool's pricing curve alone. The same swap in a $100,000 pool could experience 10% or more slippage. DEX aggregators like Jupiter and 1inch help by splitting trades across multiple pools.</p></section>
      <section id="minimizing"><h2>How to Minimize Slippage</h2><p>Use limit orders on centralized exchanges to eliminate slippage entirely. Trade on exchanges with the deepest liquidity for your specific pairs. Break large orders into smaller chunks to avoid eating through the order book. Trade during high-volume hours when liquidity is deepest. Avoid trading during extreme volatility when spreads widen and order books thin. On DEXs, use aggregators that route through multiple liquidity sources for better pricing.</p></section>
      <section id="slippage-tolerance"><h2>Setting Slippage Tolerance on DEXs</h2><p>When trading on DEXs like Uniswap or Jupiter, you set a slippage tolerance — the maximum price deviation you will accept. Setting it too tight (0.1%) may cause transactions to fail in volatile markets. Setting it too loose (5%+) may expose you to front-running attacks where bots exploit your tolerance. A good default for major tokens is 0.5-1%, adjusted up for volatile or low-liquidity tokens. Always review the estimated output before confirming any swap.</p></section>
    </LearnPageLayout>
  );
}
