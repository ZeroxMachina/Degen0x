'use client';

import React, { useState } from 'react';
import {
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Zap,
  Target,
  Heart,
  CheckCircle,
  User,
  TrendingUp,
  Coins,
  Layers,
} from 'lucide-react';

interface OnboardingData {
  displayName: string;
  avatar: string;
  experienceLevel: 'beginner' | 'intermediate' | 'advanced' | 'degen' | '';
  riskProfile: 'conservative' | 'moderate' | 'aggressive' | 'yolo' | '';
  riskSliderValue: number;
  interests: string[];
  targetReturn: number;
  portfolioSize: string;
  preferredChains: string[];
}

const AVATARS = ['🧛', '🤖', '👽', '🎨', '🦾', '⚡', '🔮', '💎'];

const EXPERIENCE_LEVELS = [
  {
    id: 'beginner',
    label: 'Beginner',
    description: 'New to crypto, learning the basics',
  },
  {
    id: 'intermediate',
    label: 'Intermediate',
    description: 'Some experience with DeFi and trading',
  },
  {
    id: 'advanced',
    label: 'Advanced',
    description: 'Experienced trader with deep market knowledge',
  },
  { id: 'degen', label: 'Degen', description: 'High risk tolerance, loves yolo plays' },
];

const RISK_PROFILES = [
  {
    id: 'conservative',
    label: 'Conservative',
    description: 'Prefer stable assets and low volatility',
  },
  {
    id: 'moderate',
    label: 'Moderate',
    description: 'Balanced risk and reward approach',
  },
  {
    id: 'aggressive',
    label: 'Aggressive',
    description: 'High risk tolerance for potential gains',
  },
  { id: 'yolo', label: 'YOLO', description: 'Maximum risk, maximum reward mindset' },
];

const INTERESTS = [
  'DeFi',
  'NFTs',
  'Trading',
  'Staking',
  'Airdrops',
  'Research',
  'Copy Trading',
  'Whale Watching',
];

const CHAINS = ['Ethereum', 'Solana', 'Arbitrum', 'Base', 'Polygon', 'Avalanche', 'BNB'];

export default function OnboardingWizard() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<OnboardingData>({
    displayName: '',
    avatar: AVATARS[0],
    experienceLevel: '',
    riskProfile: '',
    riskSliderValue: 50,
    interests: [],
    targetReturn: 10,
    portfolioSize: '',
    preferredChains: [],
  });

  const [confetti, setConfetti] = useState(false);

  const handleNext = () => {
    if (step < 6) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const isStepValid = (): boolean => {
    switch (step) {
      case 1:
        return data.displayName.trim().length > 0;
      case 2:
        return data.experienceLevel !== '';
      case 3:
        return data.riskProfile !== '';
      case 4:
        return data.interests.length > 0;
      case 5:
        return data.portfolioSize !== '' && data.preferredChains.length > 0;
      case 6:
        return true;
      default:
        return false;
    }
  };

  const toggleInterest = (interest: string) => {
    setData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const toggleChain = (chain: string) => {
    setData((prev) => ({
      ...prev,
      preferredChains: prev.preferredChains.includes(chain)
        ? prev.preferredChains.filter((c) => c !== chain)
        : [...prev.preferredChains, chain],
    }));
  };

  const handleComplete = () => {
    setConfetti(true);
  };

  const progressPercentage = (step / 6) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Header with progress bar */}
        <div className="pt-8 px-8">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              degen0x
            </h1>
            <p className="text-gray-400 mb-8">Welcome to your crypto journey</p>

            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>Step {step} of 6</span>
                <span>{Math.round(progressPercentage)}%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex items-center justify-center min-h-[calc(100vh-200px)] px-4 py-8">
          <div className="w-full max-w-2xl">
            {/* Step 1: Welcome */}
            {step === 1 && (
              <div className="animate-fade-in space-y-8">
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <Sparkles className="w-16 h-16 text-purple-400 animate-bounce" />
                  </div>
                  <h2 className="text-3xl font-bold mb-2">Welcome to degen0x</h2>
                  <p className="text-gray-400">Let's set up your profile</p>
                </div>

                <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-xl p-8 space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-3">Display Name</label>
                    <input
                      type="text"
                      value={data.displayName}
                      onChange={(e) => setData({ ...data, displayName: e.target.value })}
                      placeholder="Enter your degen name"
                      className="w-full bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3">Choose Avatar</label>
                    <div className="grid grid-cols-4 gap-3">
                      {AVATARS.map((avatar) => (
                        <button
                          key={avatar}
                          onClick={() => setData({ ...data, avatar })}
                          className={`text-4xl p-4 rounded-lg transition border-2 ${
                            data.avatar === avatar
                              ? 'bg-purple-500/20 border-purple-500'
                              : 'bg-gray-900/50 border-gray-600 hover:border-purple-500'
                          }`}
                        >
                          {avatar}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Experience Level */}
            {step === 2 && (
              <div className="animate-fade-in space-y-8">
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <Zap className="w-16 h-16 text-yellow-400 animate-pulse" />
                  </div>
                  <h2 className="text-3xl font-bold mb-2">What's Your Experience Level?</h2>
                  <p className="text-gray-400">Help us tailor your experience</p>
                </div>

                <div className="space-y-3">
                  {EXPERIENCE_LEVELS.map((level) => (
                    <button
                      key={level.id}
                      onClick={() => setData({ ...data, experienceLevel: level.id as any })}
                      className={`w-full p-4 rounded-lg border-2 transition text-left ${
                        data.experienceLevel === level.id
                          ? 'bg-purple-500/20 border-purple-500'
                          : 'bg-gray-800/50 border-gray-600 hover:border-purple-400'
                      }`}
                    >
                      <div className="font-semibold">{level.label}</div>
                      <div className="text-sm text-gray-400">{level.description}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Risk Profile */}
            {step === 3 && (
              <div className="animate-fade-in space-y-8">
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <Target className="w-16 h-16 text-red-400" />
                  </div>
                  <h2 className="text-3xl font-bold mb-2">What's Your Risk Profile?</h2>
                  <p className="text-gray-400">Choose your investment style</p>
                </div>

                <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-xl p-8 space-y-6">
                  <div className="space-y-3">
                    {RISK_PROFILES.map((profile) => (
                      <button
                        key={profile.id}
                        onClick={() => setData({ ...data, riskProfile: profile.id as any })}
                        className={`w-full p-4 rounded-lg border-2 transition text-left ${
                          data.riskProfile === profile.id
                            ? 'bg-red-500/20 border-red-500'
                            : 'bg-gray-900/50 border-gray-600 hover:border-red-400'
                        }`}
                      >
                        <div className="font-semibold">{profile.label}</div>
                        <div className="text-sm text-gray-400">{profile.description}</div>
                      </button>
                    ))}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3">Risk Tolerance Slider</label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={data.riskSliderValue}
                      onChange={(e) =>
                        setData({ ...data, riskSliderValue: parseInt(e.target.value) })
                      }
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-2">
                      <span>Low Risk</span>
                      <span>High Risk</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Interests */}
            {step === 4 && (
              <div className="animate-fade-in space-y-8">
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <Heart className="w-16 h-16 text-pink-400" />
                  </div>
                  <h2 className="text-3xl font-bold mb-2">What Interests You?</h2>
                  <p className="text-gray-400">Select all that apply</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {INTERESTS.map((interest) => (
                    <button
                      key={interest}
                      onClick={() => toggleInterest(interest)}
                      className={`p-4 rounded-lg border-2 transition text-center font-medium ${
                        data.interests.includes(interest)
                          ? 'bg-pink-500/20 border-pink-500 text-pink-300'
                          : 'bg-gray-800/50 border-gray-600 hover:border-pink-400'
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Portfolio Goals */}
            {step === 5 && (
              <div className="animate-fade-in space-y-8">
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <TrendingUp className="w-16 h-16 text-green-400" />
                  </div>
                  <h2 className="text-3xl font-bold mb-2">Portfolio Goals</h2>
                  <p className="text-gray-400">Set your investment parameters</p>
                </div>

                <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-xl p-8 space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-3">
                      Target Monthly Return: {data.targetReturn}%
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="100"
                      value={data.targetReturn}
                      onChange={(e) => setData({ ...data, targetReturn: parseInt(e.target.value) })}
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-green-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3">Portfolio Size Range</label>
                    <select
                      value={data.portfolioSize}
                      onChange={(e) => setData({ ...data, portfolioSize: e.target.value })}
                      className="w-full bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500 transition"
                    >
                      <option value="">Select portfolio size</option>
                      <option value="micro">Micro (&lt;$1k)</option>
                      <option value="small">Small ($1k - $10k)</option>
                      <option value="medium">Medium ($10k - $100k)</option>
                      <option value="large">Large ($100k - $1M)</option>
                      <option value="whale">Whale (&gt;$1M)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3">Preferred Chains</label>
                    <div className="grid grid-cols-2 gap-2">
                      {CHAINS.map((chain) => (
                        <button
                          key={chain}
                          onClick={() => toggleChain(chain)}
                          className={`p-3 rounded-lg border-2 transition text-sm font-medium ${
                            data.preferredChains.includes(chain)
                              ? 'bg-green-500/20 border-green-500'
                              : 'bg-gray-900/50 border-gray-600 hover:border-green-400'
                          }`}
                        >
                          {chain}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 6: Complete */}
            {step === 6 && (
              <div className="animate-fade-in space-y-8">
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <CheckCircle className="w-16 h-16 text-green-400 animate-bounce" />
                  </div>
                  <h2 className="text-3xl font-bold mb-2">You're All Set! 🎉</h2>
                  <p className="text-gray-400 mb-8">Welcome to the degen0x community</p>

                  {confetti && (
                    <div className="mb-8">
                      <div className="text-6xl animate-bounce">✨</div>
                    </div>
                  )}
                </div>

                <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur border border-purple-500/50 rounded-xl p-8 space-y-4">
                  <div className="text-left space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{data.avatar}</span>
                      <div>
                        <div className="font-semibold">{data.displayName}</div>
                        <div className="text-sm text-gray-400">
                          {data.experienceLevel && (
                            <>
                              {data.experienceLevel.charAt(0).toUpperCase() +
                                data.experienceLevel.slice(1)}
                              • {data.riskProfile.toUpperCase()}
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex justify-between mt-12">
              <button
                onClick={handleBack}
                disabled={step === 1}
                className="flex items-center space-x-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition"
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Back</span>
              </button>

              <button
                onClick={step === 6 ? handleComplete : handleNext}
                disabled={!isStepValid()}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed ${
                  step === 6
                    ? 'bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600'
                    : 'bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600'
                }`}
              >
                <span>{step === 6 ? 'Complete' : 'Next'}</span>
                {step !== 6 && <ChevronRight className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
