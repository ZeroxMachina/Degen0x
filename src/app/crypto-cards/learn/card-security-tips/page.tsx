import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Card Security: How to Stay Safe (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Essential security tips for crypto card users. Protect your card, account, and crypto assets from fraud, phishing, and unauthorized access with these best practices.",
};

export default function CardSecurityTipsPage() {
  return (
    <LearnPageLayout
      title="Crypto Card Security: How to Stay Safe"
      categoryName="Crypto Cards"
      categorySlug="crypto-cards"
      readTime="8 min"
      intro="Crypto cards combine the security risks of both traditional payment cards and cryptocurrency accounts. A compromised crypto card can lead to unauthorized spending and potentially expose your broader crypto holdings. This guide covers essential security practices to protect your crypto card, the underlying account, and your digital assets."
      toc={[
        { id: "account-security", title: "Securing Your Card Account", level: 2 },
        { id: "card-usage-safety", title: "Safe Card Usage Practices", level: 2 },
        { id: "phishing-protection", title: "Protecting Against Phishing and Scams", level: 2 },
        { id: "incident-response", title: "What to Do If Your Card Is Compromised", level: 2 },
      ]}
      faqs={[
        {
          question: "What should I do if I lose my crypto card?",
          answer:
            "Immediately freeze or lock the card through the provider's mobile app. Most providers like Crypto.com and Coinbase offer instant card freeze functionality. Then contact customer support to request a replacement. Review your recent transactions for any unauthorized charges and report them immediately.",
        },
        {
          question: "Can someone steal my crypto through my card?",
          answer:
            "Your crypto card typically has separate spending limits from your overall exchange account. A compromised card number can lead to unauthorized purchases up to your card limit, but it should not give an attacker direct access to your crypto exchange balance or wallet. However, if your account credentials are compromised, an attacker could access your entire account.",
        },
        {
          question: "Should I use my crypto card for online purchases?",
          answer:
            "Yes, but with precautions. Use the virtual card number for online purchases when possible, only shop on verified and reputable websites, and monitor your transactions regularly. The virtual card can be regenerated if compromised without affecting your physical card.",
        },
        {
          question: "Is it safe to use crypto cards at ATMs?",
          answer:
            "ATMs carry the risk of card skimming devices. Use ATMs at reputable locations like bank branches, check for loose or unusual card reader attachments before inserting your card, shield your PIN entry, and prefer contactless ATM access if available. Set ATM withdrawal alerts in your card app.",
        },
      ]}
      relatedArticles={[
        {
          title: "How Do Crypto Cards Work?",
          href: "/crypto-cards/learn/how-crypto-cards-work",
          category: "Crypto Cards",
        },
        {
          title: "Crypto Card Fees Explained",
          href: "/crypto-cards/learn/crypto-card-fees-explained",
          category: "Crypto Cards",
        },
        {
          title: "How to Choose the Right Crypto Card",
          href: "/crypto-cards/learn/how-to-choose-crypto-card",
          category: "Crypto Cards",
        },
        {
          title: "Crypto Cards vs Traditional Credit Cards",
          href: "/crypto-cards/learn/crypto-vs-traditional-cards",
          category: "Crypto Cards",
        },
      ]}
    >
      <h2 id="account-security">Securing Your Card Account</h2>
      <p>
        The first line of defense is your account credentials. Use a strong, unique password for your
        crypto card provider account that you do not reuse on any other platform. A password manager
        like Bitwarden or 1Password can generate and store complex passwords securely.
      </p>
      <p>
        Enable two-factor authentication (2FA) using an authenticator app like Google Authenticator
        or Authy. Avoid SMS-based 2FA when possible, as SIM-swapping attacks can intercept text
        message codes. If your provider supports hardware security keys like YubiKey, that is the
        strongest option available.
      </p>
      <p>
        Set up email and push notification alerts for all card transactions. Most crypto card
        providers offer real-time notifications for purchases, ATM withdrawals, and card loads.
        Immediate notification of unauthorized activity allows you to freeze your card within seconds,
        minimizing potential losses.
      </p>
      <p>
        Review your account settings regularly. Check for unfamiliar linked devices, authorized
        sessions, or changes to your withdrawal addresses. Some providers allow you to whitelist
        withdrawal addresses, preventing funds from being sent to unauthorized wallets even if an
        attacker gains account access.
      </p>

      <h2 id="card-usage-safety">Safe Card Usage Practices</h2>
      <p>
        Use your virtual card number for online purchases whenever possible. Most crypto card
        providers issue a virtual card immediately that you can use for online shopping. If the
        virtual card number is compromised, you can regenerate it without waiting for a new physical
        card. Reserve your physical card for in-person transactions.
      </p>
      <p>
        Keep your card spending limits as low as practical. If you typically spend $500 per day,
        set your daily limit at $750 rather than the maximum allowed. This limits potential losses
        from unauthorized use. You can always temporarily increase limits when you need to make a
        larger purchase.
      </p>
      <p>
        Do not store more funds on your card than you plan to spend in the near term. For prepaid
        cards, load small amounts frequently rather than maintaining a large balance. For cards
        connected to exchange accounts, consider keeping the bulk of your crypto in a separate
        wallet and only transferring spending amounts to your exchange account.
      </p>

      <h2 id="phishing-protection">Protecting Against Phishing and Scams</h2>
      <p>
        Phishing attacks targeting crypto card users are increasingly sophisticated. Attackers send
        emails and text messages that appear to come from your card provider, often claiming
        suspicious activity or account verification requirements. These messages direct you to
        convincing fake websites designed to steal your login credentials.
      </p>
      <p>
        Always access your card provider through the official app or by typing the URL directly into
        your browser. Never click links in emails or text messages claiming to be from your crypto
        card provider. Legitimate companies will never ask for your password, 2FA codes, or seed
        phrases via email or chat.
      </p>
      <p>
        Be wary of social media impersonation. Scammers create accounts mimicking official support
        channels on X (Twitter), Telegram, and Discord. Real support teams will never initiate
        contact through social media or ask you to share screen or grant remote access. When you
        need support, always initiate contact through the official app or website.
      </p>

      <h2 id="incident-response">What to Do If Your Card Is Compromised</h2>
      <p>
        If you notice unauthorized transactions, act immediately. First, freeze your card through the
        mobile app. Most providers offer a one-tap freeze that instantly blocks all card transactions.
        Second, change your account password and revoke all active sessions. Third, contact the
        card provider&apos;s support team to report the unauthorized activity and initiate a dispute.
      </p>
      <p>
        Document everything. Screenshot unauthorized transactions, save any phishing emails or
        messages you received, and note the exact time you discovered the issue. This documentation
        supports your dispute claim and helps the provider investigate the incident.
      </p>
      <p>
        After securing your card, review your broader crypto security. If your card provider account
        was compromised, check whether the attacker accessed other linked services. Change passwords
        on your email and any connected accounts. Consider moving crypto assets to a hardware wallet
        until you are confident the breach is contained.
      </p>
      <p>
        For significant losses, file reports with your local law enforcement and relevant regulatory
        bodies. In the US, report to the FTC at identitytheft.gov and file an IC3 complaint with
        the FBI for cybercrime. These reports create an official record and may assist in recovering
        stolen funds.
      </p>
    </LearnPageLayout>
  );
}
