import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Descending Triangle Pattern in Crypto (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn what a descending triangle is, how to identify this bearish chart pattern, volume dynamics, breakdown confirmation, and crypto trading strategies.",
};

export default function DescendingTrianglePage() {
  return (
    <LearnPageLayout
      title="Descending Triangle"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="6 min read"
      intro="A descending triangle is a bearish chart pattern characterized by a flat lower support line and a descending upper trendline connecting lower highs. The pattern signals that sellers are becoming increasingly aggressive, pushing price lower with each rally while buyers defend a specific support level. Descending triangles typically resolve with a downside breakdown and are commonly found during crypto downtrends as continuation patterns."
      toc={[
        { id: "what-is-descending", title: "What Is a Descending Triangle?", level: 2 },
        { id: "identifying", title: "Identifying the Pattern", level: 2 },
        { id: "breakdown-signals", title: "Breakdown Signals", level: 2 },
        { id: "trading", title: "Trading Descending Triangles", level: 2 },
      ]}
      faqs={[
        { question: "Do descending triangles always break down?", answer: "No. While descending triangles break down approximately 65-70% of the time, upside breakouts do occur and can be very powerful because they catch bearish traders off guard. Upside breakouts from descending triangles often occur when the broader market sentiment shifts or unexpected bullish news emerges." },
        { question: "How long do descending triangles take to form?", answer: "Significant descending triangles typically take 3-12 weeks to form on daily charts. Patterns that form too quickly (under a week) are less reliable. The triangle should have at least two touches on each trendline. Patterns approaching the apex without breaking tend to produce weaker moves." },
      ]}
      relatedArticles={[
        { title: "Ascending Triangle", href: "/learn/glossary/ascending-triangle", category: "Glossary" },
        { title: "Support Level", href: "/learn/glossary/support", category: "Glossary" },
        { title: "Wedge Pattern", href: "/learn/glossary/wedge", category: "Glossary" },
      ]}
    >
      <section id="what-is-descending">
        <h2>What Is a Descending Triangle?</h2>
        <p>A descending triangle forms when price repeatedly tests a horizontal support level while making lower highs on each rally. The flat support line shows buyers defending a specific price, while the descending upper trendline indicates sellers are willing to accept progressively lower prices. This compression between the two lines builds pressure that typically resolves to the downside as seller aggression eventually overwhelms buyer defense at the support level.</p>
      </section>

      <section id="identifying">
        <h2>Identifying the Pattern</h2>
        <p>The pattern requires at least two touches of the horizontal support and two lower highs forming the descending resistance line. It should form within an existing downtrend for the highest reliability. The price action should oscillate between the two lines, compressing as the pattern matures. Look for the pattern on daily or weekly charts for the most significant signals. Descending triangles that form after extended declines may sometimes reverse upward as selling exhaustion sets in, so context matters.</p>
      </section>

      <section id="breakdown-signals">
        <h2>Breakdown Signals</h2>
        <p>Volume should decline during the triangle formation and expand significantly on the breakdown below support. A close below the support line on elevated volume confirms the pattern. False breakdowns where price briefly pierces support and quickly recovers are common in crypto, so waiting for a candle close below support reduces the risk of being faked out. RSI and MACD confirming bearish momentum during the breakdown add confidence to the signal.</p>
      </section>

      <section id="trading">
        <h2>Trading Descending Triangles</h2>
        <p>Enter short on a confirmed close below support with increasing volume, placing stops above the most recent lower high. The measured move target equals the triangle height projected downward from the breakdown point. Conservative traders wait for a retest of broken support as resistance before entering. If the pattern breaks upward through the descending trendline on volume, it invalidates the bearish setup and may represent a bullish opportunity. Always have a clear exit plan before entering the trade.</p>
      </section>
    </LearnPageLayout>
  );
}
