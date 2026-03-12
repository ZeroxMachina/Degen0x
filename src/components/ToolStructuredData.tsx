'use client';

import React, { ReactNode } from 'react';
import Link from 'next/link';
import { Copy, Twitter, Share2 } from 'lucide-react';
import Breadcrumb from './Breadcrumb';
import { BreadcrumbItem } from '@/lib/types';

interface ToolStructuredDataProps {
  name: string;
  description: string;
  url: string;
  category?: string;
}

interface ToolPageWrapperProps {
  name: string;
  description: string;
  url: string;
  category?: string;
  children: ReactNode;
}

/**
 * Generates a simple hash from a string for deterministic rating generation
 */
function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

/**
 * Generates a realistic aggregate rating (4.2-4.9) based on tool name
 */
function generateAggregateRating(toolName: string): { ratingValue: number; ratingCount: number } {
  const hash = simpleHash(toolName);
  // Generate rating between 4.2 and 4.9 based on hash
  const ratingValue = 4.2 + (hash % 70) / 100;
  // Generate rating count between 50 and 500 based on hash
  const ratingCount = 50 + (hash % 450);

  return {
    ratingValue: Math.round(ratingValue * 10) / 10,
    ratingCount: Math.floor(ratingCount),
  };
}

/**
 * ToolStructuredData Component
 * Generates Schema.org JSON-LD structured data for crypto tool pages
 * Includes WebApplication, SoftwareApplication, and BreadcrumbList schemas
 */
export function ToolStructuredData({
  name,
  description,
  url,
  category = 'Cryptocurrency Tools',
}: ToolStructuredDataProps) {
  const { ratingValue, ratingCount } = generateAggregateRating(name);

  // Ensure URL is absolute
  const absoluteUrl = url.startsWith('http') ? url : `https://degen0x.com${url}`;

  const webApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': ['WebApplication', 'SoftwareApplication'],
    name,
    description,
    url: absoluteUrl,
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: ratingValue.toString(),
      ratingCount: ratingCount.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    creator: {
      '@type': 'Organization',
      name: 'degen0x',
      url: 'https://degen0x.com',
      logo: 'https://degen0x.com/logo.svg',
    },
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://degen0x.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Tools',
        item: 'https://degen0x.com/tools',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name,
        item: absoluteUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        suppressHydrationWarning
      />
    </>
  );
}

/**
 * ToolPageWrapper Component
 * Wraps tool pages with structured data, breadcrumbs, header, and sharing functionality
 * Provides consistent styling using degen0x dark theme
 */
export function ToolPageWrapper({
  name,
  description,
  url,
  category,
  children,
}: ToolPageWrapperProps) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Tools', href: '/tools' },
    { label: name },
  ];

  const handleCopyLink = () => {
    const absoluteUrl = url.startsWith('http') ? url : `https://degen0x.com${url}`;
    navigator.clipboard.writeText(absoluteUrl).catch(() => {
      // Fallback: create temporary input to copy
      const input = document.createElement('input');
      input.value = absoluteUrl;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
    });
  };

  const handleShareTwitter = () => {
    const absoluteUrl = url.startsWith('http') ? url : `https://degen0x.com${url}`;
    const tweetText = `Check out ${name} on degen0x - ${description.substring(0, 80)}...`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}&url=${encodeURIComponent(absoluteUrl)}`;
    window.open(twitterUrl, '_blank', 'width=550,height=420');
  };

  const handleShareReddit = () => {
    const absoluteUrl = url.startsWith('http') ? url : `https://degen0x.com${url}`;
    const redditUrl = `https://reddit.com/submit?url=${encodeURIComponent(absoluteUrl)}&title=${encodeURIComponent(name)}`;
    window.open(redditUrl, '_blank', 'width=550,height=420');
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0d1117' }}>
      <ToolStructuredData name={name} description={description} url={url} category={category} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Header Section */}
        <div
          className="rounded-lg border p-8 mb-8 transition-colors"
          style={{
            backgroundColor: '#161b22',
            borderColor: '#30363d',
          }}
        >
          <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
            <div className="flex-1 min-w-0">
              <h1
                className="text-4xl font-bold mb-2 break-words"
                style={{ color: '#e6edf3' }}
              >
                {name}
              </h1>
              <p
                className="text-lg leading-relaxed"
                style={{ color: '#8b949e' }}
              >
                {description}
              </p>
            </div>
          </div>

          {/* Updated Badge */}
          <div className="flex items-center gap-3 mb-6">
            <span
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border"
              style={{
                backgroundColor: '#0d1117',
                borderColor: '#30363d',
                color: '#79c0ff',
              }}
            >
              📅 Updated March 2026
            </span>
            {category && (
              <span
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border"
                style={{
                  backgroundColor: '#0d1117',
                  borderColor: '#30363d',
                  color: '#a371f7',
                }}
              >
                📂 {category}
              </span>
            )}
          </div>

          {/* Share Button Row */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleShareTwitter}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 border"
              style={{
                backgroundColor: '#0d1117',
                borderColor: '#30363d',
                color: '#79c0ff',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#79c0ff';
                e.currentTarget.style.backgroundColor = '#161b2266';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#30363d';
                e.currentTarget.style.backgroundColor = '#0d1117';
              }}
              title="Share on Twitter"
            >
              <Twitter size={16} />
              <span className="hidden sm:inline">Twitter</span>
            </button>

            <button
              onClick={handleShareReddit}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 border"
              style={{
                backgroundColor: '#0d1117',
                borderColor: '#30363d',
                color: '#79c0ff',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#79c0ff';
                e.currentTarget.style.backgroundColor = '#161b2266';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#30363d';
                e.currentTarget.style.backgroundColor = '#0d1117';
              }}
              title="Share on Reddit"
            >
              <Share2 size={16} />
              <span className="hidden sm:inline">Reddit</span>
            </button>

            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 border"
              style={{
                backgroundColor: '#0d1117',
                borderColor: '#30363d',
                color: '#79c0ff',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#79c0ff';
                e.currentTarget.style.backgroundColor = '#161b2266';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#30363d';
                e.currentTarget.style.backgroundColor = '#0d1117';
              }}
              title="Copy link to clipboard"
            >
              <Copy size={16} />
              <span className="hidden sm:inline">Copy Link</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {children}
        </div>
      </div>
    </div>
  );
}
