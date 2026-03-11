import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";

export const metadata: Metadata = {
  title: "Liquidity Pools Explained: How They Work in DeFi (2026)",
  description: "Learn how DeFi liquidity pools work, how LPs earn fees, the role of AMMs, and how to evaluate pool opportunities. Complete guide for beginners.",
};

export default function LiquidityPoolsExplainedPage() {
  return (
    <LearnPageLayout title="Liquidity Pools Explained" categoryName="DeFi Lending" categorySlug="defi-lending" readTime="10 min"
      intro="Liquidity pools are the backbone of decentralized exchanges and DeFi protocols. They replace traditional order books with smart contract-managed pools of tokens that enable permissionless trading. This guide explains how liquidity pools work, how liquidity providers earn returns, and what to consider before adding liquidity."
      toc={[{ id: "what-are-lps", title: "What Are Liquidity Pools?", level: 2 }, { id: "how-amms-work", title: "How AMMs Work", level: 2 }, { id: "earning-fees", title: "How LPs Earn Fees", level: 2 }, { id: "choosing-pools", title: "Choosing the Right Pool", level: 2 }]}
      faqs={[
        { question: "How much money do I need to provide liquidity?", answer: "There is no minimum on most protocols, but you should consider gas costs. On Ethereum mainnet, the practical minimum is around $500-1000 to make gas costs worthwhile. On L2s, you can start with as little as $50." },
        { question: "Can I lose money providing liquidity?", answer: "Yes. Through impermanent loss, smart contract exploits, or token depegs, LPs can lose money. However, well-chosen pools with high volume and correlated assets often generate net positive returns after accounting for all risks." },
        { question: "What is TVL and why does it matter for pools?", answer: "TVL (Total Value Locked) measures the total assets deposited in a pool. Higher TVL generally means deeper liquidity and lower slippage for traders. However, very high TVL can dilute LP returns because fees are shared among more liquidity providers." },
      ]}
      relatedArticles={[{ title: "Impermanent Loss Explained", href: "/defi-lending/learn/impermanent-loss", category: "DeFi Lending" }, { title: "Best Liquidity Pools", href: "/defi-lending/best/liquidity-pools", category: "DeFi Lending" }]}
    >
      <h2 id="what-are-lps">What Are Liquidity Pools?</h2>
      <p>A liquidity pool is a smart contract that holds reserves of two or more tokens, enabling traders to swap between them without needing a direct counterpart. Traditional exchanges use order books where buyers and sellers place orders at specific prices. Liquidity pools replace this with an algorithmic pricing mechanism that automatically determines exchange rates based on the ratio of tokens in the pool.</p>
      <p>When you provide liquidity, you deposit an equal value of two tokens into the pool and receive LP tokens representing your share. As traders swap tokens, they pay fees that accumulate in the pool. When you withdraw, you receive your proportional share of the pool plus accumulated fees.</p>

      <h2 id="how-amms-work">How AMMs Work</h2>
      <p>Automated Market Makers (AMMs) use mathematical formulas to price assets. The most common is the constant product formula (x * y = k), used by Uniswap, where the product of the two token reserves must remain constant. Curve uses a hybrid formula optimized for assets that should trade near 1:1. Balancer allows pools with more than two tokens and custom weightings. Each AMM design has trade-offs between capital efficiency, slippage, and impermanent loss characteristics.</p>

      <h2 id="earning-fees">How LPs Earn Fees</h2>
      <p>Every time a trader swaps tokens through a pool, they pay a fee (typically 0.04% to 1% depending on the pool). This fee is added to the pool reserves, increasing the value of all LP tokens proportionally. Over time, these fees compound as they are reinvested in the pool. Many protocols also distribute governance token rewards to LPs as additional incentives, significantly boosting returns during incentivized periods.</p>

      <h2 id="choosing-pools">Choosing the Right Pool</h2>
      <p>When evaluating pools, consider the trading volume to TVL ratio (higher is better for LP returns), the fee tier, token correlation (stable pairs have less impermanent loss), additional incentives, and the reputation of the underlying protocol. Pools with consistent high volume and well-correlated assets tend to provide the most reliable returns for liquidity providers.</p>
    </LearnPageLayout>
  );
}
