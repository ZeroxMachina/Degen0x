'use client';

import { useState, useEffect } from 'react';

const PROOF_ITEMS = [
  { icon: '👥', text: '12,847 users trusted degen0x this week' },
  { icon: '🔍', text: '2.3M+ comparisons made by our community' },
  { icon: '⭐', text: '4.8/5 average user satisfaction rating' },
  { icon: '📊', text: '79+ free interactive tools available' },
  { icon: '🌍', text: 'Trusted by crypto enthusiasts in 140+ countries' },
  { icon: '🔒', text: 'Independent & unbiased — no paid rankings' },
  { icon: '📱', text: '800+ pages of free crypto education' },
  { icon: '🏆', text: 'Featured in top crypto communities' },
];

export default function SocialProofBanner() {
  // Disabled: removes fake social proof popups
  return null;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setIsVisible(true), 5000);
    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PROOF_ITEMS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isVisible]);

  if (!isVisible) return null;

  const item = PROOF_ITEMS[currentIndex];

  return (
    <div
      className="fixed bottom-20 md:bottom-6 left-4 z-40 flex items-center gap-2 px-4 py-2.5 rounded-lg shadow-lg transition-all duration-500"
      style={{
        background: 'rgba(22, 27, 34, 0.95)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(48, 54, 61, 0.8)',
        maxWidth: '340px',
      }}
    >
      <span className="text-lg">{item.icon}</span>
      <span className="text-xs text-[#8b949e] leading-tight">{item.text}</span>
      <button
        onClick={() => setIsVisible(false)}
        className="ml-auto text-[#484f58] hover:text-[#8b949e] text-xs flex-shrink-0"
        aria-label="Dismiss"
      >
        ✕
      </button>
    </div>
  );
}
