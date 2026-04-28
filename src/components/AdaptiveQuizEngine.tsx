"use client";
import { useState, useEffect, useCallback, useRef } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Difficulty = "novice" | "explorer" | "degen" | "chad" | "god";
type Category = "bitcoin" | "ethereum" | "defi" | "nft" | "layer2" | "dao" | "security" | "advanced";

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  difficulty: Difficulty;
  category: Category;
  xpReward: number;
  timeLimit: number; // seconds
  hint?: string;
}

interface UserStats {
  xp: number;
  level: Difficulty;
  streakCount: number;
  totalAnswered: number;
  correctAnswered: number;
  categoryMastery: Record<Category, number>; // 0-100 mastery per category
}

interface SessionResult {
  questionId: number;
  correct: boolean;
  timeSpent: number;
  difficulty: Difficulty;
}

// ─── XP → Level mapping ───────────────────────────────────────────────────────

const LEVEL_THRESHOLDS: Record<Difficulty, { min: number; label: string; color: string; emoji: string }> = {
  novice:   { min: 0,    label: "Novice",   color: "#94a3b8", emoji: "🌱" },
  explorer: { min: 500,  label: "Explorer", color: "#60a5fa", emoji: "🔭" },
  degen:    { min: 1500, label: "Degen",    color: "#a78bfa", emoji: "🦊" },
  chad:     { min: 4000, label: "Chad",     color: "#f59e0b", emoji: "⚡" },
  god:      { min: 8000, label: "Chain God",color: "#ef4444", emoji: "🔥" },
};

function xpToLevel(xp: number): Difficulty {
  if (xp >= 8000) return "god";
  if (xp >= 4000) return "chad";
  if (xp >= 1500) return "degen";
  if (xp >= 500)  return "explorer";
  return "novice";
}

// ─── Question Bank ─────────────────────────────────────────────────────────────

const QUESTION_BANK: Question[] = [
  // NOVICE ──────────────────────────────────────────────────────────────────────
  {
    id: 1, difficulty: "novice", category: "bitcoin", xpReward: 10, timeLimit: 30,
    question: "What is Bitcoin's maximum supply?",
    options: ["100 million BTC", "21 million BTC", "1 billion BTC", "Unlimited"],
    correct: 1,
    explanation: "Bitcoin has a hard cap of 21 million coins, enforced by its code. This scarcity is a core part of Bitcoin's value proposition as 'digital gold'.",
    hint: "Think of a number between 20 and 25 million.",
  },
  {
    id: 2, difficulty: "novice", category: "ethereum", xpReward: 10, timeLimit: 30,
    question: "What do you need to interact with most Ethereum dApps?",
    options: ["A credit card", "A crypto wallet", "A bank account", "An NFT"],
    correct: 1,
    explanation: "A crypto wallet like MetaMask lets you sign transactions and interact with dApps on Ethereum and other EVM-compatible chains.",
    hint: "It holds your private keys and lets you sign transactions.",
  },
  {
    id: 3, difficulty: "novice", category: "defi", xpReward: 10, timeLimit: 30,
    question: "What does 'HODL' mean in crypto?",
    options: ["Hold On for Dear Life", "A typo for 'hold' that became a meme", "High-Order Decentralized Ledger", "Both A and B"],
    correct: 3,
    explanation: "HODL originated from a 2013 BitcoinTalk typo of 'hold' and evolved into the backronym 'Hold On for Dear Life'. It means refusing to sell during volatile markets.",
    hint: "It's actually both things.",
  },
  {
    id: 4, difficulty: "novice", category: "security", xpReward: 10, timeLimit: 30,
    question: "What should you NEVER share with anyone?",
    options: ["Your wallet address", "Your seed phrase / private key", "Your ENS name", "Your transaction hash"],
    correct: 1,
    explanation: "Your seed phrase gives anyone complete access to your wallet. Wallet addresses are public — sharing them is fine. But NEVER share seed phrases or private keys, even with 'support'.",
  },
  {
    id: 5, difficulty: "novice", category: "bitcoin", xpReward: 10, timeLimit: 30,
    question: "What consensus mechanism does Bitcoin use?",
    options: ["Proof of Stake", "Proof of Work", "Delegated Proof of Stake", "Proof of Authority"],
    correct: 1,
    explanation: "Bitcoin uses Proof of Work (PoW), where miners compete solving mathematical puzzles. Ethereum switched to Proof of Stake in 2022's 'Merge'.",
  },

  // EXPLORER ────────────────────────────────────────────────────────────────────
  {
    id: 10, difficulty: "explorer", category: "defi", xpReward: 25, timeLimit: 25,
    question: "What is 'impermanent loss' in DeFi liquidity pools?",
    options: [
      "Losing your private keys permanently",
      "A temporary drop in token price",
      "Value difference between holding vs providing liquidity when prices diverge",
      "Gas fees exceeding your trade profits",
    ],
    correct: 2,
    explanation: "Impermanent loss occurs when the price ratio of tokens in an AMM pool changes vs. when you deposited. If you'd held instead of providing liquidity, you'd have more. It's called 'impermanent' because it resolves if prices return to original levels.",
    hint: "It compares holding vs. providing liquidity when prices move.",
  },
  {
    id: 11, difficulty: "explorer", category: "ethereum", xpReward: 25, timeLimit: 25,
    question: "What is an ERC-20 token?",
    options: [
      "A token on the Solana blockchain",
      "A standard interface for fungible tokens on Ethereum",
      "A type of NFT",
      "A layer-2 scaling solution",
    ],
    correct: 1,
    explanation: "ERC-20 defines a standard interface for fungible tokens on Ethereum. It specifies functions like transfer(), approve(), and allowance(). USDC, LINK, UNI are all ERC-20 tokens.",
  },
  {
    id: 12, difficulty: "explorer", category: "layer2", xpReward: 25, timeLimit: 25,
    question: "What problem do Layer 2 networks primarily solve?",
    options: ["Token creation", "Wallet security", "Scalability — high fees and slow transactions on L1", "Cross-chain bridging"],
    correct: 2,
    explanation: "L2s like Arbitrum, Optimism, and Base process transactions off-chain and batch them to Ethereum mainnet, drastically reducing fees and increasing throughput while inheriting L1 security.",
    hint: "Think about why people complain about Ethereum gas fees.",
  },
  {
    id: 13, difficulty: "explorer", category: "defi", xpReward: 25, timeLimit: 25,
    question: "What does APY stand for in DeFi yields?",
    options: ["Average Price Yield", "Annual Percentage Yield", "Asset Profit Yield", "Automated Protocol Yield"],
    correct: 1,
    explanation: "APY (Annual Percentage Yield) accounts for compound interest, showing your effective annual return. APR (Annual Percentage Rate) doesn't compound. DeFi protocols often show APY to make yields look higher.",
  },
  {
    id: 14, difficulty: "explorer", category: "nft", xpReward: 25, timeLimit: 25,
    question: "What makes an NFT unique compared to a regular ERC-20 token?",
    options: [
      "NFTs are more expensive",
      "NFTs are non-fungible — each token has a unique ID and cannot be exchanged 1:1 with another",
      "NFTs can only be art",
      "NFTs live on a different blockchain",
    ],
    correct: 1,
    explanation: "Non-fungible means each token is unique and indivisible. One ETH = one ETH (fungible). But CryptoPunk #1 ≠ CryptoPunk #2. NFTs use the ERC-721 or ERC-1155 standard on Ethereum.",
  },

  // DEGEN ───────────────────────────────────────────────────────────────────────
  {
    id: 20, difficulty: "degen", category: "defi", xpReward: 50, timeLimit: 20,
    question: "What is MEV (Maximal Extractable Value)?",
    options: [
      "Maximum Ether Volume in a block",
      "Profit block producers extract by reordering/including/excluding transactions",
      "A type of yield farming strategy",
      "The minimum gas fee on Ethereum",
    ],
    correct: 1,
    explanation: "MEV is profit that validators/miners can capture by manipulating transaction ordering in a block. Sandwich attacks, front-running, and liquidation MEV are common forms. Flashbots built infrastructure to democratize and reduce harmful MEV.",
    hint: "It involves block producers and transaction ordering.",
  },
  {
    id: 21, difficulty: "degen", category: "layer2", xpReward: 50, timeLimit: 20,
    question: "What is the key difference between Optimistic Rollups and ZK Rollups?",
    options: [
      "Optimistic rollups are faster; ZK rollups are slower",
      "Optimistic rollups assume transactions are valid (with fraud proofs); ZK rollups use cryptographic validity proofs",
      "They're the same technology with different names",
      "ZK rollups only work on Solana",
    ],
    correct: 1,
    explanation: "Optimistic rollups (Arbitrum, Optimism) assume validity by default and have a 7-day challenge window. ZK rollups (zkSync, StarkNet, Polygon zkEVM) generate cryptographic proofs instantly — faster finality but more compute-intensive.",
  },
  {
    id: 22, difficulty: "degen", category: "ethereum", xpReward: 50, timeLimit: 20,
    question: "What is EIP-1559?",
    options: [
      "Ethereum's switch to Proof of Stake",
      "The fee mechanism that introduced base fees (burned) + priority tips",
      "The ERC-721 NFT standard",
      "Ethereum's sharding roadmap",
    ],
    correct: 1,
    explanation: "EIP-1559 (August 2021) replaced first-price auction gas with a base fee (burned, making ETH deflationary) + optional priority tip. It made gas fees more predictable and introduced net ETH burning.",
  },
  {
    id: 23, difficulty: "degen", category: "defi", xpReward: 50, timeLimit: 20,
    question: "What is a 'flash loan' in DeFi?",
    options: [
      "A very fast wire transfer",
      "A loan that must be borrowed and repaid within the same block, with no collateral needed",
      "A high-interest crypto loan",
      "A loan secured by NFTs",
    ],
    correct: 1,
    explanation: "Flash loans are uncollateralized loans that exist for a single transaction block. If not repaid (+ fee) in the same tx, the entire transaction reverts. Used for arbitrage, collateral swaps, and unfortunately some DeFi exploits.",
    hint: "The loan exists within a single atomic transaction.",
  },
  {
    id: 24, difficulty: "degen", category: "dao", xpReward: 50, timeLimit: 20,
    question: "What is a DAO?",
    options: [
      "Decentralized Application Operation",
      "Decentralized Autonomous Organization — community governed by token holders via smart contracts",
      "A type of NFT collection",
      "A blockchain validation node",
    ],
    correct: 1,
    explanation: "DAOs are organizations with rules encoded in smart contracts. Token holders vote on proposals (treasury spending, protocol upgrades, etc.) without central authority. Examples: Uniswap, MakerDAO, Compound, Nouns.",
  },
  {
    id: 25, difficulty: "degen", category: "security", xpReward: 60, timeLimit: 20,
    question: "What is a 'reentrancy attack' in smart contracts?",
    options: [
      "When a hacker re-enters a building",
      "An exploit where a malicious contract calls back into the victim contract before the first execution finishes",
      "When a user tries to double-spend tokens",
      "A front-running attack on DEXes",
    ],
    correct: 1,
    explanation: "The famous The DAO hack (2016, $60M) used reentrancy. A malicious contract's fallback function calls back into the target's withdraw() before balances update, draining funds in a loop. Fixed with the checks-effects-interactions pattern.",
  },

  // CHAD ────────────────────────────────────────────────────────────────────────
  {
    id: 30, difficulty: "chad", category: "advanced", xpReward: 100, timeLimit: 15,
    question: "What is EigenLayer's restaking mechanism?",
    options: [
      "A new proof-of-work consensus for Ethereum",
      "Allows staked ETH to be reused to provide security to other protocols (AVSs), earning extra yield with added slashing risk",
      "A liquid staking protocol competing with Lido",
      "An Ethereum L2 rollup solution",
    ],
    correct: 1,
    explanation: "EigenLayer introduces restaking: ETH (or LSTs like stETH) already staked on Ethereum's consensus layer can be 'restaked' to secure Actively Validated Services (AVSs) like oracles, bridges, and DA layers — for additional yield and additional slashing conditions.",
  },
  {
    id: 31, difficulty: "chad", category: "layer2", xpReward: 100, timeLimit: 15,
    question: "What is data availability (DA) in the modular blockchain stack?",
    options: [
      "The speed at which data is retrieved from the blockchain",
      "Guaranteeing that transaction data is published and accessible for anyone to verify, without downloading all data",
      "Database sharding for blockchain nodes",
      "The number of transactions per second",
    ],
    correct: 1,
    explanation: "DA ensures that block data is published and available for anyone to verify fraud proofs or state transitions. Celestia, EigenDA, and Avail are standalone DA layers. Without DA guarantees, rollups could post invalid state roots without anyone being able to prove it.",
    hint: "Think about what 'data availability sampling' means for light clients.",
  },
  {
    id: 32, difficulty: "chad", category: "advanced", xpReward: 100, timeLimit: 15,
    question: "What is 'account abstraction' (ERC-4337)?",
    options: [
      "Removing the need for Ethereum accounts",
      "Allows smart contract wallets to pay gas, support social recovery, batch transactions — without changing the base protocol",
      "A new token standard replacing ERC-20",
      "Ethereum's account deletion feature",
    ],
    correct: 1,
    explanation: "ERC-4337 enables smart contract wallets (no EOA required) via UserOperations and a Bundler/Paymaster system. Features: gasless txs, social recovery, batch operations, session keys. Powers Safe, Biconomy, ZeroDev wallets.",
  },
  {
    id: 33, difficulty: "chad", category: "defi", xpReward: 100, timeLimit: 15,
    question: "In Uniswap v3, what is concentrated liquidity?",
    options: [
      "Pooling all tokens in one wallet",
      "LPs choose specific price ranges for their liquidity, earning higher fees within that range vs. v2's full-range distribution",
      "A new token with concentrated value",
      "Combining multiple liquidity pools into one",
    ],
    correct: 1,
    explanation: "Uniswap v3 lets LPs set price ranges (e.g., ETH $1800–$2200). All liquidity concentrates in that range, giving LPs up to 4000x capital efficiency vs. v2's x*y=k across all prices. But if price moves out of range, LP earns zero fees.",
  },
  {
    id: 34, difficulty: "chad", category: "advanced", xpReward: 120, timeLimit: 15,
    question: "What is the 'PBS' (Proposer-Builder Separation) in Ethereum?",
    options: [
      "A personal budgeting system for validators",
      "Separating the role of block builders (who order txs for max MEV) from proposers (validators who simply propose the highest-bid block)",
      "A protocol for bridging between chains",
      "The Proof of Burn Staking mechanism",
    ],
    correct: 1,
    explanation: "PBS separates block construction (builders compete to create most profitable blocks) from block proposal (validators choose the highest MEV-bid block). This democratizes MEV extraction and reduces the advantage of large validators, working alongside MEV-Boost today.",
  },

  // CHAIN GOD ───────────────────────────────────────────────────────────────────
  {
    id: 40, difficulty: "god", category: "advanced", xpReward: 200, timeLimit: 12,
    question: "What does the 'Verifiable Delay Function' (VDF) solve in blockchain randomness?",
    options: [
      "Makes hashing faster for miners",
      "Provides unpredictable, unbiasable randomness by requiring sequential computation that can't be parallelized, preventing validators from predicting/manipulating outcomes",
      "Verifies zero-knowledge proofs faster",
      "A delay mechanism for transaction finality",
    ],
    correct: 1,
    explanation: "VDFs require sequential (not parallelizable) computation of a known time T, after which the result is instantly verifiable. In RANDAO+VDF, validators can't bias randomness by looking ahead because VDF output is unpredictable until computed. Ethereum's roadmap includes VDFs for stronger beacon chain randomness.",
  },
  {
    id: 41, difficulty: "god", category: "advanced", xpReward: 200, timeLimit: 12,
    question: "In ZK-SNARKs, what does the 'trusted setup' ceremony accomplish?",
    options: [
      "It sets up trusted validators for the network",
      "Generates public parameters (CRS/SRS) via multi-party computation so that if even ONE participant destroys their toxic waste, the system is secure",
      "Creates the initial token distribution",
      "Establishes the cryptographic hash function",
    ],
    correct: 1,
    explanation: "ZK-SNARKs require public parameters from a 'Powers of Tau' ceremony. Each participant generates randomness and destroys their 'toxic waste'. If even one participant is honest, the parameters are secure. Compromised toxic waste allows forging fake proofs. Groth16 requires per-circuit setup; PLONK uses a universal SRS.",
    hint: "Think about 'toxic waste' and multi-party computation.",
  },
  {
    id: 42, difficulty: "god", category: "advanced", xpReward: 200, timeLimit: 12,
    question: "What is the 'Verkle tree' upgrade's primary benefit over Merkle Patricia Trees?",
    options: [
      "Verkle trees store more data",
      "Verkle proofs are much smaller (~150 bytes vs ~3-4 KB), enabling stateless clients to verify state without storing the full state",
      "Verkle trees are faster to compute",
      "Verkle trees enable cross-chain communication",
    ],
    correct: 1,
    explanation: "Ethereum's Verge upgrade replaces MPTs with Verkle trees using vector commitments (IPA/KZG). Witness sizes drop from ~3-4KB to ~150 bytes, enabling stateless clients — validators that don't need to store Ethereum's full state to validate blocks, massively reducing node requirements.",
  },
  {
    id: 43, difficulty: "god", category: "advanced", xpReward: 250, timeLimit: 12,
    question: "What is 'intent-based architecture' in crypto transaction design?",
    options: [
      "AI that predicts user intentions",
      "Users sign high-level intents (what they want) rather than exact txs; solvers compete to fulfill these intents optimally, abstracting away execution complexity",
      "A new consensus mechanism for faster finality",
      "A mental health framework for crypto traders",
    ],
    correct: 1,
    explanation: "Intent-centric protocols (UniswapX, CoW Protocol, SUAVE) let users express desired outcomes ('swap 1 ETH for at least 3,000 USDC') and sign these intents. Off-chain solvers compete to fulfill them, potentially batching, cross-chain routing, or MEV-protecting the trade. Separates 'what' from 'how'.",
  },
];

// ─── Adaptive Engine Logic ─────────────────────────────────────────────────────

function selectQuestion(
  allQuestions: Question[],
  userLevel: Difficulty,
  sessionResults: SessionResult[],
  answeredIds: Set<number>
): Question | null {
  const answeredCorrect = sessionResults.filter(r => r.correct).length;
  const answeredWrong = sessionResults.filter(r => !r.correct).length;
  const recentResults = sessionResults.slice(-3);
  const recentAccuracy = recentResults.length > 0
    ? recentResults.filter(r => r.correct).length / recentResults.length
    : 0.5;

  // Determine target difficulty based on performance
  const levels: Difficulty[] = ["novice", "explorer", "degen", "chad", "god"];
  const userLevelIdx = levels.indexOf(userLevel);

  let targetDifficulty: Difficulty = userLevel;
  if (recentAccuracy >= 0.8 && answeredCorrect > 2) {
    // Doing well — bump up
    targetDifficulty = levels[Math.min(userLevelIdx + 1, levels.length - 1)] as Difficulty;
  } else if (recentAccuracy < 0.4 && answeredWrong > 2) {
    // Struggling — drop down
    targetDifficulty = levels[Math.max(userLevelIdx - 1, 0)] as Difficulty;
  }

  // Filter candidates
  const candidates = allQuestions.filter(q =>
    !answeredIds.has(q.id) && q.difficulty === targetDifficulty
  );

  // Fallback to any unanswered at user level
  if (candidates.length === 0) {
    const fallback = allQuestions.filter(q => !answeredIds.has(q.id));
    if (fallback.length === 0) return null;
    return fallback[Math.floor(Math.random() * fallback.length)];
  }

  return candidates[Math.floor(Math.random() * candidates.length)];
}

// ─── Component ────────────────────────────────────────────────────────────────

const DIFF_STYLES: Record<Difficulty, { bg: string; text: string; border: string; label: string }> = {
  novice:   { bg: "#94a3b820", text: "#94a3b8", border: "#94a3b840", label: "🌱 Novice" },
  explorer: { bg: "#60a5fa20", text: "#60a5fa", border: "#60a5fa40", label: "🔭 Explorer" },
  degen:    { bg: "#a78bfa20", text: "#a78bfa", border: "#a78bfa40", label: "🦊 Degen" },
  chad:     { bg: "#f59e0b20", text: "#f59e0b", border: "#f59e0b40", label: "⚡ Chad" },
  god:      { bg: "#ef444420", text: "#ef4444", border: "#ef444440", label: "🔥 Chain God" },
};

interface AdaptiveQuizEngineProps {
  userXP?: number;
  onXPEarned?: (xp: number) => void;
  maxQuestions?: number;
}

export default function AdaptiveQuizEngine({
  userXP = 0,
  onXPEarned,
  maxQuestions = 10,
}: AdaptiveQuizEngineProps) {
  const userLevel = xpToLevel(userXP);
  const [sessionResults, setSessionResults] = useState<SessionResult[]>([]);
  const [answeredIds, setAnsweredIds] = useState<Set<number>>(new Set());
  const [currentQ, setCurrentQ] = useState<Question | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [timedOut, setTimedOut] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [sessionXP, setSessionXP] = useState(0);
  const [xpPopup, setXpPopup] = useState<{ amount: number; bonus: boolean } | null>(null);
  const [quizComplete, setQuizComplete] = useState(false);
  const [currentDiffDisplay, setCurrentDiffDisplay] = useState<Difficulty>(userLevel);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const loadNextQuestion = useCallback(() => {
    const q = selectQuestion(QUESTION_BANK, userLevel, sessionResults, answeredIds);
    if (!q || sessionResults.length >= maxQuestions) {
      setQuizComplete(true);
      return;
    }
    setCurrentQ(q);
    setCurrentDiffDisplay(q.difficulty);
    setSelected(null);
    setShowExplanation(false);
    setTimedOut(false);
    setShowHint(false);
    setTimeLeft(q.timeLimit);
  }, [userLevel, sessionResults, answeredIds, maxQuestions]);

  // Initialize
  useEffect(() => {
    loadNextQuestion();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Timer
  useEffect(() => {
    if (!currentQ || selected !== null || timedOut || showExplanation) return;
    timerRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timerRef.current!);
          setTimedOut(true);
          setShowExplanation(true);
          const result: SessionResult = {
            questionId: currentQ.id,
            correct: false,
            timeSpent: currentQ.timeLimit,
            difficulty: currentQ.difficulty,
          };
          setSessionResults(prev => [...prev, result]);
          setAnsweredIds(prev => new Set([...prev, currentQ.id]));
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current!);
  }, [currentQ, selected, timedOut, showExplanation]);

  const handleAnswer = (idx: number) => {
    if (!currentQ || selected !== null || timedOut) return;
    clearInterval(timerRef.current!);
    const timeSpent = currentQ.timeLimit - timeLeft;
    const correct = idx === currentQ.correct;
    setSelected(idx);

    // XP calculation
    let earned = 0;
    if (correct) {
      earned = currentQ.xpReward;
      // Speed bonus: answered in first 1/3 of time
      const speedBonus = timeSpent < currentQ.timeLimit / 3;
      if (speedBonus) earned = Math.round(earned * 1.5);
      setSessionXP(prev => prev + earned);
      onXPEarned?.(earned);
      setXpPopup({ amount: earned, bonus: speedBonus });
      setTimeout(() => setXpPopup(null), 2000);
    }

    const result: SessionResult = {
      questionId: currentQ.id,
      correct,
      timeSpent,
      difficulty: currentQ.difficulty,
    };
    setSessionResults(prev => [...prev, result]);
    setAnsweredIds(prev => new Set([...prev, currentQ.id]));
    setTimeout(() => setShowExplanation(true), 300);
  };

  const handleNext = () => {
    setCurrentQ(null);
    setTimeout(() => loadNextQuestion(), 50);
  };

  const handleRestart = () => {
    setSessionResults([]);
    setAnsweredIds(new Set());
    setSessionXP(0);
    setQuizComplete(false);
    setCurrentQ(null);
    setTimeout(() => loadNextQuestion(), 50);
  };

  // ─── Quiz Complete Screen ────────────────────────────────────────────────────
  if (quizComplete) {
    const correct = sessionResults.filter(r => r.correct).length;
    const accuracy = Math.round((correct / sessionResults.length) * 100);
    return (
      <div style={{ background: "#0d1117", borderRadius: 16, padding: 32, border: "1px solid #30363d", fontFamily: "-apple-system, sans-serif", color: "#e6edf3", maxWidth: 600, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{accuracy >= 80 ? "🏆" : accuracy >= 60 ? "🎯" : "📚"}</div>
          <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 4 }}>Quiz Complete!</div>
          <div style={{ color: "#8b949e", fontSize: 14 }}>Adaptive difficulty engine adjusted {sessionResults.length} questions to your level</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 24 }}>
          {[
            { label: "Score", value: `${correct}/${sessionResults.length}`, color: "#60a5fa" },
            { label: "Accuracy", value: `${accuracy}%`, color: accuracy >= 70 ? "#3fb950" : "#f59e0b" },
            { label: "XP Earned", value: `+${sessionXP}`, color: "#f0883e" },
          ].map(s => (
            <div key={s.label} style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: "14px 12px", textAlign: "center" }}>
              <div style={{ fontSize: 11, color: "#8b949e", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6 }}>{s.label}</div>
              <div style={{ fontSize: 22, fontWeight: 800, color: s.color }}>{s.value}</div>
            </div>
          ))}
        </div>
        {/* Per-difficulty breakdown */}
        <div style={{ marginBottom: 20 }}>
          {(["novice","explorer","degen","chad","god"] as Difficulty[]).map(diff => {
            const dResults = sessionResults.filter(r => r.difficulty === diff);
            if (dResults.length === 0) return null;
            const dCorrect = dResults.filter(r => r.correct).length;
            const style = DIFF_STYLES[diff];
            return (
              <div key={diff} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, padding: "8px 12px", background: style.bg, border: `1px solid ${style.border}`, borderRadius: 8 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: style.text, minWidth: 90 }}>{style.label}</span>
                <div style={{ flex: 1, background: "#0d1117", borderRadius: 4, height: 6 }}>
                  <div style={{ background: style.text, height: 6, borderRadius: 4, width: `${(dCorrect / dResults.length) * 100}%`, transition: "width 0.5s ease" }} />
                </div>
                <span style={{ fontSize: 12, color: "#8b949e", minWidth: 40, textAlign: "right" }}>{dCorrect}/{dResults.length}</span>
              </div>
            );
          })}
        </div>
        <button onClick={handleRestart} style={{ width: "100%", padding: "12px 24px", background: "linear-gradient(135deg,#6366f1,#06b6d4)", color: "#fff", border: "none", borderRadius: 10, fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
          Play Again — New Adaptive Session
        </button>
      </div>
    );
  }

  if (!currentQ) {
    return (
      <div style={{ background: "#0d1117", borderRadius: 16, padding: 40, border: "1px solid #30363d", textAlign: "center", fontFamily: "-apple-system, sans-serif", color: "#8b949e" }}>
        <div style={{ fontSize: 24, marginBottom: 8 }}>⚡</div>
        <div>Loading adaptive question…</div>
      </div>
    );
  }

  const diffStyle = DIFF_STYLES[currentDiffDisplay];
  const timerPct = (timeLeft / currentQ.timeLimit) * 100;
  const timerColor = timeLeft > currentQ.timeLimit * 0.5 ? "#3fb950" : timeLeft > currentQ.timeLimit * 0.25 ? "#f59e0b" : "#ef4444";

  return (
    <div style={{ background: "#0d1117", borderRadius: 16, border: "1px solid #30363d", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", color: "#e6edf3", maxWidth: 600, margin: "0 auto", overflow: "hidden", position: "relative" }}>

      {/* XP Popup */}
      {xpPopup && (
        <div style={{ position: "absolute", top: 12, right: 12, zIndex: 20, animation: "fadeUp 2s ease forwards", background: xpPopup.bonus ? "linear-gradient(135deg,#f59e0b,#ef4444)" : "#3fb950", color: "#fff", padding: "6px 14px", borderRadius: 20, fontWeight: 800, fontSize: 14, boxShadow: "0 4px 20px rgba(0,0,0,0.4)" }}>
          +{xpPopup.amount} XP {xpPopup.bonus && "⚡ SPEED BONUS!"}
        </div>
      )}

      {/* Header */}
      <div style={{ padding: "14px 16px", background: "#161b22", borderBottom: "1px solid #30363d", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 13, fontWeight: 700, background: "linear-gradient(135deg,#6366f1,#06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>degen0x</span>
          <span style={{ fontSize: 11, color: "#8b949e" }}>Adaptive Quiz Engine v3</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ padding: "3px 10px", background: diffStyle.bg, color: diffStyle.text, border: `1px solid ${diffStyle.border}`, borderRadius: 6, fontSize: 11, fontWeight: 700 }}>{diffStyle.label}</span>
          <span style={{ fontSize: 12, color: "#8b949e" }}>Q{sessionResults.length + 1}/{maxQuestions}</span>
          <span style={{ fontSize: 12, fontWeight: 700, color: "#f0883e" }}>+{sessionXP} XP</span>
        </div>
      </div>

      {/* Timer Bar */}
      <div style={{ height: 4, background: "#21262d" }}>
        <div style={{ height: 4, background: timerColor, width: `${timerPct}%`, transition: "width 1s linear, background 0.5s" }} />
      </div>

      <div style={{ padding: 20 }}>
        {/* Timer + category */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16, alignItems: "center" }}>
          <span style={{ fontSize: 11, color: "#8b949e", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            📂 {currentQ.category.replace("-", " ")}
          </span>
          <span style={{ fontSize: 13, fontWeight: 700, color: timerColor }}>⏱ {timeLeft}s</span>
        </div>

        {/* Question */}
        <div style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.5, marginBottom: 20 }}>
          {currentQ.question}
        </div>

        {/* Options */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
          {currentQ.options.map((opt, i) => {
            let bg = "#161b22";
            let borderColor = "#30363d";
            let color = "#e6edf3";
            if (selected !== null || timedOut) {
              if (i === currentQ.correct) { bg = "#3fb95020"; borderColor = "#3fb950"; color = "#3fb950"; }
              else if (i === selected && selected !== currentQ.correct) { bg = "#ef444420"; borderColor = "#ef4444"; color = "#ef4444"; }
            } else if (selected === i) {
              bg = "#6366f120"; borderColor = "#6366f1";
            }
            return (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                disabled={selected !== null || timedOut}
                style={{ padding: "12px 14px", background: bg, border: `1px solid ${borderColor}`, borderRadius: 10, color, fontSize: 14, textAlign: "left", cursor: selected !== null || timedOut ? "default" : "pointer", transition: "all 0.15s", display: "flex", gap: 10, alignItems: "flex-start" }}
              >
                <span style={{ minWidth: 22, fontWeight: 700, opacity: 0.6 }}>{String.fromCharCode(65 + i)}.</span>
                <span>{opt}</span>
              </button>
            );
          })}
        </div>

        {/* Timed out notice */}
        {timedOut && !showExplanation && (
          <div style={{ padding: "10px 14px", background: "#ef444420", border: "1px solid #ef444440", borderRadius: 8, fontSize: 13, color: "#ef4444", marginBottom: 12 }}>
            ⏰ Time's up! No XP awarded.
          </div>
        )}

        {/* Hint */}
        {!showExplanation && currentQ.hint && selected === null && !timedOut && (
          <button
            onClick={() => setShowHint(true)}
            style={{ background: "none", border: "none", color: "#8b949e", fontSize: 12, cursor: "pointer", padding: 0, textDecoration: "underline" }}
          >
            {showHint ? `💡 ${currentQ.hint}` : "Show hint (−5 XP)"}
          </button>
        )}

        {/* Explanation */}
        {showExplanation && (
          <div style={{ marginBottom: 16 }}>
            <div style={{ padding: "12px 14px", background: "#161b22", border: "1px solid #30363d", borderRadius: 10, fontSize: 13, color: "#8b949e", lineHeight: 1.6 }}>
              <span style={{ color: "#60a5fa", fontWeight: 700 }}>💡 Explanation: </span>{currentQ.explanation}
            </div>
          </div>
        )}

        {/* Next / adaptive nudge */}
        {(showExplanation) && (
          <div>
            {sessionResults.length > 0 && (
              <div style={{ fontSize: 11, color: "#8b949e", marginBottom: 10, textAlign: "center" }}>
                {(() => {
                  const recent = sessionResults.slice(-3);
                  const acc = recent.filter(r => r.correct).length / recent.length;
                  if (acc >= 0.8) return "🔥 You're on fire — bumping difficulty up!";
                  if (acc < 0.4) return "📚 Adjusting to a better level for you…";
                  return "🎯 Good pace — keeping difficulty adaptive";
                })()}
              </div>
            )}
            <button
              onClick={handleNext}
              style={{ width: "100%", padding: "12px 24px", background: "linear-gradient(135deg,#6366f1,#06b6d4)", color: "#fff", border: "none", borderRadius: 10, fontSize: 15, fontWeight: 700, cursor: "pointer" }}
            >
              {sessionResults.length >= maxQuestions - 1 ? "See Results →" : "Next Question →"}
            </button>
          </div>
        )}
      </div>

      <style>{`@keyframes fadeUp { 0%{opacity:1;transform:translateY(0)} 80%{opacity:1} 100%{opacity:0;transform:translateY(-20px)} }`}</style>
    </div>
  );
}
