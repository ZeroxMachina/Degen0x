import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Estate Planning: Passing Digital Assets to Heirs (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Ensure your cryptocurrency can be inherited. Learn about seed phrase management, multi-sig inheritance, crypto trusts, and comprehensive digital asset estate planning.",
  keywords: ["crypto estate planning", "cryptocurrency inheritance", "Bitcoin estate plan", "crypto will", "digital asset inheritance"],
};

export default function CryptoEstatePlanningPage() {
  return (
    <LearnPageLayout
      title="Crypto Estate Planning: Passing Digital Assets to Heirs"
      categoryName="Long-Term Strategies"
      categorySlug="long-term"
      readTime="11 min read"
      intro="An estimated 3-4 million Bitcoin are believed to be permanently lost, much of it due to holders passing away without leaving access instructions. Cryptocurrency requires unique estate planning because the assets are bearer instruments: whoever holds the private keys controls the funds, and there is no bank to call for recovery. This guide covers the essential strategies for ensuring your digital assets can be passed to heirs while maintaining security during your lifetime."
      toc={[
        { id: "unique-challenges", title: "unique-challenges", level: 2 },
        { id: "unique-challenges-of-crypto-inheritance", title: "Unique Challenges of Crypto Inheritance", level: 2 },
        { id: "seed-management", title: "seed-management", level: 2 },
        { id: "seed-phrase-management-for-heirs", title: "Seed Phrase Management for Heirs", level: 2 },
        { id: "multisig", title: "multisig", level: 2 },
        { id: "multi-signature-inheritance-solutions", title: "Multi-Signature Inheritance Solutions", level: 2 },
        { id: "trusts", title: "trusts", level: 2 },
        { id: "crypto-trusts-legal-structures", title: "Crypto Trusts & Legal Structures", level: 2 },
        { id: "documentation", title: "documentation", level: 2 },
        { id: "creating-an-inheritance-document", title: "Creating an Inheritance Document", level: 2 },
        { id: "services", title: "services", level: 2 },
        { id: "digital-inheritance-services", title: "Digital Inheritance Services", level: 2 }
      ]}
      faqs={[
        { question: "What happens to crypto when someone dies?", answer: "Without proper estate planning, crypto may be permanently lost. Unlike bank accounts, there is no institution that can recover cryptocurrency without the private keys. The assets remain on the blockchain forever but are inaccessible without the keys." },
        { question: "Should I put seed phrases in my will?", answer: "Not directly. Wills become public records during probate, exposing your seed phrases. Instead, reference a secure location in your will or use a crypto-specific inheritance service. A letter of instruction stored separately can provide access details." },
        { question: "Is crypto subject to estate tax?", answer: "Yes. Cryptocurrency is treated as property for estate tax purposes. The value at the date of death is included in the estate. In the US, estates exceeding the federal exemption threshold are subject to estate tax up to 40%." },
        { question: "Can I use a crypto trust?", answer: "Yes. Various trust structures can hold cryptocurrency, providing control over distribution timing and conditions. Some providers offer specialized crypto trusts with technical capabilities like multi-sig management. Consult an estate attorney with crypto experience." },
      ]}
      relatedArticles={[
        { title: "Crypto Retirement Planning", href: "/long-term/learn/crypto-retirement-planning", category: "Long-Term" },
        { title: "HODL Strategy", href: "/long-term/learn/hodl-strategy", category: "Long-Term" },
        { title: "Bitcoin IRA Guide", href: "/long-term/learn/bitcoin-ira-guide", category: "Long-Term" },
      ]}
    >
      <h2 id="unique-challenges">Unique Challenges of Crypto Inheritance</h2>
      <p>
        Cryptocurrency inheritance presents challenges that do not exist with traditional assets. Private keys and seed phrases are the sole means of accessing funds, and there is no institution that can recover lost keys. Hardware wallets can be physically present but useless without the PIN and seed phrase. Exchange accounts may have two-factor authentication that heirs cannot access. DeFi positions may require technical knowledge to manage or close. The pseudonymous nature of blockchain means heirs may not even know which assets exist. Addressing these challenges requires planning that balances security during your lifetime with accessibility for your heirs after death.
      </p>

      <h2 id="seed-management">Seed Phrase Management for Heirs</h2>
      <p>
        The most basic approach is securely storing seed phrases and access instructions where heirs can find them. Options include a sealed envelope in a home safe with a separate document explaining how to use it, a bank safe deposit box with access granted to the executor, or splitting the seed phrase across multiple locations so no single location compromises the full phrase. Shamir&apos;s Secret Sharing splits a seed phrase into multiple shares where only a threshold number are needed to reconstruct it. For example, you might create 5 shares requiring any 3 to recover the seed. This provides redundancy while preventing any single share holder from accessing funds.
      </p>

      <h2 id="multisig">Multi-Signature Inheritance Solutions</h2>
      <p>
        Multi-signature wallets require multiple keys to authorize transactions, providing an elegant inheritance mechanism. A 2-of-3 multisig setup could have one key with you, one with a trusted family member, and one with an attorney or digital inheritance service. During your lifetime, you control the wallet with your key plus one other. After death, the other two keyholders can access the funds. Casa offers an inheritance solution built on multisig that includes a key held by the company that can be released upon verified death. Unchained provides similar services for Bitcoin. These solutions balance security with inheritance accessibility.
      </p>

      <h2 id="trusts">Crypto Trusts &amp; Legal Structures</h2>
      <p>
        A revocable living trust can hold cryptocurrency, allowing assets to pass to beneficiaries without probate (which is public). The trust document specifies how and when digital assets are distributed. Specialized crypto trusts can be set up with technical capabilities like multisig management. Irrevocable trusts remove assets from your estate, potentially reducing estate tax liability, but surrender your control over them. Some estate attorneys now specialize in digital asset trusts and can create structures that address both the legal and technical aspects of crypto inheritance. Ensure the trustee has the technical capability to manage cryptocurrency.
      </p>

      <h2 id="documentation">Creating an Inheritance Document</h2>
      <p>
        Create a comprehensive document listing all your crypto holdings: wallets (hardware and software), exchange accounts, DeFi positions, and staking positions. For each, include the type of wallet or platform, approximate value, and access instructions (stored separately from the seed phrases themselves). Include step-by-step instructions for heirs who may have limited crypto knowledge. Explain how to access hardware wallets, how to withdraw from exchanges, and how to manage or close DeFi positions. Update this document at least annually. Store it securely and inform your executor and at least one trusted family member of its location.
      </p>

      <h2 id="services">Digital Inheritance Services</h2>
      <p>
        Several services specialize in crypto inheritance. Casa provides a multi-key vault with a built-in inheritance protocol. Unchained offers Bitcoin inheritance planning with collaborative custody. Safe Haven provides digital asset inheritance solutions using blockchain-based encrypted vaults. Dead Man&apos;s Switch services automatically release information if you do not check in within a specified period. When evaluating services, consider their track record, the security of their key management, what happens if the service company itself fails, and whether the solution works across all your crypto assets or only specific ones. A combination of legal structures and technical solutions provides the most robust inheritance plan.
      </p>
    </LearnPageLayout>
  );
}
