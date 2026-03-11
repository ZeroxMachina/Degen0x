import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Aerodrome Finance (AERO)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about Aerodrome Finance (AERO), the leading DEX and liquidity layer on Base chain. Discover AERO tokenomics, ve(3,3) model, and how to buy.",
};

export default function AerodromePage() {
  return (
    <LearnPageLayout
      title="What Is Aerodrome Finance (AERO)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Aerodrome Finance (AERO) is the dominant decentralized exchange on Coinbase's Base Layer 2 network. Launched by the Velodrome team as its sister protocol on Base, Aerodrome uses the proven ve(3,3) tokenomics model to create an efficient liquidity marketplace. AERO has become the highest TVL protocol on Base and one of the highest-revenue DEXs across all chains."
      toc={[
        { id: "what-is", title: "What Is Aerodrome Finance?", level: 2 },
        { id: "how-it-works", title: "How Does Aerodrome Finance Work?", level: 2 },
        { id: "tokenomics", title: "AERO Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy AERO", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        {
          question: "What is Aerodrome Finance?",
          answer:
            "Aerodrome is the leading DEX on Base chain using the ve(3,3) model from Velodrome. veAERO holders vote on emissions direction, earning trading fees and bribes while coordinating liquidity across the Base ecosystem.",
        },
        {
          question: "Where can I buy AERO?",
          answer:
            "AERO can be purchased on Aerodrome Finance on Base chain or on centralized exchanges including Coinbase and KuCoin.",
        },
        {
          question: "Is Aerodrome Finance a good investment?",
          answer:
            "AERO has generated impressive revenue as the dominant DEX on Base. Its value depends on continued Base chain growth and the sustainability of its emission and bribe model.",
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
        <h2>What Is Aerodrome Finance?</h2>
        <p>
          Aerodrome Finance is the central liquidity hub on Coinbase's Base Layer 2 network. Created by the team behind Velodrome Finance on Optimism, Aerodrome brought the battle-tested ve(3,3) model to Base when the chain launched in August 2023. The protocol rapidly captured the majority of DEX trading volume on Base and has consistently ranked among the highest-revenue DeFi protocols across all blockchains.
        </p>
        <p>
          Aerodrome's success is closely linked to Base's explosive growth as one of the most active Layer 2 networks. The protocol supports both standard AMM pools and concentrated liquidity pools, providing versatile options for liquidity providers. Its position as the default liquidity layer on Base gives it strong network effects and protocol-level partnerships across the ecosystem.
        </p>
      </section>

      <section id="how-it-works">
        <h2>How Does Aerodrome Finance Work?</h2>
        <p>
          Aerodrome operates identically to Velodrome's ve(3,3) model. AERO holders lock tokens to receive veAERO NFTs with voting power proportional to the lock duration (up to four years). veAERO holders vote weekly on gauge emissions, directing AERO rewards to specific liquidity pools. Protocols incentivize votes through bribes, creating a marketplace for liquidity direction. veAERO voters earn 100% of trading fees from pools they vote for, plus any bribe rewards.
        </p>
        <p>
          Concentrated liquidity pools (Slipstream) offer enhanced capital efficiency, allowing LPs to focus their capital within specific price ranges. The combination of ve(3,3) incentive alignment and concentrated liquidity has created deep, efficient markets for Base ecosystem tokens.
        </p>
      </section>

      <section id="tokenomics">
        <h2>AERO Tokenomics</h2>
        <p>
          AERO follows a weekly emission schedule with gradual decay. veAERO holders receive anti-dilution rebases to maintain their proportional voting power. The initial supply was allocated across the community, team, ecosystem grants, and protocol partners. The combination of strong protocol revenue (from trading fees and bribes) and the lock mechanism for veAERO creates a supply dynamic where a significant portion of AERO is locked and removed from liquid circulation.
        </p>
      </section>

      <section id="use-cases">
        <h2>Key Use Cases</h2>
        <p>
          AERO is used for locking as veAERO to participate in governance, direct emissions, and earn fees and bribes. The platform enables token swaps, concentrated liquidity provision, and ecosystem-wide liquidity coordination on Base. Protocols launching on Base frequently use Aerodrome as their primary liquidity bootstrapping tool. The protocol has become essential infrastructure for the Base ecosystem, similar to how Velodrome serves Optimism.
        </p>
      </section>

      <section id="how-to-buy">
        <h2>How to Buy AERO</h2>
        <p>
          AERO is available on Coinbase, KuCoin, and other centralized exchanges. It can be purchased directly on Aerodrome Finance by bridging ETH to Base and swapping. After buying, locking AERO as veAERO to earn fees and bribes is the primary strategy for long-term holders. Store in MetaMask configured for Base network or Coinbase Wallet for native Base support.
        </p>
      </section>

      <section id="risks">
        <h2>Risks and Considerations</h2>
        <p>
          AERO depends heavily on Base chain growth and activity. Weekly emissions create dilution for non-locked holders. If Base ecosystem activity slows or migrates to other chains, AERO's fee revenue and bribe income would decline. Competition from Uniswap on Base is an ongoing factor. The ve(3,3) model requires continuous protocol participation in bribing to remain attractive. Smart contract risk, four-year lock commitment for maximum governance power, and the relative youth of the Base ecosystem are additional considerations.
        </p>
      </section>
    </LearnPageLayout>
  );
}
