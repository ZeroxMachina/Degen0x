'use client';

/**
 * Newsletter Manager Component
 * Full-featured newsletter subscription with preference management
 * Sprint 24 — Content Agent
 */

import React, { useState, useCallback } from 'react';
import { validateEmail, getDefaultPreferences, SubscriberPreferences } from '@/lib/newsletter';

// ── Types ──────────────────────────────────────────────────────────────────

type SubscriptionStep = 'email' | 'preferences' | 'success';

interface NewsletterManagerProps {
  variant?: 'inline' | 'card' | 'full';
  source?: 'homepage' | 'blog' | 'tools' | 'popup';
  onSubscribe?: (email: string, preferences: SubscriberPreferences) => void;
}

// ── Main Component ──────────────────────────────────────────────────────────

export default function NewsletterManager({
  variant = 'card',
  source = 'homepage',
  onSubscribe,
}: NewsletterManagerProps) {
  const [step, setStep] = useState<SubscriptionStep>('email');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [preferences, setPreferences] = useState<SubscriberPreferences>(getDefaultPreferences());

  const handleEmailSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setStep('preferences');
  }, [email]);

  const handlePreferencesSubmit = useCallback(async () => {
    setIsSubmitting(true);
    setError('');

    try {
      // In production, this would call the API route
      // For now, simulate the subscription
      await new Promise(resolve => setTimeout(resolve, 800));

      onSubscribe?.(email, preferences);
      setStep('success');
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }, [email, preferences, onSubscribe]);

  const togglePreference = (key: keyof SubscriberPreferences) => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // ── Inline Variant ──────────────────────────────────────────────────
  if (variant === 'inline') {
    if (step === 'success') {
      return (
        <div className="flex items-center gap-2 text-green-400 text-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Subscribed! Check your inbox.
        </div>
      );
    }

    return (
      <form onSubmit={handleEmailSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-3 py-2 text-sm bg-[#161b22] border border-[#30363d] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/50"
        />
        <button
          type="submit"
          className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-indigo-500 to-cyan-500 text-white rounded-lg hover:opacity-90 transition-opacity"
        >
          Subscribe
        </button>
      </form>
    );
  }

  // ── Card / Full Variant ──────────────────────────────────────────────

  return (
    <div className={`bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden ${
      variant === 'full' ? 'max-w-xl mx-auto' : ''
    }`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 border-b border-[#30363d] px-6 py-4">
        <h3 className="text-lg font-bold text-white">Stay in the Loop</h3>
        <p className="text-sm text-gray-400 mt-1">
          Get weekly crypto insights, DeFi yields, and market analysis delivered to your inbox.
        </p>
      </div>

      <div className="p-6">
        {/* Step 1: Email */}
        {step === 'email' && (
          <form onSubmit={handleEmailSubmit}>
            <div className="mb-4">
              <label className="block text-xs font-semibold text-gray-400 uppercase mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(''); }}
                placeholder="you@example.com"
                className="w-full px-4 py-3 text-sm bg-[#0d1117] border border-[#30363d] rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
                autoFocus
              />
              {error && <p className="mt-2 text-xs text-red-400">{error}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-3 text-sm font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Continue
            </button>

            <p className="mt-3 text-[10px] text-gray-600 text-center">
              No spam, ever. Unsubscribe anytime. We respect your privacy.
            </p>
          </form>
        )}

        {/* Step 2: Preferences */}
        {step === 'preferences' && (
          <div>
            <p className="text-sm text-gray-300 mb-4">
              Customize what you receive at <strong className="text-white">{email}</strong>
            </p>

            <div className="space-y-3 mb-6">
              {[
                { key: 'weeklyDigest' as const, label: 'Weekly Market Digest', desc: 'Top movers, trends, and analysis' },
                { key: 'priceAlerts' as const, label: 'Price Alerts', desc: 'Notable price movements and milestones' },
                { key: 'newFeatures' as const, label: 'New Features', desc: 'Platform updates and tool launches' },
                { key: 'defiUpdates' as const, label: 'DeFi Updates', desc: 'Yield opportunities and protocol news' },
                { key: 'nftNews' as const, label: 'NFT News', desc: 'Floor price changes and new drops' },
                { key: 'tradingTips' as const, label: 'Trading Tips', desc: 'Technical analysis and strategies' },
              ].map(({ key, label, desc }) => (
                <button
                  key={key}
                  onClick={() => togglePreference(key)}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-colors text-left ${
                    preferences[key]
                      ? 'bg-indigo-500/10 border-indigo-500/30 text-white'
                      : 'bg-[#0d1117] border-[#30363d] text-gray-400 hover:border-[#484f58]'
                  }`}
                >
                  <div className={`w-5 h-5 rounded flex-shrink-0 flex items-center justify-center border transition-colors ${
                    preferences[key]
                      ? 'bg-indigo-500 border-indigo-500'
                      : 'border-[#484f58]'
                  }`}>
                    {preferences[key] && (
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold">{label}</div>
                    <div className="text-xs text-gray-500">{desc}</div>
                  </div>
                </button>
              ))}
            </div>

            {/* Frequency */}
            <div className="mb-6">
              <label className="block text-xs font-semibold text-gray-400 uppercase mb-2">Frequency</label>
              <div className="flex gap-2">
                {(['daily', 'weekly', 'monthly'] as const).map(freq => (
                  <button
                    key={freq}
                    onClick={() => setPreferences(prev => ({ ...prev, frequency: freq }))}
                    className={`flex-1 py-2 text-xs font-semibold rounded-lg border transition-colors ${
                      preferences.frequency === freq
                        ? 'bg-indigo-500/20 border-indigo-500/40 text-indigo-400'
                        : 'bg-[#0d1117] border-[#30363d] text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    {freq.charAt(0).toUpperCase() + freq.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep('email')}
                className="px-4 py-3 text-sm font-semibold text-gray-400 bg-[#0d1117] border border-[#30363d] rounded-lg hover:text-white transition-colors"
              >
                Back
              </button>
              <button
                onClick={handlePreferencesSubmit}
                disabled={isSubmitting}
                className="flex-1 py-3 text-sm font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>

            {error && <p className="mt-3 text-xs text-red-400 text-center">{error}</p>}
          </div>
        )}

        {/* Step 3: Success */}
        {step === 'success' && (
          <div className="text-center py-4">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">You&apos;re In!</h4>
            <p className="text-sm text-gray-400 mb-1">
              Welcome to the degen0x community.
            </p>
            <p className="text-xs text-gray-500">
              Check <strong className="text-gray-300">{email}</strong> for a confirmation email.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Exit Intent Newsletter Popup ──────────────────────────────────────

export function NewsletterPopup({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative max-w-md w-full">
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#30363d] text-gray-400 hover:text-white flex items-center justify-center z-10 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <NewsletterManager variant="card" source="popup" />
      </div>
    </div>
  );
}
