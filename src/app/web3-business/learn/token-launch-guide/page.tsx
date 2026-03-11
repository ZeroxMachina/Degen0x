import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Launch a Token (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Complete guide to launching a cryptocurrency token including tokenomics design, smart contract deployment, liquidity provision, exchange listings, and regulatory considerations.",
};

export default function TokenLaunchGuidePage() {
  return (
    <LearnPageLayout
      title="How to Launch a Token"
      categoryName="Web3 Business"
      categorySlug="web3-business"
      readTime="11 min"
      intro="Launching a token is one of the most consequential decisions a Web3 project can make. A well-designed token launch creates aligned incentives, funds development, and builds community ownership. A poorly executed launch can destroy trust, attract regulatory scrutiny, and undermine the project's long-term viability. This guide covers the complete token launch process from tokenomics design through deployment, liquidity, and exchange listings, with emphasis on the strategic and regulatory considerations that determine success."
      toc={[
        { id: "tokenomics-design", title: "Tokenomics Design Fundamentals", level: 2 },
        { id: "smart-contract", title: "Smart Contract Development", level: 2 },
        { id: "launch-strategies", title: "Launch Strategy Options", level: 2 },
        { id: "liquidity-listings", title: "Liquidity and Exchange Listings", level: 2 },
        { id: "regulatory", title: "Regulatory Considerations", level: 2 },
      ]}
      faqs={[
        {
          question: "How much does it cost to launch a token?",
          answer:
            "Costs vary dramatically based on approach. A basic ERC-20 token deployment costs under $100 in gas fees. However, a professional launch with audited contracts, legal review, initial liquidity, and marketing can cost $50,000 to $500,000 or more. Major cost items include smart contract auditing ($10,000-$100,000+), legal counsel ($20,000-$100,000+), initial DEX liquidity ($50,000+), and marketing. Some projects bootstrap with minimal cost using fair launch models.",
        },
        {
          question: "Should I launch on Ethereum or Solana?",
          answer:
            "The choice depends on your target community and use case. Ethereum offers the deepest DeFi liquidity, the most established infrastructure, and the largest user base but has higher gas costs. Solana provides faster transactions and lower costs, with a growing DeFi ecosystem. Many projects launch on both through bridging. Consider where your target users already are and which ecosystem's developer tools best support your project.",
        },
        {
          question: "Do I need a lawyer to launch a token?",
          answer:
            "Yes. Token launches involve significant legal complexity, particularly regarding securities regulations. In the US, the SEC may classify your token as a security under the Howey Test. A qualified crypto attorney can help structure the token, distribution, and communications to minimize regulatory risk. The cost of legal counsel is small compared to the potential liability of non-compliance.",
        },
      ]}
      relatedArticles={[
        { title: "Tokenomics Design", href: "/web3-business/learn/tokenomics-design", category: "Web3 Business" },
        { title: "Web3 Legal Frameworks", href: "/web3-business/learn/web3-legal-frameworks", category: "Web3 Business" },
        { title: "Web3 Marketing Strategies", href: "/web3-business/learn/web3-marketing", category: "Web3 Business" },
      ]}
    >
      <h2 id="tokenomics-design">Tokenomics Design Fundamentals</h2>
      <p>Tokenomics design determines how your token creates, distributes, and captures value within your ecosystem. Start with the token's purpose: governance tokens give holders voting power over protocol decisions, utility tokens provide access to platform features, and reward tokens incentivize specific behaviors. Total supply is a foundational decision. Fixed supply tokens are deflationary by nature, while inflationary models with controlled emission schedules can fund ongoing development and rewards. Allocation typically includes team and advisors (10-20% with 2-4 year vesting), investors (10-25% with vesting), ecosystem and community rewards (30-50%), treasury (10-20%), and initial liquidity (5-10%). Vesting schedules prevent insiders from dumping tokens at launch and signal long-term commitment. A well-designed vesting structure typically includes a 6-12 month cliff followed by linear vesting over 2-4 years for team and investor allocations.</p>

      <h2 id="smart-contract">Smart Contract Development</h2>
      <p>The token smart contract is the technical foundation of your launch. For ERC-20 tokens on Ethereum or EVM-compatible chains, OpenZeppelin's audited contract library provides battle-tested implementations. Solana tokens use the SPL Token Program. Beyond the base token contract, you may need contracts for vesting schedules, staking, governance, and distribution mechanisms. Every contract that handles tokens or funds must be professionally audited before deployment. Top audit firms include Trail of Bits, OpenZeppelin, Certora, and Halborn. Budget $10,000-$100,000+ depending on contract complexity and audit firm reputation. Deploy on testnets first and conduct extensive testing including edge cases, reentrancy attacks, and overflow scenarios. Consider a bug bounty program through Immunefi to incentivize white-hat security researchers to find vulnerabilities before malicious actors do.</p>

      <h2 id="launch-strategies">Launch Strategy Options</h2>
      <p>Several launch strategies exist, each with different trade-offs. Fair launches distribute tokens through mining or liquidity provision with no pre-sale, maximizing decentralization but limiting initial funding. Launchpad sales through platforms like Fjord Foundry or Camelot distribute tokens to qualified participants with tiered allocation. Initial DEX Offerings (IDOs) list the token directly on decentralized exchanges with initial liquidity. Private sales to investors provide upfront funding but concentrate ownership. Airdrops distribute tokens to early users or holders of specific assets, building community but requiring careful sybil resistance. Points-based systems accumulate points for user activity that later convert to tokens, helping build usage before the token exists. Many successful projects combine multiple approaches: a private sale for funding, an airdrop for community building, and a DEX listing for public access.</p>

      <h2 id="liquidity-listings">Liquidity and Exchange Listings</h2>
      <p>Initial liquidity determines whether your token can be traded and at what cost. For DEX launches, you must provide initial liquidity by pairing your token with ETH, SOL, or a stablecoin in an automated market maker pool. The amount of initial liquidity affects price stability and slippage. Insufficient liquidity leads to high slippage and price manipulation. Concentrated liquidity on Uniswap V3 or equivalent allows more capital-efficient liquidity provision. After establishing DEX liquidity, centralized exchange listings dramatically increase accessibility and volume. Major exchanges like Binance and Coinbase have application processes that evaluate project legitimacy, community size, and trading volume. Mid-tier exchanges like Gate.io, KuCoin, and MEXC have lower listing requirements. Market makers provide continuous bid and ask orders on exchanges to ensure healthy trading conditions. Engage a reputable market maker before major exchange listings to ensure sufficient liquidity from day one.</p>

      <h2 id="regulatory">Regulatory Considerations</h2>
      <p>Token launches operate in an evolving regulatory landscape with significant jurisdiction-specific requirements. In the United States, the SEC applies the Howey Test to determine whether a token constitutes a security: if purchasers invest money in a common enterprise with the expectation of profits derived from the efforts of others, the token may be classified as a security requiring registration or an exemption. Strategies to reduce securities classification risk include maximizing decentralization so no single entity drives value, ensuring utility at launch rather than promising future utility, avoiding marketing that emphasizes price appreciation, and distributing tokens broadly. Many projects establish legal entities in crypto-friendly jurisdictions like the Cayman Islands, BVI, or Switzerland while restricting token sales to US persons. Regardless of jurisdiction, maintain thorough documentation of token design decisions, legal opinions, and compliance measures. Regulatory enforcement is increasing globally, and the cost of non-compliance far exceeds the cost of proper legal preparation.</p>
    </LearnPageLayout>
  );
}
