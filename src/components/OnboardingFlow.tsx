'use client';

import { useEffect, useState } from 'react';

type ExperienceLevel = 'beginner' | 'intermediate' | 'degen' | null;
type Interest = 'DeFi' | 'Trading' | 'NFTs' | 'Investing' | 'Tax Help' | 'Research';

export default function OnboardingFlow() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [experienceLevel, setExperienceLevel] = useState<ExperienceLevel>(null);
  const [interests, setInterests] = useState<Interest[]>([]);

  useEffect(() => {
    // Check if user has already been onboarded
    const hasOnboarded = document.cookie
      .split('; ')
      .find((row) => row.startsWith('degen0x_onboarded='));

    if (!hasOnboarded) {
      setIsVisible(true);
      // Trigger animation after mount
      setTimeout(() => setIsAnimating(true), 50);
    }
  }, []);

  const setCookie = (name: string, value: string, days: number = 365) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  };

  const handleSkip = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
      setCookie('degen0x_onboarded', 'true');
    }, 300);
  };

  const handleNext = () => {
    if (currentStep === 2 && !experienceLevel) return;
    if (currentStep === 3 && interests.length === 0) return;

    setIsAnimating(false);
    setTimeout(() => {
      if (currentStep === 3) {
        // Save preferences to cookies before moving to final step
        setCookie('degen0x_experience', experienceLevel || 'beginner');
        setCookie('degen0x_interests', interests.join(','));
      }
      setCurrentStep(currentStep + 1);
      setIsAnimating(true);
    }, 300);
  };

  const handleBack = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setCurrentStep(currentStep - 1);
      setIsAnimating(true);
    }, 300);
  };

  const handleComplete = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
      setCookie('degen0x_onboarded', 'true');
      setCookie('degen0x_experience', experienceLevel || 'beginner');
      setCookie('degen0x_interests', interests.join(','));
    }, 300);
  };

  const toggleInterest = (interest: Interest) => {
    setInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  const getRecommendations = () => {
    const recs: { title: string; description: string; href: string }[] = [];

    if (interests.includes('DeFi')) {
      recs.push({
        title: 'DeFi Tools',
        description: 'Explore yield farming and liquidity pools',
        href: '/tools/defi',
      });
    }

    if (interests.includes('Trading')) {
      recs.push({
        title: 'Trading Signals',
        description: 'Real-time market analysis and alerts',
        href: '/tools/trading',
      });
    }

    if (interests.includes('NFTs')) {
      recs.push({
        title: 'NFT Analytics',
        description: 'Track collections and floor prices',
        href: '/tools/nft',
      });
    }

    if (interests.includes('Investing')) {
      recs.push({
        title: 'Portfolio Tracker',
        description: 'Monitor your investments in real-time',
        href: '/tools/portfolio',
      });
    }

    if (interests.includes('Tax Help')) {
      recs.push({
        title: 'Tax Calculator',
        description: 'Calculate capital gains and losses',
        href: '/tools/tax',
      });
    }

    if (interests.includes('Research')) {
      recs.push({
        title: 'Market Research',
        description: 'In-depth analysis and reports',
        href: '/research',
      });
    }

    // Add experience-based recommendations
    if (experienceLevel === 'beginner') {
      recs.unshift({
        title: 'Beginner Guide',
        description: 'Learn crypto basics from scratch',
        href: '/learn/beginner',
      });
    } else if (experienceLevel === 'degen') {
      recs.push({
        title: 'Advanced Strategies',
        description: 'Leverage, derivatives, and more',
        href: '/strategies/advanced',
      });
    }

    return recs.slice(0, 3);
  };

  if (!isVisible) return null;

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .onboarding-overlay {
          animation: fadeIn 0.4s ease-out;
        }

        .onboarding-modal {
          animation: slideUp 0.5s ease-out;
        }

        .onboarding-content {
          animation: slideDown 0.4s ease-out;
        }

        .onboarding-content.exit {
          animation: slideUp 0.3s ease-in;
        }

        .progress-dot {
          transition: all 0.3s ease;
        }

        .progress-dot.active {
          background-color: #6366f1;
          transform: scale(1.2);
        }

        .progress-dot.completed {
          background-color: #10b981;
        }

        .interest-button {
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .interest-button:hover {
          border-color: #8b949e;
          background-color: rgba(99, 102, 241, 0.1);
        }

        .interest-button.selected {
          background-color: #6366f1;
          border-color: #6366f1;
          color: #ffffff;
        }

        .recommendation-card {
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .recommendation-card:hover {
          transform: translateY(-4px);
          border-color: #6366f1;
          background-color: rgba(99, 102, 241, 0.05);
        }
      `}</style>

      {/* Overlay */}
      <div
        className="onboarding-overlay"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9998,
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          opacity: isAnimating ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
        onClick={handleSkip}
      >
        {/* Modal */}
        <div
          className="onboarding-modal"
          style={{
            backgroundColor: '#0d1117',
            borderRadius: '16px',
            maxWidth: '600px',
            width: '90%',
            maxHeight: '85vh',
            zIndex: 9999,
            position: 'relative',
            border: '1px solid #30363d',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            opacity: isAnimating ? 1 : 0,
            transform: isAnimating ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.3s ease',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with Progress Dots */}
          <div
            style={{
              padding: '24px 32px 16px',
              borderBottom: '1px solid #30363d',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', gap: '8px' }}>
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className="progress-dot"
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#30363d',
                    opacity: step <= currentStep ? 1 : 0.5,
                  }}
                />
              ))}
            </div>
            <button
              onClick={handleSkip}
              style={{
                background: 'none',
                border: 'none',
                color: '#8b949e',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 500,
                transition: 'color 0.2s ease',
                padding: '0',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#e6edf3')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#8b949e')}
            >
              Skip
            </button>
          </div>

          {/* Content */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Step 1: Welcome */}
            {currentStep === 1 && (
              <div className="onboarding-content" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>🚀</div>
                <h1
                  style={{
                    fontSize: '28px',
                    fontWeight: 700,
                    color: '#e6edf3',
                    margin: '0 0 16px 0',
                    letterSpacing: '-0.5px',
                  }}
                >
                  Welcome to degen0x
                </h1>
                <p
                  style={{
                    fontSize: '16px',
                    color: '#8b949e',
                    margin: '0 0 24px 0',
                    lineHeight: '1.6',
                  }}
                >
                  Your ultimate hub for crypto tools, comparisons, and learning. Whether you're just getting started or already deep in the game, we've got everything you need.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                  <div
                    style={{
                      display: 'flex',
                      gap: '12px',
                      alignItems: 'flex-start',
                      padding: '12px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(99, 102, 241, 0.1)',
                      border: '1px solid rgba(99, 102, 241, 0.2)',
                    }}
                  >
                    <span style={{ fontSize: '20px', marginTop: '2px', flexShrink: 0 }}>🛠️</span>
                    <div>
                      <div style={{ color: '#e6edf3', fontWeight: 600, marginBottom: '4px' }}>
                        Powerful Tools
                      </div>
                      <div style={{ color: '#8b949e', fontSize: '14px' }}>
                        DeFi calculators, portfolio trackers, and more
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      gap: '12px',
                      alignItems: 'flex-start',
                      padding: '12px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(99, 102, 241, 0.1)',
                      border: '1px solid rgba(99, 102, 241, 0.2)',
                    }}
                  >
                    <span style={{ fontSize: '20px', marginTop: '2px', flexShrink: 0 }}>⚖️</span>
                    <div>
                      <div style={{ color: '#e6edf3', fontWeight: 600, marginBottom: '4px' }}>
                        Detailed Comparisons
                      </div>
                      <div style={{ color: '#8b949e', fontSize: '14px' }}>
                        Compare exchanges, wallets, and platforms side-by-side
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      gap: '12px',
                      alignItems: 'flex-start',
                      padding: '12px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(99, 102, 241, 0.1)',
                      border: '1px solid rgba(99, 102, 241, 0.2)',
                    }}
                  >
                    <span style={{ fontSize: '20px', marginTop: '2px', flexShrink: 0 }}>📚</span>
                    <div>
                      <div style={{ color: '#e6edf3', fontWeight: 600, marginBottom: '4px' }}>
                        Learn Crypto
                      </div>
                      <div style={{ color: '#8b949e', fontSize: '14px' }}>
                        Educational guides from beginner to advanced
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Experience Level */}
            {currentStep === 2 && (
              <div className="onboarding-content" style={{ display: 'flex', flexDirection: 'column' }}>
                <h2
                  style={{
                    fontSize: '24px',
                    fontWeight: 700,
                    color: '#e6edf3',
                    margin: '0 0 12px 0',
                    letterSpacing: '-0.5px',
                  }}
                >
                  What's your experience level?
                </h2>
                <p
                  style={{
                    fontSize: '14px',
                    color: '#8b949e',
                    margin: '0 0 24px 0',
                    lineHeight: '1.6',
                  }}
                >
                  This helps us personalize your experience and show relevant content.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {['beginner', 'intermediate', 'degen'].map((level) => (
                    <button
                      key={level}
                      onClick={() => setExperienceLevel(level as ExperienceLevel)}
                      style={{
                        padding: '16px',
                        borderRadius: '8px',
                        border: '2px solid #30363d',
                        backgroundColor:
                          experienceLevel === level ? '#6366f1' : '#161b22',
                        color: experienceLevel === level ? '#ffffff' : '#e6edf3',
                        fontSize: '16px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                      }}
                      onMouseEnter={(e) => {
                        if (experienceLevel !== level) {
                          e.currentTarget.style.borderColor = '#8b949e';
                          e.currentTarget.style.backgroundColor = 'rgba(99, 102, 241, 0.1)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (experienceLevel !== level) {
                          e.currentTarget.style.borderColor = '#30363d';
                          e.currentTarget.style.backgroundColor = '#161b22';
                        }
                      }}
                    >
                      <span style={{ fontSize: '20px' }}>
                        {level === 'beginner' && '🌱'}
                        {level === 'intermediate' && '📈'}
                        {level === 'degen' && '🚀'}
                      </span>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span>
                          {level.charAt(0).toUpperCase() + level.slice(1)}
                        </span>
                        <span
                          style={{
                            fontSize: '12px',
                            opacity: 0.7,
                            fontWeight: 400,
                            marginTop: '2px',
                          }}
                        >
                          {level === 'beginner' && 'Just starting out'}
                          {level === 'intermediate' && 'Some experience'}
                          {level === 'degen' && 'Deep in the game'}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Interests */}
            {currentStep === 3 && (
              <div className="onboarding-content" style={{ display: 'flex', flexDirection: 'column' }}>
                <h2
                  style={{
                    fontSize: '24px',
                    fontWeight: 700,
                    color: '#e6edf3',
                    margin: '0 0 12px 0',
                    letterSpacing: '-0.5px',
                  }}
                >
                  What interests you most?
                </h2>
                <p
                  style={{
                    fontSize: '14px',
                    color: '#8b949e',
                    margin: '0 0 24px 0',
                    lineHeight: '1.6',
                  }}
                >
                  Select at least one area to get personalized recommendations.
                </p>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '12px',
                  }}
                >
                  {['DeFi', 'Trading', 'NFTs', 'Investing', 'Tax Help', 'Research'].map(
                    (interest) => (
                      <button
                        key={interest}
                        className="interest-button"
                        onClick={() => toggleInterest(interest as Interest)}
                        style={{
                          padding: '12px',
                          borderRadius: '8px',
                          border: '2px solid #30363d',
                          backgroundColor: interests.includes(interest as Interest)
                            ? '#6366f1'
                            : '#161b22',
                          color: interests.includes(interest as Interest)
                            ? '#ffffff'
                            : '#e6edf3',
                          fontSize: '14px',
                          fontWeight: 600,
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        {interest}
                      </button>
                    )
                  )}
                </div>
              </div>
            )}

            {/* Step 4: Complete */}
            {currentStep === 4 && (
              <div className="onboarding-content" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '48px', marginBottom: '20px', textAlign: 'center' }}>
                  ✨
                </div>
                <h2
                  style={{
                    fontSize: '24px',
                    fontWeight: 700,
                    color: '#e6edf3',
                    margin: '0 0 12px 0',
                    letterSpacing: '-0.5px',
                    textAlign: 'center',
                  }}
                >
                  You're all set!
                </h2>
                <p
                  style={{
                    fontSize: '14px',
                    color: '#8b949e',
                    margin: '0 0 28px 0',
                    lineHeight: '1.6',
                    textAlign: 'center',
                  }}
                >
                  Here are some personalized recommendations based on your preferences.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {getRecommendations().map((rec, idx) => (
                    <a
                      key={idx}
                      href={rec.href}
                      className="recommendation-card"
                      style={{
                        padding: '16px',
                        borderRadius: '8px',
                        border: '1px solid #30363d',
                        backgroundColor: '#161b22',
                        textDecoration: 'none',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                      }}
                    >
                      <div>
                        <div
                          style={{
                            color: '#e6edf3',
                            fontWeight: 600,
                            marginBottom: '4px',
                          }}
                        >
                          {rec.title}
                        </div>
                        <div
                          style={{
                            color: '#8b949e',
                            fontSize: '13px',
                          }}
                        >
                          {rec.description}
                        </div>
                      </div>
                      <span
                        style={{
                          color: '#6366f1',
                          fontSize: '18px',
                          marginLeft: '12px',
                          flexShrink: 0,
                        }}
                      >
                        →
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer with Buttons */}
          <div
            style={{
              padding: '24px 32px',
              borderTop: '1px solid #30363d',
              display: 'flex',
              gap: '12px',
              justifyContent: 'flex-end',
            }}
          >
            {currentStep > 1 && currentStep < 4 && (
              <button
                onClick={handleBack}
                style={{
                  padding: '10px 20px',
                  borderRadius: '6px',
                  border: '1px solid #30363d',
                  backgroundColor: 'transparent',
                  color: '#e6edf3',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#161b22';
                  e.currentTarget.style.borderColor = '#8b949e';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = '#30363d';
                }}
              >
                Back
              </button>
            )}

            {currentStep < 4 && (
              <button
                onClick={handleNext}
                disabled={
                  (currentStep === 2 && !experienceLevel) ||
                  (currentStep === 3 && interests.length === 0)
                }
                style={{
                  padding: '10px 24px',
                  borderRadius: '6px',
                  border: 'none',
                  backgroundColor:
                    (currentStep === 2 && !experienceLevel) ||
                    (currentStep === 3 && interests.length === 0)
                      ? '#30363d'
                      : '#6366f1',
                  color: '#ffffff',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor:
                    (currentStep === 2 && !experienceLevel) ||
                    (currentStep === 3 && interests.length === 0)
                      ? 'not-allowed'
                      : 'pointer',
                  transition: 'all 0.3s ease',
                  opacity:
                    (currentStep === 2 && !experienceLevel) ||
                    (currentStep === 3 && interests.length === 0)
                      ? 0.5
                      : 1,
                }}
                onMouseEnter={(e) => {
                  if (
                    !((currentStep === 2 && !experienceLevel) ||
                    (currentStep === 3 && interests.length === 0))
                  ) {
                    e.currentTarget.style.backgroundColor = '#4f46e5';
                  }
                }}
                onMouseLeave={(e) => {
                  if (
                    !((currentStep === 2 && !experienceLevel) ||
                    (currentStep === 3 && interests.length === 0))
                  ) {
                    e.currentTarget.style.backgroundColor = '#6366f1';
                  }
                }}
              >
                Next
              </button>
            )}

            {currentStep === 4 && (
              <button
                onClick={handleComplete}
                style={{
                  padding: '10px 32px',
                  borderRadius: '6px',
                  border: 'none',
                  backgroundColor: '#10b981',
                  color: '#ffffff',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#059669';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#10b981';
                }}
              >
                Get Started
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
