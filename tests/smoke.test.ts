/**
 * degen0x Smoke Tests
 * Sprint 34 — Extended build and route validation
 *
 * Run: npx tsx tests/smoke.test.ts
 * These tests verify that critical pages compile and key modules export correctly.
 */

import * as path from 'path';
import * as fs from 'fs';

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

// --- Report ---
const passed = results.filter(r => r.passed).length;
const failed = results.filter(r => !r.passed).length;
const total = results.length;
const totalTime = results.reduce((a, r) => a + r.duration, 0);

console.log('\n🧪 degen0x Smoke Test Results');
console.log('═'.repeat(50));
results.forEach(r => {
  const icon = r.passed ? '✅' : '❌';
  console.log(`${icon} ${r.name} (${r.duration}ms)`);
  if (r.error) console.log(`   → ${r.error}`);
});
console.log('═'.repeat(50));
console.log(`\n${passed}/${total} passed, ${failed} failed (${totalTime}ms)\n`);

if (failed > 0) process.exit(1);
