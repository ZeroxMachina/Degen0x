// prebuild-fix.mjs — Runs before next build to fix known issues
// 1. Adds gnosis chain to Chain type and CHAINS_META if missing
// 2. Strips ALL event handlers (on*) from server component pages
// 3. Fixes dapps.ts field: reviews → reviewCount
// 4. Fixes StructuredData wrong prop: schema= → data=
// 5. Fixes variable name bugs in specific pages

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const ROOT = process.cwd();

// ── Fix 1: Add gnosis chain ──────────────────────────────────────────
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
    "blast:  { label: 'Blast',   emoji: '💥', color: '#FCFC03' },\n  multi:",
    "blast:  { label: 'Blast',   emoji: '💥', color: '#FCFC03' },\n  gnosis: { label: 'Gnosis',  emoji: '🦉', color: '#04795B' },\n  multi:"
  );
  console.log('[prebuild] Added gnosis to CHAINS_META');
}

// ── Fix 3: Rename reviews → reviewCount in dApp entries ──────────────
// Some dApp entries use "reviews: N" instead of "reviewCount: N"
// which crashes SSG when the page calls dapp.reviewCount.toLocaleString()
const reviewsFieldPattern = /(\s+)reviews: (\d+),/g;
const fixedDapps = dapps.replace(reviewsFieldPattern, (match, ws, num) => {
  return `${ws}reviewCount: ${num},`;
});
if (fixedDapps !== dapps) {
  const count = (fixedDapps.match(/reviewCount:/g) || []).length - (dapps.match(/reviewCount:/g) || []).length;
  dapps = fixedDapps;
  console.log(`[prebuild] Fixed ${count} dApp entries: reviews → reviewCount`);
}

writeFileSync(dappsPath, dapps);

// ── Fix 2: Strip ALL event handlers from server component pages ──────
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
      console.log('[prebuild] Fixed StructuredData prop schema→data in', full.replace(ROOT + '/', ''));
    }

    // Fix 5: Variable name bugs — item.href in .map((link) => ...)
    // Catches cases where .map callback uses "link" but body uses "item.href"
    if (src.includes('.map((link)') && src.includes('item.href')) {
      src = src.replace(/\bitem\.href\b/g, 'link.href');
      src = src.replace(/\bitem\.label\b/g, 'link.label');
      changed = true;
      console.log('[prebuild] Fixed item→link variable reference in', full.replace(ROOT + '/', ''));
    }

    if (changed) {
      writeFileSync(full, src);
    }
  }
}

walk(join(ROOT, 'src/app'));
console.log('[prebuild] Done.');
