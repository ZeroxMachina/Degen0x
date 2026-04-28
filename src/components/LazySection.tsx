'use client';

import React, { useRef, useState, useEffect } from 'react';

/**
 * LazySection — Sprint 19
 * Intersection Observer-based lazy loading wrapper.
 * Only renders children when the section scrolls into view.
 * Reduces initial JS bundle + DOM size for 826+ page site.
 */

interface LazySectionProps {
  children: React.ReactNode;
  rootMargin?: string;
  threshold?: number;
  fallback?: React.ReactNode;
  className?: string;
  minHeight?: string;
}

export default function LazySection({
  children,
  rootMargin = '200px',
  threshold = 0.01,
  fallback,
  className,
  minHeight = '100px',
}: LazySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If IntersectionObserver isn't supported, render immediately
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return (
    <div ref={ref} className={className} style={{ minHeight: isVisible ? 'auto' : minHeight }}>
      {isVisible ? children : (fallback || (
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          minHeight, color: '#8b949e', fontSize: '12px',
        }}>
          <div style={{
            width: '20px', height: '20px', border: '2px solid #30363d',
            borderTopColor: '#6366f1', borderRadius: '50%',
            animation: 'spin 0.8s linear infinite',
          }} />
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      ))}
    </div>
  );
}
