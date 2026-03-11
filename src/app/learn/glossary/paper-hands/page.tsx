import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Paper Hands? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what paper hands means in crypto, how it differs from diamond hands, and the psychology behind selling during dips.",
};

export default function PaperHandsPage() {
  return (
    <LearnPageLayout
      title="What Is Paper Hands?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="4 min"
      intro="Paper hands is crypto slang for someone who sells their assets quickly at the first sign of a price decline or market uncertainty. The term implies weakness or a lack of conviction — paper is fragile and tears easily, unlike diamond hands who hold through volatility. While used as a taunt in crypto culture, selling during downturns can sometimes be the rational decision depending on circumstances."
      toc={[
        { id: "definition", title: "What Is Paper Hands?", level: 2 },
        { id: "origin", title: "Origin and Usage", level: 2 },
        { id: "psychology", title: "Psychology of Paper Hands", level: 2 },
        { id: "when-selling-smart", title: "When Selling Is Smart", level: 2 },
        { id: "why-it-matters", title: "Why It Matters", level: 2 },
      ]}
      faqs={[
        {
          question: "Is having paper hands always bad?",
          answer:
            "No. While the term is used negatively, selling can be the right decision. If an asset's fundamentals deteriorate, if you need the funds, or if the position exceeds your risk tolerance, selling is rational risk management. The key is whether the decision is driven by panic or by thoughtful analysis. Not every sale during a dip is paper hands — sometimes it is wisdom.",
        },
        {
          question: "How do I know if I am being paper-handed or making a smart exit?",
          answer:
            "Ask yourself: did your investment thesis change, or just the price? If you still believe in the fundamentals and are selling purely because of fear, that is paper hands. If new information (a security breach, regulatory action, or fundamental flaw) changed your analysis, selling is rational. Having a written plan before emotions kick in helps distinguish the two.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Diamond Hands?", href: "/learn/glossary/diamond-hands", category: "Glossary" },
        { title: "What Is FUD?", href: "/learn/glossary/fud", category: "Glossary" },
        { title: "What Is HODL?", href: "/learn/glossary/hodl", category: "Glossary" },
        { title: "What Is FOMO?", href: "/learn/glossary/fomo", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is Paper Hands?</h2>
      <p>
        Paper hands describes investors who sell their holdings at the first sign of trouble, typically during price drops. The metaphor suggests their grip on their investments is as weak as paper. In crypto communities, calling someone &quot;paper-handed&quot; is an insult implying they lack the conviction to hold through volatility and will never capture the large gains that come to those who hold through difficult periods.
      </p>

      <h2 id="origin">Origin and Usage</h2>
      <p>
        The paper hands and diamond hands dichotomy gained widespread popularity during the GameStop and crypto trading frenzies of 2021. The terms became rallying cries on Reddit, Twitter, and Discord. Paper hands is often represented by a paper emoji and is used to shame sellers, creating social pressure to hold. This peer pressure can be both motivating and dangerous depending on the circumstances.
      </p>

      <h2 id="psychology">Psychology of Paper Hands</h2>
      <p>
        Panic selling is driven by loss aversion, a well-documented cognitive bias where the pain of losses is felt roughly twice as strongly as the pleasure of equivalent gains. When portfolio values drop rapidly, the emotional urge to stop the pain by selling becomes overwhelming. Social media amplifies fear during downturns, making it harder to maintain composure. This emotional reaction is what paper hands describes.
      </p>

      <h2 id="when-selling-smart">When Selling Is Smart</h2>
      <p>
        Not all selling is paper-handed. Risk management, portfolio rebalancing, taking profits at predetermined targets, and exiting positions when fundamentals change are all legitimate reasons to sell. The mistake is selling purely out of fear with no analytical basis. The real skill is distinguishing between emotional panic selling and rational risk management. Having a plan before volatility hits is the best defense.
      </p>

      <h2 id="why-it-matters">Why It Matters</h2>
      <p>
        The paper hands concept highlights the psychological challenges of investing in volatile assets. Crypto markets regularly see 30-50% drawdowns that would be unprecedented in traditional markets. Understanding your own risk tolerance and having strategies to manage emotional responses (position sizing, stop-losses, automated strategies) can prevent costly panic selling while still allowing for rational risk management.
      </p>
    </LearnPageLayout>
  );
}
