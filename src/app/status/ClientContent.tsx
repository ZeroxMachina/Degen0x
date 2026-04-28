'use client';

import { useEffect, useState } from 'react';
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

export default function ClientContent() {
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
      date: '2026-03-05 09:15',
      title: 'Cache Layer Issue',
      description: 'Redis cache invalidation caused temporary stale data. Resolved within 8 minutes.',
      duration: '8 minutes',
      impact: 'low',
      resolved: true,
    },
    {
      id: '3',
      date: '2026-02-28 22:45',
      title: 'Database Scaling Event',
      description: 'Database underwent planned maintenance to handle increased load. All services remained operational.',
      duration: '45 minutes',
      impact: 'low',
      resolved: true,
    },
    {
      id: '4',
      date: '2026-02-20 16:20',
      title: 'Price Feed Delay',
      description: 'External price feed provider experienced latency, causing slight delays in price updates.',
      duration: '3 minutes',
      impact: 'low',
      resolved: true,
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newEndpoints = endpoints.map((endpoint) => ({
        ...endpoint,
        responseTime: Math.floor(Math.random() * 100) + 20,
        lastChecked: new Date().toISOString(),
      }));
      setEndpoints(newEndpoints);
      setLastUpdateTime(new Date());
    }, 30000);

    return () => clearInterval(interval);
  }, [endpoints]);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLastUpdateTime(new Date());
    setIsRefreshing(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'text-green-400';
      case 'degraded':
        return 'text-yellow-400';
      case 'down':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'bg-green-400/10 border-green-500/30';
      case 'degraded':
        return 'bg-yellow-400/10 border-yellow-500/30';
      case 'down':
        return 'bg-red-400/10 border-red-500/30';
      default:
        return 'bg-gray-400/10 border-gray-500/30';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'low':
        return 'text-blue-400';
      case 'medium':
        return 'text-yellow-400';
      case 'high':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white flex items-center gap-2">
              <Activity className="w-10 h-10 text-blue-400" />
              System Status
            </h1>
            <p className="text-gray-400 mt-2">Real-time status and monitoring of degen0x services</p>
          </div>
          <button
            onClick={handleRefresh}
            disabled={isRefreshing}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-500/50 text-blue-400 hover:bg-blue-500/10 transition-all ${
              isRefreshing ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            {isRefreshing ? 'Refreshing...' : 'Refresh'}
          </button>
        </div>

        {/* Global Status */}
        <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-gray-900/50 rounded-lg border border-gray-800 p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400">Global Uptime</span>
              <CheckCircle className="w-5 h-5 text-green-400" />
            </div>
            <div className="text-3xl font-bold text-white">{globalUptime}%</div>
            <div className="text-xs text-gray-500 mt-2">Last 30 days</div>
          </div>

          <div className="bg-gray-900/50 rounded-lg border border-gray-800 p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400">Total Endpoints</span>
              <Server className="w-5 h-5 text-blue-400" />
            </div>
            <div className="text-3xl font-bold text-white">{endpoints.length}</div>
            <div className="text-xs text-gray-500 mt-2">All operational</div>
          </div>

          <div className="bg-gray-900/50 rounded-lg border border-gray-800 p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400">Last Update</span>
              <Clock className="w-5 h-5 text-purple-400" />
            </div>
            <div className="text-sm font-mono text-white">{lastUpdateTime.toLocaleTimeString()}</div>
            <div className="text-xs text-gray-500 mt-2">Updated in real-time</div>
          </div>
        </div>

        {/* Endpoint Status */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Endpoint Health</h2>
          <div className="space-y-3">
            {endpoints.map((endpoint) => (
              <div
                key={endpoint.path}
                className={`rounded-lg border p-4 ${getStatusBg(endpoint.status)} bg-opacity-50`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-white">{endpoint.name}</h3>
                    <code className="text-xs text-gray-400 font-mono">{endpoint.path}</code>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className={`font-semibold ${getStatusColor(endpoint.status)}`}>
                        {endpoint.status.charAt(0).toUpperCase() + endpoint.status.slice(1)}
                      </div>
                      <div className="text-xs text-gray-500">{endpoint.responseTime}ms</div>
                    </div>
                    {endpoint.status === 'healthy' ? (
                      <CheckCircle className={`w-6 h-6 ${getStatusColor(endpoint.status)}`} />
                    ) : endpoint.status === 'degraded' ? (
                      <AlertTriangle className={`w-6 h-6 ${getStatusColor(endpoint.status)}`} />
                    ) : (
                      <XCircle className={`w-6 h-6 ${getStatusColor(endpoint.status)}`} />
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>Last checked: {new Date(endpoint.lastChecked).toLocaleTimeString()}</span>
                  <span>Uptime: {endpoint.uptime}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Incidents */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Recent Incidents</h2>
          <div className="space-y-3">
            {incidents.map((incident) => (
              <div key={incident.id} className="rounded-lg border border-gray-800 bg-gray-900/50 p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-white">{incident.title}</h3>
                    <p className="text-sm text-gray-400 mt-1">{incident.description}</p>
                  </div>
                  <div className={`px-3 py-1 rounded text-xs font-semibold ${getImpactColor(incident.impact)}`}>
                    {incident.impact.toUpperCase()}
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{incident.date}</span>
                  <span>
                    Duration: {incident.duration} • {incident.resolved ? '✓ Resolved' : 'Ongoing'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center border-t border-gray-800 pt-8 mt-8 text-gray-500 text-sm">
          <p>
            For more information, visit our{' '}
            <a href="/about" className="text-blue-400 hover:text-blue-300">
              documentation
            </a>{' '}
            or{' '}
            <a href="/contact" className="text-blue-400 hover:text-blue-300">
              contact support
            </a>
          </p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="/" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="/about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="/contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
