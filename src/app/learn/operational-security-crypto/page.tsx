import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Operational Security for Crypto (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Guide to operational security (OpSec) for cryptocurrency users covering device security, network safety, identity management, and threat modeling.",
  keywords: ["crypto OpSec", "operational security crypto", "crypto privacy", "device security", "threat model crypto"],
};

export default function OperationalSecurityCryptoPage() {
  return (
    <LearnPageLayout title="Operational Security for Crypto" categoryName="Crypto Education" categorySlug="learn" readTime="8 min" intro="Operational security (OpSec) encompasses the practices and habits that protect your cryptocurrency beyond just wallet security. From device hygiene and network safety to identity management and threat modeling, a comprehensive OpSec approach addresses the full attack surface that crypto users face in an increasingly sophisticated threat environment."
      toc={[
        { id: "threat-modeling", title: "threat-modeling", level: 2 },
        { id: "threat-modeling", title: "Threat Modeling", level: 2 },
        { id: "device-security", title: "device-security", level: 2 },
        { id: "device-security", title: "Device Security", level: 2 },
        { id: "network-security", title: "network-security", level: 2 },
        { id: "network-security", title: "Network Security", level: 2 },
        { id: "identity-management", title: "identity-management", level: 2 },
        { id: "identity-management", title: "Identity Management", level: 2 },
        { id: "daily-practices", title: "daily-practices", level: 2 },
        { id: "daily-opsec-practices", title: "Daily OpSec Practices", level: 2 }
      ]}
      faqs={[
        { question: "What is a threat model?", answer: "A threat model identifies what you are protecting (assets), who might attack you (threat actors), how they might attack (attack vectors), and what defenses are appropriate. A casual user with small holdings faces different threats than a whale or project team member, and security measures should be proportional to the risk." },
        { question: "Should I use a VPN for crypto?", answer: "A VPN adds a layer of network privacy by encrypting traffic and masking your IP address, which can be useful when accessing crypto services. However, a VPN alone is not sufficient security — it does not protect against malware, phishing, or compromised devices. Choose a reputable, no-log VPN provider." },
        { question: "How much OpSec is enough?", answer: "Your OpSec level should match your threat profile. Higher-value holdings, public crypto activity, and leadership roles in projects all increase your threat level. Start with fundamentals (device security, strong passwords, 2FA) and add layers as your exposure increases. The goal is proportional security, not paranoia." },
      ]}
      relatedArticles={[
        { title: "Self-Custody Guide", href: "/learn/self-custody-guide", category: "Learn" },
        { title: "Two-Factor Authentication Guide", href: "/learn/two-factor-authentication-guide", category: "Learn" },
        { title: "SIM Swap Protection", href: "/learn/sim-swap-protection", category: "Learn" },
        { title: "Social Engineering in Crypto", href: "/learn/social-engineering-crypto", category: "Learn" },
      ]}
    >
      <section id="threat-modeling"><h2>Threat Modeling</h2><p>Effective security starts with understanding your specific threat landscape. A casual investor holding moderate amounts faces different risks than a DeFi developer managing protocol treasuries or a public figure known to hold significant crypto. Identify your assets (holdings across all chains and platforms), potential adversaries (opportunistic hackers, targeted attackers, physical threats), and the most likely attack vectors for your situation.</p><p>Common threat categories include: remote digital attacks (malware, phishing, SIM swaps), physical threats (theft of devices, coercion), insider threats (compromised team members or services), and operational failures (lost keys, failed backups). Prioritize defenses against the most likely and impactful threats first, then build additional layers as needed. Security is an ongoing process, not a one-time setup.</p></section>
      <section id="device-security"><h2>Device Security</h2><p>Use dedicated devices for high-value crypto operations when possible. At minimum, maintain a separate browser profile exclusively for crypto activities, free from random extensions and website cookies. Keep your operating system, browser, and wallet software updated — security patches address known vulnerabilities that attackers actively exploit. Use full-disk encryption on all devices that interact with crypto.</p><p>Be extremely cautious about what software you install on devices used for crypto. Every application is a potential attack vector through supply chain compromises, malicious updates, or hidden functionality. Avoid pirated software, verify downloads from official sources, and minimize the number of browser extensions. Consider using a Linux distribution for crypto-specific operations, as Linux has a smaller malware surface than Windows.</p></section>
      <section id="network-security"><h2>Network Security</h2><p>Avoid using public WiFi for any crypto transactions — public networks can be monitored, and attackers can create fake hotspots that intercept traffic. Use a VPN or mobile hotspot when accessing crypto services outside your home network. Ensure your home router uses WPA3 or WPA2 encryption with a strong password, and keep router firmware updated.</p><p>Be aware of DNS-level attacks where compromised DNS settings redirect you to phishing sites even when you type the correct URL. Use trusted DNS providers (Cloudflare 1.1.1.1, Google 8.8.8.8) and consider DNS-over-HTTPS for additional security. Some browser extensions and hardware wallets can verify the SSL certificates of known crypto sites to detect DNS manipulation or certificate fraud.</p></section>
      <section id="identity-management"><h2>Identity Management</h2><p>Use unique, strong passwords for every crypto-related account and store them in a reputable password manager (Bitwarden, 1Password). Never reuse passwords across services. Use unique email addresses for crypto exchange accounts — if possible, use a dedicated email provider that is not linked to your personal or professional identity. This limits the blast radius if any single service is compromised.</p><p>Minimize your public crypto footprint. Avoid discussing specific holdings, wallet addresses, or security practices publicly. Use pseudonymous identities for crypto community participation when possible. Be aware that blockchain transactions are public — linking your identity to a wallet address exposes your entire transaction history. Consider using privacy-preserving techniques for transactions you want to keep confidential.</p></section>
      <section id="daily-practices"><h2>Daily OpSec Practices</h2><p>Develop consistent security habits: always verify URLs before connecting wallets, check transaction details on hardware wallet screens before signing, regularly audit token approvals and revoke unnecessary ones, and maintain awareness of current scam techniques. Lock devices when not in use, log out of exchange sessions, and clear browser data for crypto profiles periodically.</p><p>Maintain regular backups of critical data (seed phrases already stored securely, wallet configuration notes, account recovery information) and periodically verify backup integrity. Stay informed about security incidents in the crypto space — if an exchange or protocol you use reports a breach, take immediate action to secure affected accounts. Practice incident response mentally so you can act quickly and calmly if a security event occurs.</p></section>
    </LearnPageLayout>
  );
}
