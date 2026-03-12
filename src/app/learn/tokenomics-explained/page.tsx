import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Tokenomics Explained: Evaluating Token Economics (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn how to evaluate tokenomics: supply mechanics, distribution, vesting schedules, value accrual, inflation vs deflation, and what makes sustainable token economic models.",
};

export default function TokenomicsExplainedPage() {
  return (
    <LearnPageLayout
      title="Tokenomics Explained: Evaluating Token Economics"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="9 min read"
      intro="Tokenomics — a portmanteau of 'token' and 'economics' — describes the economic design and incentive structure of a cryptocurrency. It encompasses supply mechanics, distribution, utility, governance rights, value capture, and the incentive alignment between different stakeholders. Good tokenomics can drive sustainable growth and value creation, while poor tokenomics can doom even technically excellent projects. Understanding tokenomics is essential for evaluating whether a token is likely to appreciate, stagnate, or decline over time."
      toc={[
        { id: "supply-mechanics", title: "supply-mechanics", level: 2 },
        { id: "supply-mechanics", title: "Supply Mechanics", level: 2 },
        { id: "distribution", title: "distribution", level: 2 },
        { id: "token-distribution-and-vesting", title: "Token Distribution and Vesting", level: 2 },
        { id: "utility-value", title: "utility-value", level: 2 },
        { id: "token-utility-and-value-accrual", title: "Token Utility and Value Accrual", level: 2 },
        { id: "inflation-deflation", title: "inflation-deflation", level: 2 },
        { id: "inflation-vs-deflation-models", title: "Inflation vs Deflation Models", level: 2 },
        { id: "evaluating", title: "evaluating", level: 2 },
        { id: "evaluating-tokenomics-in-practice", title: "Evaluating Tokenomics in Practice", level: 2 }
      ]}
      faqs={[
        {
          question: "What is the difference between market cap and fully diluted valuation?",
          answer:
            "Market cap is the current price multiplied by circulating supply — the tokens currently tradeable. Fully Diluted Valuation (FDV) is the current price multiplied by the maximum total supply, including tokens not yet in circulation. A large gap between market cap and FDV indicates significant future token dilution from team allocations, investor unlocks, and emission schedules.",
        },
        {
          question: "Are deflationary tokens always better investments?",
          answer:
            "Not necessarily. While decreasing supply can support price appreciation, it only matters if there is genuine demand for the token. A deflationary token with no utility or users will still decline in value. Moderate inflation can be healthy if it funds ecosystem growth, rewards stakers, and attracts new users. The sustainability of the economic model matters more than whether supply is increasing or decreasing.",
        },
        {
          question: "How do vesting schedules affect token prices?",
          answer:
            "Large token unlocks (cliff vesting events) can create significant selling pressure as early investors and team members gain access to their allocations and may sell. Check token unlock calendars before investing — upcoming large unlocks can depress prices even if the project's fundamentals are strong. Gradual linear vesting creates less concentrated selling pressure than cliff-based vesting.",
        },
      ]}
      relatedArticles={[
        { title: "Fundamental Analysis for Crypto", href: "/learn/fundamental-analysis-crypto", category: "Learn" },
        { title: "Crypto Market Indicators", href: "/learn/crypto-market-indicators", category: "Learn" },
        { title: "What Is a DAO?", href: "/learn/what-is-a-dao", category: "Learn" },
        { title: "Risk Management in Crypto", href: "/learn/risk-management-crypto", category: "Learn" },
      ]}
    >
      <section id="supply-mechanics">
        <h2>Supply Mechanics</h2>
        <p>
          Token supply defines the scarcity and inflation characteristics of a cryptocurrency. Maximum supply (or total supply cap) is the absolute maximum number of tokens that will ever exist — Bitcoin's 21 million cap is the most famous example. Total supply includes all tokens that have been created, including those not yet in circulation. Circulating supply is the number of tokens currently available for trading, excluding locked, vested, or burned tokens. Understanding all three numbers is essential for accurate valuation.
        </p>
        <p>
          Emission schedules determine how quickly new tokens enter circulation. Bitcoin has a predictable, decreasing emission through halving events. Many DeFi tokens have high initial emissions that decrease over a set period. Some tokens have no cap, with perpetual inflation at a fixed or variable rate. The key question is whether the emission schedule creates sustainable incentives or unsustainable dilution: are new tokens being distributed to users who provide genuine value to the network, or are they simply inflating supply while insiders sell?
        </p>
      </section>

      <section id="distribution">
        <h2>Token Distribution and Vesting</h2>
        <p>
          How tokens are initially distributed reveals much about a project's priorities and potential risks. A typical distribution might include allocations for the team and founders (15-25%), investors (15-25%), ecosystem incentives and community (20-40%), treasury (10-20%), and advisors (2-5%). The specific percentages matter less than the vesting schedules: how quickly do insiders gain access to their tokens?
        </p>
        <p>
          Healthy vesting typically involves a cliff period (6-12 months where no tokens are released) followed by gradual linear vesting over 2-4 years. Projects where the team and investors can sell a large percentage immediately at launch are concerning, as they have less incentive to drive long-term value. Fair launches, where tokens are distributed through mining, airdrops, or public sales rather than pre-allocated to insiders, often create stronger community alignment, though they may face challenges in funding development.
        </p>
      </section>

      <section id="utility-value">
        <h2>Token Utility and Value Accrual</h2>
        <p>
          Token utility defines the reasons someone would hold or use a token beyond speculation. Governance tokens grant voting power over protocol decisions — the more consequential the decisions and the more valuable the protocol, the more valuable the governance right. Fee tokens require payment in the native token to use the platform, creating organic demand proportional to usage. Staking tokens earn yield from protocol revenue, creating a direct link between protocol success and token value.
        </p>
        <p>
          Value accrual describes how a protocol's success translates into token value. The strongest models involve revenue sharing: a percentage of protocol fees is distributed to token holders (through staking rewards or buyback-and-burn mechanisms), directly linking token value to protocol performance. Weaker models rely solely on governance value or speculative demand without a clear mechanism for the token to capture the value the protocol creates. When evaluating tokens, always ask: if this protocol grows 10x, does the token value grow proportionally, and through what specific mechanism?
        </p>
      </section>

      <section id="inflation-deflation">
        <h2>Inflation vs Deflation Models</h2>
        <p>
          Inflationary tokens continuously create new supply, typically to fund staking rewards, liquidity mining, or ecosystem development. Ethereum has a variable inflation rate that can become deflationary during periods of high network usage (when burned transaction fees exceed new issuance). Many DeFi tokens have high initial inflation that tapers over time as emission schedules decrease. The sustainability of inflationary models depends on whether the new tokens create more value than they dilute.
        </p>
        <p>
          Deflationary models reduce supply over time through mechanisms like token burns (permanently removing tokens from circulation) or buyback-and-burn programs (using protocol revenue to purchase and destroy tokens). BNB, for example, regularly burns tokens to reduce its supply. Some tokens combine both approaches: Ethereum issues new ETH to validators while simultaneously burning a portion of every transaction fee. The net inflation or deflation rate — the balance between new issuance and tokens removed — determines the real supply pressure on the token's price.
        </p>
      </section>

      <section id="evaluating">
        <h2>Evaluating Tokenomics in Practice</h2>
        <p>
          Start by checking the basics: What is the circulating supply versus the maximum supply? What percentage of tokens are currently locked and when do they unlock? Is the team's allocation reasonable (under 20-25%) with appropriate vesting? Are there mechanisms for the token to capture protocol value? Use tools like TokenUnlocks and CoinGecko's supply data to track upcoming unlock events and circulating supply changes.
        </p>
        <p>
          Compare the project's Fully Diluted Valuation against its actual and projected revenue to assess whether the token is reasonably valued. A protocol generating $10 million in annual revenue with a $10 billion FDV needs to grow revenue 100x to reach traditional finance valuation multiples, which may be unrealistic. Look at real token demand: on-chain data showing consistent buying from diverse wallets, growing staking participation, and increasing governance activity indicate healthy organic demand. Be skeptical of metrics that can be easily inflated and focus on indicators that reflect genuine user value and sustainable economic design.
        </p>
      </section>
    </LearnPageLayout>
  );
}
