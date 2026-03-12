import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Market Cap? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what market capitalization means in crypto, how it is calculated, and why it is the primary metric for comparing cryptocurrencies.",
};

export default function MarketCapPage() {
  return (
    <LearnPageLayout
      title="What Is Market Cap?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="Market capitalization (market cap) is the total value of a cryptocurrency, calculated by multiplying the current price by the circulating supply. It is the most widely used metric for ranking and comparing cryptocurrencies. Market cap provides a quick sense of a project's relative size and market position, though it has important limitations that investors should understand."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-market-cap", title: "What Is Market Cap?", level: 2 },
        { id: "calculation", title: "calculation", level: 2 },
        { id: "how-market-cap-is-calculated", title: "How Market Cap Is Calculated", level: 2 },
        { id: "categories", title: "categories", level: 2 },
        { id: "market-cap-categories", title: "Market Cap Categories", level: 2 },
        { id: "limitations", title: "limitations", level: 2 },
        { id: "limitations-of-market-cap", title: "Limitations of Market Cap", level: 2 },
        { id: "why-it-matters", title: "why-it-matters", level: 2 },
        { id: "why-market-cap-matters", title: "Why Market Cap Matters", level: 2 }
      ]}
      faqs={[
        {
          question: "What is the difference between market cap and fully diluted valuation?",
          answer:
            "Market cap uses circulating supply (tokens currently available). Fully diluted valuation (FDV) uses the maximum total supply, including tokens not yet released. FDV is important because future token unlocks can create selling pressure. A large gap between market cap and FDV suggests significant future dilution.",
        },
        {
          question: "Does a higher market cap mean a better investment?",
          answer:
            "Not necessarily. Market cap indicates size, not quality or growth potential. Large-cap coins tend to be less volatile but offer lower growth multiples. Small-cap coins have more growth potential but higher risk. Market cap should be one of many factors in investment analysis, not the sole determinant.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Bitcoin Dominance?", href: "/learn/glossary/bitcoin-dominance", category: "Glossary" },
        { title: "What Is the Flippening?", href: "/learn/glossary/flippening", category: "Glossary" },
        { title: "What Is Liquidity?", href: "/learn/glossary/liquidity", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is Market Cap?</h2>
      <p>
        Market capitalization represents the aggregate market value of a cryptocurrency. It answers the question: if you could buy every available coin at the current price, how much would it cost? Market cap is the standard metric used by sites like CoinGecko and CoinMarketCap to rank cryptocurrencies and by investors to gauge relative size and position in the market.
      </p>

      <h2 id="calculation">How Market Cap Is Calculated</h2>
      <p>
        Market cap equals the current price per token multiplied by the circulating supply. If a token costs $50 and there are 100 million tokens in circulation, the market cap is $5 billion. The circulating supply excludes locked, burned, or unreleased tokens. This distinction is important because many projects have large portions of supply yet to be distributed.
      </p>

      <h2 id="categories">Market Cap Categories</h2>
      <p>
        Large-cap cryptocurrencies (generally over $10 billion) include Bitcoin, Ethereum, and other established projects. They tend to be more stable and liquid. Mid-cap ($1-10 billion) includes established projects with growth potential. Small-cap ($100 million - $1 billion) offers higher risk and reward. Micro-cap (under $100 million) includes early-stage and highly speculative projects with the highest volatility.
      </p>

      <h2 id="limitations">Limitations of Market Cap</h2>
      <p>
        Market cap can be misleading. Low-liquidity tokens can have inflated market caps because a small amount of trading at high prices multiplied by total supply produces a large number. Wash trading can artificially inflate volume and price. The circulating supply itself can be difficult to determine accurately. Market cap also does not account for token utility, revenue, or fundamental value.
      </p>

      <h2 id="why-it-matters">Why Market Cap Matters</h2>
      <p>
        Despite its limitations, market cap remains the primary lens through which the crypto market is analyzed. It helps investors compare assets of different prices and supplies on a common scale. A $1 token with 10 billion supply has the same market cap as a $10,000 token with 1 million supply. Understanding market cap prevents the common beginner mistake of thinking cheap tokens have more upside just because of low per-unit price.
      </p>
    </LearnPageLayout>
  );
}
