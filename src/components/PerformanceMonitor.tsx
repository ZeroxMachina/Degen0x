"use client";

import { useState, useEffect } from "react";

interface PerfMetric {
  label: string;
  value: number;
  unit: string;
  target: number;
  color: string;
}

export default function PerformanceMonitor() {
  const [isOpen, setIsOpen] = useState(false);
  const [metrics, setMetrics] = useState<PerfMetric[]>([]);
  const [memoryUsage, setMemoryUsage] = useState(0);
  const [pageLoad, setPageLoad] = useState(0);
  const [bundleSize, setBundleSize] = useState(0);

  useEffect(() => {
    if (!isOpen) return;

    const updateMetrics = () => {
      const navEntries = performance.getEntriesByType("navigation");
      const nav = navEntries.length > 0 ? (navEntries[0] as unknown as { responseStart: number; requestStart: number; domContentLoadedEventEnd: number; navigationStart: number; loadEventEnd: number }) : null;
      const fcp = performance.getEntriesByName("first-contentful-paint")[0];
      const lcp = performance.getEntriesByType("largest-contentful-paint");
      const lcpEntry = lcp.length > 0 ? lcp[lcp.length - 1] : null;

      const fcpTime = fcp ? fcp.startTime : 0;
      const lcpTime = lcpEntry ? (lcpEntry as PerformanceEntry).startTime : 0;
      const ttfb = nav ? nav.responseStart - nav.requestStart : 0;
      const domReady = nav ? nav.domContentLoadedEventEnd - nav.navigationStart : 0;
      const loadComplete = nav ? nav.loadEventEnd - nav.navigationStart : 0;

      setPageLoad(loadComplete);

      const mem = (performance as unknown as { memory?: { usedJSHeapSize: number } }).memory;
      if (mem) setMemoryUsage(mem.usedJSHeapSize / 1048576);

      const resources = performance.getEntriesByType("resource") as PerformanceResourceTiming[];
      const jsSize = resources
        .filter((r) => r.name.endsWith(".js"))
        .reduce((s, r) => s + (r.transferSize || 0), 0);
      setBundleSize(jsSize / 1024);

      setMetrics([
        { label: "FCP", value: Math.round(fcpTime), unit: "ms", target: 1800, color: fcpTime < 1800 ? "#3fb950" : fcpTime < 3000 ? "#d29922" : "#f85149" },
        { label: "LCP", value: Math.round(lcpTime), unit: "ms", target: 2500, color: lcpTime < 2500 ? "#3fb950" : lcpTime < 4000 ? "#d29922" : "#f85149" },
        { label: "TTFB", value: Math.round(ttfb), unit: "ms", target: 800, color: ttfb < 800 ? "#3fb950" : ttfb < 1800 ? "#d29922" : "#f85149" },
        { label: "DOM Ready", value: Math.round(domReady), unit: "ms", target: 3000, color: domReady < 3000 ? "#3fb950" : "#d29922" },
        { label: "Full Load", value: Math.round(loadComplete), unit: "ms", target: 5000, color: loadComplete < 5000 ? "#3fb950" : "#f85149" },
      ]);
    };

    updateMetrics();
    const interval = setInterval(updateMetrics, 3000);
    return () => clearInterval(interval);
  }, [isOpen]);

  if (process.env.NODE_ENV !== "development" && typeof window !== "undefined" && !window.location.search.includes("perf=1")) {
    return null;
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all hover:scale-110"
        style={{
          background: isOpen ? "#f8514930" : "#161b22",
          border: "1px solid #30363d",
          color: isOpen ? "#f85149" : "#8b949e",
        }}
        title="Performance Monitor"
      >
        ⚡
      </button>

      {isOpen && (
        <div
          className="fixed bottom-20 left-6 z-50 w-[320px] rounded-xl overflow-hidden shadow-2xl"
          style={{ background: "#161b22", border: "1px solid #30363d" }}
        >
          <div className="p-3 border-b" style={{ borderColor: "#30363d" }}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase" style={{ color: "#8b949e" }}>Performance Monitor</span>
              <span className="text-xs px-2 py-0.5 rounded-full" style={{
                background: pageLoad < 3000 ? "#3fb95020" : "#f8514920",
                color: pageLoad < 3000 ? "#3fb950" : "#f85149",
              }}>
                {pageLoad < 3000 ? "Good" : "Needs Work"}
              </span>
            </div>
          </div>
          <div className="p-3 space-y-2">
            {metrics.map((m) => (
              <div key={m.label} className="flex items-center justify-between">
                <span className="text-xs" style={{ color: "#8b949e" }}>{m.label}</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-1.5 rounded-full overflow-hidden" style={{ background: "#30363d" }}>
                    <div
                      className="h-full rounded-full"
                      style={{
                        background: m.color,
                        width: `${Math.min((m.value / m.target) * 100, 100)}%`,
                      }}
                    />
                  </div>
                  <span className="text-xs font-mono font-bold min-w-[60px] text-right" style={{ color: m.color }}>
                    {m.value}{m.unit}
                  </span>
                </div>
              </div>
            ))}
            <div className="pt-2 border-t flex justify-between text-xs" style={{ borderColor: "#30363d", color: "#8b949e" }}>
              <span>Memory: <strong style={{ color: "#e6edf3" }}>{memoryUsage.toFixed(1)}MB</strong></span>
              <span>JS Bundle: <strong style={{ color: "#e6edf3" }}>{bundleSize.toFixed(0)}KB</strong></span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
