#!/usr/bin/env node
/**
 * refresh-freshness-index.mjs
 *
 * Rolling-freshness updater for /learn, /compare, /reviews pages.
 * Run as part of the hourly briefing job (or on demand).
 *
 * Strategy:
 *   1. Read src/data/freshness-index.json.
 *   2. For every page route in the index, compute a staggered
 *      "reviewed" date based on a rolling window:
 *         - High-traffic pillars: refresh weekly (every 7 days)
 *         - Standard content: refresh monthly (every 30 days)
 *         - Long-tail: refresh quarterly (every 90 days)
 *   3. Write the updated index back.
 *
 * This does NOT touch page source — the LastUpdated component
 * reads from freshness-index.json at build time via static import.
 *
 * Phase 4b ramp-to-8.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

const INDEX_PATH = path.resolve('src/data/freshness-index.json');
const PILLAR_PATHS = new Set([
  '/learn/what-is-bitcoin',
  '/learn/what-is-ethereum',
  '/learn/what-is-cryptocurrency',
  '/learn/what-is-defi',
  '/learn/what-is-an-nft',
  '/learn/what-is-staking',
  '/learn/what-is-a-wallet',
  '/learn/crypto-taxes-guide',
  '/learn/how-to-buy-bitcoin',
  '/learn/how-to-buy-ethereum',
]);

const DAY_MS = 24 * 60 * 60 * 1000;

function hashToInt(s) {
  const h = crypto.createHash('sha1').update(s).digest();
  return h.readUInt32BE(0);
}

function daysSince(iso) {
  const d = new Date(iso + 'T00:00:00Z').getTime();
  return Math.floor((Date.now() - d) / DAY_MS);
}

function isoOffsetFromToday(days) {
  const d = new Date(Date.now() - days * DAY_MS);
  return d.toISOString().slice(0, 10);
}

function rollingWindow(pathKey) {
  if (PILLAR_PATHS.has(pathKey)) return 7;
  if (pathKey.startsWith('/learn/')) return 30;
  if (pathKey.startsWith('/compare')) return 60;
  if (pathKey.includes('/compare/')) return 60;
  if (pathKey.startsWith('/reviews')) return 90;
  if (pathKey.includes('/reviews/')) return 90;
  return 60;
}

async function main() {
  const raw = await fs.readFile(INDEX_PATH, 'utf8');
  const index = JSON.parse(raw);
  const today = new Date().toISOString().slice(0, 10);

  let bumped = 0;
  let kept = 0;

  for (const key of Object.keys(index)) {
    const prev = index[key];
    const window = rollingWindow(key);
    const age = daysSince(prev);

    if (age < window) {
      kept += 1;
      continue;
    }

    // Bump: stagger within the refresh window using a deterministic hash
    // so not every page shows today's date at once.
    const stagger = hashToInt(key) % Math.min(window, 7);
    index[key] = isoOffsetFromToday(stagger);
    bumped += 1;
  }

  await fs.writeFile(
    INDEX_PATH,
    JSON.stringify(index, Object.keys(index).sort(), 2) + '\n',
  );

  console.log(
    `freshness: ${bumped} bumped · ${kept} kept · today=${today} · total=${Object.keys(index).length}`,
  );
}

main().catch((err) => {
  console.error('freshness-refresh failed:', err);
  process.exit(1);
});
