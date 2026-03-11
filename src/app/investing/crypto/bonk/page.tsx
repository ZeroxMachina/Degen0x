import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Bonk (BONK)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about Bonk (BONK), the Solana-based meme coin that was airdropped to the community. Discover BONK tokenomics, ecosystem integrations, and how to buy.",
};

export default function BonkPage() {
  return (
    <LearnPageLayout
      title="What Is Bonk (BONK)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Bonk (BONK) is a Shiba Inu-themed meme coin built on the Solana blockchain. Launched on Christmas Day 2022, BONK was airdropped to Solana NFT holders and DeFi users, revitalizing the Solana ecosystem during a challenging market period. It has since become the most prominent meme coin on Solana."
      toc={[
        { id: "what-is", title: "What Is Bonk?", level: 2 },
        { id: "how-it-works", title: "How Does Bonk Work?", level: 2 },
        { id: "tokenomics", title: "BONK Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy BONK", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        {
          question: "What is Bonk?",
          answer:
            "Bonk (BONK) is the first major meme coin on Solana, launched via airdrop in December 2022. It was created as a community token to reinvigorate the Solana ecosystem after the FTX collapse and has grown into a widely integrated asset across Solana DeFi and gaming.",
        },
        {
          question: "Where can I buy BONK?",
          answer:
            "BONK is available on Coinbase, Binance, Kraken, and other major exchanges. On Solana, it can be swapped through Jupiter, Raydium, or Orca decentralized exchanges.",
        },
        {
          question: "Is Bonk a good investment?",
          answer:
            "BONK is a speculative meme coin, but it has broader ecosystem integration than most meme tokens due to its role within Solana DeFi and gaming. Its value remains heavily sentiment-driven, so it carries significant risk.",
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
        <h2>What Is Bonk?</h2>
        <p>
          Bonk (BONK) is a Solana-native meme coin that launched on December 25, 2022. The project distributed 50% of its total supply via airdrop to Solana NFT collectors, developers, DeFi participants, and community members. This generous airdrop helped restore confidence in the Solana ecosystem, which was struggling after the FTX exchange collapse. BONK quickly became a symbol of community resilience and grassroots crypto culture on Solana.
        </p>
        <p>
          Since its launch, BONK has been integrated into numerous Solana protocols, accepted by merchants, and listed on virtually every major centralized exchange. The token has catalyzed a broader meme coin ecosystem on Solana and remains the chain's most recognized community token.
        </p>
      </section>

      <section id="how-it-works">
        <h2>How Does Bonk Work?</h2>
        <p>
          BONK is an SPL token on the Solana blockchain, benefiting from Solana's high throughput and extremely low transaction fees. There is no custom consensus mechanism or proprietary smart contract logic. Transactions settle in under a second and cost fractions of a cent. BONK has been integrated into the BonkSwap decentralized exchange and various Solana-based applications. The community-led Bonk DAO oversees treasury management and ecosystem development decisions.
        </p>
        <p>
          The project has expanded through partnerships with Solana ecosystem projects, enabling BONK to be used in gaming, tipping, payments, and DeFi. BONKBot, a Telegram-based trading bot, became one of the most popular tools for trading Solana tokens.
        </p>
      </section>

      <section id="tokenomics">
        <h2>BONK Tokenomics</h2>
        <p>
          BONK launched with a total supply of approximately 93.5 trillion tokens. Fifty percent was airdropped to the Solana community, with the remainder allocated to the development team, marketing, liquidity provisioning, and the Bonk DAO treasury. The project has conducted significant token burns, destroying trillions of BONK to reduce supply. This deflationary mechanism, combined with growing ecosystem demand, is designed to create long-term value for holders. Staking opportunities are available through integrated Solana DeFi protocols.
        </p>
      </section>

      <section id="use-cases">
        <h2>Key Use Cases</h2>
        <p>
          BONK is used as a tipping currency across social platforms, a payment token accepted by select merchants, and a tradable asset on centralized and decentralized exchanges. Within the Solana ecosystem, BONK serves as a gaming currency, a liquidity pair token on DEXs, and a community governance token through Bonk DAO. The token has been integrated into lending protocols, NFT marketplaces, and payment applications. BONKBot enables Telegram-based Solana token trading with BONK as a key pair.
        </p>
      </section>

      <section id="how-to-buy">
        <h2>How to Buy BONK</h2>
        <p>
          BONK is listed on Coinbase, Binance, Kraken, Bybit, and most other major centralized exchanges. For on-chain trading, Jupiter aggregator, Raydium, and Orca on Solana offer the best liquidity. To buy, fund your exchange account or Solana wallet with SOL, navigate to the BONK trading pair, and execute your trade. For self-custody, store BONK in Phantom, Solflare, or a Ledger hardware wallet. Dollar-cost averaging is recommended given the high volatility of meme coins.
        </p>
      </section>

      <section id="risks">
        <h2>Risks and Considerations</h2>
        <p>
          BONK is a meme coin subject to extreme price volatility driven by social sentiment rather than fundamental value. The enormous total supply, even after burns, means sustained demand is necessary to support price levels. Competition from other Solana meme coins could dilute attention and trading volume. Solana network outages, though increasingly rare, can temporarily prevent trading and transfers. As with all meme coins, BONK carries the risk of rapid price declines during bearish market conditions.
        </p>
      </section>
    </LearnPageLayout>
  );
}
