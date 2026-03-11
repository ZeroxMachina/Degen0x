"use client";

import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";

/**
 * Metadata for Embed Widget Generator
 *
 * Page Title: CryptoDegen - Embed Widget Generator
 * Description: Create customizable crypto widgets for your website or blog.
 *              Choose from price tickers, charts, market stats, and more.
 */

// ── Types ────────────────────────────────────────────────────────────────────
type WidgetType = "price-ticker" | "mini-chart" | "market-stats" | "fear-greed" | "portfolio" | "trending";
type ThemeType = "light" | "dark";
type TemplateType = "blog-sidebar" | "dashboard-header" | "mobile";

interface WidgetConfig {
  type: WidgetType;
  theme: ThemeType;
  width: number;
  height: number;
  accentColor: string;
  borderRadius: number;
  showTitle: boolean;
  showPrice: boolean;
  showChart: boolean;
  showPercentage: boolean;
  showFooter: boolean;
}

interface WidgetTypeInfo {
  id: WidgetType;
  name: string;
  description: string;
  icon: string;
  defaultWidth: number;
  defaultHeight: number;
}

// ── Widget Types ────────────────────────────────────────────────────────────
const WIDGET_TYPES: WidgetTypeInfo[] = [
  {
    id: "price-ticker",
    name: "Price Ticker",
    description: "Displays live crypto prices with 24h change",
    icon: "📊",
    defaultWidth: 300,
    defaultHeight: 150,
  },
  {
    id: "mini-chart",
    name: "Mini Chart",
    description: "Compact price chart with trend visualization",
    icon: "📈",
    defaultWidth: 400,
    defaultHeight: 250,
  },
  {
    id: "market-stats",
    name: "Market Stats",
    description: "Market cap, volume, and dominance metrics",
    icon: "📉",
    defaultWidth: 350,
    defaultHeight: 200,
  },
  {
    id: "fear-greed",
    name: "Fear & Greed Index",
    description: "Current market sentiment indicator",
    icon: "😨",
    defaultWidth: 300,
    defaultHeight: 300,
  },
  {
    id: "portfolio",
    name: "Portfolio Summary",
    description: "Display your portfolio holdings overview",
    icon: "💼",
    defaultWidth: 380,
    defaultHeight: 280,
  },
  {
    id: "trending",
    name: "Trending Coins",
    description: "Top 10 trending cryptocurrencies list",
    icon: "🔥",
    defaultWidth: 320,
    defaultHeight: 350,
  },
];

// ── Templates ────────────────────────────────────────────────────────────────
const TEMPLATES: Record<TemplateType, { name: string; width: number; height: number; widgets: WidgetType[] }> = {
  "blog-sidebar": {
    name: "Blog Sidebar",
    width: 300,
    height: 500,
    widgets: ["price-ticker", "trending"],
  },
  "dashboard-header": {
    name: "Dashboard Header",
    width: 100,
    height: 60,
    widgets: ["market-stats", "mini-chart"],
  },
  mobile: {
    name: "Mobile Widget",
    width: 280,
    height: 350,
    widgets: ["price-ticker", "fear-greed"],
  },
};

// ── Accent Colors ────────────────────────────────────────────────────────────
const ACCENT_COLORS = [
  { name: "Blue", value: "#3b82f6" },
  { name: "Green", value: "#10b981" },
  { name: "Purple", value: "#a855f7" },
  { name: "Orange", value: "#f97316" },
  { name: "Red", value: "#ef4444" },
  { name: "Pink", value: "#ec4899" },
  { name: "Cyan", value: "#06b6d4" },
  { name: "Amber", value: "#f59e0b" },
];

// ── Sample Data ──────────────────────────────────────────────────────────────
const SAMPLE_CRYPTOCURRENCIES = [
  { symbol: "BTC", name: "Bitcoin", price: 67450, change24h: 5.23, icon: "₿" },
  { symbol: "ETH", name: "Ethereum", price: 3680, change24h: 3.12, icon: "Ξ" },
  { symbol: "SOL", name: "Solana", price: 198, change24h: 8.45, icon: "◎" },
  { symbol: "BNB", name: "BNB", price: 612, change24h: 2.34, icon: "⬠" },
  { symbol: "XRP", name: "XRP", price: 2.85, change24h: -1.23, icon: "✕" },
  { symbol: "DOGE", name: "Dogecoin", price: 0.48, change24h: 4.56, icon: "Ð" },
  { symbol: "AVAX", name: "Avalanche", price: 45.20, change24h: 6.78, icon: "Λ" },
  { symbol: "LINK", name: "Chainlink", price: 28.40, change24h: 2.11, icon: "🔗" },
  { symbol: "MATIC", name: "Polygon", price: 0.92, change24h: 3.45, icon: "⬡" },
  { symbol: "ADA", name: "Cardano", price: 1.18, change24h: -0.89, icon: "₳" },
];

// ── Widget Preview Components ────────────────────────────────────────────────

function PriceTickerPreview({ config }: { config: WidgetConfig }) {
  return (
    <div
      className={`rounded-lg p-4 flex flex-col gap-3 ${
        config.theme === "dark" ? "bg-[#1a1a2e] border border-[#2a2a4e]" : "bg-white border border-gray-200"
      }`}
      style={{ width: config.width, height: config.height, borderRadius: `${config.borderRadius}px` }}
    >
      {config.showTitle && (
        <h3 className={`font-bold text-lg ${config.theme === "dark" ? "text-white" : "text-gray-900"}`}>
          BTC / USD
        </h3>
      )}
      {config.showPrice && (
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold" style={{ color: config.accentColor }}>
            $67,450
          </span>
          <span className="text-green-500 text-sm font-semibold">+5.23%</span>
        </div>
      )}
      {config.showPercentage && (
        <div className="flex gap-3 text-sm">
          <div className={config.theme === "dark" ? "text-gray-400" : "text-gray-600"}>24h High: $69,200</div>
          <div className={config.theme === "dark" ? "text-gray-400" : "text-gray-600"}>Low: $65,800</div>
        </div>
      )}
      {config.showFooter && (
        <div className={`text-xs mt-auto ${config.theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
          Last updated: 2 minutes ago
        </div>
      )}
    </div>
  );
}

function MiniChartPreview({ config }: { config: WidgetConfig }) {
  return (
    <div
      className={`rounded-lg p-4 flex flex-col gap-3 ${
        config.theme === "dark" ? "bg-[#1a1a2e] border border-[#2a2a4e]" : "bg-white border border-gray-200"
      }`}
      style={{ width: config.width, height: config.height, borderRadius: `${config.borderRadius}px` }}
    >
      {config.showTitle && (
        <h3 className={`font-bold ${config.theme === "dark" ? "text-white" : "text-gray-900"}`}>Ethereum - 7 Day</h3>
      )}
      <div className="flex-1 flex items-end justify-between gap-1">
        {[42, 38, 45, 40, 48, 52, 58, 55, 62, 68, 72, 75, 78, 82, 85, 88].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t"
            style={{
              height: `${(h / 100) * 100}%`,
              backgroundColor: config.accentColor,
              opacity: 0.7 + i * 0.02,
            }}
          />
        ))}
      </div>
      {config.showPrice && (
        <div className="text-sm font-semibold" style={{ color: config.accentColor }}>
          ETH $3,680 +3.12%
        </div>
      )}
    </div>
  );
}

function MarketStatsPreview({ config }: { config: WidgetConfig }) {
  return (
    <div
      className={`rounded-lg p-4 space-y-3 ${
        config.theme === "dark" ? "bg-[#1a1a2e] border border-[#2a2a4e]" : "bg-white border border-gray-200"
      }`}
      style={{ width: config.width, height: config.height, borderRadius: `${config.borderRadius}px` }}
    >
      {config.showTitle && (
        <h3 className={`font-bold text-lg ${config.theme === "dark" ? "text-white" : "text-gray-900"}`}>Market Stats</h3>
      )}
      <div className={`text-sm ${config.theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
        <div className="flex justify-between py-1">
          <span>Market Cap:</span>
          <span style={{ color: config.accentColor }} className="font-semibold">
            $3.2T
          </span>
        </div>
        <div className="flex justify-between py-1">
          <span>24h Volume:</span>
          <span style={{ color: config.accentColor }} className="font-semibold">
            $156B
          </span>
        </div>
        <div className="flex justify-between py-1">
          <span>BTC Dominance:</span>
          <span style={{ color: config.accentColor }} className="font-semibold">
            52.4%
          </span>
        </div>
        <div className="flex justify-between py-1">
          <span>ETH Dominance:</span>
          <span style={{ color: config.accentColor }} className="font-semibold">
            18.2%
          </span>
        </div>
      </div>
    </div>
  );
}

function FearGreedPreview({ config }: { config: WidgetConfig }) {
  return (
    <div
      className={`rounded-lg p-4 flex flex-col items-center justify-center gap-4 ${
        config.theme === "dark" ? "bg-[#1a1a2e] border border-[#2a2a4e]" : "bg-white border border-gray-200"
      }`}
      style={{ width: config.width, height: config.height, borderRadius: `${config.borderRadius}px` }}
    >
      {config.showTitle && (
        <h3 className={`font-bold ${config.theme === "dark" ? "text-white" : "text-gray-900"}`}>Market Sentiment</h3>
      )}
      <div className="relative w-32 h-32 flex items-center justify-center">
        <svg className="transform -rotate-90 w-32 h-32">
          <circle
            cx="64"
            cy="64"
            r="56"
            fill="none"
            stroke={config.theme === "dark" ? "#2a2a4e" : "#e5e7eb"}
            strokeWidth="8"
          />
          <circle
            cx="64"
            cy="64"
            r="56"
            fill="none"
            stroke={config.accentColor}
            strokeWidth="8"
            strokeDasharray="120 352"
            opacity="0.7"
          />
        </svg>
        <span className="absolute text-2xl font-bold" style={{ color: config.accentColor }}>
          65
        </span>
      </div>
      {config.showPercentage && (
        <div className={`text-sm font-semibold ${config.theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
          Neutral/Greedy
        </div>
      )}
    </div>
  );
}

function PortfolioPreview({ config }: { config: WidgetConfig }) {
  return (
    <div
      className={`rounded-lg p-4 space-y-3 ${
        config.theme === "dark" ? "bg-[#1a1a2e] border border-[#2a2a4e]" : "bg-white border border-gray-200"
      }`}
      style={{ width: config.width, height: config.height, borderRadius: `${config.borderRadius}px` }}
    >
      {config.showTitle && (
        <h3 className={`font-bold text-lg ${config.theme === "dark" ? "text-white" : "text-gray-900"}`}>
          My Portfolio
        </h3>
      )}
      <div className="space-y-2 text-sm">
        <div className="flex justify-between items-center">
          <span className={config.theme === "dark" ? "text-gray-300" : "text-gray-700"}>BTC</span>
          <span style={{ color: config.accentColor }} className="font-semibold">
            2.5 BTC
          </span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className="h-2 rounded-full"
            style={{ width: "65%", backgroundColor: config.accentColor }}
          />
        </div>
        <div className="flex justify-between items-center pt-2">
          <span className={config.theme === "dark" ? "text-gray-300" : "text-gray-700"}>ETH</span>
          <span style={{ color: config.accentColor }} className="font-semibold">
            25 ETH
          </span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className="h-2 rounded-full"
            style={{ width: "35%", backgroundColor: config.accentColor }}
          />
        </div>
      </div>
      {config.showFooter && (
        <div className={`text-xs pt-2 ${config.theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
          Total: $345,678
        </div>
      )}
    </div>
  );
}

function TrendingCoinsPreview({ config }: { config: WidgetConfig }) {
  const trendingCoins = SAMPLE_CRYPTOCURRENCIES.slice(0, 5);
  return (
    <div
      className={`rounded-lg p-4 space-y-2 overflow-y-auto ${
        config.theme === "dark" ? "bg-[#1a1a2e] border border-[#2a2a4e]" : "bg-white border border-gray-200"
      }`}
      style={{ width: config.width, height: config.height, borderRadius: `${config.borderRadius}px` }}
    >
      {config.showTitle && (
        <h3 className={`font-bold text-lg ${config.theme === "dark" ? "text-white" : "text-gray-900"} mb-2`}>
          Trending Now 🔥
        </h3>
      )}
      {trendingCoins.map((coin) => (
        <div
          key={coin.symbol}
          className={`flex justify-between items-center text-sm p-2 rounded ${
            config.theme === "dark" ? "bg-[#2a2a4e]" : "bg-gray-50"
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="text-lg">{coin.icon}</span>
            <span className={config.theme === "dark" ? "text-white" : "text-gray-900"}>{coin.symbol}</span>
          </div>
          <div className="flex gap-2 items-center">
            <span style={{ color: config.accentColor }} className="font-semibold">
              ${coin.price.toFixed(2)}
            </span>
            <span className={coin.change24h > 0 ? "text-green-500" : "text-red-500"} style={{ fontSize: "0.75rem" }}>
              {coin.change24h > 0 ? "+" : ""}{coin.change24h}%
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function renderWidgetPreview(config: WidgetConfig) {
  switch (config.type) {
    case "price-ticker":
      return <PriceTickerPreview config={config} />;
    case "mini-chart":
      return <MiniChartPreview config={config} />;
    case "market-stats":
      return <MarketStatsPreview config={config} />;
    case "fear-greed":
      return <FearGreedPreview config={config} />;
    case "portfolio":
      return <PortfolioPreview config={config} />;
    case "trending":
      return <TrendingCoinsPreview config={config} />;
  }
}

// ── Main Component ──────────────────────────────────────────────────────────

export default function EmbedWidgetsPage() {
  const [selectedWidget, setSelectedWidget] = useState<WidgetType>("price-ticker");
  const [config, setConfig] = useState<WidgetConfig>({
    type: "price-ticker",
    theme: "dark",
    width: 300,
    height: 150,
    accentColor: "#3b82f6",
    borderRadius: 8,
    showTitle: true,
    showPrice: true,
    showChart: true,
    showPercentage: true,
    showFooter: true,
  });

  const widgetInfo = WIDGET_TYPES.find((w) => w.id === selectedWidget)!;

  const handleWidgetChange = (widgetType: WidgetType) => {
    setSelectedWidget(widgetType);
    const newWidgetInfo = WIDGET_TYPES.find((w) => w.id === widgetType)!;
    setConfig((prev) => ({
      ...prev,
      type: widgetType,
      width: newWidgetInfo.defaultWidth,
      height: newWidgetInfo.defaultHeight,
    }));
  };

  const handleTemplateSelect = (templateType: TemplateType) => {
    const template = TEMPLATES[templateType];
    const firstWidget = template.widgets[0];
    setSelectedWidget(firstWidget);
    setConfig((prev) => ({
      ...prev,
      type: firstWidget,
      width: template.width,
      height: template.height,
    }));
  };

  const generateEmbedCode = (): string => {
    const embedUrl = `https://cryptodegen.com/embed/${config.type}?theme=${config.theme}&w=${config.width}&h=${config.height}&color=${encodeURIComponent(config.accentColor)}&radius=${config.borderRadius}`;
    return `<iframe src="${embedUrl}" width="${config.width}" height="${config.height}" frameborder="0" style="border-radius: ${config.borderRadius}px; border: none; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"></iframe>`;
  };

  const generateReactCode = (): string => {
    return `import { CryptoWidget } from '@cryptodegen/widgets';

export default function MyComponent() {
  return (
    <CryptoWidget
      type="${config.type}"
      theme="${config.theme}"
      width={${config.width}}
      height={${config.height}}
      accentColor="${config.accentColor}"
      borderRadius={${config.borderRadius}}
      showTitle={${config.showTitle}}
      showPrice={${config.showPrice}}
      showChart={${config.showChart}}
      showPercentage={${config.showPercentage}}
      showFooter={${config.showFooter}}
    />
  );
}`;
  };

  return (
    <div className="min-h-screen bg-[#0d1117]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Tools", href: "/tools" },
            { label: "Embed Widgets", href: "/tools/embed-widgets" },
          ]}
        />

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-3">Embed Widget Generator</h1>
          <p className="text-gray-400 text-lg">
            Create customizable crypto widgets to embed on your website or blog. Choose from price tickers, charts,
            market stats, and more.
          </p>
        </div>

        {/* Templates Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Predefined Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(TEMPLATES).map(([key, template]) => (
              <button
                key={key}
                onClick={() => handleTemplateSelect(key as TemplateType)}
                className="p-4 rounded-lg border border-gray-700 hover:border-blue-500 hover:bg-[#1a1a2e] transition-all duration-200"
              >
                <h3 className="text-white font-semibold mb-2">{template.name}</h3>
                <p className="text-gray-400 text-sm">
                  {template.width}x{template.height}px • {template.widgets.length} widgets
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Widget Gallery */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Widget Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {WIDGET_TYPES.map((widget) => (
              <button
                key={widget.id}
                onClick={() => handleWidgetChange(widget.id)}
                className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                  selectedWidget === widget.id
                    ? "border-blue-500 bg-[#1a1a2e]"
                    : "border-gray-700 hover:border-gray-600 bg-[#0f0f1a]"
                }`}
              >
                <div className="text-2xl mb-2">{widget.icon}</div>
                <h3 className="text-white text-sm font-semibold">{widget.name}</h3>
                <p className="text-gray-500 text-xs mt-1">{widget.defaultWidth}x{widget.defaultHeight}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Customization Panel */}
          <div className="lg:col-span-1">
            <div className="bg-[#1a1a2e] rounded-lg p-6 border border-gray-700">
              <h2 className="text-xl font-bold text-white mb-6">Customization</h2>

              {/* Widget Type Info */}
              <div className="mb-6">
                <h3 className="text-white font-semibold text-lg mb-2">{widgetInfo.name}</h3>
                <p className="text-gray-400 text-sm">{widgetInfo.description}</p>
              </div>

              {/* Theme */}
              <div className="mb-6">
                <label className="block text-white font-semibold mb-3">Theme</label>
                <div className="flex gap-2">
                  {["light", "dark"].map((theme) => (
                    <button
                      key={theme}
                      onClick={() => setConfig((prev) => ({ ...prev, theme: theme as ThemeType }))}
                      className={`flex-1 py-2 rounded font-semibold transition-all ${
                        config.theme === theme
                          ? "bg-blue-600 text-white"
                          : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      }`}
                    >
                      {theme === "light" ? "☀️" : "🌙"} {theme.charAt(0).toUpperCase() + theme.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dimensions */}
              <div className="mb-6">
                <label className="block text-white font-semibold mb-3">Dimensions</label>
                <div className="space-y-3">
                  <div>
                    <label className="text-gray-400 text-sm">Width: {config.width}px</label>
                    <input
                      type="range"
                      min="250"
                      max="600"
                      value={config.width}
                      onChange={(e) => setConfig((prev) => ({ ...prev, width: parseInt(e.target.value) }))}
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm">Height: {config.height}px</label>
                    <input
                      type="range"
                      min="100"
                      max="500"
                      value={config.height}
                      onChange={(e) => setConfig((prev) => ({ ...prev, height: parseInt(e.target.value) }))}
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Accent Color */}
              <div className="mb-6">
                <label className="block text-white font-semibold mb-3">Accent Color</label>
                <div className="grid grid-cols-4 gap-2">
                  {ACCENT_COLORS.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => setConfig((prev) => ({ ...prev, accentColor: color.value }))}
                      className={`w-12 h-12 rounded border-2 transition-all ${
                        config.accentColor === color.value ? "border-white" : "border-gray-700"
                      }`}
                      style={{ backgroundColor: color.value }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Border Radius */}
              <div className="mb-6">
                <label className="block text-white font-semibold mb-3">Border Radius: {config.borderRadius}px</label>
                <input
                  type="range"
                  min="0"
                  max="20"
                  value={config.borderRadius}
                  onChange={(e) => setConfig((prev) => ({ ...prev, borderRadius: parseInt(e.target.value) }))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Element Toggles */}
              <div className="space-y-3">
                <label className="block text-white font-semibold mb-3">Elements to Show</label>
                {[
                  { key: "showTitle" as const, label: "Title" },
                  { key: "showPrice" as const, label: "Price" },
                  { key: "showChart" as const, label: "Chart" },
                  { key: "showPercentage" as const, label: "Percentage" },
                  { key: "showFooter" as const, label: "Footer" },
                ].map(({ key, label }) => (
                  <label key={key} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={config[key]}
                      onChange={(e) => setConfig((prev) => ({ ...prev, [key]: e.target.checked }))}
                      className="w-4 h-4 rounded border-gray-600 text-blue-600 cursor-pointer"
                    />
                    <span className="text-gray-300">{label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Preview and Code Panel */}
          <div className="lg:col-span-2 space-y-8">
            {/* Live Preview */}
            <div className="bg-[#1a1a2e] rounded-lg p-6 border border-gray-700">
              <h2 className="text-xl font-bold text-white mb-6">Live Preview</h2>
              <div className="flex justify-center items-start overflow-auto p-4 bg-[#0f0f1a] rounded-lg min-h-80">
                {renderWidgetPreview(config)}
              </div>
            </div>

            {/* Code Output */}
            <div className="bg-[#1a1a2e] rounded-lg p-6 border border-gray-700">
              <h2 className="text-xl font-bold text-white mb-6">Code Output</h2>

              {/* Tabs */}
              <div className="flex gap-2 mb-6 border-b border-gray-700">
                <button className="px-4 py-2 text-white font-semibold border-b-2 border-blue-600">
                  HTML / iframe
                </button>
              </div>

              {/* Code Block */}
              <div className="bg-[#0f0f1a] rounded-lg p-4 mb-4">
                <pre className="text-gray-300 text-sm overflow-x-auto font-mono whitespace-pre-wrap break-words">
                  {generateEmbedCode()}
                </pre>
              </div>

              {/* Copy Button */}
              <button
                onClick={() => {
                  navigator.clipboard.writeText(generateEmbedCode());
                  alert("Code copied to clipboard!");
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors"
              >
                Copy Embed Code
              </button>

              {/* React Code Option */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <h3 className="text-white font-semibold mb-4">React Component</h3>
                <div className="bg-[#0f0f1a] rounded-lg p-4 mb-4">
                  <pre className="text-gray-300 text-sm overflow-x-auto font-mono whitespace-pre-wrap break-words">
                    {generateReactCode()}
                  </pre>
                </div>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(generateReactCode());
                    alert("React code copied to clipboard!");
                  }}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded transition-colors"
                >
                  Copy React Code
                </button>
              </div>

              {/* Installation Instructions */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <h3 className="text-white font-semibold mb-4">Installation Instructions</h3>
                <div className="space-y-3 text-gray-300 text-sm">
                  <div>
                    <p className="font-semibold mb-1">For HTML/iframe:</p>
                    <p>Simply copy the embed code above and paste it into your website HTML or Wordpress page editor.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">For React:</p>
                    <ol className="list-decimal list-inside space-y-1">
                      <li>Install the package: npm install @cryptodegen/widgets</li>
                      <li>Copy the component code above into your project</li>
                      <li>Import and use it in your component</li>
                    </ol>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">For WordPress:</p>
                    <p>Use a custom HTML block and paste the iframe code.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Help & Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#1a1a2e] rounded-lg p-6 border border-gray-700">
            <h3 className="text-white font-bold text-lg mb-3">✨ Responsive Design</h3>
            <p className="text-gray-400">
              All widgets automatically adapt to mobile, tablet, and desktop screens without any additional configuration.
            </p>
          </div>
          <div className="bg-[#1a1a2e] rounded-lg p-6 border border-gray-700">
            <h3 className="text-white font-bold text-lg mb-3">🎨 Full Customization</h3>
            <p className="text-gray-400">
              Control colors, dimensions, themes, and which elements to display with our intuitive customization panel.
            </p>
          </div>
          <div className="bg-[#1a1a2e] rounded-lg p-6 border border-gray-700">
            <h3 className="text-white font-bold text-lg mb-3">⚡ Real-Time Updates</h3>
            <p className="text-gray-400">
              All crypto data updates in real-time, so your website always displays the latest prices and market data.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-[#1a1a2e] rounded-lg p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h4 className="text-white font-semibold mb-2">Can I customize the widget colors and size?</h4>
              <p className="text-gray-400">
                Yes! Use the customization panel on the left to adjust colors, width, height, border radius, and which
                elements are displayed.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Is the data updated in real-time?</h4>
              <p className="text-gray-400">
                Yes, all crypto prices and market data are updated in real-time directly from our API endpoints.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Which frameworks do you support?</h4>
              <p className="text-gray-400">
                We provide HTML/iframe embeds (universal) and React components. The iframe version works with any
                website, CMS, or platform.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Do I need to sign up to use widgets?</h4>
              <p className="text-gray-400">
                No! Widgets are free to use. Simply copy the code and embed it on your site. No API key required.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Can I use multiple widgets on one page?</h4>
              <p className="text-gray-400">
                Absolutely! You can embed as many widgets as you like. Each will load independently and update in
                real-time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
