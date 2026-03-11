import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Raydium Token (RAY)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about Raydium Token (RAY), the AMM and liquidity provider on Solana. Discover RAY tokenomics, concentrated liquidity, and how to buy.",
};

export default function RaydiumTokenPage() {
  return (
    <LearnPageLayout
      title="What Is Raydium Token (RAY)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Raydium Token (RAY) is the native token of Raydium, one of the leading automated market makers on the Solana blockchain. Raydium provides liquidity infrastructure for the Solana ecosystem, offering concentrated liquidity pools, a token launchpad, and integration with the broader Solana DeFi stack. RAY is used for staking, governance, and fee revenue."
      toc={[
        { id: "what-is", title: "What Is Raydium Token?", level: 2 },
        { id: "how-it-works", title: "How Does Raydium Work?", level: 2 },
        { id: "tokenomics", title: "RAY Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy RAY", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        {
          question: "What is Raydium Token?",
          answer:
            "RAY is the governance and utility token of Raydium, a major AMM and liquidity protocol on Solana. Raydium provides concentrated liquidity pools and a token launchpad (AcceleRaytor) for the Solana ecosystem.",
        },
        {
          question: "Where can I buy RAY?",
          answer:
            "RAY is available on Binance, Coinbase, KuCoin, and other exchanges. It can also be purchased on Raydium itself or through Jupiter aggregator on Solana.",
        },
        {
          question: "Is Raydium Token a good investment?",
          answer:
            "RAY benefits from Solana ecosystem growth and high trading volume. The meme coin trading boom has significantly boosted Raydium's fees. Competition from Jupiter and Orca, along with Solana network risks, are considerations.",
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
        <h2>What Is Raydium Token?</h2>
        <p>
          Raydium is one of the primary automated market maker protocols on Solana, launched in early 2021. The protocol serves as a foundational liquidity layer for the Solana ecosystem, powering token swaps and providing liquidity for a wide range of trading pairs. Raydium gained significant prominence during the Solana meme coin boom, as new tokens frequently launched through Raydium pools, generating substantial trading fees.
        </p>
        <p>
          The protocol offers concentrated liquidity market making (CLMM) pools that allow liquidity providers to concentrate their capital within specific price ranges, improving capital efficiency. Raydium also operates AcceleRaytor, a launchpad for new Solana projects, and integrates with the Jupiter aggregator to serve as a key routing destination for Solana trades.
        </p>
      </section>

      <section id="how-it-works">
        <h2>How Does Raydium Work?</h2>
        <p>
          Raydium offers multiple pool types including standard AMM pools, concentrated liquidity pools, and constant product pools. Concentrated liquidity pools allow LPs to set custom price ranges, earning more fees when trading occurs within their selected range. The protocol charges trading fees that are split between liquidity providers, RAY buybacks, and the protocol treasury. Raydium benefits from Solana's high throughput and low fees, enabling efficient trading with minimal costs.
        </p>
        <p>
          New token launches frequently use Raydium's pool creation tools, making it a default venue for initial liquidity. The integration with Jupiter means that even trades routed through the aggregator can settle against Raydium pools, expanding the protocol's effective reach beyond its direct user interface.
        </p>
      </section>

      <section id="tokenomics">
        <h2>RAY Tokenomics</h2>
        <p>
          RAY has a total supply of 555 million tokens. Distribution includes allocations for mining reserves, the partnership and ecosystem fund, team and advisors, and community and seed funding. A portion of all trading fees generated on the platform is used to buy back RAY from the open market. RAY staking allows holders to earn additional rewards and participate in AcceleRaytor token launches. The protocol's revenue has grown significantly with the explosion of meme coin trading on Solana.
        </p>
      </section>

      <section id="use-cases">
        <h2>Key Use Cases</h2>
        <p>
          RAY is used for staking to earn protocol rewards, governance participation, and AcceleRaytor launchpad access. The Raydium platform enables token swaps, concentrated liquidity provision, new token launches, and yield farming. The protocol serves individual traders, liquidity providers seeking yield, new projects launching tokens, and aggregators routing trades through Solana. Raydium's role as a primary launch venue for meme coins has made it a key piece of Solana DeFi infrastructure.
        </p>
      </section>

      <section id="how-to-buy">
        <h2>How to Buy RAY</h2>
        <p>
          RAY is available on Binance, Coinbase, KuCoin, and other centralized exchanges. On Solana, it can be purchased through Raydium directly or via Jupiter aggregator. To buy on-chain, transfer SOL to a Phantom or Solflare wallet, connect to Raydium or Jupiter, and swap for RAY. After purchasing, consider staking RAY on the platform for additional rewards. Store in any Solana-compatible wallet or a Ledger hardware wallet.
        </p>
      </section>

      <section id="risks">
        <h2>Risks and Considerations</h2>
        <p>
          Raydium's success is heavily tied to Solana ecosystem activity. A decline in Solana trading volume, particularly in the meme coin sector, would directly impact RAY's fee generation. Competition from Orca, Jupiter's own AMM, and emerging Solana DEXs creates ongoing pressure. Solana network stability, while improved, remains a concern given historical outages. Smart contract risk on Solana operates differently from Ethereum, and the protocol has experienced security incidents in the past. Regulatory actions affecting token launches and meme coin trading could also impact the platform.
        </p>
      </section>
    </LearnPageLayout>
  );
}
