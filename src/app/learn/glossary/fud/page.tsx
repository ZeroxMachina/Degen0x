import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is FUD? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what FUD means in crypto, how it spreads, and how to distinguish legitimate concerns from market manipulation.",
};

export default function FudPage() {
  return (
    <LearnPageLayout
      title="What Is FUD?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="4 min"
      intro="FUD stands for Fear, Uncertainty, and Doubt. In crypto, it refers to negative information or sentiment — whether true, exaggerated, or fabricated — that causes investors to panic and sell. FUD can be spread intentionally to manipulate markets or emerge organically from genuine concerns. Learning to evaluate FUD critically is an essential skill for any crypto investor."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-fud", title: "What Is FUD?", level: 2 },
        { id: "types", title: "types", level: 2 },
        { id: "types-of-fud", title: "Types of FUD", level: 2 },
        { id: "how-it-spreads", title: "how-it-spreads", level: 2 },
        { id: "how-fud-spreads", title: "How FUD Spreads", level: 2 },
        { id: "evaluating-fud", title: "evaluating-fud", level: 2 },
        { id: "evaluating-fud", title: "Evaluating FUD", level: 2 },
        { id: "fud-vs-criticism", title: "fud-vs-criticism", level: 2 },
        { id: "fud-vs-legitimate-criticism", title: "FUD vs Legitimate Criticism", level: 2 }
      ]}
      faqs={[
        {
          question: "Is all FUD false?",
          answer:
            "No. While the term is often used dismissively, some FUD is based on real risks. Regulatory crackdowns, security vulnerabilities, and project failures are legitimate concerns. The danger lies in dismissing all negative information as FUD, which can lead to ignoring genuine warning signs about an investment.",
        },
        {
          question: "Who benefits from spreading FUD?",
          answer:
            "Short sellers profit when prices fall. Competitors may spread FUD about rival projects. Media outlets generate clicks from alarming headlines. Some traders deliberately create panic to buy at lower prices. Understanding who benefits from FUD helps you evaluate the motivation behind negative narratives.",
        },
      ]}
      relatedArticles={[
        { title: "What Is FOMO?", href: "/learn/glossary/fomo", category: "Glossary" },
        { title: "What Is a Bear Market?", href: "/learn/glossary/bear-market", category: "Glossary" },
        { title: "What Is Paper Hands?", href: "/learn/glossary/paper-hands", category: "Glossary" },
        { title: "What Is Diamond Hands?", href: "/learn/glossary/diamond-hands", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is FUD?</h2>
      <p>
        FUD is a strategy of spreading negative, misleading, or exaggerated information to create fear and drive down asset prices. The term originated in technology marketing but has become central to crypto culture. In the crypto community, calling something &quot;FUD&quot; is often used to dismiss criticism, though this can be problematic when the concerns raised are legitimate and warrant serious consideration.
      </p>

      <h2 id="types">Types of FUD</h2>
      <p>
        Manufactured FUD is deliberately created to manipulate markets, often by short sellers or competitors. Regulatory FUD involves spreading exaggerated fears about government crackdowns. Technical FUD amplifies protocol vulnerabilities or scalability concerns beyond their actual severity. Organic FUD emerges naturally from real events like exchange hacks, project failures, or genuine regulatory actions.
      </p>

      <h2 id="how-it-spreads">How FUD Spreads</h2>
      <p>
        Social media is the primary amplifier of FUD. A single alarming tweet from an influential account can trigger cascading sell-offs. Crypto news sites, Telegram groups, and Reddit forums further propagate narratives. The 24/7 nature of crypto markets and the emotional attachment investors have to their holdings make the ecosystem particularly susceptible to rapid sentiment shifts driven by FUD.
      </p>

      <h2 id="evaluating-fud">Evaluating FUD</h2>
      <p>
        When encountering negative information, ask critical questions. What is the source, and do they have a financial motive? Is the claim supported by verifiable evidence? Are trusted technical experts confirming the concern? How does this information compare to the project&apos;s track record? Taking time to verify claims before reacting can prevent costly emotional decisions.
      </p>

      <h2 id="fud-vs-criticism">FUD vs Legitimate Criticism</h2>
      <p>
        Healthy ecosystems require honest criticism. Dismissing all negative feedback as FUD creates echo chambers that prevent communities from addressing real problems. The best approach is to evaluate each piece of information on its merits. Well-researched criticism with evidence should be taken seriously, even if it challenges your investment thesis. Baseless claims designed to provoke fear can be safely ignored.
      </p>
    </LearnPageLayout>
  );
}
