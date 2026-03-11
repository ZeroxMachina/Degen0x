import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Treasury Management Guide (${CURRENT_YEAR}) - Crypto Business Treasury | CryptoDegen`,
  description: `Learn how to manage a Web3 business or DAO treasury. Diversification strategies, multi-sig security, yield generation, reporting, and risk management best practices.`,
};

export default function TreasuryManagementPage() {
  return (
    <LearnPageLayout
      title="Treasury Management Guide"
      categoryName="Web3 Business"
      categorySlug="web3-business"
      readTime="9 min"
      intro="Treasury management is arguably the most critical operational function for any Web3 business or DAO. A well-managed treasury ensures the organization can fund development, pay contributors, survive bear markets, and grow sustainably. This guide covers the strategies, tools, and best practices for managing crypto treasuries of any size."
      toc={[
        { id: "security", title: "Treasury Security Fundamentals", level: 2 },
        { id: "diversification", title: "Diversification Strategies", level: 2 },
        { id: "yield", title: "Yield Generation", level: 2 },
        { id: "reporting", title: "Reporting and Transparency", level: 2 },
      ]}
      faqs={[
        { question: "What percentage of treasury should be in stablecoins?", answer: "A common guideline is to hold 12 to 24 months of operating expenses in stablecoins or fiat equivalents. For a DAO spending $100,000 per month, that means $1.2M to $2.4M in stablecoins. The exact amount depends on your burn rate, revenue predictability, and risk tolerance. During bull markets, consider increasing stablecoin reserves to lock in gains and prepare for potential downturns." },
        { question: "Should a DAO treasury use DeFi for yield?", answer: "Generating yield on idle treasury assets can be valuable, but it introduces smart contract risk and requires active management. Many DAOs allocate a portion (10-30%) of stablecoin reserves to low-risk yield strategies like lending on Aave or Compound. Higher-risk strategies should only use capital the organization can afford to lose. Always consider the risk-adjusted return rather than chasing the highest APY." },
        { question: "How often should treasury reports be published?", answer: "Monthly reporting is the minimum standard for active DAOs. Reports should include current balances across all wallets and chains, inflows and outflows categorized by type, runway remaining at current burn rate, any yield or investment performance, and upcoming large expenditures. Many DAOs publish real-time dashboards using tools like Dune Analytics or DeBank for continuous transparency." },
      ]}
      relatedArticles={[
        { title: "Best Treasury Tools", href: "/web3-business/best/treasury-tools", category: "Web3 Business" },
        { title: "DAO Formation Guide", href: "/web3-business/learn/dao-formation", category: "Web3 Business" },
        { title: "Crypto Business Taxes", href: "/web3-business/learn/business-taxes", category: "Web3 Business" },
      ]}
    >
      <h2 id="security">Treasury Security Fundamentals</h2>
      <p>Treasury security is the non-negotiable foundation. Use a multi-signature wallet (Gnosis Safe for EVM chains, Squads for Solana) with a signer configuration that prevents any single person from accessing funds. A 3-of-5 multisig is the minimum for treasuries above $100,000, with larger treasuries often requiring 4-of-7 or higher. Each signer should use a hardware wallet (Ledger or Trezor) and store their seed phrase securely, ideally in multiple geographic locations using metal backup plates. Implement a timelocked execution delay on governance proposals that move treasury funds, giving the community time to react to potentially malicious proposals. Establish clear signing policies that specify which transactions require which approval levels, rotating signers periodically and immediately replacing any signer whose key security is compromised. Never store treasury funds on centralized exchanges or in hot wallets beyond what is needed for immediate operations.</p>

      <h2 id="diversification">Diversification Strategies</h2>
      <p>The most common treasury failure is over-concentration in the project native governance token. When the token price drops during a bear market, the treasury value drops at the exact moment the organization needs capital most. A prudent diversification strategy allocates treasury holdings across several asset classes: stablecoins (USDC, USDT, DAI) for operating expenses and runway, ETH and BTC as long-term base layer exposure, the native governance token for strategic reserves and incentives, and yield-bearing positions for capital efficiency. Consider conducting periodic treasury diversification sales where a portion of governance tokens are sold OTC or through governance-approved mechanisms for stablecoins. Major protocols like Lido, Maker, and Uniswap have all conducted treasury diversification events. The key is to diversify proactively during bull markets rather than being forced to sell at depressed prices during downturns.</p>

      <h2 id="yield">Yield Generation</h2>
      <p>Idle treasury assets represent an opportunity cost. Conservative yield strategies for treasury stablecoins include lending on battle-tested protocols like Aave and Compound (typically 2-6% APY), providing liquidity to stable-stable pools on Curve or other established DEXs, and purchasing US Treasury-backed on-chain assets like Ondo USDY or Mountain Protocol USDM for risk-free rates. For non-stablecoin holdings, ETH can be staked through liquid staking protocols like Lido (stETH) to earn staking rewards without sacrificing liquidity. Any DeFi yield strategy introduces smart contract risk, so limit exposure to any single protocol and prioritize audited, battle-tested platforms with significant total value locked. Establish a risk framework that defines maximum allocation per protocol, minimum audit requirements, and maximum acceptable risk tiers before deploying treasury capital into yield strategies.</p>

      <h2 id="reporting">Reporting and Transparency</h2>
      <p>Transparent treasury reporting builds community trust and enables informed governance decisions. A comprehensive treasury report should include a balance sheet showing all assets across wallets, chains, and protocols with current market values. Include a cash flow statement showing all inflows (revenue, token sales, grants received) and outflows (contributor payments, operational costs, grants disbursed) for the reporting period. Calculate and prominently display the runway remaining, which is the number of months the organization can sustain current operations at current spending rates with existing stablecoin reserves. Track key metrics over time including total treasury value, diversification ratios, monthly burn rate, and yield performance. Tools like Dune Analytics, Nansen, and DeBank can provide real-time portfolio tracking, while dedicated treasury platforms like Coinshift and Parcel offer automated reporting dashboards. Publish reports on a regular schedule and make the raw data available for community verification.</p>
    </LearnPageLayout>
  );
}
