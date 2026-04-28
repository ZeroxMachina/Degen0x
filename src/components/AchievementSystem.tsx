'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  xp: number;
  unlocked: boolean;
  unlockedAt?: Date;
  progress: number;
  maxProgress: number;
  category: 'exploration' | 'learning' | 'tools' | 'interaction' | 'mastery';
}

export interface AchievementContextType {
  achievements: Achievement[];
  userXP: number;
  userLevel: number;
  levelTitle: string;
  unlockedCount: number;
  unlockAchievement: (achievementId: string) => void;
  updateProgress: (achievementId: string, progress: number) => void;
  resetAchievements: () => void;
}

const AchievementContext = createContext<AchievementContextType | undefined>(undefined);

export const useAchievements = () => {
  const context = useContext(AchievementContext);
  if (!context) {
    throw new Error('useAchievements must be used within AchievementProvider');
  }
  return context;
};

const INITIAL_ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first-trade',
    title: 'First Trade',
    description: 'Visited a tools page for the first time',
    icon: '🚀',
    xp: 50,
    unlocked: false,
    progress: 0,
    maxProgress: 1,
    category: 'exploration',
  },
  {
    id: 'diamond-hands',
    title: 'Diamond Hands',
    description: 'Read 5 or more learn articles',
    icon: '💎',
    xp: 150,
    unlocked: false,
    progress: 0,
    maxProgress: 5,
    category: 'learning',
  },
  {
    id: 'whale-watcher',
    title: 'Whale Watcher',
    description: 'Used the whale tracker tool',
    icon: '🐋',
    xp: 100,
    unlocked: false,
    progress: 0,
    maxProgress: 1,
    category: 'tools',
  },
  {
    id: 'defi-degen',
    title: 'DeFi Degen',
    description: 'Visited 3 or more DeFi pages',
    icon: '🤖',
    xp: 120,
    unlocked: false,
    progress: 0,
    maxProgress: 3,
    category: 'exploration',
  },
  {
    id: 'tax-season',
    title: 'Tax Season',
    description: 'Visited the tax calculator',
    icon: '📊',
    xp: 75,
    unlocked: false,
    progress: 0,
    maxProgress: 1,
    category: 'tools',
  },
  {
    id: 'hodl-master',
    title: 'HODL Master',
    description: 'Spent 5 or more minutes on the site',
    icon: '⏰',
    xp: 200,
    unlocked: false,
    progress: 0,
    maxProgress: 5,
    category: 'interaction',
  },
  {
    id: 'explorer',
    title: 'Explorer',
    description: 'Visited 10 or more unique pages',
    icon: '🗺️',
    xp: 250,
    unlocked: false,
    progress: 0,
    maxProgress: 10,
    category: 'exploration',
  },
  {
    id: 'crypto-scholar',
    title: 'Crypto Scholar',
    description: 'Read 3 or more learn articles',
    icon: '📚',
    xp: 100,
    unlocked: false,
    progress: 0,
    maxProgress: 3,
    category: 'learning',
  },
  {
    id: 'tool-master',
    title: 'Tool Master',
    description: 'Used 5 or more tools',
    icon: '🛠️',
    xp: 180,
    unlocked: false,
    progress: 0,
    maxProgress: 5,
    category: 'tools',
  },
  {
    id: 'comparison-king',
    title: 'Comparison King',
    description: 'Viewed 3 or more comparison pages',
    icon: '👑',
    xp: 140,
    unlocked: false,
    progress: 0,
    maxProgress: 3,
    category: 'exploration',
  },
];

const LEVEL_THRESHOLDS = [
  { xp: 0, title: 'Noob', color: '#64748b' },
  { xp: 100, title: 'Trader', color: '#3b82f6' },
  { xp: 500, title: 'Whale', color: '#f59e0b' },
  { xp: 1000, title: 'Satoshi', color: '#8b5cf6' },
];

interface NotificationState {
  id: string;
  achievementId: string;
  title: string;
  message: string;
  icon: string;
  timestamp: number;
}

function AchievementNotification({ notification, onClose }: { notification: NotificationState; onClose: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-fade-in-up">
      <div className="glass p-4 rounded-lg min-w-[300px] max-w-[400px] border border-transparent hover:border-[#6366f1]/30">
        <div className="flex items-start gap-3">
          <div className="text-3xl flex-shrink-0">{notification.icon}</div>
          <div className="flex-1">
            <h3 className="font-bold text-[#6366f1] text-sm">Achievement Unlocked!</h3>
            <p className="text-[var(--color-text)] text-sm font-semibold mt-1">{notification.title}</p>
            <p className="text-[var(--color-text-secondary)] text-xs mt-1">{notification.message}</p>
          </div>
          <button
            onClick={onClose}
            className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] flex-shrink-0 transition-colors"
            aria-label="Close"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export function AchievementProvider({ children }: { children: React.ReactNode }) {
  const [achievements, setAchievements] = useState<Achievement[]>(INITIAL_ACHIEVEMENTS);
  const [userXP, setUserXP] = useState(0);
  const [notifications, setNotifications] = useState<NotificationState[]>([]);
  const [visitedPages, setVisitedPages] = useState<Set<string>>(new Set());
  const [sessionStartTime] = useState(Date.now());

  const userLevel = LEVEL_THRESHOLDS.reduce((prev, current) => {
    return userXP >= current.xp ? current : prev;
  }, LEVEL_THRESHOLDS[0]);

  const unlockedCount = achievements.filter((a) => a.unlocked).length;

  const unlockAchievement = useCallback(
    (achievementId: string) => {
      setAchievements((prev) =>
        prev.map((achievement) => {
          if (achievement.id === achievementId && !achievement.unlocked) {
            const now = new Date();
            setUserXP((xp) => xp + achievement.xp);

            const notification: NotificationState = {
              id: `notif-${Date.now()}`,
              achievementId,
              title: achievement.title,
              message: `+${achievement.xp} XP`,
              icon: achievement.icon,
              timestamp: Date.now(),
            };

            setNotifications((prev) => [...prev, notification]);

            return {
              ...achievement,
              unlocked: true,
              unlockedAt: now,
            };
          }
          return achievement;
        })
      );
    },
    []
  );

  const updateProgress = useCallback((achievementId: string, progress: number) => {
    setAchievements((prev) =>
      prev.map((achievement) => {
        if (achievement.id === achievementId && !achievement.unlocked) {
          const newProgress = Math.min(progress, achievement.maxProgress);

          if (newProgress >= achievement.maxProgress) {
            setTimeout(() => unlockAchievement(achievementId), 300);
          }

          return {
            ...achievement,
            progress: newProgress,
          };
        }
        return achievement;
      })
    );
  }, [unlockAchievement]);

  const resetAchievements = useCallback(() => {
    setAchievements(INITIAL_ACHIEVEMENTS);
    setUserXP(0);
    setVisitedPages(new Set());
    setNotifications([]);
  }, []);

  // Track page visits
  useEffect(() => {
    const pathname = window.location.pathname;
    setVisitedPages((prev) => {
      const updated = new Set(prev);
      updated.add(pathname);

      // Update explorer achievement
      updateProgress('explorer', updated.size);

      return updated;
    });

    // Track page-specific achievements
    if (pathname.includes('/tools') || pathname.includes('/compare')) {
      updateProgress('first-trade', 1);
    }
    if (pathname.includes('/defi') || pathname.includes('/dex') || pathname.includes('/lp')) {
      setAchievements((prev) =>
        prev.map((a) => {
          if (a.id === 'defi-degen') {
            return { ...a, progress: Math.min(a.progress + 1, a.maxProgress) };
          }
          return a;
        })
      );
      updateProgress('defi-degen', 1);
    }
    if (pathname.includes('/learn')) {
      updateProgress('crypto-scholar', 1);
      updateProgress('diamond-hands', 1);
    }
    if (pathname.includes('/whale')) {
      updateProgress('whale-watcher', 1);
    }
    if (pathname.includes('/tax')) {
      updateProgress('tax-season', 1);
    }
    if (pathname.includes('/compare')) {
      updateProgress('comparison-king', 1);
    }
  }, [updateProgress]);

  // Track time on site (every minute)
  useEffect(() => {
    const checkSessionTime = setInterval(() => {
      const elapsedMinutes = Math.floor((Date.now() - sessionStartTime) / 60000);
      updateProgress('hodl-master', elapsedMinutes);
    }, 60000);

    return () => clearInterval(checkSessionTime);
  }, [sessionStartTime, updateProgress]);

  // Track tool usage
  useEffect(() => {
    const trackToolUse = (event: CustomEvent) => {
      updateProgress('tool-master', 1);
    };

    window.addEventListener('tool-used' as any, trackToolUse);
    return () => window.removeEventListener('tool-used' as any, trackToolUse);
  }, [updateProgress]);

  const value: AchievementContextType = {
    achievements,
    userXP,
    userLevel: userLevel as any,
    levelTitle: userLevel.title,
    unlockedCount,
    unlockAchievement,
    updateProgress,
    resetAchievements,
  };

  return (
    <AchievementContext.Provider value={value}>
      <div>
        {children}
        <div className="fixed bottom-4 right-4 pointer-events-none space-y-3 z-50">
          {notifications.map((notification) => (
            <div key={notification.id} className="pointer-events-auto">
              <AchievementNotification
                notification={notification}
                onClose={() => setNotifications((prev) => prev.filter((n) => n.id !== notification.id))}
              />
            </div>
          ))}
        </div>
      </div>
    </AchievementContext.Provider>
  );
}
