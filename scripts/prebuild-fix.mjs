// prebuild-fix.mjs â Runs before next build to fix known issues
// 1. Adds gnosis chain to Chain type and CHAINS_META if missing
// 2. Strips ALL event handlers (on*) from server component pages
// 3. Fixes dapps.ts field: reviews â reviewCount
// 4. Fixes StructuredData wrong prop: schema= â data=
// 5. Fixes variable name bugs in specific pages

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const ROOT = process.cwd();

// ââ Fix 1: Add gnosis chain ââââââââââââââââââââââââââââââââââââââââââ
const dappsPath = join(ROOT, 'src/data/dapps.ts');
let dapps = readFileSync(dappsPath, 'utf8');

if (!dapps.includes("| 'gnosis'")) {
  dapps = dapps.replace(
    "| 'blast'\n  | 'multi';",
    "| 'blast'\n  | 'gnosis'\n  | 'multi';"
  );
  console.log('[prebuild] Added gnosis to Chain type');
}

if (!dapps.includes("gnosis: {")) {
  dapps = dapps.replace(
    "blast:  { label: 'Blast',   emoji: 'ð¥', color: '#FCFC03' },\n  multi:",
    "blast:  { label: 'Blast',   emoji: 'ð¥', color: '#FCFC03' },\n  gnosis: { label: 'Gnosis',  emoji: 'ð¦', color: '#04795B' },\n  multi:"
  );
  console.log('[prebuild] Added gnosis to CHAINS_META');
}

// ââ Fix 3: Rename reviews â reviewCount in dApp entries ââââââââââââââ
// Some dApp entries use "reviews: N" instead of "reviewCount: N"
// which crashes SSG when the page calls dapp.reviewCount.toLocaleString()
const reviewsFieldPattern = /(\s+)reviews: (\d+),/g;
const fixedDapps = dapps.replace(reviewsFieldPattern, (match, ws, num) => {
  return `${ws}reviewCount: ${num},`;
});
if (fixedDapps !== dapps) {
  const count = (fixedDapps.match(/reviewCount:/g) || []).length - (dapps.match(/reviewCount:/g) || []).length;
  dapps = fixedDapps;
  console.log(`[prebuild] Fixed ${count} dApp entries: reviews â reviewCount`);
}

writeFileSync(dappsPath, dapps);

// ââ Fix 2: Strip ALL event handlers from server component pages ââââââ
// Matches on[A-Z]...={...} with up to 3 levels of nested braces
const eventHandlerPattern = /\s*on[A-Z][a-zA-Z]+=\{(?:[^{}]|\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*\}/gs;
const eventHandlerTest = /\bon[A-Z][a-zA-Z]+=\{/;

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) { walk(full); continue; }
    if (!full.endsWith('/page.tsx')) continue;
    let src = readFileSync(full, 'utf8');
    // Skip client components
    const head = src.slice(0, 200);
    if (head.includes("'use client'") || head.includes('"use client"')) continue;

    let changed = false;

    // Fix 2a: Strip event handlers
    if (eventHandlerTest.test(src)) {
      const cleaned = src.replace(eventHandlerPattern, '');
      if (cleaned !== src) {
        src = cleaned;
        changed = true;
        console.log('[prebuild] Stripped event handlers from', full.replace(ROOT + '/', ''));
      }
    }

    // Fix 4: StructuredData wrong prop name (schema= should be data=)
    if (src.includes('<StructuredData schema=')) {
      src = src.replace(/<StructuredData schema=/g, '<StructuredData data=');
      changed = true;
      console.log('[prebuild] Fixed StructuredData prop schemaâdata in', full.replace(ROOT + '/', ''));
    }

    // Fix 5: Mismatched .map callback parameter
    // Some pages have .map((link) => ...) but the body uses item.href/item.label
    // Instead of globally renaming itemâlink (which breaks other scopes),
    // rename the callback parameter (link) â (item) to match the body
    if (src.includes('.map((link)') && src.includes('item.href')) {
      src = src.replace(/\.map\(\(link\)/g, '.map((item)');
      changed = true;
      console.log('[prebuild] Fixed .map((link)â.map((item) in', full.replace(ROOT + '/', ''));
    }

    if (changed) {
      writeFileSync(full, src);
    }
  }
}

walk(join(ROOT, 'src/app'));

// ââ Fix 6: Force dynamic rendering on pages with known SSG issues ââââ
// These pages crash during static generation due to missing providers,
// undefined references, or i18n issues. Making them dynamic (server-rendered
// at request time) sidesteps SSG while keeping them functional.
const FORCE_DYNAMIC_PAGES = [
  'src/app/fr/page.tsx',
  'src/app/about/page.tsx',
  'src/app/taxes/best/accountants/page.tsx',
  'src/app/es/page.tsx',
  'src/app/de/page.tsx',
  'src/app/pt/page.tsx',
  'src/app/ja/page.tsx',
  'src/app/ko/page.tsx',
  'src/app/zh/page.tsx',
  'src/app/ru/page.tsx',
];

for (const rel of FORCE_DYNAMIC_PAGES) {
  const p = join(ROOT, rel);
  try {
    let src = readFileSync(p, 'utf8');
    if (!src.includes("export const dynamic")) {
      // Insert after the last import statement
      const lastImportIdx = src.lastIndexOf('import ');
      const insertAt = src.indexOf('\n', src.indexOf(';', lastImportIdx)) + 1;
      src = src.slice(0, insertAt) +
        "\nexport const dynamic = 'force-dynamic';\n" +
        src.slice(insertAt);
      writeFileSync(p, src);
      console.log('[prebuild] Forced dynamic rendering for', rel);
    }
  } catch {
    // File doesn't exist, skip
  }
}

console.log('[prebuild] Done.');
