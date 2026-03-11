import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Bitcoin Dominance? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what Bitcoin dominance is, how it's calculated, what it signals about market trends, and how traders use it. A complete guide to BTC.D.",
};

export default function BitcoinDominancePage() {
  return (
    <LearnPageLayout
      title="What Is Bitcoin Dominance?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="Bitcoin dominance (BTC.D) measures Bitcoin's market capitalization as a percentage of the total cryptocurrency market cap. It serves as a gauge for how capital flows between Bitcoin and altcoins. A rising dominance suggests money is flowing into Bitcoin, while falling dominance indicates capital is rotating into altcoins."
      toc={[
        { id: "definition", title: "What Is Bitcoin Dominance?", level: 2 },
        { id: "how-it-works", title: "How It Is Calculated", level: 2 },
        { id: "trends", title: "Historical Trends", level: 2 },
        { id: "why-it-matters", title: "Why It Matters", level: 2 },
        { id: "using-it", title: "How Traders Use It", level: 2 },
      ]}
      faqs={[
        {
          question: "What does high Bitcoin dominance mean?",
          answer:
            "High Bitcoin dominance (above 60%) typically indicates that investors prefer Bitcoin's relative safety over altcoins. This often happens during the early stages of a bull market or during bear markets when capital flees to Bitcoin as the most established cryptocurrency.",
        },
        {
          question: "What is altcoin season?",
          answer:
            "Altcoin season (alt season) occurs when Bitcoin dominance is declining because capital is flowing from Bitcoin into altcoins. During these periods, altcoins tend to outperform Bitcoin significantly. Alt seasons have historically occurred during the later stages of bull market cycles.",
        },
      ]}
      relatedArticles={[
        { title: "What Is an Altcoin?", href: "/learn/glossary/altcoin", category: "Glossary" },
        { title: "What Is Market Cap?", href: "/learn/glossary/market-cap", category: "Glossary" },
        { title: "What Is a Bull Market?", href: "/learn/glossary/bull-market", category: "Glossary" },
        { title: "What Is a Bear Market?", href: "/learn/glossary/bear-market", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is Bitcoin Dominance?</h2>
      <p>
        Bitcoin dominance is a metric that shows what percentage of the total cryptocurrency market capitalization belongs to Bitcoin. If the entire crypto market is worth $2 trillion and Bitcoin&apos;s market cap is $1 trillion, Bitcoin dominance is 50%. The metric is tracked on sites like CoinMarketCap, CoinGecko, and TradingView under the ticker BTC.D.
      </p>

      <h2 id="how-it-works">How It Is Calculated</h2>
      <p>
        The formula is straightforward: Bitcoin Market Cap divided by Total Crypto Market Cap, multiplied by 100. However, the calculation can be influenced by the number of tokens included in the total market cap. The proliferation of thousands of low-value tokens and stablecoins can dilute the metric, which is why some analysts prefer to track Bitcoin dominance excluding stablecoins.
      </p>

      <h2 id="trends">Historical Trends</h2>
      <p>
        Bitcoin dominance was nearly 100% in the early days of crypto. It began declining as Ethereum and other altcoins gained traction, dropping to around 37% in January 2018 during the ICO boom. During bear markets, dominance tends to recover as altcoins lose value faster than Bitcoin. The metric has generally trended downward over time as the ecosystem matures and diversifies.
      </p>

      <h2 id="why-it-matters">Why It Matters</h2>
      <p>
        Bitcoin dominance helps investors understand the overall market structure and sentiment. Rising dominance can signal risk-off behavior, while falling dominance can indicate growing appetite for risk and speculation. It serves as a useful context for portfolio allocation decisions between Bitcoin, large-cap altcoins, and smaller tokens.
      </p>

      <h2 id="using-it">How Traders Use It</h2>
      <p>
        Traders monitor Bitcoin dominance alongside Bitcoin price to understand four distinct market phases: BTC price up with dominance up (money entering crypto via Bitcoin), BTC price up with dominance down (alt season), BTC price down with dominance up (altcoin capitulation), and BTC price down with dominance down (broad market decline). These phases help inform position sizing and sector rotation strategies.
      </p>
    </LearnPageLayout>
  );
}
