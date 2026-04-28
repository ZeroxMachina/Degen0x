'use client';

import { useAchievements } from '@/components/AchievementSystem';
import { useMemo, useState } from 'react';

const LEVEL_THRESHOLDS = [
  { xp: 0, title: 'Noob', color: '#64748b', gradientFrom: '#64748b', gradientTo: '#94a3b8' },
  { xp: 100, title: 'Trader', color: '#3b82f6', gradientFrom: '#3b82f6', gradientTo: '#60a5fa' },
  { xp: 500, title: 'Whale', color: '#f59e0b', gradientFrom: '#f59e0b', gradientTo: '#fbbf24' },
  { xp: 1000, title: 'Satoshi', color: '#8b5cf6', gradientFrom: '#8b5cf6', gradientTo: '#a78bfa' },
];

type FilterCategory = 'all' | 'exploration' | 'learning' | 'tools' | 'interaction' | 'mastery';

export default function AchievementsPage() {
  const { achievements, userXP, userLevel, levelTitle, unlockedCount } = useAchievements();
  const [filterCategory, setFilterCategory] = useState<FilterCategory>('all');

  const nextLevelThreshold = useMemo(() => {
    const nextLevel = LEVEL_THRESHOLDS.find((level) => userXP < level.xp);
    return nextLevel ? nextLevel.xp : LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1].xp + 500;
  }, [userXP]);

  const xpProgressPercent = useMemo(() => {
    const currentLevelXP = LEVEL_THRESHOLDS.find((l) => l.title === levelTitle)?.xp || 0;
    const xpInCurrentLevel = userXP - currentLevelXP;
    const xpNeededForNextLevel = nextLevelThreshold - currentLevelXP;
    return Math.min(100, (xpInCurrentLevel / xpNeededForNextLevel) * 100);
  }, [userXP, levelTitle, nextLevelThreshold]);

  const filteredAchievements = useMemo(() => {
    if (filterCategory === 'all') {
      return achievements;
    }
    return achievements.filter((a) => a.category === filterCategory);
  }, [achievements, filterCategory]);

  const unlockedFiltered = filteredAchievements.filter((a) => a.unlocked).length;
  const totalFiltered = filteredAchievements.length;

  return (
    <main className="min-h-screen py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Achievements</h1>
          <p className="text-[var(--color-text-secondary)] text-lg">
            Unlock achievements by exploring the site, using tools, and learning about crypto
          </p>
        </div>

        {/* User Level Card */}
        <div className="mb-12 glass p-8 rounded-[var(--glass-radius-lg)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Level Display */}
            <div className="flex flex-col justify-center">
              <div className="text-center md:text-left">
                <p className="text-[var(--color-text-secondary)] text-sm font-semibold mb-2 uppercase tracking-wider">
                  Current Level
                </p>
                <div className="flex items-baseline gap-3">
                  <h2 className="text-6xl md:text-7xl font-bold" style={{ color: userLevel.color }}>
                    {levelTitle}
                  </h2>
                  <span className="text-3xl font-bold text-[var(--color-text)]">{userXP} XP</span>
                </div>
                <p className="text-[var(--color-text-secondary)] mt-4 text-sm">
                  Unlocked {unlockedCount} of {achievements.length} achievements
                </p>
              </div>
            </div>

            {/* XP Progress */}
            <div className="flex flex-col justify-center">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-[var(--color-text)]">Level Progress</span>
                  <span className="text-xs text-[var(--color-text-secondary)]">
                    {userXP} / {nextLevelThreshold} XP
                  </span>
                </div>
                <div className="w-full h-3 glass-subtle rounded-full overflow-hidden">
                  <div
                    className="h-full transition-all duration-500 ease-out"
                    style={{
                      width: `${xpProgressPercent}%`,
                      background: `linear-gradient(90deg, ${userLevel.gradientFrom}, ${userLevel.gradientTo})`,
                    }}
                  />
                </div>
                <p className="text-xs text-[var(--color-text-secondary)] mt-3">
                  {nextLevelThreshold - userXP} XP until next level
                </p>
              </div>

              {/* Level Milestones */}
              <div className="mt-6 grid grid-cols-4 gap-2">
                {LEVEL_THRESHOLDS.map((level) => (
                  <div
                    key={level.title}
                    className={`p-2 rounded-lg text-center transition-all ${
                      userXP >= level.xp
                        ? 'glass-elevated border-transparent'
                        : 'glass-subtle border border-[var(--glass-border)] opacity-50'
                    }`}
                  >
                    <p className="text-xs font-bold" style={{ color: userXP >= level.xp ? level.color : 'inherit' }}>
                      {level.title}
                    </p>
                    <p className="text-[10px] text-[var(--color-text-secondary)]">{level.xp} XP</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => setFilterCategory('all')}
            className={`px-4 py-2 rounded-full transition-all font-semibold text-sm ${
              filterCategory === 'all'
                ? 'glass-elevated border-transparent text-[#6366f1]'
                : 'glass-subtle border border-[var(--glass-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text)]'
            }`}
          >
            All ({achievements.length})
          </button>
          <button
            onClick={() => setFilterCategory('exploration')}
            className={`px-4 py-2 rounded-full transition-all font-semibold text-sm ${
              filterCategory === 'exploration'
            }`}
          >
            Exploration
          </button>
          <button
            onClick={() => setFilterCategory('learning')}
            className={`px-4 py-2 rounded-full transition-all font-semibold text-sm ${
              filterCategory === 'learning'
            }`}
          >
            Learning
          </button>
          <button
            onClick={() => setFilterCategory('tools')}
            className={`px-4 py-2 rounded-full transition-all font-semibold text-sm ${
              filterCategory === 'tools'
            }`}
          >
            Tools
          </button>
          <button
            onClick={() => setFilterCategory('interaction')}
            className={`px-4 py-2 rounded-full transition-all font-semibold text-sm ${
              filterCategory === 'interaction'
            }`}
          >
            Interaction
          </button>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredAchievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`group glass p-6 rounded-[var(--glass-radius-lg)] transition-all card-hover relative overflow-hidden ${
                achievement.unlocked ? '' : 'opacity-75'
              }`}
              style={{
                background: achievement.unlocked
                  ? 'var(--glass-bg)'
                  : 'rgba(255, 255, 255, 0.02)',
              }}
            >
              {/* Unlocked Badge */}
              {achievement.unlocked && (
                <div className="absolute top-3 right-3">
                  <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-[#22c55e]/20 border border-[#22c55e]/30">
                    <svg className="w-3 h-3 text-[#22c55e]" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-[10px] font-bold text-[#22c55e]">Unlocked</span>
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {achievement.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">{achievement.title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)] mb-4">{achievement.description}</p>

              {/* Progress Bar */}
              {achievement.maxProgress > 1 && (
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold text-[var(--color-text)]">Progress</span>
                    <span className="text-xs text-[var(--color-text-secondary)]">
                      {Math.min(achievement.progress, achievement.maxProgress)} / {achievement.maxProgress}
                    </span>
                  </div>
                  <div className="w-full h-2 glass-subtle rounded-full overflow-hidden">
                    <div
                      className="h-full transition-all duration-300 bg-gradient-to-r from-[#6366f1] to-[#06b6d4]"
                      style={{
                        width: `${(achievement.progress / achievement.maxProgress) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              )}

              {/* XP Badge */}
              <div className="flex items-center justify-between pt-4 border-t border-[var(--glass-border)]">
                <span className="text-xs text-[var(--color-text-secondary)]">
                  {achievement.unlocked && 'Unlocked'}
                  {!achievement.unlocked && achievement.progress > 0 && 'In Progress'}
                  {!achievement.unlocked && achievement.progress === 0 && 'Locked'}
                </span>
                <div className="px-3 py-1 rounded-full bg-[#6366f1]/10 border border-[#6366f1]/20">
                  <span className="text-xs font-bold text-[#6366f1]">+{achievement.xp} XP</span>
                </div>
              </div>

              {achievement.unlockedAt && (
                <p className="text-[10px] text-[var(--color-text-secondary)] mt-3">
                  Unlocked on {achievement.unlockedAt.toLocaleDateString()}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="glass p-8 rounded-[var(--glass-radius-lg)] mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Your Stats</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-[#6366f1]">{userXP}</p>
              <p className="text-sm text-[var(--color-text-secondary)] mt-2">Total XP</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#22c55e]">{unlockedFiltered}</p>
              <p className="text-sm text-[var(--color-text-secondary)] mt-2">
                {filterCategory === 'all' ? 'Achievements' : 'in Category'}
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#f59e0b]">{levelTitle}</p>
              <p className="text-sm text-[var(--color-text-secondary)] mt-2">Current Level</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#06b6d4]">
                {Math.round((unlockedFiltered / totalFiltered) * 100)}%
              </p>
              <p className="text-sm text-[var(--color-text-secondary)] mt-2">Complete</p>
            </div>
          </div>
        </div>

        {/* Leaderboard Placeholder */}
        <div className="glass p-8 rounded-[var(--glass-radius-lg)]">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Top Achievers</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 glass-subtle rounded-lg border border-[var(--glass-border)]">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#6366f1] flex items-center justify-center text-white font-bold">
                  🥇
                </div>
                <div>
                  <p className="font-semibold text-[var(--color-text)]">You</p>
                  <p className="text-sm text-[var(--color-text-secondary)]">Your rank will appear here</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-[#6366f1]">{userXP} XP</p>
                <p className="text-sm text-[var(--color-text-secondary)]">{levelTitle}</p>
              </div>
            </div>

            <div className="text-center py-8 text-[var(--color-text-secondary)]">
              <p className="text-sm">Leaderboard feature coming soon</p>
              <p className="text-xs mt-2">Compete with other users across the platform</p>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass p-6 rounded-[var(--glass-radius-lg)] border border-[#6366f1]/20">
            <h3 className="font-bold text-[var(--color-text)] mb-3 flex items-center gap-2">
              <span className="text-lg">💡</span> Tips to Earn XP Faster
            </h3>
            <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
              <li>• Visit different pages to unlock the Explorer achievement</li>
              <li>• Read learning articles to become a Crypto Scholar</li>
              <li>• Try out our tools to become a Tool Master</li>
              <li>• Spend time on the site to earn the HODL Master badge</li>
              <li>• Compare different options to unlock Comparison King</li>
            </ul>
          </div>

          <div className="glass p-6 rounded-[var(--glass-radius-lg)] border border-[#06b6d4]/20">
            <h3 className="font-bold text-[var(--color-text)] mb-3 flex items-center gap-2">
              <span className="text-lg">🎮</span> Gamification Benefits
            </h3>
            <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
              <li>• Unlock achievements to track your crypto knowledge</li>
              <li>• Earn XP points as you explore the platform</li>
              <li>• Level up from Noob to Satoshi as you progress</li>
              <li>• Share your achievements with friends</li>
              <li>• Compete on the leaderboard</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
