import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Exchange Security Features Explained (${CURRENT_YEAR}) | degen0x`,
  description: "Learn about crypto exchange security features. 2FA, cold storage, withdrawal whitelists, insurance funds, and how to protect your assets on exchanges.",
};

export default function ExchangeSecurityFeatures() {
  return (
    <LearnPageLayout
      title="Exchange Security Features Explained"
      categoryName="Exchanges"
      categorySlug="exchanges"
      readTime="9 min read"
      intro="Security is the most critical factor when choosing a crypto exchange. Billions of dollars have been lost to exchange hacks throughout crypto history. Understanding the security features available and how to use them properly can mean the difference between protecting your assets and losing everything. This guide covers every major security feature modern exchanges offer."
      toc={[
        { id: "two-factor", title: "two-factor", level: 2 },
        { id: "two-factor-authentication", title: "Two-Factor Authentication", level: 2 },
        { id: "cold-storage", title: "cold-storage", level: 2 },
        { id: "cold-storage-and-hot-wallets", title: "Cold Storage and Hot Wallets", level: 2 },
        { id: "withdrawal-protection", title: "withdrawal-protection", level: 2 },
        { id: "withdrawal-protection", title: "Withdrawal Protection", level: 2 },
        { id: "insurance-funds", title: "insurance-funds", level: 2 },
        { id: "insurance-and-reserve-funds", title: "Insurance and Reserve Funds", level: 2 },
        { id: "proof-of-reserves", title: "proof-of-reserves", level: 2 },
        { id: "proof-of-reserves", title: "Proof of Reserves", level: 2 },
        { id: "advanced-features", title: "advanced-features", level: 2 },
        { id: "advanced-security-features", title: "Advanced Security Features", level: 2 },
        { id: "best-practices", title: "best-practices", level: 2 },
        { id: "security-best-practices", title: "Security Best Practices", level: 2 }
      ]}
      faqs={[
        { question: "Is SMS 2FA safe?", answer: "SMS 2FA is better than nothing but vulnerable to SIM-swap attacks. Hardware security keys (YubiKey) or authenticator apps (Google Authenticator, Authy) are significantly more secure. Use hardware keys if your exchange supports them." },
        { question: "How much crypto do exchanges keep in hot wallets?", answer: "Reputable exchanges typically keep 2-5% of total assets in hot wallets for liquidity, with 95-98% in cold storage. Some exchanges publish these ratios in their proof of reserves reports." },
        { question: "Does exchange insurance cover hacks?", answer: "It depends. Some exchanges like Coinbase insure hot wallet assets. Binance's SAFU fund covers certain losses. However, insurance typically does not cover losses from individual account compromises due to weak personal security." },
        { question: "Should I keep crypto on an exchange?", answer: "Only keep what you actively trade on exchanges. Long-term holdings should be stored in hardware wallets you control. The crypto saying 'not your keys, not your coins' exists because exchange risks are real." },
      ]}
      relatedArticles={[
        { title: "How to Choose a Crypto Exchange", href: "/exchanges/learn/how-to-choose-exchange", category: "Exchanges" },
        { title: "Exchange Insurance", href: "/exchanges/learn/exchange-insurance", category: "Exchanges" },
        { title: "Crypto Withdrawal Guide", href: "/exchanges/learn/exchange-withdrawal-guide", category: "Exchanges" },
      ]}
    >
      <section id="two-factor">
        <h2>Two-Factor Authentication</h2>
        <p>Two-factor authentication (2FA) adds a second verification layer beyond your password. When enabled, logging in or performing sensitive actions requires both your password and a time-based code from a separate device. This prevents unauthorized access even if your password is compromised.</p>
        <p>Hardware security keys like YubiKey provide the strongest 2FA protection. They use cryptographic protocols that are immune to phishing attacks. Authenticator apps like Google Authenticator or Authy generate time-based codes and are the most common 2FA method on exchanges.</p>
        <p>SMS-based 2FA is the weakest option due to SIM-swap vulnerability, where attackers convince your carrier to transfer your phone number. Despite this, any 2FA is dramatically better than no 2FA. Enable the strongest 2FA method your exchange supports immediately.</p>
      </section>

      <section id="cold-storage">
        <h2>Cold Storage and Hot Wallets</h2>
        <p>Exchanges maintain two types of wallets. Hot wallets are connected to the internet and process active withdrawals and deposits. Cold wallets are air-gapped systems stored offline, protected from network-based attacks. The vast majority of funds should reside in cold storage.</p>
        <p>Leading exchanges like Coinbase, Kraken, and Binance keep 95% or more of customer funds in cold storage. Multi-signature cold wallets require multiple authorized parties to approve transactions, preventing any single person from accessing funds. Geographic distribution of key holders adds another security layer.</p>
        <p>When evaluating an exchange's security, ask what percentage of funds are in cold storage and whether they use multi-signature wallets. Exchanges that are transparent about their custody practices generally take security more seriously than those that are not.</p>
      </section>

      <section id="withdrawal-protection">
        <h2>Withdrawal Protection</h2>
        <p>Withdrawal whitelists allow you to pre-approve specific wallet addresses. Once enabled, withdrawals can only go to addresses on your whitelist. Adding new addresses typically requires a waiting period of 24-72 hours, giving you time to react if someone gains account access.</p>
        <p>Withdrawal delays and email confirmations provide additional protection. Many exchanges require email verification for each withdrawal and impose cooling-off periods after security settings changes. These measures slow down potential attackers even if they bypass your 2FA.</p>
        <p>Anti-phishing codes display a custom phrase in official exchange emails, helping you identify genuine communications from fakes. Address book features let you save and label frequently used withdrawal addresses, reducing the risk of sending to wrong addresses.</p>
      </section>

      <section id="insurance-funds">
        <h2>Insurance and Reserve Funds</h2>
        <p>Some exchanges maintain insurance funds to cover losses from security breaches. Binance's SAFU (Secure Asset Fund for Users) allocates 10% of trading fees to an emergency fund. This fund has been used to cover losses from past security incidents.</p>
        <p>Coinbase insures its hot wallet holdings and provides FDIC insurance on USD balances up to $250,000. Gemini, as a New York trust company, carries insurance on custodial assets. The level of insurance coverage varies significantly between exchanges.</p>
        <p>Most insurance does not cover losses from individual account compromises where the user's own security was weak. If your account is hacked because you reused passwords or lacked 2FA, insurance typically will not reimburse you. Insurance primarily covers exchange-level security failures.</p>
      </section>

      <section id="proof-of-reserves">
        <h2>Proof of Reserves</h2>
        <p>Proof of reserves (PoR) is an auditing practice where exchanges cryptographically demonstrate they hold sufficient assets to cover all customer deposits. After the FTX collapse, PoR became a standard expectation for reputable exchanges.</p>
        <p>Merkle tree-based PoR allows individual users to verify their balance is included in the exchange's total reserves without revealing other users' data. Kraken, Binance, OKX, and Bitget are among exchanges publishing regular proof of reserves reports.</p>
        <p>However, PoR has limitations. It proves assets exist at a specific moment but does not show liabilities or borrowed funds. A comprehensive audit examining both assets and liabilities provides stronger assurance. Look for exchanges that go beyond basic PoR with third-party audit verification.</p>
      </section>

      <section id="advanced-features">
        <h2>Advanced Security Features</h2>
        <p>Device management lets you review and remove authorized devices accessing your account. Session management shows active login sessions across devices. Regularly reviewing these lists helps detect unauthorized access early.</p>
        <p>IP whitelisting restricts account access to specific IP addresses, useful for users with static IPs or VPN configurations. Login notifications alert you to new sign-ins from unfamiliar devices or locations. Some exchanges offer biometric authentication on mobile apps.</p>
        <p>API key permissions allow granular control for automated trading. You can create keys with read-only access, trading-only access, or withdrawal permissions separately. Always restrict API keys to the minimum permissions needed and bind them to specific IP addresses.</p>
      </section>

      <section id="best-practices">
        <h2>Security Best Practices</h2>
        <p>Use a unique, strong password for each exchange account. Password managers like Bitwarden or 1Password generate and store secure passwords. Never reuse passwords across any services, especially financial ones.</p>
        <p>Enable the strongest available 2FA on every exchange account. Set up withdrawal whitelists and anti-phishing codes where available. Review connected devices and active sessions regularly. Enable all available login notifications.</p>
        <p>Keep only actively traded amounts on exchanges. Transfer long-term holdings to hardware wallets like Ledger or Trezor that you control. Bookmark exchange websites directly and never click links in emails or messages to access your accounts. Verify URLs carefully to avoid phishing sites.</p>
      </section>
    </LearnPageLayout>
  );
}
