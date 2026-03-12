import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Two-Factor Authentication Guide for Crypto (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Complete guide to two-factor authentication (2FA) for cryptocurrency accounts including SMS, authenticator apps, hardware keys, and best practices.",
  keywords: ["2FA crypto", "two-factor authentication", "authenticator app", "hardware security key", "YubiKey crypto", "Google Authenticator"],
};

export default function TwoFactorAuthenticationGuidePage() {
  return (
    <LearnPageLayout title="Two-Factor Authentication Guide" categoryName="Crypto Education" categorySlug="learn" readTime="7 min" intro="Two-factor authentication (2FA) adds a critical second layer of security beyond your password. For cryptocurrency accounts where a breach can result in irreversible financial loss, strong 2FA is not optional — it is essential. This guide covers the different 2FA methods, their relative security levels, and best practices for protecting your crypto accounts."
      toc={[
        { id: "what-is-2fa", title: "what-is-2fa", level: 2 },
        { id: "what-is-2fa", title: "What Is 2FA?", level: 2 },
        { id: "sms-2fa", title: "sms-2fa", level: 2 },
        { id: "sms-based-2fa", title: "SMS-Based 2FA", level: 2 },
        { id: "authenticator-apps", title: "authenticator-apps", level: 2 },
        { id: "authenticator-apps", title: "Authenticator Apps", level: 2 },
        { id: "hardware-keys", title: "hardware-keys", level: 2 },
        { id: "hardware-security-keys", title: "Hardware Security Keys", level: 2 },
        { id: "best-practices", title: "best-practices", level: 2 },
        { id: "2fa-best-practices", title: "2FA Best Practices", level: 2 }
      ]}
      faqs={[
        { question: "What is the best 2FA method for crypto?", answer: "Hardware security keys (FIDO2/WebAuthn) provide the strongest protection as they are phishing-resistant and cannot be remotely compromised. Authenticator apps are the next best option. SMS-based 2FA is the weakest due to SIM swap vulnerability but is still better than no 2FA." },
        { question: "What happens if I lose my 2FA device?", answer: "When setting up 2FA, most services provide backup codes — store these securely alongside your seed phrases. For authenticator apps, some (like Authy) offer encrypted cloud backup. For hardware keys, register a second backup key. Without backup access, you may need to go through identity verification processes to regain account access." },
        { question: "Should I use the same authenticator for everything?", answer: "Using one authenticator app for all accounts is acceptable as long as you properly backup the recovery seeds. Some security-conscious users separate crypto exchange 2FA onto a dedicated device. The most important thing is having 2FA enabled at all, regardless of consolidation preferences." },
      ]}
      relatedArticles={[
        { title: "SIM Swap Protection", href: "/learn/sim-swap-protection", category: "Learn" },
        { title: "Self-Custody Guide", href: "/learn/self-custody-guide", category: "Learn" },
        { title: "Operational Security for Crypto", href: "/learn/operational-security-crypto", category: "Learn" },
        { title: "How to Use a Hardware Wallet", href: "/learn/how-to-use-hardware-wallet", category: "Learn" },
      ]}
    >
      <section id="what-is-2fa"><h2>What Is 2FA?</h2><p>Two-factor authentication requires two different types of verification to access an account: something you know (password) and something you have (phone, hardware key, or authenticator code). Even if an attacker obtains your password through data breaches, phishing, or credential stuffing, they cannot access your account without the second factor. For cryptocurrency accounts where unauthorized access can result in permanent fund loss, 2FA is a critical security layer.</p><p>The three main categories of 2FA differ significantly in security strength. SMS-based 2FA sends codes to your phone number, authenticator apps generate time-based codes on your device, and hardware security keys use cryptographic challenge-response protocols. Each method has different vulnerabilities and convenience trade-offs that are important to understand when securing valuable accounts.</p></section>
      <section id="sms-2fa"><h2>SMS-Based 2FA</h2><p>SMS 2FA sends a verification code to your phone number via text message. While convenient, it is the weakest form of 2FA due to its vulnerability to SIM swap attacks — where an attacker convinces your carrier to transfer your number to their device. SMS messages can also be intercepted through SS7 protocol vulnerabilities in the telephone network, and social engineering of carrier employees.</p><p>Despite these weaknesses, SMS 2FA is still significantly better than no second factor. If an exchange only offers SMS 2FA, use it while advocating for better options. However, for high-value accounts, SMS should be replaced with authenticator apps or hardware keys as soon as those options become available. Never rely solely on SMS 2FA for accounts holding significant cryptocurrency value.</p></section>
      <section id="authenticator-apps"><h2>Authenticator Apps</h2><p>Authenticator apps (Google Authenticator, Authy, Microsoft Authenticator) generate time-based one-time passwords (TOTP) directly on your device. Because codes are generated locally using a shared secret, they are immune to SIM swap attacks and telephone network interception. The codes change every 30 seconds and cannot be reused, providing strong protection against many common attack vectors.</p><p>When setting up an authenticator app, you receive a secret key or QR code. Back up this secret key securely — if your phone is lost or damaged, you will need it to restore your 2FA codes. Authy offers encrypted cloud backup, while Google Authenticator requires manual backup of the secret keys. Store backup codes provided by services in a secure physical location alongside your other important security credentials.</p></section>
      <section id="hardware-keys"><h2>Hardware Security Keys</h2><p>Hardware security keys like YubiKey, Google Titan, and Thetis use the FIDO2/WebAuthn protocol to provide phishing-resistant 2FA. The key cryptographically verifies the website you are logging into, meaning it will not authenticate against a phishing site even if the site looks identical to the real one. This phishing resistance makes hardware keys the strongest available 2FA method for web accounts.</p><p>Most major cryptocurrency exchanges support hardware keys. Register at least two keys (a primary and backup) and store the backup in a secure separate location. Hardware keys are small, durable, and do not require batteries or charging. They work by physical touch or NFC tap, making them fast and convenient despite their high security level. For anyone with significant cryptocurrency holdings, hardware security keys represent the gold standard in account protection.</p></section>
      <section id="best-practices"><h2>2FA Best Practices</h2><p>Enable the strongest available 2FA on every crypto-related account: exchanges, email accounts used for crypto, and any service connected to your financial activity. Prioritize hardware keys where supported, followed by authenticator apps. Maintain backup codes or backup devices for all 2FA setups. Test your backup recovery process to confirm you can regain access if your primary 2FA device is lost.</p><p>Never share 2FA codes with anyone — legitimate services will never ask for them. Be suspicious of any request for a 2FA code outside of the normal login process. Keep your authenticator app and phone operating system updated for security patches. If switching phones, transfer authenticator accounts before wiping the old device. Consider using a dedicated device for 2FA if your threat model warrants additional isolation.</p></section>
    </LearnPageLayout>
  );
}
