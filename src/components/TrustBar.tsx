"use client";
import { useEffect, useState } from "react";

const TRUST_STATS = [
  { value: "1,200+", label: "Reviews Published" },
  { value: "180+", label: "Platforms Rated" },
  { value: "99%", label: "Data Accuracy" },
];

export default function TrustBar() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => { setTimeout(() => setIsVisible(true), 300); }, []);

  return (
    <div
      className={`trust-bar-wrapper transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
      style={{
        background: "var(--glass-subtle-bg)",
        borderBottom: "1px solid var(--glass-border)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Trust stats */}
        <div
          className="flex items-center gap-6 py-3 flex-wrap"
        >
          {TRUST_STATS.map((s) => (
            <div key={s.label} className="flex items-center gap-1.5">
              <span className="text-sm font-bold" style={{ color: "var(--color-primary)" }}>
                {s.value}
              </span>
              <span className="text-xs" style={{ color: "var(--color-text-secondary)" }}>
                {s.label}
              </span>
            </div>
          ))}
          <div className="ml-auto flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "#22c55e" }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs font-medium" style={{ color: "var(--color-text-secondary)" }}>
              Editorial independence guaranteed
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
