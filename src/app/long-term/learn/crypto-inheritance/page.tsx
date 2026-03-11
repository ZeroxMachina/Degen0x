import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Inheritance Planning Guide (${CURRENT_YEAR}) - Pass On Your Assets | ${SITE_NAME}`,
  description: `Plan your crypto inheritance in ${CURRENT_YEAR}. How to ensure your digital assets can be passed to heirs. Seed phrase management, legal structures, and inheritance services.`,
  alternates: { canonical: "/long-term/learn/crypto-inheritance" },
};

const toc = [
  { id: "why-plan", title: "Why Crypto Inheritance Planning Matters", level: 2 },
  { id: "challenges", title: "Unique Challenges of Crypto Inheritance", level: 2 },
  { id: "methods", title: "Methods for Passing On Crypto", level: 2 },
  { id: "legal-considerations", title: "Legal and Tax Considerations", level: 2 },
  { id: "step-by-step", title: "Setting Up Your Inheritance Plan", level: 2 },
];

const faqs = [
  { question: "What happens to my crypto when I die?", answer: "Without a plan, self-custodied crypto is effectively lost forever when the holder dies, as no one else has access to the private keys. Exchange-held crypto may be recoverable by heirs through the estate process, but this requires documentation and can take months or years. An estimated billions of dollars in crypto have been permanently lost due to holders dying without inheritance plans." },
  { question: "Should I put my seed phrase in my will?", answer: "No. Wills become public records during probate, exposing your seed phrase to anyone who reads the filing. Instead, reference the existence and location of your crypto in your will, and store the actual access information (seed phrases, passwords) separately in a secure manner that your executor or beneficiaries can access through a defined process." },
  { question: "Can I use a multisig wallet for inheritance?", answer: "Yes. A multisig wallet that requires, say, 2 of 3 keys to sign transactions can serve as an inheritance mechanism. Hold one key yourself, give one to a trusted family member, and store one with an attorney or in a safety deposit box. After your passing, any two keyholders can access the funds. This prevents any single party from accessing funds prematurely." },
  { question: "Are there services that help with crypto inheritance?", answer: "Yes. Services like Casa offer inheritance planning as part of their multisig wallet packages. Some estate planning attorneys now specialize in digital asset inheritance. Dead man's switch services can automatically notify beneficiaries and release access information if you fail to check in periodically. Choose reputable, established services for something this critical." },
  { question: "Do I need to pay estate tax on crypto?", answer: "In most jurisdictions, cryptocurrency is subject to estate tax just like any other asset. The value at the time of death determines the taxable amount. In the US, estates exceeding the federal exemption threshold are subject to estate tax. Proper estate planning, including the use of trusts, may help minimize the tax burden for heirs. Consult an estate planning attorney." },
];

const relatedArticles = [
  { title: "Bitcoin Retirement Strategy", href: "/long-term/learn/bitcoin-retirement-strategy", category: "Long-Term" },
  { title: "Hardware Wallet Setup Guide", href: "/wallets/learn/hardware-wallet-setup-guide", category: "Wallets" },
  { title: "Passphrase vs Seed Phrase", href: "/wallets/learn/passphrase-vs-seed-phrase", category: "Wallets" },
];

export default function CryptoInheritancePage() {
  return (
    <LearnPageLayout
      title="Crypto Inheritance Planning: Ensuring Your Assets Pass to Heirs"
      categoryName="Long-Term Strategies"
      categorySlug="long-term"
      readTime="9 min"
      intro="Crypto inheritance planning is one of the most overlooked aspects of digital asset management. Unlike traditional bank accounts that can be accessed through legal processes, self-custodied cryptocurrency is permanently lost if the private keys die with the owner. This guide covers the unique challenges of crypto inheritance and practical methods for ensuring your digital assets can be passed to your beneficiaries."
      toc={toc}
      faqs={faqs}
      relatedArticles={relatedArticles}
    >
      <h2 id="why-plan">Why Crypto Inheritance Planning Matters</h2>
      <p>
        An estimated 3-4 million Bitcoin (worth hundreds of billions of dollars) are believed to
        be permanently lost, and a significant portion of these losses are due to holders dying
        without sharing access information. Unlike a bank account where heirs can work with the
        institution to gain access through legal channels, self-custodied crypto has no recovery
        mechanism. If the seed phrase is unknown, the funds are gone forever. The blockchain has
        no customer support department.
      </p>
      <p>
        Even for crypto held on exchanges, inheritance is not automatic. Exchanges require death
        certificates, probate documents, and legal authorization before releasing funds to heirs.
        This process can take months and requires that your heirs know the crypto exists and which
        exchange holds it. Without clear documentation, exchange-held crypto can sit unclaimed
        indefinitely. Planning ahead prevents both permanent loss and prolonged access delays.
      </p>

      <h2 id="challenges">Unique Challenges of Crypto Inheritance</h2>
      <p>
        The core challenge is balancing security during your lifetime with accessibility after
        your death. The same properties that make crypto secure (only the key holder can access
        funds) make inheritance difficult. If you share your seed phrase with a trusted person
        for inheritance purposes, they could potentially access your funds while you are alive.
        If you keep it entirely secret, it dies with you.
      </p>
      <p>
        Technical complexity adds another layer. Your heirs may not be crypto-savvy. They need
        not only the keys but also the knowledge of how to use them: which wallet to install,
        which networks to check, how to safely move funds. A seed phrase alone is useless to
        someone who does not understand crypto wallets. Your inheritance plan should include
        clear instructions that a non-technical person can follow, or designate a technically
        capable executor.
      </p>

      <h2 id="methods">Methods for Passing On Crypto</h2>
      <p>
        The letter of instruction method involves creating a detailed document that explains
        where your crypto is held, how to access it, and step-by-step instructions for recovery.
        Store this document in a secure location (safe deposit box, with an attorney) and inform
        your executor of its existence. Include wallet types, which apps to use, which chains to
        check, and approximate balances. Update the document whenever your holdings change.
      </p>
      <p>
        Multisig and Shamir&apos;s Secret Sharing provide more sophisticated approaches. A 2-of-3
        multisig wallet requires two of three keys to authorize transactions. Distribute keys
        among yourself, a family member, and an attorney. After your passing, any two can access
        the funds. Shamir&apos;s Secret Sharing splits your seed phrase into multiple parts where a
        threshold number of parts is needed to reconstruct it. These technical solutions prevent
        any single party from accessing funds alone while ensuring survivability.
      </p>

      <h2 id="legal-considerations">Legal and Tax Considerations</h2>
      <p>
        Include your cryptocurrency in your estate plan. Work with an attorney who understands
        digital assets to include crypto holdings in your will or trust. A trust can provide
        more privacy than a will (which becomes public during probate) and can include specific
        instructions for crypto management. Some states have adopted the Revised Uniform Fiduciary
        Access to Digital Assets Act, which provides a legal framework for fiduciary access to
        digital assets including crypto.
      </p>
      <p>
        Tax implications vary by jurisdiction. In many countries, inherited crypto receives a
        stepped-up cost basis, meaning your heirs would only owe capital gains tax on appreciation
        after the date of inheritance, not from your original purchase price. This can represent
        significant tax savings. However, estate tax may apply to the total value. Consult both
        an estate planning attorney and a tax professional familiar with cryptocurrency to
        optimize your inheritance structure.
      </p>

      <h2 id="step-by-step">Setting Up Your Inheritance Plan</h2>
      <p>
        Start by creating a comprehensive inventory of all your crypto holdings: exchanges,
        wallets, DeFi positions, staking, and any other crypto assets. Include approximate values
        and account types. Store this inventory securely and update it at least annually. Separate
        the inventory (what you hold and where) from the access information (seed phrases,
        passwords) for added security.
      </p>
      <p>
        Next, choose your inheritance method based on your technical comfort and the capabilities
        of your heirs. For most people, a combination works best: a letter of instruction stored
        with an attorney, seed phrases in a separate secure location accessible to your executor,
        and exchange beneficiary designations where available. Test your plan by having a trusted
        person attempt to locate and understand (but not access) your holdings using only the
        documents you have prepared. Revise based on any confusion or gaps they identify.
      </p>
    </LearnPageLayout>
  );
}
