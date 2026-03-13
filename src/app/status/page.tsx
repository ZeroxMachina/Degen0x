import type { Metadata } from 'next';
import ClientContent from './ClientContent';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'System Status - degen0x',
  description: 'Real-time health status and monitoring of degen0x API services and infrastructure.',
};

export default function StatusPage() {
  return <ClientContent />;
}
