// Emits Article JSON-LD for a given article page.
// Resolves a real Person author from the section via author-profiles.ts
// so we emit E-E-A-T-friendly structured data with sameAs links.
//
// Ramp-to-8 Phase 1b.

import { generateArticleSchema } from '@/lib/seo-utils';

interface ArticleSchemaProps {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  section?: string;
  authorHandle?: string;
  wordCount?: number;
}

export default function ArticleSchema(props: ArticleSchemaProps) {
  const schema = generateArticleSchema({
    headline: props.headline,
    description: props.description,
    url: props.url,
    datePublished: props.datePublished,
    dateModified: props.dateModified ?? props.datePublished,
    image: props.image,
    section: props.section,
    authorHandle: props.authorHandle,
    wordCount: props.wordCount,
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
