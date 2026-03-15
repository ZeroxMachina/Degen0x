import type { Metadata } from 'next';
import AdaptiveQuizEngine from '@/components/AdaptiveQuizEngine';

export const metadata: Metadata = {
  title: 'Adaptive Crypto Quiz — Earn XP | degen0x',
  description: 'Test your crypto knowledge with our adaptive quiz engine. Questions adjust to your skill level — from novice to Chain God. Earn XP and unlock badges.',
  openGraph: {
    title: 'degen0x Adaptive Quiz Engine v3',
    description: 'Dynamic difficulty crypto quiz. Earn XP, climb the leaderboard.',
  },
};

export default function QuizPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#0d1117', padding: '24px' }}>
      <div style={{ maxWidth: 600, margin: '0 auto' }}>
        <AdaptiveQuizEngine userXP={1500} maxQuestions={10} />
      </div>
    </main>
  );
}
