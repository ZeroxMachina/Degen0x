"use client";

import { useState } from "react";
import Link from "next/link";

const QUESTIONS = [
  {
    id: 1,
    question: "How often do you check crypto prices?",
    options: [
      { label: "Once a day max", points: 1 },
      { label: "Every few hours", points: 3 },
      { label: "Every 30 minutes", points: 7 },
      { label: "I have a live ticker on my second monitor at all times", points: 10 },
    ],
  },
  {
    id: 2,
    question: "What's the largest % of your net worth you've put in a single altcoin?",
    options: [
      { label: "Under 5%", points: 1 },
      { label: "5–20%", points: 3 },
      { label: "20–50%", points: 7 },
      { label: "Over 50% — we don't talk about this", points: 10 },
    ],
  },
  {
    id: 3,
    question: "Have you ever bought a coin because of a celebrity tweet?",
    options: [
      { label: "Never", points: 1 },
      { label: "Once, to see what the hype was about", points: 4 },
      { label: "A few times — FOMO is real", points: 7 },
      { label: "I basically trade based on X accounts", points: 10 },
    ],
  },
  {
    id: 4,
    question: "How many wallets / exchange accounts do you have?",
    options: [
      { label: "1–2 (keeps it simple)", points: 1 },
      { label: "3–5", points: 4 },
      { label: "6–10", points: 7 },
      { label: "I've lost count, and some I can't find the seeds for", points: 10 },
    ],
  },
  {
    id: 5,
    question: "Have you ever traded while half-asleep or at 3 AM?",
    options: [
      { label: "No, I have discipline", points: 1 },
      { label: "Once, it was a mistake", points: 3 },
      { label: "A few times", points: 6 },
      { label: "3 AM is when the real alpha drops", points: 10 },
    ],
  },
  {
    id: 6,
    question: "Which best describes your leverage trading experience?",
    options: [
      { label: "I don't touch leverage", points: 1 },
      { label: "I've tried 2–5x a couple times", points: 4 },
      { label: "I regularly trade 10–25x", points: 8 },
      { label: "100x liquidations are just 'tuition'", points: 10 },
    ],
  },
  {
    id: 7,
    question: "How do you feel about memecoins?",
    options: [
      { label: "They're garbage, I avoid them", points: 1 },
      { label: "I've bought one or two as a lark", points: 3 },
      { label: "I have a memecoin watchlist and sniper bot", points: 8 },
      { label: "I was in DOGE and SHIB before they mooned", points: 10 },
    ],
  },
  {
    id: 8,
    question: "Have you ever missed a major pump while asleep?",
    options: [
      { label: "Probably, but I don't think about it", points: 1 },
      { label: "Yes, once — it haunts me", points: 4 },
      { label: "Multiple times — I set alarms now", points: 7 },
      { label: "I barely sleep anymore because of this", points: 10 },
    ],
  },
  {
    id: 9,
    question: "Do you hold any projects that are down 80%+ and tell yourself they'll 'come back'?",
    options: [
      { label: "No, I cut losses", points: 1 },
      { label: "One, it was a lesson", points: 3 },
      { label: "Two or three... they're 'long-term holds'", points: 7 },
      { label: "My portfolio is basically a graveyard of hopium", points: 10 },
    ],
  },
  {
    id: 10,
    question: "Have you ever tried to explain DeFi to a non-crypto person?",
    options: [
      { label: "Never, I keep crypto to myself", points: 1 },
      { label: "Once, they fell asleep", points: 3 },
      { label: "A few times — I convert the curious", points: 6 },
      { label: "I have a slide deck ready for Thanksgiving", points: 10 },
    ],
  },
];

const DEGEN_LEVELS = [
  {
    range: [0, 25],
    title: "Cautious Crypto Curious",
    emoji: "🐣",
    color: "#22c55e",
    description:
      "You dip your toes into crypto but keep your sanity intact. You probably sleep 8 hours and have a diversified portfolio. NPC investors fear you; your financial advisor loves you.",
    badge: "Normie with Potential",
    cta: "Ready to go deeper?",
    ctaLink: "/learn/crypto-for-beginners",
  },
  {
    range: [26, 45],
    title: "Casual Degen",
    emoji: "🦊",
    color: "#3b82f6",
    description:
      "You're in the game but still remember what sleep is. You've made some spicy plays, learned from a few L's, and probably understand what a seed phrase is. You're on the path.",
    badge: "Mid-Curve Member",
    cta: "Level up with DeFi",
    ctaLink: "/defi-lending/best",
  },
  {
    range: [46, 65],
    title: "Seasoned Degen",
    emoji: "🦝",
    color: "#f59e0b",
    description:
      "You've seen multiple cycles, survived at least one 80% drawdown, and have strong opinions about gas fees. You probably have a secret Telegram full of alpha channels. Respect.",
    badge: "Cycle Survivor",
    cta: "Optimize your stack",
    ctaLink: "/tools/portfolio-analytics",
  },
  {
    range: [66, 82],
    title: "Certified Degen",
    emoji: "🦍",
    color: "#f0883e",
    description:
      "You breathe crypto. You've been liquidated at least twice and called it 'the market's lesson'. Your portfolio is 60% alts and you have a separate 'degen wallet' for 'experiments'. Incredible.",
    badge: "Diamond Hands Activated",
    cta: "Manage your risk",
    ctaLink: "/tools/risk-analyzer",
  },
  {
    range: [83, 100],
    title: "Ultra Degen Supreme",
    emoji: "🐉",
    color: "#f85149",
    description:
      "You ARE the market. You've launched a token, rugged yourself by accident, bought LUNA near the top, and still believe. Doctors describe your portfolio as 'clinically inadvisable'. You're a legend.",
    badge: "Certified Degen Lord",
    cta: "At least do your taxes",
    ctaLink: "/tools/tax-calculator",
  },
];

export default function DegenScorePage() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const totalAnswered = Object.keys(answers).length;
  const totalQuestions = QUESTIONS.length;
  const score = Object.values(answers).reduce((a, b) => a + b, 0);
  const maxScore = QUESTIONS.length * 10;
  const scorePercent = Math.round((score / maxScore) * 100);

  const level = DEGEN_LEVELS.find(
    (l) => scorePercent >= l.range[0] && scorePercent <= l.range[1]
  ) ?? DEGEN_LEVELS[0];

  const handleAnswer = (questionId: number, points: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: points }));
  };

  const handleSubmit = () => {
    if (totalAnswered < totalQuestions) return;
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--color-bg)" }}>
      {/* Header */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, color-mix(in srgb, #f85149 6%, transparent), color-mix(in srgb, #f0883e 5%, transparent))",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div className="mx-auto max-w-2xl px-4 sm:px-6 py-12 text-center">
          <div className="text-5xl mb-3">🎰</div>
          <h1
            className="text-3xl md:text-4xl font-extrabold mb-3"
            style={{ color: "var(--color-text)" }}
          >
            What's Your Degen Score?
          </h1>
          <p className="text-base" style={{ color: "var(--color-text-secondary)" }}>
            10 brutally honest questions to find out how deep in the crypto rabbit hole you truly are.
          </p>
          {!submitted && (
            <div
              className="mt-4 text-sm font-semibold"
              style={{ color: "var(--color-primary)" }}
            >
              {totalAnswered} / {totalQuestions} answered
            </div>
          )}
        </div>
      </section>

      <div className="mx-auto max-w-2xl px-4 sm:px-6 py-8">
        {/* Result card */}
        {submitted && (
          <div
            className="glass rounded-2xl p-8 text-center mb-8"
            style={{ borderTop: `4px solid ${level.color}` }}
          >
            <div className="text-6xl mb-3">{level.emoji}</div>
            <div
              className="inline-block text-xs font-extrabold px-3 py-1 rounded-full mb-3"
              style={{
                background: level.color + "20",
                color: level.color,
                border: `1px solid ${level.color}40`,
              }}
            >
              {level.badge}
            </div>
            <h2
              className="text-2xl font-extrabold mb-2"
              style={{ color: "var(--color-text)" }}
            >
              {level.title}
            </h2>
            <div
              className="text-5xl font-black mb-1"
              style={{ color: level.color }}
            >
              {scorePercent}
            </div>
            <div
              className="text-sm mb-4"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Degen Score (out of 100)
            </div>

            {/* Score bar */}
            <div
              className="w-full rounded-full h-3 mb-6"
              style={{ background: "var(--color-border)" }}
            >
              <div
                className="h-3 rounded-full transition-all duration-700"
                style={{
                  width: `${scorePercent}%`,
                  background: `linear-gradient(90deg, #22c55e, ${level.color})`,
                }}
              />
            </div>

            <p
              className="text-sm mb-6 text-left"
              style={{
                color: "var(--color-text-secondary)",
                lineHeight: "1.7",
              }}
            >
              {level.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={level.ctaLink}
                className="affiliate-cta px-6 py-2.5 rounded-xl text-white font-semibold text-sm"
              >
                {level.cta} →
              </Link>
              <button
                onClick={handleReset}
                className="glass px-6 py-2.5 rounded-xl font-semibold text-sm"
                style={{ color: "var(--color-text)" }}
              >
                Retake Quiz
              </button>
            </div>

            <p
              className="mt-6 text-xs"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Share your score with fellow degens →{" "}
              <span
                className="cursor-pointer"
                style={{ color: "var(--color-primary)" }}
              >
                Copy link
              </span>
            </p>
          </div>
        )}

        {/* Questions */}
        {!submitted && (
          <div className="space-y-6">
            {QUESTIONS.map((q, qi) => (
              <div
                key={q.id}
                className="glass rounded-xl p-5"
                style={{
                  borderLeft: answers[q.id]
                    ? `3px solid var(--color-primary)`
                    : "3px solid transparent",
                }}
              >
                <h3
                  className="text-sm font-bold mb-4"
                  style={{ color: "var(--color-text)" }}
                >
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full mr-2"
                    style={{
                      background: "var(--glass-bg)",
                      color: "var(--color-text-secondary)",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    {qi + 1}
                  </span>
                  {q.question}
                </h3>
                <div className="space-y-2">
                  {q.options.map((o) => (
                    <button
                      key={o.label}
                      onClick={() => handleAnswer(q.id, o.points)}
                      className="w-full text-left px-4 py-3 rounded-lg text-sm transition-all"
                      style={{
                        background:
                          answers[q.id] === o.points
                            ? "color-mix(in srgb, var(--color-primary) 15%, transparent)"
                            : "var(--glass-bg)",
                        border:
                          answers[q.id] === o.points
                            ? "1px solid color-mix(in srgb, var(--color-primary) 50%, transparent)"
                            : "1px solid var(--color-border)",
                        color: "var(--color-text)",
                      }}
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <button
              onClick={handleSubmit}
              disabled={totalAnswered < totalQuestions}
              className="w-full py-4 rounded-xl font-extrabold text-base transition-all"
              style={{
                background:
                  totalAnswered === totalQuestions
                    ? "linear-gradient(135deg, #6366f1, #06b6d4)"
                    : "var(--color-border)",
                color:
                  totalAnswered === totalQuestions
                    ? "white"
                    : "var(--color-text-secondary)",
                cursor:
                  totalAnswered === totalQuestions ? "pointer" : "not-allowed",
              }}
            >
              {totalAnswered < totalQuestions
                ? `Answer all questions (${totalAnswered}/${totalQuestions})`
                : "Reveal My Degen Score 🎰"}
            </button>
          </div>
        )}

        {/* Footer note */}
        <p
          className="text-center text-xs mt-8"
          style={{ color: "var(--color-text-secondary)" }}
        >
          This quiz is for entertainment only. Please don't use it to make financial decisions.{" "}
          <Link href="/methodology" style={{ color: "var(--color-primary)" }}>
            See our methodology
          </Link>{" "}
          for actual research.
        </p>
      </div>
    </div>
  );
}
