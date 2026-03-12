"use client";
import { useState, useCallback } from "react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  difficulty: "beginner" | "intermediate" | "advanced";
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "What consensus mechanism does Bitcoin use?",
    options: ["Proof of Stake", "Proof of Work", "Delegated Proof of Stake", "Proof of Authority"],
    correct: 1,
    explanation: "Bitcoin uses Proof of Work (PoW), where miners compete to solve complex mathematical puzzles to validate transactions and create new blocks.",
    difficulty: "beginner",
  },
  {
    id: 2,
    question: "What is 'impermanent loss' in DeFi?",
    options: [
      "Losing your private keys",
      "A temporary drop in token price",
      "Value difference between holding vs providing liquidity",
      "Gas fees exceeding trade profits",
    ],
    correct: 2,
    explanation: "Impermanent loss occurs when the price ratio of tokens in a liquidity pool changes compared to when you deposited them, potentially reducing the value of your position versus simply holding.",
    difficulty: "intermediate",
  },
  {
    id: 3,
    question: "What does TVL stand for in DeFi?",
    options: ["Total Value Locked", "Token Verification Layer", "Transaction Validation Limit", "Time-Value Leverage"],
    correct: 0,
    explanation: "TVL (Total Value Locked) measures the total amount of crypto assets deposited in a DeFi protocol. It's a key metric for gauging a protocol's adoption and trust.",
    difficulty: "beginner",
  },
  {
    id: 4,
    question: "What is MEV in Ethereum?",
    options: [
      "Maximum Ether Value",
      "Miner/Maximal Extractable Value",
      "Multi-chain EVM Validator",
      "Minimum Entry Verification",
    ],
    correct: 1,
    explanation: "MEV (Maximal Extractable Value) refers to the profit that block producers can capture by reordering, including, or excluding transactions within the blocks they produce.",
    difficulty: "advanced",
  },
  {
    id: 5,
    question: "What is a 'rug pull' in crypto?",
    options: [
      "A sharp price increase",
      "A type of mining technique",
      "When developers abandon a project and take investors' funds",
      "A method of staking tokens",
    ],
    correct: 2,
    explanation: "A rug pull is a type of exit scam where project developers suddenly withdraw all liquidity or funds, leaving investors with worthless tokens.",
    difficulty: "beginner",
  },
  {
    id: 6,
    question: "What is the maximum supply of Bitcoin?",
    options: ["100 million", "21 million", "18.5 million", "Unlimited"],
    correct: 1,
    explanation: "Bitcoin has a hard cap of 21 million coins. This fixed supply is encoded in the protocol and makes Bitcoin deflationary by design.",
    difficulty: "beginner",
  },
  {
    id: 7,
    question: "What is account abstraction (ERC-4337)?",
    options: [
      "Removing accounts from the blockchain",
      "Making smart contracts act as user wallets",
      "Abstract art NFTs",
      "Hiding transaction details",
    ],
    correct: 1,
    explanation: "Account abstraction (ERC-4337) enables smart contract wallets to act as primary accounts, allowing features like social recovery, gas sponsorship, and batched transactions.",
    difficulty: "advanced",
  },
  {
    id: 8,
    question: "What does 'HODL' mean in crypto culture?",
    options: [
      "Hold On for Dear Life",
      "High-Opportunity Decentralized Leverage",
      "A misspelling of 'hold' that became a meme",
      "Both A and C",
    ],
    correct: 3,
    explanation: "HODL originated as a typo for 'hold' in a 2013 Bitcoin forum post and has since been backronymed to 'Hold On for Dear Life.' It represents the strategy of holding through volatility.",
    difficulty: "beginner",
  },
  {
    id: 9,
    question: "What is a zero-knowledge proof?",
    options: [
      "A proof that requires zero computation",
      "A cryptographic method to prove something without revealing the underlying data",
      "A blockchain with zero transaction fees",
      "A smart contract with no bugs",
    ],
    correct: 1,
    explanation: "Zero-knowledge proofs allow one party to prove to another that a statement is true without revealing any additional information beyond the validity of the statement itself.",
    difficulty: "advanced",
  },
  {
    id: 10,
    question: "What is the 'blockchain trilemma'?",
    options: [
      "Speed, Cost, Privacy",
      "Security, Decentralization, Scalability",
      "Liquidity, Volume, Volatility",
      "Mining, Staking, Governance",
    ],
    correct: 1,
    explanation: "The blockchain trilemma, coined by Vitalik Buterin, states that blockchains can only optimize for two of three properties: security, decentralization, and scalability.",
    difficulty: "intermediate",
  },
];

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function CryptoQuiz() {
  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [finished, setFinished] = useState(false);

  const QUIZ_SIZE = 5;

  const startQuiz = useCallback(() => {
    setQuestions(shuffleArray(QUESTIONS).slice(0, QUIZ_SIZE));
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setShowExplanation(false);
    setFinished(false);
    setStarted(true);
  }, []);

  const handleSelect = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    setShowExplanation(true);
    if (idx === questions[current].correct) {
      setScore((s) => s + 1);
    }
  };

  const nextQuestion = () => {
    if (current + 1 >= QUIZ_SIZE) {
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setShowExplanation(false);
    }
  };

  const getGrade = () => {
    const pct = (score / QUIZ_SIZE) * 100;
    if (pct >= 80) return { label: "Crypto Expert", emoji: "🏆", color: "text-yellow-400" };
    if (pct >= 60) return { label: "Solid Trader", emoji: "📈", color: "text-green-400" };
    if (pct >= 40) return { label: "Getting There", emoji: "📚", color: "text-blue-400" };
    return { label: "Crypto Newbie", emoji: "🌱", color: "text-purple-400" };
  };

  const difficultyColor = (d: string) => {
    if (d === "beginner") return "bg-green-500/20 text-green-400 border-green-500/30";
    if (d === "intermediate") return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
    return "bg-red-500/20 text-red-400 border-red-500/30";
  };

  if (!started) {
    return (
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="glass p-8 md:p-12 text-center max-w-2xl mx-auto">
          <div className="text-5xl mb-4">🧠</div>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-3">
            Test Your Crypto Knowledge
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-6">
            {QUIZ_SIZE} questions covering DeFi, blockchain, trading, and more.
            How well do you really know crypto?
          </p>
          <button
            onClick={startQuiz}
            className="affiliate-cta px-8 py-3 rounded-xl text-white font-semibold text-lg"
          >
            Start Quiz
          </button>
        </div>
      </section>
    );
  }

  if (finished) {
    const grade = getGrade();
    return (
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="glass p-8 md:p-12 text-center max-w-2xl mx-auto">
          <div className="text-6xl mb-4">{grade.emoji}</div>
          <h2 className={`text-3xl font-bold mb-2 ${grade.color}`}>{grade.label}</h2>
          <p className="text-[var(--color-text)] text-xl mb-1">
            You scored <span className="font-bold">{score}</span> out of <span className="font-bold">{QUIZ_SIZE}</span>
          </p>
          <p className="text-[var(--color-text-secondary)] mb-8">
            {score === QUIZ_SIZE
              ? "Perfect score! You really know your stuff."
              : score >= 3
              ? "Great job! Keep learning to master the crypto world."
              : "Keep exploring — check out our Learn section to level up!"}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={startQuiz}
              className="affiliate-cta px-6 py-2.5 rounded-xl text-white font-semibold"
            >
              Play Again
            </button>
            <a
              href="/learn"
              className="glass px-6 py-2.5 text-[var(--color-text)] font-semibold hover:bg-[var(--glass-bg)] rounded-xl"
            >
              Explore Learn Hub
            </a>
          </div>
        </div>
      </section>
    );
  }

  const q = questions[current];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="glass p-6 md:p-10 max-w-2xl mx-auto">
        {/* Progress bar */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm text-[var(--color-text-secondary)]">
            Question {current + 1} of {QUIZ_SIZE}
          </span>
          <span className={`text-xs px-2 py-0.5 rounded-full border ${difficultyColor(q.difficulty)}`}>
            {q.difficulty}
          </span>
        </div>
        <div className="w-full h-1.5 bg-[var(--glass-bg)] rounded-full mb-8">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full transition-all duration-500"
            style={{ width: `${((current + 1) / QUIZ_SIZE) * 100}%` }}
          />
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text)] mb-6">{q.question}</h3>

        <div className="space-y-3 mb-6">
          {q.options.map((opt, idx) => {
            let btnClass = "w-full text-left p-4 rounded-xl border transition-all duration-300 ";
            if (selected === null) {
              btnClass += "glass border-[var(--glass-border)] hover:border-indigo-400 hover:bg-[var(--glass-bg-hover)] cursor-pointer";
            } else if (idx === q.correct) {
              btnClass += "bg-green-500/15 border-green-500/40 text-green-300";
            } else if (idx === selected) {
              btnClass += "bg-red-500/15 border-red-500/40 text-red-300";
            } else {
              btnClass += "glass border-[var(--glass-border)] opacity-50";
            }

            return (
              <button key={idx} onClick={() => handleSelect(idx)} className={btnClass} disabled={selected !== null}>
                <span className="text-sm font-medium text-[var(--color-text-secondary)] mr-2">
                  {String.fromCharCode(65 + idx)}.
                </span>
                <span className="text-[var(--color-text)]">{opt}</span>
              </button>
            );
          })}
        </div>

        {showExplanation && (
          <div className="glass p-4 rounded-xl mb-6 border border-indigo-500/20">
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              <span className="font-semibold text-[var(--color-text)]">Explanation: </span>
              {q.explanation}
            </p>
          </div>
        )}

        {selected !== null && (
          <button
            onClick={nextQuestion}
            className="affiliate-cta px-6 py-2.5 rounded-xl text-white font-semibold w-full"
          >
            {current + 1 >= QUIZ_SIZE ? "See Results" : "Next Question"}
          </button>
        )}
      </div>
    </section>
  );
}
