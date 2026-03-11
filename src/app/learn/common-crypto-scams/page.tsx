import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Common Crypto Scams and How to Avoid Them (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about the most common cryptocurrency scams including phishing, rug pulls, Ponzi schemes, fake airdrops, and romance scams. Get practical tips to identify and avoid them.",
};

export default function CommonCryptoScamsPage() {
  return (
    <LearnPageLayout
      title="Common Crypto Scams and How to Avoid Them"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="10 min read"
      intro="Cryptocurrency scams have cost investors billions of dollars, and new schemes emerge as fast as old ones are exposed. The irreversible nature of blockchain transactions, combined with the complexity of the technology and the promise of quick profits, creates an ideal environment for scammers. Educating yourself about common scam types and red flags is the best defense against becoming a victim. This guide covers the most prevalent crypto scams and actionable strategies to protect yourself."
      toc={[
        { id: "phishing-scams", title: "Phishing and Impersonation Scams", level: 2 },
        { id: "investment-scams", title: "Investment and Ponzi Scams", level: 2 },
        { id: "rug-pulls", title: "Rug Pulls and Token Scams", level: 2 },
        { id: "social-scams", title: "Social Engineering and Romance Scams", level: 2 },
        { id: "protection", title: "How to Protect Yourself", level: 2 },
      ]}
      faqs={[
        {
          question: "Can I recover funds lost to a crypto scam?",
          answer:
            "In most cases, recovering funds from a crypto scam is extremely difficult or impossible due to the irreversible nature of blockchain transactions. Report the scam to local law enforcement, the FBI's IC3 (in the US), and the platform where the scam occurred. Blockchain analytics firms sometimes assist in tracing stolen funds, but recovery success rates are low.",
        },
        {
          question: "How do I verify if a crypto project is legitimate?",
          answer:
            "Check whether the team is publicly identified and has a verifiable track record. Review the smart contract code and audit reports. Check the project's social media presence for authentic engagement. Verify the website URL and contract addresses through official channels. Be wary of projects with anonymous teams, no audits, unrealistic promises, and aggressive marketing focused on price rather than technology.",
        },
        {
          question: "Why are crypto scams so common?",
          answer:
            "Several factors make crypto a target for scammers: transactions are irreversible, pseudonymous identities make scammers hard to identify, the technology is complex and poorly understood by many users, regulatory enforcement is still developing, and the possibility of large returns attracts victims willing to suspend disbelief. The decentralized nature of crypto also means there is no central authority to shut down scam operations quickly.",
        },
      ]}
      relatedArticles={[
        { title: "Phishing Attacks in Crypto", href: "/learn/phishing-attacks-crypto", category: "Learn" },
        { title: "Rug Pulls Explained", href: "/learn/rug-pulls-explained", category: "Learn" },
        { title: "Social Engineering in Crypto", href: "/learn/social-engineering-crypto", category: "Learn" },
        { title: "Crypto Security Guide", href: "/learn/crypto-security-guide", category: "Learn" },
      ]}
    >
      <section id="phishing-scams">
        <h2>Phishing and Impersonation Scams</h2>
        <p>
          Phishing is the most common crypto scam. Attackers create fake websites that look identical to legitimate exchanges, wallets, or DeFi protocols. They drive traffic through fake social media accounts, malicious ads, or phishing emails and messages. When victims enter their credentials or connect their wallets and sign a malicious transaction, the attackers drain their funds. Some phishing sites are so sophisticated that even experienced users have been deceived.
        </p>
        <p>
          Impersonation scams involve accounts pretending to be well-known figures, projects, or support teams. Scammers create social media accounts mimicking Vitalik Buterin, Elon Musk, or official project accounts, then post about fake giveaways, airdrops, or support links. They may also infiltrate project Discord servers or Telegram groups, posing as admins who offer to help users with issues — then directing them to phishing sites or asking for seed phrases. Legitimate projects and public figures will never ask you to send crypto to receive more in return.
        </p>
      </section>

      <section id="investment-scams">
        <h2>Investment and Ponzi Scams</h2>
        <p>
          Investment scams promise unrealistic guaranteed returns — phrases like "guaranteed 10% daily returns" or "risk-free 500% APY" are immediate red flags. Ponzi schemes pay early investors with deposits from new investors, creating the illusion of legitimate returns until the flow of new money slows and the scheme collapses. In crypto, these often take the form of cloud mining schemes, trading bot services, or yield platforms that promise impossibly high returns.
        </p>
        <p>
          Multi-level marketing (MLM) crypto scams incentivize participants to recruit new members, with commissions flowing up the pyramid. The underlying tokens or services typically have little genuine value. These schemes can persist for months or years as long as recruitment continues, but inevitably collapse when growth stalls. If a project's primary value proposition is recruiting new participants rather than a genuine product or service, it is likely a pyramid or Ponzi scheme regardless of how it is marketed.
        </p>
      </section>

      <section id="rug-pulls">
        <h2>Rug Pulls and Token Scams</h2>
        <p>
          A rug pull occurs when the developers of a token or DeFi protocol withdraw all liquidity or exploit a backdoor in the smart contract, leaving investors with worthless tokens. Soft rug pulls involve developers gradually selling their holdings and abandoning the project. Hard rug pulls use malicious smart contract functions that allow the deployer to drain all funds from the liquidity pool in a single transaction.
        </p>
        <p>
          Token scams include honeypot tokens (which allow buying but prevent selling through hidden code), tokens with hidden transfer taxes that steal a percentage of every transaction, and tokens with unlimited mint functions that let the creator inflate supply at will. Many of these scams are launched on DEXs where listing is permissionless, making it easy for scammers to create and promote fraudulent tokens. Always verify token contracts using tools like TokenSniffer or RugDoc before investing, and be especially cautious with newly launched tokens promoted through social media hype.
        </p>
      </section>

      <section id="social-scams">
        <h2>Social Engineering and Romance Scams</h2>
        <p>
          Romance scams (also called pig-butchering scams) involve scammers building emotional relationships with victims over weeks or months before introducing them to fake investment platforms. These scams originate on dating apps, social media, or messaging platforms. The fake platform initially shows impressive returns, encouraging larger deposits. When the victim tries to withdraw, they are told to pay additional fees or taxes, which the scammer also pockets.
        </p>
        <p>
          Other social engineering tactics include fake job offers that require crypto payments for training or equipment, urgent messages from compromised accounts of friends or family asking for emergency crypto transfers, and fake tech support that contacts you about supposed wallet or exchange issues. The common thread is emotional manipulation — urgency, fear, greed, or personal connection — designed to override your rational judgment. Any situation that pressures you to make a quick financial decision should be treated with extreme skepticism.
        </p>
      </section>

      <section id="protection">
        <h2>How to Protect Yourself</h2>
        <p>
          Develop a healthy skepticism toward any unsolicited offer, message, or opportunity in the crypto space. Bookmark the websites of exchanges and protocols you use regularly, and always navigate through those bookmarks rather than clicking links in emails, messages, or social media posts. Never share your seed phrase or private keys with anyone under any circumstances, and use a hardware wallet for significant holdings.
        </p>
        <p>
          Before investing in any project, research the team (are they publicly identified?), read the smart contract audit reports, check the liquidity lock status, and evaluate whether the promised returns are realistic and sustainable. Join official community channels and verify information through multiple independent sources. If something sounds too good to be true, it almost certainly is. The most powerful defense is patience — take time to research before committing funds, and never let urgency or fear of missing out drive your investment decisions.
        </p>
      </section>
    </LearnPageLayout>
  );
}
