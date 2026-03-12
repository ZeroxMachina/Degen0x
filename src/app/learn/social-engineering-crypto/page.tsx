import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Social Engineering Attacks in Crypto (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about social engineering attacks targeting crypto users: impersonation, pretexting, SIM swapping, and psychological manipulation tactics. Get strategies to protect yourself.",
};

export default function SocialEngineeringCryptoPage() {
  return (
    <LearnPageLayout
      title="Social Engineering Attacks in Crypto"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="8 min read"
      intro="Social engineering attacks exploit human psychology rather than technical vulnerabilities to steal cryptocurrency. These attacks manipulate victims through trust, urgency, fear, or greed to bypass even the strongest technical security measures. From SIM swap attacks that hijack phone numbers to sophisticated impersonation schemes targeting project teams, social engineering is responsible for some of the largest individual and organizational crypto losses. Understanding these tactics is essential because no hardware wallet or multi-sig can protect against a convincing con."
      toc={[
        { id: "types", title: "types", level: 2 },
        { id: "types-of-social-engineering-attacks", title: "Types of Social Engineering Attacks", level: 2 },
        { id: "sim-swapping", title: "sim-swapping", level: 2 },
        { id: "sim-swapping-attacks", title: "SIM Swapping Attacks", level: 2 },
        { id: "targeting-teams", title: "targeting-teams", level: 2 },
        { id: "targeting-crypto-teams-and-daos", title: "Targeting Crypto Teams and DAOs", level: 2 },
        { id: "defense", title: "defense", level: 2 },
        { id: "defending-against-social-engineering", title: "Defending Against Social Engineering", level: 2 }
      ]}
      faqs={[
        {
          question: "How do attackers find their targets?",
          answer:
            "Attackers use publicly available information: social media posts about crypto gains, ENS domain names linked to high-value wallets, participation in NFT or DeFi communities, public governance forum activity, and corporate directories. The more publicly visible your crypto involvement, the more likely you are to be targeted. Practice operational security about your holdings and activities.",
        },
        {
          question: "Can social engineering bypass hardware wallets?",
          answer:
            "Yes. A hardware wallet protects your private keys, but social engineering can trick you into signing malicious transactions on that hardware wallet. If an attacker convinces you that you need to sign a 'security update' or 'migration' transaction, the hardware wallet will execute it. Always verify what you are signing, regardless of the security of your signing device.",
        },
        {
          question: "What makes crypto users particularly vulnerable to social engineering?",
          answer:
            "Several factors: the irreversibility of transactions means successful attacks cannot be undone, the technical complexity creates knowledge gaps attackers exploit, the culture of pseudonymity makes impersonation easier, the promise of high returns makes people more willing to take risks, and the decentralized nature means there is no fraud department to intervene.",
        },
      ]}
      relatedArticles={[
        { title: "Phishing Attacks in Crypto", href: "/learn/phishing-attacks-crypto", category: "Learn" },
        { title: "Crypto Security Guide", href: "/learn/crypto-security-guide", category: "Learn" },
        { title: "Common Crypto Scams", href: "/learn/common-crypto-scams", category: "Learn" },
        { title: "Multi-Sig Security", href: "/learn/multi-sig-security", category: "Learn" },
      ]}
    >
      <section id="types">
        <h2>Types of Social Engineering Attacks</h2>
        <p>
          Impersonation attacks involve an attacker pretending to be someone you trust — a project team member, exchange support agent, fellow community member, or even a friend whose account has been compromised. They establish credibility through familiar communication patterns, display names, and profile pictures, then direct you to take actions that compromise your security. In crypto, these attacks often occur through Discord DMs, Telegram messages, or fake social media accounts.
        </p>
        <p>
          Pretexting attacks create a fabricated scenario to manipulate victims. An attacker might pose as a journalist wanting to interview you about your crypto project, a venture capitalist interested in investing, or a developer seeking collaboration. The pretext builds rapport and trust before the attack: they might ask you to install a trojanized app for a video call, visit a phishing site to review a document, or reveal sensitive information about your wallet setup or security practices. The sophistication of these pretexts has increased dramatically as attackers have access to detailed information about projects and their teams.
        </p>
      </section>

      <section id="sim-swapping">
        <h2>SIM Swapping Attacks</h2>
        <p>
          SIM swapping attacks involve an attacker convincing a mobile carrier to transfer your phone number to a SIM card they control. Once they have your number, they can intercept SMS-based two-factor authentication codes and password reset messages, gaining access to exchange accounts, email accounts, and any other service that uses SMS verification. Several high-profile crypto thefts involving millions of dollars have been executed through SIM swaps.
        </p>
        <p>
          Attackers accomplish SIM swaps by calling the carrier and impersonating the victim using personal information gathered from data breaches, social media, and other sources. Some attackers bribe carrier employees directly. The best defense is to never use SMS-based 2FA for any crypto-related account — use authenticator apps (Google Authenticator, Authy) or hardware security keys (YubiKey) instead. Additionally, contact your carrier to add a PIN or passphrase requirement for any account changes, and use a dedicated phone number for crypto accounts that is not shared on social media or used for general purposes.
        </p>
      </section>

      <section id="targeting-teams">
        <h2>Targeting Crypto Teams and DAOs</h2>
        <p>
          Organized criminal groups increasingly target crypto project teams and DAO members because compromising a team member can lead to multi-million dollar payouts. Attack vectors include sending job offers with trojanized PDF resumes or development environments, requesting code reviews of malicious repositories that execute malware when built, and creating fake partnership proposals with malicious documents or links. The Lazarus Group, linked to North Korea, has been particularly prolific in targeting crypto teams through these methods.
        </p>
        <p>
          DAO governance attacks often begin with social engineering: building trust in governance forums over weeks or months, then proposing seemingly benign governance changes that contain hidden malicious elements. Multi-sig signers are prime targets — if an attacker can compromise enough signers to meet the signing threshold, they can drain the treasury. Organizations should implement security training for all team members, use dedicated devices for signing operations, verify all unexpected communications through independent channels, and maintain operational security about internal processes and signing procedures.
        </p>
      </section>

      <section id="defense">
        <h2>Defending Against Social Engineering</h2>
        <p>
          The most effective defense is cultivating a healthy skepticism toward all unexpected communications, especially those involving urgency, secrecy, or financial actions. Verify identities through independent channels — if someone messages you on Discord claiming to be a team member, verify through a different platform or through someone you have previously communicated with directly. Never trust display names, profile pictures, or message formatting as identity verification, as all of these are easily spoofed.
        </p>
        <p>
          Implement a personal security protocol: never sign transactions under time pressure, never install software or visit links suggested by people you have not independently verified, never discuss your holdings or security setup publicly, and always verify the full details of any transaction before signing. For organizations, conduct regular security awareness training, implement communication verification procedures, use separate devices for high-security operations, and create incident response plans for when a team member reports a suspicious contact or potential compromise.
        </p>
      </section>
    </LearnPageLayout>
  );
}
