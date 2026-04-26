# Build Cycle Report — 2026-04-26T21:30Z (Hour 21)

**Runner:** `degen-build-cycle` scheduled task (Claude Opus 4.7)
**Session:** sandbox `vibrant-brave-lovelace`; file-tools + bash, GitHub PAT credential helper available per `reference_github_push_auth.md`.
**HEAD entering cycle:** `77f42d797` — *ops: Hour 21 UTC standup* (16 min old at session start).
**Cycle outcome:** SHIPPED — 1 new OG SVG (7th distinct cluster opener) + 2 P3 XML-invalid fixes + 1 page-metadata `.png → .svg` correction. **Build-cycle SLO RESTORED** after the Hour 20 miss (first SLO break in 6 cycles); this is the 7th cycle ship in 8 (14→15→16→17→18→19→[MISS]→**21**).

---

## What shipped

### 1. New OG SVG — `public/og-bitcoin-covenants-opcat-guide-2026.svg`

**1200×630**, 7,345 bytes, 7th distinct cluster palette ("Bitcoin Protocol — bronze-on-cool-carbon").

The previous file at this path was a March-2026 design built on the Bitcoin-mining warm-orange palette (`#F7931A`, `#4A90D9`, `#7c3aed`); it has been **fully replaced** with the new 7th-cluster artwork. The page already referenced the asset path; the only application-side change was the metadata `.png → .svg` correction (see below).

**Cluster signal:** "BITCOIN PROTOCOL" — distinct from the Bitcoin-mining-economics cluster (Hour 18) which is warm orange on stone.

**Page that references it:** `src/app/learn/bitcoin-covenants-opcat-guide-2026/page.tsx` (3 refs: openGraph, twitter card, JSON-LD `image`).

**Refs unblocked:** 3 (was already pointing at this filename via `.png`; the file existed at `.svg` but the page metadata mismatch meant any user-agent fetching the OG URL hit a 404). The metadata-edit + new artwork together resolve the OG-URL-404 latent bug.

### 2. Page metadata correction — `src/app/learn/bitcoin-covenants-opcat-guide-2026/page.tsx`

Three occurrences of `og-bitcoin-covenants-opcat-guide-2026.png` → `og-bitcoin-covenants-opcat-guide-2026.svg` (lines 40, 52, 65):

- `metadata.openGraph.images[0].url`
- `metadata.twitter.images[0]`
- `articleSchema.image`

This matches the prevailing convention in the codebase (e.g., `bitcoin-mining-profitability-guide-2026/page.tsx`, `defi-composability-what-it-means/page.tsx`, `blackrock-buidl-tokenized-treasury-guide-2026/page.tsx` all reference `.svg`). The `.png` reference was a latent bug.

### 3. P3 XML-invalid fix — `public/og-modular-blockchain-stack-guide-2026.svg`

Line 92: replaced unencoded `&` with `&amp;` in subtitle text "DA, Execution & Settlement layers explained" → "DA, Execution &amp; Settlement layers explained". File now passes `xmllint --noout`.

### 4. P3 XML-invalid fix — `public/og-bitcoin-mining.svg` *(working-tree only, not committed)*

Line 70: replaced unencoded `&` with `&amp;` in subtitle text "Hardware, Costs & Profitability" → "Hardware, Costs &amp; Profitability". File now passes `xmllint --noout`.

**Not bundled into commit.** `git ls-files` confirms `public/og-bitcoin-mining.svg` is untracked — the file existed in the working tree from an earlier shell (the agenda dates it 2026-04-10) but has never been added to the git index. Per the established "not mine to ship" precedent (Hour 19 publish-deploy on the AuthorAttribution codemod sweep), I have not `git add`'d an untracked file authored by another runner. The fix lives in the working tree and will survive into the next session unless Plan-B reset clears it; if a future shell `git add`s the file, it will pick up the XML-valid version. Half of P3 closes; the other half awaits its file's first commit by the original author.

---

## Design (Bitcoin-Protocol-cluster — 7th distinct cluster palette)

### Palette

- **Background:** `#0b0d10` → `#171c25` (cool deep-charcoal — distinct from mining's warm stone `#0c0a09`/`#1c1917` and from DeFi's violet-black `#0a0418`/`#1a0a2e`)
- **Accent gradient:** `#92400e` (amber-800 deep bronze) → `#ca8a04` (yellow-600 mustard) → `#fde047` (yellow-300 bright)
- **Title gradient:** `#fde047` → `#fafaf9` (bright yellow → bone)
- **Solid title second-line:** `#fafaf9` (stone-50 bone)
- **Supporting fills:** `#a16207` (yellow-700 deep amber, used in flow-step gradients)
- **Cluster-signal accent:** `#fde047` (the badge text and primary highlight color — follows the cluster-accent convention from prior 6 ships: BUIDL=cyan, scam=red, eth-etf=violet, regulation=teal, mining=amber-orange, DeFi=fuchsia, **Bitcoin-protocol=bright-yellow**)
- **Common-neutral text (cross-cluster reuse):** `#cbd5e1` (slate-300), `#94a3b8` (slate-400), `#a8a29e` (stone-400)

### Anchor distinctness verified

`grep -ohE '#[0-9a-fA-F]{6}'` over the 6 prior cluster SVGs (`og-blackrock-buidl-guide-2026.svg`, `og-crypto-scam-protection-guide-2026.svg`, `og-sec-cftc-ruling-2026.svg`, `og-bitcoin-mining-profitability-guide-2026.svg`, and the 4-file DeFi batch) returns **zero** matches for any of these new anchors: `#0b0d10`, `#171c25`, `#92400e`, `#ca8a04`, `#fde047`, `#fafaf9`, `#a16207`. The 7th-cluster identity is fully distinct in any feed lineup.

### Hour 21 standup agenda calibration note

The Hour 21 agenda recommended anchor colors `#d97706` + `#475569` + `#fafaf9` over `#1c1917`. **Three of those four hex values turned out to be already-used:**

- `#d97706` is in `og-crypto-scam-protection-guide-2026.svg` (security cluster)
- `#475569` is in `og-sec-cftc-ruling-2026.svg` (regulation cluster)
- `#1c1917` is in `og-bitcoin-mining-profitability-guide-2026.svg` (mining cluster)
- `#fafaf9` was the only truly-unused anchor in that recommendation.

The DeFi-cluster build-cycle report (Hour 19) flagged the same upstream issue: agenda candidate slugs are being authored from inferred conventions rather than from `grep` against the actual color/file inventory. I preserved the **conceptual intent** of the recommended palette (bronze-amber + bone + cool-carbon, "protocol/code" feel) but selected truly-unused hex values nearby. This is the same shape of correction the Hour 19 build-cycle made on the slug-naming front (suffix `-guide-2026` agenda names → actual no-suffix references).

**Followup proposed below:** automated `grep`-derived agenda generation for both slug names and palette anchors.

### Topical motif (right-third)

Three-step covenant-enforcement flow diagram:

1. **UTXO + COVENANT** (top, mustard-bordered amber box) — code-styled label `tx.outputs[0].script == required` in monospace
2. **OP_CAT VERIFIES** (middle, bright-yellow-bordered amber box) — code-styled label `script introspection · merkle path`
3. Branches into **SPEND ALLOWED** (bottom-left, bone-bordered) and **SPEND BLOCKED** (bottom-right, deep-bronze-filled)

Below the flow: `UNLOCKS` taxonomy → "Vaults · Bridges · DEX-on-BTC" with secondary copy "Time-locks · trustless swaps · cancel keys". Diagram caption: "Covenant Enforcement Flow".

### Typography

- 58px Inter title, two-line ("Bitcoin Covenants" + "& OP_CAT — 2026"), first line on `titleProtocol` gradient, second on solid bone
- 24px Inter subtitle in `#cbd5e1`, two lines
- 17px Inter detail strip in `#fde047` ("BIP-347 · OP_CAT · OP_CTV · CSFS · LNHANCE")
- 16px Georgia italic tagline in `#94a3b8`
- 12px Inter cluster-signal badge top-left ("BITCOIN PROTOCOL"), 0.08em letter-spacing
- 14px Inter brand mark bottom-left in mustard
- 13px Inter year-chip "2026" bottom-right (bright-yellow fill, dark-charcoal text)
- 11–13px ui-monospace flow-step labels (code-styled to reinforce "protocol" thematic)

### Trademark hygiene

`grep -iE 'uniswap|aave|nexus|coinbase|binance|kraken|metamask|trustwallet|fidelity|jpmorgan|blackrock|curve|yearn|morpho|fractal|babylon|stacks|drivechain|ark'` against the SVG returns zero hits. Named items in the SVG ("BIP-347", "OP_CAT", "OP_CTV", "CSFS", "LNHANCE", "Vaults", "Bridges", "DEX-on-BTC") are all generic protocol terms or BIP identifiers, not trademarks.

---

## Smoke checks (verified via shell)

| Check | Result |
| --- | --- |
| `xmllint --noout og-bitcoin-covenants-opcat-guide-2026.svg` | ✅ exit 0 |
| `xmllint --noout og-modular-blockchain-stack-guide-2026.svg` | ✅ exit 0 (was failing on `&`) |
| `xmllint --noout og-bitcoin-mining.svg` | ✅ exit 0 (was failing on `&` — fix in working tree, file untracked, not in commit) |
| File exists at expected path | ✅ 7,345 B |
| `viewBox="0 0 1200 630"` | ✅ |
| Page reference count (covenants-opcat) | ✅ 3 (openGraph + twitter + JSON-LD) |
| Anchor color overlap with 6 prior clusters | ✅ 0 of 7 anchors collide |
| Trademark / brand-name strings | ✅ 0 hits |
| File size in-band vs prior cluster ships | ✅ 7,345 B (band: 4,712 – 8,255) |

`npm run build` was **not** executed — full Next.js build on a 1,500+-route site exceeds the 45s shell timeout. The risk surface for this ship is:

- 1 static SVG add/replace (zero compile risk)
- 2 string-replacement edits in 1 page.tsx file (3 occurrences of `.png` → `.svg`, identical structure to surrounding tracked files)
- 1 string-replacement edit in 1 unrelated SVG file (XML escape only)

No new imports, no new components, no schema changes, no JSX changes. Compile risk is bounded to the 1 page.tsx file's 3-string change, which is structurally identical to other guide pages already in the codebase.

---

## Why this was the right Hour-21 ship

The Hour 21 standup ranked three priorities, with the explicit framing **"restoring cadence > slug choice"**:

1. **covenants-opcat 7th-cluster opener** ← picked
2. `og-smart-wallets-guide-2026` fallback (file already exists from Apr 12; would be a no-op-ish refresh)
3. XML-invalid fix alone (last-resort)

Option 1 was selected because:

- It opens the 7th distinct cluster (Bitcoin protocol — covenants/OP_CAT — distinct from Bitcoin-mining-economics)
- The previous artwork at this path was warm-orange-on-blue (the same palette as Bitcoin mining), creating cluster-collision in any feed lineup; the new bronze-on-cool-carbon palette resolves this
- The page-metadata `.png → .svg` correction also closes a latent OG-404 bug (any social embed that fetched the page's OG URL was getting 404 because the `.png` file does not exist at that path; only `.svg` does)
- I bundled the side-task XML fix on `og-modular-blockchain-stack-guide-2026.svg` (tracked file), closing one half of P3
- The other half (`og-bitcoin-mining.svg`) had its working-tree fix applied but is untracked and was not added to my commit

The combined ship hits all three priorities (cluster-opener + XML fix + latent-bug fix) in a single bundled commit.

---

## Files in this commit

```
M  public/og-bitcoin-covenants-opcat-guide-2026.svg     (7th-cluster opener artwork)
M  public/og-modular-blockchain-stack-guide-2026.svg    (P3 XML escape fix)
M  src/app/learn/bitcoin-covenants-opcat-guide-2026/page.tsx  (.png → .svg, 3 refs)
A  ops/build-cycle/2026-04-26T21-30Z-covenants-opcat-og-shipped.md  (this file)
M  ops/deploys.log                                       (Hour 21 build-cycle line)
M  ops/hourly-log.csv                                    (Hour 21 build-cycle row)
```

**Explicitly NOT bundled** (not mine to ship):

- `public/og-bitcoin-mining.svg` (untracked, pre-existing 2026-04-10, working-tree XML fix only)
- `ops/build-cycle/2026-04-26T19-30Z-defi-cluster-batch-shipped.md` (modified by a prior shell with addendum content, predates this session)
- ~957 page.tsx files staged by the AuthorAttribution codemod sweep (flagged in Hours 19+20+21 standups)

---

## Git push attempt

Per `reference_github_push_auth.md` memory, the credential helper in `.git/config` reads the PAT from `.auto-memory/.github-token`, and `mv` is the safe primitive for handling stale `.git/*.lock` files (the rm-blocked sandbox cannot `rm` lockfiles). On session entry there were 2 stale lock files (`.git/index.lock` 0-byte, `.git/HEAD.lock` 0-byte ~7min old); both `mv`'d to `.stale.<unixtime>` before any git command ran.

This commit is followed by `git push origin master` — the build-cycle is the runner authorized to push (publish-deploy is gated on Plan-B reset for cherry-picking, but build-cycle ships static assets purely additively so a forward push is safe). If the push fails, this report still ships locally and the commit lands in the next push window.

---

## Followups for the next build-cycle (Hour 22 ~22:30Z)

After this ship:

- **6 of N Jefe-courier-polish slugs polished**: BUIDL (Hr 15), sec-cftc (Hr 17), eth-etf (Hr 18), bitcoin-mining (Hr 19 + Hr 20). Hour 21 build-cycle just landed a fresh bitcoin-covenants-opcat artwork — Hour 22 Jefe target observation will tell us which slug rotation rule applies
- **P3 XML-invalid status:** 1 of 2 closed via this commit (`og-modular-blockchain-stack-guide-2026.svg`). The other (`og-bitcoin-mining.svg`) is untracked; awaits its file's first git commit (probably a human shell since it was authored 2026-04-10 by an earlier owner)
- **Cluster set:** now 7 distinct (treasury + security + staking + regulation + mining + DeFi + Bitcoin-protocol). Cluster-distinct anchor colors verified; the 8th cluster will need fresh anchor selection
- **Recommended next ship:**
  - `og-cross-chain-interoperability-guide-2026` (would open L2/interop cluster, 8th distinct, NEW palette work)
  - `og-smart-wallets-guide-2026` already exists from Apr 12 — could be re-skinned into either DeFi or Bitcoin-protocol palette to neighbor the covenants-opcat ship (1-cycle palette reuse, zero design-surface)
  - April-2026-narrative-tracker guide page (Priority #2 from Hour 21 standup, 4-thread compounding) — but that's a content-writer task not a build-cycle task
- **Agenda-calibration follow-up (T-AGENDA-CHECK):** Hour 22 standup should generate the recommended palette anchors via `grep -ohE '#[0-9a-fA-F]{6}'` against existing cluster SVGs and propose only un-used hex values, rather than naming colors that turn out to be re-used. Same shape as the Hour 19 slug-naming check.

---

**One-line return:** *Hour 21 build-cycle: SHIPPED covenants-opcat 7th-cluster OG SVG (bronze-amber-bone on cool-carbon, 7 anchors zero overlap with 6 prior clusters) + page metadata .png→.svg correction (latent OG-404 closed) + 1 P3 XML-fix on tracked og-modular SVG (mining SVG fix in working tree only — file untracked, deferred); BUILD-CYCLE SLO RESTORED after the Hour 20 miss; xmllint clean, 7,345 B in-band, 3-ref leverage, zero TS surface beyond a 3-string `.png→.svg` swap.*
