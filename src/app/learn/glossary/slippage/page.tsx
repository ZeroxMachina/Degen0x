import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Slippage? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what slippage is, how it affects your crypto trades, and strategies to minimize its impact on DeFi swaps.",
};

export default function SlippagePage() {
  return (
    <LearnPageLayout
      title="What Is Slippage?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="Slippage is the difference between the expected price of a trade and the actual execution price. It occurs when there is insufficient liquidity to fill an order at the desired price, or when market conditions change between the time a trade is submitted and when it is executed. Slippage is a significant concern in DeFi trading, where low-liquidity pools can result in substantially worse prices than expected."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-slippage", title: "What Is Slippage?", level: 2 },
        { id: "causes", title: "causes", level: 2 },
        { id: "causes-of-slippage", title: "Causes of Slippage", level: 2 },
        { id: "slippage-tolerance", title: "slippage-tolerance", level: 2 },
        { id: "slippage-tolerance-settings", title: "Slippage Tolerance Settings", level: 2 },
        { id: "minimizing", title: "minimizing", level: 2 },
        { id: "minimizing-slippage", title: "Minimizing Slippage", level: 2 },
        { id: "why-it-matters", title: "why-it-matters", level: 2 },
        { id: "why-slippage-matters", title: "Why Slippage Matters", level: 2 }
      ]}
      faqs={[
        {
          question: "What is a good slippage tolerance to set?",
          answer:
            "For major token pairs with high liquidity, 0.5% is usually sufficient. For less liquid tokens, you may need 1-3%. Very illiquid or new tokens may require 5% or higher, but high slippage tolerance means you accept getting significantly less than expected. Never set slippage tolerance higher than you are comfortable with, as MEV bots can exploit high tolerances.",
        },
        {
          question: "Can slippage work in my favor?",
          answer:
            "Yes. Positive slippage occurs when you receive a better price than expected. This can happen when market conditions move favorably between submission and execution. Some DEX aggregators capture positive slippage for users. However, negative slippage (getting a worse price) is far more common, particularly in volatile markets and low-liquidity pools.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Liquidity?", href: "/learn/glossary/liquidity", category: "Glossary" },
        { title: "What Is a DEX?", href: "/learn/glossary/dex", category: "Glossary" },
        { title: "What Is an AMM?", href: "/learn/glossary/amm", category: "Glossary" },
        { title: "What Is a Swap?", href: "/learn/glossary/swap", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is Slippage?</h2>
      <p>
        Slippage is the gap between what you expect to receive from a trade and what you actually receive. If you expect to buy 100 tokens at $1 each but the execution fills at $1.02, you experienced 2% slippage. In crypto, slippage is especially common on decentralized exchanges where automated market makers determine prices based on pool reserves, and large trades relative to pool size move prices significantly.
      </p>

      <h2 id="causes">Causes of Slippage</h2>
      <p>
        Low liquidity is the primary cause: thin pools cannot absorb large orders without significant price impact. Market volatility causes slippage when prices move between transaction submission and execution. Network congestion means transactions wait longer in the mempool, increasing the chance of price movement. Front-running by MEV bots can also increase slippage by trading ahead of your transaction.
      </p>

      <h2 id="slippage-tolerance">Slippage Tolerance Settings</h2>
      <p>
        Most DEX interfaces allow you to set a slippage tolerance — the maximum acceptable price deviation. If the actual price moves beyond your tolerance, the transaction reverts instead of executing at a bad price. Setting tolerance too low causes frequent failed transactions. Setting it too high exposes you to sandwich attacks where bots exploit your willingness to accept poor prices. Finding the right balance is important.
      </p>

      <h2 id="minimizing">Minimizing Slippage</h2>
      <p>
        Trade on DEXs with deep liquidity pools for your token pair. Break large orders into smaller trades to reduce price impact. Use DEX aggregators like 1inch that split orders across multiple pools for better execution. Avoid trading during extreme volatility. Consider using limit orders when available. For very large trades, OTC (over-the-counter) desks may offer better execution than on-chain swaps.
      </p>

      <h2 id="why-it-matters">Why Slippage Matters</h2>
      <p>
        Slippage is a real cost of trading that erodes returns. On large trades in low-liquidity environments, slippage can exceed percentage-point levels, making trades unprofitable. Understanding and managing slippage is essential for DeFi users. It also underscores the importance of liquidity in crypto markets — without adequate liquidity, even well-intentioned trades can result in poor outcomes for all participants.
      </p>
    </LearnPageLayout>
  );
}
