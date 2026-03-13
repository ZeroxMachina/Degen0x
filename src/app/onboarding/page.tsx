import { Metadata } from 'next';
import OnboardingWizard from '@/components/OnboardingWizard';

export const metadata: Metadata = {
  title: 'Get Started | degen0x',
  description: 'Set up your degen0x profile, choose your risk tolerance, and customize your crypto dashboard in minutes.',
  keywords: ['crypto onboarding', 'portfolio setup', 'risk profile', 'degen0x setup'],
};

export default function OnboardingPage() {
  return (
    <main className="min-h-screen bg-gray-950">
      <OnboardingWizard />
    </main>
  );
}
