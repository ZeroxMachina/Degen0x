import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Fork? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what blockchain forks are, the difference between hard and soft forks, and how they shape cryptocurrency evolution.",
};

export default function ForkPage() {
  return (
    <LearnPageLayout
      title="What Is a Fork?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="A fork is a change to a blockchain's protocol rules. Soft forks are backward-compatible upgrades that tighten rules, while hard forks create a permanent divergence requiring all nodes to upgrade. Hard forks can result in two separate chains, as happened when Bitcoin Cash split from Bitcoin and Ethereum Classic split from Ethereum. Forks are a fundamental governance mechanism in decentralized networks."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-a-fork", title: "What Is a Fork?", level: 2 },
        { id: "soft-forks", title: "soft-forks", level: 2 },
        { id: "soft-forks", title: "Soft Forks", level: 2 },
        { id: "hard-forks", title: "hard-forks", level: 2 },
        { id: "hard-forks", title: "Hard Forks", level: 2 },
        { id: "notable-forks", title: "notable-forks", level: 2 },
        { id: "notable-forks-in-history", title: "Notable Forks in History", level: 2 },
        { id: "why-it-matters", title: "why-it-matters", level: 2 },
        { id: "why-forks-matter", title: "Why Forks Matter", level: 2 }
      ]}
      faqs={[
        {
          question: "Do I get free coins when a hard fork happens?",
          answer:
            "If you hold coins on the original chain when a contentious hard fork occurs, you typically receive equal coins on both chains. For example, Bitcoin holders received equal amounts of Bitcoin Cash when that fork happened. However, claiming forked coins requires caution to avoid security risks.",
        },
        {
          question: "Are forks dangerous for a blockchain?",
          answer:
            "Planned, non-contentious hard forks (protocol upgrades) are routine and generally safe. Contentious forks that split the community can be disruptive, dividing hash power, developer attention, and ecosystem support. The risk depends on community consensus and how well-coordinated the upgrade is.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Consensus?", href: "/learn/glossary/consensus", category: "Glossary" },
        { title: "What Is a Node?", href: "/learn/glossary/node", category: "Glossary" },
        { title: "What Is an EIP?", href: "/learn/glossary/eip", category: "Glossary" },
        { title: "What Is a Protocol?", href: "/learn/glossary/protocol", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is a Fork?</h2>
      <p>
        In blockchain, a fork occurs when the rules governing the protocol change. Since blockchains are decentralized, every node must agree on which rules to follow. When a rule change is proposed, nodes that adopt the new rules diverge from those that do not. The term &quot;fork&quot; comes from the idea of a road splitting into two paths, each following different rules about which blocks are valid.
      </p>

      <h2 id="soft-forks">Soft Forks</h2>
      <p>
        A soft fork is a backward-compatible change that tightens the protocol rules. Blocks produced under the new rules are still valid under the old rules, so non-upgraded nodes continue to function. However, blocks produced under old rules may not be valid under the new rules. Soft forks require only a majority of miners or validators to upgrade. Bitcoin&apos;s SegWit upgrade was a soft fork.
      </p>

      <h2 id="hard-forks">Hard Forks</h2>
      <p>
        A hard fork loosens or changes the rules in ways that are not backward-compatible. Nodes that do not upgrade will reject blocks produced under the new rules. If the community disagrees on the fork, both chains can continue operating independently with separate histories. Non-contentious hard forks (planned upgrades) are common and usually result in all participants upgrading without a chain split.
      </p>

      <h2 id="notable-forks">Notable Forks in History</h2>
      <p>
        The Bitcoin/Bitcoin Cash fork in 2017 arose from disagreements over block size. The Ethereum/Ethereum Classic fork in 2016 followed the DAO hack, where the community voted to reverse the theft. These contentious forks created permanent chain splits. Ethereum has also undergone many non-contentious hard forks for planned upgrades, including the Merge to proof of stake.
      </p>

      <h2 id="why-it-matters">Why Forks Matter</h2>
      <p>
        Forks are how decentralized networks evolve. They enable protocol upgrades, bug fixes, and new features. They also serve as a governance safety valve: when communities fundamentally disagree, a fork allows each faction to pursue its vision. The ability to fork is a feature of open-source decentralized systems that prevents any single group from having absolute control over the protocol.
      </p>
    </LearnPageLayout>
  );
}
