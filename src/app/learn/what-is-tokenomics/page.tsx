import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Tokenomics? Token Economics Explained (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn what tokenomics is, how token supply, distribution, utility, and incentive mechanisms affect cryptocurrency value, and how to evaluate tokenomics before investing.",
  keywords: ["tokenomics", "token economics", "token supply", "token distribution", "vesting schedule", "token utility"],
};

export default function WhatIsTokenomicsPage() {
  return (
    <LearnPageLayout
      title="What Is Tokenomics? Token Economics Explained"
      categoryName="Crypto Education"
      categorySlug="learn"
      readTime="9 min"
      intro="Tokenomics — a portmanteau of token and economics — refers to the study of the economic design, incentive structures, and monetary policy of a cryptocurrency. Understanding tokenomics is essential for evaluating any crypto project because it reveals how tokens are created, distributed, used, and valued within an ecosystem."
      toc={[
        { id: "what-is-tokenomics", title: "Understanding Tokenomics", level: 2 },
        { id: "supply-mechanics", title: "Supply Mechanics", level: 2 },
        { id: "distribution", title: "Token Distribution", level: 2 },
        { id: "utility", title: "Token Utility", level: 2 },
        { id: "incentive-design", title: "Incentive Design", level: 2 },
        { id: "evaluating", title: "Evaluating Tokenomics", level: 2 },
        { id: "red-flags", title: "Tokenomics Red Flags", level: 2 },
      ]}
      faqs={[
        { question: "Why does tokenomics matter?", answer: "Tokenomics determines the long-term supply and demand dynamics of a token. Poor tokenomics — like excessive inflation, concentrated ownership, or misaligned incentives — can doom even technically excellent projects. Good tokenomics aligns incentives between all participants and creates sustainable value capture." },
        { question: "What is a vesting schedule?", answer: "A vesting schedule is a timeline dictating when locked tokens become available for trading. Team tokens, investor allocations, and ecosystem funds typically vest over 1-4 years with an initial cliff period. Vesting prevents insiders from dumping tokens immediately after launch." },
        { question: "What is the difference between total supply and circulating supply?", answer: "Total supply is the maximum number of tokens that will ever exist. Circulating supply is the number currently available for trading. The difference consists of locked, vesting, staked, or not-yet-minted tokens. Market cap is calculated using circulating supply, while fully diluted valuation uses total supply." },
        { question: "What makes good tokenomics?", answer: "Good tokenomics features a clear utility for the token within the ecosystem, reasonable inflation or deflationary mechanisms, fair distribution without excessive insider allocations, transparent vesting schedules, and incentive structures that reward long-term participation over short-term speculation." },
      ]}
      relatedArticles={[
        { title: "What Is a Token?", href: "/learn/what-is-a-token", category: "Learn" },
        { title: "What Is Market Cap?", href: "/learn/what-is-market-cap", category: "Learn" },
        { title: "How to Research Crypto", href: "/learn/how-to-research-crypto", category: "Learn" },
        { title: "What Is APY vs APR?", href: "/learn/what-is-apy-vs-apr", category: "Learn" },
      ]}
    >
      <section id="what-is-tokenomics">
        <h2>Understanding Tokenomics</h2>
        <p>
          Tokenomics encompasses every aspect of a token's economic design: how many tokens exist, how they are distributed, what they are used for, how new tokens enter circulation, and how the economic incentives align participant behavior with the protocol's success. Good tokenomics creates a virtuous cycle where the token's value increases as the protocol grows, attracting more participants and further strengthening the ecosystem. Poor tokenomics leads to value extraction, misaligned incentives, and eventual collapse.
        </p>
        <p>
          Tokenomics matters because it directly affects the supply and demand dynamics that drive token prices. A token with aggressive inflation dilutes existing holders. A token with no utility has no demand driver beyond speculation. A token with concentrated insider ownership faces persistent selling pressure as insiders unlock and sell. Understanding these dynamics helps investors separate projects with sustainable economic models from those designed primarily to enrich insiders.
        </p>
      </section>

      <section id="supply-mechanics">
        <h2>Supply Mechanics</h2>
        <p>
          Token supply design is fundamental to tokenomics. Bitcoin has a fixed maximum supply of 21 million coins, creating programmatic scarcity that many compare to digital gold. Ethereum has no maximum supply cap but implements a burn mechanism (EIP-1559) that can make it net deflationary during high-usage periods. Other tokens have inflationary models where new tokens are continuously minted to fund staking rewards, ecosystem development, or other purposes.
        </p>
        <p>
          Key supply metrics include total supply (maximum tokens that will ever exist), circulating supply (tokens currently available for trading), emission schedule (rate at which new tokens enter circulation), and burn mechanisms (methods for permanently removing tokens from circulation). The relationship between these metrics determines the inflation or deflation rate, which directly impacts token value. A token inflating at 20% annually requires 20% annual demand growth just to maintain its current price.
        </p>
      </section>

      <section id="distribution">
        <h2>Token Distribution</h2>
        <p>
          How tokens are initially distributed reveals the project's priorities and creates lasting implications for governance and market dynamics. Common allocation categories include team and founders (typically 15-25% with multi-year vesting), investors and private sales (10-25%), ecosystem and community incentives (20-40%), treasury reserves (10-20%), and public sale or airdrop (5-20%). The specific percentages and vesting terms vary widely across projects.
        </p>
        <p>
          Fair distribution matters because concentrated ownership creates problems. If a small group holds a disproportionate share of tokens, they can dominate governance votes, manipulate prices through coordinated trading, and create significant selling pressure when their tokens vest. Projects with more distributed ownership tend to have healthier price dynamics and more decentralized governance. Airdrops, community incentive programs, and decentralized launch mechanisms aim to achieve broader distribution.
        </p>
      </section>

      <section id="utility">
        <h2>Token Utility</h2>
        <p>
          Token utility defines the reasons people need or want to hold and use the token beyond speculation. Common utility types include governance rights (voting on protocol decisions), fee payment (paying for protocol services), staking (securing the network and earning rewards), collateral (backing loans or synthetic assets), and access (unlocking platform features or premium tiers).
        </p>
        <p>
          The strongest tokenomics feature multiple reinforcing utility mechanisms. Ethereum's ETH, for example, serves as gas payment for all transactions, staking collateral for validators, the primary collateral asset in DeFi, and the base currency for NFT markets. Each use case creates independent demand for the token. Conversely, tokens with no clear utility beyond governance — especially when the governance controls minimal value — struggle to sustain demand because there is no economic reason to hold them beyond speculative appreciation.
        </p>
      </section>

      <section id="incentive-design">
        <h2>Incentive Design</h2>
        <p>
          Well-designed tokenomics align the incentives of all participants — users, developers, validators, liquidity providers, and token holders — with the protocol's long-term success. This means rewarding behaviors that grow the ecosystem and penalizing behaviors that extract value. Staking rewards incentivize network security. Liquidity mining rewards incentivize capital provision. Token burns from protocol revenue create a deflationary mechanism that benefits all holders when usage grows.
        </p>
        <p>
          The challenge is designing incentives that are sustainable over time. Many early DeFi protocols offered extremely high token rewards to attract users, only to see participation collapse when rewards decreased. Sustainable incentive design uses token emissions strategically to bootstrap network effects but transitions to organic revenue-based incentives as the protocol matures. The best projects design their tokenomics so that the protocol would function and generate value even without ongoing token emissions.
        </p>
      </section>

      <section id="evaluating">
        <h2>Evaluating Tokenomics</h2>
        <p>
          When evaluating tokenomics, start by mapping the complete supply schedule: how many tokens exist now, how many will exist in 1, 2, and 5 years, and where new tokens come from. Calculate the fully diluted valuation (total supply multiplied by current price) and compare it to the circulating market cap — a large gap indicates significant dilution ahead. Check vesting schedules for upcoming unlocks that could create selling pressure.
        </p>
        <p>
          Analyze the demand side: what drives people to buy and hold this token? Is there genuine utility, or is demand purely speculative? Calculate the protocol's revenue and compare it to the token's valuation using metrics like price-to-earnings or price-to-fees ratios. Examine on-chain data to understand who holds the token, how concentrated ownership is, and how tokens flow between participants. The best tokenomics create clear, sustainable demand that grows with protocol usage.
        </p>
      </section>

      <section id="red-flags">
        <h2>Tokenomics Red Flags</h2>
        <p>
          Watch for excessive insider allocations (more than 30% to team and investors), short or non-existent vesting periods, unlimited or uncapped token supply with no burn mechanism, unclear or frequently changing tokenomics, tokens that serve no functional purpose within the protocol, and extremely high initial inflation rates designed to attract short-term capital through unsustainable yields.
        </p>
        <p>
          Other warning signs include token concentrations in a few wallets (check blockchain explorers), lack of transparency about token allocation details, mechanisms that allow insiders to mint additional tokens without community approval, and tokenomics documents that prioritize marketing language over concrete economic details. If a project's tokenomics are difficult to understand or find, that itself is a red flag — legitimate projects have clear, accessible tokenomics documentation.
        </p>
      </section>
    </LearnPageLayout>
  );
}
