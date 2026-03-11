import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Index Funds Guide (${CURRENT_YEAR}) - Diversified Investing | ${SITE_NAME}`,
  description: `Learn about crypto index funds in ${CURRENT_YEAR}. How they work, top options, benefits of diversified crypto exposure, and how to invest in crypto index products.`,
  alternates: { canonical: "/investing/learn/crypto-index-funds" },
};

const toc = [
  { id: "what-are-crypto-index-funds", title: "What Are Crypto Index Funds?", level: 2 },
  { id: "how-they-work", title: "How Crypto Index Funds Work", level: 2 },
  { id: "types", title: "Types of Crypto Index Products", level: 2 },
  { id: "benefits-risks", title: "Benefits and Risks", level: 2 },
  { id: "how-to-invest", title: "How to Invest in Crypto Index Funds", level: 2 },
];

const faqs = [
  { question: "What is the best crypto index fund?", answer: "The best crypto index fund depends on your goals. For broad market exposure, products tracking the top 10-20 cryptocurrencies by market cap are popular. Bitwise 10 Crypto Index Fund and DeFi Pulse Index (DPI) are well-known options. For traditional investors, crypto ETFs that track multiple assets are increasingly available." },
  { question: "Are crypto index funds safer than buying individual coins?", answer: "Crypto index funds reduce single-asset risk through diversification, but they still carry the overall volatility risk of the crypto market. If one coin in the index drops 90%, the impact on your portfolio is limited. However, during broad market downturns, index funds still decline significantly. They are safer than picking individual altcoins but not risk-free." },
  { question: "Can I create my own crypto index fund?", answer: "Yes. You can manually replicate an index strategy by buying multiple cryptocurrencies in proportion to their market cap or using equal weighting. Some platforms like Shrimpy and 3Commas offer automated portfolio rebalancing that effectively creates a personal index. The downside is more management effort and transaction fees." },
  { question: "What fees do crypto index funds charge?", answer: "Fees vary widely. On-chain DeFi index tokens like DPI charge streaming fees around 0.95% annually. Centralized crypto index funds may charge 1-2.5% management fees. Crypto ETFs typically charge 0.5-1.5%. Compare fees carefully as they compound significantly over time and directly reduce your returns." },
  { question: "How often do crypto index funds rebalance?", answer: "Most crypto index funds rebalance monthly or quarterly. During rebalancing, assets that have grown beyond their target weight are trimmed, and underweight assets are bought. This systematic approach ensures the fund maintains its intended allocation and avoids overconcentration in any single asset." },
];

const relatedArticles = [
  { title: "Dollar-Cost Averaging Strategy", href: "/investing/learn/dollar-cost-averaging", category: "Investing" },
  { title: "Crypto Portfolio Rebalancing", href: "/investing/learn/crypto-portfolio-rebalancing", category: "Investing" },
  { title: "DeFi vs CeFi Investing", href: "/investing/learn/defi-vs-cefi-investing", category: "Investing" },
];

export default function CryptoIndexFundsPage() {
  return (
    <LearnPageLayout
      title="Crypto Index Funds: Diversified Crypto Investing"
      categoryName="Crypto Investing"
      categorySlug="investing"
      readTime="9 min"
      intro="Crypto index funds offer a way to gain broad exposure to the cryptocurrency market without picking individual coins. Similar to how an S&P 500 index fund tracks the stock market, crypto index products track baskets of digital assets. This guide covers how they work, available options, and whether they belong in your portfolio."
      toc={toc}
      faqs={faqs}
      relatedArticles={relatedArticles}
    >
      <h2 id="what-are-crypto-index-funds">What Are Crypto Index Funds?</h2>
      <p>
        A crypto index fund is an investment product that holds a basket of cryptocurrencies according
        to a defined methodology, typically weighted by market capitalization. Instead of researching
        and buying individual tokens, you buy one product that gives you exposure to many assets at
        once. The concept mirrors traditional index investing, which has proven to outperform most
        active managers over long time horizons.
      </p>
      <p>
        Crypto index funds exist in several forms: on-chain DeFi tokens like DeFi Pulse Index (DPI),
        centralized fund products like Bitwise 10 Crypto Index, and increasingly as regulated ETFs.
        Each format has different accessibility, fees, and regulatory characteristics, but the core
        idea is the same: diversified exposure through a single investment.
      </p>

      <h2 id="how-they-work">How Crypto Index Funds Work</h2>
      <p>
        Most crypto index funds use market-cap weighting, meaning larger cryptocurrencies like Bitcoin
        and Ethereum make up a bigger percentage of the fund. The fund periodically rebalances, selling
        assets that have grown above their target weight and buying those that have fallen below. This
        mechanical process removes emotional decision-making and ensures the portfolio stays aligned
        with market composition.
      </p>
      <p>
        Some index products use alternative weighting methods. Equal-weight indexes give each asset the
        same allocation, providing more exposure to smaller coins. Fundamental-weighted indexes use
        metrics like transaction volume, developer activity, or network revenue to determine allocations.
        Each approach has trade-offs between simplicity, diversification, and performance characteristics.
      </p>

      <h2 id="types">Types of Crypto Index Products</h2>
      <p>
        On-chain index tokens are ERC-20 tokens that represent a basket of underlying assets. DeFi
        Pulse Index (DPI) tracks top DeFi tokens, while the Metaverse Index (MVI) tracks metaverse
        and gaming tokens. These can be bought on decentralized exchanges and held in any Ethereum
        wallet. They offer composability with DeFi protocols but require on-chain transaction knowledge.
      </p>
      <p>
        Centralized index funds like Bitwise and Grayscale products are managed by professional firms
        and available through traditional brokerage accounts. Crypto ETFs approved by regulators provide
        the easiest access for traditional investors. These products handle custody, rebalancing, and
        compliance, but charge higher fees and may trade at premiums or discounts to their net asset value.
      </p>

      <h2 id="benefits-risks">Benefits and Risks</h2>
      <p>
        The primary benefit is diversification. If you hold a single altcoin and it fails, you lose
        everything. An index fund spreads that risk across many assets. Index funds also save time by
        eliminating the need to research, monitor, and trade individual tokens. Automatic rebalancing
        ensures you systematically take profits from winners and buy underperforming assets at lower prices.
      </p>
      <p>
        The risks include market-wide downturns where all crypto assets decline together, reducing the
        benefit of diversification. Index funds may also include underperforming tokens that drag down
        returns. Management fees eat into returns over time. On-chain index tokens carry additional smart
        contract risk. Understanding these trade-offs helps you decide how much of your portfolio to
        allocate to index products versus individual holdings.
      </p>

      <h2 id="how-to-invest">How to Invest in Crypto Index Funds</h2>
      <p>
        For DeFi-native investors, buying on-chain index tokens is straightforward. Purchase DPI or
        similar tokens on Uniswap or other DEXs using ETH or stablecoins. For traditional investors,
        crypto ETFs available through brokerage accounts offer the simplest entry point. Check your
        broker for available crypto ETF products and compare their expense ratios and underlying holdings.
      </p>
      <p>
        A practical approach is to allocate a core portion of your crypto portfolio (50-70%) to index
        products for diversified exposure, and use the remaining portion for individual token picks
        you have high conviction in. Combine index investing with dollar-cost averaging for a
        disciplined, low-maintenance strategy that captures broad market growth while managing risk
        through diversification and time-based entry.
      </p>
    </LearnPageLayout>
  );
}
