import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Bonding Curve? (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn what bonding curves are, how they determine token pricing mathematically, their use in token launches, AMMs, and DeFi protocol design.",
  keywords: ["bonding curve", "token pricing", "bonding curve crypto", "mathematical pricing", "token launch curve"],
};

export default function BondingCurvePage() {
  return (
    <LearnPageLayout title="What Is a Bonding Curve?" categoryName="Glossary" categorySlug="learn/glossary" readTime="4 min" intro="A bonding curve is a mathematical formula that defines the relationship between a token's price and its supply. As more tokens are purchased, the price increases along a predetermined curve; as tokens are sold, the price decreases. Bonding curves create automated, predictable pricing without requiring traditional order books or market makers."
      toc={[{ id: "definition", title: "Definition", level: 2 },{ id: "how-it-works", title: "How It Works", level: 2 },{ id: "applications", title: "Applications", level: 2 }]}
      faqs={[
        { question: "How is a bonding curve different from an AMM?", answer: "AMMs (like Uniswap) use a specific type of bonding curve (constant product formula) with two-token pools. Bonding curves are the broader mathematical concept — they can be linear, exponential, logarithmic, or custom-shaped. AMMs are a practical implementation of bonding curve principles for decentralized trading." },
        { question: "Can bonding curves be manipulated?", answer: "Bonding curves are deterministic — the price at any supply level is fixed by the formula. However, large purchases or sales can move the price significantly along the curve, and early buyers benefit from lower prices. Some designs include fees or circuit breakers to limit rapid speculation." },
      ]}
      relatedArticles={[
        { title: "AMM", href: "/learn/glossary/amm", category: "Glossary" },
        { title: "Liquidity Pool", href: "/learn/glossary/liquidity-pool", category: "Glossary" },
        { title: "What Is Tokenomics?", href: "/learn/what-is-tokenomics", category: "Learn" },
        { title: "DEX", href: "/learn/glossary/dex", category: "Glossary" },
      ]}
    >
      <section id="definition"><h2>Definition</h2><p>A bonding curve is a smart contract-encoded mathematical function that algorithmically sets the price of a token based on its current supply. The curve can be any function — linear (price increases proportionally with supply), exponential (price accelerates with supply), logarithmic (price growth decelerates), or a custom shape designed for specific economic goals. The key property is that pricing is automated, transparent, and predictable.</p></section>
      <section id="how-it-works"><h2>How It Works</h2><p>When someone buys tokens from a bonding curve contract, they send a reserve currency (like ETH) to the contract, which mints new tokens at the current curve price. The price then moves up the curve. When tokens are sold back, the contract burns the tokens and returns reserve currency at the current price, moving down the curve. This creates a self-contained market with guaranteed liquidity — there is always a price at which you can buy or sell, defined by the curve formula.</p></section>
      <section id="applications"><h2>Applications</h2><p>Bonding curves are used in token launches (pump.fun-style launch platforms), continuous token offerings, curation markets (where staking on a bonding curve signals content quality), and protocol-owned liquidity mechanisms. Platforms like Friendtech used bonding curves to price social tokens. The predictable pricing and built-in liquidity make bonding curves attractive for projects that want automated market-making without relying on external liquidity providers or centralized exchanges.</p></section>
    </LearnPageLayout>
  );
}
