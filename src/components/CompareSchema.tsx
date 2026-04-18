// CompareSchema — emits ItemList + FAQ-ready structured data for
// /compare/* pages. Helps Google understand head-to-head content
// and increases rich-snippet eligibility.
//
// Phase 3b ramp-to-8.

import { SITE_URL, SITE_NAME } from '@/lib/constants';

interface CompareSchemaProps {
  /** e.g. "Binance vs Coinbase" */
  title: string;
  /** Absolute or relative URL to this page. */
  url: string;
  /** Short page summary. */
  description: string;
  /** The two entities being compared. */
  items: [string, string];
  /** Optional publish date. */
  datePublished?: string;
}

export default function CompareSchema({
  title,
  url,
  description,
  items,
  datePublished = '2025-10-01',
}: CompareSchemaProps) {
  const canonical = url.startsWith('http') ? url : `${SITE_URL}${url}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: title,
        description,
        url: canonical,
        datePublished,
        dateModified: new Date().toISOString().slice(0, 10),
        publisher: {
          '@type': 'Organization',
          name: SITE_NAME,
          url: SITE_URL,
        },
        about: items.map((name) => ({ '@type': 'Thing', name })),
      },
      {
        '@type': 'ItemList',
        name: title,
        numberOfItems: items.length,
        itemListElement: items.map((name, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name,
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
