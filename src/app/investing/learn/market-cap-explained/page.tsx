import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Market Cap Explained ${CURRENT_YEAR} - What It Means for Investors`,
  description: `Understand cryptocurrency market capitalization. Learn what market cap means, how it is calculated, and why it matters for your investment decisions.`,
  alternates: { canonical: "/investing/learn/market-cap-explained" },
};

const toc = [
  { id: "what-is-market-cap", title: "What Is Market Cap", level: 2 },
  { id: "categories", title: "Market Cap Categories", level: 2 },
  { id: "limitations", title: "Limitations of Market Cap", level: 2 },
  { id: "fdv", title: "Fully Diluted Valuation", level: 2 },
];

const faqs = [
  { question: "Why is market cap important?", answer: "Market cap gives you a standardized way to compare the relative size and perceived value of different cryptocurrencies. A higher market cap generally indicates more liquidity, wider adoption, and lower relative volatility. It helps you understand whether a token's price is reasonable relative to its peers." },
  { question: "Can a low market cap coin reach Bitcoin's price?", answer: "Price per coin is meaningless without considering supply. A coin with 1 trillion tokens at $0.001 has a $1 billion market cap. For it to reach Bitcoin's price, it would need a market cap of trillions of trillions, which is impossible. Always evaluate tokens by market cap, not price per coin." },
  { question: "What is a good market cap for investing?", answer: "Large caps (over $10B) like BTC and ETH offer the most stability. Mid caps ($1B-$10B) offer growth potential with moderate risk. Small caps (under $1B) have the highest growth potential but also the highest risk of failure. Balance your portfolio across these categories based on your risk tolerance." },
];

export default function MarketCapExplainedPage() {
  return (
    <LearnPageLayout
      title="Crypto Market Cap Explained"
      categoryName="Crypto Investing"
      categorySlug="investing"
      readTime="6 min"
      intro="Market capitalization is one of the most important metrics in cryptocurrency investing, yet it is often misunderstood. This guide explains what market cap is, how to use it for comparing assets, and its limitations."
      toc={toc}
      faqs={faqs}
      relatedArticles={[
        { title: "Tokenomics Guide", href: "/investing/learn/tokenomics-guide", category: "Investing" },
        { title: "Fundamental Analysis", href: "/investing/learn/fundamental-analysis", category: "Investing" },
      ]}
    >
      <section id="what-is-market-cap" className="mb-10">
        <h2>What Is Market Cap?</h2>
        <p>
          Market capitalization equals the current price of a token multiplied by its circulating
          supply. If a token trades at $50 and there are 100 million tokens in circulation, its
          market cap is $5 billion. Market cap is a better measure of a project's overall value
          than price per token, because price alone tells you nothing without knowing the supply.
          A $0.01 token with 100 billion supply has the same market cap as a $1,000 token with
          1 million supply.
        </p>
      </section>

      <section id="categories" className="mb-10">
        <h2>Market Cap Categories</h2>
        <p>
          Large-cap cryptos (over $10 billion) include Bitcoin, Ethereum, and a handful of
          established projects. They offer the most liquidity and lowest volatility. Mid-cap
          cryptos ($1-10 billion) include established altcoins with growth potential and moderate
          risk. Small-cap cryptos (under $1 billion) offer the highest potential returns but also
          the highest risk of failure. Micro-caps (under $100 million) are highly speculative.
        </p>
      </section>

      <section id="limitations" className="mb-10">
        <h2>Limitations of Market Cap</h2>
        <p>
          Market cap does not account for token lock-ups, team holdings, or tokens lost forever.
          It can be manipulated through low-float, high-price token launches. It does not reflect
          fundamental value, revenue, or utility. Two tokens with the same market cap can have
          vastly different fundamentals. Use market cap as a size comparison tool, not as a
          valuation metric in isolation.
        </p>
      </section>

      <section id="fdv" className="mb-10">
        <h2>Fully Diluted Valuation (FDV)</h2>
        <p>
          Fully Diluted Valuation multiplies the current price by the maximum token supply. This
          metric is important for understanding future dilution. If a token has a market cap of
          $1B but an FDV of $10B, 90% of the supply has yet to enter circulation, creating
          potential selling pressure. Compare market cap to FDV to assess dilution risk. A
          large gap between market cap and FDV is a warning sign.
        </p>
      </section>
    </LearnPageLayout>
  );
}
