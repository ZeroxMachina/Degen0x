import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Participating in DeFi Protocol Governance (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Guide to DeFi governance participation. Learn how to vote on protocol proposals, delegate voting power, and influence DeFi lending protocol decisions.",
};

export default function GovernanceParticipationPage() {
  return (
    <LearnPageLayout title="Participating in DeFi Protocol Governance" categoryName="DeFi Lending" categorySlug="defi-lending" readTime="8 min read"
      intro="DeFi lending protocols are governed by their token holders who vote on critical decisions including risk parameters, asset listings, fee structures, and protocol upgrades. Active governance participation helps protect your deposits by ensuring sound risk management and keeps protocols responsive to user needs. Whether you hold AAVE, COMP, MKR, or other governance tokens, understanding how to effectively participate in governance maximizes the value of your investment."
      toc={[{ id: "how-governance-works", title: "How DeFi Governance Works", level: 2 }, { id: "key-decisions", title: "Key Governance Decisions", level: 2 }, { id: "delegation", title: "Voting and Delegation", level: 2 }, { id: "getting-involved", title: "Getting Involved", level: 2 }]}
      faqs={[
        { question: "Do I need governance tokens to participate?", answer: "Yes, voting requires holding or being delegated the protocol's governance token. However, you can participate in governance discussions on forums without holding tokens. Some protocols have minimum token thresholds for creating proposals but no minimum for voting." },
        { question: "What is delegation?", answer: "Delegation allows you to assign your voting power to another address without transferring your tokens. The delegate votes on your behalf. You can revoke delegation at any time. This allows passive token holders to have their voice represented by active governance participants." },
        { question: "Can governance decisions affect my deposits?", answer: "Yes. Governance controls critical parameters including collateral factors, liquidation thresholds, interest rate models, and asset listings. Poor governance decisions can increase risk for all users. This is why participating or delegating to competent delegates matters." },
      ]}
      relatedArticles={[
        { title: "DAO Treasury Management", href: "/web3-business/learn/dao-treasury-management", category: "Web3 Business" },
        { title: "Top Lending Protocols", href: "/defi-lending/learn/lending-protocols-compared", category: "DeFi Lending" },
        { title: "Token Economics Design", href: "/web3-business/learn/token-economics-design", category: "Web3 Business" },
      ]}
    >
      <h2 id="how-governance-works">How DeFi Governance Works</h2>
      <p>DeFi governance typically follows a multi-stage process. It starts with informal discussion on community forums like Aave&apos;s governance forum or MakerDAO&apos;s forum. If the idea gains support, a formal proposal (AIP for Aave, MIP for Maker) is drafted with specific parameters and technical details. The proposal enters a voting period, usually lasting 3-7 days, where token holders or delegates vote for or against. If the proposal passes (meeting both quorum and approval thresholds), it enters a timelock period before execution. The timelock (typically 24-48 hours) provides a safety window for the community to react if a malicious proposal somehow passes. Guardian multisigs can veto proposals during this period. Executed proposals update on-chain parameters or trigger contract upgrades. The entire process is transparent and verifiable on-chain.</p>

      <h2 id="key-decisions">Key Governance Decisions</h2>
      <p>Risk parameter adjustments are the most frequent and consequential governance decisions. These include setting LTV ratios and liquidation thresholds for each asset, adjusting interest rate model parameters, modifying reserve factors that determine protocol revenue, and setting supply and borrow caps. Asset listing decisions add new tokens as collateral or borrowable assets, each requiring risk assessment. Protocol upgrades introduce new features or modify core contracts. Treasury decisions allocate protocol revenue to development, incentives, or token buybacks. For lending protocol users, the most directly impactful decisions are risk parameters and asset listings, as these determine the safety and efficiency of your positions. A poorly governed decision to list a risky asset without adequate safeguards could expose all users to losses.</p>

      <h2 id="delegation">Voting and Delegation</h2>
      <p>If you hold governance tokens but do not want to actively vote on every proposal, delegation is the recommended approach. Identify delegates who are active, knowledgeable, and aligned with your interests. Many protocols maintain delegate platforms where delegates publish their voting philosophy and track record. On Aave, you can delegate both proposition power (ability to create proposals) and voting power separately. On Compound, delegation is unified. MakerDAO uses a system of recognized delegates who receive compensation for active participation. When evaluating delegates, check their voting participation rate, alignment with protocol health over short-term gains, and their engagement in governance forums. You can change or revoke delegation at any time. Even if you delegate, staying informed about major proposals through governance digests and community channels is recommended.</p>

      <h2 id="getting-involved">Getting Involved</h2>
      <p>Start by joining the governance forum of the protocols you use. Read existing proposals and discussions to understand the governance culture and common issues. Follow governance-focused accounts on social media for updates and analysis. Attend governance calls or AMAs if the protocol hosts them. As you become more knowledgeable, consider voting directly on proposals you understand well and delegating on topics outside your expertise. For those seeking deeper involvement, professional service providers like Gauntlet (risk management) and Chaos Labs (risk simulation) regularly publish analyses that inform governance decisions. Contributing to governance discussions with data-backed opinions can influence outcomes even without large token holdings. Some protocols offer governance incentives or delegate compensation programs that reward active participation financially.</p>
    </LearnPageLayout>
  );
}
