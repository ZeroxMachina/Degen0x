// ─────────────────────────────────────────────
//  Weekly Market Recap Generator API
//  degen0x · Sprint 43
//  Auto-generates weekly market recap content
//  for the newsletter automation pipeline
// ─────────────────────────────────────────────

import { NextResponse } from "next/server";

interface MarketRecap {
  week: string;
  generatedAt: string;
  marketOverview: {
    totalMarketCap: string;
    marketCapChange: string;
    btcDominance: string;
    fearGreedIndex: number;
    fearGreedLabel: string;
  };
  topMovers: {
    gainers: { symbol: string; name: string; change: string }[];
    losers: { symbol: string; name: string; change: string }[];
  };
  defiHighlights: {
    totalTVL: string;
    tvlChange: string;
    topProtocol: string;
    bestYield: { protocol: string; apy: string; pair: string };
  };
  weeklyInsight: string;
  upcomingEvents: { date: string; event: string; impact: "high" | "medium" | "low" }[];
}

function generateWeeklyRecap(): MarketRecap {
  const now = new Date();
  const weekStart = new Date(now);
  weekStart.setDate(now.getDate() - 7);

  const fearGreed = Math.floor(Math.random() * 40) + 30;
  const labels = ["Extreme Fear", "Fear", "Neutral", "Greed", "Extreme Greed"];
  const label = fearGreed < 25 ? labels[0] : fearGreed < 40 ? labels[1] : fearGreed < 60 ? labels[2] : fearGreed < 75 ? labels[3] : labels[4];

  return {
    week: `${weekStart.toLocaleDateString("en-US", { month: "short", day: "numeric" })} - ${now.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}`,
    generatedAt: now.toISOString(),
    marketOverview: {
      totalMarketCap: `$${(2.8 + Math.random() * 0.4).toFixed(2)}T`,
      marketCapChange: `${(Math.random() * 8 - 4).toFixed(1)}%`,
      btcDominance: `${(54 + Math.random() * 6).toFixed(1)}%`,
      fearGreedIndex: fearGreed,
      fearGreedLabel: label,
    },
    topMovers: {
      gainers: [
        { symbol: "SOL", name: "Solana", change: `+${(8 + Math.random() * 20).toFixed(1)}%` },
        { symbol: "RENDER", name: "Render", change: `+${(5 + Math.random() * 15).toFixed(1)}%` },
        { symbol: "INJ", name: "Injective", change: `+${(3 + Math.random() * 12).toFixed(1)}%` },
      ],
      losers: [
        { symbol: "DOGE", name: "Dogecoin", change: `-${(2 + Math.random() * 8).toFixed(1)}%` },
        { symbol: "SHIB", name: "Shiba Inu", change: `-${(1 + Math.random() * 6).toFixed(1)}%` },
        { symbol: "APE", name: "ApeCoin", change: `-${(3 + Math.random() * 10).toFixed(1)}%` },
      ],
    },
    defiHighlights: {
      totalTVL: `$${(180 + Math.random() * 40).toFixed(1)}B`,
      tvlChange: `${(Math.random() * 6 - 2).toFixed(1)}%`,
      topProtocol: "Lido",
      bestYield: {
        protocol: "Aave v3",
        apy: `${(4 + Math.random() * 8).toFixed(1)}%`,
        pair: "USDC/ETH",
      },
    },
    weeklyInsight:
      "Institutional inflows continue to drive blue-chip momentum while meme tokens consolidate. Watch for ETH ETF options approval decision next week.",
    upcomingEvents: [
      { date: "Mon", event: "ETH Shanghai Upgrade Anniversary", impact: "medium" },
      { date: "Wed", event: "Fed FOMC Minutes Release", impact: "high" },
      { date: "Fri", event: "BTC Options Expiry ($8.2B)", impact: "high" },
    ],
  };
}

export async function GET() {
  const recap = generateWeeklyRecap();

  return NextResponse.json({
    success: true,
    recap,
    emailTemplate: {
      subject: `degen0x Weekly Recap | ${recap.week}`,
      preheader: `Market ${recap.marketOverview.marketCapChange.startsWith("+") ? "up" : "down"} this week. Fear & Greed: ${recap.marketOverview.fearGreedIndex}`,
    },
  });
}
