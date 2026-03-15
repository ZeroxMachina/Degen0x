'use client';

import Breadcrumb from '@/components/Breadcrumb';
import DeFiRiskScanner from '@/components/DeFiRiskScanner';
import type { BreadcrumbItem } from '@/lib/types';

export default function DeFiRiskScannerPage() {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Tools', href: '/tools' },
    { label: 'DeFi Risk Scanner', href: '/tools/defi-risk-scanner' },
  ];

  return (
    <div style={{ backgroundColor: 'var(--color-bg)' }} className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8">
        <Breadcrumb items={breadcrumbItems} />
        <DeFiRiskScanner />
      </div>
    </div>
  );
}
