import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Spot and Avoid Crypto Scams (${CURRENT_YEAR})`,
  description:
    "Protect yourself from cryptocurrency scams. Learn to identify rug pulls, phishing attacks, Ponzi schemes, fake exchanges, and social engineering tactics in the crypto space.",
};

export default function CryptoScamsPage() {
  return (
    <LearnPageLayout
      title="How to Spot and Avoid Crypto Scams"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="14 min"
      intro="The cryptocurrency space, while innovative and full of opportunity, is also rife with scams. The irreversible nature of blockchain transactions, the pseudonymity of wallets, and the lack of centralized consumer protection make crypto an attractive target for fraudsters. Billions of dollars are lost to crypto scams every year. This guide covers the most common types of scams, the red flags to watch for, and practical steps you can take to protect yourself and your assets."
      toc={[
        { id: "common-scams", title: "common-scams", level: 2 },
        { id: "common-types-of-crypto-scams", title: "Common Types of Crypto Scams", level: 2 },
        { id: "red-flags", title: "red-flags", level: 2 },
        { id: "red-flags-to-watch-for", title: "Red Flags to Watch For", level: 2 },
        { id: "social-engineering", title: "social-engineering", level: 2 },
        { id: "social-engineering-attacks", title: "Social Engineering Attacks", level: 2 },
        { id: "defi-scams", title: "defi-scams", level: 2 },
        { id: "defi-specific-scams", title: "DeFi-Specific Scams", level: 2 },
        { id: "protection", title: "protection", level: 2 },
        { id: "how-to-protect-yourself", title: "How to Protect Yourself", level: 2 },
        { id: "what-to-do", title: "what-to-do", level: 2 },
        { id: "what-to-do-if-you-get-scammed", title: "What to Do If You Get Scammed", level: 2 }
      ]}
      faqs={[
        {
          question: "Can I get my money back if I am scammed?",
          answer:
            "Unfortunately, recovering funds from crypto scams is extremely difficult due to the irreversible nature of blockchain transactions. In some cases, law enforcement agencies have been able to track and recover stolen funds, especially when centralized exchanges are involved. Report the scam to your local law enforcement, the FBI's IC3 (if in the US), and the exchange or platform involved. Prevention is far more effective than recovery.",
        },
        {
          question: "How do I verify if a crypto project is legitimate?",
          answer:
            "Check if the team's identities are public and verifiable, review the smart contract code (or check for third-party audits), look for an active development history on GitHub, verify the project's social media presence and community engagement, and check DeFi analytics tools like DeFiLlama for on-chain data. If a project lacks transparency in any of these areas, proceed with extreme caution.",
        },
        {
          question: "Are all new crypto projects scams?",
          answer:
            "No. Many new projects are legitimate and innovative. However, the low barrier to creating tokens means that scams are common, especially among small-cap and newly launched projects. Applying thorough due diligence (DYOR) before investing is essential. Established projects with long track records, transparent teams, and audited code carry less risk.",
        },
        {
          question: "Can smart contracts be scams?",
          answer:
            "Yes. Malicious smart contracts can contain hidden functions that allow the developer to drain funds, prevent you from selling tokens, mint unlimited tokens, or change contract rules after deployment. Always check if the contract has been audited, review the contract on a block explorer, and be cautious of contracts that are not verified or open-sourced.",
        },
      ]}
      relatedArticles={[
        { title: "Complete Crypto Security Guide", href: "/learn/crypto-security-guide", category: "Learn Crypto" },
        { title: "How to DYOR", href: "/learn/how-to-dyor", category: "Learn Crypto" },
        { title: "Best Crypto Wallets", href: "/wallets/best", category: "Wallets" },
        { title: "Crypto for Beginners", href: "/learn/crypto-for-beginners", category: "Learn Crypto" },
      ]}
    >
      <h2 id="common-scams">Common Types of Crypto Scams</h2>
      <p>
        Rug pulls are among the most devastating crypto scams. In a rug pull, developers create a token, generate hype to attract buyers (inflating the price), and then abruptly withdraw all liquidity or sell their holdings, crashing the price to zero. Investors are left holding worthless tokens with no recourse. Rug pulls are especially common with new meme coins and DeFi projects that lack audited code.
      </p>
      <p>
        Ponzi and pyramid schemes promise guaranteed high returns funded by new investors rather than legitimate profit generation. These schemes can appear sophisticated, using DeFi terminology and smart contracts to seem legitimate. They inevitably collapse when new investment slows, leaving later participants with total losses. Any project guaranteeing fixed daily, weekly, or monthly returns is almost certainly a Ponzi scheme.
      </p>
      <p>
        Fake exchanges and wallets mimic legitimate platforms to steal login credentials, private keys, or deposited funds. These may appear as promoted search results, ads on social media, or links in phishing emails. Once you deposit funds or enter your seed phrase, the scammers drain your assets. Always double-check URLs, download apps only from official sources, and never enter your seed phrase into a website.
      </p>

      <h2 id="red-flags">Red Flags to Watch For</h2>
      <p>
        Guaranteed returns are the single biggest red flag. No legitimate investment — in crypto or otherwise — can guarantee specific returns. If a project promises a fixed percentage yield that seems too good to be true, it almost certainly is. Similarly, unrealistic APYs in DeFi (thousands of percent) are usually unsustainable and often indicate a Ponzi-like token emission model.
      </p>
      <p>
        Anonymous teams with no verifiable track record should be treated with extreme caution. While pseudonymity has a legitimate place in crypto (Satoshi Nakamoto was anonymous), most legitimate projects have team members with verifiable identities, LinkedIn profiles, and public track records. An anonymous team combined with large token allocations to insiders is a major warning sign.
      </p>
      <p>
        High-pressure tactics like countdown timers, limited-time offers, fear of missing out (FOMO), and urgency to act before a deadline are classic manipulation techniques. Legitimate projects do not need to pressure you into quick decisions. Take your time, do your research, and never make investment decisions under emotional duress. If someone is rushing you, that itself is a warning.
      </p>

      <h2 id="social-engineering">Social Engineering Attacks</h2>
      <p>
        Phishing attacks are the most common form of social engineering in crypto. Scammers create websites, emails, or messages that impersonate legitimate services (exchanges, wallets, DeFi protocols) to trick you into entering your credentials or approving malicious transactions. Phishing links are distributed through fake customer support accounts, direct messages, email campaigns, and even compromised project Discord or Telegram channels.
      </p>
      <p>
        Impersonation scams involve fraudsters posing as well-known figures (crypto influencers, CEOs, customer support agents) to build trust before asking for funds or information. These are particularly common on social media platforms where verified accounts can be hacked or lookalike accounts created. Remember: legitimate companies and individuals will never ask for your private keys, seed phrase, or unsolicited payments.
      </p>
      <p>
        Romance scams (also called pig butchering) involve building a personal relationship with the victim over weeks or months before introducing a fake crypto investment opportunity. The scammer gains emotional trust, shows fabricated profits on a fake platform, and eventually convinces the victim to invest increasingly large sums. These scams have resulted in individual losses of hundreds of thousands of dollars.
      </p>

      <h2 id="defi-scams">DeFi-Specific Scams</h2>
      <p>
        Malicious token approvals exploit the way DeFi works. When you interact with a DeFi protocol, you often approve the smart contract to spend your tokens. A malicious contract can request unlimited approval and then drain your wallet at any time. Always review approval amounts, use limited approvals when possible, and periodically revoke unused approvals using tools like revoke.cash.
      </p>
      <p>
        Honeypot tokens are designed so that buyers can purchase but cannot sell. The smart contract contains hidden code that blocks sell transactions or imposes prohibitive fees on selling. The token price appears to rise (because only buys are going through), attracting more victims, while the developer is the only one who can actually sell.
      </p>
      <p>
        Fake airdrops and NFT drops send unsolicited tokens or NFTs to your wallet. Interacting with these tokens (trying to sell or swap them) can trigger malicious smart contract calls that drain your wallet. The safest approach is to simply ignore unknown tokens that appear in your wallet. Never interact with tokens you did not intentionally acquire.
      </p>

      <h2 id="protection">How to Protect Yourself</h2>
      <p>
        Use a hardware wallet for significant holdings. Hardware wallets keep your private keys offline, making them immune to phishing attacks and malware. Even if you interact with a malicious website, the hardware wallet requires physical confirmation for each transaction, giving you a chance to review and reject suspicious requests.
      </p>
      <p>
        Bookmark legitimate sites and always access exchanges, wallets, and DeFi protocols through your bookmarks rather than search results or links from social media. Enable two-factor authentication (2FA) on all exchange accounts, preferably using an authenticator app rather than SMS. Use unique, strong passwords for every crypto-related account.
      </p>
      <p>
        Educate yourself before investing. Read the project documentation, check audit reports, verify the team, review the token distribution, and understand the actual utility of the token. If you cannot clearly explain what a project does and why it has value, you do not understand it well enough to invest in it. Follow the DYOR principle rigorously.
      </p>

      <h2 id="what-to-do">What to Do If You Get Scammed</h2>
      <p>
        Act quickly if you suspect a scam. If you have given approvals to a malicious contract, immediately revoke them using revoke.cash or a similar tool. Transfer remaining assets to a new, clean wallet if your current wallet may be compromised. If the scam involved a centralized exchange, contact their support immediately — they may be able to freeze the scammer&apos;s account.
      </p>
      <p>
        Document everything: save transaction hashes, wallet addresses, screenshots of conversations, website URLs, and any other evidence. This information is essential for law enforcement and may help with recovery efforts. Report the scam to relevant authorities — the FBI&apos;s Internet Crime Complaint Center (IC3) in the US, Action Fraud in the UK, or your local equivalent.
      </p>
      <p>
        Share your experience (while being careful not to reveal personal information) to help others avoid the same scam. Report the scam on social media, crypto forums, and scam-tracking databases. While recovery of lost funds is rare, collective awareness is the most powerful defense the crypto community has against scammers.
      </p>
    </LearnPageLayout>
  );
}
