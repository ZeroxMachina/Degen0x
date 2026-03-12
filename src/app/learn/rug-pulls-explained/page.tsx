import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Rug Pulls Explained: How to Spot and Avoid Them (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what rug pulls are in crypto, the different types of rug pulls, warning signs to watch for, tools to detect them, and how to protect your investments from fraudulent projects.",
};

export default function RugPullsExplainedPage() {
  return (
    <LearnPageLayout
      title="Rug Pulls Explained: How to Spot and Avoid Them"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="8 min read"
      intro="A rug pull is a type of cryptocurrency scam where developers create a token or project, attract investor funds, and then withdraw or steal those funds, leaving investors with worthless assets. The term comes from the expression 'pulling the rug out from under someone.' Rug pulls have become one of the most common scams in DeFi, particularly affecting investors who chase newly launched tokens without conducting proper due diligence."
      toc={[
        { id: "types", title: "types", level: 2 },
        { id: "types-of-rug-pulls", title: "Types of Rug Pulls", level: 2 },
        { id: "warning-signs", title: "warning-signs", level: 2 },
        { id: "warning-signs-of-a-rug-pull", title: "Warning Signs of a Rug Pull", level: 2 },
        { id: "detection-tools", title: "detection-tools", level: 2 },
        { id: "tools-for-detecting-rug-pulls", title: "Tools for Detecting Rug Pulls", level: 2 },
        { id: "protection", title: "protection", level: 2 },
        { id: "how-to-protect-yourself", title: "How to Protect Yourself", level: 2 }
      ]}
      faqs={[
        {
          question: "Are all new tokens potential rug pulls?",
          answer:
            "Not all new tokens are scams, but the majority of tokens launched on permissionless DEXs without audits, locked liquidity, or transparent teams are high-risk. Studies have shown that a significant percentage of tokens launched on decentralized exchanges are created with the intent to defraud. Always conduct thorough research before investing in any new token.",
        },
        {
          question: "What happens to rug pull developers?",
          answer:
            "Some rug pull perpetrators have been identified and prosecuted, but many remain anonymous and face no consequences due to the pseudonymous nature of blockchain. The difficulty of cross-border enforcement and the lack of clear regulations in many jurisdictions further complicates prosecution. Prevention through education is more effective than relying on legal remedies after the fact.",
        },
        {
          question: "Can audited projects still rug pull?",
          answer:
            "Yes. An audit reduces risk but does not eliminate it. Some audits are performed by low-quality firms or are fabricated entirely. Even legitimate audits may miss vulnerabilities or not cover all aspects of the project (like off-chain components or team token holdings). Additionally, upgradeable contracts can have their logic changed after the audit. Check the audit firm's reputation and scope of the audit carefully.",
        },
      ]}
      relatedArticles={[
        { title: "Common Crypto Scams", href: "/learn/common-crypto-scams", category: "Learn" },
        { title: "Smart Contract Security", href: "/learn/smart-contract-security", category: "Learn" },
        { title: "Crypto Security Guide", href: "/learn/crypto-security-guide", category: "Learn" },
        { title: "Fundamental Analysis for Crypto", href: "/learn/fundamental-analysis-crypto", category: "Learn" },
      ]}
    >
      <section id="types">
        <h2>Types of Rug Pulls</h2>
        <p>
          Hard rug pulls involve malicious code in the smart contract that allows the deployer to drain all funds from the liquidity pool in a single transaction. This might be a hidden function that removes liquidity, a mint function that creates unlimited tokens and sells them, or a backdoor that transfers all tokens to the deployer's wallet. Hard rug pulls are sudden and total — investors lose everything in a matter of minutes.
        </p>
        <p>
          Soft rug pulls are slower and more insidious. Developers gradually sell their token holdings over time while maintaining the appearance of active development. They may reduce marketing efforts, stop responding to community questions, delay promised features, and slowly disengage. By the time the community realizes the project is abandoned, the developers have already sold most of their holdings at inflated prices. Soft rug pulls are harder to identify in real-time because the decline appears gradual and can be attributed to normal market conditions.
        </p>
      </section>

      <section id="warning-signs">
        <h2>Warning Signs of a Rug Pull</h2>
        <p>
          Anonymous teams with no verifiable track record are the biggest red flag. While some legitimate projects are built by anonymous developers, anonymity combined with other warning signs dramatically increases rug pull risk. Unlocked liquidity means the deployer can remove liquidity at any time — legitimate projects lock their liquidity pool tokens for a significant period. No audit or an audit from an unknown firm provides no assurance about the smart contract's integrity.
        </p>
        <p>
          Unrealistic promises of guaranteed returns, aggressive social media marketing focused on price rather than technology, large team token allocations without vesting schedules, and a website with no substantive information about the project's technology or roadmap are all warning signs. Look for projects where the deployer wallet holds a disproportionate share of the token supply, where the contract has not renounced ownership (meaning the deployer retains admin privileges), and where there is no genuine community discussion — only hype and price speculation.
        </p>
      </section>

      <section id="detection-tools">
        <h2>Tools for Detecting Rug Pulls</h2>
        <p>
          Token analysis tools like TokenSniffer, RugDoc, and GoPlus Security automatically scan smart contracts for common rug pull indicators including hidden mint functions, ability to pause trading, excessive taxes, and honeypot mechanisms (where buying is allowed but selling is blocked). These tools provide risk scores that can help you quickly assess a token's safety, though they are not infallible and should be used alongside manual research.
        </p>
        <p>
          Blockchain explorers like Etherscan and BscScan let you examine the contract code, view the deployer's transaction history, check token distribution among holders, and verify whether liquidity is locked and for how long. DeFi analytics platforms like DEXTools and DexScreener show trading patterns that can reveal suspicious activity, such as coordinated selling by insider wallets or sudden large removals of liquidity. Learning to use these tools is an essential skill for anyone investing in newer or smaller crypto projects.
        </p>
      </section>

      <section id="protection">
        <h2>How to Protect Yourself</h2>
        <p>
          The most effective protection is thorough due diligence before investing. Research the team, read the contract code (or at minimum, check automated analysis tools), verify that liquidity is locked for a meaningful period, check the token distribution for concentration in a few wallets, and evaluate whether the project has genuine utility beyond token speculation. Never invest based solely on social media hype or celebrity endorsements, as these are easily fabricated or paid for.
        </p>
        <p>
          Limit your exposure to new and unverified projects to small amounts you can afford to lose entirely. Diversify your investments across established projects with proven track records rather than concentrating in speculative tokens. If you do invest in new projects, take profits progressively rather than holding indefinitely — recovering your initial investment early reduces the impact if the project turns out to be a rug pull. Trust your instincts: if something feels off about a project, the safest course of action is to walk away regardless of the promised returns.
        </p>
      </section>
    </LearnPageLayout>
  );
}
