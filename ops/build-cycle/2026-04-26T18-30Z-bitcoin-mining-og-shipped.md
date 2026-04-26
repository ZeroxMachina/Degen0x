# Build Cycle Report — 2026-04-26T18:30Z (Hour 18)

**Runner:** `degen-build-cycle` scheduled task (Claude Opus 4.7)
**Session:** sandboxed; file-tools only, no `git push`
**HEAD entering cycle:** `5ee551e37` — *design: sec-cftc-ruling polish — fix 4 unstyled related-resource cards, add TOC href+focus-visible, remove duplicate footer disclaimer* (Jefe direct, 17:33:36Z, 56 minutes ago entering cycle).
**Cycle outcome:** SHIPPED — single asset rewritten, single page metadata edit, NO `git push`, gated for Plan-B reset cherry-pick. **5th consecutive build-cycle ship** (Hour 14 BUIDL → Hour 15 scam-protection → Hour 16 eth-etf-staking → Hour 17 sec-cftc-ruling → this).

---

## What shipped

**`public/og-bitcoin-mining-profitability-guide-2026.svg`** — rewritten in place, **7,573 bytes**, 96 lines, well-formed XML (xmllint OK), 1200×630.

This is the **mining-cluster** OG card and the 5th member of the slug-specific OG family — joining BUIDL (treasury), scam-protection (security), eth-etf-staking (staking), and sec-cftc-ruling (regulation). The cluster spread now covers five of the most-shared content areas on the site. Mining is the new "industrial / PoW / energy economics" cluster, opening a palette family explicitly distinct from the four prior.

**`src/app/learn/bitcoin-mining-profitability-guide-2026/page.tsx`** — 2 metadata edits, `.png` → `.svg`. Lines 31 (`openGraph.images[0].url`) and 42 (`twitter.images[0]`). The page previously referenced an asset that didn't exist on disk under that path; the rewrite swaps to the `.svg` we just authored, which now serves both refs. No JSX, no imports, no logic touched — metadata-only.

This 2-file, 1-commit ship unblocks **2 OG metadata refs** in one ship. Lower per-ship leverage than Hours 14–17 (each unblocked 3 refs because their pages had `articleStructuredData.image` blocks alongside the openGraph + twitter pair); this page does not have a JSON-LD article block, so the leverage is intrinsically capped at 2. The cluster-opener-value (Bitcoin/mining) was the deciding factor — see § Why this was the highest-leverage candidate below.

### Design (cluster-distinct; mining palette diverges from treasury, security, staking, and regulation clusters)

- **Palette anchor:** **Bitcoin-canonical orange `#f7931a`** — deliberately the canonical bitcoin.org orange, instantly identifiable as the Bitcoin brand color in a feed, and verifiably used in **zero** of the four prior cluster gradients (BUIDL, scam-protection, eth-etf-staking, sec-cftc-ruling all confirmed via grep on hex codes). Companion stops: **`#fbbf24` (amber-400)** for highlights/glyphs, **`#b45309` (amber-700/copper)** for secondary gradient stop, **`#52525b` (zinc-600)** as graphite for the "ASIC hardware" greyscale family, plus stone-warm dark base `#0c0a09` → `#1c1917` (stone-950→stone-900). The stone-warm bg is also unique vs the four prior bgs (which are all cool-blue/red dominant), giving the mining card a "foundry / ironworks / industrial" feel without any explicit imagery requiring trademark hygiene.
- **Palette distinctness verified vs all 4 prior clusters** (gradient-stop scan via grep -ohE '#[0-9a-fA-F]\{6\}'):
  - BUIDL (treasury): `#06b6d4 #070b18 #0891b2 #0e1426 #1e3a8a #6366f1 #64748b #8b949e #b88a1a #cbd5e1 #d4a017 #f4cf5a #ffffff` (slate-cyan + golds)
  - scam-protection (security): `#0a0610 #180c14 #6b7280 #7f1d1d #991b1b #9ca3af #d97706 #dc2626 #f59e0b #f87171 #fca5a5 #fecaca #fef3c7 #ffffff` (deep-red + amber)
  - eth-etf-staking (staking): `#070b18 #0e1426 #10b981 #34d399 #6366f1 #64748b #8b5cf6 #8b949e #a78bfa #cbd5e1 #ffffff` (indigo+violet+emerald)
  - sec-cftc-ruling (regulation): `#060b1a #0a1428 #0d9488 #16a34a #1e293b #1e40af #22c55e #475569 #5eead4 #64748b #94a3b8 #cbd5e1 #ffffff` (slate-blue + teal + ledger-green + steel-grays)
  - **bitcoin-mining (mining): `#0c0a09 #1c1917 #27272a #3f3f46 #52525b #78716c #a8a29e #b45309 #cbd5e1 #e7e5e4 #f7931a #fbbf24`** (Bitcoin-orange + amber + copper + stone/zinc graphite)
  - **Anchor distinctness:** `#f7931a` and `#fbbf24` and `#b45309` appear in zero prior cluster gradients. `#cbd5e1` (slate-300) is shared with three prior clusters but is a generic neutral text color across all clusters and is not brand-distinctive at a feed render. Stone-warm bg (`#0c0a09 #1c1917`) is unique vs the four cool/dark bgs of prior clusters.
  - **Visual cluster signature:** the orange/amber/copper/graphite mining card will read instantly different from the slate-cyan/gold (BUIDL), red/amber (scam), indigo/violet/emerald (staking), and slate-blue/teal/green (regulation) cards in any feed lineup.
- **Topical motif (right third, opacity 0.42):** **3×5 ASIC chip array** with chip outlines + LED indicators (industrial PoW visual cue, no manufacturer name or logo) + **hashrate sparkline** (ascending — post-halving recovery framing, neutral framing not a price prediction) + **halving block-reward indicator** showing 6.25 → 3.125 BTC transition (a fixed historical fact: the April 2024 halving #4 dropped the block reward from 6.25 to 3.125 BTC, durable until ~2028). Restrained at 0.42 opacity so the title remains the eye anchor.
- **Typography:** Inter / Helvetica fallback. **62px** bold title (matching Hour 14–17 hierarchy), 28px subtitle, 17px detail strip, 15px italic tagline, 13px badges, 14px brand mark. Identical hierarchy to all 4 prior ships — keeps the cluster visually coherent.
- **Subtitle copy:** "Post-halving economics — hardware, energy, and ROI." Editorial framing, not a forecast or yield claim. Matches the page's central editorial framing.
- **Detail strip:** "Block reward 3.125 BTC · ASIC efficiency · Electricity cost · Pool vs solo" — four taxonomy items, each one is also a section in the page body. **Avoided pinning specific difficulty number** (e.g., 155.9T in the prior generic SVG) because difficulty resets every ~2 weeks; pinning a snapshot would age out before the asset does. Block reward 3.125 BTC is durable until the next halving (~April 2028).
- **Tagline:** "A 2026 playbook for hashrate, hardware, and energy economics." Editorial voice, on-brand, no outcome claims.
- **Year badge:** "2026" inside an orange-filled chip — gives the freshness cue at a glance, matches the dated convention of BUIDL + eth-etf-staking + sec-cftc-ruling.
- **Cluster signal badge:** "GUIDE · MINING · PoW" outlined in amber — explicit cluster-tag for visual classification across feed lineups.
- **Trademark hygiene:** *no third-party logos, no brand glyphs, no manufacturer names*. Verified zero matches in the SVG source for `bitmain|microbt|canaan|antminer|whatsminer|avalon|coinbase|binance|kraken|fidelity|jpmorgan` (regex via grep -ciE). The Bitcoin symbol (₿) is a unicode codepoint (U+20BF, BITCOIN SIGN) added to Unicode in 2017 and is not a trademark of any entity. "ASIC" is a generic technical term (Application-Specific Integrated Circuit), not a trademark.
- **Branding:** `degen0x.com` bottom-right at 14px, color `#fbbf24` (amber-400) at 0.9 opacity. Brand-mark color follows the cluster-accent-color convention now established across all 5 ships (BUIDL=cyan, scam=red, eth-etf=violet, regulation=teal, **mining=amber**).

### Smoke checks (verified via shell)

1. ✅ File exists at expected URL path (`public/og-bitcoin-mining-profitability-guide-2026.svg`)
2. ✅ Page references resolve — `grep -c "og-bitcoin-mining-profitability-guide-2026.svg" src/app/learn/bitcoin-mining-profitability-guide-2026/page.tsx` → **2**
3. ✅ No remaining `.png` references — `grep -c "og-bitcoin-mining-profitability-guide-2026.png" .../page.tsx` → **0**
4. ✅ Well-formed XML (`xmllint --noout` exits 0)
5. ✅ Dimensions match OG spec (`viewBox="0 0 1200 630"`)
6. ✅ All gradient defs resolve (5 `<linearGradient>` defs declared; all 5 are referenced — `bgGradMining`, `gradAccentMining`, `titleGradMining` (×2 uses), `chipGrad`, `hashrateGlow`)
7. ✅ No trademark / logo (0 matches for any major manufacturer-name or exchange-name regex in the SVG source)
8. ✅ Size in-cluster: 7,573 bytes — largest of the 5 ships (BUIDL 4,703; scam-protection 5,565; eth-etf-staking 4,898; sec-cftc-ruling 6,103; this 7,573). The extra ~1.5KB over sec-cftc accounts for the 15-rect ASIC chip array (45 bezier-vertex equivalents at SVG path level) plus 15 LED-indicator circles. Still well under any sensible OG-asset budget.
9. ✅ Palette distinctness from all 4 prior clusters confirmed (anchor colors `#f7931a #fbbf24 #b45309` appear in zero prior cluster gradients).

`npm run build` was *not* run from this sandbox — full Next.js builds on a 1500+-route site exceed the 45s shell timeout, and this change is two-file: a static SVG asset (zero TS/JSX surface) plus a metadata string-replace (no logic, no imports, no JSX nodes touched). The compile risk surface is zero.

---

## Why this was the highest-leverage candidate this cycle

The Hour 18 standup T2 recommendation gave three options: (1) ship `og-bitcoin-mining-profitability-guide-2026.svg` (new mining cluster), (2) ship `og-clarity-act-crypto-guide-2026.svg` (regulation cluster reinforcement), or (3) batch 3–4 generic-name SVGs (`og-audit.svg`, `og-bridge.svg`, `og-mev.svg`, `og-oracle.svg`). Option 1 was selected because:

1. **New cluster opener is intrinsically more strategic than within-cluster reinforcement.** Hours 14–17 each opened a new cluster (treasury → security → staking → regulation). Continuing the cluster-spread cadence at Hour 18 with mining keeps the empirical case strong: 5 clusters in 5 cycles, all visually distinct, all 1200×630 spec-conformant, all with cluster-distinct palettes. Option 2 (clarity-act, regulation reinforcement) would have been a within-cluster ship and broken that cadence.
2. **Bitcoin is the most-searched-for term on the site historically** (per Hour 17 build-cycle followup roadmap). Its OG-asset gap is among the most-shared-asset gaps on the site. Mining is also the most-visually-distinct Bitcoin sub-cluster (covenants/opcat is more abstract; mining has a directly recognizable industrial visual language: chips, racks, sparklines, halving). Picking mining first opens the cluster with the highest visual-clarity ship; covenants/opcat can follow in a future cycle.
3. **Per-ship leverage is 2 refs not 3, but the cluster-opener-value compensates.** This page lacks a JSON-LD article block (only openGraph + twitter), so the leverage is intrinsically capped at 2. Per-ship-leverage maximalism would have favored option 2 (clarity-act has 3 refs), but cluster-opener-value strictly dominates here. Option 3 (batch generic-name SVGs) would have unblocked 3–4 single-ref each but at the cost of cluster diversification (the generic SVGs would have all settled into a within-cluster aesthetic).
4. **Cluster-distinct palette discipline is now battle-tested across 5 clusters.** Each new cluster forces a deliberate palette choice that doesn't overlap any prior cluster. After 5 successful cluster opens (treasury → security → staking → regulation → mining), the discipline is proven; the next 13 slug-specific OG gaps in the queue can each be slotted into known clusters or new clusters with confidence.

Option 2 (clarity-act, regulation cluster reinforcement) is preserved as a future-cycle candidate — it would re-use sec-cftc-ruling's slate-blue/teal/ledger-green palette and reinforce the regulation cluster as a 2-asset within-cluster set. Useful when the regulation cluster gets a third entry (e.g., another rule/legislation page) — at that point the within-cluster reinforcement helps rather than dilutes.

Option 3 (batch generic-name SVGs) is preserved for the longest-tail residue. The current 13-asset slug-specific gap list (down from 14 after sec-cftc-ruling, no further reduction this cycle since the bitcoin-mining SVG already existed in some form) plus the 12-asset generic-name gap list are independent backlogs; batching is the right call for the generic-name set when their leverage profiles cluster and depth-of-cluster is no longer the constraint.

---

## What this means for cluster topology + roadmap

After this ship, the site has **5 cluster-distinct OG cards** (treasury / security / staking / regulation / **mining**) plus the legacy generic OG library. Suggested next-cluster candidates, in priority order:

1. **Bitcoin layer-2/protocol cluster (covenants/opcat)** — `og-bitcoin-covenants-opcat-guide-2026.png` is in the gap list with **3-ref leverage** (page has structured-data image block). Natural continuation of the Bitcoin cluster — covenants is the canonical Bitcoin Layer-2 / Bitcoin scripting topic, distinct from mining at the visual layer (could use a "Bitcoin script / opcode / lightning channel" motif language). Could re-use the mining cluster palette for visual reinforcement, OR open a sub-cluster with a darker amber + bitcoin-orange + electric-blue accent (to signal "protocol / programmable money" rather than "industrial / hardware").
2. **L2 / scaling cluster** — `og-cross-chain-interoperability-guide-2026.png` (3-ref), `og-decentralized-gpu-compute-guide-2026.png` (3-ref), `og-smart-wallets-guide-2026.png` (3-ref), `og-solana-firedancer-guide-2026.png` (3-ref). Each in a slightly different infra sub-cluster but visually they could share a "modular / layered / blueprint" aesthetic — modular blueprint blue + violet + cyan would be distinct from all 5 prior clusters.
3. **DeFi composability cluster** — `og-defi-composability.svg` (3-ref), `og-defi-insurance.svg` (3-ref), `og-modular.svg` (3-ref), `og-learn-ethereum.svg` (3-ref). The DeFi cluster has 3-ref leverage on each, and the page metadata already references `.svg` paths (purely additive ships, no metadata edits needed). Could batch 3–4 of these in a single commit for high throughput.
4. **Long-tail generic-name SVGs** — `og-audit.svg`, `og-bridge.svg`, `og-mev.svg`, `og-oracle.svg`, `og-dao.svg`, `og-soulbound.svg`, etc. Lowest per-ship leverage but high throughput when batched.

These are sketched here so the next build-cycle (Hour 19, ~19:30Z if the runner fires) has a starting point that matches established discipline.

---

## What did NOT ship this cycle

- No data changes (no `dapps.ts`, no `page-manifest.json`, no `published-pages.ts`, no `news-briefing.json`).
- No incident files filed (none triggered).
- No new pages, no new routes, no new components.
- No PUBLISH_QUEUE changes — that's gated on Plan-B + Hour 17/18 standup T-PROMO-1.
- No code logic changes — only static asset + metadata string edits.
- No `git push` — gated on Plan-B reset, sole outstanding gate per Hour 16/17/18 standup conclusions.

---

## Lock contention this cycle

`.git/HEAD.lock` was checked at session start — none present (Hour 18 standup at 18:14Z left a clean state). No lock dance required this cycle. Adds one data point against the "stale locks always surface" frame: Hour 16 was lock-free, Hour 17 had HEAD.lock, Hour 18 publish-deploy had both, this Hour 18 build-cycle is lock-free. Pattern: stale locks correlate with prior-cycle commit timing, not constant.

---

## Forward log entries (this cycle)

```
ops/deploys.log:        +1 entry (build-cycle Hour 18 SVG rewrite + page metadata edit)
ops/hourly-log.csv:     +1 row (Hour 18 build-cycle)
ops/build-cycle/2026-04-26T18-30Z-bitcoin-mining-og-shipped.md: this file
public/og-bitcoin-mining-profitability-guide-2026.svg: rewritten (mining cluster palette)
src/app/learn/bitcoin-mining-profitability-guide-2026/page.tsx: 2-line metadata edit (.png → .svg)
```

---

## Cherry-pick allowlist (post-cycle)

Now **9 entries** (+1 from Hour 18 standup's 8-entry allowlist):
1. `98771ac74` — design polish original
2. `cdea9186f` — BUIDL guide (Jefe, Hour 14)
3. `4cd3c808d` — BUIDL OG SVG (build-cycle Hour 14)
4. `e1d4854ba` — scam-protection OG SVG (build-cycle Hour 15)
5. `c84af990c` — BUIDL design polish (Jefe, Hour 15)
6. `bbf107b94` — eth-etf-staking OG SVG (build-cycle Hour 16)
7. `3fe76c51d` — sec-cftc-ruling OG SVG (build-cycle Hour 17)
8. `5ee551e37` — sec-cftc-ruling design polish (Jefe, Hour 17)
9. **this commit** — bitcoin-mining-profitability OG SVG + .png→.svg metadata edit (build-cycle Hour 18)

Cherry-pick order at Plan-B reset = chronological commit order (the list above is already chronological).

---

## One-line return

Hour 18 build-cycle: shipped `public/og-bitcoin-mining-profitability-guide-2026.svg` (7.6KB, 1200×630, mining cluster Bitcoin-orange/amber/copper/graphite palette `#f7931a`→`#b45309`→`#52525b`) + `.png`→`.svg` metadata fix in page.tsx — unblocks 2 OG refs in Bitcoin Mining Profitability page, **5th consecutive build-cycle ship**, runner cadence stable + SLO-eligible, 5 cluster-distinct OG cards now established (treasury+security+staking+regulation+mining), cherry-pick allowlist 9 entries; no push, gated for Plan-B.
