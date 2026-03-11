import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Sybil Attack in Crypto Explained (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn what a Sybil attack is, how it affects airdrops and governance, detection methods, and how crypto protocols defend against Sybil manipulation.",
};

export default function SybilAttackPage() {
  return (
    <LearnPageLayout
      title="Sybil Attack"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="6 min read"
      intro="A Sybil attack is a security threat where a single entity creates multiple fake identities to gain disproportionate influence or rewards in a decentralized system. Named after the subject of a book about dissociative identity disorder, Sybil attacks in crypto manifest as users creating hundreds of wallets to exploit airdrops, manipulate governance votes, or game reward systems. Understanding Sybil attacks is essential for both protocol designers and users."
      toc={[
        { id: "what-is-sybil", title: "What Is a Sybil Attack?", level: 2 },
        { id: "crypto-context", title: "Sybil Attacks in Crypto", level: 2 },
        { id: "detection", title: "Sybil Detection Methods", level: 2 },
        { id: "prevention", title: "Prevention Strategies", level: 2 },
      ]}
      faqs={[
        { question: "Is using multiple wallets a Sybil attack?", answer: "Having multiple wallets for legitimate purposes (security, privacy, organization) is normal. A Sybil attack specifically refers to creating many identities to game systems designed for individual participants. The distinction lies in intent: are you using multiple wallets for personal convenience or to unfairly multiply rewards intended for unique users?" },
        { question: "Can Sybil attacks be completely prevented?", answer: "Complete prevention is extremely difficult in pseudonymous systems like crypto. Protocols can make Sybil attacks expensive and less profitable through various detection methods and proof-of-personhood systems, but determined attackers with sufficient resources can often find workarounds. The goal is usually to make Sybil attacks economically unviable rather than technically impossible." },
      ]}
      relatedArticles={[
        { title: "Airdrop Farming", href: "/learn/glossary/airdrop-farming", category: "Glossary" },
        { title: "DAO", href: "/learn/glossary/dao", category: "Glossary" },
        { title: "Governance", href: "/learn/glossary/governance", category: "Glossary" },
      ]}
    >
      <section id="what-is-sybil">
        <h2>What Is a Sybil Attack?</h2>
        <p>In a Sybil attack, one person or entity creates many pseudonymous identities to subvert a system that assumes one identity per participant. In traditional systems, identity verification prevents this. In crypto, where pseudonymity is a feature, anyone can create unlimited wallets. This creates challenges for any system that distributes rewards or voting power on a per-user basis, as there is no inherent way to distinguish between one person with a hundred wallets and a hundred individual users.</p>
      </section>

      <section id="crypto-context">
        <h2>Sybil Attacks in Crypto</h2>
        <p>The most common Sybil exploitation targets airdrops, where farmers create hundreds of wallets to multiply their token allocation. Governance systems face Sybil risks where one entity accumulates outsized voting power through multiple addresses. DeFi reward programs can be gamed by splitting activity across many wallets. Sybil attacks also affect retroactive public goods funding, NFT mints with per-wallet limits, and any system that assumes unique human participation behind each address.</p>
      </section>

      <section id="detection">
        <h2>Sybil Detection Methods</h2>
        <p>On-chain analysis identifies Sybil clusters through funding patterns (wallets funded from the same source), synchronized transaction timing, identical gas patterns, and shared smart contract interactions. Graph analysis maps relationships between addresses that frequently interact. Machine learning models can detect behavioral patterns consistent with automated or coordinated wallet usage. Protocols like Gitcoin Passport and Worldcoin attempt proof-of-personhood through biometrics or social verification to establish unique human identity.</p>
      </section>

      <section id="prevention">
        <h2>Prevention Strategies</h2>
        <p>Protocols combat Sybil attacks through multiple approaches. Minimum activity thresholds require meaningful engagement that is costly to replicate across many wallets. Quadratic distribution methods reduce the benefit of splitting activity across wallets. Time-weighted criteria favor long-term users over last-minute farmers. Social verification and proof-of-personhood attestations tie rewards to verified unique humans. Reputation systems make establishing genuine history expensive to fake. No single method is foolproof, so most projects combine multiple strategies.</p>
      </section>
    </LearnPageLayout>
  );
}
