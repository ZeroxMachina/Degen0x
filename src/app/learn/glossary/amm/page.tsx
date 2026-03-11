import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is an AMM? Automated Market Maker Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what an Automated Market Maker (AMM) is, how AMMs work, the constant product formula, and their role in DeFi. Complete guide with examples.",
};

export default function AmmPage() {
  return (
    <LearnPageLayout
      title="What Is an AMM (Automated Market Maker)?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="6 min"
      intro="An Automated Market Maker (AMM) is a type of decentralized exchange protocol that uses mathematical formulas and liquidity pools to determine asset prices, replacing the traditional order book model. AMMs allow anyone to trade tokens or earn fees by providing liquidity, and they form the backbone of decentralized finance."
      toc={[
        { id: "definition", title: "What Is an AMM?", level: 2 },
        { id: "how-it-works", title: "How AMMs Work", level: 2 },
        { id: "examples", title: "Popular AMM Protocols", level: 2 },
        { id: "why-it-matters", title: "Why AMMs Matter", level: 2 },
        { id: "limitations", title: "Limitations", level: 2 },
      ]}
      faqs={[
        {
          question: "What is the constant product formula?",
          answer:
            "The constant product formula (x * y = k) is the mathematical equation used by many AMMs like Uniswap. x and y represent the quantities of two tokens in a pool, and k is a constant. When someone buys token x, its quantity decreases and its price increases, ensuring the product remains constant.",
        },
        {
          question: "How do AMMs determine prices?",
          answer:
            "AMM prices are determined by the ratio of tokens in a liquidity pool. As traders buy one token and sell another, the ratio shifts, changing the price. Arbitrageurs keep AMM prices aligned with broader markets by trading against any discrepancies.",
        },
        {
          question: "Can I make money as an AMM liquidity provider?",
          answer:
            "Liquidity providers earn a share of trading fees from every swap in their pool. However, they are also exposed to impermanent loss, which occurs when the price ratio of the pooled tokens changes. Net profitability depends on fee volume relative to impermanent loss.",
        },
      ]}
      relatedArticles={[
        { title: "What Is a Liquidity Pool?", href: "/learn/glossary/liquidity-pool", category: "Glossary" },
        { title: "What Is Impermanent Loss?", href: "/learn/glossary/impermanent-loss", category: "Glossary" },
        { title: "What Is a DEX?", href: "/learn/glossary/dex", category: "Glossary" },
        { title: "What Is DeFi?", href: "/learn/glossary/defi", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is an AMM?</h2>
      <p>
        Traditional exchanges use order books where buyers and sellers place orders at specific prices. Automated Market Makers replace this with smart contracts that hold pools of tokens and use algorithms to set prices. Instead of matching individual buyers and sellers, traders swap against the liquidity pool itself.
      </p>
      <p>
        Uniswap, launched in 2018, popularized the AMM model and demonstrated that decentralized trading could work at scale. The innovation removed the need for professional market makers and centralized infrastructure, allowing anyone to trade or provide liquidity.
      </p>

      <h2 id="how-it-works">How AMMs Work</h2>
      <p>
        An AMM operates through liquidity pools — smart contracts that hold pairs of tokens. Liquidity providers deposit equal values of two tokens into a pool and receive LP tokens representing their share. When a trader wants to swap token A for token B, they send token A to the pool and receive token B, with the exchange rate determined by the pool&apos;s algorithm.
      </p>
      <p>
        The most common formula is the constant product equation (x * y = k). As one token is removed from the pool, its price increases relative to the other, creating a price curve. Larger trades relative to pool size result in more price impact (slippage). Trading fees, typically 0.3%, are distributed to liquidity providers proportional to their share.
      </p>

      <h2 id="examples">Popular AMM Protocols</h2>
      <p>
        Uniswap is the largest AMM on Ethereum and has expanded to multiple chains. Curve Finance specializes in stablecoin and like-asset swaps with minimal slippage. PancakeSwap is the leading AMM on BNB Chain. Balancer allows weighted pools with more than two tokens. Each protocol introduces variations on the core AMM concept to optimize for specific use cases.
      </p>

      <h2 id="why-it-matters">Why AMMs Matter</h2>
      <p>
        AMMs democratized market making and trading. Anyone can provide liquidity and earn fees — you do not need millions of dollars or sophisticated software. They enable permissionless token listings, 24/7 trading, and full self-custody. AMMs are a foundational building block of DeFi, supporting lending, yield farming, and complex financial strategies.
      </p>

      <h2 id="limitations">Limitations</h2>
      <p>
        AMMs suffer from impermanent loss, capital inefficiency (much of the liquidity goes unused), and vulnerability to sandwich attacks and front-running. Concentrated liquidity models like Uniswap v3 address some efficiency issues, and MEV protection solutions are evolving, but these remain active areas of development.
      </p>
    </LearnPageLayout>
  );
}
