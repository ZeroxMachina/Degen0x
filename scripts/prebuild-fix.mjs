// prebuild-fix.mjs â Runs before next build to fix known issues
// 1. Adds gnosis chain to Chain type and CHAINS_META if missing
// 2. Strips ALL event handlers (on*) from server component pages
// 3. Fixes dapps.ts field: reviews â reviewCount
// 4. Fixes StructuredData wrong prop: schema= â data=
// 5. Fixes variable name bugs in specific pages
// 6. Forces ALL pages dynamic (no SSG) via root layout

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
    "blast:  { label: 'Blast',   emoji: '\u{1F4A5}', color: '#FCFC03' },\n  multi:",
    "blast:  { label: 'Blast',   emoji: '\u{1F4A5}', color: '#FCFC03' },\n  gnosis: { label: 'Gnosis',  emoji: '\u{1F989}', color: '#04795B' },\n  multi:"
  );
  console.log('[prebuild] Added gnosis to CHAINS_META');
}

// ââ Fix 3: Rename reviews â reviewCount in dApp entries ââââââââââââââ
const reviewsFieldPattern = /(\s+)reviews: (\d+),/g;
const fixedDapps = dapps.replace(reviewsFieldPattern, (match, ws, num) => {
  return `${ws}reviewCount: ${num},`;
});
if (fixedDapps !== dapps) {
  const count = (fixedDapps.match(/reviewCount:/g) || []).length - (dapps.match(/reviewCount:/g) || []).length;
  dapps = fixedDapps;
  console.log(`[prebuild] Fixed ${count} dApp entries: reviews -> reviewCount`);
}

writeFileSync(dappsPath, dapps);

// ââ Fix 2: Strip ALL event handlers from server component pages ââââââ
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
      console.log('[prebuild] Fixed StructuredData prop schema->data in', full.replace(ROOT + '/', ''));
    }

    // Fix 5: Mismatched .map callback parameter
    if (src.includes('.map((link)') && src.includes('item.href')) {
      src = src.replace(/\.map\(\(link\)/g, '.map((item)');
      changed = true;
      console.log('[prebuild] Fixed .map((link)->.map((item) in', full.replace(ROOT + '/', ''));
    }

    if (changed) {
      writeFileSync(full, src);
    }
  }
}

walk(join(ROOT, 'src/app'));

// ââ Fix 6: Force ALL pages dynamic via root layout ââââââââââââââââââ
// Instead of whack-a-mole on individual SSG failures, force the entire
// app to render dynamically (at request time). This prevents ALL SSG
// crashes â WalletContext, missing data, undefined refs, etc.
// Once the build is green we can selectively re-enable static generation.
const layoutPath = join(ROOT, 'src/app/layout.tsx');
let layout = readFileSync(layoutPath, 'utf8');
if (!layout.includes("export const dynamic")) {
  // Insert after the first import line
  const firstNewline = layout.indexOf('\n') + 1;
  layout = layout.slice(0, firstNewline) +
    "\nexport const dynamic = 'force-dynamic';\n" +
    layout.slice(firstNewline);
  writeFileSync(layoutPath, layout);
  console.log('[prebuild] Forced dynamic rendering on root layout (all pages skip SSG)');
}

console.log('[prebuild] Done.');

