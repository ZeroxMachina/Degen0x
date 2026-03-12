import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Protect Yourself from Rug Pulls (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Learn how to identify and protect yourself from crypto rug pulls. Red flags to watch for, due diligence checklist, tools for verification, and what to do if you get rugged.",
  keywords: ["rug pull protection", "crypto rug pull", "avoid rug pulls", "DeFi scam protection", "crypto scams"],
};

export default function RugPullProtectionPage() {
  return (
    <LearnPageLayout
      title="How to Protect Yourself from Rug Pulls"
      categoryName="Crypto Insurance"
      categorySlug="insurance"
      readTime="11 min read"
      intro="Rug pulls are among the most common and devastating scams in crypto. They occur when project developers abandon a project and run off with investor funds, often after deliberately building hype and attracting liquidity. Billions of dollars have been lost to rug pulls across DeFi, NFTs, and token launches. Learning to identify the warning signs and protect yourself is essential for anyone participating in the crypto ecosystem, especially when interacting with newer or unestablished projects."
      toc={[
        { id: "types", title: "types", level: 2 },
        { id: "types-of-rug-pulls", title: "Types of Rug Pulls", level: 2 },
        { id: "red-flags", title: "red-flags", level: 2 },
        { id: "red-flags-to-watch-for", title: "Red Flags to Watch For", level: 2 },
        { id: "due-diligence", title: "due-diligence", level: 2 },
        { id: "due-diligence-checklist", title: "Due Diligence Checklist", level: 2 },
        { id: "tools", title: "tools", level: 2 },
        { id: "verification-tools", title: "Verification Tools", level: 2 },
        { id: "protection-strategies", title: "protection-strategies", level: 2 },
        { id: "protection-strategies", title: "Protection Strategies", level: 2 },
        { id: "if-rugged", title: "if-rugged", level: 2 },
        { id: "what-to-do-if-you-get-rugged", title: "What to Do If You Get Rugged", level: 2 }
      ]}
      faqs={[
        { question: "What is a rug pull?", answer: "A rug pull is when crypto project creators drain liquidity, dump their token allocation, or use backdoor functions to steal user funds. The term comes from the idea of pulling the rug out from under investors. They range from planned scams to projects that fail and developers abandon." },
        { question: "Can rug pulls be prevented?", answer: "Many rug pulls can be avoided through due diligence: checking token contracts for backdoors, verifying team identities, reviewing liquidity lock status, and avoiding projects with unrealistic promises. Tools like Token Sniffer and RugDoc can help identify common red flags." },
        { question: "Are audited projects safe from rug pulls?", answer: "Not necessarily. While audits check for code vulnerabilities, they may not prevent administrative rug pulls where the team uses legitimate admin functions maliciously (like minting unlimited tokens). Check for renounced ownership and locked liquidity alongside audits." },
        { question: "Can you recover funds after a rug pull?", answer: "Recovery is difficult but not impossible. Report to law enforcement and blockchain analytics firms. Some rug pulls have been partially recovered through legal action or community pressure. Prevention is far more effective than recovery attempts." },
      ]}
      relatedArticles={[
        { title: "Smart Contract Audit Guide", href: "/insurance/learn/smart-contract-audit-guide", category: "Insurance" },
        { title: "Complete Guide to Crypto Insurance", href: "/insurance/learn/crypto-insurance-guide", category: "Insurance" },
        { title: "DeFi Risks Guide", href: "/defi-lending/learn/defi-risks-guide", category: "DeFi Lending" },
      ]}
    >
      <h2 id="types">Types of Rug Pulls</h2>
      <p>
        Hard rug pulls involve coding malicious functions into the smart contract that allow developers to drain funds directly. This includes hidden mint functions that create unlimited tokens, backdoor withdrawal functions, or honeypot contracts that prevent selling. Soft rug pulls involve developers dumping their large token allocations on the open market, crashing the price while early investors are left holding worthless tokens. Liquidity rug pulls involve removing liquidity from DEX pools, making the token untradeable. Slow rug pulls see the team gradually abandoning the project while extracting value through treasury management and insider selling. Each type requires different detection methods and protective measures.
      </p>

      <h2 id="red-flags">Red Flags to Watch For</h2>
      <p>
        Anonymous teams with no verifiable track record are the biggest red flag. Unrealistic return promises (1000% APY or guaranteed profits) signal unsustainability. Unaudited or single-audit smart contracts from unknown firms increase risk. Unlocked or short-duration locked liquidity allows developers to drain pools. Large team token allocations with no vesting schedule enable dumps. Aggressive marketing with excessive hype and paid promotions often precede rug pulls. Copied or forked code with minimal modifications suggests low effort. Social media accounts created recently or purchased suggest manufactured legitimacy. Pressure to invest quickly with limited time offers prevents proper due diligence.
      </p>

      <h2 id="due-diligence">Due Diligence Checklist</h2>
      <p>
        Before investing in any new crypto project, verify the team&apos;s identity and track record through LinkedIn, GitHub, and previous projects. Read the smart contract code or at minimum review the audit report. Check if liquidity is locked and for how long using tools like DexScreener or DexTools. Verify the token contract on a block explorer: look for unusual functions, large wallets holding excessive supply, and proxy contracts that can be modified. Review the tokenomics for sustainable economics rather than reliance on new investor inflows. Test selling with a small amount to ensure the contract allows selling. Check community channels for genuine engagement versus bot activity.
      </p>

      <h2 id="tools">Verification Tools</h2>
      <p>
        Token Sniffer automatically analyzes token contracts for common rug pull indicators including honeypot functions, hidden mints, and unusual permissions. RugDoc provides risk ratings for DeFi protocols and yield farms. GoPlus Security API scans token contracts for malicious code across multiple chains. DexScreener and DexTools show liquidity depth, holder distribution, and trading patterns. Etherscan and BscScan allow manual contract verification. Bubblemaps visualizes token holder connections to identify concentrated ownership. De.Fi (formerly DeFi Yield) provides a security scanner for smart contracts. Using multiple tools provides a more comprehensive risk assessment than relying on any single source.
      </p>

      <h2 id="protection-strategies">Protection Strategies</h2>
      <p>
        Never invest more than you can afford to lose in unestablished projects. Start with small test transactions to verify you can sell before committing larger amounts. Use hardware wallets and create separate wallets for interacting with risky protocols to isolate exposure. Diversify across multiple projects to limit the impact of any single rug pull. Set stop-loss orders where possible. Avoid projects in their first 24-48 hours when rug pull risk is highest. Be especially cautious with tokens launched on free-to-create platforms. Join project communities and observe the quality of discussion; genuine projects have substantive technical discussions, while rug pulls tend to have only price speculation and hype.
      </p>

      <h2 id="if-rugged">What to Do If You Get Rugged</h2>
      <p>
        Act immediately to minimize additional losses. Revoke all token approvals you granted to the project using Revoke.cash. Document everything: contract addresses, transaction hashes, team communications, website screenshots, and social media posts before they are deleted. Report the incident to local law enforcement and relevant regulatory bodies. File reports with blockchain analytics firms like Chainalysis and TRM Labs who may be able to trace funds. Report to the exchange if the rugged tokens were purchased there. Join other affected users in community recovery efforts; some successful recoveries have happened through collective action and public pressure.
      </p>
    </LearnPageLayout>
  );
}
