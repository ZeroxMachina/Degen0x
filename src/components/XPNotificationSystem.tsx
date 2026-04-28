'use client';

/**
 * XPNotificationSystem.tsx — Sprint 45
 * Global XP notification layer for degen0x.
 * Listens to localStorage changes from CourseViewer and shows:
 *  • XP earned toasts (bottom-right)
 *  • Level-up celebration modal
 *  • Persistent XP bar in fixed top strip (shown after first XP)
 */

import { useEffect, useState, useCallback, useRef } from 'react';

/* ─── Constants ────────────────────────────────────────────────────────────── */
const XP_KEY = 'degen0x_xp';
const LEVEL_KEY = 'degen0x_level';

const LEVELS = [
  { level: 1, name: 'Newcomer',      xpRequired: 0,      color: '#8b949e', emoji: '🌱' },
  { level: 2, name: 'Apprentice',    xpRequired: 500,    color: '#58a6ff', emoji: '📖' },
  { level: 3, name: 'Learner',       xpRequired: 1500,   color: '#3fb950', emoji: '🔍' },
  { level: 4, name: 'Scholar',       xpRequired: 3000,   color: '#d29922', emoji: '🎓' },
  { level: 5, name: 'Expert',        xpRequired: 6000,   color: '#bc8cff', emoji: '⚡' },
  { level: 6, name: 'Master',        xpRequired: 10000,  color: '#f0883e', emoji: '🔥' },
  { level: 7, name: 'Degen',         xpRequired: 20000,  color: '#f85149', emoji: '💎' },
  { level: 8, name: 'Legend',        xpRequired: 40000,  color: '#39d353', emoji: '👑' },
  { level: 9, name: 'Giga-Brain',    xpRequired: 80000,  color: '#e3b341', emoji: '🧠' },
];

function getLevel(xp: number) {
  let current = LEVELS[0];
  for (const lvl of LEVELS) {
    if (xp >= lvl.xpRequired) current = lvl;
    else break;
  }
  const nextIdx = LEVELS.findIndex((l) => l.level === current.level + 1);
  const next = nextIdx >= 0 ? LEVELS[nextIdx] : null;
  const progress = next
    ? ((xp - current.xpRequired) / (next.xpRequired - current.xpRequired)) * 100
    : 100;
  return { current, next, progress: Math.min(100, progress) };
}

/* ─── Types ─────────────────────────────────────────────────────────────────  */
interface XPToast {
  id: string;
  xp: number;
  label: string;
  emoji: string;
}

/* ─── XP Bar Strip ───────────────────────────────────────────────────────── */
function XPBarStrip({ totalXP }: { totalXP: number }) {
  const { current, next, progress } = getLevel(totalXP);
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9990,
        background: 'rgba(13,17,23,0.92)',
        backdropFilter: 'blur(12px)',
        borderTop: '1px solid #30363d',
        padding: '6px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}
    >
      {/* Level badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap', flexShrink: 0 }}>
        <span style={{ fontSize: '16px' }}>{current.emoji}</span>
        <span style={{ fontSize: '12px', fontWeight: 700, color: current.color }}>
          Lv.{current.level} {current.name}
        </span>
      </div>

      {/* Progress bar */}
      <div style={{ flex: 1, position: 'relative', minWidth: 0 }}>
        <div
          style={{
            height: '6px',
            borderRadius: '3px',
            background: '#21262d',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${progress}%`,
              borderRadius: '3px',
              background: `linear-gradient(90deg, ${current.color}cc, ${current.color})`,
              transition: 'width 0.6s cubic-bezier(0.34,1.56,0.64,1)',
            }}
          />
        </div>
      </div>

      {/* XP text */}
      <div style={{ whiteSpace: 'nowrap', flexShrink: 0, fontSize: '12px', color: '#8b949e' }}>
        <span style={{ color: '#e6edf3', fontWeight: 600 }}>⚡ {totalXP.toLocaleString()} XP</span>
        {next && (
          <span style={{ marginLeft: '6px' }}>
            · {(next.xpRequired - totalXP).toLocaleString()} to {next.emoji} {next.name}
          </span>
        )}
      </div>
    </div>
  );
}

/* ─── XP Toast ───────────────────────────────────────────────────────────── */
function XPToastItem({ toast, onDone }: { toast: XPToast; onDone: (id: string) => void }) {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
    const hide = setTimeout(() => {
      setLeaving(true);
      setTimeout(() => onDone(toast.id), 400);
    }, 3200);
    return () => clearTimeout(hide);
  }, [toast.id, onDone]);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '10px 14px',
        background: 'rgba(22,27,34,0.97)',
        border: '1px solid #3fb95060',
        borderRadius: '12px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.5), 0 0 0 1px rgba(63,185,80,0.12)',
        transform: visible && !leaving ? 'translateX(0) scale(1)' : 'translateX(120px) scale(0.9)',
        opacity: visible && !leaving ? 1 : 0,
        transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1), opacity 0.35s ease',
        minWidth: '200px',
        maxWidth: '280px',
      }}
    >
      <div
        style={{
          width: '36px',
          height: '36px',
          borderRadius: '10px',
          background: 'rgba(63,185,80,0.15)',
          border: '1px solid rgba(63,185,80,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px',
          flexShrink: 0,
        }}
      >
        {toast.emoji}
      </div>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: '13px', fontWeight: 700, color: '#3fb950' }}>
          ⚡ +{toast.xp} XP
        </div>
        <div style={{ fontSize: '11px', color: '#8b949e', marginTop: '1px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {toast.label}
        </div>
      </div>
    </div>
  );
}

/* ─── Level-Up Modal ─────────────────────────────────────────────────────── */
function LevelUpModal({
  level,
  onClose,
}: {
  level: (typeof LEVELS)[0];
  onClose: () => void;
}) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    requestAnimationFrame(() => setShow(true));
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0,0,0,0.7)',
        backdropFilter: 'blur(8px)',
        opacity: show ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'linear-gradient(135deg, #0d1117, #161b22)',
          border: `2px solid ${level.color}60`,
          borderRadius: '20px',
          padding: '40px 48px',
          textAlign: 'center',
          maxWidth: '380px',
          width: '90%',
          transform: show ? 'scale(1) translateY(0)' : 'scale(0.8) translateY(20px)',
          transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)',
          boxShadow: `0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px ${level.color}30`,
          position: 'relative',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow */}
        <div
          style={{
            position: 'absolute',
            top: '-50%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${level.color}20, transparent 70%)`,
            pointerEvents: 'none',
          }}
        />

        <div style={{ fontSize: '56px', marginBottom: '16px', position: 'relative' }}>
          {level.emoji}
        </div>
        <div
          style={{
            fontSize: '13px',
            fontWeight: 700,
            color: level.color,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            marginBottom: '8px',
          }}
        >
          Level Up!
        </div>
        <div
          style={{
            fontSize: '28px',
            fontWeight: 800,
            color: '#e6edf3',
            marginBottom: '8px',
          }}
        >
          Level {level.level}
        </div>
        <div
          style={{
            fontSize: '18px',
            fontWeight: 700,
            color: level.color,
            marginBottom: '20px',
          }}
        >
          {level.name}
        </div>
        <div style={{ fontSize: '13px', color: '#8b949e', marginBottom: '28px', lineHeight: 1.6 }}>
          You&apos;re getting deeper into crypto. Keep learning to unlock more features and XP rewards.
        </div>
        <button
          onClick={onClose}
          style={{
            background: `linear-gradient(135deg, ${level.color}cc, ${level.color})`,
            color: '#000',
            border: 'none',
            borderRadius: '10px',
            padding: '10px 28px',
            fontSize: '14px',
            fontWeight: 700,
            cursor: 'pointer',
          }}
        >
          Keep Learning →
        </button>
      </div>
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────────────────────── */
export default function XPNotificationSystem() {
  const [totalXP, setTotalXP] = useState(0);
  const [toasts, setToasts] = useState<XPToast[]>([]);
  const [levelUpData, setLevelUpData] = useState<(typeof LEVELS)[0] | null>(null);
  const prevXPRef = useRef(0);
  const prevLevelRef = useRef(1);

  /* Load initial XP */
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = parseInt(localStorage.getItem(XP_KEY) ?? '0', 10);
    setTotalXP(stored);
    prevXPRef.current = stored;
    prevLevelRef.current = getLevel(stored).current.level;
  }, []);

  /* Listen for XP changes from other components */
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleStorage = (e: StorageEvent) => {
      if (e.key !== XP_KEY || e.newValue == null) return;
      const newXP = parseInt(e.newValue, 10);
      const gained = newXP - prevXPRef.current;

      if (gained > 0) {
        const newLevel = getLevel(newXP).current;
        const prevLevelNum = prevLevelRef.current;

        setTotalXP(newXP);

        // Toast for XP gain
        const id = `${Date.now()}-${Math.random()}`;
        const isQuiz = gained >= 50;
        setToasts((prev) => [
          ...prev.slice(-4), // max 5 toasts
          {
            id,
            xp: gained,
            label: isQuiz ? 'Quiz completed 🎉' : 'Lesson completed',
            emoji: isQuiz ? '📝' : '📖',
          },
        ]);

        // Level up check
        if (newLevel.level > prevLevelNum) {
          setLevelUpData(newLevel);
          prevLevelRef.current = newLevel.level;
        }
      }

      prevXPRef.current = newXP;
    };

    // Also poll localStorage (for same-tab updates)
    const interval = setInterval(() => {
      if (typeof window === 'undefined') return;
      const cur = parseInt(localStorage.getItem(XP_KEY) ?? '0', 10);
      if (cur !== prevXPRef.current) {
        const gained = cur - prevXPRef.current;
        if (gained > 0) {
          const newLevel = getLevel(cur).current;
          const prevLevelNum = prevLevelRef.current;

          setTotalXP(cur);
          const id = `${Date.now()}-${Math.random()}`;
          const isQuiz = gained >= 50;
          setToasts((prev) => [
            ...prev.slice(-4),
            {
              id,
              xp: gained,
              label: isQuiz ? 'Quiz completed 🎉' : 'Lesson completed',
              emoji: isQuiz ? '📝' : '📖',
            },
          ]);
          if (newLevel.level > prevLevelNum) {
            setLevelUpData(newLevel);
            prevLevelRef.current = newLevel.level;
          }
          prevXPRef.current = cur;
        }
      }
    }, 800);

    window.addEventListener('storage', handleStorage);
    return () => {
      window.removeEventListener('storage', handleStorage);
      clearInterval(interval);
    };
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  if (totalXP === 0) return null;

  return (
    <>
      {/* Bottom XP bar strip */}
      <XPBarStrip totalXP={totalXP} />

      {/* Toast stack — bottom-right, above XP bar */}
      <div
        style={{
          position: 'fixed',
          right: '16px',
          bottom: '44px',
          zIndex: 9995,
          display: 'flex',
          flexDirection: 'column-reverse',
          gap: '8px',
          alignItems: 'flex-end',
        }}
      >
        {toasts.map((t) => (
          <XPToastItem key={t.id} toast={t} onDone={removeToast} />
        ))}
      </div>

      {/* Level-up modal */}
      {levelUpData && (
        <LevelUpModal
          level={levelUpData}
          onClose={() => setLevelUpData(null)}
        />
      )}
    </>
  );
}
