"use client";
import { useState, useEffect, useCallback } from "react";
import { getDailyQuestions, getScoreGrade, type TriviaQuestion } from "@/data/trivia";

interface GameState {
  status: "intro" | "playing" | "result";
  currentQ: number;
  selected: number | null;
  showExplain: boolean;
  answers: (number | null)[];
  score: number;
  timeLeft: number;
  startedAt: number | null;
}

const QUESTION_TIME = 20; // seconds per question
const DIFFICULTY_COLORS: Record<string, string> = {
  easy: "#3fb950",
  medium: "#f0883e",
  hard: "#f85149",
};
const CATEGORY_ICONS: Record<string, string> = {
  basics: "🔵",
  defi: "💰",
  history: "📜",
  trading: "📊",
  nfts: "🖼️",
  layer2: "⚡",
  security: "🔐",
  wallets: "👛",
};

export default function DailyTrivia() {
  const [questions, setQuestions] = useState<TriviaQuestion[]>([]);
  const [todayStr, setTodayStr] = useState("");
  const [game, setGame] = useState<GameState>({
    status: "intro",
    currentQ: 0,
    selected: null,
    showExplain: false,
    answers: [],
    score: 0,
    timeLeft: QUESTION_TIME,
    startedAt: null,
  });
  const [streak, setStreak] = useState(0);
  const [alreadyPlayed, setAlreadyPlayed] = useState(false);
  const [savedScore, setSavedScore] = useState(0);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setTodayStr(today);
    const qs = getDailyQuestions(today);
    setQuestions(qs);

    // Check streak and prior play
    try {
      const streakData = localStorage.getItem("cd_trivia_streak");
      if (streakData) {
        const { count, lastDate } = JSON.parse(streakData);
        const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
        if (lastDate === yesterday || lastDate === today) {
          setStreak(count);
        }
      }
      const todayResult = localStorage.getItem(`cd_trivia_${today}`);
      if (todayResult) {
        setAlreadyPlayed(true);
        setSavedScore(Number(todayResult));
      }
    } catch {}
  }, []);

  // Timer
  useEffect(() => {
    if (game.status !== "playing" || game.showExplain) return;
    if (game.timeLeft <= 0) {
      handleTimeout();
      return;
    }
    const t = setTimeout(() => {
      setGame((g) => ({ ...g, timeLeft: g.timeLeft - 1 }));
    }, 1000);
    return () => clearTimeout(t);
  }, [game.status, game.timeLeft, game.showExplain]);

  const handleTimeout = useCallback(() => {
    setGame((g) => ({
      ...g,
      selected: -1,
      showExplain: true,
      answers: [...g.answers, null],
    }));
  }, []);

  const handleAnswer = useCallback(
    (idx: number) => {
      if (game.selected !== null || game.showExplain) return;
      const q = questions[game.currentQ];
      const correct = idx === q.correct;
      const points = correct ? q.points : 0;
      setGame((g) => ({
        ...g,
        selected: idx,
        showExplain: true,
        answers: [...g.answers, idx],
        score: g.score + points,
      }));
    },
    [game, questions]
  );

  const handleNext = useCallback(() => {
    const next = game.currentQ + 1;
    if (next >= questions.length) {
      // Game over
      const finalScore = game.score;
      setGame((g) => ({ ...g, status: "result" }));
      // Save to localStorage
      try {
        localStorage.setItem(`cd_trivia_${todayStr}`, String(finalScore));
        const prevStreak = streak;
        const newStreak = prevStreak + 1;
        setStreak(newStreak);
        localStorage.setItem(
          "cd_trivia_streak",
          JSON.stringify({ count: newStreak, lastDate: todayStr })
        );
      } catch {}
    } else {
      setGame((g) => ({
        ...g,
        currentQ: next,
        selected: null,
        showExplain: false,
        timeLeft: QUESTION_TIME,
      }));
    }
  }, [game, questions, todayStr, streak]);

  const startGame = () => {
    setGame({
      status: "playing",
      currentQ: 0,
      selected: null,
      showExplain: false,
      answers: [],
      score: 0,
      timeLeft: QUESTION_TIME,
      startedAt: Date.now(),
    });
  };

  const getShareText = () => {
    const maxScore = questions.reduce((s, q) => s + q.points, 0);
    const { grade, emoji } = getScoreGrade(game.score, maxScore);
    const correct = game.answers.filter((a, i) => a === questions[i]?.correct).length;
    const emojis = game.answers
      .map((a, i) => (a === questions[i]?.correct ? "🟩" : a === null ? "⬛" : "🟥"))
      .join("");
    return `CryptoDegen Daily Trivia 🎮
${new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
${correct}/10 correct · ${game.score} pts · Grade ${grade} ${emoji}
${emojis}
🔥 ${streak}-day streak

Play at cryptodegen.com/learn/daily-trivia`;
  };

  const copyShare = async () => {
    try {
      await navigator.clipboard.writeText(getShareText());
      alert("Copied to clipboard! Share your score 🎉");
    } catch {
      alert(getShareText());
    }
  };

  if (questions.length === 0) {
    return (
      <div className="glass p-8 text-center">
        <div className="text-4xl mb-4">⏳</div>
        <p className="text-[var(--color-text-secondary)]">Loading today's questions...</p>
      </div>
    );
  }

  const maxScore = questions.reduce((s, q) => s + q.points, 0);
  const q = questions[game.currentQ];

  // ===== INTRO SCREEN =====
  if (game.status === "intro") {
    return (
      <div className="glass p-8 max-w-xl mx-auto text-center">
        <div className="text-6xl mb-4">🧠</div>
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-2">Daily Crypto Trivia</h2>
        <p className="text-[var(--color-text-secondary)] mb-6">
          10 questions · 20 seconds each · New quiz every day
        </p>

        <div className="flex justify-center gap-6 mb-8">
          <div className="glass p-4 text-center min-w-[90px]">
            <div className="text-2xl font-bold text-[var(--color-primary)]">🔥 {streak}</div>
            <div className="text-xs text-[var(--color-text-secondary)] mt-1">Day Streak</div>
          </div>
          <div className="glass p-4 text-center min-w-[90px]">
            <div className="text-2xl font-bold" style={{ color: "#3fb950" }}>3/4/3</div>
            <div className="text-xs text-[var(--color-text-secondary)] mt-1">Easy/Med/Hard</div>
          </div>
          <div className="glass p-4 text-center min-w-[90px]">
            <div className="text-2xl font-bold" style={{ color: "#f7931a" }}>{maxScore}</div>
            <div className="text-xs text-[var(--color-text-secondary)] mt-1">Max Points</div>
          </div>
        </div>

        {alreadyPlayed ? (
          <div className="glass p-5 mb-6 rounded-xl border border-yellow-500/20">
            <p className="text-yellow-400 font-semibold mb-1">You already played today!</p>
            <p className="text-[var(--color-text-secondary)] text-sm">Score: <strong className="text-[var(--color-text)]">{savedScore} pts</strong></p>
            <p className="text-[var(--color-text-secondary)] text-xs mt-1">Come back tomorrow for a fresh quiz 🗓️</p>
          </div>
        ) : null}

        <button
          onClick={startGame}
          className="affiliate-cta px-8 py-3 rounded-xl text-white font-bold text-lg w-full"
        >
          {alreadyPlayed ? "Play Again (Practice)" : "Start Today's Quiz →"}
        </button>
      </div>
    );
  }

  // ===== RESULT SCREEN =====
  if (game.status === "result") {
    const correct = game.answers.filter((a, i) => a === questions[i]?.correct).length;
    const { grade, title, emoji, color } = getScoreGrade(game.score, maxScore);
    return (
      <div className="glass p-8 max-w-xl mx-auto text-center">
        <div className="text-6xl mb-3">{emoji}</div>
        <div className="text-5xl font-black mb-1" style={{ color }}>{grade}</div>
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-1">{title}</h2>
        <p className="text-[var(--color-text-secondary)] mb-6">{correct}/10 correct · {game.score} / {maxScore} pts</p>

        {/* Score breakdown */}
        <div className="flex justify-center gap-4 mb-6">
          {game.answers.map((a, i) => {
            const isCorrect = a === questions[i]?.correct;
            const isTimeout = a === null;
            return (
              <div
                key={i}
                title={questions[i]?.question}
                className="w-8 h-8 rounded flex items-center justify-center text-sm font-bold"
                style={{
                  background: isTimeout ? "#30363d" : isCorrect ? "#3fb95030" : "#f8514930",
                  color: isTimeout ? "#8b949e" : isCorrect ? "#3fb950" : "#f85149",
                  border: `1px solid ${isTimeout ? "#30363d" : isCorrect ? "#3fb950" : "#f85149"}`,
                }}
              >
                {isTimeout ? "⏱" : isCorrect ? "✓" : "✗"}
              </div>
            );
          })}
        </div>

        {/* Streak */}
        <div className="glass p-4 mb-6 flex items-center justify-center gap-3">
          <span className="text-2xl">🔥</span>
          <div>
            <div className="font-bold text-[var(--color-text)]">{streak}-day streak!</div>
            <div className="text-xs text-[var(--color-text-secondary)]">Come back tomorrow to keep it going</div>
          </div>
        </div>

        <button
          onClick={copyShare}
          className="affiliate-cta px-6 py-3 rounded-xl text-white font-bold w-full mb-3"
        >
          📤 Share Your Score
        </button>
        <p className="text-xs text-[var(--color-text-secondary)]">New quiz in {Math.floor((new Date(new Date().toISOString().split("T")[0] + "T24:00:00").getTime() - Date.now()) / 3600000)}h</p>
      </div>
    );
  }

  // ===== PLAYING SCREEN =====
  const timerPct = (game.timeLeft / QUESTION_TIME) * 100;
  const timerColor = game.timeLeft > 10 ? "#3fb950" : game.timeLeft > 5 ? "#f0883e" : "#f85149";

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress bar + score */}
      <div className="flex items-center justify-between mb-4 gap-4">
        <div className="flex gap-2 flex-1">
          {questions.map((_, i) => (
            <div
              key={i}
              className="h-2 flex-1 rounded-full"
              style={{
                background:
                  i < game.currentQ
                    ? game.answers[i] === questions[i]?.correct
                      ? "#3fb950"
                      : "#f85149"
                    : i === game.currentQ
                    ? "#6366f1"
                    : "#30363d",
              }}
            />
          ))}
        </div>
        <div className="text-sm font-bold text-[var(--color-text)] whitespace-nowrap">
          {game.score} pts
        </div>
      </div>

      {/* Question card */}
      <div className="glass p-6 mb-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="text-lg">{CATEGORY_ICONS[q.category] || "❓"}</span>
            <span className="text-xs font-semibold text-[var(--color-text-secondary)] capitalize">{q.category.replace("-", " ")}</span>
            <span
              className="text-xs font-bold px-2 py-0.5 rounded-full uppercase"
              style={{
                background: DIFFICULTY_COLORS[q.difficulty] + "20",
                color: DIFFICULTY_COLORS[q.difficulty],
              }}
            >
              {q.difficulty}
            </span>
            <span className="text-xs text-[var(--color-text-secondary)]">+{q.points}pts</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold" style={{ color: timerColor }}>
              ⏱ {game.timeLeft}s
            </span>
          </div>
        </div>

        {/* Timer bar */}
        <div className="w-full h-1.5 bg-[var(--glass-bg)] rounded-full mb-5 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-1000"
            style={{ width: `${timerPct}%`, background: timerColor }}
          />
        </div>

        {/* Question */}
        <p className="text-lg font-semibold text-[var(--color-text)] mb-5 leading-snug">
          Q{game.currentQ + 1}. {q.question}
        </p>

        {/* Options */}
        <div className="grid grid-cols-1 gap-3">
          {q.options.map((opt, i) => {
            const isSelected = game.selected === i;
            const isCorrect = i === q.correct;
            const isTimeout = game.selected === -1;
            let bg = "var(--glass-bg)";
            let border = "var(--border-color, #30363d)";
            let textColor = "var(--color-text)";

            if (game.showExplain) {
              if (isCorrect) {
                bg = "#3fb95015";
                border = "#3fb950";
                textColor = "#3fb950";
              } else if (isSelected && !isCorrect) {
                bg = "#f8514915";
                border = "#f85149";
                textColor = "#f85149";
              }
            }

            return (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                disabled={game.showExplain}
                className="w-full text-left p-4 rounded-xl border transition-all duration-150"
                style={{
                  background: bg,
                  borderColor: border,
                  color: textColor,
                  cursor: game.showExplain ? "default" : "pointer",
                  opacity: game.showExplain && !isCorrect && !isSelected ? 0.5 : 1,
                }}
              >
                <span className="font-semibold mr-2">{["A", "B", "C", "D"][i]}.</span>
                {opt}
                {game.showExplain && isCorrect && <span className="float-right">✓</span>}
                {game.showExplain && isSelected && !isCorrect && <span className="float-right">✗</span>}
                {game.showExplain && isTimeout && isCorrect && <span className="float-right text-xs text-[var(--color-text-secondary)]">correct answer</span>}
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {game.showExplain && (
          <div className="mt-4 p-4 rounded-xl bg-[var(--glass-bg)] border border-[var(--color-primary)]/20">
            <p className="text-sm text-[var(--color-text-secondary)]">
              <span className="font-bold text-[var(--color-primary)]">💡 </span>
              {q.explanation}
            </p>
          </div>
        )}
      </div>

      {/* Next button */}
      {game.showExplain && (
        <button
          onClick={handleNext}
          className="affiliate-cta w-full py-3 rounded-xl text-white font-bold text-base"
        >
          {game.currentQ + 1 >= questions.length ? "See Results 🏁" : "Next Question →"}
        </button>
      )}
    </div>
  );
}
