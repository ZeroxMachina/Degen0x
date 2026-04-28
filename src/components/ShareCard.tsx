'use client';

import React from 'react';

export interface ShareCardProps {
  username: string;
  xp: number;
  level: number;
  badges: string[];
  streak: number;
  rank: number;
  completedCourses: number;
  variant?: 'xp' | 'achievement' | 'streak';
}

export const ShareCard: React.FC<ShareCardProps> = ({
  username,
  xp,
  level,
  badges,
  streak,
  rank,
  completedCourses,
  variant = 'xp',
}) => {
  const cardWidth = 600;
  const cardHeight = 315;

  const getGradientByVariant = () => {
    switch (variant) {
      case 'achievement':
        return 'linear-gradient(135deg, #1a0a2e 0%, #16213e 50%, #0f3460 100%)';
      case 'streak':
        return 'linear-gradient(135deg, #1a0a2e 0%, #2d1b4e 50%, #421e5a 100%)';
      default:
        return 'linear-gradient(135deg, #0d0e1a 0%, #1a0a2e 50%, #0f3460 100%)';
    }
  };

  const getAccentColor = () => {
    switch (variant) {
      case 'achievement':
        return '#ffd700';
      case 'streak':
        return '#ff6b35';
      default:
        return '#00d9ff';
    }
  };

  const accentColor = getAccentColor();

  const containerStyle: React.CSSProperties = {
    width: cardWidth,
    height: cardHeight,
    background: getGradientByVariant(),
    borderRadius: '16px',
    padding: '32px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: `0 20px 60px rgba(0, 217, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
    border: '1px solid rgba(0, 217, 255, 0.2)',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    color: '#ffffff',
    overflow: 'hidden',
    position: 'relative' as const,
  };

  const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
  };

  const logoStyle: React.CSSProperties = {
    fontSize: '18px',
    fontWeight: '700',
    letterSpacing: '2px',
    background: `linear-gradient(90deg, ${accentColor}, #00d9ff)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const rankBadgeStyle: React.CSSProperties = {
    fontSize: '12px',
    fontWeight: '600',
    background: `rgba(${variant === 'achievement' ? '255, 215, 0' : variant === 'streak' ? '255, 107, 53' : '0, 217, 255'}, 0.15)`,
    border: `1px solid ${accentColor}`,
    borderRadius: '20px',
    padding: '6px 12px',
    color: accentColor,
  };

  const mainContentStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'flex-end',
    gap: '24px',
    marginBottom: '16px',
  };

  const xpSectionStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  };

  const xpNumberStyle: React.CSSProperties = {
    fontSize: '64px',
    fontWeight: '800',
    lineHeight: '1',
    background: `linear-gradient(90deg, ${accentColor}, #00d9ff)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textShadow: `0 0 30px ${accentColor}99`,
    marginBottom: '4px',
  };

  const xpLabelStyle: React.CSSProperties = {
    fontSize: '14px',
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 0.7)',
    letterSpacing: '1px',
  };

  const statsGridStyle: React.CSSProperties = {
    display: 'flex',
    gap: '12px',
  };

  const statBoxStyle: React.CSSProperties = {
    background: 'rgba(0, 217, 255, 0.08)',
    border: '1px solid rgba(0, 217, 255, 0.2)',
    borderRadius: '8px',
    padding: '8px 12px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '50px',
  };

  const statNumberStyle: React.CSSProperties = {
    fontSize: '20px',
    fontWeight: '700',
    color: accentColor,
  };

  const statLabelStyle: React.CSSProperties = {
    fontSize: '10px',
    color: 'rgba(255, 255, 255, 0.6)',
    marginTop: '2px',
  };

  const badgesStyle: React.CSSProperties = {
    display: 'flex',
    gap: '8px',
    marginBottom: '16px',
    flexWrap: 'wrap',
  };

  const badgeStyle: React.CSSProperties = {
    fontSize: '28px',
    display: 'inline-block',
    filter: 'drop-shadow(0 0 8px rgba(0, 217, 255, 0.3))',
  };

  const footerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '11px',
    color: 'rgba(255, 255, 255, 0.6)',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    paddingTop: '12px',
  };

  const usernameStyle: React.CSSProperties = {
    fontSize: '12px',
    fontWeight: '600',
    color: '#ffffff',
  };

  return (
    <div style={containerStyle}>
      {/* Animated background elements */}
      <div
        style={{
          position: 'absolute',
          top: '-50%',
          right: '-50%',
          width: '400px',
          height: '400px',
          background: `radial-gradient(circle, ${accentColor}15 0%, transparent 70%)`,
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-30%',
          left: '-30%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, #1a0a2e99 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={headerStyle}>
          <div style={logoStyle}>degen0x</div>
          <div style={rankBadgeStyle}>#{rank} Rank</div>
        </div>

        {/* Main Content */}
        <div style={mainContentStyle}>
          <div style={xpSectionStyle}>
            <div style={xpNumberStyle}>{xp.toLocaleString()}</div>
            <div style={xpLabelStyle}>XP EARNED</div>
          </div>

          <div style={statsGridStyle}>
            <div style={statBoxStyle}>
              <div style={statNumberStyle}>Lv{level}</div>
              <div style={statLabelStyle}>LEVEL</div>
            </div>
            <div style={statBoxStyle}>
              <div style={{ ...statNumberStyle, color: '#ff6b35' }}>
                🔥{streak}
              </div>
              <div style={statLabelStyle}>STREAK</div>
            </div>
            <div style={statBoxStyle}>
              <div style={statNumberStyle}>{completedCourses}</div>
              <div style={statLabelStyle}>COURSES</div>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div style={badgesStyle}>
          {badges.slice(0, 5).map((badge, i) => (
            <div key={i} style={badgeStyle}>
              {badge}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={footerStyle}>
        <div style={usernameStyle}>{username}</div>
        <div>degen0x.com | Crypto Education</div>
      </div>
    </div>
  );
};
