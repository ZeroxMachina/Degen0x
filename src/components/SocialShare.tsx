'use client';

import { useEffect, useState } from 'react';

interface SocialShareProps {
  title: string;
  url?: string;
}

export default function SocialShare({ title, url }: SocialShareProps) {
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [shareCount, setShareCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setIsVisible(true);

    // Mock share count (would come from an API in production)
    setShareCount(Math.floor(Math.random() * 1000) + 100);

    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isClient) return null;

  const pageUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const encodedUrl = encodeURIComponent(pageUrl);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    reddit: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      // Visual feedback would be handled by a toast in a real app
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleShareClick = (link: string) => {
    window.open(link, '_blank', 'width=600,height=400');
  };

  // SVG Icons
  const TwitterIcon = () => (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 9-2 9-2" />
    </svg>
  );

  const RedditIcon = () => (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="1" />
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm5.092 6.21h-2.095a.75.75 0 00-.528.22 2.625 2.625 0 00-2.469 1.575 2.625 2.625 0 00-2.469-1.575.75.75 0 00-.528-.22H6.908a.75.75 0 00-.75.75 3.75 3.75 0 007.5 0 .75.75 0 00-.75-.75z" />
      <path d="M14.5 13.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
      <path d="M18.5 15c1.38 1.38 1.38 3.62 0 5" />
      <path d="M5.5 15c-1.38 1.38-1.38 3.62 0 5" />
    </svg>
  );

  const TelegramIcon = () => (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.02-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.21-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.02-.14-.07-.2-.09-.06-.22-.04-.31-.02-.13.02-2.28 1.45-6.44 4.3-.61.42-1.16.62-1.66.61-.55-.01-1.6-.31-2.38-.57-.96-.3-1.72-.46-1.65-.97.03-.26.28-.53.73-.82 2.87-1.98 4.79-3.28 5.74-3.9 2.73-1.86 3.3-2.18 3.67-2.23.08-.01.27 0 .39.12.1.09.13.23.12.38z" />
    </svg>
  );

  const LinkIcon = () => (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );

  const ShareIcon = () => (
    <svg
      className="w-4 h-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );

  // Desktop version - Left sidebar
  const DesktopVersion = () => (
    <div
      className={`fixed left-0 top-1/2 -translate-y-1/2 z-40 transition-all duration-500 ease-out ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}
    >
      <div className="flex flex-col items-center gap-3 px-4 py-6 rounded-r-2xl backdrop-blur-md border border-r-0"
        style={{
          backgroundColor: 'rgba(13, 17, 23, 0.7)',
          borderColor: 'var(--color-border)',
        }}>
        {/* Share Count Badge */}
        <div className="text-center mb-2">
          <div className="flex items-center justify-center gap-1 text-xs font-semibold" style={{ color: 'var(--color-text-secondary)' }}>
            <ShareIcon />
            <span>{shareCount.toLocaleString()}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-6 h-px" style={{ backgroundColor: 'var(--color-border)' }} />

        {/* Twitter/X Button */}
        <button
          onClick={() => handleShareClick(shareLinks.twitter)}
          className="p-3 rounded-lg transition-all duration-300 hover:scale-110 group"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderColor: 'var(--color-border)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(99, 102, 241, 0.15)';
            e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
            e.currentTarget.style.borderColor = 'var(--color-border)';
          }}
          aria-label="Share on X (Twitter)"
          title="Share on X"
        >
          <span style={{ color: '#E1E8ED' }} className="group-hover:text-indigo-400 transition-colors">
            <TwitterIcon />
          </span>
        </button>

        {/* Reddit Button */}
        <button
          onClick={() => handleShareClick(shareLinks.reddit)}
          className="p-3 rounded-lg transition-all duration-300 hover:scale-110 group"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderColor: 'var(--color-border)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 69, 0, 0.15)';
            e.currentTarget.style.borderColor = 'rgba(255, 69, 0, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
            e.currentTarget.style.borderColor = 'var(--color-border)';
          }}
          aria-label="Share on Reddit"
          title="Share on Reddit"
        >
          <span style={{ color: '#818384' }} className="group-hover:text-orange-400 transition-colors">
            <RedditIcon />
          </span>
        </button>

        {/* Telegram Button */}
        <button
          onClick={() => handleShareClick(shareLinks.telegram)}
          className="p-3 rounded-lg transition-all duration-300 hover:scale-110 group"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderColor: 'var(--color-border)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(0, 136, 204, 0.15)';
            e.currentTarget.style.borderColor = 'rgba(0, 136, 204, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
            e.currentTarget.style.borderColor = 'var(--color-border)';
          }}
          aria-label="Share on Telegram"
          title="Share on Telegram"
        >
          <span style={{ color: '#0088CC' }} className="group-hover:text-cyan-400 transition-colors">
            <TelegramIcon />
          </span>
        </button>

        {/* Copy Link Button */}
        <button
          onClick={copyToClipboard}
          className="p-3 rounded-lg transition-all duration-300 hover:scale-110 group"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderColor: 'var(--color-border)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(34, 197, 94, 0.15)';
            e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
            e.currentTarget.style.borderColor = 'var(--color-border)';
          }}
          aria-label="Copy link to clipboard"
          title="Copy link"
        >
          <span style={{ color: 'var(--color-text-secondary)' }} className="group-hover:text-green-400 transition-colors">
            <LinkIcon />
          </span>
        </button>
      </div>
    </div>
  );

  // Mobile version - Bottom bar
  const MobileVersion = () => (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transition-all duration-500 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div
        className="flex items-center justify-between gap-2 px-4 py-3 backdrop-blur-md border-t"
        style={{
          backgroundColor: 'rgba(13, 17, 23, 0.85)',
          borderColor: 'var(--color-border)',
        }}
      >
        {/* Share Count */}
        <div className="flex items-center gap-1 text-xs font-semibold" style={{ color: 'var(--color-text-secondary)' }}>
          <ShareIcon />
          <span>{shareCount.toLocaleString()}</span>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          {/* Twitter/X Button */}
          <button
            onClick={() => handleShareClick(shareLinks.twitter)}
            className="p-2.5 rounded-lg transition-all duration-300 active:scale-95"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderColor: 'var(--color-border)',
            }}
            aria-label="Share on X (Twitter)"
            title="Share on X"
          >
            <span style={{ color: '#E1E8ED' }}>
              <TwitterIcon />
            </span>
          </button>

          {/* Reddit Button */}
          <button
            onClick={() => handleShareClick(shareLinks.reddit)}
            className="p-2.5 rounded-lg transition-all duration-300 active:scale-95"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderColor: 'var(--color-border)',
            }}
            aria-label="Share on Reddit"
            title="Share on Reddit"
          >
            <span style={{ color: '#818384' }}>
              <RedditIcon />
            </span>
          </button>

          {/* Telegram Button */}
          <button
            onClick={() => handleShareClick(shareLinks.telegram)}
            className="p-2.5 rounded-lg transition-all duration-300 active:scale-95"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderColor: 'var(--color-border)',
            }}
            aria-label="Share on Telegram"
            title="Share on Telegram"
          >
            <span style={{ color: '#0088CC' }}>
              <TelegramIcon />
            </span>
          </button>

          {/* Copy Link Button */}
          <button
            onClick={copyToClipboard}
            className="p-2.5 rounded-lg transition-all duration-300 active:scale-95"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderColor: 'var(--color-border)',
            }}
            aria-label="Copy link to clipboard"
            title="Copy link"
          >
            <span style={{ color: 'var(--color-text-secondary)' }}>
              <LinkIcon />
            </span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {!isMobile && <DesktopVersion />}
      {isMobile && <MobileVersion />}
    </>
  );
}
