import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Cup and Handle Pattern in Crypto (${CURRENT_YEAR}) | degen0x`,
  description: "Learn what the cup and handle pattern is, how to identify this bullish continuation pattern, volume confirmation, and trading strategies for crypto markets.",
};

export default function CupAndHandlePage() {
  return (
    <LearnPageLayout
      title="Cup and Handle Pattern"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="6 min read"
      intro="The cup and handle is a bullish continuation pattern that resembles a tea cup on the chart. It consists of a rounded bottom (the cup) followed by a small consolidation (the handle) before a breakout to new highs. Popularized by William O'Neil, this pattern indicates a period of consolidation and accumulation before the prior uptrend resumes with renewed momentum."
      toc={[
        { id: "what-is-cup-handle", title: "what-is-cup-handle", level: 2 },
        { id: "what-is-cup-and-handle", title: "What Is Cup and Handle?", level: 2 },
        { id: "cup-formation", title: "cup-formation", level: 2 },
        { id: "the-cup-formation", title: "The Cup Formation", level: 2 },
        { id: "handle-formation", title: "handle-formation", level: 2 },
        { id: "the-handle-formation", title: "The Handle Formation", level: 2 },
        { id: "trading", title: "trading", level: 2 },
        { id: "trading-the-breakout", title: "Trading the Breakout", level: 2 }
      ]}
      faqs={[
        { question: "How long does a cup and handle take to form?", answer: "In traditional markets, the pattern typically takes 1-6 months to form. In crypto, the accelerated market cycles can compress this to weeks or a few months. The cup should have a rounded bottom rather than a sharp V-shape, and the handle should be proportionally smaller, lasting about one-third to one-quarter of the cup duration." },
        { question: "What is the success rate of cup and handle patterns?", answer: "When properly identified and confirmed with volume, cup and handle patterns have a success rate of approximately 65-70% for reaching their measured move targets. The pattern is more reliable when it forms after a strong prior uptrend and when the handle does not retrace more than 50% of the cup depth." },
      ]}
      relatedArticles={[
        { title: "Double Bottom", href: "/learn/glossary/double-bottom", category: "Glossary" },
        { title: "Ascending Triangle", href: "/learn/glossary/ascending-triangle", category: "Glossary" },
        { title: "Volume", href: "/learn/glossary/volume", category: "Glossary" },
      ]}
    >
      <section id="what-is-cup-handle">
        <h2>What Is Cup and Handle?</h2>
        <p>The cup and handle pattern forms when an asset in an uptrend undergoes a rounded correction (the cup) followed by a smaller consolidation (the handle) before breaking out above resistance. The pattern signals that sellers have been gradually absorbed during the cup formation and the handle represents final consolidation before buyers take control. It is classified as a continuation pattern because it typically appears mid-trend and resolves in the direction of the prior uptrend.</p>
      </section>

      <section id="cup-formation">
        <h2>The Cup Formation</h2>
        <p>The cup should have a smooth, rounded bottom rather than a sharp V-shape, as the rounded bottom indicates gradual accumulation and a healthy base-building process. The depth of the cup typically retraces 30-50% of the prior advance. Both sides of the cup should be roughly symmetrical, with the right side rising to approximately the same level as the left side. Volume generally declines during the left side of the cup and increases during the right side as the asset recovers and buying interest returns.</p>
      </section>

      <section id="handle-formation">
        <h2>The Handle Formation</h2>
        <p>The handle is a small pullback or consolidation that forms near the top of the cup, typically retracing 10-25% of the cup depth. It represents final shakeout of weak holders before the breakout. The handle should drift downward slightly on declining volume, which shows that selling pressure is diminishing. Handles that retrace more than 50% of the cup depth weaken the pattern. The handle usually takes one to four weeks to form and resolves with a breakout above the cup rim resistance level on expanding volume.</p>
      </section>

      <section id="trading">
        <h2>Trading the Breakout</h2>
        <p>Enter long when price breaks above the cup rim (the resistance level connecting both sides of the cup) on above-average volume. Place stop-losses below the handle low. The measured move target is the depth of the cup added to the breakout point. Volume expansion on the breakout is critical for confirmation. In crypto, cup and handle patterns on weekly charts can precede major rallies. Failed breakouts (where price falls back below the handle) invalidate the pattern and suggest reducing exposure.</p>
      </section>
    </LearnPageLayout>
  );
}
