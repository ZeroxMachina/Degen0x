import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Card Security Tips (${CURRENT_YEAR}) | degen0x`,
  description: "Learn how to protect your crypto card from fraud, scams, and unauthorized transactions. Essential security practices for crypto debit and credit card holders.",
};

export default function CryptoCardSecurityPage() {
  return (
    <LearnPageLayout
      title="Crypto Card Security Tips"
      categoryName="Crypto Cards"
      categorySlug="crypto-cards"
      readTime="8 min"
      intro="Crypto card security requires attention to both traditional card fraud prevention and crypto-specific risks. Unlike traditional bank cards where unauthorized charges can often be reversed, crypto transactions are irreversible once confirmed on the blockchain. This guide covers essential security practices to protect your crypto card, your linked exchange account, and the funds backing your card."
      toc={[
        { id: "account-security", title: "account-security", level: 2 },
        { id: "exchange-account-security", title: "Exchange Account Security", level: 2 },
        { id: "card-protection", title: "card-protection", level: 2 },
        { id: "physical-card-protection", title: "Physical Card Protection", level: 2 },
        { id: "online-safety", title: "online-safety", level: 2 },
        { id: "online-transaction-safety", title: "Online Transaction Safety", level: 2 },
        { id: "monitoring", title: "monitoring", level: 2 },
        { id: "transaction-monitoring", title: "Transaction Monitoring", level: 2 },
        { id: "incident-response", title: "incident-response", level: 2 },
        { id: "what-to-do-if-compromised", title: "What to Do If Compromised", level: 2 }
      ]}
      faqs={[
        { question: "Can I get a refund if my crypto card is used fraudulently?", answer: "Most crypto cards carry Visa or Mastercard Zero Liability protection, which covers unauthorized transactions similar to traditional cards. Report suspicious activity immediately to your card provider. The chargeback process works the same as for any Visa or Mastercard. However, if someone gains access to your exchange account directly, recovery may be more difficult." },
        { question: "Should I keep large amounts on my crypto card?", answer: "No, keep only what you plan to spend in the near term linked to your card. Store the majority of your crypto in a separate wallet or account that is not connected to your card. This limits exposure if the card or associated account is compromised." },
        { question: "Is it safe to use a crypto card at ATMs?", answer: "Use the same precautions as with any debit card at ATMs. Check for skimming devices, shield your PIN entry, and use ATMs in well-lit and secure locations. Avoid standalone ATMs in isolated areas. Enable transaction notifications to immediately detect unauthorized withdrawals." },
      ]}
      relatedArticles={[
        { title: "Crypto Card Fees Compared", href: "/crypto-cards/learn/crypto-card-fees-compared", category: "Crypto Cards" },
        { title: "Prepaid vs Debit Crypto Cards", href: "/crypto-cards/learn/prepaid-vs-debit-crypto", category: "Crypto Cards" },
        { title: "Wallet Security Best Practices", href: "/wallets/learn/wallet-security-best-practices", category: "Wallets" },
      ]}
    >
      <h2 id="account-security">Exchange Account Security</h2>
      <p>Your crypto card is only as secure as the exchange or platform account behind it. Enable two-factor authentication using an authenticator app rather than SMS, which is vulnerable to SIM-swap attacks. Use a unique, strong password for your exchange account that is not reused anywhere else. Enable withdrawal whitelist addresses where available to prevent unauthorized transfers. Set up anti-phishing codes offered by platforms like Binance and Crypto.com that appear in legitimate emails, helping you identify phishing attempts. Regularly review authorized sessions and revoke any you do not recognize.</p>

      <h2 id="card-protection">Physical Card Protection</h2>
      <p>Treat your crypto card with the same care as any valuable financial card. Never share your card number, expiration date, or CVV with anyone. Do not post photos of your card on social media. When making in-person payments, do not let the card leave your sight. Use contactless payments when possible to avoid inserting your card into potentially compromised terminals. If your card provider offers virtual card numbers for online purchases, use them to protect your physical card details. Store the physical card securely when not in use.</p>

      <h2 id="online-safety">Online Transaction Safety</h2>
      <p>For online purchases, only use your crypto card on trusted and verified websites with HTTPS encryption. Be cautious of deals that seem too good to be true, as they may be phishing sites designed to capture card details. Consider using the virtual card number feature if your provider offers one, generating a temporary card number for each online transaction. Avoid saving your card details on websites unless absolutely necessary. Use a dedicated email address for your crypto card account to reduce phishing exposure. Review your card's online transaction settings and disable features you do not use.</p>

      <h2 id="monitoring">Transaction Monitoring</h2>
      <p>Enable real-time push notifications for every transaction on your crypto card. Review your transaction history regularly through the card's mobile app. Set up spending alerts for transactions above a certain amount. If your card provider offers spending limits, set them to match your typical usage patterns so any unusual large transaction triggers an alert. Monitor your linked exchange account balance alongside your card transactions to detect any discrepancies. Some cards allow you to freeze the card instantly through the app when not in use, which prevents any unauthorized physical or online transactions.</p>

      <h2 id="incident-response">What to Do If Compromised</h2>
      <p>If you suspect your card has been compromised, freeze it immediately through the mobile app. Contact your card provider's support team to report the issue and initiate a fraud investigation. Change your exchange account password and review all recent account activity. If your exchange account may be compromised, move funds to a secure wallet immediately. Document all unauthorized transactions with dates, amounts, and merchant names for the dispute process. File a police report if the fraud is significant. Most Visa and Mastercard crypto cards offer the same fraud protection and chargeback rights as traditional cards, so assert those rights with your provider.</p>
    </LearnPageLayout>
  );
}
