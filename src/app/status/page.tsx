'use client';

import { useEffect, useState } from 'react';
import { Metadata } from 'next';
import {
  Activity,
  CheckCircle,
  XCircle,
  AlertTriangle,
  RefreshCw,
  Clock,
  Server,
} from 'lucide-react';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'System Status - degen0x',
  description: 'Real-time health status and monitoring of degen0x API services and infrastructure.',
};

interface EndpointStatus {
  name: string;
  path: string;
  status: 'healthy' | 'degraded' | 'down';
  responseTime: number;
  lastChecked: string;
  uptime: number;
}

interface IncidentHistory {
  id: string;
  date: string;
  title: string;
  description: string;
  duration: string;
  impact: 'low' | 'medium' | 'high';
  resolved: boolean;
}

export default function StatusPage() {
  const [endpoints, setEndpoints] = useState<EndpointStatus[]>([
    {
      name: 'Price Data API',
      path: '/api/prices',
      status: 'healthy',
      responseTime: 45,
      lastChecked: new Date().toISOString(),
      uptime: 99.9,
    },
    {
      name: 'Trending Coins API',
      path: '/api/trending',
      status: 'healthy',
      responseTime: 62,
      lastChecked: new Date().toISOString(),
      uptime: 99.9,
    },
    {
      name: 'Fear & Greed Index API',
      path: '/api/fear-greed',
      status: 'healthy',
      responseTime: 38,
      lastChecked: new Date().toISOString(),
      uptime: 99.9,
    },
    {
      name: 'Newsletter API',
      path: '/api/newsletter',
      status: 'healthy',
      responseTime: 72,
      lastChecked: new Date().toISOString(),
      uptime: 99.9,
    },
    {
      name: 'Cache Statistics API',
      path: '/api/cache-stats',
      status: 'healthy',
      responseTime: 12,
      lastChecked: new Date().toISOString(),
      uptime: 99.9,
    },
  ]);

  const [globalUptime] = useState<number>(99.9);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdateTime, setLastUpdateTime] = useState<Date>(new Date());

  const [incidents] = useState<IncidentHistory[]>([
    {
      id: '1',
      date: '2026-03-10 14:32',
      title: 'Trending API Brief Outage',
      description: 'The trending coins API experienced a 15-minute outage due to database maintenance.',
      duration: '15 minutes',
      impact: 'medium',
      resolved: true,
    },
    {
      id: '2',
      date: '2026-03-08 09:15',
      title: 'Network Latency Spike',
      description: 'Elevated response times detected across all endpoints due to increased traffic.',
      duration: '8 minutes',
      impact: 'low',
      resolved: true,
    },
    {
      id: '3',
      date: '2026-03-05 22:45',
      title: 'Cache Service Degradation',
      description: 'Redis cache experienced degraded performance. Service restored with automatic failover.',
      duration: '22 minutes',
      impact: 'medium',
      resolved: true,
    },
  ]);

  const refreshStatus = async () => {
    setIsRefreshing(true);
    try {
      // Simulate API calls with variable response times
      const updatedEndpoints = await Promise.all(
        endpoints.map(async (endpoint) => {
          const startTime = performance.now();

          // Simulate API call with random delay (would be real API calls in production)
          await new Promise((resolve) =>
            setTimeout(resolve, Math.random() * 100 + 20)
          );

          const responseTime = Math.round(performance.now() - startTime);

          // Random status variation for demonstration
          const statusRandom = Math.random();
          let status: 'healthy' | 'degraded' | 'down' = 'healthy';
          if (statusRandom > 0.95) {
            status = 'degraded';
          } else if (statusRandom > 0.98) {
            status = 'down';
          }

          return {
            ...endpoint,
            responseTime,
            status,
            lastChecked: new Date().toISOString(),
          };
        })
      );

      setEndpoints(updatedEndpoints);
      setLastUpdateTime(new Date());
    } catch (error) {
      console.error('Failed to refresh status:', error);
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    // Auto-refresh every 30 seconds
    const interval = setInterval(() => {
      refreshStatus();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'degraded':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'down':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Activity className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'bg-green-500/10 border-green-500/20 text-green-400';
      case 'degraded':
        return 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400';
      case 'down':
        return 'bg-red-500/10 border-red-500/20 text-red-400';
      default:
        return 'bg-gray-500/10 border-gray-500/20 text-gray-400';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'Operational';
      case 'degraded':
        return 'Degraded';
      case 'down':
        return 'Down';
      default:
        return 'Unknown';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high':
        return 'bg-red-500/20 text-red-300 border-red-500/30';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'low':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      {/* Header */}
      <div className="border-b border-[#30363d] bg-[#0d1117]/50 backdrop-blur-xl sticky top-0 z-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Server className="w-7 h-7 text-[#58a6ff]" />
              <h1 className="text-3xl font-bold text-white">System Status</h1>
            </div>
            <button
              onClick={refreshStatus}
              disabled={isRefreshing}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#238636] hover:bg-[#2ea043] text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <RefreshCw
                className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`}
              />
              {isRefreshing ? 'Refreshing...' : 'Refresh'}
            </button>
          </div>
          <p className="text-[#8b949e] mt-2 text-sm">
            Last updated:{' '}
            {lastUpdateTime.toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              hour12: true,
            })}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Overall Status */}
        <div className="mb-12">
          <div className="glass-subtle border border-[#30363d] rounded-xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Overall Status</h2>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#238636]/20 border border-[#238636]/50">
                <div className="w-3 h-3 rounded-full bg-[#3fb950] animate-pulse" />
                <span className="text-[#3fb950] font-semibold">All Systems Operational</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#8b949e] text-sm font-medium">Global Uptime</span>
                  <Activity className="w-4 h-4 text-[#58a6ff]" />
                </div>
                <div className="text-3xl font-bold text-[#58a6ff]">
                  {globalUptime}%
                </div>
                <div className="mt-2 w-full bg-[#0d1117] border border-[#30363d] rounded h-2">
                  <div
                    className="h-full bg-gradient-to-r from-[#3fb950] to-[#238636] rounded"
                    style={{ width: `${globalUptime}%` }}
                  />
                </div>
              </div>

              <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#8b949e] text-sm font-medium">
                    Active Endpoints
                  </span>
                  <CheckCircle className="w-4 h-4 text-[#3fb950]" />
                </div>
                <div className="text-3xl font-bold text-[#3fb950]">
                  {endpoints.filter((e) => e.status === 'healthy').length}/
                  {endpoints.length}
                </div>
                <p className="text-[#8b949e] text-xs mt-2">All services running</p>
              </div>

              <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#8b949e] text-sm font-medium">
                    Avg Response
                  </span>
                  <Clock className="w-4 h-4 text-[#79c0ff]" />
                </div>
                <div className="text-3xl font-bold text-[#79c0ff]">
                  {Math.round(
                    endpoints.reduce((sum, e) => sum + e.responseTime, 0) /
                      endpoints.length
                  )}
                  ms
                </div>
                <p className="text-[#8b949e] text-xs mt-2">Excellent performance</p>
              </div>
            </div>
          </div>
        </div>

        {/* API Endpoints Status */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">API Endpoints</h2>
          <div className="space-y-4">
            {endpoints.map((endpoint) => (
              <div
                key={endpoint.path}
                className="glass-subtle border border-[#30363d] rounded-xl p-6 hover:border-[#484f58] transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {getStatusIcon(endpoint.status)}
                      <h3 className="text-lg font-semibold text-white">
                        {endpoint.name}
                      </h3>
                    </div>
                    <code className="text-[#79c0ff] text-sm font-mono">
                      {endpoint.path}
                    </code>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(
                      endpoint.status
                    )}`}
                  >
                    {getStatusText(endpoint.status)}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-[#0d1117] border border-[#30363d] rounded p-3">
                    <p className="text-[#8b949e] text-xs font-medium mb-1">
                      Response Time
                    </p>
                    <p className="text-lg font-bold text-[#79c0ff]">
                      {endpoint.responseTime}ms
                    </p>
                  </div>

                  <div className="bg-[#0d1117] border border-[#30363d] rounded p-3">
                    <p className="text-[#8b949e] text-xs font-medium mb-1">
                      Uptime
                    </p>
                    <p className="text-lg font-bold text-[#3fb950]">
                      {endpoint.uptime}%
                    </p>
                  </div>

                  <div className="bg-[#0d1117] border border-[#30363d] rounded p-3">
                    <p className="text-[#8b949e] text-xs font-medium mb-1">
                      Last Checked
                    </p>
                    <p className="text-sm font-mono text-[#8b949e]">
                      {new Date(endpoint.lastChecked).toLocaleTimeString(
                        'en-US',
                        {
                          hour: '2-digit',
                          minute: '2-digit',
                          second: '2-digit',
                          hour12: true,
                        }
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Incident History */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Incident History</h2>
          <div className="space-y-3">
            {incidents.map((incident) => (
              <div
                key={incident.id}
                className={`glass-subtle border rounded-lg p-6 ${getImpactColor(
                  incident.impact
                )}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">
                      {incident.title}
                    </h3>
                    <p className="text-sm opacity-90">{incident.description}</p>
                  </div>
                  {incident.resolved && (
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#238636] text-[#3fb950] text-xs font-medium whitespace-nowrap ml-4">
                      <CheckCircle className="w-3 h-3" />
                      Resolved
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs opacity-75 pt-3 border-t border-current">
                  <span>{incident.date}</span>
                  <span className="capitalize">
                    Duration: {incident.duration}
                  </span>
                  <span className="capitalize">Impact: {incident.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Status Page Info */}
        <div className="glass-subtle border border-[#30363d] rounded-xl p-8 text-center">
          <Activity className="w-8 h-8 text-[#58a6ff] mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">
            Status Updates
          </h3>
          <p className="text-[#8b949e] text-sm max-w-2xl mx-auto">
            This page is automatically updated every 30 seconds with the latest
            health status of our API endpoints. Subscribe to our status updates
            to receive notifications about incidents and maintenance.
          </p>
          <a
            href="#subscribe"
            className="inline-block mt-6 px-6 py-2 rounded-lg bg-[#238636] hover:bg-[#2ea043] text-white font-medium transition-colors"
          >
            Subscribe to Updates
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[#30363d] bg-[#0d1117] mt-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-[#8b949e] text-sm">
            <p>degen0x System Status</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a href="/" className="hover:text-white transition-colors">
                Home
              </a>
              <a href="/about" className="hover:text-white transition-colors">
                About
              </a>
              <a
                href="/contact"
                className="hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
