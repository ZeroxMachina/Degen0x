'use client';

import { useState, useRef } from 'react';
import { ShareCard } from '@/components/ShareCard';

type CardVariant = 'xp' | 'achievement' | 'streak';

const mockData = {
  username: 'CryptoDegen',
  xp: 4200,
  level: 12,
  badges: ['🏆', '⚡', '🎯', '🔥', '💎'],
  streak: 14,
  rank: 847,
  completedCourses: 8,
};

export default function SharePage() {
  const [variant, setVariant] = useState<CardVariant>('xp');
  const [copied, setCopied] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleShareTwitter = () => {
    const text = "Just hit 4,200 XP on @degen0x! 🚀 Learning crypto has never been this fun. Join me → degen0x.com #Crypto #Web3 #degen0x";
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'width=550,height=420');
  };

  const handleCopyLink = () => {
    const shareLink = `${typeof window !== 'undefined' ? window.location.origin : ''}/share`;
    navigator.clipboard.writeText(shareLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = async () => {
    if (!cardRef.current) return;

    // Create canvas from DOM
    const canvas = await html2canvas(cardRef.current, {
      backgroundColor: null,
      scale: 2,
      width: 600,
      height: 315,
    }).catch(() => {
      // Fallback: create basic canvas
      alert('Download not available. Please use "Share on X" instead!');
    });

    if (canvas) {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = `degen0x-card-${Date.now()}.png`;
      link.click();
    }
  };

  const variantDescriptions = {
    xp: 'Showcase your total XP and progression',
    achievement: 'Celebrate your badges and achievements',
    streak: 'Display your consistency with fire streaks',
  };

  const variantColors = {
    xp: '#00d9ff',
    achievement: '#ffd700',
    streak: '#ff6b35',
  };

  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0d0e1a 0%, #1a0a2e 50%, #0f3460 100%)',
    color: '#ffffff',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    paddingBottom: '60px',
  };

  const headerStyle: React.CSSProperties = {
    padding: '40px 20px 20px',
    textAlign: 'center',
    borderBottom: '1px solid rgba(0, 217, 255, 0.1)',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '32px',
    fontWeight: '800',
    marginBottom: '8px',
    background: 'linear-gradient(90deg, #00d9ff, #00d9ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '14px',
    color: 'rgba(255, 255, 255, 0.6)',
  };

  const mainContentStyle: React.CSSProperties = {
    maxWidth: '1000px',
    margin: '40px auto',
    padding: '0 20px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px',
  };

  const previewSectionStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
  };

  const tabsStyle: React.CSSProperties = {
    display: 'flex',
    gap: '12px',
    marginBottom: '20px',
    width: '100%',
    justifyContent: 'center',
  };

  const tabStyle = (isActive: boolean): React.CSSProperties => ({
    padding: '8px 16px',
    borderRadius: '8px',
    border: isActive ? `2px solid ${variantColors[variant]}` : '1px solid rgba(255, 255, 255, 0.2)',
    background: isActive ? `${variantColors[variant]}15` : 'rgba(255, 255, 255, 0.05)',
    color: isActive ? variantColors[variant] : 'rgba(255, 255, 255, 0.6)',
    cursor: 'pointer',
    fontSize: '12px',
    fontWeight: '600',
    transition: 'all 0.3s ease',
  });

  const cardContainerStyle: React.CSSProperties = {
    transform: 'scale(0.85)',
    transformOrigin: 'center top',
    marginBottom: '20px',
  };

  const actionsSectionStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    height: 'fit-content',
  };

  const statsBoxStyle: React.CSSProperties = {
    background: 'rgba(0, 217, 255, 0.05)',
    border: '1px solid rgba(0, 217, 255, 0.2)',
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '20px',
  };

  const statRowStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '12px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  };

  const statRowLastStyle: React.CSSProperties = {
    ...statRowStyle,
    borderBottom: 'none',
    paddingBottom: '0',
  };

  const statLabelStyle: React.CSSProperties = {
    fontSize: '14px',
    color: 'rgba(255, 255, 255, 0.6)',
  };

  const statValueStyle: React.CSSProperties = {
    fontSize: '20px',
    fontWeight: '700',
    color: '#00d9ff',
  };

  const buttonStyle = (accentColor: string = '#00d9ff'): React.CSSProperties => ({
    padding: '12px 24px',
    borderRadius: '8px',
    border: `2px solid ${accentColor}`,
    background: `${accentColor}15`,
    color: accentColor,
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    width: '100%',
    textAlign: 'center',
  });

  const primaryButtonStyle: React.CSSProperties = {
    ...buttonStyle(),
    background: `linear-gradient(90deg, #00d9ff, #00d9ff)`,
    color: '#0d0e1a',
    border: 'none',
    fontWeight: '700',
  };

  return (
    <div style={containerStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <h1 style={titleStyle}>Share Your Achievement</h1>
        <p style={subtitleStyle}>Flex your crypto education progress across social</p>
      </div>

      {/* Main Content */}
      <div style={mainContentStyle}>
        {/* Preview Section */}
        <div style={previewSectionStyle}>
          <div>
            <div style={tabsStyle}>
              {(['xp', 'achievement', 'streak'] as CardVariant[]).map((v) => (
                <button
                  key={v}
                  style={tabStyle(variant === v)}
                  onClick={() => setVariant(v)}
                >
                  {v.charAt(0).toUpperCase() + v.slice(1)}
                </button>
              ))}
            </div>
            <p style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)', margin: '0 0 16px 0' }}>
              {variantDescriptions[variant]}
            </p>
          </div>

          <div style={cardContainerStyle} ref={cardRef}>
            <ShareCard {...mockData} variant={variant} />
          </div>
        </div>

        {/* Actions Section */}
        <div style={actionsSectionStyle}>
          {/* Stats */}
          <div style={statsBoxStyle}>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: '700' }}>
              Your Progress
            </h3>
            <div style={statRowStyle}>
              <span style={statLabelStyle}>Total XP</span>
              <span style={statValueStyle}>{mockData.xp.toLocaleString()}</span>
            </div>
            <div style={statRowStyle}>
              <span style={statLabelStyle}>Current Level</span>
              <span style={statValueStyle}>Level {mockData.level}</span>
            </div>
            <div style={statRowStyle}>
              <span style={statLabelStyle}>Day Streak</span>
              <span style={{ ...statValueStyle, color: '#ff6b35' }}>
                🔥 {mockData.streak}
              </span>
            </div>
            <div style={statRowLastStyle}>
              <span style={statLabelStyle}>Courses Completed</span>
              <span style={statValueStyle}>{mockData.completedCourses}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <button
            style={primaryButtonStyle}
            onClick={handleShareTwitter}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 217, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            🐦 Share on X
          </button>

          <button
            style={buttonStyle()}
            onClick={handleCopyLink}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(0, 217, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(0, 217, 255, 0.08)';
            }}
          >
            {copied ? '✓ Copied!' : '📋 Copy Link'}
          </button>

          <button
            style={buttonStyle()}
            onClick={handleDownload}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(0, 217, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(0, 217, 255, 0.08)';
            }}
          >
            ⬇️ Download Card
          </button>

          {/* Info Text */}
          <div
            style={{
              background: 'rgba(0, 217, 255, 0.05)',
              border: '1px solid rgba(0, 217, 255, 0.2)',
              borderRadius: '8px',
              padding: '16px',
              fontSize: '12px',
              color: 'rgba(255, 255, 255, 0.6)',
              lineHeight: '1.6',
              marginTop: '12px',
            }}
          >
            Share your achievement and inspire others to join the degen0x community. Your card
            will help onboard the next billion users to crypto education.
          </div>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 800px) {
          div[style*="gridTemplateColumns: '1fr 1fr'"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="transformOrigin: 'center top'"] {
            transform: scale(1) !important;
          }
        }

        button:hover:not(:disabled) {
          opacity: 0.9;
        }

        button:active:not(:disabled) {
          transform: scale(0.98);
        }
      `}</style>
    </div>
  );
}

// Add html2canvas script loading in a useEffect
declare global {
  function html2canvas(element: HTMLElement, options: any): Promise<HTMLCanvasElement>;
}

// Lazy load html2canvas if needed
if (typeof window !== 'undefined' && !('html2canvas' in window)) {
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
  document.head.appendChild(script);
}
