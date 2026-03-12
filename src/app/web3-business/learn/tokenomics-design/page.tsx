import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Tokenomics Design Guide (${CURRENT_YEAR}) - How to Design Token Economics | degen0x`,
  description: `Master tokenomics design for your Web3 project. Supply mechanics, distribution strategies, vesting schedules, utility design, and common pitfalls explained.`,
};

export default function TokenomicsDesignPage() {
  return (
    <LearnPageLayout
      title="Tokenomics Design Guide"
      categoryName="Web3 Business"
      categorySlug="web3-business"
      readTime="11 min"
      intro="Tokenomics defines the economic model that governs how a cryptocurrency token is created, distributed, and used within its ecosystem. Well-designed tokenomics align incentives between users, developers, and investors while sustaining long-term value. Poor tokenomics can doom even the most technically impressive projects. This guide covers the core principles and practical decisions behind effective token design."
      toc={[
        { id: "supply-mechanics", title: "supply-mechanics", level: 2 },
        { id: "supply-mechanics", title: "Supply Mechanics", level: 2 },
        { id: "distribution", title: "distribution", level: 2 },
        { id: "token-distribution", title: "Token Distribution", level: 2 },
        { id: "vesting", title: "vesting", level: 2 },
        { id: "vesting-and-unlock-schedules", title: "Vesting and Unlock Schedules", level: 2 },
        { id: "utility", title: "utility", level: 2 },
        { id: "token-utility-design", title: "Token Utility Design", level: 2 },
        { id: "common-pitfalls", title: "common-pitfalls", level: 2 },
        { id: "common-tokenomics-pitfalls", title: "Common Tokenomics Pitfalls", level: 2 }
      ]}
      faqs={[
        { question: "What is the ideal total token supply?", answer: "There is no ideal number. Total supply is largely cosmetic since it is the market capitalization (price times circulating supply) that determines value. Bitcoin has 21 million tokens while Shiba Inu has trillions, yet both function as intended. Choose a supply that produces readable token prices and avoids excessive decimal places for typical transactions. Most projects settle between 100 million and 10 billion total supply." },
        { question: "How much should be allocated to the team?", answer: "Industry standard for team allocations ranges from 15% to 25% of total supply, with a 12-month cliff and 3 to 4 year linear vesting. Allocations above 25% raise red flags with investors and community members. Below 10% may not provide sufficient incentive for long-term team commitment. Ensure team tokens are locked long enough that the team is incentivized to build for years, not months." },
        { question: "Should I use an inflationary or deflationary model?", answer: "Both models can work. Inflationary models (like Ethereum pre-merge staking rewards) are useful for incentivizing network participation and security. Deflationary models (burn mechanisms, buybacks) create scarcity and potential price appreciation. Many successful tokens use a hybrid approach with moderate inflation for rewards offset by burn mechanisms. The key is ensuring the model supports your protocol long-term sustainability rather than optimizing for short-term price action." },
      ]}
      relatedArticles={[
        { title: "Web3 Fundraising", href: "/web3-business/learn/fundraising", category: "Web3 Business" },
        { title: "Best Token Launchpads", href: "/web3-business/best/launchpads", category: "Web3 Business" },
        { title: "How to Start a Web3 Business", href: "/web3-business/learn/how-to-start-web3-business", category: "Web3 Business" },
      ]}
    >
      <h2 id="supply-mechanics">Supply Mechanics</h2>
      <p>Supply mechanics define how many tokens exist, how that number changes over time, and what mechanisms control inflation or deflation. Fixed-supply tokens have a hard cap that can never be exceeded (like Bitcoin 21 million). This creates scarcity but limits the protocol ability to issue future incentives. Capped-with-inflation models set an initial supply but allow controlled minting for staking rewards, ecosystem incentives, or contributor compensation, typically at a declining rate. Elastic supply tokens algorithmically adjust supply based on market conditions (rebasing), though these models have a mixed track record. The most important decision is whether your protocol needs ongoing token emissions to function. Proof-of-stake networks need inflation for validator rewards. DeFi protocols may need emissions for liquidity mining. Governance-only tokens may work best with fixed supply and fee-based value accrual.</p>

      <h2 id="distribution">Token Distribution</h2>
      <p>Token distribution determines who holds tokens at launch and how concentrated ownership is. A well-designed distribution balances the needs of the founding team, early investors, ecosystem development, and the broader community. Typical allocation buckets include: core team and advisors (15-25%), early investors and seed rounds (10-20%), ecosystem and community treasury (25-40%), liquidity provision (5-10%), public sale or airdrop (10-20%), and ecosystem grants and partnerships (5-15%). The community and ecosystem treasury is often the largest allocation, controlled by DAO governance for ongoing development funding. Avoid excessive concentration where insiders hold more than 40-50% of supply, as this creates sell pressure concerns and governance centralization risks. Publish your full distribution breakdown in your tokenomics documentation with clear justification for each allocation.</p>

      <h2 id="vesting">Vesting and Unlock Schedules</h2>
      <p>Vesting schedules control when allocated tokens become transferable, protecting the project from immediate insider selling. Standard vesting for team tokens includes a 12-month cliff (no tokens vest for the first year) followed by 24 to 36 months of linear or monthly vesting. Investor tokens typically have shorter vesting periods, with a 6-month cliff and 12 to 24 month linear unlock. Community allocations and ecosystem funds are often governed by DAO votes or milestone-based releases rather than time-based vesting. The unlock schedule should be designed so that large unlock events do not create predictable sell pressure that damages the token price. Stagger unlocks across different stakeholder groups and avoid having more than 5-10% of circulating supply unlocking in any single month. Publish your full vesting schedule publicly and use on-chain vesting contracts (like Sablier or TokenVesting) for transparency and trust.</p>

      <h2 id="utility">Token Utility Design</h2>
      <p>Token utility defines why someone would want to hold or use your token beyond speculation. Strong utility creates organic demand that supports long-term value. Common utility mechanisms include governance rights (voting on protocol parameters, treasury spending, and upgrades), fee payment and discounts (paying protocol fees in the native token at a discount), staking for security or access (staking tokens to validate, operate nodes, or access premium features), work tokens (staking to earn the right to perform work and earn fees, like Chainlink oracle nodes), and fee accrual (token holders receive a share of protocol revenue through staking or buyback-and-distribute mechanisms). The strongest tokenomics combine multiple utility layers. For example, a token that provides governance rights, earns staking yield from protocol fees, and is required for protocol access creates demand from governance participants, yield seekers, and actual users simultaneously.</p>

      <h2 id="common-pitfalls">Common Tokenomics Pitfalls</h2>
      <p>Several recurring mistakes plague new token launches. Over-emission through excessive liquidity mining or yield farming rewards creates massive sell pressure as mercenary capital farms and dumps tokens. Insufficient initial liquidity leads to extreme volatility and poor user experience at launch. Misaligned vesting where insiders can sell before the product achieves meaningful traction destroys community trust. Complex rebasing or algorithmic mechanisms that users cannot understand lead to confusion and loss of confidence. Treasury concentration where a small group controls the majority of tokens undermines the decentralization narrative. Lack of real utility where the token serves no purpose beyond speculation makes the token entirely dependent on market sentiment. To avoid these pitfalls, study the tokenomics of successful projects in your category, hire an experienced tokenomics advisor, and model your token flows under various market scenarios before committing to your design.</p>
    </LearnPageLayout>
  );
}
