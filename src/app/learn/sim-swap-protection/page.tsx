import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `SIM Swap Protection Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn how to protect yourself from SIM swap attacks targeting cryptocurrency accounts, including prevention strategies and carrier security settings.",
  keywords: ["SIM swap", "SIM swap protection", "SIM swap crypto", "phone number security", "2FA security", "crypto account security"],
};

export default function SimSwapProtectionPage() {
  return (
    <LearnPageLayout title="SIM Swap Protection Guide" categoryName="Crypto Education" categorySlug="learn" readTime="7 min" intro="SIM swap attacks have been responsible for millions of dollars in cryptocurrency theft. By hijacking your phone number, attackers can bypass SMS-based two-factor authentication, intercept password reset codes, and gain access to exchange accounts. This guide explains how SIM swaps work and the steps you can take to protect yourself."
      toc={[
        { id: "how-it-works", title: "How SIM Swaps Work", level: 2 },
        { id: "why-crypto", title: "Why Crypto Users Are Targeted", level: 2 },
        { id: "prevention", title: "Prevention Measures", level: 2 },
        { id: "alternatives", title: "Better 2FA Alternatives", level: 2 },
        { id: "response", title: "If You Are Attacked", level: 2 },
      ]}
      faqs={[
        { question: "How do attackers perform a SIM swap?", answer: "Attackers call your mobile carrier pretending to be you, using personal information gathered from data breaches, social media, or social engineering. They convince the carrier to transfer your phone number to a new SIM card. Some attackers bribe or blackmail carrier employees directly for faster results." },
        { question: "Is SMS 2FA better than no 2FA?", answer: "Yes, SMS 2FA is still better than no second factor at all. However, for high-value accounts like cryptocurrency exchanges, it is significantly less secure than authenticator apps or hardware security keys. The effort to upgrade from SMS to app-based 2FA is minimal and the security improvement is substantial." },
        { question: "Can eSIM prevent SIM swap attacks?", answer: "eSIM can make SIM swaps slightly more difficult since there is no physical SIM to swap, but carriers can still reassign an eSIM to a new device through their systems. eSIM is not a complete defense — the fundamental vulnerability is carrier account security, not the SIM technology itself." },
      ]}
      relatedArticles={[
        { title: "Two-Factor Authentication Guide", href: "/learn/two-factor-authentication-guide", category: "Learn" },
        { title: "Operational Security for Crypto", href: "/learn/operational-security-crypto", category: "Learn" },
        { title: "Social Engineering in Crypto", href: "/learn/social-engineering-crypto", category: "Learn" },
        { title: "Self-Custody Guide", href: "/learn/self-custody-guide", category: "Learn" },
      ]}
    >
      <section id="how-it-works"><h2>How SIM Swaps Work</h2><p>A SIM swap attack involves an attacker convincing your mobile carrier to transfer your phone number to a SIM card they control. This is typically accomplished through social engineering — the attacker calls customer support, provides personal information to pass identity verification (name, address, last four digits of SSN, account PIN), and requests a SIM swap citing a lost or damaged phone. Once successful, all calls and texts to your number are redirected to the attacker's device.</p><p>The personal information needed for this attack is often readily available through data breaches, social media profiles, and public records. Some attackers employ carrier insiders who perform the swap directly, bypassing normal verification procedures. The entire process can take minutes, and victims often don't realize what happened until they notice their phone has lost service — by which time the attacker may have already accessed their accounts.</p></section>
      <section id="why-crypto"><h2>Why Crypto Users Are Targeted</h2><p>Cryptocurrency holders are prime targets because blockchain transactions are irreversible once confirmed. Unlike bank fraud where transactions can be reversed, stolen crypto is typically gone permanently. Attackers can identify high-value targets by monitoring blockchain activity, noting users who discuss holdings on social media, or targeting participants in DeFi governance and NFT communities.</p><p>Many cryptocurrency exchanges used SMS-based 2FA as their default or only second factor option, creating a widespread vulnerability. A successful SIM swap gives the attacker access to SMS verification codes, enabling password resets and withdrawal approvals. Combined with email access (often also secured by SMS recovery), a SIM swap can cascade into complete account takeover within minutes.</p></section>
      <section id="prevention"><h2>Prevention Measures</h2><p>Contact your mobile carrier and request maximum account security: set a unique PIN or passphrase required for any account changes, request that no SIM swaps be processed over the phone, and enable any available port-out protection features. Some carriers offer account freeze options that prevent any changes without in-person verification with a government ID.</p><p>Minimize the personal information available about you online — review privacy settings on social media, be cautious about sharing personal details in crypto communities, and use a separate phone number for cryptocurrency-related accounts. Consider using a Google Voice number for crypto 2FA if you must use SMS, as Google Voice numbers are harder to SIM swap than carrier numbers, though authenticator apps are still the better solution.</p></section>
      <section id="alternatives"><h2>Better 2FA Alternatives</h2><p>Authenticator apps like Google Authenticator, Authy, or Microsoft Authenticator generate time-based codes locally on your device without relying on your phone number. These are immune to SIM swap attacks because the codes are generated on the device itself. Authy offers cloud backup of 2FA seeds, while Google Authenticator keeps everything local for maximum security.</p><p>Hardware security keys like YubiKey provide the strongest 2FA available. They use cryptographic challenge-response authentication that cannot be phished, intercepted, or duplicated. Most major exchanges support hardware keys through the FIDO2/WebAuthn standard. For maximum security, register multiple hardware keys as backup and store them in separate secure locations.</p></section>
      <section id="response"><h2>If You Are Attacked</h2><p>If your phone suddenly loses service, contact your carrier immediately from another phone to check if a SIM swap has occurred. If confirmed, have them revert the swap immediately and lock your account. Simultaneously change passwords on all crypto exchange accounts, email accounts, and any service linked to that phone number — prioritize accounts with financial access.</p><p>Report the incident to law enforcement, your mobile carrier's fraud department, and any affected exchanges or financial institutions. Document everything with timestamps. Some exchanges may be able to freeze withdrawals if contacted quickly enough. After the incident, migrate all accounts away from SMS-based 2FA to authenticator apps or hardware security keys, and review your carrier's account security options.</p></section>
    </LearnPageLayout>
  );
}
