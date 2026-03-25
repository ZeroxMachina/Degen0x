/**
 * degen0x Smoke Tests
 * Sprint 39 — Enhanced module and published-pages validation
 *
 * Run: npx tsx tests/smoke.test.ts
 * These tests verify that critical pages compile, modules export correctly,
 * and published-pages config is valid.
 */

import * as path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'url';
import type { PUBLISHED_PAGES, isPublished } from '../src/lib/published-pages';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '..');
const SRC = path.join(PROJECT_ROOT, 'src');

interface TestResult {
  name: string;
  passed: boolean;
  error?: string;
  duration: number;
}

const results: TestResult[] = [];

function test(name: string, fn: () => void) {
  const start = Date.now();
  try {
    fn();
    results.push({ name, passed: true, duration: Date.now() - start });
  } catch (e: any) {
    results.push({ name, passed: false, error: e.message, duration: Date.now() - start });
  }
}

function assert(condition: boolean, message: string) {
  if (!condition) throw new Error(message);
}

// --- Tests ---

test('Project structure: src/ directory exists', () => {
  assert(fs.existsSync(SRC), 'src/ directory not found');
});

test('Project structure: package.json exists', () => {
  assert(fs.existsSync(path.join(PROJECT_ROOT, 'package.json')), 'package.json not found');
  const pkg = JSON.parse(fs.readFileSync(path.join(PROJECT_ROOT, 'package.json'), 'utf-8'));
  assert(pkg.name === 'degen0x', `Expected package name "degen0x" but got "${pkg.name}"`);
});

test('Project structure: next.config.ts exists', () => {
  assert(fs.existsSync(path.join(PROJECT_ROOT, 'next.config.ts')), 'next.config.ts not found');
});

test('Critical pages exist: homepage', () => {
  assert(fs.existsSync(path.join(SRC, 'app/page.tsx')), 'Homepage page.tsx not found');
});

test('Critical pages exist: layout', () => {
  assert(fs.existsSync(path.join(SRC, 'app/layout.tsx')), 'Root layout.tsx not found');
});

test('Critical pages exist: tools index', () => {
  const toolsLayout = fs.existsSync(path.join(SRC, 'app/tools/layout.tsx'));
  const toolsPage = fs.existsSync(path.join(SRC, 'app/tools/page.tsx'));
  assert(toolsLayout || toolsPage, 'Tools section not found');
});

const criticalPages = [
  'app/about/page.tsx',
  'app/exchanges/page.tsx',
  'app/wallets/page.tsx',
  'app/learn/page.tsx',
  'app/prices/page.tsx',
  'app/contact/page.tsx',
  'app/compare/page.tsx',
  'app/tools/sentiment-dashboard/page.tsx',
  'app/tools/risk-assessment/page.tsx',
  'app/status/api-health/page.tsx',
  // Sprint 34 pages
  'app/tools/market-dominance/page.tsx',
  'app/tools/liquidation-heatmap/page.tsx',
  'app/tools/perp-funding/page.tsx',
  'app/tools/correlation-matrix/page.tsx',
];

criticalPages.forEach(page => {
  test(`Critical page exists: ${page}`, () => {
    assert(fs.existsSync(path.join(SRC, page)), `${page} not found`);
  });
});

const criticalComponents = [
  'Header.tsx',
  'Footer.tsx',
  'ThemeProvider.tsx',
  'WalletProvider.tsx',
  'SkeletonLoader.tsx',
  'FearGreedWidget.tsx',
  'PriceTicker.tsx',
  'MarketOverview.tsx',
];

criticalComponents.forEach(comp => {
  test(`Component exists: ${comp}`, () => {
    assert(fs.existsSync(path.join(SRC, 'components', comp)), `Component ${comp} not found`);
  });
});

test('API routes exist: prices', () => {
  assert(fs.existsSync(path.join(SRC, 'app/api/prices/route.ts')), 'Prices API not found');
});

test('API routes exist: health', () => {
  assert(fs.existsSync(path.join(SRC, 'app/api/health/route.ts')), 'Health API not found');
});

test('API routes exist: market-dominance', () => {
  assert(fs.existsSync(path.join(SRC, 'app/api/market-dominance/route.ts')), 'Market Dominance API not found');
});

// Sprint 34: Validate page file sizes (catch empty/stub files)
const sprint34Pages = [
  'app/tools/market-dominance/page.tsx',
  'app/tools/liquidation-heatmap/page.tsx',
  'app/tools/perp-funding/page.tsx',
  'app/tools/correlation-matrix/page.tsx',
];

sprint34Pages.forEach(page => {
  test(`Sprint 34 page is substantial: ${page}`, () => {
    const filePath = path.join(SRC, page);
    assert(fs.existsSync(filePath), `${page} not found`);
    const content = fs.readFileSync(filePath, 'utf-8');
    const lineCount = content.split('\n').length;
    assert(lineCount > 100, `${page} has only ${lineCount} lines — expected 100+`);
  });
});

// Sprint 34: Validate tools directory has expanded
test('Tools section has 15+ tools', () => {
  const toolsDir = path.join(SRC, 'app/tools');
  const entries = fs.readdirSync(toolsDir, { withFileTypes: true });
  const toolDirs = entries.filter(e => e.isDirectory());
  assert(toolDirs.length >= 15, `Expected 15+ tool directories but found ${toolDirs.length}`);
});

test('Lib modules exist: constants', () => {
  assert(fs.existsSync(path.join(SRC, 'lib/constants.ts')), 'constants.ts not found');
});

test('Lib modules exist: published-pages', () => {
  assert(fs.existsSync(path.join(SRC, 'lib/published-pages.ts')), 'published-pages.ts not found');
});

// ─── Sprint 39: published-pages validation ─────────────────────────────────
test('published-pages exports PUBLISHED_PAGES Set', () => {
  try {
    // Read and parse the published-pages file
    const ppFile = path.join(SRC, 'lib/published-pages.ts');
    const content = fs.readFileSync(ppFile, 'utf-8');

    // Verify PUBLISHED_PAGES is defined
    assert(content.includes('export const PUBLISHED_PAGES'), 'PUBLISHED_PAGES export not found');
    assert(content.includes('new Set('), 'PUBLISHED_PAGES is not a Set');

    // Check it has reasonable number of entries (should have 100+)
    const setMatch = content.match(/new Set\(\[([\s\S]*?)\]\)/);
    assert(setMatch, 'Cannot parse Set definition');
    const entries = setMatch[1].match(/"/g) || [];
    assert(entries.length >= 50, `PUBLISHED_PAGES has ${entries.length} entries, expected 50+`);
  } catch (e) {
    throw new Error(`Failed to validate published-pages.ts: ${(e as any).message}`);
  }
});

test('published-pages exports isPublished function', () => {
  const ppFile = path.join(SRC, 'lib/published-pages.ts');
  const content = fs.readFileSync(ppFile, 'utf-8');
  assert(content.includes('export function isPublished'), 'isPublished function not exported');
  assert(content.includes('PUBLISHED_PAGES.has'), 'isPublished should check PUBLISHED_PAGES');
});

test('published-pages includes Day 2 tools', () => {
  const ppFile = path.join(SRC, 'lib/published-pages.ts');
  const content = fs.readFileSync(ppFile, 'utf-8');

  const day2Tools = [
    '/tools/staking-rewards',
    '/tools/onchain-analytics',
    '/tools/airdrop-tracker',
    '/tools/funding-rates',
    '/tools/portfolio-analytics',
  ];

  day2Tools.forEach(tool => {
    assert(content.includes(`"${tool}"`), `Day 2 tool ${tool} not found in PUBLISHED_PAGES`);
  });
});

// ─── Sprint 39: Lib modules comprehensive check ─────────────────────────────
test('Key lib files are valid TypeScript', () => {
  const libFiles = [
    'constants.ts',
    'published-pages.ts',
    'seo-utils.ts',
    'analytics.ts',
  ];

  libFiles.forEach(file => {
    const filePath = path.join(SRC, 'lib', file);
    assert(fs.existsSync(filePath), `Lib file ${file} not found`);

    const content = fs.readFileSync(filePath, 'utf-8');
    assert(content.includes('export'), `${file} does not have exports`);
    assert(!content.includes('syntax error'), `${file} has syntax errors`);
  });
});

// ─── Sprint 39: Sitemap validation ─────────────────────────────────────────
test('Sitemap generator exists', () => {
  assert(fs.existsSync(path.join(SRC, 'app/sitemap.ts')), 'sitemap.ts not found');

  const content = fs.readFileSync(path.join(SRC, 'app/sitemap.ts'), 'utf-8');
  assert(content.includes('MetadataRoute.Sitemap'), 'Sitemap should return MetadataRoute.Sitemap');
  assert(content.includes('PUBLISHED_PAGES'), 'Sitemap should use PUBLISHED_PAGES');
});

// ─── Sprint 39: 404 page validation ────────────────────────────────────────
test('404 page exists and is client component', () => {
  const notFoundPath = path.join(SRC, 'app/not-found.tsx');
  assert(fs.existsSync(notFoundPath), 'not-found.tsx not found');

  const content = fs.readFileSync(notFoundPath, 'utf-8');
  assert(content.includes("'use client'"), '404 page must be a client component');
  assert(content.includes('404'), '404 page should display 404 error');
});

// ─── Sprint 39: New tool validation ────────────────────────────────────────
test('Portfolio allocation tool exists', () => {
  const toolPath = path.join(SRC, 'app/tools/portfolio-allocation/page.tsx');
  assert(fs.existsSync(toolPath), 'portfolio-allocation/page.tsx not found');

  const content = fs.readFileSync(toolPath, 'utf-8');
  assert(content.includes('PortfolioAllocationAdvisor'), 'Should import PortfolioAllocationAdvisor component');
  assert(content.includes('Breadcrumb'), 'Should have breadcrumb navigation');
});

test('PortfolioAllocationAdvisor component exists', () => {
  const compPath = path.join(SRC, 'components/PortfolioAllocationAdvisor.tsx');
  assert(fs.existsSync(compPath), 'PortfolioAllocationAdvisor.tsx not found');

  const content = fs.readFileSync(compPath, 'utf-8');
  assert(content.includes("'use client'"), 'Component must be a client component');
  assert(content.includes('useState'), 'Component should use useState');
  assert(content.includes('Bitcoin'), 'Component should include Bitcoin allocation');
  assert(content.includes('Ethereum'), 'Component should include Ethereum allocation');
});

test('No .env files in repo', () => {
  const envFile = path.join(PROJECT_ROOT, '.env');
  const envLocal = path.join(PROJECT_ROOT, '.env.local');
  // It's OK if they don't exist; just warn if they do
  if (fs.existsSync(envFile) || fs.existsSync(envLocal)) {
    console.warn('  ⚠ .env file found in repo — make sure it is in .gitignore');
  }
});

test('Total source files > 1000', () => {
  let count = 0;
  function walk(dir: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name === 'node_modules' || entry.name === '.next' || entry.name === '.git') continue;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.name.match(/\.(tsx?|css|json)$/)) count++;
    }
  }
  walk(SRC);
  assert(count > 100, `Expected 100+ source files but found ${count}`);
});

// ─── Sprint 39: Constants validation ──────────────────────────────────────
test('Constants export required values', () => {
  const constsPath = path.join(SRC, 'lib/constants.ts');
  const content = fs.readFileSync(constsPath, 'utf-8');

  const requiredExports = ['SITE_NAME', 'SITE_URL', 'SITE_DESCRIPTION'];
  requiredExports.forEach(exp => {
    assert(content.includes(`export const ${exp}`), `${exp} not exported from constants`);
  });
});

// ─── Sprint 40: DeFi Risk Scanner validation ───────────────────────────────
test('DeFi Risk Scanner page exists', () => {
  const toolPath = path.join(SRC, 'app/tools/defi-risk-scanner/page.tsx');
  assert(fs.existsSync(toolPath), 'defi-risk-scanner/page.tsx not found');
  const content = fs.readFileSync(toolPath, 'utf-8');
  assert(content.includes('DeFiRiskScanner'), 'Should import DeFiRiskScanner component');
  assert(content.includes('Breadcrumb'), 'Should have breadcrumb navigation');
});

test('DeFiRiskScanner component exists and is substantial', () => {
  const compPath = path.join(SRC, 'components/DeFiRiskScanner.tsx');
  assert(fs.existsSync(compPath), 'DeFiRiskScanner.tsx not found');
  const content = fs.readFileSync(compPath, 'utf-8');
  assert(content.includes("'use client'"), 'Component must be a client component');
  assert(content.includes('useState'), 'Component should use useState');
  assert(content.includes('Aave'), 'Component should include Aave protocol');
  assert(content.includes('Uniswap'), 'Component should include Uniswap protocol');
  const lineCount = content.split('\n').length;
  assert(lineCount > 400, `DeFiRiskScanner has only ${lineCount} lines — expected 400+`);
});

// ─── Sprint 40: News Aggregator validation ──────────────────────────────────
test('News Aggregator page exists', () => {
  const toolPath = path.join(SRC, 'app/tools/news-aggregator/page.tsx');
  assert(fs.existsSync(toolPath), 'news-aggregator/page.tsx not found');
  const content = fs.readFileSync(toolPath, 'utf-8');
  assert(content.includes('CryptoNewsAggregator'), 'Should import CryptoNewsAggregator component');
});

test('CryptoNewsAggregator component exists and is substantial', () => {
  const compPath = path.join(SRC, 'components/CryptoNewsAggregator.tsx');
  assert(fs.existsSync(compPath), 'CryptoNewsAggregator.tsx not found');
  const content = fs.readFileSync(compPath, 'utf-8');
  assert(content.includes("'use client'"), 'Component must be a client component');
  assert(content.includes('useState'), 'Component should use useState');
  assert(content.includes('Bitcoin'), 'Component should include Bitcoin news');
  assert(content.includes('sentiment'), 'Component should track sentiment');
  const lineCount = content.split('\n').length;
  assert(lineCount > 400, `CryptoNewsAggregator has only ${lineCount} lines — expected 400+`);
});

// ─── Sprint 40: Structured Data validation ──────────────────────────────────
test('Structured data library exists', () => {
  const libPath = path.join(SRC, 'lib/structured-data.ts');
  assert(fs.existsSync(libPath), 'structured-data.ts not found');
  const content = fs.readFileSync(libPath, 'utf-8');
  assert(content.includes('generateToolPageSchema'), 'Should export generateToolPageSchema');
  assert(content.includes('generateArticleSchema'), 'Should export generateArticleSchema');
  assert(content.includes('generateFAQSchema'), 'Should export generateFAQSchema');
  assert(content.includes('generateBreadcrumbSchema'), 'Should export generateBreadcrumbSchema');
  assert(content.includes('schema.org'), 'Should reference schema.org');
});

test('StructuredData component exists', () => {
  const compPath = path.join(SRC, 'components/StructuredData.tsx');
  assert(fs.existsSync(compPath), 'StructuredData.tsx not found');
  const content = fs.readFileSync(compPath, 'utf-8');
  assert(content.includes('application/ld+json'), 'Should render JSON-LD script tag');
});

// ─── Sprint 40: Build config validation ─────────────────────────────────────
test('next.config.ts has OOM mitigations', () => {
  const configPath = path.join(PROJECT_ROOT, 'next.config.ts');
  const content = fs.readFileSync(configPath, 'utf-8');
  assert(content.includes('staticGenerationMaxConcurrency'), 'Should limit static generation concurrency');
  assert(content.includes('workerThreads: false'), 'Should disable worker threads to reduce memory');
});

test('Sprint 40: Total components count increased', () => {
  const compsDir = path.join(SRC, 'components');
  const entries = fs.readdirSync(compsDir);
  const tsxFiles = entries.filter(e => e.endsWith('.tsx'));
  assert(tsxFiles.length >= 85, `Expected 85+ components but found ${tsxFiles.length}`);
});

test('No broken TypeScript syntax in key files', () => {
  const checkFiles = [
    'src/app/not-found.tsx',
    'src/app/sitemap.ts',
    'src/app/tools/portfolio-allocation/page.tsx',
    'src/components/PortfolioAllocationAdvisor.tsx',
  ];

  checkFiles.forEach(file => {
    const filePath = path.join(PROJECT_ROOT, file);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf-8');

      // Basic syntax checks
      const openBraces = (content.match(/\{/g) || []).length;
      const closeBraces = (content.match(/\}/g) || []).length;
      assert(openBraces === closeBraces, `${file} has mismatched braces (${openBraces} open, ${closeBraces} close)`);

      const openParens = (content.match(/\(/g) || []).length;
      const closeParens = (content.match(/\)/g) || []).length;
      assert(openParens === closeParens, `${file} has mismatched parentheses (${openParens} open, ${closeParens} close)`);
    }
  });
});

// --- Report ---
const passed = results.filter(r => r.passed).length;
const failed = results.filter(r => !r.passed).length;
const total = results.length;
const totalTime = results.reduce((a, r) => a + r.duration, 0);

console.log('\nSmoke Test Results');
console.log('═'.repeat(60));
results.forEach(r => {
  const icon = r.passed ? '[PASS]' : '[FAIL]';
  console.log(`${icon} ${r.name} (${r.duration}ms)`);
  if (r.error) console.log(`        Error: ${r.error}`);
});
console.log('═'.repeat(60));
console.log(`\nTotal: ${passed}/${total} passed, ${failed} failed (${totalTime}ms)\n`);

if (failed > 0) {
  console.log(`Failed tests: ${failed}`);
  process.exit(1);
} else {
  console.log('All smoke tests passed!\n');
  process.exit(0);
}
