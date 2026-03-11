import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `DeFi Governance Explained (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Understand how DeFi protocol governance works. Learn about governance tokens, voting mechanisms, DAOs, delegation, and how governance affects lending protocols.",
  keywords: ["defi governance", "dao governance", "governance tokens", "protocol voting"],
};

export default function DefiGovernanceExplainedPage() {
  return (
    <LearnPageLayout
      title="DeFi Governance Explained"
      categoryName="DeFi Lending"
      categorySlug="defi-lending"
      readTime="10 min"
      intro="Governance is the decision-making process that controls how DeFi protocols evolve, set parameters, and manage risk. Most major lending protocols are governed by token holders who vote on proposals ranging from interest rate model adjustments to new asset listings. Understanding governance mechanics is important because governance decisions directly affect the safety and returns of your DeFi positions."
      toc={[
        { id: "what-is-governance", title: "What Is DeFi Governance", level: 2 },
        { id: "governance-tokens", title: "Governance Tokens", level: 2 },
        { id: "voting-mechanisms", title: "Voting Mechanisms", level: 2 },
        { id: "governance-lending", title: "Governance in Lending Protocols", level: 2 },
        { id: "participation", title: "How to Participate", level: 2 },
      ]}
      faqs={[
        { question: "Do I need governance tokens to use DeFi protocols?", answer: "No. You can use DeFi lending protocols without holding governance tokens. Governance participation is optional. However, holding governance tokens gives you a voice in decisions that affect your deposits and borrowing positions." },
        { question: "Can governance be used maliciously?", answer: "Yes, governance attacks are a real risk. A single entity accumulating enough voting power could pass harmful proposals. Protocols mitigate this through timelocks, quorum requirements, and guardian mechanisms that can veto malicious proposals." },
      ]}
      relatedArticles={[
        { title: "How DeFi Lending Works", href: "/defi-lending/learn/how-defi-lending-works", category: "DeFi Lending" },
        { title: "DeFi Risk Guide", href: "/defi-lending/learn/defi-risks-guide", category: "DeFi Lending" },
      ]}
    >
      <section id="what-is-governance">
        <h2>What Is DeFi Governance</h2>
        <p>DeFi governance is the system through which protocol stakeholders make collective decisions about the protocol's operation and evolution. Unlike traditional companies where executives make decisions, DeFi protocols aim for decentralized decision-making where token holders propose and vote on changes. Governance encompasses a wide range of decisions including adding or removing supported assets, adjusting risk parameters like collateral factors and liquidation thresholds, modifying interest rate models, allocating treasury funds, approving protocol upgrades, and setting fee structures. The degree of decentralization varies significantly between protocols. Some are fully governed by token holders through on-chain voting, while others maintain multi-sig committees or foundations that retain certain powers. The trend across the industry is toward progressive decentralization, where protocols gradually transfer more control to the community over time.</p>
      </section>
      <section id="governance-tokens">
        <h2>Governance Tokens</h2>
        <p>Governance tokens represent voting power within a protocol. AAVE, COMP, MKR, and UNI are among the most well-known governance tokens. Holding these tokens typically grants the right to create proposals, vote on existing proposals, and delegate voting power to others. Some governance tokens also have economic value beyond voting rights, such as fee sharing or staking rewards. MakerDAO's MKR token is burned when protocol revenue exceeds expenses, creating a deflationary mechanism. Aave's AAVE token can be staked in the Safety Module, earning rewards while providing a backstop for protocol shortfalls. The market value of governance tokens reflects both the economic benefits and the perceived value of controlling a protocol with significant TVL. Token distribution matters significantly for governance decentralization, as concentrated ownership can undermine the democratic aspirations of token-based governance.</p>
      </section>
      <section id="voting-mechanisms">
        <h2>Voting Mechanisms</h2>
        <p>DeFi protocols use various voting mechanisms. The most common is simple token-weighted voting where one token equals one vote. This approach is straightforward but can lead to plutocratic governance where large holders dominate decisions. Quadratic voting, where voting power scales with the square root of tokens committed, aims to give smaller holders more proportional influence. Conviction voting, used by protocols like 1Hive, weighs votes by how long tokens are committed to a proposal, rewarding sustained conviction over flash votes. Snapshot voting allows off-chain signaling votes that are gasless, making participation more accessible, though binding execution still requires on-chain transactions. Optimistic governance assumes proposals pass unless challenged within a timeframe, reducing governance overhead for non-controversial changes. Delegation allows token holders to assign their voting power to representatives they trust, improving participation rates for those who lack time to evaluate every proposal.</p>
      </section>
      <section id="governance-lending">
        <h2>Governance in Lending Protocols</h2>
        <p>For lending protocols specifically, governance decisions have direct financial implications for users. Asset listing proposals determine which tokens can be used as collateral or borrowed, and poorly vetted asset listings can introduce systemic risk. Risk parameter changes adjust collateral factors, liquidation thresholds, and borrow caps, directly affecting borrowing capacity and liquidation risk. Interest rate model updates change how rates respond to utilization, impacting both lender yields and borrower costs. Treasury and incentive decisions control how protocol revenue is used and whether liquidity mining programs are expanded or reduced. Emergency actions may be needed to freeze markets during active exploits or extreme volatility. Aave and Compound both have active governance forums where proposed changes are debated before formal voting, providing transparency into the decision-making process that affects all protocol users.</p>
      </section>
      <section id="participation">
        <h2>How to Participate</h2>
        <p>Participating in DeFi governance starts with acquiring governance tokens, either by purchasing them or earning them through protocol usage. Follow the protocol's governance forum, typically hosted on Discourse or a dedicated platform, to stay informed about upcoming proposals and ongoing discussions. Delegate your tokens if you cannot actively follow every proposal, choosing delegates with track records of thoughtful voting. When evaluating proposals, consider their potential impact on protocol security, user experience, and economic sustainability. For lending protocol governance specifically, pay attention to risk parameter changes that might affect your positions. Tools like Tally, Boardroom, and Snapshot aggregate governance activity across protocols, making it easier to track and participate in multiple governance systems. Active governance participation not only protects your interests but also contributes to the health of the broader DeFi ecosystem by ensuring protocols are well-managed.</p>
      </section>
    </LearnPageLayout>
  );
}
