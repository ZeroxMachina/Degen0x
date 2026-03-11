import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Security Checklist: Complete Guide (${CURRENT_YEAR})`,
  description:
    "Complete crypto security checklist for users covering wallet security, seed phrase management, phishing detection, smart contract approval hygiene, emergency procedures if compromised, and best practices to protect your assets.",
};

export default function CryptoSecurityChecklistPage() {
  return (
    <LearnPageLayout
      title="Crypto Security Checklist: Protect Your Assets"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="20 min"
      intro="Crypto security is not a single action — it's a combination of practices, habits, and precautions that work together to keep your funds safe. This comprehensive checklist covers everything you need to know: wallet security, seed phrase management, phishing detection, smart contract approvals, multi-factor authentication, hardware wallet setup, and emergency procedures if your account is compromised. By following this checklist, you can dramatically reduce your risk of losing funds to hacks, scams, or accidental mistakes."
      toc={[
        { id: "wallet-security", title: "Wallet Security Fundamentals", level: 2 },
        { id: "seed-phrase", title: "Seed Phrase Protection", level: 2 },
        { id: "2fa-authentication", title: "Two-Factor Authentication", level: 2 },
        { id: "phishing-prevention", title: "Phishing Detection & Prevention", level: 2 },
        { id: "smart-contract-approvals", title: "Smart Contract Approval Hygiene", level: 2 },
        { id: "hardware-wallet-setup", title: "Hardware Wallet Setup", level: 2 },
        { id: "cold-storage-strategy", title: "Cold Storage Strategy", level: 2 },
        { id: "emergency-procedures", title: "Emergency Procedures if Compromised", level: 2 },
      ]}
      faqs={[
        {
          question: "Do I need a hardware wallet?",
          answer:
            "For large amounts (over $1,000), a hardware wallet is strongly recommended. Hardware wallets are the most secure way to store crypto keys. For small amounts used for active trading, a well-secured hot wallet may be sufficient. The more you hold, the more justified the investment in a hardware wallet becomes.",
        },
        {
          question: "What if I lose my seed phrase?",
          answer:
            "If you lose your seed phrase and can no longer access your wallet, your crypto is effectively lost. There is no password reset button in crypto. This is why writing down your seed phrase and storing it securely is critical from day one. If you lose access, recovery is impossible unless you have a backup stored elsewhere.",
        },
        {
          question: "Can I recover my account if hacked?",
          answer:
            "Recovery depends on the circumstances. If only a hot wallet was compromised, you can move funds to a new wallet. If your seed phrase was stolen, the attacker has full access and you've lost funds. This is why preventing compromise is far easier than recovering from it. Having multiple wallets and not storing seed phrases digitally protects you.",
        },
        {
          question: "How do I check if a website is real?",
          answer:
            "Always verify the domain name carefully. Phishing sites often use similar URLs like opensea-official.com instead of opensea.io. Bookmark official websites and only access them through bookmarks, not links. Enable browser extension security tools like MetaMask's phishing detector. Check the SSL certificate by clicking the lock icon. When in doubt, don't proceed.",
        },
        {
          question: "What are token approvals and why are they dangerous?",
          answer:
            "Token approvals allow smart contracts to transfer your tokens on your behalf. Once approved, a contract can take tokens without your permission. Approving unlimited amounts is risky because if the contract is hacked, attackers can steal unlimited tokens. Always approve only the exact amount needed, and revoke unused approvals. Check what you've approved using approval checker tools.",
        },
      ]}
      relatedArticles={[
        { title: "Crypto Wallets 101", href: "/learn/crypto-wallets-101", category: "Learn Crypto" },
        { title: "Crypto for Beginners", href: "/learn/crypto-for-beginners", category: "Learn Crypto" },
        { title: "How to Spot Crypto Scams", href: "/learn/crypto-scams", category: "Learn Crypto" },
        { title: "Crypto Storage Solutions", href: "/learn/crypto-storage", category: "Learn Crypto" },
        { title: "Smart Contracts Explained", href: "/learn/smart-contracts", category: "Learn Crypto" },
      ]}
    >
      <h2 id="wallet-security">Wallet Security Fundamentals</h2>
      <p>
        The foundation of crypto security is your wallet. A wallet is a piece of software (or hardware) that controls your private keys. Private keys are the passwords to your funds — anyone with your private key can access and move all your crypto. Keep your private key secret at all times.
      </p>
      <p>
        Use only wallets from reputable sources. Download MetaMask, Coinbase Wallet, Trust Wallet, or other well-known wallets from official websites or official app stores (Google Play, Apple App Store). Never download wallets from unverified sources. Check reviews and verify that you have the official version.
      </p>
      <p>
        On your computer, make sure your operating system and browser are fully updated with the latest security patches. Use antivirus software and keep it current. Consider using a separate device just for crypto transactions to isolate your keys from general internet usage. Clean malware off your computer by using reputable antivirus tools.
      </p>
      <p>
        When creating a wallet, always save the seed phrase immediately. Never skip this step. Write it down on paper in a location you can access. Do not store the seed phrase on your computer, in email, in notes apps, or on cloud services. Paper is the safest storage method for seed phrases.
      </p>

      <h2 id="seed-phrase">Seed Phrase Protection</h2>
      <p>
        Your seed phrase (also called recovery phrase or mnemonic) is a list of 12 or 24 words that serve as the master key to your wallet. Anyone with your seed phrase can fully access your funds. This makes seed phrase protection absolutely critical.
      </p>
      <p>
        Write your seed phrase on paper and store it in a secure location. Options include a safe in your home, a safe deposit box at a bank, or a vault service designed for storing sensitive information. Multiple copies in different locations are better than a single copy — if one location is damaged (fire, theft), you have backups.
      </p>
      <p>
        Never store seed phrases digitally — not in password managers, not in encrypted files, not anywhere on a computer or phone. Digital storage creates a vulnerability: if your device is hacked, your seed phrase can be stolen. The additional security of encryption is not worth the risk.
      </p>
      <p>
        Do not share your seed phrase with anyone, including support staff, family members, or friends. Legitimate support will never ask for your seed phrase. If someone asks for it, they are attempting to steal your funds. Similarly, never reveal your seed phrase on video calls, even with people you trust.
      </p>
      <p>
        Test your seed phrase recovery in a safe environment to ensure you wrote it down correctly. Create a new test wallet and import your seed phrase to verify that it works. This confirms that you can recover your wallet if needed. Do not test with funds — test with a small amount or use a testnet first.
      </p>

      <h2 id="2fa-authentication">Two-Factor Authentication</h2>
      <p>
        Two-factor authentication (2FA) adds an extra layer of security by requiring a second form of verification beyond your password. Even if an attacker knows your password, they cannot access your account without the second factor.
      </p>
      <p>
        Enable 2FA on every crypto exchange, wallet service, and DeFi protocol that supports it. Most services offer multiple 2FA methods: SMS (text messages), authenticator apps, or hardware security keys. Use an authenticator app (Google Authenticator, Authy, Microsoft Authenticator) rather than SMS when possible. SMS is vulnerable to SIM swapping attacks where attackers trick your mobile provider into transferring your number.
      </p>
      <p>
        When setting up 2FA, save the backup codes in a secure location (written on paper in a safe, not digitally). These codes allow you to regain access if you lose your authenticator device. Store them separately from your seed phrase to prevent a single point of compromise from giving attackers everything.
      </p>
      <p>
        Use hardware security keys (like Yubikey) for maximum 2FA security, especially for exchanges and services holding large amounts. Hardware keys cannot be phished or remotely hacked — an attacker must physically possess your key. They work with any service supporting FIDO2/U2F standards.
      </p>
      <p>
        Never disable 2FA once you've enabled it, even if it's inconvenient. The small inconvenience of entering a 2FA code each time is far less painful than losing your funds. If you receive emails asking you to disable 2FA, treat this as a phishing attempt.
      </p>

      <h2 id="phishing-prevention">Phishing Detection & Prevention</h2>
      <p>
        Phishing is the most common way people lose crypto. Attackers create fake websites or send fake emails that look identical to the real thing, trying to trick you into entering your password or seed phrase.
      </p>
      <p>
        Always verify URLs before entering sensitive information. Phishing sites often use slightly different domains: opensea-official.com, open-sea.io, or opnsea.io (with a lowercase L that looks like a 1). Check the address bar carefully. Better yet, bookmark official websites and only access them through your bookmarks.
      </p>
      <p>
        Check SSL certificates by clicking the lock icon in your browser. The certificate should show the official company name. If it shows a generic name or a person's name, the website may be fraudulent. Legitimate services always use HTTPS and have valid SSL certificates.
      </p>
      <p>
        Use antiphishing browser extensions like MetaMask's built-in phishing detector or stand-alone tools. These catch many phishing sites automatically. However, don't rely entirely on tools — develop your own habit of verifying website authenticity manually.
      </p>
      <p>
        Be suspicious of emails asking you to confirm your account, reset your password, or verify your identity. Even if the email looks official, never click links in emails. Instead, go directly to the official website by typing the URL in your browser. Official support will never ask for your password or seed phrase in emails or messages.
      </p>

      <h2 id="smart-contract-approvals">Smart Contract Approval Hygiene</h2>
      <p>
        When using DeFi protocols, you must approve token transfers before you can trade them. This means giving a smart contract permission to transfer your tokens. This is necessary but creates a security risk.
      </p>
      <p>
        Always approve the exact amount you plan to use, not unlimited amounts. When a DeFi interface asks if you want to approve unlimited tokens, change the amount to match your transaction. For example, if swapping 100 USDC, approve exactly 100 USDC, not unlimited.
      </p>
      <p>
        Regular check what token approvals you've granted. Use approval checker tools like Revoke.cash or Etherscan's token approval checker to see all contracts you've authorized. These tools also let you revoke approvals you no longer need.
      </p>
      <p>
        Before interacting with new protocols, research them carefully. A new farming protocol might offer attractive returns but could be a scam. If the protocol is hacked and receives an exploit, any approvals you granted could be used to steal your tokens. Only approve tokens on protocols you trust.
      </p>
      <p>
        After you finish using a service, revoke your approvals. For example, if you swap on a DEX and won't use it again, revoke the token approvals you granted. This doesn't affect past transactions but prevents future unauthorized transfers if the contract is compromised.
      </p>

      <h2 id="hardware-wallet-setup">Hardware Wallet Setup</h2>
      <p>
        Hardware wallets (Ledger, Trezor) store your private keys on a physical device that never connects to the internet. This makes them extremely secure against hacking and malware.
      </p>
      <p>
        When setting up a hardware wallet, follow the manufacturer's instructions exactly. Always buy from the official manufacturer or authorized retailers. Avoid used hardware wallets — buy new. Set a strong PIN code that only you know. Write down your recovery phrase when prompted and store it securely.
      </p>
      <p>
        Verify that you're using the official wallet software (Ledger Live, Trezor Suite). Download these from official websites only. Confirm the download's integrity using checksum verification if provided. Using fake wallet software defeats the security of your hardware wallet.
      </p>
      <p>
        When connecting your hardware wallet to your computer, ensure your computer is secure. Avoid using public or untrusted computers. Keep the Ledger Live or Trezor Suite software updated to the latest version. When prompted to update your hardware wallet firmware, do so immediately.
      </p>
      <p>
        For maximum security, use a hardware wallet that requires physical confirmation of transactions. When you initiate a transfer on your computer, you must physically confirm it on the device. This protects you against keyloggers and screen-capturing malware.
      </p>

      <h2 id="cold-storage-strategy">Cold Storage Strategy</h2>
      <p>
        Develop a tiered storage strategy based on how much crypto you hold. Keep only the amount you're actively trading in a hot wallet. Move larger holdings to cold storage (hardware wallet or paper wallet).
      </p>
      <p>
        A simple strategy: keep less than 1 month of trading capital in a hot wallet, 3-6 months in a hardware wallet, and long-term holdings in very secure cold storage. This way, if your hot wallet is compromised, only recent trading capital is at risk.
      </p>
      <p>
        For extremely large holdings or long-term storage, consider multi-signature wallets where you need multiple keys to authorize transfers. You could use a 2-of-3 multi-sig where you control one key, your spouse controls another, and your lawyer holds a third. No single person can move funds without the others' consent.
      </p>
      <p>
        Test your cold storage recovery process before storing large amounts. Verify that you can recover your cold storage wallet using your backup phrase in case your primary device fails. Practice the recovery process in a safe environment to ensure it works.
      </p>
      <p>
        For inherited crypto, set up a process for heirs to access your cold storage in case of your death. Store instructions in a will or with a lawyer. This ensures your crypto doesn't become permanently lost if something happens to you.
      </p>

      <h2 id="emergency-procedures">Emergency Procedures if Compromised</h2>
      <p>
        If you suspect your private key or seed phrase was compromised, act immediately. Do not delay. The faster you move your funds, the more you can save.
      </p>
      <p>
        First, move all remaining funds from the compromised wallet to a new, secure wallet. Use a wallet on a clean device if your main device may be infected with malware. Send your funds to the new wallet address, not to exchanges. After funds arrive at the new address, verify they're there and inaccessible to attackers.
      </p>
      <p>
        If the compromised wallet contains approved smart contract permissions, you may not be able to stop attackers from using those approvals. Once they have your private key, they can move your tokens even if you revoke approvals. This is why moving funds quickly is critical.
      </p>
      <p>
        After securing your funds, trace how you were compromised. Was your seed phrase written in a location that wasn't actually secure? Did you fall for a phishing attack? Was your device hacked? Understanding what happened helps you prevent the same issue with your new wallet.
      </p>
      <p>
        If you lost funds, file a report with your local law enforcement, especially if the amount is substantial. Contact the exchange or service that received your funds and report the theft. While recovery is unlikely, documentation helps and may prevent others from being scammed by the same attackers.
      </p>
      <p>
        Going forward, implement all the security practices from this checklist. Use 2FA on all services. Store seeds offline. Never reuse passwords. Don't click suspicious links. Verify URLs. Approve tokens carefully. Regular review of your security posture and vigilance against new attack vectors are essential to protecting yourself in the evolving crypto security landscape.
      </p>
    </LearnPageLayout>
  );
}
