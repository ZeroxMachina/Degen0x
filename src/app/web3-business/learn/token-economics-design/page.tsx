import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Designing Token Economics for Your Project (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Guide to designing token economics (tokenomics) for Web3 projects. Supply schedules, distribution, utility design, and value accrual mechanisms explained.",
};

export default function TokenEconomicsDesignPage() {
  return (
    <LearnPageLayout title="Designing Token Economics for Your Project" categoryName="Web3 Business" categorySlug="web3-business" readTime="9 min read"
      intro="Token economics (tokenomics) is the design of a token's supply, distribution, utility, and value accrual mechanisms. Good tokenomics align incentives between all stakeholders (users, developers, investors, and the protocol) and create sustainable value. Poor tokenomics can doom a project regardless of its technology. Understanding the principles and trade-offs of token design is essential for anyone building or investing in token-based projects."
      toc={[
        { id: "supply-design", title: "Supply Design", level: 2 },
        { id: "distribution", title: "Token Distribution", level: 2 },
        { id: "utility", title: "Utility and Demand Drivers", level: 2 },
        { id: "value-accrual", title: "Value Accrual Mechanisms", level: 2 },
      ]}
      faqs={[
        { question: "What makes good tokenomics?", answer: "Good tokenomics create genuine demand for the token (utility), manage supply carefully (vesting, emission schedules), align incentives for all participants, distribute ownership fairly, and create sustainable value accrual. The token should be necessary for the protocol to function, not just a speculative vehicle. Users should want to hold the token for its utility, not just its potential price appreciation." },
        { question: "Should my project have a token?", answer: "Not every project needs a token. A token makes sense if it serves a clear purpose: governance over a decentralized protocol, payment for protocol services, staking for network security, or coordination of a decentralized network. If your project functions fine without a token, adding one may create unnecessary complexity, regulatory risk, and misaligned incentives." },
        { question: "What is a fair token distribution?", answer: "A fair distribution balances team incentives, investor returns, and community ownership. Common ranges: 15-25% for the team and advisors (with 3-4 year vesting), 10-20% for investors (with vesting), 30-50% for community and ecosystem incentives, and 10-20% for treasury. Community allocation should be the largest single category. Very unequal distributions (50%+ to insiders) are red flags." },
      ]}
      relatedArticles={[
        { title: "Web3 Business Models", href: "/web3-business/learn/web3-business-models", category: "Web3 Business" },
        { title: "DAO Treasury Management", href: "/web3-business/learn/dao-treasury-management", category: "Web3 Business" },
        { title: "Community Building in Web3", href: "/web3-business/learn/community-building-web3", category: "Web3 Business" },
      ]}
    >
      <h2 id="supply-design">Supply Design</h2>
      <p>Supply design determines how many tokens exist, how they are created, and whether the supply changes over time. Fixed supply tokens (like Bitcoin with 21 million coins) create scarcity and deflationary dynamics. Inflationary tokens continuously mint new tokens to fund network security (staking rewards), ecosystem incentives, or protocol development. Deflationary mechanisms (fee burning, buyback-and-burn) reduce supply over time, creating upward price pressure if demand is constant. The optimal supply model depends on your protocol&apos;s needs. Payment tokens benefit from a stable or slightly deflationary supply that encourages holding and transacting. Staking tokens need inflation to reward validators but should balance this with demand-driven fee burning. Governance tokens may have fixed supply since their primary function is voting rather than transaction payment. Common mistakes include excessive initial supply that creates selling pressure, emission schedules that front-load rewards (attracting mercenary capital that leaves when rewards decrease), and lacking any deflationary mechanism to offset ongoing emissions. Study successful tokens in your category and understand why their supply models work before designing your own.</p>

      <h2 id="distribution">Token Distribution</h2>
      <p>Token distribution determines who owns the token at launch and how ownership evolves over time. The distribution must balance multiple objectives: rewarding the team for building, compensating investors for funding, and ensuring broad community ownership for decentralization and adoption. Team allocation (typically 15-25%) should vest over three to four years with a one-year cliff. This aligns team incentives with long-term project success. Investor allocation (typically 10-20%) should also vest, often over two to three years with a cliff. Community allocation (30-50%) is distributed through various mechanisms: airdrops reward early users, liquidity mining incentivizes protocol usage, grants fund ecosystem development, and public sales enable broad participation. Treasury allocation (10-20%) funds ongoing development, partnerships, and unforeseen needs, governed by the community or a multisig. The vesting schedule is critical: tokens that unlock too quickly create massive selling pressure as insiders dump on the market. Tokens that vest too slowly may fail to align incentives. Study the unlock schedules of similar projects and their price impact to inform your design.</p>

      <h2 id="utility">Utility and Demand Drivers</h2>
      <p>A token needs genuine demand drivers beyond speculation. The strongest utility is being required to use the protocol: Ethereum requires ETH for gas, Chainlink requires LINK for oracle payments, and Filecoin requires FIL for storage. This creates organic, recurring demand proportional to protocol usage. Governance is another utility: tokens that grant voting power over valuable protocol decisions (fee distribution, treasury allocation, parameter changes) are worth holding for the governance influence they provide. The Curve/Convex ecosystem demonstrates this: CRV holders control where token emissions are directed, making CRV valuable to protocols competing for those emissions. Staking utility creates demand by offering yield for locking tokens to provide protocol security or other services. Fee-sharing distributes protocol revenue to token holders, creating a dividend-like yield. The key test is whether someone would want to hold the token even if its price was not going up. If the answer is no, the utility is insufficient and the token is primarily a speculative vehicle. Design for genuine, recurring demand that grows with protocol usage.</p>

      <h2 id="value-accrual">Value Accrual Mechanisms</h2>
      <p>Value accrual is how protocol success translates into token value. Without clear value accrual, a protocol can be wildly successful while its token stagnates. The most direct mechanism is fee distribution: protocol fees flow to token stakers or holders as yield. Sushi&apos;s xSUSHI model directs a portion of trading fees to staked SUSHI holders. Buyback and burn uses protocol revenue to purchase tokens on the open market and permanently destroy them, reducing supply and increasing each remaining token&apos;s claim on future value. This is analogous to stock buybacks. The veToken model (pioneered by Curve) locks tokens for governance power and boosted rewards. Longer lock periods grant more voting power and higher yields, removing tokens from circulation and creating long-term alignment. Treasury accumulation directs protocol revenue to a community-controlled treasury, increasing the value backing each token. Some projects combine multiple mechanisms: earn fees, use a portion for buyback-and-burn, distribute a portion to stakers, and save a portion in the treasury. The right combination depends on your protocol&apos;s stage, regulatory considerations, and community preferences.</p>
    </LearnPageLayout>
  );
}
