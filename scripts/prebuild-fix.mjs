// prebuild-fix.mjs — Runs before next build to fix known issues
// 1. Adds gnosis chain to Chain type and CHAINS_META if missing
// 2. Strips ALL event handlers (on*) from server component pages

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
    if (!eventHandlerTest.test(src)) continue;
    // Skip client components
    const head = src.slice(0, 200);
    if (head.includes("'use client'") || head.includes('"use client"')) continue;
    const cleaned = src.replace(eventHandlerPattern, '');
    if (cleaned !== src) {
      writeFileSync(full, cleaned);
      console.log('[prebuild] Stripped event handlers from', full.replace(ROOT + '/', ''));
    }
  }
}

walk(join(ROOT, 'src/app'));
console.log('[prebuild] Done.');
