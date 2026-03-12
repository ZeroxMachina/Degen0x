import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Ultimate Crypto Security Guide: Best Practices & Scam Prevention | degen0x`,
  description:
    "Learn wallet security, phishing prevention, seed phrase management, hardware wallets, 2FA best practices, and how to avoid common crypto scams.",
};

export default function CryptoSecurityGuidePage() {
  return (
    <LearnPageLayout
      title="Ultimate Crypto Security Guide"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="14 min read"
      intro="Cryptocurrency ownership introduces new security paradigms. Unlike traditional banking where chargebacks and account recovery are standard, crypto transfers are irreversible and self-custody means you alone are responsible for security. This guide covers wallet security, phishing prevention, seed phrase management, hardware wallet best practices, and common scams. Master these concepts and you'll dramatically reduce your risk of theft, loss, or fraud."
      toc={[
        { id: "wallet-types", title: "wallet-types", level: 2 },
        { id: "wallet-types-custody", title: "Wallet Types & Custody", level: 2 },
        { id: "seed-phrase-security", title: "seed-phrase-security", level: 2 },
        { id: "seed-phrase-management", title: "Seed Phrase Management", level: 2 },
        { id: "hardware-wallets", title: "hardware-wallets", level: 2 },
        { id: "hardware-wallets", title: "Hardware Wallets", level: 2 },
        { id: "two-factor-auth", title: "two-factor-auth", level: 2 },
        { id: "2fa-authentication", title: "2FA & Authentication", level: 2 },
        { id: "phishing-prevention", title: "phishing-prevention", level: 2 },
        { id: "phishing-prevention", title: "Phishing Prevention", level: 2 },
        { id: "common-scams", title: "common-scams", level: 2 },
        { id: "common-scams-how-to-avoid-them", title: "Common Scams & How to Avoid Them", level: 2 }
      ]}
      faqs={[
        {
          question: "Is it safer to leave crypto on an exchange or in a self-custody wallet?",
          answer:
            "Neither is universally 'safer'—they present different risks. Exchange custody means counterparty risk (the exchange could be hacked, go bankrupt, or restrict withdrawals). Self-custody means you handle security entirely (losing seed phrases, malware, phishing). For long-term holdings, self-custody with a hardware wallet is generally preferred. For active trading, exchange accounts may be practical but should use small amounts. Many use a hybrid approach: hardware wallet for most holdings, small exchange balance for frequent trading.",
        },
        {
          question: "What if I forget my seed phrase?",
          answer:
            "Your crypto is permanently inaccessible. Seed phrases are cryptographic derivations of your private keys—there's no backup or recovery mechanism. Always store your seed phrase securely and permanently. If you lose it and need to recover funds, you may be able to access older transaction history to recreate accounts, but only if you have documentation of the original derivation process. Most people in this situation lose their crypto entirely.",
        },
        {
          question: "Are hardware wallets immune to hacking?",
          answer:
            "Hardware wallets are extremely secure for their purpose but not infallible. They isolate private keys from internet-connected devices, preventing most remote hacking. However, physical theft, malicious firmware updates, and supply chain compromises are possible (though rare). The key is that even if someone steals your hardware wallet, they can't access funds without your PIN. This is much stronger protection than hot wallets and exchanges.",
        },
        {
          question: "Can I recover my account if I lose my hardware wallet?",
          answer:
            "Yes, if you have your seed phrase. Your seed phrase generates all your accounts and addresses. If your hardware wallet is lost, you can purchase a replacement, enter your seed phrase, and recover all accounts instantly. This is why secure seed phrase storage is critical—it's the ultimate backup for all your wallets.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Bitcoin?", href: "/learn/what-is-bitcoin", category: "Learn Crypto" },
        { title: "Cryptocurrency Explained", href: "/learn/what-is-cryptocurrency", category: "Learn Crypto" },
        { title: "How to Buy Bitcoin Safely", href: "/learn/how-to-buy-bitcoin", category: "Learn Crypto" },
        { title: "DeFi Risks & Safety", href: "/learn/defi-risks", category: "Learn Crypto" },
      ]}
    >
      <section id="wallet-types">
        <h2>Wallet Types & Custody</h2>
        <p>
          Cryptocurrency wallets fall into two categories: custodial and self-custody. Custodial wallets (used by exchanges like Coinbase or Kraken) are controlled by a third party who holds your private keys. You authenticate with a password and 2FA, but the exchange controls the underlying crypto. Self-custody wallets (like MetaMask, Phantom, or hardware wallets) are controlled entirely by you—you hold the private key and the exchange or platform cannot move your funds without your explicit approval.
        </p>
        <p>
          Hot wallets are internet-connected software wallets (phone apps, browser extensions, web applications). They're convenient for frequent trading or small amounts but vulnerable to malware, phishing, and exchange hacks. Cold wallets (hardware wallets, paper wallets) keep private keys offline, providing strong security for long-term holdings but reduced convenience for active trading.
        </p>
        <p>
          The fundamental tradeoff is custody versus control. Custodial solutions (exchanges) provide convenience, account recovery, and customer support but introduce counterparty risk. Self-custody provides absolute control and privacy but makes you entirely responsible for security. Most crypto investors use a hybrid approach: self-custody for long-term holdings and exchange accounts for frequent trading.
        </p>

        <div className="bg-blue-900 border border-blue-700 rounded-lg p-6 my-6">
          <h3 className="text-lg font-semibold text-blue-100 mb-3">Key Principle: Not Your Keys, Not Your Coins</h3>
          <p className="text-blue-100">
            If you don't control the private keys, you don't truly own the crypto. You have a claim on an institution that controls the keys. This is fine for trading, but for long-term holdings, self-custody is the safer strategy.
          </p>
        </div>
      </section>

      <section id="seed-phrase-security">
        <h2>Seed Phrase Management</h2>
        <p>
          A seed phrase (also called a recovery phrase or mnemonic) is a list of 12-24 words that cryptographically derives all your private keys. If someone gains your seed phrase, they can restore all your accounts and steal all your crypto. Protecting your seed phrase is the single most important crypto security task.
        </p>
        <p>
          Never share your seed phrase with anyone, ever. Legitimate projects and support teams will never ask for your seed phrase. If anyone asks for it—whether they claim to be from the wallet company, technical support, or a trusted friend—it's a scam. Period. There are no exceptions.
        </p>
        <p>
          Store your seed phrase in multiple secure locations. Best practices include: write it on paper and store the paper in a safe deposit box, fireproof safe, or other secure location. Never store it on a computer, phone, or any internet-connected device. Never take a screenshot or photo of your seed phrase. Never type it into a website, email, or message application. Treat your seed phrase like the keys to your bank vault—because that's what it is.
        </p>
        <p>
          Some advanced users split seed phrases using secret sharing schemes (storing half in one location, half in another) to prevent a single person or location from controlling funds. Others use multiple wallets with different seed phrases to compartmentalize risk. For most users, a single backup in a highly secure location is sufficient.
        </p>

        <div className="bg-red-900 border border-red-700 rounded-lg p-6 my-6">
          <h3 className="text-lg font-semibold text-red-100 mb-3">Seed Phrase Security Checklist</h3>
          <ul className="text-red-100 space-y-2">
            <li>Never share with anyone, ever</li>
            <li>Write on paper, never store digitally</li>
            <li>Store in multiple secure physical locations</li>
            <li>Never screenshot, photograph, or email</li>
            <li>Verify you can restore from phrase (test with small amount if paranoid)</li>
          </ul>
        </div>
      </section>

      <section id="hardware-wallets">
        <h2>Hardware Wallets</h2>
        <p>
          Hardware wallets (Ledger, Trezor, SafePal) are physical devices that store private keys offline. To approve a transaction, you connect the hardware wallet to a computer or phone, review transaction details on the device's secure screen, and approve using physical buttons. The private key never leaves the device, and transactions are cryptographically signed internally before transmission to the network.
        </p>
        <p>
          The advantage is that even if your computer or phone is infected with malware, the hacker cannot steal your private keys or approve unauthorized transactions. The malware might redirect addresses (you send to the attacker's address instead of your intended recipient), but it cannot directly access your funds. Additionally, the hardware wallet's small screen lets you verify transaction details independently of your computer.
        </p>
        <p>
          Hardware wallets are suitable for storing meaningful amounts of crypto long-term. They're overkill for small amounts and inconvenient for frequent trading. Most serious crypto investors use hardware wallets for their core holdings and hot wallets with small balances for active trading.
        </p>
        <p>
          When purchasing a hardware wallet, buy directly from the manufacturer or authorized retailers. Hardware wallets purchased from third parties could have been pre-compromised. Set up your hardware wallet from a clean device (fresh computer or phone ideally). Never restore from a seed phrase when setting up for the first time—the device generates its own seed phrase, which you write down. This ensures no one has a copy of your private keys.
        </p>

        <div className="bg-green-900 border border-green-700 rounded-lg p-6 my-6">
          <h3 className="text-lg font-semibold text-green-100 mb-3">Hardware Wallet Setup</h3>
          <ol className="text-green-100 space-y-2">
            <li>Purchase from manufacturer or authorized retailer</li>
            <li>Verify authenticity (check serial number, anti-tamper stickers)</li>
            <li>Set up on a clean device (fresh computer or phone if possible)</li>
            <li>Write down seed phrase in secure location</li>
            <li>Test restoration with small amount of crypto</li>
            <li>Transfer your holdings to the hardware wallet</li>
          </ol>
        </div>
      </section>

      <section id="two-factor-auth">
        <h2>2FA & Authentication Best Practices</h2>
        <p>
          Two-factor authentication (2FA) adds a second verification step beyond your password. Types include SMS (text message codes), authenticator apps (Google Authenticator, Authy), email verification, and hardware security keys. For crypto accounts, authenticator apps are significantly more secure than SMS (which is vulnerable to SIM swapping) and more convenient than security keys.
        </p>
        <p>
          Enable 2FA on all accounts that contain or control crypto: exchange accounts, wallet recovery email addresses, and any accounts that can approve fund transfers. Use authenticator apps rather than SMS where possible. Store backup codes in a secure location separate from your passwords. If you lose your authenticator app, backup codes are your only recovery path.
        </p>
        <p>
          Physically secure your device. Malware that gains access to your phone or computer can potentially observe 2FA codes or intercept login sessions. Use strong, unique passwords for each account. Password managers (Bitwarden, 1Password) make managing dozens of unique passwords practical. Never reuse passwords across accounts—if one service is hacked, attackers can try the compromised password on other sites.
        </p>
        <p>
          For extremely high-value accounts, hardware security keys (Yubikey) provide phishing-resistant 2FA. These physical devices require a physical interaction to authenticate, preventing attackers from logging in even with your password. This is overkill for most users but worth considering if you're managing large amounts of crypto.
        </p>
      </section>

      <section id="phishing-prevention">
        <h2>Phishing Prevention</h2>
        <p>
          Phishing is the most common attack vector for crypto theft. Attackers create fake websites (metamask-login.com instead of metamask.io), fake emails appearing to be from exchanges, or fake mobile apps. When you enter credentials or seed phrases on these fake sites, attackers capture them instantly.
        </p>
        <p>
          Always verify URLs before entering sensitive information. The legitimate MetaMask domain is metamask.io, not metamask-login.com or any variant. Bookmark official websites and access them through bookmarks, not search results or links. Type URLs manually when setting up new accounts.
        </p>
        <p>
          Be suspicious of unsolicited messages. Legitimate exchanges, wallet companies, and projects will never email asking you to verify your password, confirm your seed phrase, or click links to update your account. If you receive such an email, it's phishing. Do not click any links—go directly to the official website by typing the URL.
        </p>
        <p>
          Verify domain ownership for critical actions. If visiting a website for the first time, check that HTTPS is enabled (lock icon in the browser), verify the domain carefully, and consider using a separate browser or device to reduce the risk of credential leakage to malware.
        </p>

        <div className="bg-yellow-900 border border-yellow-700 rounded-lg p-6 my-6">
          <h3 className="text-lg font-semibold text-yellow-100 mb-3">Phishing Red Flags</h3>
          <ul className="text-yellow-100 space-y-2">
            <li>Unsolicited emails asking to verify credentials or seed phrases</li>
            <li>Domains similar to official sites but with slight variations</li>
            <li>Missing HTTPS or broken security certificates</li>
            <li>Urgent language ("act now", "verify immediately")</li>
            <li>Links in emails—always go directly to official website</li>
            <li>Requests for password or seed phrase via any channel</li>
          </ul>
        </div>
      </section>

      <section id="common-scams">
        <h2>Common Scams & How to Avoid Them</h2>
        <p>
          Rug pulls occur when developers create a token, attract investors, then exit with all the money. The risk is highest with newly launched tokens. If a token gains price suddenly, the developers often sell their holdings (the rug pull), price crashes, and holders lose money. Defense: never invest in tokens you don't understand, be wary of tokens with limited transparency, and research developer history.
        </p>
        <p>
          Pump-and-dump schemes involve coordinated buying to inflate a token's price, then selling to dump value on uninformed buyers. These schemes are illegal in traditional markets but common in crypto. Defense: ignore "get rich quick" claims, be skeptical of influencers hyping tokens, and never invest based on social media hype.
        </p>
        <p>
          Romance scams target lonely people with fake crypto investment opportunities. A scammer builds a relationship, gains trust, then convinces the victim to "invest" in a promising project. The "investment" is stolen, and contact is severed. Defense: be skeptical of strangers offering investment advice, never share financial information with people you've only met online, and verify investment claims independently.
        </p>
        <p>
          Impersonation scams involve fake accounts impersonating celebrities, billionaires, or project teams. They offer to "double your crypto" or promote token projects. Defense: never send crypto to strangers, verify accounts directly on official sites, and remember that legitimate projects will never offer guaranteed returns.
        </p>
        <p>
          Dust attacks send small amounts of crypto to your wallet, then track your spending to deanonymize you. The risk is low for Bitcoin/Ethereum holders but higher for privacy-focused coins. Defense: be aware that all blockchain transactions are public, verify all address before sending crypto, and use privacy tools if concerned about anonymity.
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-700">
                <th className="border border-gray-600 px-4 py-2 text-left">Scam Type</th>
                <th className="border border-gray-600 px-4 py-2 text-left">How It Works</th>
                <th className="border border-gray-600 px-4 py-2 text-left">Defense</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-800 hover:bg-gray-750">
                <td className="border border-gray-600 px-4 py-2">Rug Pull</td>
                <td className="border border-gray-600 px-4 py-2">Devs exit with investor money</td>
                <td className="border border-gray-600 px-4 py-2">Research team, avoid hype tokens</td>
              </tr>
              <tr className="bg-gray-800 hover:bg-gray-750">
                <td className="border border-gray-600 px-4 py-2">Pump & Dump</td>
                <td className="border border-gray-600 px-4 py-2">Coordinated inflate then sell</td>
                <td className="border border-gray-600 px-4 py-2">Ignore hype, verify claims</td>
              </tr>
              <tr className="bg-gray-800 hover:bg-gray-750">
                <td className="border border-gray-600 px-4 py-2">Romance Scam</td>
                <td className="border border-gray-600 px-4 py-2">Build trust then steal "investment"</td>
                <td className="border border-gray-600 px-4 py-2">Verify online identities</td>
              </tr>
              <tr className="bg-gray-800 hover:bg-gray-750">
                <td className="border border-gray-600 px-4 py-2">Impersonation</td>
                <td className="border border-gray-600 px-4 py-2">Fake account hyping tokens</td>
                <td className="border border-gray-600 px-4 py-2">Verify official accounts directly</td>
              </tr>
              <tr className="bg-gray-800 hover:bg-gray-750">
                <td className="border border-gray-600 px-4 py-2">Phishing</td>
                <td className="border border-gray-600 px-4 py-2">Fake website stealing credentials</td>
                <td className="border border-gray-600 px-4 py-2">Verify URLs, never click email links</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-8 p-6 bg-gray-800 rounded-lg border border-gray-700">
        <h2>Security Checklist</h2>
        <p className="mb-4">Use this checklist to audit your current security posture:</p>
        <ul className="space-y-2 text-gray-100">
          <li className="flex items-start">
            <span className="mr-3">[ ]</span>
            <span>All crypto holdings stored in self-custody (hardware wallet or hot wallet with strong security)</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3">[ ]</span>
            <span>Seed phrase written on paper and stored in secure physical location</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3">[ ]</span>
            <span>Hardware wallet set up and tested (small crypto sent and recovered)</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3">[ ]</span>
            <span>2FA enabled on all exchange and custody accounts</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3">[ ]</span>
            <span>Unique, strong password for each account (password manager used)</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3">[ ]</span>
            <span>I never share my seed phrase with anyone for any reason</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3">[ ]</span>
            <span>I verify URLs before entering credentials</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3">[ ]</span>
            <span>I'm skeptical of unsolicited investment opportunities</span>
          </li>
        </ul>
      </section>

      <section className="mt-8 p-6 bg-gray-800 rounded-lg border border-gray-700">
        <h2>Conclusion</h2>
        <p>
          Cryptocurrency security requires vigilance but is absolutely achievable. The fundamental principles are simple: control your private keys or use custodial solutions you trust, protect your seed phrase as your most valuable secret, enable 2FA on all important accounts, and be skeptical of unsolicited offers and opportunities. Master these basics and you've eliminated the vast majority of crypto security risk.
        </p>
        <p>
          Remember: in crypto, there is no customer service, chargebacks, or account recovery. Once your crypto is gone, it's gone. Take security seriously, and you'll avoid the fate of thousands of investors who lost crypto to preventable attacks.
        </p>
      </section>
    </LearnPageLayout>
  );
}
