import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is HODL? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what HODL means, its origin story, and why it became the defining investment philosophy of the crypto community.",
};

export default function HodlPage() {
  return (
    <LearnPageLayout
      title="What Is HODL?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="4 min"
      intro="HODL is crypto slang for holding your cryptocurrency rather than selling, regardless of market conditions. Originating from a misspelled 'hold' in a 2013 Bitcoin forum post, it has been retroactively interpreted as an acronym for 'Hold On for Dear Life.' HODL represents a long-term investment philosophy that rejects short-term trading in favor of conviction-based holding through volatility."
      toc={[
        { id: "definition", title: "What Is HODL?", level: 2 },
        { id: "origin", title: "Origin of HODL", level: 2 },
        { id: "hodl-philosophy", title: "The HODL Philosophy", level: 2 },
        { id: "hodl-vs-trading", title: "HODLing vs Trading", level: 2 },
        { id: "why-it-matters", title: "Why HODL Matters", level: 2 },
      ]}
      faqs={[
        {
          question: "Is HODLing always a good strategy?",
          answer:
            "HODLing works best with fundamentally strong assets. Bitcoin HODLers have been rewarded over long time horizons despite dramatic drawdowns. However, blindly holding altcoins that lose 99% of their value is not a sound strategy. HODLing should be based on research and conviction in an asset's long-term prospects, not stubbornness.",
        },
        {
          question: "What is the difference between HODLing and diamond hands?",
          answer:
            "They are closely related. HODL emphasizes the long-term hold strategy, while diamond hands specifically refers to the ability to resist selling during painful downturns. Diamond hands is the emotional fortitude required to successfully HODL through major market crashes. Both reject panic selling.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Diamond Hands?", href: "/learn/glossary/diamond-hands", category: "Glossary" },
        { title: "What Is DCA?", href: "/learn/glossary/dca", category: "Glossary" },
        { title: "What Is Paper Hands?", href: "/learn/glossary/paper-hands", category: "Glossary" },
        { title: "What Is a Bear Market?", href: "/learn/glossary/bear-market", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is HODL?</h2>
      <p>
        HODL is a term that has transcended its typo origins to become a core philosophy in the crypto community. It means holding your crypto assets for the long term regardless of short-term price movements. HODLers believe that the long-term trajectory of their chosen assets is upward and that selling during downturns only locks in losses and risks missing the eventual recovery.
      </p>

      <h2 id="origin">Origin of HODL</h2>
      <p>
        The term originated on December 18, 2013, when a Bitcoin Talk forum user named GameKyuubi posted a message titled &quot;I AM HODLING&quot; during a sharp Bitcoin price decline. The post was an emotional declaration that he would not sell despite the crash, acknowledging he was a bad trader and that holding was his best strategy. The misspelling became an instant meme and has endured for over a decade.
      </p>

      <h2 id="hodl-philosophy">The HODL Philosophy</h2>
      <p>
        At its core, HODL acknowledges that most individuals are bad market timers. Studies consistently show that retail traders underperform simple buy-and-hold strategies across all asset classes. In crypto, where volatility is extreme, the temptation to sell during 50-80% drawdowns is intense. HODLers commit to a long-term thesis and accept short-term volatility as the price of potential long-term gains.
      </p>

      <h2 id="hodl-vs-trading">HODLing vs Trading</h2>
      <p>
        Active traders attempt to profit from short-term price movements, buying low and selling high. HODLers simply accumulate and hold. Trading requires skill, discipline, and time; most retail traders lose money. HODLing requires conviction, patience, and the ability to stomach large drawdowns. The two strategies can be complementary: many investors HODL a core position while trading a smaller portion.
      </p>

      <h2 id="why-it-matters">Why HODL Matters</h2>
      <p>
        HODL has become more than a meme; it is a cultural touchstone that unites the crypto community around long-term conviction. On-chain data consistently shows that long-term holders outperform short-term traders in Bitcoin. The HODL mentality also reduces selling pressure during downturns, contributing to price support. It represents the belief that crypto is a generational technology, not a short-term trade.
      </p>
    </LearnPageLayout>
  );
}
