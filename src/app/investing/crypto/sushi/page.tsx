import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is SushiSwap (SUSHI)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about SushiSwap (SUSHI), the community-driven multi-chain DEX. Discover SUSHI tokenomics, cross-chain features, and how to buy.",
};

export default function SushiPage() {
  return (
    <LearnPageLayout
      title="What Is SushiSwap (SUSHI)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="SushiSwap (SUSHI) is a community-driven decentralized exchange deployed across multiple blockchain networks. Originally launched in 2020 as a fork of Uniswap V2, SushiSwap has evolved into a multi-chain DeFi platform offering token swaps, lending, and cross-chain trading capabilities. SUSHI serves as the governance and fee-sharing token."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-sushiswap", title: "What Is SushiSwap?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-sushiswap-work", title: "How Does SushiSwap Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "sushi-tokenomics", title: "SUSHI Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-sushi", title: "How to Buy SUSHI", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        {
          question: "What is SushiSwap?",
          answer:
            "SushiSwap is a multi-chain decentralized exchange that started as a Uniswap fork and has grown into a community-governed DeFi platform with AMM trading, lending, and cross-chain swap features.",
        },
        {
          question: "Where can I buy SUSHI?",
          answer:
            "SUSHI is available on Coinbase, Binance, Kraken, and other major exchanges. It can also be purchased on SushiSwap itself or Uniswap.",
        },
        {
          question: "Is SushiSwap a good investment?",
          answer:
            "SUSHI offers governance and fee-sharing rights in a multi-chain DEX. However, the protocol has faced governance challenges, leadership changes, and intense competition from Uniswap and chain-native DEXs.",
        },
      ]}
      relatedArticles={[
        {
          title: "Best Cryptos to Buy",
          href: "/investing/best/cryptos-to-buy",
          category: "Investing",
        },
        {
          title: "How to Invest in Crypto",
          href: "/investing/learn/how-to-invest-in-crypto",
          category: "Investing",
        },
      ]}
    >
      <section id="what-is">
        <h2>What Is SushiSwap?</h2>
        <p>
          SushiSwap is a decentralized exchange that emerged in August 2020 through one of DeFi's most dramatic launches: a community fork of Uniswap V2 that attracted over a billion dollars in liquidity within days. The protocol's controversial "vampire attack" migrated liquidity from Uniswap by offering SUSHI token incentives to liquidity providers. Despite its contentious origins, SushiSwap has matured into a legitimate multi-chain DeFi platform with a dedicated community.
        </p>
        <p>
          The protocol expanded beyond simple AMM trading to include Kashi for isolated lending markets, a launchpad for new tokens, and cross-chain swap functionality through SushiXSwap. SushiSwap has been deployed on over 15 blockchain networks, making it one of the most broadly available DEXs in the market.
        </p>
      </section>

      <section id="how-it-works">
        <h2>How Does SushiSwap Work?</h2>
        <p>
          SushiSwap uses an automated market maker model where liquidity providers deposit token pairs into pools and earn a portion of trading fees. The protocol supports both traditional constant-product AMM pools and concentrated liquidity positions. A portion of all trading fees is directed to the SushiBar, where SUSHI stakers receive xSUSHI tokens that appreciate in value as fees accumulate. Cross-chain swaps are facilitated through the SushiXSwap router which leverages bridge protocols.
        </p>
        <p>
          Governance is conducted through snapshot voting and on-chain execution, with SUSHI holders directing protocol development, fee structures, and treasury management. The protocol has undergone several leadership transitions and governance restructurings aimed at improving operational efficiency and community alignment.
        </p>
      </section>

      <section id="tokenomics">
        <h2>SUSHI Tokenomics</h2>
        <p>
          SUSHI has a maximum supply of 250 million tokens. Initially, token emissions were very high to attract liquidity, but the emission schedule has been substantially reduced. The SushiBar staking mechanism allows holders to earn protocol fees by staking SUSHI for xSUSHI. A percentage of all trading fees across all chains is used to buy back SUSHI and distribute to stakers. The tokenomics have been revised multiple times through governance to better align incentives and reduce sell pressure.
        </p>
      </section>

      <section id="use-cases">
        <h2>Key Use Cases</h2>
        <p>
          SUSHI is used for governance voting, fee revenue sharing through staking, and as a multi-chain DeFi utility token. The SushiSwap platform enables token swaps across multiple chains, liquidity provision for yield, isolated lending through Kashi, and cross-chain asset transfers. The protocol's broad multi-chain deployment makes it accessible to users across many ecosystems, from Ethereum and Arbitrum to Polygon and Avalanche.
        </p>
      </section>

      <section id="how-to-buy">
        <h2>How to Buy SUSHI</h2>
        <p>
          SUSHI is available on virtually every major centralized exchange including Coinbase, Binance, and Kraken. On decentralized exchanges, it can be purchased on SushiSwap itself or Uniswap. After buying, consider staking SUSHI in the SushiBar to earn a share of protocol trading fees. SUSHI can be stored in any Ethereum-compatible wallet and is supported on multiple chains.
        </p>
      </section>

      <section id="risks">
        <h2>Risks and Considerations</h2>
        <p>
          SushiSwap has experienced governance instability, leadership controversies, and treasury management challenges since its inception. Competition from Uniswap and chain-native DEXs continues to pressure market share and trading volume. The broad multi-chain deployment, while increasing accessibility, also spreads development resources thin and increases security complexity. Historical high token emissions have created significant sell pressure. Smart contract risk is elevated due to the wide range of products and cross-chain integrations.
        </p>
      </section>
    </LearnPageLayout>
  );
}
