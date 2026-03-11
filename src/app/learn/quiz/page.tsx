"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  category: string;
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "What is the maximum supply of Bitcoin?",
    options: ["10 million", "21 million", "100 million", "Unlimited"],
    correct: 1,
    explanation: "Bitcoin has a hard cap of 21 million coins. This scarcity is a fundamental part of its design and value proposition.",
    difficulty: "beginner",
    category: "Bitcoin",
  },
  {
    id: 2,
    question: "What does 'DeFi' stand for?",
    options: ["Digital Finance", "Decentralized Finance", "Defined Finance", "Deficit Finance"],
    correct: 1,
    explanation: "DeFi stands for Decentralized Finance — financial services built on blockchain technology without traditional intermediaries like banks.",
    difficulty: "beginner",
    category: "DeFi",
  },
  {
    id: 3,
    question: "What is a 'gas fee' in Ethereum?",
    options: [
      "A fee paid to miners/validators for processing transactions",
      "The cost of electricity to run a node",
      "A subscription fee for using Ethereum",
      "A tax imposed by governments on crypto",
    ],
    correct: 0,
    explanation: "Gas fees are paid to validators for processing and confirming transactions on the Ethereum network. They fluctuate based on network demand.",
    difficulty: "beginner",
    category: "Ethereum",
  },
  {
    id: 4,
    question: "What is 'impermanent loss' in DeFi?",
    options: [
      "Losing your private keys",
      "A temporary drop in the market",
      "The difference in value between holding tokens vs providing liquidity",
      "A hack on a DeFi protocol",
    ],
    correct: 2,
    explanation: "Impermanent loss occurs when the price ratio of tokens in a liquidity pool changes compared to when you deposited them. The loss becomes permanent only if you withdraw at an unfavorable ratio.",
    difficulty: "intermediate",
    category: "DeFi",
  },
  {
    id: 5,
    question: "What consensus mechanism does Ethereum use after The Merge?",
    options: ["Proof of Work", "Proof of Stake", "Delegated Proof of Stake", "Proof of Authority"],
    correct: 1,
    explanation: "After The Merge in September 2022, Ethereum transitioned from Proof of Work (PoW) to Proof of Stake (PoS), reducing energy consumption by ~99.95%.",
    difficulty: "beginner",
    category: "Ethereum",
  },
  {
    id: 6,
    question: "What is a 'rug pull' in crypto?",
    options: [
      "A sudden price increase",
      "When developers abandon a project and take investor funds",
      "A type of trading strategy",
      "A blockchain consensus mechanism",
    ],
    correct: 1,
    explanation: "A rug pull is a type of scam where developers create a token, pump its price, then drain the liquidity pool — leaving investors with worthless tokens.",
    difficulty: "beginner",
    category: "Security",
  },
  {
    id: 7,
    question: "What does TVL stand for in DeFi?",
    options: ["Total Value Locked", "Total Volume Listed", "Token Value Ledger", "Trading Volume Limit"],
    correct: 0,
    explanation: "TVL (Total Value Locked) measures the total value of crypto assets deposited in a DeFi protocol. It's a key metric for evaluating a protocol's adoption and trust.",
    difficulty: "intermediate",
    category: "DeFi",
  },
  {
    id: 8,
    question: "What is MEV (Maximal Extractable Value)?",
    options: [
      "The maximum value a token can reach",
      "Profit validators can make by reordering/including/excluding transactions in a block",
      "The maximum gas a transaction can use",
      "A DeFi lending metric",
    ],
    correct: 1,
    explanation: "MEV refers to the maximum value that can be extracted from block production by reordering, inserting, or censoring transactions within a block. It's a significant concern for Ethereum users.",
    difficulty: "advanced",
    category: "Ethereum",
  },
  {
    id: 9,
    question: "What is a 'flash loan' in DeFi?",
    options: [
      "A very fast bank transfer",
      "An uncollateralized loan that must be borrowed and repaid in a single transaction",
      "A loan with very low interest rates",
      "A loan backed by NFTs",
    ],
    correct: 1,
    explanation: "Flash loans allow users to borrow any amount without collateral, as long as the loan is repaid within the same transaction block. They're used for arbitrage, collateral swaps, and self-liquidation.",
    difficulty: "advanced",
    category: "DeFi",
  },
  {
    id: 10,
    question: "What is 'slippage' in a DEX trade?",
    options: [
      "The transaction fee on a DEX",
      "The difference between expected price and actual execution price",
      "The speed of a transaction",
      "The amount of gas used",
    ],
    correct: 1,
    explanation: "Slippage is the difference between the expected price of a trade and the price at which it actually executes. It's common on DEXs and increases with larger trade sizes relative to pool liquidity.",
    difficulty: "intermediate",
    category: "Trading",
  },
  {
    id: 11,
    question: "What is 'account abstraction' (ERC-4337)?",
    options: [
      "Hiding your wallet address",
      "Turning user wallets into smart contracts with programmable logic",
      "A privacy protocol for Ethereum",
      "A way to create anonymous transactions",
    ],
    correct: 1,
    explanation: "Account abstraction allows user accounts to be smart contracts, enabling features like social recovery, gas sponsorship, batched transactions, and session keys — vastly improving UX.",
    difficulty: "advanced",
    category: "Ethereum",
  },
  {
    id: 12,
    question: "What is a Layer 2 rollup?",
    options: [
      "A secondary blockchain that doesn't connect to Layer 1",
      "A scaling solution that executes transactions off-chain but posts data to Layer 1",
      "A new type of cryptocurrency",
      "A way to combine multiple blockchains",
    ],
    correct: 1,
    explanation: "Layer 2 rollups bundle (roll up) many transactions off-chain and submit compressed proofs or data to the main chain, inheriting its security while dramatically increasing throughput and lowering fees.",
    difficulty: "intermediate",
    category: "Scaling",
  },
  {
    id: 13,
    question: "What is the difference between optimistic and zk-rollups?",
    options: [
      "Optimistic is faster, zk is slower",
      "Optimistic assumes validity and uses fraud proofs; zk uses cryptographic validity proofs",
      "There is no difference",
      "Optimistic runs on Bitcoin, zk runs on Ethereum",
    ],
    correct: 1,
    explanation: "Optimistic rollups assume transactions are valid and allow a challenge period for fraud proofs. ZK-rollups generate cryptographic proofs (validity proofs) that mathematically prove correctness — no challenge period needed.",
    difficulty: "advanced",
    category: "Scaling",
  },
  {
    id: 14,
    question: "What is a seed phrase?",
    options: [
      "A password for a crypto exchange",
      "A set of 12-24 words that can recover your wallet",
      "An encryption key for blockchain",
      "A type of smart contract",
    ],
    correct: 1,
    explanation: "A seed phrase (recovery phrase) is a set of 12 or 24 words that represents your wallet's private key. Anyone with your seed phrase has full control over your funds — never share it.",
    difficulty: "beginner",
    category: "Security",
  },
  {
    id: 15,
    question: "What is 'staking' in crypto?",
    options: [
      "Buying crypto at the highest price",
      "Locking up crypto to help secure a network and earn rewards",
      "Selling crypto quickly for profit",
      "A type of crypto mining",
    ],
    correct: 1,
    explanation: "Staking involves locking cryptocurrency in a Proof of Stake network to help validate transactions. In return, stakers earn rewards — similar to earning interest on a savings account.",
    difficulty: "beginner",
    category: "Staking",
  },
  {
    id: 16,
    question: "What is a 'bridge' in blockchain?",
    options: [
      "A physical connection between servers",
      "A protocol that transfers assets between different blockchains",
      "A type of mining pool",
      "A centralized exchange feature",
    ],
    correct: 1,
    explanation: "Bridges enable the transfer of tokens and data between different blockchains (e.g., Ethereum to Solana). They lock assets on one chain and mint equivalent tokens on another.",
    difficulty: "intermediate",
    category: "Infrastructure",
  },
  {
    id: 17,
    question: "What is 'yield farming'?",
    options: [
      "Mining cryptocurrency with solar power",
      "Providing liquidity or staking tokens across DeFi protocols to maximize returns",
      "Growing a cryptocurrency portfolio by HODLing",
      "A type of ICO investment strategy",
    ],
    correct: 1,
    explanation: "Yield farming involves moving crypto assets across various DeFi protocols to maximize returns through trading fees, governance token rewards, and interest — essentially making your crypto work for you.",
    difficulty: "intermediate",
    category: "DeFi",
  },
  {
    id: 18,
    question: "What is a 'hard fork' in blockchain?",
    options: [
      "A software update that is backward compatible",
      "A permanent divergence from the previous version creating a new blockchain",
      "A temporary network outage",
      "A type of mining algorithm",
    ],
    correct: 1,
    explanation: "A hard fork is a radical change to a blockchain's protocol that makes previously invalid blocks valid (or vice-versa). It creates a permanent divergence — like when Bitcoin Cash forked from Bitcoin.",
    difficulty: "intermediate",
    category: "Blockchain",
  },
  {
    id: 19,
    question: "What is an AMM (Automated Market Maker)?",
    options: [
      "A trading bot that automatically buys and sells",
      "An algorithm that prices assets in liquidity pools using a mathematical formula",
      "A centralized exchange matching engine",
      "An AI that predicts crypto prices",
    ],
    correct: 1,
    explanation: "AMMs use mathematical formulas (like x*y=k) to set prices in liquidity pools, enabling decentralized trading without order books. Uniswap popularized this model.",
    difficulty: "advanced",
    category: "DeFi",
  },
  {
    id: 20,
    question: "What is 'WAGMI' in crypto culture?",
    options: [
      "We Are Going to Make It",
      "Wallet Access Global Market Index",
      "Web3 Automated Governance Management Interface",
      "Wide Area Global Mining Infrastructure",
    ],
    correct: 0,
    explanation: "WAGMI stands for 'We Are Going to Make It' — a popular rallying cry in the crypto community expressing optimism. Its opposite, NGMI (Not Going to Make It), is used for bearish sentiment.",
    difficulty: "beginner",
    category: "Culture",
  },
];

const DIFFICULTY_COLORS = {
  beginner: { bg: "bg-green-500/10", text: "text-green-400", border: "border-green-500/30" },
  intermediate: { bg: "bg-yellow-500/10", text: "text-yellow-400", border: "border-yellow-500/30" },
  advanced: { bg: "bg-red-500/10", text: "text-red-400", border: "border-red-500/30" },
};

type QuizState = "intro" | "playing" | "result";

export default function CryptoQuizPage() {
  const [state, setState] = useState<QuizState>("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [difficulty, setDifficulty] = useState<"all" | "beginner" | "intermediate" | "advanced">("all");
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);

  const startQuiz = useCallback(() => {
    const filtered = difficulty === "all" ? QUESTIONS : QUESTIONS.filter(q => q.difficulty === difficulty);
    const shuffled = [...filtered].sort(() => Math.random() - 0.5).slice(0, 10);
    setQuizQuestions(shuffled);
    setCurrentQ(0);
    setScore(0);
    setSelected(null);
    setShowExplanation(false);
    setAnswers([]);
    setState("playing");
  }, [difficulty]);

  const handleSelect = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    setShowExplanation(true);
    const isCorrect = idx === quizQuestions[currentQ].correct;
    if (isCorrect) setScore(s => s + 1);
    setAnswers(prev => [...prev, idx]);
  };

  const nextQuestion = () => {
    if (currentQ + 1 >= quizQuestions.length) {
      setState("result");
    } else {
      setCurrentQ(c => c + 1);
      setSelected(null);
      setShowExplanation(false);
    }
  };

  const getScoreMessage = () => {
    const pct = (score / quizQuestions.length) * 100;
    if (pct === 100) return { emoji: "🏆", title: "Perfect Score!", subtitle: "You're a true crypto degen master!" };
    if (pct >= 80) return { emoji: "🔥", title: "Impressive!", subtitle: "You really know your crypto stuff." };
    if (pct >= 60) return { emoji: "💪", title: "Solid Knowledge!", subtitle: "You're well on your way to mastery." };
    if (pct >= 40) return { emoji: "📚", title: "Keep Learning!", subtitle: "Check out our guides to level up." };
    return { emoji: "🌱", title: "Just Getting Started", subtitle: "Everyone starts somewhere — explore our Learn section!" };
  };

  return (
    <>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Learn", href: "/learn" },
        { label: "Crypto Quiz" },
      ]} />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        {state === "intro" && (
          <div className="text-center">
            <div className="text-6xl mb-6">🧠</div>
            <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
              Crypto Knowledge Quiz
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] mb-8 max-w-xl mx-auto">
              Test your crypto knowledge with 10 randomized questions. From Bitcoin basics to advanced DeFi — see how much you really know.
            </p>

            <div className="glass p-6 mb-8 inline-block">
              <p className="text-sm text-[var(--color-text-secondary)] mb-3 font-semibold">Choose Difficulty</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {(["all", "beginner", "intermediate", "advanced"] as const).map(d => (
                  <button
                    key={d}
                    onClick={() => setDifficulty(d)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      difficulty === d
                        ? "bg-[var(--color-accent)] text-white"
                        : "glass text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
                    }`}
                  >
                    {d === "all" ? "All Levels" : d.charAt(0).toUpperCase() + d.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="block">
              <button
                onClick={startQuiz}
                className="affiliate-cta px-10 py-4 rounded-xl text-white font-bold text-lg"
              >
                Start Quiz →
              </button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 max-w-md mx-auto">
              <div className="glass p-4 rounded-xl">
                <div className="text-2xl font-bold text-[var(--color-text)]">20</div>
                <div className="text-xs text-[var(--color-text-secondary)]">Questions</div>
              </div>
              <div className="glass p-4 rounded-xl">
                <div className="text-2xl font-bold text-[var(--color-text)]">5</div>
                <div className="text-xs text-[var(--color-text-secondary)]">Categories</div>
              </div>
              <div className="glass p-4 rounded-xl">
                <div className="text-2xl font-bold text-[var(--color-text)]">3</div>
                <div className="text-xs text-[var(--color-text-secondary)]">Difficulty Levels</div>
              </div>
            </div>
          </div>
        )}

        {state === "playing" && quizQuestions.length > 0 && (
          <div>
            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-[var(--color-text-secondary)]">
                  Question {currentQ + 1} of {quizQuestions.length}
                </span>
                <span className="text-sm font-semibold text-[var(--color-accent)]">
                  Score: {score}/{currentQ + (selected !== null ? 1 : 0)}
                </span>
              </div>
              <div className="h-2 rounded-full bg-[var(--glass-bg)] overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[#06b6d4] transition-all duration-500"
                  style={{ width: `${((currentQ + (selected !== null ? 1 : 0)) / quizQuestions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question card */}
            <div className="glass p-8 rounded-2xl mb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                  DIFFICULTY_COLORS[quizQuestions[currentQ].difficulty].bg
                } ${DIFFICULTY_COLORS[quizQuestions[currentQ].difficulty].text} border ${
                  DIFFICULTY_COLORS[quizQuestions[currentQ].difficulty].border
                }`}>
                  {quizQuestions[currentQ].difficulty}
                </span>
                <span className="text-xs text-[var(--color-text-secondary)]">
                  {quizQuestions[currentQ].category}
                </span>
              </div>

              <h2 className="text-xl font-bold text-[var(--color-text)] mb-6">
                {quizQuestions[currentQ].question}
              </h2>

              <div className="space-y-3">
                {quizQuestions[currentQ].options.map((opt, idx) => {
                  let cls = "glass p-4 rounded-xl cursor-pointer transition-all text-left w-full";
                  if (selected !== null) {
                    if (idx === quizQuestions[currentQ].correct) {
                      cls += " border-2 border-green-500 bg-green-500/10";
                    } else if (idx === selected && idx !== quizQuestions[currentQ].correct) {
                      cls += " border-2 border-red-500 bg-red-500/10";
                    } else {
                      cls += " opacity-50";
                    }
                  } else {
                    cls += " hover:bg-[var(--glass-bg)] border-2 border-transparent hover:border-[var(--color-accent)]/40";
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelect(idx)}
                      className={cls}
                      disabled={selected !== null}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold bg-[var(--glass-bg)] text-[var(--color-text-secondary)] flex-shrink-0">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="text-[var(--color-text)]">{opt}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Explanation */}
            {showExplanation && (
              <div className={`p-6 rounded-xl mb-6 ${
                selected === quizQuestions[currentQ].correct
                  ? "bg-green-500/10 border border-green-500/30"
                  : "bg-red-500/10 border border-red-500/30"
              }`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">
                    {selected === quizQuestions[currentQ].correct ? "✅" : "❌"}
                  </span>
                  <span className="font-bold text-[var(--color-text)]">
                    {selected === quizQuestions[currentQ].correct ? "Correct!" : "Incorrect"}
                  </span>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {quizQuestions[currentQ].explanation}
                </p>
              </div>
            )}

            {selected !== null && (
              <button
                onClick={nextQuestion}
                className="affiliate-cta w-full py-3 rounded-xl text-white font-semibold text-lg"
              >
                {currentQ + 1 >= quizQuestions.length ? "See Results" : "Next Question →"}
              </button>
            )}
          </div>
        )}

        {state === "result" && (
          <div className="text-center">
            <div className="text-6xl mb-4">{getScoreMessage().emoji}</div>
            <h1 className="text-4xl font-bold text-[var(--color-text)] mb-2">
              {getScoreMessage().title}
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] mb-6">
              {getScoreMessage().subtitle}
            </p>

            <div className="glass p-8 rounded-2xl mb-8 inline-block">
              <div className="text-5xl font-bold text-[var(--color-accent)] mb-2">
                {score}/{quizQuestions.length}
              </div>
              <div className="text-sm text-[var(--color-text-secondary)]">
                {Math.round((score / quizQuestions.length) * 100)}% correct
              </div>
            </div>

            {/* Answer breakdown */}
            <div className="glass p-6 rounded-2xl mb-8 text-left">
              <h3 className="font-bold text-[var(--color-text)] mb-4">Answer Breakdown</h3>
              <div className="space-y-2">
                {quizQuestions.map((q, i) => (
                  <div key={q.id} className="flex items-center gap-3 text-sm">
                    <span>{answers[i] === q.correct ? "✅" : "❌"}</span>
                    <span className="text-[var(--color-text-secondary)] flex-1 truncate">{q.question}</span>
                    <span className={`text-xs px-2 py-0.5 rounded ${DIFFICULTY_COLORS[q.difficulty].bg} ${DIFFICULTY_COLORS[q.difficulty].text}`}>
                      {q.difficulty}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => { setState("intro"); }}
                className="affiliate-cta px-8 py-3 rounded-xl text-white font-semibold"
              >
                Play Again
              </button>
              <Link
                href="/learn"
                className="glass px-8 py-3 text-[var(--color-text)] font-semibold hover:bg-[var(--glass-bg)] rounded-xl"
              >
                Explore Guides
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
