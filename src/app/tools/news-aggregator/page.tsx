'use client';

import Breadcrumb from '@/components/Breadcrumb';
import CryptoNewsAggregator from '@/components/CryptoNewsAggregator';
import { BreadcrumbItem } from '@/lib/types';
import RelatedContent from '@/components/RelatedContent';

export default function CryptoNewsAggregatorPage() {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Tools', href: '/tools' },
    { label: 'News Aggregator', href: '/tools/news-aggregator' },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Breadcrumb items={breadcrumbItems} />

        <div className="space-y-2 mb-8">
          <h1 className="text-4xl font-bold text-[var(--color-text)]">
            Live Crypto News Aggregator
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)]">
            Curated cryptocurrency news, analysis, and market insights in real-time
          </p>
        </div>

        <CryptoNewsAggregator />
      </div>
      <RelatedContent category="tools" currentSlug="/tools/news-aggregator" />
    </div>
  );
}
