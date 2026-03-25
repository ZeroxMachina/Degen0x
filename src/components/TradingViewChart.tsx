'use client';
import { useEffect, useRef, memo } from "react";

export interface TradingViewChartProps {
  /** TradingView symbol, e.g. "BINANCE:BTCUSDT" or "COINBASE:ETHUSD" */
  symbol: string;
  /** Chart container height in pixels (default: 400) */
  height?: number;
  /** Light or dark theme (default: "dark") */
  theme?: "light" | "dark";
  /** Show bottom toolbar with interval buttons (default: true) */
  showBottomToolbar?: boolean;
  /** Default chart interval: "1", "5", "15", "60", "D", "W" (default: "D") */
  interval?: string;
  /** Show volume bars (default: true) */
  showVolume?: boolean;
  /** Optional CSS class name */
  className?: string;
}

/**
 * TradingViewChart
 * Embeds a TradingView Advanced Chart widget. Works on any page.
 *
 * Usage:
 *   <TradingViewChart symbol="BINANCE:UNIUSDT" height={380} />
 *   <TradingViewChart symbol="COINBASE:ETHUSD" interval="W" />
 */
function TradingViewChart({
  symbol,
  height = 400,
  theme = "dark",
  showBottomToolbar = true,
  interval = "D",
  showVolume = true,
}: TradingViewChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clean up any previous widget
    containerRef.current.innerHTML = "";
    if (scriptRef.current) {
      scriptRef.current.remove();
      scriptRef.current = null;
    }

    // Create inner container with unique ID
    const id = `tv-widget-${Math.random().toString(36).slice(2)}`;
    const inner = document.createElement("div");
    inner.id = id;
    containerRef.current.appendChild(inner);

    // Build widget config
    const config = {
      autosize: true,
      symbol,
      interval,
      timezone: "Etc/UTC",
      theme,
      style: "1",
      locale: "en",
      toolbar_bg: theme === "dark" ? "#161b22" : "#ffffff",
      enable_publishing: false,
      allow_symbol_change: true,
      container_id: id,
      hide_top_toolbar: false,
      hide_legend: false,
      save_image: false,
      backgroundColor: theme === "dark" ? "#0d1117" : "#ffffff",
      gridColor: theme === "dark" ? "rgba(48,54,61,0.3)" : "rgba(0,0,0,0.05)",
      hide_volume: !showVolume,
      show_popup_button: true,
      popup_width: "1000",
      popup_height: "650",
      ...(showBottomToolbar ? {} : { hide_side_toolbar: true }),
    };

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      if (typeof (window as any).TradingView !== "undefined" && containerRef.current) {
        new (window as any).TradingView.widget(config);
      }
    };
    script.onerror = () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
        const fallback = document.createElement("div");
        fallback.style.cssText = "width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;background:#161b22;border:1px solid #30363d;color:#8b949e;border-radius:12px;font-size:14px;";
        const msg = document.createElement("span");
        msg.textContent = "Chart temporarily unavailable.";
        fallback.appendChild(msg);
        const retryBtn = document.createElement("button");
        retryBtn.textContent = "Retry";
        retryBtn.style.cssText = "padding:8px 20px;background:#6366f1;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:14px;font-weight:600;min-height:44px;";
        retryBtn.addEventListener("click", () => location.reload());
        fallback.appendChild(retryBtn);
        containerRef.current.appendChild(fallback);
      }
    };

    document.head.appendChild(script);
    scriptRef.current = script;

    return () => {
      if (scriptRef.current) {
        scriptRef.current.remove();
        scriptRef.current = null;
      }
    };
  }, [symbol, interval, theme, showVolume, showBottomToolbar]);

  return (
    <div
      role="img"
      aria-label={`Live ${interval === 'D' ? 'daily' : interval === 'W' ? 'weekly' : interval + '-minute'} price chart for ${symbol.split(':').pop()?.replace(/USD[T]?$/, '') || symbol}`}
      style={{
        width: "100%",
        height,
        background: "#0d1117",
        borderRadius: 12,
        overflow: "hidden",
        border: "1px solid #30363d",
        position: "relative",
      }}
    >
      {/* Loading skeleton shown until TradingView widget renders */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
          zIndex: 0,
        }}
      >
        <div style={{
          width: "80%",
          height: "60%",
          borderRadius: 8,
          background: "linear-gradient(90deg, #161b22 25%, #1c2330 50%, #161b22 75%)",
          backgroundSize: "200% 100%",
          animation: "tvShimmer 1.5s ease-in-out infinite",
        }} />
        <div style={{ fontSize: 13, color: "#8b949e" }}>Loading chart...</div>
        <style>{`@keyframes tvShimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }`}</style>
      </div>
      <div
        ref={containerRef}
        style={{ width: "100%", height: "100%", position: "relative", zIndex: 1 }}
      />
    </div>
  );
}

export default memo(TradingViewChart);


// ─── Helper: symbol map for common dApp tokens ──────────────────────────────

/**
 * Maps common token tickers to their best TradingView symbol.
 * Used by dApp guide pages to auto-select the right chart.
 */
export const DAPP_CHART_SYMBOLS: Record<string, string> = {
  UNI: "COINBASE:UNIUSD",
  AAVE: "COINBASE:AAVEUSD",
  CRV: "COINBASE:CRVUSD",
  CVX: "BINANCE:CVXUSDT",
  GMX: "BINANCE:GMXUSDT",
  GNS: "BINANCE:GNSUSDT",
  LDO: "COINBASE:LDOUSD",
  RPL: "COINBASE:RPLUSD",
  PENDLE: "BINANCE:PENDLEUSDT",
  EIGEN: "BINANCE:EIGENUSDT",
  STG: "BINANCE:STGUSDT",
  ZRO: "BINANCE:ZROUSDT",
  ACX: "BINANCE:ACXUSDT",
  HOP: "BINANCE:HOPUSDT",
  BAL: "COINBASE:BALUSD",
  COW: "BINANCE:COWUSDT",
  AXL: "COINBASE:AXLUSD",
  DBR: "BINANCE:DBRUSDT",
  W: "BINANCE:WUSDT",
  BLUR: "COINBASE:BLURUSD",
  NFTfi: "BINANCE:NFPUSDT",
  ETH: "COINBASE:ETHUSD",
  BTC: "COINBASE:BTCUSD",
  SOL: "COINBASE:SOLUSD",
};
