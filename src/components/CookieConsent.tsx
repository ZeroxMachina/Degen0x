'use client';

import { useEffect, useState } from 'react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const hasConsent = localStorage.getItem('cookie-consent');

    if (!hasConsent) {
      setIsVisible(true);
      // Trigger animation after mount
      setTimeout(() => setIsAnimating(true), 50);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-30 transition-all duration-300 ${
        isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="bg-[#0d1117] border-t border-[#30363d] backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-[#e6edf3] text-sm">
                We use cookies to improve your experience on our website. These cookies help us analyze traffic, remember your preferences, and deliver relevant content.
              </p>
            </div>

            <div className="flex gap-3 w-full sm:w-auto flex-shrink-0">
              <button
                onClick={handleDecline}
                className="flex-1 sm:flex-none px-4 py-2 rounded-lg border border-[#30363d] text-[#e6edf3] text-sm font-medium transition-all duration-200 hover:bg-[#161b22] hover:border-[#8b949e]"
              >
                Decline
              </button>

              <button
                onClick={handleAccept}
                className="flex-1 sm:flex-none px-4 py-2 rounded-lg bg-[#6366f1] text-[var(--color-text)] text-sm font-medium transition-all duration-200 hover:bg-[#4f46e5] shadow-lg hover:shadow-xl"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
