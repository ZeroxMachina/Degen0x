import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Jupiter (JUP)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about Jupiter (JUP), the leading DEX aggregator on Solana. Discover how it works, tokenomics, use cases, and how to buy JUP tokens.",
};

export default function JupiterPage() {
  return (
    <LearnPageLayout
      title="What Is Jupiter (JUP)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Jupiter is the leading decentralized exchange aggregator on Solana, routing trades across multiple liquidity sources to find the best prices for users. With its expansion into perpetual trading, launchpad services, and LST products, Jupiter has become the primary trading hub of the Solana ecosystem. JUP is the governance token of the Jupiter protocol."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-jupiter", title: "What Is Jupiter?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-jupiter-works", title: "How Jupiter Works", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "jupiter-tokenomics", title: "Jupiter Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "use-cases-ecosystem", title: "Use Cases & Ecosystem", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-jupiter", title: "How to Buy Jupiter", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-considerations", title: "Risks & Considerations", level: 2 }
      ]}
      faqs={[
        {
          question: "What is Jupiter?",
          answer:
            "Jupiter is the largest DEX aggregator on Solana that finds the best swap prices across multiple decentralized exchanges. It also offers perpetual trading, a launchpad, and other DeFi services.",
        },
        {
          question: "Where can I buy JUP?",
          answer:
            "JUP is available on Binance, Coinbase, Bybit, and through Jupiter itself on Solana. You can swap for JUP directly at jup.ag using any Solana-based token.",
        },
        {
          question: "Is Jupiter a good investment?",
          answer:
            "Jupiter dominates Solana DEX trading and continues to expand its product suite, but its value is closely tied to Solana ecosystem health. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Best Crypto Exchanges", href: "/exchanges/best", category: "Exchanges" },
        { title: "Solana", href: "/investing/crypto/solana", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Jupiter?</h2>
      <p>
        Jupiter is the most popular decentralized exchange aggregator built on Solana, launched in late 2021 by a pseudonymous team led by Meow. It aggregates liquidity from all major Solana DEXs to find optimal swap routes for traders, ensuring they always get the best available price with minimal slippage.
      </p>
      <p>
        Since its launch, Jupiter has processed hundreds of billions in cumulative trading volume and has become the default trading interface for Solana users. The platform has expanded well beyond simple swaps to include perpetual futures trading, dollar-cost averaging, limit orders, and a token launchpad.
      </p>
      <p>
        Jupiter&apos;s dominance in the Solana ecosystem makes it comparable to Uniswap on Ethereum, but with a broader product suite. The JUP token launched through one of the largest airdrops in crypto history, distributed to hundreds of thousands of active Solana traders.
      </p>

      <h2 id="how-it-works">How Jupiter Works</h2>
      <p>
        Jupiter&apos;s routing engine analyzes all available liquidity sources on Solana, including Raydium, Orca, Meteora, and others, to find the most efficient path for each trade. The algorithm can split trades across multiple routes and DEXs simultaneously to minimize price impact and slippage.
      </p>
      <p>
        Jupiter Perpetuals allows users to trade leveraged positions up to 100x on major assets using an oracle-based pricing model similar to GMX. The platform uses a liquidity pool (JLP) where liquidity providers earn fees from trading activity. All transactions settle on Solana with sub-second finality and minimal gas costs.
      </p>

      <h2 id="tokenomics">Jupiter Tokenomics</h2>
      <p>
        JUP has a total supply of 10 billion tokens. The initial airdrop distributed 40% of the supply to the community across multiple rounds, with 50% reserved for the team and stakeholders, and 10% allocated for liquidity. The distribution was designed to reward active Solana ecosystem users.
      </p>
      <p>
        JUP serves as a governance token, enabling holders to vote on protocol decisions through Jupiter&apos;s DAO. The community has voted on key decisions including token buybacks, emissions schedules, and product development priorities. Active governance participation is incentivized through voting rewards.
      </p>

      <h2 id="use-cases">Use Cases &amp; Ecosystem</h2>
      <p>
        Jupiter serves as the primary trading infrastructure for the entire Solana ecosystem. Its aggregator powers not only direct users but also many third-party applications that integrate Jupiter&apos;s swap API. The perpetuals platform competes with centralized exchanges for derivatives trading volume.
      </p>
      <p>
        Jupiter&apos;s LFG Launchpad provides a platform for new Solana projects to launch tokens with built-in liquidity and community support. The JUP staking and governance system gives token holders meaningful influence over one of crypto&apos;s most actively used protocols. JupSOL, Jupiter&apos;s liquid staking token, adds another revenue stream.
      </p>

      <h2 id="how-to-buy">How to Buy Jupiter</h2>
      <p>
        To buy JUP, you can use Jupiter itself at jup.ag by connecting a Solana wallet and swapping SOL or USDC for JUP. Alternatively, purchase JUP on centralized exchanges like Binance, Coinbase, or Bybit. For ecosystem participation, stake JUP in the governance portal to earn rewards and voting power.
      </p>

      <h2 id="risks">Risks &amp; Considerations</h2>
      <p>
        Jupiter&apos;s success is heavily dependent on the Solana ecosystem&apos;s continued growth. Any issues with Solana&apos;s network stability or a decline in Solana trading activity would directly impact Jupiter&apos;s revenue and token value. Smart contract risk exists across all Jupiter products.
      </p>
      <p>
        Competition from other aggregators and direct DEX usage could erode Jupiter&apos;s market share. The large token supply and ongoing airdrops create potential sell pressure. Regulatory scrutiny of DeFi trading platforms, particularly perpetual futures, poses an ongoing risk to the protocol.
      </p>
    </LearnPageLayout>
  );
}
