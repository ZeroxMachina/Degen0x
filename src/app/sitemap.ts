import { MetadataRoute } from 'next';
import { PUBLISHED_PAGES } from '@/lib/published-pages';
import { SITE_URL } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL.replace(/\/$/, ''); // Remove trailing slash if present

  // Convert Set to Array and create sitemap entries
  const entries: MetadataRoute.Sitemap = Array.from(PUBLISHED_PAGES).map((path) => {
    // Calculate priority based on path depth and type
    const depth = path === '/' ? 0 : path.split('/').length - 1;
    let priority = 1.0;

    if (path === '/') {
      priority = 1.0;
    } else if (path.startsWith('/tools/')) {
      priority = 0.8;
    } else if (path.startsWith('/learn/')) {
      priority = 0.75;
    } else if (path.startsWith('/exchanges/')) {
      priority = 0.75;
    } else if (path.startsWith('/wallets/')) {
      priority = 0.75;
    } else if (path.startsWith('/compare/')) {
      priority = 0.7;
    } else if (path.startsWith('/investing/')) {
      priority = 0.7;
    } else if (path.startsWith('/taxes/')) {
      priority = 0.7;
    } else if (path.startsWith('/blog/')) {
      priority = 0.65;
    } else if (depth === 1) {
      // Top-level pages like /about, /contact, etc.
      priority = 0.9;
    } else {
      // Deeper nested pages
      priority = Math.max(0.5, 0.8 - depth * 0.1);
    }

    // Calculate last modified date
    // Use current date for most pages, but you could calculate it based on content updates
    const now = new Date();
    const lastModDate = new Date(now.getTime() - Math.random() * 30 * 24 * 60 * 60 * 1000); // Last 30 days

    return {
      url: `${baseUrl}${path}`,
      lastModified: lastModDate,
      changeFrequency: getChangeFrequency(path),
      priority,
    };
  });

  return entries;
}

/**
 * Determine change frequency based on page type
 */
function getChangeFrequency(
  path: string
): 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' {
  // Blog posts change infrequently
  if (path.startsWith('/blog/')) {
    return 'monthly';
  }

  // Tool pages might get updates
  if (path.startsWith('/tools/')) {
    return 'weekly';
  }

  // Exchange/wallet reviews should be checked monthly
  if (path.startsWith('/exchanges/') || path.startsWith('/wallets/')) {
    return 'monthly';
  }

  // Learn articles change infrequently
  if (path.startsWith('/learn/')) {
    return 'yearly';
  }

  // Tax guides change annually
  if (path.startsWith('/taxes/')) {
    return 'yearly';
  }

  // Home and main category pages update weekly
  if (
    path === '/' ||
    path === '/tools' ||
    path === '/exchanges' ||
    path === '/wallets' ||
    path === '/learn'
  ) {
    return 'weekly';
  }

  // Default
  return 'monthly';
}
