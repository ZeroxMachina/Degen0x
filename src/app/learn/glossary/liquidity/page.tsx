import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Liquidity? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what liquidity means in crypto markets, why it matters, and how it affects trading and price stability.",
};

export default function LiquidityPage() {
  return (
    <LearnPageLayout
      title="What Is Liquidity?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="Liquidity refers to how easily an asset can be bought or sold without significantly affecting its price. High liquidity means large trades can be executed quickly with minimal price impact. Low liquidity means even small trades can cause large price swings. In crypto, liquidity varies dramatically between assets and venues, making it one of the most important factors in trading and investing."
      toc={[
        { id: "definition", title: "What Is Liquidity?", level: 2 },
        { id: "measuring", title: "Measuring Liquidity", level: 2 },
        { id: "sources", title: "Sources of Liquidity", level: 2 },
        { id: "impact", title: "Impact on Trading", level: 2 },
        { id: "why-it-matters", title: "Why Liquidity Matters", level: 2 },
      ]}
      faqs={[
        {
          question: "Why is Bitcoin more liquid than most altcoins?",
          answer:
            "Bitcoin has the highest market cap, the most trading pairs, the deepest order books, and is listed on every exchange. It has been traded for over a decade, attracting institutional market makers and high-frequency traders. Smaller altcoins have fewer buyers and sellers, thinner order books, and less market maker participation, resulting in lower liquidity.",
        },
        {
          question: "What causes a liquidity crisis in crypto?",
          answer:
            "Liquidity crises occur when market makers withdraw from the market during extreme volatility or uncertainty. Events like exchange collapses, regulatory shocks, or protocol failures can cause market makers to pull liquidity to reduce risk. When liquidity evaporates, small sell orders can cause outsized price drops, creating cascading panic.",
        },
      ]}
      relatedArticles={[
        { title: "What Is a Liquidity Pool?", href: "/learn/glossary/liquidity-pool", category: "Glossary" },
        { title: "What Is Slippage?", href: "/learn/glossary/slippage", category: "Glossary" },
        { title: "What Is a Market Maker?", href: "/learn/glossary/market-maker", category: "Glossary" },
        { title: "What Is a DEX?", href: "/learn/glossary/dex", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is Liquidity?</h2>
      <p>
        Liquidity describes the degree to which an asset can be quickly converted to cash (or another asset) at a stable price. A liquid market has many active buyers and sellers, tight bid-ask spreads, and deep order books. An illiquid market has few participants, wide spreads, and thin order books. Cash is the most liquid asset; obscure small-cap tokens are among the least liquid.
      </p>

      <h2 id="measuring">Measuring Liquidity</h2>
      <p>
        Key liquidity metrics include trading volume (total value traded in a period), order book depth (total value of buy and sell orders near the current price), bid-ask spread (difference between the best buy and sell prices), and slippage (price impact of a given trade size). Higher volume, deeper books, tighter spreads, and lower slippage all indicate better liquidity.
      </p>

      <h2 id="sources">Sources of Liquidity</h2>
      <p>
        On centralized exchanges, market makers and traders provide liquidity through limit orders on the order book. In DeFi, liquidity comes from liquidity pools funded by users who deposit token pairs into automated market makers. Institutional market makers, algorithmic trading firms, and retail traders all contribute to market liquidity. Incentive programs (liquidity mining) attract liquidity to new protocols.
      </p>

      <h2 id="impact">Impact on Trading</h2>
      <p>
        Liquidity directly affects execution quality. In liquid markets, you get prices close to what you expect with minimal slippage. In illiquid markets, large orders can move the price significantly against you. This is why trading small-cap tokens on decentralized exchanges often results in higher slippage. Professional traders always assess liquidity before sizing their positions.
      </p>

      <h2 id="why-it-matters">Why Liquidity Matters</h2>
      <p>
        Liquidity is the lifeblood of any financial market. It enables price discovery, reduces transaction costs, and provides confidence that you can exit positions when needed. Low liquidity amplifies volatility and creates opportunities for manipulation. For DeFi protocols, attracting and retaining liquidity is essential for functionality. Understanding liquidity helps investors avoid the trap of buying assets they cannot easily sell.
      </p>
    </LearnPageLayout>
  );
}
