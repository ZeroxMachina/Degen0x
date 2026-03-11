import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Slashing? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn what slashing means in proof-of-stake blockchains, the offenses that trigger slashing, how it affects stakers, and how to avoid slashing penalties.",
};

export default function SlashingPage() {
  return (
    <LearnPageLayout title="What Is Slashing?" categoryName="Learn Crypto" categorySlug="learn" readTime="5 min read"
      intro="Slashing is a penalty mechanism in proof-of-stake blockchains that punishes validators for provably malicious or negligent behavior by destroying a portion of their staked tokens. The threat of slashing is what keeps validators honest — the economic cost of misbehaving must far exceed any potential gain from an attack. Slashing protects network security by ensuring that validators have a strong financial incentive to follow protocol rules at all times."
      toc={[{ id: "definition", title: "What Is Slashing?", level: 2 }, { id: "slashable-offenses", title: "Slashable Offenses", level: 2 }, { id: "impact-on-stakers", title: "Impact on Stakers and Delegators", level: 2 }, { id: "preventing-slashing", title: "Preventing Slashing", level: 2 }]}
      faqs={[{ question: "Has slashing actually happened on Ethereum?", answer: "Yes, though it is rare. Most Ethereum slashing events have been caused by technical misconfiguration rather than malicious intent, such as running duplicate validator instances or using outdated software. The penalties for isolated slashing events are relatively small (1 ETH initially), but correlated slashing (many validators slashed simultaneously) triggers much larger penalties." },
        { question: "Can delegators be slashed?", answer: "On some networks, yes. On Cosmos chains, delegator stakes can be partially slashed if their validator misbehaves. On Ethereum, slashing affects the validator's 32 ETH stake directly. Liquid staking protocols may socialize slashing losses across all stakers. This is why choosing reliable validators and diversifying delegation is important." }]}
      relatedArticles={[{ title: "Validator", href: "/learn/glossary/validator", category: "Glossary" }, { title: "Delegator", href: "/learn/glossary/delegator", category: "Glossary" }, { title: "Bonding", href: "/learn/glossary/bonding", category: "Glossary" }, { title: "What Is Staking?", href: "/learn/what-is-staking", category: "Learn Crypto" }]}
    >
      <h2 id="definition">What Is Slashing?</h2>
      <p>Slashing is the enforced destruction of a validator&apos;s staked tokens as punishment for protocol violations. It is the most severe penalty in proof-of-stake systems and is reserved for actions that could compromise network security. The slashed tokens are typically burned (permanently destroyed) rather than redistributed, ensuring that no one profits from the penalty. The severity of slashing depends on the offense and how many validators are involved.</p>

      <h2 id="slashable-offenses">Slashable Offenses</h2>
      <p>The two primary slashable offenses across most PoS chains are double-signing (proposing two different blocks for the same slot) and surround voting (making contradictory attestations that could enable chain reorganizations). On Ethereum, both offenses trigger an initial penalty plus a correlation penalty that scales with the number of validators slashed in the same timeframe. Extended downtime is not slashable on Ethereum but results in accumulated attestation penalties.</p>

      <h2 id="impact-on-stakers">Impact on Stakers and Delegators</h2>
      <p>When a validator is slashed on Ethereum, they lose at least 1/32 of their stake initially, followed by a correlation penalty calculated over the following 36 days. In the worst case (one-third of all validators slashed), the entire stake can be destroyed. On Cosmos chains, slashing for double-signing typically results in 5% stake destruction, while downtime slashing takes 0.01%. Delegators on affected validators share in these losses proportionally.</p>

      <h2 id="preventing-slashing">Preventing Slashing</h2>
      <p>The most important prevention measure is never running two instances of the same validator simultaneously, as this can cause double-signing. Use slashing protection databases that track previous signing history. Keep validator software updated to avoid bugs that could produce conflicting messages. Use remote signer setups with hardware security modules for additional protection. As a delegator, choose validators with established track records, diverse client software, and professional operating practices.</p>
    </LearnPageLayout>
  );
}
