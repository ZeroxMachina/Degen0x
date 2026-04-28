'use client';

import React, { useState, useMemo, useEffect } from 'react';
import {
  Calendar,
  Clock,
  TrendingUp,
  AlertCircle,
  Twitter,
  MessageCircle,
  Globe,
  ChevronDown,
  Zap,
  Target,
  Award,
  BarChart3,
  Bell,
  Grid3x3,
  CalendarDays,
} from 'lucide-react';

const TokenLaunchRadar = () => {
  const [viewMode, setViewMode] = useState<'cards' | 'calendar'>('cards');
  const [statusFilter, setStatusFilter] = useState<'all' | 'upcoming' | 'live' | 'ended'>('all');
  const [categoryFilter, setCategoryFilter] = useState<'all' | string>('all');
  const [chainFilter, setChainFilter] = useState<'all' | string>('all');
  const [platformFilter, setPlatformFilter] = useState<'all' | string>('all');
  const [alertedLaunches, setAlertedLaunches] = useState<Set<string>>(new Set());

  // Mock launch data
  const launches = [
    {
      id: 'solarpulse',
      name: 'SolarPulse',
      symbol: 'SLRP',
      logo: '☀️',
      description: 'AI-powered renewable energy trading platform',
      launchDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      raiseAmount: 5000000,
      hardCap: 7500000,
      tokenPrice: 0.125,
      chain: 'Ethereum',
      platform: 'Binance Launchpad',
      category: 'DeFi',
      status: 'upcoming',
      roi: null,
      ath: null,
      socials: { twitter: 'https://twitter.com', discord: 'https://discord.gg', website: 'https://example.com' },
    },
    {
      id: 'quantumvault',
      name: 'QuantumVault',
      symbol: 'QVLT',
      logo: '🔐',
      description: 'Quantum-resistant cryptography solution',
      launchDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      raiseAmount: 3200000,
      hardCap: 5000000,
      tokenPrice: 0.08,
      chain: 'Solana',
      platform: 'DAO Maker',
      category: 'Infra',
      status: 'upcoming',
      roi: null,
      ath: null,
      socials: { twitter: 'https://twitter.com', discord: 'https://discord.gg', website: 'https://example.com' },
    },
    {
      id: 'neuralgames',
      name: 'NeuralGames',
      symbol: 'NGME',
      logo: '🎮',
      description: 'AI-driven gaming metaverse with NFT integration',
      launchDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
      raiseAmount: 8500000,
      hardCap: 12000000,
      tokenPrice: 0.22,
      chain: 'Base',
      platform: 'Seedify',
      category: 'Gaming',
      status: 'upcoming',
      roi: null,
      ath: null,
      socials: { twitter: 'https://twitter.com', discord: 'https://discord.gg', website: 'https://example.com' },
    },
    {
      id: 'cosmicai',
      name: 'CosmicAI',
      symbol: 'CSAI',
      logo: '🚀',
      description: 'Decentralized AI model training and inference',
      launchDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      raiseAmount: 6700000,
      hardCap: 9500000,
      tokenPrice: 0.155,
      chain: 'Arbitrum',
      platform: 'Camelot',
      category: 'AI',
      status: 'upcoming',
      roi: null,
      ath: null,
      socials: { twitter: 'https://twitter.com', discord: 'https://discord.gg', website: 'https://example.com' },
    },
    {
      id: 'memecoin',
      name: 'MemeForce',
      symbol: 'MEME',
      logo: '😄',
      description: 'Community-driven meme token with governance',
      launchDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      raiseAmount: 1200000,
      hardCap: 2000000,
      tokenPrice: 0.0012,
      chain: 'BSC',
      platform: 'Fjord Foundry',
      category: 'Memes',
      status: 'upcoming',
      roi: null,
      ath: null,
      socials: { twitter: 'https://twitter.com', discord: 'https://discord.gg', website: 'https://example.com' },
    },
    {
      id: 'socialnerv',
      name: 'SocialNerv',
      symbol: 'SNRV',
      logo: '📱',
      description: 'Social media platform with earn-to-click mechanics',
      launchDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000),
      raiseAmount: 4500000,
      hardCap: 6800000,
      tokenPrice: 0.18,
      chain: 'Solana',
      platform: 'DAO Maker',
      category: 'Social',
      status: 'upcoming',
      roi: null,
      ath: null,
      socials: { twitter: 'https://twitter.com', discord: 'https://discord.gg', website: 'https://example.com' },
    },
    {
      id: 'defisync',
      name: 'DeFiSync',
      symbol: 'DFSN',
      logo: '⚙️',
      description: 'Cross-chain DeFi aggregation and optimization',
      launchDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      raiseAmount: 7200000,
      hardCap: 10500000,
      tokenPrice: 0.195,
      chain: 'Ethereum',
      platform: 'Binance Launchpad',
      category: 'DeFi',
      status: 'live',
      roi: 287,
      ath: 0.87,
      socials: { twitter: 'https://twitter.com', discord: 'https://discord.gg', website: 'https://example.com' },
    },
    {
      id: 'pixelforge',
      name: 'PixelForge',
      symbol: 'PXLF',
      logo: '🎨',
      description: 'On-chain generative art creation platform',
      launchDate: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000),
      raiseAmount: 2800000,
      hardCap: 4200000,
      tokenPrice: 0.065,
      chain: 'Base',
      platform: 'Seedify',
      category: 'Gaming',
      status: 'upcoming',
      roi: null,
      ath: null,
      socials: { twitter: 'https://twitter.com', discord: 'https://discord.gg', website: 'https://example.com' },
    },
    {
      id: 'neurofeed',
      name: 'NeuroFeed',
      symbol: 'NFED',
      logo: '🧠',
      description: 'AI-personalized content curation network',
      launchDate: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000),
      raiseAmount: 3900000,
      hardCap: 5800000,
      tokenPrice: 0.142,
      chain: 'Arbitrum',
      platform: 'Camelot',
      category: 'AI',
      status: 'upcoming',
      roi: null,
      ath: null,
      socials: { twitter: 'https://twitter.com', discord: 'https://discord.gg', website: 'https://example.com' },
    },
    {
      id: 'infinitynode',
      name: 'InfinityNode',
      symbol: 'IFND',
      logo: '♾️',
      description: 'Scalable layer-2 infrastructure solution',
      launchDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
      raiseAmount: 9500000,
      hardCap: 14000000,
      tokenPrice: 0.28,
      chain: 'Ethereum',
      platform: 'Binance Launchpad',
      category: 'Infra',
      status: 'ended',
      roi: 456,
      ath: 1.92,
      socials: { twitter: 'https://twitter.com', discord: 'https://discord.gg', website: 'https://example.com' },
    },
    {
      id: 'voxelsocial',
      name: 'VoxelSocial',
      symbol: 'VXLS',
      logo: '🌐',
      description: '3D metaverse social network with real estates',
      launchDate: new Date(Date.now() + 9 * 24 * 60 * 60 * 1000),
      raiseAmount: 5600000,
      hardCap: 8200000,
      tokenPrice: 0.135,
      chain: 'Solana',
      platform: 'Seedify',
      category: 'Social',
      status: 'upcoming',
      roi: null,
      ath: null,
      socials: { twitter: 'https://twitter.com', discord: 'https://discord.gg', website: 'https://example.com' },
    },
    {
      id: 'lunarpulse',
      name: 'LunarPulse',
      symbol: 'LNRP',
      logo: '🌙',
      description: 'Lunar ecosystem for night-mode DeFi trading',
      launchDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      raiseAmount: 2100000,
      hardCap: 3500000,
      tokenPrice: 0.075,
      chain: 'BSC',
      platform: 'Fjord Foundry',
      category: 'Memes',
      status: 'live',
      roi: 145,
      ath: 0.32,
      socials: { twitter: 'https://twitter.com', discord: 'https://discord.gg', website: 'https://example.com' },
    },
    {
      id: 'syntaxai',
      name: 'SyntaxAI',
      symbol: 'SNAX',
      logo: '💻',
      description: 'AI code generation and smart contract audit',
      launchDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
      raiseAmount: 4200000,
      hardCap: 6500000,
      tokenPrice: 0.128,
      chain: 'Ethereum',
      platform: 'DAO Maker',
      category: 'AI',
      status: 'upcoming',
      roi: null,
      ath: null,
      socials: { twitter: 'https://twitter.com', discord: 'https://discord.gg', website: 'https://example.com' },
    },
    {
      id: 'chromaverse',
      name: 'ChromaVerse',
      symbol: 'CRMA',
      logo: '🌈',
      description: 'Color-based blockchain gaming ecosystem',
      launchDate: new Date(Date.now() + 11 * 24 * 60 * 60 * 1000),
      raiseAmount: 3700000,
      hardCap: 5500000,
      tokenPrice: 0.098,
      chain: 'Base',
      platform: 'Seedify',
      category: 'Gaming',
      status: 'upcoming',
      roi: null,
      ath: null,
      socials: { twitter: 'https://twitter.com', discord: 'https://discord.gg', website: 'https://example.com' },
    },
    {
      id: 'ethermind',
      name: 'EtherMind',
      symbol: 'EMND',
      logo: '✨',
      description: 'Mental health and wellness blockchain app',
      launchDate: new Date(Date.now() + 12 * 24 * 60 * 60 * 1000),
      raiseAmount: 2900000,
      hardCap: 4300000,
      tokenPrice: 0.067,
      chain: 'Arbitrum',
      platform: 'Camelot',
      category: 'Social',
      status: 'upcoming',
      roi: null,
      ath: null,
      socials: { twitter: 'https://twitter.com', discord: 'https://discord.gg', website: 'https://example.com' },
    },
    {
      id: 'cybergrid',
      name: 'CyberGrid',
      symbol: 'CGRD',
      logo: '⚡',
      description: 'Energy-efficient blockchain infrastructure',
      launchDate: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000),
      raiseAmount: 6800000,
      hardCap: 10000000,
      tokenPrice: 0.175,
      chain: 'Solana',
      platform: 'DAO Maker',
      category: 'Infra',
      status: 'ended',
      roi: 523,
      ath: 1.45,
      socials: { twitter: 'https://twitter.com', discord: 'https://discord.gg', website: 'https://example.com' },
    },
  ];

  // Calculate countdown
  const calculateCountdown = (launchDate: Date) => {
    const now = new Date();
    const diff = launchDate.getTime() - now.getTime();

    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, isLive: true };

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    return { days, hours, minutes, isLive: false };
  };

  // Filter launches
  const filteredLaunches = useMemo(() => {
    return launches.filter((launch) => {
      if (statusFilter !== 'all' && launch.status !== statusFilter) return false;
      if (categoryFilter !== 'all' && launch.category !== categoryFilter) return false;
      if (chainFilter !== 'all' && launch.chain !== chainFilter) return false;
      if (platformFilter !== 'all' && launch.platform !== platformFilter) return false;
      return true;
    });
  }, [statusFilter, categoryFilter, chainFilter, platformFilter]);

  // Get next big launch (featured)
  const nextBigLaunch = useMemo(() => {
    return launches
      .filter((l) => l.status === 'upcoming')
      .sort((a, b) => b.hardCap - a.hardCap)[0];
  }, []);

  // Calculate header stats
  const headerStats = useMemo(() => {
    const upcomingThisWeek = launches.filter((l) => {
      if (l.status !== 'upcoming') return false;
      const now = new Date();
      const inAWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
      return l.launchDate >= now && l.launchDate <= inAWeek;
    });

    const totalRaise = upcomingThisWeek.reduce((sum, l) => sum + l.hardCap, 0);
    const categories = upcomingThisWeek.map((l) => l.category);
    const topCategory =
      categories.length > 0
        ? categories.reduce((a, b) => (categories.filter((x) => x === a).length >= categories.filter((x) => x === b).length ? a : b))
        : 'N/A';

    const endedLaunches = launches.filter((l) => l.status === 'ended' && l.roi);
    const avgROI = endedLaunches.length > 0 ? Math.round(endedLaunches.reduce((sum, l) => sum + (l.roi || 0), 0) / endedLaunches.length) : 0;

    return {
      upcomingCount: upcomingThisWeek.length,
      totalRaise,
      topCategory,
      avgROI,
    };
  }, []);

  const toggleAlert = (launchId: string) => {
    const newAlerts = new Set(alertedLaunches);
    if (newAlerts.has(launchId)) {
      newAlerts.delete(launchId);
    } else {
      newAlerts.add(launchId);
    }
    setAlertedLaunches(newAlerts);
  };

  const LaunchCard = ({ launch }: { launch: (typeof launches)[0] }) => {
    const countdown = calculateCountdown(launch.launchDate);
    const isAlerted = alertedLaunches.has(launch.id);

    const statusColors = {
      upcoming: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      live: 'bg-green-500/20 text-green-300 border-green-500/30',
      ended: 'bg-gray-500/20 text-gray-300 border-gray-500/30',
    };

    const statusBg = {
      upcoming: 'bg-blue-500/10',
      live: 'bg-green-500/10',
      ended: 'bg-gray-500/10',
    };

    return (
      <div className={`rounded-lg border border-[#30363d] p-4 transition-all hover:border-[#484f58] ${statusBg[launch.status]}`}>
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="text-3xl">{launch.logo}</div>
            <div>
              <h3 className="font-semibold text-[#e6edf3]">{launch.name}</h3>
              <p className="text-sm text-[#8b949e]">{launch.symbol}</p>
            </div>
          </div>
          <span className={`px-2 py-1 rounded text-xs font-medium border ${statusColors[launch.status]}`}>
            {launch.status.charAt(0).toUpperCase() + launch.status.slice(1)}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-[#8b949e] mb-3 line-clamp-2">{launch.description}</p>

        {/* Key Details */}
        <div className="grid grid-cols-2 gap-3 mb-4 pb-4 border-b border-[#30363d]">
          <div>
            <p className="text-xs text-[#8b949e] uppercase tracking-wide">Price</p>
            <p className="font-semibold text-[#e6edf3]">${launch.tokenPrice.toFixed(4)}</p>
          </div>
          <div>
            <p className="text-xs text-[#8b949e] uppercase tracking-wide">Hard Cap</p>
            <p className="font-semibold text-[#e6edf3]">${(launch.hardCap / 1000000).toFixed(2)}M</p>
          </div>
          <div>
            <p className="text-xs text-[#8b949e] uppercase tracking-wide">Raise</p>
            <p className="font-semibold text-[#e6edf3]">${(launch.raiseAmount / 1000000).toFixed(2)}M</p>
          </div>
          <div>
            <p className="text-xs text-[#8b949e] uppercase tracking-wide">Chain</p>
            <p className="font-semibold text-[#e6edf3] text-sm">{launch.chain}</p>
          </div>
        </div>

        {/* Countdown or ROI */}
        {launch.status === 'upcoming' && (
          <div className="mb-4 p-3 bg-[#0d1117] rounded border border-[#30363d]">
            <div className="flex items-center gap-2 mb-2">
              <Clock size={16} className="text-blue-400" />
              <p className="text-xs text-[#8b949e] uppercase tracking-wide">Launch In</p>
            </div>
            <p className="text-lg font-mono font-bold text-[#e6edf3]">
              {countdown.days}d {countdown.hours}h {countdown.minutes}m
            </p>
          </div>
        )}

        {(launch.status === 'live' || launch.status === 'ended') && launch.roi !== null && (
          <div className="mb-4 p-3 bg-[#0d1117] rounded border border-[#30363d]">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp size={16} className={launch.roi > 200 ? 'text-green-400' : 'text-red-400'} />
              <p className="text-xs text-[#8b949e] uppercase tracking-wide">IDO ROI</p>
            </div>
            <p className={`text-lg font-mono font-bold ${launch.roi > 200 ? 'text-green-400' : 'text-red-400'}`}>
              {launch.roi > 0 ? '+' : ''}{launch.roi}%
            </p>
          </div>
        )}

        {/* Tags and Platform */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-2 py-1 rounded bg-[#0d1117] text-xs text-[#8b949e] border border-[#30363d]">{launch.category}</span>
          <span className="px-2 py-1 rounded bg-[#0d1117] text-xs text-[#8b949e] border border-[#30363d] truncate">{launch.platform}</span>
        </div>

        {/* Social Links and Alert */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex gap-2">
            <a href={launch.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-[#161b22] rounded transition-colors">
              <Twitter size={16} className="text-[#8b949e] hover:text-[#e6edf3]" />
            </a>
            <a href={launch.socials.discord} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-[#161b22] rounded transition-colors">
              <MessageCircle size={16} className="text-[#8b949e] hover:text-[#e6edf3]" />
            </a>
            <a href={launch.socials.website} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-[#161b22] rounded transition-colors">
              <Globe size={16} className="text-[#8b949e] hover:text-[#e6edf3]" />
            </a>
          </div>
          <button
            onClick={() => toggleAlert(launch.id)}
            className={`flex items-center gap-2 px-3 py-2 rounded text-sm font-medium transition-all ${
              isAlerted
                ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                : 'bg-[#161b22] text-[#8b949e] border border-[#30363d] hover:border-[#484f58] hover:text-[#e6edf3]'
            }`}
          >
            <Bell size={14} />
            <span className="hidden sm:inline">{isAlerted ? 'Alerted' : 'Alert'}</span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#e6edf3] p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Zap className="text-yellow-400" size={28} />
          <h1 className="text-4xl font-bold">Token Launch Radar</h1>
        </div>
        <p className="text-[#8b949e]">Track upcoming IDOs, ICOs, TGEs, and fair launches across all platforms</p>
      </div>

      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="p-4 rounded-lg bg-[#161b22] border border-[#30363d]">
          <div className="flex items-center gap-2 mb-2">
            <Calendar size={18} className="text-blue-400" />
            <p className="text-sm text-[#8b949e] uppercase tracking-wide">This Week</p>
          </div>
          <p className="text-2xl font-bold text-[#e6edf3]">{headerStats.upcomingCount}</p>
          <p className="text-xs text-[#8b949e] mt-1">Upcoming launches</p>
        </div>

        <div className="p-4 rounded-lg bg-[#161b22] border border-[#30363d]">
          <div className="flex items-center gap-2 mb-2">
            <Target size={18} className="text-green-400" />
            <p className="text-sm text-[#8b949e] uppercase tracking-wide">Total Raise</p>
          </div>
          <p className="text-2xl font-bold text-[#e6edf3]">${(headerStats.totalRaise / 1000000).toFixed(1)}M</p>
          <p className="text-xs text-[#8b949e] mt-1">Targeted capital</p>
        </div>

        <div className="p-4 rounded-lg bg-[#161b22] border border-[#30363d]">
          <div className="flex items-center gap-2 mb-2">
            <BarChart3 size={18} className="text-purple-400" />
            <p className="text-sm text-[#8b949e] uppercase tracking-wide">Top Category</p>
          </div>
          <p className="text-2xl font-bold text-[#e6edf3]">{headerStats.topCategory}</p>
          <p className="text-xs text-[#8b949e] mt-1">This week</p>
        </div>

        <div className="p-4 rounded-lg bg-[#161b22] border border-[#30363d]">
          <div className="flex items-center gap-2 mb-2">
            <Award size={18} className="text-yellow-400" />
            <p className="text-sm text-[#8b949e] uppercase tracking-wide">Avg ROI</p>
          </div>
          <p className="text-2xl font-bold text-green-400">+{headerStats.avgROI}%</p>
          <p className="text-xs text-[#8b949e] mt-1">Past launches</p>
        </div>
      </div>

      {/* Featured Launch */}
      {nextBigLaunch && (
        <div className="mb-8 p-6 rounded-lg bg-gradient-to-r from-[#161b22] to-[#0d1117] border border-[#30363d]">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-[#8b949e] uppercase tracking-wide mb-2">Featured Launch</p>
              <div className="flex items-center gap-3">
                <div className="text-5xl">{nextBigLaunch.logo}</div>
                <div>
                  <h2 className="text-3xl font-bold text-[#e6edf3]">{nextBigLaunch.name}</h2>
                  <p className="text-lg text-[#8b949e]">{nextBigLaunch.symbol}</p>
                </div>
              </div>
            </div>
            <span className="px-3 py-1 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 text-sm font-medium">Next Big Launch</span>
          </div>

          <p className="text-[#8b949e] mb-6 max-w-2xl">{nextBigLaunch.description}</p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
            <div>
              <p className="text-xs text-[#8b949e] uppercase tracking-wide mb-1">Hard Cap</p>
              <p className="text-xl font-bold text-[#e6edf3]">${(nextBigLaunch.hardCap / 1000000).toFixed(2)}M</p>
            </div>
            <div>
              <p className="text-xs text-[#8b949e] uppercase tracking-wide mb-1">Token Price</p>
              <p className="text-xl font-bold text-[#e6edf3]">${nextBigLaunch.tokenPrice.toFixed(4)}</p>
            </div>
            <div>
              <p className="text-xs text-[#8b949e] uppercase tracking-wide mb-1">Platform</p>
              <p className="text-sm font-bold text-[#e6edf3]">{nextBigLaunch.platform}</p>
            </div>
            <div>
              <p className="text-xs text-[#8b949e] uppercase tracking-wide mb-1">Chain</p>
              <p className="text-xl font-bold text-[#e6edf3]">{nextBigLaunch.chain}</p>
            </div>
            <div>
              <p className="text-xs text-[#8b949e] uppercase tracking-wide mb-1">Category</p>
              <p className="text-sm font-bold text-[#e6edf3]">{nextBigLaunch.category}</p>
            </div>
          </div>

          {(() => {
            const countdown = calculateCountdown(nextBigLaunch.launchDate);
            return (
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#0d1117] rounded border border-[#30363d]">
                  <p className="text-xs text-[#8b949e] uppercase tracking-wide mb-2">Launches In</p>
                  <p className="text-2xl font-mono font-bold text-blue-400">
                    {countdown.days}d {countdown.hours}h {countdown.minutes}m
                  </p>
                </div>
                <button
                  onClick={() => toggleAlert(nextBigLaunch.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    alertedLaunches.has(nextBigLaunch.id)
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  <Bell size={18} />
                  {alertedLaunches.has(nextBigLaunch.id) ? 'Alert Set' : 'Set Alert'}
                </button>
              </div>
            );
          })()}
        </div>
      )}

      {/* Filter Bar */}
      <div className="mb-8 p-4 rounded-lg bg-[#161b22] border border-[#30363d]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Status Filter */}
          <div>
            <label className="block text-sm text-[#8b949e] uppercase tracking-wide mb-2">Status</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
              className="w-full px-3 py-2 rounded bg-[#0d1117] border border-[#30363d] text-[#e6edf3] text-sm focus:outline-none focus:border-[#484f58]"
            >
              <option value="all">All Statuses</option>
              <option value="upcoming">Upcoming</option>
              <option value="live">Live</option>
              <option value="ended">Ended</option>
            </select>
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-sm text-[#8b949e] uppercase tracking-wide mb-2">Category</label>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="DeFi">DeFi</option>
              <option value="Gaming">Gaming</option>
              <option value="AI">AI</option>
              <option value="Memes">Memes</option>
              <option value="Infra">Infra</option>
              <option value="Social">Social</option>
            </select>
          </div>

          {/* Chain Filter */}
          <div>
            <label className="block text-sm text-[#8b949e] uppercase tracking-wide mb-2">Chain</label>
            <select
              value={chainFilter}
              onChange={(e) => setChainFilter(e.target.value)}
            >
              <option value="all">All Chains</option>
              <option value="Ethereum">Ethereum</option>
              <option value="Solana">Solana</option>
              <option value="BSC">BSC</option>
              <option value="Base">Base</option>
              <option value="Arbitrum">Arbitrum</option>
            </select>
          </div>

          {/* Platform Filter */}
          <div>
            <label className="block text-sm text-[#8b949e] uppercase tracking-wide mb-2">Platform</label>
            <select
              value={platformFilter}
              onChange={(e) => setPlatformFilter(e.target.value)}
            >
              <option value="all">All Platforms</option>
              <option value="Binance Launchpad">Binance Launchpad</option>
              <option value="DAO Maker">DAO Maker</option>
              <option value="Seedify">Seedify</option>
              <option value="Camelot">Camelot</option>
              <option value="Fjord Foundry">Fjord Foundry</option>
            </select>
          </div>
        </div>
      </div>

      {/* View Mode Toggle */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setViewMode('cards')}
          className={`flex items-center gap-2 px-4 py-2 rounded transition-all ${
            viewMode === 'cards'
              ? 'bg-blue-500 text-white'
              : 'bg-[#161b22] text-[#8b949e] border border-[#30363d] hover:border-[#484f58]'
          }`}
        >
          <Grid3x3 size={16} />
          Card View
        </button>
        <button
          onClick={() => setViewMode('calendar')}
          className={`flex items-center gap-2 px-4 py-2 rounded transition-all ${
            viewMode === 'calendar'
          }`}
        >
          <CalendarDays size={16} />
          Calendar View
        </button>
      </div>

      {/* Launches Grid */}
      {viewMode === 'cards' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {filteredLaunches.length > 0 ? (
            filteredLaunches.map((launch) => <LaunchCard key={launch.id} launch={launch} />)
          ) : (
            <div className="col-span-full text-center py-12">
              <AlertCircle size={48} className="text-[#8b949e] mx-auto mb-4 opacity-50" />
              <p className="text-[#8b949e]">No launches match your filters</p>
            </div>
          )}
        </div>
      )}

      {/* Calendar View */}
      {viewMode === 'calendar' && (
        <div className="mb-12">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#30363d]">
                  <th className="text-left px-4 py-3 text-sm text-[#8b949e] font-medium uppercase tracking-wide">Project</th>
                  <th className="text-left px-4 py-3 text-sm text-[#8b949e] font-medium uppercase tracking-wide">Symbol</th>
                  <th className="text-left px-4 py-3 text-sm text-[#8b949e] font-medium uppercase tracking-wide">Date</th>
                  <th className="text-left px-4 py-3 text-sm text-[#8b949e] font-medium uppercase tracking-wide">Hard Cap</th>
                  <th className="text-left px-4 py-3 text-sm text-[#8b949e] font-medium uppercase tracking-wide">Price</th>
                  <th className="text-left px-4 py-3 text-sm text-[#8b949e] font-medium uppercase tracking-wide">Category</th>
                  <th className="text-left px-4 py-3 text-sm text-[#8b949e] font-medium uppercase tracking-wide">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredLaunches.map((launch) => {
                  const statusColors = {
                    upcoming: 'text-blue-400',
                    live: 'text-green-400',
                    ended: 'text-gray-400',
                  };

                  return (
                    <tr key={launch.id} className="border-b border-[#30363d] hover:bg-[#161b22] transition-colors">
                      <td className="px-4 py-3 text-[#e6edf3]">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{launch.logo}</span>
                          <span className="font-medium">{launch.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-[#8b949e] font-mono">{launch.symbol}</td>
                      <td className="px-4 py-3 text-[#8b949e]">{launch.launchDate.toLocaleDateString()}</td>
                      <td className="px-4 py-3 text-[#e6edf3] font-medium">${(launch.hardCap / 1000000).toFixed(2)}M</td>
                      <td className="px-4 py-3 text-[#e6edf3] font-mono">${launch.tokenPrice.toFixed(4)}</td>
                      <td className="px-4 py-3 text-[#8b949e]">{launch.category}</td>
                      <td className={`px-4 py-3 font-medium ${statusColors[launch.status]}`}>
                        {launch.status.charAt(0).toUpperCase() + launch.status.slice(1)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Past Performance Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-[#e6edf3] mb-4">Past Performance</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#30363d]">
                <th className="text-left px-4 py-3 text-sm text-[#8b949e] font-medium uppercase tracking-wide">Project</th>
                <th className="text-left px-4 py-3 text-sm text-[#8b949e] font-medium uppercase tracking-wide">IDO Price</th>
                <th className="text-left px-4 py-3 text-sm text-[#8b949e] font-medium uppercase tracking-wide">ATH Price</th>
                <th className="text-left px-4 py-3 text-sm text-[#8b949e] font-medium uppercase tracking-wide">ROI</th>
                <th className="text-left px-4 py-3 text-sm text-[#8b949e] font-medium uppercase tracking-wide">Platform</th>
                <th className="text-left px-4 py-3 text-sm text-[#8b949e] font-medium uppercase tracking-wide">Chain</th>
              </tr>
            </thead>
            <tbody>
              {launches
                .filter((l) => l.status === 'ended' || l.status === 'live')
                .sort((a, b) => (b.roi || 0) - (a.roi || 0))
                .map((launch) => (
                  <tr key={launch.id} className="border-b border-[#30363d] hover:bg-[#161b22] transition-colors">
                    <td className="px-4 py-3 text-[#e6edf3]">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{launch.logo}</span>
                        <span className="font-medium">{launch.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-[#8b949e] font-mono">${launch.tokenPrice.toFixed(4)}</td>
                    <td className="px-4 py-3 text-[#e6edf3] font-mono">${launch.ath?.toFixed(4)}</td>
                    <td className={`px-4 py-3 font-bold font-mono ${launch.roi && launch.roi > 200 ? 'text-green-400' : launch.roi && launch.roi > 0 ? 'text-blue-400' : 'text-red-400'}`}>
                      {launch.roi ? `${launch.roi > 0 ? '+' : ''}${launch.roi}%` : 'N/A'}
                    </td>
                    <td className="px-4 py-3 text-[#8b949e] text-sm">{launch.platform}</td>
                    <td className="px-4 py-3 text-[#8b949e]">{launch.chain}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer Info */}
      <div className="p-4 rounded-lg bg-[#161b22] border border-[#30363d] text-center text-[#8b949e] text-sm">
        <p>Data is for demonstration purposes only. Always conduct your own research (DYOR) before participating in any token launch.</p>
      </div>
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Token Launch Radar",
              "url": "https://degen0x.com/tools/token-launch-radar",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            })
          }}
        />
      </div>
  );
};

export default TokenLaunchRadar;
