/**
 * Affiliate Tracking Utility
 * Centralises all affiliate partner data and UTM link generation.
 * All outbound affiliate clicks go through /go/[partner] for tracking.
 */

export interface AffiliatePartner {
  slug: string;
  name: string;
  /** The real affiliate URL (populated once program is approved) */
  url: string;
  /** Fallback direct URL if affiliate not yet active */
  fallbackUrl: string;
  category: "exchange" | "wallet" | "defi" | "card" | "tax" | "loan";
  commissionType: "cpa" | "revenue_share" | "hybrid";
  /** Estimated commission per conversion */
  estimatedCpa?: string;
}

export const AFFILIATE_PARTNERS: AffiliatePartner[] = [
  // ── Exchanges ──────────────────────────────────────────────────
  { slug: "coinbase", name: "Coinbase", url: "/go/coinbase", fallbackUrl: "https://coinbase.com", category: "exchange", commissionType: "cpa", estimatedCpa: "$50–$100" },
  { slug: "binance", name: "Binance", url: "/go/binance", fallbackUrl: "https://binance.com", category: "exchange", commissionType: "revenue_share", estimatedCpa: "20% fees" },
  { slug: "kraken", name: "Kraken", url: "/go/kraken", fallbackUrl: "https://kraken.com", category: "exchange", commissionType: "revenue_share", estimatedCpa: "20% fees" },
  { slug: "bybit", name: "Bybit", url: "/go/bybit", fallbackUrl: "https://bybit.com", category: "exchange", commissionType: "revenue_share", estimatedCpa: "30% fees" },
  { slug: "kucoin", name: "KuCoin", url: "/go/kucoin", fallbackUrl: "https://kucoin.com", category: "exchange", commissionType: "revenue_share", estimatedCpa: "20% fees" },
  { slug: "gemini", name: "Gemini", url: "/go/gemini", fallbackUrl: "https://gemini.com", category: "exchange", commissionType: "cpa", estimatedCpa: "$30" },
  { slug: "crypto-com", name: "Crypto.com", url: "/go/crypto-com", fallbackUrl: "https://crypto.com", category: "exchange", commissionType: "cpa", estimatedCpa: "$25" },
  { slug: "okx", name: "OKX", url: "/go/okx", fallbackUrl: "https://okx.com", category: "exchange", commissionType: "revenue_share", estimatedCpa: "20% fees" },

  // ── Wallets ────────────────────────────────────────────────────
  { slug: "ledger", name: "Ledger", url: "/go/ledger", fallbackUrl: "https://ledger.com", category: "wallet", commissionType: "cpa", estimatedCpa: "10% of sale" },
  { slug: "trezor", name: "Trezor", url: "/go/trezor", fallbackUrl: "https://trezor.io", category: "wallet", commissionType: "cpa", estimatedCpa: "12% of sale" },

  // ── Tax ───────────────────────────────────────────────────────
  { slug: "koinly", name: "Koinly", url: "/go/koinly", fallbackUrl: "https://koinly.io", category: "tax", commissionType: "cpa", estimatedCpa: "30% subscription" },
  { slug: "taxbit", name: "TaxBit", url: "/go/taxbit", fallbackUrl: "https://taxbit.com", category: "tax", commissionType: "cpa", estimatedCpa: "20% subscription" },
  { slug: "cointracker", name: "CoinTracker", url: "/go/cointracker", fallbackUrl: "https://cointracker.io", category: "tax", commissionType: "cpa", estimatedCpa: "25% subscription" },

  // ── Cards ─────────────────────────────────────────────────────
  { slug: "nexo", name: "Nexo", url: "/go/nexo", fallbackUrl: "https://nexo.com", category: "card", commissionType: "cpa", estimatedCpa: "$25" },
];

/** Returns the tracking URL for a partner with UTM parameters */
export function getAffiliateUrl(
  partnerSlug: string,
  options: {
    source?: string;     // e.g. "exchanges-page"
    medium?: string;     // e.g. "comparison-table"
    campaign?: string;   // e.g. "best-exchanges"
    position?: string;   // e.g. "rank-1"
  } = {}
): string {
  const { source = "cryptodegen", medium = "affiliate", campaign = "general", position } = options;
  const params = new URLSearchParams({
    utm_source: source,
    utm_medium: medium,
    utm_campaign: campaign,
    ...(position && { utm_content: position }),
  });
  return `/go/${partnerSlug}?${params.toString()}`;
}

/** Build a full outbound URL with affiliate params attached */
export function buildTrackedUrl(
  partner: AffiliatePartner,
  utmParams: Record<string, string> = {}
): string {
  const baseUrl = partner.url !== `/go/${partner.slug}` ? partner.url : partner.fallbackUrl;
  const url = new URL(baseUrl.startsWith("http") ? baseUrl : `https://cryptodegen.com${baseUrl}`);
  Object.entries(utmParams).forEach(([k, v]) => url.searchParams.set(k, v));
  return url.toString();
}

/** Get partner by slug */
export function getPartner(slug: string): AffiliatePartner | undefined {
  return AFFILIATE_PARTNERS.find((p) => p.slug === slug);
}
