'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Copy, Check } from 'lucide-react';

// Mock referrer data
const mockTopReferrers = [
  { rank: 1, avatar: '🐋', username: '0xCryptoWizard', referrals: 342, xp: 68400 },
  { rank: 2, avatar: '👑', username: 'DegenKing.eth', referrals: 287, xp: 57400 },
  { rank: 3, avatar: '🚀', username: 'EthMaximalist.x', referrals: 265, xp: 53000 },
  { rank: 4, avatar: '💎', username: 'OnChainOG', referrals: 198, xp: 39600 },
  { rank: 5, avatar: '🔥', username: 'DegenDAO.sol', referrals: 156, xp: 31200 },
  { rank: 6, avatar: '⚡', username: 'SpeedyTrader', referrals: 142, xp: 28400 },
  { rank: 7, avatar: '🎯', username: 'TargetMoonshot', referrals: 128, xp: 25600 },
  { rank: 8, avatar: '🌙', username: 'MoonShot.base', referrals: 115, xp: 23000 },
  { rank: 9, avatar: '🎨', username: 'CreativeDefi', referrals: 103, xp: 20600 },
  { rank: 10, avatar: '⭐', username: 'StardustETH', referrals: 97, xp: 19400 },
];

const rewardTiers = [
  {
    tier: 'Bronze',
    referrals: '1-5',
    xpPerReferral: '200 XP',
    color: 'from-orange-600 to-orange-400',
    rewards: ['200 XP each', 'Bronze Referrer Badge'],
  },
  {
    tier: 'Silver',
    referrals: '6-20',
    xpPerReferral: '250 XP',
    color: 'from-gray-500 to-gray-300',
    rewards: ['250 XP each', 'Silver Badge', 'Exclusive NFT'],
  },
  {
    tier: 'Gold',
    referrals: '21-50',
    xpPerReferral: '300 XP',
    color: 'from-yellow-500 to-yellow-300',
    rewards: ['300 XP each', 'Gold Badge', 'Whitelist Spot'],
  },
  {
    tier: 'Diamond',
    referrals: '50+',
    xpPerReferral: '400 XP',
    color: 'from-blue-500 to-cyan-400',
    rewards: ['400 XP each', 'Diamond Badge', 'Revenue Share'],
  },
];

export default function ReferralPage() {
  const [copied, setCopied] = useState(false);
  const referralLink = 'https://degen0x.com/r/you';
  const username = 'you';

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const shareUrls = {
    twitter: `https://x.com/intent/post?text=Just discovered degen0x - the best way to learn crypto! 🚀 Join me and earn 200 XP bonus using my referral link: ${referralLink}`,
    telegram: `https://t.me/share/url?url=${referralLink}&text=Join degen0x with my referral link and earn 200 XP!`,
    whatsapp: `https://wa.me/?text=Check out degen0x - earn 200 XP with my referral link: ${referralLink}`,
    discord: `https://discord.com/channels/@me`,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900">
      {/* Hero Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Refer Friends. Earn XP.
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Share degen0x and earn 200 XP for every friend who joins. Help onboard the next billion crypto users.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <StatCard title="Your Referrals" value="0" subtitle="Friends invited" />
          <StatCard title="XP Earned from Referrals" value="0 XP" subtitle="Total rewards" />
          <StatCard title="Pending Rewards" value="0 XP" subtitle="Awaiting verification" />
          <StatCard title="Referral Rank" value="--" subtitle="Coming soon" />
        </div>
      </section>

      {/* Referral Link Section */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Your Referral Link</h2>

          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 mb-6">
            <div className="flex items-center gap-4">
              <input
                type="text"
                value={referralLink}
                readOnly
                className="flex-1 bg-gray-900 border border-gray-700 rounded px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-indigo-500"
              />
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                {copied ? (
                  <>
                    <Check size={20} />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={20} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="flex flex-wrap gap-3">
            <ShareButton
              icon="𝕏"
              label="Share on X"
              url={shareUrls.twitter}
              bgColor="bg-black hover:bg-gray-900"
            />
            <ShareButton
              icon="✈️"
              label="Share on Telegram"
              url={shareUrls.telegram}
              bgColor="bg-blue-600 hover:bg-blue-700"
            />
            <ShareButton
              icon="💬"
              label="Share on WhatsApp"
              url={shareUrls.whatsapp}
              bgColor="bg-green-600 hover:bg-green-700"
            />
            <ShareButton
              icon="🎮"
              label="Share on Discord"
              url={shareUrls.discord}
              bgColor="bg-indigo-600 hover:bg-indigo-700"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StepCard
            step={1}
            title="Share Your Link"
            description="Share your unique referral link with friends"
            icon="🔗"
          />
          <StepCard
            step={2}
            title="Friend Joins"
            description="Friend signs up via wallet or email"
            icon="✅"
          />
          <StepCard
            step={3}
            title="Earn XP"
            description="Both of you earn 200 XP instantly"
            icon="🎁"
          />
        </div>
      </section>

      {/* Reward Tiers */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">Reward Tiers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rewardTiers.map((tier) => (
            <TierCard key={tier.tier} tier={tier} />
          ))}
        </div>
      </section>

      {/* Top Referrers Leaderboard */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">Top Referrers</h2>
        <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800 bg-gray-800">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Rank</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">User</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Referrals</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-300">XP Earned</th>
                </tr>
              </thead>
              <tbody>
                {mockTopReferrers.map((referrer) => {
                  let medalColor = '';
                  if (referrer.rank === 1) medalColor = 'text-yellow-400';
                  else if (referrer.rank === 2) medalColor = 'text-gray-300';
                  else if (referrer.rank === 3) medalColor = 'text-orange-400';

                  return (
                    <tr
                      key={referrer.rank}
                      className="border-b border-gray-800 hover:bg-gray-800 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <span className={`text-2xl font-bold ${medalColor}`}>
                            {referrer.rank <= 3 ? '🏅' : '#'}
                          </span>
                          <span className="text-white font-semibold">{referrer.rank}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{referrer.avatar}</span>
                          <span className="text-white font-medium">{referrer.username}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-300">{referrer.referrals}</td>
                      <td className="px-6 py-4 text-right">
                        <span className="text-indigo-400 font-semibold">{referrer.xp.toLocaleString()} XP</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Your Referral History */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">Your Referral History</h2>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-12 text-center">
          <div className="text-6xl mb-4">📭</div>
          <h3 className="text-xl font-semibold text-white mb-2">No Referrals Yet</h3>
          <p className="text-gray-400 mb-6">Share your link to get started and earn rewards!</p>
          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200"
          >
            <Copy size={20} />
            Copy My Link
          </button>
        </div>
      </section>

      {/* Terms Section */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <h3 className="text-sm font-semibold text-gray-300 mb-3">Referral Program Terms</h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            Both users must complete email or wallet verification to qualify for rewards. Referrals are tracked for 30 days from the time a friend clicks your link. Fraudulent referrals detected through our anti-abuse system will be permanently removed. XP rewards are credited instantly upon referral completion and verified signup. Users cannot refer themselves using multiple accounts. degen0x reserves the right to modify the referral program at any time. For more details, please review our full{' '}
            <Link href="/terms" className="text-indigo-400 hover:text-indigo-300">
              Terms of Service
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Footer Spacing */}
      <div className="h-16" />
    </div>
  );
}

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
}

function StatCard({ title, value, subtitle }: StatCardProps) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors">
      <p className="text-gray-400 text-sm font-medium mb-2">{title}</p>
      <p className="text-3xl font-bold text-white mb-1">{value}</p>
      <p className="text-xs text-gray-500">{subtitle}</p>
    </div>
  );
}

interface ShareButtonProps {
  icon: string;
  label: string;
  url: string;
  bgColor: string;
}

function ShareButton({ icon, label, url, bgColor }: ShareButtonProps) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 ${bgColor} text-white px-4 py-2 rounded-lg font-medium transition-all duration-200`}
    >
      <span className="text-lg">{icon}</span>
      <span className="hidden sm:inline">{label}</span>
    </a>
  );
}

interface StepCardProps {
  step: number;
  title: string;
  description: string;
  icon: string;
}

function StepCard({ step, title, description, icon }: StepCardProps) {
  return (
    <div className="relative">
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 h-full">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg">{step}</span>
          </div>
          <div className="text-3xl">{icon}</div>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}

interface TierCardProps {
  tier: {
    tier: string;
    referrals: string;
    xpPerReferral: string;
    color: string;
    rewards: string[];
  };
}

function TierCard({ tier }: TierCardProps) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-all hover:shadow-lg hover:shadow-indigo-500/10">
      <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${tier.color} mb-4`} />
      <h3 className="text-xl font-bold text-white mb-2">{tier.tier}</h3>
      <p className="text-sm text-gray-400 mb-4">
        <span className="font-semibold">{tier.referrals}</span> referrals
      </p>
      <div className="bg-gray-800 rounded px-3 py-2 mb-4 inline-block">
        <p className="text-indigo-400 font-semibold text-sm">{tier.xpPerReferral} each</p>
      </div>
      <div className="space-y-2">
        {tier.rewards.map((reward, idx) => (
          <div key={idx} className="flex items-start gap-2">
            <span className="text-indigo-400 mt-1">✓</span>
            <span className="text-gray-300 text-sm">{reward}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
