'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

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

interface Notification {
  id: number;
  text: string;
  icon: string;
  time: string;
  read: boolean;
  category: 'price' | 'streak' | 'content' | 'quiz' | 'whale' | 'achievement';
}

export default function NotificationsClient() {
  const [connected, setConnected] = useState(true);
  const [subscriptions, setSubscriptions] = useState({
    priceAlerts: true,
    streakReminders: true,
    newContent: true,
    quizAlerts: true,
    whaleAlerts: true,
    achievements: true,
  });
  const [notificationMethods, setNotificationMethods] = useState({
    inApp: true,
    email: true,
    browserPush: true,
  });
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      text: 'ETH crossed $3,800 — your price alert triggered',
      icon: '📈',
      time: '2 min ago',
      read: false,
      category: 'price',
    },
    {
      id: 2,
      text: "You're on a 7-day streak! Keep it up for 2× XP tomorrow 🔥",
      icon: '🔥',
      time: '1 hour ago',
      read: false,
      category: 'streak',
    },
    {
      id: 3,
      text: 'New guide: How to Use Morpho Blue for 30% Better Lending Rates',
      icon: '📚',
      time: '3 hours ago',
      read: false,
      category: 'content',
    },
    {
      id: 4,
      text: 'New Chainlink quiz available — earn +130 XP',
      icon: '🧠',
      time: '5 hours ago',
      read: false,
      category: 'quiz',
    },
    {
      id: 5,
      text: '🐋 Whale Alert: $45M USDC moved from Binance to Aave',
      icon: '🐋',
      time: '6 hours ago',
      read: false,
      category: 'whale',
    },
    {
      id: 6,
      text: 'Achievement unlocked: DeFi Explorer 🏆 — visited 5 ecosystem apps',
      icon: '🏆',
      time: 'Yesterday',
      read: true,
      category: 'achievement',
    },
    {
      id: 7,
      text: 'BTC crossed $95,000 — your price alert triggered',
      icon: '📈',
      time: 'Yesterday',
      read: true,
      category: 'price',
    },
    {
      id: 8,
      text: 'New course chapter: Advanced Yield Strategies — Chapter 4',
      icon: '📚',
      time: '2 days ago',
      read: true,
      category: 'content',
    },
  ]);

  const toggleSubscription = (key: keyof typeof subscriptions) => {
    setSubscriptions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleNotificationMethod = (key: keyof typeof notificationMethods) => {
    setNotificationMethods((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const subscriptionOptions = [
    {
      key: 'priceAlerts',
      emoji: '📈',
      label: 'Price Alerts',
      description: 'ETH, BTC, your portfolio tokens cross price targets',
    },
    {
      key: 'streakReminders',
      emoji: '🔥',
      label: 'Streak Reminders',
      description: 'daily learning streak at risk',
    },
    {
      key: 'newContent',
      emoji: '📚',
      label: 'New Content',
      description: 'new guides, articles, courses published',
    },
    {
      key: 'quizAlerts',
      emoji: '🧠',
      label: 'Quiz Alerts',
      description: 'new quizzes available for XP',
    },
    {
      key: 'whaleAlerts',
      emoji: '🐋',
      label: 'Whale Alerts',
      description: 'large on-chain movements > $10M',
    },
    {
      key: 'achievements',
      emoji: '🏆',
      label: 'Achievement Unlocked',
      description: 'you earned a badge or level up',
    },
  ];

  return (
    <div style={{ backgroundColor: S.bg, color: S.text, minHeight: '100vh', padding: '2rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Notifications" },
          ]}
        />
        {/* Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            🔔 Notifications
          </h1>
          <p style={{ color: S.text2 }}>Stay updated on your crypto learning journey</p>
        </div>

        {/* Wallet Connection Section */}
        {!connected ? (
          <div
            style={{
              backgroundColor: S.surface2,
              border: `1px solid ${S.border}`,
              borderRadius: '12px',
              padding: '1.5rem',
              marginBottom: '2rem',
              textAlign: 'center',
            }}
          >
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.75rem' }}>
              Connect Wallet to Enable Push Notifications
            </h3>
            <p style={{ color: S.text2, marginBottom: '1rem' }}>
              Connect your wallet to receive real-time notifications
            </p>
            <button
              onClick={() => setConnected(true)}
              style={{
                backgroundColor: S.blue,
                color: S.bg,
                border: 'none',
                borderRadius: '8px',
                padding: '0.75rem 1.5rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Connect Wallet
            </button>
          </div>
        ) : (
          <div
            style={{
              backgroundColor: S.surface2,
              border: `1px solid ${S.border}`,
              borderRadius: '12px',
              padding: '1rem',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}
          >
            <span style={{ color: S.green, fontSize: '1.25rem' }}>✓</span>
            <span style={{ color: S.text2 }}>Wallet connected • Push notifications enabled</span>
          </div>
        )}

        {/* Subscription Settings */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>
            Channel Subscriptions
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1rem',
            }}
          >
            {subscriptionOptions.map((option) => (
              <div
                key={option.key}
                onClick={() => toggleSubscription(option.key as keyof typeof subscriptions)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleSubscription(option.key as keyof typeof subscriptions);
                  }
                }}
                role="checkbox"
                tabIndex={0}
                aria-checked={subscriptions[option.key as keyof typeof subscriptions]}
                aria-label={`${option.label} subscription toggle`}
                style={{
                  backgroundColor: S.surface,
                  border: `2px solid ${
                    subscriptions[option.key as keyof typeof subscriptions]
                      ? S.blue
                      : S.border
                  }`,
                  borderRadius: '10px',
                  padding: '1.25rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                  <div>
                    <span style={{ fontSize: '1.75rem', marginRight: '0.5rem' }}>
                      {option.emoji}
                    </span>
                    <h3 style={{ fontWeight: 600, marginBottom: '0.25rem', display: 'inline' }}>
                      {option.label}
                    </h3>
                    <p style={{ color: S.text2, fontSize: '0.875rem' }}>{option.description}</p>
                  </div>
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: subscriptions[option.key as keyof typeof subscriptions]
                        ? S.blue
                        : S.border,
                      border: `2px solid ${
                        subscriptions[option.key as keyof typeof subscriptions]
                          ? S.blue
                          : S.border
                      }`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {subscriptions[option.key as keyof typeof subscriptions] && (
                      <span style={{ color: S.bg, fontWeight: 700 }}>✓</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notification Inbox */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>
              Inbox ({notifications.filter((n) => !n.read).length} unread)
            </h2>
            {notifications.length > 0 && (
              <button
                onClick={markAllAsRead}
                style={{
                  backgroundColor: 'transparent',
                  color: S.blue,
                  border: `1px solid ${S.blue}`,
                  borderRadius: '6px',
                  padding: '0.5rem 1rem',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Mark all as read
              </button>
            )}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {notifications.length === 0 ? (
              <div style={{ color: S.text2, textAlign: 'center', padding: '2rem', fontSize: '0.875rem' }}>
                No notifications yet
              </div>
            ) : (
              notifications.map((notif) => (
                <div
                  key={notif.id}
                  role="button"
                  tabIndex={0}
                  aria-label={`${notif.read ? '' : 'Unread: '}${notif.text} — ${notif.time}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setNotifications((prev) =>
                        prev.map((n) => (n.id === notif.id ? { ...n, read: true } : n))
                      );
                    }
                  }}
                  onClick={() => {
                    setNotifications((prev) =>
                      prev.map((n) => (n.id === notif.id ? { ...n, read: true } : n))
                    );
                  }}
                  style={{
                    backgroundColor: notif.read ? S.surface : S.surface2,
                    border: `1px solid ${notif.read ? S.border : S.blue}30`,
                    borderRadius: '8px',
                    padding: '1rem',
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'start',
                    cursor: 'pointer',
                    transition: 'background-color 0.15s ease',
                  }}
                >
                <span style={{ fontSize: '1.5rem', minWidth: '32px' }}>{notif.icon}</span>
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      color: S.text,
                      fontWeight: notif.read ? 400 : 500,
                      marginBottom: '0.25rem',
                    }}
                  >
                    {notif.text}
                  </p>
                  <p style={{ color: S.text2, fontSize: '0.875rem' }}>{notif.time}</p>
                </div>
                {!notif.read && (
                  <div
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: S.blue,
                      marginTop: '0.5rem',
                    }}
                  />
                )}
                </div>
              ))
            )}
          </div>
        </div>

        {/* Notification Settings */}
        <div
          style={{
            backgroundColor: S.surface,
            border: `1px solid ${S.border}`,
            borderRadius: '10px',
            padding: '1.5rem',
          }}
        >
          <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem' }}>
            Notification Settings
          </h3>
          <p style={{ color: S.text2, marginBottom: '1rem', fontSize: '0.875rem' }}>
            Choose how you receive notifications
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {[
              { key: 'inApp', label: 'In-app' },
              { key: 'email', label: 'Email' },
              { key: 'browserPush', label: 'Browser Push' },
            ].map(({ key, label }) => (
              <label
                key={label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  color: S.text2,
                }}
              >
                <input
                  type="checkbox"
                  checked={notificationMethods[key as keyof typeof notificationMethods]}
                  onChange={() => toggleNotificationMethod(key as keyof typeof notificationMethods)}
                  style={{ width: '20px', height: '20px', cursor: 'pointer', minWidth: '20px', minHeight: '20px' }}
                />
                <span>{label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
