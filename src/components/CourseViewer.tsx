'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import type { Course, CourseLesson, CourseChapter } from '@/data/courses';

// ─── Quiz Engine ─────────────────────────────────────────────────────────────
function QuizEngine({
  lesson,
  onComplete,
}: {
  lesson: CourseLesson;
  onComplete: (xpEarned: number) => void;
}) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const questions = lesson.quiz ?? [];
  const currentQ = questions[questionIndex];

  const handleSelect = (idx: number) => {
    if (showResult) return;
    setSelectedAnswer(idx);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    const isCorrect = selectedAnswer === currentQ.correctIndex;
    if (isCorrect) setCorrectCount((c) => c + 1);
    setShowResult(true);
  };

  const handleNext = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex((i) => i + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setFinished(true);
      const score = (correctCount + (selectedAnswer === currentQ.correctIndex ? 1 : 0)) / questions.length;
      const xpEarned = Math.round(lesson.xp * score);
      onComplete(xpEarned);
    }
  };

  if (questions.length === 0) {
    return (
      <div className="text-center py-8 text-[#8e8e93]">No quiz questions available.</div>
    );
  }

  if (finished) {
    const finalScore = Math.round(((correctCount + (selectedAnswer === currentQ.correctIndex ? 1 : 0)) / questions.length) * 100);
    const xpEarned = Math.round(lesson.xp * (finalScore / 100));
    return (
      <div className="text-center py-8">
        <div className="text-5xl mb-4">{finalScore >= 80 ? '🎉' : finalScore >= 50 ? '📚' : '💪'}</div>
        <div className="text-white font-bold text-xl mb-2">
          {finalScore >= 80 ? 'Excellent!' : finalScore >= 50 ? 'Good effort!' : 'Keep practicing!'}
        </div>
        <div className="text-[#8e8e93] mb-4">You scored {finalScore}% ({correctCount}/{questions.length} correct)</div>
        <div className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-300 font-bold px-4 py-2 rounded-xl border border-indigo-500/30">
          ⚡ +{xpEarned} XP earned
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Progress */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-[#8e8e93] text-sm">Question {questionIndex + 1} of {questions.length}</span>
        <div className="flex gap-1">
          {questions.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${i < questionIndex ? 'bg-green-500' : i === questionIndex ? 'bg-indigo-400' : 'bg-[#3a3a3c]'}`}
            />
          ))}
        </div>
      </div>

      {/* Question */}
      <div className="bg-[#2c2c2e] rounded-xl p-4 mb-4">
        <p className="text-white font-medium leading-relaxed">{currentQ.question}</p>
      </div>

      {/* Options */}
      <div className="space-y-2 mb-4">
        {currentQ.options.map((opt, idx) => {
          let bgClass = 'bg-[#2c2c2e] border-[#3a3a3c] text-[#aeaeb2] hover:border-[#636366]';
          if (showResult) {
            if (idx === currentQ.correctIndex) {
              bgClass = 'bg-green-500/15 border-green-500/50 text-green-300';
            } else if (idx === selectedAnswer) {
              bgClass = 'bg-red-500/15 border-red-500/50 text-red-300';
            }
          } else if (selectedAnswer === idx) {
            bgClass = 'bg-indigo-500/20 border-indigo-500/50 text-white';
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={showResult}
              className={`w-full text-left px-4 py-3 rounded-xl border transition-all text-sm ${bgClass}`}
            >
              <span className="font-semibold mr-2">{String.fromCharCode(65 + idx)}.</span>
              {opt}
              {showResult && idx === currentQ.correctIndex && (
                <span className="ml-2 text-green-400">✓</span>
              )}
              {showResult && idx === selectedAnswer && idx !== currentQ.correctIndex && (
                <span className="ml-2 text-red-400">✗</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {showResult && (
        <div className={`rounded-xl p-4 mb-4 text-sm ${selectedAnswer === currentQ.correctIndex ? 'bg-green-500/10 border border-green-500/20 text-green-200' : 'bg-orange-500/10 border border-orange-500/20 text-orange-200'}`}>
          <strong>Explanation:</strong> {currentQ.explanation}
        </div>
      )}

      {/* Buttons */}
      {!showResult ? (
        <button
          onClick={handleSubmit}
          disabled={selectedAnswer === null}
          className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-[#2c2c2e] disabled:text-[#636366] text-white font-semibold py-3 rounded-xl transition-colors"
        >
          Submit Answer
        </button>
      ) : (
        <button
          onClick={handleNext}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition-colors"
        >
          {questionIndex < questions.length - 1 ? 'Next Question →' : 'Finish Quiz →'}
        </button>
      )}
    </div>
  );
}

// ─── Lesson View ──────────────────────────────────────────────────────────────
function LessonView({
  lesson,
  onComplete,
  isCompleted,
}: {
  lesson: CourseLesson;
  onComplete: (xpEarned: number) => void;
  isCompleted: boolean;
}) {
  const [readTimerDone, setReadTimerDone] = useState(isCompleted);

  useEffect(() => {
    if (lesson.type === 'read' && !isCompleted) {
      const timer = setTimeout(() => setReadTimerDone(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [lesson.type, isCompleted]);

  if (lesson.type === 'quiz') {
    return (
      <div>
        <div className="bg-[#1c1c1e] rounded-2xl p-5 border border-[#2c2c2e] mb-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg">✏️</span>
            <span className="text-white font-bold">{lesson.title}</span>
          </div>
          <p className="text-[#8e8e93] text-sm">{lesson.description}</p>
        </div>
        {isCompleted ? (
          <div className="text-center py-6 bg-green-500/10 rounded-2xl border border-green-500/20">
            <div className="text-3xl mb-2">✅</div>
            <div className="text-green-400 font-bold">Quiz completed</div>
            <div className="text-[#8e8e93] text-sm mt-1">⚡ {lesson.xp} XP earned</div>
          </div>
        ) : (
          <div className="bg-[#1c1c1e] rounded-2xl p-5 border border-[#2c2c2e]">
            <QuizEngine lesson={lesson} onComplete={onComplete} />
          </div>
        )}
      </div>
    );
  }

  // Read lesson
  return (
    <div>
      <div className="bg-[#1c1c1e] rounded-2xl p-5 border border-[#2c2c2e] mb-4">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-lg">📖</span>
          <span className="text-white font-bold">{lesson.title}</span>
        </div>
        <p className="text-[#aeaeb2] text-sm leading-relaxed">{lesson.description}</p>
      </div>

      {lesson.guideSlug ? (
        <div className="bg-gradient-to-r from-indigo-900/30 to-cyan-900/20 rounded-2xl p-5 border border-indigo-500/20 mb-4">
          <div className="flex items-start gap-3">
            <span className="text-2xl">📄</span>
            <div>
              <div className="text-white font-bold mb-1">Read the full guide</div>
              <p className="text-[#8e8e93] text-sm mb-3">
                This lesson is powered by our in-depth guide. Read it to learn the concepts, then mark as complete.
              </p>
              <Link
                href={`/learn/${lesson.guideSlug}`}
                target="_blank"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors"
              >
                Open Guide ↗
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-[#1c1c1e] rounded-2xl p-5 border border-[#2c2c2e] mb-4">
          <div className="prose prose-invert prose-sm max-w-none">
            <p className="text-[#aeaeb2] leading-relaxed">
              This lesson covers: <strong className="text-white">{lesson.description}</strong>
            </p>
            <p className="text-[#aeaeb2] leading-relaxed mt-3">
              Key concepts: {lesson.description.toLowerCase().includes('what') ? 'definitions, examples, real-world applications' : 'practical techniques, comparisons, best practices'}.
            </p>
            <div className="mt-4 p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/20">
              <p className="text-indigo-200 text-sm">
                💡 <strong>Quick Summary:</strong> Complete this lesson at your own pace. Mark it done when you&apos;re ready to move on.
              </p>
            </div>
          </div>
        </div>
      )}

      {isCompleted ? (
        <div className="flex items-center gap-2 justify-center py-3 bg-green-500/10 rounded-xl border border-green-500/20 text-green-400 text-sm font-semibold">
          ✅ Completed · ⚡ {lesson.xp} XP earned
        </div>
      ) : (
        <button
          onClick={() => onComplete(lesson.xp)}
          disabled={!readTimerDone}
          className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-[#2c2c2e] disabled:text-[#636366] disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition-colors"
        >
          {readTimerDone ? `Mark as Complete (+${lesson.xp} XP)` : 'Reading…'}
        </button>
      )}
    </div>
  );
}

// ─── Chapter Accordion ────────────────────────────────────────────────────────
function ChapterRow({
  chapter,
  chapterIndex,
  completedLessons,
  activeLesson,
  onSelectLesson,
}: {
  chapter: CourseChapter;
  chapterIndex: number;
  completedLessons: Set<string>;
  activeLesson: string | null;
  onSelectLesson: (lessonId: string) => void;
}) {
  const completedCount = chapter.lessons.filter((l) => completedLessons.has(l.id)).length;
  const isChapterComplete = completedCount === chapter.lessons.length;
  const [open, setOpen] = useState(chapterIndex === 0);

  return (
    <div className="bg-[#1c1c1e] rounded-2xl overflow-hidden border border-[#2c2c2e] mb-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 hover:bg-[#2c2c2e] transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold ${isChapterComplete ? 'bg-green-500 text-white' : 'bg-[#2c2c2e] text-[#8e8e93]'}`}>
            {isChapterComplete ? '✓' : chapterIndex + 1}
          </div>
          <div className="text-left">
            <div className="text-white font-semibold text-sm">{chapter.title}</div>
            <div className="text-[#636366] text-xs">{completedCount}/{chapter.lessons.length} lessons · ⚡ {chapter.totalXP} XP</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {/* Progress dots */}
          <div className="flex gap-1">
            {chapter.lessons.map((l) => (
              <div
                key={l.id}
                className={`w-1.5 h-1.5 rounded-full ${completedLessons.has(l.id) ? 'bg-green-400' : 'bg-[#3a3a3c]'}`}
              />
            ))}
          </div>
          <span className={`text-[#8e8e93] transition-transform ${open ? 'rotate-180' : ''}`}>▾</span>
        </div>
      </button>

      {open && (
        <div className="border-t border-[#2c2c2e] px-2 py-2">
          {chapter.lessons.map((lesson) => {
            const isComplete = completedLessons.has(lesson.id);
            const isActive = activeLesson === lesson.id;
            return (
              <button
                key={lesson.id}
                onClick={() => onSelectLesson(lesson.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all ${
                  isActive ? 'bg-indigo-500/20 border border-indigo-500/30' : 'hover:bg-[#2c2c2e]'
                }`}
              >
                <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0 ${isComplete ? 'bg-green-500 text-white' : 'bg-[#3a3a3c] text-[#636366]'}`}>
                  {isComplete ? '✓' : lesson.type === 'quiz' ? '?' : '•'}
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`text-sm font-medium truncate ${isActive ? 'text-indigo-300' : isComplete ? 'text-[#8e8e93]' : 'text-white'}`}>
                    {lesson.title}
                  </div>
                  <div className="text-[#48484a] text-[10px]">
                    {lesson.type === 'quiz' ? '✏️ Quiz' : '📖 Read'} · {lesson.estimatedMinutes}min · ⚡{lesson.xp}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── Main Course Viewer ───────────────────────────────────────────────────────
export default function CourseViewer({ course }: { course: Course }) {
  const storageKey = `degen0x_course_${course.slug}`;
  const xpKey = 'degen0x_xp';
  const badgesKey = 'degen0x_badges';
  const progressKey = 'degen0x_course_progress';

  const allLessons = course.chapters.flatMap((ch) => ch.lessons);

  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
  const [activeLesson, setActiveLesson] = useState<string | null>(allLessons[0]?.id ?? null);
  const [totalXP, setTotalXP] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        const parsed = JSON.parse(stored);
        setCompletedLessons(new Set(parsed.completed ?? []));
      }
      const storedXP = localStorage.getItem(xpKey);
      if (storedXP) setTotalXP(parseInt(storedXP, 10));
    } catch {
      // ignore
    }
  }, [storageKey]);

  const handleLessonComplete = useCallback((lessonId: string, xpEarned: number) => {
    setCompletedLessons((prev) => {
      if (prev.has(lessonId)) return prev;
      const updated = new Set(prev);
      updated.add(lessonId);

      // Save to localStorage
      try {
        localStorage.setItem(storageKey, JSON.stringify({ completed: Array.from(updated) }));

        // Update total XP
        const currentXP = parseInt(localStorage.getItem(xpKey) ?? '0', 10);
        const newXP = currentXP + xpEarned;
        localStorage.setItem(xpKey, newXP.toString());
        setTotalXP(newXP);

        // Update course progress
        const earnedSoFar = allLessons
          .filter((l) => updated.has(l.id))
          .reduce((sum, l) => sum + l.xp, 0);
        const progressData = JSON.parse(localStorage.getItem(progressKey) ?? '{}');
        progressData[course.slug] = earnedSoFar;
        localStorage.setItem(progressKey, JSON.stringify(progressData));

        // Check course completion
        if (updated.size === allLessons.length) {
          const badgesData = JSON.parse(localStorage.getItem(badgesKey) ?? '[]');
          if (!badgesData.includes(course.slug)) {
            badgesData.push(course.slug);
            localStorage.setItem(badgesKey, JSON.stringify(badgesData));
            setShowCelebration(true);
            setTimeout(() => setShowCelebration(false), 5000);
          }
        }
      } catch {
        // ignore
      }

      return updated;
    });

    // Auto-advance to next lesson
    const currentIndex = allLessons.findIndex((l) => l.id === lessonId);
    if (currentIndex < allLessons.length - 1) {
      setTimeout(() => setActiveLesson(allLessons[currentIndex + 1].id), 800);
    }
  }, [allLessons, course.slug, storageKey]);

  const currentLesson = allLessons.find((l) => l.id === activeLesson);
  const completedCount = completedLessons.size;
  const progressPct = allLessons.length > 0 ? Math.round((completedCount / allLessons.length) * 100) : 0;
  const earnedXP = allLessons.filter((l) => completedLessons.has(l.id)).reduce((s, l) => s + l.xp, 0);

  return (
    <div>
      {/* Celebration overlay */}
      {showCelebration && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div className="bg-gradient-to-br from-indigo-600 to-cyan-600 rounded-3xl p-8 text-center shadow-2xl max-w-sm mx-4 animate-bounce">
            <div className="text-6xl mb-3">{course.badgeEmoji}</div>
            <div className="text-white font-bold text-2xl mb-1">Course Complete!</div>
            <div className="text-indigo-200 mb-2">{course.title}</div>
            <div className="text-white font-bold text-lg">⚡ +{course.totalXP} XP · 🏆 {course.badgeName}</div>
          </div>
        </div>
      )}

      {/* Course progress */}
      <div className="bg-[#1c1c1e] rounded-2xl p-4 border border-[#2c2c2e] mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[#8e8e93] text-sm">Course Progress</span>
          <span className="text-white text-sm font-bold">{completedCount}/{allLessons.length} · ⚡ {earnedXP}/{course.totalXP} XP</span>
        </div>
        <div className="bg-[#2c2c2e] rounded-full h-2 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${progressPct}%`, background: progressPct >= 100 ? '#22c55e' : `linear-gradient(90deg, ${course.color}, ${course.color}99)` }}
          />
        </div>
        <div className="text-[#636366] text-xs mt-1">{progressPct}% complete</div>
      </div>

      {/* Lesson Content */}
      {currentLesson && (
        <div className="bg-[#1c1c1e] rounded-2xl p-5 border border-[#2c2c2e] mb-4">
          <LessonView
            key={currentLesson.id}
            lesson={currentLesson}
            onComplete={(xp) => handleLessonComplete(currentLesson.id, xp)}
            isCompleted={completedLessons.has(currentLesson.id)}
          />
        </div>
      )}

      {/* Chapter List */}
      <div>
        <div className="text-[#8e8e93] text-xs font-bold uppercase tracking-wider mb-3">Course Outline</div>
        {course.chapters.map((chapter, i) => (
          <ChapterRow
            key={chapter.id}
            chapter={chapter}
            chapterIndex={i}
            completedLessons={completedLessons}
            activeLesson={activeLesson}
            onSelectLesson={setActiveLesson}
          />
        ))}
      </div>
    </div>
  );
}
