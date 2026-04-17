'use client';

import PriceAlertManager from '@/components/PriceAlertManager';

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alerts | degen0x",
  description: "Comprehensive degen0x guide to alerts — 2026 fundamentals, step-by-step walkthroughs, and risk-aware strategies.",
  alternates: { canonical: "https://degen0x.com/alerts" },
};

export const dynamic = 'force-dynamic';

export default function AlertsPage() {
  return <PriceAlertManager />;
}
