import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Market Correlations: BTC Dominance & Alt Season (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Understand crypto market correlations. Learn about Bitcoin dominance, alt season indicators, crypto-equity correlation, and how to use correlation data for portfolio management.",
  keywords: ["crypto correlation", "Bitcoin dominance", "alt season", "crypto market correlation", "BTC dominance altcoins"],
};

export default function CryptoCorrelationGuidePage() {
  return (
    <LearnPageLayout
      title="Crypto Market Correlations: BTC Dominance & Alt Season"
      categoryName="Long-Term Strategies"
      categorySlug="long-term"
      readTime="10 min read"
      intro="Understanding correlations within the crypto market and between crypto and traditional assets is essential for effective portfolio management. Bitcoin dominance cycles, alt-season dynamics, and the evolving relationship between crypto and equities all influence investment decisions. This guide explains the key correlation patterns, how they shift across market cycles, and how to use correlation data to optimize your portfolio allocation and timing."
      toc={[
        { id: "btc-dominance", title: "btc-dominance", level: 2 },
        { id: "bitcoin-dominance-explained", title: "Bitcoin Dominance Explained", level: 2 },
        { id: "alt-season", title: "alt-season", level: 2 },
        { id: "alt-season-when-altcoins-outperform", title: "Alt Season: When Altcoins Outperform", level: 2 },
        { id: "intra-crypto", title: "intra-crypto", level: 2 },
        { id: "intra-crypto-correlations", title: "Intra-Crypto Correlations", level: 2 },
        { id: "crypto-equity", title: "crypto-equity", level: 2 },
        { id: "crypto-equity-market-correlation", title: "Crypto-Equity Market Correlation", level: 2 },
        { id: "using-correlations", title: "using-correlations", level: 2 },
        { id: "using-correlations-for-portfolio-management", title: "Using Correlations for Portfolio Management", level: 2 },
        { id: "indicators", title: "indicators", level: 2 },
        { id: "key-correlation-indicators", title: "Key Correlation Indicators", level: 2 }
      ]}
      faqs={[
        { question: "What is Bitcoin dominance?", answer: "Bitcoin dominance is the percentage of total crypto market capitalization that Bitcoin represents. When dominance rises, Bitcoin is outperforming altcoins. When it falls, altcoins are outperforming. It historically ranges between 40-70% and follows cyclical patterns." },
        { question: "When does alt season happen?", answer: "Alt seasons typically occur in the later stages of bull markets when Bitcoin has already made significant gains and traders rotate into altcoins seeking higher returns. They are characterized by rapidly falling BTC dominance and parabolic altcoin price increases." },
        { question: "Is crypto correlated with the stock market?", answer: "Crypto's correlation with equities (especially the Nasdaq) has increased since 2020 due to institutional adoption. During risk-off events, crypto often sells off with stocks. However, crypto-specific catalysts can override this correlation." },
        { question: "Can I diversify within crypto?", answer: "Diversification within crypto is limited because most altcoins are highly correlated with Bitcoin during major market moves. In crashes, nearly everything goes down. Diversification benefits are more apparent during bull markets when different sectors move at different times." },
      ]}
      relatedArticles={[
        { title: "On-Chain Analysis Guide", href: "/long-term/learn/on-chain-analysis-guide", category: "Long-Term" },
        { title: "Portfolio Rebalancing", href: "/long-term/learn/portfolio-rebalancing", category: "Long-Term" },
        { title: "Bull Market Strategies", href: "/long-term/learn/bull-market-strategies", category: "Long-Term" },
      ]}
    >
      <h2 id="btc-dominance">Bitcoin Dominance Explained</h2>
      <p>
        Bitcoin dominance measures Bitcoin&apos;s share of total cryptocurrency market capitalization. When dominance rises, Bitcoin is outperforming the broader market. When it falls, altcoins as a group are gaining ground relative to Bitcoin. Dominance has ranged from a high of nearly 100 percent in Bitcoin&apos;s early days to a low of about 32 percent during the 2018 alt-season peak, and generally fluctuates between 40 and 65 percent in mature markets. Dominance cycles are driven by capital rotation: early in bull markets, capital flows into Bitcoin first (dominance rises), then rotates into altcoins seeking higher returns (dominance falls).
      </p>

      <h2 id="alt-season">Alt Season: When Altcoins Outperform</h2>
      <p>
        Alt season is a period when altcoins significantly outperform Bitcoin, characterized by rapidly falling BTC dominance and explosive gains across the altcoin market. Alt seasons typically occur after Bitcoin has established a strong uptrend and traders become comfortable seeking higher-risk, higher-reward opportunities. The Altcoin Season Index tracks when 75 percent of top altcoins have outperformed Bitcoin over the past 90 days. During alt seasons, even poor-quality projects can see 10-100x gains, creating extreme FOMO and speculation. Alt seasons also end violently, with altcoins crashing 80-95 percent as capital flows back to Bitcoin or exits crypto entirely.
      </p>

      <h2 id="intra-crypto">Intra-Crypto Correlations</h2>
      <p>
        Within the crypto market, correlations between assets tend to be high during extreme market moves and lower during stable periods. During market crashes, almost everything falls together, providing limited diversification benefit. During gradual bull markets, different sectors can move independently: DeFi tokens may rally while gaming tokens lag, or Layer 1 platforms may outperform while meme coins stagnate. Stablecoins provide the only consistently uncorrelated crypto assets. ETH/BTC correlation is high but not perfect, with Ethereum periodically gaining or losing ground relative to Bitcoin based on ecosystem-specific developments like the Merge or ETF approvals.
      </p>

      <h2 id="crypto-equity">Crypto-Equity Market Correlation</h2>
      <p>
        The correlation between Bitcoin and the Nasdaq 100 has increased significantly since 2020, frequently exceeding 0.6 during risk-on and risk-off episodes. This increased correlation is driven by institutional investors treating crypto as part of their risk-asset allocation, shared sensitivity to interest rates and monetary policy, and algorithmic trading strategies that trade crypto alongside other risk assets. During major market stress events (like the March 2020 COVID crash or the 2022 rate hiking cycle), crypto-equity correlation approaches 1.0 as everything sells off together. During crypto-specific events (like halvings or ETF launches), the correlation can break down significantly.
      </p>

      <h2 id="using-correlations">Using Correlations for Portfolio Management</h2>
      <p>
        Understanding correlations improves portfolio construction and risk management. Since crypto correlations increase during crashes, do not assume crypto portfolio diversification will protect you in a downturn. For traditional portfolio diversification, crypto&apos;s value has diminished as its equity correlation has risen. Within crypto, rotate allocation based on the BTC dominance cycle: overweight Bitcoin when dominance is rising, and consider selective altcoin exposure when dominance peaks and begins declining. Use correlation breakdowns as signals: when an asset that normally moves with Bitcoin diverges significantly, it may indicate a meaningful change in that asset&apos;s fundamentals.
      </p>

      <h2 id="indicators">Key Correlation Indicators</h2>
      <p>
        Track these indicators for correlation-based insights. Bitcoin Dominance (from CoinMarketCap or TradingView) shows the BTC versus altcoin cycle. The Altcoin Season Index (from BlockchainCenter) identifies alt season conditions. The BTC-Nasdaq correlation coefficient (available on TradingView) shows crypto-equity linkage. ETH/BTC ratio tracks Ethereum&apos;s relative strength versus Bitcoin. Total crypto market cap excluding Bitcoin (TOTAL2) shows altcoin market health independent of BTC. Fear and Greed Index readings across both crypto and traditional markets can signal when correlation regimes may shift. Combine these indicators to build a complete picture of market correlation dynamics.
      </p>
    </LearnPageLayout>
  );
}
