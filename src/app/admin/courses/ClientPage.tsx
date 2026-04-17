'use client';
import { useState } from "react";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", accent: "#6366f1",
  green: "#3fb950", blue: "#58a6ff", red: "#f85149", orange: "#f0883e",
  yellow: "#d29922", purple: "#bc8cff", cyan: "#06b6d4",
};

// ─── Types ───────────────────────────────────────────────────────────────────

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correct: number;
  xp: number;
  explanation: string;
}

interface CourseLesson {
  id: string;
  title: string;
  content: string;
  xp: number;
  linkedGuide: string;
  estimatedMinutes: number;
  order: number;
}

interface Course {
  id: string;
  title: string;
  description: string;
  theme: string;
  chapter: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  totalXP: number;
  status: "Draft" | "Published" | "Archived";
  lessons: CourseLesson[];
  quiz: QuizQuestion[];
  createdAt: string;
  updatedAt: string;
}

// ─── Seed Data ────────────────────────────────────────────────────────────────

const SEED_COURSES: Course[] = [
  {
    id: "c1",
    title: "Bitcoin Fundamentals",
    description: "Understand how Bitcoin works from first principles — mining, UTXO model, halvings, and self-custody.",
    theme: "Bitcoin",
    chapter: "Foundations",
    level: "Beginner",
    totalXP: 350,
    status: "Published",
    createdAt: "2026-01-10",
    updatedAt: "2026-03-01",
    lessons: [
      { id: "l1", title: "What is Bitcoin?", content: "Bitcoin is a decentralized peer-to-peer currency...", xp: 50, linkedGuide: "/learn/what-is-bitcoin", estimatedMinutes: 5, order: 1 },
      { id: "l2", title: "How Mining Works", content: "Proof of Work consensus and hash rate...", xp: 75, linkedGuide: "/learn/bitcoin-mining", estimatedMinutes: 8, order: 2 },
      { id: "l3", title: "The UTXO Model", content: "Unspent Transaction Outputs explained...", xp: 75, linkedGuide: "/learn/utxo-model", estimatedMinutes: 7, order: 3 },
      { id: "l4", title: "Bitcoin Halvings", content: "Supply schedule, halving cycles, and price history...", xp: 75, linkedGuide: "/learn/bitcoin-halving", estimatedMinutes: 8, order: 4 },
      { id: "l5", title: "Self-Custody: Wallets & Keys", content: "Private keys, seed phrases, hardware wallets...", xp: 75, linkedGuide: "/learn/bitcoin-wallets", estimatedMinutes: 10, order: 5 },
    ],
    quiz: [
      { id: "q1", question: "What consensus mechanism does Bitcoin use?", options: ["Proof of Stake", "Proof of Work", "Proof of Authority", "Delegated PoS"], correct: 1, xp: 25, explanation: "Bitcoin uses Proof of Work (PoW), where miners compete to solve cryptographic puzzles to add blocks." },
      { id: "q2", question: "How often does a Bitcoin halving occur?", options: ["Every 2 years", "Every 210,000 blocks (~4 years)", "Every year", "Every 100,000 blocks"], correct: 1, xp: 25, explanation: "A halving occurs every 210,000 blocks, roughly every 4 years. It cuts the block reward in half." },
    ],
  },
  {
    id: "c2",
    title: "DeFi Essentials",
    description: "Master the core DeFi primitives — AMMs, lending protocols, yield farming, and liquidity provision.",
    theme: "DeFi",
    chapter: "DeFi",
    level: "Intermediate",
    totalXP: 500,
    status: "Published",
    createdAt: "2026-01-20",
    updatedAt: "2026-03-10",
    lessons: [
      { id: "l6", title: "AMMs & How Uniswap Works", content: "Constant product formula x*y=k...", xp: 100, linkedGuide: "/ecosystem/uniswap", estimatedMinutes: 12, order: 1 },
      { id: "l7", title: "Lending Protocols (Aave & Compound)", content: "Over-collateralized lending, liquidations, health factor...", xp: 100, linkedGuide: "/ecosystem/aave", estimatedMinutes: 10, order: 2 },
      { id: "l8", title: "Yield Farming Strategies", content: "Single-sided, LP tokens, compounding...", xp: 100, linkedGuide: "/learn/yield-farming", estimatedMinutes: 12, order: 3 },
      { id: "l9", title: "Impermanent Loss Explained", content: "Why LP positions diverge from holding...", xp: 100, linkedGuide: "/learn/impermanent-loss", estimatedMinutes: 10, order: 4 },
      { id: "l10", title: "DeFi Security: Audits & Risks", content: "Smart contract risk, rug pulls, honeypots...", xp: 100, linkedGuide: "/learn/defi-risks", estimatedMinutes: 12, order: 5 },
    ],
    quiz: [
      { id: "q3", question: "What formula governs Uniswap V2 AMM pricing?", options: ["x+y=k", "x*y=k", "x^2+y^2=k", "x/y=k"], correct: 1, xp: 30, explanation: "Uniswap V2 uses the constant product formula x*y=k where x and y are token reserves." },
    ],
  },
  {
    id: "c3",
    title: "Cross-Chain Bridges",
    description: "Understand how assets move between blockchains — from lock-and-mint to intent-based bridges.",
    theme: "Infrastructure",
    chapter: "Advanced",
    level: "Advanced",
    totalXP: 400,
    status: "Draft",
    createdAt: "2026-03-10",
    updatedAt: "2026-03-14",
    lessons: [],
    quiz: [],
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

type Tab = "courses" | "editor" | "quiz";

export default function CourseCreatorDashboard() {
  const [courses, setCourses] = useState<Course[]>(SEED_COURSES);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>("courses");
  const [filterStatus, setFilterStatus] = useState<string>("All");
  const [filterLevel, setFilterLevel] = useState<string>("All");
  const [newLesson, setNewLesson] = useState({ title: "", xp: 50, linkedGuide: "", estimatedMinutes: 8 });
  const [newQuestion, setNewQuestion] = useState({ question: "", options: ["", "", "", ""], correct: 0, xp: 25, explanation: "" });
  const [toast, setToast] = useState<string | null>(null);

  const selected = courses.find(c => c.id === selectedId) ?? null;

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  const updateCourse = (patch: Partial<Course>) => {
    setCourses(cs => cs.map(c => c.id === selectedId ? { ...c, ...patch, updatedAt: new Date().toISOString().slice(0, 10) } : c));
  };

  const addLesson = () => {
    if (!newLesson.title.trim() || !selected) return;
    const lesson: CourseLesson = {
      id: `l-${Date.now()}`,
      title: newLesson.title,
      content: "",
      xp: newLesson.xp,
      linkedGuide: newLesson.linkedGuide,
      estimatedMinutes: newLesson.estimatedMinutes,
      order: selected.lessons.length + 1,
    };
    updateCourse({ lessons: [...selected.lessons, lesson], totalXP: selected.totalXP + lesson.xp });
    setNewLesson({ title: "", xp: 50, linkedGuide: "", estimatedMinutes: 8 });
    showToast("Lesson added ✅");
  };

  const deleteLesson = (lid: string) => {
    if (!selected) return;
    const removed = selected.lessons.find(l => l.id === lid);
    updateCourse({
      lessons: selected.lessons.filter(l => l.id !== lid),
      totalXP: selected.totalXP - (removed?.xp ?? 0),
    });
    showToast("Lesson removed");
  };

  const addQuestion = () => {
    if (!newQuestion.question.trim() || !selected) return;
    const q: QuizQuestion = { id: `q-${Date.now()}`, ...newQuestion };
    updateCourse({ quiz: [...selected.quiz, q], totalXP: selected.totalXP + q.xp });
    setNewQuestion({ question: "", options: ["", "", "", ""], correct: 0, xp: 25, explanation: "" });
    showToast("Question added ✅");
  };

  const toggleStatus = (id: string) => {
    setCourses(cs => cs.map(c => {
      if (c.id !== id) return c;
      const next = c.status === "Published" ? "Draft" : "Published";
      return { ...c, status: next };
    }));
    showToast("Status updated");
  };

  const createNewCourse = () => {
    const newCourse: Course = {
      id: `c-${Date.now()}`,
      title: "New Course",
      description: "Add a description...",
      theme: "General",
      chapter: "Foundations",
      level: "Beginner",
      totalXP: 0,
      status: "Draft",
      lessons: [],
      quiz: [],
      createdAt: new Date().toISOString().slice(0, 10),
      updatedAt: new Date().toISOString().slice(0, 10),
    };
    setCourses(cs => [newCourse, ...cs]);
    setSelectedId(newCourse.id);
    setActiveTab("editor");
    showToast("New course created!");
  };

  const filtered = courses.filter(c => {
    if (filterStatus !== "All" && c.status !== filterStatus) return false;
    if (filterLevel !== "All" && c.level !== filterLevel) return false;
    return true;
  });

  const levelColor: Record<string, string> = {
    Beginner: S.green, Intermediate: S.yellow, Advanced: S.red,
  };
  const statusColor: Record<string, string> = {
    Published: S.green, Draft: S.text2, Archived: S.red,
  };

  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      {/* Toast */}
      {toast && (
        <div style={{ position: "fixed", top: 20, right: 20, background: S.surface, border: `1px solid ${S.green}40`, color: S.green, padding: "10px 18px", borderRadius: 10, fontSize: 13, fontWeight: 700, zIndex: 1000, boxShadow: "0 4px 20px #0008" }}>
          {toast}
        </div>
      )}

      {/* Header */}
      <div style={{ background: S.surface, borderBottom: `1px solid ${S.border}`, padding: "14px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontWeight: 900, fontSize: 20, background: "linear-gradient(135deg,#6366f1,#06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>degen0x</span>
          <span style={{ background: "#f0883e20", color: S.orange, border: `1px solid #f0883e40`, borderRadius: 6, padding: "3px 10px", fontSize: 11, fontWeight: 700 }}>🛠️ Admin — Course Creator</span>
        </div>
        <button
          onClick={createNewCourse}
          style={{ background: S.accent, color: "#fff", border: "none", borderRadius: 8, padding: "8px 18px", fontSize: 13, fontWeight: 700, cursor: "pointer" }}
        >+ New Course</button>
      </div>

      <div style={{ display: "flex", minHeight: "calc(100vh - 57px)" }}>

        {/* Left Sidebar — Course List */}
        <div style={{ width: 320, borderRight: `1px solid ${S.border}`, flexShrink: 0, overflowY: "auto" }}>
          {/* Filters */}
          <div style={{ padding: "12px 16px", borderBottom: `1px solid ${S.border}` }}>
            <div style={{ fontSize: 11, color: S.text2, fontWeight: 700, textTransform: "uppercase", marginBottom: 8 }}>Filter</div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {["All", "Published", "Draft", "Archived"].map(s => (
                <button key={s} onClick={() => setFilterStatus(s)} style={{ background: filterStatus === s ? "#6366f120" : S.surface2, border: `1px solid ${filterStatus === s ? "#6366f140" : S.border}`, color: filterStatus === s ? "#818cf8" : S.text2, borderRadius: 6, padding: "3px 8px", fontSize: 11, fontWeight: 600, cursor: "pointer" }}>{s}</button>
              ))}
            </div>
            <div style={{ display: "flex", gap: 6, marginTop: 6, flexWrap: "wrap" }}>
              {["All", "Beginner", "Intermediate", "Advanced"].map(l => (
                <button key={l} onClick={() => setFilterLevel(l)} style={{ background: filterLevel === l ? "#6366f120" : S.surface2, border: `1px solid ${filterLevel === l ? "#6366f140" : S.border}`, color: filterLevel === l ? "#818cf8" : S.text2, borderRadius: 6, padding: "3px 8px", fontSize: 11, fontWeight: 600, cursor: "pointer" }}>{l}</button>
              ))}
            </div>
          </div>

          {/* Course Cards */}
          <div style={{ padding: 12, display: "flex", flexDirection: "column", gap: 8 }}>
            {filtered.map(course => (
              <div
                key={course.id}
                onClick={() => { setSelectedId(course.id); setActiveTab("editor"); }}
                style={{ background: selectedId === course.id ? "#6366f112" : S.surface2, border: `1px solid ${selectedId === course.id ? "#6366f140" : S.border}`, borderRadius: 10, padding: "12px 14px", cursor: "pointer" }}
              >
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{course.title}</div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: statusColor[course.status] }}>● {course.status}</span>
                  <span style={{ fontSize: 10, color: S.text2 }}>·</span>
                  <span style={{ fontSize: 10, fontWeight: 700, color: levelColor[course.level] }}>{course.level}</span>
                  <span style={{ fontSize: 10, color: S.text2 }}>·</span>
                  <span style={{ fontSize: 10, color: S.orange }}>{course.totalXP} XP</span>
                </div>
                <div style={{ fontSize: 11, color: S.text2, marginTop: 4 }}>
                  {course.lessons.length} lessons · {course.quiz.length} questions · {course.theme}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Panel */}
        <div style={{ flex: 1, overflowY: "auto" }}>
          {!selected ? (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", color: S.text2, gap: 12 }}>
              <div style={{ fontSize: 48 }}>📚</div>
              <div style={{ fontSize: 16, fontWeight: 700 }}>Select a course to edit</div>
              <div style={{ fontSize: 13 }}>or click <strong style={{ color: S.accent }}>+ New Course</strong> to create one</div>
            </div>
          ) : (
            <div style={{ padding: "24px 28px" }}>
              {/* Tabs */}
              <div style={{ display: "flex", gap: 4, marginBottom: 24, borderBottom: `1px solid ${S.border}`, paddingBottom: 0 }}>
                {([["editor", "✏️ Editor"], ["quiz", "🧠 Quiz Builder"]] as [Tab, string][]).map(([tab, label]) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{ background: "none", border: "none", color: activeTab === tab ? S.accent : S.text2, fontWeight: activeTab === tab ? 700 : 400, fontSize: 14, padding: "8px 16px", cursor: "pointer", borderBottom: activeTab === tab ? `2px solid ${S.accent}` : "2px solid transparent", marginBottom: -1 }}
                  >{label}</button>
                ))}
              </div>

              {/* ── EDITOR TAB ── */}
              {activeTab === "editor" && (
                <div>
                  {/* Meta fields */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 20 }}>
                    <div>
                      <label style={{ fontSize: 11, color: S.text2, display: "block", marginBottom: 5, fontWeight: 700 }}>TITLE</label>
                      <input value={selected.title} onChange={e => updateCourse({ title: e.target.value })}
                        style={{ width: "100%", background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 8, padding: "8px 12px", color: S.text, fontSize: 14 }} />
                    </div>
                    <div>
                      <label style={{ fontSize: 11, color: S.text2, display: "block", marginBottom: 5, fontWeight: 700 }}>THEME</label>
                      <input value={selected.theme} onChange={e => updateCourse({ theme: e.target.value })}
                        style={{ width: "100%", background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 8, padding: "8px 12px", color: S.text, fontSize: 14 }} />
                    </div>
                    <div>
                      <label style={{ fontSize: 11, color: S.text2, display: "block", marginBottom: 5, fontWeight: 700 }}>LEVEL</label>
                      <select value={selected.level} onChange={e => updateCourse({ level: e.target.value as any })}
                        style={{ width: "100%", background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 8, padding: "8px 12px", color: S.text, fontSize: 14 }}>
                        {["Beginner", "Intermediate", "Advanced"].map(l => <option key={l} value={l}>{l}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={{ fontSize: 11, color: S.text2, display: "block", marginBottom: 5, fontWeight: 700 }}>STATUS</label>
                      <div style={{ display: "flex", gap: 8 }}>
                        {["Draft", "Published", "Archived"].map(s => (
                          <button key={s} onClick={() => updateCourse({ status: s as any })}
                            style={{ background: selected.status === s ? `${statusColor[s]}20` : S.surface2, border: `1px solid ${selected.status === s ? `${statusColor[s]}40` : S.border}`, color: selected.status === s ? statusColor[s] : S.text2, borderRadius: 7, padding: "6px 12px", fontSize: 12, fontWeight: 700, cursor: "pointer" }}
                          >{s}</button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div style={{ marginBottom: 20 }}>
                    <label style={{ fontSize: 11, color: S.text2, display: "block", marginBottom: 5, fontWeight: 700 }}>DESCRIPTION</label>
                    <textarea value={selected.description} onChange={e => updateCourse({ description: e.target.value })} rows={3}
                      style={{ width: "100%", background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 8, padding: "8px 12px", color: S.text, fontSize: 14, resize: "vertical" }} />
                  </div>

                  {/* Lessons */}
                  <div style={{ marginBottom: 24 }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                      <h3 style={{ margin: 0, fontSize: 15, fontWeight: 800 }}>Lessons ({selected.lessons.length})</h3>
                      <span style={{ fontSize: 12, color: S.orange }}>Total XP: {selected.totalXP}</span>
                    </div>

                    {selected.lessons.map((lesson, i) => (
                      <div key={lesson.id} style={{ background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 10, padding: "12px 14px", marginBottom: 8, display: "flex", gap: 14, alignItems: "flex-start" }}>
                        <div style={{ width: 28, height: 28, background: "#6366f120", border: `1px solid #6366f130`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, color: S.accent, flexShrink: 0 }}>{i + 1}</div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontWeight: 700, marginBottom: 3 }}>{lesson.title}</div>
                          <div style={{ fontSize: 12, color: S.text2 }}>
                            {lesson.xp} XP · {lesson.estimatedMinutes} min
                            {lesson.linkedGuide && <> · <span style={{ color: S.cyan }}>↗ {lesson.linkedGuide}</span></>}
                          </div>
                        </div>
                        <button onClick={() => deleteLesson(lesson.id)} style={{ background: "#f8514915", border: `1px solid #f8514930`, color: S.red, borderRadius: 6, padding: "3px 8px", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>✕</button>
                      </div>
                    ))}

                    {/* Add Lesson Form */}
                    <div style={{ background: S.surface, border: `1px dashed ${S.border}`, borderRadius: 10, padding: 14, marginTop: 8 }}>
                      <div style={{ fontSize: 12, color: S.text2, fontWeight: 700, marginBottom: 10 }}>+ ADD LESSON</div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr auto auto auto", gap: 8 }}>
                        <input placeholder="Lesson title..." value={newLesson.title} onChange={e => setNewLesson(p => ({ ...p, title: e.target.value }))}
                          style={{ background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 7, padding: "7px 10px", color: S.text, fontSize: 13 }} />
                        <input type="number" placeholder="XP" value={newLesson.xp} onChange={e => setNewLesson(p => ({ ...p, xp: Number(e.target.value) }))}
                          style={{ width: 60, background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 7, padding: "7px 10px", color: S.text, fontSize: 13 }} />
                        <input type="number" placeholder="min" value={newLesson.estimatedMinutes} onChange={e => setNewLesson(p => ({ ...p, estimatedMinutes: Number(e.target.value) }))}
                          style={{ width: 55, background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 7, padding: "7px 10px", color: S.text, fontSize: 13 }} />
                        <button onClick={addLesson} style={{ background: S.accent, color: "#fff", border: "none", borderRadius: 7, padding: "7px 14px", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>Add</button>
                      </div>
                      <input placeholder="Linked guide path (optional, e.g. /ecosystem/uniswap)" value={newLesson.linkedGuide} onChange={e => setNewLesson(p => ({ ...p, linkedGuide: e.target.value }))}
                        style={{ width: "100%", marginTop: 8, background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 7, padding: "7px 10px", color: S.text, fontSize: 13 }} />
                    </div>
                  </div>
                </div>
              )}

              {/* ── QUIZ TAB ── */}
              {activeTab === "quiz" && (
                <div>
                  <h3 style={{ margin: "0 0 16px", fontSize: 15, fontWeight: 800 }}>Quiz Questions ({selected.quiz.length})</h3>

                  {selected.quiz.map((q, i) => (
                    <div key={q.id} style={{ background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16, marginBottom: 12 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                        <div style={{ fontWeight: 700 }}>Q{i + 1}: {q.question}</div>
                        <span style={{ background: "#f0883e15", color: S.orange, borderRadius: 6, padding: "2px 8px", fontSize: 11, fontWeight: 700 }}>{q.xp} XP</span>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 8 }}>
                        {q.options.map((opt, idx) => (
                          <div key={idx} style={{ background: idx === q.correct ? "#3fb95020" : S.surface, border: `1px solid ${idx === q.correct ? "#3fb95040" : S.border}`, borderRadius: 8, padding: "6px 10px", fontSize: 13, color: idx === q.correct ? S.green : S.text }}>
                            {idx === q.correct ? "✓ " : ""}{opt || <span style={{ color: S.text2, fontStyle: "italic" }}>empty</span>}
                          </div>
                        ))}
                      </div>
                      {q.explanation && <div style={{ fontSize: 12, color: S.text2, fontStyle: "italic" }}>💡 {q.explanation}</div>}
                    </div>
                  ))}

                  {/* Add Question Form */}
                  <div style={{ background: S.surface, border: `1px dashed ${S.border}`, borderRadius: 10, padding: 16 }}>
                    <div style={{ fontSize: 12, color: S.text2, fontWeight: 700, marginBottom: 12 }}>+ ADD QUESTION</div>
                    <textarea placeholder="Question text..." value={newQuestion.question} onChange={e => setNewQuestion(p => ({ ...p, question: e.target.value }))} rows={2}
                      style={{ width: "100%", background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 7, padding: "8px 10px", color: S.text, fontSize: 13, resize: "vertical", marginBottom: 10 }} />
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 10 }}>
                      {newQuestion.options.map((opt, idx) => (
                        <div key={idx} style={{ display: "flex", gap: 6 }}>
                          <input
                            type="radio"
                            checked={newQuestion.correct === idx}
                            onChange={() => setNewQuestion(p => ({ ...p, correct: idx }))}
                            style={{ marginTop: 8 }}
                          />
                          <input placeholder={`Option ${idx + 1}`} value={opt} onChange={e => { const opts = [...newQuestion.options]; opts[idx] = e.target.value; setNewQuestion(p => ({ ...p, options: opts })); }}
                            style={{ flex: 1, background: S.surface2, border: `1px solid ${newQuestion.correct === idx ? "#3fb95040" : S.border}`, borderRadius: 7, padding: "7px 10px", color: S.text, fontSize: 13 }} />
                        </div>
                      ))}
                    </div>
                    <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
                      <input placeholder="Explanation (shown after answering)" value={newQuestion.explanation} onChange={e => setNewQuestion(p => ({ ...p, explanation: e.target.value }))}
                        style={{ flex: 1, background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 7, padding: "7px 10px", color: S.text, fontSize: 13 }} />
                      <input type="number" placeholder="XP" value={newQuestion.xp} onChange={e => setNewQuestion(p => ({ ...p, xp: Number(e.target.value) }))}
                        style={{ width: 60, background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 7, padding: "7px 10px", color: S.text, fontSize: 13 }} />
                    </div>
                    <button onClick={addQuestion} style={{ background: S.accent, color: "#fff", border: "none", borderRadius: 8, padding: "9px 20px", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>Add Question</button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Bitcoin Fundamentals", "description": "Understand how Bitcoin works from first principles — mining, UTXO model, halvings, and self-custody.", "url": "https://degen0x.com/admin/courses", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
    </main>
  );
}
