// Emits SoftwareApplication JSON-LD for a /tools/* page.
//
// Google supports SoftwareApplication rich results when required fields are
// present: name, operatingSystem, applicationCategory, and either
// aggregateRating or offers. Our tools are free, browser-hosted, so:
//   - operatingSystem: "Web"
//   - applicationCategory: "FinanceApplication"
//   - offers: free
//
// Ramp-to-9.5 Phase C.

interface SoftwareApplicationSchemaProps {
  /** Canonical URL of the tool page. */
  url: string;
  /** Display name of the tool (e.g. "DCA Calculator"). */
  name: string;
  /** One-sentence description of what the tool does. */
  description: string;
  /** Optional applicationCategory override. Defaults to FinanceApplication. */
  applicationCategory?:
    | "FinanceApplication"
    | "BusinessApplication"
    | "UtilitiesApplication"
    | "EducationalApplication";
  /** Optional aggregate rating; omit if unknown. */
  ratingValue?: number;
  ratingCount?: number;
}

export default function SoftwareApplicationSchema({
  url,
  name,
  description,
  applicationCategory = "FinanceApplication",
  ratingValue,
  ratingCount,
}: SoftwareApplicationSchemaProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url,
    applicationCategory,
    operatingSystem: "Web",
    browserRequirements: "Requires JavaScript, modern browser.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    publisher: {
      "@type": "Organization",
      name: "degen0x",
      url: "https://degen0x.com",
    },
  };

  if (typeof ratingValue === "number" && typeof ratingCount === "number" && ratingCount > 0) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: ratingValue.toFixed(1),
      ratingCount: String(ratingCount),
      bestRating: "5",
      worstRating: "1",
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
