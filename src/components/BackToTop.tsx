'use client';

import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-[#161b22] border border-[#30363d] hover:border-[#6366f1] transition-all duration-300 flex items-center justify-center z-40 group hover:shadow-lg"
      style={{
        boxShadow: 'inset 0 0 20px rgba(99, 102, 241, 0)',
        transition: 'all 300ms ease-out',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = 'inset 0 0 20px rgba(99, 102, 241, 0.2), 0 0 20px rgba(99, 102, 241, 0.3)';
        e.currentTarget.style.borderColor = '#6366f1';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'inset 0 0 20px rgba(99, 102, 241, 0)';
        e.currentTarget.style.borderColor = '#30363d';
      }}
      aria-label="Back to top"
    >
      <svg
        className="w-5 h-5 text-[#e6edf3] group-hover:text-[#6366f1] transition-colors duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
