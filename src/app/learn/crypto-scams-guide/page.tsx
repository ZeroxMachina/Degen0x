import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Scams Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Comprehensive guide to cryptocurrency scams including common types, red flags, how to protect yourself, and what to do if you've been scammed.",
  keywords: ["crypto scams", "cryptocurrency fraud", "crypto scam types", "how to avoid crypto scams", "crypto fraud prevention"],
};

export default function CryptoScamsGuidePage() {
  return (
    <LearnPageLayout title="Crypto Scams Guide" categoryName="Crypto Education" categorySlug="learn" readTime="10 min" intro="Cryptocurrency scams have cost users billions of dollars. The irreversible nature of blockchain transactions, combined with the pseudonymous environment and rapid innovation, creates fertile ground for sophisticated fraud schemes. Understanding the most common scam types and their warning signs is your best defense against losing funds to bad actors."
      toc={[
        { id: "investment-scams", title: "investment-scams", level: 2 },
        { id: "investment-ponzi-scams", title: "Investment & Ponzi Scams", level: 2 },
        { id: "phishing-impersonation", title: "phishing-impersonation", level: 2 },
        { id: "phishing-impersonation", title: "Phishing & Impersonation", level: 2 },
        { id: "rug-pulls", title: "rug-pulls", level: 2 },
        { id: "rug-pulls-exit-scams", title: "Rug Pulls & Exit Scams", level: 2 },
        { id: "romance-pig-butchering", title: "romance-pig-butchering", level: 2 },
        { id: "romance-pig-butchering", title: "Romance & Pig Butchering", level: 2 },
        { id: "technical-scams", title: "technical-scams", level: 2 },
        { id: "technical-scams", title: "Technical Scams", level: 2 },
        { id: "red-flags", title: "red-flags", level: 2 },
        { id: "universal-red-flags", title: "Universal Red Flags", level: 2 },
        { id: "protection", title: "protection", level: 2 },
        { id: "protecting-yourself", title: "Protecting Yourself", level: 2 }
      ]}
      faqs={[
        { question: "What is the most common crypto scam?", answer: "Phishing attacks are the most prevalent, where scammers create fake websites, emails, or social media accounts mimicking legitimate services to steal credentials or trick users into signing malicious transactions. Investment scams promising guaranteed returns are the most costly in total dollar terms." },
        { question: "Can you recover scammed crypto?", answer: "In most cases, cryptocurrency sent to scammers cannot be recovered due to the irreversible nature of blockchain transactions. Some law enforcement agencies have blockchain forensics capabilities, and in rare cases funds have been frozen on exchanges. Prevention is far more effective than recovery." },
        { question: "Are crypto airdrops scams?", answer: "Legitimate airdrops exist, but many airdrop claims are scams designed to steal wallet credentials or trick users into approving malicious smart contracts. Never connect your wallet to unknown sites, and be extremely cautious of unsolicited airdrop notifications." },
        { question: "How do I report a crypto scam?", answer: "Report to local law enforcement, the FBI's IC3 (in the US), the FTC, your country's financial regulator, and the platform where the scam occurred. While recovery is unlikely, reports help authorities track criminal networks and potentially prevent future victims." },
      ]}
      relatedArticles={[
        { title: "How to Spot Rug Pulls", href: "/learn/how-to-spot-rug-pulls", category: "Learn" },
        { title: "Phishing Attacks in Crypto", href: "/learn/phishing-attacks-crypto", category: "Learn" },
        { title: "Crypto Recovery Scams", href: "/learn/crypto-recovery-scams", category: "Learn" },
        { title: "Self-Custody Guide", href: "/learn/self-custody-guide", category: "Learn" },
      ]}
    >
      <section id="investment-scams"><h2>Investment & Ponzi Scams</h2><p>Investment scams promise guaranteed high returns with little or no risk — a fundamental impossibility in any legitimate market. Ponzi schemes use new investor deposits to pay returns to earlier investors, creating the illusion of profitability until the scheme collapses. In crypto, these often disguise themselves as trading bots, yield platforms, or mining operations claiming unrealistic daily returns.</p><p>Warning signs include guaranteed returns (no legitimate investment can guarantee returns), pressure to recruit others (pyramid structure), inability to withdraw funds easily, opaque investment strategies, and returns that seem too consistent regardless of market conditions. The crypto version of Ponzi schemes often adds technical jargon about algorithms and blockchain technology to appear more sophisticated.</p></section>
      <section id="phishing-impersonation"><h2>Phishing & Impersonation</h2><p>Phishing attacks in crypto take many forms: fake exchange login pages, fraudulent wallet connection prompts, malicious token approval requests, and impersonation of support staff on social media. Scammers create pixel-perfect replicas of legitimate websites and use social media accounts that closely mimic official accounts of protocols, exchanges, and influencers.</p><p>A particularly dangerous form is transaction phishing, where users are tricked into signing blockchain transactions that grant unlimited token approvals or directly transfer assets to the attacker's wallet. Address poisoning involves sending tiny transactions from addresses that look similar to your contacts, hoping you will copy the wrong address for future transfers.</p></section>
      <section id="rug-pulls"><h2>Rug Pulls & Exit Scams</h2><p>Rug pulls occur when project developers abandon a project after raising funds, often by draining liquidity pools or selling large token holdings. These are common with new token launches where developers retain the ability to remove liquidity, mint unlimited tokens, or disable selling for everyone except themselves. The 2021 bull market saw thousands of rug pulls across multiple blockchains.</p><p>Exit scams are similar but involve more established-appearing projects that operate legitimately for a period before disappearing with user funds. These are harder to detect because the project may have a functional product, active community, and apparent legitimacy before the operators decide to abscond with accumulated assets.</p></section>
      <section id="romance-pig-butchering"><h2>Romance & Pig Butchering</h2><p>Pig butchering scams combine romance fraud with fake investment platforms. Scammers build relationships over weeks or months through dating apps or social media, then gradually introduce victims to fake crypto investment platforms that appear to show growing returns. Victims are encouraged to invest increasingly larger amounts before discovering the platform is entirely fraudulent.</p><p>These scams are often run by organized criminal networks using scripted conversations and professional-looking fake platforms. The emotional manipulation makes victims reluctant to seek help or accept they have been defrauded. Losses can be devastating, with individual victims sometimes losing their entire savings over the course of the manipulated relationship.</p></section>
      <section id="technical-scams"><h2>Technical Scams</h2><p>Technical scams exploit blockchain-specific vulnerabilities: malicious smart contracts that steal funds when you interact with them, fake tokens that mimic real ones but contain hidden transfer restrictions, and clipboard malware that replaces copied wallet addresses with attacker-controlled addresses. Dusting attacks send tiny amounts of tokens to track wallet activity and identify targets for social engineering.</p><p>Fake wallet applications on app stores have stolen millions by appearing legitimate while secretly sending private keys to attackers. Malicious browser extensions can modify transaction details or inject code into DeFi interfaces. Always download wallet software from official sources, verify URLs carefully, and be suspicious of any application that requests your seed phrase.</p></section>
      <section id="red-flags"><h2>Universal Red Flags</h2><p>Guaranteed or unrealistic returns, pressure to act quickly, requests for private keys or seed phrases, unsolicited contact about investment opportunities, inability to verify team identities, anonymous developers for projects handling significant funds, and locked or restricted withdrawals are all major warning signs. Any legitimate project or service will never ask for your seed phrase or private keys.</p><p>Additional red flags include newly created social media accounts with purchased followers, projects that lack technical documentation or audits, aggressive marketing that focuses on price rather than utility, and communities that suppress criticism or questioning. Trust your instincts — if something feels wrong or too good to be true, it very likely is.</p></section>
      <section id="protection"><h2>Protecting Yourself</h2><p>Use hardware wallets for significant holdings, verify all URLs manually, never click links in unsolicited messages, research projects thoroughly before investing, use separate wallets for different risk levels (keep a hot wallet with small amounts for exploring new protocols), and regularly revoke unnecessary token approvals using tools like Revoke.cash.</p><p>Stay informed about current scam tactics through crypto security communities and news sources. Practice skepticism as a default — assume any unsolicited opportunity is a scam until proven otherwise. Never share screen access, seed phrases, or private keys with anyone for any reason, including people claiming to be support staff from legitimate services.</p></section>
    </LearnPageLayout>
  );
}
