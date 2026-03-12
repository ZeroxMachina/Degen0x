import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Spot Rug Pulls (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn how to identify and avoid cryptocurrency rug pulls with this guide covering red flags, contract analysis, liquidity checks, and due diligence steps.",
  keywords: ["rug pull", "crypto rug pull", "how to spot rug pull", "DeFi scam", "token scam", "liquidity pull"],
};

export default function HowToSpotRugPullsPage() {
  return (
    <LearnPageLayout title="How to Spot Rug Pulls" categoryName="Crypto Education" categorySlug="learn" readTime="8 min" intro="A rug pull occurs when cryptocurrency project developers abandon a project and run away with investor funds. These scams are particularly common with new token launches on decentralized exchanges. Learning to identify the warning signs before investing can save you from significant financial losses."
      toc={[
        { id: "what-is-rug-pull", title: "what-is-rug-pull", level: 2 },
        { id: "what-is-a-rug-pull", title: "What Is a Rug Pull?", level: 2 },
        { id: "types", title: "types", level: 2 },
        { id: "types-of-rug-pulls", title: "Types of Rug Pulls", level: 2 },
        { id: "red-flags", title: "red-flags", level: 2 },
        { id: "red-flags-to-watch-for", title: "Red Flags to Watch For", level: 2 },
        { id: "contract-analysis", title: "contract-analysis", level: 2 },
        { id: "smart-contract-red-flags", title: "Smart Contract Red Flags", level: 2 },
        { id: "due-diligence", title: "due-diligence", level: 2 },
        { id: "due-diligence-checklist", title: "Due Diligence Checklist", level: 2 }
      ]}
      faqs={[
        { question: "How common are rug pulls?", answer: "Rug pulls are extremely common, especially among new token launches. During the 2021 bull market, rug pulls accounted for billions in losses. While exact numbers are difficult to track, industry estimates suggest thousands of rug pulls occur each year across various blockchains." },
        { question: "Can a rug pull be detected by the contract?", answer: "Many rug pulls can be detected through smart contract analysis. Functions that allow the owner to disable selling, mint unlimited tokens, or remove liquidity are major red flags. Contract verification tools and audit reports can help identify these risks, though sophisticated scams may use obfuscated code." },
        { question: "What does locked liquidity mean?", answer: "Locked liquidity means the liquidity pool tokens (LP tokens) are deposited in a time-lock contract, preventing the project developers from removing liquidity for a set period. While not a guarantee of legitimacy, locked liquidity removes one of the most common rug pull vectors." },
        { question: "Are audited projects safe from rug pulls?", answer: "An audit reduces risk but does not eliminate it. Audits check code at a specific point in time, and projects with upgradeable contracts can change functionality after an audit. Additionally, some projects use fake or low-quality audit firms. Look for audits from reputable firms with track records." },
      ]}
      relatedArticles={[
        { title: "Crypto Scams Guide", href: "/learn/crypto-scams-guide", category: "Learn" },
        { title: "Smart Contract Risks", href: "/learn/smart-contract-risks", category: "Learn" },
        { title: "How to Research Crypto", href: "/learn/how-to-research-crypto", category: "Learn" },
        { title: "What Is a Liquidity Pool?", href: "/learn/what-is-a-liquidity-pool", category: "Learn" },
      ]}
    >
      <section id="what-is-rug-pull"><h2>What Is a Rug Pull?</h2><p>A rug pull is a type of cryptocurrency scam where developers create a token, build hype to attract investors, and then drain the project's funds. The term comes from the expression "pulling the rug out from under someone." In DeFi, this typically involves removing liquidity from a decentralized exchange, making it impossible for other holders to sell their tokens, or selling a massive supply of tokens that was secretly held by the team.</p><p>Rug pulls exploit the permissionless nature of blockchain technology — anyone can create a token and list it on decentralized exchanges without identity verification or regulatory oversight. While this openness drives innovation, it also enables fraud at a scale impossible in traditional finance where listing a security requires extensive regulatory compliance.</p></section>
      <section id="types"><h2>Types of Rug Pulls</h2><p>Liquidity pulls are the most straightforward: developers add initial liquidity to a DEX pool, wait for others to buy in and add value, then withdraw all liquidity. This crashes the token price to zero and leaves remaining holders unable to sell. Hard rug pulls involve smart contract backdoors that allow developers to steal funds directly or disable selling for all holders except themselves.</p><p>Soft rug pulls involve developers selling large token allocations over time while maintaining the appearance of legitimacy. These are harder to detect because the project may continue operating while insiders gradually dump their holdings. Pump-and-dump schemes are related — coordinated buying drives up the price, then insiders sell at inflated prices, leaving latecomers with losses.</p></section>
      <section id="red-flags"><h2>Red Flags to Watch For</h2><p>Anonymous teams with no verifiable track record, unrealistic promises of returns, aggressive marketing focused on price rather than product, newly created social media accounts with purchased followers, and extreme hype with no functioning product are all major warning signs. Projects that restrict or penalize selling (high sell taxes, sell cooldowns) may be designed to prevent exits while insiders profit.</p><p>Concentrated token ownership where a small number of wallets hold a majority of supply is dangerous — these holders can crash the price at any time. Unverified smart contracts, no audit from reputable firms, unlocked liquidity, and the ability for contract owners to mint new tokens or modify key parameters all indicate elevated rug pull risk. Check token holder distributions using blockchain explorers before investing.</p></section>
      <section id="contract-analysis"><h2>Smart Contract Red Flags</h2><p>Examine the smart contract for owner-only functions that can modify trading conditions: functions to pause or disable trading, modify fees to 100%, blacklist addresses, mint additional tokens, or proxy upgrade patterns that allow complete contract replacement. Tools like Token Sniffer, GoPlus Security, and DEXTools provide automated contract analysis that flags many of these risks.</p><p>Honeypot contracts are particularly deceptive — they allow buying but prevent selling through hidden conditions in the transfer function. Verify that you can actually sell a token before investing significant amounts. Test with a small purchase first and confirm you can sell back. Renounced ownership (where the deployer gives up control of the contract) is positive but can be faked through proxy patterns.</p></section>
      <section id="due-diligence"><h2>Due Diligence Checklist</h2><p>Before investing in any new token: verify team identities and track records, check if the smart contract is verified and audited, confirm liquidity is locked (and for how long), analyze token distribution for concentration risk, review the project's GitHub for actual development activity, and assess community engagement for organic versus manufactured interest.</p><p>Use multiple analysis tools: check the contract on blockchain explorers, run it through automated security scanners, review holder concentration on analytics platforms, and evaluate trading patterns for suspicious activity. If a project fails multiple checks on this list, the risk of a rug pull is significantly elevated. When in doubt, the safest decision is to avoid investing entirely.</p></section>
    </LearnPageLayout>
  );
}
