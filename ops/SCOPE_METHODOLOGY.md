# Broken-Link Scope Methodology

**Adopted:** 2026-04-27T03:14Z (Hour 03 UTC) — per `ops/incidents/2026-04-27T02-59Z-broken-internal-links-published-scope-undercount.md`.
**Applies to:** all eod-qa cycles and standup KPI rollups from Hour 03 forward.
**Supersedes:** the prior "repo-wide 17/7" surface count documented in Hour 20–02 incidents and agendas, which was an undercount by ~6×.

## The canonical scope: PUBLISHED-only

The SEO-impactful surface for broken internal `/learn/<slug>` references is the set of pages whose middleware allows Google to index them — i.e., pages where `src/lib/published-pages.ts isPublished()` returns `true`, so the response carries no `X-Robots-Tag: noindex` header. This is **the only scope that maps to actual link-equity loss / soft-404 risk** when Plan-B reset clears the noindex gate.

**Current scope (as of Hour 03 eod-qa 02:59Z recount):**

| Scope | Pages | Broken refs | Use |
| --- | --- | --- | --- |
| Spec-narrow (top-10 trafficked) | 4 | 9 | Legacy; do not use as primary count. |
| Prior "repo-wide" claim (Hours 20–02) | 7 | 17 | Undercount; do not use. |
| **Actual repo-wide (recount this cycle)** | **56** | **119** | Useful for total-debt visibility. |
| **PUBLISHED-only (canonical, SEO-impactful)** | **50** | **107** | **Use this in agendas + KPI rollups.** |

## Recount recipe

Reproducible from any standup or eod-qa runner inside the sandbox:

```bash
cd /sessions/<session>/mnt/Degen0x

# 1. Enumerate the PUBLISHED set from the source of truth.
node -e '
  const { getPublishedSlugs } = require("./src/lib/published-pages");
  const slugs = getPublishedSlugs();
  process.stdout.write(slugs.join("\n") + "\n");
' > /tmp/published-slugs.txt

# 2. For each PUBLISHED page, grep all /learn/<slug> hrefs out of its page.tsx.
> /tmp/all-refs.txt
while IFS= read -r slug; do
  page="src/app/learn/$slug/page.tsx"
  [ -f "$page" ] || continue
  grep -oE 'href="/learn/[a-z0-9-]+"' "$page" \
    | sed -E 's/href="\/learn\/([a-z0-9-]+)"/'"$slug"' \1/' \
    >> /tmp/all-refs.txt
done < /tmp/published-slugs.txt

# 3. Mark refs as broken when target dir does not exist under src/app/learn/.
> /tmp/broken-refs.txt
while read -r src tgt; do
  [ -d "src/app/learn/$tgt" ] || echo "$src -> $tgt" >> /tmp/broken-refs.txt
done < /tmp/all-refs.txt

# 4. Roll up.
echo "Broken refs (PUBLISHED-only): $(wc -l < /tmp/broken-refs.txt)"
echo "Distinct PUBLISHED pages with broken refs: $(awk '{print $1}' /tmp/broken-refs.txt | sort -u | wc -l)"
```

The PUBLISHED slug list is not committed under `ops/` because it is derived from `src/lib/published-pages.ts` (source of truth). Re-derive on each run.

## What this changes

- **eod-qa filings** report `<broken-refs> / <PUBLISHED-pages>` as the headline number; repo-wide may appear as a secondary line for total-debt awareness.
- **Standup §KPI snapshot** rolls the PUBLISHED-only count under "Open broken-link surface (PUBLISHED)"; the repo-wide count is optional context.
- **Strip-task scoping** uses 107/50 as the surface to cost-account against, not 17/7. Prior down-shift logic ("6 of 17 = 35%") is invalidated; correct framing is "6 of 107 = 5.6%."
- **Stub-the-target leverage** becomes more attractive: creating one missing target dir (e.g., `/learn/zero-knowledge-proofs-guide`) unblocks N broken refs across all callers in a single edit, with zero per-page changes. Top candidates (all confirmed missing this cycle): `zero-knowledge-proofs-guide`, `common-crypto-scams`, `defi-for-beginners`, `cross-chain-bridges-guide-2026`, `restaking-guide`, `bitcoin-etf-guide`.

## Why prior cycles undercounted

The phrasing "every `href="/learn/<slug>"` in `src/app/**/page.tsx` resolved against the actual `/learn/<slug>` directory inventory" was used in Hour 20–23 incident filings, but the actual implementation crawled a narrower subset of pages (likely an early scoping that filtered before the recount in 02:59Z eod-qa was applied). The repo state has not changed materially since `53359ca77` (Hour 21); the prior count was an undercount, not a regression.

## Cross-references

- Incident: `ops/incidents/2026-04-27T02-59Z-broken-internal-links-published-scope-undercount.md` (P1, OPEN).
- Format spec: `ops/HOURLY_AGENDA_FORMAT.md` § Incidents (broken-link scope) — link to this file.
- Source of truth for PUBLISHED set: `src/lib/published-pages.ts`.

---

# Pre-flight measurement: origin/main, never local master

**Adopted:** 2026-04-27T08:14Z (Hour 08 UTC) — codifies the Hour 07 methodology-correction (`ops/incidents/2026-04-27T07-18Z-methodology-correction-origin-vs-master.md`) and the Hour 08 follow-up phantom (T-SEO-MINING-JSONLD).

## The rule

**Any pre-flight check on src-side state — JSON-LD counts, schema markup, indexable-pages enumeration, broken-link surfaces, OG image presence — MUST be performed against `origin/main`, not against the working tree or local master.**

Vercel deploys from `origin/main`. The standup runner's local master is frozen behind a 21-entry cherry-pick allowlist (`+66/-44` divergence as of Hour 08) under the Plan-B reset gate. Measuring local master describes a synthetic state no user ever sees.

## Recipe

```bash
# Right way — measure what Vercel serves:
git show origin/main:src/app/learn/<slug>/page.tsx | grep -c 'application/ld+json'

# Wrong way — measures Plan-B-frozen synthetic state:
grep -c 'application/ld+json' src/app/learn/<slug>/page.tsx
```

For multi-file enumerations, use `git ls-tree origin/main -- <path>` and `git show origin/main:<file>` together.

## The phantom-incident pattern (why this rule exists)

This run produced **two phantom P1/P3 incidents** before the rule was codified, both caused by working-tree-vs-origin measurement:

1. **T-SEO-COVENANTS-JSONLD** — tracked as P1 OPEN for ~10 hours (Hour 22 → Hour 06). Origin had the JSON-LD landed in `bade67113` since Hour 20-21. Vercel always served the resolved page. Zero user impact for the entire window.
2. **T-SEO-MINING-JSONLD** — opened P3 at Hour 07 (`f80f12d50` "remove duplicate JSON-LD" appeared to take count to 0). Resolved benign at the 07:59Z eod-qa: origin actually has 4 ld+json blocks on `bitcoin-mining-profitability-guide-2026`. Hour 07's measurement caught an intermediate state during the active design-polish stream; subsequent commit `c6f57fb9e` (07:47Z) removed only a duplicate, leaving 4 intact.

Both phantoms were artifacts of the same mechanism: the design-polish stream (`degen-design-polish@degen0x.local` identity) ships small, fast, sequential edits to single src files; if a runner samples a single intermediate commit it can describe a transient state that never reached production.

## Re-trigger criterion (when to escalate measurement)

A measurement against `origin/main` is canonical for one cycle. If a future cycle observes drift on the same metric:

- **First drift:** record the new value, do not file an incident yet (could be another intermediate state of the design-polish stream).
- **Second consecutive drift in the same direction:** file an incident.
- **Drift back to baseline within one cycle:** document as benign-transient under the design-polish stream; no incident.

This pattern protects against the runner-vs-design-polish-stream sampling-rate mismatch.

## Cross-references

- Incident: `ops/incidents/2026-04-27T07-18Z-methodology-correction-origin-vs-master.md` (P1 RESOLVED RETRO, codification record).
- Format spec: `ops/HOURLY_AGENDA_FORMAT.md` § Incidents (pre-flight) — link to this section.
- Source of truth for served state: `origin/main` (always, never local master).
