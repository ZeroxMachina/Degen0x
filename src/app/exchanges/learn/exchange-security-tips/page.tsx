import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Secure Your Crypto Exchange Account (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Essential security tips for crypto exchange accounts. Learn about 2FA, phishing protection, withdrawal whitelisting, and best practices to keep your funds safe.",
};

export default function ExchangeSecurityTipsPage() {
  return (
    <LearnPageLayout
      title="How to Secure Your Crypto Exchange Account"
      categoryName="Crypto Exchanges"
      categorySlug="exchanges"
      readTime="9 min"
      intro="Your crypto exchange account is a prime target for hackers and scammers. Unlike a traditional bank, cryptocurrency transactions are irreversible -- if someone gains access to your account and withdraws your funds, there is no bank to reverse the transaction. Securing your exchange account is not optional; it is the most important step you can take as a crypto holder. This guide covers every security measure available and explains how to implement them properly."
      toc={[
        { id: "2fa", title: "2fa", level: 2 },
        { id: "two-factor-authentication-2fa", title: "Two-Factor Authentication (2FA)", level: 2 },
        { id: "passwords", title: "passwords", level: 2 },
        { id: "password-security", title: "Password Security", level: 2 },
        { id: "phishing", title: "phishing", level: 2 },
        { id: "recognizing-and-avoiding-phishing", title: "Recognizing and Avoiding Phishing", level: 2 },
        { id: "withdrawal-security", title: "withdrawal-security", level: 2 },
        { id: "withdrawal-security-features", title: "Withdrawal Security Features", level: 2 },
        { id: "device-security", title: "device-security", level: 2 },
        { id: "device-and-network-security", title: "Device and Network Security", level: 2 },
        { id: "self-custody", title: "self-custody", level: 2 },
        { id: "when-to-move-funds-off-the-exchange", title: "When to Move Funds Off the Exchange", level: 2 }
      ]}
      faqs={[
        {
          question: "Is SMS two-factor authentication secure?",
          answer:
            "SMS-based 2FA is significantly better than no 2FA at all, but it is vulnerable to SIM-swapping attacks where criminals convince your phone carrier to transfer your number to their device. Authenticator apps (Google Authenticator, Authy) or hardware security keys (YubiKey) are much more secure alternatives.",
        },
        {
          question: "What should I do if I think my account has been compromised?",
          answer:
            "Immediately change your password, disable and re-enable 2FA with a new code, check for any unauthorized transactions or changed settings, revoke all API keys, contact the exchange's support team, and review your email account for unauthorized access. Time is critical -- act immediately if you suspect a breach.",
        },
        {
          question: "Are my funds insured on a crypto exchange?",
          answer:
            "Some exchanges offer limited insurance. Coinbase insures USD balances up to $250,000 through FDIC. Crypto assets may have separate insurance through the exchange's own policies. However, coverage varies widely and may not cover all scenarios. Never assume your funds are fully insured.",
        },
      ]}
      relatedArticles={[
        {
          title: "KYC in Crypto: What It Is and Why Exchanges Require It",
          href: "/exchanges/learn/kyc-explained",
          category: "Exchanges",
        },
        {
          title: "How to Choose a Crypto Exchange",
          href: "/exchanges/learn/how-to-choose-exchange",
          category: "Exchanges",
        },
        {
          title: "How to Buy Cryptocurrency: A Step-by-Step Guide",
          href: "/exchanges/learn/how-to-buy-crypto",
          category: "Exchanges",
        },
      ]}
    >
      <h2 id="2fa">Two-Factor Authentication (2FA)</h2>
      <p>
        Two-factor authentication adds a second layer of security beyond your password. Even if someone obtains
        your password, they cannot access your account without the second factor. Enabling 2FA is the single most
        impactful security measure you can take, and it should be the first thing you set up on any new exchange
        account.
      </p>
      <p>
        The recommended 2FA methods, in order of security, are: hardware security keys (YubiKey, Titan Key),
        authenticator apps (Google Authenticator, Authy, Microsoft Authenticator), and SMS codes. Hardware keys
        are virtually impossible to compromise remotely. Authenticator apps generate time-based codes that change
        every 30 seconds and are tied to your specific device. SMS codes are the weakest option due to
        SIM-swapping vulnerabilities.
      </p>
      <p>
        When setting up app-based 2FA, you will receive a backup code or seed. Store this securely -- it is
        your recovery method if you lose access to your authenticator app. Write it down on paper and store it in
        a safe location. Do not store it digitally on the same device as your authenticator, and do not screenshot
        it.
      </p>

      <h2 id="passwords">Password Security</h2>
      <p>
        Use a unique, strong password for your exchange account that you do not use anywhere else. A strong
        password should be at least 16 characters long and include a mix of uppercase and lowercase letters,
        numbers, and special characters. Better yet, use a random passphrase of four or more unrelated words.
      </p>
      <p>
        A password manager (like 1Password, Bitwarden, or KeePass) is essential for maintaining unique, complex
        passwords across all your accounts. These tools generate, store, and auto-fill passwords securely. The
        only password you need to memorize is your master password for the password manager itself.
      </p>
      <p>
        Your email account deserves the same level of protection as your exchange account because it is typically
        the recovery method for resetting passwords. Secure your email with a strong, unique password and 2FA.
        If an attacker compromises your email, they can potentially reset passwords on all your exchange accounts.
      </p>

      <h2 id="phishing">Recognizing and Avoiding Phishing</h2>
      <p>
        Phishing is the most common attack vector in crypto. Attackers create convincing replicas of exchange
        websites and send emails or messages that trick you into entering your credentials on the fake site. Once
        they have your username and password, they drain your account.
      </p>
      <p>
        Always access your exchange by typing the URL directly into your browser or using a bookmarked link. Never
        click on links in emails, text messages, or social media posts that claim to be from an exchange. Check the
        URL carefully -- phishing sites often use subtle variations like &quot;coinbbase.com&quot; or
        &quot;binanace.com&quot; that are easy to miss at a glance.
      </p>
      <p>
        Many exchanges offer anti-phishing codes -- a custom word or phrase that appears in all legitimate emails
        from the exchange. If an email claims to be from the exchange but does not contain your anti-phishing code,
        it is fake. Set up this feature immediately if your exchange supports it. Binance, KuCoin, and several
        other major platforms offer this option.
      </p>

      <h2 id="withdrawal-security">Withdrawal Security Features</h2>
      <p>
        Address whitelisting is a powerful security feature that restricts withdrawals to a pre-approved list of
        wallet addresses. When enabled, any withdrawal to a new address requires a waiting period (typically 24-48
        hours) before it is allowed. This means even if an attacker gains access to your account, they cannot
        immediately withdraw funds to their own address.
      </p>
      <p>
        Many exchanges also offer a withdrawal lock that freezes all withdrawals for 24-72 hours when certain
        account changes are detected, such as a new device login, password change, or 2FA modification. This
        cooling period gives you time to detect and respond to unauthorized access before funds can be moved.
      </p>
      <p>
        Some exchanges support multi-signature withdrawal approval, particularly for institutional accounts. This
        requires multiple authorized individuals to approve a withdrawal, adding a collaborative security layer
        that prevents any single compromised account from draining funds.
      </p>

      <h2 id="device-security">Device and Network Security</h2>
      <p>
        The security of your exchange account is only as strong as the device you access it from. Keep your
        operating system, browser, and apps updated to patch security vulnerabilities. Use reputable antivirus
        software and avoid installing unnecessary browser extensions, as malicious extensions can intercept your
        credentials or modify transaction data.
      </p>
      <p>
        Avoid accessing your exchange account on public Wi-Fi networks. Public networks can be monitored by
        attackers using man-in-the-middle techniques. If you must use public Wi-Fi, use a reputable VPN to
        encrypt your traffic. However, a VPN is not a substitute for other security measures -- it only secures
        your network connection.
      </p>
      <p>
        Consider using a dedicated device (or at minimum a dedicated browser profile) for your crypto activities.
        This isolates your exchange sessions from potential malware or compromised websites you might encounter
        during general browsing. A dedicated device might seem excessive, but for significant holdings, it is a
        worthwhile precaution.
      </p>

      <h2 id="self-custody">When to Move Funds Off the Exchange</h2>
      <p>
        While exchanges have improved their security dramatically, the principle of &quot;not your keys, not your
        coins&quot; remains relevant. If you are holding cryptocurrency as a long-term investment and do not need
        to trade it frequently, transferring it to a personal wallet removes the exchange as a potential point of
        failure.
      </p>
      <p>
        Hardware wallets (Ledger, Trezor) provide the highest level of security for long-term storage. They keep
        your private keys offline and require physical confirmation for every transaction. For amounts that
        represent a significant portion of your net worth, a hardware wallet is strongly recommended.
      </p>
      <p>
        A balanced approach is to keep only what you need for active trading on the exchange and move the rest to
        self-custody. This limits your exposure in case of an exchange hack, bankruptcy, or regulatory seizure,
        while still allowing you to trade actively with a portion of your holdings. The exact split depends on your
        trading frequency and risk tolerance.
      </p>
    </LearnPageLayout>
  );
}
