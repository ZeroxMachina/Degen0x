import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `MEXC Review (${CURRENT_YEAR}) | degen0x`,
  description:
    "In-depth MEXC exchange review covering fees, features, security, and supported assets. Is MEXC the right exchange for you?",
  alternates: { canonical: "/exchanges/reviews/mexc" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Exchanges', item: 'https://degen0x.com/exchanges' },
    { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://degen0x.com/exchanges/reviews' },
    { '@type': 'ListItem', position: 4, name: 'Mexc', },
  ],
};

export default function MEXCReviewPage() {
  return (
    <>
      <ReviewPage
      product={{
        name: "MEXC",
        slug: "mexc",
        rating: 3.8,
        description:
          "MEXC is a global cryptocurrency exchange known for its massive selection of altcoins and zero maker fee trading. Founded in 2018, it serves over 10 million users across 170+ countries with spot, futures, and ETF trading options.",
        pros: [
          "Zero maker fees on spot trading",
          "Huge selection of 2,000+ tokens including early altcoin listings",
          "Up to 200x leverage on futures",
        ],
        cons: [
          "Not available in the United States",
          "Limited regulatory transparency compared to top-tier exchanges",
        ],
        bestFor: "Altcoin traders looking for early access to new token listings with zero maker fees",
        affiliateUrl: "#",
        category: "exchange",
      }}
      categoryName="Exchanges"
      categorySlug="exchanges"
      overview="MEXC has rapidly grown into one of the largest crypto exchanges by trading volume, particularly popular among altcoin traders seeking early access to new token listings. The platform lists new tokens faster than most competitors, often within days of a project&apos;s launch. With zero maker fees on spot trading and competitive taker fees, MEXC offers an attractive cost structure for active traders. The exchange supports spot, margin, futures, and leveraged ETF products."
      sections={[
        { id: "features", title: "Features", content:
            "MEXC offers spot trading with over 2,000 trading pairs, perpetual futures with up to 200x leverage, leveraged ETFs for simplified leverage exposure, and a launchpad for new token sales. The platform includes copy trading features, grid trading bots, and a comprehensive API for algorithmic traders. The MX token provides fee discounts and governance participation.",
        },
        { id: "fees", title: "Fees", content:
            "MEXC stands out with zero maker fees on spot trading. Taker fees are 0.05% for spot trades, among the lowest in the industry. Futures trading charges 0.00% maker and 0.01% taker fees. Withdrawal fees vary by network and token. There are no deposit fees for crypto. The fee structure makes MEXC particularly attractive for market makers and high-frequency traders.",
        },
        { id: "security", title: "Security", content:
            "MEXC implements multi-signature cold wallet storage, two-factor authentication, anti-phishing codes, and withdrawal address whitelisting. The platform maintains a risk reserve fund to protect users against potential losses. Regular security audits are conducted, though the exchange has not published a full proof-of-reserves audit. Users can enable additional security layers including login notifications and IP restrictions.",
        },
      ]}
      fees={{
        "Spot Maker Fee": "0%",
        "Spot Taker Fee": "0.05%",
        "Futures Maker Fee": "0%",
        "Futures Taker Fee": "0.01%",
        "Withdrawal Fee": "Varies by token",
      }}
      security={["Two-factor authentication", "Cold wallet storage", "Anti-phishing codes", "Withdrawal whitelisting", "Risk reserve fund"]}
      features={["2,000+ trading pairs", "Zero maker fees", "Up to 200x leverage", "Copy trading", "Grid trading bots", "Launchpad", "Leveraged ETFs"]}
      faqs={[
        {
          question: "Is MEXC safe to use?",
          answer:
            "MEXC has been operating since 2018 without major security breaches. It uses cold storage, 2FA, and maintains a reserve fund. However, it has less regulatory oversight than exchanges like Coinbase or Kraken.",
        },
        {
          question: "Is MEXC available in the US?",
          answer:
            "No, MEXC is not available to users in the United States. US residents should use regulated alternatives like Coinbase, Kraken, or Gemini.",
        },
      ]}
      relatedReviews={[
        { name: "Gate.io", slug: "/exchanges/reviews/gate-io" },
        { name: "HTX", slug: "/exchanges/reviews/htx" },
      ]}
      relatedGuides={[
        { title: "MEXC vs Gate.io", href: "/exchanges/compare/mexc-vs-gate-io" },
        { title: "Exchange Comparison Tool", href: "/exchanges/tools/exchange-comparison" },
      ]}
    />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
    </>
  );
}
