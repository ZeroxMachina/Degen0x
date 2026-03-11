'use client';

import React, { useEffect, useState } from 'react';

interface FearGreedData {
  value: string;
  value_classification: string;
  timestamp: string;
  time_until_update: string;
}

interface FearGreedResponse {
  data: FearGreedData[];
  metadata: {
    error?: string;
  };
}

interface FearGreedWidgetProps {
  compact?: boolean;
}

const FearGreedWidget: React.FC<FearGreedWidgetProps> = ({ compact = false }) => {
  const [data, setData] = useState<FearGreedData[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hoursAgo, setHoursAgo] = useState<number>(0);

  useEffect(() => {
    const fetchFearGreedData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('https://api.alternative.me/fng/?limit=7');
        
        if (!response.ok) {
          throw new Error('Failed to fetch Fear & Greed data');
        }

        const json: FearGreedResponse = await response.json();
        
        if (json.data && json.data.length > 0) {
          setData(json.data);
          
          // Calculate hours ago from timestamp
          const currentData = json.data[0];
          const timestamp = parseInt(currentData.timestamp);
          const now = Math.floor(Date.now() / 1000);
          const secondsAgo = now - timestamp;
          const hours = Math.floor(secondsAgo / 3600);
          setHoursAgo(Math.max(0, hours));
        } else {
          throw new Error('No data received from API');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchFearGreedData();

    // Optionally refresh every 1 hour
    const interval = setInterval(fetchFearGreedData, 3600000);
    return () => clearInterval(interval);
  }, []);

  const getColorForScore = (score: number) => {
    if (score <= 25) return '#ef4444'; // red - Extreme Fear
    if (score <= 45) return '#f97316'; // orange - Fear
    if (score <= 55) return '#eab308'; // yellow - Neutral
    if (score <= 75) return '#84cc16'; // lime - Greed
    return '#22c55e'; // green - Extreme Greed
  };

  const getClassificationLabel = (classification: string): string => {
    const labelMap: Record<string, string> = {
      'Extreme Fear': 'Extreme Fear',
      'Fear': 'Fear',
      'Neutral': 'Neutral',
      'Greed': 'Greed',
      'Extreme Greed': 'Extreme Greed',
    };
    return labelMap[classification] || classification;
  };

  if (loading) {
    return (
      <div style={styles.container(compact)}>
        <style>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
        <div style={styles.spinnerContainer}>
          <div style={styles.spinner} />
          <p style={styles.loadingText}>Loading Fear & Greed...</p>
        </div>
      </div>
    );
  }

  if (error || !data || data.length === 0) {
    return (
      <div style={styles.container(compact)}>
        <div style={styles.errorContainer}>
          <p style={styles.errorText}>Fear & Greed: Data unavailable</p>
          <p style={styles.errorSubText}>{error}</p>
        </div>
      </div>
    );
  }

  const currentData = data[0];
  const score = parseInt(currentData.value);
  const classification = getClassificationLabel(currentData.value_classification);
  const color = getColorForScore(score);

  if (compact) {
    return (
      <div style={styles.compactContainer}>
        <style>{styles.globalStyles}</style>
        <div style={styles.compactContent}>
          <div style={styles.compactLabel}>Fear & Greed</div>
          <div style={styles.compactScore}>
            <span style={{ ...styles.scoreNumber, color }}>{score}</span>
            <span style={styles.compactClassification}>{classification}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.fullContainer}>
      <style>{styles.globalStyles}</style>
      
      {/* Header */}
      <div style={styles.header}>
        <h2 style={styles.title}>Crypto Fear & Greed Index</h2>
        <p style={styles.updateTime}>
          {hoursAgo === 0 ? 'Just now' : `Updated ${hoursAgo} hour${hoursAgo !== 1 ? 's' : ''} ago`}
        </p>
      </div>

      {/* Current Score Section */}
      <div style={styles.currentScoreSection}>
        {/* SVG Gauge */}
        <div style={styles.gaugeContainer}>
          <svg
            width="200"
            height="120"
            viewBox="0 0 200 120"
            style={styles.gaugeSvg}
          >
            {/* Background arc */}
            <path
              d="M 20 100 A 80 80 0 0 1 180 100"
              fill="none"
              stroke="#333333"
              strokeWidth="12"
              strokeLinecap="round"
            />
            
            {/* Colored arc based on score */}
            <path
              d={getArcPath(score)}
              fill="none"
              stroke={color}
              strokeWidth="12"
              strokeLinecap="round"
              style={{ transition: 'stroke 0.3s ease' }}
            />
            
            {/* Center text */}
            <text
              x="100"
              y="70"
              textAnchor="middle"
              dominantBaseline="middle"
              style={{
                fontSize: '48px',
                fontWeight: 'bold',
                fill: color,
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              {score}
            </text>
            
            <text
              x="100"
              y="100"
              textAnchor="middle"
              dominantBaseline="middle"
              style={{
                fontSize: '14px',
                fill: '#999999',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              {classification}
            </text>
          </svg>
        </div>

        {/* Score Legend */}
        <div style={styles.legendContainer}>
          <div style={styles.legendItem}>
            <div style={{ ...styles.legendColor, backgroundColor: '#ef4444' }} />
            <span>Extreme Fear (0-25)</span>
          </div>
          <div style={styles.legendItem}>
            <div style={{ ...styles.legendColor, backgroundColor: '#f97316' }} />
            <span>Fear (26-45)</span>
          </div>
          <div style={styles.legendItem}>
            <div style={{ ...styles.legendColor, backgroundColor: '#eab308' }} />
            <span>Neutral (46-55)</span>
          </div>
          <div style={styles.legendItem}>
            <div style={{ ...styles.legendColor, backgroundColor: '#84cc16' }} />
            <span>Greed (56-75)</span>
          </div>
          <div style={styles.legendItem}>
            <div style={{ ...styles.legendColor, backgroundColor: '#22c55e' }} />
            <span>Extreme Greed (76-100)</span>
          </div>
        </div>
      </div>

      {/* 7-Day History Section */}
      <div style={styles.historySection}>
        <h3 style={styles.historyTitle}>7-Day History</h3>
        <div style={styles.barChartContainer}>
          {data.map((item, index) => {
            const itemScore = parseInt(item.value);
            const itemColor = getColorForScore(itemScore);
            const maxScore = Math.max(...data.map(d => parseInt(d.value)));
            const minScore = Math.min(...data.map(d => parseInt(d.value)));
            const range = maxScore - minScore || 1;
            const normalizedHeight = ((itemScore - minScore) / range) * 100;
            
            return (
              <div key={index} style={styles.barWrapper}>
                <div style={styles.barTooltip}>
                  <span>{itemScore}</span>
                </div>
                <div
                  style={{
                    ...styles.bar,
                    height: `${Math.max(20, normalizedHeight)}%`,
                    backgroundColor: itemColor,
                  }}
                />
                <div style={styles.barLabel}>
                  {getDateLabel(parseInt(item.timestamp), index)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Helper function to generate SVG arc path
const getArcPath = (score: number): string => {
  // Map score (0-100) to angle (0-180 degrees for semicircle)
  const angle = (score / 100) * 180;
  const radians = (angle * Math.PI) / 180;
  
  // Start point (left end of arc)
  const startX = 20;
  const startY = 100;
  
  // End point (calculated based on angle)
  const centerX = 100;
  const centerY = 100;
  const radius = 80;
  
  const endX = centerX + radius * Math.cos(Math.PI + radians);
  const endY = centerY - radius * Math.sin(Math.PI + radians);
  
  // Determine if we need the large arc flag
  const largeArcFlag = angle > 90 ? 1 : 0;
  
  return `M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`;
};

// Helper function to format date labels for history
const getDateLabel = (timestamp: number, index: number): string => {
  if (index === 0) return 'Today';
  if (index === 1) return 'Yest';
  return `${index}d`;
};

// Styles object
const styles = {
  globalStyles: `
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
  `,
  
  container: (compact: boolean) => ({
    padding: compact ? '12px 16px' : '24px',
    backgroundColor: 'rgba(17, 24, 39, 0.6)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    backdropFilter: 'blur(10px)',
    animation: 'fadeIn 0.4s ease-out',
  } as React.CSSProperties),

  compactContainer: {
    padding: '12px 16px',
    backgroundColor: 'rgba(17, 24, 39, 0.6)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    backdropFilter: 'blur(10px)',
    animation: 'fadeIn 0.4s ease-out',
  } as React.CSSProperties,

  compactContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  } as React.CSSProperties,

  compactLabel: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#9ca3af',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  } as React.CSSProperties,

  compactScore: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  } as React.CSSProperties,

  scoreNumber: {
    fontSize: '24px',
    fontWeight: '700',
  } as React.CSSProperties,

  compactClassification: {
    fontSize: '12px',
    color: '#d1d5db',
  } as React.CSSProperties,

  fullContainer: {
    padding: '24px',
    backgroundColor: 'rgba(17, 24, 39, 0.6)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    backdropFilter: 'blur(10px)',
    animation: 'fadeIn 0.4s ease-out',
  } as React.CSSProperties,

  spinnerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 24px',
    gap: '16px',
  } as React.CSSProperties,

  spinner: {
    width: '40px',
    height: '40px',
    border: '3px solid rgba(255, 255, 255, 0.1)',
    borderTop: '3px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  } as React.CSSProperties,

  loadingText: {
    color: '#9ca3af',
    fontSize: '14px',
    margin: 0,
  } as React.CSSProperties,

  errorContainer: {
    padding: '24px',
    textAlign: 'center',
  } as React.CSSProperties,

  errorText: {
    color: '#ef4444',
    fontSize: '16px',
    fontWeight: '600',
    margin: '0 0 8px 0',
  } as React.CSSProperties,

  errorSubText: {
    color: '#9ca3af',
    fontSize: '13px',
    margin: 0,
  } as React.CSSProperties,

  header: {
    marginBottom: '24px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    paddingBottom: '16px',
  } as React.CSSProperties,

  title: {
    margin: '0 0 8px 0',
    fontSize: '20px',
    fontWeight: '700',
    color: '#f3f4f6',
  } as React.CSSProperties,

  updateTime: {
    margin: 0,
    fontSize: '13px',
    color: '#9ca3af',
  } as React.CSSProperties,

  currentScoreSection: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '32px',
    marginBottom: '32px',
    alignItems: 'start',
  } as React.CSSProperties,

  gaugeContainer: {
    display: 'flex',
    justifyContent: 'center',
  } as React.CSSProperties,

  gaugeSvg: {
    filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15))',
  } as React.CSSProperties,

  legendContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  } as React.CSSProperties,

  legendItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '13px',
    color: '#d1d5db',
  } as React.CSSProperties,

  legendColor: {
    width: '12px',
    height: '12px',
    borderRadius: '3px',
    flexShrink: 0,
  } as React.CSSProperties,

  historySection: {
    paddingTop: '24px',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
  } as React.CSSProperties,

  historyTitle: {
    margin: '0 0 16px 0',
    fontSize: '16px',
    fontWeight: '600',
    color: '#f3f4f6',
  } as React.CSSProperties,

  barChartContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: '12px',
    height: '120px',
  } as React.CSSProperties,

  barWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    gap: '8px',
    position: 'relative',
  } as React.CSSProperties,

  barTooltip: {
    opacity: 0,
    position: 'absolute',
    bottom: '100%',
    marginBottom: '8px',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: '#f3f4f6',
    padding: '4px 8px',
    borderRadius: '6px',
    fontSize: '12px',
    fontWeight: '600',
    whiteSpace: 'nowrap',
    transition: 'opacity 0.2s ease',
  } as React.CSSProperties,

  bar: {
    width: '100%',
    minHeight: '20px',
    borderRadius: '6px 6px 0 0',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  } as React.CSSProperties,

  barLabel: {
    fontSize: '12px',
    color: '#9ca3af',
    textAlign: 'center',
  } as React.CSSProperties,
};

export default FearGreedWidget;
