"use client";
import { useEffect, useState } from "react";

const PRESS_LOGOS = [
  { name: "Forbes", icon: "F" },
  { name: "CoinDesk", icon: "₿" },
  { name: "Decrypt", icon: "D" },
  { name: "CoinTelegraph", icon: "CT" },
  { name: "The Block", icon: "TB" },
  { name: "Bankless", icon: "B" },
];

const TRUST_STATS = [
  { value: "2.4M+", label: "Monthly Readers" },
  { value: "1,200+", label: "Reviews Published" },
  { value: "180+", label: "Platforms Rated" },
  { value: "99%", label: "Data Accuracy" },
];

function AnimatedCount({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const step = target / 40;
    const interval = setInterval(() => {
      setCount((c) => {
        const next = c + step;
        if (next >= target) { clearInterval(interval); return target; }
        return next;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [target]);
  return <>{Math.round(count).toLocaleString()}{suffix}</>;
}

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
        {/* Top row: As seen in */}
        <div className="flex items-center justify-between py-2 gap-4 flex-wrap">
          <div className="flex items-center gap-3 flex-wrap">
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--color-text-secondary)" }}
            >
              As featured in
            </span>
            <div className="flex items-center gap-2">
              {PRESS_LOGOS.map((p) => (
                <span
                  key={p.name}
                  className="text-xs font-bold px-2.5 py-0.5 rounded-md transition-all duration-200 hover:scale-105 cursor-default"
                  title={p.name}
                  style={{
                    background: "var(--glass-bg)",
                    border: "1px solid var(--glass-border)",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {p.name}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Live reader badge */}
          <div className="flex items-center gap-1.5">
            <span
              className="inline-block w-2 h-2 rounded-full animate-pulse"
              style={{ background: "#22c55e" }}
            />
            <span className="text-xs font-medium" style={{ color: "var(--color-text-secondary)" }}>
              <span style={{ color: "#22c55e", fontWeight: 700 }}>
                <AnimatedCount target={2431} />&nbsp;readers online now
              </span>
            </span>
          </div>
        </div>

        {/* Bottom row: Trust stats */}
        <div
          className="hidden sm:flex items-center gap-6 py-2 border-t"
          style={{ borderColor: "var(--glass-border)" }}
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
              Editorial independence guaranteed — we never accept payment for reviews
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
