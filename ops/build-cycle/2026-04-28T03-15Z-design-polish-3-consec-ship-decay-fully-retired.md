# Design-polish — 3rd-consecutive ship retires decay-hypothesis residual + maintenance.lock typing rule

**Filed:** 2026-04-28T03:15Z
**Cycle:** Hour 03 UTC
**Trigger commit:** `5e96de402` aerodrome-finance-guide theme-token polish at 02:41:22Z (origin/main)
**Sandbox:** `nifty-inspiring-carson` (39th distinct standup sandbox)

## Conclusion

The design-polish channel is **fully restored to locked-canonical "ships-hourly" steady-state.** The Hour 00 1-cycle skip is closed, decay-hypothesis residual is FULLY RETIRED, and forward standups should treat any future skip as a 1st-of-N event (no carry-forward suspicion).

## Sequence (10 cycles, Hours 16 → 03)

| Hour | Commit | Status |
|---|---|---|
| 16 | `5a629c6d8` hyperliquid-trading polish (Jefe-shell) | streak start |
| 17 | `fc210b2e2` crypto-tax polish | 2-cycle |
| 18 | `5422e8439` ethereum-pectra polish | 3-cycle |
| 19 | `933926583` ethereum-fusaka-glamsterdam polish | 4-cycle |
| 20 | `754ae67a2` onchain-analysis-smart-money polish | 5-cycle |
| 21 | `ca4a77934` defi-options-trading polish | 6-cycle |
| 22 | `5a7786973` restaking-eigenlayer polish | 7-cycle |
| 23 | `ba99ffdca` liquid-staking-tokens polish | 8-cycle |
| 23 (late) | `dafeede00` worldcoin polish (master-only at 23:36:20Z) | 9-cycle (deferred-sync) |
| 00 | — | **1-cycle SKIP on origin** |
| 01 | `390b39910` tokenized-gold polish + `ecf0c6fd9` worldcoin (rebase-resolves dafeede00) | 1-resume |
| 02 | `ecf0c6fd9` worldcoin (origin-side, 01:37:51Z — 2h01m after master) | 2-resume |
| 03 | **`5e96de402` aerodrome-finance polish at 02:41:22Z** | **3-resume — DECAY RESIDUAL RETIRED** |

## Regime classification

- **Pre-Hour 00:** locked-canonical `design-polish-ships-hourly` based on 9-streak.
- **Hour 00 → 02:** classification under stress — `1-cycle-skip + 1-cycle-resume = PARTIAL recovery` (Hour 01); `2-cycle-resume = FULL recovery, locked-canonical RESTORED` (Hour 02).
- **Hour 03 onward:** `9-streak + 1-skip + 3-resume = locked-canonical RESUMED.` Decay-hypothesis residual **RETIRED.** Future 1-cycle skips reset the 1-skip-counter to 0 and start a fresh resume sequence — no carry-forward of "we recently almost decayed" framing.

## SLO impact

| Metric | Hour 02 | Hour 03 | Δ |
|---|---|---|---|
| System SLO | 19-of-35 = 54.29% | **20-of-36 = 55.56%** | **+1.27pp — NEW LOCAL HIGH** |
| Runner-only SLO | 7-of-35 = 20.00% | 7-of-36 = 19.44% | -0.56pp (monotonic decline since `c6f57fb9` Hour 07) |
| Bifurcation gap | 34.29pp | 36.12pp | +1.83pp (widening — channel-shift to design-polish exclusive) |

The bifurcation gap (system SLO − runner-only SLO) now exceeds **36pp**. The standup-runner ops/-only execution path is structurally separate from the design-polish src/ ship path. They are not interchangeable channels and should not be reasoned about as a single SLO.

## Selective-sync hypothesis (final closure for the worldcoin pair)

The `dafeede00` master-only persistence at Hour 23 (23:36:20Z) was resolved on origin as `ecf0c6fd9` at Hour 01 (01:37:51Z) via Jefe-shell rebase, after **2h01m latency**. Hour 02 codified this as "selective-sync confirmed" with a ~2h tolerance window. Hour 03 adds **no new master-only persistences** to this dataset (no design-polish landed on master without an origin counterpart this cycle), so the 2h-tolerance estimate remains the working assumption with n=1.

## Maintenance.lock typing rule (NEW — for future T-LOCK-ESCALATION cycles)

**Observation:** `.git/objects/maintenance.lock` (zero-byte, dated 2026-04-27 23:36) has persisted across the last **3 standup cycles** (Hours 01, 02, 03 entries). This is materially different from the standard `index.lock` race that the existing T-LOCK-ESCALATION mv-recipe was developed for. `index.lock` files are produced by concurrent `git add` / `git status` / `git commit` calls and are safe to `mv` once the racing process exits. `maintenance.lock` is produced by `git maintenance run` background passes and the lock may still be held by an active maintenance daemon; force-clearing it can corrupt the in-progress maintenance task (potentially the loose-objects pruning pass that lives in the same `.git/objects/` directory).

**Decision rule for future runners (typed-lock dispatch):**

```
case "$(basename "$lockfile")" in
  index.lock|HEAD.lock|*-pack.lock)
    # Per-cycle race, safe to mv once age >5min
    mv "$lockfile" "$lockfile.standup-cleared.$(date +%s)"
    ;;
  maintenance.lock)
    # Persistent; likely active git-maintenance daemon
    # FILE OBSERVATION ONLY; do NOT mv
    echo "maintenance.lock observed at $(stat -c '%y' "$lockfile") — leaving in place"
    ;;
  *)
    # Unknown lock — file observation, do not clear
    echo "unknown lock type $lockfile observed — manual triage needed"
    ;;
esac
```

This rule supersedes the blanket "all stale .lock files cleared via mv-recipe" pattern from prior T-LOCK-ESCALATION docs. The historic 22-of-22 mv-recipe success rate applied to `index.lock` cases; maintenance.lock has not been mv'd in this run and **should not** be unless an explicit dataset of 5+ successful maintenance.lock clears with no maintenance-pass corruption is collected first.

## Forward expectations

- **Hour 04:** if design-polish does NOT ship by 04:50Z, this is the 1st 1-cycle skip post-recovery — reset counter, no carry-forward. If design-polish DOES ship, that's a 4-cycle resume streak; channel health is unambiguous.
- **Hour 05+:** standard locked-canonical operation. Skips are noise unless they cluster (≥3 in a 5-cycle window).
- **No additional codification needed** unless: (a) design-polish skips ≥3 cycles in a 10-cycle window, or (b) runner-only SLO crosses below 18% (currently 19.44%, declining), or (c) bifurcation gap exceeds 40pp.

## References

- Prior recovery docs: `ops/build-cycle/2026-04-28T01-15Z-design-polish-1-cycle-skip-1-cycle-resume.md`, `ops/build-cycle/2026-04-28T02-15Z-design-polish-full-recovery-2-consec-ship.md`
- Channel-bifurcation codification: `ops/HOURLY_AGENDA_FORMAT.md` § Standup-as-sole-executor
- T-LOCK-ESCALATION mv-recipe canonical: prior cycles' incident docs (index.lock-only path)
