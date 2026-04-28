'use client';

import { useState, useEffect } from 'react';

/**
 * Floating Cmd+K hint that appears for first-time visitors.
 * Disappears after 8 seconds or when clicked.
 */
export default function KeyboardShortcutHint() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Only show on desktop
    if (window.innerWidth < 768) return;

    try {
      const seen = sessionStorage.getItem('cmdk-hint-seen');
      if (!seen) {
        const timer = setTimeout(() => setShow(true), 3000);
        const hideTimer = setTimeout(() => {
          setShow(false);
          sessionStorage.setItem('cmdk-hint-seen', '1');
        }, 11000);
        return () => {
          clearTimeout(timer);
          clearTimeout(hideTimer);
        };
      }
    } catch {
      // sessionStorage not available
    }
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => {
        setShow(false);
        try { sessionStorage.setItem('cmdk-hint-seen', '1'); } catch {}
        // Trigger command palette
        document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }));
      }}
      className="fixed bottom-6 right-6 z-50 hidden md:flex items-center gap-2 px-4 py-2.5 rounded-lg shadow-lg animate-bounce"
      style={{
        background: 'rgba(99, 102, 241, 0.95)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(129, 140, 248, 0.4)',
        animationDuration: '2s',
      }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <span className="text-white text-sm font-medium">Quick search</span>
      <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/20 text-white/90">
        ⌘K
      </kbd>
    </button>
  );
}
