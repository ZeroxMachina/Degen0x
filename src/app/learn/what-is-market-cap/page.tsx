import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Market Cap in Crypto? Complete Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn what market capitalization means in cryptocurrency, how it is calculated, the difference between market cap and fully diluted valuation, and how to use market cap for investment analysis.",
  keywords: ["market cap", "market capitalization", "crypto market cap", "fully diluted valuation", "FDV", "crypto valuation"],
};

export default function WhatIsMarketCapPage() {
  return (
    <LearnPageLayout
      title="What Is Market Cap in Crypto?"
      categoryName="Crypto Education"
      categorySlug="learn"
      readTime="7 min"
      intro="Market capitalization (market cap) is the total value of a cryptocurrency calculated by multiplying the current price per token by the number of tokens in circulation. It is the most common metric used to rank and compare cryptocurrencies, though understanding its nuances and limitations is essential for making informed investment decisions."
      toc={[
        { id: "what-is-market-cap", title: "what-is-market-cap", level: 2 },
        { id: "understanding-market-cap", title: "Understanding Market Cap", level: 2 },
        { id: "calculation", title: "calculation", level: 2 },
        { id: "how-market-cap-is-calculated", title: "How Market Cap Is Calculated", level: 2 },
        { id: "market-cap-tiers", title: "market-cap-tiers", level: 2 },
        { id: "market-cap-tiers", title: "Market Cap Tiers", level: 2 },
        { id: "fdv", title: "fdv", level: 2 },
        { id: "fully-diluted-valuation", title: "Fully Diluted Valuation", level: 2 },
        { id: "limitations", title: "limitations", level: 2 },
        { id: "limitations-of-market-cap", title: "Limitations of Market Cap", level: 2 },
        { id: "using-market-cap", title: "using-market-cap", level: 2 },
        { id: "using-market-cap-for-analysis", title: "Using Market Cap for Analysis", level: 2 }
      ]}
      faqs={[
        { question: "Is a higher market cap better?", answer: "Higher market cap generally indicates a more established project with greater liquidity and lower volatility. However, it also means less room for growth compared to smaller projects. The best market cap depends on your risk tolerance and investment goals." },
        { question: "What is the difference between market cap and FDV?", answer: "Market cap uses circulating supply (tokens currently available), while Fully Diluted Valuation uses total or maximum supply (all tokens that will ever exist). A large gap between the two indicates significant future token inflation that could dilute current holders." },
        { question: "Can market cap be manipulated?", answer: "Yes, especially for low-liquidity tokens. If very few tokens are in circulation and someone buys a small amount at an inflated price, the calculated market cap can appear deceptively large. This is why market cap should always be evaluated alongside trading volume and liquidity depth." },
      ]}
      relatedArticles={[
        { title: "What Is Volume?", href: "/learn/what-is-volume", category: "Learn" },
        { title: "What Is Tokenomics?", href: "/learn/what-is-tokenomics", category: "Learn" },
        { title: "What Is TVL?", href: "/learn/what-is-tvl", category: "Learn" },
        { title: "How to Research Crypto", href: "/learn/how-to-research-crypto", category: "Learn" },
      ]}
    >
      <section id="what-is-market-cap">
        <h2>Understanding Market Cap</h2>
        <p>
          Market capitalization is a straightforward metric borrowed from traditional finance that provides a rough measure of a cryptocurrency's total value. In the stock market, market cap equals the share price multiplied by the number of outstanding shares. In crypto, it equals the token price multiplied by the circulating supply. Bitcoin's market cap of over a trillion dollars makes it comparable in size to the world's largest companies, while thousands of smaller tokens have market caps under a million dollars.
        </p>
        <p>
          Market cap serves as the primary ranking and comparison tool across the crypto industry. Sites like CoinGecko and CoinMarketCap rank thousands of cryptocurrencies by market cap, and the metric is used to categorize tokens into tiers (large-cap, mid-cap, small-cap) that roughly correspond to different risk and return profiles. While imperfect, market cap provides a quick reference point for a token's relative size and market significance within the broader crypto ecosystem.
        </p>
      </section>

      <section id="calculation">
        <h2>How Market Cap Is Calculated</h2>
        <p>
          The basic formula is: Market Cap = Current Price x Circulating Supply. For example, if a token trades at $50 and has 100 million tokens in circulation, its market cap is $5 billion. The calculation is simple, but the inputs deserve scrutiny. Price is typically taken from a volume-weighted average across major exchanges. Circulating supply is the number of tokens currently available for trading, excluding locked, vesting, and unreleased tokens.
        </p>
        <p>
          Circulating supply determination can be contentious. Different tracking sites may count or exclude tokens held in team wallets, foundation reserves, staking contracts, or bridge contracts. This is why the same token might show slightly different market caps on different platforms. Understanding what each platform includes in its circulating supply calculation helps you compare metrics accurately and avoid misleading conclusions.
        </p>
      </section>

      <section id="market-cap-tiers">
        <h2>Market Cap Tiers</h2>
        <p>
          Large-cap cryptocurrencies (generally above $10 billion) include Bitcoin, Ethereum, and a handful of other established projects. These tend to have deep liquidity, broad exchange support, and relatively lower volatility. They are considered the safest crypto assets, though still significantly more volatile than traditional large-cap stocks. Mid-cap tokens ($1-10 billion) represent established projects with proven technology but still significant growth potential and higher risk.
        </p>
        <p>
          Small-cap tokens ($100 million to $1 billion) offer higher potential returns but carry substantially more risk, including lower liquidity, smaller development teams, and greater regulatory vulnerability. Micro-cap tokens (under $100 million) are the most speculative, with many representing early-stage or unproven projects. The vast majority of tokens in this category will ultimately lose most of their value, but the rare successes can deliver extraordinary returns.
        </p>
      </section>

      <section id="fdv">
        <h2>Fully Diluted Valuation</h2>
        <p>
          Fully Diluted Valuation (FDV) is calculated by multiplying the current price by the total or maximum token supply, rather than just the circulating supply. FDV represents what the market cap would be if all tokens that will ever exist were already in circulation at the current price. This metric is crucial for understanding future dilution — if a token has a $1 billion market cap but a $10 billion FDV, 90% of tokens have not yet entered circulation and could create significant selling pressure when they do.
        </p>
        <p>
          The gap between market cap and FDV reveals the token's inflation trajectory. A small gap means most tokens are already circulating, and future dilution will be minimal. A large gap means substantial new supply is coming, and the token price must generate enough new demand to absorb these additional tokens. Evaluating FDV alongside vesting schedules and emission rates gives a clearer picture of a token's true valuation and future supply dynamics.
        </p>
      </section>

      <section id="limitations">
        <h2>Limitations of Market Cap</h2>
        <p>
          Market cap is a descriptive metric, not a valuation tool. It tells you how much the market currently values a token's circulating supply but says nothing about whether that valuation is justified. A $10 billion market cap token with no revenue or users is fundamentally different from a $10 billion market cap token generating millions in daily fees, yet the market cap alone does not distinguish between them.
        </p>
        <p>
          Market cap can also be misleading for tokens with low liquidity. If only a tiny fraction of tokens are actively traded and someone buys a small amount at an inflated price, the calculated market cap can appear enormous even though there is no real depth behind it. This is common with new meme coins that show impressive market caps but cannot support meaningful selling volume without catastrophic price drops. Always check trading volume and order book depth alongside market cap.
        </p>
      </section>

      <section id="using-market-cap">
        <h2>Using Market Cap for Analysis</h2>
        <p>
          The most useful application of market cap is relative comparison. Compare tokens in the same category — if a leading DEX has a $5 billion market cap and a newer competitor with similar technology has $500 million, the newer project has 10x potential if it captures equivalent market share. This comparative approach is more meaningful than evaluating market cap in isolation.
        </p>
        <p>
          Combine market cap with other metrics for deeper analysis. Market cap to TVL ratio helps assess DeFi protocol valuations. Market cap to revenue (price-to-sales) enables comparison with traditional financial companies. Market cap to FDV reveals dilution risk. Volume to market cap ratio indicates trading activity relative to size. Using market cap as one input among many creates a more robust analytical framework than relying on any single number.
        </p>
      </section>
    </LearnPageLayout>
  );
}
