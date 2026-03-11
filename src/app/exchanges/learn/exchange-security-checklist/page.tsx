import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Exchange Security Checklist (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Complete security checklist for evaluating crypto exchanges. Check cold storage, 2FA, insurance, audits, and more before depositing your funds.",
  keywords: ["crypto exchange security", "exchange security checklist", "is exchange safe", "crypto security guide"],
};

export default function ExchangeSecurityChecklistPage() {
  return (
    <LearnPageLayout
      title="Crypto Exchange Security Checklist"
      categoryName="Crypto Exchanges"
      categorySlug="exchanges"
      readTime="9 min"
      intro="Before depositing money on any crypto exchange, evaluate its security thoroughly. This checklist covers every critical security factor, from cold storage practices to insurance coverage, helping you assess whether an exchange deserves your trust."
      toc={[
        { id: "cold-storage", title: "Cold Storage Practices", level: 2 },
        { id: "authentication", title: "Authentication and Access Controls", level: 2 },
        { id: "insurance", title: "Insurance Coverage", level: 2 },
        { id: "regulatory", title: "Regulatory Compliance", level: 2 },
        { id: "proof-reserves", title: "Proof of Reserves", level: 2 },
        { id: "track-record", title: "Security Track Record", level: 2 },
        { id: "personal-security", title: "Your Personal Security Steps", level: 2 },
      ]}
      faqs={[
        { question: "What percentage of funds should be in cold storage?", answer: "The industry standard is 90-98% of customer funds in cold storage. Exchanges like Coinbase (98%), Kraken (95%), and Gemini (95%+) meet this standard. Be cautious of exchanges that do not disclose their cold storage percentage." },
        { question: "Is two-factor authentication enough?", answer: "2FA is essential but not sufficient alone. Use an authenticator app (not SMS) for 2FA, enable withdrawal address whitelisting, set up anti-phishing codes, and use a unique strong password for your exchange account." },
        { question: "Should I keep crypto on an exchange?", answer: "For active trading, keeping some crypto on an exchange is practical. For long-term holdings, transfer to a hardware wallet for maximum security. The general rule is to not keep more on an exchange than you are actively trading." },
      ]}
      relatedArticles={[
        { title: "Exchange Hacks History", href: "/exchanges/learn/exchange-hacks-history", category: "Exchanges" },
        { title: "What Is Proof of Reserves", href: "/exchanges/learn/what-is-proof-of-reserves", category: "Exchanges" },
        { title: "Exchange Insurance Funds", href: "/exchanges/learn/exchange-insurance-funds", category: "Exchanges" },
      ]}
    >
      <section id="cold-storage">
        <h2>Cold Storage Practices</h2>
        <p>Cold storage refers to keeping crypto assets in offline wallets that are not connected to the internet, making them immune to online hacking attempts. The best exchanges store 90-98% of customer funds in cold storage, keeping only the minimum necessary in hot wallets for processing withdrawals. Evaluate whether the exchange discloses its cold storage percentage, uses multi-signature wallets requiring multiple approvals for transactions, employs hardware security modules (HSMs) for key management, and distributes cold storage across geographically separated vaults.</p>
      </section>

      <section id="authentication">
        <h2>Authentication and Access Controls</h2>
        <p>Strong authentication prevents unauthorized access to your account. Check that the exchange supports authenticator app-based 2FA (Google Authenticator, Authy), hardware security key support (YubiKey, FIDO2), withdrawal address whitelisting with time delays for new addresses, anti-phishing codes in official emails, IP address whitelisting or suspicious login alerts, and session management with automatic timeout. Avoid exchanges that only offer SMS-based 2FA, as SMS can be compromised through SIM-swapping attacks.</p>
      </section>

      <section id="insurance">
        <h2>Insurance Coverage</h2>
        <p>Insurance adds a layer of protection against potential losses. Look for FDIC insurance on fiat (USD) balances held at US exchanges, crime insurance policies covering losses from hacking, employee theft, or fraudulent transfers, and dedicated insurance funds like Binance's SAFU (Secure Asset Fund for Users). Note that most insurance policies do not cover losses from compromised personal accounts — only losses resulting from the exchange's own security failures.</p>
      </section>

      <section id="regulatory">
        <h2>Regulatory Compliance</h2>
        <p>Regulatory oversight provides structural accountability. Regulated exchanges must maintain minimum capital reserves, submit to regular audits, follow prescribed security standards, and face penalties for negligence. Look for exchanges regulated by recognized financial authorities (SEC, FCA, NYDFS, MAS, SFC). Publicly traded exchanges face additional scrutiny through SEC reporting requirements and shareholder accountability.</p>
      </section>

      <section id="proof-reserves">
        <h2>Proof of Reserves</h2>
        <p>Proof of reserves (PoR) is a cryptographic method for exchanges to demonstrate that they hold sufficient assets to cover all customer deposits. After the FTX collapse revealed that the exchange was misusing customer funds, PoR has become an industry standard. Reputable exchanges now publish regular PoR attestations, often audited by third-party firms. Merkle tree-based PoR allows individual users to verify their own account's inclusion in the proof without compromising privacy. Evaluate whether the exchange publishes PoR and how frequently it updates.</p>
      </section>

      <section id="track-record">
        <h2>Security Track Record</h2>
        <p>Research the exchange's security history. Has it ever been hacked? If so, how did it respond? Exchanges that covered user losses from their own funds (like Binance after its 2019 hack) demonstrate commitment to user protection. Exchanges that operated transparently during the FTX fallout by publishing reserves and maintaining withdrawals showed resilience. A long operating history without major incidents is a positive indicator but does not guarantee future security.</p>
      </section>

      <section id="personal-security">
        <h2>Your Personal Security Steps</h2>
        <p>Exchange security is only half the equation — your personal security practices matter equally. Use a unique, strong password for each exchange account. Enable the strongest available 2FA method (hardware key is preferred, authenticator app is good, SMS is a last resort). Set up withdrawal address whitelisting so funds can only be sent to pre-approved addresses. Enable anti-phishing codes so you can verify legitimate exchange emails. Use a dedicated email address for exchange accounts. Never click links in emails claiming to be from exchanges — always navigate directly to the site. Keep the majority of your long-term holdings in a hardware wallet rather than on any exchange.</p>
      </section>
    </LearnPageLayout>
  );
}
