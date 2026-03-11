import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Blur (BLUR)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about Blur (BLUR), the NFT marketplace and lending platform for professional traders. Discover how it works, tokenomics, use cases, and how to buy BLUR.",
};

export default function BlurPage() {
  return (
    <LearnPageLayout
      title="What Is Blur (BLUR)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Blur is an NFT marketplace and lending protocol built for professional traders on Ethereum. Featuring zero marketplace fees, advanced trading tools, and the Blend lending protocol for NFT-backed loans, Blur quickly became the dominant NFT marketplace by volume, surpassing OpenSea through aggressive token incentives and trader-focused features."
      toc={[
        { id: "what-is", title: "What Is Blur?", level: 2 },
        { id: "how-it-works", title: "How Does Blur Work?", level: 2 },
        { id: "tokenomics", title: "BLUR Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy BLUR", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        {
          question: "What is Blur?",
          answer: "Blur is an NFT marketplace and lending protocol on Ethereum designed for professional traders, featuring zero fees, real-time data, and portfolio management tools.",
        },
        {
          question: "Where can I buy BLUR?",
          answer: "BLUR is available on Coinbase, Binance, OKX, Bybit, and other major exchanges.",
        },
        {
          question: "Is Blur a good investment?",
          answer: "Blur dominates NFT marketplace volume but depends on the broader NFT market recovery. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "The Sandbox", href: "/investing/crypto/sandbox", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Blur?</h2>
      <p>
        Blur was founded by Tieshun Roquerre (known as Pacman) and launched in October 2022, quickly disrupting the NFT marketplace landscape. The platform was designed from the ground up for professional NFT traders, offering real-time price feeds, portfolio analytics, sweep tools, and a bidding system that incentivizes providing liquidity to NFT collections. Blur&apos;s aggressive airdrop campaigns and zero-fee model attracted volume away from OpenSea.
      </p>
      <p>
        In 2023, Blur launched Blend, a peer-to-peer perpetual lending protocol for NFTs. Blend allows NFT holders to borrow ETH against their NFTs without fixed expiration dates, and lenders can offer loans with custom terms. Blur also launched Blast, a Layer 2 network offering native yield on ETH and stablecoins.
      </p>

      <h2 id="how-it-works">How Does Blur Work?</h2>
      <p>
        Blur aggregates listings from multiple NFT marketplaces and provides a unified trading interface with professional-grade tools. The bidding pool system allows traders to place bids across entire collections efficiently. Blend uses a perpetual loan structure where loans have no expiration but can be called by lenders, giving borrowers flexibility while providing lenders with ongoing interest income.
      </p>

      <h2 id="tokenomics">BLUR Tokenomics</h2>
      <p>
        BLUR has a total supply of 3 billion tokens. The distribution includes allocations for community airdrops, contributors, investors, and the advisory team. BLUR is used for governance over the Blur marketplace and Blast network, incentive distribution for traders and lenders, and staking for protocol fee sharing. Multiple airdrop seasons have distributed BLUR to active marketplace participants.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        BLUR powers governance over the marketplace and Blast L2, incentivizes trading activity and liquidity provision, enables NFT-backed lending through Blend, and provides fee-sharing for stakers. The platform serves as the primary venue for high-volume NFT trading on Ethereum, particularly for blue-chip collections like CryptoPunks and Bored Apes.
      </p>

      <h2 id="how-to-buy">How to Buy BLUR</h2>
      <p>
        To buy BLUR, register on Coinbase, Binance, or OKX. Complete identity verification, deposit funds, and purchase BLUR tokens. You can also earn BLUR by actively trading on the Blur marketplace and participating in bidding pools. BLUR is an ERC-20 token compatible with MetaMask and Ledger hardware wallets.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        Blur&apos;s volume has been inflated by token incentive programs, and organic trading activity without incentives may be significantly lower. The NFT market remains depressed from its 2021-2022 peak, limiting fee revenue potential. Competition from OpenSea, Magic Eden, and emerging marketplace aggregators adds pressure.
      </p>
      <p>
        The zero-fee model means Blur generates limited direct revenue from trading. Token unlock schedules for investors and team members create selling pressure. The sustainability of incentive-driven marketplace dominance is questionable as token distributions decrease. NFT lending through Blend carries liquidation risks during market downturns.
      </p>
    </LearnPageLayout>
  );
}
