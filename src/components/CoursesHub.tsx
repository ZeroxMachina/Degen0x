'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import {
  COURSES,
  LEVEL_META,
  THEME_META,
  type Course,
  type CourseLevel,
  type CourseTheme,
} from '@/data/courses';

// ─── XP Progress Helpers ────────────────────────────────────────────────────
const XP_PER_LEVEL = 500;

function getUserLevel(xp: number): { level: number; title: string; nextXP: number; progress: number } {
  const level = Math.floor(xp / XP_PER_LEVEL) + 1;
  const titles = ['Newcomer', 'Apprentice', 'Learner', 'Scholar', 'Expert', 'Master', 'Degen', 'Legend', 'Giga-Brain'];
  const title = titles[Math.min(level - 1, titles.length - 1)];
  const xpInCurrentLevel = xp % XP_PER_LEVEL;
  const progress = (xpInCurrentLevel / XP_PER_LEVEL) * 100;
  return { level, title, nextXP: XP_PER_LEVEL - xpInCurrentLevel, progress };
}

// ─── XP Badge ───────────────────────────────────────────────────────────────
function XPBadge({ xp, compact = false }: { xp: number; compact?: boolean }) {
  const { level, title, progress } = getUserLevel(xp);
  if (compact) {
    return (
      <span className="inline-flex items-center gap-1 bg-indigo-500/20 text-indigo-300 text-xs font-bold px-2 py-0.5 rounded-full border border-indigo-500/30">
        ⚡ Lv.{level} {title}
      </span>
    );
  }
  return (
    <div className="bg-[#1c1c1e] rounded-2xl p-5 border border-[#2c2c2e]">
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="text-white font-bold text-lg">Level {level} — {title}</div>
          <div className="text-[#8e8e93] text-sm">{xp.toLocaleString()} XP total</div>
        </div>
        <div className="text-4xl">⚡</div>
      </div>
      <div className="bg-[#2c2c2e] rounded-full h-2 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #6366f1, #06b6d4)' }}
        />
      </div>
      <div className="text-[#636366] text-xs mt-1.5">{Math.round(progress)}% to Level {level + 1}</div>
    </div>
  );
}

// ─── Course Card ─────────────────────────────────────────────────────────────
function CourseCard({ course, completedXP }: { course: Course; completedXP: number }) {
  const totalLessons = course.chapters.reduce((acc, ch) => acc + ch.lessons.length, 0);
  const completedPct = course.totalXP > 0 ? Math.min(100, Math.round((completedXP / course.totalXP) * 100)) : 0;
  const isCompleted = completedPct >= 100;
  const isStarted = completedXP > 0;

  return (
    <Link href={`/courses/${course.slug}`} className="group block">
      <div className="bg-[#1c1c1e] rounded-2xl overflow-hidden border border-[#2c2c2e] hover:border-[#48484a] transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5">
        {/* Top bar */}
        <div className="h-1.5" style={{ background: isCompleted ? '#22c55e' : `linear-gradient(90deg, ${course.color}cc, ${course.color}30)` }} />

        {/* Progress bar under top bar */}
        {isStarted && !isCompleted && (
          <div className="h-0.5 bg-[#2c2c2e]">
            <div className="h-full transition-all" style={{ width: `${completedPct}%`, background: course.color }} />
          </div>
        )}

        <div className="p-5">
          {/* Emoji + Level */}
          <div className="flex items-start justify-between mb-3">
            <div className="text-4xl">{course.emoji}</div>
            <div className="flex flex-col items-end gap-1">
              <span
                className="text-xs font-bold px-2 py-0.5 rounded-full border"
                style={{
                  background: `${LEVEL_META[course.level].color}15`,
                  color: LEVEL_META[course.level].color,
                  borderColor: `${LEVEL_META[course.level].color}30`,
                }}
              >
                {LEVEL_META[course.level].emoji} {LEVEL_META[course.level].label}
              </span>
              {isCompleted && (
                <span className="bg-green-500/15 text-green-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-green-500/30">
                  ✓ COMPLETE
                </span>
              )}
              {isStarted && !isCompleted && (
                <span className="bg-yellow-500/15 text-yellow-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-yellow-500/30">
                  {completedPct}% done
                </span>
              )}
            </div>
          </div>

          <h3 className="text-white font-bold text-[17px] leading-tight mb-1 group-hover:text-indigo-300 transition-colors">
            {course.title}
          </h3>
          <p className="text-[#8e8e93] text-sm mb-3 leading-snug line-clamp-2">{course.subtitle}</p>

          {/* Theme + Stats */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[#2c2c2e] text-[#aeaeb2] text-[11px] px-2 py-0.5 rounded-full">
              {THEME_META[course.theme].emoji} {THEME_META[course.theme].label}
            </span>
            <span className="bg-[#2c2c2e] text-[#aeaeb2] text-[11px] px-2 py-0.5 rounded-full">
              📖 {totalLessons} lessons
            </span>
            <span className="bg-[#2c2c2e] text-[#aeaeb2] text-[11px] px-2 py-0.5 rounded-full">
              ⏱️ {course.estimatedHours}h
            </span>
          </div>

          {/* XP + Rating */}
          <div className="flex items-center justify-between pt-3 border-t border-[#2c2c2e]">
            <div className="flex items-center gap-1.5">
              <span className="text-yellow-400 text-sm">★</span>
              <span className="text-white text-sm font-semibold">{course.rating}</span>
              <span className="text-[#48484a] text-xs">({course.enrollmentCount.toLocaleString()})</span>
            </div>
            <span className="bg-indigo-500/20 text-indigo-300 text-xs font-bold px-2.5 py-1 rounded-full border border-indigo-500/30">
              ⚡ {course.totalXP} XP
            </span>
          </div>

          {/* Badge preview */}
          <div className="mt-3 flex items-center gap-2 bg-[#2c2c2e] rounded-xl px-3 py-2">
            <span className="text-xl">{course.badgeEmoji}</span>
            <div>
              <div className="text-white text-xs font-semibold">Badge: {course.badgeName}</div>
              <div className="text-[#636366] text-[10px]">Complete the course to earn</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

// ─── Filters ────────────────────────────────────────────────────────────────
type FilterTab = 'all' | CourseLevel | CourseTheme;

// ─── Main Courses Hub ─────────────────────────────────────────────────────
export default function CoursesHub() {
  const [userXP, setUserXP] = useState(0);
  const [courseProgress, setCourseProgress] = useState<Record<string, number>>({});
  const [filter, setFilter] = useState<FilterTab>('all');
  const [earnedBadges, setEarnedBadges] = useState<string[]>([]);

  // Load progress from localStorage
  useEffect(() => {
    try {
      const storedXP = localStorage.getItem('degen0x_xp');
      const storedProgress = localStorage.getItem('degen0x_course_progress');
      const storedBadges = localStorage.getItem('degen0x_badges');
      if (storedXP) setUserXP(parseInt(storedXP, 10));
      if (storedProgress) setCourseProgress(JSON.parse(storedProgress));
      if (storedBadges) setEarnedBadges(JSON.parse(storedBadges));
    } catch {
      // ignore
    }
  }, []);

  const filteredCourses = COURSES.filter((c) => {
    if (filter === 'all') return true;
    return c.level === filter || c.theme === filter;
  });

  const totalAvailableXP = COURSES.reduce((sum, c) => sum + c.totalXP, 0);
  const completedCourses = COURSES.filter(
    (c) => (courseProgress[c.slug] ?? 0) >= c.totalXP
  );

  const levelInfo = getUserLevel(userXP);

  const filterButtons: { key: FilterTab; label: string; emoji: string }[] = [
    { key: 'all', label: 'All Courses', emoji: '📚' },
    { key: 'beginner', label: 'Beginner', emoji: '🟢' },
    { key: 'intermediate', label: 'Intermediate', emoji: '🟡' },
    { key: 'advanced', label: 'Advanced', emoji: '🔴' },
    { key: 'defi', label: 'DeFi', emoji: '🏛️' },
    { key: 'security', label: 'Security', emoji: '🛡️' },
    { key: 'solana', label: 'Solana', emoji: '◎' },
    { key: 'layer2', label: 'Layer 2', emoji: '⚡' },
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-white">
      {/* ── Hero ── */}
      <div className="border-b border-[#1c1c1e] bg-gradient-to-b from-[#0a0a0a] to-[#000000]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full px-3 py-1 text-xs font-bold mb-3">
                🎓 Free Forever
              </div>
              <h1 className="text-4xl font-bold text-white mb-2">
                Crypto Courses
              </h1>
              <p className="text-[#8e8e93] text-lg max-w-xl">
                The most comprehensive crypto curriculum — from beginner to expert. Earn XP, unlock badges, and track your progress.
              </p>
              <div className="flex items-center gap-4 mt-3 text-sm text-[#636366]">
                <span>📚 {COURSES.length} Courses</span>
                <span>⚡ {totalAvailableXP.toLocaleString()} XP available</span>
                <span>🏆 {COURSES.length} Badges to earn</span>
                <span>🆓 Always free</span>
              </div>
            </div>

            {/* User XP Card */}
            <div className="w-full md:w-72 flex-shrink-0">
              {userXP > 0 ? (
                <XPBadge xp={userXP} />
              ) : (
                <div className="bg-gradient-to-br from-indigo-900/30 to-cyan-900/20 rounded-2xl p-5 border border-indigo-500/20">
                  <div className="text-3xl mb-2">🎯</div>
                  <div className="text-white font-bold text-base mb-1">Start Earning XP</div>
                  <div className="text-[#8e8e93] text-sm mb-3">Complete lessons, pass quizzes, and level up your crypto knowledge</div>
                  <div className="text-indigo-300 text-xs font-bold">→ Sign in with wallet to save progress</div>
                </div>
              )}
            </div>
          </div>

          {/* Stats row */}
          {completedCourses.length > 0 && (
            <div className="flex gap-4 mb-6">
              <div className="bg-[#1c1c1e] rounded-xl px-4 py-2 border border-[#2c2c2e]">
                <div className="text-[#8e8e93] text-xs">Completed</div>
                <div className="text-white font-bold">{completedCourses.length}/{COURSES.length} courses</div>
              </div>
              <div className="bg-[#1c1c1e] rounded-xl px-4 py-2 border border-[#2c2c2e]">
                <div className="text-[#8e8e93] text-xs">Badges Earned</div>
                <div className="text-white font-bold">{earnedBadges.length}</div>
              </div>
              <div className="bg-[#1c1c1e] rounded-xl px-4 py-2 border border-[#2c2c2e]">
                <div className="text-[#8e8e93] text-xs">Your XP</div>
                <div className="text-white font-bold">⚡ {userXP.toLocaleString()}</div>
              </div>
            </div>
          )}

          {/* Filter Pills */}
          <div className="flex gap-2 flex-wrap">
            {filterButtons.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium border transition-all ${
                  filter === f.key
                    ? 'bg-white border-white text-black'
                    : 'bg-[#1c1c1e] border-[#3a3a3c] text-[#aeaeb2] hover:border-[#636366] hover:text-white'
                }`}
              >
                <span>{f.emoji}</span>
                <span>{f.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Course Grid */}
        <div className="mb-4 text-[#8e8e93] text-sm">
          {filter === 'all'
            ? `${COURSES.length} courses available`
            : `${filteredCourses.length} courses in this category`}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.slug}
              course={course}
              completedXP={courseProgress[course.slug] ?? 0}
            />
          ))}
        </div>

        {/* Learning Path CTA */}
        <div className="mt-12 bg-gradient-to-r from-[#1c1c1e] to-[#0a0a0a] rounded-2xl p-8 border border-[#2c2c2e]">
          <div className="max-w-2xl">
            <div className="text-3xl mb-3">🗺️</div>
            <h2 className="text-white font-bold text-2xl mb-2">Suggested Learning Path</h2>
            <p className="text-[#8e8e93] mb-6">New to crypto? Follow our recommended sequence to go from zero to DeFi power user.</p>
            <div className="flex flex-wrap items-center gap-2">
              {[
                { emoji: '🎓', title: 'Crypto 101', level: '1', slug: 'crypto-101' },
                { emoji: '🛡️', title: 'Security', level: '2', slug: 'crypto-security' },
                { emoji: '🏛️', title: 'DeFi', level: '3', slug: 'defi-masterclass' },
                { emoji: '◎', title: 'Solana', level: '4', slug: 'solana-deep-dive' },
                { emoji: '⚡', title: 'Layer 2', level: '5', slug: 'layer2-deep-dive' },
              ].map((step, i, arr) => (
                <React.Fragment key={step.slug}>
                  <Link
                    href={`/courses/${step.slug}`}
                    className="flex items-center gap-2 bg-[#2c2c2e] hover:bg-[#3a3a3c] rounded-xl px-4 py-2.5 border border-[#3a3a3c] transition-colors group"
                  >
                    <span className="text-xl">{step.emoji}</span>
                    <div>
                      <div className="text-white text-sm font-semibold group-hover:text-indigo-300 transition-colors">{step.title}</div>
                      <div className="text-[#636366] text-[10px]">Step {step.level}</div>
                    </div>
                  </Link>
                  {i < arr.length - 1 && (
                    <span className="text-[#48484a] text-lg">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Coming Soon */}
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          {[
            { emoji: '📈', title: 'Trading Masterclass', tag: 'Coming Soon', desc: 'Technical analysis, chart patterns, order types' },
            { emoji: '🎨', title: 'NFT Creator Course', tag: 'Coming Soon', desc: 'Create, launch, and market your NFT collection' },
            { emoji: '💼', title: 'Web3 Career Path', tag: 'Coming Soon', desc: 'Land a job in crypto — developer, marketer, researcher' },
          ].map((item) => (
            <div key={item.title} className="bg-[#0d0d0d] rounded-2xl p-5 border border-[#1c1c1e] opacity-70">
              <div className="text-2xl mb-2">{item.emoji}</div>
              <div className="text-white font-bold text-sm mb-1">{item.title}</div>
              <div className="text-[#636366] text-xs mb-2">{item.desc}</div>
              <span className="bg-[#2c2c2e] text-[#636366] text-[10px] px-2 py-0.5 rounded-full font-bold">{item.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
