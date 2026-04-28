'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const S = {
  bg: '#0d1117',
  surface: '#161b22',
  surface2: '#1c2330',
  border: '#30363d',
  text: '#e6edf3',
  text2: '#8b949e',
  blue: '#58a6ff',
  green: '#3fb950',
  orange: '#f0883e',
  yellow: '#d29922',
  purple: '#bc8cff',
  red: '#f85149',
  indigo: '#6366f1',
  cyan: '#06b6d4',
};

interface Props {
  userXP?: number;
  userLevel?: number;
  completedCourses?: string[];
  walletAddress?: string;
}

interface Recommendation {
  emoji: string;
  title: string;
  reason: string;
  xpReward: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime: string;
  slug: string;
}

export default function AICourseRecommendations({
  userXP = 0,
  userLevel = 10,
  completedCourses = [],
  walletAddress,
}: Props) {
  const [refreshing, setRefreshing] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(userLevel);

  const getRecommendations = (): Recommendation[] => {
    if (currentLevel >= 16) {
      // Advanced
      return [
        {
          emoji: '⚙️',
          title: 'MEV and Order Flow',
          reason: 'You understand DeFi well—time to master MEV dynamics',
          xpReward: 450,
          difficulty: 'Advanced',
          estimatedTime: '4-5 hours',
          slug: 'mev-order-flow',
        },
        {
          emoji: '🌉',
          title: 'Cross-chain Bridges Deep Dive',
          reason: 'Your Arbitrum activity shows L2 interest—explore bridges',
          xpReward: 400,
          difficulty: 'Advanced',
          estimatedTime: '3-4 hours',
          slug: 'cross-chain-bridges',
        },
        {
          emoji: '📊',
          title: 'DeFi Derivatives & Leverage',
          reason: 'Master perpetuals, options, and risk management',
          xpReward: 425,
          difficulty: 'Advanced',
          estimatedTime: '3.5-4.5 hours',
          slug: 'defi-derivatives',
        },
      ];
    } else if (currentLevel >= 6) {
      // Intermediate
      return [
        {
          emoji: '🚜',
          title: 'Yield Farming Strategies',
          reason: 'You know DeFi basics—unlock passive income methods',
          xpReward: 280,
          difficulty: 'Intermediate',
          estimatedTime: '2-3 hours',
          slug: 'yield-farming',
        },
        {
          emoji: '💱',
          title: 'How to Use DEXes Like a Pro',
          reason: "Your Uniswap activity shows you're ready for advanced trading",
          xpReward: 300,
          difficulty: 'Intermediate',
          estimatedTime: '2.5-3 hours',
          slug: 'dex-advanced',
        },
        {
          emoji: '🎨',
          title: 'NFT Investing & Analytics',
          reason: 'Build skills to find value in NFT markets',
          xpReward: 320,
          difficulty: 'Intermediate',
          estimatedTime: '2-2.5 hours',
          slug: 'nft-investing',
        },
      ];
    } else {
      // Beginner
      return [
        {
          emoji: '₿',
          title: 'Bitcoin Basics: The Foundation',
          reason: 'Start with BTC—the foundation of all crypto',
          xpReward: 120,
          difficulty: 'Beginner',
          estimatedTime: '1.5-2 hours',
          slug: 'bitcoin-basics',
        },
        {
          emoji: '🔗',
          title: "What is DeFi? A Beginner's Guide",
          reason: 'Understand decentralized finance from the ground up',
          xpReward: 140,
          difficulty: 'Beginner',
          estimatedTime: '2-2.5 hours',
          slug: 'defi-beginner',
        },
        {
          emoji: '🔑',
          title: 'Crypto Wallets 101',
          reason: 'Master wallet security before holding assets',
          xpReward: 100,
          difficulty: 'Beginner',
          estimatedTime: '1-1.5 hours',
          slug: 'wallets-101',
        },
      ];
    }
  };

  const recommendations = getRecommendations();
  const progressPercent = 68;

  const insightChips = [
    {
      icon: '🏪',
      text: 'You hold ETH — try ETH Staking guide',
      condition: walletAddress !== undefined,
    },
    {
      icon: '🌊',
      text: "You've used Uniswap — try Advanced AMM Strategies",
      condition: true,
    },
    {
      icon: '⛓️',
      text: "You've bridged to Arbitrum — try L2 Deep Dive",
      condition: true,
    },
  ];

  const getDifficultyColor = (difficulty: string): string => {
    switch (difficulty) {
      case 'Beginner':
        return S.green;
      case 'Intermediate':
        return S.orange;
      case 'Advanced':
        return S.red;
      default:
        return S.text2;
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 800);
  };

  return (
    <div style={{ backgroundColor: S.bg, color: S.text, padding: '0' }}>
      {/* AI-Powered Header */}
      <div
        style={{
          background: `linear-gradient(135deg, ${S.purple}20, ${S.blue}20)`,
          border: `1px solid ${S.border}`,
          borderRadius: '12px',
          padding: '2rem',
          marginBottom: '2rem',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '0.5rem' }}>
          ✨ AI-Powered For You
        </h2>
        <p style={{ color: S.text2, fontSize: '0.95rem' }}>
          Powered by on-chain analysis
        </p>
      </div>

      {/* Recommendation Cards */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>
          Recommended For You
        </h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {recommendations.map((rec, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: S.surface,
                border: `1px solid ${S.border}`,
                borderRadius: '12px',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              {/* Emoji & Title */}
              <div>
                <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '0.5rem' }}>
                  {rec.emoji}
                </span>
                <h4 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                  {rec.title}
                </h4>
                <p style={{ color: S.text2, fontSize: '0.875rem' }}>
                  {rec.reason}
                </p>
              </div>

              {/* XP & Difficulty & Time */}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <div
                  style={{
                    backgroundColor: S.surface2,
                    border: `1px solid ${S.border}`,
                    borderRadius: '6px',
                    padding: '0.5rem 0.75rem',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                  }}
                >
                  +{rec.xpReward} XP
                </div>
                <div
                  style={{
                    backgroundColor: S.surface2,
                    border: `1px solid ${getDifficultyColor(rec.difficulty)}40`,
                    borderRadius: '6px',
                    padding: '0.5rem 0.75rem',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    color: getDifficultyColor(rec.difficulty),
                  }}
                >
                  {rec.difficulty}
                </div>
                <div
                  style={{
                    backgroundColor: S.surface2,
                    border: `1px solid ${S.border}`,
                    borderRadius: '6px',
                    padding: '0.5rem 0.75rem',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                  }}
                >
                  {rec.estimatedTime}
                </div>
              </div>

              {/* CTA Button */}
              <button
                style={{
                  backgroundColor: S.blue,
                  color: S.bg,
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.75rem 1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontSize: '0.95rem',
                  marginTop: '0.5rem',
                }}
              >
                Start Learning →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Your Learning Path */}
      <div
        style={{
          backgroundColor: S.surface,
          border: `1px solid ${S.border}`,
          borderRadius: '12px',
          padding: '1.5rem',
          marginBottom: '2.5rem',
        }}
      >
        <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem' }}>
          Your Learning Path
        </h3>
        <p style={{ color: S.text2, marginBottom: '1rem', fontSize: '0.95rem' }}>
          You're {progressPercent}% through the DeFi Mastery track
        </p>
        <div
          style={{
            backgroundColor: S.surface2,
            borderRadius: '8px',
            height: '8px',
            overflow: 'hidden',
            marginBottom: '0.75rem',
          }}
        >
          <div
            style={{
              backgroundColor: S.green,
              height: '100%',
              width: `${progressPercent}%`,
              transition: 'width 0.3s ease',
            }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: S.text2 }}>
          <span>Progress</span>
          <span>{progressPercent}%</span>
        </div>
      </div>

      {/* Based on Your Wallet */}
      <div
        style={{
          backgroundColor: S.surface,
          border: `1px solid ${S.border}`,
          borderRadius: '12px',
          padding: '1.5rem',
          marginBottom: '2rem',
        }}
      >
        <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem' }}>
          Based on your wallet
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {insightChips.map((chip, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: S.surface2,
                border: `1px solid ${S.border}`,
                borderRadius: '8px',
                padding: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              <span style={{ fontSize: '1.25rem' }}>{chip.icon}</span>
              <span style={{ fontSize: '0.95rem' }}>{chip.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Refresh Button */}
      <button
        onClick={handleRefresh}
        disabled={refreshing}
        style={{
          width: '100%',
          backgroundColor: refreshing ? S.surface2 : S.indigo,
          color: S.text,
          border: `1px solid ${S.border}`,
          borderRadius: '8px',
          padding: '1rem',
          fontWeight: 600,
          cursor: refreshing ? 'not-allowed' : 'pointer',
          fontSize: '0.95rem',
          opacity: refreshing ? 0.7 : 1,
          transition: 'all 0.2s',
        }}
      >
        {refreshing ? 'Refreshing...' : '🔄 Refresh Recommendations'}
      </button>
    </div>
  );
}
