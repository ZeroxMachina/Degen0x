'use client';

import { useState } from 'react';
import Link from 'next/link';

const BENEFITS = [
  { icon: '📊', title: 'Weekly Market Analysis', desc: 'Expert breakdown of market trends, on-chain data, and what to watch next week.' },
  { icon: '🔥', title: 'Alpha Alerts', desc: 'Early signals on trending narratives, airdrops, and DeFi opportunities before they go mainstream.' },
  { icon: '🛠️', title: 'Tool of the Week', desc: 'Discover a new degen0x tool each week with pro tips on how to use it for maximum edge.' },
  { icon: '📈', title: 'Portfolio Strategies', desc: 'Actionable DCA plans, rebalancing triggers, and risk management frameworks.' },
  { icon: '🧠', title: 'Learn & Earn', desc: 'Weekly crypto quiz with prizes — test your knowledge and win merch.' },
  { icon: '⚡', title: 'Breaking News', desc: 'First to know about exchange listings, protocol upgrades, and regulatory shifts.' },
];

const TESTIMONIALS = [
  { name: 'Alex K.', role: 'DeFi Trader', text: 'The alpha alerts alone paid for 100x what this newsletter costs (which is nothing). Absolute must-read.', avatar: '🧑‍💻' },
  { name: 'Sarah M.', role: 'Crypto Investor', text: 'Finally a newsletter that\'s not just shilling. The market analysis is legit institutional-grade.', avatar: '👩‍💼' },
  { name: 'Dev.sol', role: 'Solana Dev', text: 'Tool of the week section introduced me to the gas tracker and DCA calculator. Game changers.', avatar: '👨‍🔬' },
];

export default function NewsletterWelcome() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [frequency, setFrequency] = useState<'weekly' | 'daily'>('weekly');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ background: '#0d1117' }}>
        <div className="max-w-lg text-center">
          <div className="text-7xl mb-6 animate-bounce">🎉</div>
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#e6edf3' }}>You&apos;re In!</h1>
          <p className="text-lg mb-8" style={{ color: '#8b949e' }}>
            Welcome to the degen0x inner circle. Check your inbox for a confirmation email.
            Your first {frequency === 'daily' ? 'daily' : 'weekly'} briefing arrives soon.
          </p>
          <div className="p-6 rounded-xl mb-8" style={{ background: '#161b22', border: '1px solid #30363d' }}>
            <p className="text-sm mb-3" style={{ color: '#8b949e' }}>While you wait, check out our most popular tools:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                { name: 'DCA Calculator', href: '/tools/dca-calculator' },
                { name: 'Gas Tracker', href: '/tools/gas-tracker' },
                { name: 'Portfolio Tracker', href: '/tools/portfolio-tracker' },
                { name: 'Whale Tracker', href: '/tools/whale-tracker' },
              ].map(tool => (
                <Link key={tool.href} href={tool.href}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105"
                  style={{ background: '#6366f120', color: '#818cf8', border: '1px solid #6366f140' }}>
                  {tool.name}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/" className="inline-block px-8 py-3 rounded-xl font-semibold text-white transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #6366f1, #06b6d4)' }}>
            Back to degen0x
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: '#0d1117', color: '#e6edf3' }}>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 opacity-30"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, #6366f130 0%, transparent 70%)' }} />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            style={{ background: '#3fb95020', color: '#3fb950', border: '1px solid #3fb95040' }}>
            <span>🟢</span> 12,847 degens already subscribed
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            The Crypto Newsletter That{' '}
            <span style={{ background: 'linear-gradient(135deg, #6366f1, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Actually Slaps
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto" style={{ color: '#8b949e' }}>
            Free weekly alpha, market analysis, tool guides, and DeFi strategies.
            No shills. No spam. Just signal.
          </p>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-5 py-4 rounded-xl text-base outline-none transition-all focus:ring-2"
                style={{
                  background: '#161b22',
                  border: '1px solid #30363d',
                  color: '#e6edf3',
                  focusRingColor: '#6366f1',
                }}
              />
              <button type="submit"
                className="px-8 py-4 rounded-xl font-bold text-white text-base transition-all hover:scale-105 hover:shadow-lg whitespace-nowrap"
                style={{ background: 'linear-gradient(135deg, #6366f1, #06b6d4)', boxShadow: '0 4px 20px #6366f140' }}>
                Subscribe Free →
              </button>
            </div>

            {/* Frequency Toggle */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <button type="button" onClick={() => setFrequency('weekly')}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
                style={{
                  background: frequency === 'weekly' ? '#6366f120' : 'transparent',
                  color: frequency === 'weekly' ? '#818cf8' : '#8b949e',
                  border: `1px solid ${frequency === 'weekly' ? '#6366f140' : '#30363d'}`,
                }}>
                📬 Weekly Digest
              </button>
              <button type="button" onClick={() => setFrequency('daily')}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
                style={{
                  background: frequency === 'daily' ? '#6366f120' : 'transparent',
                  color: frequency === 'daily' ? '#818cf8' : '#8b949e',
                  border: `1px solid ${frequency === 'daily' ? '#6366f140' : '#30363d'}`,
                }}>
                ⚡ Daily Briefing
              </button>
            </div>

            <p className="text-xs" style={{ color: '#8b949e' }}>
              No spam, ever. Unsubscribe in one click. We respect your inbox.
            </p>
          </form>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What You Get Every {frequency === 'daily' ? 'Day' : 'Week'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map(b => (
              <div key={b.title} className="p-6 rounded-xl transition-all hover:scale-[1.02]"
                style={{ background: '#161b22', border: '1px solid #30363d' }}>
                <div className="text-3xl mb-3">{b.icon}</div>
                <h3 className="text-lg font-bold mb-2">{b.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#8b949e' }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-4" style={{ background: '#161b2280' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">What Readers Say</h2>
          <p className="text-center mb-12" style={{ color: '#8b949e' }}>Join thousands of degens who read us every week</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="p-6 rounded-xl" style={{ background: '#0d1117', border: '1px solid #30363d' }}>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: '#8b949e' }}>&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{t.avatar}</span>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs" style={{ color: '#8b949e' }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '12,847', label: 'Subscribers' },
            { value: '68%', label: 'Open Rate' },
            { value: '156', label: 'Issues Sent' },
            { value: '4.9★', label: 'Reader Rating' },
          ].map(s => (
            <div key={s.label}>
              <div className="text-3xl font-bold mb-1" style={{ color: '#58a6ff' }}>{s.value}</div>
              <div className="text-sm" style={{ color: '#8b949e' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Smarter About Crypto?</h2>
        <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: '#8b949e' }}>
          Join 12,847 traders, investors, and builders who start their week with degen0x.
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-3">
          <input type="email" value={email} onChange={e => setEmail(e.target.value)}
            placeholder="your@email.com" required
            className="flex-1 px-5 py-4 rounded-xl outline-none"
            style={{ background: '#161b22', border: '1px solid #30363d', color: '#e6edf3' }} />
          <button type="submit"
            className="px-8 py-4 rounded-xl font-bold text-white transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #6366f1, #06b6d4)' }}>
            Join Free
          </button>
        </form>
      </section>
    </div>
  );
}
