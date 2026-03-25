"use client";

import { useState, useEffect, useCallback } from "react";

// ─── Types ────────────────────────────────────────────────────────
interface AffiliateClick {
  id: string;
  partner: string;
  campaign: string;
  page: string;
  timestamp: number;
  converted: boolean;
}

interface AffiliatePartner {
  name: string;
  slug: string;
  commission: string;
  category: "exchange" | "wallet" | "defi" | "card" | "tax" | "tool";
  tier: "platinum" | "gold" | "silver";
  cta: string;
  url: string;
  logo?: string;
}

interface AffiliateStats {
  totalClicks: number;
  uniqueClicks: number;
  estimatedRevenue: number;
  topPartners: { name: string; clicks: number; revenue: number }[];
  clicksByDay: { date: string; clicks: number }[];
}

// ─── Partner Registry ─────────────────────────────────────────────
const AFFILIATE_PARTNERS: AffiliatePartner[] = [
  { name: "Coinbase", slug: "coinbase", commission: "50% trading fees", category: "exchange", tier: "platinum", cta: "Start Trading", url: "/go/coinbase" },
  { name: "Binance", slug: "binance", commission: "20% kickback", category: "exchange", tier: "platinum", cta: "Join Binance", url: "/go/binance" },
  { name: "Kraken", slug: "kraken", commission: "$10 + 20%", category: "exchange", tier: "gold", cta: "Open Account", url: "/go/kraken" },
  { name: "Bybit", slug: "bybit", commission: "30% commission", category: "exchange", tier: "gold", cta: "Trade Now", url: "/go/bybit" },
  { name: "Ledger", slug: "ledger", commission: "10% per sale", category: "wallet", tier: "platinum", cta: "Buy Ledger", url: "/go/ledger" },
  { name: "Trezor", slug: "trezor", commission: "12% per sale", category: "wallet", tier: "gold", cta: "Buy Trezor", url: "/go/trezor" },
  { name: "Aave", slug: "aave", commission: "Revenue share", category: "defi", tier: "silver", cta: "Start Lending", url: "/go/aave" },
  { name: "Compound", slug: "compound", commission: "Revenue share", category: "defi", tier: "silver", cta: "Earn Yield", url: "/go/compound" },
  { name: "CoinTracker", slug: "cointracker", commission: "$15/signup", category: "tax", tier: "gold", cta: "Try Free", url: "/go/cointracker" },
  { name: "Koinly", slug: "koinly", commission: "25% recurring", category: "tax", tier: "gold", cta: "Calculate Taxes", url: "/go/koinly" },
];

// ─── Tracking Utilities ───────────────────────────────────────────
function generateClickId(): string {
  return `clk_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

function getSessionId(): string {
  if (typeof window === "undefined") return "";
  let sid = sessionStorage.getItem("degen0x_sid");
  if (!sid) {
    sid = `ses_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem("degen0x_sid", sid);
  }
  return sid;
}

function trackClick(partner: string, campaign: string, page: string): AffiliateClick {
  const click: AffiliateClick = {
    id: generateClickId(),
    partner,
    campaign,
    page,
    timestamp: Date.now(),
    converted: false,
  };

  // Store click data locally
  const clicks: AffiliateClick[] = JSON.parse(
    localStorage.getItem("degen0x_affiliate_clicks") || "[]"
  );
  clicks.push(click);
  // Keep last 500 clicks
  if (clicks.length > 500) clicks.splice(0, clicks.length - 500);
  localStorage.setItem("degen0x_affiliate_clicks", JSON.stringify(clicks));

  // Fire analytics event
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "affiliate_click", {
      event_category: "revenue",
      event_label: partner,
      value: 1,
      custom_map: { dimension1: campaign, dimension2: page },
    });
  }

  return click;
}

function getAffiliateStats(): AffiliateStats {
  if (typeof window === "undefined") {
    return { totalClicks: 0, uniqueClicks: 0, estimatedRevenue: 0, topPartners: [], clicksByDay: [] };
  }

  const clicks: AffiliateClick[] = JSON.parse(
    localStorage.getItem("degen0x_affiliate_clicks") || "[]"
  );

  const sessions = new Set(clicks.map(() => getSessionId()));
  const partnerMap = new Map<string, number>();
  const dayMap = new Map<string, number>();

  clicks.forEach((c) => {
    partnerMap.set(c.partner, (partnerMap.get(c.partner) || 0) + 1);
    const day = new Date(c.timestamp).toISOString().split("T")[0];
    dayMap.set(day, (dayMap.get(day) || 0) + 1);
  });

  const topPartners = Array.from(partnerMap.entries())
    .map(([name, clickCount]) => ({
      name,
      clicks: clickCount,
      revenue: clickCount * 0.85, // avg $0.85 EPC estimate
    }))
    .sort((a, b) => b.clicks - a.clicks)
    .slice(0, 5);

  const clicksByDay = Array.from(dayMap.entries())
    .map(([date, clickCount]) => ({ date, clicks: clickCount }))
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(-30);

  return {
    totalClicks: clicks.length,
    uniqueClicks: sessions.size,
    estimatedRevenue: clicks.length * 0.85,
    topPartners,
    clicksByDay,
  };
}

// ─── Affiliate Link Component ─────────────────────────────────────
export function AffiliateLink({
  partner,
  campaign = "organic",
  className = "",
  children,
}: {
  partner: string;
  campaign?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const partnerData = AFFILIATE_PARTNERS.find((p) => p.slug === partner);

  const handleClick = useCallback(() => {
    const page = typeof window !== "undefined" ? window.location.pathname : "";
    trackClick(partner, campaign, page);
  }, [partner, campaign]);

  if (!partnerData) return <>{children}</>;

  return (
    <a
      href={partnerData.url}
      onClick={handleClick}
      className={`inline-flex items-center gap-2 ${className}`}
      rel="nofollow sponsored noopener"
      target="_blank"
      data-affiliate={partner}
      data-campaign={campaign}
    >
      {children}
    </a>
  );
}

// ─── Affiliate CTA Card ───────────────────────────────────────────
export function AffiliateCTA({
  partner,
  campaign = "cta-card",
  variant = "default",
}: {
  partner: string;
  campaign?: string;
  variant?: "default" | "compact" | "banner";
}) {
  const partnerData = AFFILIATE_PARTNERS.find((p) => p.slug === partner);
  if (!partnerData) return null;

  const tierColors = {
    platinum: "from-purple-500/20 to-indigo-500/20 border-purple-500/30",
    gold: "from-amber-500/20 to-orange-500/20 border-amber-500/30",
    silver: "from-gray-400/20 to-slate-500/20 border-gray-400/30",
  };

  const tierBadgeColors = {
    platinum: "bg-purple-500/20 text-purple-300",
    gold: "bg-amber-500/20 text-amber-300",
    silver: "bg-gray-500/20 text-gray-300",
  };

  if (variant === "compact") {
    return (
      <AffiliateLink partner={partner} campaign={campaign}>
        <span className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 border border-indigo-500/20 px-4 py-2 text-sm font-medium text-indigo-300 hover:border-indigo-400/40 transition-all">
          {partnerData.cta} →
        </span>
      </AffiliateLink>
    );
  }

  if (variant === "banner") {
    return (
      <div className={`rounded-xl bg-gradient-to-r ${tierColors[partnerData.tier]} border p-4 flex items-center justify-between`}>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-bold text-white">{partnerData.name}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full ${tierBadgeColors[partnerData.tier]}`}>
              {partnerData.tier}
            </span>
          </div>
          <p className="text-sm text-gray-400">{partnerData.commission}</p>
        </div>
        <AffiliateLink partner={partner} campaign={campaign}>
          <span className="rounded-lg bg-white/10 hover:bg-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-all">
            {partnerData.cta} →
          </span>
        </AffiliateLink>
      </div>
    );
  }

  return (
    <div className={`rounded-xl bg-gradient-to-br ${tierColors[partnerData.tier]} border p-6`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-white">{partnerData.name}</h3>
          <span className={`inline-block text-xs px-2 py-0.5 rounded-full mt-1 ${tierBadgeColors[partnerData.tier]}`}>
            {partnerData.tier} partner
          </span>
        </div>
        <span className="text-2xl">{partnerData.category === "exchange" ? "⇄" : partnerData.category === "wallet" ? "🔐" : "💰"}</span>
      </div>
      <p className="text-sm text-gray-300 mb-4">{partnerData.commission}</p>
      <AffiliateLink partner={partner} campaign={campaign}>
        <span className="block w-full text-center rounded-lg bg-white/10 hover:bg-white/20 py-3 text-sm font-semibold text-white transition-all">
          {partnerData.cta} →
        </span>
      </AffiliateLink>
      <p className="text-[10px] text-gray-500 mt-2 text-center">
        Sponsored · We may earn a commission
      </p>
    </div>
  );
}

// ─── Revenue Dashboard (admin view) ──────────────────────────────
export function AffiliateDashboard() {
  const [stats, setStats] = useState<AffiliateStats | null>(null);

  useEffect(() => {
    setStats(getAffiliateStats());
  }, []);

  if (!stats) return null;

  return (
    <div className="rounded-xl bg-[#161b22] border border-[#30363d] p-6">
      <h2 className="text-lg font-bold text-white mb-4">Revenue Analytics</h2>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="rounded-lg bg-[#0d1117] p-4">
          <p className="text-xs text-gray-400 mb-1">Total Clicks</p>
          <p className="text-2xl font-bold text-cyan-400">{stats.totalClicks.toLocaleString()}</p>
        </div>
        <div className="rounded-lg bg-[#0d1117] p-4">
          <p className="text-xs text-gray-400 mb-1">Unique Sessions</p>
          <p className="text-2xl font-bold text-green-400">{stats.uniqueClicks.toLocaleString()}</p>
        </div>
        <div className="rounded-lg bg-[#0d1117] p-4">
          <p className="text-xs text-gray-400 mb-1">Est. Revenue</p>
          <p className="text-2xl font-bold text-purple-400">${stats.estimatedRevenue.toFixed(2)}</p>
        </div>
      </div>

      {stats.topPartners.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-gray-300 mb-2">Top Partners</h3>
          <div className="space-y-2">
            {stats.topPartners.map((p) => (
              <div key={p.name} className="flex items-center justify-between rounded-lg bg-[#0d1117] px-4 py-2">
                <span className="text-sm text-white">{p.name}</span>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-gray-400">{p.clicks} clicks</span>
                  <span className="text-xs text-green-400">${p.revenue.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Export partner data for use across pages ─────────────────────
export { AFFILIATE_PARTNERS, getAffiliateStats, trackClick };
export type { AffiliatePartner, AffiliateStats, AffiliateClick };
