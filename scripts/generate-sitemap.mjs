#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://degen0x.com';
const APP_DIR = path.join(__dirname, '../src/app');
const OUT_DIR = path.join(__dirname, '../out');
const PUBLIC_DIR = path.join(__dirname, '../public');

// Category configuration
const categoryConfig = {
  '': { priority: 1.0, changefreq: 'daily', label: 'home' },
  'about': { priority: 0.8, changefreq: 'monthly', label: 'about' },
  'contact': { priority: 0.7, changefreq: 'monthly', label: 'contact' },
  'prices': { priority: 0.9, changefreq: 'daily', label: 'tools' },
  'token': { priority: 0.9, changefreq: 'daily', label: 'tools' },
  'learn': { priority: 0.8, changefreq: 'weekly', label: 'learn' },
  'compare': { priority: 0.7, changefreq: 'weekly', label: 'compare' },
  'exchange': { priority: 0.9, changefreq: 'daily', label: 'tools' },
  'wallet': { priority: 0.8, changefreq: 'weekly', label: 'tools' },
  'crypto-cards': { priority: 0.85, changefreq: 'weekly', label: 'tools' },
  'mining': { priority: 0.8, changefreq: 'weekly', label: 'tools' },
  'staking': { priority: 0.8, changefreq: 'weekly', label: 'tools' },
  'nft': { priority: 0.7, changefreq: 'weekly', label: 'tools' },
};

function getCategory(filePath) {
  // Extract category from path like /learn/what-is-ethereum -> 'learn'
  const relativePath = path.relative(APP_DIR, filePath);
  const parts = relativePath.split(path.sep);

  // Handle root page
  if (parts.length === 1) {
    return '';
  }

  // Return first segment as category
  return parts[0];
}

function getCategoryConfig(category) {
  // Try exact match first
  if (categoryConfig[category]) {
    return categoryConfig[category];
  }

  // Try prefix match (e.g., 'crypto-cards' matches 'crypto-cards/*')
  for (const [key, config] of Object.entries(categoryConfig)) {
    if (category.startsWith(key) && key !== '') {
      return config;
    }
  }

  // Default config
  return { priority: 0.7, changefreq: 'weekly', label: 'page' };
}

function pathToUrl(filePath) {
  // Remove APP_DIR and page.tsx to get route
  let relativePath = path.relative(APP_DIR, filePath);
  relativePath = relativePath.replace(/page\.tsx$/, '');
  relativePath = relativePath.replace(/\\/g, '/'); // Windows path fix

  // Remove trailing slash for root
  if (relativePath === '') {
    return BASE_URL + '/';
  }

  return BASE_URL + '/' + relativePath;
}

function scanPages(dir, pages = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      scanPages(fullPath, pages);
    } else if (entry.name === 'page.tsx') {
      pages.push(fullPath);
    }
  }

  return pages;
}

function generateSitemap(pages) {
  const today = new Date().toISOString().split('T')[0];

  const urls = pages
    .sort()
    .map(pagePath => {
      const url = pathToUrl(pagePath);
      const category = getCategory(pagePath);
      const config = getCategoryConfig(category);

      return {
        loc: url,
        lastmod: today,
        changefreq: config.changefreq,
        priority: config.priority
      };
    });

  // Build XML
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  for (const urlEntry of urls) {
    xml += '  <url>\n';
    xml += `    <loc>${escapeXml(urlEntry.loc)}</loc>\n`;
    xml += `    <lastmod>${urlEntry.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${urlEntry.changefreq}</changefreq>\n`;
    xml += `    <priority>${urlEntry.priority}</priority>\n`;
    xml += '  </url>\n';
  }

  xml += '</urlset>\n';

  return { xml, urls };
}

function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

async function main() {
  try {
    // Ensure directories exist
    if (!fs.existsSync(OUT_DIR)) {
      fs.mkdirSync(OUT_DIR, { recursive: true });
    }
    if (!fs.existsSync(PUBLIC_DIR)) {
      fs.mkdirSync(PUBLIC_DIR, { recursive: true });
    }

    // Scan for all page.tsx files
    console.log('Scanning for page.tsx files...');
    const pages = scanPages(APP_DIR);

    // Generate sitemap
    console.log(`Found ${pages.length} pages. Generating sitemap...`);
    const { xml, urls } = generateSitemap(pages);

    // Write to out directory
    const outPath = path.join(OUT_DIR, 'sitemap.xml');
    fs.writeFileSync(outPath, xml, 'utf-8');
    console.log(`✓ Written to ${outPath}`);

    // Write to public directory
    const publicPath = path.join(PUBLIC_DIR, 'sitemap.xml');
    fs.writeFileSync(publicPath, xml, 'utf-8');
    console.log(`✓ Written to ${publicPath}`);

    // Print summary
    console.log('\n--- Sitemap Summary ---');
    console.log(`Total URLs: ${urls.length}`);

    // Group by priority
    const byPriority = {};
    urls.forEach(u => {
      if (!byPriority[u.priority]) byPriority[u.priority] = 0;
      byPriority[u.priority]++;
    });

    console.log('\nBy Priority:');
    Object.entries(byPriority)
      .sort((a, b) => b[0] - a[0])
      .forEach(([priority, count]) => {
        console.log(`  ${priority}: ${count} URLs`);
      });

    console.log('\n✓ Sitemap generation complete!');

  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

main();
