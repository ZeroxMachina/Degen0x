// Emits Review JSON-LD for a /reviews/* page.
//
// Uses `itemReviewed: Organization` for exchange/wallet/platform reviews. We
// supply editor rating (1–5), our rating body (degen0x), reviewer identity,
// and published/modified dates. All required fields for Google's Review
// rich-result are included — though note Google restricts Review rich results
// to a small set of `itemReviewed` types (Book, Course, Event, Movie, etc.),
// so this is primarily a trust/structured-data signal, not a SERP enhancement.
//
// Ramp-to-9.5 Phase C.

interface ReviewSchemaProps {
  /** Display name of the thing being reviewed (e.g. "Coinbase", "Ledger Nano X"). */
  itemName: string;
  /** Schema.org type for the thing. Defaults to Organization. */
  itemType?: "Organization" | "Product" | "SoftwareApplication" | "FinancialService";
  /** Canonical URL of the review page. */
  url: string;
  /** Our rating 1–5. */
  rating: number;
  /** Best possible rating. Defaults to 5. */
  bestRating?: number;
  /** Rating body. Defaults to "degen0x". */
  author?: string;
  /** ISO date the review was published. */
  datePublished: string;
  /** ISO date the review was last updated. */
  dateModified?: string;
  /** Short 1-2 sentence verdict. */
  reviewBody?: string;
}

export default function ReviewSchema({
  itemName,
  itemType = "Organization",
  url,
  rating,
  bestRating = 5,
  author = "degen0x",
  datePublished,
  dateModified,
  reviewBody,
}: ReviewSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": itemType,
      name: itemName,
      ...(itemType === "Organization" || itemType === "FinancialService"
        ? { url: extractHomepage(url, itemName) }
        : {}),
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: rating.toFixed(1),
      bestRating: String(bestRating),
      worstRating: "1",
    },
    author: {
      "@type": "Organization",
      name: author,
      url: "https://degen0x.com",
    },
    publisher: {
      "@type": "Organization",
      name: "degen0x",
      url: "https://degen0x.com",
    },
    url,
    datePublished,
    ...(dateModified ? { dateModified } : {}),
    ...(reviewBody ? { reviewBody } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function extractHomepage(_reviewUrl: string, itemName: string): string {
  // Best-effort: return a non-degen0x URL. Reviewers can override via a
  // second ReviewSchema if they need an exact homepage. For now, keep the
  // shape honest without hardcoding brand URLs.
  return `https://www.google.com/search?q=${encodeURIComponent(itemName)}+official+site`;
}
