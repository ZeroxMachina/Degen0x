'use client';

"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import {
  DrawingToolbar,
  PatternPanel,
  PriceAlertPanel,
  FibRetracementLegend,
  detectPatterns,
  useChartExport,
  type DrawingTool,
} from "@/components/ChartDrawingTools";
import RelatedContent from '@/components/RelatedContent';

// ── Types ────────────────────────────────────────────────────────────────────
interface OHLCV {
  timestamp: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

interface ChartState {
  pair: string;
  timeframe: "1H" | "4H" | "1D" | "1W" | "1M";
  indicators: {
    sma20: boolean;
    sma50: boolean;
    sma200: boolean;
    ema: boolean;
    rsi: boolean;
    macd: boolean;
    bollingerBands: boolean;
    volume: boolean;
  };
  drawingTools: string[];
  fullscreen: boolean;
}

// ── Constants ────────────────────────────────────────────────────────────────
const CRYPTO_PAIRS = [
  "BTC/USD",
  "ETH/USD",
  "SOL/USD",
  "AVAX/USD",
  "LINK/USD",
  "DOT/USD",
  "MATIC/USD",
  "ADA/USD",
  "BNB/USD",
  "XRP/USD",
];

const COLORS = {
  bg: "#0d1117",
  surface: "#161b22",
  border: "#30363d",
  text: "#c9d1d9",
  textSecondary: "#8b949e",
  bullish: "#58a6ff",
  bearish: "#f85149",
  buy: "#3fb950",
  sell: "#f85149",
  volume: "#6e7681",
  sma20: "#ffa657",
  sma50: "#79c0ff",
  sma200: "#ff7b72",
  ema: "#a371f7",
  rsi: "#79c0ff",
  macdLine: "#58a6ff",
  macdSignal: "#f85149",
  macdHistogram: "#6e7681",
  bb: "#79c0ff",
};

// ── Utility Functions ────────────────────────────────────────────────────────
function generateRealisticOHLCV(
  basePrice: number,
  periods: number,
  volatility: number = 0.02
): OHLCV[] {
  const data: OHLCV[] = [];
  let currentPrice = basePrice;
  const now = Date.now();

  for (let i = periods - 1; i >= 0; i--) {
    const change = (Math.random() - 0.5) * 2 * volatility * currentPrice;
    const open = currentPrice;
    const close = currentPrice + change;
    const high = Math.max(open, close) * (1 + Math.random() * 0.005);
    const low = Math.min(open, close) * (1 - Math.random() * 0.005);
    const volume = 1000000 + Math.random() * 5000000;

    data.push({
      timestamp: now - i * 3600000,
      open,
      high,
      low,
      close,
      volume,
    });

    currentPrice = close;
  }

  return data;
}

function calculateSMA(data: OHLCV[], period: number): number[] {
  const sma: number[] = [];
  for (let i = 0; i < data.length; i++) {
    if (i < period - 1) {
      sma.push(NaN);
      continue;
    };
    const sum = data.slice(i - period + 1, i + 1).reduce((s, c) => s + c.close, 0);
    sma.push(sum / period);
  }
  return sma;
}

function calculateEMA(data: OHLCV[], period: number): number[] {
  const ema: number[] = [];
  const multiplier = 2 / (period + 1);

  for (let i = 0; i < data.length; i++) {
    if (i === 0) {
      ema.push(data[i].close);
    } else if (i < period) {
      const sum = data.slice(0, i + 1).reduce((s, c) => s + c.close, 0);
      ema.push(sum / (i + 1));
    } else if (i === period) {
      const sum = data.slice(0, period).reduce((s, c) => s + c.close, 0);
      const smaValue = sum / period;
      ema.push(data[i].close * multiplier + smaValue * (1 - multiplier));
    } else {
      ema.push(data[i].close * multiplier + ema[i - 1] * (1 - multiplier));
    }
  }

  return ema;
}

function calculateRSI(data: OHLCV[], period: number = 14): number[] {
  const rsi: number[] = [];
  const changes = data.map((d, i) => (i === 0 ? 0 : d.close - data[i - 1].close));

  for (let i = 0; i < data.length; i++) {
    if (i < period) {
      rsi.push(NaN);
      continue;
    };

    const gains = changes
      .slice(i - period, i)
      .filter((c) => c > 0)
      .reduce((s, c) => s + c, 0);
    const losses = changes
      .slice(i - period, i)
      .filter((c) => c < 0)
      .reduce((s, c) => s + Math.abs(c), 0);

    const avgGain = gains / period;
    const avgLoss = losses / period;

    if (avgLoss === 0) {
      rsi.push(avgGain === 0 ? 50 : 100);
    } else {
      const rs = avgGain / avgLoss;
      rsi.push(100 - 100 / (1 + rs));
    }
  }

  return rsi;
}

function calculateMACD(
  data: OHLCV[]
): { line: number[]; signal: number[]; histogram: number[] } {
  const ema12 = calculateEMA(data, 12);
  const ema26 = calculateEMA(data, 26);

  const macdLine = ema12.map((v, i) => (isNaN(v) || isNaN(ema26[i]) ? NaN : v - ema26[i]));
  const signalLine = calculateEMA(
    macdLine.map((v) => ({ ...({} as OHLCV), close: v })) as any,
    9
  );

  const histogram = macdLine.map((v, i) =>
    isNaN(v) || isNaN(signalLine[i]) ? NaN : v - signalLine[i]
  );

  return { line: macdLine, signal: signalLine, histogram };
}

function calculateBollingerBands(
  data: OHLCV[],
  period: number = 20,
  stdDev: number = 2
): { upper: number[]; middle: number[]; lower: number[] } {
  const middle = calculateSMA(data, period);
  const upper: number[] = [];
  const lower: number[] = [];

  for (let i = 0; i < data.length; i++) {
    if (i < period - 1) {
      upper.push(NaN);
      lower.push(NaN);
      continue;
    };

    const closes = data.slice(i - period + 1, i + 1).map((d) => d.close);
    const avg = closes.reduce((s, c) => s + c, 0) / period;
    const variance =
      closes.reduce((s, c) => s + Math.pow(c - avg, 2), 0) / period;
    const std = Math.sqrt(variance);

    upper.push(middle[i] + stdDev * std);
    lower.push(middle[i] - stdDev * std);
  }

  return { upper, middle, lower };
}

function formatPrice(price: number): string {
  if (price > 10000) return price.toFixed(0);
  if (price > 100) return price.toFixed(2);
  if (price > 1) return price.toFixed(4);
  return price.toFixed(8);
}

function formatTime(timestamp: number): string {
  return new Date(timestamp).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

// ── Main Component ───────────────────────────────────────────────────────────
export default function AdvancedChartingPage() {
  const [state, setState] = useState<ChartState>({
    pair: "BTC/USD",
    timeframe: "1D",
    indicators: {
      sma20: true,
      sma50: false,
      sma200: false,
      ema: false,
      rsi: false,
      macd: false,
      bollingerBands: false,
      volume: true,
    },
    drawingTools: [],
    fullscreen: false,
  });

  const canvasRef = useRef<HTMLDivElement>(null);
  const [crosshair, setCrosshair] = useState({ x: 0, y: 0, visible: false });
  const [selectedCandle, setSelectedCandle] = useState<number | null>(null);
  // Sprint 45: Drawing tools + sidebar panels
  const [activeTool, setActiveTool] = useState<DrawingTool>('none');
  const [showAlerts, setShowAlerts] = useState(false);
  const [showFib, setShowFib] = useState(false);
  const chartCanvasRef = useRef<HTMLCanvasElement>(null);

  // Generate OHLCV data based on pair
  const ohlcvData = useMemo(() => {
    const basePrices: Record<string, number> = {
      "BTC/USD": 42500,
      "ETH/USD": 2450,
      "SOL/USD": 145,
      "AVAX/USD": 38,
      "LINK/USD": 28,
      "DOT/USD": 9.2,
      "MATIC/USD": 1.15,
      "ADA/USD": 1.08,
      "BNB/USD": 625,
      "XRP/USD": 2.8,
    };

    const volatilities: Record<string, number> = {
      "BTC/USD": 0.01,
      "ETH/USD": 0.015,
      "SOL/USD": 0.025,
      "AVAX/USD": 0.03,
      "LINK/USD": 0.025,
      "DOT/USD": 0.02,
      "MATIC/USD": 0.035,
      "ADA/USD": 0.02,
      "BNB/USD": 0.015,
      "XRP/USD": 0.025,
    };

    const periods = state.timeframe === "1H" ? 100 : state.timeframe === "4H" ? 100 : state.timeframe === "1D" ? 365 : state.timeframe === "1W" ? 52 : 60;
    return generateRealisticOHLCV(
      basePrices[state.pair],
      periods,
      volatilities[state.pair]
    );
  }, [state.pair, state.timeframe]);

  // Calculate indicators
  const indicators = useMemo(() => {
    return {
      sma20: calculateSMA(ohlcvData, 20),
      sma50: calculateSMA(ohlcvData, 50),
      sma200: calculateSMA(ohlcvData, 200),
      ema: calculateEMA(ohlcvData, 12),
      rsi: calculateRSI(ohlcvData),
      macd: calculateMACD(ohlcvData),
      bb: calculateBollingerBands(ohlcvData),
    };
  }, [ohlcvData]);

  useEffect(() => {
    document.title = `Advanced Charting - ${state.pair} ${state.timeframe} | degen0x`;
  }, [state.pair, state.timeframe]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setCrosshair({ x, y, visible: true });

    // Determine selected candle index based on x position
    const chartWidth = rect.width * 0.75; // 75% for chart, 25% for orderbook
    const candleWidth = chartWidth / ohlcvData.length;
    const index = Math.floor(x / candleWidth);

    if (index >= 0 && index < ohlcvData.length) {
      setSelectedCandle(index);
    }
  };

  const handleMouseLeave = () => {
    setCrosshair({ ...crosshair, visible: false });
  };

  const ChartCanvas = () => {
    const canvasWidth = 1200;
    const canvasHeight = 600;
    const padding = { top: 20, right: 80, bottom: 50, left: 60 };
    const chartWidth = canvasWidth - padding.left - padding.right;
    const chartHeight = canvasHeight - padding.top - padding.bottom;

    const minPrice = Math.min(...ohlcvData.map((d) => d.low)) * 0.99;
    const maxPrice = Math.max(...ohlcvData.map((d) => d.high)) * 1.01;
    const priceRange = maxPrice - minPrice;

    const scaleY = (price: number) =>
      padding.top + chartHeight - ((price - minPrice) / priceRange) * chartHeight;

    const candleWidth = chartWidth / ohlcvData.length;
    const maxVolume = Math.max(...ohlcvData.map((d) => d.volume));

    return (
      <svg
        width={canvasWidth}
        height={canvasHeight}
        style={{
          backgroundColor: COLORS.bg,
          border: `1px solid ${COLORS.border}`,
          borderRadius: "8px",
        }}
      >
        {/* Background grid */}
        <defs>
          <pattern
            id="grid"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke={COLORS.border}
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect
          width={canvasWidth}
          height={canvasHeight}
          fill={COLORS.bg}
        />
        <rect
          x={padding.left}
          y={padding.top}
          width={chartWidth}
          height={chartHeight}
          fill={COLORS.surface}
          fillOpacity="0.3"
        />

        {/* Y-axis price scale */}
        <line
          x1={padding.left}
          y1={padding.top}
          x2={padding.left}
          y2={canvasHeight - padding.bottom}
          stroke={COLORS.border}
          strokeWidth="2"
        />

        {/* X-axis time scale */}
        <line
          x1={padding.left}
          y1={canvasHeight - padding.bottom}
          x2={canvasWidth - padding.right}
          y2={canvasHeight - padding.bottom}
          stroke={COLORS.border}
        />

        {/* Y-axis labels and grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((ratio) => {
          const price = minPrice + priceRange * ratio;
          const y = padding.top + chartHeight * (1 - ratio);
          return (
            <g key={`price-${ratio}`}>
              <line
                x1={padding.left}
                y1={y}
                x2={canvasWidth - padding.right}
                y2={y}
                stroke={COLORS.border}
                opacity="0.3"
              />
              <text
                x={padding.left - 10}
                y={y + 4}
                textAnchor="end"
                fontSize="12"
                fill={COLORS.textSecondary}
              >
                {formatPrice(price)}
              </text>
            </g>
          );
        })}

        {/* X-axis time labels */}
        {[0, Math.floor(ohlcvData.length * 0.25), Math.floor(ohlcvData.length * 0.5), Math.floor(ohlcvData.length * 0.75), ohlcvData.length - 1].map((idx) => {
          const x = padding.left + (idx / ohlcvData.length) * chartWidth;
          return (
            <g key={`time-${idx}`}>
              <line
                x1={x}
                y1={canvasHeight - padding.bottom}
                x2={x}
                y2={canvasHeight - padding.bottom + 5}
                stroke={COLORS.border}
              />
              <text
                x={x}
                y={canvasHeight - padding.bottom + 20}
                textAnchor="middle"
                fill={COLORS.textSecondary}
              >
                {formatTime(ohlcvData[idx].timestamp)}
              </text>
            </g>
          );
        })}

        {/* Volume bars */}
        {state.indicators.volume &&
          ohlcvData.map((candle, idx) => {
            const x = padding.left + (idx + 0.5) * candleWidth;
            const volumeHeight = (candle.volume / maxVolume) * (chartHeight * 0.15);
            const y = canvasHeight - padding.bottom - volumeHeight;
            const color = candle.close >= candle.open ? COLORS.buy : COLORS.sell;

            return (
              <rect
                key={`volume-${idx}`}
                x={x - candleWidth * 0.4}
                y={y}
                width={candleWidth * 0.8}
                height={volumeHeight}
                fill={color}
                opacity="0.2"
              />
            );
          })}

        {/* Bollinger Bands */}
        {state.indicators.bollingerBands && (
          <>
            {/* Upper band */}
            <polyline
              points={indicators.bb.upper
                .map((price, idx) => {
                  if (isNaN(price)) return null;
                  const x = padding.left + (idx + 0.5) * candleWidth;
                  const y = scaleY(price);
                  return `${x},${y}`;
                })
                .filter(Boolean)
                .join(" ")}
              stroke={COLORS.bb}
              strokeWidth="1"
              opacity="0.5"
              strokeDasharray="4,4"
            />
            {/* Middle band (SMA) */}
            <polyline
              points={indicators.bb.middle
                .map((price, idx) => {
                  if (isNaN(price)) return null;
                  const x = padding.left + (idx + 0.5) * candleWidth;
                  const y = scaleY(price);
                  return `${x},${y}`;
                })
                .filter(Boolean)
                .join(" ")}
              stroke={COLORS.bb}
            />
            {/* Lower band */}
            <polyline
              points={indicators.bb.lower
                .map((price, idx) => {
                  if (isNaN(price)) return null;
                  const x = padding.left + (idx + 0.5) * candleWidth;
                  const y = scaleY(price);
                  return `${x},${y}`;
                })
                .filter(Boolean)
                .join(" ")}
              stroke={COLORS.bb}
            />
          </>
        )}

        {/* SMA 200 */}
        {state.indicators.sma200 && (
          <polyline
            points={indicators.sma200
              .map((price, idx) => {
                if (isNaN(price)) return null;
                const x = padding.left + (idx + 0.5) * candleWidth;
                const y = scaleY(price);
                return `${x},${y}`;
              })
              .filter(Boolean)
              .join(" ")}
            stroke={COLORS.sma200}
            strokeWidth="1.5"
            opacity="0.7"
          />
        )}

        {/* SMA 50 */}
        {state.indicators.sma50 && (
          <polyline
            points={indicators.sma50
              .map((price, idx) => {
                if (isNaN(price)) return null;
                const x = padding.left + (idx + 0.5) * candleWidth;
                const y = scaleY(price);
                return `${x},${y}`;
              })
              .filter(Boolean)
              .join(" ")}
            stroke={COLORS.sma50}
          />
        )}

        {/* SMA 20 */}
        {state.indicators.sma20 && (
          <polyline
            points={indicators.sma20
              .map((price, idx) => {
                if (isNaN(price)) return null;
                const x = padding.left + (idx + 0.5) * candleWidth;
                const y = scaleY(price);
                return `${x},${y}`;
              })
              .filter(Boolean)
              .join(" ")}
            stroke={COLORS.sma20}
          />
        )}

        {/* EMA */}
        {state.indicators.ema && (
          <polyline
            points={indicators.ema
              .map((price, idx) => {
                if (isNaN(price)) return null;
                const x = padding.left + (idx + 0.5) * candleWidth;
                const y = scaleY(price);
                return `${x},${y}`;
              })
              .filter(Boolean)
              .join(" ")}
            stroke={COLORS.ema}
            opacity="0.8"
          />
        )}

        {/* Candlesticks */}
        {ohlcvData.map((candle, idx) => {
          const x = padding.left + (idx + 0.5) * candleWidth;
          const yOpen = scaleY(candle.open);
          const yClose = scaleY(candle.close);
          const yHigh = scaleY(candle.high);
          const yLow = scaleY(candle.low);

          const isGreen = candle.close >= candle.open;
          const color = isGreen ? COLORS.bullish : COLORS.bearish;
          const bodyTop = Math.min(yOpen, yClose);
          const bodyHeight = Math.abs(yClose - yOpen) || 1;

          return (
            <g
              key={`candle-${idx}`}
              opacity={selectedCandle === idx ? 1 : 0.8}
              style={{ cursor: "pointer" }}
            >
              {/* Wick */}
              <line
                x1={x}
                y1={yHigh}
                x2={x}
                y2={yLow}
                stroke={color}
              />
              {/* Body */}
              <rect
                x={x - candleWidth * 0.3}
                y={bodyTop}
                width={candleWidth * 0.6}
                height={bodyHeight}
                fill={color}
                stroke={color}
              />
            </g>
          );
        })}

        {/* Right side price scale */}
        {selectedCandle !== null && (
          <g>
            <line
              x1={canvasWidth - padding.right}
              y1={scaleY(ohlcvData[selectedCandle].open)}
              x2={canvasWidth - padding.right + 10}
              y2={scaleY(ohlcvData[selectedCandle].open)}
              stroke={COLORS.text}
            />
            <text
              x={canvasWidth - padding.right + 15}
              y={scaleY(ohlcvData[selectedCandle].open) + 4}
              fontSize="11"
              fill={COLORS.text}
            >
              O: {formatPrice(ohlcvData[selectedCandle].open)}
            </text>

            <line
              x1={canvasWidth - padding.right}
              y1={scaleY(ohlcvData[selectedCandle].close)}
              x2={canvasWidth - padding.right + 10}
              y2={scaleY(ohlcvData[selectedCandle].close)}
              stroke={COLORS.text}
            />
            <text
              x={canvasWidth - padding.right + 15}
              y={scaleY(ohlcvData[selectedCandle].close) + 4}
              fill={COLORS.text}
            >
              C: {formatPrice(ohlcvData[selectedCandle].close)}
            </text>
          </g>
        )}

        {/* Crosshair */}
        {crosshair.visible && (
          <>
            <line
              x1={crosshair.x}
              y1={padding.top}
              x2={crosshair.x}
              y2={canvasHeight - padding.bottom}
              stroke={COLORS.border}
              strokeDasharray="3,3"
              pointerEvents="none"
            />
            <line
              x1={padding.left}
              y1={crosshair.y}
              x2={canvasWidth - padding.right}
              y2={crosshair.y}
              stroke={COLORS.border}
            />

            {/* Price tooltip */}
            {crosshair.y >= padding.top &&
              crosshair.y <= canvasHeight - padding.bottom && (
                <g pointerEvents="none">
                  <rect
                    x={canvasWidth - padding.right + 5}
                    y={crosshair.y - 12}
                    width="70"
                    height="24"
                    fill={COLORS.surface}
                    stroke={COLORS.border}
                    rx="4"
                  />
                  <text
                    x={canvasWidth - padding.right + 40}
                    y={crosshair.y + 2}
                    fontWeight="bold"
                    fill={COLORS.text}
                  >
                    {formatPrice(
                      minPrice +
                        ((canvasHeight - padding.bottom - crosshair.y) /
                          chartHeight) *
                          priceRange
                    )}
                  </text>
                </g>
              )}
          </>
        )}
      </svg>
    );
  };

  const OrderBook = () => {
    const asks = [
      { price: ohlcvData[ohlcvData.length - 1].close * 1.002, size: Math.random() * 10 },
      { price: ohlcvData[ohlcvData.length - 1].close * 1.003, size: Math.random() * 10 },
      { price: ohlcvData[ohlcvData.length - 1].close * 1.004, size: Math.random() * 10 },
      { price: ohlcvData[ohlcvData.length - 1].close * 1.005, size: Math.random() * 10 },
    ];

    const bids = [
      { price: ohlcvData[ohlcvData.length - 1].close * 0.998, size: Math.random() * 10 },
      { price: ohlcvData[ohlcvData.length - 1].close * 0.997, size: Math.random() * 10 },
      { price: ohlcvData[ohlcvData.length - 1].close * 0.996, size: Math.random() * 10 },
      { price: ohlcvData[ohlcvData.length - 1].close * 0.995, size: Math.random() * 10 },
    ];

    const maxSize = Math.max(...asks.map((a) => a.size), ...bids.map((b) => b.size));

    return (
      <div
        style={{
          flex: 1,
          borderLeft: `1px solid ${COLORS.border}`,
          display: "flex",
          flexDirection: "column",
          backgroundColor: COLORS.surface,
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            padding: "12px",
            borderBottom: `1px solid ${COLORS.border}`,
            fontSize: "12px",
            fontWeight: "bold",
            color: COLORS.text,
          }}
        >
          Order Book
        </div>

        {/* Asks */}
        <div style={{ flex: 1, overflowY: "auto" }}>
          {asks.map((ask, idx) => (
            <div
              key={`ask-${idx}`}
              style={{
                display: "flex",
                padding: "8px 12px",
                borderBottom: `1px solid ${COLORS.border}`,
                fontSize: "11px",
                alignItems: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  backgroundColor: COLORS.sell,
                  width: `${(ask.size / maxSize) * 100}%`,
                  opacity: 0.1,
                }}
              />
              <div style={{ color: COLORS.sell, fontWeight: "bold", flex: 1, zIndex: 1 }}>
                {formatPrice(ask.price)}
              </div>
              <div style={{ color: COLORS.textSecondary, zIndex: 1 }}>
                {ask.size.toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        {/* Current price */}
        <div
          style={{
            padding: "12px",
            backgroundColor: COLORS.bg,
            borderTop: `2px solid ${COLORS.border}`,
            borderBottom: `2px solid ${COLORS.border}`,
            textAlign: "center",
            fontSize: "14px",
            fontWeight: "bold",
            color: COLORS.bullish,
          }}
        >
          {formatPrice(ohlcvData[ohlcvData.length - 1].close)}
        </div>

        {/* Bids */}
        <div style={{ flex: 1, overflowY: "auto" }}>
          {bids.map((bid, idx) => (
            <div
              key={`bid-${idx}`}
              style={{
                display: "flex",
                padding: "8px 12px",
                borderBottom: `1px solid ${COLORS.border}`,
                fontSize: "11px",
                alignItems: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  backgroundColor: COLORS.buy,
                  width: `${(bid.size / maxSize) * 100}%`,
                  opacity: 0.1,
                }}
              />
              <div style={{ color: COLORS.buy, fontWeight: "bold", flex: 1, zIndex: 1 }}>
                {formatPrice(bid.price)}
              </div>
              <div style={{ color: COLORS.textSecondary, zIndex: 1 }}>
                {bid.size.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const RSIIndicator = () => {
    const canvasWidth = 200;
    const canvasHeight = 120;
    const padding = { top: 10, right: 15, bottom: 20, left: 30 };
    const chartWidth = canvasWidth - padding.left - padding.right;
    const chartHeight = canvasHeight - padding.top - padding.bottom;

    const rsiValues = indicators.rsi.filter((v) => !isNaN(v));
    if (rsiValues.length === 0) return null;

    const candleWidth = chartWidth / indicators.rsi.length;

    return (
      <svg
        width={canvasWidth}
        height={canvasHeight}
        style={{
          backgroundColor: COLORS.surface,
          border: `1px solid ${COLORS.border}`,
          borderRadius: "4px",
        }}
      >
        {/* Grid lines at 30, 50, 70 */}
        {[30, 50, 70].map((level) => {
          const y = padding.top + chartHeight * (1 - level / 100);
          return (
            <g key={`rsi-level-${level}`}>
              <line
                x1={padding.left}
                y1={y}
                x2={canvasWidth - padding.right}
                y2={y}
                stroke={COLORS.border}
              />
              <text
                x={padding.left - 5}
                y={y + 3}
                fontSize="9"
                fill={COLORS.textSecondary}
              >
                {level}
              </text>
            </g>
          );
        })}

        {/* RSI line */}
        <polyline
          points={indicators.rsi
            .map((rsi, idx) => {
              if (isNaN(rsi)) return null;
              const x = padding.left + (idx + 0.5) * candleWidth;
              const y =
                padding.top + chartHeight * (1 - Math.max(0, Math.min(100, rsi)) / 100);
              return `${x},${y}`;
            })
            .filter(Boolean)
            .join(" ")}
          stroke={COLORS.rsi}
        />

        {/* Labels */}
        <text
          x={canvasWidth / 2}
          y={canvasHeight - 5}
          fontSize="10"
          fill={COLORS.textSecondary}
        >
          RSI(14)
        </text>
      </svg>
    );
  };

  const MACDIndicator = () => {
    const canvasWidth = 200;
    const canvasHeight = 120;
    const padding = { top: 10, right: 15, bottom: 20, left: 30 };
    const chartWidth = canvasWidth - padding.left - padding.right;
    const chartHeight = canvasHeight - padding.top - padding.bottom;

    const macdValues = indicators.macd.line.filter((v) => !isNaN(v));
    if (macdValues.length === 0) return null;

    const minMacd = Math.min(...macdValues);
    const maxMacd = Math.max(...macdValues);
    const macdRange = Math.max(Math.abs(minMacd), Math.abs(maxMacd)) * 1.1 || 1;

    const scaleY = (value: number) =>
      padding.top + chartHeight / 2 + ((-value / macdRange) * chartHeight) / 2;

    const candleWidth = chartWidth / indicators.macd.line.length;

    return (
      <svg
        width={canvasWidth}
        height={canvasHeight}
        style={{
          backgroundColor: COLORS.surface,
          border: `1px solid ${COLORS.border}`,
          borderRadius: "4px",
        }}
      >
        {/* Zero line */}
        <line
          x1={padding.left}
          y1={padding.top + chartHeight / 2}
          x2={canvasWidth - padding.right}
          y2={padding.top + chartHeight / 2}
          stroke={COLORS.border}
        />

        {/* Histogram */}
        {indicators.macd.histogram.map((val, idx) => {
          if (isNaN(val)) return null;
          const x = padding.left + (idx + 0.5) * candleWidth;
          const y = scaleY(val);
          const height = Math.abs(
            (val / macdRange) * (chartHeight / 2)
          );
          const color = val >= 0 ? COLORS.bullish : COLORS.bearish;

          return (
            <rect
              key={`macd-hist-${idx}`}
              x={x - candleWidth * 0.3}
              y={Math.min(y, scaleY(0))}
              width={candleWidth * 0.6}
              height={height}
              fill={color}
            />
          );
        })}

        {/* MACD line */}
        <polyline
          points={indicators.macd.line
            .map((val, idx) => {
              if (isNaN(val)) return null;
              const x = padding.left + (idx + 0.5) * candleWidth;
              const y = scaleY(val);
              return `${x},${y}`;
            })
            .filter(Boolean)
            .join(" ")}
          stroke={COLORS.macdLine}
        />

        {/* Signal line */}
        <polyline
          points={indicators.macd.signal
            .map((val, idx) => {
              if (isNaN(val)) return null;
              const x = padding.left + (idx + 0.5) * candleWidth;
              const y = scaleY(val);
              return `${x},${y}`;
            })
            .filter(Boolean)
            .join(" ")}
          stroke={COLORS.macdSignal}
        />

        {/* Labels */}
        <text
          x={canvasWidth / 2}
          y={canvasHeight - 5}
          fill={COLORS.textSecondary}
        >
          MACD
        </text>
      </svg>
    );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: COLORS.bg,
        color: COLORS.text,
        padding: "20px",
      }}
    >
      <Breadcrumb
        items={[
          { label: "Tools", href: "/tools" },
          { label: "Advanced Charting", href: "/tools/advanced-charting" },
        ]}
      />

      <h1
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          marginTop: "20px",
          marginBottom: "10px",
        }}
      >
        Advanced Charting Tool
      </h1>

      <p
        style={{
          color: COLORS.textSecondary,
          marginBottom: "20px",
          fontSize: "14px",
        }}
      >
        Professional-grade TradingView-style chart with technical indicators and drawing tools
      </p>

      {/* Control Panel */}
      <div
        style={{
          backgroundColor: COLORS.surface,
          border: `1px solid ${COLORS.border}`,
          borderRadius: "8px",
          padding: "16px",
          marginBottom: "20px",
        }}
      >
        {/* Pair and Timeframe Selection */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            marginBottom: "16px",
          }}
        >
          <div>
            <label style={{ display: "block", marginBottom: "8px", fontSize: "12px" }}>
              Trading Pair
            </label>
            <select
              value={state.pair}
              onChange={(e) =>
                setState({ ...state, pair: e.target.value })
              }
              style={{
                width: "100%",
                padding: "8px",
                backgroundColor: COLORS.bg,
                color: COLORS.text,
                border: `1px solid ${COLORS.border}`,
                borderRadius: "4px",
                fontSize: "14px",
              }}
            >
              {CRYPTO_PAIRS.map((pair) => (
                <option key={pair} value={pair}>
                  {pair}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "8px", fontSize: "12px" }}>
              Timeframe
            </label>
            <div style={{ display: "flex", gap: "8px" }}>
              {(["1H", "4H", "1D", "1W", "1M"] as const).map((tf) => (
                <button
                  key={tf}
                  onClick={() => setState({ ...state, timeframe: tf })}
                  style={{
                    flex: 1,
                    padding: "8px",
                    backgroundColor:
                      state.timeframe === tf ? COLORS.bullish : COLORS.bg,
                    color: state.timeframe === tf ? COLORS.bg : COLORS.text,
                    border: `1px solid ${COLORS.border}`,
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  {tf}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Indicator Toggles */}
        <div>
          <label style={{ display: "block", marginBottom: "8px", fontSize: "12px" }}>
            Technical Indicators
          </label>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "8px",
            }}
          >
            {Object.entries(state.indicators).map(([key, value]) => (
              <label
                key={key}
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  fontSize: "13px",
                }}
              >
                <input
                  type="checkbox"
                  checked={value}
                  onChange={(e) =>
                    setState({
                      ...state,
                      indicators: {
                        ...state.indicators,
                        [key]: e.target.checked,
                      },
                    })
                  }
                  style={{ marginRight: "6px", cursor: "pointer" }}
                />
                {key === "sma20"
                  ? "SMA(20)"
                  : key === "sma50"
                    ? "SMA(50)"
                    : key === "sma200"
                      ? "SMA(200)"
                      : key === "ema"
                        ? "EMA(12)"
                        : key === "rsi"
                          ? "RSI(14)"
                          : key === "macd"
                            ? "MACD"
                            : key === "bollingerBands"
                              ? "Bollinger"
                              : "Volume"}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Chart Area — Sprint 45: Drawing toolbar added on left */}
      <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
        {/* Drawing toolbar */}
        <DrawingToolbar
          activeTool={activeTool}
          onSelect={setActiveTool}
          onClear={() => setState({ ...state, drawingTools: [] })}
          onExport={() => {
            // Export via canvas if available
            const canvas = document.querySelector('canvas') as HTMLCanvasElement | null;
            if (canvas) {
              const a = document.createElement('a');
              a.href = canvas.toDataURL('image/png');
              a.download = `degen0x-${state.pair.replace('/', '-')}-${new Date().toISOString().slice(0, 10)}.png`;
              a.click();
            }
          }}
        />

        <div
          ref={canvasRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            flex: 1,
            display: "flex",
            gap: "12px",
            backgroundColor: COLORS.bg,
            borderRadius: "8px",
            overflow: "hidden",
            cursor: activeTool !== 'none' ? 'crosshair' : 'default',
          }}
        >
          <div style={{ flex: 3 }}>
            <ChartCanvas />
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <OrderBook />
          </div>
        </div>
      </div>

      {/* Sprint 45: Tool panels row */}
      <div style={{ display: "flex", gap: "12px", marginBottom: "20px", flexWrap: "wrap" }}>
        <button
          onClick={() => setShowAlerts((v) => !v)}
          style={{
            background: showAlerts ? '#58a6ff18' : '#161b22',
            border: `1px solid ${showAlerts ? '#58a6ff60' : '#30363d'}`,
            borderRadius: '8px',
            color: showAlerts ? '#58a6ff' : '#8b949e',
            padding: '6px 14px',
            fontSize: '12px',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          🔔 Price Alerts
        </button>
        <button
          onClick={() => setShowFib((v) => !v)}
          style={{
            background: showFib ? '#bc8cff18' : '#161b22',
            border: `1px solid ${showFib ? '#bc8cff60' : '#30363d'}`,
            borderRadius: '8px',
            color: showFib ? '#bc8cff' : '#8b949e',
            padding: '6px 14px',
            fontSize: '12px',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          🌀 Fibonacci
        </button>
        {activeTool !== 'none' && (
          <span style={{ fontSize: '12px', color: '#8b949e', alignSelf: 'center', padding: '0 4px' }}>
            Active tool: <strong style={{ color: '#58a6ff' }}>{activeTool}</strong> — click chart to draw
          </span>
        )}
      </div>

      {/* Alert + Fib panels */}
      {(showAlerts || showFib) && (
        <div style={{ display: "flex", gap: "12px", marginBottom: "20px", flexWrap: "wrap" }}>
          {showAlerts && (
            <div style={{ flex: 1, minWidth: '280px' }}>
              <PriceAlertPanel
                currentPair={state.pair}
                currentPrice={ohlcvData[ohlcvData.length - 1]?.close ?? 0}
              />
            </div>
          )}
          {showFib && (
            <div style={{ flex: 1, minWidth: '280px' }}>
              <FibRetracementLegend
                high={Math.max(...ohlcvData.slice(-30).map((d) => d.high))}
                low={Math.min(...ohlcvData.slice(-30).map((d) => d.low))}
              />
            </div>
          )}
        </div>
      )}

      {/* Sprint 45: Pattern detection */}
      <PatternPanel patterns={detectPatterns(ohlcvData.map((d) => d.close))} />

      {/* Sub-indicators */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: state.indicators.rsi ? "1fr" : "0fr",
          gap: "12px",
          marginBottom: "20px",
        }}
      >
        {state.indicators.rsi && <RSIIndicator />}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: state.indicators.macd ? "1fr" : "0fr",
          gap: "12px",
        }}
      >
        {state.indicators.macd && <MACDIndicator />}
      </div>

      {/* Info Panel */}
      {selectedCandle !== null && (
        <div
          style={{
            backgroundColor: COLORS.surface,
            border: `1px solid ${COLORS.border}`,
            borderRadius: "8px",
            padding: "16px",
            marginTop: "20px",
          }}
        >
          <h3 style={{ marginBottom: "12px", fontSize: "14px", fontWeight: "bold" }}>
            Candle Details
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: "16px",
              fontSize: "13px",
            }}
          >
            <div>
              <div style={{ color: COLORS.textSecondary }}>Open</div>
              <div style={{ fontWeight: "bold", marginTop: "4px" }}>
                {formatPrice(ohlcvData[selectedCandle].open)}
              </div>
            </div>
            <div>
              <div style={{ color: COLORS.textSecondary }}>High</div>
              <div style={{ fontWeight: "bold", marginTop: "4px" }}>
                {formatPrice(ohlcvData[selectedCandle].high)}
              </div>
            </div>
            <div>
              <div style={{ color: COLORS.textSecondary }}>Low</div>
              <div style={{ fontWeight: "bold", marginTop: "4px" }}>
                {formatPrice(ohlcvData[selectedCandle].low)}
              </div>
            </div>
            <div>
              <div style={{ color: COLORS.textSecondary }}>Close</div>
              <div
                style={{
                  fontWeight: "bold",
                  marginTop: "4px",
                  color:
                    ohlcvData[selectedCandle].close >=
                    ohlcvData[selectedCandle].open
                      ? COLORS.bullish
                      : COLORS.bearish,
                }}
              >
                {formatPrice(ohlcvData[selectedCandle].close)}
              </div>
            </div>
            <div>
              <div style={{ color: COLORS.textSecondary }}>Volume</div>
              <div style={{ fontWeight: "bold", marginTop: "4px" }}>
                {(ohlcvData[selectedCandle].volume / 1000000).toFixed(2)}M
              </div>
            </div>
            <div>
              <div style={{ color: COLORS.textSecondary }}>Change</div>
              <div
                style={{
                  fontWeight: "bold",
                  marginTop: "4px",
                  color:
                    ohlcvData[selectedCandle].close >=
                    ohlcvData[selectedCandle].open
                      ? COLORS.bullish
                      : COLORS.bearish,
                }}
              >
                {(
                  (((ohlcvData[selectedCandle].close -
                    ohlcvData[selectedCandle].open) /
                    ohlcvData[selectedCandle].open) *
                    100)
                ).toFixed(2)}%
              </div>
            </div>
          </div>
        </div>
      )}
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Advanced Charting",
              "url": "https://degen0x.com/tools/advanced-charting",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            })
          }}
        />
      <RelatedContent category="tools" currentSlug="/tools/advanced-charting" />
      </div>
  );
}
