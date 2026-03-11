import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Phishing Attacks in Crypto: How to Stay Safe (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about crypto phishing attacks: fake websites, malicious approvals, DNS hijacking, and social media scams. Get practical tips to identify and prevent phishing attempts.",
};

export default function PhishingAttacksCryptoPage() {
  return (
    <LearnPageLayout
      title="Phishing Attacks in Crypto: How to Stay Safe"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="8 min read"
      intro="Phishing is the most prevalent attack vector in cryptocurrency, responsible for more individual fund losses than any other scam type. Crypto phishing goes beyond traditional email scams — it includes fake websites mimicking DeFi protocols, malicious token approvals disguised as airdrops, compromised social media accounts directing users to drainer contracts, and sophisticated DNS hijacking attacks that replace legitimate sites with clones. Understanding these tactics is your first line of defense."
      toc={[
        { id: "types", title: "Types of Crypto Phishing Attacks", level: 2 },
        { id: "how-they-work", title: "How Crypto Phishing Works", level: 2 },
        { id: "identifying", title: "Identifying Phishing Attempts", level: 2 },
        { id: "prevention", title: "Prevention Strategies", level: 2 },
      ]}
      faqs={[
        {
          question: "Can signing a message drain my wallet?",
          answer:
            "Yes. While gasless signatures (like EIP-712 permit signatures) do not appear as blockchain transactions, they can authorize token transfers. Malicious sites use these signature requests to get approval to transfer your tokens without a standard approval transaction. Always read what you are signing carefully, and be suspicious of any unexpected signature request.",
        },
        {
          question: "How do fake websites appear in search results?",
          answer:
            "Scammers purchase ads on search engines that appear above organic results for popular crypto searches. The ad may show a legitimate-looking URL but redirect to a phishing site. They also use typosquatting (registering domains with common misspellings) and SEO manipulation. Always verify URLs carefully and prefer bookmarks over search results for accessing crypto platforms.",
        },
        {
          question: "What is an approval phishing attack?",
          answer:
            "An approval phishing attack tricks you into granting a malicious smart contract permission to spend your tokens. Once approved, the attacker can drain the approved tokens from your wallet at any time. These attacks often disguise the malicious approval as a claim for an airdrop, an NFT mint, or a routine DeFi interaction.",
        },
      ]}
      relatedArticles={[
        { title: "Common Crypto Scams", href: "/learn/common-crypto-scams", category: "Learn" },
        { title: "Crypto Security Guide", href: "/learn/crypto-security-guide", category: "Learn" },
        { title: "Social Engineering in Crypto", href: "/learn/social-engineering-crypto", category: "Learn" },
        { title: "Smart Contract Security", href: "/learn/smart-contract-security", category: "Learn" },
      ]}
    >
      <section id="types">
        <h2>Types of Crypto Phishing Attacks</h2>
        <p>
          Website phishing involves creating pixel-perfect clones of popular exchanges, wallets, and DeFi protocols. These fake sites collect login credentials, seed phrases, or trick users into signing malicious transactions. Airdrop phishing sends unsolicited tokens to your wallet, and when you try to interact with them (sell or transfer), you are directed to a phishing site that requests a malicious approval. Some airdropped tokens even have names that are URLs, directing curious users to phishing sites.
        </p>
        <p>
          Social media phishing uses hacked or impersonated accounts of influencers, projects, and exchanges to promote fake links. Discord and Telegram are particularly common vectors, with attackers creating fake announcement channels or DMing users with urgent warnings about security issues that require immediate action. DNS hijacking attacks compromise the domain name system records of legitimate projects, redirecting users to attacker-controlled servers while the URL appears correct in the browser.
        </p>
      </section>

      <section id="how-they-work">
        <h2>How Crypto Phishing Works</h2>
        <p>
          Modern crypto phishing attacks typically target wallet interactions rather than passwords. When you connect your wallet to a phishing site and sign a transaction, you may unknowingly approve a malicious smart contract to transfer your tokens, sign a gasless permit that authorizes token spending, or initiate a direct transfer to the attacker's address. Wallet drainer kits, which are sold on underground markets, automate the process of creating phishing sites and extracting maximum value from compromised wallets.
        </p>
        <p>
          The most sophisticated attacks use multiple stages. First, they establish legitimacy through a seemingly harmless interaction. Then, they request increasingly dangerous approvals, often disguised as routine operations like token claims or migrations. Some attacks exploit the complexity of transaction data to hide their true intent — the transaction confirmation in your wallet may appear innocuous while actually granting unlimited token approval to the attacker. Recent drainer kits can even detect the contents of your wallet and prioritize draining the most valuable assets first.
        </p>
      </section>

      <section id="identifying">
        <h2>Identifying Phishing Attempts</h2>
        <p>
          Always check the URL carefully. Phishing sites use subtle variations: swapping characters (rn instead of m), adding extra words (uniswap-app.com instead of uniswap.org), or using different top-level domains (.io instead of .org). Look for HTTPS and valid SSL certificates, though be aware that phishing sites commonly have valid certificates too. The URL is the most reliable indicator but requires careful attention.
        </p>
        <p>
          Be suspicious of unsolicited contact. Legitimate projects do not DM you first on Discord or Telegram, do not ask you to connect your wallet urgently, and do not request your seed phrase under any circumstances. Urgency and pressure are hallmarks of phishing — messages saying your account is at risk, that you must act immediately, or that an opportunity is about to expire are designed to override careful thinking. If a transaction request seems unusual, unexpected, or asks for approval of a token or contract you do not recognize, decline it and investigate independently.
        </p>
      </section>

      <section id="prevention">
        <h2>Prevention Strategies</h2>
        <p>
          Bookmark the websites of every exchange and DeFi protocol you use, and always navigate through those bookmarks. Never click links from social media, Discord messages, or emails to access financial platforms. Use wallet security extensions like Wallet Guard or Pocket Universe that simulate transactions and warn you about potentially malicious approvals before you sign them. These tools can detect known phishing contracts and alert you to suspicious transaction patterns.
        </p>
        <p>
          Regularly audit and revoke token approvals using tools like Revoke.cash or Etherscan's token approval checker. Remove approvals for contracts you no longer use, especially unlimited approvals. Use separate wallets for different risk levels: a dedicated wallet for interacting with new or unverified protocols, a main DeFi wallet for established platforms, and a hardware wallet for long-term storage that rarely connects to any website. This compartmentalization ensures that compromise of one wallet does not affect your entire portfolio.
        </p>
      </section>
    </LearnPageLayout>
  );
}
