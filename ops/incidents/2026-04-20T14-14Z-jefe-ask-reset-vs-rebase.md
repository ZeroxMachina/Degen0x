---
incident_id: 2026-04-20T14-14Z-jefe-ask-reset-vs-rebase
severity: P0 — DECISION REQUIRED
status: OPEN — awaiting Jefe
opened_at: 2026-04-20T14:14Z
carry_forward: 6 hours (first queued 2026-04-20T08:14Z / Hour 10)
runner: degen-morning-standup (fallback-filed; build-cycle runner missing — see 2026-04-20T14-14Z-missing-build-cycle-runner.md)
---

# JEFE ASK — Reset-vs-rebase for the diverged local master

## The one-line question

**Approve Option (a): hard-reset local master → origin/main, then cherry-pick `98771ac7` only? Or choose (b): rebase all seven local-only code commits onto origin/main?**

Recommendation: **Option (a).** Rationale in §Recommendation. Shovel-ready exec plan in §If-approved.

---

## Situation in three sentences

1. Local master is **+11 / −57** vs `origin/main`. Of the 11 local-only commits, **only one carries code (`98771ac7` — Liquid Glass polish for `AuthorAttribution` + `RelatedContent`)**; the other 10 are ops-docs (standups, incidents, design reviews).
2. Cherry-picking `98771ac7` onto fresh origin/main has a 3-file mechanical conflict (confirmed by Hour 12 manual-diff dry-run in `ops/incidents/2026-04-20T12-14Z-cherry-pick-dry-run.md` — `git worktree add` was EPERM-blocked, diff-analysis substituted and gave equivalent output). All three conflicts are LOW-risk and resolvable by taking the local side with a two-line editorial adjustment (see §Conflict Details).
3. The reconcile has been gated for six hours on this decision. Every hour costs one more hour of **sitemap 8 days stale** (now worsening to 9d if not reshipped today), **1,019 promoted URLs unknown to Google**, and compounding branch drift from this runner's standup commits.

---

## The 11 local-only commits (supersession map)

| # | SHA | Type | Survives reset? | Notes |
|---|---|---|---|---|
| 1 | `98771ac7` | **code** | cherry-pick onto new base | Liquid Glass polish — the only carrier of product value. 3-file conflict expected (mechanical). |
| 2 | `5f2b355e` | code | **already on origin** | Phase 0 ramp-to-8 + 914-page promote. Present on origin (verified in Hour 11 delta review). Do not cherry-pick. |
| 3 | `4ebe5909` | data | **already on origin** | briefing-2026-04-17-10. Superseded by origin's 72 newer briefings. |
| 4 | `9b63adb7` | code | **already on origin** | `generateHowToSchema`. Present on origin. |
| 5 | `90b92015` | n/a | doc-only | Ops doc; not in scope. |
| 6 | `bd7c43be` | ops | doc-only | Hour 09 standup. Archive value only. |
| 7 | `a60ae27d` | ops | doc-only | Hour 10 standup. |
| 8 | `ee56b68e` | ops | doc-only | Hour 11 standup. |
| 9 | `d9186f86` | ops | doc-only | Hour 12 standup. |
| 10 | `c76ead06` | ops | doc-only | Hour 12 design QA + dry-run. **Contains load-bearing analysis docs — confirm preservation via `git stash` or archive-to-ops before reset.** |
| 11 | `d937e0d1` | ops | doc-only | Hour 13 standup. |

**Bottom line:** the "loss" under Option (a) is 10 ops-docs, all of which are preserved in `ops/` (not in `src/`) and therefore unaffected by a master reset. Zero product code is lost. Only `98771ac7` needs a cherry-pick.

---

## Conflict Details (from Hour 12 dry-run, file-by-file)

From `ops/incidents/2026-04-20T12-14Z-cherry-pick-dry-run.md` §Conflict Details — verbatim summary:

**File 1: `src/components/AuthorAttribution.tsx`**
- Conflict type: mechanical (import block re-ordered on origin between `98771ac7`'s base and current origin/main)
- Resolution: take local (`98771ac7`) version — it has the Liquid Glass styling we want; just reconcile imports
- Risk: LOW

**File 2: `src/components/RelatedContent.tsx`**
- Conflict type: mechanical (identical import-block drift)
- Resolution: take local; reconcile imports
- Risk: LOW

**File 3: `src/components/ui/Section.tsx`**
- Conflict type: semantic-adjacent (a `className` prop default changed on origin from `"py-8"` to `"py-10"`; local also touched this line for Liquid Glass padding adjustment to `"py-12"`)
- Resolution: take local (`"py-12"`) — the Liquid Glass spec spec's the 12-unit padding; origin's `py-10` was an unrelated incremental bump
- Risk: LOW — cosmetic; post-merge visual smoke covers `/learn/what-is-blockchain` and 9 other URLs per `ops/design/2026-04-20T13-14Z-post-reconcile-smoke-matrix.md`

**Ops-level risk:** None beyond the above; no database, schema, or API-contract changes are touched. Post-merge QA covered by Hour 12's checklist + Hour 13's smoke matrix.

---

## Recommendation: Option (a)

**Why (a) over (b):**
- **Smaller surface area.** (a) replays one commit. (b) replays seven (of which four are already on origin in some form), multiplying resolution work 7x with no added value. Five of seven are ops-docs that belong in history only.
- **Lower conflict risk.** (a) has the three LOW conflicts pinned above. (b) compounds those with conflicts from the duplicate `5f2b355e` / `9b63adb7` commits (they already landed on origin under different SHAs — rebase will ask to resolve "already applied" loops).
- **Ops docs don't belong on master.** They live in `ops/` already. Rebasing them adds nothing and bloats history.
- **Dry-run validates.** Hour 12's manual-diff dry-run ran (a)'s path and confirmed the 3-conflict set. (b) has no dry-run.

**Cost of waiting a 7th hour:**
- Sitemap 9 days stale tomorrow (vs 8 today).
- ~1,019 URLs remain orphaned from Google's index. Indexation rate stuck at 32.7%.
- This runner's branch will be +12 / −58 by Hour 15 (mechanical).
- SEO compliance **scored flat at 6.91 for 3 days**. Codemods to raise it to ≥8.5 are reconciliation-gated.

---

## If-approved: shovel-ready exec plan (Option a)

Once Jefe approves, Hour-N standup (or build-cycle if restored) runs:

```bash
# 1. Safety — archive current local HEAD as a dated tag, just in case
cd /sessions/*/mnt/Degen0x
git tag archive/local-master-pre-reset-$(date -u +%Y%m%dT%H%MZ) HEAD

# 2. Fetch and reset
git fetch origin
git reset --hard origin/main

# 3. Cherry-pick the one code commit
git cherry-pick 98771ac7
# — resolve 3 conflicts per §Conflict Details above (take local on all three)
git add src/components/AuthorAttribution.tsx src/components/RelatedContent.tsx src/components/ui/Section.tsx
git cherry-pick --continue

# 4. Push
git push origin main

# 5. Smoke — run the 10-URL matrix from ops/design/2026-04-20T13-14Z-post-reconcile-smoke-matrix.md
#    Visual regressions → revert cherry-pick and reopen this doc.
```

If `.git/index.lock` blocks any step: `mv .git/index.lock .git/index.lock.stale.$(date +%s)` once, retry once, no loop. If still EPERM: stop, file another incident, do not force.

---

## If approved as Option (b) instead

Rebase plan would be:

```bash
git fetch origin
git rebase origin/main
# — resolve 3 conflicts on 98771ac7 per above
# — skip 5f2b355e, 4ebe5909, 9b63adb7 as `--skip` (already on origin)
# — three ops-doc commits will replay cleanly or be dropped at Jefe's direction
git push origin main --force-with-lease
```

Additional risk: the `--force-with-lease` push is required (ops-doc commits change SHAs), and force-push to main is flagged by ops guardrail. Not recommended unless explicit reason.

---

## Related questions (please answer inline)

**Q1 — Parallel-runner coordination.** The `9083cb17` runner last wrote to `deploys.log` at 10:58Z (now 3h+ silent). Is it **(a) stood down**, (b) still running silently, or (c) status unknown? If (a), the dual-ledger concern disappears. If (b)/(c), we need coordination before any master-level rewrite.

**Q2 — Runner topology.** Is the `build-cycle` scheduled task actually configured on this runner, or is `degen-morning-standup` the only one? See companion incident `2026-04-20T14-14Z-missing-build-cycle-runner.md` for 24h evidence that only standup + design execute. If build-cycle is missing, the six-hour carry-forward is structural, not negligence — and standup needs to be re-scoped to flat execution (no "assigned to build-cycle" blocks in agendas).

**Q3 — After reconcile lands.** Are the three 2026-04-18 recovery codemods (author-attribution 67.3→95, related-content 44.9→90, methodology-link 10.0→70) cleared to run the moment `98771ac7` is on origin? If yes, we can ship the SEO score back toward 8.5 within 48h of your answer. If gated on further review, say so.

---

## Status field — update on answer

- [ ] **Jefe answered:** (a) | (b) | other (describe)
- [ ] **Parallel runner:** stood down | active | unknown
- [ ] **Runner topology confirmed:** full set registered | standup-only | mixed
- [ ] **Codemods cleared to run post-reconcile:** yes | held | other

When Jefe marks these, close the doc and open a new one for the exec cycle.
